import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "infinityg",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/461e4561c847e5af5f90e093aea828d9a5d376b72ad40c7d81972ad7447f81b1",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/461e4561c847e5af5f90e093aea828d9a5d376b72ad40c7d81972ad7447f81b1",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "958",
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
    {
      description: "USD Coin on Initia",
      denom_units: [
        {
          denom:
            "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      display: "USDC",
      name: "USDC",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "uusdc",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/uusdc",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
      },
    },
    {
      description: "GAS Coin on Ing",
      denom_units: [
        {
          denom: "GAS",
          exponent: 18,
        },
      ],
      base: "GAS",
      display: "GAS",
      name: "GAS",
      symbol: "GAS",
      coingecko_id: "",
      traces: [],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/GAS.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/GAS.png",
      },
    },
  ],
};
export default info;
