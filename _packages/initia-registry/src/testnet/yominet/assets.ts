import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "yominet",
  assets: [
    {
      description: "The Kamigotchi world currency",
      denom_units: [
        {
          denom: "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
          exponent: 0,
        },
        {
          denom: "ONYX",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
      base: "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
      display: "ONYX",
      name: "ONYX",
      symbol: "ONYX",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.svg",
      },
    },
    {
      description: "The fake USDC",
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
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg",
      },
    },
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/92380c92e0252220f901770e7f4dbd677b87b15713976a6b734db51786b9db5a",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/92380c92e0252220f901770e7f4dbd677b87b15713976a6b734db51786b9db5a",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "80",
          },
        },
      ],
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
      },
    },
  ],
};
export default info;
