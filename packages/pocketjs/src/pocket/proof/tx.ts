//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SessionHeader, SessionHeaderAmino, SessionHeaderSDKType } from "../session/types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Claim, ClaimAmino, ClaimSDKType, Proof, ProofAmino, ProofSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** MsgUpdateParams is the Msg/UpdateParams request type to update all params at once. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/proof parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.proof.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type to update all params at once.
 * @name MsgUpdateParamsAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the x/proof parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/proof/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type to update all params at once. */
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
  typeUrl: "/pocket.proof.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.proof.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParam {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * The (name, as_type) tuple must match the corresponding name and type as
   * specified in the `Params`` message in `proof/params.proto.`
   */
  name: string;
  asBytes?: Uint8Array;
  asFloat?: number;
  asCoin?: Coin;
}
export interface MsgUpdateParamProtoMsg {
  typeUrl: "/pocket.proof.MsgUpdateParam";
  value: Uint8Array;
}
/**
 * MsgUpdateParam is the Msg/UpdateParam request type to update a single param.
 * @name MsgUpdateParamAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgUpdateParam
 */
export interface MsgUpdateParamAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * The (name, as_type) tuple must match the corresponding name and type as
   * specified in the `Params`` message in `proof/params.proto.`
   */
  name?: string;
  as_bytes?: string;
  as_float?: number;
  as_coin?: CoinAmino;
}
export interface MsgUpdateParamAminoMsg {
  type: "/pocket.proof.MsgUpdateParam";
  value: MsgUpdateParamAmino;
}
/** MsgUpdateParam is the Msg/UpdateParam request type to update a single param. */
export interface MsgUpdateParamSDKType {
  authority: string;
  name: string;
  as_bytes?: Uint8Array;
  as_float?: number;
  as_coin?: CoinSDKType;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 */
export interface MsgUpdateParamResponse {
  params?: Params;
}
export interface MsgUpdateParamResponseProtoMsg {
  typeUrl: "/pocket.proof.MsgUpdateParamResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 * @name MsgUpdateParamResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgUpdateParamResponse
 */
export interface MsgUpdateParamResponseAmino {
  params?: ParamsAmino;
}
export interface MsgUpdateParamResponseAminoMsg {
  type: "/pocket.proof.MsgUpdateParamResponse";
  value: MsgUpdateParamResponseAmino;
}
/**
 * MsgUpdateParamResponse defines the response structure for executing a
 * MsgUpdateParam message after a single param update.
 */
export interface MsgUpdateParamResponseSDKType {
  params?: ParamsSDKType;
}
export interface MsgCreateClaim {
  supplierOperatorAddress: string;
  sessionHeader?: SessionHeader;
  /** root returned from smt.SMST#Root() */
  rootHash: Uint8Array;
}
export interface MsgCreateClaimProtoMsg {
  typeUrl: "/pocket.proof.MsgCreateClaim";
  value: Uint8Array;
}
/**
 * @name MsgCreateClaimAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgCreateClaim
 */
export interface MsgCreateClaimAmino {
  supplier_operator_address?: string;
  session_header?: SessionHeaderAmino;
  /**
   * root returned from smt.SMST#Root()
   */
  root_hash?: string;
}
export interface MsgCreateClaimAminoMsg {
  type: "/pocket.proof.MsgCreateClaim";
  value: MsgCreateClaimAmino;
}
export interface MsgCreateClaimSDKType {
  supplier_operator_address: string;
  session_header?: SessionHeaderSDKType;
  root_hash: Uint8Array;
}
export interface MsgCreateClaimResponse {
  claim?: Claim;
}
export interface MsgCreateClaimResponseProtoMsg {
  typeUrl: "/pocket.proof.MsgCreateClaimResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateClaimResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgCreateClaimResponse
 */
export interface MsgCreateClaimResponseAmino {
  claim?: ClaimAmino;
}
export interface MsgCreateClaimResponseAminoMsg {
  type: "/pocket.proof.MsgCreateClaimResponse";
  value: MsgCreateClaimResponseAmino;
}
export interface MsgCreateClaimResponseSDKType {
  claim?: ClaimSDKType;
}
export interface MsgSubmitProof {
  supplierOperatorAddress: string;
  sessionHeader?: SessionHeader;
  /** serialized version of *smt.SparseCompactMerkleClosestProof */
  proof: Uint8Array;
}
export interface MsgSubmitProofProtoMsg {
  typeUrl: "/pocket.proof.MsgSubmitProof";
  value: Uint8Array;
}
/**
 * @name MsgSubmitProofAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgSubmitProof
 */
export interface MsgSubmitProofAmino {
  supplier_operator_address?: string;
  session_header?: SessionHeaderAmino;
  /**
   * serialized version of *smt.SparseCompactMerkleClosestProof
   */
  proof?: string;
}
export interface MsgSubmitProofAminoMsg {
  type: "/pocket.proof.MsgSubmitProof";
  value: MsgSubmitProofAmino;
}
export interface MsgSubmitProofSDKType {
  supplier_operator_address: string;
  session_header?: SessionHeaderSDKType;
  proof: Uint8Array;
}
export interface MsgSubmitProofResponse {
  proof?: Proof;
}
export interface MsgSubmitProofResponseProtoMsg {
  typeUrl: "/pocket.proof.MsgSubmitProofResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitProofResponseAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.MsgSubmitProofResponse
 */
export interface MsgSubmitProofResponseAmino {
  proof?: ProofAmino;
}
export interface MsgSubmitProofResponseAminoMsg {
  type: "/pocket.proof.MsgSubmitProofResponse";
  value: MsgSubmitProofResponseAmino;
}
export interface MsgSubmitProofResponseSDKType {
  proof?: ProofSDKType;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pocket.proof.MsgUpdateParams",
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
      type: "pocket/x/proof/MsgUpdateParams",
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
      typeUrl: "/pocket.proof.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.proof.MsgUpdateParamsResponse",
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
      typeUrl: "/pocket.proof.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParam(): MsgUpdateParam {
  return {
    authority: "",
    name: "",
    asBytes: undefined,
    asFloat: undefined,
    asCoin: undefined
  };
}
export const MsgUpdateParam = {
  typeUrl: "/pocket.proof.MsgUpdateParam",
  encode(message: MsgUpdateParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.asBytes !== undefined) {
      writer.uint32(58).bytes(message.asBytes);
    }
    if (message.asFloat !== undefined) {
      writer.uint32(65).double(message.asFloat);
    }
    if (message.asCoin !== undefined) {
      Coin.encode(message.asCoin, writer.uint32(74).fork()).ldelim();
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
        case 7:
          message.asBytes = reader.bytes();
          break;
        case 8:
          message.asFloat = reader.double();
          break;
        case 9:
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
    message.asBytes = object.asBytes ?? undefined;
    message.asFloat = object.asFloat ?? undefined;
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
    if (object.as_bytes !== undefined && object.as_bytes !== null) {
      message.asBytes = bytesFromBase64(object.as_bytes);
    }
    if (object.as_float !== undefined && object.as_float !== null) {
      message.asFloat = object.as_float;
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
    obj.as_bytes = message.asBytes ? base64FromBytes(message.asBytes) : "";
    obj.as_float = message.asFloat ?? null;
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
      typeUrl: "/pocket.proof.MsgUpdateParam",
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
  typeUrl: "/pocket.proof.MsgUpdateParamResponse",
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
      typeUrl: "/pocket.proof.MsgUpdateParamResponse",
      value: MsgUpdateParamResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClaim(): MsgCreateClaim {
  return {
    supplierOperatorAddress: "",
    sessionHeader: undefined,
    rootHash: new Uint8Array()
  };
}
export const MsgCreateClaim = {
  typeUrl: "/pocket.proof.MsgCreateClaim",
  encode(message: MsgCreateClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(10).string(message.supplierOperatorAddress);
    }
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(18).fork()).ldelim();
    }
    if (message.rootHash.length !== 0) {
      writer.uint32(26).bytes(message.rootHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplierOperatorAddress = reader.string();
          break;
        case 2:
          message.sessionHeader = SessionHeader.decode(reader, reader.uint32());
          break;
        case 3:
          message.rootHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateClaim>): MsgCreateClaim {
    const message = createBaseMsgCreateClaim();
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.rootHash = object.rootHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateClaimAmino): MsgCreateClaim {
    const message = createBaseMsgCreateClaim();
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.root_hash !== undefined && object.root_hash !== null) {
      message.rootHash = bytesFromBase64(object.root_hash);
    }
    return message;
  },
  toAmino(message: MsgCreateClaim): MsgCreateClaimAmino {
    const obj: any = {};
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.root_hash = message.rootHash ? base64FromBytes(message.rootHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClaimAminoMsg): MsgCreateClaim {
    return MsgCreateClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClaimProtoMsg): MsgCreateClaim {
    return MsgCreateClaim.decode(message.value);
  },
  toProto(message: MsgCreateClaim): Uint8Array {
    return MsgCreateClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClaim): MsgCreateClaimProtoMsg {
    return {
      typeUrl: "/pocket.proof.MsgCreateClaim",
      value: MsgCreateClaim.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClaimResponse(): MsgCreateClaimResponse {
  return {
    claim: undefined
  };
}
export const MsgCreateClaimResponse = {
  typeUrl: "/pocket.proof.MsgCreateClaimResponse",
  encode(message: MsgCreateClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClaimResponse();
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
  fromPartial(object: Partial<MsgCreateClaimResponse>): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateClaimResponseAmino): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    return message;
  },
  toAmino(message: MsgCreateClaimResponse): MsgCreateClaimResponseAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClaimResponseAminoMsg): MsgCreateClaimResponse {
    return MsgCreateClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClaimResponseProtoMsg): MsgCreateClaimResponse {
    return MsgCreateClaimResponse.decode(message.value);
  },
  toProto(message: MsgCreateClaimResponse): Uint8Array {
    return MsgCreateClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClaimResponse): MsgCreateClaimResponseProtoMsg {
    return {
      typeUrl: "/pocket.proof.MsgCreateClaimResponse",
      value: MsgCreateClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProof(): MsgSubmitProof {
  return {
    supplierOperatorAddress: "",
    sessionHeader: undefined,
    proof: new Uint8Array()
  };
}
export const MsgSubmitProof = {
  typeUrl: "/pocket.proof.MsgSubmitProof",
  encode(message: MsgSubmitProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(10).string(message.supplierOperatorAddress);
    }
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(18).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplierOperatorAddress = reader.string();
          break;
        case 2:
          message.sessionHeader = SessionHeader.decode(reader, reader.uint32());
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitProof>): MsgSubmitProof {
    const message = createBaseMsgSubmitProof();
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSubmitProofAmino): MsgSubmitProof {
    const message = createBaseMsgSubmitProof();
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    return message;
  },
  toAmino(message: MsgSubmitProof): MsgSubmitProofAmino {
    const obj: any = {};
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProofAminoMsg): MsgSubmitProof {
    return MsgSubmitProof.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProofProtoMsg): MsgSubmitProof {
    return MsgSubmitProof.decode(message.value);
  },
  toProto(message: MsgSubmitProof): Uint8Array {
    return MsgSubmitProof.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProof): MsgSubmitProofProtoMsg {
    return {
      typeUrl: "/pocket.proof.MsgSubmitProof",
      value: MsgSubmitProof.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProofResponse(): MsgSubmitProofResponse {
  return {
    proof: undefined
  };
}
export const MsgSubmitProofResponse = {
  typeUrl: "/pocket.proof.MsgSubmitProofResponse",
  encode(message: MsgSubmitProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProofResponse();
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
  fromPartial(object: Partial<MsgSubmitProofResponse>): MsgSubmitProofResponse {
    const message = createBaseMsgSubmitProofResponse();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitProofResponseAmino): MsgSubmitProofResponse {
    const message = createBaseMsgSubmitProofResponse();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message: MsgSubmitProofResponse): MsgSubmitProofResponseAmino {
    const obj: any = {};
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProofResponseAminoMsg): MsgSubmitProofResponse {
    return MsgSubmitProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProofResponseProtoMsg): MsgSubmitProofResponse {
    return MsgSubmitProofResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProofResponse): Uint8Array {
    return MsgSubmitProofResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProofResponse): MsgSubmitProofResponseProtoMsg {
    return {
      typeUrl: "/pocket.proof.MsgSubmitProofResponse",
      value: MsgSubmitProofResponse.encode(message).finish()
    };
  }
};