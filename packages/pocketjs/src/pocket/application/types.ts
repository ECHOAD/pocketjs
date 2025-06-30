//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { ApplicationServiceConfig, ApplicationServiceConfigAmino, ApplicationServiceConfigSDKType } from "../shared/service";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Application_PendingUndelegationsEntry {
  key: bigint;
  value?: UndelegatingGatewayList;
}
export interface Application_PendingUndelegationsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name Application_PendingUndelegationsEntryAmino
 * @package pocket.application
 * @see proto type: pocket.application.Application_PendingUndelegationsEntry
 */
export interface Application_PendingUndelegationsEntryAmino {
  key?: string;
  value?: UndelegatingGatewayListAmino;
}
export interface Application_PendingUndelegationsEntryAminoMsg {
  type: string;
  value: Application_PendingUndelegationsEntryAmino;
}
export interface Application_PendingUndelegationsEntrySDKType {
  key: bigint;
  value?: UndelegatingGatewayListSDKType;
}
/** Application represents the onchain definition and state of an application */
export interface Application {
  /** Bech32 address of the application */
  address: string;
  /** Total amount of staked uPOKT */
  stake?: Coin;
  /**
   * CRITICAL: Must contain EXACTLY ONE service config
   * - Enforces a single service configuration per application to prevent over-servicing.
   * - Field is repeated for legacy reasons and potential future compatibility.
   * - References for rationale:
   *   - https://github.com/pokt-network/poktroll/pull/750#discussion_r1735025033
   *   - https://www.notion.so/buildwithgrove/Off-chain-Application-Stake-Tracking-6a8bebb107db4f7f9dc62cbe7ba555f7
   */
  serviceConfigs: ApplicationServiceConfig[];
  /**
   * TODO_MAINNET_MIGRATION(@bryanchriswhite): Rename `delegatee_gateway_addresses` to `gateway_addresses_delegated_to` for better clarity and consistency.
   * - Update all related configs, comments, variables, and function names throughout the codebase to reflect this change.
   * - This field is a non-nullable list of Bech32-encoded delegatee Gateway addresses.
   */
  delegateeGatewayAddresses: string[];
  /**
   * Mapping of session end heights to gateways being undelegated from
   * - Key: Height of the last block of the session when the undelegation transaction was committed
   * - Value: List of gateways being undelegated from at that session end height
   * TODO_DOCUMENT(@red-0ne): Document the complete flow and rationale behind this mapping.
   * - Ensure the documentation explains why tracking pending undelegations by session end height is necessary.
   * - See: https://github.com/pokt-network/poktroll/issues/476#issuecomment-2052639906 for context and examples.
   */
  pendingUndelegations: {
    [key: bigint]: UndelegatingGatewayList;
  };
  /** Session end height when application initiated unstaking (0 if not unstaking) */
  unstakeSessionEndHeight: bigint;
  /** Information about pending application transfers */
  pendingTransfer?: PendingApplicationTransfer;
}
export interface ApplicationProtoMsg {
  typeUrl: "/pocket.application.Application";
  value: Uint8Array;
}
/**
 * Application represents the onchain definition and state of an application
 * @name ApplicationAmino
 * @package pocket.application
 * @see proto type: pocket.application.Application
 */
