import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "moo",
  pretty_name: "MilkyWay",
  chain_id: "moo-1",
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-moo-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-moo-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-moo-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
        fixed_min_gas_price: 0.015,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/moo-1",
      tx_page: "https://scan.initia.xyz/moo-1/txs/${txHash}",
      account_page: "https://scan.initia.xyz/moo-1/accounts/${accountAddress}",
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
    op_bridge_id: "13",
    op_denoms: ["uinit"],
    executor_uri: "https://opinit-api-moo-1.anvil.asia-southeast.initia.xyz",
    ibc_channels: [
      {
        chain_id: "interwoven-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "interwoven-1",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/moo/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v1.0.2",
    },
  },
};
export default info;
