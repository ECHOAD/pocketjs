//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gateway, GatewayAmino, GatewaySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/gateway parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.gateway.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the x/gateway parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/gateway/MsgUpdateParams";
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
  typeUrl: "/pocket.gateway.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.gateway.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgStakeGateway {
  /** The Bech32 address of the gateway */
  address: string;
  /** The total amount of uPOKT the gateway is staking. Must be ≥ to the current amount that the gateway has staked (if any) */
  stake?: Coin;
}
export interface MsgStakeGatewayProtoMsg {
  typeUrl: "/pocket.gateway.MsgStakeGateway";
  value: Uint8Array;
}
/**
 * @name MsgStakeGatewayAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgStakeGateway
 */
export interface MsgStakeGatewayAmino {
  /**
   * The Bech32 address of the gateway
   */
  address?: string;
  /**
   * The total amount of uPOKT the gateway is staking. Must be ≥ to the current amount that the gateway has staked (if any)
   */
  stake?: CoinAmino;
}
export interface MsgStakeGatewayAminoMsg {
  type: "/pocket.gateway.MsgStakeGateway";
  value: MsgStakeGatewayAmino;
}
export interface MsgStakeGatewaySDKType {
  address: string;
  stake?: CoinSDKType;
}
export interface MsgStakeGatewayResponse {
  gateway?: Gateway;
}
export interface MsgStakeGatewayResponseProtoMsg {
  typeUrl: "/pocket.gateway.MsgStakeGatewayResponse";
  value: Uint8Array;
}
/**
 * @name MsgStakeGatewayResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgStakeGatewayResponse
 */
export interface MsgStakeGatewayResponseAmino {
  gateway?: GatewayAmino;
}
export interface MsgStakeGatewayResponseAminoMsg {
  type: "/pocket.gateway.MsgStakeGatewayResponse";
  value: MsgStakeGatewayResponseAmino;
}
export interface MsgStakeGatewayResponseSDKType {
  gateway?: GatewaySDKType;
}
export interface MsgUnstakeGateway {
  /** The Bech32 address of the gateway */
  address: string;
}
export interface MsgUnstakeGatewayProtoMsg {
  typeUrl: "/pocket.gateway.MsgUnstakeGateway";
  value: Uint8Array;
}
/**
 * @name MsgUnstakeGatewayAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgUnstakeGateway
 */
