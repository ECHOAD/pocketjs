//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Service, ServiceAmino, ServiceSDKType } from "../shared/service";
import { RelayMiningDifficulty, RelayMiningDifficultyAmino, RelayMiningDifficultySDKType } from "./relay_mining_difficulty";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the service module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  serviceList: Service[];
  relayMiningDifficultyList: RelayMiningDifficulty[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pocket.service.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the service module's genesis state.
 * @name GenesisStateAmino
 * @package pocket.service
 * @see proto type: pocket.service.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  service_list?: ServiceAmino[];
  relayMiningDifficultyList?: RelayMiningDifficultyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pocket.service.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the service module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  service_list: ServiceSDKType[];
  relayMiningDifficultyList: RelayMiningDifficultySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    serviceList: [],
    relayMiningDifficultyList: []
  };
}
export const GenesisState = {
  typeUrl: "/pocket.service.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.serviceList) {
      Service.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.relayMiningDifficultyList) {
      RelayMiningDifficulty.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.serviceList.push(Service.decode(reader, reader.uint32()));
          break;
        case 3:
          message.relayMiningDifficultyList.push(RelayMiningDifficulty.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.serviceList = object.serviceList?.map(e => Service.fromPartial(e)) || [];
    message.relayMiningDifficultyList = object.relayMiningDifficultyList?.map(e => RelayMiningDifficulty.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.serviceList = object.service_list?.map(e => Service.fromAmino(e)) || [];
    message.relayMiningDifficultyList = object.relayMiningDifficultyList?.map(e => RelayMiningDifficulty.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.serviceList) {
      obj.service_list = message.serviceList.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.service_list = message.serviceList;
    }
    if (message.relayMiningDifficultyList) {
      obj.relayMiningDifficultyList = message.relayMiningDifficultyList.map(e => e ? RelayMiningDifficulty.toAmino(e) : undefined);
    } else {
      obj.relayMiningDifficultyList = message.relayMiningDifficultyList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pocket.service.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};