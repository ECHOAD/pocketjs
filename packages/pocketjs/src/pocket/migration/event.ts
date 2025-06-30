//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Application, ApplicationAmino, ApplicationSDKType } from "../application/types";
import { MorseSupplierClaimSignerType } from "./morse_onchain";
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * EventImportMorseClaimableAccounts
 * - Emitted when MorseClaimableAccounts are created on-chain
 * - Represents import event for Morse claimable accounts
 */
export interface EventImportMorseClaimableAccounts {
  /** Shannon height at which MorseAccountState was created on-chain */
  createdAtHeight: bigint;
  /**
   * On-chain computed sha256 hash of the MorseAccountState
   * - Contains all imported MorseClaimableAccounts
   */
  morseAccountStateHash: Uint8Array;
  /**
   * Number of claimable accounts (EOAs) imported from Morse state export
   * - Account balances include consolidated application and supplier actor stakes
   */
  numAccounts: bigint;
}
export interface EventImportMorseClaimableAccountsProtoMsg {
  typeUrl: "/pocket.migration.EventImportMorseClaimableAccounts";
  value: Uint8Array;
}
/**
 * EventImportMorseClaimableAccounts
 * - Emitted when MorseClaimableAccounts are created on-chain
 * - Represents import event for Morse claimable accounts
 * @name EventImportMorseClaimableAccountsAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.EventImportMorseClaimableAccounts
 */
export interface EventImportMorseClaimableAccountsAmino {
  /**
   * Shannon height at which MorseAccountState was created on-chain
   */
  created_at_height: string;
  /**
   * On-chain computed sha256 hash of the MorseAccountState
   * - Contains all imported MorseClaimableAccounts
   */
  morse_account_state_hash: string;
  /**
   * Number of claimable accounts (EOAs) imported from Morse state export
   * - Account balances include consolidated application and supplier actor stakes
   */
  num_accounts: string;
}
export interface EventImportMorseClaimableAccountsAminoMsg {
  type: "/pocket.migration.EventImportMorseClaimableAccounts";
  value: EventImportMorseClaimableAccountsAmino;
}
/**
 * EventImportMorseClaimableAccounts
 * - Emitted when MorseClaimableAccounts are created on-chain
 * - Represents import event for Morse claimable accounts
 */
export interface EventImportMorseClaimableAccountsSDKType {
  created_at_height: bigint;
  morse_account_state_hash: Uint8Array;
  num_accounts: bigint;
}
/**
 * EventMorseAccountClaimed
 * - Emitted when a MorseAccount is claimed on-chain
 */
export interface EventMorseAccountClaimed {
  /** Shannon session end height in which the claim was committed */
  sessionEndHeight: bigint;
  /** Unstaked balance claimed from Morse */
  claimedBalance: Coin;
  /** bech32-encoded Shannon address to mint claimed balance */
  shannonDestAddress: string;
  /** Hex-encoded Morse account address whose balance was claimed */
  morseSrcAddress: string;
}
export interface EventMorseAccountClaimedProtoMsg {
  typeUrl: "/pocket.migration.EventMorseAccountClaimed";
  value: Uint8Array;
}
/**
 * EventMorseAccountClaimed
 * - Emitted when a MorseAccount is claimed on-chain
 * @name EventMorseAccountClaimedAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.EventMorseAccountClaimed
 */
export interface EventMorseAccountClaimedAmino {
  /**
   * Shannon session end height in which the claim was committed
   */
  session_end_height: string;
  /**
   * Unstaked balance claimed from Morse
   */
  claimed_balance: CoinAmino;
  /**
   * bech32-encoded Shannon address to mint claimed balance
   */
  shannon_dest_address: string;
  /**
   * Hex-encoded Morse account address whose balance was claimed
   */
  morse_src_address: string;
}
export interface EventMorseAccountClaimedAminoMsg {
  type: "/pocket.migration.EventMorseAccountClaimed";
  value: EventMorseAccountClaimedAmino;
}
/**
 * EventMorseAccountClaimed
 * - Emitted when a MorseAccount is claimed on-chain
 */
