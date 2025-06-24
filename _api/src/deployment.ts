import { writeJsonFile } from "./utils/file"

/** Information about the current build/deployment */
interface DeploymentInfo {
  /** ISO timestamp of when the build was created */
  timestamp: string
  /** Version number from environment or default */
  version: string
  /** Unique identifier for this build */
  build_id: string
}

/**
 * Creates a deployment information file with build metadata
 * @param outputPath - Path where deployment.json will be written
 */
export async function createDeploymentInfo(outputPath: string): Promise<void> {
  const deploymentInfo: DeploymentInfo = {
    timestamp: new Date().toISOString(),
    version: process.env.VERSION || "1.0.0", // Use env version or fallback
    build_id: process.env.BUILD_ID || generateBuildId() // Use env build ID or generate one
  }
  
  await writeJsonFile(outputPath, deploymentInfo)
}

/**
 * Generates a unique build ID using timestamp and random string
 * @returns Unique build identifier
 */
function generateBuildId(): string {
  return `build-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}