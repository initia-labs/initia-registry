import { mapObjIndexed, replace } from "ramda"
import escapeRegExp from "lodash/fp/escapeRegExp"
import { getFilePathsInDirectory, isDirectory, readJsonFile, writeJsonFile } from "./utils"

// Creates a URL replacer function based on the given network type
// Note: For mainnets, rootDir should be an empty string.
export function createUrlReplacer(rootDir: string) {
  const baseUrls: Record<string, string> = {
    mainnets: "https://registry.initia.xyz",
    testnets: "https://registry.testnet.initia.xyz",
    devnets: "https://registry.devnet.initia.xyz",
    rehearsal: "https://registry.rehearsal.initia.xyz",
  }

  const regex = new RegExp(
    escapeRegExp(`https:\/\/raw\.githubusercontent\.com\/initia-labs\/initia-registry\/main\/${rootDir}`)
  )
  const baseUrl = baseUrls[rootDir || "mainnets"]
  return replace(regex, baseUrl)
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

// Recursively processes all JSON files in the given directory, updating their URLs
export function updateUrlsInDirectory(dirs: string[], replacer: (url: string) => string) {
  for (const dir of dirs) {
    for (const filePath of getFilePathsInDirectory(dir)) {
      if (isDirectory(filePath)) continue // Skip `images` directory
      const jsonContent = readJsonFile(filePath)
      const modifiedContent = updateUrlsInObject(jsonContent, replacer)
      writeJsonFile(filePath, modifiedContent)
    }
  }
}
