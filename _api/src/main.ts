import { getConfig, getBuildPaths } from "./config"
import { copyDirectory, removeDirectory, readJsonFile, writeJsonFile } from "./utils/file"
import { updateUrlsInDirectory } from "./url-replacer"
import { aggregateChains, aggregateProfiles } from "./aggregators"
import { createDeploymentInfo } from "./deployment"
import path from "path"

/**
 * Main build function that processes the Initia registry files
 * Handles cleaning, copying, URL replacement, aggregation, and optimization
 */
async function main() {
  const config = getConfig()
  const paths = getBuildPaths(config)
  
  console.log(`Building registry for ${config.networkType}...`)
  
  try {
    // Clean the distribution directory to start fresh
    await removeDirectory(config.distDir)
    
    // Copy chain directories while filtering out internal files (starting with underscore)
    await copyDirectory(paths.srcChainsDir, paths.distChainsDir, (src) => {
      const basename = path.basename(src)
      return !basename.startsWith("_")
    })
    
    // Copy static assets (images and profiles) to distribution directory
    await copyDirectory(paths.srcImagesDir, paths.distImagesDir)
    await copyDirectory(paths.srcProfilesDir, paths.distProfilesDir)
    
    // Replace placeholder URLs with actual base URLs in all JSON files
    await updateUrlsInDirectory(paths.distChainsDir, config)
    await updateUrlsInDirectory(paths.distProfilesDir, config)
    
    // Generate consolidated chain and profile files for easier consumption
    await aggregateChains(paths.distChainsDir, path.join(config.distDir, "chains.json"))
    await aggregateProfiles(paths.distProfilesDir, path.join(config.distDir, "profiles.json"))
    
    // Conditionally optimize images to reduce file sizes (dynamic import to avoid loading issues)
    if (!config.skipImageOptimization) {
      const { optimizeImagesInDirectory } = await import("./image-optimizer")
      await optimizeImagesInDirectory(paths.distImagesDir)
    }
    
    // Generate deployment metadata for tracking build information
    await createDeploymentInfo(path.join(config.distDir, "deployment.json"))
    
    console.log("Build completed successfully!")
  } catch (error) {
    console.error("Build failed:", error)
    process.exit(1)
  }
}

main()