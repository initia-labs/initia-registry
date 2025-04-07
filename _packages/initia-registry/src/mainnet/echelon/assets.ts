import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "echelon",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/23c8396041db74441f4268d0c7e0533177dc3e028a47a8e584318f2d0c46fbe9",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/23c8396041db74441f4268d0c7e0533177dc3e028a47a8e584318f2d0c46fbe9",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "16",
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
      description: "Circle’s USD Coin on Initia",
      denom_units: [
        {
          denom:
            "l2/de17c24216dbf72c28330b352762a7b13e86b0cbc65c005ead58f15ba85d7258",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "l2/de17c24216dbf72c28330b352762a7b13e86b0cbc65c005ead58f15ba85d7258",
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
        {
          type: "op",
          counterparty: {
            base_denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "16",
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
      description: "Milkyway’s liquid staked TIA on Initia",
      denom_units: [
        {
          denom:
            "l2/f74e7d10d0b1142ff883a60aa629b74bceb434e2ccccc0051bdbaa05e2e255ef",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 6,
        },
      ],
      base: "l2/f74e7d10d0b1142ff883a60aa629b74bceb434e2ccccc0051bdbaa05e2e255ef",
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
            channel_id: "channel-100108",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
          },
        },
        {
          type: "op",
          counterparty: {
            base_denom:
              "ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "16",
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
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom:
            "l2/4407c4c43437bacb779fa1aa9cb38b76dd8dce8bf28fb68dbf2242cc92b71ba6",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "l2/4407c4c43437bacb779fa1aa9cb38b76dd8dce8bf28fb68dbf2242cc92b71ba6",
      display: "TIA",
      name: "Celestia",
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
        {
          type: "op",
          counterparty: {
            base_denom:
              "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "16",
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
  ],
};
export default info;
