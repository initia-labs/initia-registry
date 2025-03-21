import { ascend, descend, pick, sortWith } from "ramda"
import { Chain } from "@initia/initia-registry-types"
import { readJsonFile, writeJsonFile } from "./utils"

const selectedChainProperties: (keyof Chain)[] = [
  "chain_id",
  "chain_name",
  "pretty_name",
  "description",
  "website",
  "fees",
  "apis",
  "faucets",
  "metadata",
  "logo_URIs",
  "slip44",
  "bech32_prefix",
  "network_type",
  "evm_chain_id",
]

// Aggregates chain data from all chain.json files in the given directory
export function aggregateChainData(chainJsonPaths: string[], outputFilePath: string) {
  // Pick specific properties from each chain.json file
  const chains: Chain[] = chainJsonPaths.map((chainPath) => {
    const jsonContent = readJsonFile(chainPath)
    return pick(selectedChainProperties, jsonContent)
  })

  // Sort chains: layer 1 first, then by op bridge id
  const sortChains = sortWith<Chain>([
    descend((chain) => chain.metadata?.is_l1 || false),
    ascend((chain) => chain.pretty_name ?? chain.chain_name),
  ])

  writeJsonFile(outputFilePath, sortChains(chains))
}

export function aggregateProfiles(profileJsonPaths: string[], outputFilePath: string) {
  // Read all profile.json files
  const profiles = profileJsonPaths.map((profilePath) => readJsonFile(profilePath))

  writeJsonFile(outputFilePath, profiles)
}
