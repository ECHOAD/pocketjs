//@ts-nocheck
import { SessionHeader, SessionHeaderAmino, SessionHeaderSDKType } from "../session/types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * Relay message
 * 
 * - Contains both the RelayRequest (signed by the Application) and RelayResponse (signed by the Supplier).
 * - The serialized tuple is stored in SMST leaves as values during the Claim/Proof lifecycle.
 */
export interface Relay {
  req?: RelayRequest;
  res?: RelayResponse;
}
export interface RelayProtoMsg {
  typeUrl: "/pocket.service.Relay";
  value: Uint8Array;
}
/**
 * Relay message
 * 
 * - Contains both the RelayRequest (signed by the Application) and RelayResponse (signed by the Supplier).
 * - The serialized tuple is stored in SMST leaves as values during the Claim/Proof lifecycle.
 * @name RelayAmino
 * @package pocket.service
 * @see proto type: pocket.service.Relay
 */
export interface RelayAmino {
  req?: RelayRequestAmino;
  res?: RelayResponseAmino;
}
export interface RelayAminoMsg {
  type: "/pocket.service.Relay";
  value: RelayAmino;
}
/**
 * Relay message
 * 
 * - Contains both the RelayRequest (signed by the Application) and RelayResponse (signed by the Supplier).
 * - The serialized tuple is stored in SMST leaves as values during the Claim/Proof lifecycle.
 */
export interface RelaySDKType {
  req?: RelayRequestSDKType;
  res?: RelayResponseSDKType;
}
/**
 * RelayRequestMetadata
 * 
 * Contains metadata for a RelayRequest.
 */
export interface RelayRequestMetadata {
  /** Session header associated with the relay. */
  sessionHeader?: SessionHeader;
  /**
   * Signature for the request:
   * - Serialized ring signature, created by either the application itself or a delegated gateway.
   * - Always uses the application's ring.
   */
  signature: Uint8Array;
  /**
   * TODO_MAINNET: Ensure this address is checked/verified onchain if needed.
   * See: https://github.com/pokt-network/poktroll/pull/567#discussion_r1628722168
   * 
   * Supplier operator address:
   * - The Bech32 address of the supplier operator the relay is sent to.
   * - Used by the RelayMiner to route to the correct supplier.
   */
  supplierOperatorAddress: string;
}
export interface RelayRequestMetadataProtoMsg {
  typeUrl: "/pocket.service.RelayRequestMetadata";
  value: Uint8Array;
}
/**
 * RelayRequestMetadata
 * 
 * Contains metadata for a RelayRequest.
 * @name RelayRequestMetadataAmino
 * @package pocket.service
 * @see proto type: pocket.service.RelayRequestMetadata
 */
export interface RelayRequestMetadataAmino {
  /**
   * Session header associated with the relay.
   */
  session_header?: SessionHeaderAmino;
  /**
   * Signature for the request:
   * - Serialized ring signature, created by either the application itself or a delegated gateway.
   * - Always uses the application's ring.
   */
  signature?: string;
  /**
   * TODO_MAINNET: Ensure this address is checked/verified onchain if needed.
   * See: https://github.com/pokt-network/poktroll/pull/567#discussion_r1628722168
   * 
   * Supplier operator address:
   * - The Bech32 address of the supplier operator the relay is sent to.
   * - Used by the RelayMiner to route to the correct supplier.
   */
  supplier_operator_address?: string;
}
export interface RelayRequestMetadataAminoMsg {
  type: "/pocket.service.RelayRequestMetadata";
  value: RelayRequestMetadataAmino;
}
/**
 * RelayRequestMetadata
 * 
 * Contains metadata for a RelayRequest.
 */
export interface RelayRequestMetadataSDKType {
  session_header?: SessionHeaderSDKType;
  signature: Uint8Array;
  supplier_operator_address: string;
}
/**
 * RelayRequest
 * 
 * Holds the request details for a relay.
 */
