import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "rena",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/9d3d65bf3329e45ad659f9cbee7d6dc7b6246b001e32131a9b465215eab90562",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/9d3d65bf3329e45ad659f9cbee7d6dc7b6246b001e32131a9b465215eab90562",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "30",
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
