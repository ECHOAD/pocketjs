//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../helpers";
/**
 * MorseStateExport is the data structure that is serialized and output when running:
 *  $ pocket utils export-genesis-for-reset ...
 * 
 * Ref: https://editor.swagger.io/?url=https://raw.githubusercontent.com/pokt-network/pocket-core/staging/doc/specs/rpc-spec.yaml#operations-query-post_query_state
 */
export interface MorseStateExport {
  /** app_hash is the Morse tendermint state hash. */
  appHash: string;
  /** app_state is the entire Morse tendermint application state. */
  appState?: MorseTendermintAppState;
}
export interface MorseStateExportProtoMsg {
  typeUrl: "/pocket.migration.MorseStateExport";
  value: Uint8Array;
}
/**
 * MorseStateExport is the data structure that is serialized and output when running:
 *  $ pocket utils export-genesis-for-reset ...
 * 
 * Ref: https://editor.swagger.io/?url=https://raw.githubusercontent.com/pokt-network/pocket-core/staging/doc/specs/rpc-spec.yaml#operations-query-post_query_state
 * @name MorseStateExportAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseStateExport
 */
export interface MorseStateExportAmino {
  /**
   * app_hash is the Morse tendermint state hash.
   */
  app_hash: string;
  /**
   * app_state is the entire Morse tendermint application state.
   */
  app_state: MorseTendermintAppStateAmino;
}
export interface MorseStateExportAminoMsg {
  type: "/pocket.migration.MorseStateExport";
  value: MorseStateExportAmino;
}
/**
 * MorseStateExport is the data structure that is serialized and output when running:
 *  $ pocket utils export-genesis-for-reset ...
 * 
 * Ref: https://editor.swagger.io/?url=https://raw.githubusercontent.com/pokt-network/pocket-core/staging/doc/specs/rpc-spec.yaml#operations-query-post_query_state
 */
export interface MorseStateExportSDKType {
  app_hash: string;
  app_state?: MorseTendermintAppStateSDKType;
}
/**
 * MorseTendermintAppState is the tendermint application state for the Morse tendermint
 * application; not to be confused with the pokt protocol actor.
 * It is constructed in Morse via `PocketCoreApp#ExportAppState()`.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/5fa61920aa9d45ca6bf9e01e863134e242c95fa7/app/pocket.go#L142
 */
export interface MorseTendermintAppState {
  application?: MorseApplications;
  auth?: MorseAuth;
  pos?: MorsePos;
}
export interface MorseTendermintAppStateProtoMsg {
  typeUrl: "/pocket.migration.MorseTendermintAppState";
  value: Uint8Array;
}
/**
 * MorseTendermintAppState is the tendermint application state for the Morse tendermint
 * application; not to be confused with the pokt protocol actor.
 * It is constructed in Morse via `PocketCoreApp#ExportAppState()`.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/5fa61920aa9d45ca6bf9e01e863134e242c95fa7/app/pocket.go#L142
 * @name MorseTendermintAppStateAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseTendermintAppState
 */
export interface MorseTendermintAppStateAmino {
  application: MorseApplicationsAmino;
  auth: MorseAuthAmino;
  pos: MorsePosAmino;
}
export interface MorseTendermintAppStateAminoMsg {
  type: "/pocket.migration.MorseTendermintAppState";
  value: MorseTendermintAppStateAmino;
}
/**
 * MorseTendermintAppState is the tendermint application state for the Morse tendermint
 * application; not to be confused with the pokt protocol actor.
 * It is constructed in Morse via `PocketCoreApp#ExportAppState()`.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/5fa61920aa9d45ca6bf9e01e863134e242c95fa7/app/pocket.go#L142
 */
export interface MorseTendermintAppStateSDKType {
  application?: MorseApplicationsSDKType;
  auth?: MorseAuthSDKType;
  pos?: MorsePosSDKType;
}
/**
 * A wrapper around the list of MorseApplications, necessary in order to conform to the Morse genesis structure.
 * It encapsulates the minimum information required to import Morse applications.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/apps/types/genesis.go#L4
 */
export interface MorseApplications {
  applications: MorseApplication[];
}
export interface MorseApplicationsProtoMsg {
  typeUrl: "/pocket.migration.MorseApplications";
  value: Uint8Array;
}
/**
 * A wrapper around the list of MorseApplications, necessary in order to conform to the Morse genesis structure.
 * It encapsulates the minimum information required to import Morse applications.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/apps/types/genesis.go#L4
 * @name MorseApplicationsAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseApplications
 */
