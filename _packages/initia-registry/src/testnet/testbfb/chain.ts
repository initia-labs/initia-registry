import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "testbfb",
  pretty_name: "BFB",
  chain_id: "testbfb-3",
  evm_chain_id: 783603684970272,
  bech32_prefix: "init",
  network_type: "testnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-testbfb-3.anvil.europe-west.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-testbfb-3.anvil.europe-west.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-testbfb-3.anvil.europe-west.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://jsonrpc-testbfb-3.anvil.europe-west.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://jsonrpc-ws-testbfb-3.anvil.europe-west.initia.xyz",
      },
    ],
  },
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
        fixed_min_gas_price: 3000000000,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/BFB.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/BFB.png",
  },
  metadata: {
    op_bridge_id: "1198",
    op_denoms: ["uinit"],
    executor_uri: "https://opinit-api-testbfb-3.anvil.europe-west.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/testbfb/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v1.0.7-rc.0",
    },
  },
};
export default info;