export interface RelayRequest {
  meta: RelayRequestMetadata;
  /**
   * Serialized request payload:
   * - Passed directly to the service.
   * - Can be any supported format: JSON-RPC, REST, gRPC, etc.
   */
  payload: Uint8Array;
}
export interface RelayRequestProtoMsg {
  typeUrl: "/pocket.service.RelayRequest";
  value: Uint8Array;
}
/**
 * RelayRequest
 * 
 * Holds the request details for a relay.
 * @name RelayRequestAmino
 * @package pocket.service
 * @see proto type: pocket.service.RelayRequest
 */
export interface RelayRequestAmino {
  meta?: RelayRequestMetadataAmino;
  /**
   * Serialized request payload:
   * - Passed directly to the service.
   * - Can be any supported format: JSON-RPC, REST, gRPC, etc.
   */
  payload?: string;
}
export interface RelayRequestAminoMsg {
  type: "/pocket.service.RelayRequest";
  value: RelayRequestAmino;
}
/**
 * RelayRequest
 * 
 * Holds the request details for a relay.
 */
export interface RelayRequestSDKType {
  meta: RelayRequestMetadataSDKType;
  payload: Uint8Array;
}
/**
 * RelayResponse
 * 
 * Contains the response details for a RelayRequest.
 */
export interface RelayResponse {
  meta: RelayResponseMetadata;
  /**
   * Serialized response payload:
   * - Passed directly from the service.
   * - Can be any supported format: JSON-RPC, REST, gRPC, etc.
   */
  payload: Uint8Array;
  /**
   * Error returned by the RelayMiner, if applicable.
   * - If no error occurred, this field is empty.
   */
  relayMinerError?: RelayMinerError;
}
export interface RelayResponseProtoMsg {
  typeUrl: "/pocket.service.RelayResponse";
  value: Uint8Array;
}
/**
 * RelayResponse
 * 
 * Contains the response details for a RelayRequest.
 * @name RelayResponseAmino
 * @package pocket.service
 * @see proto type: pocket.service.RelayResponse
 */
export interface RelayResponseAmino {
  meta?: RelayResponseMetadataAmino;
  /**
   * Serialized response payload:
   * - Passed directly from the service.
   * - Can be any supported format: JSON-RPC, REST, gRPC, etc.
   */
  payload?: string;
  /**
   * Error returned by the RelayMiner, if applicable.
   * - If no error occurred, this field is empty.
   */
  relay_miner_error?: RelayMinerErrorAmino;
}
export interface RelayResponseAminoMsg {
  type: "/pocket.service.RelayResponse";
  value: RelayResponseAmino;
}
/**
 * RelayResponse
 * 
 * Contains the response details for a RelayRequest.
 */
export interface RelayResponseSDKType {
  meta: RelayResponseMetadataSDKType;
  payload: Uint8Array;
  relay_miner_error?: RelayMinerErrorSDKType;
}
/**
 * RelayResponseMetadata
 * 
 * Contains metadata for a RelayResponse.
 */
export interface RelayResponseMetadata {
  /** Session header associated with the relay. */
  sessionHeader?: SessionHeader;
  /** Signature of the supplier's operator on the response. */
  supplierOperatorSignature: Uint8Array;
}
export interface RelayResponseMetadataProtoMsg {
  typeUrl: "/pocket.service.RelayResponseMetadata";
  value: Uint8Array;
}
/**
 * RelayResponseMetadata
 * 
 * Contains metadata for a RelayResponse.
 * @name RelayResponseMetadataAmino
 * @package pocket.service
 * @see proto type: pocket.service.RelayResponseMetadata
 */
export interface RelayResponseMetadataAmino {
  /**
   * Session header associated with the relay.
   */
  session_header?: SessionHeaderAmino;
  /**
   * Signature of the supplier's operator on the response.
   */
  supplier_operator_signature?: string;
}
export interface RelayResponseMetadataAminoMsg {
  type: "/pocket.service.RelayResponseMetadata";
  value: RelayResponseMetadataAmino;
}
/**
 * RelayResponseMetadata
 * 
 * Contains metadata for a RelayResponse.
 */
export interface RelayResponseMetadataSDKType {
  session_header?: SessionHeaderSDKType;
  supplier_operator_signature: Uint8Array;
}
/**
 * RelayMinerError
 * 
 * Contains error details returned by the RelayMiner.
 */
