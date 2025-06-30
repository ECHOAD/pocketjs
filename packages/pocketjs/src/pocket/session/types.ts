//@ts-nocheck
import { Application, ApplicationAmino, ApplicationSDKType } from "../application/types";
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * SessionHeader is a lightweight header for a session that can be passed around.
 * It is the minimal amount of data required to hydrate & retrieve all data relevant to the session.
 */
export interface SessionHeader {
  /** The Bech32 address of the application. */
  applicationAddress: string;
  /** The service id this session is for */
  serviceId: string;
  /** NOTE: session_id can be derived from the above values using onchain but is included in the header for convenience */
  sessionId: string;
  /** The height at which this session started */
  sessionStartBlockHeight: bigint;
  /**
   * Note that`session_end_block_height` is a derivative of (`start` + `num_blocks_per_session`)
   * as governed by onchain params at the time of the session start.
   * It is stored as an additional field to simplify business logic in case
   * the number of blocks_per_session changes during the session.
   */
  sessionEndBlockHeight: bigint;
}
export interface SessionHeaderProtoMsg {
  typeUrl: "/pocket.session.SessionHeader";
  value: Uint8Array;
}
/**
 * SessionHeader is a lightweight header for a session that can be passed around.
 * It is the minimal amount of data required to hydrate & retrieve all data relevant to the session.
 * @name SessionHeaderAmino
 * @package pocket.session
 * @see proto type: pocket.session.SessionHeader
 */
export interface SessionHeaderAmino {
  /**
   * The Bech32 address of the application.
   */
  application_address?: string;
  /**
   * The service id this session is for
   */
  service_id?: string;
  /**
   * NOTE: session_id can be derived from the above values using onchain but is included in the header for convenience
   */
  session_id?: string;
  /**
   * The height at which this session started
   */
  session_start_block_height?: string;
  /**
   * Note that`session_end_block_height` is a derivative of (`start` + `num_blocks_per_session`)
   * as governed by onchain params at the time of the session start.
   * It is stored as an additional field to simplify business logic in case
   * the number of blocks_per_session changes during the session.
   */
  session_end_block_height?: string;
}
export interface SessionHeaderAminoMsg {
  type: "/pocket.session.SessionHeader";
  value: SessionHeaderAmino;
}
/**
 * SessionHeader is a lightweight header for a session that can be passed around.
 * It is the minimal amount of data required to hydrate & retrieve all data relevant to the session.
 */
export interface SessionHeaderSDKType {
  application_address: string;
  service_id: string;
  session_id: string;
  session_start_block_height: bigint;
  session_end_block_height: bigint;
}
/**
 * Session is a fully hydrated session object that contains all the information for the Session
 * and its participants.
 */
export interface Session {
  /** The header of the session containing lightweight data */
  header?: SessionHeader;
  /** A unique pseudorandom ID for this session */
  sessionId: string;
  /** The session number since genesis */
  sessionNumber: bigint;
  /** The number of blocks per session when this session started */
  numBlocksPerSession: bigint;
  /** A fully hydrated application object this session is for */
  application?: Application;
  /** A fully hydrated set of servicers that are serving the application */
  suppliers: Supplier[];
}
export interface SessionProtoMsg {
  typeUrl: "/pocket.session.Session";
  value: Uint8Array;
}
/**
 * Session is a fully hydrated session object that contains all the information for the Session
 * and its participants.
 * @name SessionAmino
 * @package pocket.session
 * @see proto type: pocket.session.Session
 */
export interface SessionAmino {
  /**
   * The header of the session containing lightweight data
   */
  header?: SessionHeaderAmino;
  /**
   * A unique pseudorandom ID for this session
   */
  session_id?: string;
  /**
   * The session number since genesis
   */
  session_number?: string;
  /**
   * The number of blocks per session when this session started
   */
  num_blocks_per_session?: string;
  /**
   * A fully hydrated application object this session is for
   */
  application?: ApplicationAmino;
  /**
   * A fully hydrated set of servicers that are serving the application
   */
  suppliers?: SupplierAmino[];
}
export interface SessionAminoMsg {
  type: "/pocket.session.Session";
  value: SessionAmino;
}
/**
 * Session is a fully hydrated session object that contains all the information for the Session
 * and its participants.
 */
