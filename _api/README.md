# Chain Registry Deployment Scripts

### Overview

This repository contains scripts to deploy static files from the `_api/dist` directory. The scripts perform the following tasks:

1. Copy original files to the `dist` directory.
2. Update URLs in `chain.json` and `assetlist.json` files.
3. Aggregate `chain.json` files into a single `chains.json` file by extracting specific properties.

### Usage

Set the `ROOT_DIR` environment variable to specify the network type (e.g., `testnets`, `devnets`).

Run the script:

```sh
pnpm build
```

or

```sh
ROOT_DIR=testnets pnpm build
```
