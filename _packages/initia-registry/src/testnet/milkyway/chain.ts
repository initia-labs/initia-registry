import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "milkyway",
  chain_id: "glados-2.1",
  website: "https://milkyway.zone",
  pretty_name: "MilkyWay",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "milkywayd",
  node_home: "$HOME/.milkywayd",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "umilk",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.2,
        average_gas_price: 0.3,
        high_gas_price: 0.4,
      },
      {
        denom:
          "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.2,
        average_gas_price: 0.3,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  description: "MilkyWay Public Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.rollup-testnet.milkyway.zone",
        provider: "MilkyWay Labs",
      },
      {
        address: "https://rpc-skip.rollup-testnet.milkyway.zone",
        provider: "MilkyWay Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    rest: [
      {
        address: "https://lcd.rollup-testnet.milkyway.zone",
        provider: "MilkyWay Labs",
      },
      {
        address: "https://lcd-skip.rollup-testnet.milkyway.zone",
        provider: "MilkyWay Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
    grpc: [
      {
        address: "grpc.rollup-testnet.milkyway.zone:443",
        provider: "MilkyWay Labs",
      },
      {
        address: "grpc-skip.rollup-testnet.milkyway.zone:443",
        provider: "MilkyWay Labs",
        authorizedUser: "skip",
        indexForSkip: 0,
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/glados-2.1",
      tx_page: "https://scan.testnet.initia.xyz/glados-2.1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/glados-2.1/accounts/${accountAddress}",
    },
  ],
  faucets: [],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MilkyWay.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MilkyWay.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MilkyWay.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/images/MilkyWay.svg",
  },
  metadata: {
    op_bridge_id: "64",
    op_denoms: [],
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
      {
        chain_id: "initiation-2",
        port_id: "icacontroller-initiation-2.DELEGATION",
        channel_id: "channel-2",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "icacontroller-initiation-2.FEE",
        channel_id: "channel-3",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "icacontroller-initiation-2.WITHDRAWAL",
        channel_id: "channel-4",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "icacontroller-initiation-2.REDEMPTION",
        channel_id: "channel-5",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "icacontroller-initiation-2.COMMUNITY_POOL_DEPOSIT",
        channel_id: "channel-6",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "icacontroller-initiation-2.COMMUNITY_POOL_RETURN",
        channel_id: "channel-7",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v0.5.4",
    },
  },
};
export default info;
