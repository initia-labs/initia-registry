import { IBCInfo } from '@initia/initia-registry-types';

import * as _devnet from './devnet/all'

const ibc: IBCInfo[] = [..._devnet.ibc];

export default ibc;
