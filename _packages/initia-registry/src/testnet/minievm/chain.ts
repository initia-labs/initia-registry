import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "minievm",
  chain_id: "minievm-2",
  website: "https://initia.xyz",
  pretty_name: "Minievm",
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
        denom: "GAS",
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  codebase: {},
  description: "Minievm Public Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.minievm-2.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.minievm-2.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    rest: [
      {
        address: "https://rest.minievm-2.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rest-skip.minievm-2.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    grpc: [
      {
        address: "grpc://35.186.157.168:9090",
        provider: "Initia Labs",
      },
      {
        address: "grpc-skip.minievm-2.initia.xyz:443",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/minievm-2",
      tx_page: "https://scan.testnet.initia.xyz/minievm-2/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/minievm-2/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/minievm.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/minievm.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/minievm.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/images/minievm.svg",
  },
  metadata: {
    op_bridge_id: "1",
    op_denoms: ["uinit"],
    executor_uri: "https://executor.minievm-2.initia.xyz",
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
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minievm/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.5.5",
    },
  },
};
export default info;
