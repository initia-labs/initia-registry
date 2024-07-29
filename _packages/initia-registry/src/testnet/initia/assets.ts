import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "initia",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom: "uinit",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "uinit",
      display: "INIT",
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
    {
      description: "The fake ETH",
      denom_units: [
        {
          denom: "ueth",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "ueth",
      display: "ETH",
      name: "Fake ETH Token",
      symbol: "ETH",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH.svg",
      },
    },
    {
      description: "The fake USDC",
      denom_units: [
        {
          denom: "uusdc",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "uusdc",
      display: "USDC",
      name: "Fake USDC Token",
      symbol: "USDC",
      coingecko_id: "",
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
      description: "The fake TIA",
      denom_units: [
        {
          denom: "utia",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "utia",
      display: "TIA",
      name: "Fake TIA Token",
      symbol: "TIA",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA.svg",
      },
    },
    {
      description: "The LP token of USDC-INIT",
      denom_units: [
        {
          denom:
            "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
          exponent: 0,
        },
        {
          denom: "USDC-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
      display: "USDC-INIT LP",
      name: "USDC-INIT LP Token",
      symbol: "USDC-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC-INIT.svg",
      },
    },
    {
      description: "The LP token of ETH-INIT",
      denom_units: [
        {
          denom:
            "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
          exponent: 0,
        },
        {
          denom: "ETH-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
      display: "ETH-INIT LP",
      name: "ETH-INIT LP Token",
      symbol: "ETH-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/ETH-INIT.svg",
      },
    },
    {
      description: "The native token of Tucana",
      denom_units: [
        {
          denom:
            "ibc/276C63284D960E3E4D76AEFC9A8BA338BAD24E30530C7C95E7EFC4D250D4E23D",
          exponent: 0,
        },
        {
          denom: "TUC",
          exponent: 6,
        },
      ],
      base: "ibc/276C63284D960E3E4D76AEFC9A8BA338BAD24E30530C7C95E7EFC4D250D4E23D",
      display: "TUC",
      name: "Tucana Native Token",
      symbol: "TUC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "tucana",
            base_denom: "utuc",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-25",
            path: "transfer/channel-25/utuc",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA.svg",
      },
    },
    {
      description: "The LP token of TIA-INIT",
      denom_units: [
        {
          denom:
            "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
          exponent: 0,
        },
        {
          denom: "TIA-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
      display: "TIA-INIT LP",
      name: "TIA-INIT LP Token",
      symbol: "TIA-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/TIA-INIT.svg",
      },
    },
    {
      description: "The LP token of Tucana",
      denom_units: [
        {
          denom:
            "ibc/73D13E2708E021B78521AE9EE6159EFABCBA892EF39E68A08F969955B025E3B1",
          exponent: 0,
        },
        {
          denom: "TLP",
          exponent: 6,
        },
      ],
      base: "ibc/73D13E2708E021B78521AE9EE6159EFABCBA892EF39E68A08F969955B025E3B1",
      display: "TLP",
      name: "Tucana Perps LP",
      symbol: "TLP",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "tucana",
            base_denom:
              "move/17bf475fe65c54864db2ba45883b8d3fa198d80e4edd31088fd41d505075080b",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-25",
            path: "transfer/channel-25/move/17bf475fe65c54864db2ba45883b8d3fa198d80e4edd31088fd41d505075080b",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA-PERP.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA-PERP.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA-PERP.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/tucana/images/TUCANA-PERP.svg",
      },
    },
    {
      description: "The fake wBTC",
      denom_units: [
        {
          denom:
            "move/ff11e7d22c7bd2177b1c721441e795c1df48a10a9638dda68505152f6a646b18",
          exponent: 0,
        },
        {
          denom: "wBTC",
          exponent: 9,
        },
      ],
      base: "move/ff11e7d22c7bd2177b1c721441e795c1df48a10a9638dda68505152f6a646b18",
      display: "wBTC",
      name: "Fake wBTC Token",
      symbol: "wBTC",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/wBTC.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/wBTC.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/wBTC.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/wBTC.svg",
      },
    },
    {
      description: "The fake USDT",
      denom_units: [
        {
          denom:
            "move/eb0f5927508f1d866dddc1ad3fe67c9d39c9149a80b75a5f4f4aa8f2e73a54a8",
          exponent: 0,
        },
        {
          denom: "USDT",
          exponent: 9,
        },
      ],
      base: "move/eb0f5927508f1d866dddc1ad3fe67c9d39c9149a80b75a5f4f4aa8f2e73a54a8",
      display: "USDT",
      name: "Fake USDT Token",
      symbol: "USDT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDT.svg",
      },
    },
    {
      description: "Testnet Gas Token",
      denom_units: [
        {
          denom:
            "move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff",
          exponent: 0,
        },
        {
          denom: "GAS",
          exponent: 6,
        },
      ],
      base: "move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff",
      display: "GAS",
      name: "GAS Token",
      symbol: "GAS",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/GAS.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/GAS.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/GAS.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/GAS.svg",
      },
    },
    {
      description: "Blackwing IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/424623885F261A9307BB124412F75BDCD422B3355FB1C463218F27189B13413F",
          exponent: 0,
        },
        {
          denom: "blackwingINIT",
          exponent: 6,
        },
      ],
      base: "ibc/424623885F261A9307BB124412F75BDCD422B3355FB1C463218F27189B13413F",
      display: "blackwingINIT",
      name: "Blackwing IBC INIT",
      symbol: "blackwingINIT",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "8",
          },
        },
        {
          type: "ibc",
          counterparty: {
            chain_name: "balckwing",
            base_denom:
              "l2/aee375e9d0b181f0d9d3a49f9a3d1d6b05d62b0ac81f8c92b9282afa4213d884",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-13",
            path: "transfer/channel-13/l2/aee375e9d0b181f0d9d3a49f9a3d1d6b05d62b0ac81f8c92b9282afa4213d884",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/blackwingINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/blackwingINIT.png",
      },
    },
    {
      description: "Civitia IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/528D3C0840595B1CBD498E68E10243C07E39E0945F3ABA94548550B315BA3C0F",
          exponent: 0,
        },
        {
          denom: "civitiaINIT",
          exponent: 6,
        },
      ],
      base: "ibc/528D3C0840595B1CBD498E68E10243C07E39E0945F3ABA94548550B315BA3C0F",
      display: "civitiaINIT",
      name: "Civitia IBC INIT",
      symbol: "civitiaINIT",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "24",
          },
        },
        {
          type: "ibc",
          counterparty: {
            chain_name: "civitia",
            base_denom:
              "l2/afaa3f4e1717c75712f8e8073e41f051a4e516cd25daa82d948c4729388edefd",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-48",
            path: "transfer/channel-48/l2/afaa3f4e1717c75712f8e8073e41f051a4e516cd25daa82d948c4729388edefd",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/civitiaINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/civitiaINIT.png",
      },
    },
    {
      description: "Init AI IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/1F100D516D47D9CD47867494E71BFECF16C332A1EEAE488AF5E3F9FD38E68953",
          exponent: 0,
        },
        {
          denom: "initaiINIT",
          exponent: 6,
        },
      ],
      base: "ibc/1F100D516D47D9CD47867494E71BFECF16C332A1EEAE488AF5E3F9FD38E68953",
      display: "initaiINIT",
      name: "Init AI IBC INIT",
      symbol: "initaiINIT",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "6",
          },
        },
        {
          type: "ibc",
          counterparty: {
            chain_name: "init_ai",
            base_denom:
              "l2/aadf1a9da6a38b7e7e11839364ee42002260eff1657f403b9ce608337bcb986b",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-9",
            path: "transfer/channel-9/l2/aadf1a9da6a38b7e7e11839364ee42002260eff1657f403b9ce608337bcb986b",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/initaiINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/initaiINIT.png",
      },
    },
    {
      description: "Minimove IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/82EB1C694C571F954E68BFD68CFCFCD6123B0EBB69AAA8BAB7A082939B45E802",
          exponent: 0,
        },
        {
          denom: "minimoveINIT",
          exponent: 6,
        },
      ],
      base: "ibc/82EB1C694C571F954E68BFD68CFCFCD6123B0EBB69AAA8BAB7A082939B45E802",
      display: "minimoveINIT",
      name: "Minimove IBC INIT",
      symbol: "minimoveINIT",
      coingecko_id: "",
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
        {
          type: "ibc",
          counterparty: {
            chain_name: "minimove",
            base_denom:
              "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT.png",
      },
    },
    {
      description: "Miniwasm IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/AD8D520BF2D981113B652A3BCD55368EF146FCB9E016F8B1DAECAA5D570BC8A1",
          exponent: 0,
        },
        {
          denom: "miniwasmINIT",
          exponent: 6,
        },
      ],
      base: "ibc/AD8D520BF2D981113B652A3BCD55368EF146FCB9E016F8B1DAECAA5D570BC8A1",
      display: "miniwasmINIT",
      name: "Miniwasm IBC INIT",
      symbol: "miniwasmINIT",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "2",
          },
        },
        {
          type: "ibc",
          counterparty: {
            chain_name: "miniwasm",
            base_denom:
              "l2/2588fd87a8e081f6a557f43ff14f05dddf5e34cb27afcefd6eaf81f1daea30d0",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-2",
            path: "transfer/channel-2/l2/2588fd87a8e081f6a557f43ff14f05dddf5e34cb27afcefd6eaf81f1daea30d0",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/miniwasmINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/miniwasmINIT.png",
      },
    },
    {
      description: "Noon IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/A345E027F3A8C797ABBF558244637DDD9A5C2C869433FE4C4B9273FAE9EE4683",
          exponent: 0,
        },
        {
          denom: "noonINIT",
          exponent: 6,
        },
      ],
      base: "ibc/A345E027F3A8C797ABBF558244637DDD9A5C2C869433FE4C4B9273FAE9EE4683",
      display: "noonINIT",
      name: "Noon IBC INIT",
      symbol: "noonINIT",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "17",
          },
        },
        {
          type: "ibc",
          counterparty: {
            chain_name: "noon",
            base_denom:
              "l2/ffea49d63cbadcfd749b4f635eca198b2f3b44cb1f6b580f5d201d58f3bf7aea",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-31",
            path: "transfer/channel-31/l2/ffea49d63cbadcfd749b4f635eca198b2f3b44cb1f6b580f5d201d58f3bf7aea",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/noonINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/noonINIT.png",
      },
    },
    {
      description: "Tucana IBC bridged INIT",
      denom_units: [
        {
          denom:
            "ibc/7421E86E848DCE5B75BD67AE7039A4B289A76F8B1BE5625E699C441B7BA1CC73",
          exponent: 0,
        },
        {
          denom: "tucanaINIT",
          exponent: 6,
        },
      ],
      base: "ibc/7421E86E848DCE5B75BD67AE7039A4B289A76F8B1BE5625E699C441B7BA1CC73",
      display: "tucanaINIT",
      name: "Tucana IBC INIT",
      symbol: "tucanaINIT",
      coingecko_id: "",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "14",
          },
        },
        {
          type: "ibc",
          counterparty: {
            chain_name: "tucana",
            base_denom:
              "l2/333f8e6ae6855338f99d451126bfefc1b920763c16681d55fbc7df68ccb36972",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-25",
            path: "transfer/channel-25/l2/333f8e6ae6855338f99d451126bfefc1b920763c16681d55fbc7df68ccb36972",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/tucanaINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/tucanaINIT.png",
      },
    },
    {
      description: "The INIT Liquid Staking Token",
      denom_units: [
        {
          denom:
            "ibc/26939E676F967B14E319631A9A42233148BBC7F7CEFDCBD347447AF0AE37B1AD",
          exponent: 0,
        },
        {
          denom: "milkINIT",
          exponent: 6,
        },
      ],
      base: "ibc/26939E676F967B14E319631A9A42233148BBC7F7CEFDCBD347447AF0AE37B1AD",
      display: "milkINIT",
      name: "INIT Liquid Staking Token",
      symbol: "milkINIT",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "milkyway",
            base_denom: "milkuinit",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-310",
            path: "transfer/channel-310/milkuinit",
          },
        },
      ],
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
    {
      description: "Minitswap staked INIT",
      denom_units: [
        {
          denom:
            "move/8d9c9cb5eac53eef597d309a55089f6f2c7932cc2a88d041155adb27aa93d809",
          exponent: 0,
        },
        {
          denom: "oINIT",
          exponent: 6,
        },
      ],
      base: "move/8d9c9cb5eac53eef597d309a55089f6f2c7932cc2a88d041155adb27aa93d809",
      display: "oINIT",
      name: "omniINIT",
      symbol: "oINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/omniINIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/omniINIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/omniINIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/omniINIT.svg",
      },
    },
    {
      description: "Minitswap Minimove IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/47804fcaa89c941d3969be6e9eef545eb4476ec4c102ca576729ad93b3524b56",
          exponent: 0,
        },
        {
          denom: "minimoveINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/47804fcaa89c941d3969be6e9eef545eb4476ec4c102ca576729ad93b3524b56",
      display: "minimoveINIT-INIT LP",
      name: "minimoveINIT-INIT LP Token",
      symbol: "minimoveINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/minimoveINIT-INIT.png",
      },
    },
    {
      description: "Minitswap Miniwasm IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/cd623bbbeda203118dcb0ecee6885950b0f22375db2b135a2205284fdbad03e6",
          exponent: 0,
        },
        {
          denom: "miniwasmINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/cd623bbbeda203118dcb0ecee6885950b0f22375db2b135a2205284fdbad03e6",
      display: "miniwasmINIT-INIT LP",
      name: "miniwasmINIT-INIT LP Token",
      symbol: "miniwasmINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/miniwasmINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/miniwasmINIT-INIT.png",
      },
    },
    {
      description: "Minitswap Civitia IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/a0739176807862684bfb051cce84bc2751447649bd30c00f6c76fb6b85093f1c",
          exponent: 0,
        },
        {
          denom: "civitiaINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/a0739176807862684bfb051cce84bc2751447649bd30c00f6c76fb6b85093f1c",
      display: "civitiaINIT-INIT LP",
      name: "civitiaINIT-INIT LP Token",
      symbol: "civitiaINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/civitiaINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/civitiaINIT-INIT.png",
      },
    },
    {
      description: "Minitswap Init AI IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/669d7f76d36a929fa1e9447e0b3a62d47d598d23b4c57ba366c5b39e8dbd4ae0",
          exponent: 0,
        },
        {
          denom: "initaiINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/669d7f76d36a929fa1e9447e0b3a62d47d598d23b4c57ba366c5b39e8dbd4ae0",
      display: "initaiINIT-INIT LP",
      name: "initaiINIT-INIT LP Token",
      symbol: "initaiINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/initaiINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/initaiINIT-INIT.png",
      },
    },
    {
      description: "Minitswap Noon IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/4b315e6bc5d34f8b1f7f0a7deadce9435c05d4f9e7d91d337f982f9753251efd",
          exponent: 0,
        },
        {
          denom: "noonINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/4b315e6bc5d34f8b1f7f0a7deadce9435c05d4f9e7d91d337f982f9753251efd",
      display: "noonINIT-INIT LP",
      name: "noonINIT-INIT LP Token",
      symbol: "noonINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/noonINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/noonINIT-INIT.png",
      },
    },
    {
      description: "Minitswap Tucana IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/d419ed4d39e541119bb1b88d638050784449be56bb5b9acc8e204a700d94e165",
          exponent: 0,
        },
        {
          denom: "tucanaINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/d419ed4d39e541119bb1b88d638050784449be56bb5b9acc8e204a700d94e165",
      display: "tucanaINIT-INIT LP",
      name: "tucanaINIT-INIT LP Token",
      symbol: "tucanaINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/tucanaINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/tucanaINIT-INIT.png",
      },
    },
    {
      description: "Minitswap Blackwing IBC INIT Pool Token",
      denom_units: [
        {
          denom:
            "move/4360457169ced76577ba18d5e7816b2fe45737e1c8a8bb6e2154758b1ec6545c",
          exponent: 0,
        },
        {
          denom: "blackwingINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/4360457169ced76577ba18d5e7816b2fe45737e1c8a8bb6e2154758b1ec6545c",
      display: "blackwingINIT-INIT LP",
      name: "blackwingINIT-INIT LP Token",
      symbol: "blackwingINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/blackwingINIT-INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/blackwingINIT-INIT.png",
      },
    },
    {
      description: "The LP token of milkINIT-INIT",
      denom_units: [
        {
          denom:
            "move/b3f4d22a7373948d1afce1023a2e875425ccc182d823b714e19a7a897fdb17d5",
          exponent: 0,
        },
        {
          denom: "milkINIT-INIT LP",
          exponent: 6,
        },
      ],
      base: "move/b3f4d22a7373948d1afce1023a2e875425ccc182d823b714e19a7a897fdb17d5",
      display: "milkINIT-INIT LP",
      name: "milkINIT-INIT LP Token",
      symbol: "milkINIT-INIT LP",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/milkINIT-INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/milkINIT-INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/milkINIT-INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/milkINIT-INIT.svg",
      },
    },
  ],
};
export default info;
