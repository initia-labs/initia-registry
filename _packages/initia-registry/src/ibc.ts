import { IBCInfo } from "@initia/initia-registry-types";

import * as _mainnet from "./mainnet/all";

const ibc: IBCInfo[] = [..._mainnet.ibc];

export default ibc;
