//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /** min_stake is the minimum amount of uPOKT that a gateway must stake. */
  minStake?: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.gateway.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.Params
 */
export interface ParamsAmino {
  /**
   * min_stake is the minimum amount of uPOKT that a gateway must stake.
   */
  min_stake: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "pocket/x/gateway/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_stake?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    minStake: undefined
  };
}
export const Params = {
  typeUrl: "/pocket.gateway.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minStake !== undefined) {
      Coin.encode(message.minStake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minStake = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minStake = object.minStake !== undefined && object.minStake !== null ? Coin.fromPartial(object.minStake) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = Coin.fromAmino(object.min_stake);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_stake = message.minStake ? Coin.toAmino(message.minStake) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/gateway/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pocket.gateway.Params",
      value: Params.encode(message).finish()
    };
  }
};