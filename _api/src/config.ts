import path from "path"
import { fileURLToPath } from "url"
import { Config, NetworkType } from "./types"

// ES module compatibility - get current file directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Gets the build configuration from environment variables and defaults
 * @returns Configuration object with all build settings
 */
export function getConfig(): Config {
  // Get network type from environment or default to mainnets
  const networkType = (process.env.NETWORK_DIR || "mainnets") as NetworkType
  // Get base URL from environment or use default registry URL
  const baseUrl = process.env.BASE_URL || "https://registry.initia.xyz"
  
  return {
    srcDir: path.resolve(__dirname, "../.."), // Project root directory
    distDir: path.resolve(__dirname, "../dist"), // Build output directory
    networkType,
    baseUrl,
    skipImageOptimization: process.env.SKIP_IMAGE_OPTIMIZATION !== "true"
  }
}

/**
 * Generates all file paths needed for the build process based on configuration
 * @param config - Build configuration object
 * @returns Object containing all source and destination paths
 */
export function getBuildPaths(config: Config) {
  const { srcDir, distDir, networkType } = config
  
  return {
    srcChainsDir: path.join(srcDir, networkType),
    distChainsDir: path.join(distDir, "chains"),
    srcImagesDir: path.join(srcDir, "images"),
    distImagesDir: path.join(distDir, "images"),
    srcProfilesDir: path.join(srcDir, "profiles"),
    distProfilesDir: path.join(distDir, "profiles"),
    unifiedAssetlistPath: path.join(srcDir, networkType, "assetlist.json")
  }
}