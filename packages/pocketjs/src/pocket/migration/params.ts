//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * waive_morse_claim_gas_fees is a feature flag used to enable/disable the waiving of gas fees for txs that:
   * - Contain exactly one secp256k1 signer
   * - Contain at least one Morse account/actor claim messages
   * - Do not contain any other messages other than Morse account/actor claim messages
   */
  waiveMorseClaimGasFees: boolean;
  /**
   * allow_morse_account_import_overwrite is a feature flag which is used to enable/disable
   * the re-importing of Morse claimable accounts by the authority.
   * Such a re-import will:
   * - Ignore (i.e. leave) ALL claimed destination Shannon accounts/actors
   * - Delete ALL existing onchain MorseClaimableAccounts
   * - Import the new set of MorseClaimableAccounts from the provided MsgImportMorseClaimableAccounts
   * This is useful for testing purposes, but should be disabled in production.
   */
  allowMorseAccountImportOverwrite: boolean;
  /**
   * morse_account_claiming_enabled is a feature flag which is used to enable/disable the processing of Morse account/actor claim messages
   * (i.e. `MsgClaimMorseAccount`, `MorseClaimApplication`, and `MorseClaimSupplier`).
   */
  morseAccountClaimingEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.migration.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.Params
 */
export interface ParamsAmino {
  /**
   * waive_morse_claim_gas_fees is a feature flag used to enable/disable the waiving of gas fees for txs that:
   * - Contain exactly one secp256k1 signer
   * - Contain at least one Morse account/actor claim messages
   * - Do not contain any other messages other than Morse account/actor claim messages
   */
  waive_morse_claim_gas_fees: boolean;
  /**
   * allow_morse_account_import_overwrite is a feature flag which is used to enable/disable
   * the re-importing of Morse claimable accounts by the authority.
   * Such a re-import will:
   * - Ignore (i.e. leave) ALL claimed destination Shannon accounts/actors
   * - Delete ALL existing onchain MorseClaimableAccounts
   * - Import the new set of MorseClaimableAccounts from the provided MsgImportMorseClaimableAccounts
   * This is useful for testing purposes, but should be disabled in production.
   */
  allow_morse_account_import_overwrite: boolean;
  /**
   * morse_account_claiming_enabled is a feature flag which is used to enable/disable the processing of Morse account/actor claim messages
   * (i.e. `MsgClaimMorseAccount`, `MorseClaimApplication`, and `MorseClaimSupplier`).
   */
  morse_account_claiming_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "pocket/x/migration/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  waive_morse_claim_gas_fees: boolean;
  allow_morse_account_import_overwrite: boolean;
  morse_account_claiming_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    waiveMorseClaimGasFees: false,
    allowMorseAccountImportOverwrite: false,
    morseAccountClaimingEnabled: false
  };
}
export const Params = {
  typeUrl: "/pocket.migration.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.waiveMorseClaimGasFees === true) {
      writer.uint32(8).bool(message.waiveMorseClaimGasFees);
    }
    if (message.allowMorseAccountImportOverwrite === true) {
      writer.uint32(16).bool(message.allowMorseAccountImportOverwrite);
    }
    if (message.morseAccountClaimingEnabled === true) {
      writer.uint32(24).bool(message.morseAccountClaimingEnabled);
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
          message.waiveMorseClaimGasFees = reader.bool();
          break;
        case 2:
          message.allowMorseAccountImportOverwrite = reader.bool();
          break;
        case 3:
          message.morseAccountClaimingEnabled = reader.bool();
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
    message.waiveMorseClaimGasFees = object.waiveMorseClaimGasFees ?? false;
    message.allowMorseAccountImportOverwrite = object.allowMorseAccountImportOverwrite ?? false;
    message.morseAccountClaimingEnabled = object.morseAccountClaimingEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.waive_morse_claim_gas_fees !== undefined && object.waive_morse_claim_gas_fees !== null) {
      message.waiveMorseClaimGasFees = object.waive_morse_claim_gas_fees;
    }
    if (object.allow_morse_account_import_overwrite !== undefined && object.allow_morse_account_import_overwrite !== null) {
      message.allowMorseAccountImportOverwrite = object.allow_morse_account_import_overwrite;
    }
    if (object.morse_account_claiming_enabled !== undefined && object.morse_account_claiming_enabled !== null) {
      message.morseAccountClaimingEnabled = object.morse_account_claiming_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.waive_morse_claim_gas_fees = message.waiveMorseClaimGasFees ?? false;
    obj.allow_morse_account_import_overwrite = message.allowMorseAccountImportOverwrite ?? false;
    obj.morse_account_claiming_enabled = message.morseAccountClaimingEnabled ?? false;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/migration/Params",
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
      typeUrl: "/pocket.migration.Params",
      value: Params.encode(message).finish()
    };
  }
};