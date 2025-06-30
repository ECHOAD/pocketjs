//@ts-nocheck
import { Gateway, GatewayAmino, GatewaySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** EventGatewayStaked is emitted when a gateway is staked or up-staked. */
export interface EventGatewayStaked {
  /** The gateway that has been staked. */
  gateway?: Gateway;
  /** The end height of the session in which gateway was staked. */
  sessionEndHeight: bigint;
}
export interface EventGatewayStakedProtoMsg {
  typeUrl: "/pocket.gateway.EventGatewayStaked";
  value: Uint8Array;
}
/**
 * EventGatewayStaked is emitted when a gateway is staked or up-staked.
 * @name EventGatewayStakedAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.EventGatewayStaked
 */
export interface EventGatewayStakedAmino {
  /**
   * The gateway that has been staked.
   */
  gateway: GatewayAmino;
  /**
   * The end height of the session in which gateway was staked.
   */
  session_end_height: string;
}
export interface EventGatewayStakedAminoMsg {
  type: "/pocket.gateway.EventGatewayStaked";
  value: EventGatewayStakedAmino;
}
/** EventGatewayStaked is emitted when a gateway is staked or up-staked. */
export interface EventGatewayStakedSDKType {
  gateway?: GatewaySDKType;
  session_end_height: bigint;
}
/**
 * EventGatewayUnbondingBegin is emitted when a gateway begins unbonding.
 * It is triggered by the commitment of an unstake gateway message.
 * This event signals that a gateway has begun unbonding.
 * The unbonding period is determined by the shared param gateway_unbonding_period_sessions.
 */
export interface EventGatewayUnbondingBegin {
  gateway?: Gateway;
  /** The end height of the session in which the unbonding began. */
  sessionEndHeight: bigint;
  /** The height at which gateway unbonding will end. */
  unbondingEndHeight: bigint;
}
export interface EventGatewayUnbondingBeginProtoMsg {
  typeUrl: "/pocket.gateway.EventGatewayUnbondingBegin";
  value: Uint8Array;
}
/**
 * EventGatewayUnbondingBegin is emitted when a gateway begins unbonding.
 * It is triggered by the commitment of an unstake gateway message.
 * This event signals that a gateway has begun unbonding.
 * The unbonding period is determined by the shared param gateway_unbonding_period_sessions.
 * @name EventGatewayUnbondingBeginAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.EventGatewayUnbondingBegin
 */
export interface EventGatewayUnbondingBeginAmino {
  gateway: GatewayAmino;
  /**
   * The end height of the session in which the unbonding began.
   */
  session_end_height: string;
  /**
   * The height at which gateway unbonding will end.
   */
  unbonding_end_height: string;
}
export interface EventGatewayUnbondingBeginAminoMsg {
  type: "/pocket.gateway.EventGatewayUnbondingBegin";
  value: EventGatewayUnbondingBeginAmino;
}
/**
 * EventGatewayUnbondingBegin is emitted when a gateway begins unbonding.
 * It is triggered by the commitment of an unstake gateway message.
 * This event signals that a gateway has begun unbonding.
 * The unbonding period is determined by the shared param gateway_unbonding_period_sessions.
 */
export interface EventGatewayUnbondingBeginSDKType {
  gateway?: GatewaySDKType;
  session_end_height: bigint;
  unbonding_end_height: bigint;
}
/**
 * EventGatewayUnbondingEnd is emitted when a gateway has completed unbonding.
 * The unbonding period is determined by the shared param gateway_unbonding_period_sessions.
 */
export interface EventGatewayUnbondingEnd {
  /** The gateway that has completed unbonding. */
  gateway?: Gateway;
  /** The end height of the session in which the unbonding began. */
  sessionEndHeight: bigint;
  /** The height at which gateway unbonding will end. */
  unbondingEndHeight: bigint;
}
export interface EventGatewayUnbondingEndProtoMsg {
  typeUrl: "/pocket.gateway.EventGatewayUnbondingEnd";
  value: Uint8Array;
}
/**
 * EventGatewayUnbondingEnd is emitted when a gateway has completed unbonding.
 * The unbonding period is determined by the shared param gateway_unbonding_period_sessions.
 * @name EventGatewayUnbondingEndAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.EventGatewayUnbondingEnd
 */
export interface EventGatewayUnbondingEndAmino {
  /**
   * The gateway that has completed unbonding.
   */
  gateway: GatewayAmino;
  /**
   * The end height of the session in which the unbonding began.
   */
  session_end_height: string;
  /**
   * The height at which gateway unbonding will end.
   */
  unbonding_end_height: string;
}
export interface EventGatewayUnbondingEndAminoMsg {
  type: "/pocket.gateway.EventGatewayUnbondingEnd";
  value: EventGatewayUnbondingEndAmino;
}
/**
 * EventGatewayUnbondingEnd is emitted when a gateway has completed unbonding.
 * The unbonding period is determined by the shared param gateway_unbonding_period_sessions.
 */
export interface EventGatewayUnbondingEndSDKType {
  gateway?: GatewaySDKType;
  session_end_height: bigint;
  unbonding_end_height: bigint;
}
/**
 * EventGatewayUnbondingCanceled is emitted when a gateway which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed.
 * An EventGatewayStaked event will also be emitted immediately after this event.
 */
export interface EventGatewayUnbondingCanceled {
  gateway?: Gateway;
  /** The end height of the session in which the unbonding was canceled. */
  sessionEndHeight: bigint;
}
export interface EventGatewayUnbondingCanceledProtoMsg {
  typeUrl: "/pocket.gateway.EventGatewayUnbondingCanceled";
  value: Uint8Array;
}
/**
 * EventGatewayUnbondingCanceled is emitted when a gateway which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed.
 * An EventGatewayStaked event will also be emitted immediately after this event.
 * @name EventGatewayUnbondingCanceledAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.EventGatewayUnbondingCanceled
 */
export interface EventGatewayUnbondingCanceledAmino {
  gateway: GatewayAmino;
  /**
   * The end height of the session in which the unbonding was canceled.
   */
  session_end_height: string;
}
export interface EventGatewayUnbondingCanceledAminoMsg {
  type: "/pocket.gateway.EventGatewayUnbondingCanceled";
  value: EventGatewayUnbondingCanceledAmino;
}
/**
 * EventGatewayUnbondingCanceled is emitted when a gateway which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed.
 * An EventGatewayStaked event will also be emitted immediately after this event.
 */
export interface EventGatewayUnbondingCanceledSDKType {
  gateway?: GatewaySDKType;
  session_end_height: bigint;
}
function createBaseEventGatewayStaked(): EventGatewayStaked {
  return {
    gateway: undefined,
    sessionEndHeight: BigInt(0)
  };
}
export const EventGatewayStaked = {
  typeUrl: "/pocket.gateway.EventGatewayStaked",
  encode(message: EventGatewayStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGatewayStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGatewayStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateway = Gateway.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventGatewayStaked>): EventGatewayStaked {
    const message = createBaseEventGatewayStaked();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventGatewayStakedAmino): EventGatewayStaked {
    const message = createBaseEventGatewayStaked();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventGatewayStaked): EventGatewayStakedAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : Gateway.toAmino(Gateway.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventGatewayStakedAminoMsg): EventGatewayStaked {
    return EventGatewayStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGatewayStakedProtoMsg): EventGatewayStaked {
    return EventGatewayStaked.decode(message.value);
  },
  toProto(message: EventGatewayStaked): Uint8Array {
    return EventGatewayStaked.encode(message).finish();
  },
  toProtoMsg(message: EventGatewayStaked): EventGatewayStakedProtoMsg {
    return {
      typeUrl: "/pocket.gateway.EventGatewayStaked",
      value: EventGatewayStaked.encode(message).finish()
    };
  }
};
function createBaseEventGatewayUnbondingBegin(): EventGatewayUnbondingBegin {
  return {
    gateway: undefined,
    sessionEndHeight: BigInt(0),
    unbondingEndHeight: BigInt(0)
  };
}
export const EventGatewayUnbondingBegin = {
  typeUrl: "/pocket.gateway.EventGatewayUnbondingBegin",
  encode(message: EventGatewayUnbondingBegin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionEndHeight);
    }
    if (message.unbondingEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.unbondingEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGatewayUnbondingBegin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGatewayUnbondingBegin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateway = Gateway.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventGatewayUnbondingBegin>): EventGatewayUnbondingBegin {
    const message = createBaseEventGatewayUnbondingBegin();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.unbondingEndHeight = object.unbondingEndHeight !== undefined && object.unbondingEndHeight !== null ? BigInt(object.unbondingEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventGatewayUnbondingBeginAmino): EventGatewayUnbondingBegin {
    const message = createBaseEventGatewayUnbondingBegin();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.unbonding_end_height !== undefined && object.unbonding_end_height !== null) {
      message.unbondingEndHeight = BigInt(object.unbonding_end_height);
    }
    return message;
  },
  toAmino(message: EventGatewayUnbondingBegin): EventGatewayUnbondingBeginAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : Gateway.toAmino(Gateway.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.unbonding_end_height = message.unbondingEndHeight ? message.unbondingEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventGatewayUnbondingBeginAminoMsg): EventGatewayUnbondingBegin {
    return EventGatewayUnbondingBegin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGatewayUnbondingBeginProtoMsg): EventGatewayUnbondingBegin {
    return EventGatewayUnbondingBegin.decode(message.value);
  },
  toProto(message: EventGatewayUnbondingBegin): Uint8Array {
    return EventGatewayUnbondingBegin.encode(message).finish();
  },
  toProtoMsg(message: EventGatewayUnbondingBegin): EventGatewayUnbondingBeginProtoMsg {
    return {
      typeUrl: "/pocket.gateway.EventGatewayUnbondingBegin",
      value: EventGatewayUnbondingBegin.encode(message).finish()
    };
  }
};
function createBaseEventGatewayUnbondingEnd(): EventGatewayUnbondingEnd {
  return {
    gateway: undefined,
    sessionEndHeight: BigInt(0),
    unbondingEndHeight: BigInt(0)
  };
}
export const EventGatewayUnbondingEnd = {
  typeUrl: "/pocket.gateway.EventGatewayUnbondingEnd",
  encode(message: EventGatewayUnbondingEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionEndHeight);
    }
    if (message.unbondingEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.unbondingEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGatewayUnbondingEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGatewayUnbondingEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateway = Gateway.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventGatewayUnbondingEnd>): EventGatewayUnbondingEnd {
    const message = createBaseEventGatewayUnbondingEnd();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.unbondingEndHeight = object.unbondingEndHeight !== undefined && object.unbondingEndHeight !== null ? BigInt(object.unbondingEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventGatewayUnbondingEndAmino): EventGatewayUnbondingEnd {
    const message = createBaseEventGatewayUnbondingEnd();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.unbonding_end_height !== undefined && object.unbonding_end_height !== null) {
      message.unbondingEndHeight = BigInt(object.unbonding_end_height);
    }
    return message;
  },
  toAmino(message: EventGatewayUnbondingEnd): EventGatewayUnbondingEndAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : Gateway.toAmino(Gateway.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.unbonding_end_height = message.unbondingEndHeight ? message.unbondingEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventGatewayUnbondingEndAminoMsg): EventGatewayUnbondingEnd {
    return EventGatewayUnbondingEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGatewayUnbondingEndProtoMsg): EventGatewayUnbondingEnd {
    return EventGatewayUnbondingEnd.decode(message.value);
  },
  toProto(message: EventGatewayUnbondingEnd): Uint8Array {
    return EventGatewayUnbondingEnd.encode(message).finish();
  },
  toProtoMsg(message: EventGatewayUnbondingEnd): EventGatewayUnbondingEndProtoMsg {
    return {
      typeUrl: "/pocket.gateway.EventGatewayUnbondingEnd",
      value: EventGatewayUnbondingEnd.encode(message).finish()
    };
  }
};
function createBaseEventGatewayUnbondingCanceled(): EventGatewayUnbondingCanceled {
  return {
    gateway: undefined,
    sessionEndHeight: BigInt(0)
  };
}
export const EventGatewayUnbondingCanceled = {
  typeUrl: "/pocket.gateway.EventGatewayUnbondingCanceled",
  encode(message: EventGatewayUnbondingCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGatewayUnbondingCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGatewayUnbondingCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gateway = Gateway.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventGatewayUnbondingCanceled>): EventGatewayUnbondingCanceled {
    const message = createBaseEventGatewayUnbondingCanceled();
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventGatewayUnbondingCanceledAmino): EventGatewayUnbondingCanceled {
    const message = createBaseEventGatewayUnbondingCanceled();
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventGatewayUnbondingCanceled): EventGatewayUnbondingCanceledAmino {
    const obj: any = {};
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : Gateway.toAmino(Gateway.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventGatewayUnbondingCanceledAminoMsg): EventGatewayUnbondingCanceled {
    return EventGatewayUnbondingCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGatewayUnbondingCanceledProtoMsg): EventGatewayUnbondingCanceled {
    return EventGatewayUnbondingCanceled.decode(message.value);
  },
  toProto(message: EventGatewayUnbondingCanceled): Uint8Array {
    return EventGatewayUnbondingCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventGatewayUnbondingCanceled): EventGatewayUnbondingCanceledProtoMsg {
    return {
      typeUrl: "/pocket.gateway.EventGatewayUnbondingCanceled",
      value: EventGatewayUnbondingCanceled.encode(message).finish()
    };
  }
};