# Initia Registry

The Initia Registry serves as a central repository containing crucial metadata for chains within the Initia ecosystem. 

It houses configuration files such as ```chain.json``` and ```assetlist.json```, which are vital for initiating and interacting with nodes, as well as understanding the available assets on each chain. Additionally, the registry includes ```*.schema.json``` files in the root directory, outlining the recommended metadata structure. These schemas are dynamic, subject to revisions based on evolving user needs, and may include optional fields beyond the current schema specifications.

## Adding Minitia to Initia Registry

1. **Fork the Repository**: Begin by forking the repository where the Initia Registry is hosted.
2. **Add a New Directory**: Create a directory named after the chain you intend to add.
3. **Include Necessary Files**:
- ```chain.json```: Populate this file with the metadata of the chain.
- ```assetlist.json```: Include metadata concerning the assets available on the chain.
- ```initia-minitia.json```: Provide metadata about the IBC connections and channels, ensuring the file name adheres to the alphabetical order of the chain names, e.g., Achain-Bchain.json.
4. **Create a Pull Request**: Submit your modifications for review to merge them into the main repository.

##  ```chain.json```
A sample chain.json includes the following information.
```json
{
  "$schema": "../../chain.schema.json",
  "chain_name": "initia",
  "chain_id": "initiation-1",
  "website": "https://initia.xyz",
  "pretty_name": "Initia",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "init",
  "daemon_name": "initiad",
  "node_home": "$HOME/.initia",
  "key_algos": ["secp256k1"],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uinit",
        "fixed_min_gas_price": 0.15,
        "low_gas_price": 0.15,
        "average_gas_price": 0.15,
        "high_gas_price": 0.4
      },
      {
        "denom": "ueth"
      },
      {
        "denom": "uusdc"
      },
      {
        "denom": "utia"
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uinit"
      },
      {
        "denom": "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d"
      },
      {
        "denom": "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200"
      },
      {
        "denom": "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2"
      }
    ]
  },
  "codebase": {
    "git_repo": "https://github.com/initia-labs/initia",
    "recommended_version": "v0.2.8",
    "compatible_versions": ["v0.2.8"],
    "binaries": {
      "linux/amd64": "https://initia.s3.ap-southeast-1.amazonaws.com/initiation-1/initia_v0.2.8_Linux_x86_64.tar.gz",
      "linux/arm64": "https://initia.s3.ap-southeast-1.amazonaws.com/initiation-1/initia_v0.2.8_Linux_aarch64.tar.gz",
      "darwin/amd64": "https://initia.s3.ap-southeast-1.amazonaws.com/initiation-1/initia_v0.2.8_Darwin_x86_64.tar.gz",
      "darwin/arm64": "https://initia.s3.ap-southeast-1.amazonaws.com/initiation-1/initia_v0.2.8_Darwin_aarch64.tar.gz"
    },
    "genesis": {
      "genesis_url": "https://initia.s3.ap-southeast-1.amazonaws.com/initiation-1/genesis.json"
    },
    "versions": []
  },
  "description": "Initia Testnet",
  "peers": {
    "seeds": [],
    "persistent_peers": []
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.initiation-1.initia.xyz",
        "provider": "Initia Labs"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.initiation-1.initia.xyz",
        "provider": "Initia Labs"
      }
    ],
    "api": [
      {
        "address": "https://api.initiation-1.initia.xyz",
        "provider": "Initia Labs"
      }
    ],
    "grpc": [
      {
        "address": "grpc://35.247.153.122:9090",
        "provider": "Initia Labs"
      }
    ]
  },
  "explorers": [
    {
      "kind": "initia scan",
      "url": "https://scan.testnet.initia.xyz/initiation-1",
      "tx_page": "https://scan.testnet.initia.xyz/initiation-1/txs/${txHash}",
      "account_page": "https://scan.testnet.initia.xyz/initiation-1/accounts/${accountAddress}"
    }
  ],
  "faucets": [
    {
      "kind": "faucet",
      "url": "https://faucet.testnet.initia.xyz/"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
      "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
    "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg"
  },
  "metadata": {
    "is_l1": true,
    "ibc_channels": [
      {
        "chain_id": "minimove-1",
        "port_id": "transfer",
        "channel_id": "channel-0",
        "version": "ics20-1"
      },
      {
        "chain_id": "minimove-1",
        "port_id": "nft-transfer",
        "channel_id": "channel-1",
        "version": "ics721-1"
      },
      {
        "chain_id": "miniwasm-1",
        "port_id": "transfer",
        "channel_id": "channel-4",
        "version": "ics20-1"
      },
      {
        "chain_id": "miniwasm-1",
        "port_id": "nft-transfer",
        "channel_id": "channel-5",
        "version": "ics721-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/assetlist.json"
  }
}
```

