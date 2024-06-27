import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "civitia",
  chain_id: "landlord-1",
  website: "https://civitia.org/",
  pretty_name: "Civitia",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/afaa3f4e1717c75712f8e8073e41f051a4e516cd25daa82d948c4729388edefd",
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
  codebase: {},
  description: "Civitia Public Testnet",
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-sequencer-beab9b6f-d96d-435e-9caf-5679296d8172.ue1-prod.newmetric.xyz",
        provider: "Foundation",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-sequencer-beab9b6f-d96d-435e-9caf-5679296d8172.ue1-prod.newmetric.xyz",
        provider: "Foundation",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://explorer.testnet.initia.xyz/landlord-1",
      tx_page: "https://explorer.testnet.initia.xyz/landlord-1/txs/${txHash}",
      account_page:
        "https://explorer.testnet.initia.xyz/landlord-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/civitia.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/civitia.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/civitia.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/images/civitia.svg",
  },
  metadata: {
    op_bridge_id: "24",
    op_denoms: ["uinit"],
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/civitia/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v0.2.12",
    },
  },
};
export default info;
