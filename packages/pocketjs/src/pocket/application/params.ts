//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * max_delegated_gateways defines the maximum number of gateways that a single
   * application can delegate to. This is used to prevent performance issues
   * in case the relay ring signature becomes too large.
   */
  maxDelegatedGateways: bigint;
  /** min_stake is the minimum stake in upokt that an application must have to remain staked. */
  minStake?: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.application.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.application
 * @see proto type: pocket.application.Params
 */
export interface ParamsAmino {
  /**
   * max_delegated_gateways defines the maximum number of gateways that a single
   * application can delegate to. This is used to prevent performance issues
   * in case the relay ring signature becomes too large.
   */
  max_delegated_gateways: string;
  /**
   * min_stake is the minimum stake in upokt that an application must have to remain staked.
   */
  min_stake: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "pocket/x/application/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  max_delegated_gateways: bigint;
  min_stake?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    maxDelegatedGateways: BigInt(0),
    minStake: undefined
  };
}
export const Params = {
  typeUrl: "/pocket.application.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxDelegatedGateways !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxDelegatedGateways);
    }
    if (message.minStake !== undefined) {
      Coin.encode(message.minStake, writer.uint32(18).fork()).ldelim();
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
          message.maxDelegatedGateways = reader.uint64();
          break;
        case 2:
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
    message.maxDelegatedGateways = object.maxDelegatedGateways !== undefined && object.maxDelegatedGateways !== null ? BigInt(object.maxDelegatedGateways.toString()) : BigInt(0);
    message.minStake = object.minStake !== undefined && object.minStake !== null ? Coin.fromPartial(object.minStake) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_delegated_gateways !== undefined && object.max_delegated_gateways !== null) {
      message.maxDelegatedGateways = BigInt(object.max_delegated_gateways);
    }
    if (object.min_stake !== undefined && object.min_stake !== null) {
      message.minStake = Coin.fromAmino(object.min_stake);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_delegated_gateways = message.maxDelegatedGateways ? message.maxDelegatedGateways?.toString() : "0";
    obj.min_stake = message.minStake ? Coin.toAmino(message.minStake) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/application/Params",
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
      typeUrl: "/pocket.application.Params",
      value: Params.encode(message).finish()
    };
  }
};