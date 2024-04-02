import { Chain } from "@initia/initia-registry-types";

import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _initia from "./initia";

const chains: Chain[] = [_miniwasm.chain, _minimove.chain, _initia.chain];

export default chains;
