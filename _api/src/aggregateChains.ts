import * as path from "path"
import { ascend, descend, pick, sortWith } from "ramda"
import { Chain } from "@initia/initia-registry-types"
import { readJsonFile, writeJsonFile } from "./utils"

const selectedChainProperties: (keyof Chain)[] = [
  "chain_id",
  "chain_name",
  "pretty_name",
  "description",
  "website",
  "apis",
  "faucets",
  "metadata",
  "bech32_prefix",
]

// Aggregates chain data from all chain.json files in the given directory
export function aggregateChainData(dirs: string[], outputFilePath: string) {
  // Collect all chain.json paths
  const chainJsonPaths = dirs.map((dir) => path.join(dir, "chain.json"))

  // Pick specific properties from each chain.json file
  const chains: Chain[] = chainJsonPaths.map((chainPath) => {
    const jsonContent = readJsonFile(chainPath)
    return pick(selectedChainProperties, jsonContent)
  })

  // Sort chains: layer 1 first, then by op bridge id
  const sortChains = sortWith<Chain>([
    descend((chain) => chain.metadata?.is_l1 || false),
    ascend((chain) => Number(chain.metadata?.op_bridge_id) || Number.MAX_SAFE_INTEGER),
  ])

  writeJsonFile(outputFilePath, sortChains(chains))
}
