import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "terra",
  pretty_name: "Terra",
  chain_id: "columbus-5",
  website: "https://www.terra-classic.money/",
  description:
    "Terra Classic (LUNC) is the original native governance token of the Terra ecosystem. It was previously known as Terra (LUNA) before the UST/Luna collapse and the establishment of a new Terra chain. LUNC is a Proof of Stake blockchain network token that was used for staking, governance, and minting stablecoins.",
  bech32_prefix: "terra",
  network_type: "mainnet",
  codebase: {},
  apis: {
    rpc: [
      {
        address: "https://rpc-columbus.keplr.app",
      },
    ],
    rest: [
      {
        address: "https://lcd-columbus.keplr.app",
      },
    ],
    grpc: [
      {
        address: "terra-classic-grpc.publicnode.com:443",
      },
    ],
  },
  key_algos: ["initia_ethsecp256k1", "secp256k1"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom:
          "LUNC",
        fixed_min_gas_price: 28.325,
      },
      {
        denom:
          "USTC",
        fixed_min_gas_price: 0.75,
      },
    ],
  },
  explorers: [
    {
      kind: "Galaxy Finder",
      url: "https://finder.terra-classic.hexxagon.io/",
      tx_page: "https://finder.terra-classic.hexxagon.io/mainnet/tx/${txHash}",
      account_page:
        "https://finder.terra-classic.hexxagon.io/mainnet/address/${accountAddress}",
    }, 
    {
      kind: "initia scan",
      url: "https://scan.initia.xyz/columbus-5",
      tx_page: "https://scan.initia.xyz/columbus-5/txs/${txHash}",
      account_page:
        "https://scan.initia.xyz/columbus-5/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/terra.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/terra.png",
  },
  metadata: {
    op_bridge_id: "16",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-echelon-1.anvil.asia-southeast.initia.xyz",
    ibc_channels: [
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/mainnets/terra/assetlist.json",
    minitia: {
      type: "minimove",
      version: "v1.0.0-beta.14",
    },
  },
};
export default info;
