import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "zaar",
  assets: [
    {
      description: "Fake ZAAR Token",
      denom_units: [
        {
          denom: "evm/48e68Bed35e199927FF94ECDC34A125C7bfc87e8",
          exponent: 0,
        },
        {
          denom: "fZAAR",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x48e68Bed35e199927FF94ECDC34A125C7bfc87e8",
      base: "evm/48e68Bed35e199927FF94ECDC34A125C7bfc87e8",
      display: "fZAAR",
      name: "Fake Zaar",
      symbol: "fZAAR",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
      },
    },
  ],
};
export default info;
