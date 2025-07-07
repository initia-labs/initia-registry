# Initia Registry

The Initia Registry serves as a central repository containing crucial metadata for chains within the Initia ecosystem. 

It houses configuration files such as ```chain.json``` and ```assetlist.json```, which are vital for initiating and interacting with nodes, as well as understanding the available assets on each chain. The registry also includes ```profile.json``` files, which provide users with a comprehensive overview of each chain, including its category, description, and status.
Additionally, the registry includes ```*.schema.json``` files in the root directory, outlining the recommended metadata structure. These schemas are dynamic, subject to revisions based on evolving user needs, and may include optional fields beyond the current schema specifications.

## Adding a Rollup to Initia Registry

1. **Fork the Repository**: Begin by forking the repository where the Initia Registry is hosted.
2. **Add a New Directory**: Create a directory named after the chain you intend to add.
3. **Include Necessary Files**:
- ```chain.json```: Populate this file with the metadata of the chain.
- ```assetlist.json```: Include metadata concerning the assets available on the chain.
- ```initia-minitia.json```: Provide metadata about the IBC connections and channels, ensuring the file name adheres to the alphabetical order of the chain names, e.g., Achain-Bchain.json.
4. **Create a Pull Request**: Submit your modifications for review to merge them into the main repository.

##  ```chain.json```

`chain.json` contains metadata about the chain, such as the chain name, chain ID, EVM chain ID, and network type. This information is essential for users to interact with the chain and its associated assets.

### JSON Structure

