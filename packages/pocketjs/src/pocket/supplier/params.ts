//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * min_stake is the minimum amount of uPOKT that a supplier must stake to be
   * included in network sessions and remain staked.
   */
  minStake?: Coin;
  /** staking_fee is the fee charged by the protocol for staking a supplier. */
  stakingFee?: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.supplier.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.Params
 */
export interface ParamsAmino {
  /**
   * min_stake is the minimum amount of uPOKT that a supplier must stake to be
   * included in network sessions and remain staked.
   */
  min_stake: CoinAmino;
  /**
   * staking_fee is the fee charged by the protocol for staking a supplier.
   */
  staking_fee: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "pocket/x/supplier/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_stake?: CoinSDKType;
  staking_fee?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    minStake: undefined,
    stakingFee: undefined
  };
}
export const Params = {
  typeUrl: "/pocket.supplier.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minStake !== undefined) {
      Coin.encode(message.minStake, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakingFee !== undefined) {
      Coin.encode(message.stakingFee, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.stakingFee = Coin.decode(reader, reader.uint32());
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
    message.stakingFee = object.stakingFee !== undefined && object.stakingFee !== null ? Coin.fromPartial(object.stakingFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = Coin.fromAmino(object.min_stake);
    }
    if (object.staking_fee !== undefined && object.staking_fee !== null) {
      message.stakingFee = Coin.fromAmino(object.staking_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_stake = message.minStake ? Coin.toAmino(message.minStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.staking_fee = message.stakingFee ? Coin.toAmino(message.stakingFee) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/supplier/Params",
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
      typeUrl: "/pocket.supplier.Params",
      value: Params.encode(message).finish()
    };
  }
};