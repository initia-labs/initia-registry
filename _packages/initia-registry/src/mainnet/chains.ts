import { Chain } from '@initia/initia-registry-types';

import * as _yominet from './yominet';
import * as _strat from './strat';
import * as _initia from './initia';
import * as _inertia from './inertia';
import * as _hotake from './hotake';
import * as _echelon from './echelon';
import * as _civitia from './civitia';
import * as _cabal from './cabal'

const chains: Chain[] = [_yominet.chain,_strat.chain,_initia.chain,_inertia.chain,_hotake.chain,_echelon.chain,_civitia.chain,_cabal.chain];

export default chains;
