const fs = require('fs');
const https = require('https');
const axios = require('axios');
const admin = require('firebase-admin');

async function getFirebaseIdToken() {
    let serviceAccount;
    try {
        serviceAccount = JSON.parse(fs.readFileSync('sa.json'));
    } catch (error) {
        throw new Error('Failed to read service account file');
    }

    const uid = "registry-ci-user";
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    const customToken = await admin.auth().createCustomToken(uid);

    const body = JSON.stringify({
        token: customToken,
        returnSecureToken: true
    });

    const options = {
        method: "POST",
        hostname: "identitytoolkit.googleapis.com",
        path: `/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`,
        headers: {
            "Content-Type": "application/json",
            "Content-Length": body.length
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            let data = "";
            res.on("data", chunk => data += chunk);
            res.on("end", () => {
                try {
                    const parsed = JSON.parse(data);
                    if (!parsed.idToken) return reject(new Error("Failed to get ID token"));
                    resolve(parsed.idToken);
                } catch (error) {
                    reject(new Error("Invalid response from Firebase API"));
                }
            });
        });

        req.on("error", reject);
        req.write(body);
        req.end();
    });
}

async function deployPrivnodes(idToken) {
    const changedFiles = process.env.CHANGED_FILES.trim().split('\n').filter(Boolean);

    const headers = {
        Authorization: `${idToken}`,
        'Content-Type': 'application/json'
    };

    for (const file of changedFiles) {
        if (!fs.existsSync(file)) continue;

        const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
        const chainId = content.chain_id;
        const url = `${process.env.BASE_URL}/v2/admin/deployments/${chainId}`;

        try {
            const res = await axios.get(url, { headers });
            const data = res.data;

            if (!data || Object.keys(data).length === 0) {
                console.log(`[SKIP] ${chainId} not found in ${process.env.REGION}`);
                continue;
            }

            if (data.privnode) {
                console.log(`[SKIP] ${chainId} already has privnode`);
                continue;
            }

            const image = data.minitia?.image?.minitia;
            const p2pPeers = data.peer_infos || [];
            const trustedPeers = p2pPeers.map(p => p.split('@')[0]);
            const baseRegion = data.base_region || process.env.REGION;
            const isMainnet = data.l1_chain_id === "interwoven-1";

            const payload = {
                image: { privnode: image },
                privnode_config: {
                    replicas: 1,
                    rpc_url: `https://sequencer-rpc-${chainId}.anvil.${baseRegion}.initia.xyz`,
                    p2p_peers: p2pPeers,
                    trusted_peer_ids: trustedPeers,
                    state_sync: true,
                    retain_height: "1024000"
                },
                resources: {
                    privnode: {
                        cpu: "4",
                        memory: "8Gi"
                    }
                },
                storage: {
                    privnode: {
                        requests: "50Gi"
                    }
                }
            };

            // use more resources for mainnet deployments
            if (isMainnet) {
                payload.resources.privnode.cpu = "6";
                payload.resources.privnode.memory = "16Gi";
            }

            const postUrl = `${url}/privnode`;
            await axios.post(postUrl, payload, { headers });
            console.log(`[DEPLOYED] ${chainId} privnode deployed in ${process.env.REGION}`);
        } catch (err) {
            if (err.response?.status === 404 || err.response?.data === null) {
                console.log(`[SKIP] ${chainId} not found (404/null)`);
            } else {
                console.error(`[ERROR] ${chainId}: `, err.message);
            }
        }
    }
}

(async () => {
    try {
        const idToken = await getFirebaseIdToken();
        await deployPrivnodes(idToken);
    } catch (err) {
        console.error('[FATAL ERROR]', err);
        process.exit(1);
    }
})();
