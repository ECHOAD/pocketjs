//@ts-nocheck
import * as _177 from "./application/event";
import * as _178 from "./application/genesis";
import * as _179 from "./application/params";
import * as _180 from "./application/query";
import * as _181 from "./application/tx";
import * as _182 from "./application/types";
import * as _183 from "./gateway/event";
import * as _184 from "./gateway/genesis";
import * as _185 from "./gateway/params";
import * as _186 from "./gateway/query";
import * as _187 from "./gateway/tx";
import * as _188 from "./gateway/types";
import * as _189 from "./migration/event";
import * as _190 from "./migration/genesis";
import * as _191 from "./migration/morse_offchain";
import * as _192 from "./migration/morse_onchain";
import * as _193 from "./migration/params";
import * as _194 from "./migration/query";
import * as _195 from "./migration/tx";
import * as _196 from "./proof/event";
import * as _197 from "./proof/genesis";
import * as _198 from "./proof/params";
import * as _199 from "./proof/query";
import * as _200 from "./proof/tx";
import * as _201 from "./proof/types";
import * as _202 from "./service/event";
import * as _203 from "./service/genesis";
import * as _204 from "./service/params";
import * as _205 from "./service/query";
import * as _206 from "./service/relay_mining_difficulty";
import * as _207 from "./service/relay";
import * as _208 from "./service/tx";
import * as _209 from "./session/genesis";
import * as _210 from "./session/params";
import * as _211 from "./session/query";
import * as _212 from "./session/tx";
import * as _213 from "./session/types";
import * as _214 from "./shared/genesis";
import * as _215 from "./shared/params";
import * as _216 from "./shared/query";
import * as _217 from "./shared/service";
import * as _218 from "./shared/supplier";
import * as _219 from "./shared/tx";
import * as _220 from "./supplier/event";
import * as _221 from "./supplier/genesis";
import * as _222 from "./supplier/params";
import * as _223 from "./supplier/query";
import * as _224 from "./supplier/tx";
import * as _225 from "./tokenomics/event";
import * as _226 from "./tokenomics/genesis";
import * as _227 from "./tokenomics/params";
import * as _228 from "./tokenomics/query";
import * as _229 from "./tokenomics/tx";
import * as _230 from "./tokenomics/types";
import * as _380 from "./application/tx.amino";
import * as _381 from "./gateway/tx.amino";
import * as _382 from "./migration/tx.amino";
import * as _383 from "./proof/tx.amino";
import * as _384 from "./service/tx.amino";
import * as _385 from "./session/tx.amino";
import * as _386 from "./shared/tx.amino";
import * as _387 from "./supplier/tx.amino";
import * as _388 from "./tokenomics/tx.amino";
import * as _389 from "./application/tx.registry";
import * as _390 from "./gateway/tx.registry";
import * as _391 from "./migration/tx.registry";
import * as _392 from "./proof/tx.registry";
import * as _393 from "./service/tx.registry";
import * as _394 from "./session/tx.registry";
import * as _395 from "./shared/tx.registry";
import * as _396 from "./supplier/tx.registry";
import * as _397 from "./tokenomics/tx.registry";
import * as _398 from "./application/query.lcd";
import * as _399 from "./gateway/query.lcd";
import * as _400 from "./migration/query.lcd";
import * as _401 from "./proof/query.lcd";
import * as _402 from "./service/query.lcd";
import * as _403 from "./session/query.lcd";
import * as _404 from "./shared/query.lcd";
import * as _405 from "./supplier/query.lcd";
import * as _406 from "./tokenomics/query.lcd";
import * as _407 from "./application/query.rpc.Query";
import * as _408 from "./gateway/query.rpc.Query";
import * as _409 from "./migration/query.rpc.Query";
import * as _410 from "./proof/query.rpc.Query";
import * as _411 from "./service/query.rpc.Query";
import * as _412 from "./session/query.rpc.Query";
import * as _413 from "./shared/query.rpc.Query";
import * as _414 from "./supplier/query.rpc.Query";
import * as _415 from "./tokenomics/query.rpc.Query";
import * as _416 from "./application/tx.rpc.msg";
import * as _417 from "./gateway/tx.rpc.msg";
import * as _418 from "./migration/tx.rpc.msg";
import * as _419 from "./proof/tx.rpc.msg";
import * as _420 from "./service/tx.rpc.msg";
import * as _421 from "./session/tx.rpc.msg";
import * as _422 from "./shared/tx.rpc.msg";
import * as _423 from "./supplier/tx.rpc.msg";
import * as _424 from "./tokenomics/tx.rpc.msg";
import * as _431 from "./lcd";
import * as _432 from "./rpc.query";
import * as _433 from "./rpc.tx";
export namespace pocket {
  export const application = {
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._380,
    ..._389,
    ..._398,
    ..._407,
    ..._416
  };
  export const gateway = {
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._381,
    ..._390,
    ..._399,
    ..._408,
    ..._417
  };
  export const migration = {
    ..._189,
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._195,
    ..._382,
    ..._391,
    ..._400,
    ..._409,
    ..._418
  };
  export const proof = {
    ..._196,
    ..._197,
    ..._198,
    ..._199,
    ..._200,
    ..._201,
    ..._383,
    ..._392,
    ..._401,
    ..._410,
    ..._419
  };
  export const service = {
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._206,
    ..._207,
    ..._208,
    ..._384,
    ..._393,
    ..._402,
    ..._411,
    ..._420
  };
  export const session = {
    ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._385,
    ..._394,
    ..._403,
    ..._412,
    ..._421
  };
  export const shared = {
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._386,
    ..._395,
    ..._404,
    ..._413,
    ..._422
  };
  export const supplier = {
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._387,
    ..._396,
    ..._405,
    ..._414,
    ..._423
  };
  export const tokenomics = {
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._388,
    ..._397,
    ..._406,
    ..._415,
    ..._424
  };
  export const ClientFactory = {
    ..._431,
    ..._432,
    ..._433
  };
}