import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "milkyway",
  chain_id: "glados-1",
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
        address: "https://rpc.testnet.milkyway.zone",
        provider: "MilkyWay Labs",
      },
    ],
    rest: [
      {
        address: "https://lcd.testnet.milkyway.zone",
        provider: "MilkyWay Labs",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/glados-1",
      tx_page: "https://scan.testnet.initia.xyz/glados-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/glados-1/accounts/${accountAddress}",
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
    op_bridge_id: "98",
    op_denoms: [],
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "icacontroller-initiation-1.FEE,",
        channel_id: "channel-3",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "icacontroller-initiation-1.WITHDRAWAL",
        channel_id: "channel-4",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "icacontroller-initiation-1.REDEMPTION",
        channel_id: "channel-5",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "icacontroller-initiation-1.COMMUNITY_POOL_DEPOSIT",
        channel_id: "channel-6",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "icacontroller-initiation-1.COMMUNITY_POOL_RETURN",
        channel_id: "channel-7",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "icacontroller-initiation-1.DELEGATION",
        channel_id: "channel-8",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/milkyway/assetlist.json",
  },
};
export default info;
