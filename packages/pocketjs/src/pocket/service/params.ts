//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * The amount of uPOKT required to add a new service.
   * This will be deducted from the signer's account balance,
   * and transferred to the pocket network foundation.
   */
  addServiceFee?: Coin;
  /**
   * target_num_relays is the target for the EMA of the number of relays per session.
   * Per service, onchain relay mining difficulty will be adjusted to maintain this target.
   */
  targetNumRelays: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.service.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.service
 * @see proto type: pocket.service.Params
 */
export interface ParamsAmino {
  /**
   * The amount of uPOKT required to add a new service.
   * This will be deducted from the signer's account balance,
   * and transferred to the pocket network foundation.
   */
  add_service_fee: CoinAmino;
  /**
   * target_num_relays is the target for the EMA of the number of relays per session.
   * Per service, onchain relay mining difficulty will be adjusted to maintain this target.
   */
  target_num_relays: string;
}
export interface ParamsAminoMsg {
  type: "pocket/x/service/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  add_service_fee?: CoinSDKType;
  target_num_relays: bigint;
}
function createBaseParams(): Params {
  return {
    addServiceFee: undefined,
    targetNumRelays: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/pocket.service.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addServiceFee !== undefined) {
      Coin.encode(message.addServiceFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetNumRelays !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetNumRelays);
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
          message.addServiceFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.targetNumRelays = reader.uint64();
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
    message.addServiceFee = object.addServiceFee !== undefined && object.addServiceFee !== null ? Coin.fromPartial(object.addServiceFee) : undefined;
    message.targetNumRelays = object.targetNumRelays !== undefined && object.targetNumRelays !== null ? BigInt(object.targetNumRelays.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.add_service_fee !== undefined && object.add_service_fee !== null) {
      message.addServiceFee = Coin.fromAmino(object.add_service_fee);
    }
    if (object.target_num_relays !== undefined && object.target_num_relays !== null) {
      message.targetNumRelays = BigInt(object.target_num_relays);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.add_service_fee = message.addServiceFee ? Coin.toAmino(message.addServiceFee) : Coin.toAmino(Coin.fromPartial({}));
    obj.target_num_relays = message.targetNumRelays ? message.targetNumRelays?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/service/Params",
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
      typeUrl: "/pocket.service.Params",
      value: Params.encode(message).finish()
    };
  }
};