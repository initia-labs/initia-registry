import { Chain } from "@initia/initia-registry-types";

import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _initia from "./initia";
import * as _init_ai from "./init_ai";

const chains: Chain[] = [
  _miniwasm.chain,
  _minimove.chain,
  _initia.chain,
  _init_ai.chain,
];

export default chains;
