import { AssetList } from '@initia/initia-registry-types';

import * as _wasm from './wasm';
import * as _move from './move';
import * as _evm from './evm'

const assets: AssetList[] = [_wasm.assets,_move.assets,_evm.assets];

export default assets;
