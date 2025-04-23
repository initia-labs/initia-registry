import { AssetList } from "@initia/initia-registry-types";

import * as _yominet from "./yominet";
import * as _initia from "./initia";
import * as _inertia from "./inertia";
import * as _echelon from "./echelon";

const assets: AssetList[] = [
  _yominet.assets,
  _initia.assets,
  _inertia.assets,
  _echelon.assets,
];

export default assets;
