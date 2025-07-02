import path from "path"
import fs from "fs-extra"
import { readJsonFile, writeJsonFile } from "./utils/file"
import { Chain } from "@initia/initia-registry-types"
import { Profile } from "./types"

/** 
 * Properties to keep when creating the aggregated chains file
 * Excludes sensitive or unnecessary properties for public consumption
 */
const CHAIN_PROPERTIES_TO_KEEP: (keyof Chain)[] = [
  "chain_id",
  "chain_name", 
  "pretty_name",
  "description",
  "website",
  "fees",
  "apis",
  "explorers",
  "faucets",
  "metadata",
  "logo_URIs",
  "slip44",
  "bech32_prefix",
  "network_type",
  "evm_chain_id",
]

/**
 * Aggregates all chain JSON files into a single consolidated chains.json file
 * @param chainsDir - Directory containing individual chain directories
 * @param outputPath - Path where the aggregated chains.json will be written
 */
export async function aggregateChains(chainsDir: string, outputPath: string): Promise<void> {
  const chainDirs = await fs.readdir(chainsDir)
  
  // Process each chain directory in parallel
  const chains = await Promise.all(
    chainDirs.map(async (chainDir) => {
      const chainJsonPath = path.join(chainsDir, chainDir, "chain.json")
      if (await fs.pathExists(chainJsonPath)) {
        const chain = await readJsonFile<Chain>(chainJsonPath)
        // Only keep essential properties for the aggregated file
        return pickProperties(chain, CHAIN_PROPERTIES_TO_KEEP)
      }
      return null
    })
  )
  
  // Filter out nulls and sort by L1 status then name
  const validChains = chains.filter(Boolean) as Chain[]
  const sortedChains = sortChains(validChains)
  
  await writeJsonFile(outputPath, sortedChains)
}

/**
 * Aggregates all profile JSON files into a single consolidated profiles.json file
 * @param profilesDir - Directory containing individual profile JSON files
 * @param outputPath - Path where the aggregated profiles.json will be written
 */
export async function aggregateProfiles(profilesDir: string, outputPath: string): Promise<void> {
  const profileFiles = await fs.readdir(profilesDir)
  
  // Read all JSON profile files in parallel
  const profiles = await Promise.all(
    profileFiles
      .filter(file => file.endsWith(".json"))
      .map(file => readJsonFile<Profile>(path.join(profilesDir, file)))
  )
  
  await writeJsonFile(outputPath, profiles)
}

/**
 * Utility function to pick specific properties from an object
 * @param obj - Source object
 * @param keys - Array of keys to pick from the object
 * @returns New object with only the specified properties
 */
function pickProperties<T extends object>(obj: T, keys: (keyof T)[]): Partial<T> {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key]
    }
    return acc
  }, {} as Partial<T>)
}

/**
 * Sorts chains with L1 chains first, then alphabetically by name
 * @param chains - Array of chain objects to sort
 * @returns Sorted array of chains
 */
function sortChains(chains: Chain[]): Chain[] {
  return chains.sort((a, b) => {
    // Prioritize Layer 1 chains at the top
    const aIsL1 = a.metadata?.is_l1 ?? false
    const bIsL1 = b.metadata?.is_l1 ?? false
    
    if (aIsL1 !== bIsL1) {
      return bIsL1 ? 1 : -1
    }
    
    // Within same L1 status, sort alphabetically by display name
    const aName = a.pretty_name ?? a.chain_name
    const bName = b.pretty_name ?? b.chain_name
    
    return aName.localeCompare(bName)
  })
}