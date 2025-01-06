import { AssetList } from "@initia/initia-registry-types";

import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _minievm from "./minievm";
import * as _milkyway from "./milkyway";
import * as _initia from "./initia";
import * as _civitia from "./civitia";

const assets: AssetList[] = [
  _miniwasm.assets,
  _minimove.assets,
  _minievm.assets,
  _milkyway.assets,
  _initia.assets,
  _civitia.assets,
];

export default assets;
