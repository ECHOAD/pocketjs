//@ts-nocheck
import { MsgUpdateParams, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.tokenomics.MsgUpdateParams": {
    aminoType: "pocket/x/tokenomics/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.tokenomics.MsgUpdateParam": {
    aminoType: "/pocket.tokenomics.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};