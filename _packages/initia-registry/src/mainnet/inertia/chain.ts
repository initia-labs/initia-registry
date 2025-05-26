import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "inertia",
  chain_id: "inertia-2",
  website: "https://app.inrt.fi",
  description: "The interwoven lending protocol for the modular ecosystem.",
  pretty_name: "Inertia",
  status: "live",
  network_type: "mainnet",
  bech32_prefix: "init",
  daemon_name: "inertiad",
  node_home: "$HOME/.inertiad",
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/c88b68df2060ba982a80d3001afcb2d354031f6901df2391acb4f0e2f545c770",
        fixed_min_gas_price: 0.015,
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.inrt.fi",
        provider: "Inertia",
      },
    ],
    rest: [
      {
        address: "https://rest.inrt.fi",
        provider: "Inertia",
      },
    ],
    grpc: [
      {
        address: "grpc.inrt.fi:443",
        provider: "Inertia",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/inertia-2",
      tx_page: "https://scan.initia.xyz/inertia-2/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/inertia-2/accounts/${accountAddress}",
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
    op_bridge_id: "32",
    op_denoms: [
      "uinit",
      "ibc/DA9AC2708B4DAA46D24E73241373CDCC850BC6446E8E0906A4062152B649DDD3",
      "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      "move/d08cf4d36d8a70cc6efe8791dc5b3d4f928df4fe41468bc138439d55ed132c3e",
      "move/b4fd0119fa43bb5a208256e92977d6552fef31191fe24299fe45f6e64dd5c6f3",
    ],
    executor_uri: "https://op-executor.inrt.fi",
    ibc_channels: [
      {
        chain_id: "interwoven-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: '{"fee_version":"ics29-1","app_version":"ics20-1"}',
      },
      {
        chain_id: "interwoven-1",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: '{"fee_version":"ics29-1","app_version":"ics721-1"}',
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/inertia/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v1.0.2",
    },
  },
};
export default info;
