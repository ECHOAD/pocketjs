//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gateway, GatewayAmino, GatewaySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the gateway module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  gatewayList: Gateway[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pocket.gateway.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the gateway module's genesis state.
 * @name GenesisStateAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  gateway_list?: GatewayAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pocket.gateway.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the gateway module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  gateway_list: GatewaySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    gatewayList: []
  };
}
export const GenesisState = {
  typeUrl: "/pocket.gateway.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gatewayList) {
      Gateway.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.gatewayList.push(Gateway.decode(reader, reader.uint32()));
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
    message.gatewayList = object.gatewayList?.map(e => Gateway.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.gatewayList = object.gateway_list?.map(e => Gateway.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.gatewayList) {
      obj.gateway_list = message.gatewayList.map(e => e ? Gateway.toAmino(e) : undefined);
    } else {
      obj.gateway_list = message.gatewayList;
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
      typeUrl: "/pocket.gateway.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};