| **Field**          | **Type**              | **Required?** | **Description**                                                                                                                                                                                                                                                          |
|--------------------|-----------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$schema`          | `string (URL/path)`  | Yes           | Path or URL to the corresponding JSON schema (e.g., `../../chain.schema.json`).                                                                                                                                                                                          |
| `chain_name`       | `string`             | Yes           | Unique, lowercase name of the chain, often used for folder names and identification in registries.                                                                                                                                                                      |
| `pretty_name`      | `string`             | Yes           | A human-readable name for display purposes.                                                                                                                                                                                                                              |
| `chain_id`         | `string`             | Yes           | The chain’s official ID (e.g. `preyominet-1`).                                                                                                                                                                                                                           |
| `evm_chain_id`     | `number`             | Optional      | The EVM-compatible Chain ID. Present only for EVM-based chains (e.g., `4471190363524365`).                                                                                                                                                                               |
| `bech32_prefix`    | `string`             | Yes           | The Bech32 address prefix (used in Cosmos-based addresses).                                                                                                                                                                                                              |
| `network_type`     | `string`             | Yes           | Describes the network environment (e.g., `mainnet`, `testnet`, or `devnet`).                                                                                                                                                                                                 |
| `website`          | `string (URL)`       | Optional      | Link to the chain’s official website or documentation.                                                                                                                                                                                                                   |
| `apis`             | `object`             | Yes           | Contains endpoints for interacting with the chain. Typically includes subfields like `rpc`, `rest`, `json-rpc`, `json-rpc-websocket`, each an array of endpoint objects with an `"address"` property.                                                                      |
| `key_algos`        | `string[]`           | Optional      | Supported cryptographic key algorithms (e.g., `["secp256k1"]`).                                                                                                                                                                                                          |
| `slip44`           | `number`             | Optional      | The SLIP-0044 coin type is used for generating HD wallet paths (commonly `118` for Cosmos chains).                                                                                                                                                                          |
| `fees`             | `object`             | Optional      | Contains `fee_tokens`, detailing denominations and gas price information for transaction fees.                                                                                                                                                                          |
| `fees.fee_tokens`  | `object[]`           | Optional      | An array of fee token objects, each with `denom`, `fixed_min_gas_price`, `low_gas_price`, `average_gas_price`, `high_gas_price`.                                                                                                                                         |
| `images`           | `object[]`           | Optional      | An array of image objects for chain logos or branding. Often includes `png` URLs.                                                                                                                                                                              |
| `images[].png`     | `string (URL)`       | Optional      | Direct link to a PNG version of the chain’s image/logo.                                                                                                                                                                                                                  |
| `logo_URIs`        | `object`             | Optional      | Alternative or simplified object to store image URIs (`png`) for the chain’s logo.                                                                                                                                                                                |
| `metadata`         | `object`             | Optional      | Additional chain metadata. May contain fields like `op_bridge_id`, `op_denoms`, `executor_uri`, `ibc_channels`, `assetlist`, etc.                                                                                                                                        |
| `metadata.op_bridge_id` | `string`        | Yes (L2)    | The OP bridge identifier, if the chain is connected via OP bridging.                                                                                                                                                                                                      |
| `metadata.op_denoms`    | `string[]`      | Yes (L2)      | One or more denoms used in OP bridging.                                                                                                                                                                                                                                  |
| `metadata.executor_uri` | `string`        | Yes (L2)      | Executor service endpoint for advanced chain operations.                                                                                                                                                                                                                 |
| `metadata.ibc_channels` | `object[]`      | Yes (L2)      | An array describing IBC channel details (e.g., `channel_id`, `port_id`, `version`, and the counterpart `chain_id`).                                                                                                                                                      |
| `metadata.assetlist`    | `string (URL)`  | Optional (L2)      | URL pointing to the `assetlist.json` file for this chain.                                                                                                                                                                                                                |
| `metadata.minitia`      | `object`        | Optional (L2)     | Information specific to the chain’s rollup type, with fields like `type` (e.g. `minievm`, `minimove`) and `version`.                                                                                                                                                     |

> **Note**: `evm_chain_id` is only relevant for EVM-compatible chains and not part of the standard Cosmos chain schema.

A sample `chain.json` includes the following information.

```json
{
  "$schema": "../../chain.schema.json",
  "chain_name": "yominet",
  "pretty_name": "Yominet",
  "chain_id": "preyominet-1",
  "evm_chain_id": 4471190363524365,
  "bech32_prefix": "init",
  "network_type": "testnet",
  "website": "https://playtest.kamigotchi.io",
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.preyominet.initia.tech"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.preyominet-1.initia.tech"
      }
    ],
    "json-rpc": [
      {
        "address": "https://json-rpc.preyominet.initia.tech"
      }
    ],
    "json-rpc-websocket": [
      {
        "address": "wss://json-rpc-websocket.preyominet.initia.tech"
      }
    ]
  },
  "key_algos": ["initia_ethsecp256k1", "secp256k1"],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
        "fixed_min_gas_price": 1000000000,
        "low_gas_price": 1000000000,
        "average_gas_price": 1500000000,
        "high_gas_price": 2000000000
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/kamigochi.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/kamigochi.png"
  },
  "metadata": {
    "op_bridge_id": "80",
    "op_denoms": ["uinit"],
    "executor_uri": "https://maze-api-opinit-9ce4b2ff-e329-459d-8baa-ae49f95f33b2.ane1-prod-nocsm.newmetric.xyz",
    "ibc_channels": [
      {
        "chain_id": "initiation-2",
        "port_id": "transfer",
        "channel_id": "channel-2",
        "version": "ics20-1"
      },
      {
        "chain_id": "initiation-2",
        "port_id": "nft-transfer",
        "channel_id": "channel-1",
        "version": "ics721-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/assetlist.json",
    "minitia": {
      "type": "minievm",
      "version": "v0.5.5"
    }
  }
}
```

## ```assetlist.json```

`assetlist.json` is inspired by the Token Lists project on Ethereum which helps discoverability of ERC-20 tokens by providing a mapping between ERC-20 contract addresses and their associated metadata.
`assetlist.json` is a similar mechanism to allow frontends and other UIs to fetch metadata associated with Cosmos SDK denoms, especially for assets sent over IBC.
This standard is a work in progress. You'll notice that the format of assets in the ```assetlist.json``` structure is a strict superset json representation of the banktypes.DenomMetadata from the Cosmos SDK. This is purposefully done so that this standard may eventually be migrated into a Cosmos SDK module in the future, so it can be easily maintained on the chain instead of on GitHub.

For better understanding, the denoms in the assetlist.json file can be categorized into the following types:
- Cosmos denom
  - A native denomination supported by Cosmos SDK applications, generally prefixed with `u` to indicate a decimal scale of 6.
  - Example: `uinit`
- Coin metadata
  - In a Move contract, this refers to the object address generated from the coin’s creator and symbol, represented in hexadecimal format.
  - Example: `0x173DF9FDA389B19B7A5B93786420F3A1E1C3D72CC40193CBFFEF6144F076CB1F`
- Move denom (only exist on Move chains)
  - If the coin is not generated by the 0x1 module (e.g., ibc, l2 prefixed) but instead created by a regular user, it will have the `move/` prefix.
  - Since the `Bank` module of Initia L1 is integrated with Move fungible assets, it is possible to use the `move/` prefixed denom as-is.
  - Example: `move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff`
- EVM denom (only exist on EVM chains)
  - If the coin is created by EVM contract, it will has a denom like `evm/${contract_address}` format on EVM chain.
  - Example: `evm/6ed1637781269560b204c27Cd42d95e057C4BE44`
- Op denom
  - A denomination transferred from Initia to L2 via the `opinit` module, prefixed with `l2/`.
  - Example: `l2/173DF9FDA389B19B7A5B93786420F3A1E1C3D72CC40193CBFFEF6144F076CB1F`
- IBC denom
  - A denomination transferred via the `IBC` module, prefixed with `ibc/`.
  - Example: `ibc/173DF9FDA389B19B7A5B93786420F3A1E1C3D72CC40193CBFFEF6144F076CB1F`


<details>
<summary>How to Derive a Bridged Token Denom</summary>

For tokens bridged from L1, the denom can vary depending on the type of bridge used. In order for token bridging to work correctly, you must add the appropriate denom to your assetlist.

We have two scenarios for calculating the denom:

- OP Denom: The denom used in the OP Bridge
- IBC Denom: The denom used in the IBC Bridge

### OP Denom

```ts
import { RESTClient } from '@initia/initia.js'

/**
 *
 * Queries the Initia REST API to find the L2 (Layer 2) denomination
 * corresponding to a given L1 (Layer 1) denomination, for a specific bridge ID.
 *
 * @param {string} uri - The REST endpoint for the Initia network (e.g., "https://rest.testnet.initia.xyz").
 * @param {number} bridge_id - The bridge ID (e.g., 1).
 * @param {string} l1_denom - The L1 denomination (e.g., "uinit").
 * @returns {Promise<string>} - The corresponding L2 denomination (e.g., "l2/...").
 */
export async function opDenomByL1Denom(
  uri: string,
  bridge_id: number,
  l1_denom: string
): Promise<string> {
  const client = new RESTClient(uri)
  const tokenPair = await client.ophost.tokenPairByL1Denom(bridge_id, l1_denom)
  return tokenPair.l2_denom
}

/**
 *
 * Queries the Initia REST API to find the L1 (Layer 1) denomination
 * corresponding to a given L2 (Layer 2) denomination, for a specific bridge ID.
 *
 * @param {string} uri - The REST endpoint for the Initia network (e.g., "https://rest.testnet.initia.xyz").
 * @param {number} bridge_id - The bridge ID (e.g., 1).
 * @param {string} l2_denom - The L2 denomination (e.g., "l2/xyz...").
 * @returns {Promise<string>} - The corresponding L1 denomination (e.g., "uinit").
 */
export async function opDenomByL2Denom(
  uri: string,
  bridge_id: number,
  l2_denom: string
): Promise<string> {
  const client = new RESTClient(uri)
  const tokenPair = await client.ophost.tokenPairByL2Denom(bridge_id, l2_denom)
  return tokenPair.l1_denom
}

async function main() {
  // Example usage of opDenomByL1Denom and opDenomByL2Denom
  const uri = 'https://rest.testnet.initia.xyz'
  const bridge_id = 1

  const l1_denom = 'uinit'
  const l2_denom = 'l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd'

  const l2_denom_for_l1_denom = await opDenomByL1Denom(uri, bridge_id, l1_denom)
  console.log(`L2 denom for L1 denom "${l1_denom}":`, l2_denom_for_l1_denom)

  const l1_denom_for_l2_denom = await opDenomByL2Denom(uri, bridge_id, l2_denom)
  console.log(`L1 denom for L2 denom "${l2_denom}":`, l1_denom_for_l2_denom)
}

main().catch((error) => {
  console.error('Error in main:', error)
})
```

### IBC Denom

```ts
import { RESTClient, sha256 } from '@initia/initia.js'

interface DenomTrace {
  denom_trace: {
    path: string
    base_denom: string
  }
}

/**
 *
 * Takes a full trace string (e.g., "transfer/channel-0/uinit"), computes its SHA-256 hash,
 * and returns it in uppercase as "ibc/<HASH>".
 *
 * @param {string} fullTrace - For example, "transfer/channel-0/uinit".
 * @returns {string} - For example, "ibc/2A3B4C...".
 */
function makeIBCHash(fullTrace: string): string {
  const shaSum = sha256(Buffer.from(fullTrace))
  const hash = Buffer.from(shaSum).toString('hex').toUpperCase()
  return `ibc/${hash}`
}

/**
 *
 * Retrieves the original "transfer/..." full trace (e.g., "transfer/channel-0/uinit")
 * from an IBC denom that starts with "ibc/...". It queries the IBC module's
 * `denom_traces` endpoint to get the path and base denom.
 *
 * @param {RESTClient} chain - The RESTClient instance for the chain.
 * @param {string} denom - The IBC denom (must start with "ibc/").
 * @returns {Promise<string>} - The combined path and base denom (e.g., "transfer/channel-0/uinit").
 */
async function getFullTrace(chain: RESTClient, denom: string): Promise<string> {
  if (!denom.startsWith('ibc/')) {
    throw Error('Not an IBC denom')
  }

  const trace = await chain.apiRequester.get<DenomTrace>(
    `/ibc/apps/transfer/v1/denom_traces/${denom}`
  )
  return `${trace.denom_trace.path}/${trace.denom_trace.base_denom}`
}

/**
 *
 * Takes a denom from chain A (e.g., "uinit" or "ibc/...") and determines how it is
 * represented on chain B. This may result in a hashed IBC denom ("ibc/...") or
 * a "transfer/..." full trace string.
 *
 * 1. If the input denom starts with "ibc/", retrieve the original full trace using `getFullTrace`.
 * 2. If the resulting full trace starts with "transfer/{chainAChannel}/...", it indicates
 *    the token originally came from chain B (unwind logic).
 * 3. Otherwise, prepend "transfer/{chainBChannel}/..." (wind logic).
 * 4. Finally, if the resulting string begins with "transfer/", convert it to an IBC hash
 *    using `makeIBCHash`. Otherwise, return it as is.
 *
 * @param {RESTClient} chainA - The RESTClient for chain A.
 * @param {string} denom - The denom used on chain A (e.g., "uinit" or "ibc/...").
 * @param {string} chainAChannel - The channel ID on chain A (e.g., "channel-1").
 * @param {string} chainBChannel - The channel ID on chain B (e.g., "channel-2").
 * @returns {Promise<string>} - The resulting IBC denom (e.g., "ibc/...") or a "transfer/..." full trace.
 */
export async function ibcDenom(
  chainA: RESTClient,
  denom: string,
  chainAChannel: string,
  chainBChannel: string
): Promise<string> {
  let wind = true
  let fullTrace = denom

  // If denom starts with "ibc/", retrieve the original trace
  if (denom.startsWith('ibc/')) {
    fullTrace = await getFullTrace(chainA, denom)

    // If the token's trace starts with "transfer/chainAChannel/", token originated from chain B
    if (fullTrace.startsWith(`transfer/${chainAChannel}/`)) {
      wind = false
    }
  }

  // Depending on wind/unwind, construct the trace for chain B
  let fullTraceOnChainB: string
  if (wind) {
    // Wind: prepend "transfer/{chainBChannel}/"
    fullTraceOnChainB = `transfer/${chainBChannel}/${fullTrace}`
  } else {
    // Unwind: remove "transfer/{chainAChannel}/"
    fullTraceOnChainB = fullTrace.slice(`transfer/${chainAChannel}/`.length)
  }

  // If it starts with "transfer/", convert to an IBC hash; otherwise, return as is
  const denomInChainB = fullTraceOnChainB.startsWith('transfer/')
    ? makeIBCHash(fullTraceOnChainB)
    : fullTraceOnChainB

  return denomInChainB
}

async function main() {
  // Example usage of ibcDenom
  const denom = 'uinit' // or "ibc/..."
  const chainAclient = new RESTClient('https://rest.testnet.initia.xyz')
  const channelA = 'channel-132' // Example channel ID for chain A
  const channelB = 'channel-0'   // Example channel ID for chain B

  const ibcDenomStr = await ibcDenom(chainAclient, denom, channelA, channelB)
  console.log('Calculated IBC Denom:', ibcDenomStr)
}

main().catch((error) => {
  console.error('Error in main:', error)
})
```
</details>

### JSON Structure

| **Field**                 | **Type**                  | **Required?** | **Description**                                                                                                                                                                                                                    |
|---------------------------|---------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$schema`                | `string (URL/path)`      | Yes           | Path or URL to the corresponding JSON schema (e.g., `../../assetlist.schema.json`).                                                                                                                                                |
| `chain_name`             | `string`                 | Yes           | The name of the chain this asset list belongs to. Typically matches the `chain_name` in `chain.json`.                                                                                                                              |
| `assets`                 | `object[]`               | Yes           | An array of asset objects, each describing a token/denomination and its metadata.                                                                                                                                                  |
| `assets[].description`   | `string`                 | Optional      | A textual description of the asset.                                                                                                                                                                                                |
| `assets[].denom_units`   | `object[]`               | Yes           | Defines how this asset is represented in various unit denominations (base, display, etc.).                                                                                                                                         |
| `assets[].denom_units[].denom`    | `string`   | Yes           | The actual denomination string (e.g., `uinit`, `ibc/xxxx`, `l2/xxxx`, `evm/0x...`).                                                                                                                                                 |
| `assets[].denom_units[].exponent` | `number`   | Yes           | The exponent for that denom’s decimal precision (e.g., 0, 6, 18).                                                                                                                                                                  |
| `assets[].type_asset`    | `string`                 | Optional      | Categorizes the asset type (e.g. `erc20`, `move`, `op`, `evm`). Not always present in older schemas but useful for specialized assets (EVM or Move).                                                                                 |
| `assets[].address`       | `string`                 | Optional      | Contract address of the token, if applicable (usually for EVM assets).                                                                                                                                                             |
| `assets[].base`          | `string`                 | Yes           | The canonical/base denomination of the asset. Often the same as the first element of `denom_units[].denom`.                                                                                                                        |
| `assets[].display`       | `string`                 | Yes           | The recommended display denomination (e.g., `INIT`, `USDC`, `ONYX`).                                                                                                                                                                |
| `assets[].name`          | `string`                 | Yes           | The human-readable name of the asset (e.g., “Initia Native Token”).                                                                                                                                                                 |
| `assets[].symbol`        | `string`                 | Yes           | The short symbol for the asset (e.g., `INIT`, `USDC`, “ONYX”).                                                                                                                                                                      |
| `assets[].coingecko_id`  | `string`                 | Optional      | Reference ID for CoinGecko, if the asset is or will be listed.                                                                                                                                                                      |
| `assets[].traces`        | `object[]`               | Optional      | IBC or OP bridging info. Contains nested fields like `type` (`ibc`, `op`), a `counterparty` object (chain_name, chain_id, base_denom, channel_id), and a `chain` object (channel_id, path, bridge_id).                                       |
| `assets[].images`        | `object[]`               | Optional      | Array of image objects with links to PNG for the asset’s logo.                                                                                                                                                                 |
| `assets[].images[].png`  | `string (URL)`           | Optional      | PNG logo URL.                                                                                                                                                                                                                       |
| `assets[].logo_URIs`     | `object`                 | Optional      | Simplified or alternative object containing the `png` fields for direct image references.      

An example assetlist json contains the following structure:
```json
{
  "$schema": "../../assetlist.schema.json",
  "chain_name": "yominet",
  "assets": [
    {
      "description": "The Kamigotchi world currency",
      "denom_units": [
        {
          "denom": "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
          "exponent": 0
        },
        {
          "denom": "ONYX",
          "exponent": 18
        }
      ],
      "type_asset": "erc20",
      "address": "0x9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
      "base": "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
      "display": "ONYX",
      "name": "ONYX",
      "symbol": "ONYX",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/onyx.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/onyx.png"
      }
    },
    {
      "description": "The fake USDC",
      "denom_units": [
        {
          "denom": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
          "exponent": 0
        },
        {
          "denom": "USDC",
          "exponent": 6
        }
      ],
      "base": "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      "display": "USDC",
      "name": "USDC",
      "symbol": "USDC",
      "coingecko_id": "",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "initia",
            "chain_id": "interwoven-1",
            "base_denom": "uusdc",
            "channel_id": "channel-1629"
          },
          "chain": {
            "channel_id": "channel-2",
            "path": "transfer/channel-2/uusdc"
          }
        }
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png"
      }
    },
    {
      "description": "The native token of Initia",
      "denom_units": [
        {
          "denom": "l2/92380c92e0252220f901770e7f4dbd677b87b15713976a6b734db51786b9db5a",
          "exponent": 0
        },
        {
          "denom": "INIT",
          "exponent": 6
        }
      ],
      "base": "l2/92380c92e0252220f901770e7f4dbd677b87b15713976a6b734db51786b9db5a",
      "display": "INIT",
      "traces": [
        {
          "type": "op",
          "counterparty": {
            "base_denom": "uinit",
            "chain_name": "initia",
            "chain_id": "interwoven-1"
          },
          "chain": {
            "bridge_id": "80"
          }
        }
      ],
      "name": "Initia Native Token",
      "symbol": "INIT",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png"
      }
    }
  ]
}
```

## ```profile.json```

`profile.json` contains metadata about the chain, such as the name, category, and description. This information is used to provide users with a better understanding of the chain and its purpose. The `profile.json` file also includes information about the chain's status, such as whether it is live or in development. Additionally, it contains details according to the VIP program, including actions that users can take to earn VIP rewards.

### JSON Structure


| **Field**       | **Type**              | **Required?** | **Description**                                                                                                                                                        |
|-----------------|-----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$schema`       | `string (URL/path)`  | Yes           | Path or URL to the profile schema (e.g. `../../profile.schema.json`).                                                                                                  |
| `name`          | `string`             | Yes           | The chain name matching `chain_name` in other JSON files.                                                                                                              |
| `pretty_name`   | `string`             | Yes           | A human-readable chain name (e.g. “Kamigotchi”).                                                                                                                       |
| `category`      | `string`             | Optional      | Broad classification of the chain (e.g. “Gaming”, “DeFi”, “Infrastructure”).                                                                                           |
| `l2`            | `boolean`            | Optional      | Indicates whether this chain is a Layer 2 chain.                                                                                                                       |
| `description`   | `string`             | Optional      | A detailed description or tagline for the chain.                                                                                                                       |
| `summary`       | `string`             | Optional      | Short summary of the chain’s purpose.                                                                                                                                  |
| `color`         | `string (hex code)`  | Optional      | Color code (e.g., `#42F771`) often used for branding or UI theming.                                                                                                    |
| `status`        | `string`             | Optional      | The status of the chain (e.g., “live”, “testnet”, “devnet”).                                                                                                           |
| `vip`           | `object`             | Optional      | Contains VIP program details, including `actions`.                                                                                                                     |
| `vip.actions`   | `object[]`           | Optional      | An array of VIP-related actions (e.g., “Complete Quest”).                                                                                                               |
| `vip.actions[].title`       | `string` | Optional      | Action title (e.g., “Complete Quest”).                                                                                                                                 |
| `vip.actions[].description` | `string` | Optional      | Description of that action (e.g., “Completing VIP quests in-game for each epoch.”).                                                                                     |
| `vip.forum_url` | `string (URL)` | Optional      | The URL linking to the forum of the VIP registration proposal. |
| `social`        | `object`             | Optional      | Contains links or handles for the chain’s social media or website.                                                                                                      |
| `social.website`| `string (URL)`       | Optional      | Official website link.                                                                                                                                                 |


```json
{
  "$schema": "../profile.schema.json",
  "name": "yominet",
  "pretty_name": "Kamigotchi",
  "category": "Gaming",
  "l2": true,
  "description": "The first economically independent virtual world living onchain. Home to the Kamigotchi.",
  "summary": "Economically independent, onchain virtual world",
  "color": "#42F771",
  "status": "live",
  "vip": {
    "actions": [
      {
        "title": "Complete Quest",
        "description": "Completing VIP quests in-game for each epoch."
      }
    ]
  },
  "social": {
    "website": "https://playtest.kamigotchi.io"
  }
}

```
