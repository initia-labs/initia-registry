import fs from "fs-extra"
import * as path from "path"

// Get file size in bytes
export function getFileSize(filePath: string): number {
  return fs.statSync(filePath).size
}

// Checks if the given path is a directory
export function isDirectory(filePath: string): boolean {
  return fs.statSync(filePath).isDirectory()
}

// Reads a JSON file and returns its content as an object
export function readJsonFile(filePath: string): any {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

// Writes the given data object to a JSON file
export function writeJsonFile(filePath: string, data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

// Checks if the given file is a JSON file
export function isJsonFile(filePath: string): boolean {
  try {
    readJsonFile(filePath)
    return true
  } catch {
    return false
  }
}
