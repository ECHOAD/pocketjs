//@ts-nocheck
import { MsgUpdateParams, MsgCreateClaim, MsgSubmitProof, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.proof.MsgUpdateParams": {
    aminoType: "pocket/x/proof/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.proof.MsgCreateClaim": {
    aminoType: "/pocket.proof.MsgCreateClaim",
    toAmino: MsgCreateClaim.toAmino,
    fromAmino: MsgCreateClaim.fromAmino
  },
  "/pocket.proof.MsgSubmitProof": {
    aminoType: "/pocket.proof.MsgSubmitProof",
    toAmino: MsgSubmitProof.toAmino,
    fromAmino: MsgSubmitProof.fromAmino
  },
  "/pocket.proof.MsgUpdateParam": {
    aminoType: "/pocket.proof.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};