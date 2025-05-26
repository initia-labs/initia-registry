import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "initia",
  chain_id: "initiation-2",
  website: "https://initia.xyz",
  pretty_name: "Initia",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "initiad",
  node_home: "$HOME/.initia",
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "uinit",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
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
  description: "Initia Public Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.testnet.initia.xyz/",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.testnet.initia.xyz/",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    rest: [
      {
        address: "https://rest.testnet.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rest-skip.testnet.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    api: [
      {
        address: "https://api.testnet.initia.xyz",
        provider: "Initia Labs",
      },
    ],
    grpc: [
      {
        address: "grpc.testnet.initia.xyz:443",
        provider: "Initia Labs",
      },
      {
        address: "grpc-skip.testnet.initia.xyz:443",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/initiation-2",
      tx_page: "https://scan.testnet.initia.xyz/initiation-2/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/initiation-2/accounts/${accountAddress}",
    },
  ],
  faucets: [],
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
    ibc_channels: [
      {
        chain_id: "minimove-2",
        port_id: "transfer",
        channel_id: "channel-4",
        version: "ics20-1",
      },
      {
        chain_id: "minimove-2",
        port_id: "nft-transfer",
        channel_id: "channel-5",
        version: "ics721-1",
      },
      {
        chain_id: "miniwasm-2",
        port_id: "transfer",
        channel_id: "channel-2",
        version: "ics20-1",
      },
      {
        chain_id: "miniwasm-2",
        port_id: "nft-transfer",
        channel_id: "channel-3",
        version: "ics721-1",
      },
      {
        chain_id: "minimove-2",
        port_id: "nft-transfer",
        channel_id: "channel-3",
        version: "ics721-1",
      },
      {
        chain_id: "minievm-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "minievm-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "transfer",
        channel_id: "channel-132",
        version: "ics20-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "nft-transfer",
        channel_id: "channel-134",
        version: "ics721-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "icahost",
        channel_id: "channel-139",
        version: "ics20-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "icahost",
        channel_id: "channel-140",
        version: "ics20-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "icahost",
        channel_id: "channel-137",
        version: "ics20-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "icahost",
        channel_id: "channel-141",
        version: "ics20-1",
      },
      {
        chain_id: "glados-2.1",
        port_id: "icahost",
        channel_id: "channel-138",
        version: "ics20-1",
      },
      {
        chain_id: "preyominet-1",
        port_id: "transfer",
        channel_id: "channel-1629",
        version: "ics20-1",
      },
      {
        chain_id: "preyominet-1",
        port_id: "nft-transfer",
        channel_id: "channel-178",
        version: "ics721-1",
      },
      {
        chain_id: "culinaris-2",
        port_id: "transfer",
        channel_id: "channel-2415",
        version: "ics20-1",
      },
      {
        chain_id: "zaar-testnet-4",
        port_id: "transfer",
        channel_id: "channel-1781",
        version: "ics20-1",
      },
      {
        chain_id: "zaar-testnet-4",
        port_id: "nft-transfer",
        channel_id: "channel-1782",
        version: "ics721-1",
      },
      {
        chain_id: "rave-test4",
        port_id: "transfer",
        channel_id: "channel-1317",
        version: "ics20-1",
      },
      {
        chain_id: "rave-test4",
        port_id: "nft-transfer",
        channel_id: "channel-1318",
        version: "ics721-1",
      },
      {
        chain_id: "nuwa-rollup-1",
        port_id: "transfer",
        channel_id: "channel-2453",
        version: "ics20-1",
      },
      {
        chain_id: "nuwa-rollup-1",
        port_id: "nft-transfer",
        channel_id: "channel-2454",
        version: "ics721-1",
      },
      {
        chain_id: "virgaze-1",
        port_id: "nft-transfer",
        channel_id: "channel-1586",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/assetlist.json",
  },
};
export default info;
