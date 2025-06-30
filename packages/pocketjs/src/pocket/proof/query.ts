//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Claim, ClaimAmino, ClaimSDKType, Proof, ProofAmino, ProofSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pocket.proof.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pocket.proof.QueryParamsRequest";
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
  typeUrl: "/pocket.proof.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pocket.proof.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetClaimRequest {
  sessionId: string;
  supplierOperatorAddress: string;
}
export interface QueryGetClaimRequestProtoMsg {
  typeUrl: "/pocket.proof.QueryGetClaimRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetClaimRequestAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryGetClaimRequest
 */
export interface QueryGetClaimRequestAmino {
  session_id?: string;
  supplier_operator_address?: string;
}
export interface QueryGetClaimRequestAminoMsg {
  type: "/pocket.proof.QueryGetClaimRequest";
  value: QueryGetClaimRequestAmino;
}
export interface QueryGetClaimRequestSDKType {
  session_id: string;
  supplier_operator_address: string;
}
export interface QueryGetClaimResponse {
  claim: Claim;
}
export interface QueryGetClaimResponseProtoMsg {
  typeUrl: "/pocket.proof.QueryGetClaimResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetClaimResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryGetClaimResponse
 */
export interface QueryGetClaimResponseAmino {
  claim?: ClaimAmino;
}
export interface QueryGetClaimResponseAminoMsg {
  type: "/pocket.proof.QueryGetClaimResponse";
  value: QueryGetClaimResponseAmino;
}
export interface QueryGetClaimResponseSDKType {
  claim: ClaimSDKType;
}
export interface QueryAllClaimsRequest {
  pagination?: PageRequest;
  supplierOperatorAddress?: string;
  sessionId?: string;
  sessionEndHeight?: bigint;
}
export interface QueryAllClaimsRequestProtoMsg {
  typeUrl: "/pocket.proof.QueryAllClaimsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllClaimsRequestAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryAllClaimsRequest
 */
export interface QueryAllClaimsRequestAmino {
  pagination?: PageRequestAmino;
  supplier_operator_address?: string;
  session_id?: string;
  session_end_height?: string;
}
export interface QueryAllClaimsRequestAminoMsg {
  type: "/pocket.proof.QueryAllClaimsRequest";
  value: QueryAllClaimsRequestAmino;
}
export interface QueryAllClaimsRequestSDKType {
  pagination?: PageRequestSDKType;
  supplier_operator_address?: string;
  session_id?: string;
  session_end_height?: bigint;
}
export interface QueryAllClaimsResponse {
  claims: Claim[];
  pagination?: PageResponse;
}
export interface QueryAllClaimsResponseProtoMsg {
  typeUrl: "/pocket.proof.QueryAllClaimsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllClaimsResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryAllClaimsResponse
 */
export interface QueryAllClaimsResponseAmino {
  claims?: ClaimAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllClaimsResponseAminoMsg {
  type: "/pocket.proof.QueryAllClaimsResponse";
  value: QueryAllClaimsResponseAmino;
}
export interface QueryAllClaimsResponseSDKType {
  claims: ClaimSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetProofRequest {
  sessionId: string;
  supplierOperatorAddress: string;
}
export interface QueryGetProofRequestProtoMsg {
  typeUrl: "/pocket.proof.QueryGetProofRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetProofRequestAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryGetProofRequest
 */
export interface QueryGetProofRequestAmino {
  session_id?: string;
  supplier_operator_address?: string;
}
export interface QueryGetProofRequestAminoMsg {
  type: "/pocket.proof.QueryGetProofRequest";
  value: QueryGetProofRequestAmino;
}
export interface QueryGetProofRequestSDKType {
  session_id: string;
  supplier_operator_address: string;
}
export interface QueryGetProofResponse {
  proof: Proof;
}
export interface QueryGetProofResponseProtoMsg {
  typeUrl: "/pocket.proof.QueryGetProofResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetProofResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryGetProofResponse
 */
export interface QueryGetProofResponseAmino {
  proof?: ProofAmino;
}
export interface QueryGetProofResponseAminoMsg {
  type: "/pocket.proof.QueryGetProofResponse";
  value: QueryGetProofResponseAmino;
}
export interface QueryGetProofResponseSDKType {
  proof: ProofSDKType;
}
export interface QueryAllProofsRequest {
  pagination?: PageRequest;
  supplierOperatorAddress?: string;
  sessionId?: string;
  sessionEndHeight?: bigint;
}
export interface QueryAllProofsRequestProtoMsg {
  typeUrl: "/pocket.proof.QueryAllProofsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllProofsRequestAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryAllProofsRequest
 */
export interface QueryAllProofsRequestAmino {
  pagination?: PageRequestAmino;
  supplier_operator_address?: string;
  session_id?: string;
  session_end_height?: string;
}
export interface QueryAllProofsRequestAminoMsg {
  type: "/pocket.proof.QueryAllProofsRequest";
  value: QueryAllProofsRequestAmino;
}
export interface QueryAllProofsRequestSDKType {
  pagination?: PageRequestSDKType;
  supplier_operator_address?: string;
  session_id?: string;
  session_end_height?: bigint;
}
export interface QueryAllProofsResponse {
  proofs: Proof[];
  pagination?: PageResponse;
}
export interface QueryAllProofsResponseProtoMsg {
  typeUrl: "/pocket.proof.QueryAllProofsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllProofsResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.QueryAllProofsResponse
 */
export interface QueryAllProofsResponseAmino {
  proofs?: ProofAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllProofsResponseAminoMsg {
  type: "/pocket.proof.QueryAllProofsResponse";
  value: QueryAllProofsResponseAmino;
}
export interface QueryAllProofsResponseSDKType {
  proofs: ProofSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pocket.proof.QueryParamsRequest",
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
      typeUrl: "/pocket.proof.QueryParamsRequest",
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
  typeUrl: "/pocket.proof.QueryParamsResponse",
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
      typeUrl: "/pocket.proof.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetClaimRequest(): QueryGetClaimRequest {
  return {
    sessionId: "",
    supplierOperatorAddress: ""
  };
}
export const QueryGetClaimRequest = {
  typeUrl: "/pocket.proof.QueryGetClaimRequest",
  encode(message: QueryGetClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(18).string(message.supplierOperatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetClaimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClaimRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.supplierOperatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetClaimRequest>): QueryGetClaimRequest {
    const message = createBaseQueryGetClaimRequest();
    message.sessionId = object.sessionId ?? "";
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetClaimRequestAmino): QueryGetClaimRequest {
    const message = createBaseQueryGetClaimRequest();
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    return message;
  },
  toAmino(message: QueryGetClaimRequest): QueryGetClaimRequestAmino {
    const obj: any = {};
    obj.session_id = message.sessionId === "" ? undefined : message.sessionId;
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetClaimRequestAminoMsg): QueryGetClaimRequest {
    return QueryGetClaimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetClaimRequestProtoMsg): QueryGetClaimRequest {
    return QueryGetClaimRequest.decode(message.value);
  },
  toProto(message: QueryGetClaimRequest): Uint8Array {
    return QueryGetClaimRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetClaimRequest): QueryGetClaimRequestProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryGetClaimRequest",
      value: QueryGetClaimRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetClaimResponse(): QueryGetClaimResponse {
  return {
    claim: Claim.fromPartial({})
  };
}
export const QueryGetClaimResponse = {
  typeUrl: "/pocket.proof.QueryGetClaimResponse",
  encode(message: QueryGetClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetClaimResponse>): QueryGetClaimResponse {
    const message = createBaseQueryGetClaimResponse();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    return message;
  },
  fromAmino(object: QueryGetClaimResponseAmino): QueryGetClaimResponse {
    const message = createBaseQueryGetClaimResponse();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    return message;
  },
  toAmino(message: QueryGetClaimResponse): QueryGetClaimResponseAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetClaimResponseAminoMsg): QueryGetClaimResponse {
    return QueryGetClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetClaimResponseProtoMsg): QueryGetClaimResponse {
    return QueryGetClaimResponse.decode(message.value);
  },
  toProto(message: QueryGetClaimResponse): Uint8Array {
    return QueryGetClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetClaimResponse): QueryGetClaimResponseProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryGetClaimResponse",
      value: QueryGetClaimResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllClaimsRequest(): QueryAllClaimsRequest {
  return {
    pagination: undefined,
    supplierOperatorAddress: undefined,
    sessionId: undefined,
    sessionEndHeight: undefined
  };
}
export const QueryAllClaimsRequest = {
  typeUrl: "/pocket.proof.QueryAllClaimsRequest",
  encode(message: QueryAllClaimsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.supplierOperatorAddress !== undefined) {
      writer.uint32(18).string(message.supplierOperatorAddress);
    }
    if (message.sessionId !== undefined) {
      writer.uint32(26).string(message.sessionId);
    }
    if (message.sessionEndHeight !== undefined) {
      writer.uint32(32).uint64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllClaimsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllClaimsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.supplierOperatorAddress = reader.string();
          break;
        case 3:
          message.sessionId = reader.string();
          break;
        case 4:
          message.sessionEndHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllClaimsRequest>): QueryAllClaimsRequest {
    const message = createBaseQueryAllClaimsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? undefined;
    message.sessionId = object.sessionId ?? undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : undefined;
    return message;
  },
  fromAmino(object: QueryAllClaimsRequestAmino): QueryAllClaimsRequest {
    const message = createBaseQueryAllClaimsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: QueryAllClaimsRequest): QueryAllClaimsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.supplier_operator_address = message.supplierOperatorAddress === null ? undefined : message.supplierOperatorAddress;
    obj.session_id = message.sessionId === null ? undefined : message.sessionId;
    obj.session_end_height = message.sessionEndHeight !== BigInt(0) ? message.sessionEndHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllClaimsRequestAminoMsg): QueryAllClaimsRequest {
    return QueryAllClaimsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllClaimsRequestProtoMsg): QueryAllClaimsRequest {
    return QueryAllClaimsRequest.decode(message.value);
  },
  toProto(message: QueryAllClaimsRequest): Uint8Array {
    return QueryAllClaimsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllClaimsRequest): QueryAllClaimsRequestProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryAllClaimsRequest",
      value: QueryAllClaimsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllClaimsResponse(): QueryAllClaimsResponse {
  return {
    claims: [],
    pagination: undefined
  };
}
export const QueryAllClaimsResponse = {
  typeUrl: "/pocket.proof.QueryAllClaimsResponse",
  encode(message: QueryAllClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllClaimsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllClaimsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(Claim.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllClaimsResponse>): QueryAllClaimsResponse {
    const message = createBaseQueryAllClaimsResponse();
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllClaimsResponseAmino): QueryAllClaimsResponse {
    const message = createBaseQueryAllClaimsResponse();
    message.claims = object.claims?.map(e => Claim.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllClaimsResponse): QueryAllClaimsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = message.claims;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllClaimsResponseAminoMsg): QueryAllClaimsResponse {
    return QueryAllClaimsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllClaimsResponseProtoMsg): QueryAllClaimsResponse {
    return QueryAllClaimsResponse.decode(message.value);
  },
  toProto(message: QueryAllClaimsResponse): Uint8Array {
    return QueryAllClaimsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllClaimsResponse): QueryAllClaimsResponseProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryAllClaimsResponse",
      value: QueryAllClaimsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProofRequest(): QueryGetProofRequest {
  return {
    sessionId: "",
    supplierOperatorAddress: ""
  };
}
export const QueryGetProofRequest = {
  typeUrl: "/pocket.proof.QueryGetProofRequest",
  encode(message: QueryGetProofRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(18).string(message.supplierOperatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProofRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.supplierOperatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetProofRequest>): QueryGetProofRequest {
    const message = createBaseQueryGetProofRequest();
    message.sessionId = object.sessionId ?? "";
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetProofRequestAmino): QueryGetProofRequest {
    const message = createBaseQueryGetProofRequest();
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    return message;
  },
  toAmino(message: QueryGetProofRequest): QueryGetProofRequestAmino {
    const obj: any = {};
    obj.session_id = message.sessionId === "" ? undefined : message.sessionId;
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetProofRequestAminoMsg): QueryGetProofRequest {
    return QueryGetProofRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProofRequestProtoMsg): QueryGetProofRequest {
    return QueryGetProofRequest.decode(message.value);
  },
  toProto(message: QueryGetProofRequest): Uint8Array {
    return QueryGetProofRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProofRequest): QueryGetProofRequestProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryGetProofRequest",
      value: QueryGetProofRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProofResponse(): QueryGetProofResponse {
  return {
    proof: Proof.fromPartial({})
  };
}
export const QueryGetProofResponse = {
  typeUrl: "/pocket.proof.QueryGetProofResponse",
  encode(message: QueryGetProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetProofResponse>): QueryGetProofResponse {
    const message = createBaseQueryGetProofResponse();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProofResponseAmino): QueryGetProofResponse {
    const message = createBaseQueryGetProofResponse();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message: QueryGetProofResponse): QueryGetProofResponseAmino {
    const obj: any = {};
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProofResponseAminoMsg): QueryGetProofResponse {
    return QueryGetProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProofResponseProtoMsg): QueryGetProofResponse {
    return QueryGetProofResponse.decode(message.value);
  },
  toProto(message: QueryGetProofResponse): Uint8Array {
    return QueryGetProofResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProofResponse): QueryGetProofResponseProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryGetProofResponse",
      value: QueryGetProofResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllProofsRequest(): QueryAllProofsRequest {
  return {
    pagination: undefined,
    supplierOperatorAddress: undefined,
    sessionId: undefined,
    sessionEndHeight: undefined
  };
}
export const QueryAllProofsRequest = {
  typeUrl: "/pocket.proof.QueryAllProofsRequest",
  encode(message: QueryAllProofsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.supplierOperatorAddress !== undefined) {
      writer.uint32(18).string(message.supplierOperatorAddress);
    }
    if (message.sessionId !== undefined) {
      writer.uint32(26).string(message.sessionId);
    }
    if (message.sessionEndHeight !== undefined) {
      writer.uint32(32).uint64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProofsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProofsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.supplierOperatorAddress = reader.string();
          break;
        case 3:
          message.sessionId = reader.string();
          break;
        case 4:
          message.sessionEndHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllProofsRequest>): QueryAllProofsRequest {
    const message = createBaseQueryAllProofsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? undefined;
    message.sessionId = object.sessionId ?? undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProofsRequestAmino): QueryAllProofsRequest {
    const message = createBaseQueryAllProofsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: QueryAllProofsRequest): QueryAllProofsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.supplier_operator_address = message.supplierOperatorAddress === null ? undefined : message.supplierOperatorAddress;
    obj.session_id = message.sessionId === null ? undefined : message.sessionId;
    obj.session_end_height = message.sessionEndHeight !== BigInt(0) ? message.sessionEndHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProofsRequestAminoMsg): QueryAllProofsRequest {
    return QueryAllProofsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProofsRequestProtoMsg): QueryAllProofsRequest {
    return QueryAllProofsRequest.decode(message.value);
  },
  toProto(message: QueryAllProofsRequest): Uint8Array {
    return QueryAllProofsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProofsRequest): QueryAllProofsRequestProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryAllProofsRequest",
      value: QueryAllProofsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProofsResponse(): QueryAllProofsResponse {
  return {
    proofs: [],
    pagination: undefined
  };
}
export const QueryAllProofsResponse = {
  typeUrl: "/pocket.proof.QueryAllProofsResponse",
  encode(message: QueryAllProofsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProofsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProofsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(Proof.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllProofsResponse>): QueryAllProofsResponse {
    const message = createBaseQueryAllProofsResponse();
    message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProofsResponseAmino): QueryAllProofsResponse {
    const message = createBaseQueryAllProofsResponse();
    message.proofs = object.proofs?.map(e => Proof.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllProofsResponse): QueryAllProofsResponseAmino {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
    } else {
      obj.proofs = message.proofs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProofsResponseAminoMsg): QueryAllProofsResponse {
    return QueryAllProofsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProofsResponseProtoMsg): QueryAllProofsResponse {
    return QueryAllProofsResponse.decode(message.value);
  },
  toProto(message: QueryAllProofsResponse): Uint8Array {
    return QueryAllProofsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProofsResponse): QueryAllProofsResponseProtoMsg {
    return {
      typeUrl: "/pocket.proof.QueryAllProofsResponse",
      value: QueryAllProofsResponse.encode(message).finish()
    };
  }
};