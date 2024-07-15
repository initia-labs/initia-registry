import { AssetList } from "@initia/initia-registry-types";

import * as _tucana from "./tucana";
import * as _noon from "./noon";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _milkyway from "./milkyway";
import * as _initia from "./initia";
import * as _init_ai from "./init_ai";
import * as _civitia from "./civitia";
import * as _blackwing from "./blackwing";

const assets: AssetList[] = [
  _tucana.assets,
  _noon.assets,
  _miniwasm.assets,
  _minimove.assets,
  _milkyway.assets,
  _initia.assets,
  _init_ai.assets,
  _civitia.assets,
  _blackwing.assets,
];

export default assets;
