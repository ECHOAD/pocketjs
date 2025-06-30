//@ts-nocheck
import { MsgUpdateParams, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.session.MsgUpdateParams": {
    aminoType: "pocket/x/session/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.session.MsgUpdateParam": {
    aminoType: "/pocket.session.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};