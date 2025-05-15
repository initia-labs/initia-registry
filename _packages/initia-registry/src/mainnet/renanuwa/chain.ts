import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "renanuwa",
  pretty_name: "Rena",
  chain_id: "rena-nuwa-1",
  website: "https://renalabs.xyz",
  description:
    "Building the first Trusted Execution Environment (TEE) abstraction middleware to supercharge verifiable on-chain AI use cases.",
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-rena-nuwa-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-rena-nuwa-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-rena-nuwa-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/9d3d65bf3329e45ad659f9cbee7d6dc7b6246b001e32131a9b465215eab90562",
        fixed_min_gas_price: 0.015,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/rena-nuwa-1",
      tx_page: "https://scan.initia.xyz/rena-nuwa-1/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/rena-nuwa-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rena.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rena.png",
  },
  metadata: {
    op_bridge_id: "30",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-rena-nuwa-1.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/renanuwa/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v1.0.2",
    },
  },
};
export default info;
