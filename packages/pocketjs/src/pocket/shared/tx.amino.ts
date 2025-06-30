//@ts-nocheck
import { MsgUpdateParams, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.shared.MsgUpdateParams": {
    aminoType: "pocket/x/shared/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.shared.MsgUpdateParam": {
    aminoType: "/pocket.shared.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};