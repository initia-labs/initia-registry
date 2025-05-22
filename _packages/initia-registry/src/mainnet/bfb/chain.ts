import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "bfb",
  pretty_name: "Battle for Blockchain",
  chain_id: "bfb-1",
  website: "https://battleforblockchain.com",
  description:
    "Fully onchain battle world, where value gets redistributed based on players performance.",
  evm_chain_id: 3920262608331171,
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-bfb-1.anvil.europe-west.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-bfb-1.anvil.europe-west.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-bfb-1.anvil.europe-west.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://jsonrpc-bfb-1.anvil.europe-west.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://jsonrpc-ws-bfb-1.anvil.europe-west.initia.xyz",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
        fixed_min_gas_price: 3000000000,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/bfb-1",
      tx_page: "https://scan.initia.xyz/bfb-1/txs/${txHash}",
      account_page: "https://scan.initia.xyz/bfb-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/BFB.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/BFB.png",
  },
  metadata: {
    op_bridge_id: "28",
    op_denoms: ["uinit"],
    executor_uri: "https://opinit-api-bfb-1.anvil.europe-west.initia.xyz",
    ibc_channels: [
      {
        chain_id: "interwoven-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "interwoven-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/bfb/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v1.0.5",
    },
  },
};
export default info;
