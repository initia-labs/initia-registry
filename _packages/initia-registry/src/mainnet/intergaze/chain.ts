import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "intergaze",
  pretty_name: "Intergaze",
  chain_id: "intergaze-1",
  bech32_prefix: "init",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc.intergaze-apis.com",
      },
    ],
    rest: [
      {
        address: "https://rest.intergaze-apis.com",
      },
    ],
    grpc: [
      {
        address: "grpc.intergaze-apis.com:443",
      },
    ],
  },
  key_algos: ["ethsecp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/fb936ffef4eb4019d82941992cc09ae2788ce7197fcb08cb00c4fe6f5e79184e",
        fixed_min_gas_price: 0.03,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/intergaze.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/intergaze.png",
  },
  metadata: {
    op_bridge_id: "31",
    op_denoms: ["uinit"],
    executor_uri: "https://executor.intergaze-apis.com",
    ibc_channels: [
      {
        chain_id: "interwoven-1",
        port_id: "nft-transfer",
        channel_id: "channel-67",
        version: "ics721-1",
      },
      {
        chain_id: "interwoven-1",
        port_id: "transfer",
        channel_id: "channel-66",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/intergaze/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v1.0.2",
    },
  },
};
export default info;
