import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "zaar",
  assets: [
    {
      description: "Testnet ZAAR Token",
      denom_units: [
        {
          denom: "evm/Bdb128Cf29d40738875297E90aa42772D354c137",
          exponent: 0,
        },
        {
          denom: "tZAAR",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0xBdb128Cf29d40738875297E90aa42772D354c137",
      base: "evm/Bdb128Cf29d40738875297E90aa42772D354c137",
      display: "tZAAR",
      name: "Test Zaar",
      symbol: "tZAAR",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ZAAR.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ZAAR.png",
      },
    },
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/b5146ab36c54aa4d1feba770591798e4ae27a846613edc841236ebf954120b09",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/b5146ab36c54aa4d1feba770591798e4ae27a846613edc841236ebf954120b09",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "1048",
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
      description: "USD Coin on Initia",
      denom_units: [
        {
          denom:
            "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      display: "USDC",
      name: "USDC",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "uusdc",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/uusdc",
          },
        },
      ],
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