export interface RelayMinerError {
  /**
   * Registered codespace for the error (groups errors by source/module, e.g. `relayer_proxy`).
   * See: https://github.com/pokt-network/poktroll/blob/main/pkg/relayer/proxy/errors.go#L8
   */
  codespace: string;
  /**
   * Specific registered error code (e.g. `1` for `ErrRelayerProxyInvalidSession`)
   * See: https://github.com/pokt-network/poktroll/blob/main/pkg/relayer/proxy/errors.go#L9
   */
  code: number;
  /**
   * Human-readable, concise error description.
   * Example `invalid session in relayer request` for `ErrRelayerProxyInvalidSession`.
   */
  description: string;
  /**
   * Detailed error message (may include additional context).
   * Example: ErrRelayerProxyInvalidSession.Wrapf("application %q has %d service configs", ...)
   */
  message: string;
}
export interface RelayMinerErrorProtoMsg {
  typeUrl: "/pocket.service.RelayMinerError";
  value: Uint8Array;
}
/**
 * RelayMinerError
 * 
 * Contains error details returned by the RelayMiner.
 * @name RelayMinerErrorAmino
 * @package pocket.service
 * @see proto type: pocket.service.RelayMinerError
 */
export interface RelayMinerErrorAmino {
  /**
   * Registered codespace for the error (groups errors by source/module, e.g. `relayer_proxy`).
   * See: https://github.com/pokt-network/poktroll/blob/main/pkg/relayer/proxy/errors.go#L8
   */
  codespace?: string;
  /**
   * Specific registered error code (e.g. `1` for `ErrRelayerProxyInvalidSession`)
   * See: https://github.com/pokt-network/poktroll/blob/main/pkg/relayer/proxy/errors.go#L9
   */
  code?: number;
  /**
   * Human-readable, concise error description.
   * Example `invalid session in relayer request` for `ErrRelayerProxyInvalidSession`.
   */
  description?: string;
  /**
   * Detailed error message (may include additional context).
   * Example: ErrRelayerProxyInvalidSession.Wrapf("application %q has %d service configs", ...)
   */
  message?: string;
}
export interface RelayMinerErrorAminoMsg {
  type: "/pocket.service.RelayMinerError";
  value: RelayMinerErrorAmino;
}
/**
 * RelayMinerError
 * 
 * Contains error details returned by the RelayMiner.
 */
