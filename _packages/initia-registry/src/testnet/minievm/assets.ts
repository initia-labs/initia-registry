import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "minievm",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      type_asset: "erc20",
      address: "0xD411A4eC7FdFa269575AEa6b839c1bB3485D9773",
      base: "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "1",
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
      description: "The gas token of minievm",
      denom_units: [
        {
          denom: "GAS",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x8fA4Be7466a9261d8847663adf5e34a271F8aE17",
      base: "GAS",
      display: "GAS",
      name: "Minievm Gas Token",
      symbol: "GAS",
      coingecko_id: "",
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
      description: "The fake ETH",
      denom_units: [
        {
          denom:
            "ibc/0E98D4D1D907597448FD3A7C33DDAE10A90FA86FC8A9F5A0B175393783F249CD",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      type_asset: "erc20",
      address: "0xf5F12DbA9625e86E8c3f5C90b3bE71eA92A91C3A",
      base: "ibc/0E98D4D1D907597448FD3A7C33DDAE10A90FA86FC8A9F5A0B175393783F249CD",
      display: "ETH",
      name: "Fake ETH Token",
      symbol: "ETH",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "ueth",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/ueth",
          },
        },
      ],
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
      type_asset: "erc20",
      address: "0x9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
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
    {
      description: "The fake TIA",
      denom_units: [
        {
          denom:
            "ibc/C3E53D20BC7A4CC993B17C7971F8ECD06A433C10B6A96F4C4C3714F0624C56DA",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      type_asset: "erc20",
      address: "0x532b1441646707dD9a9cc50f45221772c8b0F7B1",
      base: "ibc/C3E53D20BC7A4CC993B17C7971F8ECD06A433C10B6A96F4C4C3714F0624C56DA",
      display: "TIA",
      name: "Fake TIA Token",
      symbol: "TIA",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "utia",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/utia",
          },
        },
      ],
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
      description: "BSC LayerZero Test Token",
      denom_units: [
        {
          denom:
            "ibc/665CCAFA2768242D74D8CB2E9F5167261B6B75646E2EF2546E0707C0BFC7CDAF",
          exponent: 0,
        },
        {
          denom: "TEST LZ",
          exponent: 8,
        },
      ],
      type_asset: "erc20",
      address: "0x9A16C08Fb8787b322e6790B19622c6C03A073472",
      base: "ibc/665CCAFA2768242D74D8CB2E9F5167261B6B75646E2EF2546E0707C0BFC7CDAF",
      display: "TEST LZ",
      name: "BSC LayerZero Test Token",
      symbol: "TEST LZ",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom:
              "move/7dfcccb8d69af29d585165531eae5c558061d3e3bded2a121be3ef5e189e6b01",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/move/7dfcccb8d69af29d585165531eae5c558061d3e3bded2a121be3ef5e189e6b01",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/bsc-test-lz.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/bsc-test-lz.png",
      },
    },
  ],
};
export default info;
