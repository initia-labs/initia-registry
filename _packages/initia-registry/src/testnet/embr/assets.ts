import { AssetList } from '@initia/initia-registry-types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "embr",
  "assets": [
    {
      "description": "The native token of Initia",
      "denom_units": [
        {
          "denom": "l2/025e02154bf24211cdceb46a81e37cdc9d3c0d5dca472f69354621d3b3169b0f",
          "exponent": 0
        },
        {
          "denom": "INIT",
          "exponent": 6
        }
      ],
      "base": "l2/025e02154bf24211cdceb46a81e37cdc9d3c0d5dca472f69354621d3b3169b0f",
      "display": "INIT",
      "traces": [
        {
          "type": "op",
          "counterparty": {
            "base_denom": "uinit",
            "chain_name": "initia"
          },
          "chain": {
            "bridge_id": "823"
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
      "description": "mock embrINIT",
      "denom_units": [
        {
          "denom": "evm/6ed1637781269560b204c27cd42d95e057c4be44",
          "exponent": 0
        },
        {
          "denom": "EMBRINIT",
          "exponent": 18
        }
      ],
      "type_asset": "erc20",
      "address": "0x6ed1637781269560b204c27cd42d95e057c4be44",
      "base": "evm/6ed1637781269560b204c27cd42d95e057c4be44",
      "display": "EMBR INIT",
      "name": "EMBR INIT",
      "symbol": "EMBRINIT",
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
};
export default info;