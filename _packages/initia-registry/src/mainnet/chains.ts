import { Chain } from "@initia/initia-registry-types";

import * as _yominet from "./yominet";
import * as _initia from "./initia";
import * as _inertia from "./inertia";
import * as _echelon from "./echelon";

const chains: Chain[] = [
  _yominet.chain,
  _initia.chain,
  _inertia.chain,
  _echelon.chain,
];

export default chains;
