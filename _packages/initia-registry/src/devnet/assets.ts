import { AssetList } from "@initia/initia-registry-types";

import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _initia from "./initia";

const assets: AssetList[] = [
  _miniwasm.assets,
  _minimove.assets,
  _initia.assets,
];

export default assets;
