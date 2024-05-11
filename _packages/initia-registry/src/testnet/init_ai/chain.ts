import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "init_ai",
  chain_id: "init-ai-1",
  website: "https://init-ai.testnet.initia.xyz",
  pretty_name: "INIT AI",
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
          "l2/aadf1a9da6a38b7e7e11839364ee42002260eff1657f403b9ce608337bcb986b",
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
  description: "INIT AI Public Testnet",
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-617bacff-7d34-4eb8-87f4-ee16fb4e0ac7.ue1-prod.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-617bacff-7d34-4eb8-87f4-ee16fb4e0ac7.ue1-prod.newmetric.xyz",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/init-ai-1",
      tx_page: "https://scan.testnet.initia.xyz/init-ai-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/init-ai-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/init_ai.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/init_ai.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/init_ai.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/images/init_ai.svg",
  },
  metadata: {
    op_bridge_id: "6",
    op_denoms: ["uinit"],
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/init_ai/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v0.2.11",
    },
  },
};
export default info;
