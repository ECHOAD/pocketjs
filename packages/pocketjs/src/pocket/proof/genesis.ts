//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Claim, ClaimAmino, ClaimSDKType, Proof, ProofAmino, ProofSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the proof module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  claimList: Claim[];
  proofList: Proof[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pocket.proof.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the proof module's genesis state.
 * @name GenesisStateAmino
 * @package pocket.proof
 * @see proto type: pocket.proof.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  claim_list?: ClaimAmino[];
  proof_list?: ProofAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pocket.proof.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the proof module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  claim_list: ClaimSDKType[];
  proof_list: ProofSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    claimList: [],
    proofList: []
  };
}
export const GenesisState = {
  typeUrl: "/pocket.proof.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.claimList) {
      Claim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.proofList) {
      Proof.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.claimList.push(Claim.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proofList.push(Proof.decode(reader, reader.uint32()));
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
    message.claimList = object.claimList?.map(e => Claim.fromPartial(e)) || [];
    message.proofList = object.proofList?.map(e => Proof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.claimList = object.claim_list?.map(e => Claim.fromAmino(e)) || [];
    message.proofList = object.proof_list?.map(e => Proof.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.claimList) {
      obj.claim_list = message.claimList.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claim_list = message.claimList;
    }
    if (message.proofList) {
      obj.proof_list = message.proofList.map(e => e ? Proof.toAmino(e) : undefined);
    } else {
      obj.proof_list = message.proofList;
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
      typeUrl: "/pocket.proof.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};