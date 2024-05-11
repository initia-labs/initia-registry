import { Chain } from "@initia/initia-registry-types";

import * as _testnet from "./testnet/all";
import * as _devnet from "./devnet/all";

const chains: Chain[] = [..._testnet.chains, ..._devnet.chains];

export default chains;
