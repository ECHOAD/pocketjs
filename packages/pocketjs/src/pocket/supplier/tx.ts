//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SupplierServiceConfig, SupplierServiceConfigAmino, SupplierServiceConfigSDKType } from "../shared/service";
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/supplier parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.supplier.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the x/supplier parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/supplier/MsgUpdateParams";
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
  typeUrl: "/pocket.supplier.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.supplier.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgStakeSupplier {
  /** The Bech32 address of the message signer (i.e. owner or operator) */
  signer: string;
  /** The Bech32 address of the owner (i.e. custodial, staker) */
  ownerAddress: string;
  /** The Bech32 address of the operator (i.e. provider, non-custodial) */
  operatorAddress: string;
  /** The total amount of uPOKT the supplier has staked. Must be ≥ to the current amount that the supplier has staked (if any) */
  stake?: Coin;
  /** The list of services this supplier is staked to provide service for */
  services: SupplierServiceConfig[];
}
export interface MsgStakeSupplierProtoMsg {
  typeUrl: "/pocket.supplier.MsgStakeSupplier";
  value: Uint8Array;
}
/**
 * @name MsgStakeSupplierAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgStakeSupplier
 */
export interface MsgStakeSupplierAmino {
  /**
   * The Bech32 address of the message signer (i.e. owner or operator)
   */
  signer?: string;
  /**
   * The Bech32 address of the owner (i.e. custodial, staker)
   */
  owner_address?: string;
  /**
   * The Bech32 address of the operator (i.e. provider, non-custodial)
   */
  operator_address?: string;
  /**
   * The total amount of uPOKT the supplier has staked. Must be ≥ to the current amount that the supplier has staked (if any)
   */
  stake?: CoinAmino;
  /**
   * The list of services this supplier is staked to provide service for
   */
  services?: SupplierServiceConfigAmino[];
}
export interface MsgStakeSupplierAminoMsg {
  type: "/pocket.supplier.MsgStakeSupplier";
  value: MsgStakeSupplierAmino;
}
export interface MsgStakeSupplierSDKType {
  signer: string;
  owner_address: string;
  operator_address: string;
  stake?: CoinSDKType;
  services: SupplierServiceConfigSDKType[];
}
export interface MsgStakeSupplierResponse {
  supplier?: Supplier;
}
export interface MsgStakeSupplierResponseProtoMsg {
  typeUrl: "/pocket.supplier.MsgStakeSupplierResponse";
  value: Uint8Array;
}
/**
 * @name MsgStakeSupplierResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgStakeSupplierResponse
 */
export interface MsgStakeSupplierResponseAmino {
  supplier?: SupplierAmino;
}
export interface MsgStakeSupplierResponseAminoMsg {
  type: "/pocket.supplier.MsgStakeSupplierResponse";
  value: MsgStakeSupplierResponseAmino;
}
export interface MsgStakeSupplierResponseSDKType {
  supplier?: SupplierSDKType;
}
export interface MsgUnstakeSupplier {
  /** The Bech32 address of the message signer (i.e. owner or operator) */
  signer: string;
  /** The Bech32 address of the operator (i.e. provider, non-custodial) */
  operatorAddress: string;
}
export interface MsgUnstakeSupplierProtoMsg {
  typeUrl: "/pocket.supplier.MsgUnstakeSupplier";
  value: Uint8Array;
}
/**
 * @name MsgUnstakeSupplierAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgUnstakeSupplier
 */
