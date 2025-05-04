import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "zaarmainnet",
  pretty_name: "Zaar",
  chain_id: "zaar-mainnet-1",
  evm_chain_id: 1335097526422335,
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-zaar-mainnet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-zaar-mainnet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-zaar-mainnet-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address:
          "https://jsonrpc-zaar-mainnet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address:
          "wss://jsonrpc-ws-zaar-mainnet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "evm/7Fb2A94A13186E3C338f0DA9728B4835D86b1a7B",
        fixed_min_gas_price: 15000000000,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/zaar-mainnet-1",
      tx_page: "https://scan.initia.xyz/zaar-mainnet-1/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/zaar-mainnet-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ZAAR.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ZAAR.png",
  },
  metadata: {
    op_bridge_id: "15",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-zaar-mainnet-1.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/zaarmainnet/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v1.0.3",
    },
  },
};
export default info;
