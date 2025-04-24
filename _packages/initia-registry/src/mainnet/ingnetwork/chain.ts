import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "ingnetwork",
  "pretty_name": "Ingnetwork",
  "chain_id": "ingnetwork-1",
  "evm_chain_id": 2780922216980457,
  "bech32_prefix": "init",
  "network_type": "mainnet",
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-ingnetwork-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "rest": [
      {
        "address": "https://rest-ingnetwork-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "grpc": [
      {
        "address": "grpc-ingnetwork-1.anvil.asia-southeast.initia.xyz:443"
      }
    ],
    "json-rpc": [
      {
        "address": "https://jsonrpc-ingnetwork-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "json-rpc-websocket": [
      {
        "address": "wss://jsonrpc-ws-ingnetwork-1.anvil.asia-southeast.initia.xyz"
      }
    ]
  },
  "key_algos": [
    "initia_ethsecp256k1",
    "secp256k1"
  ],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "l2/4daa1ce1a1956bf454f4a22bd6ecc7932737c88e1c3868dcd208684e0d432009",
        "fixed_min_gas_price": 15000000000
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/infinityg.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/infinityg.png"
  },
  "metadata": {
    "op_bridge_id": "27",
    "op_denoms": [
      "uinit"
    ],
    "executor_uri": "https://opinit-api-ingnetwork-1.anvil.asia-southeast.initia.xyz",
    "ibc_channels": [
      {
        "chain_id": "interwoven-1",
        "port_id": "nft-transfer",
        "channel_id": "channel-1",
        "version": "ics721-1"
      },
      {
        "chain_id": "interwoven-1",
        "port_id": "transfer",
        "channel_id": "channel-0",
        "version": "ics20-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/ingnetwork/assetlist.json",
    "minitia": {
      "type": "minievm",
      "version": "v1.0.3"
    }
  }
};
export default info;