//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /** num_blocks_per_session is the number of blocks between the session start & end heights. */
  numBlocksPerSession: bigint;
  /**
   * grace_period_end_offset_blocks is the number of blocks, after the session end height,
   * during which the supplier can still service payable relays.
   * Suppliers will need to recreate a claim for the previous session (if already created) to
   * get paid for the additional relays.
   */
  gracePeriodEndOffsetBlocks: bigint;
  /**
   * claim_window_open_offset_blocks is the number of blocks after the session grace
   * period height, at which the claim window opens.
   */
  claimWindowOpenOffsetBlocks: bigint;
  /**
   * claim_window_close_offset_blocks is the number of blocks after the claim window
   * open height, at which the claim window closes.
   */
  claimWindowCloseOffsetBlocks: bigint;
  /**
   * proof_window_open_offset_blocks is the number of blocks after the claim window
   * close height, at which the proof window opens.
   */
  proofWindowOpenOffsetBlocks: bigint;
  /**
   * proof_window_close_offset_blocks is the number of blocks after the proof window
   * open height, at which the proof window closes.
   */
  proofWindowCloseOffsetBlocks: bigint;
  /**
   * supplier_unbonding_period_sessions is the number of sessions that a supplier must wait after
   * unstaking before their staked assets are moved to their account balance.
   * Onchain business logic requires, and ensures, that the corresponding block count of the unbonding
   * period will exceed the end of any active claim & proof lifecycles.
   */
  supplierUnbondingPeriodSessions: bigint;
  /**
   * application_unbonding_period_sessions is the number of sessions that an application must wait after
   * unstaking before their staked assets are moved to their account balance.
   * Onchain business logic requires, and ensures, that the corresponding block count of the
   * application unbonding period will exceed the end of its corresponding proof window close height.
   */
  applicationUnbondingPeriodSessions: bigint;
  /**
   * The amount of tokens that a compute unit should translate to when settling a session.
   * It is denominated in fractional uPOKT (1/compute_unit_cost_granularity)
   * DEV_NOTE: This used to be under x/tokenomics but has been moved here to avoid cyclic dependencies.
   */
  computeUnitsToTokensMultiplier: bigint;
  /**
   * gateway_unbonding_period_sessions is the number of sessions that a gateway must wait after
   * unstaking before their staked assets are moved to its account balance.
   */
  gatewayUnbondingPeriodSessions: bigint;
  /**
   * compute_unit_cost_granularity is the fraction of the base unit (uPOKT) used
   * to represent the smallest price of a single compute unit.
   * compute_unit_cost_granularity defines the smallest fraction of uPOKT that can represent
   * the cost of a single compute unit.
   * 
   * It acts as a denominator in the formula:
   * 
   *   compute_unit_cost_in_uPOKT = compute_units_to_tokens_multiplier / compute_unit_cost_granularity
   * 
   * This enables high-precision pricing of compute units using integer math.
   * For example:
   * 
   * +-------------------------------+---------------------------------------------+
   * | compute_unit_cost_granularity | compute_units_to_tokens_multiplier unit     |
   * +-------------------------------+---------------------------------------------+
   * | 1                             | uPOKT                                       |
   * | 1_000                         | nPOKT (nanoPOKT, 1e-3 uPOKT)                |
   * | 1_000_000                     | pPOKT (picoPOKT, 1e-6 uPOKT)                |
   * +-------------------------------+---------------------------------------------+
   * 
   * ⚠️ Note: This value is a configurable global network parameter (not a constant).
   * It must be a power of 10, allowing precise denomination shifts without affecting
   * ongoing sessions. This prevents sessions from settling using parameters that
   * were not in effect during their creation.
   */
  computeUnitCostGranularity: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.shared.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.Params
 */
