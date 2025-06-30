//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MorseClaimableAccount, MorseClaimableAccountAmino, MorseClaimableAccountSDKType } from "./morse_onchain";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.migration.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.migration.QueryParamsRequest";
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
  typeUrl: "/pocket.migration.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.migration.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryMorseClaimableAccountRequest {
  address: string;
}
export interface QueryMorseClaimableAccountRequestProtoMsg {
  typeUrl: "/pocket.migration.QueryMorseClaimableAccountRequest";
  value: Uint8Array;
}
/**
 * @name QueryMorseClaimableAccountRequestAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.QueryMorseClaimableAccountRequest
 */
export interface QueryMorseClaimableAccountRequestAmino {
  address?: string;
}
export interface QueryMorseClaimableAccountRequestAminoMsg {
  type: "/pocket.migration.QueryMorseClaimableAccountRequest";
  value: QueryMorseClaimableAccountRequestAmino;
}
export interface QueryMorseClaimableAccountRequestSDKType {
  address: string;
}
export interface QueryMorseClaimableAccountResponse {
  morseClaimableAccount: MorseClaimableAccount;
}
export interface QueryMorseClaimableAccountResponseProtoMsg {
  typeUrl: "/pocket.migration.QueryMorseClaimableAccountResponse";
  value: Uint8Array;
}
/**
 * @name QueryMorseClaimableAccountResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.QueryMorseClaimableAccountResponse
 */
