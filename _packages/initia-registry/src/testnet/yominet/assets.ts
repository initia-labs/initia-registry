import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "yominet",
  assets: [
    {
      description: "The Kamigotchi world currency",
      denom_units: [
        {
          denom: "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
          exponent: 0,
        },
        {
          denom: "ONYX",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
      base: "evm/9D9c32921575Fd98e67E27C0189ED4b750Cb17C5",
      display: "ONYX",
      name: "ONYX",
      symbol: "ONYX",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/yominet/images/onyx.svg",
      },
    },
  ],
};
export default info;