export interface ParamsAmino {
  /**
   * num_blocks_per_session is the number of blocks between the session start & end heights.
   */
  num_blocks_per_session: string;
  /**
   * grace_period_end_offset_blocks is the number of blocks, after the session end height,
   * during which the supplier can still service payable relays.
   * Suppliers will need to recreate a claim for the previous session (if already created) to
   * get paid for the additional relays.
   */
  grace_period_end_offset_blocks: string;
  /**
   * claim_window_open_offset_blocks is the number of blocks after the session grace
   * period height, at which the claim window opens.
   */
  claim_window_open_offset_blocks: string;
  /**
   * claim_window_close_offset_blocks is the number of blocks after the claim window
   * open height, at which the claim window closes.
   */
  claim_window_close_offset_blocks: string;
  /**
   * proof_window_open_offset_blocks is the number of blocks after the claim window
   * close height, at which the proof window opens.
   */
  proof_window_open_offset_blocks: string;
  /**
   * proof_window_close_offset_blocks is the number of blocks after the proof window
   * open height, at which the proof window closes.
   */
  proof_window_close_offset_blocks: string;
  /**
   * supplier_unbonding_period_sessions is the number of sessions that a supplier must wait after
   * unstaking before their staked assets are moved to their account balance.
   * Onchain business logic requires, and ensures, that the corresponding block count of the unbonding
   * period will exceed the end of any active claim & proof lifecycles.
   */
  supplier_unbonding_period_sessions: string;
  /**
   * application_unbonding_period_sessions is the number of sessions that an application must wait after
   * unstaking before their staked assets are moved to their account balance.
   * Onchain business logic requires, and ensures, that the corresponding block count of the
   * application unbonding period will exceed the end of its corresponding proof window close height.
   */
  application_unbonding_period_sessions: string;
  /**
   * The amount of tokens that a compute unit should translate to when settling a session.
   * It is denominated in fractional uPOKT (1/compute_unit_cost_granularity)
   * DEV_NOTE: This used to be under x/tokenomics but has been moved here to avoid cyclic dependencies.
   */
  compute_units_to_tokens_multiplier: string;
  /**
   * gateway_unbonding_period_sessions is the number of sessions that a gateway must wait after
   * unstaking before their staked assets are moved to its account balance.
   */
  gateway_unbonding_period_sessions: string;
  /**
   * compute_unit_cost_granularity is the fraction of the base unit (uPOKT) used
   * to represent the smallest price of a single compute unit.
   * compute_unit_cost_granularity defines the smallest fraction of uPOKT that can represent
   * the cost of a single compute unit.
   * 
   * It acts as a denominator in the formula:
   * 
   *   compute_unit_cost_in_uPOKT = compute_units_to_tokens_multiplier / compute_unit_cost_granularity
   * 
   * This enables high-precision pricing of compute units using integer math.
   * For example:
   * 
   * +-------------------------------+---------------------------------------------+
   * | compute_unit_cost_granularity | compute_units_to_tokens_multiplier unit     |
   * +-------------------------------+---------------------------------------------+
   * | 1                             | uPOKT                                       |
   * | 1_000                         | nPOKT (nanoPOKT, 1e-3 uPOKT)                |
   * | 1_000_000                     | pPOKT (picoPOKT, 1e-6 uPOKT)                |
   * +-------------------------------+---------------------------------------------+
   * 
   * ⚠️ Note: This value is a configurable global network parameter (not a constant).
   * It must be a power of 10, allowing precise denomination shifts without affecting
   * ongoing sessions. This prevents sessions from settling using parameters that
   * were not in effect during their creation.
   */
  compute_unit_cost_granularity: string;
}
export interface ParamsAminoMsg {
  type: "pocket/x/shared/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  num_blocks_per_session: bigint;
  grace_period_end_offset_blocks: bigint;
  claim_window_open_offset_blocks: bigint;
  claim_window_close_offset_blocks: bigint;
  proof_window_open_offset_blocks: bigint;
  proof_window_close_offset_blocks: bigint;
  supplier_unbonding_period_sessions: bigint;
  application_unbonding_period_sessions: bigint;
  compute_units_to_tokens_multiplier: bigint;
  gateway_unbonding_period_sessions: bigint;
  compute_unit_cost_granularity: bigint;
}
function createBaseParams(): Params {
  return {
    numBlocksPerSession: BigInt(0),
    gracePeriodEndOffsetBlocks: BigInt(0),
    claimWindowOpenOffsetBlocks: BigInt(0),
    claimWindowCloseOffsetBlocks: BigInt(0),
    proofWindowOpenOffsetBlocks: BigInt(0),
    proofWindowCloseOffsetBlocks: BigInt(0),
    supplierUnbondingPeriodSessions: BigInt(0),
    applicationUnbondingPeriodSessions: BigInt(0),
    computeUnitsToTokensMultiplier: BigInt(0),
    gatewayUnbondingPeriodSessions: BigInt(0),
    computeUnitCostGranularity: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/pocket.shared.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numBlocksPerSession !== BigInt(0)) {
      writer.uint32(8).uint64(message.numBlocksPerSession);
    }
    if (message.gracePeriodEndOffsetBlocks !== BigInt(0)) {
      writer.uint32(16).uint64(message.gracePeriodEndOffsetBlocks);
    }
    if (message.claimWindowOpenOffsetBlocks !== BigInt(0)) {
      writer.uint32(24).uint64(message.claimWindowOpenOffsetBlocks);
    }
    if (message.claimWindowCloseOffsetBlocks !== BigInt(0)) {
      writer.uint32(32).uint64(message.claimWindowCloseOffsetBlocks);
    }
    if (message.proofWindowOpenOffsetBlocks !== BigInt(0)) {
      writer.uint32(40).uint64(message.proofWindowOpenOffsetBlocks);
    }
    if (message.proofWindowCloseOffsetBlocks !== BigInt(0)) {
      writer.uint32(48).uint64(message.proofWindowCloseOffsetBlocks);
    }
    if (message.supplierUnbondingPeriodSessions !== BigInt(0)) {
      writer.uint32(56).uint64(message.supplierUnbondingPeriodSessions);
    }
    if (message.applicationUnbondingPeriodSessions !== BigInt(0)) {
      writer.uint32(64).uint64(message.applicationUnbondingPeriodSessions);
    }
    if (message.computeUnitsToTokensMultiplier !== BigInt(0)) {
      writer.uint32(72).uint64(message.computeUnitsToTokensMultiplier);
    }
    if (message.gatewayUnbondingPeriodSessions !== BigInt(0)) {
      writer.uint32(80).uint64(message.gatewayUnbondingPeriodSessions);
    }
    if (message.computeUnitCostGranularity !== BigInt(0)) {
      writer.uint32(88).uint64(message.computeUnitCostGranularity);
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
        case 1:
          message.numBlocksPerSession = reader.uint64();
          break;
        case 2:
          message.gracePeriodEndOffsetBlocks = reader.uint64();
          break;
        case 3:
          message.claimWindowOpenOffsetBlocks = reader.uint64();
          break;
        case 4:
          message.claimWindowCloseOffsetBlocks = reader.uint64();
          break;
        case 5:
          message.proofWindowOpenOffsetBlocks = reader.uint64();
          break;
        case 6:
          message.proofWindowCloseOffsetBlocks = reader.uint64();
          break;
        case 7:
          message.supplierUnbondingPeriodSessions = reader.uint64();
          break;
        case 8:
          message.applicationUnbondingPeriodSessions = reader.uint64();
          break;
        case 9:
          message.computeUnitsToTokensMultiplier = reader.uint64();
          break;
        case 10:
          message.gatewayUnbondingPeriodSessions = reader.uint64();
          break;
        case 11:
          message.computeUnitCostGranularity = reader.uint64();
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
    message.numBlocksPerSession = object.numBlocksPerSession !== undefined && object.numBlocksPerSession !== null ? BigInt(object.numBlocksPerSession.toString()) : BigInt(0);
    message.gracePeriodEndOffsetBlocks = object.gracePeriodEndOffsetBlocks !== undefined && object.gracePeriodEndOffsetBlocks !== null ? BigInt(object.gracePeriodEndOffsetBlocks.toString()) : BigInt(0);
    message.claimWindowOpenOffsetBlocks = object.claimWindowOpenOffsetBlocks !== undefined && object.claimWindowOpenOffsetBlocks !== null ? BigInt(object.claimWindowOpenOffsetBlocks.toString()) : BigInt(0);
    message.claimWindowCloseOffsetBlocks = object.claimWindowCloseOffsetBlocks !== undefined && object.claimWindowCloseOffsetBlocks !== null ? BigInt(object.claimWindowCloseOffsetBlocks.toString()) : BigInt(0);
    message.proofWindowOpenOffsetBlocks = object.proofWindowOpenOffsetBlocks !== undefined && object.proofWindowOpenOffsetBlocks !== null ? BigInt(object.proofWindowOpenOffsetBlocks.toString()) : BigInt(0);
    message.proofWindowCloseOffsetBlocks = object.proofWindowCloseOffsetBlocks !== undefined && object.proofWindowCloseOffsetBlocks !== null ? BigInt(object.proofWindowCloseOffsetBlocks.toString()) : BigInt(0);
    message.supplierUnbondingPeriodSessions = object.supplierUnbondingPeriodSessions !== undefined && object.supplierUnbondingPeriodSessions !== null ? BigInt(object.supplierUnbondingPeriodSessions.toString()) : BigInt(0);
    message.applicationUnbondingPeriodSessions = object.applicationUnbondingPeriodSessions !== undefined && object.applicationUnbondingPeriodSessions !== null ? BigInt(object.applicationUnbondingPeriodSessions.toString()) : BigInt(0);
    message.computeUnitsToTokensMultiplier = object.computeUnitsToTokensMultiplier !== undefined && object.computeUnitsToTokensMultiplier !== null ? BigInt(object.computeUnitsToTokensMultiplier.toString()) : BigInt(0);
    message.gatewayUnbondingPeriodSessions = object.gatewayUnbondingPeriodSessions !== undefined && object.gatewayUnbondingPeriodSessions !== null ? BigInt(object.gatewayUnbondingPeriodSessions.toString()) : BigInt(0);
    message.computeUnitCostGranularity = object.computeUnitCostGranularity !== undefined && object.computeUnitCostGranularity !== null ? BigInt(object.computeUnitCostGranularity.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.num_blocks_per_session !== undefined && object.num_blocks_per_session !== null) {
      message.numBlocksPerSession = BigInt(object.num_blocks_per_session);
    }
    if (object.grace_period_end_offset_blocks !== undefined && object.grace_period_end_offset_blocks !== null) {
      message.gracePeriodEndOffsetBlocks = BigInt(object.grace_period_end_offset_blocks);
    }
    if (object.claim_window_open_offset_blocks !== undefined && object.claim_window_open_offset_blocks !== null) {
      message.claimWindowOpenOffsetBlocks = BigInt(object.claim_window_open_offset_blocks);
    }
    if (object.claim_window_close_offset_blocks !== undefined && object.claim_window_close_offset_blocks !== null) {
      message.claimWindowCloseOffsetBlocks = BigInt(object.claim_window_close_offset_blocks);
    }
    if (object.proof_window_open_offset_blocks !== undefined && object.proof_window_open_offset_blocks !== null) {
      message.proofWindowOpenOffsetBlocks = BigInt(object.proof_window_open_offset_blocks);
    }
    if (object.proof_window_close_offset_blocks !== undefined && object.proof_window_close_offset_blocks !== null) {
      message.proofWindowCloseOffsetBlocks = BigInt(object.proof_window_close_offset_blocks);
    }
    if (object.supplier_unbonding_period_sessions !== undefined && object.supplier_unbonding_period_sessions !== null) {
      message.supplierUnbondingPeriodSessions = BigInt(object.supplier_unbonding_period_sessions);
    }
    if (object.application_unbonding_period_sessions !== undefined && object.application_unbonding_period_sessions !== null) {
      message.applicationUnbondingPeriodSessions = BigInt(object.application_unbonding_period_sessions);
    }
    if (object.compute_units_to_tokens_multiplier !== undefined && object.compute_units_to_tokens_multiplier !== null) {
      message.computeUnitsToTokensMultiplier = BigInt(object.compute_units_to_tokens_multiplier);
    }
    if (object.gateway_unbonding_period_sessions !== undefined && object.gateway_unbonding_period_sessions !== null) {
      message.gatewayUnbondingPeriodSessions = BigInt(object.gateway_unbonding_period_sessions);
    }
    if (object.compute_unit_cost_granularity !== undefined && object.compute_unit_cost_granularity !== null) {
      message.computeUnitCostGranularity = BigInt(object.compute_unit_cost_granularity);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.num_blocks_per_session = message.numBlocksPerSession ? message.numBlocksPerSession?.toString() : "0";
    obj.grace_period_end_offset_blocks = message.gracePeriodEndOffsetBlocks ? message.gracePeriodEndOffsetBlocks?.toString() : "0";
    obj.claim_window_open_offset_blocks = message.claimWindowOpenOffsetBlocks ? message.claimWindowOpenOffsetBlocks?.toString() : "0";
    obj.claim_window_close_offset_blocks = message.claimWindowCloseOffsetBlocks ? message.claimWindowCloseOffsetBlocks?.toString() : "0";
    obj.proof_window_open_offset_blocks = message.proofWindowOpenOffsetBlocks ? message.proofWindowOpenOffsetBlocks?.toString() : "0";
    obj.proof_window_close_offset_blocks = message.proofWindowCloseOffsetBlocks ? message.proofWindowCloseOffsetBlocks?.toString() : "0";
    obj.supplier_unbonding_period_sessions = message.supplierUnbondingPeriodSessions ? message.supplierUnbondingPeriodSessions?.toString() : "0";
    obj.application_unbonding_period_sessions = message.applicationUnbondingPeriodSessions ? message.applicationUnbondingPeriodSessions?.toString() : "0";
    obj.compute_units_to_tokens_multiplier = message.computeUnitsToTokensMultiplier ? message.computeUnitsToTokensMultiplier?.toString() : "0";
    obj.gateway_unbonding_period_sessions = message.gatewayUnbondingPeriodSessions ? message.gatewayUnbondingPeriodSessions?.toString() : "0";
    obj.compute_unit_cost_granularity = message.computeUnitCostGranularity ? message.computeUnitCostGranularity?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/shared/Params",
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
      typeUrl: "/pocket.shared.Params",
      value: Params.encode(message).finish()
    };
  }
};