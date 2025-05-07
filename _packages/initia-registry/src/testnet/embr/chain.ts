import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "embr",
  pretty_name: "Embr.fun",
  chain_id: "embr-testnet-2",
  evm_chain_id: 3698193502869237,
  bech32_prefix: "init",
  network_type: "testnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-embr-testnet-2.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-embr-testnet-2.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-embr-testnet-2.anvil.asia-southeast.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address:
          "https://jsonrpc-embr-testnet-2.anvil.asia-southeast.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address:
          "wss://jsonrpc-ws-embr-testnet-2.anvil.asia-southeast.initia.xyz",
      },
    ],
  },
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "evm/6ed1637781269560b204c27cd42d95e057c4be44",
        fixed_min_gas_price: 1,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/embr.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/embr.png",
  },
  metadata: {
    op_bridge_id: "1175",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-embr-testnet-2.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/embr/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v1.0.0-rc.2",
    },
  },
};
export default info;
