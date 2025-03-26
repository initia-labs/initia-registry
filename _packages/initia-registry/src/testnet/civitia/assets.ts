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
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
      },
    },
    {
      description: "Wrapped Minievm GAS",
      denom_units: [
        {
          denom:
            "ibc/CBB9B3DD892704F8D0162F358EF2919517D2B060FE338974014FA1550D9A5CE4",
          exponent: 0,
        },
        {
          denom: "wGAS",
          exponent: 6,
        },
      ],
      base: "ibc/CBB9B3DD892704F8D0162F358EF2919517D2B060FE338974014FA1550D9A5CE4",
      display: "wGAS",
      name: "Wrapped Minievm GAS",
      symbol: "wGAS",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "ibc/A2F87E21B3D8E13E4342EAA3000D7CAD16497C9F22FF75440ADD9053F5DEF201",
            channel_id: "channel-222",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/transfer/channel-0/evm/D0763d5Bb4751F84e2FeB12Aaf3D42867e66350d",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/GAS.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/GAS.png",
      },
    },
    {
      description: "Noble USDC",
      denom_units: [
        {
          denom:
            "ibc/7234ED78870F67A2F6C1EE973B1D9F9EB25127B0706D849BC714B68EAF360536",
          exponent: 0,
        },
        {
          denom: "nUSDC",
          exponent: 6,
        },
      ],
      base: "ibc/7234ED78870F67A2F6C1EE973B1D9F9EB25127B0706D849BC714B68EAF360536",
      display: "nUSDC",
      name: "Noble USDC",
      symbol: "nUSDC",
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
