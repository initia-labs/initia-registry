import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "minimove",
  chain_id: "minimove-2",
  website: "https://initia.xyz",
  pretty_name: "Minimove",
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
  codebase: {},
  description: "Minimove Public Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.minimove-2.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.minimove-2.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    rest: [
      {
        address: "https://rest.minimove-2.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rest-skip.minimove-2.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    grpc: [
      {
        address: "35.247.132.75:9090",
        provider: "Initia Labs",
      },
      {
        address: "grpc-skip.minimove-2.initia.xyz:443",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/minimove-2",
      tx_page: "https://scan.testnet.initia.xyz/minimove-2/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/minimove-2/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/minimove.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/minimove.png",
  },
  metadata: {
    op_bridge_id: "3",
    op_denoms: ["uinit"],
    executor_uri: "https://executor.minimove-2.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minimove/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v0.5.6",
    },
  },
};
export default info;
