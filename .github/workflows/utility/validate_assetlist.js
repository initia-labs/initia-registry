const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const { Interface, JsonRpcProvider } = require('ethers');
const { validateRawGithubContent } = require('./validate_githubcontent');

const changedFile = process.argv[2];
const baseFile = process.argv[3];

const oldAssetlistJson = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
const newAssetlistJson = JSON.parse(fs.readFileSync(changedFile, 'utf8'));
const folderName = path.basename(path.dirname(changedFile));

async function validate() {
  // Validate folder name
  if (newAssetlistJson.chain_name !== folderName) {
    throw new Error('Chain name must be same with folder name');
  }

  const oldAssets = oldAssetlistJson.assets ?? [];

  for (const asset of newAssetlistJson.assets) {
    const base = asset.base;
    const before = oldAssets.find((asset) => asset.base === base);

    // validate images
    if (asset.images) {
      asset.images.map((image) => {
        if (image.png) {
          validateRawGithubContent(image.png, true);
        }
      });
    }

    if (asset.logo_URIs?.png) {
      validateRawGithubContent(asset.logo_URIs?.png, true);
    }

    // check base and display are in denom units
    if (
      asset.denom_units.find((denomUnit) => denomUnit.denom === asset.base) ===
      undefined
    ) {
      throw Error('`base` is not in `denom_units`');
    }

    if (
      asset.denom_units.find(
        (denomUnit) => denomUnit.denom === asset.display,
      ) === undefined
    ) {
      throw Error('`display` is not in `denom_units`');
    }

    // if trace doesn't exists skip validation
    if (asset.traces === undefined || asset.traces.length === 0) continue;
    // if trace doesn't change, skip validation
    if (
      before &&
      JSON.stringify(before.traces) === JSON.stringify(asset.traces)
    )
      continue;

    console.log(`Validating Traces (${asset.base})`);
    let baseDenom = asset.traces[0].counterparty.base_denom;
    console.log(baseDenom);
    for (const trace of asset.traces) {
      const counterpartyDenom = trace.counterparty.base_denom;

      // base denom before is not matched with counterparty base denom
      if (baseDenom !== '' && baseDenom !== counterpartyDenom) {
        throw new Error(
          `Trace mislinked, base denom before(${baseDenom}), counterparty base denom(${counterpartyDenom})`,
        );
      }

      const type = trace.type;
      switch (type) {
        case 'ibc':
        case 'ibc-cw20':
          baseDenom = ibcDenom(trace.chain.path);
          break;
        case 'op':
          baseDenom = opdenom(BigInt(trace.chain.bridge_id), counterpartyDenom);
          break;
        case 'wrapped':
          // only handle deciaml wrapper
          if (trace.provider !== 'Decimal Wrapper') break;
          baseDenom = await getWrappedDenom(
            trace.chain.contract,
            trace.counterparty.chain_name,
            counterpartyDenom,
          );
          break;
        default: // unknown trace
          baseDenom = '';
      }
      console.log(baseDenom);
    }

    // check the trace result
    if (baseDenom !== '' && asset.base !== baseDenom) {
      throw Error(
        `Trace result(${baseDenom}) is not match with base(${asset.base})`,
      );
    }
  }
}

function sha2_256(input) {
  return crypto.createHash('sha256').update(input).digest();
}

// return ibc bridged denom
function ibcDenom(fullTrace) {
  const hex = sha2_256(new TextEncoder().encode(fullTrace))
    .toString('hex')
    .toUpperCase();
  return `ibc/${hex}`;
}

// return u64 big endian
function u64BE(num) {
  const b = be(num);
  return Buffer.from(
    Array(8 - b.length)
      .fill(0)
      .concat(b),
  );
}

// return big endian
function be(num) {
  return num ? be(num >> 8n).concat([Number(num % 256n)]) : [];
}

// return op bridged denom
function opdenom(id, l1Denom) {
  const hash = crypto.createHash('SHA3-256');

  const sum = hash
    .update(Buffer.from([...u64BE(id), ...Buffer.from(l1Denom)]))
    .digest('hex');
  return `l2/${sum}`;
}

async function getWrappedDenom(
  wrapperContract,
  counterpartyChainName,
  counterpartyDenom,
) {
  // get rest and jsonrpc
  const chainJsonPath = path.join(
    changedFile,
    '../../',
    counterpartyChainName,
    'chain.json',
  );

  const chainJson = JSON.parse(fs.readFileSync(chainJsonPath, 'utf8'));

  const restUri = chainJson.apis.rest[0].address;
  const jsonrpcUri = chainJson.apis['json-rpc'][0].address;

  // fectch erc20 contract
  const erc20ContractAddr = counterpartyDenom.startsWith('evm/')
    ? counterpartyDenom.replace('evm/', '0x')
    : await getErc20Contract(restUri, counterpartyDenom);

  // fetch remote or local addresss
  const provider = new JsonRpcProvider(jsonrpcUri);

  // select function
  const func = counterpartyDenom.startsWith('evm/')
    ? 'remoteTokens'
    : 'localTokens';

  // generate input
  const dataInput = [erc20ContractAddr];
  // if function is `localTokens` add remote decimals
  func === 'localTokens' && dataInput.push(6n);

  const abi = new Interface([
    'function remoteTokens(address) view returns (address)',
    'function localTokens(address, uint8) view returns (address)',
  ]);

  const tokenAddr = await provider
    .call({
      from: '0x0000000000000000000000000000000000000000',
      to: wrapperContract,
      data: abi.encodeFunctionData(func, dataInput),
    })
    .then((res) => abi.decodeFunctionResult(func, res)[0]);

  // fetch wrapped/unwrapped token denom
  return getDenom(restUri, tokenAddr);
}

async function getErc20Contract(restUri, denom) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      new URL(`/minievm/evm/v1/contracts/by_denom?denom=${denom}`, restUri),
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.address);
          } catch (error) {
            reject(error);
          }
        });
      },
    );

    req.on('error', reject);
    req.end();
  });
}

async function getDenom(restUri, contractAddr) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      new URL(`/minievm/evm/v1/denoms/${contractAddr}`, restUri),
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed.denom);
          } catch (error) {
            reject(error);
          }
        });
      },
    );

    req.on('error', reject);
    req.end();
  });
}

validate();
