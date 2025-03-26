import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "intergaze",
  assets: [
    {
      description: "The native token of Intergaze Testnet",
      denom_units: [
        {
          denom: "ugaze",
          exponent: 0,
        },
        {
          denom: "GAZE",
          exponent: 6,
        },
      ],
      base: "ugaze",
      display: "GAZE",
      name: "Intergaze Testnet Token",
      symbol: "GAZE",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/intergaze.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/intergaze.png",
      },
    },
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
      display: "INIT",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "uinit",
            channel_id: "channel-1585",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/uinit",
          },
        },
      ],
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
      },
    },
  ],
};
export default info;
