//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.supplier.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.supplier.QueryParamsRequest";
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
  typeUrl: "/pocket.supplier.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.supplier.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetSupplierRequest {
  operatorAddress: string;
  /**
   * if true, return a dehydrated version of the supplier.
   * Why? This enables smaller response payloads to reduce payload size.
   * Example: Removes service_config_history and rev_share details from the response. See the implementation for more details.
   */
  dehydrated: boolean;
}
export interface QueryGetSupplierRequestProtoMsg {
  typeUrl: "/pocket.supplier.QueryGetSupplierRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetSupplierRequestAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.QueryGetSupplierRequest
 */
export interface QueryGetSupplierRequestAmino {
  operator_address?: string;
  /**
   * if true, return a dehydrated version of the supplier.
   * Why? This enables smaller response payloads to reduce payload size.
   * Example: Removes service_config_history and rev_share details from the response. See the implementation for more details.
   */
  dehydrated?: boolean;
}
export interface QueryGetSupplierRequestAminoMsg {
  type: "/pocket.supplier.QueryGetSupplierRequest";
  value: QueryGetSupplierRequestAmino;
}
export interface QueryGetSupplierRequestSDKType {
  operator_address: string;
  dehydrated: boolean;
}
export interface QueryGetSupplierResponse {
  supplier: Supplier;
}
export interface QueryGetSupplierResponseProtoMsg {
  typeUrl: "/pocket.supplier.QueryGetSupplierResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetSupplierResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.QueryGetSupplierResponse
 */
export interface QueryGetSupplierResponseAmino {
  supplier?: SupplierAmino;
}
export interface QueryGetSupplierResponseAminoMsg {
  type: "/pocket.supplier.QueryGetSupplierResponse";
  value: QueryGetSupplierResponseAmino;
}
export interface QueryGetSupplierResponseSDKType {
  supplier: SupplierSDKType;
}
export interface QueryAllSuppliersRequest {
  pagination?: PageRequest;
  /** unique service identifier to filter by */
  serviceId?: string;
  /**
   * if true, return a dehydrated version of the supplier.
   * Why? This enables smaller response payloads to reduce pagination of the supplier list.
   * Example: Removes service_config_history and rev_share details from the response. See the implementation for more details.
   */
  dehydrated: boolean;
}
export interface QueryAllSuppliersRequestProtoMsg {
  typeUrl: "/pocket.supplier.QueryAllSuppliersRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllSuppliersRequestAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.QueryAllSuppliersRequest
 */
export interface QueryAllSuppliersRequestAmino {
  pagination?: PageRequestAmino;
  /**
   * unique service identifier to filter by
   */
  service_id?: string;
  /**
   * if true, return a dehydrated version of the supplier.
   * Why? This enables smaller response payloads to reduce pagination of the supplier list.
   * Example: Removes service_config_history and rev_share details from the response. See the implementation for more details.
   */
  dehydrated?: boolean;
}
export interface QueryAllSuppliersRequestAminoMsg {
  type: "/pocket.supplier.QueryAllSuppliersRequest";
  value: QueryAllSuppliersRequestAmino;
}
export interface QueryAllSuppliersRequestSDKType {
  pagination?: PageRequestSDKType;
  service_id?: string;
  dehydrated: boolean;
}
export interface QueryAllSuppliersResponse {
  supplier: Supplier[];
  pagination?: PageResponse;
}
export interface QueryAllSuppliersResponseProtoMsg {
  typeUrl: "/pocket.supplier.QueryAllSuppliersResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllSuppliersResponseAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.QueryAllSuppliersResponse
 */
export interface QueryAllSuppliersResponseAmino {
  supplier?: SupplierAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSuppliersResponseAminoMsg {
  type: "/pocket.supplier.QueryAllSuppliersResponse";
  value: QueryAllSuppliersResponseAmino;
}
export interface QueryAllSuppliersResponseSDKType {
  supplier: SupplierSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.supplier.QueryParamsRequest",
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
      typeUrl: "/pocket.supplier.QueryParamsRequest",
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
  typeUrl: "/pocket.supplier.QueryParamsResponse",
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
      typeUrl: "/pocket.supplier.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSupplierRequest(): QueryGetSupplierRequest {
  return {
    operatorAddress: "",
    dehydrated: false
  };
}
export const QueryGetSupplierRequest = {
  typeUrl: "/pocket.supplier.QueryGetSupplierRequest",
  encode(message: QueryGetSupplierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.dehydrated === true) {
      writer.uint32(16).bool(message.dehydrated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSupplierRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSupplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.dehydrated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSupplierRequest>): QueryGetSupplierRequest {
    const message = createBaseQueryGetSupplierRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    message.dehydrated = object.dehydrated ?? false;
    return message;
  },
  fromAmino(object: QueryGetSupplierRequestAmino): QueryGetSupplierRequest {
    const message = createBaseQueryGetSupplierRequest();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.dehydrated !== undefined && object.dehydrated !== null) {
      message.dehydrated = object.dehydrated;
    }
    return message;
  },
  toAmino(message: QueryGetSupplierRequest): QueryGetSupplierRequestAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.dehydrated = message.dehydrated === false ? undefined : message.dehydrated;
    return obj;
  },
  fromAminoMsg(object: QueryGetSupplierRequestAminoMsg): QueryGetSupplierRequest {
    return QueryGetSupplierRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSupplierRequestProtoMsg): QueryGetSupplierRequest {
    return QueryGetSupplierRequest.decode(message.value);
  },
  toProto(message: QueryGetSupplierRequest): Uint8Array {
    return QueryGetSupplierRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSupplierRequest): QueryGetSupplierRequestProtoMsg {
    return {
      typeUrl: "/pocket.supplier.QueryGetSupplierRequest",
      value: QueryGetSupplierRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSupplierResponse(): QueryGetSupplierResponse {
  return {
    supplier: Supplier.fromPartial({})
  };
}
export const QueryGetSupplierResponse = {
  typeUrl: "/pocket.supplier.QueryGetSupplierResponse",
  encode(message: QueryGetSupplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSupplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSupplierResponse();
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
  fromPartial(object: Partial<QueryGetSupplierResponse>): QueryGetSupplierResponse {
    const message = createBaseQueryGetSupplierResponse();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSupplierResponseAmino): QueryGetSupplierResponse {
    const message = createBaseQueryGetSupplierResponse();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    return message;
  },
  toAmino(message: QueryGetSupplierResponse): QueryGetSupplierResponseAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSupplierResponseAminoMsg): QueryGetSupplierResponse {
    return QueryGetSupplierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSupplierResponseProtoMsg): QueryGetSupplierResponse {
    return QueryGetSupplierResponse.decode(message.value);
  },
  toProto(message: QueryGetSupplierResponse): Uint8Array {
    return QueryGetSupplierResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSupplierResponse): QueryGetSupplierResponseProtoMsg {
    return {
      typeUrl: "/pocket.supplier.QueryGetSupplierResponse",
      value: QueryGetSupplierResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSuppliersRequest(): QueryAllSuppliersRequest {
  return {
    pagination: undefined,
    serviceId: undefined,
    dehydrated: false
  };
}
export const QueryAllSuppliersRequest = {
  typeUrl: "/pocket.supplier.QueryAllSuppliersRequest",
  encode(message: QueryAllSuppliersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.serviceId !== undefined) {
      writer.uint32(18).string(message.serviceId);
    }
    if (message.dehydrated === true) {
      writer.uint32(24).bool(message.dehydrated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSuppliersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSuppliersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        case 3:
          message.dehydrated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllSuppliersRequest>): QueryAllSuppliersRequest {
    const message = createBaseQueryAllSuppliersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.serviceId = object.serviceId ?? undefined;
    message.dehydrated = object.dehydrated ?? false;
    return message;
  },
  fromAmino(object: QueryAllSuppliersRequestAmino): QueryAllSuppliersRequest {
    const message = createBaseQueryAllSuppliersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.dehydrated !== undefined && object.dehydrated !== null) {
      message.dehydrated = object.dehydrated;
    }
    return message;
  },
  toAmino(message: QueryAllSuppliersRequest): QueryAllSuppliersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.service_id = message.serviceId === null ? undefined : message.serviceId;
    obj.dehydrated = message.dehydrated === false ? undefined : message.dehydrated;
    return obj;
  },
  fromAminoMsg(object: QueryAllSuppliersRequestAminoMsg): QueryAllSuppliersRequest {
    return QueryAllSuppliersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSuppliersRequestProtoMsg): QueryAllSuppliersRequest {
    return QueryAllSuppliersRequest.decode(message.value);
  },
  toProto(message: QueryAllSuppliersRequest): Uint8Array {
    return QueryAllSuppliersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSuppliersRequest): QueryAllSuppliersRequestProtoMsg {
    return {
      typeUrl: "/pocket.supplier.QueryAllSuppliersRequest",
      value: QueryAllSuppliersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSuppliersResponse(): QueryAllSuppliersResponse {
  return {
    supplier: [],
    pagination: undefined
  };
}
export const QueryAllSuppliersResponse = {
  typeUrl: "/pocket.supplier.QueryAllSuppliersResponse",
  encode(message: QueryAllSuppliersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supplier) {
      Supplier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSuppliersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSuppliersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier.push(Supplier.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllSuppliersResponse>): QueryAllSuppliersResponse {
    const message = createBaseQueryAllSuppliersResponse();
    message.supplier = object.supplier?.map(e => Supplier.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSuppliersResponseAmino): QueryAllSuppliersResponse {
    const message = createBaseQueryAllSuppliersResponse();
    message.supplier = object.supplier?.map(e => Supplier.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSuppliersResponse): QueryAllSuppliersResponseAmino {
    const obj: any = {};
    if (message.supplier) {
      obj.supplier = message.supplier.map(e => e ? Supplier.toAmino(e) : undefined);
    } else {
      obj.supplier = message.supplier;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSuppliersResponseAminoMsg): QueryAllSuppliersResponse {
    return QueryAllSuppliersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSuppliersResponseProtoMsg): QueryAllSuppliersResponse {
    return QueryAllSuppliersResponse.decode(message.value);
  },
  toProto(message: QueryAllSuppliersResponse): Uint8Array {
    return QueryAllSuppliersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSuppliersResponse): QueryAllSuppliersResponseProtoMsg {
    return {
      typeUrl: "/pocket.supplier.QueryAllSuppliersResponse",
      value: QueryAllSuppliersResponse.encode(message).finish()
    };
  }
};