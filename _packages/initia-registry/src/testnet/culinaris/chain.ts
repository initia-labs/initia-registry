import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "culinaris",
  chain_id: "culinaris-2",
  evm_chain_id: 2906125577721809,
  pretty_name: "Battle for Blockchain",
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
        denom: "umin",
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  codebase: {},
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-s2-b53886e8-ebca-41a5-8dd7-64884b25fb2c.public-think-factory.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-s2-b53886e8-ebca-41a5-8dd7-64884b25fb2c.public-think-factory.newmetric.xyz",
      },
    ],
    grpc: [
      {
        address:
          "maze-grpc-s2-b53886e8-ebca-41a5-8dd7-64884b25fb2c.public-think-factory.newmetric.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address:
          "https://maze-jsonrpc-s2-b53886e8-ebca-41a5-8dd7-64884b25fb2c.public-think-factory.newmetric.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address:
          "https://maze-ws-s2-b53886e8-ebca-41a5-8dd7-64884b25fb2c.public-think-factory.newmetric.xyz",
      },
    ],
  },
  explorers: [],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/logo.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/images/logo.png",
  },
  metadata: {
    op_bridge_id: "314",
    op_denoms: ["uinit"],
    executor_uri:
      "https://maze-api-opinit-b53886e8-ebca-41a5-8dd7-64884b25fb2c.ane1-prod-nocsm.newmetric.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/culinaris/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.6.9",
    },
  },
};
export default info;
