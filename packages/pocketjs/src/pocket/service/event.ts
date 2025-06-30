//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * EventRelayMiningDifficultyUpdated is an event emitted whenever the relay mining difficulty is updated
 * for a given service.
 */
export interface EventRelayMiningDifficultyUpdated {
  serviceId: string;
  prevTargetHashHexEncoded: string;
  newTargetHashHexEncoded: string;
  prevNumRelaysEma: bigint;
  newNumRelaysEma: bigint;
}
export interface EventRelayMiningDifficultyUpdatedProtoMsg {
  typeUrl: "/pocket.service.EventRelayMiningDifficultyUpdated";
  value: Uint8Array;
}
/**
 * EventRelayMiningDifficultyUpdated is an event emitted whenever the relay mining difficulty is updated
 * for a given service.
 * @name EventRelayMiningDifficultyUpdatedAmino
 * @package pocket.service
 * @see proto type: pocket.service.EventRelayMiningDifficultyUpdated
 */
export interface EventRelayMiningDifficultyUpdatedAmino {
  service_id?: string;
  prev_target_hash_hex_encoded?: string;
  new_target_hash_hex_encoded?: string;
  prev_num_relays_ema?: string;
  new_num_relays_ema?: string;
}
export interface EventRelayMiningDifficultyUpdatedAminoMsg {
  type: "/pocket.service.EventRelayMiningDifficultyUpdated";
  value: EventRelayMiningDifficultyUpdatedAmino;
}
/**
 * EventRelayMiningDifficultyUpdated is an event emitted whenever the relay mining difficulty is updated
 * for a given service.
 */
export interface EventRelayMiningDifficultyUpdatedSDKType {
  service_id: string;
  prev_target_hash_hex_encoded: string;
  new_target_hash_hex_encoded: string;
  prev_num_relays_ema: bigint;
  new_num_relays_ema: bigint;
}
function createBaseEventRelayMiningDifficultyUpdated(): EventRelayMiningDifficultyUpdated {
  return {
    serviceId: "",
    prevTargetHashHexEncoded: "",
    newTargetHashHexEncoded: "",
    prevNumRelaysEma: BigInt(0),
    newNumRelaysEma: BigInt(0)
  };
}
export const EventRelayMiningDifficultyUpdated = {
  typeUrl: "/pocket.service.EventRelayMiningDifficultyUpdated",
  encode(message: EventRelayMiningDifficultyUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.prevTargetHashHexEncoded !== "") {
      writer.uint32(18).string(message.prevTargetHashHexEncoded);
    }
    if (message.newTargetHashHexEncoded !== "") {
      writer.uint32(26).string(message.newTargetHashHexEncoded);
    }
    if (message.prevNumRelaysEma !== BigInt(0)) {
      writer.uint32(32).uint64(message.prevNumRelaysEma);
    }
    if (message.newNumRelaysEma !== BigInt(0)) {
      writer.uint32(40).uint64(message.newNumRelaysEma);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRelayMiningDifficultyUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRelayMiningDifficultyUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.prevTargetHashHexEncoded = reader.string();
          break;
        case 3:
          message.newTargetHashHexEncoded = reader.string();
          break;
        case 4:
          message.prevNumRelaysEma = reader.uint64();
          break;
        case 5:
          message.newNumRelaysEma = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventRelayMiningDifficultyUpdated>): EventRelayMiningDifficultyUpdated {
    const message = createBaseEventRelayMiningDifficultyUpdated();
    message.serviceId = object.serviceId ?? "";
    message.prevTargetHashHexEncoded = object.prevTargetHashHexEncoded ?? "";
    message.newTargetHashHexEncoded = object.newTargetHashHexEncoded ?? "";
    message.prevNumRelaysEma = object.prevNumRelaysEma !== undefined && object.prevNumRelaysEma !== null ? BigInt(object.prevNumRelaysEma.toString()) : BigInt(0);
    message.newNumRelaysEma = object.newNumRelaysEma !== undefined && object.newNumRelaysEma !== null ? BigInt(object.newNumRelaysEma.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRelayMiningDifficultyUpdatedAmino): EventRelayMiningDifficultyUpdated {
    const message = createBaseEventRelayMiningDifficultyUpdated();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.prev_target_hash_hex_encoded !== undefined && object.prev_target_hash_hex_encoded !== null) {
      message.prevTargetHashHexEncoded = object.prev_target_hash_hex_encoded;
    }
    if (object.new_target_hash_hex_encoded !== undefined && object.new_target_hash_hex_encoded !== null) {
      message.newTargetHashHexEncoded = object.new_target_hash_hex_encoded;
    }
    if (object.prev_num_relays_ema !== undefined && object.prev_num_relays_ema !== null) {
      message.prevNumRelaysEma = BigInt(object.prev_num_relays_ema);
    }
    if (object.new_num_relays_ema !== undefined && object.new_num_relays_ema !== null) {
      message.newNumRelaysEma = BigInt(object.new_num_relays_ema);
    }
    return message;
  },
  toAmino(message: EventRelayMiningDifficultyUpdated): EventRelayMiningDifficultyUpdatedAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    obj.prev_target_hash_hex_encoded = message.prevTargetHashHexEncoded === "" ? undefined : message.prevTargetHashHexEncoded;
    obj.new_target_hash_hex_encoded = message.newTargetHashHexEncoded === "" ? undefined : message.newTargetHashHexEncoded;
    obj.prev_num_relays_ema = message.prevNumRelaysEma !== BigInt(0) ? message.prevNumRelaysEma?.toString() : undefined;
    obj.new_num_relays_ema = message.newNumRelaysEma !== BigInt(0) ? message.newNumRelaysEma?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRelayMiningDifficultyUpdatedAminoMsg): EventRelayMiningDifficultyUpdated {
    return EventRelayMiningDifficultyUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRelayMiningDifficultyUpdatedProtoMsg): EventRelayMiningDifficultyUpdated {
    return EventRelayMiningDifficultyUpdated.decode(message.value);
  },
  toProto(message: EventRelayMiningDifficultyUpdated): Uint8Array {
    return EventRelayMiningDifficultyUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventRelayMiningDifficultyUpdated): EventRelayMiningDifficultyUpdatedProtoMsg {
    return {
      typeUrl: "/pocket.service.EventRelayMiningDifficultyUpdated",
      value: EventRelayMiningDifficultyUpdated.encode(message).finish()
    };
  }
};