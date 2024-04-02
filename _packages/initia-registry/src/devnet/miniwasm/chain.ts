import { Chain } from '@initia/initia-registry-types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "miniwasm",
  "chain_id": "miniwasm-2",
  "website": "https://initia.xyz",
  "pretty_name": "Miniwasm",
  "status": "live",
  "network_type": "devnet",
  "bech32_prefix": "init",
  "daemon_name": "minitiad",
  "node_home": "$HOME/.minitia",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
        "fixed_min_gas_price": 0.15,
        "low_gas_price": 0.15,
        "average_gas_price": 0.15,
        "high_gas_price": 0.4
      },
      {
        "denom": "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        "fixed_min_gas_price": 0.15,
        "low_gas_price": 0.15,
        "average_gas_price": 0.15,
        "high_gas_price": 0.4
      }
    ]
  },
  "staking": {
    "staking_tokens": []
  },
  "codebase": {},
  "description": "miniwasm Closed Devnet",
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.miniwasm-2.initia.xyz",
        "provider": "Foundation"
      }
    ],
    "rest": [
      {
        "address": "https://lcd.miniwasm-2.initia.xyz",
        "provider": "Foundation"
      }
    ],
    "api": [
      {
        "address": "https://api.miniwasm-2.initia.xyz",
        "provider": "Foundation"
      }
    ],
    "grpc": [
      {
        "address": "grpc://34.87.100.162:9090",
        "provider": "Foundation"
      }
    ]
  },
  "explorers": [
    {
      "kind": "explorer",
      "url": "https://explorer.miniwasm-2.initia.xyz/?layer=miniwasm",
      "tx_page": "https://explorer.miniwasm-2.initia.xyz/tx/${txHash}?layer=miniwasm",
      "account_page": "https://explorer.miniwasm-2.initia.xyz/address/${accountAddress}?layer=miniwasm"
    },
    {
      "kind": "initia scan",
      "url": "https://scan.initia.xyz/miniwasm-2",
      "tx_page": "https://scan.initia.xyz/miniwasm-2/txs/${txHash}",
      "account_page": "https://scan.initia.xyz/miniwasm-2/accounts/${accountAddress}"
    }
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.png",
      "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.svg"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.png",
    "svg": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.svg"
  },
  "metadata": {
    "op_bridge_id": "1",
    "creator": "0xf324bf4f355abec6d49fdfd0d45419ba99d363d9",
    "op_denoms": [
      "uinit"
    ],
    "ibc_channels": [
      {
        "chain_id": "mahalo-2",
        "port_id": "transfer",
        "channel_id": "channel-0",
        "version": "ics20-1"
      },
      {
        "chain_id": "mahalo-2",
        "port_id": "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        "channel_id": "channel-1",
        "version": "ics721-1"
      }
    ],
    "assetlist": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/assetlist.json"
  }
};
export default info;