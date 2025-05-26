import { mapObjIndexed } from "ramda"
import { isJsonFile, readJsonFile, writeJsonFile } from "./utils"

/**
 * Transforms the given URL by replacing the base URL and path segments according to the provided network.
 * @param inputUrl - The URL to transform.
 * @param network - The network type ("mainnets", "testnets", or "devnets").
 * @returns The transformed URL.
 */
export function replaceUrl(inputUrl: string, network: "mainnets" | "testnets" | "devnets"): string {
  const originalBase = "https://raw.githubusercontent.com/initia-labs/initia-registry/main"
  const networkMap = {
    mainnets: "https://registry.initia.xyz",
    testnets: "https://registry.testnet.initia.xyz",
    devnets: "https://registry.devnet.initia.xyz",
  }

  if (!inputUrl.startsWith(originalBase)) {
    return inputUrl
  }

  const newBase = networkMap[network]
  const remainder = inputUrl.slice(originalBase.length).replace(/^\/+/, "")
  const segments = remainder.split("/")
  const newSegments = segments[0] === "images" ? segments : ["chains", ...segments.slice(1)]
  const newPath = "/" + newSegments.join("/")

  return newBase + newPath
}

// Recursively updates URLs in the given object using the replacer function
function updateUrlsInObject(obj: any, replacer: (url: string) => string): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => updateUrlsInObject(item, replacer))
  }

  if (typeof obj === "object" && obj !== null) {
    return mapObjIndexed((value) => {
      if (
        typeof value === "string" &&
        value.startsWith("https://raw.githubusercontent.com/initia-labs/initia-registry")
      )
        return replacer(value)

      return updateUrlsInObject(value, replacer)
    }, obj)
  }

  return obj
}

// Update URLs
export function updateUrls(filePath: string, replacer: (url: string) => string) {
  if (!isJsonFile(filePath)) return
  const jsonContent = readJsonFile(filePath)
  const modifiedContent = updateUrlsInObject(jsonContent, replacer)
  writeJsonFile(filePath, modifiedContent)
}
