//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgStakeGateway, MsgUnstakeGateway, MsgUpdateParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.gateway.MsgUpdateParams", MsgUpdateParams], ["/pocket.gateway.MsgStakeGateway", MsgStakeGateway], ["/pocket.gateway.MsgUnstakeGateway", MsgUnstakeGateway], ["/pocket.gateway.MsgUpdateParam", MsgUpdateParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.gateway.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    stakeGateway(value: MsgStakeGateway) {
      return {
        typeUrl: "/pocket.gateway.MsgStakeGateway",
        value: MsgStakeGateway.encode(value).finish()
      };
    },
    unstakeGateway(value: MsgUnstakeGateway) {
      return {
        typeUrl: "/pocket.gateway.MsgUnstakeGateway",
        value: MsgUnstakeGateway.encode(value).finish()
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.gateway.MsgUpdateParam",
        value: MsgUpdateParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.gateway.MsgUpdateParams",
        value
      };
    },
    stakeGateway(value: MsgStakeGateway) {
      return {
        typeUrl: "/pocket.gateway.MsgStakeGateway",
        value
      };
    },
    unstakeGateway(value: MsgUnstakeGateway) {
      return {
        typeUrl: "/pocket.gateway.MsgUnstakeGateway",
        value
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.gateway.MsgUpdateParam",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.gateway.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    stakeGateway(value: MsgStakeGateway) {
      return {
        typeUrl: "/pocket.gateway.MsgStakeGateway",
        value: MsgStakeGateway.fromPartial(value)
      };
    },
    unstakeGateway(value: MsgUnstakeGateway) {
      return {
        typeUrl: "/pocket.gateway.MsgUnstakeGateway",
        value: MsgUnstakeGateway.fromPartial(value)
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.gateway.MsgUpdateParam",
        value: MsgUpdateParam.fromPartial(value)
      };
    }
  }
};