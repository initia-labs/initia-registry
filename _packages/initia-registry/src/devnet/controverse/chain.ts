import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "controverse",
  chain_id: "contro-test-1",
  website: "https://contro.tech",
  pretty_name: "The Controverse",
  status: "live",
  network_type: "devnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/2716295e82bab3b0308dc1e35837fe471657ea07ee71aebb6129739fb0f1278a",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom:
          "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  description: "Controverse Closed Devnet",
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-493360ba-cd86-4627-aca3-8b61635eb2bf.ue1-prod.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-493360ba-cd86-4627-aca3-8b61635eb2bf.ue1-prod.newmetric.xyz",
      },
    ],
    api: [
      {
        address: "https://api.contro.initia.xyz",
      },
    ],
  },
  explorers: [
    {
      kind: "explorer",
      url: "https://explorer.mahalo-2.initia.xyz/?layer=controverse",
      tx_page:
        "https://explorer.mahalo-2.initia.xyz/tx/${txHash}?layer=controverse",
      account_page:
        "https://explorer.mahalo-2.initia.xyz/address/${accountAddress}?layer=controverse",
    },
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/contro-test-1",
      tx_page: "https://scan.initia.xyz/contro-test-1/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/contro-test-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/miniwasm/images/INIT.svg",
  },
  metadata: {
    op_bridge_id: "116",
    op_denoms: ["uinit"],
    ibc_channels: [
      {
        chain_id: "mahalo-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/controverse/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v2.2.0",
    },
  },
};
export default info;
