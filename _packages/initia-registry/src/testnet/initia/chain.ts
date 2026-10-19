import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "initia",
  "chain_id": "initiation-2",
  "website": "https://initia.xyz",
  "pretty_name": "Initia",
  "status": "live",
  "network_type": "testnet",
  "bech32_prefix": "init",
  "daemon_name": "initiad",
  "node_home": "$HOME/.initia",
  "key_algos": [
    "initia_ethsecp256k1",
    "secp256k1"
  ],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uinit",
        "fixed_min_gas_price": 0.015,
        "low_gas_price": 0.015,
        "average_gas_price": 0.015,
        "high_gas_price": 0.04
      },
      {
        "denom": "uusdc"
      },
      {
        "denom": "ueth"
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
      }
    ]
  },
  "codebase": {},
  "description": "Initia Public Testnet",
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.testnet.initia.xyz/",
        "provider": "Initia Labs"
      },
      {
        "address": "https://rpc-skip.testnet.initia.xyz/",
        "provider": "Initia Labs",
        "authorizedUser": "skip"
      }
    ],
    "rest": [
      {
        "address": "https://rest.testnet.initia.xyz",
        "provider": "Initia Labs"
      },
      {
        "address": "https://rest-skip.testnet.initia.xyz",
        "provider": "Initia Labs",
        "authorizedUser": "skip"
      }
    ],
    "grpc": [
      {
        "address": "grpc.testnet.initia.xyz:443",
        "provider": "Initia Labs"
      },
      {
        "address": "grpc-skip.testnet.initia.xyz:443",
        "provider": "Initia Labs",
        "authorizedUser": "skip"
      }
    ],
    "indexer": [
      {
        "address": "https://indexer.initiation-2.initia.xyz",
        "provider": "Initia Labs"
      }
    ]
  },
  "explorers": [
    {
      "kind": "initia scan",
      "url": "https://scan.testnet.initia.xyz/initiation-2",
      "tx_page": "https://scan.testnet.initia.xyz/initiation-2/txs/${txHash}",
      "account_page": "https://scan.testnet.initia.xyz/initiation-2/accounts/${accountAddress}"
    }
  ],
  "faucets": [],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png"
  },
  "metadata": {
    "is_l1": true,
    "ibc_channels": [
      {
        "chain_id": "move-1",
        "port_id": "transfer",
        "channel_id": "channel-3075",
        "version": "ics20-1"
      },
      {
        "chain_id": "move-1",
        "port_id": "nft-transfer",
        "channel_id": "channel-3076",
        "version": "ics721-1"
      },
      {
        "chain_id": "wasm-1",
        "port_id": "transfer",
        "channel_id": "channel-3073",
        "version": "ics20-1"
      },
      {
        "chain_id": "wasm-1",
        "port_id": "nft-transfer",
        "channel_id": "channel-3074",
        "version": "ics721-1"
      },
      {
        "chain_id": "evm-1",
        "port_id": "transfer",
        "channel_id": "channel-3077",
        "version": "ics20-1"
      },
      {
        "chain_id": "evm-1",
        "port_id": "nft-transfer",
        "channel_id": "channel-3078",
        "version": "ics721-1"
      },
      {
        "chain_id": "inertiation-13",
        "port_id": "transfer",
        "channel_id": "channel-3300",
        "version": "ics20-1"
      },
      {
        "chain_id": "inertiation-13",
        "port_id": "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        "channel_id": "channel-3134",
        "version": "ics721-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/assetlist.json"
  }
};
export default info;