//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * RelayMiningDifficulty is a message used to store the onchain Relay Mining
 * difficulty associated with a specific service ID.
 * TODO_TECHDEBT: Embed this message in the Service message.
 */
export interface RelayMiningDifficulty {
  /** The service ID the relay mining difficulty is associated with. */
  serviceId: string;
  /**
   * The block height at which this relay mining difficulty was computed.
   * This is needed to determine how much time has passed since the last time
   * the exponential moving average was computed.
   */
  blockHeight: bigint;
  /** The exponential moving average of the number of relays for this service. */
  numRelaysEma: bigint;
  /**
   * The target hash determining the difficulty to mine relays for this service.
   * For example, if we use sha256 to hash the (RelayRequest,ReqlayResponse) tuple,
   * and the difficulty has 4 leading zero bits, then the target hash would be:
   * 0b0000111... (until 32 bytes are filled up).
   */
  targetHash: Uint8Array;
}
export interface RelayMiningDifficultyProtoMsg {
  typeUrl: "/pocket.service.RelayMiningDifficulty";
  value: Uint8Array;
}
/**
 * RelayMiningDifficulty is a message used to store the onchain Relay Mining
 * difficulty associated with a specific service ID.
 * TODO_TECHDEBT: Embed this message in the Service message.
 * @name RelayMiningDifficultyAmino
 * @package pocket.service
 * @see proto type: pocket.service.RelayMiningDifficulty
 */
export interface RelayMiningDifficultyAmino {
  /**
   * The service ID the relay mining difficulty is associated with.
   */
  service_id?: string;
  /**
   * The block height at which this relay mining difficulty was computed.
   * This is needed to determine how much time has passed since the last time
   * the exponential moving average was computed.
   */
  block_height?: string;
  /**
   * The exponential moving average of the number of relays for this service.
   */
  num_relays_ema?: string;
  /**
   * The target hash determining the difficulty to mine relays for this service.
   * For example, if we use sha256 to hash the (RelayRequest,ReqlayResponse) tuple,
   * and the difficulty has 4 leading zero bits, then the target hash would be:
   * 0b0000111... (until 32 bytes are filled up).
   */
  target_hash?: string;
}
export interface RelayMiningDifficultyAminoMsg {
  type: "/pocket.service.RelayMiningDifficulty";
  value: RelayMiningDifficultyAmino;
}
/**
 * RelayMiningDifficulty is a message used to store the onchain Relay Mining
 * difficulty associated with a specific service ID.
 * TODO_TECHDEBT: Embed this message in the Service message.
 */
export interface RelayMiningDifficultySDKType {
  service_id: string;
  block_height: bigint;
  num_relays_ema: bigint;
  target_hash: Uint8Array;
}
function createBaseRelayMiningDifficulty(): RelayMiningDifficulty {
  return {
    serviceId: "",
    blockHeight: BigInt(0),
    numRelaysEma: BigInt(0),
    targetHash: new Uint8Array()
  };
}
export const RelayMiningDifficulty = {
  typeUrl: "/pocket.service.RelayMiningDifficulty",
  encode(message: RelayMiningDifficulty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.numRelaysEma !== BigInt(0)) {
      writer.uint32(24).uint64(message.numRelaysEma);
    }
    if (message.targetHash.length !== 0) {
      writer.uint32(34).bytes(message.targetHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayMiningDifficulty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayMiningDifficulty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.blockHeight = reader.int64();
          break;
        case 3:
          message.numRelaysEma = reader.uint64();
          break;
        case 4:
          message.targetHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RelayMiningDifficulty>): RelayMiningDifficulty {
    const message = createBaseRelayMiningDifficulty();
    message.serviceId = object.serviceId ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.numRelaysEma = object.numRelaysEma !== undefined && object.numRelaysEma !== null ? BigInt(object.numRelaysEma.toString()) : BigInt(0);
    message.targetHash = object.targetHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RelayMiningDifficultyAmino): RelayMiningDifficulty {
    const message = createBaseRelayMiningDifficulty();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.num_relays_ema !== undefined && object.num_relays_ema !== null) {
      message.numRelaysEma = BigInt(object.num_relays_ema);
    }
    if (object.target_hash !== undefined && object.target_hash !== null) {
      message.targetHash = bytesFromBase64(object.target_hash);
    }
    return message;
  },
  toAmino(message: RelayMiningDifficulty): RelayMiningDifficultyAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.num_relays_ema = message.numRelaysEma !== BigInt(0) ? message.numRelaysEma?.toString() : undefined;
    obj.target_hash = message.targetHash ? base64FromBytes(message.targetHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayMiningDifficultyAminoMsg): RelayMiningDifficulty {
    return RelayMiningDifficulty.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayMiningDifficultyProtoMsg): RelayMiningDifficulty {
    return RelayMiningDifficulty.decode(message.value);
  },
  toProto(message: RelayMiningDifficulty): Uint8Array {
    return RelayMiningDifficulty.encode(message).finish();
  },
  toProtoMsg(message: RelayMiningDifficulty): RelayMiningDifficultyProtoMsg {
    return {
      typeUrl: "/pocket.service.RelayMiningDifficulty",
      value: RelayMiningDifficulty.encode(message).finish()
    };
  }
};