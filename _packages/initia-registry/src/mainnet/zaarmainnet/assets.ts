import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "zaarmainnet",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "evm/7fb2a94a13186e3c338f0da9728b4835d86b1a7b",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x7fb2a94a13186e3c338f0da9728b4835d86b1a7b",
      base: "evm/7fb2a94a13186e3c338f0da9728b4835d86b1a7b",
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
      description: "Circle’s USD Coin on Initia",
      denom_units: [
        {
          denom: "evm/bb4d87cb72e9a515d0846a8801f07d887eef1c13",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0xbb4d87cb72e9a515d0846a8801f07d887eef1c13",
      base: "evm/bb4d87cb72e9a515d0846a8801f07d887eef1c13",
      display: "USDC",
      name: "USD Coin",
      symbol: "USDC",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
      },
    },
  ],
};
export default info;