export interface EventMorseAccountClaimedSDKType {
  session_end_height: bigint;
  claimed_balance: CoinSDKType;
  shannon_dest_address: string;
  morse_src_address: string;
}
/**
 * EventMorseApplicationClaimed
 * - Emitted when a MorseAccount is claimed on-chain as a staked application
 */
export interface EventMorseApplicationClaimed {
  /** Shannon session end height in which the claim was committed */
  sessionEndHeight: bigint;
  /** Unstaked balance claimed from Morse */
  claimedBalance: Coin;
  /** Hex-encoded Morse account address whose balance was claimed */
  morseSrcAddress: string;
  /**
   * Application stake claimed as a result of the claim
   * - Equivalent to Morse application staked amount
   */
  claimedApplicationStake: Coin;
  /**
   * Application staked as a result of the claim
   * - Mirrors Morse application stake
   */
  application?: Application;
}
export interface EventMorseApplicationClaimedProtoMsg {
  typeUrl: "/pocket.migration.EventMorseApplicationClaimed";
  value: Uint8Array;
}
/**
 * EventMorseApplicationClaimed
 * - Emitted when a MorseAccount is claimed on-chain as a staked application
 * @name EventMorseApplicationClaimedAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.EventMorseApplicationClaimed
 */
export interface EventMorseApplicationClaimedAmino {
  /**
   * Shannon session end height in which the claim was committed
   */
  session_end_height: string;
  /**
   * Unstaked balance claimed from Morse
   */
  claimed_balance: CoinAmino;
  /**
   * Hex-encoded Morse account address whose balance was claimed
   */
  morse_src_address: string;
  /**
   * Application stake claimed as a result of the claim
   * - Equivalent to Morse application staked amount
   */
  claimed_application_stake: CoinAmino;
  /**
   * Application staked as a result of the claim
   * - Mirrors Morse application stake
   */
  application: ApplicationAmino;
}
export interface EventMorseApplicationClaimedAminoMsg {
  type: "/pocket.migration.EventMorseApplicationClaimed";
  value: EventMorseApplicationClaimedAmino;
}
/**
 * EventMorseApplicationClaimed
 * - Emitted when a MorseAccount is claimed on-chain as a staked application
 */
export interface EventMorseApplicationClaimedSDKType {
  session_end_height: bigint;
  claimed_balance: CoinSDKType;
  morse_src_address: string;
  claimed_application_stake: CoinSDKType;
  application?: ApplicationSDKType;
}
/**
 * EventMorseSupplierClaimed
 * - Emitted when a MorseAccount is claimed on-chain as a staked Supplier
 */
export interface EventMorseSupplierClaimed {
  /** Shannon session end height in which the claim was committed */
  sessionEndHeight: bigint;
  /** Unstaked balance claimed from Morse */
  claimedBalance: Coin;
  /**
   * The hex-encoded address of the Morse non-custodial (i.e. operator) account.
   * - Unstaked balance was migrated 1:1
   * - Stake was migrated 1:1 from morse_node_address to shannon_operator_address
   * - Morse non-custodial (i.e. operator) address.
   * If morse_output_address was not set, this is the custodial address.
   * - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morseNodeAddress: string;
  /**
   * ONLY applicable to Morse node/supplier accounts.
   * Hex-encoded address of the Morse output account/wallet associated with the Morse node/supplier.
   * - E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - Morse custodial (i.e. owner) address, which owned the staked tokens of the operator.
   *   See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morseOutputAddress: string;
  /**
   * The type of supplier claim signer, indicating which actor executed the claim
   * and whether it was a custodial or non-custodial claim.
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_ADDR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OPERATOR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OWNER
   */
  claimSignerType: MorseSupplierClaimSignerType;
  /**
   * Supplier stake claimed as a result of the claim
   * - Equivalent to Morse supplier staked amount
   */
  claimedSupplierStake: Coin;
  /**
   * Supplier staked as a result of the claim
   * - Mirrors Morse supplier stake
   */
  supplier?: Supplier;
}
export interface EventMorseSupplierClaimedProtoMsg {
  typeUrl: "/pocket.migration.EventMorseSupplierClaimed";
  value: Uint8Array;
}
/**
 * EventMorseSupplierClaimed
 * - Emitted when a MorseAccount is claimed on-chain as a staked Supplier
 * @name EventMorseSupplierClaimedAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.EventMorseSupplierClaimed
 */
