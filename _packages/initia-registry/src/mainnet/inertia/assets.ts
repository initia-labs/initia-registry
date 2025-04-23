import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "inertia",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/f8c3e39d364efd457858d873518c0898a10933852e4ccb09c683ca67cadd0cf6",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/f8c3e39d364efd457858d873518c0898a10933852e4ccb09c683ca67cadd0cf6",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "22",
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
  ],
};
export default info;
