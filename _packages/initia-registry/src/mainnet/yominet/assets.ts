import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "yominet",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96",
      base: "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96",
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
      description: "ETH token via LayerZero",
      denom_units: [
        {
          denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0xE1Ff7038eAAAF027031688E1535a055B2Bac2546",
      base: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546",
      display: "ETH",
      name: "Ethereum Native Token",
      symbol: "ETH",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
      },
    },
    {
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom: "evm/f0c644D9636b83E7491404d8D826321e44E23d15",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0xf0c644D9636b83E7491404d8D826321e44E23d15",
      base: "evm/f0c644D9636b83E7491404d8D826321e44E23d15",
      display: "TIA",
      name: "Celestia TIA",
      symbol: "TIA",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
      },
    },
  ],
};
export default info;