export interface MsgUnstakeSupplierAmino {
  /**
   * The Bech32 address of the message signer (i.e. owner or operator)
   */
  signer?: string;
  /**
   * The Bech32 address of the operator (i.e. provider, non-custodial)
   */
  operator_address?: string;
}
export interface MsgUnstakeSupplierAminoMsg {
  type: "/pocket.supplier.MsgUnstakeSupplier";
  value: MsgUnstakeSupplierAmino;
}
export interface MsgUnstakeSupplierSDKType {
  signer: string;
  operator_address: string;
}
export interface MsgUnstakeSupplierResponse {
  supplier?: Supplier;
}
export interface MsgUnstakeSupplierResponseProtoMsg {
  typeUrl: "/pocket.supplier.MsgUnstakeSupplierResponse";
  value: Uint8Array;
}
/**
 * @name MsgUnstakeSupplierResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgUnstakeSupplierResponse
 */
export interface MsgUnstakeSupplierResponseAmino {
  supplier?: SupplierAmino;
}
export interface MsgUnstakeSupplierResponseAminoMsg {
  type: "/pocket.supplier.MsgUnstakeSupplierResponse";
  value: MsgUnstakeSupplierResponseAmino;
}
export interface MsgUnstakeSupplierResponseSDKType {
  supplier?: SupplierSDKType;
}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParam {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  name: string;
  asCoin?: Coin;
}
export interface MsgUpdateParamProtoMsg {
  typeUrl: "/pocket.supplier.MsgUpdateParam";
  value: Uint8Array;
}
/**
 * MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
 * @name MsgUpdateParamAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgUpdateParam
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
  type: "/pocket.supplier.MsgUpdateParam";
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
  typeUrl: "/pocket.supplier.MsgUpdateParamResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.MsgUpdateParamResponse
 */
