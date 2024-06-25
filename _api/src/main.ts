/**
 * Step 1: Update URLs in chain.json and assetlist.json files
 * Example:
 * "https://raw.githubusercontent.com/initia-labs/initia-registry/main/initia/images/INIT.png"
 * will be replaced with
 * "https://registry.initia.xyz/initia/images/INIT.png"
 *
 * Step 2: Aggregate all chains into a single chains.json file
 * Only specific properties are included in the aggregation.
 *
 * Step 3: Optimize images in the directory
 */

import * as path from "path"
import { copyDirectory, deleteDirectory, getFilePathsInDirectory } from "./utils"
import { updateUrlsInDirectory, createUrlReplacer } from "./replaceUrls"
import { aggregateChainData } from "./aggregateChains"
import { optimizeImages } from "./optimizeImages"

const rootDir = process.env.ROOT_DIR || ""
const srcDir = path.resolve(__dirname, "../..", rootDir)
const distDir = path.resolve(__dirname, "../dist")

deleteDirectory(distDir)
copyDirectory(srcDir, distDir, { excludes: ["testnets", "devnets", new RegExp("\\."), new RegExp("^_")] })

const dirs = getFilePathsInDirectory(distDir)

/* Step 1 */ updateUrlsInDirectory(dirs, createUrlReplacer(rootDir))
/* Step 2 */ aggregateChainData(dirs, path.join(distDir, "chains.json"))
/* Step 3 */ optimizeImages(distDir)