export interface EventMorseSupplierClaimedAmino {
  /**
   * Shannon session end height in which the claim was committed
   */
  session_end_height: string;
  /**
   * Unstaked balance claimed from Morse
   */
  claimed_balance: CoinAmino;
  /**
   * The hex-encoded address of the Morse non-custodial (i.e. operator) account.
   * - Unstaked balance was migrated 1:1
   * - Stake was migrated 1:1 from morse_node_address to shannon_operator_address
   * - Morse non-custodial (i.e. operator) address.
   * If morse_output_address was not set, this is the custodial address.
   * - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morse_node_address: string;
  /**
   * ONLY applicable to Morse node/supplier accounts.
   * Hex-encoded address of the Morse output account/wallet associated with the Morse node/supplier.
   * - E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - Morse custodial (i.e. owner) address, which owned the staked tokens of the operator.
   *   See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morse_output_address: string;
  /**
   * The type of supplier claim signer, indicating which actor executed the claim
   * and whether it was a custodial or non-custodial claim.
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_ADDR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OPERATOR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OWNER
   */
  claim_signer_type: MorseSupplierClaimSignerType;
  /**
   * Supplier stake claimed as a result of the claim
   * - Equivalent to Morse supplier staked amount
   */
  claimed_supplier_stake: CoinAmino;
  /**
   * Supplier staked as a result of the claim
   * - Mirrors Morse supplier stake
   */
  supplier: SupplierAmino;
}
export interface EventMorseSupplierClaimedAminoMsg {
  type: "/pocket.migration.EventMorseSupplierClaimed";
  value: EventMorseSupplierClaimedAmino;
}
/**
 * EventMorseSupplierClaimed
 * - Emitted when a MorseAccount is claimed on-chain as a staked Supplier
 */
export interface EventMorseSupplierClaimedSDKType {
  session_end_height: bigint;
  claimed_balance: CoinSDKType;
  morse_node_address: string;
  morse_output_address: string;
  claim_signer_type: MorseSupplierClaimSignerType;
  claimed_supplier_stake: CoinSDKType;
  supplier?: SupplierSDKType;
}
/**
 * EventMorseAccountRecovered
 * - Emitted when a Morse account is recovered on-chain
 */
export interface EventMorseAccountRecovered {
  /** The session end height (on Shannon) in which the recovery was committed (i.e. claimed). */
  sessionEndHeight: bigint;
  /**
   * The total balance which was recovered:
   * - Includes both unstaked and staked balances (consolidated)
   * - Auto-liquidates both unstaked and staked balances at once
   */
  recoveredBalance: Coin;
  /** The bech32-encoded address of the Shannon account to which the recovered balance was minted. */
  shannonDestAddress: string;
  /**
   * The hex-encoded address of the Morse account whose balance and stakes have been recovered.
   * This address MUST be in the recovery allow list and could be of types such as:
   * - Unreachable/Locked EOA, Supplier or Application address
   * - Module account
   * - Invalid address (too short, too long, or non-hexadecimal format)
   */
  morseSrcAddress: string;
}
export interface EventMorseAccountRecoveredProtoMsg {
  typeUrl: "/pocket.migration.EventMorseAccountRecovered";
  value: Uint8Array;
}
/**
 * EventMorseAccountRecovered
 * - Emitted when a Morse account is recovered on-chain
 * @name EventMorseAccountRecoveredAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.EventMorseAccountRecovered
 */
export interface EventMorseAccountRecoveredAmino {
  /**
   * The session end height (on Shannon) in which the recovery was committed (i.e. claimed).
   */
  session_end_height: string;
  /**
   * The total balance which was recovered:
   * - Includes both unstaked and staked balances (consolidated)
   * - Auto-liquidates both unstaked and staked balances at once
   */
  recovered_balance: CoinAmino;
  /**
   * The bech32-encoded address of the Shannon account to which the recovered balance was minted.
   */
  shannon_dest_address: string;
  /**
   * The hex-encoded address of the Morse account whose balance and stakes have been recovered.
   * This address MUST be in the recovery allow list and could be of types such as:
   * - Unreachable/Locked EOA, Supplier or Application address
   * - Module account
   * - Invalid address (too short, too long, or non-hexadecimal format)
   */
  morse_src_address: string;
}
export interface EventMorseAccountRecoveredAminoMsg {
  type: "/pocket.migration.EventMorseAccountRecovered";
  value: EventMorseAccountRecoveredAmino;
}
/**
 * EventMorseAccountRecovered
 * - Emitted when a Morse account is recovered on-chain
 */
