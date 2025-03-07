import { Chain } from "@initia/initia-registry-types"
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "miniwasm",
  chain_id: "miniwasm-2",
  website: "https://initia.xyz",
  pretty_name: "Miniwasm",
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
  staking: {
    staking_tokens: [],
  },
  codebase: {},
  description: "Miniwasm Public Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.miniwasm-2.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.miniwasm-2.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    rest: [
      {
        address: "https://rest.miniwasm-2.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.miniwasm-2.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    grpc: [
      {
        address: "35.240.141.79:9090",
        provider: "Initia Labs",
      },
      {
        address: "grpc-skip.miniwasm-2.initia.xyz:443",
        provider: "Initia Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/miniwasm-2",
      tx_page: "https://scan.testnet.initia.xyz/miniwasm-2/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/miniwasm-2/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/miniwasm/images/miniwasm.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/miniwasm/images/miniwasm.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/miniwasm/images/miniwasm.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/miniwasm/images/miniwasm.svg",
  },
  metadata: {
    op_bridge_id: "2",
    op_denoms: ["uinit"],
    executor_uri: "https://executor.miniwasm-2.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/miniwasm/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v0.5.4",
    },
  },
}
export default info
