//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Session, SessionAmino, SessionSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.session.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.session
 * @see proto type: pocket.session.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.session.QueryParamsRequest";
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
  typeUrl: "/pocket.session.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.session
 * @see proto type: pocket.session.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.session.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetSessionRequest {
  /** The Bech32 address of the application. */
  applicationAddress: string;
  /** The service ID to query the session for */
  serviceId: string;
  /** The block height to query the session for */
  blockHeight: bigint;
}
export interface QueryGetSessionRequestProtoMsg {
  typeUrl: "/pocket.session.QueryGetSessionRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetSessionRequestAmino
 * @package pocket.session
 * @see proto type: pocket.session.QueryGetSessionRequest
 */
export interface QueryGetSessionRequestAmino {
  /**
   * The Bech32 address of the application.
   */
  application_address?: string;
  /**
   * The service ID to query the session for
   */
  service_id?: string;
  /**
   * The block height to query the session for
   */
  block_height?: string;
}
export interface QueryGetSessionRequestAminoMsg {
  type: "/pocket.session.QueryGetSessionRequest";
  value: QueryGetSessionRequestAmino;
}
export interface QueryGetSessionRequestSDKType {
  application_address: string;
  service_id: string;
  block_height: bigint;
}
export interface QueryGetSessionResponse {
  session?: Session;
}
export interface QueryGetSessionResponseProtoMsg {
  typeUrl: "/pocket.session.QueryGetSessionResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetSessionResponseAmino
 * @package pocket.session
 * @see proto type: pocket.session.QueryGetSessionResponse
 */
export interface QueryGetSessionResponseAmino {
  session?: SessionAmino;
}
export interface QueryGetSessionResponseAminoMsg {
  type: "/pocket.session.QueryGetSessionResponse";
  value: QueryGetSessionResponseAmino;
}
export interface QueryGetSessionResponseSDKType {
  session?: SessionSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.session.QueryParamsRequest",
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
      typeUrl: "/pocket.session.QueryParamsRequest",
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
  typeUrl: "/pocket.session.QueryParamsResponse",
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
      typeUrl: "/pocket.session.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSessionRequest(): QueryGetSessionRequest {
  return {
    applicationAddress: "",
    serviceId: "",
    blockHeight: BigInt(0)
  };
}
export const QueryGetSessionRequest = {
  typeUrl: "/pocket.session.QueryGetSessionRequest",
  encode(message: QueryGetSessionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.applicationAddress !== "") {
      writer.uint32(10).string(message.applicationAddress);
    }
    if (message.serviceId !== "") {
      writer.uint32(18).string(message.serviceId);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSessionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationAddress = reader.string();
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        case 3:
          message.blockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSessionRequest>): QueryGetSessionRequest {
    const message = createBaseQueryGetSessionRequest();
    message.applicationAddress = object.applicationAddress ?? "";
    message.serviceId = object.serviceId ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetSessionRequestAmino): QueryGetSessionRequest {
    const message = createBaseQueryGetSessionRequest();
    if (object.application_address !== undefined && object.application_address !== null) {
      message.applicationAddress = object.application_address;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: QueryGetSessionRequest): QueryGetSessionRequestAmino {
    const obj: any = {};
    obj.application_address = message.applicationAddress === "" ? undefined : message.applicationAddress;
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSessionRequestAminoMsg): QueryGetSessionRequest {
    return QueryGetSessionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSessionRequestProtoMsg): QueryGetSessionRequest {
    return QueryGetSessionRequest.decode(message.value);
  },
  toProto(message: QueryGetSessionRequest): Uint8Array {
    return QueryGetSessionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSessionRequest): QueryGetSessionRequestProtoMsg {
    return {
      typeUrl: "/pocket.session.QueryGetSessionRequest",
      value: QueryGetSessionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSessionResponse(): QueryGetSessionResponse {
  return {
    session: undefined
  };
}
export const QueryGetSessionResponse = {
  typeUrl: "/pocket.session.QueryGetSessionResponse",
  encode(message: QueryGetSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.session = Session.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSessionResponse>): QueryGetSessionResponse {
    const message = createBaseQueryGetSessionResponse();
    message.session = object.session !== undefined && object.session !== null ? Session.fromPartial(object.session) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSessionResponseAmino): QueryGetSessionResponse {
    const message = createBaseQueryGetSessionResponse();
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromAmino(object.session);
    }
    return message;
  },
  toAmino(message: QueryGetSessionResponse): QueryGetSessionResponseAmino {
    const obj: any = {};
    obj.session = message.session ? Session.toAmino(message.session) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSessionResponseAminoMsg): QueryGetSessionResponse {
    return QueryGetSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSessionResponseProtoMsg): QueryGetSessionResponse {
    return QueryGetSessionResponse.decode(message.value);
  },
  toProto(message: QueryGetSessionResponse): Uint8Array {
    return QueryGetSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSessionResponse): QueryGetSessionResponseProtoMsg {
    return {
      typeUrl: "/pocket.session.QueryGetSessionResponse",
      value: QueryGetSessionResponse.encode(message).finish()
    };
  }
};