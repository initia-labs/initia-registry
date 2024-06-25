import * as fs from "fs"
import * as path from "path"
import chalk from "chalk"
import { v4 as uuidv4 } from "uuid"
import sharp from "sharp"
import { optimize } from "svgo"
import { getFilePathsInDirectory, getFileSize, isDirectory } from "./utils"

// Constants for image size limits
const SVG_SIZE_LIMIT = 5 * 1024 // 5KB
const PNG_SIZE_LIMIT = 50 * 1024 // 50KB
const PNG_MAX_HEIGHT = 256 // 256px

// Image file extensions to optimize
const imageExtensions = [".png", ".svg"]

// Optimize images in the directory
export async function optimizeImages(dir: string) {
  const files = getFilePathsInDirectory(dir)

  for (const file of files) {
    if (isDirectory(file)) {
      await optimizeImages(file)
      continue
    }

    const ext = path.extname(file).toLowerCase()
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
    const relativePath = path.relative(dir, file)
    console.log(`Optimized ${relativePath}: ${originalSize} bytes -> ${newSize} bytes`)

    if (ext === ".svg" && newSize > SVG_SIZE_LIMIT) {
      console.warn(chalk.yellow(`Deleting oversized SVG: ${relativePath}`))
      fs.unlinkSync(file)
    }

    if (ext === ".png" && newSize > PNG_SIZE_LIMIT) {
      console.warn(chalk.yellow(`Deleting oversized PNG: ${relativePath}`))
      fs.unlinkSync(file)
    }
  }
}

// Optimize PNG file
async function optimizePng(filePath: string) {
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
  fs.renameSync(tempFilePath, filePath)
}

// Optimize SVG file
function optimizeSvg(filePath: string) {
  const data = fs.readFileSync(filePath, "utf8")
  const result = optimize(data, { path: filePath })
  fs.writeFileSync(filePath, result.data)
}
