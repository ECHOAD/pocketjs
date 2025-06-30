//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SupplierServiceConfig, SupplierServiceConfigAmino, SupplierServiceConfigSDKType } from "./service";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Supplier represents an actor in Pocket Network that provides RPC services */
export interface Supplier {
  /**
   * Owner address that controls the staked funds and receives rewards by default
   * Cannot be updated by the operator
   */
  ownerAddress: string;
  /**
   * Operator address managing the offchain server
   * Immutable for supplier's lifespan - requires unstake/re-stake to change.
   * Can update supplier configs except for owner address.
   */
  operatorAddress: string;
  /** Total amount of staked uPOKT */
  stake?: Coin;
  /** List of service configurations supported by this supplier */
  services: SupplierServiceConfig[];
  /** Session end height when supplier initiated unstaking (0 if not unstaking) */
  unstakeSessionEndHeight: bigint;
  /**
   * List of historical service configuration updates, tracking the suppliers
   * services update and corresponding activation heights.
   */
  serviceConfigHistory: ServiceConfigUpdate[];
}
export interface SupplierProtoMsg {
  typeUrl: "/pocket.shared.Supplier";
  value: Uint8Array;
}
/**
 * Supplier represents an actor in Pocket Network that provides RPC services
 * @name SupplierAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.Supplier
 */
export interface SupplierAmino {
  /**
   * Owner address that controls the staked funds and receives rewards by default
   * Cannot be updated by the operator
   */
  owner_address?: string;
  /**
   * Operator address managing the offchain server
   * Immutable for supplier's lifespan - requires unstake/re-stake to change.
   * Can update supplier configs except for owner address.
   */
  operator_address?: string;
  /**
   * Total amount of staked uPOKT
   */
  stake?: CoinAmino;
  /**
   * List of service configurations supported by this supplier
   */
  services?: SupplierServiceConfigAmino[];
  /**
   * Session end height when supplier initiated unstaking (0 if not unstaking)
   */
  unstake_session_end_height?: string;
  /**
   * List of historical service configuration updates, tracking the suppliers
   * services update and corresponding activation heights.
   */
  service_config_history?: ServiceConfigUpdateAmino[];
}
export interface SupplierAminoMsg {
  type: "/pocket.shared.Supplier";
  value: SupplierAmino;
}
/** Supplier represents an actor in Pocket Network that provides RPC services */
export interface SupplierSDKType {
  owner_address: string;
  operator_address: string;
  stake?: CoinSDKType;
  services: SupplierServiceConfigSDKType[];
  unstake_session_end_height: bigint;
  service_config_history: ServiceConfigUpdateSDKType[];
}
/**
 * ServiceConfigUpdate tracks a change in a supplier's service configurations
 * at a specific block height, enabling tracking of configuration changes over time.
 * This record helps maintain a complete history of service configs and their availability periods.
 */
export interface ServiceConfigUpdate {
  /** Operator address of the supplier corresponding to the service configuration change */
  operatorAddress: string;
  /** The specific service configuration that was added, modified or scheduled for removal */
  service?: SupplierServiceConfig;
  /** Block height at which this service configuration became active in the network */
  activationHeight: bigint;
  /**
   * Block height at which this service configuration was deactivated (0 if still active)
   * For service configs scheduled for deactivation:
   * - This field stores the block height when deactivation will occur
   * - After deactivation, the config remains in history only as needed for claim settlement
   * - Once no longer required for settlement, the config is automatically removed by
   *   the EndBlockerPruneSupplierServiceConfigHistory process
   */
  deactivationHeight: bigint;
}
export interface ServiceConfigUpdateProtoMsg {
  typeUrl: "/pocket.shared.ServiceConfigUpdate";
  value: Uint8Array;
}
/**
 * ServiceConfigUpdate tracks a change in a supplier's service configurations
 * at a specific block height, enabling tracking of configuration changes over time.
 * This record helps maintain a complete history of service configs and their availability periods.
 * @name ServiceConfigUpdateAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.ServiceConfigUpdate
 */
export interface ServiceConfigUpdateAmino {
  /**
   * Operator address of the supplier corresponding to the service configuration change
   */
  operator_address?: string;
  /**
   * The specific service configuration that was added, modified or scheduled for removal
   */
  service?: SupplierServiceConfigAmino;
  /**
   * Block height at which this service configuration became active in the network
   */
  activation_height?: string;
  /**
   * Block height at which this service configuration was deactivated (0 if still active)
   * For service configs scheduled for deactivation:
   * - This field stores the block height when deactivation will occur
   * - After deactivation, the config remains in history only as needed for claim settlement
   * - Once no longer required for settlement, the config is automatically removed by
   *   the EndBlockerPruneSupplierServiceConfigHistory process
   */
  deactivation_height?: string;
}
export interface ServiceConfigUpdateAminoMsg {
  type: "/pocket.shared.ServiceConfigUpdate";
  value: ServiceConfigUpdateAmino;
}
/**
 * ServiceConfigUpdate tracks a change in a supplier's service configurations
 * at a specific block height, enabling tracking of configuration changes over time.
 * This record helps maintain a complete history of service configs and their availability periods.
 */
