import { AssetList } from '@initia/initia-registry-types';

import * as _yominet from './yominet';
import * as _strat from './strat';
import * as _initia from './initia';
import * as _inertia from './inertia';
import * as _hotake from './hotake';
import * as _echelon from './echelon';
import * as _civitia from './civitia';
import * as _cabal from './cabal'

const assets: AssetList[] = [_yominet.assets,_strat.assets,_initia.assets,_inertia.assets,_hotake.assets,_echelon.assets,_civitia.assets,_cabal.assets];

export default assets;
