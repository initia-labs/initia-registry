import { AssetList } from "@initia/initia-registry-types";

import * as _initia from "./initia";
import * as _echelon from "./echelon";

const assets: AssetList[] = [_initia.assets, _echelon.assets];

export default assets;
