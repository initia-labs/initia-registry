import path from "path"
import url from "url"
import fs from "fs-extra"
import { updateUrls, replaceUrl } from "./replaceUrls"
import { aggregateChainData, aggregateProfiles } from "./aggregateChains"
import { traverseFiles } from "./traverseFiles"
import { optimizeImages } from "./optimizeImages"
import { createDeployment } from "./deployment"

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.resolve(__dirname, "../..")
const distDir = path.resolve(__dirname, "../dist")

// Delete the dist directory
fs.removeSync(distDir)

// Copy all files from the network directory to the dist directory
const networkDir = (process.env.NETWORK_DIR || "mainnets") as "mainnets" | "testnets" | "devnets"
const srcChainsDir = path.resolve(srcDir, networkDir)
const distChainsDir = path.resolve(distDir, "chains")
fs.copySync(srcChainsDir, distChainsDir, {
  // Do not copy files starting with an underscore
  filter: (src) => !path.basename(src).startsWith("_"),
})

// Copy the images directory to the dist directory
const srcImagesDir = path.resolve(srcDir, "images")
const distImagesDir = path.resolve(distDir, "images")
fs.copySync(srcImagesDir, distImagesDir)

// Copy the profiles directory to the dist directory
const srcProfilesDir = path.resolve(srcDir, "profiles")
const distProfilesDir = path.resolve(distDir, "profiles")
fs.copySync(srcProfilesDir, distProfilesDir)

// Update URLs in chain.json, assetlist.json and profile.json files
// Example:
// "https://raw.githubusercontent.com/initia-labs/initia-registry/main/initia/images/INIT.png"
// will be replaced with
// "https://registry.initia.xyz/initia/images/INIT.png"
traverseFiles(distChainsDir, (file) => updateUrls(file, (url) => replaceUrl(url, networkDir)))
traverseFiles(distProfilesDir, (file) => updateUrls(file, (url) => replaceUrl(url, networkDir)))

// Aggregate all chains into a single chains.json file
// Only specific properties are included in the aggregation.
// const chainJsonPaths = fs.readdirSync(distChainsDir).map((file) => path.join(dir, file))
// dirs.map((dir) => path.join(dir, "chain.json")).filter(isJsonFile)
const chainJsonPaths = fs.readdirSync(distChainsDir).map((chainDir) => path.join(distChainsDir, chainDir, "chain.json"))
aggregateChainData(chainJsonPaths, path.join(distDir, "chains.json"))

// Aggregate all profiles into a single profiles.json file
const profileJsonPaths = fs.readdirSync(distProfilesDir).map((file) => path.join(distProfilesDir, file))
aggregateProfiles(profileJsonPaths, path.join(distDir, "profiles.json"))

// Optimize images in the directory
optimizeImages(distImagesDir)

// Create a deployment file
createDeployment(path.join(distDir, "deployment.json"))
