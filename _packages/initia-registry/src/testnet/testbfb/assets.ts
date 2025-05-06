import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "testbfb",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "evm/6ed1637781269560b204c27cd42d95e057c4be44",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x6ed1637781269560b204c27cd42d95e057c4be44",
      base: "evm/6ed1637781269560b204c27cd42d95e057c4be44",
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
      description: "In-game currency of Battle for Blockchain",
      denom_units: [
        {
          denom: "evm/979d5cC349236EE6F5F6468853600265195aA51B",
          exponent: 0,
        },
        {
          denom: "BFB",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x979d5cC349236EE6F5F6468853600265195aA51B",
      base: "evm/979d5cC349236EE6F5F6468853600265195aA51B",
      display: "BFB",
      name: "BFB",
      symbol: "BFB",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/BFB.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/BFB.png",
      },
    },
  ],
};
export default info;
