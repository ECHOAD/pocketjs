//@ts-nocheck
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/module/v1/module";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./auth/v1beta1/tx";
import * as _8 from "./authz/module/v1/module";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/module/v1/module";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./benchmark/module/v1/module";
import * as _26 from "./benchmark/v1/benchmark";
import * as _27 from "./benchmark/v1/tx";
import * as _28 from "./circuit/module/v1/module";
import * as _29 from "./circuit/v1/query";
import * as _30 from "./circuit/v1/tx";
import * as _31 from "./circuit/v1/types";
import * as _32 from "./consensus/module/v1/module";
import * as _33 from "./consensus/v1/query";
import * as _34 from "./consensus/v1/tx";
import * as _35 from "./counter/module/v1/module";
import * as _36 from "./counter/v1/query";
import * as _37 from "./counter/v1/tx";
import * as _38 from "./crisis/module/v1/module";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/module/v1/module";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./epochs/module/v1/module";
import * as _51 from "./epochs/v1beta1/events";
import * as _52 from "./epochs/v1beta1/genesis";
import * as _53 from "./epochs/v1beta1/query";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./feegrant/module/v1/module";
import * as _56 from "./feegrant/v1beta1/feegrant";
import * as _57 from "./feegrant/v1beta1/genesis";
import * as _58 from "./feegrant/v1beta1/query";
import * as _59 from "./feegrant/v1beta1/tx";
import * as _60 from "./genutil/module/v1/module";
import * as _61 from "./gov/module/v1/module";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/module/v1/module";
import * as _71 from "./group/v1/events";
import * as _72 from "./group/v1/genesis";
import * as _73 from "./group/v1/query";
import * as _74 from "./group/v1/tx";
import * as _75 from "./group/v1/types";
import * as _76 from "./ics23/v1/proofs";
import * as _77 from "./mint/module/v1/module";
import * as _78 from "./mint/v1beta1/genesis";
import * as _79 from "./mint/v1beta1/mint";
import * as _80 from "./mint/v1beta1/query";
import * as _81 from "./mint/v1beta1/tx";
import * as _82 from "./msg/textual/v1/textual";
import * as _83 from "./nft/module/v1/module";
import * as _84 from "./orm/module/v1alpha1/module";
import * as _85 from "./orm/query/v1alpha1/query";
import * as _86 from "./params/module/v1/module";
import * as _87 from "./params/v1beta1/params";
import * as _88 from "./params/v1beta1/query";
import * as _89 from "./protocolpool/module/v1/module";
import * as _90 from "./protocolpool/v1/genesis";
import * as _91 from "./protocolpool/v1/query";
import * as _92 from "./protocolpool/v1/tx";
import * as _93 from "./protocolpool/v1/types";
import * as _94 from "./query/v1/query";
import * as _95 from "./reflection/v1/reflection";
import * as _96 from "./slashing/module/v1/module";
import * as _97 from "./staking/module/v1/module";
import * as _98 from "./staking/v1beta1/authz";
import * as _99 from "./staking/v1beta1/genesis";
import * as _100 from "./staking/v1beta1/query";
import * as _101 from "./staking/v1beta1/staking";
import * as _102 from "./staking/v1beta1/tx";
import * as _103 from "./store/internal/kv/v1beta1/kv";
import * as _104 from "./store/snapshots/v1/snapshot";
import * as _105 from "./store/streaming/abci/grpc";
import * as _106 from "./store/v1beta1/commit_info";
import * as _107 from "./store/v1beta1/listening";
import * as _108 from "./tx/config/v1/config";
import * as _109 from "./tx/signing/v1beta1/signing";
import * as _110 from "./tx/v1beta1/service";
import * as _111 from "./tx/v1beta1/tx";
import * as _112 from "./upgrade/module/v1/module";
import * as _113 from "./upgrade/v1beta1/query";
import * as _114 from "./upgrade/v1beta1/tx";
import * as _115 from "./upgrade/v1beta1/upgrade";
import * as _116 from "./vesting/module/v1/module";
import * as _117 from "./vesting/v1beta1/tx";
import * as _118 from "./vesting/v1beta1/vesting";
import * as _241 from "./auth/v1beta1/tx.amino";
import * as _242 from "./authz/v1beta1/tx.amino";
import * as _243 from "./bank/v1beta1/tx.amino";
import * as _244 from "./benchmark/v1/tx.amino";
import * as _245 from "./circuit/v1/tx.amino";
import * as _246 from "./consensus/v1/tx.amino";
import * as _247 from "./counter/v1/tx.amino";
import * as _248 from "./distribution/v1beta1/tx.amino";
import * as _249 from "./feegrant/v1beta1/tx.amino";
import * as _250 from "./gov/v1/tx.amino";
import * as _251 from "./gov/v1beta1/tx.amino";
import * as _252 from "./group/v1/tx.amino";
import * as _253 from "./mint/v1beta1/tx.amino";
import * as _254 from "./protocolpool/v1/tx.amino";
import * as _255 from "./staking/v1beta1/tx.amino";
import * as _256 from "./upgrade/v1beta1/tx.amino";
import * as _257 from "./vesting/v1beta1/tx.amino";
import * as _258 from "./auth/v1beta1/tx.registry";
import * as _259 from "./authz/v1beta1/tx.registry";
import * as _260 from "./bank/v1beta1/tx.registry";
import * as _261 from "./benchmark/v1/tx.registry";
import * as _262 from "./circuit/v1/tx.registry";
import * as _263 from "./consensus/v1/tx.registry";
import * as _264 from "./counter/v1/tx.registry";
import * as _265 from "./distribution/v1beta1/tx.registry";
import * as _266 from "./feegrant/v1beta1/tx.registry";
import * as _267 from "./gov/v1/tx.registry";
import * as _268 from "./gov/v1beta1/tx.registry";
import * as _269 from "./group/v1/tx.registry";
import * as _270 from "./mint/v1beta1/tx.registry";
import * as _271 from "./protocolpool/v1/tx.registry";
import * as _272 from "./staking/v1beta1/tx.registry";
import * as _273 from "./upgrade/v1beta1/tx.registry";
import * as _274 from "./vesting/v1beta1/tx.registry";
import * as _275 from "./auth/v1beta1/query.lcd";
import * as _276 from "./authz/v1beta1/query.lcd";
import * as _277 from "./bank/v1beta1/query.lcd";
import * as _278 from "./base/node/v1beta1/query.lcd";
import * as _279 from "./circuit/v1/query.lcd";
import * as _280 from "./consensus/v1/query.lcd";
import * as _281 from "./distribution/v1beta1/query.lcd";
import * as _282 from "./epochs/v1beta1/query.lcd";
import * as _283 from "./feegrant/v1beta1/query.lcd";
import * as _284 from "./gov/v1/query.lcd";
import * as _285 from "./gov/v1beta1/query.lcd";
import * as _286 from "./group/v1/query.lcd";
import * as _287 from "./mint/v1beta1/query.lcd";
import * as _288 from "./params/v1beta1/query.lcd";
import * as _289 from "./protocolpool/v1/query.lcd";
import * as _290 from "./staking/v1beta1/query.lcd";
import * as _291 from "./tx/v1beta1/service.lcd";
import * as _292 from "./upgrade/v1beta1/query.lcd";
import * as _293 from "./auth/v1beta1/query.rpc.Query";
import * as _294 from "./authz/v1beta1/query.rpc.Query";
import * as _295 from "./bank/v1beta1/query.rpc.Query";
import * as _296 from "./base/node/v1beta1/query.rpc.Service";
import * as _297 from "./circuit/v1/query.rpc.Query";
import * as _298 from "./consensus/v1/query.rpc.Query";
import * as _299 from "./counter/v1/query.rpc.Query";
import * as _300 from "./distribution/v1beta1/query.rpc.Query";
import * as _301 from "./epochs/v1beta1/query.rpc.Query";
import * as _302 from "./feegrant/v1beta1/query.rpc.Query";
import * as _303 from "./gov/v1/query.rpc.Query";
import * as _304 from "./gov/v1beta1/query.rpc.Query";
import * as _305 from "./group/v1/query.rpc.Query";
import * as _306 from "./mint/v1beta1/query.rpc.Query";
import * as _307 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _308 from "./params/v1beta1/query.rpc.Query";
import * as _309 from "./protocolpool/v1/query.rpc.Query";
import * as _310 from "./staking/v1beta1/query.rpc.Query";
import * as _311 from "./tx/v1beta1/service.rpc.Service";
import * as _312 from "./upgrade/v1beta1/query.rpc.Query";
import * as _313 from "./auth/v1beta1/tx.rpc.msg";
import * as _314 from "./authz/v1beta1/tx.rpc.msg";
import * as _315 from "./bank/v1beta1/tx.rpc.msg";
import * as _316 from "./benchmark/v1/tx.rpc.msg";
import * as _317 from "./circuit/v1/tx.rpc.msg";
import * as _318 from "./consensus/v1/tx.rpc.msg";
import * as _319 from "./counter/v1/tx.rpc.msg";
import * as _320 from "./distribution/v1beta1/tx.rpc.msg";
import * as _321 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _322 from "./gov/v1/tx.rpc.msg";
import * as _323 from "./gov/v1beta1/tx.rpc.msg";
import * as _324 from "./group/v1/tx.rpc.msg";
import * as _325 from "./mint/v1beta1/tx.rpc.msg";
import * as _326 from "./protocolpool/v1/tx.rpc.msg";
import * as _327 from "./staking/v1beta1/tx.rpc.msg";
import * as _328 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _329 from "./vesting/v1beta1/tx.rpc.msg";
import * as _425 from "./lcd";
import * as _426 from "./rpc.query";
import * as _427 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._241,
      ..._258,
      ..._275,
      ..._293,
      ..._313
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._242,
      ..._259,
      ..._276,
      ..._294,
      ..._314
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._243,
      ..._260,
      ..._277,
      ..._295,
      ..._315
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._278,
        ..._296
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1 = {
      ..._26,
      ..._27,
      ..._244,
      ..._261,
      ..._316
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._245,
      ..._262,
      ..._279,
      ..._297,
      ..._317
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._32
      };
    }
    export const v1 = {
      ..._33,
      ..._34,
      ..._246,
      ..._263,
      ..._280,
      ..._298,
      ..._318
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1 = {
      ..._36,
      ..._37,
      ..._247,
      ..._264,
      ..._299,
      ..._319
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._248,
      ..._265,
      ..._281,
      ..._300,
      ..._320
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._282,
      ..._301
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._249,
      ..._266,
      ..._283,
      ..._302,
      ..._321
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._250,
      ..._267,
      ..._284,
      ..._303,
      ..._322
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._251,
      ..._268,
      ..._285,
      ..._304,
      ..._323
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._252,
      ..._269,
      ..._286,
      ..._305,
      ..._324
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._76
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._253,
      ..._270,
      ..._287,
      ..._306,
      ..._325
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._82
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._84
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._85,
        ..._307
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._288,
      ..._308
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._89
      };
    }
    export const v1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._254,
      ..._271,
      ..._289,
      ..._309,
      ..._326
    };
  }
  export namespace query {
    export const v1 = {
      ..._94
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._95
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._97
      };
    }
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._255,
      ..._272,
      ..._290,
      ..._310,
      ..._327
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._103
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._104
      };
    }
    export namespace streaming {
      export const abci = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._108
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._109
      };
    }
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._291,
      ..._311
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._256,
      ..._273,
      ..._292,
      ..._312,
      ..._328
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._257,
      ..._274,
      ..._329
    };
  }
  export const ClientFactory = {
    ..._425,
    ..._426,
    ..._427
  };
}