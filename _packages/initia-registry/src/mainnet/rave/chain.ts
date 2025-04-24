import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "rave",
  "pretty_name": "Rave",
  "chain_id": "rave-1",
  "evm_chain_id": 555110192329996,
  "bech32_prefix": "init",
  "network_type": "mainnet",
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-rave-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "rest": [
      {
        "address": "https://rest-rave-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "grpc": [
      {
        "address": "grpc-rave-1.anvil.asia-southeast.initia.xyz:443"
      }
    ],
    "json-rpc": [
      {
        "address": "https://jsonrpc-rave-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "json-rpc-websocket": [
      {
        "address": "wss://jsonrpc-ws-rave-1.anvil.asia-southeast.initia.xyz"
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
        "denom": "evm/4f7566f67941283a30cf65de7b9c6fdf2c04fca1",
        "fixed_min_gas_price": 15000000000
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rave.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rave.png"
  },
  "metadata": {
    "op_bridge_id": "17",
    "op_denoms": [
      "uinit"
    ],
    "executor_uri": "https://opinit-api-rave-1.anvil.asia-southeast.initia.xyz",
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
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/rave/assetlist.json",
    "minitia": {
      "type": "minievm",
      "version": "v1.0.4"
    }
  }
};
export default info;