import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "infinityg",
  pretty_name: "Infinity-Ground",
  chain_id: "infinityg-1",
  evm_chain_id: 3583735491906152,
  bech32_prefix: "init",
  network_type: "testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rpc-0-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rpc-1-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rest-0-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address: "https://rest-1-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-infinityg-1.anvil.asia-southeast.initia.xyz:443",
      },
      {
        address: "grpc-0-infinityg-1.anvil.asia-southeast.initia.xyz:443",
      },
      {
        address: "grpc-1-infinityg-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://jsonrpc-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "https://jsonrpc-0-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "https://jsonrpc-1-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://jsonrpc-ws-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "wss://jsonrpc-ws-0-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "wss://jsonrpc-ws-1-infinityg-1.anvil.asia-southeast.initia.xyz",
      },
    ],
  },
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "GAS",
        fixed_min_gas_price: 1000000000,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/infinityg.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/infinityg.png",
  },
  metadata: {
    op_bridge_id: "958",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-infinityg-1.anvil.asia-southeast.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/infinityg/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.7.2-1",
    },
  },
};
export default info;
