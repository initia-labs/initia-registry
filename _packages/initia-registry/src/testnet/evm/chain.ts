import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "evm",
  "pretty_name": "Evm",
  "chain_id": "evm-1",
  "evm_chain_id": 2124225178762456,
  "bech32_prefix": "init",
  "network_type": "testnet",
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-evm-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "rest": [
      {
        "address": "https://rest-evm-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "grpc": [
      {
        "address": "grpc-evm-1.anvil.asia-southeast.initia.xyz:443"
      }
    ],
    "json-rpc": [
      {
        "address": "https://jsonrpc-evm-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "json-rpc-websocket": [
      {
        "address": "wss://jsonrpc-ws-evm-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "indexer": [
      {
        "address": "https://rollytics-api-evm-1.anvil.asia-southeast.initia.xyz"
      }
    ]
  },
  "explorers": [
    {
      "kind": "initia scan",
      "url": "https://scan.testnet.initia.xyz/evm-1",
      "tx_page": "https://scan.testnet.initia.xyz/evm-1/txs/${txHash}",
      "account_page": "https://scan.testnet.initia.xyz/evm-1/accounts/${accountAddress}"
    }
  ],
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "evm/2eE7007DF876084d4C74685e90bB7f4cd7c86e22",
        "fixed_min_gas_price": 150000000000
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/minievm.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/minievm.png"
  },
  "metadata": {
    "op_bridge_id": "1459",
    "op_denoms": [
      "uinit"
    ],
    "executor_uri": "https://opinit-api-evm-1.anvil.asia-southeast.initia.xyz",
    "ibc_channels": [
      {
        "chain_id": "initiation-2",
        "port_id": "nft-transfer",
        "channel_id": "channel-1",
        "version": "ics721-1"
      },
      {
        "chain_id": "initiation-2",
        "port_id": "transfer",
        "channel_id": "channel-0",
        "version": "ics20-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/evm/assetlist.json",
    "minitia": {
      "type": "minievm",
      "version": "v1.1.15"
    }
  }
};
export default info;