import { writeJsonFile } from "./utils";

export function createDeployment(outputFilePath: string) {
  writeJsonFile(outputFilePath, {
    timestamp: Date.now(),
  });
}
