import { AssetList } from "@initia/initia-registry-types";

import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _initia from "./initia";
import * as _controverse from "./controverse";
import * as _blackwing from "./blackwing";

const assets: AssetList[] = [
  _miniwasm.assets,
  _minimove.assets,
  _initia.assets,
  _controverse.assets,
  _blackwing.assets,
];

export default assets;
