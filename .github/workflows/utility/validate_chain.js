const fs = require('fs');
const path = require('path');
const { keccak256 } = require('ethers');
const { validateRawGithubContent } = require('./validate_githubcontent');

const changedFile = process.argv[2];
const baseFile = process.argv[3];

const folderName = path.basename(path.dirname(changedFile));

async function validate() {
  // file deleted
  if (!fs.existsSync(changedFile)) {
    return;
  }
  const oldChainJson = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
  const newChainJson = JSON.parse(fs.readFileSync(changedFile, 'utf8'));
  const restUri = newChainJson.apis.rest[0].address;

  // Validate folder name
  if (newChainJson.chain_name !== folderName) {
    throw new Error('Chain name must be same with folder name');
  }

  // Validate Chain id
  if (newChainJson.chain_id !== oldChainJson.chain_id) {
    const res = await fetch(
      new URL('/cosmos/base/tendermint/v1beta1/node_info', restUri),
    );
    const data = await res.json();
    const chainId = data.default_node_info.network;
    if (chainId !== newChainJson.chain_id) {
      throw new Error('Chain id mismatch');
    }
  }

  // Validate EVM chain id
  if (newChainJson.evm_chain_id) {
    const chainId = newChainJson.chain_id;
    const evmChainId = convertCosmosChainIDToEthereumChainID(chainId);
    if (newChainJson.evm_chain_id !== evmChainId) {
      throw new Error('EVM Chain id mismatch');
    }
  }

  // Validate images
  for (const image of newChainJson.images ?? []) {
    if (image.png) {
      validateRawGithubContent(image.png, true);
    }
  }

  if (newChainJson.logo_URIs?.png) {
    validateRawGithubContent(newChainJson.logo_URIs.png, true);
  }

  // Validate assetlist
  if (newChainJson?.metadata?.assetlist) {
    validateRawGithubContent(newChainJson.metadata.assetlist, false);
  }
}

function convertCosmosChainIDToEthereumChainID(chainID) {
  // Compute Keccak-256 hash
  const hashHex = keccak256(new TextEncoder().encode(chainID));
  const first16Hex = hashHex.substring(0, 18);

  // Parse as BigInt (big-endian)
  const bigIntValue = BigInt(first16Hex);

  // Modulo with Metamask Max
  const metamaskMax = BigInt(4503599627370476);
  return Number(bigIntValue % metamaskMax);
}

validate();