export interface MsgUnstakeGatewayAmino {
  /**
   * The Bech32 address of the gateway
   */
  address?: string;
}
export interface MsgUnstakeGatewayAminoMsg {
  type: "/pocket.gateway.MsgUnstakeGateway";
  value: MsgUnstakeGatewayAmino;
}
export interface MsgUnstakeGatewaySDKType {
  address: string;
}
export interface MsgUnstakeGatewayResponse {
  gateway?: Gateway;
}
export interface MsgUnstakeGatewayResponseProtoMsg {
  typeUrl: "/pocket.gateway.MsgUnstakeGatewayResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnstakeGatewayResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgUnstakeGatewayResponse
 */
export interface MsgUnstakeGatewayResponseAmino {
  gateway?: GatewayAmino;
}
export interface MsgUnstakeGatewayResponseAminoMsg {
  type: "/pocket.gateway.MsgUnstakeGatewayResponse";
  value: MsgUnstakeGatewayResponseAmino;
}
export interface MsgUnstakeGatewayResponseSDKType {
  gateway?: GatewaySDKType;
}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParam {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  name: string;
  asCoin?: Coin;
}
export interface MsgUpdateParamProtoMsg {
  typeUrl: "/pocket.gateway.MsgUpdateParam";
  value: Uint8Array;
}
/**
 * MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
 * @name MsgUpdateParamAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgUpdateParam
 */
export interface MsgUpdateParamAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  name?: string;
  as_coin?: CoinAmino;
}
export interface MsgUpdateParamAminoMsg {
  type: "/pocket.gateway.MsgUpdateParam";
  value: MsgUpdateParamAmino;
}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParamSDKType {
  authority: string;
  name: string;
  as_coin?: CoinSDKType;
}
export interface MsgUpdateParamResponse {
  params?: Params;
}
export interface MsgUpdateParamResponseProtoMsg {
  typeUrl: "/pocket.gateway.MsgUpdateParamResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.MsgUpdateParamResponse
 */
export interface MsgUpdateParamResponseAmino {
  params?: ParamsAmino;
}
export interface MsgUpdateParamResponseAminoMsg {
  type: "/pocket.gateway.MsgUpdateParamResponse";
  value: MsgUpdateParamResponseAmino;
}
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
  typeUrl: "/pocket.gateway.MsgUpdateParams",
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
      type: "pocket/x/gateway/MsgUpdateParams",
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
      typeUrl: "/pocket.gateway.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.gateway.MsgUpdateParamsResponse",
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
      typeUrl: "/pocket.gateway.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStakeGateway(): MsgStakeGateway {
  return {
    address: "",
    stake: undefined
  };
}
export const MsgStakeGateway = {
  typeUrl: "/pocket.gateway.MsgStakeGateway",
  encode(message: MsgStakeGateway, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeGateway {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeGateway>): MsgStakeGateway {
    const message = createBaseMsgStakeGateway();
    message.address = object.address ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeGatewayAmino): MsgStakeGateway {
    const message = createBaseMsgStakeGateway();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    return message;
  },
  toAmino(message: MsgStakeGateway): MsgStakeGatewayAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeGatewayAminoMsg): MsgStakeGateway {
    return MsgStakeGateway.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeGatewayProtoMsg): MsgStakeGateway {
    return MsgStakeGateway.decode(message.value);
  },
  toProto(message: MsgStakeGateway): Uint8Array {
    return MsgStakeGateway.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeGateway): MsgStakeGatewayProtoMsg {
    return {
      typeUrl: "/pocket.gateway.MsgStakeGateway",
      value: MsgStakeGateway.encode(message).finish()
    };
  }
};
function createBaseMsgStakeGatewayResponse(): MsgStakeGatewayResponse {
  return {
    gateway: undefined
  };
}
export const MsgStakeGatewayResponse = {
  typeUrl: "/pocket.gateway.MsgStakeGatewayResponse",
  encode(message: MsgStakeGatewayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeGatewayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeGatewayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateway = Gateway.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeGatewayResponse>): MsgStakeGatewayResponse {
    const message = createBaseMsgStakeGatewayResponse();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeGatewayResponseAmino): MsgStakeGatewayResponse {
    const message = createBaseMsgStakeGatewayResponse();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    return message;
  },
  toAmino(message: MsgStakeGatewayResponse): MsgStakeGatewayResponseAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeGatewayResponseAminoMsg): MsgStakeGatewayResponse {
    return MsgStakeGatewayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeGatewayResponseProtoMsg): MsgStakeGatewayResponse {
    return MsgStakeGatewayResponse.decode(message.value);
  },
  toProto(message: MsgStakeGatewayResponse): Uint8Array {
    return MsgStakeGatewayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeGatewayResponse): MsgStakeGatewayResponseProtoMsg {
    return {
      typeUrl: "/pocket.gateway.MsgStakeGatewayResponse",
      value: MsgStakeGatewayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeGateway(): MsgUnstakeGateway {
  return {
    address: ""
  };
}
export const MsgUnstakeGateway = {
  typeUrl: "/pocket.gateway.MsgUnstakeGateway",
  encode(message: MsgUnstakeGateway, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeGateway {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeGateway>): MsgUnstakeGateway {
    const message = createBaseMsgUnstakeGateway();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeGatewayAmino): MsgUnstakeGateway {
    const message = createBaseMsgUnstakeGateway();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgUnstakeGateway): MsgUnstakeGatewayAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeGatewayAminoMsg): MsgUnstakeGateway {
    return MsgUnstakeGateway.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeGatewayProtoMsg): MsgUnstakeGateway {
    return MsgUnstakeGateway.decode(message.value);
  },
  toProto(message: MsgUnstakeGateway): Uint8Array {
    return MsgUnstakeGateway.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeGateway): MsgUnstakeGatewayProtoMsg {
    return {
      typeUrl: "/pocket.gateway.MsgUnstakeGateway",
      value: MsgUnstakeGateway.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeGatewayResponse(): MsgUnstakeGatewayResponse {
  return {
    gateway: undefined
  };
}
export const MsgUnstakeGatewayResponse = {
  typeUrl: "/pocket.gateway.MsgUnstakeGatewayResponse",
  encode(message: MsgUnstakeGatewayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeGatewayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeGatewayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateway = Gateway.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeGatewayResponse>): MsgUnstakeGatewayResponse {
    const message = createBaseMsgUnstakeGatewayResponse();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    return message;
  },
  fromAmino(object: MsgUnstakeGatewayResponseAmino): MsgUnstakeGatewayResponse {
    const message = createBaseMsgUnstakeGatewayResponse();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    return message;
  },
  toAmino(message: MsgUnstakeGatewayResponse): MsgUnstakeGatewayResponseAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeGatewayResponseAminoMsg): MsgUnstakeGatewayResponse {
    return MsgUnstakeGatewayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeGatewayResponseProtoMsg): MsgUnstakeGatewayResponse {
    return MsgUnstakeGatewayResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeGatewayResponse): Uint8Array {
    return MsgUnstakeGatewayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeGatewayResponse): MsgUnstakeGatewayResponseProtoMsg {
    return {
      typeUrl: "/pocket.gateway.MsgUnstakeGatewayResponse",
      value: MsgUnstakeGatewayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParam(): MsgUpdateParam {
  return {
    authority: "",
    name: "",
    asCoin: undefined
  };
}
export const MsgUpdateParam = {
  typeUrl: "/pocket.gateway.MsgUpdateParam",
  encode(message: MsgUpdateParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.asCoin !== undefined) {
      Coin.encode(message.asCoin, writer.uint32(26).fork()).ldelim();
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
          message.asCoin = Coin.decode(reader, reader.uint32());
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
    message.asCoin = object.asCoin !== undefined && object.asCoin !== null ? Coin.fromPartial(object.asCoin) : undefined;
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
    if (object.as_coin !== undefined && object.as_coin !== null) {
      message.asCoin = Coin.fromAmino(object.as_coin);
    }
    return message;
  },
  toAmino(message: MsgUpdateParam): MsgUpdateParamAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.as_coin = message.asCoin ? Coin.toAmino(message.asCoin) : Coin.toAmino(Coin.fromPartial({}));
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
      typeUrl: "/pocket.gateway.MsgUpdateParam",
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
  typeUrl: "/pocket.gateway.MsgUpdateParamResponse",
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
      typeUrl: "/pocket.gateway.MsgUpdateParamResponse",
      value: MsgUpdateParamResponse.encode(message).finish()
    };
  }
};