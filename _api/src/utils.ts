import * as fs from "fs"
import * as path from "path"

// Create a folder
export function createDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// Delete a folder
export function deleteDirectory(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true })
  }
}

// Checks if the given path is a directory
export function isDirectory(filePath: string): boolean {
  return fs.statSync(filePath).isDirectory()
}

// Copies the source directory to the destination directory
export function copyDirectory(srcDir: string, distDir: string, { excludes }: { excludes: (string | RegExp)[] }) {
  const srcFolders = fs.readdirSync(srcDir).filter((folder) => {
    return !excludes.some((exclude) => {
      if (typeof exclude === "string") return folder === exclude
      return exclude.test(folder)
    })
  })

  for (const srcFolder of srcFolders) {
    const srcPath = path.join(srcDir, srcFolder)
    const destPath = path.join(distDir, srcFolder)

    if (isDirectory(srcPath)) {
      createDirectory(destPath)
      copyDirectory(srcPath, destPath, { excludes: [new RegExp("^_")] })
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// Returns an array of full paths for all files in the given directory
export function getFilePathsInDirectory(dir: string): string[] {
  return fs.readdirSync(dir).map((file) => path.join(dir, file))
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
