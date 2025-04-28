import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "initia",
  chain_id: "interwoven-1",
  website: "https://initia.xyz",
  pretty_name: "Initia",
  status: "live",
  network_type: "mainnet",
  bech32_prefix: "init",
  daemon_name: "initiad",
  node_home: "$HOME/.initia",
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "uinit",
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.015,
        high_gas_price: 0.04,
      },
      {
        denom:
          "ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4",
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "uinit",
      },
    ],
  },
  codebase: {},
  description: "Initia Mainnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    rest: [
      {
        address: "https://rest.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rest-skip.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    api: [
      {
        address: "https://api.initia.xyz",
        provider: "Initia Labs",
      },
    ],
    grpc: [
      {
        address: "grpc.initia.xyz:443",
        provider: "Initia Labs",
      },
      {
        address: "grpc-skip.initia.xyz:443",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/interwoven-1",
      tx_page: "https://scan.initia.xyz/interwoven-1/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/interwoven-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
  },
  metadata: {
    is_l1: true,
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/initia/assetlist.json",
    ibc_channels: [
      {
        chain_id: "osmosis-1",
        port_id: "transfer",
        channel_id: "channel-71",
        version: "ics20-1",
      },
      {
        chain_id: "noble-1",
        port_id: "transfer",
        channel_id: "channel-3",
        version: "ics20-1",
      },
      {
        chain_id: "echelon-1",
        port_id: "nft-transfer",
        channel_id: "channel-36",
        version: "ics721-1",
      },
      {
        chain_id: "echelon-1",
        port_id: "transfer",
        channel_id: "channel-35",
        version: "ics20-1",
      },
      {
        chain_id: "yominet-1",
        port_id: "nft-transfer",
        channel_id: "channel-26",
        version: "ics721-1",
      },
      {
        chain_id: "yominet-1",
        port_id: "transfer",
        channel_id: "channel-25",
        version: "ics20-1",
      },
      {
        chain_id: "civitia-1",
        port_id: "nft-transfer",
        channel_id: "channel-28",
        version: "ics721-1",
      },
      {
        chain_id: "civitia-1",
        port_id: "transfer",
        channel_id: "channel-27",
        version: "ics20-1",
      },
      {
        chain_id: "intergaze-1",
        port_id: "nft-transfer",
        channel_id: "channel-67",
        version: "ics721-1",
      },
      {
        chain_id: "intergaze-1",
        port_id: "transfer",
        channel_id: "channel-66",
        version: "ics20-1",
      },
      {
        chain_id: "inertia-2",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-70",
        version: '{"fee_version":"ics29-1","app_version":"ics721-1"}',
      },
      {
        chain_id: "inertia-2",
        port_id: "transfer",
        channel_id: "channel-69",
        version: '{"fee_version":"ics29-1","app_version":"ics20-1"}',
      },
      {
        chain_id: "zaar-mainnet-1",
        port_id: "nft-transfer",
        channel_id: "channel-34",
        version: "ics721-1",
      },
      {
        chain_id: "zaar-mainnet-1",
        port_id: "transfer",
        channel_id: "channel-33",
        version: "ics20-1",
      },
      {
        chain_id: "ingnetwork-1",
        port_id: "nft-transfer",
        channel_id: "channel-59",
        version: "ics721-1",
      },
      {
        chain_id: "ingnetwork-1",
        port_id: "transfer",
        channel_id: "channel-58",
        version: "ics20-1",
      },
      {
        chain_id: "rave-1",
        port_id: "nft-transfer",
        channel_id: "channel-39",
        version: "ics721-1",
      },
      {
        chain_id: "rave-1",
        port_id: "transfer",
        channel_id: "channel-38",
        version: "ics20-1",
      },
    ],
  },
};
export default info;
