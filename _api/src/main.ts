import * as path from "path"
import * as url from "url"
import { copyDirectory, deleteDirectory, getFilePathsInDirectory } from "./utils"
import { updateUrlsInDirectory, createUrlReplacer } from "./replaceUrls"
import { aggregateChainData, aggregateProfiles } from "./aggregateChains"
import { optimizeImages } from "./optimizeImages"

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = process.env.NETWORK_DIR || "mainnets"
const srcDir = path.resolve(__dirname, "../..", rootDir)
const distDir = path.resolve(__dirname, "../dist")

deleteDirectory(distDir)
copyDirectory(srcDir, distDir, {
  excludes: ["mainnets", "testnets", "devnets", "rehearsal", new RegExp("\\."), new RegExp("^_")],
})

const dirs = getFilePathsInDirectory(distDir)

/**
 * Update URLs in chain.json and assetlist.json files
 *
 * Example:
 * "https://raw.githubusercontent.com/initia-labs/initia-registry/main/initia/images/INIT.png"
 * will be replaced with
 * "https://registry.initia.xyz/initia/images/INIT.png"
 */
updateUrlsInDirectory(dirs, createUrlReplacer(rootDir))

/**
 * Aggregate all chains into a single chains.json file
 * Only specific properties are included in the aggregation.
 */
aggregateChainData(dirs, path.join(distDir, "chains.json"))

/** Aggregate all profiles into a single profiles.json file */
aggregateProfiles(dirs, path.join(distDir, "profiles.json"))

/** Optimize images in the directory */
optimizeImages(distDir)
