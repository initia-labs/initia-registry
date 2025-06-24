import { AssetList, Chain, Asset } from "@initia/initia-registry-types"

/** Supported network types for the registry build */
export type NetworkType = "mainnets" | "testnets" | "devnets"

/** Main configuration interface for the build process */
export interface Config {
  /** Source directory containing registry data */
  srcDir: string
  /** Distribution directory for build output */
  distDir: string
  /** Type of network being built (mainnet, testnet, devnet) */
  networkType: NetworkType
  /** Base URL for hosted registry assets */
  baseUrl: string
  /** Whether to skip image optimization during build */
  skipImageOptimization?: boolean
}

/** 
 * Extended asset type that includes multi-chain information
 * Omits the 'base' field from the original Asset type since it's handled per-chain
 */
export interface UnifiedAsset extends Omit<Asset, "base"> {
  /** Map of chain names to their specific asset information */
  chains: {
    [chainName: string]: ChainAssetInfo
  }
}

/** Information about an asset on a specific chain */
export interface ChainAssetInfo {
  /** Name of the chain this asset exists on */
  chain_name: string
  /** Base denomination of the asset on this chain */
  base: string
  /** Optional contract address for token assets */
  address?: string
  /** Optional trace information for cross-chain assets */
  traces?: Asset["traces"]
}

/** All file paths used during the build process */
export interface BuildPaths {
  /** Source directory containing chain data */
  srcChainsDir: string
  /** Destination directory for chain data */
  distChainsDir: string
  /** Source directory containing images */
  srcImagesDir: string
  /** Destination directory for images */
  distImagesDir: string
  /** Source directory containing profile data */
  srcProfilesDir: string
  /** Destination directory for profile data */
  distProfilesDir: string
  /** Path to the unified asset list file */
  unifiedAssetlistPath: string
}

/** Profile information for chains or projects */
export interface Profile {
  /** Display name of the project/chain */
  name: string
  /** Symbol or ticker */
  symbol: string
  /** Optional Twitter handle */
  twitter?: string
  /** Optional website URL */
  website?: string
  /** Allow additional properties for extensibility */
  [key: string]: any
}