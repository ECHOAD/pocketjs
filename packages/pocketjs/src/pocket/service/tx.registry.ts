//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgUpdateParam, MsgAddService } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.service.MsgUpdateParams", MsgUpdateParams], ["/pocket.service.MsgUpdateParam", MsgUpdateParam], ["/pocket.service.MsgAddService", MsgAddService]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.service.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.service.MsgUpdateParam",
        value: MsgUpdateParam.encode(value).finish()
      };
    },
    addService(value: MsgAddService) {
      return {
        typeUrl: "/pocket.service.MsgAddService",
        value: MsgAddService.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.service.MsgUpdateParams",
        value
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.service.MsgUpdateParam",
        value
      };
    },
    addService(value: MsgAddService) {
      return {
        typeUrl: "/pocket.service.MsgAddService",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.service.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.service.MsgUpdateParam",
        value: MsgUpdateParam.fromPartial(value)
      };
    },
    addService(value: MsgAddService) {
      return {
        typeUrl: "/pocket.service.MsgAddService",
        value: MsgAddService.fromPartial(value)
      };
    }
  }
};