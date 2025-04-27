import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "echelon",
  pretty_name: "Echelon",
  chain_id: "echelon-1",
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-echelon-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-echelon-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-echelon-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/23c8396041db74441f4268d0c7e0533177dc3e028a47a8e584318f2d0c46fbe9",
        fixed_min_gas_price: 0,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/echelon.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/echelon.png",
  },
  metadata: {
    op_bridge_id: "16",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-echelon-1.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/echelon/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v1.0.0-beta.14",
    },
  },
};
export default info;
