import { AssetList } from "@initia/initia-registry-types";

import * as _zaar from "./zaar";
import * as _yominet from "./yominet";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _minievm from "./minievm";
import * as _milkyway from "./milkyway";
import * as _initia from "./initia";
import * as _culinaris from "./culinaris";
import * as _civitia from "./civitia";

const assets: AssetList[] = [
  _zaar.assets,
  _yominet.assets,
  _miniwasm.assets,
  _minimove.assets,
  _minievm.assets,
  _milkyway.assets,
  _initia.assets,
  _culinaris.assets,
  _civitia.assets,
];

export default assets;
