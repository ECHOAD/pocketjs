//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Gateway {
  /** The Bech32 address of the gateway */
  address: string;
  /** The total amount of uPOKT the gateway has staked */
  stake?: Coin;
  /** Session end height at which the gateway initiated unstaking (0 if not unstaking) */
  unstakeSessionEndHeight: bigint;
}
export interface GatewayProtoMsg {
  typeUrl: "/pocket.gateway.Gateway";
  value: Uint8Array;
}
/**
 * @name GatewayAmino
 * @package pocket.gateway
 * @see proto type: pocket.gateway.Gateway
 */
export interface GatewayAmino {
  /**
   * The Bech32 address of the gateway
   */
  address?: string;
  /**
   * The total amount of uPOKT the gateway has staked
   */
  stake?: CoinAmino;
  /**
   * Session end height at which the gateway initiated unstaking (0 if not unstaking)
   */
  unstake_session_end_height?: string;
}
export interface GatewayAminoMsg {
  type: "/pocket.gateway.Gateway";
  value: GatewayAmino;
}
export interface GatewaySDKType {
  address: string;
  stake?: CoinSDKType;
  unstake_session_end_height: bigint;
}
function createBaseGateway(): Gateway {
  return {
    address: "",
    stake: undefined,
    unstakeSessionEndHeight: BigInt(0)
  };
}
export const Gateway = {
  typeUrl: "/pocket.gateway.Gateway",
  encode(message: Gateway, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(18).fork()).ldelim();
    }
    if (message.unstakeSessionEndHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.unstakeSessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Gateway {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.unstakeSessionEndHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Gateway>): Gateway {
    const message = createBaseGateway();
    message.address = object.address ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.unstakeSessionEndHeight = object.unstakeSessionEndHeight !== undefined && object.unstakeSessionEndHeight !== null ? BigInt(object.unstakeSessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GatewayAmino): Gateway {
    const message = createBaseGateway();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    if (object.unstake_session_end_height !== undefined && object.unstake_session_end_height !== null) {
      message.unstakeSessionEndHeight = BigInt(object.unstake_session_end_height);
    }
    return message;
  },
  toAmino(message: Gateway): GatewayAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    obj.unstake_session_end_height = message.unstakeSessionEndHeight !== BigInt(0) ? message.unstakeSessionEndHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GatewayAminoMsg): Gateway {
    return Gateway.fromAmino(object.value);
  },
  fromProtoMsg(message: GatewayProtoMsg): Gateway {
    return Gateway.decode(message.value);
  },
  toProto(message: Gateway): Uint8Array {
    return Gateway.encode(message).finish();
  },
  toProtoMsg(message: Gateway): GatewayProtoMsg {
    return {
      typeUrl: "/pocket.gateway.Gateway",
      value: Gateway.encode(message).finish()
    };
  }
};