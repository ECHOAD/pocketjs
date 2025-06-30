//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Application, ApplicationAmino, ApplicationSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the application module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  applicationList: Application[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pocket.application.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the application module's genesis state.
 * @name GenesisStateAmino
 * @package pocket.application
 * @see proto type: pocket.application.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  application_list?: ApplicationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pocket.application.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the application module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  application_list: ApplicationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    applicationList: []
  };
}
export const GenesisState = {
  typeUrl: "/pocket.application.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.applicationList) {
      Application.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.applicationList.push(Application.decode(reader, reader.uint32()));
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
    message.applicationList = object.applicationList?.map(e => Application.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.applicationList = object.application_list?.map(e => Application.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.applicationList) {
      obj.application_list = message.applicationList.map(e => e ? Application.toAmino(e) : undefined);
    } else {
      obj.application_list = message.applicationList;
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
      typeUrl: "/pocket.application.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};