export interface MorseApplicationsAmino {
  applications: MorseApplicationAmino[];
}
export interface MorseApplicationsAminoMsg {
  type: "/pocket.migration.MorseApplications";
  value: MorseApplicationsAmino;
}
/**
 * A wrapper around the list of MorseApplications, necessary in order to conform to the Morse genesis structure.
 * It encapsulates the minimum information required to import Morse applications.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/apps/types/genesis.go#L4
 */
export interface MorseApplicationsSDKType {
  applications: MorseApplicationSDKType[];
}
/**
 * A wrapper around a list of MorseAuthAccount.
 * It encapsulates the minimum information required to import Morse accounts.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/auth/types/genesis.go#L9
 */
export interface MorseAuth {
  accounts: MorseAuthAccount[];
}
export interface MorseAuthProtoMsg {
  typeUrl: "/pocket.migration.MorseAuth";
  value: Uint8Array;
}
/**
 * A wrapper around a list of MorseAuthAccount.
 * It encapsulates the minimum information required to import Morse accounts.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/auth/types/genesis.go#L9
 * @name MorseAuthAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseAuth
 */
export interface MorseAuthAmino {
  accounts: MorseAuthAccountAmino[];
}
export interface MorseAuthAminoMsg {
  type: "/pocket.migration.MorseAuth";
  value: MorseAuthAmino;
}
/**
 * A wrapper around a list of MorseAuthAccount.
 * It encapsulates the minimum information required to import Morse accounts.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/auth/types/genesis.go#L9
 */
export interface MorseAuthSDKType {
  accounts: MorseAuthAccountSDKType[];
}
/**
 * MorseAuthAccount:
 * * Wraps MorseAuthAccount information to conform to Morse genesis structure
 * * Can represent EITHER an externally owned account OR a module account
 */
export interface MorseAuthAccount {
  type: string;
  /** value is a EITHER a JSON-encoded MorseAccount or a MorseModuleAccount. */
  value: Uint8Array;
}
export interface MorseAuthAccountProtoMsg {
  typeUrl: "/pocket.migration.MorseAuthAccount";
  value: Uint8Array;
}
/**
 * MorseAuthAccount:
 * * Wraps MorseAuthAccount information to conform to Morse genesis structure
 * * Can represent EITHER an externally owned account OR a module account
 * @name MorseAuthAccountAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseAuthAccount
 */
export interface MorseAuthAccountAmino {
  type: string;
  /**
   * value is a EITHER a JSON-encoded MorseAccount or a MorseModuleAccount.
   */
  value: string;
}
export interface MorseAuthAccountAminoMsg {
  type: "/pocket.migration.MorseAuthAccount";
  value: MorseAuthAccountAmino;
}
/**
 * MorseAuthAccount:
 * * Wraps MorseAuthAccount information to conform to Morse genesis structure
 * * Can represent EITHER an externally owned account OR a module account
 */
export interface MorseAuthAccountSDKType {
  type: string;
  value: Uint8Array;
}
/**
 * A wrapper around the list of Morse suppliers (aka "validators", "nodes", of "servicers").
 * It is necessary to conform to the Morse genesis structure.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/nodes/types/genesis.go#L8
 */
export interface MorsePos {
  validators: MorseValidator[];
}
export interface MorsePosProtoMsg {
  typeUrl: "/pocket.migration.MorsePos";
  value: Uint8Array;
}
/**
 * A wrapper around the list of Morse suppliers (aka "validators", "nodes", of "servicers").
 * It is necessary to conform to the Morse genesis structure.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/nodes/types/genesis.go#L8
 * @name MorsePosAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorsePos
 */
export interface MorsePosAmino {
  validators: MorseValidatorAmino[];
}
export interface MorsePosAminoMsg {
  type: "/pocket.migration.MorsePos";
  value: MorsePosAmino;
}
/**
 * A wrapper around the list of Morse suppliers (aka "validators", "nodes", of "servicers").
 * It is necessary to conform to the Morse genesis structure.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/x/nodes/types/genesis.go#L8
 */
export interface MorsePosSDKType {
  validators: MorseValidatorSDKType[];
}
/**
 * MorseApplication is a subset of the Morse ProtoApplication type.
 * It encapsulates the minimum information required to import Morse applications.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/apps/apps.proto#L16
 */
