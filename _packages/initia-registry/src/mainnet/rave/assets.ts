import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "rave",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x4f7566f67941283a30cf65de7b9c6fdf2c04FCA1",
      base: "evm/4f7566f67941283a30cf65de7b9c6fdf2c04FCA1",
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
      description: "Ether.Fi's Wrapped eETH LRT",
      denom_units: [
        {
          denom: "evm/9b51c105b768dF44d78bE80B53aD45579b7ee103",
          exponent: 0,
        },
        {
          denom: "WEETH",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x9b51c105b768dF44d78bE80B53aD45579b7ee103",
      base: "evm/9b51c105b768dF44d78bE80B53aD45579b7ee103",
      display: "WEETH",
      name: "Ether.Fi Wrapped eETH LRT",
      symbol: "WEETH",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/weETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/weETH.png",
      },
    },
  ],
};
export default info;
