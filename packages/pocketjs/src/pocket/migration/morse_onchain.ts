//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
/**
 * MorseSupplierClaimSignerType
 * - Enum for Morse supplier claim signer type
 */
export enum MorseSupplierClaimSignerType {
  /** MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_UNSPECIFIED - Unspecified signer type */
  MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_UNSPECIFIED = 0,
  /**
   * MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_NODE_ADDR - signer === addr === operator === owner
   * Custodial signer type
   * - The Morse node address is NOT EMPTY (i.e. operator)
   * - The Morse output address is EMPTY (i.e. owner)
   * - Implies that the operator and owner are THE SAME offchain identity
   */
  MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_NODE_ADDR = 1,
  /**
   * MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_NODE_ADDR - signer === operator === addr && owner !== operator
   * Non-custodial signer type
   * - The Morse node address is NOT EMPTY (i.e. operator)
   * - The Morse output address is NOT EMPTY (i.e. owner)
   * - Implies that the operator and owner are MOST LIKELY DIFFERENT offchain identities
   * - The operator is the one signing the supplier claim
   */
  MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_NODE_ADDR = 2,
  /**
   * MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_OWNER - signer === owner && owner !== addr
   * Owner non-custodial signer type
   * - The Morse node address is EMPTY (i.e. operator)
   * - The Morse output address is NOT EMPTY (i.e. owner)
   * - Implies that the operator and owner are MOST LIKELY different offchain identities
   * - The owner is the one signing the supplier claim
   */
  MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_OWNER = 3,
  UNRECOGNIZED = -1,
}
export const MorseSupplierClaimSignerTypeSDKType = MorseSupplierClaimSignerType;
export const MorseSupplierClaimSignerTypeAmino = MorseSupplierClaimSignerType;
export function morseSupplierClaimSignerTypeFromJSON(object: any): MorseSupplierClaimSignerType {
  switch (object) {
    case 0:
    case "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_UNSPECIFIED":
      return MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_UNSPECIFIED;
    case 1:
    case "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_NODE_ADDR":
      return MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_NODE_ADDR;
    case 2:
    case "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_NODE_ADDR":
      return MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_NODE_ADDR;
    case 3:
    case "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_OWNER":
      return MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_OWNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MorseSupplierClaimSignerType.UNRECOGNIZED;
  }
}
export function morseSupplierClaimSignerTypeToJSON(object: MorseSupplierClaimSignerType): string {
  switch (object) {
    case MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_UNSPECIFIED:
      return "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_UNSPECIFIED";
    case MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_NODE_ADDR:
      return "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_NODE_ADDR";
    case MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_NODE_ADDR:
      return "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_NODE_ADDR";
    case MorseSupplierClaimSignerType.MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_OWNER:
      return "MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_OWNER";
    case MorseSupplierClaimSignerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MorseAccountState
 * - Onchain representation of all account state to be migrated from Morse
 * - NEVER persisted onchain
 * - Dependency of the MsgImportMorseClaimableAccount handler
 * - Main purpose: exposes #GetHash() for verifying integrity of all MorseClaimableAccounts
 */
export interface MorseAccountState {
  accounts: MorseClaimableAccount[];
}
export interface MorseAccountStateProtoMsg {
  typeUrl: "/pocket.migration.MorseAccountState";
  value: Uint8Array;
}
/**
 * MorseAccountState
 * - Onchain representation of all account state to be migrated from Morse
 * - NEVER persisted onchain
 * - Dependency of the MsgImportMorseClaimableAccount handler
 * - Main purpose: exposes #GetHash() for verifying integrity of all MorseClaimableAccounts
 * @name MorseAccountStateAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseAccountState
 */
export interface MorseAccountStateAmino {
  accounts: MorseClaimableAccountAmino[];
}
export interface MorseAccountStateAminoMsg {
  type: "/pocket.migration.MorseAccountState";
  value: MorseAccountStateAmino;
}
/**
 * MorseAccountState
 * - Onchain representation of all account state to be migrated from Morse
 * - NEVER persisted onchain
 * - Dependency of the MsgImportMorseClaimableAccount handler
 * - Main purpose: exposes #GetHash() for verifying integrity of all MorseClaimableAccounts
 */
export interface MorseAccountStateSDKType {
  accounts: MorseClaimableAccountSDKType[];
}
/**
 * MorseClaimableAccount
 * - Onchain (persisted) representation of a Morse account claimable as part of Morse -> Shannon migration
 * - Created during MorseAccountState import (see: MsgImportMorseClaimableAccount)
 * - Created ONLY ONCE and NEVER deleted (per morse_src_address per network / re-genesis),
 *   unless the allow_morse_account_import_overwrite migration param is enabled
 * - Updated ONLY ONCE, when claimed (per morse_src_address per network / re-genesis)
 */
export interface MorseClaimableAccount {
  /**
   * bech32-encoded address of the Shannon account to mint claimed balance
   * Intended to remain empty until the account is claimed
   */
  shannonDestAddress?: string;
  /**
   * Hex-encoded address of the Morse account whose balance will be claimed.
   * If this MorseClaimableAccount represents a Morse node/supplier:
   *   - Morse non-custodial (i.e. operator) address.
   *   - If morse_output_address is not set, this is the custodial address.
   *   - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morseSrcAddress: string;
  /** Unstaked upokt tokens (account balance) available for claiming */
  unstakedBalance: Coin;
  /**
   * Staked tokens for supplier actor corresponding to this account address
   * DEV_NOTE: Context for Morse:
   * - Supplier = Servicer or Node (not a full node) in Morse
   * - All Validators are Servicers; not all Servicers are Validators
   * - Top 100 staked Servicers are validators (automatic)
   * - Only accounts for servicer stake balance transition
   * TODO_MAINNET(@Olshansk): Develop strategy for bootstrapping validators in Shannon with cosmos ecosystem
   */
  supplierStake: Coin;
  /** Staked tokens for application actor corresponding to this account address */
  applicationStake: Coin;
  /**
   * Shannon height at which the account was claimed
   * Intended to remain empty until the account is claimed
   */
  claimedAtHeight?: bigint;
  /**
   * ONLY applicable to Morse node/supplier accounts.
   * Hex-encoded address of the Morse output account/wallet associated with the Morse node/supplier.
   * - E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - Morse custodial (i.e. owner) address, which owns the staked tokens of the operator.
   *   See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morseOutputAddress: string;
  /**
   * The ISO 8601 UTC timestamp after which the Morse node/supplier unbonding period will have elapsed.
   * It reflects the "unbonding completion time" of the Morse node/supplier, but is called "unstaking time" to comply with necessary Morse data structures.
   */
  unstakingTime: Date;
}
export interface MorseClaimableAccountProtoMsg {
  typeUrl: "/pocket.migration.MorseClaimableAccount";
  value: Uint8Array;
}
/**
 * MorseClaimableAccount
 * - Onchain (persisted) representation of a Morse account claimable as part of Morse -> Shannon migration
 * - Created during MorseAccountState import (see: MsgImportMorseClaimableAccount)
 * - Created ONLY ONCE and NEVER deleted (per morse_src_address per network / re-genesis),
 *   unless the allow_morse_account_import_overwrite migration param is enabled
 * - Updated ONLY ONCE, when claimed (per morse_src_address per network / re-genesis)
 * @name MorseClaimableAccountAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MorseClaimableAccount
 */
export interface MorseClaimableAccountAmino {
  /**
   * bech32-encoded address of the Shannon account to mint claimed balance
   * Intended to remain empty until the account is claimed
   */
  shannon_dest_address: string;
  /**
   * Hex-encoded address of the Morse account whose balance will be claimed.
   * If this MorseClaimableAccount represents a Morse node/supplier:
   *   - Morse non-custodial (i.e. operator) address.
   *   - If morse_output_address is not set, this is the custodial address.
   *   - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morse_src_address: string;
  /**
   * Unstaked upokt tokens (account balance) available for claiming
   */
  unstaked_balance: CoinAmino;
  /**
   * Staked tokens for supplier actor corresponding to this account address
   * DEV_NOTE: Context for Morse:
   * - Supplier = Servicer or Node (not a full node) in Morse
   * - All Validators are Servicers; not all Servicers are Validators
   * - Top 100 staked Servicers are validators (automatic)
   * - Only accounts for servicer stake balance transition
   * TODO_MAINNET(@Olshansk): Develop strategy for bootstrapping validators in Shannon with cosmos ecosystem
   */
  supplier_stake: CoinAmino;
  /**
   * Staked tokens for application actor corresponding to this account address
   */
  application_stake: CoinAmino;
  /**
   * Shannon height at which the account was claimed
   * Intended to remain empty until the account is claimed
   */
  claimed_at_height: string;
  /**
   * ONLY applicable to Morse node/supplier accounts.
   * Hex-encoded address of the Morse output account/wallet associated with the Morse node/supplier.
   * - E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - Morse custodial (i.e. owner) address, which owns the staked tokens of the operator.
   *   See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morse_output_address?: string;
  /**
   * The ISO 8601 UTC timestamp after which the Morse node/supplier unbonding period will have elapsed.
   * It reflects the "unbonding completion time" of the Morse node/supplier, but is called "unstaking time" to comply with necessary Morse data structures.
   */
  unstaking_time: string;
}
export interface MorseClaimableAccountAminoMsg {
  type: "/pocket.migration.MorseClaimableAccount";
  value: MorseClaimableAccountAmino;
}
/**
 * MorseClaimableAccount
 * - Onchain (persisted) representation of a Morse account claimable as part of Morse -> Shannon migration
 * - Created during MorseAccountState import (see: MsgImportMorseClaimableAccount)
 * - Created ONLY ONCE and NEVER deleted (per morse_src_address per network / re-genesis),
 *   unless the allow_morse_account_import_overwrite migration param is enabled
 * - Updated ONLY ONCE, when claimed (per morse_src_address per network / re-genesis)
 */
export interface MorseClaimableAccountSDKType {
  shannon_dest_address?: string;
  morse_src_address: string;
  unstaked_balance: CoinSDKType;
  supplier_stake: CoinSDKType;
  application_stake: CoinSDKType;
  claimed_at_height?: bigint;
  morse_output_address: string;
  unstaking_time: Date;
}
function createBaseMorseAccountState(): MorseAccountState {
  return {
    accounts: []
  };
}
export const MorseAccountState = {
  typeUrl: "/pocket.migration.MorseAccountState",
  encode(message: MorseAccountState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      MorseClaimableAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseAccountState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseAccountState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.accounts.push(MorseClaimableAccount.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseAccountState>): MorseAccountState {
    const message = createBaseMorseAccountState();
    message.accounts = object.accounts?.map(e => MorseClaimableAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MorseAccountStateAmino): MorseAccountState {
    const message = createBaseMorseAccountState();
    message.accounts = object.accounts?.map(e => MorseClaimableAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MorseAccountState): MorseAccountStateAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? MorseClaimableAccount.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    return obj;
  },
  fromAminoMsg(object: MorseAccountStateAminoMsg): MorseAccountState {
    return MorseAccountState.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseAccountStateProtoMsg): MorseAccountState {
    return MorseAccountState.decode(message.value);
  },
  toProto(message: MorseAccountState): Uint8Array {
    return MorseAccountState.encode(message).finish();
  },
  toProtoMsg(message: MorseAccountState): MorseAccountStateProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseAccountState",
      value: MorseAccountState.encode(message).finish()
    };
  }
};
function createBaseMorseClaimableAccount(): MorseClaimableAccount {
  return {
    shannonDestAddress: undefined,
    morseSrcAddress: "",
    unstakedBalance: Coin.fromPartial({}),
    supplierStake: Coin.fromPartial({}),
    applicationStake: Coin.fromPartial({}),
    claimedAtHeight: undefined,
    morseOutputAddress: "",
    unstakingTime: new Date()
  };
}
export const MorseClaimableAccount = {
  typeUrl: "/pocket.migration.MorseClaimableAccount",
  encode(message: MorseClaimableAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shannonDestAddress !== undefined) {
      writer.uint32(10).string(message.shannonDestAddress);
    }
    if (message.morseSrcAddress !== "") {
      writer.uint32(18).string(message.morseSrcAddress);
    }
    if (message.unstakedBalance !== undefined) {
      Coin.encode(message.unstakedBalance, writer.uint32(42).fork()).ldelim();
    }
    if (message.supplierStake !== undefined) {
      Coin.encode(message.supplierStake, writer.uint32(50).fork()).ldelim();
    }
    if (message.applicationStake !== undefined) {
      Coin.encode(message.applicationStake, writer.uint32(58).fork()).ldelim();
    }
    if (message.claimedAtHeight !== undefined) {
      writer.uint32(64).int64(message.claimedAtHeight);
    }
    if (message.morseOutputAddress !== "") {
      writer.uint32(74).string(message.morseOutputAddress);
    }
    if (message.unstakingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unstakingTime), writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MorseClaimableAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMorseClaimableAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shannonDestAddress = reader.string();
          break;
        case 2:
          message.morseSrcAddress = reader.string();
          break;
        case 5:
          message.unstakedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.supplierStake = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.applicationStake = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.claimedAtHeight = reader.int64();
          break;
        case 9:
          message.morseOutputAddress = reader.string();
          break;
        case 10:
          message.unstakingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MorseClaimableAccount>): MorseClaimableAccount {
    const message = createBaseMorseClaimableAccount();
    message.shannonDestAddress = object.shannonDestAddress ?? undefined;
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    message.unstakedBalance = object.unstakedBalance !== undefined && object.unstakedBalance !== null ? Coin.fromPartial(object.unstakedBalance) : undefined;
    message.supplierStake = object.supplierStake !== undefined && object.supplierStake !== null ? Coin.fromPartial(object.supplierStake) : undefined;
    message.applicationStake = object.applicationStake !== undefined && object.applicationStake !== null ? Coin.fromPartial(object.applicationStake) : undefined;
    message.claimedAtHeight = object.claimedAtHeight !== undefined && object.claimedAtHeight !== null ? BigInt(object.claimedAtHeight.toString()) : undefined;
    message.morseOutputAddress = object.morseOutputAddress ?? "";
    message.unstakingTime = object.unstakingTime ?? undefined;
    return message;
  },
  fromAmino(object: MorseClaimableAccountAmino): MorseClaimableAccount {
    const message = createBaseMorseClaimableAccount();
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    if (object.unstaked_balance !== undefined && object.unstaked_balance !== null) {
      message.unstakedBalance = Coin.fromAmino(object.unstaked_balance);
    }
    if (object.supplier_stake !== undefined && object.supplier_stake !== null) {
      message.supplierStake = Coin.fromAmino(object.supplier_stake);
    }
    if (object.application_stake !== undefined && object.application_stake !== null) {
      message.applicationStake = Coin.fromAmino(object.application_stake);
    }
    if (object.claimed_at_height !== undefined && object.claimed_at_height !== null) {
      message.claimedAtHeight = BigInt(object.claimed_at_height);
    }
    if (object.morse_output_address !== undefined && object.morse_output_address !== null) {
      message.morseOutputAddress = object.morse_output_address;
    }
    if (object.unstaking_time !== undefined && object.unstaking_time !== null) {
      message.unstakingTime = fromTimestamp(Timestamp.fromAmino(object.unstaking_time));
    }
    return message;
  },
  toAmino(message: MorseClaimableAccount): MorseClaimableAccountAmino {
    const obj: any = {};
    obj.shannon_dest_address = message.shannonDestAddress ?? null;
    obj.morse_src_address = message.morseSrcAddress ?? "";
    obj.unstaked_balance = message.unstakedBalance ? Coin.toAmino(message.unstakedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.supplier_stake = message.supplierStake ? Coin.toAmino(message.supplierStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.application_stake = message.applicationStake ? Coin.toAmino(message.applicationStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.claimed_at_height = message.claimedAtHeight ? message.claimedAtHeight?.toString() : "0";
    obj.morse_output_address = message.morseOutputAddress === "" ? undefined : message.morseOutputAddress;
    obj.unstaking_time = message.unstakingTime ? Timestamp.toAmino(toTimestamp(message.unstakingTime)) : new Date();
    return obj;
  },
  fromAminoMsg(object: MorseClaimableAccountAminoMsg): MorseClaimableAccount {
    return MorseClaimableAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MorseClaimableAccountProtoMsg): MorseClaimableAccount {
    return MorseClaimableAccount.decode(message.value);
  },
  toProto(message: MorseClaimableAccount): Uint8Array {
    return MorseClaimableAccount.encode(message).finish();
  },
  toProtoMsg(message: MorseClaimableAccount): MorseClaimableAccountProtoMsg {
    return {
      typeUrl: "/pocket.migration.MorseClaimableAccount",
      value: MorseClaimableAccount.encode(message).finish()
    };
  }
};