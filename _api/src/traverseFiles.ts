import fs from "fs-extra"
import path from "path"
import { isDirectory } from "./utils"

/**
 * Recursively traverses through all files in the given folder and executes the provided callback function on each file.
 *
 * @param folderPath - The path of the folder to traverse.
 * @param callback - A function to be executed on each file.
 */
export function traverseFiles(folderPath: string, callback: (filePath: string) => void) {
  const entries = fs.readdirSync(folderPath)

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry)

    if (isDirectory(fullPath)) {
      // If the entry is a directory, recursively traverse it
      traverseFiles(fullPath, callback)
    } else {
      // Execute the callback only for files
      callback(fullPath)
    }
  }
}
