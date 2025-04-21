import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "nuwarollup",
  pretty_name: "Nuwa",
  chain_id: "nuwa-rollup-1",
  bech32_prefix: "init",
  network_type: "testnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-nuwa-rollup-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-nuwa-rollup-1.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-nuwa-rollup-1.anvil.asia-southeast.initia.xyz:443",
      },
    ],
  },
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/6df67ba2b8890ef45c525bdccac4d69e48502e9ee482fac8cc6eb9036c2fb364",
        fixed_min_gas_price: 0.01,
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rena.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/rena.png",
  },
  metadata: {
    op_bridge_id: "1152",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-nuwa-rollup-1.anvil.asia-southeast.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/nuwarollup/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v1.0.0-rc.0",
    },
  },
};
export default info;
