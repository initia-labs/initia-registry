import { Chain } from '@initia/initia-registry-types';

import * as _wasm from './wasm';
import * as _move from './move';
import * as _initia from './initia';
import * as _inertia from './inertia';
import * as _evm from './evm'

const chains: Chain[] = [_wasm.chain,_move.chain,_initia.chain,_inertia.chain,_evm.chain];

export default chains;