export interface MorseApplication {
  /**
   * Address is a binary representation of the address corresponding
   * to a Morse application's ed25519 public key.
   */
  address: Uint8Array;
  /** PublicKey is the binary representation of a Morse application's ed25519 public key. */
  publicKey: Uint8Array;
  /** TODO_MAINNET_MIGRATION(@Olshansk):  Should status and/or jailed be considered during the migration, and if so, how? */
  jailed: boolean;
  status: number;
  /** The string representation of the BigInt amount of upokt. */
  stakedTokens: string;
  /**
   * The ISO 8601 UTC timestamp after which the Morse node/supplier unbonding period will have elapsed.
   * It reflects the "unbonding completion time" of the Morse node/supplier, but is called "unstaking time" to comply with necessary Morse data structures.
   */
  unstakingTime: Date;
}
export interface MorseApplicationProtoMsg {
  typeUrl: "/pocket.migration.MorseApplication";
  value: Uint8Array;
}
/**
 * MorseApplication is a subset of the Morse ProtoApplication type.
 * It encapsulates the minimum information required to import Morse applications.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/apps/apps.proto#L16
 * @name MorseApplicationAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseApplication
 */
export interface MorseApplicationAmino {
  /**
   * Address is a binary representation of the address corresponding
   * to a Morse application's ed25519 public key.
   */
  address: string;
  /**
   * PublicKey is the binary representation of a Morse application's ed25519 public key.
   */
  public_key: string;
  /**
   * TODO_MAINNET_MIGRATION(@Olshansk):  Should status and/or jailed be considered during the migration, and if so, how?
   */
  jailed: boolean;
  status: number;
  /**
   * The string representation of the BigInt amount of upokt.
   */
  staked_tokens: string;
  /**
   * The ISO 8601 UTC timestamp after which the Morse node/supplier unbonding period will have elapsed.
   * It reflects the "unbonding completion time" of the Morse node/supplier, but is called "unstaking time" to comply with necessary Morse data structures.
   */
  unstaking_time: string;
}
export interface MorseApplicationAminoMsg {
  type: "/pocket.migration.MorseApplication";
  value: MorseApplicationAmino;
}
/**
 * MorseApplication is a subset of the Morse ProtoApplication type.
 * It encapsulates the minimum information required to import Morse applications.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/apps/apps.proto#L16
 */
export interface MorseApplicationSDKType {
  address: Uint8Array;
  public_key: Uint8Array;
  jailed: boolean;
  status: number;
  staked_tokens: string;
  unstaking_time: Date;
}
/**
 * MorseValidator is a subset of the Morse ProtoValidator type.
 * It encapsulates the minimum information required to import Morse suppliers (aka "servicers" or "validators").
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/pos/types.proto#L16
 */
