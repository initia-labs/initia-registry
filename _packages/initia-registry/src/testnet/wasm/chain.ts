import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "wasm",
  "pretty_name": "Wasm",
  "chain_id": "wasm-1",
  "bech32_prefix": "init",
  "network_type": "testnet",
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-wasm-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "rest": [
      {
        "address": "https://rest-wasm-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "grpc": [
      {
        "address": "grpc-wasm-1.anvil.asia-southeast.initia.xyz:443"
      }
    ],
    "indexer": [
      {
        "address": "https://rollytics-api-wasm-1.anvil.asia-southeast.initia.xyz"
      }
    ]
  },
  "explorers": [
    {
      "kind": "initia scan",
      "url": "https://scan.testnet.initia.xyz/wasm-1",
      "tx_page": "https://scan.testnet.initia.xyz/wasm-1/txs/${txHash}",
      "account_page": "https://scan.testnet.initia.xyz/wasm-1/accounts/${accountAddress}"
    }
  ],
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "l2/8b3e1fc559b327a35335e3f26ff657eaee5ff8486ccd3c1bc59007a93cf23156",
        "fixed_min_gas_price": 0.015
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/miniwasm.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/miniwasm.png"
  },
  "metadata": {
    "op_bridge_id": "1457",
    "op_denoms": [
      "uinit"
    ],
    "executor_uri": "https://opinit-api-wasm-1.anvil.asia-southeast.initia.xyz",
    "ibc_channels": [
      {
        "chain_id": "initiation-2",
        "port_id": "transfer",
        "channel_id": "channel-0",
        "version": "ics20-1"
      },
      {
        "chain_id": "initiation-2",
        "port_id": "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        "channel_id": "channel-1",
        "version": "ics721-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/wasm/assetlist.json",
    "minitia": {
      "type": "miniwasm",
      "version": "v1.1.1"
    }
  }
};
export default info;