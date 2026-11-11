import { AssetList } from '@initia/initia-registry-types';

import * as _testnet from './testnet/all';
import * as _mainnet from './mainnet/all'

const assets: AssetList[] = [..._testnet.assets,..._mainnet.assets];

export default assets;
