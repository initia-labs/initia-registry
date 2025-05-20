import { Chain } from "@initia/initia-registry-types";

import * as _zaar from "./zaar";
import * as _yominet from "./yominet";
import * as _rena from "./rena";
import * as _rave from "./rave";
import * as _moo from "./moo";
import * as _intergaze from "./intergaze";
import * as _initia from "./initia";
import * as _ingnetwork from "./ingnetwork";
import * as _inertia from "./inertia";
import * as _embr from "./embr";
import * as _echelon from "./echelon";
import * as _civitia from "./civitia";
import * as _bfb from "./bfb";

const chains: Chain[] = [
  _zaar.chain,
  _yominet.chain,
  _rena.chain,
  _rave.chain,
  _moo.chain,
  _intergaze.chain,
  _initia.chain,
  _ingnetwork.chain,
  _inertia.chain,
  _embr.chain,
  _echelon.chain,
  _civitia.chain,
  _bfb.chain,
];

export default chains;
