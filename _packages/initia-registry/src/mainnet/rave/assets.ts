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
      description: "USDC on Initia",
      denom_units: [
        {
          denom: "evm/7A52fbedb032a685Ce10a82E076A21C2AD7849c7",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x7A52fbedb032a685Ce10a82E076A21C2AD7849c7",
      base: "evm/7A52fbedb032a685Ce10a82E076A21C2AD7849c7",
      display: "USDC",
      name: "USD Coin",
      symbol: "USDC",
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
    {
      description: "MilkyWay's Liquid Staked milkINIT",
      denom_units: [
        {
          denom: "evm/76B459D863B31E8b0Cc8175dacfC451061114E14",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x76B459D863B31E8b0Cc8175dacfC451061114E14",
      base: "evm/76B459D863B31E8b0Cc8175dacfC451061114E14",
      display: "milkINIT",
      name: "milkINIT",
      symbol: "milkINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png",
      },
    },
    {
      description: "MilkyWay's Liquid Staked TIA",
      denom_units: [
        {
          denom: "evm/7Add4070C2530481BC74C667067DcD0BCD56eEd2",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x7Add4070C2530481BC74C667067DcD0BCD56eEd2",
      base: "evm/7Add4070C2530481BC74C667067DcD0BCD56eEd2",
      display: "milkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
      },
    },
    {
      description: "The native token of Celestia on Initia via IBC",
      denom_units: [
        {
          denom: "evm/6AB7373EdA7F9CDbab4993124d373eD09d48A545",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x6AB7373EdA7F9CDbab4993124d373eD09d48A545",
      base: "evm/6AB7373EdA7F9CDbab4993124d373eD09d48A545",
      display: "TIA",
      name: "Celestia Native Token",
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
      description: "Ether.Fi's Wrapped eETH LRT",
      denom_units: [
        {
          denom: "evm/6C90DcB74d30fE14fd55393499537cd9b7d02FaC",
          exponent: 0,
        },
        {
          denom: "WEETH",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x6C90DcB74d30fE14fd55393499537cd9b7d02FaC",
      base: "evm/6C90DcB74d30fE14fd55393499537cd9b7d02FaC",
      display: "WEETH",
      name: "Ether.Fi Wrapped eETH LRT",
      symbol: "WEETH",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/WEETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/WEETH.png",
      },
    },
    {
      description: "The LST of INIT by Inertia",
      denom_units: [
        {
          denom: "evm/9b51c105b768dF44d78bE80B53aD45579b7ee103",
          exponent: 0,
        },
        {
          denom: "sINIT",
          exponent: 18,
        },
      ],
      base: "evm/9b51c105b768dF44d78bE80B53aD45579b7ee103",
      display: "sINIT",
      name: "sINIT",
      symbol: "sINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/sINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/sINIT.png",
      },
    },
    {
      description: "MilkyWay's Liquid Staked INIT",
      denom_units: [
        {
          denom: "evm/bB4d87cB72E9a515D0846A8801F07d887eeF1C13",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 18,
        },
      ],
      base: "evm/bB4d87cB72E9a515D0846A8801F07d887eeF1C13",
      display: "milkINIT",
      name: "MilkyWay's INIT LST",
      symbol: "milkINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkINIT.png",
      },
    },
    {
      description: "MilkyWay's Liquid Staked TIA",
      denom_units: [
        {
          denom: "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96",
          exponent: 0,
        },
        {
          denom: "milkTIA",
          exponent: 18,
        },
      ],
      base: "evm/856aB2c9F35B9187aB3eB0Fcd11DCc6160427e96",
      display: "milkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      coingecko_id: "milkyway-staked-tia",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkTIA.png",
      },
    },
  ],
};
export default info;
