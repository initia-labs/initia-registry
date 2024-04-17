import { IBCInfo } from "@initia/initia-registry-types";

import * as _initia from "./initia";
import * as _blackwing from "./blackwing";

const ibc: IBCInfo[] = [..._initia.ibc_chain1, ..._blackwing.ibc_chain1];

export default ibc;
