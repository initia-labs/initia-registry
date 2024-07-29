import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "noon",
  chain_id: "burrito-1",
  website: "https://lunchlunch.xyz",
  pretty_name: "Noon",
  status: "live",
  network_type: "testnet",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  bech32_prefix: "init",
  fees: {
    fee_tokens: [
      {
        denom:
          "l2/ffea49d63cbadcfd749b4f635eca198b2f3b44cb1f6b580f5d201d58f3bf7aea",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom: "unoon",
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
  description: "Noon Testnet",
  apis: {
    rpc: [
      {
        address: "https://burrito-1-rpc.lunchlunch.xyz",
      },
    ],
    rest: [
      {
        address: "https://burrito-1-lcd.lunchlunch.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc://23.20.67.10:9090",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/burrito-1",
      tx_page: "https://scan.testnet.initia.xyz/burrito-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/burrito-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/noon/images/NOON.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/noon/images/NOON.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/noon/images/NOON.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/noon/images/NOON.svg",
  },
  metadata: {
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/noon/assetlist.json",
    op_bridge_id: "17",
    op_denoms: ["uinit"],
    executor_uri: "https://burrito-1-executor.lunchlunch.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    minitia: {
      type: "minimove",
      version: "v0.2.12",
    },
  },
};
export default info;
