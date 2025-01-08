import { readFileSync, writeFileSync, unlinkSync, renameSync } from 'node:fs'
import { extname, relative } from 'node:path'
import chalk from 'chalk'
import { v4 as uuidv4 } from 'uuid'
import sharp from 'sharp'
import { optimize } from 'svgo'
import { getFilePathsInDirectory, getFileSize, isDirectory } from "./utils"

// Constants for image size limits
const SVG_SIZE_LIMIT = 5 * 1024 // 5KB
const PNG_SIZE_LIMIT = 50 * 1024 // 50KB
const PNG_MAX_HEIGHT = 256 // 256px

// Image file extensions to optimize
const imageExtensions: readonly string[] = [".png", ".svg"] as const

// Optimize images in the directory
export async function optimizeImages(dir: string): Promise<void> {
  const files = getFilePathsInDirectory(dir)

  for (const file of files) {
    if (isDirectory(file)) {
      await optimizeImages(file)
      continue
    }

    const ext = extname(file).toLowerCase()
    if (!imageExtensions.includes(ext)) {
      continue
    }

    const originalSize = getFileSize(file)

    switch (ext) {
      case ".png":
        await optimizePng(file)
        break

      case ".svg":
        optimizeSvg(file)
        break
    }

    const newSize = getFileSize(file)
    const relativePath = relative(dir, file)
    console.log(`Optimized ${relativePath}: ${originalSize} bytes -> ${newSize} bytes`)

    if (ext === ".svg" && newSize > SVG_SIZE_LIMIT) {
      console.warn(chalk.yellow(`Deleting oversized SVG: ${relativePath}`))
      unlinkSync(file)
    }

    if (ext === ".png" && newSize > PNG_SIZE_LIMIT) {
      console.warn(chalk.yellow(`Deleting oversized PNG: ${relativePath}`))
      unlinkSync(file)
    }
  }
}

// Optimize PNG file
async function optimizePng(filePath: string): Promise<void> {
  const image = sharp(filePath)
  const metadata = await image.metadata()

  // Use a temporary file for the output
  const tempFilePath = `${filePath}.${uuidv4()}.tmp`

  if (metadata.height && metadata.height > PNG_MAX_HEIGHT) {
    await image.resize({ height: PNG_MAX_HEIGHT }).toFile(tempFilePath)
  } else {
    const data = await image.toBuffer()
    await sharp(data).toFile(tempFilePath)
  }

  // Replace the original file with the optimized file
  renameSync(tempFilePath, filePath)
}

// Optimize SVG file
function optimizeSvg(filePath: string): void {
  const data = readFileSync(filePath, "utf8")
  const result = optimize(data, { path: filePath })
  writeFileSync(filePath, result.data)
}