export interface RelayMinerErrorSDKType {
  codespace: string;
  code: number;
  description: string;
  message: string;
}
function createBaseRelay(): Relay {
  return {
    req: undefined,
    res: undefined
  };
}
export const Relay = {
  typeUrl: "/pocket.service.Relay",
  encode(message: Relay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.req !== undefined) {
      RelayRequest.encode(message.req, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== undefined) {
      RelayResponse.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Relay {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.req = RelayRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.res = RelayResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Relay>): Relay {
    const message = createBaseRelay();
    message.req = object.req !== undefined && object.req !== null ? RelayRequest.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? RelayResponse.fromPartial(object.res) : undefined;
    return message;
  },
  fromAmino(object: RelayAmino): Relay {
    const message = createBaseRelay();
    if (object.req !== undefined && object.req !== null) {
      message.req = RelayRequest.fromAmino(object.req);
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = RelayResponse.fromAmino(object.res);
    }
    return message;
  },
  toAmino(message: Relay): RelayAmino {
    const obj: any = {};
    obj.req = message.req ? RelayRequest.toAmino(message.req) : undefined;
    obj.res = message.res ? RelayResponse.toAmino(message.res) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayAminoMsg): Relay {
    return Relay.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayProtoMsg): Relay {
    return Relay.decode(message.value);
  },
  toProto(message: Relay): Uint8Array {
    return Relay.encode(message).finish();
  },
  toProtoMsg(message: Relay): RelayProtoMsg {
    return {
      typeUrl: "/pocket.service.Relay",
      value: Relay.encode(message).finish()
    };
  }
};
function createBaseRelayRequestMetadata(): RelayRequestMetadata {
  return {
    sessionHeader: undefined,
    signature: new Uint8Array(),
    supplierOperatorAddress: ""
  };
}
export const RelayRequestMetadata = {
  typeUrl: "/pocket.service.RelayRequestMetadata",
  encode(message: RelayRequestMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(26).string(message.supplierOperatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayRequestMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionHeader = SessionHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.supplierOperatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayRequestMetadata>): RelayRequestMetadata {
    const message = createBaseRelayRequestMetadata();
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.signature = object.signature ?? new Uint8Array();
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    return message;
  },
  fromAmino(object: RelayRequestMetadataAmino): RelayRequestMetadata {
    const message = createBaseRelayRequestMetadata();
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    return message;
  },
  toAmino(message: RelayRequestMetadata): RelayRequestMetadataAmino {
    const obj: any = {};
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    return obj;
  },
  fromAminoMsg(object: RelayRequestMetadataAminoMsg): RelayRequestMetadata {
    return RelayRequestMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayRequestMetadataProtoMsg): RelayRequestMetadata {
    return RelayRequestMetadata.decode(message.value);
  },
  toProto(message: RelayRequestMetadata): Uint8Array {
    return RelayRequestMetadata.encode(message).finish();
  },
  toProtoMsg(message: RelayRequestMetadata): RelayRequestMetadataProtoMsg {
    return {
      typeUrl: "/pocket.service.RelayRequestMetadata",
      value: RelayRequestMetadata.encode(message).finish()
    };
  }
};
function createBaseRelayRequest(): RelayRequest {
  return {
    meta: RelayRequestMetadata.fromPartial({}),
    payload: new Uint8Array()
  };
}
export const RelayRequest = {
  typeUrl: "/pocket.service.RelayRequest",
  encode(message: RelayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== undefined) {
      RelayRequestMetadata.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = RelayRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayRequest>): RelayRequest {
    const message = createBaseRelayRequest();
    message.meta = object.meta !== undefined && object.meta !== null ? RelayRequestMetadata.fromPartial(object.meta) : undefined;
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RelayRequestAmino): RelayRequest {
    const message = createBaseRelayRequest();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = RelayRequestMetadata.fromAmino(object.meta);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    return message;
  },
  toAmino(message: RelayRequest): RelayRequestAmino {
    const obj: any = {};
    obj.meta = message.meta ? RelayRequestMetadata.toAmino(message.meta) : undefined;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayRequestAminoMsg): RelayRequest {
    return RelayRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayRequestProtoMsg): RelayRequest {
    return RelayRequest.decode(message.value);
  },
  toProto(message: RelayRequest): Uint8Array {
    return RelayRequest.encode(message).finish();
  },
  toProtoMsg(message: RelayRequest): RelayRequestProtoMsg {
    return {
      typeUrl: "/pocket.service.RelayRequest",
      value: RelayRequest.encode(message).finish()
    };
  }
};
function createBaseRelayResponse(): RelayResponse {
  return {
    meta: RelayResponseMetadata.fromPartial({}),
    payload: new Uint8Array(),
    relayMinerError: undefined
  };
}
export const RelayResponse = {
  typeUrl: "/pocket.service.RelayResponse",
  encode(message: RelayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== undefined) {
      RelayResponseMetadata.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.relayMinerError !== undefined) {
      RelayMinerError.encode(message.relayMinerError, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = RelayResponseMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        case 3:
          message.relayMinerError = RelayMinerError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayResponse>): RelayResponse {
    const message = createBaseRelayResponse();
    message.meta = object.meta !== undefined && object.meta !== null ? RelayResponseMetadata.fromPartial(object.meta) : undefined;
    message.payload = object.payload ?? new Uint8Array();
    message.relayMinerError = object.relayMinerError !== undefined && object.relayMinerError !== null ? RelayMinerError.fromPartial(object.relayMinerError) : undefined;
    return message;
  },
  fromAmino(object: RelayResponseAmino): RelayResponse {
    const message = createBaseRelayResponse();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = RelayResponseMetadata.fromAmino(object.meta);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.relay_miner_error !== undefined && object.relay_miner_error !== null) {
      message.relayMinerError = RelayMinerError.fromAmino(object.relay_miner_error);
    }
    return message;
  },
  toAmino(message: RelayResponse): RelayResponseAmino {
    const obj: any = {};
    obj.meta = message.meta ? RelayResponseMetadata.toAmino(message.meta) : undefined;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.relay_miner_error = message.relayMinerError ? RelayMinerError.toAmino(message.relayMinerError) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayResponseAminoMsg): RelayResponse {
    return RelayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayResponseProtoMsg): RelayResponse {
    return RelayResponse.decode(message.value);
  },
  toProto(message: RelayResponse): Uint8Array {
    return RelayResponse.encode(message).finish();
  },
  toProtoMsg(message: RelayResponse): RelayResponseProtoMsg {
    return {
      typeUrl: "/pocket.service.RelayResponse",
      value: RelayResponse.encode(message).finish()
    };
  }
};
function createBaseRelayResponseMetadata(): RelayResponseMetadata {
  return {
    sessionHeader: undefined,
    supplierOperatorSignature: new Uint8Array()
  };
}
export const RelayResponseMetadata = {
  typeUrl: "/pocket.service.RelayResponseMetadata",
  encode(message: RelayResponseMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.supplierOperatorSignature.length !== 0) {
      writer.uint32(18).bytes(message.supplierOperatorSignature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayResponseMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayResponseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionHeader = SessionHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.supplierOperatorSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayResponseMetadata>): RelayResponseMetadata {
    const message = createBaseRelayResponseMetadata();
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.supplierOperatorSignature = object.supplierOperatorSignature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RelayResponseMetadataAmino): RelayResponseMetadata {
    const message = createBaseRelayResponseMetadata();
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.supplier_operator_signature !== undefined && object.supplier_operator_signature !== null) {
      message.supplierOperatorSignature = bytesFromBase64(object.supplier_operator_signature);
    }
    return message;
  },
  toAmino(message: RelayResponseMetadata): RelayResponseMetadataAmino {
    const obj: any = {};
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.supplier_operator_signature = message.supplierOperatorSignature ? base64FromBytes(message.supplierOperatorSignature) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayResponseMetadataAminoMsg): RelayResponseMetadata {
    return RelayResponseMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayResponseMetadataProtoMsg): RelayResponseMetadata {
    return RelayResponseMetadata.decode(message.value);
  },
  toProto(message: RelayResponseMetadata): Uint8Array {
    return RelayResponseMetadata.encode(message).finish();
  },
  toProtoMsg(message: RelayResponseMetadata): RelayResponseMetadataProtoMsg {
    return {
      typeUrl: "/pocket.service.RelayResponseMetadata",
      value: RelayResponseMetadata.encode(message).finish()
    };
  }
};
function createBaseRelayMinerError(): RelayMinerError {
  return {
    codespace: "",
    code: 0,
    description: "",
    message: ""
  };
}
export const RelayMinerError = {
  typeUrl: "/pocket.service.RelayMinerError",
  encode(message: RelayMinerError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codespace !== "") {
      writer.uint32(10).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayMinerError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayMinerError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codespace = reader.string();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayMinerError>): RelayMinerError {
    const message = createBaseRelayMinerError();
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: RelayMinerErrorAmino): RelayMinerError {
    const message = createBaseRelayMinerError();
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: RelayMinerError): RelayMinerErrorAmino {
    const obj: any = {};
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    obj.code = message.code === 0 ? undefined : message.code;
    obj.description = message.description === "" ? undefined : message.description;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: RelayMinerErrorAminoMsg): RelayMinerError {
    return RelayMinerError.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayMinerErrorProtoMsg): RelayMinerError {
    return RelayMinerError.decode(message.value);
  },
  toProto(message: RelayMinerError): Uint8Array {
    return RelayMinerError.encode(message).finish();
  },
  toProtoMsg(message: RelayMinerError): RelayMinerErrorProtoMsg {
    return {
      typeUrl: "/pocket.service.RelayMinerError",
      value: RelayMinerError.encode(message).finish()
    };
  }
};