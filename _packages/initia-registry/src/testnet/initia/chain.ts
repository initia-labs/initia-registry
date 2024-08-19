import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "initia",
  chain_id: "initiation-1",
  website: "https://initia.xyz",
  pretty_name: "Initia",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "initiad",
  node_home: "$HOME/.initia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          "move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff",
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
      {
        denom:
          "move/dbf06c48af3984ec6d9ae8a9aa7dbb0bb1e784aa9b8c4a5681af660cf8558d7d",
      },
      {
        denom:
          "move/a2b0d3c8e53e379ede31f3a361ff02716d50ec53c6b65b8c48a81d5b06548200",
      },
      {
        denom:
          "move/b134ae6786f10ef74294e627d2519b63b7c742a6735f98682929fea9a84744d2",
      },
    ],
  },
  codebase: {},
  description: "Initia Public Testnet",
  apis: {
    rpc: [
      {
        address:
          "https://b545809c-5562-4e60-b5a1-22e83df57748.initiation-1.mesa-rpc.newmetric.xyz",
        provider: "newmetric",
      },
      {
        address: "https://rpc.initiation-1.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://initia-testnet-rpc.polkachu.com",
        provider: "polkachu",
      },
      {
        address: "https://testnet-initia-rpc.lavenderfive.com",
        provider: "lavenderfive",
      },
      {
        address: "https://rpc-initia-testnet.whispernode.com",
        provider: "whispernode",
      },
      {
        address: "https://rpc.initiation.test.pfc.zone",
        provider: "pfc",
      },
      {
        address: "https://rpc-initia.01node.com",
        provider: "01node",
      },
      {
        address: "https://initia-testnet-rpc.bwarelabs.com",
        provider: "bwarelabs",
      },
      {
        address: "https://api.t.initia.bh.rocks",
        provider: "blockhunters",
      },
      {
        address: "https://initia-testnet-rpc.kanosei.xyz",
        provider: "kanosei",
      },
      {
        address: "https://rpc-initia-testnet.trusted-point.com:443",
        provider: "trustedpoint",
      },
      {
        address: "https://initia-testnet-rpc.itrocket.net",
        provider: "ITRocket",
      },
      {
        address: "https://rpc-skip.initiation-1.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    rest: [
      {
        address:
          "https://b545809c-5562-4e60-b5a1-22e83df57748.initiation-1.mesa-rest.newmetric.xyz",
        provider: "newmetric",
      },
      {
        address: "https://lcd.initiation-1.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://initia-testnet-api.polkachu.com",
        provider: "polkachu",
      },
      {
        address: "https://testnet-initia-api.lavenderfive.com",
        provider: "lavenderfive",
      },
      {
        address: "https://api-initia-testnet.whispernode.com",
        provider: "whispernode",
      },
      {
        address: "https://api.initiation.test.pfc.zone",
        provider: "pfc",
      },
      {
        address: "https://initia-testnet-lcd.bwarelabs.com",
        provider: "bwarelabs",
      },
      {
        address: "https://rpc.t.initia.bh.rocks",
        provider: "blockhunters",
      },
      {
        address: "https://initia-testnet-api.kanosei.xyz",
        provider: "kanosei",
      },
      {
        address: "https://api-initia-testnet.trusted-point.com",
        provider: "trustedpoint",
      },
      {
        address: "https://initia-testnet-api.itrocket.net",
        provider: "ITRocket",
      },
      {
        address: "https://lcd-skip.initiation-1.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    api: [
      {
        address: "https://api.initiation-1.initia.xyz",
        provider: "Initia Labs",
      },
    ],
    grpc: [
      {
        address: "grpc.initiation-1.initia.xyz:9090",
        provider: "Initia Labs",
      },
      {
        address: "initia-testnet-grpc.polkachu.com:25790",
        provider: "polkachu",
      },
      {
        address: "testnet-initia-grpc.lavenderfive.com:443",
        provider: "lavenderfive",
      },
      {
        address: "grpc-initia.01node.com:9090",
        provider: "01node",
      },
      {
        address: "initia-testnet-grpc.itrocket.net:443",
        provider: "ITRocket",
      },
      {
        address: "35.240.231.235:9090",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/initiation-1",
      tx_page: "https://scan.testnet.initia.xyz/initiation-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/initiation-1/accounts/${accountAddress}",
    },
  ],
  faucets: [
    {
      kind: "faucet",
      url: "https://faucet.testnet.initia.xyz/",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
  },
  metadata: {
    is_l1: true,
    ibc_channels: [
      {
        chain_id: "minimove-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "minimove-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "miniwasm-1",
        port_id: "transfer",
        channel_id: "channel-2",
        version: "ics20-1",
      },
      {
        chain_id: "miniwasm-1",
        port_id: "nft-transfer",
        channel_id: "channel-3",
        version: "ics721-1",
      },
      {
        chain_id: "init-ai-1",
        port_id: "transfer",
        channel_id: "channel-9",
        version: "ics20-1",
      },
      {
        chain_id: "init-ai-1",
        port_id: "nft-transfer",
        channel_id: "channel-10",
        version: "ics721-1",
      },
      {
        chain_id: "birdee-1",
        port_id: "transfer",
        channel_id: "channel-25",
        version: "ics20-1",
      },
      {
        chain_id: "birdee-1",
        port_id: "nft-transfer",
        channel_id: "channel-26",
        version: "ics721-1",
      },
      {
        chain_id: "tomcat-1",
        port_id: "transfer",
        channel_id: "channel-13",
        version: "ics20-1",
      },
      {
        chain_id: "tomcat-1",
        port_id: "nft-transfer",
        channel_id: "channel-14",
        version: "ics721-1",
      },
      {
        chain_id: "burrito-1",
        port_id: "transfer",
        channel_id: "channel-31",
        version: "ics20-1",
      },
      {
        chain_id: "landlord-1",
        port_id: "transfer",
        channel_id: "channel-48",
        version: "ics20-1",
      },
      {
        chain_id: "landlord-1",
        port_id: "nft-transfer",
        channel_id: "channel-49",
        version: "ics721-1",
      },
      {
        chain_id: "glados-1",
        port_id: "transfer",
        channel_id: "channel-310",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/assetlist.json",
  },
};
export default info;
