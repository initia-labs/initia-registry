import { AssetList } from '@initia/initia-registry-types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "intergaze",
  "assets": [
    {
      "description": "The native token of Initia",
      "denom_units": [
        {
          "denom": "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e",
          "exponent": 0
        },
        {
          "denom": "INIT",
          "exponent": 6
        }
      ],
      "base": "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e",
      "display": "INIT",
      "traces": [
        {
          "type": "op",
          "counterparty": {
            "base_denom": "uinit",
            "chain_name": "initia"
          },
          "chain": {
            "bridge_id": "31"
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
};
export default info;