//@ts-nocheck
import { Claim, ClaimAmino, ClaimSDKType } from "../proof/types";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
/** SettlementOpReason is a distinct, tlm-specific causal reason for a given operation. */
export enum SettlementOpReason {
  /**
   * UNSPECIFIED - UNSPECIFIED is the default value for SettlementOpReason, it is used as a field
   * type for objects which need to distinguish whether a SettlementOpReason has been specified it or not.
   */
  UNSPECIFIED = 0,
  /** TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_STAKE_MINT - Value transfer (credit/debit) */
  TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_STAKE_MINT = 1,
  TLM_RELAY_BURN_EQUALS_MINT_APPLICATION_STAKE_BURN = 2,
  /** TLM_GLOBAL_MINT_INFLATION - Inflation */
  TLM_GLOBAL_MINT_INFLATION = 3,
  /** TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION - Reward distribution */
  TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION = 4,
  TLM_GLOBAL_MINT_DAO_REWARD_DISTRIBUTION = 5,
  TLM_GLOBAL_MINT_PROPOSER_REWARD_DISTRIBUTION = 6,
  TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION = 7,
  TLM_GLOBAL_MINT_SOURCE_OWNER_REWARD_DISTRIBUTION = 8,
  TLM_GLOBAL_MINT_APPLICATION_REWARD_DISTRIBUTION = 9,
  /** TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_DAO_TRANSFER - Self-servicing mitigation */
  TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_DAO_TRANSFER = 10,
  /** UNSPECIFIED_TLM_SUPPLIER_SLASH_MODULE_TRANSFER - Penalization */
  UNSPECIFIED_TLM_SUPPLIER_SLASH_MODULE_TRANSFER = 11,
  UNSPECIFIED_TLM_SUPPLIER_SLASH_STAKE_BURN = 12,
  /** TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_MODULE_TRANSFER - Module accounting */
  TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_MODULE_TRANSFER = 13,
  TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_MODULE_TRANSFER = 14,
  UNRECOGNIZED = -1,
}
export const SettlementOpReasonSDKType = SettlementOpReason;
export const SettlementOpReasonAmino = SettlementOpReason;
export function settlementOpReasonFromJSON(object: any): SettlementOpReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SettlementOpReason.UNSPECIFIED;
    case 1:
    case "TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_STAKE_MINT":
      return SettlementOpReason.TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_STAKE_MINT;
    case 2:
    case "TLM_RELAY_BURN_EQUALS_MINT_APPLICATION_STAKE_BURN":
      return SettlementOpReason.TLM_RELAY_BURN_EQUALS_MINT_APPLICATION_STAKE_BURN;
    case 3:
    case "TLM_GLOBAL_MINT_INFLATION":
      return SettlementOpReason.TLM_GLOBAL_MINT_INFLATION;
    case 4:
    case "TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION":
      return SettlementOpReason.TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION;
    case 5:
    case "TLM_GLOBAL_MINT_DAO_REWARD_DISTRIBUTION":
      return SettlementOpReason.TLM_GLOBAL_MINT_DAO_REWARD_DISTRIBUTION;
    case 6:
    case "TLM_GLOBAL_MINT_PROPOSER_REWARD_DISTRIBUTION":
      return SettlementOpReason.TLM_GLOBAL_MINT_PROPOSER_REWARD_DISTRIBUTION;
    case 7:
    case "TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION":
      return SettlementOpReason.TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION;
    case 8:
    case "TLM_GLOBAL_MINT_SOURCE_OWNER_REWARD_DISTRIBUTION":
      return SettlementOpReason.TLM_GLOBAL_MINT_SOURCE_OWNER_REWARD_DISTRIBUTION;
    case 9:
    case "TLM_GLOBAL_MINT_APPLICATION_REWARD_DISTRIBUTION":
      return SettlementOpReason.TLM_GLOBAL_MINT_APPLICATION_REWARD_DISTRIBUTION;
    case 10:
    case "TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_DAO_TRANSFER":
      return SettlementOpReason.TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_DAO_TRANSFER;
    case 11:
    case "UNSPECIFIED_TLM_SUPPLIER_SLASH_MODULE_TRANSFER":
      return SettlementOpReason.UNSPECIFIED_TLM_SUPPLIER_SLASH_MODULE_TRANSFER;
    case 12:
    case "UNSPECIFIED_TLM_SUPPLIER_SLASH_STAKE_BURN":
      return SettlementOpReason.UNSPECIFIED_TLM_SUPPLIER_SLASH_STAKE_BURN;
    case 13:
    case "TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_MODULE_TRANSFER":
      return SettlementOpReason.TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_MODULE_TRANSFER;
    case 14:
    case "TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_MODULE_TRANSFER":
      return SettlementOpReason.TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_MODULE_TRANSFER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SettlementOpReason.UNRECOGNIZED;
  }
}
export function settlementOpReasonToJSON(object: SettlementOpReason): string {
  switch (object) {
    case SettlementOpReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case SettlementOpReason.TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_STAKE_MINT:
      return "TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_STAKE_MINT";
    case SettlementOpReason.TLM_RELAY_BURN_EQUALS_MINT_APPLICATION_STAKE_BURN:
      return "TLM_RELAY_BURN_EQUALS_MINT_APPLICATION_STAKE_BURN";
    case SettlementOpReason.TLM_GLOBAL_MINT_INFLATION:
      return "TLM_GLOBAL_MINT_INFLATION";
    case SettlementOpReason.TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION:
      return "TLM_RELAY_BURN_EQUALS_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION";
    case SettlementOpReason.TLM_GLOBAL_MINT_DAO_REWARD_DISTRIBUTION:
      return "TLM_GLOBAL_MINT_DAO_REWARD_DISTRIBUTION";
    case SettlementOpReason.TLM_GLOBAL_MINT_PROPOSER_REWARD_DISTRIBUTION:
      return "TLM_GLOBAL_MINT_PROPOSER_REWARD_DISTRIBUTION";
    case SettlementOpReason.TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION:
      return "TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_DISTRIBUTION";
    case SettlementOpReason.TLM_GLOBAL_MINT_SOURCE_OWNER_REWARD_DISTRIBUTION:
      return "TLM_GLOBAL_MINT_SOURCE_OWNER_REWARD_DISTRIBUTION";
    case SettlementOpReason.TLM_GLOBAL_MINT_APPLICATION_REWARD_DISTRIBUTION:
      return "TLM_GLOBAL_MINT_APPLICATION_REWARD_DISTRIBUTION";
    case SettlementOpReason.TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_DAO_TRANSFER:
      return "TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_DAO_TRANSFER";
    case SettlementOpReason.UNSPECIFIED_TLM_SUPPLIER_SLASH_MODULE_TRANSFER:
      return "UNSPECIFIED_TLM_SUPPLIER_SLASH_MODULE_TRANSFER";
    case SettlementOpReason.UNSPECIFIED_TLM_SUPPLIER_SLASH_STAKE_BURN:
      return "UNSPECIFIED_TLM_SUPPLIER_SLASH_STAKE_BURN";
    case SettlementOpReason.TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_MODULE_TRANSFER:
      return "TLM_GLOBAL_MINT_SUPPLIER_SHAREHOLDER_REWARD_MODULE_TRANSFER";
    case SettlementOpReason.TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_MODULE_TRANSFER:
      return "TLM_GLOBAL_MINT_REIMBURSEMENT_REQUEST_ESCROW_MODULE_TRANSFER";
    case SettlementOpReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SettlementResult holds mint, burn, and transfer operations that result from a single claim settlement. */
export interface ClaimSettlementResult {
  claim: Claim;
  mints: MintBurnOp[];
  burns: MintBurnOp[];
  modToModTransfers: ModToModTransfer[];
  modToAcctTransfers: ModToAcctTransfer[];
}
export interface ClaimSettlementResultProtoMsg {
  typeUrl: "/pocket.tokenomics.ClaimSettlementResult";
  value: Uint8Array;
}
/**
 * SettlementResult holds mint, burn, and transfer operations that result from a single claim settlement.
 * @name ClaimSettlementResultAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.ClaimSettlementResult
 */
export interface ClaimSettlementResultAmino {
  claim: ClaimAmino;
  mints: MintBurnOpAmino[];
  burns: MintBurnOpAmino[];
  mod_to_mod_transfers: ModToModTransferAmino[];
  mod_to_acct_transfers: ModToAcctTransferAmino[];
}
export interface ClaimSettlementResultAminoMsg {
  type: "/pocket.tokenomics.ClaimSettlementResult";
  value: ClaimSettlementResultAmino;
}
/** SettlementResult holds mint, burn, and transfer operations that result from a single claim settlement. */
export interface ClaimSettlementResultSDKType {
  claim: ClaimSDKType;
  mints: MintBurnOpSDKType[];
  burns: MintBurnOpSDKType[];
  mod_to_mod_transfers: ModToModTransferSDKType[];
  mod_to_acct_transfers: ModToAcctTransferSDKType[];
}
/** MintBurnOperation holds the parameters of a mint or burn operation. */
export interface MintBurnOp {
  opReason: SettlementOpReason;
  destinationModule: string;
  coin: Coin;
}
export interface MintBurnOpProtoMsg {
  typeUrl: "/pocket.tokenomics.MintBurnOp";
  value: Uint8Array;
}
/**
 * MintBurnOperation holds the parameters of a mint or burn operation.
 * @name MintBurnOpAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.MintBurnOp
 */
export interface MintBurnOpAmino {
  op_reason: SettlementOpReason;
  DestinationModule: string;
  coin: CoinAmino;
}
export interface MintBurnOpAminoMsg {
  type: "/pocket.tokenomics.MintBurnOp";
  value: MintBurnOpAmino;
}
/** MintBurnOperation holds the parameters of a mint or burn operation. */
export interface MintBurnOpSDKType {
  op_reason: SettlementOpReason;
  DestinationModule: string;
  coin: CoinSDKType;
}
/** ModToAcctTransfer holds the parameters of a module to account transfer operation. */
export interface ModToAcctTransfer {
  opReason: SettlementOpReason;
  senderModule: string;
  /** bech32 address */
  recipientAddress: string;
  coin: Coin;
}
export interface ModToAcctTransferProtoMsg {
  typeUrl: "/pocket.tokenomics.ModToAcctTransfer";
  value: Uint8Array;
}
/**
 * ModToAcctTransfer holds the parameters of a module to account transfer operation.
 * @name ModToAcctTransferAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.ModToAcctTransfer
 */
export interface ModToAcctTransferAmino {
  op_reason: SettlementOpReason;
  SenderModule: string;
  /**
   * bech32 address
   */
  RecipientAddress: string;
  coin: CoinAmino;
}
export interface ModToAcctTransferAminoMsg {
  type: "/pocket.tokenomics.ModToAcctTransfer";
  value: ModToAcctTransferAmino;
}
/** ModToAcctTransfer holds the parameters of a module to account transfer operation. */
export interface ModToAcctTransferSDKType {
  op_reason: SettlementOpReason;
  SenderModule: string;
  RecipientAddress: string;
  coin: CoinSDKType;
}
/** ModToModTransfer holds the parameters of a module to module transfer operation. */
export interface ModToModTransfer {
  opReason: SettlementOpReason;
  senderModule: string;
  /** This the semantic module named that can be found by searching for "ModuleName =" in the codebase */
  recipientModule: string;
  coin: Coin;
}
export interface ModToModTransferProtoMsg {
  typeUrl: "/pocket.tokenomics.ModToModTransfer";
  value: Uint8Array;
}
/**
 * ModToModTransfer holds the parameters of a module to module transfer operation.
 * @name ModToModTransferAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.ModToModTransfer
 */
export interface ModToModTransferAmino {
  op_reason: SettlementOpReason;
  SenderModule: string;
  /**
   * This the semantic module named that can be found by searching for "ModuleName =" in the codebase
   */
  RecipientModule: string;
  coin: CoinAmino;
}
export interface ModToModTransferAminoMsg {
  type: "/pocket.tokenomics.ModToModTransfer";
  value: ModToModTransferAmino;
}
/** ModToModTransfer holds the parameters of a module to module transfer operation. */
export interface ModToModTransferSDKType {
  op_reason: SettlementOpReason;
  SenderModule: string;
  RecipientModule: string;
  coin: CoinSDKType;
}
function createBaseClaimSettlementResult(): ClaimSettlementResult {
  return {
    claim: Claim.fromPartial({}),
    mints: [],
    burns: [],
    modToModTransfers: [],
    modToAcctTransfers: []
  };
}
export const ClaimSettlementResult = {
  typeUrl: "/pocket.tokenomics.ClaimSettlementResult",
  encode(message: ClaimSettlementResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mints) {
      MintBurnOp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.burns) {
      MintBurnOp.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.modToModTransfers) {
      ModToModTransfer.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.modToAcctTransfers) {
      ModToAcctTransfer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimSettlementResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimSettlementResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        case 2:
          message.mints.push(MintBurnOp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.burns.push(MintBurnOp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.modToModTransfers.push(ModToModTransfer.decode(reader, reader.uint32()));
          break;
        case 5:
          message.modToAcctTransfers.push(ModToAcctTransfer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ClaimSettlementResult>): ClaimSettlementResult {
    const message = createBaseClaimSettlementResult();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    message.mints = object.mints?.map(e => MintBurnOp.fromPartial(e)) || [];
    message.burns = object.burns?.map(e => MintBurnOp.fromPartial(e)) || [];
    message.modToModTransfers = object.modToModTransfers?.map(e => ModToModTransfer.fromPartial(e)) || [];
    message.modToAcctTransfers = object.modToAcctTransfers?.map(e => ModToAcctTransfer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimSettlementResultAmino): ClaimSettlementResult {
    const message = createBaseClaimSettlementResult();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = Claim.fromAmino(object.claim);
    }
    message.mints = object.mints?.map(e => MintBurnOp.fromAmino(e)) || [];
    message.burns = object.burns?.map(e => MintBurnOp.fromAmino(e)) || [];
    message.modToModTransfers = object.mod_to_mod_transfers?.map(e => ModToModTransfer.fromAmino(e)) || [];
    message.modToAcctTransfers = object.mod_to_acct_transfers?.map(e => ModToAcctTransfer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClaimSettlementResult): ClaimSettlementResultAmino {
    const obj: any = {};
    obj.claim = message.claim ? Claim.toAmino(message.claim) : Claim.toAmino(Claim.fromPartial({}));
    if (message.mints) {
      obj.mints = message.mints.map(e => e ? MintBurnOp.toAmino(e) : undefined);
    } else {
      obj.mints = message.mints;
    }
    if (message.burns) {
      obj.burns = message.burns.map(e => e ? MintBurnOp.toAmino(e) : undefined);
    } else {
      obj.burns = message.burns;
    }
    if (message.modToModTransfers) {
      obj.mod_to_mod_transfers = message.modToModTransfers.map(e => e ? ModToModTransfer.toAmino(e) : undefined);
    } else {
      obj.mod_to_mod_transfers = message.modToModTransfers;
    }
    if (message.modToAcctTransfers) {
      obj.mod_to_acct_transfers = message.modToAcctTransfers.map(e => e ? ModToAcctTransfer.toAmino(e) : undefined);
    } else {
      obj.mod_to_acct_transfers = message.modToAcctTransfers;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimSettlementResultAminoMsg): ClaimSettlementResult {
    return ClaimSettlementResult.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimSettlementResultProtoMsg): ClaimSettlementResult {
    return ClaimSettlementResult.decode(message.value);
  },
  toProto(message: ClaimSettlementResult): Uint8Array {
    return ClaimSettlementResult.encode(message).finish();
  },
  toProtoMsg(message: ClaimSettlementResult): ClaimSettlementResultProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.ClaimSettlementResult",
      value: ClaimSettlementResult.encode(message).finish()
    };
  }
};
function createBaseMintBurnOp(): MintBurnOp {
  return {
    opReason: 0,
    destinationModule: "",
    coin: Coin.fromPartial({})
  };
}
export const MintBurnOp = {
  typeUrl: "/pocket.tokenomics.MintBurnOp",
  encode(message: MintBurnOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.opReason !== 0) {
      writer.uint32(8).int32(message.opReason);
    }
    if (message.destinationModule !== "") {
      writer.uint32(18).string(message.destinationModule);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintBurnOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintBurnOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opReason = reader.int32() as any;
          break;
        case 2:
          message.destinationModule = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MintBurnOp>): MintBurnOp {
    const message = createBaseMintBurnOp();
    message.opReason = object.opReason ?? 0;
    message.destinationModule = object.destinationModule ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MintBurnOpAmino): MintBurnOp {
    const message = createBaseMintBurnOp();
    if (object.op_reason !== undefined && object.op_reason !== null) {
      message.opReason = object.op_reason;
    }
    if (object.DestinationModule !== undefined && object.DestinationModule !== null) {
      message.destinationModule = object.DestinationModule;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MintBurnOp): MintBurnOpAmino {
    const obj: any = {};
    obj.op_reason = message.opReason ?? 0;
    obj.DestinationModule = message.destinationModule ?? "";
    obj.coin = message.coin ? Coin.toAmino(message.coin) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MintBurnOpAminoMsg): MintBurnOp {
    return MintBurnOp.fromAmino(object.value);
  },
  fromProtoMsg(message: MintBurnOpProtoMsg): MintBurnOp {
    return MintBurnOp.decode(message.value);
  },
  toProto(message: MintBurnOp): Uint8Array {
    return MintBurnOp.encode(message).finish();
  },
  toProtoMsg(message: MintBurnOp): MintBurnOpProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.MintBurnOp",
      value: MintBurnOp.encode(message).finish()
    };
  }
};
function createBaseModToAcctTransfer(): ModToAcctTransfer {
  return {
    opReason: 0,
    senderModule: "",
    recipientAddress: "",
    coin: Coin.fromPartial({})
  };
}
export const ModToAcctTransfer = {
  typeUrl: "/pocket.tokenomics.ModToAcctTransfer",
  encode(message: ModToAcctTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.opReason !== 0) {
      writer.uint32(8).int32(message.opReason);
    }
    if (message.senderModule !== "") {
      writer.uint32(18).string(message.senderModule);
    }
    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModToAcctTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModToAcctTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opReason = reader.int32() as any;
          break;
        case 2:
          message.senderModule = reader.string();
          break;
        case 3:
          message.recipientAddress = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ModToAcctTransfer>): ModToAcctTransfer {
    const message = createBaseModToAcctTransfer();
    message.opReason = object.opReason ?? 0;
    message.senderModule = object.senderModule ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: ModToAcctTransferAmino): ModToAcctTransfer {
    const message = createBaseModToAcctTransfer();
    if (object.op_reason !== undefined && object.op_reason !== null) {
      message.opReason = object.op_reason;
    }
    if (object.SenderModule !== undefined && object.SenderModule !== null) {
      message.senderModule = object.SenderModule;
    }
    if (object.RecipientAddress !== undefined && object.RecipientAddress !== null) {
      message.recipientAddress = object.RecipientAddress;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: ModToAcctTransfer): ModToAcctTransferAmino {
    const obj: any = {};
    obj.op_reason = message.opReason ?? 0;
    obj.SenderModule = message.senderModule ?? "";
    obj.RecipientAddress = message.recipientAddress ?? "";
    obj.coin = message.coin ? Coin.toAmino(message.coin) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ModToAcctTransferAminoMsg): ModToAcctTransfer {
    return ModToAcctTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: ModToAcctTransferProtoMsg): ModToAcctTransfer {
    return ModToAcctTransfer.decode(message.value);
  },
  toProto(message: ModToAcctTransfer): Uint8Array {
    return ModToAcctTransfer.encode(message).finish();
  },
  toProtoMsg(message: ModToAcctTransfer): ModToAcctTransferProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.ModToAcctTransfer",
      value: ModToAcctTransfer.encode(message).finish()
    };
  }
};
function createBaseModToModTransfer(): ModToModTransfer {
  return {
    opReason: 0,
    senderModule: "",
    recipientModule: "",
    coin: Coin.fromPartial({})
  };
}
export const ModToModTransfer = {
  typeUrl: "/pocket.tokenomics.ModToModTransfer",
  encode(message: ModToModTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.opReason !== 0) {
      writer.uint32(8).int32(message.opReason);
    }
    if (message.senderModule !== "") {
      writer.uint32(18).string(message.senderModule);
    }
    if (message.recipientModule !== "") {
      writer.uint32(26).string(message.recipientModule);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModToModTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModToModTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opReason = reader.int32() as any;
          break;
        case 2:
          message.senderModule = reader.string();
          break;
        case 3:
          message.recipientModule = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ModToModTransfer>): ModToModTransfer {
    const message = createBaseModToModTransfer();
    message.opReason = object.opReason ?? 0;
    message.senderModule = object.senderModule ?? "";
    message.recipientModule = object.recipientModule ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: ModToModTransferAmino): ModToModTransfer {
    const message = createBaseModToModTransfer();
    if (object.op_reason !== undefined && object.op_reason !== null) {
      message.opReason = object.op_reason;
    }
    if (object.SenderModule !== undefined && object.SenderModule !== null) {
      message.senderModule = object.SenderModule;
    }
    if (object.RecipientModule !== undefined && object.RecipientModule !== null) {
      message.recipientModule = object.RecipientModule;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: ModToModTransfer): ModToModTransferAmino {
    const obj: any = {};
    obj.op_reason = message.opReason ?? 0;
    obj.SenderModule = message.senderModule ?? "";
    obj.RecipientModule = message.recipientModule ?? "";
    obj.coin = message.coin ? Coin.toAmino(message.coin) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ModToModTransferAminoMsg): ModToModTransfer {
    return ModToModTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: ModToModTransferProtoMsg): ModToModTransfer {
    return ModToModTransfer.decode(message.value);
  },
  toProto(message: ModToModTransfer): Uint8Array {
    return ModToModTransfer.encode(message).finish();
  },
  toProtoMsg(message: ModToModTransfer): ModToModTransferProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.ModToModTransfer",
      value: ModToModTransfer.encode(message).finish()
    };
  }
};