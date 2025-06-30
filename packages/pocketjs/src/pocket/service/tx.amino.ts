//@ts-nocheck
import { MsgUpdateParams, MsgUpdateParam, MsgAddService } from "./tx";
export const AminoConverter = {
  "/pocket.service.MsgUpdateParams": {
    aminoType: "pocket/x/service/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.service.MsgUpdateParam": {
    aminoType: "/pocket.service.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  },
  "/pocket.service.MsgAddService": {
    aminoType: "/pocket.service.MsgAddService",
    toAmino: MsgAddService.toAmino,
    fromAmino: MsgAddService.fromAmino
  }
};