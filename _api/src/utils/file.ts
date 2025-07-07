import fs from "fs-extra"
import path from "path"

/**
 * Reads and parses a JSON file
 * @param filePath - Path to the JSON file to read
 * @returns Parsed JSON content
 */
export async function readJsonFile<T = any>(filePath: string): Promise<T> {
  try {
    return await fs.readJson(filePath)
  } catch (error) {
    throw new Error(`Failed to read JSON file ${filePath}: ${error}`)
  }
}

/**
 * Writes data to a JSON file with pretty formatting
 * @param filePath - Path where the JSON file will be written
 * @param data - Data to serialize and write
 */
export async function writeJsonFile(filePath: string, data: any): Promise<void> {
  try {
    await fs.ensureDir(path.dirname(filePath)) // Ensure parent directory exists
    await fs.writeJson(filePath, data, { spaces: 2 }) // Pretty format with 2 spaces
  } catch (error) {
    throw new Error(`Failed to write JSON file ${filePath}: ${error}`)
  }
}

/**
 * Checks if a file path has a .json extension
 * @param filePath - File path to check
 * @returns True if the file has a .json extension
 */
export function isJsonFile(filePath: string): boolean {
  return path.extname(filePath).toLowerCase() === ".json"
}

/**
 * Copies a directory from source to destination with optional filtering
 * @param src - Source directory path
 * @param dest - Destination directory path
 * @param filter - Optional filter function to exclude certain files/directories
 */
export async function copyDirectory(src: string, dest: string, filter?: (src: string) => boolean): Promise<void> {
  try {
    await fs.copy(src, dest, { filter })
  } catch (error) {
    throw new Error(`Failed to copy directory ${src} to ${dest}: ${error}`)
  }
}

/**
 * Removes a directory and all its contents
 * @param dir - Directory path to remove
 */
export async function removeDirectory(dir: string): Promise<void> {
  try {
    await fs.remove(dir)
  } catch (error) {
    throw new Error(`Failed to remove directory ${dir}: ${error}`)
  }
}

/**
 * Ensures a directory exists, creating it if necessary
 * @param dir - Directory path to ensure exists
 */
export async function ensureDirectory(dir: string): Promise<void> {
  try {
    await fs.ensureDir(dir)
  } catch (error) {
    throw new Error(`Failed to ensure directory ${dir}: ${error}`)
  }
}