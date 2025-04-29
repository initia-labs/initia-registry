import { Chain } from "@initia/initia-registry-types";

import * as _zaar from "./zaar";
import * as _yominet from "./yominet";
import * as _rave from "./rave";
import * as _nuwarollup from "./nuwarollup";
import * as _miniwasm from "./miniwasm";
import * as _minimove from "./minimove";
import * as _minievm from "./minievm";
import * as _milkyway from "./milkyway";
import * as _intergaze from "./intergaze";
import * as _initia from "./initia";
import * as _infinityg from "./infinityg";
import * as _inertia_legacy from "./inertia_legacy";
import * as _inertia from "./inertia";
import * as _embr_old from "./embr_old";
import * as _embr from "./embr";
import * as _echelon from "./echelon";
import * as _culinaris from "./culinaris";
import * as _civitia from "./civitia";

const chains: Chain[] = [
  _zaar.chain,
  _yominet.chain,
  _rave.chain,
  _nuwarollup.chain,
  _miniwasm.chain,
  _minimove.chain,
  _minievm.chain,
  _milkyway.chain,
  _intergaze.chain,
  _initia.chain,
  _infinityg.chain,
  _inertia_legacy.chain,
  _inertia.chain,
  _embr_old.chain,
  _embr.chain,
  _echelon.chain,
  _culinaris.chain,
  _civitia.chain,
];

export default chains;