export interface ApplicationAmino {
  /**
   * Bech32 address of the application
   */
  address?: string;
  /**
   * Total amount of staked uPOKT
   */
  stake?: CoinAmino;
  /**
   * CRITICAL: Must contain EXACTLY ONE service config
   * - Enforces a single service configuration per application to prevent over-servicing.
   * - Field is repeated for legacy reasons and potential future compatibility.
   * - References for rationale:
   *   - https://github.com/pokt-network/poktroll/pull/750#discussion_r1735025033
   *   - https://www.notion.so/buildwithgrove/Off-chain-Application-Stake-Tracking-6a8bebb107db4f7f9dc62cbe7ba555f7
   */
  service_configs?: ApplicationServiceConfigAmino[];
  /**
   * TODO_MAINNET_MIGRATION(@bryanchriswhite): Rename `delegatee_gateway_addresses` to `gateway_addresses_delegated_to` for better clarity and consistency.
   * - Update all related configs, comments, variables, and function names throughout the codebase to reflect this change.
   * - This field is a non-nullable list of Bech32-encoded delegatee Gateway addresses.
   */
  delegatee_gateway_addresses?: string[];
  /**
   * Mapping of session end heights to gateways being undelegated from
   * - Key: Height of the last block of the session when the undelegation transaction was committed
   * - Value: List of gateways being undelegated from at that session end height
   * TODO_DOCUMENT(@red-0ne): Document the complete flow and rationale behind this mapping.
   * - Ensure the documentation explains why tracking pending undelegations by session end height is necessary.
   * - See: https://github.com/pokt-network/poktroll/issues/476#issuecomment-2052639906 for context and examples.
   */
  pending_undelegations?: {
    [key: string]: UndelegatingGatewayListAmino;
  };
  /**
   * Session end height when application initiated unstaking (0 if not unstaking)
   */
  unstake_session_end_height?: string;
  /**
   * Information about pending application transfers
   */
  pending_transfer?: PendingApplicationTransferAmino;
}
export interface ApplicationAminoMsg {
  type: "/pocket.application.Application";
  value: ApplicationAmino;
}
/** Application represents the onchain definition and state of an application */
export interface ApplicationSDKType {
  address: string;
  stake?: CoinSDKType;
  service_configs: ApplicationServiceConfigSDKType[];
  delegatee_gateway_addresses: string[];
  pending_undelegations: {
    [key: bigint]: UndelegatingGatewayListSDKType;
  };
  unstake_session_end_height: bigint;
  pending_transfer?: PendingApplicationTransferSDKType;
}
/**
 * UndelegatingGatewayList is used as the Value of `pending_undelegations`.
 * It is required to store a repeated list of strings as a map value.
 */
export interface UndelegatingGatewayList {
  gatewayAddresses: string[];
}
export interface UndelegatingGatewayListProtoMsg {
  typeUrl: "/pocket.application.UndelegatingGatewayList";
  value: Uint8Array;
}
/**
 * UndelegatingGatewayList is used as the Value of `pending_undelegations`.
 * It is required to store a repeated list of strings as a map value.
 * @name UndelegatingGatewayListAmino
 * @package pocket.application
 * @see proto type: pocket.application.UndelegatingGatewayList
 */
export interface UndelegatingGatewayListAmino {
  gateway_addresses?: string[];
}
export interface UndelegatingGatewayListAminoMsg {
  type: "/pocket.application.UndelegatingGatewayList";
  value: UndelegatingGatewayListAmino;
}
/**
 * UndelegatingGatewayList is used as the Value of `pending_undelegations`.
 * It is required to store a repeated list of strings as a map value.
 */
export interface UndelegatingGatewayListSDKType {
  gateway_addresses: string[];
}
/**
 * PendingTransfer is used to store the details of a pending transfer.
 * It is only intended to be used inside of an Application object.
 */
export interface PendingApplicationTransfer {
  destinationAddress: string;
  sessionEndHeight: bigint;
}
export interface PendingApplicationTransferProtoMsg {
  typeUrl: "/pocket.application.PendingApplicationTransfer";
  value: Uint8Array;
}
/**
 * PendingTransfer is used to store the details of a pending transfer.
 * It is only intended to be used inside of an Application object.
 * @name PendingApplicationTransferAmino
 * @package pocket.application
 * @see proto type: pocket.application.PendingApplicationTransfer
 */
export interface PendingApplicationTransferAmino {
  destination_address?: string;
  session_end_height?: string;
}
export interface PendingApplicationTransferAminoMsg {
  type: "/pocket.application.PendingApplicationTransfer";
  value: PendingApplicationTransferAmino;
}
/**
 * PendingTransfer is used to store the details of a pending transfer.
 * It is only intended to be used inside of an Application object.
 */
export interface PendingApplicationTransferSDKType {
  destination_address: string;
  session_end_height: bigint;
}
/**
 * Undelegation represents a connection between an application and a gateway that
 * is in the process of being removed.
 * 
 * This record is stored in the undelegation index
 * and used to track and process pending undelegations after the unbonding period has elapsed.
 */
