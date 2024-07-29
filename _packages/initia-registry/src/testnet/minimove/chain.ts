import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "minimove",
  chain_id: "minimove-1",
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
        denom:
          "l2/771d639f30fbe45e3fbca954ffbe2fcc26f915f5513c67a4a2d0bc1d635bdefd",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom:
          "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  codebase: {},
  description: "Minimove Public Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.minimove-1.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://rpc-skip.minimove-1.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    rest: [
      {
        address: "https://lcd.minimove-1.initia.xyz",
        provider: "Initia Labs",
      },
      {
        address: "https://lcd-skip.minimove-1.initia.xyz",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
    grpc: [
      {
        address: "grpc://35.198.215.41:9090",
        provider: "Initia Labs",
      },
      {
        address: "34.124.136.240:9090",
        provider: "Initia Labs",
        authorizedUser: "skip",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/minimove-1",
      tx_page: "https://scan.testnet.initia.xyz/minimove-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/minimove-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minimove/images/minimove.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minimove/images/minimove.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minimove/images/minimove.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minimove/images/minimove.svg",
  },
  metadata: {
    op_bridge_id: "1",
    op_denoms: ["uinit"],
    executor_uri: "https://executor.minimove-1.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/minimove/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v0.2.12",
    },
  },
};
export default info;
