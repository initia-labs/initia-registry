import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "embr_old",
  chain_id: "embr-1",
  evm_chain_id: 930997494890041,
  pretty_name: "Embr.fun",
  status: "upcoming",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  website: "https://embr.fun",
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/025e02154bf24211cdceb46a81e37cdc9d3c0d5dca472f69354621d3b3169b0f",
        fixed_min_gas_price: 1e-9,
        low_gas_price: 1e-9,
        average_gas_price: 1e-9,
        high_gas_price: 1e-9,
      },
    ],
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-0-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rpc-1-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rpc-embr-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-0-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rest-1-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rest-embr-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-0-embr-1.anvil.asia-southeast.initia.xyz:443",
      },
      {
        address: "grpc-1-embr-1.anvil.asia-southeast.initia.xyz:443",
      },
      {
        address: "grpc-embr-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://jsonrpc-0-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://jsonrpc-1-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://jsonrpc-embr-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://jsonrpc-ws-0-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "wss://jsonrpc-ws-1-embr-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "wss://jsonrpc-ws-embr-1.anvil.asia-southeast.initia.xyz",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/embr-1",
      tx_page: "https://scan.testnet.initia.xyz/embr-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/embr-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/embr.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/embr.png",
  },
  metadata: {
    op_bridge_id: "823",
    op_denoms: ["uinit"],
    executor_uri: "https://opinit-api-embr-1.anvil.asia-southeast.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/embr_old/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.6.9",
    },
  },
};
export default info;
