//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * proof_request_probability is the probability of a session requiring a proof
   * if it's cost (i.e. compute unit consumption) is below the ProofRequirementThreshold.
   */
  proofRequestProbability: number;
  /**
   * proof_requirement_threshold is the session cost (i.e. compute unit consumption)
   * threshold which asserts that a session MUST have a corresponding proof when its cost
   * is equal to or above the threshold. This is in contrast to the this requirement
   * being determined probabilistically via ProofRequestProbability.
   * 
   * TODO_MAINNET_MIGRATION: Consider renaming this to `proof_requirement_threshold_upokt`.
   */
  proofRequirementThreshold?: Coin;
  /**
   * proof_missing_penalty is the number of tokens (uPOKT) which should be slashed from a supplier
   * when a proof is required (either via proof_requirement_threshold or proof_missing_penalty)
   * but is not provided.
   * TODO_MAINNET_MIGRATION: Consider renaming this to `proof_missing_penalty_upokt`.
   */
  proofMissingPenalty?: Coin;
  /**
   * proof_submission_fee is the number of tokens (uPOKT) which should be paid by
   * the supplier operator when submitting a proof.
   * This is needed to account for the cost of storing proofs onchain and prevent
   * spamming (i.e. sybil bloat attacks) the network with non-required proofs.
   * TODO_MAINNET_MIGRATION: Consider renaming this to `proof_submission_fee_upokt`.
   */
  proofSubmissionFee?: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.proof.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.Params
 */
export interface ParamsAmino {
  /**
   * proof_request_probability is the probability of a session requiring a proof
   * if it's cost (i.e. compute unit consumption) is below the ProofRequirementThreshold.
   */
  proof_request_probability: number;
  /**
   * proof_requirement_threshold is the session cost (i.e. compute unit consumption)
   * threshold which asserts that a session MUST have a corresponding proof when its cost
   * is equal to or above the threshold. This is in contrast to the this requirement
   * being determined probabilistically via ProofRequestProbability.
   * 
   * TODO_MAINNET_MIGRATION: Consider renaming this to `proof_requirement_threshold_upokt`.
   */
  proof_requirement_threshold: CoinAmino;
  /**
   * proof_missing_penalty is the number of tokens (uPOKT) which should be slashed from a supplier
   * when a proof is required (either via proof_requirement_threshold or proof_missing_penalty)
   * but is not provided.
   * TODO_MAINNET_MIGRATION: Consider renaming this to `proof_missing_penalty_upokt`.
   */
  proof_missing_penalty: CoinAmino;
  /**
   * proof_submission_fee is the number of tokens (uPOKT) which should be paid by
   * the supplier operator when submitting a proof.
   * This is needed to account for the cost of storing proofs onchain and prevent
   * spamming (i.e. sybil bloat attacks) the network with non-required proofs.
   * TODO_MAINNET_MIGRATION: Consider renaming this to `proof_submission_fee_upokt`.
   */
  proof_submission_fee: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "pocket/x/proof/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  proof_request_probability: number;
  proof_requirement_threshold?: CoinSDKType;
  proof_missing_penalty?: CoinSDKType;
  proof_submission_fee?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    proofRequestProbability: 0,
    proofRequirementThreshold: undefined,
    proofMissingPenalty: undefined,
    proofSubmissionFee: undefined
  };
}
export const Params = {
  typeUrl: "/pocket.proof.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proofRequestProbability !== 0) {
      writer.uint32(17).double(message.proofRequestProbability);
    }
    if (message.proofRequirementThreshold !== undefined) {
      Coin.encode(message.proofRequirementThreshold, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofMissingPenalty !== undefined) {
      Coin.encode(message.proofMissingPenalty, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofSubmissionFee !== undefined) {
      Coin.encode(message.proofSubmissionFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.proofRequestProbability = reader.double();
          break;
        case 3:
          message.proofRequirementThreshold = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofMissingPenalty = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofSubmissionFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.proofRequestProbability = object.proofRequestProbability ?? 0;
    message.proofRequirementThreshold = object.proofRequirementThreshold !== undefined && object.proofRequirementThreshold !== null ? Coin.fromPartial(object.proofRequirementThreshold) : undefined;
    message.proofMissingPenalty = object.proofMissingPenalty !== undefined && object.proofMissingPenalty !== null ? Coin.fromPartial(object.proofMissingPenalty) : undefined;
    message.proofSubmissionFee = object.proofSubmissionFee !== undefined && object.proofSubmissionFee !== null ? Coin.fromPartial(object.proofSubmissionFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.proof_request_probability !== undefined && object.proof_request_probability !== null) {
      message.proofRequestProbability = object.proof_request_probability;
    }
    if (object.proof_requirement_threshold !== undefined && object.proof_requirement_threshold !== null) {
      message.proofRequirementThreshold = Coin.fromAmino(object.proof_requirement_threshold);
    }
    if (object.proof_missing_penalty !== undefined && object.proof_missing_penalty !== null) {
      message.proofMissingPenalty = Coin.fromAmino(object.proof_missing_penalty);
    }
    if (object.proof_submission_fee !== undefined && object.proof_submission_fee !== null) {
      message.proofSubmissionFee = Coin.fromAmino(object.proof_submission_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.proof_request_probability = message.proofRequestProbability ?? 0;
    obj.proof_requirement_threshold = message.proofRequirementThreshold ? Coin.toAmino(message.proofRequirementThreshold) : Coin.toAmino(Coin.fromPartial({}));
    obj.proof_missing_penalty = message.proofMissingPenalty ? Coin.toAmino(message.proofMissingPenalty) : Coin.toAmino(Coin.fromPartial({}));
    obj.proof_submission_fee = message.proofSubmissionFee ? Coin.toAmino(message.proofSubmissionFee) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/proof/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pocket.proof.Params",
      value: Params.encode(message).finish()
    };
  }
};