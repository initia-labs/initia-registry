import path from "path"
import { readJsonFile, writeJsonFile } from "./utils/file"
import { UnifiedAsset, ChainAssetInfo } from "./types"
import { AssetList, Asset } from "@initia/initia-registry-types"

/**
 * Processes a unified asset list and distributes assets to their respective chain directories
 * @param unifiedAssetlistPath - Path to the unified asset list JSON file
 * @param distChainsDir - Directory containing chain folders where assetlist.json files will be written
 */
export async function processUnifiedAssetlist(
  unifiedAssetlistPath: string, 
  distChainsDir: string
): Promise<void> {
  const unifiedAssets = await readJsonFile<UnifiedAsset[]>(unifiedAssetlistPath)
  const assetsByChain = groupAssetsByChain(unifiedAssets)
  
  // Write asset lists to each chain directory in parallel
  await Promise.all(
    Array.from(assetsByChain.entries()).map(([chainName, assets]) =>
      writeChainAssetlist(chainName, assets, distChainsDir)
    )
  )
}

/**
 * Groups unified assets by their chain names, converting them to chain-specific assets
 * @param unifiedAssets - Array of unified assets containing multi-chain information
 * @returns Map of chain names to their respective asset arrays
 */
function groupAssetsByChain(unifiedAssets: UnifiedAsset[]): Map<string, Asset[]> {
  const assetsByChain = new Map<string, Asset[]>()
  
  // Process each unified asset and distribute to relevant chains
  for (const unifiedAsset of unifiedAssets) {
    for (const [chainName, chainInfo] of Object.entries(unifiedAsset.chains)) {
      if (!assetsByChain.has(chainName)) {
        assetsByChain.set(chainName, [])
      }
      
      // Convert unified asset to chain-specific asset format
      const chainAsset = createChainAsset(unifiedAsset, chainInfo)
      assetsByChain.get(chainName)!.push(chainAsset)
    }
  }
  
  return assetsByChain
}

/**
 * Creates a chain-specific asset from a unified asset and chain information
 * @param unifiedAsset - The unified asset containing common information
 * @param chainInfo - Chain-specific information for this asset
 * @returns Chain-specific asset object
 */
function createChainAsset(unifiedAsset: UnifiedAsset, chainInfo: ChainAssetInfo): Asset {
  // Update denomination units to use chain-specific base denomination
  const denom_units = unifiedAsset.denom_units.map(unit => 
    unit.exponent === 0 ? { ...unit, denom: chainInfo.base } : unit
  )
  
  const asset: Asset = {
    description: unifiedAsset.description,
    denom_units,
    base: chainInfo.base,
    display: unifiedAsset.display,
    name: unifiedAsset.name,
    symbol: unifiedAsset.symbol,
    coingecko_id: unifiedAsset.coingecko_id,
    images: unifiedAsset.images,
    logo_URIs: unifiedAsset.logo_URIs,
  }
  
  // Add optional fields if they exist
  if (unifiedAsset.type_asset) asset.type_asset = unifiedAsset.type_asset
  if (unifiedAsset.keywords?.length) asset.keywords = unifiedAsset.keywords
  if (chainInfo.address) asset.address = chainInfo.address
  if (chainInfo.traces) asset.traces = chainInfo.traces
  
  return asset
}

/**
 * Writes an asset list to a specific chain's directory
 * @param chainName - Name of the chain
 * @param assets - Array of assets for this chain
 * @param distChainsDir - Base directory containing chain folders
 */
async function writeChainAssetlist(
  chainName: string, 
  assets: Asset[], 
  distChainsDir: string
): Promise<void> {
  const chainDir = path.join(distChainsDir, chainName)
  const assetlistPath = path.join(chainDir, "assetlist.json")
  
  // Only write asset list if the chain directory exists (chain is valid)
  if (await fs.pathExists(chainDir)) {
    const assetlist: AssetList = {
      "$schema": "../../assetlist.schema.json",
      chain_name: chainName,
      assets
    }
    
    await writeJsonFile(assetlistPath, assetlist)
  }
}

// Import fs-extra for file system operations
import fs from "fs-extra"