import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "civitia",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/afaa3f4e1717c75712f8e8073e41f051a4e516cd25daa82d948c4729388edefd",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/afaa3f4e1717c75712f8e8073e41f051a4e516cd25daa82d948c4729388edefd",
      display: "INIT",
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/INIT.svg",
      },
    },
    {
      description: "The INIT Liquid Staking Token",
      denom_units: [
        {
          denom:
            "ibc/7F4EE5B281CD4EEF975BD4A892A275D9AB4987BDB70974763A438524631347E5",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 6,
        },
      ],
      base: "ibc/7F4EE5B281CD4EEF975BD4A892A275D9AB4987BDB70974763A438524631347E5",
      display: "milkINIT",
      name: "INIT Liquid Staking Token",
      symbol: "milkINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/milkINIT.svg",
      },
    },
  ],
};
export default info;
