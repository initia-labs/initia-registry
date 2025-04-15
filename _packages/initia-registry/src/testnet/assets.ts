import { AssetList } from "@initia/initia-registry-types";

import * as _zaar from "./zaar";
import * as _rave from "./rave";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _minievm from "./minievm";
import * as _milkyway from "./milkyway";
import * as _intergaze from "./intergaze";
import * as _infinityg from "./infinityg";
import * as _inertia from "./inertia";
import * as _embr from "./embr";
import * as _culinaris from "./culinaris";
import * as _civitia from "./civitia";

const assets: AssetList[] = [
  _zaar.assets,
  _rave.assets,
  _miniwasm.assets,
  _minimove.assets,
  _minievm.assets,
  _milkyway.assets,
  _intergaze.assets,
  _infinityg.assets,
  _inertia.assets,
  _embr.assets,
  _culinaris.assets,
  _civitia.assets,
];

export default assets;
