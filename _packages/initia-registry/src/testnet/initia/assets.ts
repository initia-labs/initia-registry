import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "initia",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "uinit",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "uinit",
      display: "INIT",
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
      },
    },
    {
      description: "The fake ETH",
      denom_units: [
        {
          denom: "ueth",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "ueth",
      display: "ETH",
      name: "Fake ETH Token",
      symbol: "ETH",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.svg",
      },
    },
    {
      description: "The fake USDC",
      denom_units: [
        {
          denom: "uusdc",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "uusdc",
      display: "USDC",
      name: "Fake USDC Token",
      symbol: "USDC",
      coingecko_id: "",
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
    {
      description: "The fake TIA",
      denom_units: [
        {
          denom: "utia",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "utia",
      display: "TIA",
      name: "Fake TIA Token",
      symbol: "TIA",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.svg",
      },
    },
    {
      description: "The LP token of USDC-INIT",
      denom_units: [
        {
          denom:
            "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
          exponent: 0,
        },
        {
          denom: "USDC-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
      display: "USDC-INIT LP",
      name: "USDC-INIT LP Token",
      symbol: "USDC-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.svg",
      },
    },
    {
      description: "The LP token of ETH-INIT",
      denom_units: [
        {
          denom:
            "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
          exponent: 0,
        },
        {
          denom: "ETH-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
      display: "ETH-INIT LP",
      name: "ETH-INIT LP Token",
      symbol: "ETH-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.svg",
      },
    },
    {
      description: "The LP token of TIA-INIT",
      denom_units: [
        {
          denom:
            "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
          exponent: 0,
        },
        {
          denom: "TIA-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
      display: "TIA-INIT LP",
      name: "TIA-INIT LP Token",
      symbol: "TIA-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.svg",
      },
    },
    {
      description: "Minitswap staked INIT",
      denom_units: [
        {
          denom: "uoinit",
          exponent: 0,
        },
        {
          denom: "oINIT",
          exponent: 6,
        },
      ],
      base: "uoinit",
      display: "oINIT",
      name: "omniINIT",
      symbol: "oINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/omniINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/omniINIT.png",
      },
    },
    {
      description: "Minimove IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/9DD7B5DF63F03D505BE785C9B32095A33CBB9472503077D375E0A557BE5A2B87",
          exponent: 0,
        },
        {
          denom: "minimoveINIT",
          exponent: 6,
        },
      ],
      base: "ibc/9DD7B5DF63F03D505BE785C9B32095A33CBB9472503077D375E0A557BE5A2B87",
      display: "minimoveINIT",
      name: "Minimove IBC INIT",
      symbol: "minimoveINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT.png",
      },
    },
    {
      description: "Minitswap Minimove IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/d460381fad32fa8a165f7b13ca4343f99ebd83580b1dc121049b8e695fb6c5b5",
          exponent: 0,
        },
        {
          denom: "minimoveINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/d460381fad32fa8a165f7b13ca4343f99ebd83580b1dc121049b8e695fb6c5b5",
      display: "minimoveINIT-INIT LP",
      name: "minimoveINIT-INIT LP Token",
      symbol: "minimoveINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT-INIT.png",
      },
    },
    {
      description: "BSC LayerZero Test Token",
      denom_units: [
        {
          denom:
            "move/7dfcccb8d69af29d585165531eae5c558061d3e3bded2a121be3ef5e189e6b01",
          exponent: 0,
        },
        {
          denom: "TEST LZ",
          exponent: 8,
        },
      ],
      base: "move/7dfcccb8d69af29d585165531eae5c558061d3e3bded2a121be3ef5e189e6b01",
      display: "TEST LZ",
      name: "BSC LayerZero Test Token",
      symbol: "TEST LZ",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/bsc-test-lz.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/bsc-test-lz.png",
      },
    },
  ],
};
export default info;
