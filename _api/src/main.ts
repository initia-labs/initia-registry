/**
 * Main script for processing network registry files.
 * 
 * The process consists of three steps:
 * 1. Updating URLs in chain.json and assetlist.json files.
 *    Example transformation:
 *    - From: https://raw.githubusercontent.com/initia-labs/initia-registry/main/initia/images/INIT.png
 *    - To: https://registry.initia.xyz/initia/images/INIT.png
 *
 * 2. Aggregating all chain.json files into a single chains.json file.
 *    Only specific properties from each chain are included.
 *
 * 3. Optimizing images in the directory.
 */

import * as path from "path";
import * as url from "url";
import { copyDirectory, deleteDirectory, getFilePathsInDirectory } from "./utils";
import { updateUrlsInDirectory, createUrlReplacer } from "./replaceUrls";
import { aggregateChainData } from "./aggregateChains";
import { optimizeImages } from "./optimizeImages";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root network directory, can be overridden via an environment variable
const rootDir: string = process.env.NETWORK_DIR || "";
const srcDir: string = path.resolve(__dirname, "../..", rootDir);
const distDir: string = path.resolve(__dirname, "../dist");

// Cleaning and copying the directory, excluding test and service files
deleteDirectory(distDir);
copyDirectory(srcDir, distDir, { 
  excludes: [
    "testnets",
    "devnets",
    new RegExp("\\."),
    new RegExp("^_")
  ] 
});

const dirs = getFilePathsInDirectory(distDir);

/* Step 1: Updating URLs */ 
updateUrlsInDirectory(dirs, createUrlReplacer(rootDir));

/* Step 2: Aggregating chain data */ 
aggregateChainData(dirs, path.join(distDir, "chains.json"));

/* Step 3: Optimizing images */ 
optimizeImages(distDir);
