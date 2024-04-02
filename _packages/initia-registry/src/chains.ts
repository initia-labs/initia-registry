import { Chain } from "@initia/initia-registry-types";

import * as _devnet from "./devnet/all";

const chains: Chain[] = [..._devnet.chains];

export default chains;
