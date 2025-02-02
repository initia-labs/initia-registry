import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "zaar",
  chain_id: "zaar-testnet-1",
  evm_chain_id: 3814270102388757,
  pretty_name: "Zaar",
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
        denom: "evm/48e68Bed35e199927FF94ECDC34A125C7bfc87e8",
        fixed_min_gas_price: 15000000000,
        low_gas_price: 15000000000,
        average_gas_price: 15000000000,
        high_gas_price: 15000000000,
      },
    ],
  },
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-sequencer-fd70c395-4cfc-4624-ab8a-8e025af6a140.ane1-prod-nocsm.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-sequencer-fd70c395-4cfc-4624-ab8a-8e025af6a140.ane1-prod-nocsm.newmetric.xyz",
      },
    ],
    grpc: [
      {
        address:
          "maze-grpc-sequencer-fd70c395-4cfc-4624-ab8a-8e025af6a140.ane1-prod-nocsm.newmetric.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address:
          "https://maze-jsonrpc-sequencer-fd70c395-4cfc-4624-ab8a-8e025af6a140.ane1-prod-nocsm.newmetric.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address:
          "https://maze-ws-sequencer-fd70c395-4cfc-4624-ab8a-8e025af6a140.ane1-prod-nocsm.newmetric.xyz",
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
  },
  metadata: {
    op_bridge_id: "99",
    op_denoms: ["uinit"],
    executor_uri:
      "https://maze-api-opinit-fd70c395-4cfc-4624-ab8a-8e025af6a140.ane1-prod-nocsm.newmetric.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.6.9",
    },
  },
};
export default info;
