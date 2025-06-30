//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { ApplicationServiceConfig, ApplicationServiceConfigAmino, ApplicationServiceConfigSDKType } from "../shared/service";
import { Application, ApplicationAmino, ApplicationSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/application parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.application.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the x/application parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/application/MsgUpdateParams";
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
  typeUrl: "/pocket.application.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.application.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgStakeApplication {
  /** The Bech32 address of the application. */
  address: string;
  /** The total amount of uPOKT the application has staked. Must be ≥ to the current amount that the application has staked (if any) */
  stake?: Coin;
  /** The list of services this application is staked to request service for */
  services: ApplicationServiceConfig[];
}
export interface MsgStakeApplicationProtoMsg {
  typeUrl: "/pocket.application.MsgStakeApplication";
  value: Uint8Array;
}
/**
 * @name MsgStakeApplicationAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgStakeApplication
 */
export interface MsgStakeApplicationAmino {
  /**
   * The Bech32 address of the application.
   */
  address?: string;
  /**
   * The total amount of uPOKT the application has staked. Must be ≥ to the current amount that the application has staked (if any)
   */
  stake?: CoinAmino;
  /**
   * The list of services this application is staked to request service for
   */
  services?: ApplicationServiceConfigAmino[];
}
export interface MsgStakeApplicationAminoMsg {
  type: "/pocket.application.MsgStakeApplication";
  value: MsgStakeApplicationAmino;
}
export interface MsgStakeApplicationSDKType {
  address: string;
  stake?: CoinSDKType;
  services: ApplicationServiceConfigSDKType[];
}
export interface MsgStakeApplicationResponse {
  application?: Application;
}
export interface MsgStakeApplicationResponseProtoMsg {
  typeUrl: "/pocket.application.MsgStakeApplicationResponse";
  value: Uint8Array;
}
/**
 * @name MsgStakeApplicationResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgStakeApplicationResponse
 */
export interface MsgStakeApplicationResponseAmino {
  application?: ApplicationAmino;
}
export interface MsgStakeApplicationResponseAminoMsg {
  type: "/pocket.application.MsgStakeApplicationResponse";
  value: MsgStakeApplicationResponseAmino;
}
export interface MsgStakeApplicationResponseSDKType {
  application?: ApplicationSDKType;
}
export interface MsgUnstakeApplication {
  address: string;
}
export interface MsgUnstakeApplicationProtoMsg {
  typeUrl: "/pocket.application.MsgUnstakeApplication";
  value: Uint8Array;
}
/**
 * @name MsgUnstakeApplicationAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUnstakeApplication
 */
