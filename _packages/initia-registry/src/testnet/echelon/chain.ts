import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "echelon",
  pretty_name: "Echelon",
  chain_id: "echelon-testnet-1",
  bech32_prefix: "init",
  network_type: "testnet",
  apis: {
    rpc: [
      {
        address:
          "https://rpc-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "https://rpc-0-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "https://rpc-1-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://rest-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "https://rest-0-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
      },
      {
        address:
          "https://rest-1-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-echelon-testnet-1.anvil.asia-southeast.initia.xyz:443",
      },
      {
        address: "grpc-0-echelon-testnet-1.anvil.asia-southeast.initia.xyz:443",
      },
      {
        address: "grpc-1-echelon-testnet-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "CUSTOM",
        fixed_min_gas_price: 0.1995,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/echelon-testnet-1",
      tx_page:
        "https://scan.testnet.initia.xyz/echelon-testnet-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/echelon-testnet-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/echelon.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/echelon.png",
  },
  metadata: {
    op_bridge_id: "833",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-echelon-testnet-1.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/echelon/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v0.7.0-1",
    },
  },
};
export default info;