export interface ServiceConfigUpdateSDKType {
  operator_address: string;
  service?: SupplierServiceConfigSDKType;
  activation_height: bigint;
  deactivation_height: bigint;
}
function createBaseSupplier(): Supplier {
  return {
    ownerAddress: "",
    operatorAddress: "",
    stake: undefined,
    services: [],
    unstakeSessionEndHeight: BigInt(0),
    serviceConfigHistory: []
  };
}
export const Supplier = {
  typeUrl: "/pocket.shared.Supplier",
  encode(message: Supplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.services) {
      SupplierServiceConfig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.unstakeSessionEndHeight !== BigInt(0)) {
      writer.uint32(40).uint64(message.unstakeSessionEndHeight);
    }
    for (const v of message.serviceConfigHistory) {
      ServiceConfigUpdate.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Supplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.services.push(SupplierServiceConfig.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unstakeSessionEndHeight = reader.uint64();
          break;
        case 6:
          message.serviceConfigHistory.push(ServiceConfigUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Supplier>): Supplier {
    const message = createBaseSupplier();
    message.ownerAddress = object.ownerAddress ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.services = object.services?.map(e => SupplierServiceConfig.fromPartial(e)) || [];
    message.unstakeSessionEndHeight = object.unstakeSessionEndHeight !== undefined && object.unstakeSessionEndHeight !== null ? BigInt(object.unstakeSessionEndHeight.toString()) : BigInt(0);
    message.serviceConfigHistory = object.serviceConfigHistory?.map(e => ServiceConfigUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SupplierAmino): Supplier {
    const message = createBaseSupplier();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    message.services = object.services?.map(e => SupplierServiceConfig.fromAmino(e)) || [];
    if (object.unstake_session_end_height !== undefined && object.unstake_session_end_height !== null) {
      message.unstakeSessionEndHeight = BigInt(object.unstake_session_end_height);
    }
    message.serviceConfigHistory = object.service_config_history?.map(e => ServiceConfigUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Supplier): SupplierAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    if (message.services) {
      obj.services = message.services.map(e => e ? SupplierServiceConfig.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    obj.unstake_session_end_height = message.unstakeSessionEndHeight !== BigInt(0) ? message.unstakeSessionEndHeight?.toString() : undefined;
    if (message.serviceConfigHistory) {
      obj.service_config_history = message.serviceConfigHistory.map(e => e ? ServiceConfigUpdate.toAmino(e) : undefined);
    } else {
      obj.service_config_history = message.serviceConfigHistory;
    }
    return obj;
  },
  fromAminoMsg(object: SupplierAminoMsg): Supplier {
    return Supplier.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplierProtoMsg): Supplier {
    return Supplier.decode(message.value);
  },
  toProto(message: Supplier): Uint8Array {
    return Supplier.encode(message).finish();
  },
  toProtoMsg(message: Supplier): SupplierProtoMsg {
    return {
      typeUrl: "/pocket.shared.Supplier",
      value: Supplier.encode(message).finish()
    };
  }
};
function createBaseServiceConfigUpdate(): ServiceConfigUpdate {
  return {
    operatorAddress: "",
    service: undefined,
    activationHeight: BigInt(0),
    deactivationHeight: BigInt(0)
  };
}
export const ServiceConfigUpdate = {
  typeUrl: "/pocket.shared.ServiceConfigUpdate",
  encode(message: ServiceConfigUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.service !== undefined) {
      SupplierServiceConfig.encode(message.service, writer.uint32(18).fork()).ldelim();
    }
    if (message.activationHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.activationHeight);
    }
    if (message.deactivationHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.deactivationHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceConfigUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.service = SupplierServiceConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.activationHeight = reader.int64();
          break;
        case 4:
          message.deactivationHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceConfigUpdate>): ServiceConfigUpdate {
    const message = createBaseServiceConfigUpdate();
    message.operatorAddress = object.operatorAddress ?? "";
    message.service = object.service !== undefined && object.service !== null ? SupplierServiceConfig.fromPartial(object.service) : undefined;
    message.activationHeight = object.activationHeight !== undefined && object.activationHeight !== null ? BigInt(object.activationHeight.toString()) : BigInt(0);
    message.deactivationHeight = object.deactivationHeight !== undefined && object.deactivationHeight !== null ? BigInt(object.deactivationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ServiceConfigUpdateAmino): ServiceConfigUpdate {
    const message = createBaseServiceConfigUpdate();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = SupplierServiceConfig.fromAmino(object.service);
    }
    if (object.activation_height !== undefined && object.activation_height !== null) {
      message.activationHeight = BigInt(object.activation_height);
    }
    if (object.deactivation_height !== undefined && object.deactivation_height !== null) {
      message.deactivationHeight = BigInt(object.deactivation_height);
    }
    return message;
  },
  toAmino(message: ServiceConfigUpdate): ServiceConfigUpdateAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service = message.service ? SupplierServiceConfig.toAmino(message.service) : undefined;
    obj.activation_height = message.activationHeight !== BigInt(0) ? message.activationHeight?.toString() : undefined;
    obj.deactivation_height = message.deactivationHeight !== BigInt(0) ? message.deactivationHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceConfigUpdateAminoMsg): ServiceConfigUpdate {
    return ServiceConfigUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceConfigUpdateProtoMsg): ServiceConfigUpdate {
    return ServiceConfigUpdate.decode(message.value);
  },
  toProto(message: ServiceConfigUpdate): Uint8Array {
    return ServiceConfigUpdate.encode(message).finish();
  },
  toProtoMsg(message: ServiceConfigUpdate): ServiceConfigUpdateProtoMsg {
    return {
      typeUrl: "/pocket.shared.ServiceConfigUpdate",
      value: ServiceConfigUpdate.encode(message).finish()
    };
  }
};