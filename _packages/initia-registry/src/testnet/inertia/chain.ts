import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "inertia",
  chain_id: "inertiation-12",
  website: "https://app.inertiation-12.inrt.fi",
  pretty_name: "Inertia",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "inertiad",
  node_home: "$HOME/.inertiad",
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/01a7a1ea004c23bad7ff1772ab739c0818c881faa1e11383ed8d549d0069f617",
        fixed_min_gas_price: 0.015,
      },
    ],
  },
  description: "The interwoven lending protocol for the modular ecosystem.",
  apis: {
    rpc: [
      {
        address: "https://rpc.inertiation-12.inrt.fi",
        provider: "Inertia",
      },
    ],
    rest: [
      {
        address: "https://rest.inertiation-12.inrt.fi",
        provider: "Inertia",
      },
    ],
    grpc: [
      {
        address: "grpc.inertiation-12.inrt.fi:443",
        provider: "Inertia",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/inertiation-12",
      tx_page: "https://scan.testnet.initia.xyz/inertiation-12/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/inertiation-12/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/inertia.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/inertia.png",
  },
  metadata: {
    op_bridge_id: "1171",
    op_denoms: [
      "uinit",
      "uusdc",
      "utia",
      "ueth",
      "move/2742a2f1ae087b1ade570bd02a78a81d2e629e764f5179f95367b7a3086aed36",
      "move/4a39f845c36fa8f9f4a200579a8d92aab2fbdb345dab7a110cf14d7d00760748",
    ],
    executor_uri: "https://op-executor.inertiation-12.inrt.fi",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: '{"fee_version":"ics29-1","app_version":"ics20-1"}',
      },
      {
        chain_id: "initiation-2",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: '{"fee_version":"ics29-1","app_version":"ics721-1"}',
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/inertia/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v1.0.0-rc.1",
    },
  },
};
export default info;
