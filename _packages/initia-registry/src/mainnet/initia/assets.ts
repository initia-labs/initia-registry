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
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
      },
    },
    {
      description: "USDC on Initia",
      denom_units: [
        {
          denom:
            "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      display: "USDC",
      name: "USD Coin",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "noble",
            base_denom: "uusdc",
            channel_id: "channel-129",
          },
          chain: {
            channel_id: "channel-3",
            path: "transfer/channel-3/uusdc",
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
      description: "MilkyWay's Liquid Staked TIA",
      denom_units: [
        {
          denom:
            "ibc/297A4DE88667929480EBE6659B264C5683838CF313C61FE889F6B8D8DC6E071D",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 6,
        },
      ],
      base: "ibc/297A4DE88667929480EBE6659B264C5683838CF313C61FE889F6B8D8DC6E071D",
      display: "milkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "osmosis",
            base_denom:
              "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
            channel_id: "channel-102129",
          },
          chain: {
            channel_id: "channel-71",
            path: "transfer/channel-71/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
      },
    },
    {
      description: "MilkyWay's Liquid Staked INIT",
      denom_units: [
        {
          denom:
            "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 6,
        },
      ],
      base: "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
      display: "milkINIT",
      name: "MilkyWay's INIT LST",
      symbol: "milkINIT",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "moo",
            base_denom:
              "factory/init17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgsj6uxxj/umilkINIT",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-29",
            path: "transfer/channel-29/factory/init17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgsj6uxxj/umilkINIT",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png",
      },
    },
    {
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom:
            "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
      display: "TIA",
      name: "Celestia Native Token",
      symbol: "TIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "celestia",
            base_denom: "utia",
            channel_id: "channel-78",
          },
          chain: {
            channel_id: "channel-10",
            path: "transfer/channel-10/utia",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
      },
    },
    {
      description: "ETH token via LayerZero",
      denom_units: [
        {
          denom:
            "move/edfcddacac79ab86737a1e9e65805066d8be286a37cb94f4884b892b0e39f954",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "move/edfcddacac79ab86737a1e9e65805066d8be286a37cb94f4884b892b0e39f954",
      display: "ETH",
      name: "Ethereum Native Token",
      symbol: "ETH",
      coingecko_id: "",
      traces: [],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
      },
    },
    {
      description: "Ether.Fi's Wrapped eETH LRT",
      denom_units: [
        {
          denom:
            "move/bcf6c17467320f8aec451165823d73af3049f9c9dfbeaff98b92ec0165a58bf8",
          exponent: 0,
        },
        {
          denom: "WEETH",
          exponent: 6,
        },
      ],
      base: "move/bcf6c17467320f8aec451165823d73af3049f9c9dfbeaff98b92ec0165a58bf8",
      display: "WEETH",
      name: "Ether.Fi Wrapped eETH LRT",
      symbol: "WEETH",
      coingecko_id: "",
      traces: [],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/weETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/weETH.png",
      },
    },
    {
      description: "The LST of INIT by Inertia",
      denom_units: [
        {
          denom:
            "move/d08cf4d36d8a70cc6efe8791dc5b3d4f928df4fe41468bc138439d55ed132c3e",
          exponent: 0,
        },
        {
          denom: "sINIT",
          exponent: 6,
        },
      ],
      base: "move/d08cf4d36d8a70cc6efe8791dc5b3d4f928df4fe41468bc138439d55ed132c3e",
      display: "sINIT",
      name: "sINIT",
      symbol: "sINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/sINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/sINIT.png",
      },
    },
    {
      description: "The LST of INIT by Inertia",
      denom_units: [
        {
          denom:
            "move/b4fd0119fa43bb5a208256e92977d6552fef31191fe24299fe45f6e64dd5c6f3",
          exponent: 0,
        },
        {
          denom: "nINIT",
          exponent: 6,
        },
      ],
      base: "move/b4fd0119fa43bb5a208256e92977d6552fef31191fe24299fe45f6e64dd5c6f3",
      display: "nINIT",
      name: "nINIT",
      symbol: "nINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/nINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/nINIT.png",
      },
    },
  ],
};
export default info;
