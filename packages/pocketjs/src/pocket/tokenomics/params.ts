//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the tokenomics module. */
export interface Params {
  /**
   * mint_allocation_percentages represents the distribution of newly minted tokens,
   * at the end of claim settlement, as a result of the Global Mint TLM.
   */
  mintAllocationPercentages: MintAllocationPercentages;
  /**
   * dao_reward_address is the address to which mint_allocation_dao percentage of the
   * minted tokens are at the end of claim settlement.
   */
  daoRewardAddress: string;
  /** global_inflation_per_claim is the percentage of a claim's claimable uPOKT amount which will be minted on settlement. */
  globalInflationPerClaim: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/pocket.tokenomics.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the tokenomics module.
 * @name ParamsAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.Params
 */
export interface ParamsAmino {
  /**
   * mint_allocation_percentages represents the distribution of newly minted tokens,
   * at the end of claim settlement, as a result of the Global Mint TLM.
   */
  mint_allocation_percentages: MintAllocationPercentagesAmino;
  /**
   * dao_reward_address is the address to which mint_allocation_dao percentage of the
   * minted tokens are at the end of claim settlement.
   */
  dao_reward_address: string;
  /**
   * global_inflation_per_claim is the percentage of a claim's claimable uPOKT amount which will be minted on settlement.
   */
  global_inflation_per_claim: number;
}
export interface ParamsAminoMsg {
  type: "pocket/x/tokenomics/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the tokenomics module. */
export interface ParamsSDKType {
  mint_allocation_percentages: MintAllocationPercentagesSDKType;
  dao_reward_address: string;
  global_inflation_per_claim: number;
}
/**
 * MintAllocationPercentages represents the distribution of newly minted tokens,
 * at the end of claim settlement, as a result of the Global Mint TLM.
 */
export interface MintAllocationPercentages {
  /**
   * dao is the percentage of the minted tokens which are sent
   * to the DAO reward address during claim settlement.
   */
  dao: number;
  /**
   * proposer is the percentage of the minted tokens which are sent
   * to the block proposer account address during claim settlement.
   */
  proposer: number;
  /**
   * supplier is the percentage of the minted tokens which are sent
   * to the block supplier account address during claim settlement.
   */
  supplier: number;
  /**
   * source_owner is the percentage of the minted tokens which are sent
   * to the service source owner account address during claim settlement.
   */
  sourceOwner: number;
  /**
   * allocation_application is the percentage of the minted tokens which are sent
   * to the application account address during claim settlement.
   */
  application: number;
}
export interface MintAllocationPercentagesProtoMsg {
  typeUrl: "/pocket.tokenomics.MintAllocationPercentages";
  value: Uint8Array;
}
/**
 * MintAllocationPercentages represents the distribution of newly minted tokens,
 * at the end of claim settlement, as a result of the Global Mint TLM.
 * @name MintAllocationPercentagesAmino
 * @package pocket.tokenomics
 * @see proto type: pocket.tokenomics.MintAllocationPercentages
 */
export interface MintAllocationPercentagesAmino {
  /**
   * dao is the percentage of the minted tokens which are sent
   * to the DAO reward address during claim settlement.
   */
  dao: number;
  /**
   * proposer is the percentage of the minted tokens which are sent
   * to the block proposer account address during claim settlement.
   */
  proposer: number;
  /**
   * supplier is the percentage of the minted tokens which are sent
   * to the block supplier account address during claim settlement.
   */
  supplier: number;
  /**
   * source_owner is the percentage of the minted tokens which are sent
   * to the service source owner account address during claim settlement.
   */
  source_owner: number;
  /**
   * allocation_application is the percentage of the minted tokens which are sent
   * to the application account address during claim settlement.
   */
  application: number;
}
export interface MintAllocationPercentagesAminoMsg {
  type: "/pocket.tokenomics.MintAllocationPercentages";
  value: MintAllocationPercentagesAmino;
}
/**
 * MintAllocationPercentages represents the distribution of newly minted tokens,
 * at the end of claim settlement, as a result of the Global Mint TLM.
 */
export interface MintAllocationPercentagesSDKType {
  dao: number;
  proposer: number;
  supplier: number;
  source_owner: number;
  application: number;
}
function createBaseParams(): Params {
  return {
    mintAllocationPercentages: MintAllocationPercentages.fromPartial({}),
    daoRewardAddress: "",
    globalInflationPerClaim: 0
  };
}
export const Params = {
  typeUrl: "/pocket.tokenomics.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintAllocationPercentages !== undefined) {
      MintAllocationPercentages.encode(message.mintAllocationPercentages, writer.uint32(10).fork()).ldelim();
    }
    if (message.daoRewardAddress !== "") {
      writer.uint32(50).string(message.daoRewardAddress);
    }
    if (message.globalInflationPerClaim !== 0) {
      writer.uint32(57).double(message.globalInflationPerClaim);
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
          message.mintAllocationPercentages = MintAllocationPercentages.decode(reader, reader.uint32());
          break;
        case 6:
          message.daoRewardAddress = reader.string();
          break;
        case 7:
          message.globalInflationPerClaim = reader.double();
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
    message.mintAllocationPercentages = object.mintAllocationPercentages !== undefined && object.mintAllocationPercentages !== null ? MintAllocationPercentages.fromPartial(object.mintAllocationPercentages) : undefined;
    message.daoRewardAddress = object.daoRewardAddress ?? "";
    message.globalInflationPerClaim = object.globalInflationPerClaim ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_allocation_percentages !== undefined && object.mint_allocation_percentages !== null) {
      message.mintAllocationPercentages = MintAllocationPercentages.fromAmino(object.mint_allocation_percentages);
    }
    if (object.dao_reward_address !== undefined && object.dao_reward_address !== null) {
      message.daoRewardAddress = object.dao_reward_address;
    }
    if (object.global_inflation_per_claim !== undefined && object.global_inflation_per_claim !== null) {
      message.globalInflationPerClaim = object.global_inflation_per_claim;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_allocation_percentages = message.mintAllocationPercentages ? MintAllocationPercentages.toAmino(message.mintAllocationPercentages) : MintAllocationPercentages.toAmino(MintAllocationPercentages.fromPartial({}));
    obj.dao_reward_address = message.daoRewardAddress ?? "";
    obj.global_inflation_per_claim = message.globalInflationPerClaim ?? 0;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "pocket/x/tokenomics/Params",
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
      typeUrl: "/pocket.tokenomics.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseMintAllocationPercentages(): MintAllocationPercentages {
  return {
    dao: 0,
    proposer: 0,
    supplier: 0,
    sourceOwner: 0,
    application: 0
  };
}
export const MintAllocationPercentages = {
  typeUrl: "/pocket.tokenomics.MintAllocationPercentages",
  encode(message: MintAllocationPercentages, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dao !== 0) {
      writer.uint32(9).double(message.dao);
    }
    if (message.proposer !== 0) {
      writer.uint32(17).double(message.proposer);
    }
    if (message.supplier !== 0) {
      writer.uint32(25).double(message.supplier);
    }
    if (message.sourceOwner !== 0) {
      writer.uint32(33).double(message.sourceOwner);
    }
    if (message.application !== 0) {
      writer.uint32(41).double(message.application);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintAllocationPercentages {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintAllocationPercentages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dao = reader.double();
          break;
        case 2:
          message.proposer = reader.double();
          break;
        case 3:
          message.supplier = reader.double();
          break;
        case 4:
          message.sourceOwner = reader.double();
          break;
        case 5:
          message.application = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MintAllocationPercentages>): MintAllocationPercentages {
    const message = createBaseMintAllocationPercentages();
    message.dao = object.dao ?? 0;
    message.proposer = object.proposer ?? 0;
    message.supplier = object.supplier ?? 0;
    message.sourceOwner = object.sourceOwner ?? 0;
    message.application = object.application ?? 0;
    return message;
  },
  fromAmino(object: MintAllocationPercentagesAmino): MintAllocationPercentages {
    const message = createBaseMintAllocationPercentages();
    if (object.dao !== undefined && object.dao !== null) {
      message.dao = object.dao;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = object.supplier;
    }
    if (object.source_owner !== undefined && object.source_owner !== null) {
      message.sourceOwner = object.source_owner;
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = object.application;
    }
    return message;
  },
  toAmino(message: MintAllocationPercentages): MintAllocationPercentagesAmino {
    const obj: any = {};
    obj.dao = message.dao ?? 0;
    obj.proposer = message.proposer ?? 0;
    obj.supplier = message.supplier ?? 0;
    obj.source_owner = message.sourceOwner ?? 0;
    obj.application = message.application ?? 0;
    return obj;
  },
  fromAminoMsg(object: MintAllocationPercentagesAminoMsg): MintAllocationPercentages {
    return MintAllocationPercentages.fromAmino(object.value);
  },
  fromProtoMsg(message: MintAllocationPercentagesProtoMsg): MintAllocationPercentages {
    return MintAllocationPercentages.decode(message.value);
  },
  toProto(message: MintAllocationPercentages): Uint8Array {
    return MintAllocationPercentages.encode(message).finish();
  },
  toProtoMsg(message: MintAllocationPercentages): MintAllocationPercentagesProtoMsg {
    return {
      typeUrl: "/pocket.tokenomics.MintAllocationPercentages",
      value: MintAllocationPercentages.encode(message).finish()
    };
  }
};