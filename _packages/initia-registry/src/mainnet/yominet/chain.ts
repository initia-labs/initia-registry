import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "yominet",
  pretty_name: "Yominet",
  chain_id: "yominet-1",
  evm_chain_id: 428962654539583,
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-yominet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-yominet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-yominet-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://jsonrpc-yominet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://jsonrpc-ws-yominet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "evm/E1Ff7038eAAAF027031688E1535a055B2Bac2546",
        fixed_min_gas_price: 5000000,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/yominet.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/yominet.png",
  },
  metadata: {
    op_bridge_id: "11",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-yominet-1.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/yominet/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v1.0.0-rc.0-kami.1",
    },
  },
};
export default info;
