import { Chain } from "@initia/initia-registry-types";

import * as _tucana from "./tucana";
import * as _noon from "./noon";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _milkyway from "./milkyway";
import * as _initia from "./initia";
import * as _init_ai from "./init_ai";
import * as _civitia from "./civitia";
import * as _blackwing from "./blackwing";

const chains: Chain[] = [
  _tucana.chain,
  _noon.chain,
  _miniwasm.chain,
  _minimove.chain,
  _milkyway.chain,
  _initia.chain,
  _init_ai.chain,
  _civitia.chain,
  _blackwing.chain,
];

export default chains;
