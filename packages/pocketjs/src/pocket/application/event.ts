//@ts-nocheck
import { Application, ApplicationAmino, ApplicationSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
export enum ApplicationUnbondingReason {
  APPLICATION_UNBONDING_REASON_ELECTIVE = 0,
  APPLICATION_UNBONDING_REASON_BELOW_MIN_STAKE = 1,
  APPLICATION_UNBONDING_REASON_MIGRATION = 2,
  UNRECOGNIZED = -1,
}
export const ApplicationUnbondingReasonSDKType = ApplicationUnbondingReason;
export const ApplicationUnbondingReasonAmino = ApplicationUnbondingReason;
export function applicationUnbondingReasonFromJSON(object: any): ApplicationUnbondingReason {
  switch (object) {
    case 0:
    case "APPLICATION_UNBONDING_REASON_ELECTIVE":
      return ApplicationUnbondingReason.APPLICATION_UNBONDING_REASON_ELECTIVE;
    case 1:
    case "APPLICATION_UNBONDING_REASON_BELOW_MIN_STAKE":
      return ApplicationUnbondingReason.APPLICATION_UNBONDING_REASON_BELOW_MIN_STAKE;
    case 2:
    case "APPLICATION_UNBONDING_REASON_MIGRATION":
      return ApplicationUnbondingReason.APPLICATION_UNBONDING_REASON_MIGRATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplicationUnbondingReason.UNRECOGNIZED;
  }
}
export function applicationUnbondingReasonToJSON(object: ApplicationUnbondingReason): string {
  switch (object) {
    case ApplicationUnbondingReason.APPLICATION_UNBONDING_REASON_ELECTIVE:
      return "APPLICATION_UNBONDING_REASON_ELECTIVE";
    case ApplicationUnbondingReason.APPLICATION_UNBONDING_REASON_BELOW_MIN_STAKE:
      return "APPLICATION_UNBONDING_REASON_BELOW_MIN_STAKE";
    case ApplicationUnbondingReason.APPLICATION_UNBONDING_REASON_MIGRATION:
      return "APPLICATION_UNBONDING_REASON_MIGRATION";
    case ApplicationUnbondingReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** EventApplicationStaked is emitted when an application is staked or up-staked. */
export interface EventApplicationStaked {
  application?: Application;
  /** The end height of the session in which the application was staked. */
  sessionEndHeight: bigint;
}
export interface EventApplicationStakedProtoMsg {
  typeUrl: "/pocket.application.EventApplicationStaked";
  value: Uint8Array;
}
/**
 * EventApplicationStaked is emitted when an application is staked or up-staked.
 * @name EventApplicationStakedAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventApplicationStaked
 */
export interface EventApplicationStakedAmino {
  application: ApplicationAmino;
  /**
   * The end height of the session in which the application was staked.
   */
  session_end_height: string;
}
export interface EventApplicationStakedAminoMsg {
  type: "/pocket.application.EventApplicationStaked";
  value: EventApplicationStakedAmino;
}
/** EventApplicationStaked is emitted when an application is staked or up-staked. */
export interface EventApplicationStakedSDKType {
  application?: ApplicationSDKType;
  session_end_height: bigint;
}
/**
 * EventRedelegation is an event emitted whenever an application changes its
 * delegatee gateways on chain. This is in response to both a DelegateToGateway
 * and UndelegateFromGateway message.
 */
export interface EventRedelegation {
  /** The application which was redelegated. */
  application?: Application;
  /** The end height of the session in which the redelegation was committed. */
  sessionEndHeight: bigint;
}
export interface EventRedelegationProtoMsg {
  typeUrl: "/pocket.application.EventRedelegation";
  value: Uint8Array;
}
/**
 * EventRedelegation is an event emitted whenever an application changes its
 * delegatee gateways on chain. This is in response to both a DelegateToGateway
 * and UndelegateFromGateway message.
 * @name EventRedelegationAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventRedelegation
 */
export interface EventRedelegationAmino {
  /**
   * The application which was redelegated.
   */
  application: ApplicationAmino;
  /**
   * The end height of the session in which the redelegation was committed.
   */
  session_end_height: string;
}
export interface EventRedelegationAminoMsg {
  type: "/pocket.application.EventRedelegation";
  value: EventRedelegationAmino;
}
/**
 * EventRedelegation is an event emitted whenever an application changes its
 * delegatee gateways on chain. This is in response to both a DelegateToGateway
 * and UndelegateFromGateway message.
 */
export interface EventRedelegationSDKType {
  application?: ApplicationSDKType;
  session_end_height: bigint;
}
/**
 * EventTransferBegin is emitted whenever an application begins a transfer. It
 * includes the source application state immediately after the transfer began.
 */
export interface EventTransferBegin {
  sourceAddress: string;
  destinationAddress: string;
  sourceApplication?: Application;
  /** The end height of the session in which the transfer began. */
  sessionEndHeight: bigint;
  /** The height at which the transfer will complete. */
  transferEndHeight: bigint;
}
export interface EventTransferBeginProtoMsg {
  typeUrl: "/pocket.application.EventTransferBegin";
  value: Uint8Array;
}
/**
 * EventTransferBegin is emitted whenever an application begins a transfer. It
 * includes the source application state immediately after the transfer began.
 * @name EventTransferBeginAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventTransferBegin
 */
export interface EventTransferBeginAmino {
  source_address?: string;
  destination_address?: string;
  source_application?: ApplicationAmino;
  /**
   * The end height of the session in which the transfer began.
   */
  session_end_height: string;
  /**
   * The height at which the transfer will complete.
   */
  transfer_end_height: string;
}
export interface EventTransferBeginAminoMsg {
  type: "/pocket.application.EventTransferBegin";
  value: EventTransferBeginAmino;
}
/**
 * EventTransferBegin is emitted whenever an application begins a transfer. It
 * includes the source application state immediately after the transfer began.
 */
export interface EventTransferBeginSDKType {
  source_address: string;
  destination_address: string;
  source_application?: ApplicationSDKType;
  session_end_height: bigint;
  transfer_end_height: bigint;
}
/**
 * EventTransferEnd is emitted whenever an application transfer is completed. It
 * includes the destination application state at the time the transfer completed.
 * Either EventTransferEnd or EventTransferError will be emitted corresponding to
 * any given EventTransferBegin event.
 */
export interface EventTransferEnd {
  sourceAddress: string;
  destinationAddress: string;
  destinationApplication?: Application;
  /** The end height of the session in which the transfer ended. */
  sessionEndHeight: bigint;
  /** The height at which the transfer completed. */
  transferEndHeight: bigint;
}
export interface EventTransferEndProtoMsg {
  typeUrl: "/pocket.application.EventTransferEnd";
  value: Uint8Array;
}
/**
 * EventTransferEnd is emitted whenever an application transfer is completed. It
 * includes the destination application state at the time the transfer completed.
 * Either EventTransferEnd or EventTransferError will be emitted corresponding to
 * any given EventTransferBegin event.
 * @name EventTransferEndAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventTransferEnd
 */
export interface EventTransferEndAmino {
  source_address?: string;
  destination_address?: string;
  destination_application?: ApplicationAmino;
  /**
   * The end height of the session in which the transfer ended.
   */
  session_end_height: string;
  /**
   * The height at which the transfer completed.
   */
  transfer_end_height: string;
}
export interface EventTransferEndAminoMsg {
  type: "/pocket.application.EventTransferEnd";
  value: EventTransferEndAmino;
}
/**
 * EventTransferEnd is emitted whenever an application transfer is completed. It
 * includes the destination application state at the time the transfer completed.
 * Either EventTransferEnd or EventTransferError will be emitted corresponding to
 * any given EventTransferBegin event.
 */
export interface EventTransferEndSDKType {
  source_address: string;
  destination_address: string;
  destination_application?: ApplicationSDKType;
  session_end_height: bigint;
  transfer_end_height: bigint;
}
/**
 * EventTransferError is emitted whenever an application transfer fails. It
 * includes the source application state at the time the transfer failed and
 * the error message.
 * Either EventTransferEnd or EventTransferError will be emitted corresponding to
 * any given EventTransferBegin event.
 */
export interface EventTransferError {
  sourceAddress: string;
  destinationAddress: string;
  sourceApplication?: Application;
  /** The end height of the session in which the transfer failed. */
  sessionEndHeight: bigint;
  error: string;
}
export interface EventTransferErrorProtoMsg {
  typeUrl: "/pocket.application.EventTransferError";
  value: Uint8Array;
}
/**
 * EventTransferError is emitted whenever an application transfer fails. It
 * includes the source application state at the time the transfer failed and
 * the error message.
 * Either EventTransferEnd or EventTransferError will be emitted corresponding to
 * any given EventTransferBegin event.
 * @name EventTransferErrorAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventTransferError
 */
export interface EventTransferErrorAmino {
  source_address?: string;
  destination_address?: string;
  source_application?: ApplicationAmino;
  /**
   * The end height of the session in which the transfer failed.
   */
  session_end_height: string;
  error?: string;
}
export interface EventTransferErrorAminoMsg {
  type: "/pocket.application.EventTransferError";
  value: EventTransferErrorAmino;
}
/**
 * EventTransferError is emitted whenever an application transfer fails. It
 * includes the source application state at the time the transfer failed and
 * the error message.
 * Either EventTransferEnd or EventTransferError will be emitted corresponding to
 * any given EventTransferBegin event.
 */
export interface EventTransferErrorSDKType {
  source_address: string;
  destination_address: string;
  source_application?: ApplicationSDKType;
  session_end_height: bigint;
  error: string;
}
/**
 * EventApplicationUnbondingBegin is emitted when an application begins unbonding.
 * This can be triggered by the commitment of an unstake message or by the application's
 * stake dropping below the minimum. This event signals that an application has begun
 * unbonding. The unbonding period is determined by the shared param,
 * application_unbonding_period_sessions.
 */
export interface EventApplicationUnbondingBegin {
  application?: Application;
  reason: ApplicationUnbondingReason;
  /** The end height of the session in which the unbonding began. */
  sessionEndHeight: bigint;
  /** The height at which application unbonding will end. */
  unbondingEndHeight: bigint;
}
export interface EventApplicationUnbondingBeginProtoMsg {
  typeUrl: "/pocket.application.EventApplicationUnbondingBegin";
  value: Uint8Array;
}
/**
 * EventApplicationUnbondingBegin is emitted when an application begins unbonding.
 * This can be triggered by the commitment of an unstake message or by the application's
 * stake dropping below the minimum. This event signals that an application has begun
 * unbonding. The unbonding period is determined by the shared param,
 * application_unbonding_period_sessions.
 * @name EventApplicationUnbondingBeginAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventApplicationUnbondingBegin
 */
export interface EventApplicationUnbondingBeginAmino {
  application: ApplicationAmino;
  reason: ApplicationUnbondingReason;
  /**
   * The end height of the session in which the unbonding began.
   */
  session_end_height: string;
  /**
   * The height at which application unbonding will end.
   */
  unbonding_end_height: string;
}
export interface EventApplicationUnbondingBeginAminoMsg {
  type: "/pocket.application.EventApplicationUnbondingBegin";
  value: EventApplicationUnbondingBeginAmino;
}
/**
 * EventApplicationUnbondingBegin is emitted when an application begins unbonding.
 * This can be triggered by the commitment of an unstake message or by the application's
 * stake dropping below the minimum. This event signals that an application has begun
 * unbonding. The unbonding period is determined by the shared param,
 * application_unbonding_period_sessions.
 */
export interface EventApplicationUnbondingBeginSDKType {
  application?: ApplicationSDKType;
  reason: ApplicationUnbondingReason;
  session_end_height: bigint;
  unbonding_end_height: bigint;
}
/**
 * EventApplicationUnbondingEnd is emitted when an application has completed
 * unbonding. The unbonding period is determined by the shared param,
 * application_unbonding_period_sessions.
 */
export interface EventApplicationUnbondingEnd {
  application?: Application;
  reason: ApplicationUnbondingReason;
  /** The end height of the session in which the unbonding ended. */
  sessionEndHeight: bigint;
  /** The height at which application unbonding ended. */
  unbondingEndHeight: bigint;
}
export interface EventApplicationUnbondingEndProtoMsg {
  typeUrl: "/pocket.application.EventApplicationUnbondingEnd";
  value: Uint8Array;
}
/**
 * EventApplicationUnbondingEnd is emitted when an application has completed
 * unbonding. The unbonding period is determined by the shared param,
 * application_unbonding_period_sessions.
 * @name EventApplicationUnbondingEndAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventApplicationUnbondingEnd
 */
export interface EventApplicationUnbondingEndAmino {
  application: ApplicationAmino;
  reason: ApplicationUnbondingReason;
  /**
   * The end height of the session in which the unbonding ended.
   */
  session_end_height: string;
  /**
   * The height at which application unbonding ended.
   */
  unbonding_end_height: string;
}
export interface EventApplicationUnbondingEndAminoMsg {
  type: "/pocket.application.EventApplicationUnbondingEnd";
  value: EventApplicationUnbondingEndAmino;
}
/**
 * EventApplicationUnbondingEnd is emitted when an application has completed
 * unbonding. The unbonding period is determined by the shared param,
 * application_unbonding_period_sessions.
 */
export interface EventApplicationUnbondingEndSDKType {
  application?: ApplicationSDKType;
  reason: ApplicationUnbondingReason;
  session_end_height: bigint;
  unbonding_end_height: bigint;
}
/**
 * EventApplicationUnbondingCanceled is emitted when an application which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed. An EventApplicationStaked
 * event will also be emitted immediately after this event.
 */
export interface EventApplicationUnbondingCanceled {
  application?: Application;
  /** The end height of the session in which the unbonding was canceled. */
  sessionEndHeight: bigint;
}
export interface EventApplicationUnbondingCanceledProtoMsg {
  typeUrl: "/pocket.application.EventApplicationUnbondingCanceled";
  value: Uint8Array;
}
/**
 * EventApplicationUnbondingCanceled is emitted when an application which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed. An EventApplicationStaked
 * event will also be emitted immediately after this event.
 * @name EventApplicationUnbondingCanceledAmino
 * @package pocket.application
 * @see proto type: pocket.application.EventApplicationUnbondingCanceled
 */
export interface EventApplicationUnbondingCanceledAmino {
  application: ApplicationAmino;
  /**
   * The end height of the session in which the unbonding was canceled.
   */
  session_end_height: string;
}
export interface EventApplicationUnbondingCanceledAminoMsg {
  type: "/pocket.application.EventApplicationUnbondingCanceled";
  value: EventApplicationUnbondingCanceledAmino;
}
/**
 * EventApplicationUnbondingCanceled is emitted when an application which was unbonding
 * successfully (re-)stakes before the unbonding period has elapsed. An EventApplicationStaked
 * event will also be emitted immediately after this event.
 */
export interface EventApplicationUnbondingCanceledSDKType {
  application?: ApplicationSDKType;
  session_end_height: bigint;
}
function createBaseEventApplicationStaked(): EventApplicationStaked {
  return {
    application: undefined,
    sessionEndHeight: BigInt(0)
  };
}
export const EventApplicationStaked = {
  typeUrl: "/pocket.application.EventApplicationStaked",
  encode(message: EventApplicationStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventApplicationStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApplicationStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventApplicationStaked>): EventApplicationStaked {
    const message = createBaseEventApplicationStaked();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventApplicationStakedAmino): EventApplicationStaked {
    const message = createBaseEventApplicationStaked();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventApplicationStaked): EventApplicationStakedAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventApplicationStakedAminoMsg): EventApplicationStaked {
    return EventApplicationStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventApplicationStakedProtoMsg): EventApplicationStaked {
    return EventApplicationStaked.decode(message.value);
  },
  toProto(message: EventApplicationStaked): Uint8Array {
    return EventApplicationStaked.encode(message).finish();
  },
  toProtoMsg(message: EventApplicationStaked): EventApplicationStakedProtoMsg {
    return {
      typeUrl: "/pocket.application.EventApplicationStaked",
      value: EventApplicationStaked.encode(message).finish()
    };
  }
};
function createBaseEventRedelegation(): EventRedelegation {
  return {
    application: undefined,
    sessionEndHeight: BigInt(0)
  };
}
export const EventRedelegation = {
  typeUrl: "/pocket.application.EventRedelegation",
  encode(message: EventRedelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRedelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventRedelegation>): EventRedelegation {
    const message = createBaseEventRedelegation();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRedelegationAmino): EventRedelegation {
    const message = createBaseEventRedelegation();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventRedelegation): EventRedelegationAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventRedelegationAminoMsg): EventRedelegation {
    return EventRedelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRedelegationProtoMsg): EventRedelegation {
    return EventRedelegation.decode(message.value);
  },
  toProto(message: EventRedelegation): Uint8Array {
    return EventRedelegation.encode(message).finish();
  },
  toProtoMsg(message: EventRedelegation): EventRedelegationProtoMsg {
    return {
      typeUrl: "/pocket.application.EventRedelegation",
      value: EventRedelegation.encode(message).finish()
    };
  }
};
function createBaseEventTransferBegin(): EventTransferBegin {
  return {
    sourceAddress: "",
    destinationAddress: "",
    sourceApplication: undefined,
    sessionEndHeight: BigInt(0),
    transferEndHeight: BigInt(0)
  };
}
export const EventTransferBegin = {
  typeUrl: "/pocket.application.EventTransferBegin",
  encode(message: EventTransferBegin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceAddress !== "") {
      writer.uint32(10).string(message.sourceAddress);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(18).string(message.destinationAddress);
    }
    if (message.sourceApplication !== undefined) {
      Application.encode(message.sourceApplication, writer.uint32(26).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.sessionEndHeight);
    }
    if (message.transferEndHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.transferEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTransferBegin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferBegin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceAddress = reader.string();
          break;
        case 2:
          message.destinationAddress = reader.string();
          break;
        case 3:
          message.sourceApplication = Application.decode(reader, reader.uint32());
          break;
        case 4:
          message.sessionEndHeight = reader.int64();
          break;
        case 5:
          message.transferEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTransferBegin>): EventTransferBegin {
    const message = createBaseEventTransferBegin();
    message.sourceAddress = object.sourceAddress ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.sourceApplication = object.sourceApplication !== undefined && object.sourceApplication !== null ? Application.fromPartial(object.sourceApplication) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.transferEndHeight = object.transferEndHeight !== undefined && object.transferEndHeight !== null ? BigInt(object.transferEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventTransferBeginAmino): EventTransferBegin {
    const message = createBaseEventTransferBegin();
    if (object.source_address !== undefined && object.source_address !== null) {
      message.sourceAddress = object.source_address;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.source_application !== undefined && object.source_application !== null) {
      message.sourceApplication = Application.fromAmino(object.source_application);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.transfer_end_height !== undefined && object.transfer_end_height !== null) {
      message.transferEndHeight = BigInt(object.transfer_end_height);
    }
    return message;
  },
  toAmino(message: EventTransferBegin): EventTransferBeginAmino {
    const obj: any = {};
    obj.source_address = message.sourceAddress === "" ? undefined : message.sourceAddress;
    obj.destination_address = message.destinationAddress === "" ? undefined : message.destinationAddress;
    obj.source_application = message.sourceApplication ? Application.toAmino(message.sourceApplication) : undefined;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.transfer_end_height = message.transferEndHeight ? message.transferEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventTransferBeginAminoMsg): EventTransferBegin {
    return EventTransferBegin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransferBeginProtoMsg): EventTransferBegin {
    return EventTransferBegin.decode(message.value);
  },
  toProto(message: EventTransferBegin): Uint8Array {
    return EventTransferBegin.encode(message).finish();
  },
  toProtoMsg(message: EventTransferBegin): EventTransferBeginProtoMsg {
    return {
      typeUrl: "/pocket.application.EventTransferBegin",
      value: EventTransferBegin.encode(message).finish()
    };
  }
};
function createBaseEventTransferEnd(): EventTransferEnd {
  return {
    sourceAddress: "",
    destinationAddress: "",
    destinationApplication: undefined,
    sessionEndHeight: BigInt(0),
    transferEndHeight: BigInt(0)
  };
}
export const EventTransferEnd = {
  typeUrl: "/pocket.application.EventTransferEnd",
  encode(message: EventTransferEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceAddress !== "") {
      writer.uint32(10).string(message.sourceAddress);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(18).string(message.destinationAddress);
    }
    if (message.destinationApplication !== undefined) {
      Application.encode(message.destinationApplication, writer.uint32(26).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.sessionEndHeight);
    }
    if (message.transferEndHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.transferEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTransferEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceAddress = reader.string();
          break;
        case 2:
          message.destinationAddress = reader.string();
          break;
        case 3:
          message.destinationApplication = Application.decode(reader, reader.uint32());
          break;
        case 4:
          message.sessionEndHeight = reader.int64();
          break;
        case 5:
          message.transferEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTransferEnd>): EventTransferEnd {
    const message = createBaseEventTransferEnd();
    message.sourceAddress = object.sourceAddress ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.destinationApplication = object.destinationApplication !== undefined && object.destinationApplication !== null ? Application.fromPartial(object.destinationApplication) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.transferEndHeight = object.transferEndHeight !== undefined && object.transferEndHeight !== null ? BigInt(object.transferEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventTransferEndAmino): EventTransferEnd {
    const message = createBaseEventTransferEnd();
    if (object.source_address !== undefined && object.source_address !== null) {
      message.sourceAddress = object.source_address;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.destination_application !== undefined && object.destination_application !== null) {
      message.destinationApplication = Application.fromAmino(object.destination_application);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.transfer_end_height !== undefined && object.transfer_end_height !== null) {
      message.transferEndHeight = BigInt(object.transfer_end_height);
    }
    return message;
  },
  toAmino(message: EventTransferEnd): EventTransferEndAmino {
    const obj: any = {};
    obj.source_address = message.sourceAddress === "" ? undefined : message.sourceAddress;
    obj.destination_address = message.destinationAddress === "" ? undefined : message.destinationAddress;
    obj.destination_application = message.destinationApplication ? Application.toAmino(message.destinationApplication) : undefined;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.transfer_end_height = message.transferEndHeight ? message.transferEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventTransferEndAminoMsg): EventTransferEnd {
    return EventTransferEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransferEndProtoMsg): EventTransferEnd {
    return EventTransferEnd.decode(message.value);
  },
  toProto(message: EventTransferEnd): Uint8Array {
    return EventTransferEnd.encode(message).finish();
  },
  toProtoMsg(message: EventTransferEnd): EventTransferEndProtoMsg {
    return {
      typeUrl: "/pocket.application.EventTransferEnd",
      value: EventTransferEnd.encode(message).finish()
    };
  }
};
function createBaseEventTransferError(): EventTransferError {
  return {
    sourceAddress: "",
    destinationAddress: "",
    sourceApplication: undefined,
    sessionEndHeight: BigInt(0),
    error: ""
  };
}
export const EventTransferError = {
  typeUrl: "/pocket.application.EventTransferError",
  encode(message: EventTransferError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceAddress !== "") {
      writer.uint32(10).string(message.sourceAddress);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(18).string(message.destinationAddress);
    }
    if (message.sourceApplication !== undefined) {
      Application.encode(message.sourceApplication, writer.uint32(26).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.sessionEndHeight);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTransferError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceAddress = reader.string();
          break;
        case 2:
          message.destinationAddress = reader.string();
          break;
        case 3:
          message.sourceApplication = Application.decode(reader, reader.uint32());
          break;
        case 4:
          message.sessionEndHeight = reader.int64();
          break;
        case 5:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTransferError>): EventTransferError {
    const message = createBaseEventTransferError();
    message.sourceAddress = object.sourceAddress ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.sourceApplication = object.sourceApplication !== undefined && object.sourceApplication !== null ? Application.fromPartial(object.sourceApplication) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventTransferErrorAmino): EventTransferError {
    const message = createBaseEventTransferError();
    if (object.source_address !== undefined && object.source_address !== null) {
      message.sourceAddress = object.source_address;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.source_application !== undefined && object.source_application !== null) {
      message.sourceApplication = Application.fromAmino(object.source_application);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventTransferError): EventTransferErrorAmino {
    const obj: any = {};
    obj.source_address = message.sourceAddress === "" ? undefined : message.sourceAddress;
    obj.destination_address = message.destinationAddress === "" ? undefined : message.destinationAddress;
    obj.source_application = message.sourceApplication ? Application.toAmino(message.sourceApplication) : undefined;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: EventTransferErrorAminoMsg): EventTransferError {
    return EventTransferError.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransferErrorProtoMsg): EventTransferError {
    return EventTransferError.decode(message.value);
  },
  toProto(message: EventTransferError): Uint8Array {
    return EventTransferError.encode(message).finish();
  },
  toProtoMsg(message: EventTransferError): EventTransferErrorProtoMsg {
    return {
      typeUrl: "/pocket.application.EventTransferError",
      value: EventTransferError.encode(message).finish()
    };
  }
};
function createBaseEventApplicationUnbondingBegin(): EventApplicationUnbondingBegin {
  return {
    application: undefined,
    reason: 0,
    sessionEndHeight: BigInt(0),
    unbondingEndHeight: BigInt(0)
  };
}
export const EventApplicationUnbondingBegin = {
  typeUrl: "/pocket.application.EventApplicationUnbondingBegin",
  encode(message: EventApplicationUnbondingBegin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventApplicationUnbondingBegin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApplicationUnbondingBegin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventApplicationUnbondingBegin>): EventApplicationUnbondingBegin {
    const message = createBaseEventApplicationUnbondingBegin();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    message.reason = object.reason ?? 0;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.unbondingEndHeight = object.unbondingEndHeight !== undefined && object.unbondingEndHeight !== null ? BigInt(object.unbondingEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventApplicationUnbondingBeginAmino): EventApplicationUnbondingBegin {
    const message = createBaseEventApplicationUnbondingBegin();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
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
  toAmino(message: EventApplicationUnbondingBegin): EventApplicationUnbondingBeginAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    obj.reason = message.reason ?? 0;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.unbonding_end_height = message.unbondingEndHeight ? message.unbondingEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventApplicationUnbondingBeginAminoMsg): EventApplicationUnbondingBegin {
    return EventApplicationUnbondingBegin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventApplicationUnbondingBeginProtoMsg): EventApplicationUnbondingBegin {
    return EventApplicationUnbondingBegin.decode(message.value);
  },
  toProto(message: EventApplicationUnbondingBegin): Uint8Array {
    return EventApplicationUnbondingBegin.encode(message).finish();
  },
  toProtoMsg(message: EventApplicationUnbondingBegin): EventApplicationUnbondingBeginProtoMsg {
    return {
      typeUrl: "/pocket.application.EventApplicationUnbondingBegin",
      value: EventApplicationUnbondingBegin.encode(message).finish()
    };
  }
};
function createBaseEventApplicationUnbondingEnd(): EventApplicationUnbondingEnd {
  return {
    application: undefined,
    reason: 0,
    sessionEndHeight: BigInt(0),
    unbondingEndHeight: BigInt(0)
  };
}
export const EventApplicationUnbondingEnd = {
  typeUrl: "/pocket.application.EventApplicationUnbondingEnd",
  encode(message: EventApplicationUnbondingEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventApplicationUnbondingEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApplicationUnbondingEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventApplicationUnbondingEnd>): EventApplicationUnbondingEnd {
    const message = createBaseEventApplicationUnbondingEnd();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    message.reason = object.reason ?? 0;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.unbondingEndHeight = object.unbondingEndHeight !== undefined && object.unbondingEndHeight !== null ? BigInt(object.unbondingEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventApplicationUnbondingEndAmino): EventApplicationUnbondingEnd {
    const message = createBaseEventApplicationUnbondingEnd();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
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
  toAmino(message: EventApplicationUnbondingEnd): EventApplicationUnbondingEndAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    obj.reason = message.reason ?? 0;
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.unbonding_end_height = message.unbondingEndHeight ? message.unbondingEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventApplicationUnbondingEndAminoMsg): EventApplicationUnbondingEnd {
    return EventApplicationUnbondingEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventApplicationUnbondingEndProtoMsg): EventApplicationUnbondingEnd {
    return EventApplicationUnbondingEnd.decode(message.value);
  },
  toProto(message: EventApplicationUnbondingEnd): Uint8Array {
    return EventApplicationUnbondingEnd.encode(message).finish();
  },
  toProtoMsg(message: EventApplicationUnbondingEnd): EventApplicationUnbondingEndProtoMsg {
    return {
      typeUrl: "/pocket.application.EventApplicationUnbondingEnd",
      value: EventApplicationUnbondingEnd.encode(message).finish()
    };
  }
};
function createBaseEventApplicationUnbondingCanceled(): EventApplicationUnbondingCanceled {
  return {
    application: undefined,
    sessionEndHeight: BigInt(0)
  };
}
export const EventApplicationUnbondingCanceled = {
  typeUrl: "/pocket.application.EventApplicationUnbondingCanceled",
  encode(message: EventApplicationUnbondingCanceled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventApplicationUnbondingCanceled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventApplicationUnbondingCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = Application.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<EventApplicationUnbondingCanceled>): EventApplicationUnbondingCanceled {
    const message = createBaseEventApplicationUnbondingCanceled();
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventApplicationUnbondingCanceledAmino): EventApplicationUnbondingCanceled {
    const message = createBaseEventApplicationUnbondingCanceled();
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: EventApplicationUnbondingCanceled): EventApplicationUnbondingCanceledAmino {
    const obj: any = {};
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventApplicationUnbondingCanceledAminoMsg): EventApplicationUnbondingCanceled {
    return EventApplicationUnbondingCanceled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventApplicationUnbondingCanceledProtoMsg): EventApplicationUnbondingCanceled {
    return EventApplicationUnbondingCanceled.decode(message.value);
  },
  toProto(message: EventApplicationUnbondingCanceled): Uint8Array {
    return EventApplicationUnbondingCanceled.encode(message).finish();
  },
  toProtoMsg(message: EventApplicationUnbondingCanceled): EventApplicationUnbondingCanceledProtoMsg {
    return {
      typeUrl: "/pocket.application.EventApplicationUnbondingCanceled",
      value: EventApplicationUnbondingCanceled.encode(message).finish()
    };
  }
};