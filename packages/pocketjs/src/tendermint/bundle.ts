//@ts-nocheck
import * as _231 from "./abci/types";
import * as _232 from "./crypto/keys";
import * as _233 from "./crypto/proof";
import * as _234 from "./p2p/types";
import * as _235 from "./types/block";
import * as _236 from "./types/evidence";
import * as _237 from "./types/params";
import * as _238 from "./types/types";
import * as _239 from "./types/validator";
import * as _240 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._231
  };
  export const crypto = {
    ..._232,
    ..._233
  };
  export const p2p = {
    ..._234
  };
  export const types = {
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239
  };
  export const version = {
    ..._240
  };
}