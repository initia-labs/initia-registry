import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "milkyway",
  chain_id: "glados-4",
  website: "https://milkyway.zone",
  pretty_name: "MilkyWay",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.milkywayd",
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "GAS",
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.2,
        average_gas_price: 0.3,
        high_gas_price: 0.4,
      },
    ],
  },
  description: "MilkyWay milkINIT Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc-glados-4.anvil.asia-southeast.initia.xyz",
        provider: "Initia Labs",
      },
    ],
    rest: [
      {
        address: "https://rest-glados-4.anvil.asia-southeast.initia.xyz",
        provider: "Initia Labs",
      },
    ],
    grpc: [
      {
        address: "grpc-glados-4.anvil.asia-southeast.initia.xyz:443",
        provider: "Initia Labs",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/glados-4",
      tx_page: "https://scan.testnet.initia.xyz/glados-4/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/glados-4/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkyway.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/milkyway.png",
  },
  metadata: {
    op_bridge_id: "822",
    op_denoms: ["uinit"],
    executor_uri: "https://opinit-api-glados-4.anvil.asia-southeast.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v0.5.4",
    },
  },
};
export default info;
