//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgStakeApplication, MsgUnstakeApplication, MsgDelegateToGateway, MsgUndelegateFromGateway, MsgTransferApplication, MsgUpdateParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.application.MsgUpdateParams", MsgUpdateParams], ["/pocket.application.MsgStakeApplication", MsgStakeApplication], ["/pocket.application.MsgUnstakeApplication", MsgUnstakeApplication], ["/pocket.application.MsgDelegateToGateway", MsgDelegateToGateway], ["/pocket.application.MsgUndelegateFromGateway", MsgUndelegateFromGateway], ["/pocket.application.MsgTransferApplication", MsgTransferApplication], ["/pocket.application.MsgUpdateParam", MsgUpdateParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.application.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    stakeApplication(value: MsgStakeApplication) {
      return {
        typeUrl: "/pocket.application.MsgStakeApplication",
        value: MsgStakeApplication.encode(value).finish()
      };
    },
    unstakeApplication(value: MsgUnstakeApplication) {
      return {
        typeUrl: "/pocket.application.MsgUnstakeApplication",
        value: MsgUnstakeApplication.encode(value).finish()
      };
    },
    delegateToGateway(value: MsgDelegateToGateway) {
      return {
        typeUrl: "/pocket.application.MsgDelegateToGateway",
        value: MsgDelegateToGateway.encode(value).finish()
      };
    },
    undelegateFromGateway(value: MsgUndelegateFromGateway) {
      return {
        typeUrl: "/pocket.application.MsgUndelegateFromGateway",
        value: MsgUndelegateFromGateway.encode(value).finish()
      };
    },
    transferApplication(value: MsgTransferApplication) {
      return {
        typeUrl: "/pocket.application.MsgTransferApplication",
        value: MsgTransferApplication.encode(value).finish()
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.application.MsgUpdateParam",
        value: MsgUpdateParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.application.MsgUpdateParams",
        value
      };
    },
    stakeApplication(value: MsgStakeApplication) {
      return {
        typeUrl: "/pocket.application.MsgStakeApplication",
        value
      };
    },
    unstakeApplication(value: MsgUnstakeApplication) {
      return {
        typeUrl: "/pocket.application.MsgUnstakeApplication",
        value
      };
    },
    delegateToGateway(value: MsgDelegateToGateway) {
      return {
        typeUrl: "/pocket.application.MsgDelegateToGateway",
        value
      };
    },
    undelegateFromGateway(value: MsgUndelegateFromGateway) {
      return {
        typeUrl: "/pocket.application.MsgUndelegateFromGateway",
        value
      };
    },
    transferApplication(value: MsgTransferApplication) {
      return {
        typeUrl: "/pocket.application.MsgTransferApplication",
        value
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.application.MsgUpdateParam",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.application.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    stakeApplication(value: MsgStakeApplication) {
      return {
        typeUrl: "/pocket.application.MsgStakeApplication",
        value: MsgStakeApplication.fromPartial(value)
      };
    },
    unstakeApplication(value: MsgUnstakeApplication) {
      return {
        typeUrl: "/pocket.application.MsgUnstakeApplication",
        value: MsgUnstakeApplication.fromPartial(value)
      };
    },
    delegateToGateway(value: MsgDelegateToGateway) {
      return {
        typeUrl: "/pocket.application.MsgDelegateToGateway",
        value: MsgDelegateToGateway.fromPartial(value)
      };
    },
    undelegateFromGateway(value: MsgUndelegateFromGateway) {
      return {
        typeUrl: "/pocket.application.MsgUndelegateFromGateway",
        value: MsgUndelegateFromGateway.fromPartial(value)
      };
    },
    transferApplication(value: MsgTransferApplication) {
      return {
        typeUrl: "/pocket.application.MsgTransferApplication",
        value: MsgTransferApplication.fromPartial(value)
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.application.MsgUpdateParam",
        value: MsgUpdateParam.fromPartial(value)
      };
    }
  }
};