//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.shared.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/shared/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pocket.shared.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.shared.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParam {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  name: string;
  asString?: string;
  asUint64?: bigint;
  asBytes?: Uint8Array;
}
export interface MsgUpdateParamProtoMsg {
  typeUrl: "/pocket.shared.MsgUpdateParam";
  value: Uint8Array;
}
/**
 * MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
 * @name MsgUpdateParamAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.MsgUpdateParam
 */
export interface MsgUpdateParamAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  name?: string;
  as_string?: string;
  as_uint64?: string;
  as_bytes?: string;
}
export interface MsgUpdateParamAminoMsg {
  type: "/pocket.shared.MsgUpdateParam";
  value: MsgUpdateParamAmino;
}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParamSDKType {
  authority: string;
  name: string;
  as_string?: string;
  as_uint64?: bigint;
  as_bytes?: Uint8Array;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 */
export interface MsgUpdateParamResponse {
  params?: Params;
}
export interface MsgUpdateParamResponseProtoMsg {
  typeUrl: "/pocket.shared.MsgUpdateParamResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 * @name MsgUpdateParamResponseAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.MsgUpdateParamResponse
 */
export interface MsgUpdateParamResponseAmino {
  params?: ParamsAmino;
}
export interface MsgUpdateParamResponseAminoMsg {
  type: "/pocket.shared.MsgUpdateParamResponse";
  value: MsgUpdateParamResponseAmino;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 */
export interface MsgUpdateParamResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pocket.shared.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "pocket/x/shared/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pocket.shared.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.shared.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pocket.shared.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParam(): MsgUpdateParam {
  return {
    authority: "",
    name: "",
    asString: undefined,
    asUint64: undefined,
    asBytes: undefined
  };
}
export const MsgUpdateParam = {
  typeUrl: "/pocket.shared.MsgUpdateParam",
  encode(message: MsgUpdateParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.asString !== undefined) {
      writer.uint32(26).string(message.asString);
    }
    if (message.asUint64 !== undefined) {
      writer.uint32(48).uint64(message.asUint64);
    }
    if (message.asBytes !== undefined) {
      writer.uint32(58).bytes(message.asBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.asString = reader.string();
          break;
        case 6:
          message.asUint64 = reader.uint64();
          break;
        case 7:
          message.asBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParam>): MsgUpdateParam {
    const message = createBaseMsgUpdateParam();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.asString = object.asString ?? undefined;
    message.asUint64 = object.asUint64 !== undefined && object.asUint64 !== null ? BigInt(object.asUint64.toString()) : undefined;
    message.asBytes = object.asBytes ?? undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamAmino): MsgUpdateParam {
    const message = createBaseMsgUpdateParam();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.as_string !== undefined && object.as_string !== null) {
      message.asString = object.as_string;
    }
    if (object.as_uint64 !== undefined && object.as_uint64 !== null) {
      message.asUint64 = BigInt(object.as_uint64);
    }
    if (object.as_bytes !== undefined && object.as_bytes !== null) {
      message.asBytes = bytesFromBase64(object.as_bytes);
    }
    return message;
  },
  toAmino(message: MsgUpdateParam): MsgUpdateParamAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.as_string = message.asString ?? null;
    obj.as_uint64 = message.asUint64 ? message.asUint64?.toString() : "0";
    obj.as_bytes = message.asBytes ? base64FromBytes(message.asBytes) : "";
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamAminoMsg): MsgUpdateParam {
    return MsgUpdateParam.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamProtoMsg): MsgUpdateParam {
    return MsgUpdateParam.decode(message.value);
  },
  toProto(message: MsgUpdateParam): Uint8Array {
    return MsgUpdateParam.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParam): MsgUpdateParamProtoMsg {
    return {
      typeUrl: "/pocket.shared.MsgUpdateParam",
      value: MsgUpdateParam.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamResponse(): MsgUpdateParamResponse {
  return {
    params: undefined
  };
}
export const MsgUpdateParamResponse = {
  typeUrl: "/pocket.shared.MsgUpdateParamResponse",
  encode(message: MsgUpdateParamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParamResponse>): MsgUpdateParamResponse {
    const message = createBaseMsgUpdateParamResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamResponseAmino): MsgUpdateParamResponse {
    const message = createBaseMsgUpdateParamResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParamResponse): MsgUpdateParamResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamResponseAminoMsg): MsgUpdateParamResponse {
    return MsgUpdateParamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamResponseProtoMsg): MsgUpdateParamResponse {
    return MsgUpdateParamResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamResponse): Uint8Array {
    return MsgUpdateParamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamResponse): MsgUpdateParamResponseProtoMsg {
    return {
      typeUrl: "/pocket.shared.MsgUpdateParamResponse",
      value: MsgUpdateParamResponse.encode(message).finish()
    };
  }
};