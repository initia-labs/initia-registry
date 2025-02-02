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
            "l2/1666ede2bf1985307a86de36a6b78411cbf1edeffc2ac569e6a7b2f8753db4bb",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/1666ede2bf1985307a86de36a6b78411cbf1edeffc2ac569e6a7b2f8753db4bb",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "100",
          },
        },
      ],
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
      description: "Wrapped Minievm GAS",
      denom_units: [
        {
          denom:
            "ibc/42851A23693D404BCF4297445ED4CFF365FF1D5C16C06DFC0647EB4E325338E7",
          exponent: 0,
        },
        {
          denom: "wGAS",
          exponent: 6,
        },
      ],
      base: "ibc/42851A23693D404BCF4297445ED4CFF365FF1D5C16C06DFC0647EB4E325338E7",
      display: "wGAS",
      name: "Wrapped Minievm GAS",
      symbol: "wGAS",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "minievm",
            base_denom:
              "ibc/7685130E02E904D3B78447B4E98A1D8F9E6C0CEA77A89B8330BE10CA3A188BD6",
            channel_id: "channel-222",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/transfer/channel-0/evm/137fDE729e22c911331EA5B3ACaaf476B93E93cA",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/GAS.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/GAS.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/GAS.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/GAS.svg",
      },
    },
  ],
};
export default info;
