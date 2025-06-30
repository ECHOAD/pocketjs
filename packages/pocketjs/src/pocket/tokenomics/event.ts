//@ts-nocheck
import { Claim, ClaimAmino, ClaimSDKType, ProofRequirementReason } from "../proof/types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { ClaimSettlementResult, ClaimSettlementResultAmino, ClaimSettlementResultSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum ClaimExpirationReason {
  /** EXPIRATION_REASON_UNSPECIFIED - Default value, means may be valid */
  EXPIRATION_REASON_UNSPECIFIED = 0,
  PROOF_MISSING = 1,
  PROOF_INVALID = 2,
  UNRECOGNIZED = -1,
}
export const ClaimExpirationReasonSDKType = ClaimExpirationReason;
export const ClaimExpirationReasonAmino = ClaimExpirationReason;
export function claimExpirationReasonFromJSON(object: any): ClaimExpirationReason {
  switch (object) {
    case 0:
    case "EXPIRATION_REASON_UNSPECIFIED":
      return ClaimExpirationReason.EXPIRATION_REASON_UNSPECIFIED;
    case 1:
    case "PROOF_MISSING":
      return ClaimExpirationReason.PROOF_MISSING;
    case 2:
    case "PROOF_INVALID":
      return ClaimExpirationReason.PROOF_INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimExpirationReason.UNRECOGNIZED;
  }
}
export function claimExpirationReasonToJSON(object: ClaimExpirationReason): string {
  switch (object) {
    case ClaimExpirationReason.EXPIRATION_REASON_UNSPECIFIED:
      return "EXPIRATION_REASON_UNSPECIFIED";
    case ClaimExpirationReason.PROOF_MISSING:
      return "PROOF_MISSING";
    case ClaimExpirationReason.PROOF_INVALID:
      return "PROOF_INVALID";
    case ClaimExpirationReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * EventClaimExpired is an event emitted during settlement whenever a claim requiring
 * an onchain proof doesn't have one. The claim cannot be settled, leading to that work
 * never being rewarded.
 */
export interface EventClaimExpired {
  claim?: Claim;
  /** The reason why the claim expired, leading to a Supplier being penalized (i.e. burn). */
  expirationReason: ClaimExpirationReason;
  /** Number of relays claimed to be in the session tree. */
  numRelays: bigint;
  /**
   * Number of compute units claimed as a function of the number of relays
   * and the compute units per relay for the particular service.
   */
  numClaimedComputeUnits: bigint;
  /**
   * Number of estimated compute units claimed as a function of the number of claimed
   * compute units and the relay difficulty multiplier for the particular service.
   */
  numEstimatedComputeUnits: bigint;
  /**
   * The uPOKT coin claimed to be rewarded for the work done as a function of
   * the number of estimated compute units and the compute units to token multiplier.
   */
  claimedUpokt?: Coin;
}
export interface EventClaimExpiredProtoMsg {
  typeUrl: "/pocket.tokenomics.EventClaimExpired";
  value: Uint8Array;
}
/**
 * EventClaimExpired is an event emitted during settlement whenever a claim requiring
 * an onchain proof doesn't have one. The claim cannot be settled, leading to that work
 * never being rewarded.
 * @name EventClaimExpiredAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.EventClaimExpired
 */
export interface EventClaimExpiredAmino {
  claim: ClaimAmino;
  /**
   * The reason why the claim expired, leading to a Supplier being penalized (i.e. burn).
   */
  expiration_reason: ClaimExpirationReason;
  /**
   * Number of relays claimed to be in the session tree.
   */
  num_relays: string;
  /**
   * Number of compute units claimed as a function of the number of relays
   * and the compute units per relay for the particular service.
   */
  num_claimed_compute_units: string;
  /**
   * Number of estimated compute units claimed as a function of the number of claimed
   * compute units and the relay difficulty multiplier for the particular service.
   */
  num_estimated_compute_units: string;
  /**
   * The uPOKT coin claimed to be rewarded for the work done as a function of
   * the number of estimated compute units and the compute units to token multiplier.
   */
  claimed_upokt: CoinAmino;
}
export interface EventClaimExpiredAminoMsg {
  type: "/pocket.tokenomics.EventClaimExpired";
  value: EventClaimExpiredAmino;
}
/**
 * EventClaimExpired is an event emitted during settlement whenever a claim requiring
 * an onchain proof doesn't have one. The claim cannot be settled, leading to that work
 * never being rewarded.
 */
export interface EventClaimExpiredSDKType {
  claim?: ClaimSDKType;
  expiration_reason: ClaimExpirationReason;
  num_relays: bigint;
  num_claimed_compute_units: bigint;
  num_estimated_compute_units: bigint;
  claimed_upokt?: CoinSDKType;
}
/**
 * EventClaimSettled is an event emitted whenever a claim is settled.
 * The proof_required determines whether the claim requires a proof that has been submitted or not
 */
export interface EventClaimSettled {
  claim?: Claim;
  /** The reason why the claim was settled, leading to a Supplier being rewarded (i.e. mint). */
  proofRequirement: ProofRequirementReason;
  /** Number of relays claimed to be in the session tree. */
  numRelays: bigint;
  /**
   * Number of compute units claimed as a function of the number of relays
   * and the compute units per relay for the particular service.
   */
  numClaimedComputeUnits: bigint;
  /**
   * Number of estimated compute units claimed as a function of the number of claimed
   * compute units and the relay difficulty multiplier for the particular service.
   */
  numEstimatedComputeUnits: bigint;
  /**
   * The uPOKT coin claimed to be rewarded for the work done as a function of
   * the number of estimated compute units and the compute units to token multiplier.
   */
  claimedUpokt?: Coin;
  /** SettlementResult holds mint, burn, and transfer operations on a per-claim basis. */
  settlementResult: ClaimSettlementResult;
}
export interface EventClaimSettledProtoMsg {
  typeUrl: "/pocket.tokenomics.EventClaimSettled";
  value: Uint8Array;
}
/**
 * EventClaimSettled is an event emitted whenever a claim is settled.
 * The proof_required determines whether the claim requires a proof that has been submitted or not
 * @name EventClaimSettledAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.EventClaimSettled
 */
export interface EventClaimSettledAmino {
  claim: ClaimAmino;
  /**
   * The reason why the claim was settled, leading to a Supplier being rewarded (i.e. mint).
   */
  proof_requirement: ProofRequirementReason;
  /**
   * Number of relays claimed to be in the session tree.
   */
  num_relays: string;
  /**
   * Number of compute units claimed as a function of the number of relays
   * and the compute units per relay for the particular service.
   */
  num_claimed_compute_units: string;
  /**
   * Number of estimated compute units claimed as a function of the number of claimed
   * compute units and the relay difficulty multiplier for the particular service.
   */
  num_estimated_compute_units: string;
  /**
   * The uPOKT coin claimed to be rewarded for the work done as a function of
   * the number of estimated compute units and the compute units to token multiplier.
   */
  claimed_upokt: CoinAmino;
  /**
   * SettlementResult holds mint, burn, and transfer operations on a per-claim basis.
   */
  settlement_result: ClaimSettlementResultAmino;
}
export interface EventClaimSettledAminoMsg {
  type: "/pocket.tokenomics.EventClaimSettled";
  value: EventClaimSettledAmino;
}
/**
 * EventClaimSettled is an event emitted whenever a claim is settled.
 * The proof_required determines whether the claim requires a proof that has been submitted or not
 */
export interface EventClaimSettledSDKType {
  claim?: ClaimSDKType;
  proof_requirement: ProofRequirementReason;
  num_relays: bigint;
  num_claimed_compute_units: bigint;
  num_estimated_compute_units: bigint;
  claimed_upokt?: CoinSDKType;
  settlement_result: ClaimSettlementResultSDKType;
}
/**
 * EventApplicationOverserviced is emitted when an application has less stake than
 * what a supplier is claiming (i.e. amount available for burning is insufficient).
 * This means the following will ALWAYS be strictly true: effective_burn < expected_burn.
 */
export interface EventApplicationOverserviced {
  applicationAddr: string;
  supplierOperatorAddr: string;
  /**
   * Expected burn is the amount the supplier is claiming for work done
   * to service the application during the session.
   * This is usually the amount in the Claim submitted.
   */
  expectedBurn?: Coin;
  /**
   * Effective burn is the amount that is actually being paid to the supplier
   * for the work done. It is less than the expected burn (claim amount) and
   * is a function of the relay mining algorithm.
   * E.g. The application's stake divided by the number of suppliers in a session.
   */
  effectiveBurn?: Coin;
}
export interface EventApplicationOverservicedProtoMsg {
  typeUrl: "/pocket.tokenomics.EventApplicationOverserviced";
  value: Uint8Array;
}
/**
 * EventApplicationOverserviced is emitted when an application has less stake than
 * what a supplier is claiming (i.e. amount available for burning is insufficient).
 * This means the following will ALWAYS be strictly true: effective_burn < expected_burn.
 * @name EventApplicationOverservicedAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.EventApplicationOverserviced
 */
export interface EventApplicationOverservicedAmino {
  application_addr?: string;
  supplier_operator_addr?: string;
  /**
   * Expected burn is the amount the supplier is claiming for work done
   * to service the application during the session.
   * This is usually the amount in the Claim submitted.
   */
  expected_burn?: CoinAmino;
  /**
   * Effective burn is the amount that is actually being paid to the supplier
   * for the work done. It is less than the expected burn (claim amount) and
   * is a function of the relay mining algorithm.
   * E.g. The application's stake divided by the number of suppliers in a session.
   */
  effective_burn?: CoinAmino;
}
export interface EventApplicationOverservicedAminoMsg {
  type: "/pocket.tokenomics.EventApplicationOverserviced";
  value: EventApplicationOverservicedAmino;
}
/**
 * EventApplicationOverserviced is emitted when an application has less stake than
 * what a supplier is claiming (i.e. amount available for burning is insufficient).
 * This means the following will ALWAYS be strictly true: effective_burn < expected_burn.
 */
export interface EventApplicationOverservicedSDKType {
  application_addr: string;
  supplier_operator_addr: string;
  expected_burn?: CoinSDKType;
  effective_burn?: CoinSDKType;
}
/**
 * EventSupplierSlashed is emitted when a supplier is slashed for not providing,
 * or provided invalid required proofs for claims.
 */
export interface EventSupplierSlashed {
  claim?: Claim;
  /**
   * Amount slashed from the supplier's stake due to the expired claims.
   * This is a function of the number of expired claims and proof missing penalty.
   */
  proofMissingPenalty?: Coin;
}
export interface EventSupplierSlashedProtoMsg {
  typeUrl: "/pocket.tokenomics.EventSupplierSlashed";
  value: Uint8Array;
}
/**
 * EventSupplierSlashed is emitted when a supplier is slashed for not providing,
 * or provided invalid required proofs for claims.
 * @name EventSupplierSlashedAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.EventSupplierSlashed
 */
export interface EventSupplierSlashedAmino {
  claim?: ClaimAmino;
  /**
   * Amount slashed from the supplier's stake due to the expired claims.
   * This is a function of the number of expired claims and proof missing penalty.
   */
  proof_missing_penalty?: CoinAmino;
}
export interface EventSupplierSlashedAminoMsg {
  type: "/pocket.tokenomics.EventSupplierSlashed";
  value: EventSupplierSlashedAmino;
}
/**
 * EventSupplierSlashed is emitted when a supplier is slashed for not providing,
 * or provided invalid required proofs for claims.
 */
export interface EventSupplierSlashedSDKType {
  claim?: ClaimSDKType;
  proof_missing_penalty?: CoinSDKType;
}
/**
 * EventClaimDiscarded is emitted when a claim is discarded due to unexpected
 * errors during settlement to prevent chain halt.
 */
export interface EventClaimDiscarded {
  claim?: Claim;
  /** The error that caused the claim to be discarded. */
  error: string;
}
export interface EventClaimDiscardedProtoMsg {
  typeUrl: "/pocket.tokenomics.EventClaimDiscarded";
  value: Uint8Array;
}
/**
 * EventClaimDiscarded is emitted when a claim is discarded due to unexpected
 * errors during settlement to prevent chain halt.
 * @name EventClaimDiscardedAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.EventClaimDiscarded
 */
export interface EventClaimDiscardedAmino {
  claim?: ClaimAmino;
  /**
   * The error that caused the claim to be discarded.
   */
  error?: string;
}
export interface EventClaimDiscardedAminoMsg {
  type: "/pocket.tokenomics.EventClaimDiscarded";
  value: EventClaimDiscardedAmino;
}
/**
 * EventClaimDiscarded is emitted when a claim is discarded due to unexpected
 * errors during settlement to prevent chain halt.
 */
export interface EventClaimDiscardedSDKType {
  claim?: ClaimSDKType;
  error: string;
}
/**
 * EventApplicationReimbursementRequest is emitted when an application requests
 * a reimbursement.
 */
export interface EventApplicationReimbursementRequest {
  applicationAddr: string;
  supplierOperatorAddr: string;
  supplierOwnerAddr: string;
  serviceId: string;
  sessionId: string;
  amount?: Coin;
}
export interface EventApplicationReimbursementRequestProtoMsg {
  typeUrl: "/pocket.tokenomics.EventApplicationReimbursementRequest";
  value: Uint8Array;
}
/**
 * EventApplicationReimbursementRequest is emitted when an application requests
 * a reimbursement.
 * @name EventApplicationReimbursementRequestAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.EventApplicationReimbursementRequest
 */
export interface EventApplicationReimbursementRequestAmino {
  application_addr?: string;
  supplier_operator_addr?: string;
  supplier_owner_addr?: string;
  service_id?: string;
  session_id?: string;
  amount?: CoinAmino;
}
export interface EventApplicationReimbursementRequestAminoMsg {
  type: "/pocket.tokenomics.EventApplicationReimbursementRequest";
  value: EventApplicationReimbursementRequestAmino;
}
/**
 * EventApplicationReimbursementRequest is emitted when an application requests
 * a reimbursement.
 */
export interface EventApplicationReimbursementRequestSDKType {
  application_addr: string;
  supplier_operator_addr: string;
  supplier_owner_addr: string;
  service_id: string;
  session_id: string;
  amount?: CoinSDKType;
}
function createBaseEventClaimExpired(): EventClaimExpired {
  return {
    claim: undefined,
    expirationReason: 0,
    numRelays: BigInt(0),
    numClaimedComputeUnits: BigInt(0),
    numEstimatedComputeUnits: BigInt(0),
    claimedUpokt: undefined
  };
}
export const EventClaimExpired = {
  typeUrl: "/pocket.tokenomics.EventClaimExpired",
  encode(message: EventClaimExpired, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.expirationReason !== 0) {
      writer.uint32(16).int32(message.expirationReason);
    }
    if (message.numRelays !== BigInt(0)) {
      writer.uint32(24).uint64(message.numRelays);
    }
    if (message.numClaimedComputeUnits !== BigInt(0)) {
      writer.uint32(32).uint64(message.numClaimedComputeUnits);
    }
    if (message.numEstimatedComputeUnits !== BigInt(0)) {
      writer.uint32(40).uint64(message.numEstimatedComputeUnits);
    }
    if (message.claimedUpokt !== undefined) {
      Coin.encode(message.claimedUpokt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimExpired {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimExpired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.expirationReason = reader.int32() as any;
          break;
        case 3:
          message.numRelays = reader.uint64();
          break;
        case 4:
          message.numClaimedComputeUnits = reader.uint64();
          break;
        case 5:
          message.numEstimatedComputeUnits = reader.uint64();
          break;
        case 6:
          message.claimedUpokt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventClaimExpired>): EventClaimExpired {
    const message = createBaseEventClaimExpired();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.expirationReason = object.expirationReason ?? 0;
    message.numRelays = object.numRelays !== undefined && object.numRelays !== null ? BigInt(object.numRelays.toString()) : BigInt(0);
    message.numClaimedComputeUnits = object.numClaimedComputeUnits !== undefined && object.numClaimedComputeUnits !== null ? BigInt(object.numClaimedComputeUnits.toString()) : BigInt(0);
    message.numEstimatedComputeUnits = object.numEstimatedComputeUnits !== undefined && object.numEstimatedComputeUnits !== null ? BigInt(object.numEstimatedComputeUnits.toString()) : BigInt(0);
    message.claimedUpokt = object.claimedUpokt !== undefined && object.claimedUpokt !== null ? Coin.fromPartial(object.claimedUpokt) : undefined;
    return message;
  },
  fromAmino(object: EventClaimExpiredAmino): EventClaimExpired {
    const message = createBaseEventClaimExpired();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    if (object.expiration_reason !== undefined && object.expiration_reason !== null) {
      message.expirationReason = object.expiration_reason;
    }
    if (object.num_relays !== undefined && object.num_relays !== null) {
      message.numRelays = BigInt(object.num_relays);
    }
    if (object.num_claimed_compute_units !== undefined && object.num_claimed_compute_units !== null) {
      message.numClaimedComputeUnits = BigInt(object.num_claimed_compute_units);
    }
    if (object.num_estimated_compute_units !== undefined && object.num_estimated_compute_units !== null) {
      message.numEstimatedComputeUnits = BigInt(object.num_estimated_compute_units);
    }
    if (object.claimed_upokt !== undefined && object.claimed_upokt !== null) {
      message.claimedUpokt = Coin.fromAmino(object.claimed_upokt);
    }
    return message;
  },
  toAmino(message: EventClaimExpired): EventClaimExpiredAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.expiration_reason = message.expirationReason ?? 0;
    obj.num_relays = message.numRelays ? message.numRelays?.toString() : "0";
    obj.num_claimed_compute_units = message.numClaimedComputeUnits ? message.numClaimedComputeUnits?.toString() : "0";
    obj.num_estimated_compute_units = message.numEstimatedComputeUnits ? message.numEstimatedComputeUnits?.toString() : "0";
    obj.claimed_upokt = message.claimedUpokt ? Coin.toAmino(message.claimedUpokt) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventClaimExpiredAminoMsg): EventClaimExpired {
    return EventClaimExpired.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimExpiredProtoMsg): EventClaimExpired {
    return EventClaimExpired.decode(message.value);
  },
  toProto(message: EventClaimExpired): Uint8Array {
    return EventClaimExpired.encode(message).finish();
  },
  toProtoMsg(message: EventClaimExpired): EventClaimExpiredProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.EventClaimExpired",
      value: EventClaimExpired.encode(message).finish()
    };
  }
};
function createBaseEventClaimSettled(): EventClaimSettled {
  return {
    claim: undefined,
    proofRequirement: 0,
    numRelays: BigInt(0),
    numClaimedComputeUnits: BigInt(0),
    numEstimatedComputeUnits: BigInt(0),
    claimedUpokt: undefined,
    settlementResult: ClaimSettlementResult.fromPartial({})
  };
}
export const EventClaimSettled = {
  typeUrl: "/pocket.tokenomics.EventClaimSettled",
  encode(message: EventClaimSettled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofRequirement !== 0) {
      writer.uint32(16).int32(message.proofRequirement);
    }
    if (message.numRelays !== BigInt(0)) {
      writer.uint32(24).uint64(message.numRelays);
    }
    if (message.numClaimedComputeUnits !== BigInt(0)) {
      writer.uint32(32).uint64(message.numClaimedComputeUnits);
    }
    if (message.numEstimatedComputeUnits !== BigInt(0)) {
      writer.uint32(40).uint64(message.numEstimatedComputeUnits);
    }
    if (message.claimedUpokt !== undefined) {
      Coin.encode(message.claimedUpokt, writer.uint32(50).fork()).ldelim();
    }
    if (message.settlementResult !== undefined) {
      ClaimSettlementResult.encode(message.settlementResult, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimSettled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimSettled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofRequirement = reader.int32() as any;
          break;
        case 3:
          message.numRelays = reader.uint64();
          break;
        case 4:
          message.numClaimedComputeUnits = reader.uint64();
          break;
        case 5:
          message.numEstimatedComputeUnits = reader.uint64();
          break;
        case 6:
          message.claimedUpokt = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.settlementResult = ClaimSettlementResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventClaimSettled>): EventClaimSettled {
    const message = createBaseEventClaimSettled();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.proofRequirement = object.proofRequirement ?? 0;
    message.numRelays = object.numRelays !== undefined && object.numRelays !== null ? BigInt(object.numRelays.toString()) : BigInt(0);
    message.numClaimedComputeUnits = object.numClaimedComputeUnits !== undefined && object.numClaimedComputeUnits !== null ? BigInt(object.numClaimedComputeUnits.toString()) : BigInt(0);
    message.numEstimatedComputeUnits = object.numEstimatedComputeUnits !== undefined && object.numEstimatedComputeUnits !== null ? BigInt(object.numEstimatedComputeUnits.toString()) : BigInt(0);
    message.claimedUpokt = object.claimedUpokt !== undefined && object.claimedUpokt !== null ? Coin.fromPartial(object.claimedUpokt) : undefined;
    message.settlementResult = object.settlementResult !== undefined && object.settlementResult !== null ? ClaimSettlementResult.fromPartial(object.settlementResult) : undefined;
    return message;
  },
  fromAmino(object: EventClaimSettledAmino): EventClaimSettled {
    const message = createBaseEventClaimSettled();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    if (object.proof_requirement !== undefined && object.proof_requirement !== null) {
      message.proofRequirement = object.proof_requirement;
    }
    if (object.num_relays !== undefined && object.num_relays !== null) {
      message.numRelays = BigInt(object.num_relays);
    }
    if (object.num_claimed_compute_units !== undefined && object.num_claimed_compute_units !== null) {
      message.numClaimedComputeUnits = BigInt(object.num_claimed_compute_units);
    }
    if (object.num_estimated_compute_units !== undefined && object.num_estimated_compute_units !== null) {
      message.numEstimatedComputeUnits = BigInt(object.num_estimated_compute_units);
    }
    if (object.claimed_upokt !== undefined && object.claimed_upokt !== null) {
      message.claimedUpokt = Coin.fromAmino(object.claimed_upokt);
    }
    if (object.settlement_result !== undefined && object.settlement_result !== null) {
      message.settlementResult = ClaimSettlementResult.fromAmino(object.settlement_result);
    }
    return message;
  },
  toAmino(message: EventClaimSettled): EventClaimSettledAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.proof_requirement = message.proofRequirement ?? 0;
    obj.num_relays = message.numRelays ? message.numRelays?.toString() : "0";
    obj.num_claimed_compute_units = message.numClaimedComputeUnits ? message.numClaimedComputeUnits?.toString() : "0";
    obj.num_estimated_compute_units = message.numEstimatedComputeUnits ? message.numEstimatedComputeUnits?.toString() : "0";
    obj.claimed_upokt = message.claimedUpokt ? Coin.toAmino(message.claimedUpokt) : Coin.toAmino(Coin.fromPartial({}));
    obj.settlement_result = message.settlementResult ? ClaimSettlementResult.toAmino(message.settlementResult) : ClaimSettlementResult.toAmino(ClaimSettlementResult.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventClaimSettledAminoMsg): EventClaimSettled {
    return EventClaimSettled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimSettledProtoMsg): EventClaimSettled {
    return EventClaimSettled.decode(message.value);
  },
  toProto(message: EventClaimSettled): Uint8Array {
    return EventClaimSettled.encode(message).finish();
  },
  toProtoMsg(message: EventClaimSettled): EventClaimSettledProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.EventClaimSettled",
      value: EventClaimSettled.encode(message).finish()
    };
  }
};
function createBaseEventApplicationOverserviced(): EventApplicationOverserviced {
  return {
    applicationAddr: "",
    supplierOperatorAddr: "",
    expectedBurn: undefined,
    effectiveBurn: undefined
  };
}
export const EventApplicationOverserviced = {
  typeUrl: "/pocket.tokenomics.EventApplicationOverserviced",
  encode(message: EventApplicationOverserviced, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.applicationAddr !== "") {
      writer.uint32(10).string(message.applicationAddr);
    }
    if (message.supplierOperatorAddr !== "") {
      writer.uint32(18).string(message.supplierOperatorAddr);
    }
    if (message.expectedBurn !== undefined) {
      Coin.encode(message.expectedBurn, writer.uint32(26).fork()).ldelim();
    }
    if (message.effectiveBurn !== undefined) {
      Coin.encode(message.effectiveBurn, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventApplicationOverserviced {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApplicationOverserviced();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationAddr = reader.string();
          break;
        case 2:
          message.supplierOperatorAddr = reader.string();
          break;
        case 3:
          message.expectedBurn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.effectiveBurn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventApplicationOverserviced>): EventApplicationOverserviced {
    const message = createBaseEventApplicationOverserviced();
    message.applicationAddr = object.applicationAddr ?? "";
    message.supplierOperatorAddr = object.supplierOperatorAddr ?? "";
    message.expectedBurn = object.expectedBurn !== undefined && object.expectedBurn !== null ? Coin.fromPartial(object.expectedBurn) : undefined;
    message.effectiveBurn = object.effectiveBurn !== undefined && object.effectiveBurn !== null ? Coin.fromPartial(object.effectiveBurn) : undefined;
    return message;
  },
  fromAmino(object: EventApplicationOverservicedAmino): EventApplicationOverserviced {
    const message = createBaseEventApplicationOverserviced();
    if (object.application_addr !== undefined && object.application_addr !== null) {
      message.applicationAddr = object.application_addr;
    }
    if (object.supplier_operator_addr !== undefined && object.supplier_operator_addr !== null) {
      message.supplierOperatorAddr = object.supplier_operator_addr;
    }
    if (object.expected_burn !== undefined && object.expected_burn !== null) {
      message.expectedBurn = Coin.fromAmino(object.expected_burn);
    }
    if (object.effective_burn !== undefined && object.effective_burn !== null) {
      message.effectiveBurn = Coin.fromAmino(object.effective_burn);
    }
    return message;
  },
  toAmino(message: EventApplicationOverserviced): EventApplicationOverservicedAmino {
    const obj: any = {};
    obj.application_addr = message.applicationAddr === "" ? undefined : message.applicationAddr;
    obj.supplier_operator_addr = message.supplierOperatorAddr === "" ? undefined : message.supplierOperatorAddr;
    obj.expected_burn = message.expectedBurn ? Coin.toAmino(message.expectedBurn) : undefined;
    obj.effective_burn = message.effectiveBurn ? Coin.toAmino(message.effectiveBurn) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventApplicationOverservicedAminoMsg): EventApplicationOverserviced {
    return EventApplicationOverserviced.fromAmino(object.value);
  },
  fromProtoMsg(message: EventApplicationOverservicedProtoMsg): EventApplicationOverserviced {
    return EventApplicationOverserviced.decode(message.value);
  },
  toProto(message: EventApplicationOverserviced): Uint8Array {
    return EventApplicationOverserviced.encode(message).finish();
  },
  toProtoMsg(message: EventApplicationOverserviced): EventApplicationOverservicedProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.EventApplicationOverserviced",
      value: EventApplicationOverserviced.encode(message).finish()
    };
  }
};
function createBaseEventSupplierSlashed(): EventSupplierSlashed {
  return {
    claim: undefined,
    proofMissingPenalty: undefined
  };
}
export const EventSupplierSlashed = {
  typeUrl: "/pocket.tokenomics.EventSupplierSlashed",
  encode(message: EventSupplierSlashed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofMissingPenalty !== undefined) {
      Coin.encode(message.proofMissingPenalty, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSupplierSlashed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupplierSlashed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofMissingPenalty = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSupplierSlashed>): EventSupplierSlashed {
    const message = createBaseEventSupplierSlashed();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.proofMissingPenalty = object.proofMissingPenalty !== undefined && object.proofMissingPenalty !== null ? Coin.fromPartial(object.proofMissingPenalty) : undefined;
    return message;
  },
  fromAmino(object: EventSupplierSlashedAmino): EventSupplierSlashed {
    const message = createBaseEventSupplierSlashed();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    if (object.proof_missing_penalty !== undefined && object.proof_missing_penalty !== null) {
      message.proofMissingPenalty = Coin.fromAmino(object.proof_missing_penalty);
    }
    return message;
  },
  toAmino(message: EventSupplierSlashed): EventSupplierSlashedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : undefined;
    obj.proof_missing_penalty = message.proofMissingPenalty ? Coin.toAmino(message.proofMissingPenalty) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSupplierSlashedAminoMsg): EventSupplierSlashed {
    return EventSupplierSlashed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplierSlashedProtoMsg): EventSupplierSlashed {
    return EventSupplierSlashed.decode(message.value);
  },
  toProto(message: EventSupplierSlashed): Uint8Array {
    return EventSupplierSlashed.encode(message).finish();
  },
  toProtoMsg(message: EventSupplierSlashed): EventSupplierSlashedProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.EventSupplierSlashed",
      value: EventSupplierSlashed.encode(message).finish()
    };
  }
};
function createBaseEventClaimDiscarded(): EventClaimDiscarded {
  return {
    claim: undefined,
    error: ""
  };
}
export const EventClaimDiscarded = {
  typeUrl: "/pocket.tokenomics.EventClaimDiscarded",
  encode(message: EventClaimDiscarded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimDiscarded {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimDiscarded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventClaimDiscarded>): EventClaimDiscarded {
    const message = createBaseEventClaimDiscarded();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventClaimDiscardedAmino): EventClaimDiscarded {
    const message = createBaseEventClaimDiscarded();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventClaimDiscarded): EventClaimDiscardedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : undefined;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: EventClaimDiscardedAminoMsg): EventClaimDiscarded {
    return EventClaimDiscarded.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimDiscardedProtoMsg): EventClaimDiscarded {
    return EventClaimDiscarded.decode(message.value);
  },
  toProto(message: EventClaimDiscarded): Uint8Array {
    return EventClaimDiscarded.encode(message).finish();
  },
  toProtoMsg(message: EventClaimDiscarded): EventClaimDiscardedProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.EventClaimDiscarded",
      value: EventClaimDiscarded.encode(message).finish()
    };
  }
};
function createBaseEventApplicationReimbursementRequest(): EventApplicationReimbursementRequest {
  return {
    applicationAddr: "",
    supplierOperatorAddr: "",
    supplierOwnerAddr: "",
    serviceId: "",
    sessionId: "",
    amount: undefined
  };
}
export const EventApplicationReimbursementRequest = {
  typeUrl: "/pocket.tokenomics.EventApplicationReimbursementRequest",
  encode(message: EventApplicationReimbursementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.applicationAddr !== "") {
      writer.uint32(10).string(message.applicationAddr);
    }
    if (message.supplierOperatorAddr !== "") {
      writer.uint32(18).string(message.supplierOperatorAddr);
    }
    if (message.supplierOwnerAddr !== "") {
      writer.uint32(26).string(message.supplierOwnerAddr);
    }
    if (message.serviceId !== "") {
      writer.uint32(34).string(message.serviceId);
    }
    if (message.sessionId !== "") {
      writer.uint32(42).string(message.sessionId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventApplicationReimbursementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApplicationReimbursementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationAddr = reader.string();
          break;
        case 2:
          message.supplierOperatorAddr = reader.string();
          break;
        case 3:
          message.supplierOwnerAddr = reader.string();
          break;
        case 4:
          message.serviceId = reader.string();
          break;
        case 5:
          message.sessionId = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventApplicationReimbursementRequest>): EventApplicationReimbursementRequest {
    const message = createBaseEventApplicationReimbursementRequest();
    message.applicationAddr = object.applicationAddr ?? "";
    message.supplierOperatorAddr = object.supplierOperatorAddr ?? "";
    message.supplierOwnerAddr = object.supplierOwnerAddr ?? "";
    message.serviceId = object.serviceId ?? "";
    message.sessionId = object.sessionId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventApplicationReimbursementRequestAmino): EventApplicationReimbursementRequest {
    const message = createBaseEventApplicationReimbursementRequest();
    if (object.application_addr !== undefined && object.application_addr !== null) {
      message.applicationAddr = object.application_addr;
    }
    if (object.supplier_operator_addr !== undefined && object.supplier_operator_addr !== null) {
      message.supplierOperatorAddr = object.supplier_operator_addr;
    }
    if (object.supplier_owner_addr !== undefined && object.supplier_owner_addr !== null) {
      message.supplierOwnerAddr = object.supplier_owner_addr;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventApplicationReimbursementRequest): EventApplicationReimbursementRequestAmino {
    const obj: any = {};
    obj.application_addr = message.applicationAddr === "" ? undefined : message.applicationAddr;
    obj.supplier_operator_addr = message.supplierOperatorAddr === "" ? undefined : message.supplierOperatorAddr;
    obj.supplier_owner_addr = message.supplierOwnerAddr === "" ? undefined : message.supplierOwnerAddr;
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    obj.session_id = message.sessionId === "" ? undefined : message.sessionId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventApplicationReimbursementRequestAminoMsg): EventApplicationReimbursementRequest {
    return EventApplicationReimbursementRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventApplicationReimbursementRequestProtoMsg): EventApplicationReimbursementRequest {
    return EventApplicationReimbursementRequest.decode(message.value);
  },
  toProto(message: EventApplicationReimbursementRequest): Uint8Array {
    return EventApplicationReimbursementRequest.encode(message).finish();
  },
  toProtoMsg(message: EventApplicationReimbursementRequest): EventApplicationReimbursementRequestProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.EventApplicationReimbursementRequest",
      value: EventApplicationReimbursementRequest.encode(message).finish()
    };
  }
};