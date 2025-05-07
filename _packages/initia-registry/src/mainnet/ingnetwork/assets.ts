import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "ingnetwork",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x6ed1637781269560b204c27Cd42d95e057C4BE44",
      base: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
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
  ],
};
export default info;
