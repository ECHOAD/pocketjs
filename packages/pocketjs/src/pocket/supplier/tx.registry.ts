//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgStakeSupplier, MsgUnstakeSupplier, MsgUpdateParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.supplier.MsgUpdateParams", MsgUpdateParams], ["/pocket.supplier.MsgStakeSupplier", MsgStakeSupplier], ["/pocket.supplier.MsgUnstakeSupplier", MsgUnstakeSupplier], ["/pocket.supplier.MsgUpdateParam", MsgUpdateParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.supplier.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    stakeSupplier(value: MsgStakeSupplier) {
      return {
        typeUrl: "/pocket.supplier.MsgStakeSupplier",
        value: MsgStakeSupplier.encode(value).finish()
      };
    },
    unstakeSupplier(value: MsgUnstakeSupplier) {
      return {
        typeUrl: "/pocket.supplier.MsgUnstakeSupplier",
        value: MsgUnstakeSupplier.encode(value).finish()
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.supplier.MsgUpdateParam",
        value: MsgUpdateParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.supplier.MsgUpdateParams",
        value
      };
    },
    stakeSupplier(value: MsgStakeSupplier) {
      return {
        typeUrl: "/pocket.supplier.MsgStakeSupplier",
        value
      };
    },
    unstakeSupplier(value: MsgUnstakeSupplier) {
      return {
        typeUrl: "/pocket.supplier.MsgUnstakeSupplier",
        value
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.supplier.MsgUpdateParam",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.supplier.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    stakeSupplier(value: MsgStakeSupplier) {
      return {
        typeUrl: "/pocket.supplier.MsgStakeSupplier",
        value: MsgStakeSupplier.fromPartial(value)
      };
    },
    unstakeSupplier(value: MsgUnstakeSupplier) {
      return {
        typeUrl: "/pocket.supplier.MsgUnstakeSupplier",
        value: MsgUnstakeSupplier.fromPartial(value)
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.supplier.MsgUpdateParam",
        value: MsgUpdateParam.fromPartial(value)
      };
    }
  }
};