export interface EventMorseAccountRecoveredSDKType {
  session_end_height: bigint;
  recovered_balance: CoinSDKType;
  shannon_dest_address: string;
  morse_src_address: string;
}
function createBaseEventImportMorseClaimableAccounts(): EventImportMorseClaimableAccounts {
  return {
    createdAtHeight: BigInt(0),
    morseAccountStateHash: new Uint8Array(),
    numAccounts: BigInt(0)
  };
}
export const EventImportMorseClaimableAccounts = {
  typeUrl: "/pocket.migration.EventImportMorseClaimableAccounts",
  encode(message: EventImportMorseClaimableAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createdAtHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.createdAtHeight);
    }
    if (message.morseAccountStateHash.length !== 0) {
      writer.uint32(18).bytes(message.morseAccountStateHash);
    }
    if (message.numAccounts !== BigInt(0)) {
      writer.uint32(24).uint64(message.numAccounts);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventImportMorseClaimableAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventImportMorseClaimableAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createdAtHeight = reader.int64();
          break;
        case 2:
          message.morseAccountStateHash = reader.bytes();
          break;
        case 3:
          message.numAccounts = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventImportMorseClaimableAccounts>): EventImportMorseClaimableAccounts {
    const message = createBaseEventImportMorseClaimableAccounts();
    message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? BigInt(object.createdAtHeight.toString()) : BigInt(0);
    message.morseAccountStateHash = object.morseAccountStateHash ?? new Uint8Array();
    message.numAccounts = object.numAccounts !== undefined && object.numAccounts !== null ? BigInt(object.numAccounts.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventImportMorseClaimableAccountsAmino): EventImportMorseClaimableAccounts {
    const message = createBaseEventImportMorseClaimableAccounts();
    if (object.created_at_height !== undefined && object.created_at_height !== null) {
      message.createdAtHeight = BigInt(object.created_at_height);
    }
    if (object.morse_account_state_hash !== undefined && object.morse_account_state_hash !== null) {
      message.morseAccountStateHash = bytesFromBase64(object.morse_account_state_hash);
    }
    if (object.num_accounts !== undefined && object.num_accounts !== null) {
      message.numAccounts = BigInt(object.num_accounts);
    }
    return message;
  },
  toAmino(message: EventImportMorseClaimableAccounts): EventImportMorseClaimableAccountsAmino {
    const obj: any = {};
    obj.created_at_height = message.createdAtHeight ? message.createdAtHeight?.toString() : "0";
    obj.morse_account_state_hash = message.morseAccountStateHash ? base64FromBytes(message.morseAccountStateHash) : "";
    obj.num_accounts = message.numAccounts ? message.numAccounts?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: EventImportMorseClaimableAccountsAminoMsg): EventImportMorseClaimableAccounts {
    return EventImportMorseClaimableAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: EventImportMorseClaimableAccountsProtoMsg): EventImportMorseClaimableAccounts {
    return EventImportMorseClaimableAccounts.decode(message.value);
  },
  toProto(message: EventImportMorseClaimableAccounts): Uint8Array {
    return EventImportMorseClaimableAccounts.encode(message).finish();
  },
  toProtoMsg(message: EventImportMorseClaimableAccounts): EventImportMorseClaimableAccountsProtoMsg {
    return {
      typeUrl: "/pocket.migration.EventImportMorseClaimableAccounts",
      value: EventImportMorseClaimableAccounts.encode(message).finish()
    };
  }
};
function createBaseEventMorseAccountClaimed(): EventMorseAccountClaimed {
  return {
    sessionEndHeight: BigInt(0),
    claimedBalance: Coin.fromPartial({}),
    shannonDestAddress: "",
    morseSrcAddress: ""
  };
}
export const EventMorseAccountClaimed = {
  typeUrl: "/pocket.migration.EventMorseAccountClaimed",
  encode(message: EventMorseAccountClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.sessionEndHeight);
    }
    if (message.claimedBalance !== undefined) {
      Coin.encode(message.claimedBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.shannonDestAddress !== "") {
      writer.uint32(26).string(message.shannonDestAddress);
    }
    if (message.morseSrcAddress !== "") {
      writer.uint32(34).string(message.morseSrcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMorseAccountClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMorseAccountClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionEndHeight = reader.int64();
          break;
        case 2:
          message.claimedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.shannonDestAddress = reader.string();
          break;
        case 4:
          message.morseSrcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMorseAccountClaimed>): EventMorseAccountClaimed {
    const message = createBaseEventMorseAccountClaimed();
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.claimedBalance = object.claimedBalance !== undefined && object.claimedBalance !== null ? Coin.fromPartial(object.claimedBalance) : undefined;
    message.shannonDestAddress = object.shannonDestAddress ?? "";
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    return message;
  },
  fromAmino(object: EventMorseAccountClaimedAmino): EventMorseAccountClaimed {
    const message = createBaseEventMorseAccountClaimed();
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.claimed_balance !== undefined && object.claimed_balance !== null) {
      message.claimedBalance = Coin.fromAmino(object.claimed_balance);
    }
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    return message;
  },
  toAmino(message: EventMorseAccountClaimed): EventMorseAccountClaimedAmino {
    const obj: any = {};
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.claimed_balance = message.claimedBalance ? Coin.toAmino(message.claimedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.shannon_dest_address = message.shannonDestAddress ?? "";
    obj.morse_src_address = message.morseSrcAddress ?? "";
    return obj;
  },
  fromAminoMsg(object: EventMorseAccountClaimedAminoMsg): EventMorseAccountClaimed {
    return EventMorseAccountClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMorseAccountClaimedProtoMsg): EventMorseAccountClaimed {
    return EventMorseAccountClaimed.decode(message.value);
  },
  toProto(message: EventMorseAccountClaimed): Uint8Array {
    return EventMorseAccountClaimed.encode(message).finish();
  },
  toProtoMsg(message: EventMorseAccountClaimed): EventMorseAccountClaimedProtoMsg {
    return {
      typeUrl: "/pocket.migration.EventMorseAccountClaimed",
      value: EventMorseAccountClaimed.encode(message).finish()
    };
  }
};
function createBaseEventMorseApplicationClaimed(): EventMorseApplicationClaimed {
  return {
    sessionEndHeight: BigInt(0),
    claimedBalance: Coin.fromPartial({}),
    morseSrcAddress: "",
    claimedApplicationStake: Coin.fromPartial({}),
    application: undefined
  };
}
export const EventMorseApplicationClaimed = {
  typeUrl: "/pocket.migration.EventMorseApplicationClaimed",
  encode(message: EventMorseApplicationClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.sessionEndHeight);
    }
    if (message.claimedBalance !== undefined) {
      Coin.encode(message.claimedBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.morseSrcAddress !== "") {
      writer.uint32(26).string(message.morseSrcAddress);
    }
    if (message.claimedApplicationStake !== undefined) {
      Coin.encode(message.claimedApplicationStake, writer.uint32(34).fork()).ldelim();
    }
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMorseApplicationClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMorseApplicationClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionEndHeight = reader.int64();
          break;
        case 2:
          message.claimedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.morseSrcAddress = reader.string();
          break;
        case 4:
          message.claimedApplicationStake = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMorseApplicationClaimed>): EventMorseApplicationClaimed {
    const message = createBaseEventMorseApplicationClaimed();
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.claimedBalance = object.claimedBalance !== undefined && object.claimedBalance !== null ? Coin.fromPartial(object.claimedBalance) : undefined;
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    message.claimedApplicationStake = object.claimedApplicationStake !== undefined && object.claimedApplicationStake !== null ? Coin.fromPartial(object.claimedApplicationStake) : undefined;
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: EventMorseApplicationClaimedAmino): EventMorseApplicationClaimed {
    const message = createBaseEventMorseApplicationClaimed();
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.claimed_balance !== undefined && object.claimed_balance !== null) {
      message.claimedBalance = Coin.fromAmino(object.claimed_balance);
    }
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    if (object.claimed_application_stake !== undefined && object.claimed_application_stake !== null) {
      message.claimedApplicationStake = Coin.fromAmino(object.claimed_application_stake);
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: EventMorseApplicationClaimed): EventMorseApplicationClaimedAmino {
    const obj: any = {};
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.claimed_balance = message.claimedBalance ? Coin.toAmino(message.claimedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.morse_src_address = message.morseSrcAddress ?? "";
    obj.claimed_application_stake = message.claimedApplicationStake ? Coin.toAmino(message.claimedApplicationStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventMorseApplicationClaimedAminoMsg): EventMorseApplicationClaimed {
    return EventMorseApplicationClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMorseApplicationClaimedProtoMsg): EventMorseApplicationClaimed {
    return EventMorseApplicationClaimed.decode(message.value);
  },
  toProto(message: EventMorseApplicationClaimed): Uint8Array {
    return EventMorseApplicationClaimed.encode(message).finish();
  },
  toProtoMsg(message: EventMorseApplicationClaimed): EventMorseApplicationClaimedProtoMsg {
    return {
      typeUrl: "/pocket.migration.EventMorseApplicationClaimed",
      value: EventMorseApplicationClaimed.encode(message).finish()
    };
  }
};
function createBaseEventMorseSupplierClaimed(): EventMorseSupplierClaimed {
  return {
    sessionEndHeight: BigInt(0),
    claimedBalance: Coin.fromPartial({}),
    morseNodeAddress: "",
    morseOutputAddress: "",
    claimSignerType: 0,
    claimedSupplierStake: Coin.fromPartial({}),
    supplier: undefined
  };
}
export const EventMorseSupplierClaimed = {
  typeUrl: "/pocket.migration.EventMorseSupplierClaimed",
  encode(message: EventMorseSupplierClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.sessionEndHeight);
    }
    if (message.claimedBalance !== undefined) {
      Coin.encode(message.claimedBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.morseNodeAddress !== "") {
      writer.uint32(66).string(message.morseNodeAddress);
    }
    if (message.morseOutputAddress !== "") {
      writer.uint32(50).string(message.morseOutputAddress);
    }
    if (message.claimSignerType !== 0) {
      writer.uint32(56).int32(message.claimSignerType);
    }
    if (message.claimedSupplierStake !== undefined) {
      Coin.encode(message.claimedSupplierStake, writer.uint32(34).fork()).ldelim();
    }
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMorseSupplierClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMorseSupplierClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionEndHeight = reader.int64();
          break;
        case 2:
          message.claimedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.morseNodeAddress = reader.string();
          break;
        case 6:
          message.morseOutputAddress = reader.string();
          break;
        case 7:
          message.claimSignerType = reader.int32() as any;
          break;
        case 4:
          message.claimedSupplierStake = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMorseSupplierClaimed>): EventMorseSupplierClaimed {
    const message = createBaseEventMorseSupplierClaimed();
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.claimedBalance = object.claimedBalance !== undefined && object.claimedBalance !== null ? Coin.fromPartial(object.claimedBalance) : undefined;
    message.morseNodeAddress = object.morseNodeAddress ?? "";
    message.morseOutputAddress = object.morseOutputAddress ?? "";
    message.claimSignerType = object.claimSignerType ?? 0;
    message.claimedSupplierStake = object.claimedSupplierStake !== undefined && object.claimedSupplierStake !== null ? Coin.fromPartial(object.claimedSupplierStake) : undefined;
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    return message;
  },
  fromAmino(object: EventMorseSupplierClaimedAmino): EventMorseSupplierClaimed {
    const message = createBaseEventMorseSupplierClaimed();
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.claimed_balance !== undefined && object.claimed_balance !== null) {
      message.claimedBalance = Coin.fromAmino(object.claimed_balance);
    }
    if (object.morse_node_address !== undefined && object.morse_node_address !== null) {
      message.morseNodeAddress = object.morse_node_address;
    }
    if (object.morse_output_address !== undefined && object.morse_output_address !== null) {
      message.morseOutputAddress = object.morse_output_address;
    }
    if (object.claim_signer_type !== undefined && object.claim_signer_type !== null) {
      message.claimSignerType = object.claim_signer_type;
    }
    if (object.claimed_supplier_stake !== undefined && object.claimed_supplier_stake !== null) {
      message.claimedSupplierStake = Coin.fromAmino(object.claimed_supplier_stake);
    }
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    return message;
  },
  toAmino(message: EventMorseSupplierClaimed): EventMorseSupplierClaimedAmino {
    const obj: any = {};
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.claimed_balance = message.claimedBalance ? Coin.toAmino(message.claimedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.morse_node_address = message.morseNodeAddress ?? "";
    obj.morse_output_address = message.morseOutputAddress ?? "";
    obj.claim_signer_type = message.claimSignerType ?? 0;
    obj.claimed_supplier_stake = message.claimedSupplierStake ? Coin.toAmino(message.claimedSupplierStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventMorseSupplierClaimedAminoMsg): EventMorseSupplierClaimed {
    return EventMorseSupplierClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMorseSupplierClaimedProtoMsg): EventMorseSupplierClaimed {
    return EventMorseSupplierClaimed.decode(message.value);
  },
  toProto(message: EventMorseSupplierClaimed): Uint8Array {
    return EventMorseSupplierClaimed.encode(message).finish();
  },
  toProtoMsg(message: EventMorseSupplierClaimed): EventMorseSupplierClaimedProtoMsg {
    return {
      typeUrl: "/pocket.migration.EventMorseSupplierClaimed",
      value: EventMorseSupplierClaimed.encode(message).finish()
    };
  }
};
function createBaseEventMorseAccountRecovered(): EventMorseAccountRecovered {
  return {
    sessionEndHeight: BigInt(0),
    recoveredBalance: Coin.fromPartial({}),
    shannonDestAddress: "",
    morseSrcAddress: ""
  };
}
export const EventMorseAccountRecovered = {
  typeUrl: "/pocket.migration.EventMorseAccountRecovered",
  encode(message: EventMorseAccountRecovered, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.sessionEndHeight);
    }
    if (message.recoveredBalance !== undefined) {
      Coin.encode(message.recoveredBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.shannonDestAddress !== "") {
      writer.uint32(26).string(message.shannonDestAddress);
    }
    if (message.morseSrcAddress !== "") {
      writer.uint32(34).string(message.morseSrcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMorseAccountRecovered {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMorseAccountRecovered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionEndHeight = reader.int64();
          break;
        case 2:
          message.recoveredBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.shannonDestAddress = reader.string();
          break;
        case 4:
          message.morseSrcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMorseAccountRecovered>): EventMorseAccountRecovered {
    const message = createBaseEventMorseAccountRecovered();
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.recoveredBalance = object.recoveredBalance !== undefined && object.recoveredBalance !== null ? Coin.fromPartial(object.recoveredBalance) : undefined;
    message.shannonDestAddress = object.shannonDestAddress ?? "";
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    return message;
  },
  fromAmino(object: EventMorseAccountRecoveredAmino): EventMorseAccountRecovered {
    const message = createBaseEventMorseAccountRecovered();
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.recovered_balance !== undefined && object.recovered_balance !== null) {
      message.recoveredBalance = Coin.fromAmino(object.recovered_balance);
    }
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    return message;
  },
  toAmino(message: EventMorseAccountRecovered): EventMorseAccountRecoveredAmino {
    const obj: any = {};
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.recovered_balance = message.recoveredBalance ? Coin.toAmino(message.recoveredBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.shannon_dest_address = message.shannonDestAddress ?? "";
    obj.morse_src_address = message.morseSrcAddress ?? "";
    return obj;
  },
  fromAminoMsg(object: EventMorseAccountRecoveredAminoMsg): EventMorseAccountRecovered {
    return EventMorseAccountRecovered.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMorseAccountRecoveredProtoMsg): EventMorseAccountRecovered {
    return EventMorseAccountRecovered.decode(message.value);
  },
  toProto(message: EventMorseAccountRecovered): Uint8Array {
    return EventMorseAccountRecovered.encode(message).finish();
  },
  toProtoMsg(message: EventMorseAccountRecovered): EventMorseAccountRecoveredProtoMsg {
    return {
      typeUrl: "/pocket.migration.EventMorseAccountRecovered",
      value: EventMorseAccountRecovered.encode(message).finish()
    };
  }
};