import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "culinaris",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/83db4af0de8965c851672915eaa857f0911385f7d71f9da1decb2504d3d3ffdd",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/83db4af0de8965c851672915eaa857f0911385f7d71f9da1decb2504d3d3ffdd",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "314",
          },
        },
      ],
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/INIT.svg",
      },
    },
    {
      description: "Battle for Blockchain currency",
      denom_units: [
        {
          denom: "evm/09d1a05C3770653c1eF6e1230F6022714d4b41e8",
          exponent: 0,
        },
        {
          denom: "BFB",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x09d1a05C3770653c1eF6e1230F6022714d4b41e8",
      base: "evm/09d1a05C3770653c1eF6e1230F6022714d4b41e8",
      display: "BFB",
      name: "BFB",
      symbol: "BFB",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/BFB.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/BFB.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/BFB.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/BFB.svg",
      },
    },
    {
      description: "The fake USDC",
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
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg",
      },
    },
  ],
};
export default info;
