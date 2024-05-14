import { AssetList } from "@initia/initia-registry-types";

import * as _tucana from "./tucana";
import * as _noon from "./noon";
import * as _init_ai from "./init_ai";

const assets: AssetList[] = [_tucana.assets, _noon.assets, _init_ai.assets];

export default assets;
