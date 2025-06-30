//@ts-nocheck
import * as _124 from "./applications/interchain_accounts/controller/v1/controller";
import * as _125 from "./applications/interchain_accounts/controller/v1/query";
import * as _126 from "./applications/interchain_accounts/controller/v1/tx";
import * as _127 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _128 from "./applications/interchain_accounts/host/v1/host";
import * as _129 from "./applications/interchain_accounts/host/v1/query";
import * as _130 from "./applications/interchain_accounts/host/v1/tx";
import * as _131 from "./applications/interchain_accounts/v1/account";
import * as _132 from "./applications/interchain_accounts/v1/metadata";
import * as _133 from "./applications/interchain_accounts/v1/packet";
import * as _134 from "./applications/packet_forward_middleware/v1/genesis";
import * as _135 from "./applications/rate_limiting/v1/genesis";
import * as _136 from "./applications/rate_limiting/v1/query";
import * as _137 from "./applications/rate_limiting/v1/rate_limiting";
import * as _138 from "./applications/rate_limiting/v1/tx";
import * as _139 from "./applications/transfer/v1/authz";
import * as _140 from "./applications/transfer/v1/denomtrace";
import * as _141 from "./applications/transfer/v1/genesis";
import * as _142 from "./applications/transfer/v1/packet";
import * as _143 from "./applications/transfer/v1/query";
import * as _144 from "./applications/transfer/v1/token";
import * as _145 from "./applications/transfer/v1/transfer";
import * as _146 from "./applications/transfer/v1/tx";
import * as _147 from "./core/channel/v1/channel";
import * as _148 from "./core/channel/v1/genesis";
import * as _149 from "./core/channel/v1/query";
import * as _150 from "./core/channel/v1/tx";
import * as _151 from "./core/channel/v2/genesis";
import * as _152 from "./core/channel/v2/packet";
import * as _153 from "./core/channel/v2/query";
import * as _154 from "./core/channel/v2/tx";
import * as _155 from "./core/client/v1/client";
import * as _156 from "./core/client/v1/genesis";
import * as _157 from "./core/client/v1/query";
import * as _158 from "./core/client/v1/tx";
import * as _159 from "./core/client/v2/config";
import * as _160 from "./core/client/v2/counterparty";
import * as _161 from "./core/client/v2/genesis";
import * as _162 from "./core/client/v2/query";
import * as _163 from "./core/client/v2/tx";
import * as _164 from "./core/commitment/v1/commitment";
import * as _165 from "./core/commitment/v2/commitment";
import * as _166 from "./core/connection/v1/connection";
import * as _167 from "./core/connection/v1/genesis";
import * as _168 from "./core/connection/v1/query";
import * as _169 from "./core/connection/v1/tx";
import * as _170 from "./lightclients/solomachine/v2/solomachine";
import * as _171 from "./lightclients/solomachine/v3/solomachine";
import * as _172 from "./lightclients/tendermint/v1/tendermint";
import * as _173 from "./lightclients/wasm/v1/genesis";
import * as _174 from "./lightclients/wasm/v1/query";
import * as _175 from "./lightclients/wasm/v1/tx";
import * as _176 from "./lightclients/wasm/v1/wasm";
import * as _330 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _331 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _332 from "./applications/rate_limiting/v1/tx.amino";
import * as _333 from "./applications/transfer/v1/tx.amino";
import * as _334 from "./core/channel/v1/tx.amino";
import * as _335 from "./core/channel/v2/tx.amino";
import * as _336 from "./core/client/v1/tx.amino";
import * as _337 from "./core/client/v2/tx.amino";
import * as _338 from "./core/connection/v1/tx.amino";
import * as _339 from "./lightclients/wasm/v1/tx.amino";
import * as _340 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _341 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _342 from "./applications/rate_limiting/v1/tx.registry";
import * as _343 from "./applications/transfer/v1/tx.registry";
import * as _344 from "./core/channel/v1/tx.registry";
import * as _345 from "./core/channel/v2/tx.registry";
import * as _346 from "./core/client/v1/tx.registry";
import * as _347 from "./core/client/v2/tx.registry";
import * as _348 from "./core/connection/v1/tx.registry";
import * as _349 from "./lightclients/wasm/v1/tx.registry";
import * as _350 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _351 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _352 from "./applications/rate_limiting/v1/query.lcd";
import * as _353 from "./applications/transfer/v1/query.lcd";
import * as _354 from "./core/channel/v1/query.lcd";
import * as _355 from "./core/channel/v2/query.lcd";
import * as _356 from "./core/client/v1/query.lcd";
import * as _357 from "./core/client/v2/query.lcd";
import * as _358 from "./core/connection/v1/query.lcd";
import * as _359 from "./lightclients/wasm/v1/query.lcd";
import * as _360 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _361 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _362 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _363 from "./applications/transfer/v1/query.rpc.Query";
import * as _364 from "./core/channel/v1/query.rpc.Query";
import * as _365 from "./core/channel/v2/query.rpc.Query";
import * as _366 from "./core/client/v1/query.rpc.Query";
import * as _367 from "./core/client/v2/query.rpc.Query";
import * as _368 from "./core/connection/v1/query.rpc.Query";
import * as _369 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _370 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _371 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _372 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _373 from "./applications/transfer/v1/tx.rpc.msg";
import * as _374 from "./core/channel/v1/tx.rpc.msg";
import * as _375 from "./core/channel/v2/tx.rpc.msg";
import * as _376 from "./core/client/v1/tx.rpc.msg";
import * as _377 from "./core/client/v2/tx.rpc.msg";
import * as _378 from "./core/connection/v1/tx.rpc.msg";
import * as _379 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _428 from "./lcd";
import * as _429 from "./rpc.query";
import * as _430 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._124,
          ..._125,
          ..._126,
          ..._330,
          ..._340,
          ..._350,
          ..._360,
          ..._370
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._127
        };
      }
      export namespace host {
        export const v1 = {
          ..._128,
          ..._129,
          ..._130,
          ..._331,
          ..._341,
          ..._351,
          ..._361,
          ..._371
        };
      }
      export const v1 = {
        ..._131,
        ..._132,
        ..._133
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._134
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._332,
        ..._342,
        ..._352,
        ..._362,
        ..._372
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._333,
        ..._343,
        ..._353,
        ..._363,
        ..._373
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._334,
        ..._344,
        ..._354,
        ..._364,
        ..._374
      };
      export const v2 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._335,
        ..._345,
        ..._355,
        ..._365,
        ..._375
      };
    }
    export namespace client {
      export const v1 = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._336,
        ..._346,
        ..._356,
        ..._366,
        ..._376
      };
      export const v2 = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._337,
        ..._347,
        ..._357,
        ..._367,
        ..._377
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._164
      };
      export const v2 = {
        ..._165
      };
    }
    export namespace connection {
      export const v1 = {
        ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._338,
        ..._348,
        ..._358,
        ..._368,
        ..._378
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._170
      };
      export const v3 = {
        ..._171
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._172
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._339,
        ..._349,
        ..._359,
        ..._369,
        ..._379
      };
    }
  }
  export const ClientFactory = {
    ..._428,
    ..._429,
    ..._430
  };
}