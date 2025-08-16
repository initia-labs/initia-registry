# Initia Registry API

TypeScript-based build system that transforms blockchain chain metadata, asset lists, and profiles into an optimized format for API consumption. It handles data aggregation, URL transformation, and image optimization.

## Installation

```bash
git clone https://github.com/initia-labs/initia-registry.git
cd initia-registry/_api
pnpm i
```

## Configuration

```bash
pnpm build                       # Build for mainnet (default)
NETWORK_DIR=testnets pnpm build  # Build for testnet
```

The built files will be generated in the `dist/` directory.

### The build process performs:

1. Copies chain data from the network directory to `dist`
2. Transforms GitHub raw URLs to `registry.initia.xyz` URLs
3. Aggregates all `chain.json` files into `chains.json`
4. Aggregates all `profile.json` files into `profiles.json`
5. Optimizes images using `Sharp` compression
6. Generates `deployment.json` with timestamp metadata

## Project Structure

```
src/
├── main.ts              # Main build orchestrator
├── replaceUrls.ts       # GitHub to registry URL conversion
├── aggregateChains.ts   # Aggregates chain.json files
├── traverseFiles.ts     # File system traversal utilities
├── optimizeImages.ts    # Image compression and optimization
├── deployment.ts        # Generates deployment metadata
└── utils.ts             # Shared utility functions
```