export interface MsgUpdateParamResponseAmino {
  params?: ParamsAmino;
}
export interface MsgUpdateParamResponseAminoMsg {
  type: "/pocket.supplier.MsgUpdateParamResponse";
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
  typeUrl: "/pocket.supplier.MsgUpdateParams",
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
      type: "pocket/x/supplier/MsgUpdateParams",
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
      typeUrl: "/pocket.supplier.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.supplier.MsgUpdateParamsResponse",
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
      typeUrl: "/pocket.supplier.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStakeSupplier(): MsgStakeSupplier {
  return {
    signer: "",
    ownerAddress: "",
    operatorAddress: "",
    stake: undefined,
    services: []
  };
}
export const MsgStakeSupplier = {
  typeUrl: "/pocket.supplier.MsgStakeSupplier",
  encode(message: MsgStakeSupplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(26).string(message.operatorAddress);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.services) {
      SupplierServiceConfig.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeSupplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeSupplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.operatorAddress = reader.string();
          break;
        case 4:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.services.push(SupplierServiceConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeSupplier>): MsgStakeSupplier {
    const message = createBaseMsgStakeSupplier();
    message.signer = object.signer ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.services = object.services?.map(e => SupplierServiceConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgStakeSupplierAmino): MsgStakeSupplier {
    const message = createBaseMsgStakeSupplier();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    message.services = object.services?.map(e => SupplierServiceConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgStakeSupplier): MsgStakeSupplierAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    if (message.services) {
      obj.services = message.services.map(e => e ? SupplierServiceConfig.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: MsgStakeSupplierAminoMsg): MsgStakeSupplier {
    return MsgStakeSupplier.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeSupplierProtoMsg): MsgStakeSupplier {
    return MsgStakeSupplier.decode(message.value);
  },
  toProto(message: MsgStakeSupplier): Uint8Array {
    return MsgStakeSupplier.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeSupplier): MsgStakeSupplierProtoMsg {
    return {
      typeUrl: "/pocket.supplier.MsgStakeSupplier",
      value: MsgStakeSupplier.encode(message).finish()
    };
  }
};
function createBaseMsgStakeSupplierResponse(): MsgStakeSupplierResponse {
  return {
    supplier: undefined
  };
}
export const MsgStakeSupplierResponse = {
  typeUrl: "/pocket.supplier.MsgStakeSupplierResponse",
  encode(message: MsgStakeSupplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeSupplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeSupplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeSupplierResponse>): MsgStakeSupplierResponse {
    const message = createBaseMsgStakeSupplierResponse();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeSupplierResponseAmino): MsgStakeSupplierResponse {
    const message = createBaseMsgStakeSupplierResponse();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    return message;
  },
  toAmino(message: MsgStakeSupplierResponse): MsgStakeSupplierResponseAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeSupplierResponseAminoMsg): MsgStakeSupplierResponse {
    return MsgStakeSupplierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeSupplierResponseProtoMsg): MsgStakeSupplierResponse {
    return MsgStakeSupplierResponse.decode(message.value);
  },
  toProto(message: MsgStakeSupplierResponse): Uint8Array {
    return MsgStakeSupplierResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeSupplierResponse): MsgStakeSupplierResponseProtoMsg {
    return {
      typeUrl: "/pocket.supplier.MsgStakeSupplierResponse",
      value: MsgStakeSupplierResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeSupplier(): MsgUnstakeSupplier {
  return {
    signer: "",
    operatorAddress: ""
  };
}
export const MsgUnstakeSupplier = {
  typeUrl: "/pocket.supplier.MsgUnstakeSupplier",
  encode(message: MsgUnstakeSupplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeSupplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeSupplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeSupplier>): MsgUnstakeSupplier {
    const message = createBaseMsgUnstakeSupplier();
    message.signer = object.signer ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeSupplierAmino): MsgUnstakeSupplier {
    const message = createBaseMsgUnstakeSupplier();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: MsgUnstakeSupplier): MsgUnstakeSupplierAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeSupplierAminoMsg): MsgUnstakeSupplier {
    return MsgUnstakeSupplier.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeSupplierProtoMsg): MsgUnstakeSupplier {
    return MsgUnstakeSupplier.decode(message.value);
  },
  toProto(message: MsgUnstakeSupplier): Uint8Array {
    return MsgUnstakeSupplier.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeSupplier): MsgUnstakeSupplierProtoMsg {
    return {
      typeUrl: "/pocket.supplier.MsgUnstakeSupplier",
      value: MsgUnstakeSupplier.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeSupplierResponse(): MsgUnstakeSupplierResponse {
  return {
    supplier: undefined
  };
}
export const MsgUnstakeSupplierResponse = {
  typeUrl: "/pocket.supplier.MsgUnstakeSupplierResponse",
  encode(message: MsgUnstakeSupplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeSupplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeSupplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeSupplierResponse>): MsgUnstakeSupplierResponse {
    const message = createBaseMsgUnstakeSupplierResponse();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    return message;
  },
  fromAmino(object: MsgUnstakeSupplierResponseAmino): MsgUnstakeSupplierResponse {
    const message = createBaseMsgUnstakeSupplierResponse();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    return message;
  },
  toAmino(message: MsgUnstakeSupplierResponse): MsgUnstakeSupplierResponseAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeSupplierResponseAminoMsg): MsgUnstakeSupplierResponse {
    return MsgUnstakeSupplierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeSupplierResponseProtoMsg): MsgUnstakeSupplierResponse {
    return MsgUnstakeSupplierResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeSupplierResponse): Uint8Array {
    return MsgUnstakeSupplierResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeSupplierResponse): MsgUnstakeSupplierResponseProtoMsg {
    return {
      typeUrl: "/pocket.supplier.MsgUnstakeSupplierResponse",
      value: MsgUnstakeSupplierResponse.encode(message).finish()
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
  typeUrl: "/pocket.supplier.MsgUpdateParam",
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
    obj.as_coin = message.asCoin ? Coin.toAmino(message.asCoin) : undefined;
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
      typeUrl: "/pocket.supplier.MsgUpdateParam",
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
  typeUrl: "/pocket.supplier.MsgUpdateParamResponse",
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
      typeUrl: "/pocket.supplier.MsgUpdateParamResponse",
      value: MsgUpdateParamResponse.encode(message).finish()
    };
  }
};