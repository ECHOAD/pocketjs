//@ts-nocheck
import { Claim, ClaimAmino, ClaimSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface EventClaimCreated {
  claim?: Claim;
  numRelays: bigint;
  numClaimedComputeUnits: bigint;
  numEstimatedComputeUnits: bigint;
  claimedUpokt?: Coin;
}
export interface EventClaimCreatedProtoMsg {
  typeUrl: "/pocket.proof.EventClaimCreated";
  value: Uint8Array;
}
/**
 * @name EventClaimCreatedAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.EventClaimCreated
 */
export interface EventClaimCreatedAmino {
  claim: ClaimAmino;
  num_relays: string;
  num_claimed_compute_units: string;
  num_estimated_compute_units: string;
  claimed_upokt: CoinAmino;
}
export interface EventClaimCreatedAminoMsg {
  type: "/pocket.proof.EventClaimCreated";
  value: EventClaimCreatedAmino;
}
export interface EventClaimCreatedSDKType {
  claim?: ClaimSDKType;
  num_relays: bigint;
  num_claimed_compute_units: bigint;
  num_estimated_compute_units: bigint;
  claimed_upokt?: CoinSDKType;
}
/** TODO_TEST: Add coverage for claim updates. */
export interface EventClaimUpdated {
  claim?: Claim;
  numRelays: bigint;
  numClaimedComputeUnits: bigint;
  numEstimatedComputeUnits: bigint;
  claimedUpokt?: Coin;
}
export interface EventClaimUpdatedProtoMsg {
  typeUrl: "/pocket.proof.EventClaimUpdated";
  value: Uint8Array;
}
/**
 * TODO_TEST: Add coverage for claim updates.
 * @name EventClaimUpdatedAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.EventClaimUpdated
 */
export interface EventClaimUpdatedAmino {
  claim: ClaimAmino;
  num_relays: string;
  num_claimed_compute_units: string;
  num_estimated_compute_units: string;
  claimed_upokt: CoinAmino;
}
export interface EventClaimUpdatedAminoMsg {
  type: "/pocket.proof.EventClaimUpdated";
  value: EventClaimUpdatedAmino;
}
/** TODO_TEST: Add coverage for claim updates. */
export interface EventClaimUpdatedSDKType {
  claim?: ClaimSDKType;
  num_relays: bigint;
  num_claimed_compute_units: bigint;
  num_estimated_compute_units: bigint;
  claimed_upokt?: CoinSDKType;
}
export interface EventProofSubmitted {
  claim?: Claim;
  numRelays: bigint;
  numClaimedComputeUnits: bigint;
  numEstimatedComputeUnits: bigint;
  claimedUpokt?: Coin;
}
export interface EventProofSubmittedProtoMsg {
  typeUrl: "/pocket.proof.EventProofSubmitted";
  value: Uint8Array;
}
/**
 * @name EventProofSubmittedAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.EventProofSubmitted
 */
export interface EventProofSubmittedAmino {
  claim: ClaimAmino;
  num_relays: string;
  num_claimed_compute_units: string;
  num_estimated_compute_units: string;
  claimed_upokt: CoinAmino;
}
export interface EventProofSubmittedAminoMsg {
  type: "/pocket.proof.EventProofSubmitted";
  value: EventProofSubmittedAmino;
}
export interface EventProofSubmittedSDKType {
  claim?: ClaimSDKType;
  num_relays: bigint;
  num_claimed_compute_units: bigint;
  num_estimated_compute_units: bigint;
  claimed_upokt?: CoinSDKType;
}
/** TODO_TEST: Add coverage for proof updates. */
export interface EventProofUpdated {
  claim?: Claim;
  numRelays: bigint;
  numClaimedComputeUnits: bigint;
  numEstimatedComputeUnits: bigint;
  claimedUpokt?: Coin;
}
export interface EventProofUpdatedProtoMsg {
  typeUrl: "/pocket.proof.EventProofUpdated";
  value: Uint8Array;
}
/**
 * TODO_TEST: Add coverage for proof updates.
 * @name EventProofUpdatedAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.EventProofUpdated
 */
export interface EventProofUpdatedAmino {
  claim: ClaimAmino;
  num_relays: string;
  num_claimed_compute_units: string;
  num_estimated_compute_units: string;
  claimed_upokt: CoinAmino;
}
export interface EventProofUpdatedAminoMsg {
  type: "/pocket.proof.EventProofUpdated";
  value: EventProofUpdatedAmino;
}
/** TODO_TEST: Add coverage for proof updates. */
export interface EventProofUpdatedSDKType {
  claim?: ClaimSDKType;
  num_relays: bigint;
  num_claimed_compute_units: bigint;
  num_estimated_compute_units: bigint;
  claimed_upokt?: CoinSDKType;
}
/**
 * Event emitted after a proof has been checked for validity in the proof module's
 * EndBlocker.
 */
export interface EventProofValidityChecked {
  claim?: Claim;
  blockHeight: bigint;
  /**
   * reason is the string representation of the error that led to the proof being
   * marked as invalid (e.g. "invalid closest merkle proof", "invalid relay request signature")
   */
  failureReason: string;
}
export interface EventProofValidityCheckedProtoMsg {
  typeUrl: "/pocket.proof.EventProofValidityChecked";
  value: Uint8Array;
}
/**
 * Event emitted after a proof has been checked for validity in the proof module's
 * EndBlocker.
 * @name EventProofValidityCheckedAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.EventProofValidityChecked
 */
export interface EventProofValidityCheckedAmino {
  claim: ClaimAmino;
  block_height: string;
  /**
   * reason is the string representation of the error that led to the proof being
   * marked as invalid (e.g. "invalid closest merkle proof", "invalid relay request signature")
   */
  failure_reason: string;
}
export interface EventProofValidityCheckedAminoMsg {
  type: "/pocket.proof.EventProofValidityChecked";
  value: EventProofValidityCheckedAmino;
}
/**
 * Event emitted after a proof has been checked for validity in the proof module's
 * EndBlocker.
 */
export interface EventProofValidityCheckedSDKType {
  claim?: ClaimSDKType;
  block_height: bigint;
  failure_reason: string;
}
function createBaseEventClaimCreated(): EventClaimCreated {
  return {
    claim: undefined,
    numRelays: BigInt(0),
    numClaimedComputeUnits: BigInt(0),
    numEstimatedComputeUnits: BigInt(0),
    claimedUpokt: undefined
  };
}
export const EventClaimCreated = {
  typeUrl: "/pocket.proof.EventClaimCreated",
  encode(message: EventClaimCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.numRelays !== BigInt(0)) {
      writer.uint32(16).uint64(message.numRelays);
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
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
  fromPartial(object: Partial<EventClaimCreated>): EventClaimCreated {
    const message = createBaseEventClaimCreated();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.numRelays = object.numRelays !== undefined && object.numRelays !== null ? BigInt(object.numRelays.toString()) : BigInt(0);
    message.numClaimedComputeUnits = object.numClaimedComputeUnits !== undefined && object.numClaimedComputeUnits !== null ? BigInt(object.numClaimedComputeUnits.toString()) : BigInt(0);
    message.numEstimatedComputeUnits = object.numEstimatedComputeUnits !== undefined && object.numEstimatedComputeUnits !== null ? BigInt(object.numEstimatedComputeUnits.toString()) : BigInt(0);
    message.claimedUpokt = object.claimedUpokt !== undefined && object.claimedUpokt !== null ? Coin.fromPartial(object.claimedUpokt) : undefined;
    return message;
  },
  fromAmino(object: EventClaimCreatedAmino): EventClaimCreated {
    const message = createBaseEventClaimCreated();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
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
  toAmino(message: EventClaimCreated): EventClaimCreatedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.num_relays = message.numRelays ? message.numRelays?.toString() : "0";
    obj.num_claimed_compute_units = message.numClaimedComputeUnits ? message.numClaimedComputeUnits?.toString() : "0";
    obj.num_estimated_compute_units = message.numEstimatedComputeUnits ? message.numEstimatedComputeUnits?.toString() : "0";
    obj.claimed_upokt = message.claimedUpokt ? Coin.toAmino(message.claimedUpokt) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventClaimCreatedAminoMsg): EventClaimCreated {
    return EventClaimCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimCreatedProtoMsg): EventClaimCreated {
    return EventClaimCreated.decode(message.value);
  },
  toProto(message: EventClaimCreated): Uint8Array {
    return EventClaimCreated.encode(message).finish();
  },
  toProtoMsg(message: EventClaimCreated): EventClaimCreatedProtoMsg {
    return {
      typeUrl: "/pocket.proof.EventClaimCreated",
      value: EventClaimCreated.encode(message).finish()
    };
  }
};
function createBaseEventClaimUpdated(): EventClaimUpdated {
  return {
    claim: undefined,
    numRelays: BigInt(0),
    numClaimedComputeUnits: BigInt(0),
    numEstimatedComputeUnits: BigInt(0),
    claimedUpokt: undefined
  };
}
export const EventClaimUpdated = {
  typeUrl: "/pocket.proof.EventClaimUpdated",
  encode(message: EventClaimUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    if (message.numRelays !== BigInt(0)) {
      writer.uint32(16).uint64(message.numRelays);
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
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
  fromPartial(object: Partial<EventClaimUpdated>): EventClaimUpdated {
    const message = createBaseEventClaimUpdated();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.numRelays = object.numRelays !== undefined && object.numRelays !== null ? BigInt(object.numRelays.toString()) : BigInt(0);
    message.numClaimedComputeUnits = object.numClaimedComputeUnits !== undefined && object.numClaimedComputeUnits !== null ? BigInt(object.numClaimedComputeUnits.toString()) : BigInt(0);
    message.numEstimatedComputeUnits = object.numEstimatedComputeUnits !== undefined && object.numEstimatedComputeUnits !== null ? BigInt(object.numEstimatedComputeUnits.toString()) : BigInt(0);
    message.claimedUpokt = object.claimedUpokt !== undefined && object.claimedUpokt !== null ? Coin.fromPartial(object.claimedUpokt) : undefined;
    return message;
  },
  fromAmino(object: EventClaimUpdatedAmino): EventClaimUpdated {
    const message = createBaseEventClaimUpdated();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
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
  toAmino(message: EventClaimUpdated): EventClaimUpdatedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.num_relays = message.numRelays ? message.numRelays?.toString() : "0";
    obj.num_claimed_compute_units = message.numClaimedComputeUnits ? message.numClaimedComputeUnits?.toString() : "0";
    obj.num_estimated_compute_units = message.numEstimatedComputeUnits ? message.numEstimatedComputeUnits?.toString() : "0";
    obj.claimed_upokt = message.claimedUpokt ? Coin.toAmino(message.claimedUpokt) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventClaimUpdatedAminoMsg): EventClaimUpdated {
    return EventClaimUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimUpdatedProtoMsg): EventClaimUpdated {
    return EventClaimUpdated.decode(message.value);
  },
  toProto(message: EventClaimUpdated): Uint8Array {
    return EventClaimUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventClaimUpdated): EventClaimUpdatedProtoMsg {
    return {
      typeUrl: "/pocket.proof.EventClaimUpdated",
      value: EventClaimUpdated.encode(message).finish()
    };
  }
};
function createBaseEventProofSubmitted(): EventProofSubmitted {
  return {
    claim: undefined,
    numRelays: BigInt(0),
    numClaimedComputeUnits: BigInt(0),
    numEstimatedComputeUnits: BigInt(0),
    claimedUpokt: undefined
  };
}
export const EventProofSubmitted = {
  typeUrl: "/pocket.proof.EventProofSubmitted",
  encode(message: EventProofSubmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventProofSubmitted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProofSubmitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventProofSubmitted>): EventProofSubmitted {
    const message = createBaseEventProofSubmitted();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.numRelays = object.numRelays !== undefined && object.numRelays !== null ? BigInt(object.numRelays.toString()) : BigInt(0);
    message.numClaimedComputeUnits = object.numClaimedComputeUnits !== undefined && object.numClaimedComputeUnits !== null ? BigInt(object.numClaimedComputeUnits.toString()) : BigInt(0);
    message.numEstimatedComputeUnits = object.numEstimatedComputeUnits !== undefined && object.numEstimatedComputeUnits !== null ? BigInt(object.numEstimatedComputeUnits.toString()) : BigInt(0);
    message.claimedUpokt = object.claimedUpokt !== undefined && object.claimedUpokt !== null ? Coin.fromPartial(object.claimedUpokt) : undefined;
    return message;
  },
  fromAmino(object: EventProofSubmittedAmino): EventProofSubmitted {
    const message = createBaseEventProofSubmitted();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
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
  toAmino(message: EventProofSubmitted): EventProofSubmittedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.num_relays = message.numRelays ? message.numRelays?.toString() : "0";
    obj.num_claimed_compute_units = message.numClaimedComputeUnits ? message.numClaimedComputeUnits?.toString() : "0";
    obj.num_estimated_compute_units = message.numEstimatedComputeUnits ? message.numEstimatedComputeUnits?.toString() : "0";
    obj.claimed_upokt = message.claimedUpokt ? Coin.toAmino(message.claimedUpokt) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventProofSubmittedAminoMsg): EventProofSubmitted {
    return EventProofSubmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProofSubmittedProtoMsg): EventProofSubmitted {
    return EventProofSubmitted.decode(message.value);
  },
  toProto(message: EventProofSubmitted): Uint8Array {
    return EventProofSubmitted.encode(message).finish();
  },
  toProtoMsg(message: EventProofSubmitted): EventProofSubmittedProtoMsg {
    return {
      typeUrl: "/pocket.proof.EventProofSubmitted",
      value: EventProofSubmitted.encode(message).finish()
    };
  }
};
function createBaseEventProofUpdated(): EventProofUpdated {
  return {
    claim: undefined,
    numRelays: BigInt(0),
    numClaimedComputeUnits: BigInt(0),
    numEstimatedComputeUnits: BigInt(0),
    claimedUpokt: undefined
  };
}
export const EventProofUpdated = {
  typeUrl: "/pocket.proof.EventProofUpdated",
  encode(message: EventProofUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventProofUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProofUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventProofUpdated>): EventProofUpdated {
    const message = createBaseEventProofUpdated();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.numRelays = object.numRelays !== undefined && object.numRelays !== null ? BigInt(object.numRelays.toString()) : BigInt(0);
    message.numClaimedComputeUnits = object.numClaimedComputeUnits !== undefined && object.numClaimedComputeUnits !== null ? BigInt(object.numClaimedComputeUnits.toString()) : BigInt(0);
    message.numEstimatedComputeUnits = object.numEstimatedComputeUnits !== undefined && object.numEstimatedComputeUnits !== null ? BigInt(object.numEstimatedComputeUnits.toString()) : BigInt(0);
    message.claimedUpokt = object.claimedUpokt !== undefined && object.claimedUpokt !== null ? Coin.fromPartial(object.claimedUpokt) : undefined;
    return message;
  },
  fromAmino(object: EventProofUpdatedAmino): EventProofUpdated {
    const message = createBaseEventProofUpdated();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
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
  toAmino(message: EventProofUpdated): EventProofUpdatedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.num_relays = message.numRelays ? message.numRelays?.toString() : "0";
    obj.num_claimed_compute_units = message.numClaimedComputeUnits ? message.numClaimedComputeUnits?.toString() : "0";
    obj.num_estimated_compute_units = message.numEstimatedComputeUnits ? message.numEstimatedComputeUnits?.toString() : "0";
    obj.claimed_upokt = message.claimedUpokt ? Coin.toAmino(message.claimedUpokt) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventProofUpdatedAminoMsg): EventProofUpdated {
    return EventProofUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProofUpdatedProtoMsg): EventProofUpdated {
    return EventProofUpdated.decode(message.value);
  },
  toProto(message: EventProofUpdated): Uint8Array {
    return EventProofUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventProofUpdated): EventProofUpdatedProtoMsg {
    return {
      typeUrl: "/pocket.proof.EventProofUpdated",
      value: EventProofUpdated.encode(message).finish()
    };
  }
};
function createBaseEventProofValidityChecked(): EventProofValidityChecked {
  return {
    claim: undefined,
    blockHeight: BigInt(0),
    failureReason: ""
  };
}
export const EventProofValidityChecked = {
  typeUrl: "/pocket.proof.EventProofValidityChecked",
  encode(message: EventProofValidityChecked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(42).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.failureReason !== "") {
      writer.uint32(34).string(message.failureReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProofValidityChecked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProofValidityChecked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 4:
          message.failureReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventProofValidityChecked>): EventProofValidityChecked {
    const message = createBaseEventProofValidityChecked();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.failureReason = object.failureReason ?? "";
    return message;
  },
  fromAmino(object: EventProofValidityCheckedAmino): EventProofValidityChecked {
    const message = createBaseEventProofValidityChecked();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.failure_reason !== undefined && object.failure_reason !== null) {
      message.failureReason = object.failure_reason;
    }
    return message;
  },
  toAmino(message: EventProofValidityChecked): EventProofValidityCheckedAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    obj.block_height = message.blockHeight ? message.blockHeight?.toString() : "0";
    obj.failure_reason = message.failureReason ?? "";
    return obj;
  },
  fromAminoMsg(object: EventProofValidityCheckedAminoMsg): EventProofValidityChecked {
    return EventProofValidityChecked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProofValidityCheckedProtoMsg): EventProofValidityChecked {
    return EventProofValidityChecked.decode(message.value);
  },
  toProto(message: EventProofValidityChecked): Uint8Array {
    return EventProofValidityChecked.encode(message).finish();
  },
  toProtoMsg(message: EventProofValidityChecked): EventProofValidityCheckedProtoMsg {
    return {
      typeUrl: "/pocket.proof.EventProofValidityChecked",
      value: EventProofValidityChecked.encode(message).finish()
    };
  }
};