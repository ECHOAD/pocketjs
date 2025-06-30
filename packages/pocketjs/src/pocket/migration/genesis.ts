//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MorseClaimableAccount, MorseClaimableAccountAmino, MorseClaimableAccountSDKType } from "./morse_onchain";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the migration module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  morseClaimableAccountList: MorseClaimableAccount[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pocket.migration.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the migration module's genesis state.
 * @name GenesisStateAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  morseClaimableAccountList?: MorseClaimableAccountAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pocket.migration.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the migration module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  morseClaimableAccountList: MorseClaimableAccountSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    morseClaimableAccountList: []
  };
}
export const GenesisState = {
  typeUrl: "/pocket.migration.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.morseClaimableAccountList) {
      MorseClaimableAccount.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.morseClaimableAccountList.push(MorseClaimableAccount.decode(reader, reader.uint32()));
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
    message.morseClaimableAccountList = object.morseClaimableAccountList?.map(e => MorseClaimableAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.morseClaimableAccountList = object.morseClaimableAccountList?.map(e => MorseClaimableAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.morseClaimableAccountList) {
      obj.morseClaimableAccountList = message.morseClaimableAccountList.map(e => e ? MorseClaimableAccount.toAmino(e) : undefined);
    } else {
      obj.morseClaimableAccountList = message.morseClaimableAccountList;
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
      typeUrl: "/pocket.migration.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};