export interface QueryMorseClaimableAccountResponseAmino {
  morseClaimableAccount?: MorseClaimableAccountAmino;
}
export interface QueryMorseClaimableAccountResponseAminoMsg {
  type: "/pocket.migration.QueryMorseClaimableAccountResponse";
  value: QueryMorseClaimableAccountResponseAmino;
}
export interface QueryMorseClaimableAccountResponseSDKType {
  morseClaimableAccount: MorseClaimableAccountSDKType;
}
export interface QueryAllMorseClaimableAccountRequest {
  pagination?: PageRequest;
}
export interface QueryAllMorseClaimableAccountRequestProtoMsg {
  typeUrl: "/pocket.migration.QueryAllMorseClaimableAccountRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllMorseClaimableAccountRequestAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.QueryAllMorseClaimableAccountRequest
 */
export interface QueryAllMorseClaimableAccountRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMorseClaimableAccountRequestAminoMsg {
  type: "/pocket.migration.QueryAllMorseClaimableAccountRequest";
  value: QueryAllMorseClaimableAccountRequestAmino;
}
export interface QueryAllMorseClaimableAccountRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMorseClaimableAccountResponse {
  morseClaimableAccount: MorseClaimableAccount[];
  pagination?: PageResponse;
}
export interface QueryAllMorseClaimableAccountResponseProtoMsg {
  typeUrl: "/pocket.migration.QueryAllMorseClaimableAccountResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllMorseClaimableAccountResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.QueryAllMorseClaimableAccountResponse
 */
export interface QueryAllMorseClaimableAccountResponseAmino {
  morseClaimableAccount?: MorseClaimableAccountAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMorseClaimableAccountResponseAminoMsg {
  type: "/pocket.migration.QueryAllMorseClaimableAccountResponse";
  value: QueryAllMorseClaimableAccountResponseAmino;
}
export interface QueryAllMorseClaimableAccountResponseSDKType {
  morseClaimableAccount: MorseClaimableAccountSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.migration.QueryParamsRequest",
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
      typeUrl: "/pocket.migration.QueryParamsRequest",
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
  typeUrl: "/pocket.migration.QueryParamsResponse",
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
      typeUrl: "/pocket.migration.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMorseClaimableAccountRequest(): QueryMorseClaimableAccountRequest {
  return {
    address: ""
  };
}
export const QueryMorseClaimableAccountRequest = {
  typeUrl: "/pocket.migration.QueryMorseClaimableAccountRequest",
  encode(message: QueryMorseClaimableAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMorseClaimableAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMorseClaimableAccountRequest();
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
  fromPartial(object: Partial<QueryMorseClaimableAccountRequest>): QueryMorseClaimableAccountRequest {
    const message = createBaseQueryMorseClaimableAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryMorseClaimableAccountRequestAmino): QueryMorseClaimableAccountRequest {
    const message = createBaseQueryMorseClaimableAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryMorseClaimableAccountRequest): QueryMorseClaimableAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryMorseClaimableAccountRequestAminoMsg): QueryMorseClaimableAccountRequest {
    return QueryMorseClaimableAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMorseClaimableAccountRequestProtoMsg): QueryMorseClaimableAccountRequest {
    return QueryMorseClaimableAccountRequest.decode(message.value);
  },
  toProto(message: QueryMorseClaimableAccountRequest): Uint8Array {
    return QueryMorseClaimableAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMorseClaimableAccountRequest): QueryMorseClaimableAccountRequestProtoMsg {
    return {
      typeUrl: "/pocket.migration.QueryMorseClaimableAccountRequest",
      value: QueryMorseClaimableAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMorseClaimableAccountResponse(): QueryMorseClaimableAccountResponse {
  return {
    morseClaimableAccount: MorseClaimableAccount.fromPartial({})
  };
}
export const QueryMorseClaimableAccountResponse = {
  typeUrl: "/pocket.migration.QueryMorseClaimableAccountResponse",
  encode(message: QueryMorseClaimableAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.morseClaimableAccount !== undefined) {
      MorseClaimableAccount.encode(message.morseClaimableAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMorseClaimableAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMorseClaimableAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.morseClaimableAccount = MorseClaimableAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMorseClaimableAccountResponse>): QueryMorseClaimableAccountResponse {
    const message = createBaseQueryMorseClaimableAccountResponse();
    message.morseClaimableAccount = object.morseClaimableAccount !== undefined && object.morseClaimableAccount !== null ? MorseClaimableAccount.fromPartial(object.morseClaimableAccount) : undefined;
    return message;
  },
  fromAmino(object: QueryMorseClaimableAccountResponseAmino): QueryMorseClaimableAccountResponse {
    const message = createBaseQueryMorseClaimableAccountResponse();
    if (object.morseClaimableAccount !== undefined && object.morseClaimableAccount !== null) {
      message.morseClaimableAccount = MorseClaimableAccount.fromAmino(object.morseClaimableAccount);
    }
    return message;
  },
  toAmino(message: QueryMorseClaimableAccountResponse): QueryMorseClaimableAccountResponseAmino {
    const obj: any = {};
    obj.morseClaimableAccount = message.morseClaimableAccount ? MorseClaimableAccount.toAmino(message.morseClaimableAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMorseClaimableAccountResponseAminoMsg): QueryMorseClaimableAccountResponse {
    return QueryMorseClaimableAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMorseClaimableAccountResponseProtoMsg): QueryMorseClaimableAccountResponse {
    return QueryMorseClaimableAccountResponse.decode(message.value);
  },
  toProto(message: QueryMorseClaimableAccountResponse): Uint8Array {
    return QueryMorseClaimableAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMorseClaimableAccountResponse): QueryMorseClaimableAccountResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.QueryMorseClaimableAccountResponse",
      value: QueryMorseClaimableAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMorseClaimableAccountRequest(): QueryAllMorseClaimableAccountRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMorseClaimableAccountRequest = {
  typeUrl: "/pocket.migration.QueryAllMorseClaimableAccountRequest",
  encode(message: QueryAllMorseClaimableAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMorseClaimableAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMorseClaimableAccountRequest();
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
  fromPartial(object: Partial<QueryAllMorseClaimableAccountRequest>): QueryAllMorseClaimableAccountRequest {
    const message = createBaseQueryAllMorseClaimableAccountRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMorseClaimableAccountRequestAmino): QueryAllMorseClaimableAccountRequest {
    const message = createBaseQueryAllMorseClaimableAccountRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMorseClaimableAccountRequest): QueryAllMorseClaimableAccountRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMorseClaimableAccountRequestAminoMsg): QueryAllMorseClaimableAccountRequest {
    return QueryAllMorseClaimableAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMorseClaimableAccountRequestProtoMsg): QueryAllMorseClaimableAccountRequest {
    return QueryAllMorseClaimableAccountRequest.decode(message.value);
  },
  toProto(message: QueryAllMorseClaimableAccountRequest): Uint8Array {
    return QueryAllMorseClaimableAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMorseClaimableAccountRequest): QueryAllMorseClaimableAccountRequestProtoMsg {
    return {
      typeUrl: "/pocket.migration.QueryAllMorseClaimableAccountRequest",
      value: QueryAllMorseClaimableAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMorseClaimableAccountResponse(): QueryAllMorseClaimableAccountResponse {
  return {
    morseClaimableAccount: [],
    pagination: undefined
  };
}
export const QueryAllMorseClaimableAccountResponse = {
  typeUrl: "/pocket.migration.QueryAllMorseClaimableAccountResponse",
  encode(message: QueryAllMorseClaimableAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.morseClaimableAccount) {
      MorseClaimableAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMorseClaimableAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMorseClaimableAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.morseClaimableAccount.push(MorseClaimableAccount.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllMorseClaimableAccountResponse>): QueryAllMorseClaimableAccountResponse {
    const message = createBaseQueryAllMorseClaimableAccountResponse();
    message.morseClaimableAccount = object.morseClaimableAccount?.map(e => MorseClaimableAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMorseClaimableAccountResponseAmino): QueryAllMorseClaimableAccountResponse {
    const message = createBaseQueryAllMorseClaimableAccountResponse();
    message.morseClaimableAccount = object.morseClaimableAccount?.map(e => MorseClaimableAccount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMorseClaimableAccountResponse): QueryAllMorseClaimableAccountResponseAmino {
    const obj: any = {};
    if (message.morseClaimableAccount) {
      obj.morseClaimableAccount = message.morseClaimableAccount.map(e => e ? MorseClaimableAccount.toAmino(e) : undefined);
    } else {
      obj.morseClaimableAccount = message.morseClaimableAccount;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMorseClaimableAccountResponseAminoMsg): QueryAllMorseClaimableAccountResponse {
    return QueryAllMorseClaimableAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMorseClaimableAccountResponseProtoMsg): QueryAllMorseClaimableAccountResponse {
    return QueryAllMorseClaimableAccountResponse.decode(message.value);
  },
  toProto(message: QueryAllMorseClaimableAccountResponse): Uint8Array {
    return QueryAllMorseClaimableAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMorseClaimableAccountResponse): QueryAllMorseClaimableAccountResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.QueryAllMorseClaimableAccountResponse",
      value: QueryAllMorseClaimableAccountResponse.encode(message).finish()
    };
  }
};