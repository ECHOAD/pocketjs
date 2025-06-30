//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateClaim, MsgSubmitProof, MsgUpdateParam } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.proof.MsgUpdateParams", MsgUpdateParams], ["/pocket.proof.MsgCreateClaim", MsgCreateClaim], ["/pocket.proof.MsgSubmitProof", MsgSubmitProof], ["/pocket.proof.MsgUpdateParam", MsgUpdateParam]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.proof.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createClaim(value: MsgCreateClaim) {
      return {
        typeUrl: "/pocket.proof.MsgCreateClaim",
        value: MsgCreateClaim.encode(value).finish()
      };
    },
    submitProof(value: MsgSubmitProof) {
      return {
        typeUrl: "/pocket.proof.MsgSubmitProof",
        value: MsgSubmitProof.encode(value).finish()
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.proof.MsgUpdateParam",
        value: MsgUpdateParam.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.proof.MsgUpdateParams",
        value
      };
    },
    createClaim(value: MsgCreateClaim) {
      return {
        typeUrl: "/pocket.proof.MsgCreateClaim",
        value
      };
    },
    submitProof(value: MsgSubmitProof) {
      return {
        typeUrl: "/pocket.proof.MsgSubmitProof",
        value
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.proof.MsgUpdateParam",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.proof.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createClaim(value: MsgCreateClaim) {
      return {
        typeUrl: "/pocket.proof.MsgCreateClaim",
        value: MsgCreateClaim.fromPartial(value)
      };
    },
    submitProof(value: MsgSubmitProof) {
      return {
        typeUrl: "/pocket.proof.MsgSubmitProof",
        value: MsgSubmitProof.fromPartial(value)
      };
    },
    updateParam(value: MsgUpdateParam) {
      return {
        typeUrl: "/pocket.proof.MsgUpdateParam",
        value: MsgUpdateParam.fromPartial(value)
      };
    }
  }
};