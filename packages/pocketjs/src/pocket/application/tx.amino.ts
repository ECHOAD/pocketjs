//@ts-nocheck
import { MsgUpdateParams, MsgStakeApplication, MsgUnstakeApplication, MsgDelegateToGateway, MsgUndelegateFromGateway, MsgTransferApplication, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.application.MsgUpdateParams": {
    aminoType: "pocket/x/application/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.application.MsgStakeApplication": {
    aminoType: "/pocket.application.MsgStakeApplication",
    toAmino: MsgStakeApplication.toAmino,
    fromAmino: MsgStakeApplication.fromAmino
  },
  "/pocket.application.MsgUnstakeApplication": {
    aminoType: "/pocket.application.MsgUnstakeApplication",
    toAmino: MsgUnstakeApplication.toAmino,
    fromAmino: MsgUnstakeApplication.fromAmino
  },
  "/pocket.application.MsgDelegateToGateway": {
    aminoType: "/pocket.application.MsgDelegateToGateway",
    toAmino: MsgDelegateToGateway.toAmino,
    fromAmino: MsgDelegateToGateway.fromAmino
  },
  "/pocket.application.MsgUndelegateFromGateway": {
    aminoType: "/pocket.application.MsgUndelegateFromGateway",
    toAmino: MsgUndelegateFromGateway.toAmino,
    fromAmino: MsgUndelegateFromGateway.fromAmino
  },
  "/pocket.application.MsgTransferApplication": {
    aminoType: "/pocket.application.MsgTransferApplication",
    toAmino: MsgTransferApplication.toAmino,
    fromAmino: MsgTransferApplication.fromAmino
  },
  "/pocket.application.MsgUpdateParam": {
    aminoType: "/pocket.application.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};