export interface PendingUndelegation {
  /** Address of the application that is undelegating from the gateway. */
  applicationAddress: string;
  /** Address of the gateway that the application is undelegating from. */
  gatewayAddress: string;
}
export interface PendingUndelegationProtoMsg {
  typeUrl: "/pocket.application.PendingUndelegation";
  value: Uint8Array;
}
/**
 * Undelegation represents a connection between an application and a gateway that
 * is in the process of being removed.
 * 
 * This record is stored in the undelegation index
 * and used to track and process pending undelegations after the unbonding period has elapsed.
 * @name PendingUndelegationAmino
 * @package pocket.application
 * @see proto type: pocket.application.PendingUndelegation
 */
export interface PendingUndelegationAmino {
  /**
   * Address of the application that is undelegating from the gateway.
   */
  application_address?: string;
  /**
   * Address of the gateway that the application is undelegating from.
   */
  gateway_address?: string;
}
export interface PendingUndelegationAminoMsg {
  type: "/pocket.application.PendingUndelegation";
  value: PendingUndelegationAmino;
}
/**
 * Undelegation represents a connection between an application and a gateway that
 * is in the process of being removed.
 * 
 * This record is stored in the undelegation index
 * and used to track and process pending undelegations after the unbonding period has elapsed.
 */
