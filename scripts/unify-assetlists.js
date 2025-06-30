const fs = require('fs');
const path = require('path');

// Function to read all assetlist.json files from a directory
function readAssetLists(baseDir) {
    const assetsByKey = new Map(); // Use base denom as unique key
    
    const dirs = fs.readdirSync(baseDir).filter(dir => {
        const dirPath = path.join(baseDir, dir);
        return fs.statSync(dirPath).isDirectory() && 
               fs.existsSync(path.join(dirPath, 'assetlist.json'));
    });
    
    dirs.forEach(chainDir => {
        const assetListPath = path.join(baseDir, chainDir, 'assetlist.json');
        const assetList = JSON.parse(fs.readFileSync(assetListPath, 'utf8'));
        const chainName = assetList.chain_name;
        
        assetList.assets.forEach(asset => {
            // Create a unique key based on symbol and name
            const key = `${asset.symbol}_${asset.name}`;
            
            if (!assetsByKey.has(key)) {
                // First occurrence of this asset
                assetsByKey.set(key, {
                    name: asset.name,
                    symbol: asset.symbol,
                    display: asset.display,
                    description: asset.description,
                    denom_units: asset.denom_units,
                    type_asset: asset.type_asset || 'sdk.coin',
                    coingecko_id: asset.coingecko_id || '',
                    images: asset.images || [],
                    logo_URIs: asset.logo_URIs,
                    keywords: asset.keywords || [],
                    chains: {}
                });
            }
            
            const unifiedAsset = assetsByKey.get(key);
            
            // Add chain-specific information
            unifiedAsset.chains[chainName] = {
                chain_name: chainName,
                base: asset.base,
                address: asset.address
            };
            
            // Add traces if present
            if (asset.traces) {
                unifiedAsset.chains[chainName].traces = asset.traces;
            }
            
            // Add legacy IBC info if present
            if (asset.ibc) {
                unifiedAsset.chains[chainName].ibc = asset.ibc;
            }
            
            // Update coingecko_id if not set but this chain has it
            if (!unifiedAsset.coingecko_id && asset.coingecko_id) {
                unifiedAsset.coingecko_id = asset.coingecko_id;
            }
            
            // Merge images if new ones are found
            if (asset.images && asset.images.length > 0) {
                const existingPngs = new Set(unifiedAsset.images.map(img => img.png).filter(Boolean));
                asset.images.forEach(img => {
                    if (img.png && !existingPngs.has(img.png)) {
                        unifiedAsset.images.push(img);
                    }
                });
            }
        });
    });
    
    // Convert Map to array and sort by symbol
    return Array.from(assetsByKey.values()).sort((a, b) => 
        a.symbol.localeCompare(b.symbol)
    );
}

// Main execution
function main() {
    const networks = ['mainnets', 'testnets'];
    
    networks.forEach(network => {
        const networkPath = path.join(__dirname, '..', network);
        
        if (fs.existsSync(networkPath)) {
            console.log(`Processing ${network}...`);
            const unifiedAssets = readAssetLists(networkPath);
            
            // Write unified file
            const outputPath = path.join(__dirname, '..', `unified-${network.slice(0, -1)}-assetlist.json`);
            fs.writeFileSync(
                outputPath,
                JSON.stringify(unifiedAssets, null, 2)
            );
            
            console.log(`Created ${outputPath} with ${unifiedAssets.length} unique assets`);
            
            // Log statistics
            let totalChainEntries = 0;
            unifiedAssets.forEach(asset => {
                totalChainEntries += Object.keys(asset.chains).length;
            });
            console.log(`Total chain-specific entries: ${totalChainEntries}`);
        }
    });
    
    // Also process devnets if exists
    const devnetPath = path.join(__dirname, '..', 'devnets');
    if (fs.existsSync(devnetPath)) {
        console.log('Processing devnets...');
        const unifiedAssets = readAssetLists(devnetPath);
        
        const outputPath = path.join(__dirname, '..', 'unified-devnet-assetlist.json');
        fs.writeFileSync(
            outputPath,
            JSON.stringify(unifiedAssets, null, 2)
        );
        
        console.log(`Created ${outputPath} with ${unifiedAssets.length} unique assets`);
    }
}

// Run the script
main();