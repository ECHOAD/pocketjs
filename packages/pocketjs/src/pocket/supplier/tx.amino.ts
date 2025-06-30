//@ts-nocheck
import { MsgUpdateParams, MsgStakeSupplier, MsgUnstakeSupplier, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.supplier.MsgUpdateParams": {
    aminoType: "pocket/x/supplier/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.supplier.MsgStakeSupplier": {
    aminoType: "/pocket.supplier.MsgStakeSupplier",
    toAmino: MsgStakeSupplier.toAmino,
    fromAmino: MsgStakeSupplier.fromAmino
  },
  "/pocket.supplier.MsgUnstakeSupplier": {
    aminoType: "/pocket.supplier.MsgUnstakeSupplier",
    toAmino: MsgUnstakeSupplier.toAmino,
    fromAmino: MsgUnstakeSupplier.fromAmino
  },
  "/pocket.supplier.MsgUpdateParam": {
    aminoType: "/pocket.supplier.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};