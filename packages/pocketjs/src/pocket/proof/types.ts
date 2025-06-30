//@ts-nocheck
import { SessionHeader, SessionHeaderAmino, SessionHeaderSDKType } from "../session/types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
export enum ProofRequirementReason {
  NOT_REQUIRED = 0,
  PROBABILISTIC = 1,
  THRESHOLD = 2,
  UNRECOGNIZED = -1,
}
export const ProofRequirementReasonSDKType = ProofRequirementReason;
export const ProofRequirementReasonAmino = ProofRequirementReason;
export function proofRequirementReasonFromJSON(object: any): ProofRequirementReason {
  switch (object) {
    case 0:
    case "NOT_REQUIRED":
      return ProofRequirementReason.NOT_REQUIRED;
    case 1:
    case "PROBABILISTIC":
      return ProofRequirementReason.PROBABILISTIC;
    case 2:
    case "THRESHOLD":
      return ProofRequirementReason.THRESHOLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProofRequirementReason.UNRECOGNIZED;
  }
}
export function proofRequirementReasonToJSON(object: ProofRequirementReason): string {
  switch (object) {
    case ProofRequirementReason.NOT_REQUIRED:
      return "NOT_REQUIRED";
    case ProofRequirementReason.PROBABILISTIC:
      return "PROBABILISTIC";
    case ProofRequirementReason.THRESHOLD:
      return "THRESHOLD";
    case ProofRequirementReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ClaimProofStage {
  CLAIMED = 0,
  PROVEN = 1,
  SETTLED = 2,
  EXPIRED = 3,
  UNRECOGNIZED = -1,
}
export const ClaimProofStageSDKType = ClaimProofStage;
export const ClaimProofStageAmino = ClaimProofStage;
export function claimProofStageFromJSON(object: any): ClaimProofStage {
  switch (object) {
    case 0:
    case "CLAIMED":
      return ClaimProofStage.CLAIMED;
    case 1:
    case "PROVEN":
      return ClaimProofStage.PROVEN;
    case 2:
    case "SETTLED":
      return ClaimProofStage.SETTLED;
    case 3:
    case "EXPIRED":
      return ClaimProofStage.EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimProofStage.UNRECOGNIZED;
  }
}
export function claimProofStageToJSON(object: ClaimProofStage): string {
  switch (object) {
    case ClaimProofStage.CLAIMED:
      return "CLAIMED";
    case ClaimProofStage.PROVEN:
      return "PROVEN";
    case ClaimProofStage.SETTLED:
      return "SETTLED";
    case ClaimProofStage.EXPIRED:
      return "EXPIRED";
    case ClaimProofStage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Status of proof validation for a claim
 * Default is PENDING_VALIDATION regardless of proof requirement
 */
export enum ClaimProofStatus {
  PENDING_VALIDATION = 0,
  VALIDATED = 1,
  INVALID = 2,
  UNRECOGNIZED = -1,
}
export const ClaimProofStatusSDKType = ClaimProofStatus;
export const ClaimProofStatusAmino = ClaimProofStatus;
export function claimProofStatusFromJSON(object: any): ClaimProofStatus {
  switch (object) {
    case 0:
    case "PENDING_VALIDATION":
      return ClaimProofStatus.PENDING_VALIDATION;
    case 1:
    case "VALIDATED":
      return ClaimProofStatus.VALIDATED;
    case 2:
    case "INVALID":
      return ClaimProofStatus.INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimProofStatus.UNRECOGNIZED;
  }
}
export function claimProofStatusToJSON(object: ClaimProofStatus): string {
  switch (object) {
    case ClaimProofStatus.PENDING_VALIDATION:
      return "PENDING_VALIDATION";
    case ClaimProofStatus.VALIDATED:
      return "VALIDATED";
    case ClaimProofStatus.INVALID:
      return "INVALID";
    case ClaimProofStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Proof {
  /** Address of the supplier's operator that submitted this proof. */
  supplierOperatorAddress: string;
  /** The session header of the session that this claim is for. */
  sessionHeader?: SessionHeader;
  /** The serialized SMST compacted proof from the `#ClosestProof()` method. */
  closestMerkleProof: Uint8Array;
}
export interface ProofProtoMsg {
  typeUrl: "/pocket.proof.Proof";
  value: Uint8Array;
}
/**
 * @name ProofAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.Proof
 */
export interface ProofAmino {
  /**
   * Address of the supplier's operator that submitted this proof.
   */
  supplier_operator_address?: string;
  /**
   * The session header of the session that this claim is for.
   */
  session_header?: SessionHeaderAmino;
  /**
   * The serialized SMST compacted proof from the `#ClosestProof()` method.
   */
  closest_merkle_proof?: string;
}
export interface ProofAminoMsg {
  type: "/pocket.proof.Proof";
  value: ProofAmino;
}
export interface ProofSDKType {
  supplier_operator_address: string;
  session_header?: SessionHeaderSDKType;
  closest_merkle_proof: Uint8Array;
}
/** Claim is the serialized object stored onchain for claims pending to be proven */
export interface Claim {
  /** Address of the supplier's operator that submitted this claim. */
  supplierOperatorAddress: string;
  /** Session header this claim is for. */
  sessionHeader?: SessionHeader;
  /**
   * Root hash from smt.SMST#Root().
   * TODO_UP_NEXT(@bryanchriswhite, #1497): Dehydrate the claim's root hash from onchain events.
   */
  rootHash: Uint8Array;
  /** Important: This field MUST only be set by proofKeeper#EnsureValidProofSignaturesAndClosestPath */
  proofValidationStatus: ClaimProofStatus;
}
export interface ClaimProtoMsg {
  typeUrl: "/pocket.proof.Claim";
  value: Uint8Array;
}
/**
 * Claim is the serialized object stored onchain for claims pending to be proven
 * @name ClaimAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.Claim
 */
export interface ClaimAmino {
  /**
   * Address of the supplier's operator that submitted this claim.
   */
  supplier_operator_address?: string;
  /**
   * Session header this claim is for.
   */
  session_header?: SessionHeaderAmino;
  /**
   * Root hash from smt.SMST#Root().
   * TODO_UP_NEXT(@bryanchriswhite, #1497): Dehydrate the claim's root hash from onchain events.
   */
  root_hash?: string;
  /**
   * Important: This field MUST only be set by proofKeeper#EnsureValidProofSignaturesAndClosestPath
   */
  proof_validation_status?: ClaimProofStatus;
}
export interface ClaimAminoMsg {
  type: "/pocket.proof.Claim";
  value: ClaimAmino;
}
/** Claim is the serialized object stored onchain for claims pending to be proven */
export interface ClaimSDKType {
  supplier_operator_address: string;
  session_header?: SessionHeaderSDKType;
  root_hash: Uint8Array;
  proof_validation_status: ClaimProofStatus;
}
/**
 * SessionSMT is the serializable session's SMST used to persist the session's
 * state offchain by the RelayMiner.
 * It is not used for any onchain logic.
 */
export interface SessionSMT {
  sessionHeader?: SessionHeader;
  supplierOperatorAddress: string;
  smtRoot: Uint8Array;
}
export interface SessionSMTProtoMsg {
  typeUrl: "/pocket.proof.SessionSMT";
  value: Uint8Array;
}
/**
 * SessionSMT is the serializable session's SMST used to persist the session's
 * state offchain by the RelayMiner.
 * It is not used for any onchain logic.
 * @name SessionSMTAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.SessionSMT
 */
export interface SessionSMTAmino {
  session_header?: SessionHeaderAmino;
  supplier_operator_address?: string;
  smt_root?: string;
}
export interface SessionSMTAminoMsg {
  type: "/pocket.proof.SessionSMT";
  value: SessionSMTAmino;
}
/**
 * SessionSMT is the serializable session's SMST used to persist the session's
 * state offchain by the RelayMiner.
 * It is not used for any onchain logic.
 */
export interface SessionSMTSDKType {
  session_header?: SessionHeaderSDKType;
  supplier_operator_address: string;
  smt_root: Uint8Array;
}
function createBaseProof(): Proof {
  return {
    supplierOperatorAddress: "",
    sessionHeader: undefined,
    closestMerkleProof: new Uint8Array()
  };
}
export const Proof = {
  typeUrl: "/pocket.proof.Proof",
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(10).string(message.supplierOperatorAddress);
    }
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(18).fork()).ldelim();
    }
    if (message.closestMerkleProof.length !== 0) {
      writer.uint32(26).bytes(message.closestMerkleProof);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
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
          message.closestMerkleProof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Proof>): Proof {
    const message = createBaseProof();
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.closestMerkleProof = object.closestMerkleProof ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    const message = createBaseProof();
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.closest_merkle_proof !== undefined && object.closest_merkle_proof !== null) {
      message.closestMerkleProof = bytesFromBase64(object.closest_merkle_proof);
    }
    return message;
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.closest_merkle_proof = message.closestMerkleProof ? base64FromBytes(message.closestMerkleProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/pocket.proof.Proof",
      value: Proof.encode(message).finish()
    };
  }
};
function createBaseClaim(): Claim {
  return {
    supplierOperatorAddress: "",
    sessionHeader: undefined,
    rootHash: new Uint8Array(),
    proofValidationStatus: 0
  };
}
export const Claim = {
  typeUrl: "/pocket.proof.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(10).string(message.supplierOperatorAddress);
    }
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(18).fork()).ldelim();
    }
    if (message.rootHash.length !== 0) {
      writer.uint32(26).bytes(message.rootHash);
    }
    if (message.proofValidationStatus !== 0) {
      writer.uint32(32).int32(message.proofValidationStatus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Claim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
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
        case 4:
          message.proofValidationStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.proofValidationStatus = object.proofValidationStatus ?? 0;
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    const message = createBaseClaim();
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.root_hash !== undefined && object.root_hash !== null) {
      message.rootHash = bytesFromBase64(object.root_hash);
    }
    if (object.proof_validation_status !== undefined && object.proof_validation_status !== null) {
      message.proofValidationStatus = object.proof_validation_status;
    }
    return message;
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.root_hash = message.rootHash ? base64FromBytes(message.rootHash) : undefined;
    obj.proof_validation_status = message.proofValidationStatus === 0 ? undefined : message.proofValidationStatus;
    return obj;
  },
  fromAminoMsg(object: ClaimAminoMsg): Claim {
    return Claim.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/pocket.proof.Claim",
      value: Claim.encode(message).finish()
    };
  }
};
function createBaseSessionSMT(): SessionSMT {
  return {
    sessionHeader: undefined,
    supplierOperatorAddress: "",
    smtRoot: new Uint8Array()
  };
}
export const SessionSMT = {
  typeUrl: "/pocket.proof.SessionSMT",
  encode(message: SessionSMT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionHeader !== undefined) {
      SessionHeader.encode(message.sessionHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.supplierOperatorAddress !== "") {
      writer.uint32(18).string(message.supplierOperatorAddress);
    }
    if (message.smtRoot.length !== 0) {
      writer.uint32(26).bytes(message.smtRoot);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SessionSMT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionSMT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionHeader = SessionHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.supplierOperatorAddress = reader.string();
          break;
        case 3:
          message.smtRoot = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SessionSMT>): SessionSMT {
    const message = createBaseSessionSMT();
    message.sessionHeader = object.sessionHeader !== undefined && object.sessionHeader !== null ? SessionHeader.fromPartial(object.sessionHeader) : undefined;
    message.supplierOperatorAddress = object.supplierOperatorAddress ?? "";
    message.smtRoot = object.smtRoot ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SessionSMTAmino): SessionSMT {
    const message = createBaseSessionSMT();
    if (object.session_header !== undefined && object.session_header !== null) {
      message.sessionHeader = SessionHeader.fromAmino(object.session_header);
    }
    if (object.supplier_operator_address !== undefined && object.supplier_operator_address !== null) {
      message.supplierOperatorAddress = object.supplier_operator_address;
    }
    if (object.smt_root !== undefined && object.smt_root !== null) {
      message.smtRoot = bytesFromBase64(object.smt_root);
    }
    return message;
  },
  toAmino(message: SessionSMT): SessionSMTAmino {
    const obj: any = {};
    obj.session_header = message.sessionHeader ? SessionHeader.toAmino(message.sessionHeader) : undefined;
    obj.supplier_operator_address = message.supplierOperatorAddress === "" ? undefined : message.supplierOperatorAddress;
    obj.smt_root = message.smtRoot ? base64FromBytes(message.smtRoot) : undefined;
    return obj;
  },
  fromAminoMsg(object: SessionSMTAminoMsg): SessionSMT {
    return SessionSMT.fromAmino(object.value);
  },
  fromProtoMsg(message: SessionSMTProtoMsg): SessionSMT {
    return SessionSMT.decode(message.value);
  },
  toProto(message: SessionSMT): Uint8Array {
    return SessionSMT.encode(message).finish();
  },
  toProtoMsg(message: SessionSMT): SessionSMTProtoMsg {
    return {
      typeUrl: "/pocket.proof.SessionSMT",
      value: SessionSMT.encode(message).finish()
    };
  }
};