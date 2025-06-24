import path from "path"
import fs from "fs-extra"
import sharp from "sharp"
import { optimize } from "svgo"

/**
 * Optimizes all images in a directory (PNG and SVG files)
 * @param imagesDir - Directory containing images to optimize
 */
export async function optimizeImagesInDirectory(imagesDir: string): Promise<void> {
  try {
    const files = await fs.readdir(imagesDir)
    
    // Process all image files in parallel
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(imagesDir, file)
        const ext = path.extname(file).toLowerCase()
        
        // Optimize based on file type
        if (ext === ".png") {
          await optimizePng(filePath)
        } else if (ext === ".svg") {
          await optimizeSvg(filePath)
        }
      })
    )
    
    console.log(`Optimized ${files.length} images`)
  } catch (error) {
    console.warn("Image optimization failed:", error)
  }
}

/**
 * Optimizes a PNG image by resizing and compressing
 * @param filePath - Path to the PNG file to optimize
 */
async function optimizePng(filePath: string): Promise<void> {
  try {
    const buffer = await sharp(filePath)
      .png({ quality: 80, compressionLevel: 9 }) // High compression
      .resize({ width: 512, height: 512, fit: "inside", withoutEnlargement: true }) // Max 512x512
      .toBuffer()
    
    await fs.writeFile(filePath, buffer)
  } catch (error) {
    console.warn(`Failed to optimize PNG ${filePath}:`, error)
  }
}

/**
 * Optimizes an SVG image by removing unnecessary elements and attributes
 * @param filePath - Path to the SVG file to optimize
 */
async function optimizeSvg(filePath: string): Promise<void> {
  try {
    const svgContent = await fs.readFile(filePath, "utf8")
    const result = optimize(svgContent, { path: filePath }) // Use SVGO for optimization
    
    // Write optimized content if successful
    if (result.data) {
      await fs.writeFile(filePath, result.data)
    }
  } catch (error) {
    console.warn(`Failed to optimize SVG ${filePath}:`, error)
  }
}