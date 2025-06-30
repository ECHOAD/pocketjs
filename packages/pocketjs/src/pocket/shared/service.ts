//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Enum to define RPC types */
export enum RPCType {
  /** UNKNOWN_RPC - Undefined RPC type */
  UNKNOWN_RPC = 0,
  /** GRPC - gRPC */
  GRPC = 1,
  /** WEBSOCKET - WebSocket */
  WEBSOCKET = 2,
  /** JSON_RPC - JSON-RPC */
  JSON_RPC = 3,
  /** REST - REST */
  REST = 4,
  UNRECOGNIZED = -1,
}
export const RPCTypeSDKType = RPCType;
export const RPCTypeAmino = RPCType;
export function rPCTypeFromJSON(object: any): RPCType {
  switch (object) {
    case 0:
    case "UNKNOWN_RPC":
      return RPCType.UNKNOWN_RPC;
    case 1:
    case "GRPC":
      return RPCType.GRPC;
    case 2:
    case "WEBSOCKET":
      return RPCType.WEBSOCKET;
    case 3:
    case "JSON_RPC":
      return RPCType.JSON_RPC;
    case 4:
    case "REST":
      return RPCType.REST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RPCType.UNRECOGNIZED;
  }
}
export function rPCTypeToJSON(object: RPCType): string {
  switch (object) {
    case RPCType.UNKNOWN_RPC:
      return "UNKNOWN_RPC";
    case RPCType.GRPC:
      return "GRPC";
    case RPCType.WEBSOCKET:
      return "WEBSOCKET";
    case RPCType.JSON_RPC:
      return "JSON_RPC";
    case RPCType.REST:
      return "REST";
    case RPCType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Enum to define configuration options
 * TODO_RESEARCH: Should these be configs, SLAs or something else? There will be more discussion once we get closer to implementing onchain QoS.
 */
export enum ConfigOptions {
  /** UNKNOWN_CONFIG - Undefined config option */
  UNKNOWN_CONFIG = 0,
  /** TIMEOUT - Timeout setting */
  TIMEOUT = 1,
  UNRECOGNIZED = -1,
}
export const ConfigOptionsSDKType = ConfigOptions;
export const ConfigOptionsAmino = ConfigOptions;
export function configOptionsFromJSON(object: any): ConfigOptions {
  switch (object) {
    case 0:
    case "UNKNOWN_CONFIG":
      return ConfigOptions.UNKNOWN_CONFIG;
    case 1:
    case "TIMEOUT":
      return ConfigOptions.TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfigOptions.UNRECOGNIZED;
  }
}
export function configOptionsToJSON(object: ConfigOptions): string {
  switch (object) {
    case ConfigOptions.UNKNOWN_CONFIG:
      return "UNKNOWN_CONFIG";
    case ConfigOptions.TIMEOUT:
      return "TIMEOUT";
    case ConfigOptions.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Service message to encapsulate unique and semantic identifiers for a service on the network */
export interface Service {
  /** For example, what if we want to request a session for a certain service but with some additional configs that identify it? */
  id: string;
  /** TODO_POST_MAINNET: Rename service.name to service.description */
  name: string;
  /**
   * The cost of a single relay for this service in terms of compute units.
   * Must be used alongside the global 'compute_units_to_tokens_multiplier' to calculate the cost of a relay for this service.
   * cost_per_relay_for_specific_service = compute_units_per_relay_for_specific_service * compute_units_to_tokens_multiplier_global_value
   */
  computeUnitsPerRelay: bigint;
  /**
   * The owner address that created the service.
   * It is the address that receives rewards based on the Service's onchain usage
   * It is the only address that can update the service configuration (e.g. compute_units_per_relay),
   * or make other updates to it.
   */
  ownerAddress: string;
}
export interface ServiceProtoMsg {
  typeUrl: "/pocket.shared.Service";
  value: Uint8Array;
}
/**
 * Service message to encapsulate unique and semantic identifiers for a service on the network
 * @name ServiceAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.Service
 */
export interface ServiceAmino {
  /**
   * For example, what if we want to request a session for a certain service but with some additional configs that identify it?
   */
  id?: string;
  /**
   * TODO_POST_MAINNET: Rename service.name to service.description
   */
  name?: string;
  /**
   * The cost of a single relay for this service in terms of compute units.
   * Must be used alongside the global 'compute_units_to_tokens_multiplier' to calculate the cost of a relay for this service.
   * cost_per_relay_for_specific_service = compute_units_per_relay_for_specific_service * compute_units_to_tokens_multiplier_global_value
   */
  compute_units_per_relay?: string;
  /**
   * The owner address that created the service.
   * It is the address that receives rewards based on the Service's onchain usage
   * It is the only address that can update the service configuration (e.g. compute_units_per_relay),
   * or make other updates to it.
   */
  owner_address?: string;
}
export interface ServiceAminoMsg {
  type: "/pocket.shared.Service";
  value: ServiceAmino;
}
/** Service message to encapsulate unique and semantic identifiers for a service on the network */
export interface ServiceSDKType {
  id: string;
  name: string;
  compute_units_per_relay: bigint;
  owner_address: string;
}
/** ApplicationServiceConfig holds the service configuration the application stakes for */
export interface ApplicationServiceConfig {
  /** The Service ID for which the application is configured */
  serviceId: string;
}
export interface ApplicationServiceConfigProtoMsg {
  typeUrl: "/pocket.shared.ApplicationServiceConfig";
  value: Uint8Array;
}
/**
 * ApplicationServiceConfig holds the service configuration the application stakes for
 * @name ApplicationServiceConfigAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.ApplicationServiceConfig
 */
export interface ApplicationServiceConfigAmino {
  /**
   * The Service ID for which the application is configured
   */
  service_id?: string;
}
export interface ApplicationServiceConfigAminoMsg {
  type: "/pocket.shared.ApplicationServiceConfig";
  value: ApplicationServiceConfigAmino;
}
/** ApplicationServiceConfig holds the service configuration the application stakes for */
export interface ApplicationServiceConfigSDKType {
  service_id: string;
}
/** SupplierServiceConfig holds the service configuration the supplier stakes for */
export interface SupplierServiceConfig {
  /** The Service ID for which the supplier is configured */
  serviceId: string;
  /** List of endpoints for the service */
  endpoints: SupplierEndpoint[];
  /** List of revenue share configurations for the service */
  revShare: ServiceRevenueShare[];
}
export interface SupplierServiceConfigProtoMsg {
  typeUrl: "/pocket.shared.SupplierServiceConfig";
  value: Uint8Array;
}
/**
 * SupplierServiceConfig holds the service configuration the supplier stakes for
 * @name SupplierServiceConfigAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.SupplierServiceConfig
 */
export interface SupplierServiceConfigAmino {
  /**
   * The Service ID for which the supplier is configured
   */
  service_id?: string;
  /**
   * List of endpoints for the service
   */
  endpoints?: SupplierEndpointAmino[];
  /**
   * List of revenue share configurations for the service
   */
  rev_share?: ServiceRevenueShareAmino[];
}
export interface SupplierServiceConfigAminoMsg {
  type: "/pocket.shared.SupplierServiceConfig";
  value: SupplierServiceConfigAmino;
}
/** SupplierServiceConfig holds the service configuration the supplier stakes for */
export interface SupplierServiceConfigSDKType {
  service_id: string;
  endpoints: SupplierEndpointSDKType[];
  rev_share: ServiceRevenueShareSDKType[];
}
/** SupplierEndpoint message to hold service configuration details */
export interface SupplierEndpoint {
  /** URL of the endpoint */
  url: string;
  /** Type of RPC exposed on the url above */
  rpcType: RPCType;
  /** Additional configuration options for the endpoint */
  configs: ConfigOption[];
}
export interface SupplierEndpointProtoMsg {
  typeUrl: "/pocket.shared.SupplierEndpoint";
  value: Uint8Array;
}
/**
 * SupplierEndpoint message to hold service configuration details
 * @name SupplierEndpointAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.SupplierEndpoint
 */
export interface SupplierEndpointAmino {
  /**
   * URL of the endpoint
   */
  url?: string;
  /**
   * Type of RPC exposed on the url above
   */
  rpc_type?: RPCType;
  /**
   * Additional configuration options for the endpoint
   */
  configs?: ConfigOptionAmino[];
}
export interface SupplierEndpointAminoMsg {
  type: "/pocket.shared.SupplierEndpoint";
  value: SupplierEndpointAmino;
}
/** SupplierEndpoint message to hold service configuration details */
export interface SupplierEndpointSDKType {
  url: string;
  rpc_type: RPCType;
  configs: ConfigOptionSDKType[];
}
/** ServiceRevenueShare message to hold revenue share configuration details */
export interface ServiceRevenueShare {
  /** The Bech32 address of the revenue share recipient */
  address: string;
  /** The percentage of revenue share the recipient will receive */
  revSharePercentage: bigint;
}
export interface ServiceRevenueShareProtoMsg {
  typeUrl: "/pocket.shared.ServiceRevenueShare";
  value: Uint8Array;
}
/**
 * ServiceRevenueShare message to hold revenue share configuration details
 * @name ServiceRevenueShareAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.ServiceRevenueShare
 */
export interface ServiceRevenueShareAmino {
  /**
   * The Bech32 address of the revenue share recipient
   */
  address?: string;
  /**
   * The percentage of revenue share the recipient will receive
   */
  rev_share_percentage?: string;
}
export interface ServiceRevenueShareAminoMsg {
  type: "/pocket.shared.ServiceRevenueShare";
  value: ServiceRevenueShareAmino;
}
/** ServiceRevenueShare message to hold revenue share configuration details */
export interface ServiceRevenueShareSDKType {
  address: string;
  rev_share_percentage: bigint;
}
/** Key-value wrapper for config options, as proto maps can't be keyed by enums */
export interface ConfigOption {
  /** Config option key */
  key: ConfigOptions;
  /** Config option value */
  value: string;
}
export interface ConfigOptionProtoMsg {
  typeUrl: "/pocket.shared.ConfigOption";
  value: Uint8Array;
}
/**
 * Key-value wrapper for config options, as proto maps can't be keyed by enums
 * @name ConfigOptionAmino
 * @package pocket.shared
 * @see proto type: pocket.shared.ConfigOption
 */
export interface ConfigOptionAmino {
  /**
   * Config option key
   */
  key?: ConfigOptions;
  /**
   * Config option value
   */
  value?: string;
}
export interface ConfigOptionAminoMsg {
  type: "/pocket.shared.ConfigOption";
  value: ConfigOptionAmino;
}
/** Key-value wrapper for config options, as proto maps can't be keyed by enums */
export interface ConfigOptionSDKType {
  key: ConfigOptions;
  value: string;
}
function createBaseService(): Service {
  return {
    id: "",
    name: "",
    computeUnitsPerRelay: BigInt(0),
    ownerAddress: ""
  };
}
export const Service = {
  typeUrl: "/pocket.shared.Service",
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.computeUnitsPerRelay !== BigInt(0)) {
      writer.uint32(24).uint64(message.computeUnitsPerRelay);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.computeUnitsPerRelay = reader.uint64();
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Service>): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.computeUnitsPerRelay = object.computeUnitsPerRelay !== undefined && object.computeUnitsPerRelay !== null ? BigInt(object.computeUnitsPerRelay.toString()) : BigInt(0);
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.compute_units_per_relay !== undefined && object.compute_units_per_relay !== null) {
      message.computeUnitsPerRelay = BigInt(object.compute_units_per_relay);
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.compute_units_per_relay = message.computeUnitsPerRelay !== BigInt(0) ? message.computeUnitsPerRelay?.toString() : undefined;
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: ServiceAminoMsg): Service {
    return Service.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/pocket.shared.Service",
      value: Service.encode(message).finish()
    };
  }
};
function createBaseApplicationServiceConfig(): ApplicationServiceConfig {
  return {
    serviceId: ""
  };
}
export const ApplicationServiceConfig = {
  typeUrl: "/pocket.shared.ApplicationServiceConfig",
  encode(message: ApplicationServiceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApplicationServiceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationServiceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ApplicationServiceConfig>): ApplicationServiceConfig {
    const message = createBaseApplicationServiceConfig();
    message.serviceId = object.serviceId ?? "";
    return message;
  },
  fromAmino(object: ApplicationServiceConfigAmino): ApplicationServiceConfig {
    const message = createBaseApplicationServiceConfig();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: ApplicationServiceConfig): ApplicationServiceConfigAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: ApplicationServiceConfigAminoMsg): ApplicationServiceConfig {
    return ApplicationServiceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ApplicationServiceConfigProtoMsg): ApplicationServiceConfig {
    return ApplicationServiceConfig.decode(message.value);
  },
  toProto(message: ApplicationServiceConfig): Uint8Array {
    return ApplicationServiceConfig.encode(message).finish();
  },
  toProtoMsg(message: ApplicationServiceConfig): ApplicationServiceConfigProtoMsg {
    return {
      typeUrl: "/pocket.shared.ApplicationServiceConfig",
      value: ApplicationServiceConfig.encode(message).finish()
    };
  }
};
function createBaseSupplierServiceConfig(): SupplierServiceConfig {
  return {
    serviceId: "",
    endpoints: [],
    revShare: []
  };
}
export const SupplierServiceConfig = {
  typeUrl: "/pocket.shared.SupplierServiceConfig",
  encode(message: SupplierServiceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    for (const v of message.endpoints) {
      SupplierEndpoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.revShare) {
      ServiceRevenueShare.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SupplierServiceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplierServiceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.endpoints.push(SupplierEndpoint.decode(reader, reader.uint32()));
          break;
        case 3:
          message.revShare.push(ServiceRevenueShare.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SupplierServiceConfig>): SupplierServiceConfig {
    const message = createBaseSupplierServiceConfig();
    message.serviceId = object.serviceId ?? "";
    message.endpoints = object.endpoints?.map(e => SupplierEndpoint.fromPartial(e)) || [];
    message.revShare = object.revShare?.map(e => ServiceRevenueShare.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SupplierServiceConfigAmino): SupplierServiceConfig {
    const message = createBaseSupplierServiceConfig();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.endpoints = object.endpoints?.map(e => SupplierEndpoint.fromAmino(e)) || [];
    message.revShare = object.rev_share?.map(e => ServiceRevenueShare.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SupplierServiceConfig): SupplierServiceConfigAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? SupplierEndpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    if (message.revShare) {
      obj.rev_share = message.revShare.map(e => e ? ServiceRevenueShare.toAmino(e) : undefined);
    } else {
      obj.rev_share = message.revShare;
    }
    return obj;
  },
  fromAminoMsg(object: SupplierServiceConfigAminoMsg): SupplierServiceConfig {
    return SupplierServiceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplierServiceConfigProtoMsg): SupplierServiceConfig {
    return SupplierServiceConfig.decode(message.value);
  },
  toProto(message: SupplierServiceConfig): Uint8Array {
    return SupplierServiceConfig.encode(message).finish();
  },
  toProtoMsg(message: SupplierServiceConfig): SupplierServiceConfigProtoMsg {
    return {
      typeUrl: "/pocket.shared.SupplierServiceConfig",
      value: SupplierServiceConfig.encode(message).finish()
    };
  }
};
function createBaseSupplierEndpoint(): SupplierEndpoint {
  return {
    url: "",
    rpcType: 0,
    configs: []
  };
}
export const SupplierEndpoint = {
  typeUrl: "/pocket.shared.SupplierEndpoint",
  encode(message: SupplierEndpoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.rpcType !== 0) {
      writer.uint32(16).int32(message.rpcType);
    }
    for (const v of message.configs) {
      ConfigOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SupplierEndpoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplierEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.rpcType = reader.int32() as any;
          break;
        case 3:
          message.configs.push(ConfigOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SupplierEndpoint>): SupplierEndpoint {
    const message = createBaseSupplierEndpoint();
    message.url = object.url ?? "";
    message.rpcType = object.rpcType ?? 0;
    message.configs = object.configs?.map(e => ConfigOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SupplierEndpointAmino): SupplierEndpoint {
    const message = createBaseSupplierEndpoint();
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.rpc_type !== undefined && object.rpc_type !== null) {
      message.rpcType = object.rpc_type;
    }
    message.configs = object.configs?.map(e => ConfigOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SupplierEndpoint): SupplierEndpointAmino {
    const obj: any = {};
    obj.url = message.url === "" ? undefined : message.url;
    obj.rpc_type = message.rpcType === 0 ? undefined : message.rpcType;
    if (message.configs) {
      obj.configs = message.configs.map(e => e ? ConfigOption.toAmino(e) : undefined);
    } else {
      obj.configs = message.configs;
    }
    return obj;
  },
  fromAminoMsg(object: SupplierEndpointAminoMsg): SupplierEndpoint {
    return SupplierEndpoint.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplierEndpointProtoMsg): SupplierEndpoint {
    return SupplierEndpoint.decode(message.value);
  },
  toProto(message: SupplierEndpoint): Uint8Array {
    return SupplierEndpoint.encode(message).finish();
  },
  toProtoMsg(message: SupplierEndpoint): SupplierEndpointProtoMsg {
    return {
      typeUrl: "/pocket.shared.SupplierEndpoint",
      value: SupplierEndpoint.encode(message).finish()
    };
  }
};
function createBaseServiceRevenueShare(): ServiceRevenueShare {
  return {
    address: "",
    revSharePercentage: BigInt(0)
  };
}
export const ServiceRevenueShare = {
  typeUrl: "/pocket.shared.ServiceRevenueShare",
  encode(message: ServiceRevenueShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.revSharePercentage !== BigInt(0)) {
      writer.uint32(24).uint64(message.revSharePercentage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceRevenueShare {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceRevenueShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 3:
          message.revSharePercentage = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceRevenueShare>): ServiceRevenueShare {
    const message = createBaseServiceRevenueShare();
    message.address = object.address ?? "";
    message.revSharePercentage = object.revSharePercentage !== undefined && object.revSharePercentage !== null ? BigInt(object.revSharePercentage.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ServiceRevenueShareAmino): ServiceRevenueShare {
    const message = createBaseServiceRevenueShare();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.rev_share_percentage !== undefined && object.rev_share_percentage !== null) {
      message.revSharePercentage = BigInt(object.rev_share_percentage);
    }
    return message;
  },
  toAmino(message: ServiceRevenueShare): ServiceRevenueShareAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.rev_share_percentage = message.revSharePercentage !== BigInt(0) ? message.revSharePercentage?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceRevenueShareAminoMsg): ServiceRevenueShare {
    return ServiceRevenueShare.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceRevenueShareProtoMsg): ServiceRevenueShare {
    return ServiceRevenueShare.decode(message.value);
  },
  toProto(message: ServiceRevenueShare): Uint8Array {
    return ServiceRevenueShare.encode(message).finish();
  },
  toProtoMsg(message: ServiceRevenueShare): ServiceRevenueShareProtoMsg {
    return {
      typeUrl: "/pocket.shared.ServiceRevenueShare",
      value: ServiceRevenueShare.encode(message).finish()
    };
  }
};
function createBaseConfigOption(): ConfigOption {
  return {
    key: 0,
    value: ""
  };
}
export const ConfigOption = {
  typeUrl: "/pocket.shared.ConfigOption",
  encode(message: ConfigOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32() as any;
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ConfigOption>): ConfigOption {
    const message = createBaseConfigOption();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: ConfigOptionAmino): ConfigOption {
    const message = createBaseConfigOption();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ConfigOption): ConfigOptionAmino {
    const obj: any = {};
    obj.key = message.key === 0 ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ConfigOptionAminoMsg): ConfigOption {
    return ConfigOption.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigOptionProtoMsg): ConfigOption {
    return ConfigOption.decode(message.value);
  },
  toProto(message: ConfigOption): Uint8Array {
    return ConfigOption.encode(message).finish();
  },
  toProtoMsg(message: ConfigOption): ConfigOptionProtoMsg {
    return {
      typeUrl: "/pocket.shared.ConfigOption",
      value: ConfigOption.encode(message).finish()
    };
  }
};