export interface MsgUnstakeApplicationAmino {
  address?: string;
}
export interface MsgUnstakeApplicationAminoMsg {
  type: "/pocket.application.MsgUnstakeApplication";
  value: MsgUnstakeApplicationAmino;
}
export interface MsgUnstakeApplicationSDKType {
  address: string;
}
export interface MsgUnstakeApplicationResponse {
  application?: Application;
}
export interface MsgUnstakeApplicationResponseProtoMsg {
  typeUrl: "/pocket.application.MsgUnstakeApplicationResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnstakeApplicationResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUnstakeApplicationResponse
 */
export interface MsgUnstakeApplicationResponseAmino {
  application?: ApplicationAmino;
}
export interface MsgUnstakeApplicationResponseAminoMsg {
  type: "/pocket.application.MsgUnstakeApplicationResponse";
  value: MsgUnstakeApplicationResponseAmino;
}
export interface MsgUnstakeApplicationResponseSDKType {
  application?: ApplicationSDKType;
}
export interface MsgDelegateToGateway {
  /** The Bech32 address of the application. */
  appAddress: string;
  /** The Bech32 address of the gateway the application wants to delegate to. */
  gatewayAddress: string;
}
export interface MsgDelegateToGatewayProtoMsg {
  typeUrl: "/pocket.application.MsgDelegateToGateway";
  value: Uint8Array;
}
/**
 * @name MsgDelegateToGatewayAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgDelegateToGateway
 */
export interface MsgDelegateToGatewayAmino {
  /**
   * The Bech32 address of the application.
   */
  app_address?: string;
  /**
   * The Bech32 address of the gateway the application wants to delegate to.
   */
  gateway_address?: string;
}
export interface MsgDelegateToGatewayAminoMsg {
  type: "/pocket.application.MsgDelegateToGateway";
  value: MsgDelegateToGatewayAmino;
}
export interface MsgDelegateToGatewaySDKType {
  app_address: string;
  gateway_address: string;
}
export interface MsgDelegateToGatewayResponse {
  application?: Application;
}
export interface MsgDelegateToGatewayResponseProtoMsg {
  typeUrl: "/pocket.application.MsgDelegateToGatewayResponse";
  value: Uint8Array;
}
/**
 * @name MsgDelegateToGatewayResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgDelegateToGatewayResponse
 */
export interface MsgDelegateToGatewayResponseAmino {
  application?: ApplicationAmino;
}
export interface MsgDelegateToGatewayResponseAminoMsg {
  type: "/pocket.application.MsgDelegateToGatewayResponse";
  value: MsgDelegateToGatewayResponseAmino;
}
export interface MsgDelegateToGatewayResponseSDKType {
  application?: ApplicationSDKType;
}
export interface MsgUndelegateFromGateway {
  /** The Bech32 address of the application. */
  appAddress: string;
  /** The Bech32 address of the gateway the application wants to undelegate from. */
  gatewayAddress: string;
}
export interface MsgUndelegateFromGatewayProtoMsg {
  typeUrl: "/pocket.application.MsgUndelegateFromGateway";
  value: Uint8Array;
}
/**
 * @name MsgUndelegateFromGatewayAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUndelegateFromGateway
 */
export interface MsgUndelegateFromGatewayAmino {
  /**
   * The Bech32 address of the application.
   */
  app_address?: string;
  /**
   * The Bech32 address of the gateway the application wants to undelegate from.
   */
  gateway_address?: string;
}
export interface MsgUndelegateFromGatewayAminoMsg {
  type: "/pocket.application.MsgUndelegateFromGateway";
  value: MsgUndelegateFromGatewayAmino;
}
export interface MsgUndelegateFromGatewaySDKType {
  app_address: string;
  gateway_address: string;
}
export interface MsgUndelegateFromGatewayResponse {
  application?: Application;
}
export interface MsgUndelegateFromGatewayResponseProtoMsg {
  typeUrl: "/pocket.application.MsgUndelegateFromGatewayResponse";
  value: Uint8Array;
}
/**
 * @name MsgUndelegateFromGatewayResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUndelegateFromGatewayResponse
 */
export interface MsgUndelegateFromGatewayResponseAmino {
  application?: ApplicationAmino;
}
export interface MsgUndelegateFromGatewayResponseAminoMsg {
  type: "/pocket.application.MsgUndelegateFromGatewayResponse";
  value: MsgUndelegateFromGatewayResponseAmino;
}
export interface MsgUndelegateFromGatewayResponseSDKType {
  application?: ApplicationSDKType;
}
export interface MsgTransferApplication {
  sourceAddress: string;
  destinationAddress: string;
}
export interface MsgTransferApplicationProtoMsg {
  typeUrl: "/pocket.application.MsgTransferApplication";
  value: Uint8Array;
}
/**
 * @name MsgTransferApplicationAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgTransferApplication
 */
export interface MsgTransferApplicationAmino {
  source_address?: string;
  destination_address?: string;
}
export interface MsgTransferApplicationAminoMsg {
  type: "/pocket.application.MsgTransferApplication";
  value: MsgTransferApplicationAmino;
}
export interface MsgTransferApplicationSDKType {
  source_address: string;
  destination_address: string;
}
export interface MsgTransferApplicationResponse {
  application?: Application;
}
export interface MsgTransferApplicationResponseProtoMsg {
  typeUrl: "/pocket.application.MsgTransferApplicationResponse";
  value: Uint8Array;
}
/**
 * @name MsgTransferApplicationResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgTransferApplicationResponse
 */
export interface MsgTransferApplicationResponseAmino {
  application?: ApplicationAmino;
}
export interface MsgTransferApplicationResponseAminoMsg {
  type: "/pocket.application.MsgTransferApplicationResponse";
  value: MsgTransferApplicationResponseAmino;
}
export interface MsgTransferApplicationResponseSDKType {
  application?: ApplicationSDKType;
}
export interface MsgUpdateParam {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  name: string;
  asUint64?: bigint;
  asCoin?: Coin;
}
export interface MsgUpdateParamProtoMsg {
  typeUrl: "/pocket.application.MsgUpdateParam";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUpdateParam
 */
export interface MsgUpdateParamAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  name?: string;
  as_uint64?: string;
  as_coin?: CoinAmino;
}
export interface MsgUpdateParamAminoMsg {
  type: "/pocket.application.MsgUpdateParam";
  value: MsgUpdateParamAmino;
}
export interface MsgUpdateParamSDKType {
  authority: string;
  name: string;
  as_uint64?: bigint;
  as_coin?: CoinSDKType;
}
export interface MsgUpdateParamResponse {
  params?: Params;
}
export interface MsgUpdateParamResponseProtoMsg {
  typeUrl: "/pocket.application.MsgUpdateParamResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.MsgUpdateParamResponse
 */
export interface MsgUpdateParamResponseAmino {
  params?: ParamsAmino;
}
export interface MsgUpdateParamResponseAminoMsg {
  type: "/pocket.application.MsgUpdateParamResponse";
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
  typeUrl: "/pocket.application.MsgUpdateParams",
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
      type: "pocket/x/application/MsgUpdateParams",
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
      typeUrl: "/pocket.application.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.application.MsgUpdateParamsResponse",
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
      typeUrl: "/pocket.application.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStakeApplication(): MsgStakeApplication {
  return {
    address: "",
    stake: undefined,
    services: []
  };
}
export const MsgStakeApplication = {
  typeUrl: "/pocket.application.MsgStakeApplication",
  encode(message: MsgStakeApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.services) {
      ApplicationServiceConfig.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.services.push(ApplicationServiceConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeApplication>): MsgStakeApplication {
    const message = createBaseMsgStakeApplication();
    message.address = object.address ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.services = object.services?.map(e => ApplicationServiceConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgStakeApplicationAmino): MsgStakeApplication {
    const message = createBaseMsgStakeApplication();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    message.services = object.services?.map(e => ApplicationServiceConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgStakeApplication): MsgStakeApplicationAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    if (message.services) {
      obj.services = message.services.map(e => e ? ApplicationServiceConfig.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: MsgStakeApplicationAminoMsg): MsgStakeApplication {
    return MsgStakeApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeApplicationProtoMsg): MsgStakeApplication {
    return MsgStakeApplication.decode(message.value);
  },
  toProto(message: MsgStakeApplication): Uint8Array {
    return MsgStakeApplication.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeApplication): MsgStakeApplicationProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgStakeApplication",
      value: MsgStakeApplication.encode(message).finish()
    };
  }
};
function createBaseMsgStakeApplicationResponse(): MsgStakeApplicationResponse {
  return {
    application: undefined
  };
}
export const MsgStakeApplicationResponse = {
  typeUrl: "/pocket.application.MsgStakeApplicationResponse",
  encode(message: MsgStakeApplicationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeApplicationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeApplicationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeApplicationResponse>): MsgStakeApplicationResponse {
    const message = createBaseMsgStakeApplicationResponse();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeApplicationResponseAmino): MsgStakeApplicationResponse {
    const message = createBaseMsgStakeApplicationResponse();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: MsgStakeApplicationResponse): MsgStakeApplicationResponseAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeApplicationResponseAminoMsg): MsgStakeApplicationResponse {
    return MsgStakeApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeApplicationResponseProtoMsg): MsgStakeApplicationResponse {
    return MsgStakeApplicationResponse.decode(message.value);
  },
  toProto(message: MsgStakeApplicationResponse): Uint8Array {
    return MsgStakeApplicationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeApplicationResponse): MsgStakeApplicationResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgStakeApplicationResponse",
      value: MsgStakeApplicationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeApplication(): MsgUnstakeApplication {
  return {
    address: ""
  };
}
export const MsgUnstakeApplication = {
  typeUrl: "/pocket.application.MsgUnstakeApplication",
  encode(message: MsgUnstakeApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeApplication();
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
  fromPartial(object: Partial<MsgUnstakeApplication>): MsgUnstakeApplication {
    const message = createBaseMsgUnstakeApplication();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeApplicationAmino): MsgUnstakeApplication {
    const message = createBaseMsgUnstakeApplication();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgUnstakeApplication): MsgUnstakeApplicationAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeApplicationAminoMsg): MsgUnstakeApplication {
    return MsgUnstakeApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeApplicationProtoMsg): MsgUnstakeApplication {
    return MsgUnstakeApplication.decode(message.value);
  },
  toProto(message: MsgUnstakeApplication): Uint8Array {
    return MsgUnstakeApplication.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeApplication): MsgUnstakeApplicationProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgUnstakeApplication",
      value: MsgUnstakeApplication.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeApplicationResponse(): MsgUnstakeApplicationResponse {
  return {
    application: undefined
  };
}
export const MsgUnstakeApplicationResponse = {
  typeUrl: "/pocket.application.MsgUnstakeApplicationResponse",
  encode(message: MsgUnstakeApplicationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeApplicationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeApplicationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeApplicationResponse>): MsgUnstakeApplicationResponse {
    const message = createBaseMsgUnstakeApplicationResponse();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: MsgUnstakeApplicationResponseAmino): MsgUnstakeApplicationResponse {
    const message = createBaseMsgUnstakeApplicationResponse();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: MsgUnstakeApplicationResponse): MsgUnstakeApplicationResponseAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeApplicationResponseAminoMsg): MsgUnstakeApplicationResponse {
    return MsgUnstakeApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeApplicationResponseProtoMsg): MsgUnstakeApplicationResponse {
    return MsgUnstakeApplicationResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeApplicationResponse): Uint8Array {
    return MsgUnstakeApplicationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeApplicationResponse): MsgUnstakeApplicationResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgUnstakeApplicationResponse",
      value: MsgUnstakeApplicationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateToGateway(): MsgDelegateToGateway {
  return {
    appAddress: "",
    gatewayAddress: ""
  };
}
export const MsgDelegateToGateway = {
  typeUrl: "/pocket.application.MsgDelegateToGateway",
  encode(message: MsgDelegateToGateway, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appAddress !== "") {
      writer.uint32(10).string(message.appAddress);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(18).string(message.gatewayAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToGateway {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAddress = reader.string();
          break;
        case 2:
          message.gatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateToGateway>): MsgDelegateToGateway {
    const message = createBaseMsgDelegateToGateway();
    message.appAddress = object.appAddress ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDelegateToGatewayAmino): MsgDelegateToGateway {
    const message = createBaseMsgDelegateToGateway();
    if (object.app_address !== undefined && object.app_address !== null) {
      message.appAddress = object.app_address;
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = object.gateway_address;
    }
    return message;
  },
  toAmino(message: MsgDelegateToGateway): MsgDelegateToGatewayAmino {
    const obj: any = {};
    obj.app_address = message.appAddress === "" ? undefined : message.appAddress;
    obj.gateway_address = message.gatewayAddress === "" ? undefined : message.gatewayAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToGatewayAminoMsg): MsgDelegateToGateway {
    return MsgDelegateToGateway.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateToGatewayProtoMsg): MsgDelegateToGateway {
    return MsgDelegateToGateway.decode(message.value);
  },
  toProto(message: MsgDelegateToGateway): Uint8Array {
    return MsgDelegateToGateway.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToGateway): MsgDelegateToGatewayProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgDelegateToGateway",
      value: MsgDelegateToGateway.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateToGatewayResponse(): MsgDelegateToGatewayResponse {
  return {
    application: undefined
  };
}
export const MsgDelegateToGatewayResponse = {
  typeUrl: "/pocket.application.MsgDelegateToGatewayResponse",
  encode(message: MsgDelegateToGatewayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToGatewayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToGatewayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateToGatewayResponse>): MsgDelegateToGatewayResponse {
    const message = createBaseMsgDelegateToGatewayResponse();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateToGatewayResponseAmino): MsgDelegateToGatewayResponse {
    const message = createBaseMsgDelegateToGatewayResponse();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: MsgDelegateToGatewayResponse): MsgDelegateToGatewayResponseAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToGatewayResponseAminoMsg): MsgDelegateToGatewayResponse {
    return MsgDelegateToGatewayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateToGatewayResponseProtoMsg): MsgDelegateToGatewayResponse {
    return MsgDelegateToGatewayResponse.decode(message.value);
  },
  toProto(message: MsgDelegateToGatewayResponse): Uint8Array {
    return MsgDelegateToGatewayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToGatewayResponse): MsgDelegateToGatewayResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgDelegateToGatewayResponse",
      value: MsgDelegateToGatewayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateFromGateway(): MsgUndelegateFromGateway {
  return {
    appAddress: "",
    gatewayAddress: ""
  };
}
export const MsgUndelegateFromGateway = {
  typeUrl: "/pocket.application.MsgUndelegateFromGateway",
  encode(message: MsgUndelegateFromGateway, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appAddress !== "") {
      writer.uint32(10).string(message.appAddress);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(18).string(message.gatewayAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromGateway {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAddress = reader.string();
          break;
        case 2:
          message.gatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateFromGateway>): MsgUndelegateFromGateway {
    const message = createBaseMsgUndelegateFromGateway();
    message.appAddress = object.appAddress ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUndelegateFromGatewayAmino): MsgUndelegateFromGateway {
    const message = createBaseMsgUndelegateFromGateway();
    if (object.app_address !== undefined && object.app_address !== null) {
      message.appAddress = object.app_address;
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = object.gateway_address;
    }
    return message;
  },
  toAmino(message: MsgUndelegateFromGateway): MsgUndelegateFromGatewayAmino {
    const obj: any = {};
    obj.app_address = message.appAddress === "" ? undefined : message.appAddress;
    obj.gateway_address = message.gatewayAddress === "" ? undefined : message.gatewayAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromGatewayAminoMsg): MsgUndelegateFromGateway {
    return MsgUndelegateFromGateway.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateFromGatewayProtoMsg): MsgUndelegateFromGateway {
    return MsgUndelegateFromGateway.decode(message.value);
  },
  toProto(message: MsgUndelegateFromGateway): Uint8Array {
    return MsgUndelegateFromGateway.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromGateway): MsgUndelegateFromGatewayProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgUndelegateFromGateway",
      value: MsgUndelegateFromGateway.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateFromGatewayResponse(): MsgUndelegateFromGatewayResponse {
  return {
    application: undefined
  };
}
export const MsgUndelegateFromGatewayResponse = {
  typeUrl: "/pocket.application.MsgUndelegateFromGatewayResponse",
  encode(message: MsgUndelegateFromGatewayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromGatewayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromGatewayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateFromGatewayResponse>): MsgUndelegateFromGatewayResponse {
    const message = createBaseMsgUndelegateFromGatewayResponse();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateFromGatewayResponseAmino): MsgUndelegateFromGatewayResponse {
    const message = createBaseMsgUndelegateFromGatewayResponse();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: MsgUndelegateFromGatewayResponse): MsgUndelegateFromGatewayResponseAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromGatewayResponseAminoMsg): MsgUndelegateFromGatewayResponse {
    return MsgUndelegateFromGatewayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateFromGatewayResponseProtoMsg): MsgUndelegateFromGatewayResponse {
    return MsgUndelegateFromGatewayResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateFromGatewayResponse): Uint8Array {
    return MsgUndelegateFromGatewayResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromGatewayResponse): MsgUndelegateFromGatewayResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgUndelegateFromGatewayResponse",
      value: MsgUndelegateFromGatewayResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferApplication(): MsgTransferApplication {
  return {
    sourceAddress: "",
    destinationAddress: ""
  };
}
export const MsgTransferApplication = {
  typeUrl: "/pocket.application.MsgTransferApplication",
  encode(message: MsgTransferApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceAddress !== "") {
      writer.uint32(10).string(message.sourceAddress);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(18).string(message.destinationAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceAddress = reader.string();
          break;
        case 2:
          message.destinationAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTransferApplication>): MsgTransferApplication {
    const message = createBaseMsgTransferApplication();
    message.sourceAddress = object.sourceAddress ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    return message;
  },
  fromAmino(object: MsgTransferApplicationAmino): MsgTransferApplication {
    const message = createBaseMsgTransferApplication();
    if (object.source_address !== undefined && object.source_address !== null) {
      message.sourceAddress = object.source_address;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    return message;
  },
  toAmino(message: MsgTransferApplication): MsgTransferApplicationAmino {
    const obj: any = {};
    obj.source_address = message.sourceAddress === "" ? undefined : message.sourceAddress;
    obj.destination_address = message.destinationAddress === "" ? undefined : message.destinationAddress;
    return obj;
  },
  fromAminoMsg(object: MsgTransferApplicationAminoMsg): MsgTransferApplication {
    return MsgTransferApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferApplicationProtoMsg): MsgTransferApplication {
    return MsgTransferApplication.decode(message.value);
  },
  toProto(message: MsgTransferApplication): Uint8Array {
    return MsgTransferApplication.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferApplication): MsgTransferApplicationProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgTransferApplication",
      value: MsgTransferApplication.encode(message).finish()
    };
  }
};
function createBaseMsgTransferApplicationResponse(): MsgTransferApplicationResponse {
  return {
    application: undefined
  };
}
export const MsgTransferApplicationResponse = {
  typeUrl: "/pocket.application.MsgTransferApplicationResponse",
  encode(message: MsgTransferApplicationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferApplicationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferApplicationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTransferApplicationResponse>): MsgTransferApplicationResponse {
    const message = createBaseMsgTransferApplicationResponse();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: MsgTransferApplicationResponseAmino): MsgTransferApplicationResponse {
    const message = createBaseMsgTransferApplicationResponse();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: MsgTransferApplicationResponse): MsgTransferApplicationResponseAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferApplicationResponseAminoMsg): MsgTransferApplicationResponse {
    return MsgTransferApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferApplicationResponseProtoMsg): MsgTransferApplicationResponse {
    return MsgTransferApplicationResponse.decode(message.value);
  },
  toProto(message: MsgTransferApplicationResponse): Uint8Array {
    return MsgTransferApplicationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferApplicationResponse): MsgTransferApplicationResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.MsgTransferApplicationResponse",
      value: MsgTransferApplicationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParam(): MsgUpdateParam {
  return {
    authority: "",
    name: "",
    asUint64: undefined,
    asCoin: undefined
  };
}
export const MsgUpdateParam = {
  typeUrl: "/pocket.application.MsgUpdateParam",
  encode(message: MsgUpdateParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.asUint64 !== undefined) {
      writer.uint32(24).uint64(message.asUint64);
    }
    if (message.asCoin !== undefined) {
      Coin.encode(message.asCoin, writer.uint32(34).fork()).ldelim();
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
          message.asUint64 = reader.uint64();
          break;
        case 4:
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
    message.asUint64 = object.asUint64 !== undefined && object.asUint64 !== null ? BigInt(object.asUint64.toString()) : undefined;
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
    if (object.as_uint64 !== undefined && object.as_uint64 !== null) {
      message.asUint64 = BigInt(object.as_uint64);
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
    obj.as_uint64 = message.asUint64 ? message.asUint64?.toString() : "0";
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
      typeUrl: "/pocket.application.MsgUpdateParam",
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
  typeUrl: "/pocket.application.MsgUpdateParamResponse",
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
      typeUrl: "/pocket.application.MsgUpdateParamResponse",
      value: MsgUpdateParamResponse.encode(message).finish()
    };
  }
};