## Asset Lists
Asset Lists are inspired by the Token Lists project on Ethereum which helps discoverability of ERC-20 tokens by providing a mapping between ERC-20 contract addresses and their associated metadata.
Asset lists are a similar mechanism to allow frontends and other UIs to fetch metadata associated with Cosmos SDK denoms, especially for assets sent over IBC.
This standard is a work in progress. You'll notice that the format of assets in the ```assetlist.json``` structure is a strict superset json representation of the banktypes.DenomMetadata from the Cosmos SDK. This is purposefully done so that this standard may eventually be migrated into a Cosmos SDK module in the future, so it can be easily maintained on chain instead of on Github.
An example assetlist json contains the following structure:
```json
{
  "$schema": "../../assetlist.schema.json",
  "chain_name": "initia",
  "assets": [
    {
      "description": "The native token of Initia",
      "denom_units": [
        {
          "denom": "uinit",
          "exponent": 0
        },
        {
          "denom": "INIT",
          "exponent": 6
        }
      ],
      "base": "uinit",
      "display": "INIT",
      "name": "Initia Native Token",
      "symbol": "INIT",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg"
      }
    },
    {
      "description": "The fake ETH",
      "denom_units": [
        {
          "denom": "ueth",
          "exponent": 0
        },
        {
          "denom": "ETH",
          "exponent": 6
        }
      ],
      "base": "ueth",
      "display": "ETH",
      "name": "Fake ETH Token",
      "symbol": "ETH",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.svg"
      }
    },
    {
      "description": "The fake USDC",
      "denom_units": [
        {
          "denom": "uusdc",
          "exponent": 0
        },
        {
          "denom": "USDC",
          "exponent": 6
        }
      ],
      "base": "uusdc",
      "display": "USDC",
      "name": "Fake USDC Token",
      "symbol": "USDC",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg"
      }
    },
    {
      "description": "The fake TIA",
      "denom_units": [
        {
          "denom": "utia",
          "exponent": 0
        },
        {
          "denom": "TIA",
          "exponent": 6
        }
      ],
      "base": "utia",
      "display": "TIA",
      "name": "Fake TIA Token",
      "symbol": "TIA",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.svg"
      }
    },
    {
      "description": "The LP token of USDC-INIT",
      "denom_units": [
        {
          "denom": "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
          "exponent": 0
        },
        {
          "denom": "USDC-INIT LP",
          "exponent": 6
        }
      ],
      "base": "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
      "display": "USDC-INIT LP",
      "name": "USDC-INIT LP Token",
      "symbol": "USDC-INIT LP",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.svg"
      }
    },
    {
      "description": "The LP token of ETH-INIT",
      "denom_units": [
        {
          "denom": "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
          "exponent": 0
        },
        {
          "denom": "ETH-INIT LP",
          "exponent": 6
        }
      ],
      "base": "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
      "display": "ETH-INIT LP",
      "name": "ETH-INIT LP Token",
      "symbol": "ETH-INIT LP",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.svg"
      }
    },
    {
      "description": "The LP token of TIA-INIT",
      "denom_units": [
        {
          "denom": "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
          "exponent": 0
        },
        {
          "denom": "TIA-INIT LP",
          "exponent": 6
        }
      ],
      "base": "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
      "display": "TIA-INIT LP",
      "name": "TIA-INIT LP Token",
      "symbol": "TIA-INIT LP",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.png",
          "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.png",
        "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.svg"
      }
    }
  ]
}
```
## IBC Data
The metadata contained in these files represents a path abstraction between two IBC-connected networks. This information is particularly useful when relaying packets and acknowledgments across chains.
This schema also allows us to provide helpful info to describe open channels.
Note: when creating these files, please ensure the chains in both the file name and the references of ```chain-1``` and ```chain-2``` in the json file are in alphabetical order. Ex: ```Achain-Zchain.json```. The chain names used must match name of the chain's directory here in the chain-registry.
An example ibc metadata file contains the following structure:
``` {
  "$schema": "../../ibc_data.schema.json",
  "chain_1": {
    "chain_name": "initia",
    "client_id": "07-tendermint-0",
    "connection_id": "connection-0"
  },
  "chain_2": {
    "chain_name": "minimove",
    "client_id": "07-tendermint-0",
    "connection_id": "connection-0"
  },
  "channels": [
    {
      "chain_1": {
        "channel_id": "channel-0",
        "port_id": "transfer"
      },
      "chain_2": {
        "channel_id": "channel-0",
        "port_id": "transfer"
      },
      "ordering": "unordered",
      "version": "ics20-1",
      "tags": {
        "status": "live",
        "preferred": true
      }
    }
  ]
}
```
