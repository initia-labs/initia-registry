import { AssetList } from "@initia/initia-registry-types";

import * as _zaar from "./zaar";
import * as _nuwarollup from "./nuwarollup";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _minievm from "./minievm";
import * as _milkyway from "./milkyway";
import * as _infinityg from "./infinityg";
import * as _inertia_legacy from "./inertia_legacy";
import * as _embr from "./embr";
import * as _culinaris from "./culinaris";

const assets: AssetList[] = [
  _zaar.assets,
  _nuwarollup.assets,
  _miniwasm.assets,
  _minimove.assets,
  _minievm.assets,
  _milkyway.assets,
  _infinityg.assets,
  _inertia_legacy.assets,
  _embr.assets,
  _culinaris.assets,
];

export default assets;