export interface SessionSDKType {
  header?: SessionHeaderSDKType;
  session_id: string;
  session_number: bigint;
  num_blocks_per_session: bigint;
  application?: ApplicationSDKType;
  suppliers: SupplierSDKType[];
}
function createBaseSessionHeader(): SessionHeader {
  return {
    applicationAddress: "",
    serviceId: "",
    sessionId: "",
    sessionStartBlockHeight: BigInt(0),
    sessionEndBlockHeight: BigInt(0)
  };
}
export const SessionHeader = {
  typeUrl: "/pocket.session.SessionHeader",
  encode(message: SessionHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.applicationAddress !== "") {
      writer.uint32(10).string(message.applicationAddress);
    }
    if (message.serviceId !== "") {
      writer.uint32(18).string(message.serviceId);
    }
    if (message.sessionId !== "") {
      writer.uint32(26).string(message.sessionId);
    }
    if (message.sessionStartBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.sessionStartBlockHeight);
    }
    if (message.sessionEndBlockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.sessionEndBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SessionHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationAddress = reader.string();
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        case 3:
          message.sessionId = reader.string();
          break;
        case 4:
          message.sessionStartBlockHeight = reader.int64();
          break;
        case 5:
          message.sessionEndBlockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SessionHeader>): SessionHeader {
    const message = createBaseSessionHeader();
    message.applicationAddress = object.applicationAddress ?? "";
    message.serviceId = object.serviceId ?? "";
    message.sessionId = object.sessionId ?? "";
    message.sessionStartBlockHeight = object.sessionStartBlockHeight !== undefined && object.sessionStartBlockHeight !== null ? BigInt(object.sessionStartBlockHeight.toString()) : BigInt(0);
    message.sessionEndBlockHeight = object.sessionEndBlockHeight !== undefined && object.sessionEndBlockHeight !== null ? BigInt(object.sessionEndBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SessionHeaderAmino): SessionHeader {
    const message = createBaseSessionHeader();
    if (object.application_address !== undefined && object.application_address !== null) {
      message.applicationAddress = object.application_address;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.session_start_block_height !== undefined && object.session_start_block_height !== null) {
      message.sessionStartBlockHeight = BigInt(object.session_start_block_height);
    }
    if (object.session_end_block_height !== undefined && object.session_end_block_height !== null) {
      message.sessionEndBlockHeight = BigInt(object.session_end_block_height);
    }
    return message;
  },
  toAmino(message: SessionHeader): SessionHeaderAmino {
    const obj: any = {};
    obj.application_address = message.applicationAddress === "" ? undefined : message.applicationAddress;
    obj.service_id = message.serviceId === "" ? undefined : message.serviceId;
    obj.session_id = message.sessionId === "" ? undefined : message.sessionId;
    obj.session_start_block_height = message.sessionStartBlockHeight !== BigInt(0) ? message.sessionStartBlockHeight?.toString() : undefined;
    obj.session_end_block_height = message.sessionEndBlockHeight !== BigInt(0) ? message.sessionEndBlockHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SessionHeaderAminoMsg): SessionHeader {
    return SessionHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: SessionHeaderProtoMsg): SessionHeader {
    return SessionHeader.decode(message.value);
  },
  toProto(message: SessionHeader): Uint8Array {
    return SessionHeader.encode(message).finish();
  },
  toProtoMsg(message: SessionHeader): SessionHeaderProtoMsg {
    return {
      typeUrl: "/pocket.session.SessionHeader",
      value: SessionHeader.encode(message).finish()
    };
  }
};
function createBaseSession(): Session {
  return {
    header: undefined,
    sessionId: "",
    sessionNumber: BigInt(0),
    numBlocksPerSession: BigInt(0),
    application: undefined,
    suppliers: []
  };
}
export const Session = {
  typeUrl: "/pocket.session.Session",
  encode(message: Session, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      SessionHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.sessionNumber !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionNumber);
    }
    if (message.numBlocksPerSession !== BigInt(0)) {
      writer.uint32(32).int64(message.numBlocksPerSession);
    }
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.suppliers) {
      Supplier.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Session {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = SessionHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.sessionNumber = reader.int64();
          break;
        case 4:
          message.numBlocksPerSession = reader.int64();
          break;
        case 5:
          message.application = Application.decode(reader, reader.uint32());
          break;
        case 6:
          message.suppliers.push(Supplier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Session>): Session {
    const message = createBaseSession();
    message.header = object.header !== undefined && object.header !== null ? SessionHeader.fromPartial(object.header) : undefined;
    message.sessionId = object.sessionId ?? "";
    message.sessionNumber = object.sessionNumber !== undefined && object.sessionNumber !== null ? BigInt(object.sessionNumber.toString()) : BigInt(0);
    message.numBlocksPerSession = object.numBlocksPerSession !== undefined && object.numBlocksPerSession !== null ? BigInt(object.numBlocksPerSession.toString()) : BigInt(0);
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    message.suppliers = object.suppliers?.map(e => Supplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SessionAmino): Session {
    const message = createBaseSession();
    if (object.header !== undefined && object.header !== null) {
      message.header = SessionHeader.fromAmino(object.header);
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = object.session_id;
    }
    if (object.session_number !== undefined && object.session_number !== null) {
      message.sessionNumber = BigInt(object.session_number);
    }
    if (object.num_blocks_per_session !== undefined && object.num_blocks_per_session !== null) {
      message.numBlocksPerSession = BigInt(object.num_blocks_per_session);
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    message.suppliers = object.suppliers?.map(e => Supplier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Session): SessionAmino {
    const obj: any = {};
    obj.header = message.header ? SessionHeader.toAmino(message.header) : undefined;
    obj.session_id = message.sessionId === "" ? undefined : message.sessionId;
    obj.session_number = message.sessionNumber !== BigInt(0) ? message.sessionNumber?.toString() : undefined;
    obj.num_blocks_per_session = message.numBlocksPerSession !== BigInt(0) ? message.numBlocksPerSession?.toString() : undefined;
    obj.application = message.application ? Application.toAmino(message.application) : undefined;
    if (message.suppliers) {
      obj.suppliers = message.suppliers.map(e => e ? Supplier.toAmino(e) : undefined);
    } else {
      obj.suppliers = message.suppliers;
    }
    return obj;
  },
  fromAminoMsg(object: SessionAminoMsg): Session {
    return Session.fromAmino(object.value);
  },
  fromProtoMsg(message: SessionProtoMsg): Session {
    return Session.decode(message.value);
  },
  toProto(message: Session): Uint8Array {
    return Session.encode(message).finish();
  },
  toProtoMsg(message: Session): SessionProtoMsg {
    return {
      typeUrl: "/pocket.session.Session",
      value: Session.encode(message).finish()
    };
  }
};