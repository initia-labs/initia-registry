import { Chain } from '@initia/initia-registry-types';

import * as _testnet from './testnet/all';
import * as _mainnet from './mainnet/all'

const chains: Chain[] = [..._testnet.chains,..._mainnet.chains];

export default chains;
