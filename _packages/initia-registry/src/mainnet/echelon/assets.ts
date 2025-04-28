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
      description: "MilkyWay's Liquid Staked INIT",
      denom_units: [
        {
          denom:
            "ibc/D1FAD67CE0EF5A303EDC29F3730BF904B77817F4B8A515ABC3AD0FA21B6AA180",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 6,
        },
      ],
      base: "ibc/D1FAD67CE0EF5A303EDC29F3730BF904B77817F4B8A515ABC3AD0FA21B6AA180",
      display: "milkINIT",
      name: "milkINIT",
      symbol: "milkINIT",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "ibc/39B55F22F15FB09189045A993817CDF0D388D3FF8773B2E22B6DE7B222636EEA",
            channel_id: "channel-35",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/transfer/channel-29/factory/init17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgsj6uxxj/umilkINIT",
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
      description: "USDC on Initia",
      denom_units: [
        {
          denom:
            "ibc/AA4E7DF065DC4D4B29B8662A919295F525B19251FB2618C41C0DED3BD1128FEE",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "ibc/AA4E7DF065DC4D4B29B8662A919295F525B19251FB2618C41C0DED3BD1128FEE",
      display: "USDC",
      name: "USD Coin",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
            channel_id: "channel-35",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/transfer/channel-3/uusdc",
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
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom:
            "ibc/05060A29687D6CA94E2CCD17A9C57AA0F2086DEC0964D677509DC2EBFE324D9E",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "ibc/05060A29687D6CA94E2CCD17A9C57AA0F2086DEC0964D677509DC2EBFE324D9E",
      display: "TIA",
      name: "Celestia Native Token",
      symbol: "TIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
            channel_id: "channel-35",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/transfer/channel-10/utia",
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
            "ibc/39026A3BC5B3135CAC7FA5551C286A05E215FDA2C3C79195EB73F6699696F4FF",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "ibc/39026A3BC5B3135CAC7FA5551C286A05E215FDA2C3C79195EB73F6699696F4FF",
      display: "ETH",
      name: "Ethereum Native Token",
      symbol: "ETH",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "move/edfcddacac79ab86737a1e9e65805066d8be286a37cb94f4884b892b0e39f954",
            channel_id: "channel-35",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/move/edfcddacac79ab86737a1e9e65805066d8be286a37cb94f4884b892b0e39f954",
          },
        },
      ],
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
            "ibc/BAF588B34262B74DEE24652CA2C78C1A2C14B3124381D3C4AB16902A86F759B0",
          exponent: 0,
        },
        {
          denom: "WEETH",
          exponent: 6,
        },
      ],
      base: "ibc/BAF588B34262B74DEE24652CA2C78C1A2C14B3124381D3C4AB16902A86F759B0",
      display: "WEETH",
      name: "Ether.Fi Wrapped eETH LRT",
      symbol: "WEETH",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "move/0eba36d73e4f8d0c10b36323fbd28ab8b3783b003ba7b86c0f3ead32a1caf7f7",
            channel_id: "channel-35",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/move/0eba36d73e4f8d0c10b36323fbd28ab8b3783b003ba7b86c0f3ead32a1caf7f7",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/WEETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/WEETH.png",
      },
    },
    {
      description: "MilkyWay's Liquid Staked TIA",
      denom_units: [
        {
          denom:
            "ibc/405E48C8163CB9AB41A00CAEA19BB8D33D5C5818D3F3CCF3B1967C3A06D17206",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 6,
        },
      ],
      base: "ibc/405E48C8163CB9AB41A00CAEA19BB8D33D5C5818D3F3CCF3B1967C3A06D17206",
      display: "milkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "ibc/297A4DE88667929480EBE6659B264C5683838CF313C61FE889F6B8D8DC6E071D",
            channel_id: "channel-35",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/transfer/channel-71/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
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
  ],
};
export default info;
