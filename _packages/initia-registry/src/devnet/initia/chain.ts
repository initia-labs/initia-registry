import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "initia",
  chain_id: "mahalo-2",
  website: "https://initia.xyz",
  pretty_name: "Initia",
  status: "live",
  network_type: "devnet",
  bech32_prefix: "init",
  daemon_name: "initiad",
  node_home: "$HOME/.initia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "uinit",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom: "ueth",
      },
      {
        denom: "uusdc",
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "uinit",
      },
      {
        denom:
          "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
      },
      {
        denom:
          "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
      },
    ],
  },
  codebase: {},
  description: "Initia Closed Devnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.mahalo-2.initia.xyz",
        provider: "Foundation",
      },
    ],
    rest: [
      {
        address: "https://lcd.mahalo-2.initia.xyz",
        provider: "Foundation",
      },
    ],
    api: [
      {
        address: "https://api.mahalo-2.initia.xyz",
        provider: "Foundation",
      },
    ],
    grpc: [
      {
        address: "grpc://34.87.121.251:9090",
        provider: "Foundation",
      },
    ],
  },
  explorers: [
    {
      kind: "explorer",
      url: "https://explorer.mahalo-2.initia.xyz/?layer=l1%2520testnet",
      tx_page:
        "https://explorer.mahalo-2.initia.xyz/tx/${txHash}?layer=l1%20testnet",
      account_page:
        "https://explorer.mahalo-2.initia.xyz/address/${accountAddress}?layer=l1%20testnet",
    },
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/mahalo-2",
      tx_page: "https://scan.initia.xyz/mahalo-2/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/mahalo-2/accounts/${accountAddress}",
    },
  ],
  faucets: [
    {
      kind: "faucet",
      url: "https://faucet.mahalo-2.initia.xyz/",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/images/INIT.svg",
  },
  metadata: {
    is_l1: true,
    ibc_channels: [
      {
        chain_id: "minimove-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "minimove-2",
        port_id: "nft-transfer",
        channel_id: "channel-2",
        version: "ics721-1",
      },
      {
        chain_id: "miniwasm-2",
        port_id: "transfer",
        channel_id: "channel-1",
        version: "ics20-1",
      },
      {
        chain_id: "miniwasm-2",
        port_id: "nft-transfer",
        channel_id: "channel-3",
        version: "ics721-1",
      },
      {
        chain_id: "contro-test-1",
        port_id: "transfer",
        channel_id: "channel-64",
        version: "ics20-1",
      },
      {
        chain_id: "tomcat-1",
        port_id: "transfer",
        channel_id: "channel-65",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/devnets/initia/assetlist.json",
  },
};
export default info;
