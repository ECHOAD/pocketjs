//@ts-nocheck
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum SupplierUnbondingReason {
  SUPPLIER_UNBONDING_REASON_UNSPECIFIED = 0,
  SUPPLIER_UNBONDING_REASON_VOLUNTARY = 1,
  SUPPLIER_UNBONDING_REASON_BELOW_MIN_STAKE = 2,
  SUPPLIER_UNBONDING_REASON_MIGRATION = 3,
  UNRECOGNIZED = -1,
}
export const SupplierUnbondingReasonSDKType = SupplierUnbondingReason;
export const SupplierUnbondingReasonAmino = SupplierUnbondingReason;
export function supplierUnbondingReasonFromJSON(object: any): SupplierUnbondingReason {
  switch (object) {
    case 0:
    case "SUPPLIER_UNBONDING_REASON_UNSPECIFIED":
      return SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_UNSPECIFIED;
    case 1:
    case "SUPPLIER_UNBONDING_REASON_VOLUNTARY":
      return SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_VOLUNTARY;
    case 2:
    case "SUPPLIER_UNBONDING_REASON_BELOW_MIN_STAKE":
      return SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_BELOW_MIN_STAKE;
    case 3:
    case "SUPPLIER_UNBONDING_REASON_MIGRATION":
      return SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_MIGRATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SupplierUnbondingReason.UNRECOGNIZED;
  }
}
export function supplierUnbondingReasonToJSON(object: SupplierUnbondingReason): string {
  switch (object) {
    case SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_UNSPECIFIED:
      return "SUPPLIER_UNBONDING_REASON_UNSPECIFIED";
    case SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_VOLUNTARY:
      return "SUPPLIER_UNBONDING_REASON_VOLUNTARY";
    case SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_BELOW_MIN_STAKE:
      return "SUPPLIER_UNBONDING_REASON_BELOW_MIN_STAKE";
    case SupplierUnbondingReason.SUPPLIER_UNBONDING_REASON_MIGRATION:
      return "SUPPLIER_UNBONDING_REASON_MIGRATION";
    case SupplierUnbondingReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** EventSupplierStaked is emitted when a supplier stake message is committed onchain. */
export interface EventSupplierStaked {
  supplier?: Supplier;
  /** The session end height of the last session in which the supplier was staked. */
  sessionEndHeight: bigint;
}
export interface EventSupplierStakedProtoMsg {
  typeUrl: "/pocket.supplier.EventSupplierStaked";
  value: Uint8Array;
}
/**
 * EventSupplierStaked is emitted when a supplier stake message is committed onchain.
 * @name EventSupplierStakedAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.EventSupplierStaked
 */
export interface EventSupplierStakedAmino {
  supplier: SupplierAmino;
  /**
   * The session end height of the last session in which the supplier was staked.
   */
  session_end_height: string;
}
export interface EventSupplierStakedAminoMsg {
  type: "/pocket.supplier.EventSupplierStaked";
  value: EventSupplierStakedAmino;
}
/** EventSupplierStaked is emitted when a supplier stake message is committed onchain. */
export interface EventSupplierStakedSDKType {
  supplier?: SupplierSDKType;
  session_end_height: bigint;
}
/**
 * EventSupplierUnbondingBegin is emitted when an application unstake message
 * is committed onchain, indicating that the supplier will now begin unbonding.
 */
export interface EventSupplierUnbondingBegin {
  supplier?: Supplier;
  reason: SupplierUnbondingReason;
  /** The session end height of the last session in which the supplier unbonding began. */
  sessionEndHeight: bigint;
  /** The height at which supplier unbonding will end. */
  unbondingEndHeight: bigint;
}
export interface EventSupplierUnbondingBeginProtoMsg {
  typeUrl: "/pocket.supplier.EventSupplierUnbondingBegin";
  value: Uint8Array;
}
/**
 * EventSupplierUnbondingBegin is emitted when an application unstake message
 * is committed onchain, indicating that the supplier will now begin unbonding.
 * @name EventSupplierUnbondingBeginAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.EventSupplierUnbondingBegin
 */
export interface EventSupplierUnbondingBeginAmino {
  supplier: SupplierAmino;
  reason: SupplierUnbondingReason;
  /**
   * The session end height of the last session in which the supplier unbonding began.
   */
  session_end_height: string;
  /**
   * The height at which supplier unbonding will end.
   */
  unbonding_end_height: string;
}
export interface EventSupplierUnbondingBeginAminoMsg {
  type: "/pocket.supplier.EventSupplierUnbondingBegin";
  value: EventSupplierUnbondingBeginAmino;
}
/**
 * EventSupplierUnbondingBegin is emitted when an application unstake message
 * is committed onchain, indicating that the supplier will now begin unbonding.
 */
export interface EventSupplierUnbondingBeginSDKType {
  supplier?: SupplierSDKType;
  reason: SupplierUnbondingReason;
  session_end_height: bigint;
  unbonding_end_height: bigint;
}
/**
 * EventSupplierUnbondingEnd is emitted when an supplier has completed
 * unbonding. The unbonding period is determined by the shared param,
 * supplier_unbonding_period_sessions.
 */
export interface EventSupplierUnbondingEnd {
  supplier?: Supplier;
  reason: SupplierUnbondingReason;
  /** The session end height of the session in which the supplier unbonding endeded. */
  sessionEndHeight: bigint;
  /** The height at which supplier unbonding will end. */
  unbondingEndHeight: bigint;
}
export interface EventSupplierUnbondingEndProtoMsg {
  typeUrl: "/pocket.supplier.EventSupplierUnbondingEnd";
  value: Uint8Array;
}
/**
 * EventSupplierUnbondingEnd is emitted when an supplier has completed
 * unbonding. The unbonding period is determined by the shared param,
 * supplier_unbonding_period_sessions.
 * @name EventSupplierUnbondingEndAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.EventSupplierUnbondingEnd
 */
export interface EventSupplierUnbondingEndAmino {
  supplier: SupplierAmino;
  reason: SupplierUnbondingReason;
  /**
   * The session end height of the session in which the supplier unbonding endeded.
   */
  session_end_height: string;
  /**
   * The height at which supplier unbonding will end.
   */
  unbonding_end_height: string;
}
export interface EventSupplierUnbondingEndAminoMsg {
  type: "/pocket.supplier.EventSupplierUnbondingEnd";
  value: EventSupplierUnbondingEndAmino;
}
/**
 * EventSupplierUnbondingEnd is emitted when an supplier has completed
 * unbonding. The unbonding period is determined by the shared param,
 * supplier_unbonding_period_sessions.
 */
export interface EventSupplierUnbondingEndSDKType {
  supplier?: SupplierSDKType;
  reason: SupplierUnbondingReason;
  session_end_height: bigint;
  unbonding_end_height: bigint;
}
/**
 * EventSupplierUnbondingCanceled is emitted when an supplier which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed. An EventSupplierStaked
 * event will also be emitted immediately after this event.
 */
export interface EventSupplierUnbondingCanceled {
  supplier?: Supplier;
  /** The exact height at which the supplier unbonding was canceled. */
  height: bigint;
  /** The session end height of the session in which the supplier unbonding was canceled. */
  sessionEndHeight: bigint;
}
export interface EventSupplierUnbondingCanceledProtoMsg {
  typeUrl: "/pocket.supplier.EventSupplierUnbondingCanceled";
  value: Uint8Array;
}
/**
 * EventSupplierUnbondingCanceled is emitted when an supplier which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed. An EventSupplierStaked
 * event will also be emitted immediately after this event.
 * @name EventSupplierUnbondingCanceledAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.EventSupplierUnbondingCanceled
 */
export interface EventSupplierUnbondingCanceledAmino {
  supplier: SupplierAmino;
  /**
   * The exact height at which the supplier unbonding was canceled.
   */
  height: string;
  /**
   * The session end height of the session in which the supplier unbonding was canceled.
   */
  session_end_height: string;
}
export interface EventSupplierUnbondingCanceledAminoMsg {
  type: "/pocket.supplier.EventSupplierUnbondingCanceled";
  value: EventSupplierUnbondingCanceledAmino;
}
/**
 * EventSupplierUnbondingCanceled is emitted when an supplier which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed. An EventSupplierStaked
 * event will also be emitted immediately after this event.
 */
export interface EventSupplierUnbondingCanceledSDKType {
  supplier?: SupplierSDKType;
  height: bigint;
  session_end_height: bigint;
}
/**
 * EventSupplierServiceConfigActivated is emitted when a supplier service configuration
 * becomes effective at a specific block height.
 */
export interface EventSupplierServiceConfigActivated {
  /**
   * supplier contains the complete updated supplier information including the
   * active service configurations in supplier.Services.
   */
  supplier?: Supplier;
  /**
   * activation_height indicates the block height at which the new service
   * configurations became active.
   */
  activationHeight: bigint;
}
export interface EventSupplierServiceConfigActivatedProtoMsg {
  typeUrl: "/pocket.supplier.EventSupplierServiceConfigActivated";
  value: Uint8Array;
}
/**
 * EventSupplierServiceConfigActivated is emitted when a supplier service configuration
 * becomes effective at a specific block height.
 * @name EventSupplierServiceConfigActivatedAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.EventSupplierServiceConfigActivated
 */
export interface EventSupplierServiceConfigActivatedAmino {
  /**
   * supplier contains the complete updated supplier information including the
   * active service configurations in supplier.Services.
   */
  supplier: SupplierAmino;
  /**
   * activation_height indicates the block height at which the new service
   * configurations became active.
   */
  activation_height: string;
}
export interface EventSupplierServiceConfigActivatedAminoMsg {
  type: "/pocket.supplier.EventSupplierServiceConfigActivated";
  value: EventSupplierServiceConfigActivatedAmino;
}
/**
 * EventSupplierServiceConfigActivated is emitted when a supplier service configuration
 * becomes effective at a specific block height.
 */
export interface EventSupplierServiceConfigActivatedSDKType {
  supplier?: SupplierSDKType;
  activation_height: bigint;
}
function createBaseEventSupplierStaked(): EventSupplierStaked {
  return {
    supplier: undefined,
    sessionEndHeight: BigInt(0)
  };
}
export const EventSupplierStaked = {
  typeUrl: "/pocket.supplier.EventSupplierStaked",
  encode(message: EventSupplierStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSupplierStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupplierStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        case 2:
          message.sessionEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSupplierStaked>): EventSupplierStaked {
    const message = createBaseEventSupplierStaked();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSupplierStakedAmino): EventSupplierStaked {
    const message = createBaseEventSupplierStaked();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventSupplierStaked): EventSupplierStakedAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventSupplierStakedAminoMsg): EventSupplierStaked {
    return EventSupplierStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplierStakedProtoMsg): EventSupplierStaked {
    return EventSupplierStaked.decode(message.value);
  },
  toProto(message: EventSupplierStaked): Uint8Array {
    return EventSupplierStaked.encode(message).finish();
  },
  toProtoMsg(message: EventSupplierStaked): EventSupplierStakedProtoMsg {
    return {
      typeUrl: "/pocket.supplier.EventSupplierStaked",
      value: EventSupplierStaked.encode(message).finish()
    };
  }
};
function createBaseEventSupplierUnbondingBegin(): EventSupplierUnbondingBegin {
  return {
    supplier: undefined,
    reason: 0,
    sessionEndHeight: BigInt(0),
    unbondingEndHeight: BigInt(0)
  };
}
export const EventSupplierUnbondingBegin = {
  typeUrl: "/pocket.supplier.EventSupplierUnbondingBegin",
  encode(message: EventSupplierUnbondingBegin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionEndHeight);
    }
    if (message.unbondingEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.unbondingEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSupplierUnbondingBegin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupplierUnbondingBegin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        case 3:
          message.sessionEndHeight = reader.int64();
          break;
        case 4:
          message.unbondingEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSupplierUnbondingBegin>): EventSupplierUnbondingBegin {
    const message = createBaseEventSupplierUnbondingBegin();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    message.reason = object.reason ?? 0;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.unbondingEndHeight = object.unbondingEndHeight !== undefined && object.unbondingEndHeight !== null ? BigInt(object.unbondingEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSupplierUnbondingBeginAmino): EventSupplierUnbondingBegin {
    const message = createBaseEventSupplierUnbondingBegin();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.unbonding_end_height !== undefined && object.unbonding_end_height !== null) {
      message.unbondingEndHeight = BigInt(object.unbonding_end_height);
    }
    return message;
  },
  toAmino(message: EventSupplierUnbondingBegin): EventSupplierUnbondingBeginAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    obj.reason = message.reason ?? 0;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.unbonding_end_height = message.unbondingEndHeight ? message.unbondingEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventSupplierUnbondingBeginAminoMsg): EventSupplierUnbondingBegin {
    return EventSupplierUnbondingBegin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplierUnbondingBeginProtoMsg): EventSupplierUnbondingBegin {
    return EventSupplierUnbondingBegin.decode(message.value);
  },
  toProto(message: EventSupplierUnbondingBegin): Uint8Array {
    return EventSupplierUnbondingBegin.encode(message).finish();
  },
  toProtoMsg(message: EventSupplierUnbondingBegin): EventSupplierUnbondingBeginProtoMsg {
    return {
      typeUrl: "/pocket.supplier.EventSupplierUnbondingBegin",
      value: EventSupplierUnbondingBegin.encode(message).finish()
    };
  }
};
function createBaseEventSupplierUnbondingEnd(): EventSupplierUnbondingEnd {
  return {
    supplier: undefined,
    reason: 0,
    sessionEndHeight: BigInt(0),
    unbondingEndHeight: BigInt(0)
  };
}
export const EventSupplierUnbondingEnd = {
  typeUrl: "/pocket.supplier.EventSupplierUnbondingEnd",
  encode(message: EventSupplierUnbondingEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionEndHeight);
    }
    if (message.unbondingEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.unbondingEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSupplierUnbondingEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupplierUnbondingEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        case 3:
          message.sessionEndHeight = reader.int64();
          break;
        case 4:
          message.unbondingEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSupplierUnbondingEnd>): EventSupplierUnbondingEnd {
    const message = createBaseEventSupplierUnbondingEnd();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    message.reason = object.reason ?? 0;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.unbondingEndHeight = object.unbondingEndHeight !== undefined && object.unbondingEndHeight !== null ? BigInt(object.unbondingEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSupplierUnbondingEndAmino): EventSupplierUnbondingEnd {
    const message = createBaseEventSupplierUnbondingEnd();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.unbonding_end_height !== undefined && object.unbonding_end_height !== null) {
      message.unbondingEndHeight = BigInt(object.unbonding_end_height);
    }
    return message;
  },
  toAmino(message: EventSupplierUnbondingEnd): EventSupplierUnbondingEndAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    obj.reason = message.reason ?? 0;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.unbonding_end_height = message.unbondingEndHeight ? message.unbondingEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventSupplierUnbondingEndAminoMsg): EventSupplierUnbondingEnd {
    return EventSupplierUnbondingEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplierUnbondingEndProtoMsg): EventSupplierUnbondingEnd {
    return EventSupplierUnbondingEnd.decode(message.value);
  },
  toProto(message: EventSupplierUnbondingEnd): Uint8Array {
    return EventSupplierUnbondingEnd.encode(message).finish();
  },
  toProtoMsg(message: EventSupplierUnbondingEnd): EventSupplierUnbondingEndProtoMsg {
    return {
      typeUrl: "/pocket.supplier.EventSupplierUnbondingEnd",
      value: EventSupplierUnbondingEnd.encode(message).finish()
    };
  }
};
function createBaseEventSupplierUnbondingCanceled(): EventSupplierUnbondingCanceled {
  return {
    supplier: undefined,
    height: BigInt(0),
    sessionEndHeight: BigInt(0)
  };
}
export const EventSupplierUnbondingCanceled = {
  typeUrl: "/pocket.supplier.EventSupplierUnbondingCanceled",
  encode(message: EventSupplierUnbondingCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSupplierUnbondingCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupplierUnbondingCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 2:
          message.sessionEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSupplierUnbondingCanceled>): EventSupplierUnbondingCanceled {
    const message = createBaseEventSupplierUnbondingCanceled();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSupplierUnbondingCanceledAmino): EventSupplierUnbondingCanceled {
    const message = createBaseEventSupplierUnbondingCanceled();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventSupplierUnbondingCanceled): EventSupplierUnbondingCanceledAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    obj.height = message.height ? message.height?.toString() : "0";
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventSupplierUnbondingCanceledAminoMsg): EventSupplierUnbondingCanceled {
    return EventSupplierUnbondingCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplierUnbondingCanceledProtoMsg): EventSupplierUnbondingCanceled {
    return EventSupplierUnbondingCanceled.decode(message.value);
  },
  toProto(message: EventSupplierUnbondingCanceled): Uint8Array {
    return EventSupplierUnbondingCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventSupplierUnbondingCanceled): EventSupplierUnbondingCanceledProtoMsg {
    return {
      typeUrl: "/pocket.supplier.EventSupplierUnbondingCanceled",
      value: EventSupplierUnbondingCanceled.encode(message).finish()
    };
  }
};
function createBaseEventSupplierServiceConfigActivated(): EventSupplierServiceConfigActivated {
  return {
    supplier: undefined,
    activationHeight: BigInt(0)
  };
}
export const EventSupplierServiceConfigActivated = {
  typeUrl: "/pocket.supplier.EventSupplierServiceConfigActivated",
  encode(message: EventSupplierServiceConfigActivated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(10).fork()).ldelim();
    }
    if (message.activationHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.activationHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSupplierServiceConfigActivated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSupplierServiceConfigActivated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        case 2:
          message.activationHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventSupplierServiceConfigActivated>): EventSupplierServiceConfigActivated {
    const message = createBaseEventSupplierServiceConfigActivated();
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    message.activationHeight = object.activationHeight !== undefined && object.activationHeight !== null ? BigInt(object.activationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSupplierServiceConfigActivatedAmino): EventSupplierServiceConfigActivated {
    const message = createBaseEventSupplierServiceConfigActivated();
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    if (object.activation_height !== undefined && object.activation_height !== null) {
      message.activationHeight = BigInt(object.activation_height);
    }
    return message;
  },
  toAmino(message: EventSupplierServiceConfigActivated): EventSupplierServiceConfigActivatedAmino {
    const obj: any = {};
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    obj.activation_height = message.activationHeight ? message.activationHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventSupplierServiceConfigActivatedAminoMsg): EventSupplierServiceConfigActivated {
    return EventSupplierServiceConfigActivated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplierServiceConfigActivatedProtoMsg): EventSupplierServiceConfigActivated {
    return EventSupplierServiceConfigActivated.decode(message.value);
  },
  toProto(message: EventSupplierServiceConfigActivated): Uint8Array {
    return EventSupplierServiceConfigActivated.encode(message).finish();
  },
  toProtoMsg(message: EventSupplierServiceConfigActivated): EventSupplierServiceConfigActivatedProtoMsg {
    return {
      typeUrl: "/pocket.supplier.EventSupplierServiceConfigActivated",
      value: EventSupplierServiceConfigActivated.encode(message).finish()
    };
  }
};