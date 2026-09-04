import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "cabal",
  "pretty_name": "Cabal",
  "chain_id": "cabal-1",
  "evm_chain_id": 2630341494499703,
  "bech32_prefix": "init",
  "network_type": "mainnet",
  "codebase": {},
  "apis": {
    "rpc": [
      {
        "address": "https://rpc-cabal-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "rest": [
      {
        "address": "https://rest-cabal-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "grpc": [
      {
        "address": "grpc-cabal-1.anvil.asia-southeast.initia.xyz:443"
      }
    ],
    "json-rpc": [
      {
        "address": "https://jsonrpc-cabal-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "json-rpc-websocket": [
      {
        "address": "wss://jsonrpc-ws-cabal-1.anvil.asia-southeast.initia.xyz"
      }
    ],
    "indexer": [
      {
        "address": "https://rollytics-api-cabal-1.anvil.asia-southeast.initia.xyz"
      }
    ]
  },
  "explorers": [
    {
      "kind": "initia scan",
      "url": "https://scan.initia.xyz/cabal-1",
      "tx_page": "https://scan.initia.xyz/cabal-1/txs/${txHash}",
      "account_page": "https://scan.initia.xyz/cabal-1/accounts/${accountAddress}"
    }
  ],
  "key_algos": [
    "initia_ethsecp256k1"
  ],
  "slip44": 60,
  "fees": {
    "fee_tokens": [
      {
        "denom": "evm/58918f9E58662058Cb36Cc60d7E124C90872C7C0",
        "fixed_min_gas_price": 20000000000
      },
      {
        "denom": "evm/df5A85F89731fEB77d7EEaaCe627EB135eDB46DB",
        "fixed_min_gas_price": 15000000000
      }
    ]
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/cabal.png"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/cabal.png"
  },
  "metadata": {
    "op_bridge_id": "42",
    "op_denoms": [
      "uinit"
    ],
    "executor_uri": "https://opinit-api-cabal-1.anvil.asia-southeast.initia.xyz",
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
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/cabal/assetlist.json",
    "minitia": {
      "type": "minievm",
      "version": "v1.2.14"
    }
  }
};
export default info;