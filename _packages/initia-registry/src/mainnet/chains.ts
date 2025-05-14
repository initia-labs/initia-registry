import { Chain } from "@initia/initia-registry-types";

import * as _zaarmainnet from "./zaarmainnet";
import * as _yominet from "./yominet";
import * as _renanuwa from "./renanuwa";
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
  _zaarmainnet.chain,
  _yominet.chain,
  _renanuwa.chain,
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
