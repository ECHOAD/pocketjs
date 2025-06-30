//@ts-nocheck
import { MsgUpdateParams, MsgStakeGateway, MsgUnstakeGateway, MsgUpdateParam } from "./tx";
export const AminoConverter = {
  "/pocket.gateway.MsgUpdateParams": {
    aminoType: "pocket/x/gateway/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.gateway.MsgStakeGateway": {
    aminoType: "/pocket.gateway.MsgStakeGateway",
    toAmino: MsgStakeGateway.toAmino,
    fromAmino: MsgStakeGateway.fromAmino
  },
  "/pocket.gateway.MsgUnstakeGateway": {
    aminoType: "/pocket.gateway.MsgUnstakeGateway",
    toAmino: MsgUnstakeGateway.toAmino,
    fromAmino: MsgUnstakeGateway.fromAmino
  },
  "/pocket.gateway.MsgUpdateParam": {
    aminoType: "/pocket.gateway.MsgUpdateParam",
    toAmino: MsgUpdateParam.toAmino,
    fromAmino: MsgUpdateParam.fromAmino
  }
};