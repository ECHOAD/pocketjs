//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the supplier module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  supplierList: Supplier[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pocket.supplier.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the supplier module's genesis state.
 * @name GenesisStateAmino
 * @package pocket.supplier
 * @see proto type: pocket.supplier.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  supplierList?: SupplierAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pocket.supplier.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the supplier module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  supplierList: SupplierSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    supplierList: []
  };
}
export const GenesisState = {
  typeUrl: "/pocket.supplier.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.supplierList) {
      Supplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.supplierList.push(Supplier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.supplierList = object.supplierList?.map(e => Supplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.supplierList = object.supplierList?.map(e => Supplier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.supplierList) {
      obj.supplierList = message.supplierList.map(e => e ? Supplier.toAmino(e) : undefined);
    } else {
      obj.supplierList = message.supplierList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pocket.supplier.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};