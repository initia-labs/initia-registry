import { AssetList } from '@initia/initia-registry-types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "milkyway",
  "assets": [
    {
      "description": "Gas token of MilkyWay",
      "denom_units": [
        {
          "denom": "GAS",
          "exponent": 0
        }
      ],
      "base": "GAS",
      "display": "GAS",
      "name": "MilkyWay Gas Token",
      "symbol": "GAS",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/MILK.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/MILK.png"
      }
    },
    {
      "description": "The INIT Liquid Staking Token",
      "denom_units": [
        {
          "denom": "umilkinit",
          "exponent": 0
        },
        {
          "denom": "milkINIT",
          "exponent": 6
        }
      ],
      "base": "umilkinit",
      "display": "milkINIT",
      "name": "INIT Liquid Staking Token",
      "symbol": "milkINIT",
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png"
      }
    },
    {
      "description": "The native token of Initia",
      "denom_units": [
        {
          "denom": "l2/306fc5bda5e7718e56b1d7e62d305d3fe7eee6b3cd223b7201c9171cc541aba9",
          "exponent": 0
        },
        {
          "denom": "INIT",
          "exponent": 6
        }
      ],
      "base": "l2/306fc5bda5e7718e56b1d7e62d305d3fe7eee6b3cd223b7201c9171cc541aba9",
      "display": "INIT",
      "traces": [
        {
          "type": "op",
          "counterparty": {
            "base_denom": "uinit",
            "chain_name": "initia"
          },
          "chain": {
            "bridge_id": "822"
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
    },
    {
      "description": "USD Coin on Initia",
      "denom_units": [
        {
          "denom": "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          "exponent": 0
        },
        {
          "denom": "USDC",
          "exponent": 6
        }
      ],
      "base": "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      "display": "USDC",
      "name": "USDC",
      "symbol": "USDC",
      "coingecko_id": "",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "initia",
            "base_denom": "uusdc",
            "channel_id": "channel-0"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/uusdc"
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
    }
  ]
};
export default info;