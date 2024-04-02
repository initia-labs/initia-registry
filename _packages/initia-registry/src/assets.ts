import { AssetList } from "@initia/initia-registry-types";

import * as _devnet from "./devnet/all";

const assets: AssetList[] = [..._devnet.assets];

export default assets;