export interface MorseValidator {
  /**
   * Morse non-custodial (i.e. operator) address. If output_address is not set, this is the custodial address.
   * Binary representation of the Morse address corresponding to a Morse node's ed25519 public key.
   * See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  address: Uint8Array;
  /** Binary representation of a Morse node's ed25519 public key. */
  publicKey: Uint8Array;
  /** TODO_MAINNET_MIGRATION(@Olshansk):  Should status and/or jailed be considered during the migration, and if so, how? */
  jailed: boolean;
  status: number;
  /** The string representation of the BigInt amount of upokt. */
  stakedTokens: string;
  /**
   * The ISO 8601 UTC timestamp after which the Morse node/supplier unbonding period will have elapsed.
   * It reflects the "unbonding completion time" of the Morse node/supplier, but is called "unstaking time" to comply with necessary Morse data structures.
   */
  unstakingTime: Date;
  /**
   * Morse custodial (i.e. owner) address, which owns the staked tokens of the operator.
   * Binary representation of the Morse address corresponding to a Morse account's ed25519 public key.
   * See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  outputAddress: Uint8Array;
}
export interface MorseValidatorProtoMsg {
  typeUrl: "/pocket.migration.MorseValidator";
  value: Uint8Array;
}
/**
 * MorseValidator is a subset of the Morse ProtoValidator type.
 * It encapsulates the minimum information required to import Morse suppliers (aka "servicers" or "validators").
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/pos/types.proto#L16
 * @name MorseValidatorAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseValidator
 */
export interface MorseValidatorAmino {
  /**
   * Morse non-custodial (i.e. operator) address. If output_address is not set, this is the custodial address.
   * Binary representation of the Morse address corresponding to a Morse node's ed25519 public key.
   * See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  address: string;
  /**
   * Binary representation of a Morse node's ed25519 public key.
   */
  public_key: string;
  /**
   * TODO_MAINNET_MIGRATION(@Olshansk):  Should status and/or jailed be considered during the migration, and if so, how?
   */
  jailed: boolean;
  status: number;
  /**
   * The string representation of the BigInt amount of upokt.
   */
  staked_tokens: string;
  /**
   * The ISO 8601 UTC timestamp after which the Morse node/supplier unbonding period will have elapsed.
   * It reflects the "unbonding completion time" of the Morse node/supplier, but is called "unstaking time" to comply with necessary Morse data structures.
   */
  unstaking_time: string;
  /**
   * Morse custodial (i.e. owner) address, which owns the staked tokens of the operator.
   * Binary representation of the Morse address corresponding to a Morse account's ed25519 public key.
   * See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  output_address?: string;
}
export interface MorseValidatorAminoMsg {
  type: "/pocket.migration.MorseValidator";
  value: MorseValidatorAmino;
}
/**
 * MorseValidator is a subset of the Morse ProtoValidator type.
 * It encapsulates the minimum information required to import Morse suppliers (aka "servicers" or "validators").
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/pos/types.proto#L16
 */
export interface MorseValidatorSDKType {
  address: Uint8Array;
  public_key: Uint8Array;
  jailed: boolean;
  status: number;
  staked_tokens: string;
  unstaking_time: Date;
  output_address: Uint8Array;
}
/**
 * MorseAccount is an analog of the Morse ProtoBaseAccount type.
 * It encapsulates the minimum information required to import accounts.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/auth/auth.proto#L14.
 */
export interface MorseAccount {
  $typeUrl?: "/pocket.migration.MorseAccount";
  /** A hex-encoded representation of the address corresponding to a Morse application's ed25519 public key. */
  address: Uint8Array;
  /** The ed25519 public key of the account. */
  pubKey?: MorsePublicKey;
  /** The account balance; this does not include any actor stakes. */
  coins: Coin[];
}
export interface MorseAccountProtoMsg {
  typeUrl: "/pocket.migration.MorseAccount";
  value: Uint8Array;
}
/**
 * MorseAccount is an analog of the Morse ProtoBaseAccount type.
 * It encapsulates the minimum information required to import accounts.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/auth/auth.proto#L14.
 * @name MorseAccountAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseAccount
 */
export interface MorseAccountAmino {
  /**
   * A hex-encoded representation of the address corresponding to a Morse application's ed25519 public key.
   */
  address: string;
  /**
   * The ed25519 public key of the account.
   */
  pub_key: MorsePublicKeyAmino;
  /**
   * The account balance; this does not include any actor stakes.
   */
  coins: CoinAmino[];
}
export interface MorseAccountAminoMsg {
  type: "/pocket.migration.MorseAccount";
  value: MorseAccountAmino;
}
/**
 * MorseAccount is an analog of the Morse ProtoBaseAccount type.
 * It encapsulates the minimum information required to import accounts.
 * 
 * See: https://github.com/pokt-network/pocket-core/blob/staging/proto/x/auth/auth.proto#L14.
 */
export interface MorseAccountSDKType {
  $typeUrl?: "/pocket.migration.MorseAccount";
  address: Uint8Array;
  pub_key?: MorsePublicKeySDKType;
  coins: CoinSDKType[];
}
/**
 * MorsePublicKey is required to conform to the encoding of the Morse state export.
 * NB: All Morse account public keys will be ed25519 keys by definition.
 */
export interface MorsePublicKey {
  value: Uint8Array;
}
export interface MorsePublicKeyProtoMsg {
  typeUrl: "/pocket.migration.MorsePublicKey";
  value: Uint8Array;
}
/**
 * MorsePublicKey is required to conform to the encoding of the Morse state export.
 * NB: All Morse account public keys will be ed25519 keys by definition.
 * @name MorsePublicKeyAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorsePublicKey
 */
export interface MorsePublicKeyAmino {
  value?: string;
}
export interface MorsePublicKeyAminoMsg {
  type: "/pocket.migration.MorsePublicKey";
  value: MorsePublicKeyAmino;
}
/**
 * MorsePublicKey is required to conform to the encoding of the Morse state export.
 * NB: All Morse account public keys will be ed25519 keys by definition.
 */
export interface MorsePublicKeySDKType {
  value: Uint8Array;
}
/**
 * MorseModuleAccount is the module account type for Morse, it wraps a MorseAccount
 * and has a unique name, which is used instead of the address.
 */
export interface MorseModuleAccount {
  /** DEV_NOTE: the JSON tag is intentionally cased contrary to convention to match the real-world Morse state export. */
  baseAccount: MorseAccount;
  name: string;
}
export interface MorseModuleAccountProtoMsg {
  typeUrl: "/pocket.migration.MorseModuleAccount";
  value: Uint8Array;
}
/**
 * MorseModuleAccount is the module account type for Morse, it wraps a MorseAccount
 * and has a unique name, which is used instead of the address.
 * @name MorseModuleAccountAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseModuleAccount
 */
export interface MorseModuleAccountAmino {
  /**
   * DEV_NOTE: the JSON tag is intentionally cased contrary to convention to match the real-world Morse state export.
   */
  base_account: MorseAccountAmino;
  name: string;
}
export interface MorseModuleAccountAminoMsg {
  type: "/pocket.migration.MorseModuleAccount";
  value: MorseModuleAccountAmino;
}
/**
 * MorseModuleAccount is the module account type for Morse, it wraps a MorseAccount
 * and has a unique name, which is used instead of the address.
 */
export interface MorseModuleAccountSDKType {
  base_account: MorseAccountSDKType;
  name: string;
}
function createBaseMorseStateExport(): MorseStateExport {
  return {
    appHash: "",
    appState: undefined
  };
}
export const MorseStateExport = {
  typeUrl: "/pocket.migration.MorseStateExport",
  encode(message: MorseStateExport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.appHash !== "") {
      writer.uint32(10).string(message.appHash);
    }
    if (message.appState !== undefined) {
      MorseTendermintAppState.encode(message.appState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseStateExport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseStateExport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appHash = reader.string();
          break;
        case 2:
          message.appState = MorseTendermintAppState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseStateExport>): MorseStateExport {
    const message = createBaseMorseStateExport();
    message.appHash = object.appHash ?? "";
    message.appState = object.appState !== undefined && object.appState !== null ? MorseTendermintAppState.fromPartial(object.appState) : undefined;
    return message;
  },
  fromAmino(object: MorseStateExportAmino): MorseStateExport {
    const message = createBaseMorseStateExport();
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = object.app_hash;
    }
    if (object.app_state !== undefined && object.app_state !== null) {
      message.appState = MorseTendermintAppState.fromAmino(object.app_state);
    }
    return message;
  },
  toAmino(message: MorseStateExport): MorseStateExportAmino {
    const obj: any = {};
    obj.app_hash = message.appHash ?? "";
    obj.app_state = message.appState ? MorseTendermintAppState.toAmino(message.appState) : MorseTendermintAppState.toAmino(MorseTendermintAppState.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MorseStateExportAminoMsg): MorseStateExport {
    return MorseStateExport.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseStateExportProtoMsg): MorseStateExport {
    return MorseStateExport.decode(message.value);
  },
  toProto(message: MorseStateExport): Uint8Array {
    return MorseStateExport.encode(message).finish();
  },
  toProtoMsg(message: MorseStateExport): MorseStateExportProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseStateExport",
      value: MorseStateExport.encode(message).finish()
    };
  }
};
function createBaseMorseTendermintAppState(): MorseTendermintAppState {
  return {
    application: undefined,
    auth: undefined,
    pos: undefined
  };
}
export const MorseTendermintAppState = {
  typeUrl: "/pocket.migration.MorseTendermintAppState",
  encode(message: MorseTendermintAppState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.application !== undefined) {
      MorseApplications.encode(message.application, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth !== undefined) {
      MorseAuth.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.pos !== undefined) {
      MorsePos.encode(message.pos, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseTendermintAppState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseTendermintAppState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = MorseApplications.decode(reader, reader.uint32());
          break;
        case 2:
          message.auth = MorseAuth.decode(reader, reader.uint32());
          break;
        case 3:
          message.pos = MorsePos.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseTendermintAppState>): MorseTendermintAppState {
    const message = createBaseMorseTendermintAppState();
    message.application = object.application !== undefined && object.application !== null ? MorseApplications.fromPartial(object.application) : undefined;
    message.auth = object.auth !== undefined && object.auth !== null ? MorseAuth.fromPartial(object.auth) : undefined;
    message.pos = object.pos !== undefined && object.pos !== null ? MorsePos.fromPartial(object.pos) : undefined;
    return message;
  },
  fromAmino(object: MorseTendermintAppStateAmino): MorseTendermintAppState {
    const message = createBaseMorseTendermintAppState();
    if (object.application !== undefined && object.application !== null) {
      message.application = MorseApplications.fromAmino(object.application);
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = MorseAuth.fromAmino(object.auth);
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = MorsePos.fromAmino(object.pos);
    }
    return message;
  },
  toAmino(message: MorseTendermintAppState): MorseTendermintAppStateAmino {
    const obj: any = {};
    obj.application = message.application ? MorseApplications.toAmino(message.application) : MorseApplications.toAmino(MorseApplications.fromPartial({}));
    obj.auth = message.auth ? MorseAuth.toAmino(message.auth) : MorseAuth.toAmino(MorseAuth.fromPartial({}));
    obj.pos = message.pos ? MorsePos.toAmino(message.pos) : MorsePos.toAmino(MorsePos.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MorseTendermintAppStateAminoMsg): MorseTendermintAppState {
    return MorseTendermintAppState.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseTendermintAppStateProtoMsg): MorseTendermintAppState {
    return MorseTendermintAppState.decode(message.value);
  },
  toProto(message: MorseTendermintAppState): Uint8Array {
    return MorseTendermintAppState.encode(message).finish();
  },
  toProtoMsg(message: MorseTendermintAppState): MorseTendermintAppStateProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseTendermintAppState",
      value: MorseTendermintAppState.encode(message).finish()
    };
  }
};
function createBaseMorseApplications(): MorseApplications {
  return {
    applications: []
  };
}
export const MorseApplications = {
  typeUrl: "/pocket.migration.MorseApplications",
  encode(message: MorseApplications, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.applications) {
      MorseApplication.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseApplications {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseApplications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applications.push(MorseApplication.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseApplications>): MorseApplications {
    const message = createBaseMorseApplications();
    message.applications = object.applications?.map(e => MorseApplication.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MorseApplicationsAmino): MorseApplications {
    const message = createBaseMorseApplications();
    message.applications = object.applications?.map(e => MorseApplication.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MorseApplications): MorseApplicationsAmino {
    const obj: any = {};
    if (message.applications) {
      obj.applications = message.applications.map(e => e ? MorseApplication.toAmino(e) : undefined);
    } else {
      obj.applications = message.applications;
    }
    return obj;
  },
  fromAminoMsg(object: MorseApplicationsAminoMsg): MorseApplications {
    return MorseApplications.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseApplicationsProtoMsg): MorseApplications {
    return MorseApplications.decode(message.value);
  },
  toProto(message: MorseApplications): Uint8Array {
    return MorseApplications.encode(message).finish();
  },
  toProtoMsg(message: MorseApplications): MorseApplicationsProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseApplications",
      value: MorseApplications.encode(message).finish()
    };
  }
};
function createBaseMorseAuth(): MorseAuth {
  return {
    accounts: []
  };
}
export const MorseAuth = {
  typeUrl: "/pocket.migration.MorseAuth",
  encode(message: MorseAuth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      MorseAuthAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseAuth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(MorseAuthAccount.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseAuth>): MorseAuth {
    const message = createBaseMorseAuth();
    message.accounts = object.accounts?.map(e => MorseAuthAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MorseAuthAmino): MorseAuth {
    const message = createBaseMorseAuth();
    message.accounts = object.accounts?.map(e => MorseAuthAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MorseAuth): MorseAuthAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? MorseAuthAccount.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object: MorseAuthAminoMsg): MorseAuth {
    return MorseAuth.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseAuthProtoMsg): MorseAuth {
    return MorseAuth.decode(message.value);
  },
  toProto(message: MorseAuth): Uint8Array {
    return MorseAuth.encode(message).finish();
  },
  toProtoMsg(message: MorseAuth): MorseAuthProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseAuth",
      value: MorseAuth.encode(message).finish()
    };
  }
};
function createBaseMorseAuthAccount(): MorseAuthAccount {
  return {
    type: "",
    value: new Uint8Array()
  };
}
export const MorseAuthAccount = {
  typeUrl: "/pocket.migration.MorseAuthAccount",
  encode(message: MorseAuthAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseAuthAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseAuthAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseAuthAccount>): MorseAuthAccount {
    const message = createBaseMorseAuthAccount();
    message.type = object.type ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MorseAuthAccountAmino): MorseAuthAccount {
    const message = createBaseMorseAuthAccount();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: MorseAuthAccount): MorseAuthAccountAmino {
    const obj: any = {};
    obj.type = message.type ?? "";
    obj.value = message.value ? base64FromBytes(message.value) : "";
    return obj;
  },
  fromAminoMsg(object: MorseAuthAccountAminoMsg): MorseAuthAccount {
    return MorseAuthAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseAuthAccountProtoMsg): MorseAuthAccount {
    return MorseAuthAccount.decode(message.value);
  },
  toProto(message: MorseAuthAccount): Uint8Array {
    return MorseAuthAccount.encode(message).finish();
  },
  toProtoMsg(message: MorseAuthAccount): MorseAuthAccountProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseAuthAccount",
      value: MorseAuthAccount.encode(message).finish()
    };
  }
};
function createBaseMorsePos(): MorsePos {
  return {
    validators: []
  };
}
export const MorsePos = {
  typeUrl: "/pocket.migration.MorsePos",
  encode(message: MorsePos, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      MorseValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorsePos {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorsePos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(MorseValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorsePos>): MorsePos {
    const message = createBaseMorsePos();
    message.validators = object.validators?.map(e => MorseValidator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MorsePosAmino): MorsePos {
    const message = createBaseMorsePos();
    message.validators = object.validators?.map(e => MorseValidator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MorsePos): MorsePosAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? MorseValidator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: MorsePosAminoMsg): MorsePos {
    return MorsePos.fromAmino(object.value);
  },
  fromProtoMsg(message: MorsePosProtoMsg): MorsePos {
    return MorsePos.decode(message.value);
  },
  toProto(message: MorsePos): Uint8Array {
    return MorsePos.encode(message).finish();
  },
  toProtoMsg(message: MorsePos): MorsePosProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorsePos",
      value: MorsePos.encode(message).finish()
    };
  }
};
function createBaseMorseApplication(): MorseApplication {
  return {
    address: new Uint8Array(),
    publicKey: new Uint8Array(),
    jailed: false,
    status: 0,
    stakedTokens: "",
    unstakingTime: new Date()
  };
}
export const MorseApplication = {
  typeUrl: "/pocket.migration.MorseApplication",
  encode(message: MorseApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(18).bytes(message.publicKey);
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.stakedTokens !== "") {
      writer.uint32(50).string(message.stakedTokens);
    }
    if (message.unstakingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unstakingTime), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.publicKey = reader.bytes();
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 6:
          message.stakedTokens = reader.string();
          break;
        case 8:
          message.unstakingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseApplication>): MorseApplication {
    const message = createBaseMorseApplication();
    message.address = object.address ?? new Uint8Array();
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.stakedTokens = object.stakedTokens ?? "";
    message.unstakingTime = object.unstakingTime ?? undefined;
    return message;
  },
  fromAmino(object: MorseApplicationAmino): MorseApplication {
    const message = createBaseMorseApplication();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.public_key !== undefined && object.public_key !== null) {
      message.publicKey = bytesFromBase64(object.public_key);
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.staked_tokens !== undefined && object.staked_tokens !== null) {
      message.stakedTokens = object.staked_tokens;
    }
    if (object.unstaking_time !== undefined && object.unstaking_time !== null) {
      message.unstakingTime = fromTimestamp(Timestamp.fromAmino(object.unstaking_time));
    }
    return message;
  },
  toAmino(message: MorseApplication): MorseApplicationAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : "";
    obj.public_key = message.publicKey ? base64FromBytes(message.publicKey) : "";
    obj.jailed = message.jailed ?? false;
    obj.status = message.status ?? 0;
    obj.staked_tokens = message.stakedTokens ?? "";
    obj.unstaking_time = message.unstakingTime ? Timestamp.toAmino(toTimestamp(message.unstakingTime)) : new Date();
    return obj;
  },
  fromAminoMsg(object: MorseApplicationAminoMsg): MorseApplication {
    return MorseApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseApplicationProtoMsg): MorseApplication {
    return MorseApplication.decode(message.value);
  },
  toProto(message: MorseApplication): Uint8Array {
    return MorseApplication.encode(message).finish();
  },
  toProtoMsg(message: MorseApplication): MorseApplicationProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseApplication",
      value: MorseApplication.encode(message).finish()
    };
  }
};
function createBaseMorseValidator(): MorseValidator {
  return {
    address: new Uint8Array(),
    publicKey: new Uint8Array(),
    jailed: false,
    status: 0,
    stakedTokens: "",
    unstakingTime: new Date(),
    outputAddress: new Uint8Array()
  };
}
export const MorseValidator = {
  typeUrl: "/pocket.migration.MorseValidator",
  encode(message: MorseValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(18).bytes(message.publicKey);
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.stakedTokens !== "") {
      writer.uint32(58).string(message.stakedTokens);
    }
    if (message.unstakingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unstakingTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.outputAddress.length !== 0) {
      writer.uint32(74).bytes(message.outputAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.publicKey = reader.bytes();
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 7:
          message.stakedTokens = reader.string();
          break;
        case 8:
          message.unstakingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.outputAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseValidator>): MorseValidator {
    const message = createBaseMorseValidator();
    message.address = object.address ?? new Uint8Array();
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.stakedTokens = object.stakedTokens ?? "";
    message.unstakingTime = object.unstakingTime ?? undefined;
    message.outputAddress = object.outputAddress ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MorseValidatorAmino): MorseValidator {
    const message = createBaseMorseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.public_key !== undefined && object.public_key !== null) {
      message.publicKey = bytesFromBase64(object.public_key);
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.staked_tokens !== undefined && object.staked_tokens !== null) {
      message.stakedTokens = object.staked_tokens;
    }
    if (object.unstaking_time !== undefined && object.unstaking_time !== null) {
      message.unstakingTime = fromTimestamp(Timestamp.fromAmino(object.unstaking_time));
    }
    if (object.output_address !== undefined && object.output_address !== null) {
      message.outputAddress = bytesFromBase64(object.output_address);
    }
    return message;
  },
  toAmino(message: MorseValidator): MorseValidatorAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : "";
    obj.public_key = message.publicKey ? base64FromBytes(message.publicKey) : "";
    obj.jailed = message.jailed ?? false;
    obj.status = message.status ?? 0;
    obj.staked_tokens = message.stakedTokens ?? "";
    obj.unstaking_time = message.unstakingTime ? Timestamp.toAmino(toTimestamp(message.unstakingTime)) : new Date();
    obj.output_address = message.outputAddress ? base64FromBytes(message.outputAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: MorseValidatorAminoMsg): MorseValidator {
    return MorseValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseValidatorProtoMsg): MorseValidator {
    return MorseValidator.decode(message.value);
  },
  toProto(message: MorseValidator): Uint8Array {
    return MorseValidator.encode(message).finish();
  },
  toProtoMsg(message: MorseValidator): MorseValidatorProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseValidator",
      value: MorseValidator.encode(message).finish()
    };
  }
};
function createBaseMorseAccount(): MorseAccount {
  return {
    $typeUrl: "/pocket.migration.MorseAccount",
    address: new Uint8Array(),
    pubKey: undefined,
    coins: []
  };
}
export const MorseAccount = {
  typeUrl: "/pocket.migration.MorseAccount",
  encode(message: MorseAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== undefined) {
      MorsePublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = MorsePublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseAccount>): MorseAccount {
    const message = createBaseMorseAccount();
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? MorsePublicKey.fromPartial(object.pubKey) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MorseAccountAmino): MorseAccount {
    const message = createBaseMorseAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = MorsePublicKey.fromAmino(object.pub_key);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MorseAccount): MorseAccountAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : "";
    obj.pub_key = message.pubKey ? MorsePublicKey.toAmino(message.pubKey) : MorsePublicKey.toAmino(MorsePublicKey.fromPartial({}));
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MorseAccountAminoMsg): MorseAccount {
    return MorseAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseAccountProtoMsg): MorseAccount {
    return MorseAccount.decode(message.value);
  },
  toProto(message: MorseAccount): Uint8Array {
    return MorseAccount.encode(message).finish();
  },
  toProtoMsg(message: MorseAccount): MorseAccountProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseAccount",
      value: MorseAccount.encode(message).finish()
    };
  }
};
function createBaseMorsePublicKey(): MorsePublicKey {
  return {
    value: new Uint8Array()
  };
}
export const MorsePublicKey = {
  typeUrl: "/pocket.migration.MorsePublicKey",
  encode(message: MorsePublicKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorsePublicKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorsePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorsePublicKey>): MorsePublicKey {
    const message = createBaseMorsePublicKey();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MorsePublicKeyAmino): MorsePublicKey {
    const message = createBaseMorsePublicKey();
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: MorsePublicKey): MorsePublicKeyAmino {
    const obj: any = {};
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: MorsePublicKeyAminoMsg): MorsePublicKey {
    return MorsePublicKey.fromAmino(object.value);
  },
  fromProtoMsg(message: MorsePublicKeyProtoMsg): MorsePublicKey {
    return MorsePublicKey.decode(message.value);
  },
  toProto(message: MorsePublicKey): Uint8Array {
    return MorsePublicKey.encode(message).finish();
  },
  toProtoMsg(message: MorsePublicKey): MorsePublicKeyProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorsePublicKey",
      value: MorsePublicKey.encode(message).finish()
    };
  }
};
function createBaseMorseModuleAccount(): MorseModuleAccount {
  return {
    baseAccount: MorseAccount.fromPartial({}),
    name: ""
  };
}
export const MorseModuleAccount = {
  typeUrl: "/pocket.migration.MorseModuleAccount",
  encode(message: MorseModuleAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      MorseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseModuleAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = MorseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseModuleAccount>): MorseModuleAccount {
    const message = createBaseMorseModuleAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? MorseAccount.fromPartial(object.baseAccount) : undefined;
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MorseModuleAccountAmino): MorseModuleAccount {
    const message = createBaseMorseModuleAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = MorseAccount.fromAmino(object.base_account);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MorseModuleAccount): MorseModuleAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? MorseAccount.toAmino(message.baseAccount) : MorseAccount.toAmino(MorseAccount.fromPartial({}));
    obj.name = message.name ?? "";
    return obj;
  },
  fromAminoMsg(object: MorseModuleAccountAminoMsg): MorseModuleAccount {
    return MorseModuleAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseModuleAccountProtoMsg): MorseModuleAccount {
    return MorseModuleAccount.decode(message.value);
  },
  toProto(message: MorseModuleAccount): Uint8Array {
    return MorseModuleAccount.encode(message).finish();
  },
  toProtoMsg(message: MorseModuleAccount): MorseModuleAccountProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseModuleAccount",
      value: MorseModuleAccount.encode(message).finish()
    };
  }
};