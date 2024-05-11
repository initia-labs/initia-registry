import { AssetList } from "@initia/initia-registry-types";

import * as _testnet from "./testnet/all";
import * as _devnet from "./devnet/all";

const assets: AssetList[] = [..._testnet.assets, ..._devnet.assets];

export default assets;
