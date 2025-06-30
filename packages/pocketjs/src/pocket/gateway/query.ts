//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gateway, GatewayAmino, GatewaySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.gateway.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.gateway.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pocket.gateway.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.gateway.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetGatewayRequest {
  address: string;
}
export interface QueryGetGatewayRequestProtoMsg {
  typeUrl: "/pocket.gateway.QueryGetGatewayRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetGatewayRequestAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.QueryGetGatewayRequest
 */
export interface QueryGetGatewayRequestAmino {
  address?: string;
}
export interface QueryGetGatewayRequestAminoMsg {
  type: "/pocket.gateway.QueryGetGatewayRequest";
  value: QueryGetGatewayRequestAmino;
}
export interface QueryGetGatewayRequestSDKType {
  address: string;
}
export interface QueryGetGatewayResponse {
  gateway: Gateway;
}
export interface QueryGetGatewayResponseProtoMsg {
  typeUrl: "/pocket.gateway.QueryGetGatewayResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetGatewayResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.QueryGetGatewayResponse
 */
export interface QueryGetGatewayResponseAmino {
  gateway?: GatewayAmino;
}
export interface QueryGetGatewayResponseAminoMsg {
  type: "/pocket.gateway.QueryGetGatewayResponse";
  value: QueryGetGatewayResponseAmino;
}
export interface QueryGetGatewayResponseSDKType {
  gateway: GatewaySDKType;
}
export interface QueryAllGatewaysRequest {
  pagination?: PageRequest;
}
export interface QueryAllGatewaysRequestProtoMsg {
  typeUrl: "/pocket.gateway.QueryAllGatewaysRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllGatewaysRequestAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.QueryAllGatewaysRequest
 */
export interface QueryAllGatewaysRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGatewaysRequestAminoMsg {
  type: "/pocket.gateway.QueryAllGatewaysRequest";
  value: QueryAllGatewaysRequestAmino;
}
export interface QueryAllGatewaysRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllGatewaysResponse {
  gateways: Gateway[];
  pagination?: PageResponse;
}
export interface QueryAllGatewaysResponseProtoMsg {
  typeUrl: "/pocket.gateway.QueryAllGatewaysResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllGatewaysResponseAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.QueryAllGatewaysResponse
 */
export interface QueryAllGatewaysResponseAmino {
  gateways?: GatewayAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGatewaysResponseAminoMsg {
  type: "/pocket.gateway.QueryAllGatewaysResponse";
  value: QueryAllGatewaysResponseAmino;
}
export interface QueryAllGatewaysResponseSDKType {
  gateways: GatewaySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.gateway.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pocket.gateway.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pocket.gateway.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pocket.gateway.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGatewayRequest(): QueryGetGatewayRequest {
  return {
    address: ""
  };
}
export const QueryGetGatewayRequest = {
  typeUrl: "/pocket.gateway.QueryGetGatewayRequest",
  encode(message: QueryGetGatewayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGatewayRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGatewayRequest();
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
  fromPartial(object: Partial<QueryGetGatewayRequest>): QueryGetGatewayRequest {
    const message = createBaseQueryGetGatewayRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetGatewayRequestAmino): QueryGetGatewayRequest {
    const message = createBaseQueryGetGatewayRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetGatewayRequest): QueryGetGatewayRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetGatewayRequestAminoMsg): QueryGetGatewayRequest {
    return QueryGetGatewayRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGatewayRequestProtoMsg): QueryGetGatewayRequest {
    return QueryGetGatewayRequest.decode(message.value);
  },
  toProto(message: QueryGetGatewayRequest): Uint8Array {
    return QueryGetGatewayRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGatewayRequest): QueryGetGatewayRequestProtoMsg {
    return {
      typeUrl: "/pocket.gateway.QueryGetGatewayRequest",
      value: QueryGetGatewayRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGatewayResponse(): QueryGetGatewayResponse {
  return {
    gateway: Gateway.fromPartial({})
  };
}
export const QueryGetGatewayResponse = {
  typeUrl: "/pocket.gateway.QueryGetGatewayResponse",
  encode(message: QueryGetGatewayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGatewayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGatewayResponse();
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
  fromPartial(object: Partial<QueryGetGatewayResponse>): QueryGetGatewayResponse {
    const message = createBaseQueryGetGatewayResponse();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGatewayResponseAmino): QueryGetGatewayResponse {
    const message = createBaseQueryGetGatewayResponse();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    return message;
  },
  toAmino(message: QueryGetGatewayResponse): QueryGetGatewayResponseAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGatewayResponseAminoMsg): QueryGetGatewayResponse {
    return QueryGetGatewayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGatewayResponseProtoMsg): QueryGetGatewayResponse {
    return QueryGetGatewayResponse.decode(message.value);
  },
  toProto(message: QueryGetGatewayResponse): Uint8Array {
    return QueryGetGatewayResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGatewayResponse): QueryGetGatewayResponseProtoMsg {
    return {
      typeUrl: "/pocket.gateway.QueryGetGatewayResponse",
      value: QueryGetGatewayResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGatewaysRequest(): QueryAllGatewaysRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllGatewaysRequest = {
  typeUrl: "/pocket.gateway.QueryAllGatewaysRequest",
  encode(message: QueryAllGatewaysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGatewaysRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGatewaysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllGatewaysRequest>): QueryAllGatewaysRequest {
    const message = createBaseQueryAllGatewaysRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGatewaysRequestAmino): QueryAllGatewaysRequest {
    const message = createBaseQueryAllGatewaysRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGatewaysRequest): QueryAllGatewaysRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGatewaysRequestAminoMsg): QueryAllGatewaysRequest {
    return QueryAllGatewaysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGatewaysRequestProtoMsg): QueryAllGatewaysRequest {
    return QueryAllGatewaysRequest.decode(message.value);
  },
  toProto(message: QueryAllGatewaysRequest): Uint8Array {
    return QueryAllGatewaysRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGatewaysRequest): QueryAllGatewaysRequestProtoMsg {
    return {
      typeUrl: "/pocket.gateway.QueryAllGatewaysRequest",
      value: QueryAllGatewaysRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGatewaysResponse(): QueryAllGatewaysResponse {
  return {
    gateways: [],
    pagination: undefined
  };
}
export const QueryAllGatewaysResponse = {
  typeUrl: "/pocket.gateway.QueryAllGatewaysResponse",
  encode(message: QueryAllGatewaysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gateways) {
      Gateway.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGatewaysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGatewaysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateways.push(Gateway.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllGatewaysResponse>): QueryAllGatewaysResponse {
    const message = createBaseQueryAllGatewaysResponse();
    message.gateways = object.gateways?.map(e => Gateway.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGatewaysResponseAmino): QueryAllGatewaysResponse {
    const message = createBaseQueryAllGatewaysResponse();
    message.gateways = object.gateways?.map(e => Gateway.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGatewaysResponse): QueryAllGatewaysResponseAmino {
    const obj: any = {};
    if (message.gateways) {
      obj.gateways = message.gateways.map(e => e ? Gateway.toAmino(e) : undefined);
    } else {
      obj.gateways = message.gateways;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGatewaysResponseAminoMsg): QueryAllGatewaysResponse {
    return QueryAllGatewaysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGatewaysResponseProtoMsg): QueryAllGatewaysResponse {
    return QueryAllGatewaysResponse.decode(message.value);
  },
  toProto(message: QueryAllGatewaysResponse): Uint8Array {
    return QueryAllGatewaysResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGatewaysResponse): QueryAllGatewaysResponseProtoMsg {
    return {
      typeUrl: "/pocket.gateway.QueryAllGatewaysResponse",
      value: QueryAllGatewaysResponse.encode(message).finish()
    };
  }
};