//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Application, ApplicationAmino, ApplicationSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.application.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.application
 * @see proto type: pocket.application.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.application.QueryParamsRequest";
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
  typeUrl: "/pocket.application.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.application.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetApplicationRequest {
  address: string;
}
export interface QueryGetApplicationRequestProtoMsg {
  typeUrl: "/pocket.application.QueryGetApplicationRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetApplicationRequestAmino
 * @package pocket.application
 * @see proto type: pocket.application.QueryGetApplicationRequest
 */
export interface QueryGetApplicationRequestAmino {
  address?: string;
}
export interface QueryGetApplicationRequestAminoMsg {
  type: "/pocket.application.QueryGetApplicationRequest";
  value: QueryGetApplicationRequestAmino;
}
export interface QueryGetApplicationRequestSDKType {
  address: string;
}
export interface QueryGetApplicationResponse {
  application: Application;
}
export interface QueryGetApplicationResponseProtoMsg {
  typeUrl: "/pocket.application.QueryGetApplicationResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetApplicationResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.QueryGetApplicationResponse
 */
export interface QueryGetApplicationResponseAmino {
  application?: ApplicationAmino;
}
export interface QueryGetApplicationResponseAminoMsg {
  type: "/pocket.application.QueryGetApplicationResponse";
  value: QueryGetApplicationResponseAmino;
}
export interface QueryGetApplicationResponseSDKType {
  application: ApplicationSDKType;
}
export interface QueryAllApplicationsRequest {
  pagination?: PageRequest;
  /**
   * TODO_MAINNET(@adshmh): rename this field to `gateway_address_delegated_to`
   * delegatee_gateway_address, if specified, filters the application list to only include those with delegation to the specified gateway address.
   */
  delegateeGatewayAddress: string;
}
export interface QueryAllApplicationsRequestProtoMsg {
  typeUrl: "/pocket.application.QueryAllApplicationsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllApplicationsRequestAmino
 * @package pocket.application
 * @see proto type: pocket.application.QueryAllApplicationsRequest
 */
export interface QueryAllApplicationsRequestAmino {
  pagination?: PageRequestAmino;
  /**
   * TODO_MAINNET(@adshmh): rename this field to `gateway_address_delegated_to`
   * delegatee_gateway_address, if specified, filters the application list to only include those with delegation to the specified gateway address.
   */
  delegatee_gateway_address?: string;
}
export interface QueryAllApplicationsRequestAminoMsg {
  type: "/pocket.application.QueryAllApplicationsRequest";
  value: QueryAllApplicationsRequestAmino;
}
export interface QueryAllApplicationsRequestSDKType {
  pagination?: PageRequestSDKType;
  delegatee_gateway_address: string;
}
export interface QueryAllApplicationsResponse {
  applications: Application[];
  pagination?: PageResponse;
}
export interface QueryAllApplicationsResponseProtoMsg {
  typeUrl: "/pocket.application.QueryAllApplicationsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllApplicationsResponseAmino
 * @package pocket.application
 * @see proto type: pocket.application.QueryAllApplicationsResponse
 */
export interface QueryAllApplicationsResponseAmino {
  applications?: ApplicationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllApplicationsResponseAminoMsg {
  type: "/pocket.application.QueryAllApplicationsResponse";
  value: QueryAllApplicationsResponseAmino;
}
export interface QueryAllApplicationsResponseSDKType {
  applications: ApplicationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.application.QueryParamsRequest",
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
      typeUrl: "/pocket.application.QueryParamsRequest",
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
  typeUrl: "/pocket.application.QueryParamsResponse",
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
      typeUrl: "/pocket.application.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetApplicationRequest(): QueryGetApplicationRequest {
  return {
    address: ""
  };
}
export const QueryGetApplicationRequest = {
  typeUrl: "/pocket.application.QueryGetApplicationRequest",
  encode(message: QueryGetApplicationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetApplicationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetApplicationRequest();
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
  fromPartial(object: Partial<QueryGetApplicationRequest>): QueryGetApplicationRequest {
    const message = createBaseQueryGetApplicationRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetApplicationRequestAmino): QueryGetApplicationRequest {
    const message = createBaseQueryGetApplicationRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetApplicationRequest): QueryGetApplicationRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetApplicationRequestAminoMsg): QueryGetApplicationRequest {
    return QueryGetApplicationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetApplicationRequestProtoMsg): QueryGetApplicationRequest {
    return QueryGetApplicationRequest.decode(message.value);
  },
  toProto(message: QueryGetApplicationRequest): Uint8Array {
    return QueryGetApplicationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetApplicationRequest): QueryGetApplicationRequestProtoMsg {
    return {
      typeUrl: "/pocket.application.QueryGetApplicationRequest",
      value: QueryGetApplicationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetApplicationResponse(): QueryGetApplicationResponse {
  return {
    application: Application.fromPartial({})
  };
}
export const QueryGetApplicationResponse = {
  typeUrl: "/pocket.application.QueryGetApplicationResponse",
  encode(message: QueryGetApplicationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetApplicationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetApplicationResponse();
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
  fromPartial(object: Partial<QueryGetApplicationResponse>): QueryGetApplicationResponse {
    const message = createBaseQueryGetApplicationResponse();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: QueryGetApplicationResponseAmino): QueryGetApplicationResponse {
    const message = createBaseQueryGetApplicationResponse();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: QueryGetApplicationResponse): QueryGetApplicationResponseAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetApplicationResponseAminoMsg): QueryGetApplicationResponse {
    return QueryGetApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetApplicationResponseProtoMsg): QueryGetApplicationResponse {
    return QueryGetApplicationResponse.decode(message.value);
  },
  toProto(message: QueryGetApplicationResponse): Uint8Array {
    return QueryGetApplicationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetApplicationResponse): QueryGetApplicationResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.QueryGetApplicationResponse",
      value: QueryGetApplicationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllApplicationsRequest(): QueryAllApplicationsRequest {
  return {
    pagination: undefined,
    delegateeGatewayAddress: ""
  };
}
export const QueryAllApplicationsRequest = {
  typeUrl: "/pocket.application.QueryAllApplicationsRequest",
  encode(message: QueryAllApplicationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegateeGatewayAddress !== "") {
      writer.uint32(18).string(message.delegateeGatewayAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllApplicationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllApplicationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.delegateeGatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllApplicationsRequest>): QueryAllApplicationsRequest {
    const message = createBaseQueryAllApplicationsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.delegateeGatewayAddress = object.delegateeGatewayAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAllApplicationsRequestAmino): QueryAllApplicationsRequest {
    const message = createBaseQueryAllApplicationsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.delegatee_gateway_address !== undefined && object.delegatee_gateway_address !== null) {
      message.delegateeGatewayAddress = object.delegatee_gateway_address;
    }
    return message;
  },
  toAmino(message: QueryAllApplicationsRequest): QueryAllApplicationsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.delegatee_gateway_address = message.delegateeGatewayAddress === "" ? undefined : message.delegateeGatewayAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAllApplicationsRequestAminoMsg): QueryAllApplicationsRequest {
    return QueryAllApplicationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllApplicationsRequestProtoMsg): QueryAllApplicationsRequest {
    return QueryAllApplicationsRequest.decode(message.value);
  },
  toProto(message: QueryAllApplicationsRequest): Uint8Array {
    return QueryAllApplicationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllApplicationsRequest): QueryAllApplicationsRequestProtoMsg {
    return {
      typeUrl: "/pocket.application.QueryAllApplicationsRequest",
      value: QueryAllApplicationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllApplicationsResponse(): QueryAllApplicationsResponse {
  return {
    applications: [],
    pagination: undefined
  };
}
export const QueryAllApplicationsResponse = {
  typeUrl: "/pocket.application.QueryAllApplicationsResponse",
  encode(message: QueryAllApplicationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.applications) {
      Application.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllApplicationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllApplicationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applications.push(Application.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllApplicationsResponse>): QueryAllApplicationsResponse {
    const message = createBaseQueryAllApplicationsResponse();
    message.applications = object.applications?.map(e => Application.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllApplicationsResponseAmino): QueryAllApplicationsResponse {
    const message = createBaseQueryAllApplicationsResponse();
    message.applications = object.applications?.map(e => Application.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllApplicationsResponse): QueryAllApplicationsResponseAmino {
    const obj: any = {};
    if (message.applications) {
      obj.applications = message.applications.map(e => e ? Application.toAmino(e) : undefined);
    } else {
      obj.applications = message.applications;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllApplicationsResponseAminoMsg): QueryAllApplicationsResponse {
    return QueryAllApplicationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllApplicationsResponseProtoMsg): QueryAllApplicationsResponse {
    return QueryAllApplicationsResponse.decode(message.value);
  },
  toProto(message: QueryAllApplicationsResponse): Uint8Array {
    return QueryAllApplicationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllApplicationsResponse): QueryAllApplicationsResponseProtoMsg {
    return {
      typeUrl: "/pocket.application.QueryAllApplicationsResponse",
      value: QueryAllApplicationsResponse.encode(message).finish()
    };
  }
};