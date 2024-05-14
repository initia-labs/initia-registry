import { IBCInfo } from "@initia/initia-registry-types";

import * as _testnet from "./testnet/all";

const ibc: IBCInfo[] = [..._testnet.ibc];

export default ibc;
