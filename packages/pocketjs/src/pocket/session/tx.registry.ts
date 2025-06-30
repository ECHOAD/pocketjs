//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.session.MsgUpdateParams", MsgUpdateParams], ["/pocket.session.MsgUpdateParam", MsgUpdateParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.session.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.session.MsgUpdateParam",
        value: MsgUpdateParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.session.MsgUpdateParams",
        value
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.session.MsgUpdateParam",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.session.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.session.MsgUpdateParam",
        value: MsgUpdateParam.fromPartial(value)
      };
    }
  }
};