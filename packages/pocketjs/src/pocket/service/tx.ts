//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Service, ServiceAmino, ServiceSDKType } from "../shared/service";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/service parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.service.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package pocket.service
 * @see proto type: pocket.service.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the x/service parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/service/MsgUpdateParams";
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
  typeUrl: "/pocket.service.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.service.MsgUpdateParamsResponse";
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
  /**
   * The (name, as_type) tuple must match the corresponding name and type as
   * specified in the `Params` message in `proof/params.proto.`
   */
  name: string;
  asCoin?: Coin;
  asUint64?: bigint;
}
export interface MsgUpdateParamProtoMsg {
  typeUrl: "/pocket.service.MsgUpdateParam";
  value: Uint8Array;
}
/**
 * MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
 * @name MsgUpdateParamAmino
 * @package pocket.service
 * @see proto type: pocket.service.MsgUpdateParam
 */
export interface MsgUpdateParamAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * The (name, as_type) tuple must match the corresponding name and type as
   * specified in the `Params` message in `proof/params.proto.`
   */
  name?: string;
  as_coin?: CoinAmino;
  as_uint64?: string;
}
export interface MsgUpdateParamAminoMsg {
  type: "/pocket.service.MsgUpdateParam";
  value: MsgUpdateParamAmino;
}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParamSDKType {
  authority: string;
  name: string;
  as_coin?: CoinSDKType;
  as_uint64?: bigint;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 */
export interface MsgUpdateParamResponse {
  params?: Params;
}
export interface MsgUpdateParamResponseProtoMsg {
  typeUrl: "/pocket.service.MsgUpdateParamResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 * @name MsgUpdateParamResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.MsgUpdateParamResponse
 */
export interface MsgUpdateParamResponseAmino {
  params?: ParamsAmino;
}
export interface MsgUpdateParamResponseAminoMsg {
  type: "/pocket.service.MsgUpdateParamResponse";
  value: MsgUpdateParamResponseAmino;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 */
export interface MsgUpdateParamResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * MsgAddService defines a message for adding a new message to the network.
 * Services can be added by any actor in the network making them truly
 * permissionless.
 */
export interface MsgAddService {
  /** The Bech32 address of the service owner. */
  ownerAddress: string;
  /** The Service being added to the network */
  service: Service;
}
export interface MsgAddServiceProtoMsg {
  typeUrl: "/pocket.service.MsgAddService";
  value: Uint8Array;
}
/**
 * MsgAddService defines a message for adding a new message to the network.
 * Services can be added by any actor in the network making them truly
 * permissionless.
 * @name MsgAddServiceAmino
 * @package pocket.service
 * @see proto type: pocket.service.MsgAddService
 */
export interface MsgAddServiceAmino {
  /**
   * The Bech32 address of the service owner.
   */
  owner_address?: string;
  /**
   * The Service being added to the network
   */
  service?: ServiceAmino;
}
export interface MsgAddServiceAminoMsg {
  type: "/pocket.service.MsgAddService";
  value: MsgAddServiceAmino;
}
/**
 * MsgAddService defines a message for adding a new message to the network.
 * Services can be added by any actor in the network making them truly
 * permissionless.
 */
export interface MsgAddServiceSDKType {
  owner_address: string;
  service: ServiceSDKType;
}
export interface MsgAddServiceResponse {
  service?: Service;
}
export interface MsgAddServiceResponseProtoMsg {
  typeUrl: "/pocket.service.MsgAddServiceResponse";
  value: Uint8Array;
}
/**
 * @name MsgAddServiceResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.MsgAddServiceResponse
 */
export interface MsgAddServiceResponseAmino {
  service?: ServiceAmino;
}
export interface MsgAddServiceResponseAminoMsg {
  type: "/pocket.service.MsgAddServiceResponse";
  value: MsgAddServiceResponseAmino;
}
export interface MsgAddServiceResponseSDKType {
  service?: ServiceSDKType;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pocket.service.MsgUpdateParams",
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
      type: "pocket/x/service/MsgUpdateParams",
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
      typeUrl: "/pocket.service.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.service.MsgUpdateParamsResponse",
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
      typeUrl: "/pocket.service.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParam(): MsgUpdateParam {
  return {
    authority: "",
    name: "",
    asCoin: undefined,
    asUint64: undefined
  };
}
export const MsgUpdateParam = {
  typeUrl: "/pocket.service.MsgUpdateParam",
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
    if (message.asUint64 !== undefined) {
      writer.uint32(32).uint64(message.asUint64);
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
        case 4:
          message.asUint64 = reader.uint64();
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
    message.asUint64 = object.asUint64 !== undefined && object.asUint64 !== null ? BigInt(object.asUint64.toString()) : undefined;
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
    if (object.as_uint64 !== undefined && object.as_uint64 !== null) {
      message.asUint64 = BigInt(object.as_uint64);
    }
    return message;
  },
  toAmino(message: MsgUpdateParam): MsgUpdateParamAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.as_coin = message.asCoin ? Coin.toAmino(message.asCoin) : Coin.toAmino(Coin.fromPartial({}));
    obj.as_uint64 = message.asUint64 ? message.asUint64?.toString() : "0";
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
      typeUrl: "/pocket.service.MsgUpdateParam",
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
  typeUrl: "/pocket.service.MsgUpdateParamResponse",
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
      typeUrl: "/pocket.service.MsgUpdateParamResponse",
      value: MsgUpdateParamResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddService(): MsgAddService {
  return {
    ownerAddress: "",
    service: Service.fromPartial({})
  };
}
export const MsgAddService = {
  typeUrl: "/pocket.service.MsgAddService",
  encode(message: MsgAddService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddService>): MsgAddService {
    const message = createBaseMsgAddService();
    message.ownerAddress = object.ownerAddress ?? "";
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromAmino(object: MsgAddServiceAmino): MsgAddService {
    const message = createBaseMsgAddService();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: MsgAddService): MsgAddServiceAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddServiceAminoMsg): MsgAddService {
    return MsgAddService.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddServiceProtoMsg): MsgAddService {
    return MsgAddService.decode(message.value);
  },
  toProto(message: MsgAddService): Uint8Array {
    return MsgAddService.encode(message).finish();
  },
  toProtoMsg(message: MsgAddService): MsgAddServiceProtoMsg {
    return {
      typeUrl: "/pocket.service.MsgAddService",
      value: MsgAddService.encode(message).finish()
    };
  }
};
function createBaseMsgAddServiceResponse(): MsgAddServiceResponse {
  return {
    service: undefined
  };
}
export const MsgAddServiceResponse = {
  typeUrl: "/pocket.service.MsgAddServiceResponse",
  encode(message: MsgAddServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddServiceResponse>): MsgAddServiceResponse {
    const message = createBaseMsgAddServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromAmino(object: MsgAddServiceResponseAmino): MsgAddServiceResponse {
    const message = createBaseMsgAddServiceResponse();
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: MsgAddServiceResponse): MsgAddServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddServiceResponseAminoMsg): MsgAddServiceResponse {
    return MsgAddServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddServiceResponseProtoMsg): MsgAddServiceResponse {
    return MsgAddServiceResponse.decode(message.value);
  },
  toProto(message: MsgAddServiceResponse): Uint8Array {
    return MsgAddServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddServiceResponse): MsgAddServiceResponseProtoMsg {
    return {
      typeUrl: "/pocket.service.MsgAddServiceResponse",
      value: MsgAddServiceResponse.encode(message).finish()
    };
  }
};