export interface PendingUndelegationSDKType {
  application_address: string;
  gateway_address: string;
}
function createBaseApplication_PendingUndelegationsEntry(): Application_PendingUndelegationsEntry {
  return {
    key: BigInt(0),
    value: undefined
  };
}
export const Application_PendingUndelegationsEntry = {
  encode(message: Application_PendingUndelegationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      UndelegatingGatewayList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Application_PendingUndelegationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplication_PendingUndelegationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
          break;
        case 2:
          message.value = UndelegatingGatewayList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Application_PendingUndelegationsEntry>): Application_PendingUndelegationsEntry {
    const message = createBaseApplication_PendingUndelegationsEntry();
    message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
    message.value = object.value !== undefined && object.value !== null ? UndelegatingGatewayList.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: Application_PendingUndelegationsEntryAmino): Application_PendingUndelegationsEntry {
    const message = createBaseApplication_PendingUndelegationsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = UndelegatingGatewayList.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Application_PendingUndelegationsEntry): Application_PendingUndelegationsEntryAmino {
    const obj: any = {};
    obj.key = message.key !== BigInt(0) ? message.key?.toString() : undefined;
    obj.value = message.value ? UndelegatingGatewayList.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: Application_PendingUndelegationsEntryAminoMsg): Application_PendingUndelegationsEntry {
    return Application_PendingUndelegationsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Application_PendingUndelegationsEntryProtoMsg): Application_PendingUndelegationsEntry {
    return Application_PendingUndelegationsEntry.decode(message.value);
  },
  toProto(message: Application_PendingUndelegationsEntry): Uint8Array {
    return Application_PendingUndelegationsEntry.encode(message).finish();
  }
};
function createBaseApplication(): Application {
  return {
    address: "",
    stake: undefined,
    serviceConfigs: [],
    delegateeGatewayAddresses: [],
    pendingUndelegations: {},
    unstakeSessionEndHeight: BigInt(0),
    pendingTransfer: undefined
  };
}
export const Application = {
  typeUrl: "/pocket.application.Application",
  encode(message: Application, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.serviceConfigs) {
      ApplicationServiceConfig.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegateeGatewayAddresses) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.pendingUndelegations).forEach(([key, value]) => {
      Application_PendingUndelegationsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.unstakeSessionEndHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.unstakeSessionEndHeight);
    }
    if (message.pendingTransfer !== undefined) {
      PendingApplicationTransfer.encode(message.pendingTransfer, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Application {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.serviceConfigs.push(ApplicationServiceConfig.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegateeGatewayAddresses.push(reader.string());
          break;
        case 5:
          const entry5 = Application_PendingUndelegationsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.pendingUndelegations[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.unstakeSessionEndHeight = reader.uint64();
          break;
        case 7:
          message.pendingTransfer = PendingApplicationTransfer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Application>): Application {
    const message = createBaseApplication();
    message.address = object.address ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.serviceConfigs = object.serviceConfigs?.map(e => ApplicationServiceConfig.fromPartial(e)) || [];
    message.delegateeGatewayAddresses = object.delegateeGatewayAddresses?.map(e => e) || [];
    message.pendingUndelegations = Object.entries(object.pendingUndelegations ?? {}).reduce<{
      [key: bigint]: UndelegatingGatewayList;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = UndelegatingGatewayList.fromPartial(value);
      }
      return acc;
    }, {});
    message.unstakeSessionEndHeight = object.unstakeSessionEndHeight !== undefined && object.unstakeSessionEndHeight !== null ? BigInt(object.unstakeSessionEndHeight.toString()) : BigInt(0);
    message.pendingTransfer = object.pendingTransfer !== undefined && object.pendingTransfer !== null ? PendingApplicationTransfer.fromPartial(object.pendingTransfer) : undefined;
    return message;
  },
  fromAmino(object: ApplicationAmino): Application {
    const message = createBaseApplication();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    message.serviceConfigs = object.service_configs?.map(e => ApplicationServiceConfig.fromAmino(e)) || [];
    message.delegateeGatewayAddresses = object.delegatee_gateway_addresses?.map(e => e) || [];
    message.pendingUndelegations = Object.entries(object.pending_undelegations ?? {}).reduce<{
      [key: bigint]: UndelegatingGatewayList;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = UndelegatingGatewayList.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.unstake_session_end_height !== undefined && object.unstake_session_end_height !== null) {
      message.unstakeSessionEndHeight = BigInt(object.unstake_session_end_height);
    }
    if (object.pending_transfer !== undefined && object.pending_transfer !== null) {
      message.pendingTransfer = PendingApplicationTransfer.fromAmino(object.pending_transfer);
    }
    return message;
  },
  toAmino(message: Application): ApplicationAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    if (message.serviceConfigs) {
      obj.service_configs = message.serviceConfigs.map(e => e ? ApplicationServiceConfig.toAmino(e) : undefined);
    } else {
      obj.service_configs = message.serviceConfigs;
    }
    if (message.delegateeGatewayAddresses) {
      obj.delegatee_gateway_addresses = message.delegateeGatewayAddresses.map(e => e);
    } else {
      obj.delegatee_gateway_addresses = message.delegateeGatewayAddresses;
    }
    obj.pending_undelegations = {};
    if (message.pendingUndelegations) {
      Object.entries(message.pendingUndelegations).forEach(([k, v]) => {
        obj.pending_undelegations[k] = UndelegatingGatewayList.toAmino(v);
      });
    }
    obj.unstake_session_end_height = message.unstakeSessionEndHeight !== BigInt(0) ? message.unstakeSessionEndHeight?.toString() : undefined;
    obj.pending_transfer = message.pendingTransfer ? PendingApplicationTransfer.toAmino(message.pendingTransfer) : undefined;
    return obj;
  },
  fromAminoMsg(object: ApplicationAminoMsg): Application {
    return Application.fromAmino(object.value);
  },
  fromProtoMsg(message: ApplicationProtoMsg): Application {
    return Application.decode(message.value);
  },
  toProto(message: Application): Uint8Array {
    return Application.encode(message).finish();
  },
  toProtoMsg(message: Application): ApplicationProtoMsg {
    return {
      typeUrl: "/pocket.application.Application",
      value: Application.encode(message).finish()
    };
  }
};
function createBaseUndelegatingGatewayList(): UndelegatingGatewayList {
  return {
    gatewayAddresses: []
  };
}
export const UndelegatingGatewayList = {
  typeUrl: "/pocket.application.UndelegatingGatewayList",
  encode(message: UndelegatingGatewayList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gatewayAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndelegatingGatewayList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegatingGatewayList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.gatewayAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UndelegatingGatewayList>): UndelegatingGatewayList {
    const message = createBaseUndelegatingGatewayList();
    message.gatewayAddresses = object.gatewayAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: UndelegatingGatewayListAmino): UndelegatingGatewayList {
    const message = createBaseUndelegatingGatewayList();
    message.gatewayAddresses = object.gateway_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: UndelegatingGatewayList): UndelegatingGatewayListAmino {
    const obj: any = {};
    if (message.gatewayAddresses) {
      obj.gateway_addresses = message.gatewayAddresses.map(e => e);
    } else {
      obj.gateway_addresses = message.gatewayAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: UndelegatingGatewayListAminoMsg): UndelegatingGatewayList {
    return UndelegatingGatewayList.fromAmino(object.value);
  },
  fromProtoMsg(message: UndelegatingGatewayListProtoMsg): UndelegatingGatewayList {
    return UndelegatingGatewayList.decode(message.value);
  },
  toProto(message: UndelegatingGatewayList): Uint8Array {
    return UndelegatingGatewayList.encode(message).finish();
  },
  toProtoMsg(message: UndelegatingGatewayList): UndelegatingGatewayListProtoMsg {
    return {
      typeUrl: "/pocket.application.UndelegatingGatewayList",
      value: UndelegatingGatewayList.encode(message).finish()
    };
  }
};
function createBasePendingApplicationTransfer(): PendingApplicationTransfer {
  return {
    destinationAddress: "",
    sessionEndHeight: BigInt(0)
  };
}
export const PendingApplicationTransfer = {
  typeUrl: "/pocket.application.PendingApplicationTransfer",
  encode(message: PendingApplicationTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destinationAddress !== "") {
      writer.uint32(10).string(message.destinationAddress);
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingApplicationTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingApplicationTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destinationAddress = reader.string();
          break;
        case 2:
          message.sessionEndHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingApplicationTransfer>): PendingApplicationTransfer {
    const message = createBasePendingApplicationTransfer();
    message.destinationAddress = object.destinationAddress ?? "";
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingApplicationTransferAmino): PendingApplicationTransfer {
    const message = createBasePendingApplicationTransfer();
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: PendingApplicationTransfer): PendingApplicationTransferAmino {
    const obj: any = {};
    obj.destination_address = message.destinationAddress === "" ? undefined : message.destinationAddress;
    obj.session_end_height = message.sessionEndHeight !== BigInt(0) ? message.sessionEndHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingApplicationTransferAminoMsg): PendingApplicationTransfer {
    return PendingApplicationTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingApplicationTransferProtoMsg): PendingApplicationTransfer {
    return PendingApplicationTransfer.decode(message.value);
  },
  toProto(message: PendingApplicationTransfer): Uint8Array {
    return PendingApplicationTransfer.encode(message).finish();
  },
  toProtoMsg(message: PendingApplicationTransfer): PendingApplicationTransferProtoMsg {
    return {
      typeUrl: "/pocket.application.PendingApplicationTransfer",
      value: PendingApplicationTransfer.encode(message).finish()
    };
  }
};
function createBasePendingUndelegation(): PendingUndelegation {
  return {
    applicationAddress: "",
    gatewayAddress: ""
  };
}
export const PendingUndelegation = {
  typeUrl: "/pocket.application.PendingUndelegation",
  encode(message: PendingUndelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.applicationAddress !== "") {
      writer.uint32(10).string(message.applicationAddress);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(18).string(message.gatewayAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingUndelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationAddress = reader.string();
          break;
        case 2:
          message.gatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PendingUndelegation>): PendingUndelegation {
    const message = createBasePendingUndelegation();
    message.applicationAddress = object.applicationAddress ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    return message;
  },
  fromAmino(object: PendingUndelegationAmino): PendingUndelegation {
    const message = createBasePendingUndelegation();
    if (object.application_address !== undefined && object.application_address !== null) {
      message.applicationAddress = object.application_address;
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = object.gateway_address;
    }
    return message;
  },
  toAmino(message: PendingUndelegation): PendingUndelegationAmino {
    const obj: any = {};
    obj.application_address = message.applicationAddress === "" ? undefined : message.applicationAddress;
    obj.gateway_address = message.gatewayAddress === "" ? undefined : message.gatewayAddress;
    return obj;
  },
  fromAminoMsg(object: PendingUndelegationAminoMsg): PendingUndelegation {
    return PendingUndelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingUndelegationProtoMsg): PendingUndelegation {
    return PendingUndelegation.decode(message.value);
  },
  toProto(message: PendingUndelegation): Uint8Array {
    return PendingUndelegation.encode(message).finish();
  },
  toProtoMsg(message: PendingUndelegation): PendingUndelegationProtoMsg {
    return {
      typeUrl: "/pocket.application.PendingUndelegation",
      value: PendingUndelegation.encode(message).finish()
    };
  }
};