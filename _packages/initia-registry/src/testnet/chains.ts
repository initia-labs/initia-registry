import { Chain } from "@initia/initia-registry-types";

import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _minievm from "./minievm";
import * as _milkyway from "./milkyway";
import * as _initia from "./initia";
import * as _civitia from "./civitia";

const chains: Chain[] = [
  _miniwasm.chain,
  _minimove.chain,
  _minievm.chain,
  _milkyway.chain,
  _initia.chain,
  _civitia.chain,
];

export default chains;
