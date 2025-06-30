import path from "path"
import fs from "fs-extra"
import { readJsonFile, writeJsonFile, isJsonFile } from "./utils/file"
import { Config } from "./types"

/** Regular expression to match GitHub raw URLs that need to be replaced */
const GITHUB_RAW_URL_PATTERN = /https:\/\/raw\.githubusercontent\.com\/initia-labs\/initia-registry\/main\//g

/**
 * Recursively updates GitHub raw URLs in all JSON files within a directory
 * @param directory - Directory to process recursively
 * @param config - Configuration containing the base URL to replace with
 */
export async function updateUrlsInDirectory(directory: string, config: Config): Promise<void> {
  const items = await fs.readdir(directory, { withFileTypes: true })
  
  // Process all items in parallel
  await Promise.all(
    items.map(async (item) => {
      const itemPath = path.join(directory, item.name)
      
      if (item.isDirectory()) {
        // Recursively process subdirectories
        await updateUrlsInDirectory(itemPath, config)
      } else if (isJsonFile(itemPath)) {
        // Update URLs in JSON files
        await updateUrlsInFile(itemPath, config)
      }
    })
  )
}

/**
 * Updates URLs in a single JSON file by replacing GitHub raw URLs with base URL
 * @param filePath - Path to the JSON file to process
 * @param config - Configuration containing the base URL
 */
async function updateUrlsInFile(filePath: string, config: Config): Promise<void> {
  try {
    const content = await readJsonFile(filePath)
    const updatedContent = replaceUrlsInObject(content, config)
    await writeJsonFile(filePath, updatedContent)
  } catch (error) {
    console.warn(`Failed to update URLs in ${filePath}:`, error)
  }
}

/**
 * Recursively replaces URLs in an object, handling strings, arrays, and nested objects
 * @param obj - Object to process (can be string, array, or object)
 * @param config - Configuration containing the base URL
 * @returns Object with URLs replaced
 */
function replaceUrlsInObject(obj: any, config: Config): any {
  // Handle string values - replace GitHub raw URLs
  if (typeof obj === "string") {
    return obj.replace(GITHUB_RAW_URL_PATTERN, `${config.baseUrl}/`)
  }
  
  // Handle arrays - recursively process each element
  if (Array.isArray(obj)) {
    return obj.map(item => replaceUrlsInObject(item, config))
  }
  
  // Handle objects - recursively process each property
  if (obj && typeof obj === "object") {
    const result: any = {}
    for (const [key, value] of Object.entries(obj)) {
      result[key] = replaceUrlsInObject(value, config)
    }
    return result
  }
  
  return obj
}