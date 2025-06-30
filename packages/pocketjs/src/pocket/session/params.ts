//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * num_suppliers_per_session is the maximum number of suppliers per session
   * (application:supplier pair for a given session number).
   */
  numSuppliersPerSession: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.session.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.session
 * @see proto type: pocket.session.Params
 */
export interface ParamsAmino {
  /**
   * num_suppliers_per_session is the maximum number of suppliers per session
   * (application:supplier pair for a given session number).
   */
  num_suppliers_per_session: string;
}
export interface ParamsAminoMsg {
  type: "pocket/x/session/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  num_suppliers_per_session: bigint;
}
function createBaseParams(): Params {
  return {
    numSuppliersPerSession: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/pocket.session.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numSuppliersPerSession !== BigInt(0)) {
      writer.uint32(24).uint64(message.numSuppliersPerSession);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.numSuppliersPerSession = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.numSuppliersPerSession = object.numSuppliersPerSession !== undefined && object.numSuppliersPerSession !== null ? BigInt(object.numSuppliersPerSession.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.num_suppliers_per_session !== undefined && object.num_suppliers_per_session !== null) {
      message.numSuppliersPerSession = BigInt(object.num_suppliers_per_session);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.num_suppliers_per_session = message.numSuppliersPerSession ? message.numSuppliersPerSession?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/session/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pocket.session.Params",
      value: Params.encode(message).finish()
    };
  }
};