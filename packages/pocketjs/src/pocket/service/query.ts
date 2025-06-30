//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Service, ServiceAmino, ServiceSDKType } from "../shared/service";
import { RelayMiningDifficulty, RelayMiningDifficultyAmino, RelayMiningDifficultySDKType } from "./relay_mining_difficulty";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.service.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.service.QueryParamsRequest";
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
  typeUrl: "/pocket.service.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.service.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetServiceRequest {
  /** TODO_IMPROVE: We could support getting services by name. */
  id: string;
}
export interface QueryGetServiceRequestProtoMsg {
  typeUrl: "/pocket.service.QueryGetServiceRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetServiceRequestAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryGetServiceRequest
 */
export interface QueryGetServiceRequestAmino {
  /**
   * TODO_IMPROVE: We could support getting services by name.
   */
  id?: string;
}
export interface QueryGetServiceRequestAminoMsg {
  type: "/pocket.service.QueryGetServiceRequest";
  value: QueryGetServiceRequestAmino;
}
export interface QueryGetServiceRequestSDKType {
  id: string;
}
export interface QueryGetServiceResponse {
  service: Service;
}
export interface QueryGetServiceResponseProtoMsg {
  typeUrl: "/pocket.service.QueryGetServiceResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetServiceResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryGetServiceResponse
 */
export interface QueryGetServiceResponseAmino {
  service?: ServiceAmino;
}
export interface QueryGetServiceResponseAminoMsg {
  type: "/pocket.service.QueryGetServiceResponse";
  value: QueryGetServiceResponseAmino;
}
export interface QueryGetServiceResponseSDKType {
  service: ServiceSDKType;
}
export interface QueryAllServicesRequest {
  pagination?: PageRequest;
}
export interface QueryAllServicesRequestProtoMsg {
  typeUrl: "/pocket.service.QueryAllServicesRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllServicesRequestAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryAllServicesRequest
 */
export interface QueryAllServicesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllServicesRequestAminoMsg {
  type: "/pocket.service.QueryAllServicesRequest";
  value: QueryAllServicesRequestAmino;
}
export interface QueryAllServicesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllServicesResponse {
  service: Service[];
  pagination?: PageResponse;
}
export interface QueryAllServicesResponseProtoMsg {
  typeUrl: "/pocket.service.QueryAllServicesResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllServicesResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryAllServicesResponse
 */
export interface QueryAllServicesResponseAmino {
  service?: ServiceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllServicesResponseAminoMsg {
  type: "/pocket.service.QueryAllServicesResponse";
  value: QueryAllServicesResponseAmino;
}
export interface QueryAllServicesResponseSDKType {
  service: ServiceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetRelayMiningDifficultyRequest {
  serviceId: string;
}
export interface QueryGetRelayMiningDifficultyRequestProtoMsg {
  typeUrl: "/pocket.service.QueryGetRelayMiningDifficultyRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetRelayMiningDifficultyRequestAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryGetRelayMiningDifficultyRequest
 */
export interface QueryGetRelayMiningDifficultyRequestAmino {
  serviceId?: string;
}
export interface QueryGetRelayMiningDifficultyRequestAminoMsg {
  type: "/pocket.service.QueryGetRelayMiningDifficultyRequest";
  value: QueryGetRelayMiningDifficultyRequestAmino;
}
export interface QueryGetRelayMiningDifficultyRequestSDKType {
  serviceId: string;
}
export interface QueryGetRelayMiningDifficultyResponse {
  relayMiningDifficulty: RelayMiningDifficulty;
}
export interface QueryGetRelayMiningDifficultyResponseProtoMsg {
  typeUrl: "/pocket.service.QueryGetRelayMiningDifficultyResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetRelayMiningDifficultyResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryGetRelayMiningDifficultyResponse
 */
export interface QueryGetRelayMiningDifficultyResponseAmino {
  relayMiningDifficulty?: RelayMiningDifficultyAmino;
}
export interface QueryGetRelayMiningDifficultyResponseAminoMsg {
  type: "/pocket.service.QueryGetRelayMiningDifficultyResponse";
  value: QueryGetRelayMiningDifficultyResponseAmino;
}
export interface QueryGetRelayMiningDifficultyResponseSDKType {
  relayMiningDifficulty: RelayMiningDifficultySDKType;
}
export interface QueryAllRelayMiningDifficultyRequest {
  pagination?: PageRequest;
}
export interface QueryAllRelayMiningDifficultyRequestProtoMsg {
  typeUrl: "/pocket.service.QueryAllRelayMiningDifficultyRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllRelayMiningDifficultyRequestAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryAllRelayMiningDifficultyRequest
 */
export interface QueryAllRelayMiningDifficultyRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllRelayMiningDifficultyRequestAminoMsg {
  type: "/pocket.service.QueryAllRelayMiningDifficultyRequest";
  value: QueryAllRelayMiningDifficultyRequestAmino;
}
export interface QueryAllRelayMiningDifficultyRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllRelayMiningDifficultyResponse {
  relayMiningDifficulty: RelayMiningDifficulty[];
  pagination?: PageResponse;
}
export interface QueryAllRelayMiningDifficultyResponseProtoMsg {
  typeUrl: "/pocket.service.QueryAllRelayMiningDifficultyResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllRelayMiningDifficultyResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.QueryAllRelayMiningDifficultyResponse
 */
export interface QueryAllRelayMiningDifficultyResponseAmino {
  relayMiningDifficulty?: RelayMiningDifficultyAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllRelayMiningDifficultyResponseAminoMsg {
  type: "/pocket.service.QueryAllRelayMiningDifficultyResponse";
  value: QueryAllRelayMiningDifficultyResponseAmino;
}
export interface QueryAllRelayMiningDifficultyResponseSDKType {
  relayMiningDifficulty: RelayMiningDifficultySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.service.QueryParamsRequest",
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
      typeUrl: "/pocket.service.QueryParamsRequest",
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
  typeUrl: "/pocket.service.QueryParamsResponse",
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
      typeUrl: "/pocket.service.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetServiceRequest(): QueryGetServiceRequest {
  return {
    id: ""
  };
}
export const QueryGetServiceRequest = {
  typeUrl: "/pocket.service.QueryGetServiceRequest",
  encode(message: QueryGetServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetServiceRequest>): QueryGetServiceRequest {
    const message = createBaseQueryGetServiceRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryGetServiceRequestAmino): QueryGetServiceRequest {
    const message = createBaseQueryGetServiceRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryGetServiceRequest): QueryGetServiceRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetServiceRequestAminoMsg): QueryGetServiceRequest {
    return QueryGetServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetServiceRequestProtoMsg): QueryGetServiceRequest {
    return QueryGetServiceRequest.decode(message.value);
  },
  toProto(message: QueryGetServiceRequest): Uint8Array {
    return QueryGetServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetServiceRequest): QueryGetServiceRequestProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryGetServiceRequest",
      value: QueryGetServiceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetServiceResponse(): QueryGetServiceResponse {
  return {
    service: Service.fromPartial({})
  };
}
export const QueryGetServiceResponse = {
  typeUrl: "/pocket.service.QueryGetServiceResponse",
  encode(message: QueryGetServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetServiceResponse();
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
  fromPartial(object: Partial<QueryGetServiceResponse>): QueryGetServiceResponse {
    const message = createBaseQueryGetServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromAmino(object: QueryGetServiceResponseAmino): QueryGetServiceResponse {
    const message = createBaseQueryGetServiceResponse();
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: QueryGetServiceResponse): QueryGetServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetServiceResponseAminoMsg): QueryGetServiceResponse {
    return QueryGetServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetServiceResponseProtoMsg): QueryGetServiceResponse {
    return QueryGetServiceResponse.decode(message.value);
  },
  toProto(message: QueryGetServiceResponse): Uint8Array {
    return QueryGetServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetServiceResponse): QueryGetServiceResponseProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryGetServiceResponse",
      value: QueryGetServiceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllServicesRequest(): QueryAllServicesRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllServicesRequest = {
  typeUrl: "/pocket.service.QueryAllServicesRequest",
  encode(message: QueryAllServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllServicesRequest();
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
  fromPartial(object: Partial<QueryAllServicesRequest>): QueryAllServicesRequest {
    const message = createBaseQueryAllServicesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllServicesRequestAmino): QueryAllServicesRequest {
    const message = createBaseQueryAllServicesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllServicesRequest): QueryAllServicesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllServicesRequestAminoMsg): QueryAllServicesRequest {
    return QueryAllServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllServicesRequestProtoMsg): QueryAllServicesRequest {
    return QueryAllServicesRequest.decode(message.value);
  },
  toProto(message: QueryAllServicesRequest): Uint8Array {
    return QueryAllServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllServicesRequest): QueryAllServicesRequestProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryAllServicesRequest",
      value: QueryAllServicesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllServicesResponse(): QueryAllServicesResponse {
  return {
    service: [],
    pagination: undefined
  };
}
export const QueryAllServicesResponse = {
  typeUrl: "/pocket.service.QueryAllServicesResponse",
  encode(message: QueryAllServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service.push(Service.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllServicesResponse>): QueryAllServicesResponse {
    const message = createBaseQueryAllServicesResponse();
    message.service = object.service?.map(e => Service.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllServicesResponseAmino): QueryAllServicesResponse {
    const message = createBaseQueryAllServicesResponse();
    message.service = object.service?.map(e => Service.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllServicesResponse): QueryAllServicesResponseAmino {
    const obj: any = {};
    if (message.service) {
      obj.service = message.service.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.service = message.service;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllServicesResponseAminoMsg): QueryAllServicesResponse {
    return QueryAllServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllServicesResponseProtoMsg): QueryAllServicesResponse {
    return QueryAllServicesResponse.decode(message.value);
  },
  toProto(message: QueryAllServicesResponse): Uint8Array {
    return QueryAllServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllServicesResponse): QueryAllServicesResponseProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryAllServicesResponse",
      value: QueryAllServicesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRelayMiningDifficultyRequest(): QueryGetRelayMiningDifficultyRequest {
  return {
    serviceId: ""
  };
}
export const QueryGetRelayMiningDifficultyRequest = {
  typeUrl: "/pocket.service.QueryGetRelayMiningDifficultyRequest",
  encode(message: QueryGetRelayMiningDifficultyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetRelayMiningDifficultyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRelayMiningDifficultyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetRelayMiningDifficultyRequest>): QueryGetRelayMiningDifficultyRequest {
    const message = createBaseQueryGetRelayMiningDifficultyRequest();
    message.serviceId = object.serviceId ?? "";
    return message;
  },
  fromAmino(object: QueryGetRelayMiningDifficultyRequestAmino): QueryGetRelayMiningDifficultyRequest {
    const message = createBaseQueryGetRelayMiningDifficultyRequest();
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = object.serviceId;
    }
    return message;
  },
  toAmino(message: QueryGetRelayMiningDifficultyRequest): QueryGetRelayMiningDifficultyRequestAmino {
    const obj: any = {};
    obj.serviceId = message.serviceId === "" ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: QueryGetRelayMiningDifficultyRequestAminoMsg): QueryGetRelayMiningDifficultyRequest {
    return QueryGetRelayMiningDifficultyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRelayMiningDifficultyRequestProtoMsg): QueryGetRelayMiningDifficultyRequest {
    return QueryGetRelayMiningDifficultyRequest.decode(message.value);
  },
  toProto(message: QueryGetRelayMiningDifficultyRequest): Uint8Array {
    return QueryGetRelayMiningDifficultyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRelayMiningDifficultyRequest): QueryGetRelayMiningDifficultyRequestProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryGetRelayMiningDifficultyRequest",
      value: QueryGetRelayMiningDifficultyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRelayMiningDifficultyResponse(): QueryGetRelayMiningDifficultyResponse {
  return {
    relayMiningDifficulty: RelayMiningDifficulty.fromPartial({})
  };
}
export const QueryGetRelayMiningDifficultyResponse = {
  typeUrl: "/pocket.service.QueryGetRelayMiningDifficultyResponse",
  encode(message: QueryGetRelayMiningDifficultyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayMiningDifficulty !== undefined) {
      RelayMiningDifficulty.encode(message.relayMiningDifficulty, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetRelayMiningDifficultyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRelayMiningDifficultyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayMiningDifficulty = RelayMiningDifficulty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetRelayMiningDifficultyResponse>): QueryGetRelayMiningDifficultyResponse {
    const message = createBaseQueryGetRelayMiningDifficultyResponse();
    message.relayMiningDifficulty = object.relayMiningDifficulty !== undefined && object.relayMiningDifficulty !== null ? RelayMiningDifficulty.fromPartial(object.relayMiningDifficulty) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRelayMiningDifficultyResponseAmino): QueryGetRelayMiningDifficultyResponse {
    const message = createBaseQueryGetRelayMiningDifficultyResponse();
    if (object.relayMiningDifficulty !== undefined && object.relayMiningDifficulty !== null) {
      message.relayMiningDifficulty = RelayMiningDifficulty.fromAmino(object.relayMiningDifficulty);
    }
    return message;
  },
  toAmino(message: QueryGetRelayMiningDifficultyResponse): QueryGetRelayMiningDifficultyResponseAmino {
    const obj: any = {};
    obj.relayMiningDifficulty = message.relayMiningDifficulty ? RelayMiningDifficulty.toAmino(message.relayMiningDifficulty) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRelayMiningDifficultyResponseAminoMsg): QueryGetRelayMiningDifficultyResponse {
    return QueryGetRelayMiningDifficultyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRelayMiningDifficultyResponseProtoMsg): QueryGetRelayMiningDifficultyResponse {
    return QueryGetRelayMiningDifficultyResponse.decode(message.value);
  },
  toProto(message: QueryGetRelayMiningDifficultyResponse): Uint8Array {
    return QueryGetRelayMiningDifficultyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRelayMiningDifficultyResponse): QueryGetRelayMiningDifficultyResponseProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryGetRelayMiningDifficultyResponse",
      value: QueryGetRelayMiningDifficultyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRelayMiningDifficultyRequest(): QueryAllRelayMiningDifficultyRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllRelayMiningDifficultyRequest = {
  typeUrl: "/pocket.service.QueryAllRelayMiningDifficultyRequest",
  encode(message: QueryAllRelayMiningDifficultyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRelayMiningDifficultyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRelayMiningDifficultyRequest();
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
  fromPartial(object: Partial<QueryAllRelayMiningDifficultyRequest>): QueryAllRelayMiningDifficultyRequest {
    const message = createBaseQueryAllRelayMiningDifficultyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRelayMiningDifficultyRequestAmino): QueryAllRelayMiningDifficultyRequest {
    const message = createBaseQueryAllRelayMiningDifficultyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRelayMiningDifficultyRequest): QueryAllRelayMiningDifficultyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRelayMiningDifficultyRequestAminoMsg): QueryAllRelayMiningDifficultyRequest {
    return QueryAllRelayMiningDifficultyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRelayMiningDifficultyRequestProtoMsg): QueryAllRelayMiningDifficultyRequest {
    return QueryAllRelayMiningDifficultyRequest.decode(message.value);
  },
  toProto(message: QueryAllRelayMiningDifficultyRequest): Uint8Array {
    return QueryAllRelayMiningDifficultyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRelayMiningDifficultyRequest): QueryAllRelayMiningDifficultyRequestProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryAllRelayMiningDifficultyRequest",
      value: QueryAllRelayMiningDifficultyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRelayMiningDifficultyResponse(): QueryAllRelayMiningDifficultyResponse {
  return {
    relayMiningDifficulty: [],
    pagination: undefined
  };
}
export const QueryAllRelayMiningDifficultyResponse = {
  typeUrl: "/pocket.service.QueryAllRelayMiningDifficultyResponse",
  encode(message: QueryAllRelayMiningDifficultyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.relayMiningDifficulty) {
      RelayMiningDifficulty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllRelayMiningDifficultyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRelayMiningDifficultyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayMiningDifficulty.push(RelayMiningDifficulty.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllRelayMiningDifficultyResponse>): QueryAllRelayMiningDifficultyResponse {
    const message = createBaseQueryAllRelayMiningDifficultyResponse();
    message.relayMiningDifficulty = object.relayMiningDifficulty?.map(e => RelayMiningDifficulty.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRelayMiningDifficultyResponseAmino): QueryAllRelayMiningDifficultyResponse {
    const message = createBaseQueryAllRelayMiningDifficultyResponse();
    message.relayMiningDifficulty = object.relayMiningDifficulty?.map(e => RelayMiningDifficulty.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRelayMiningDifficultyResponse): QueryAllRelayMiningDifficultyResponseAmino {
    const obj: any = {};
    if (message.relayMiningDifficulty) {
      obj.relayMiningDifficulty = message.relayMiningDifficulty.map(e => e ? RelayMiningDifficulty.toAmino(e) : undefined);
    } else {
      obj.relayMiningDifficulty = message.relayMiningDifficulty;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRelayMiningDifficultyResponseAminoMsg): QueryAllRelayMiningDifficultyResponse {
    return QueryAllRelayMiningDifficultyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRelayMiningDifficultyResponseProtoMsg): QueryAllRelayMiningDifficultyResponse {
    return QueryAllRelayMiningDifficultyResponse.decode(message.value);
  },
  toProto(message: QueryAllRelayMiningDifficultyResponse): Uint8Array {
    return QueryAllRelayMiningDifficultyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRelayMiningDifficultyResponse): QueryAllRelayMiningDifficultyResponseProtoMsg {
    return {
      typeUrl: "/pocket.service.QueryAllRelayMiningDifficultyResponse",
      value: QueryAllRelayMiningDifficultyResponse.encode(message).finish()
    };
  }
};