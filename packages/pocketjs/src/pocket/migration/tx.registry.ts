//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgImportMorseClaimableAccounts, MsgClaimMorseAccount, MsgClaimMorseApplication, MsgClaimMorseSupplier, MsgRecoverMorseAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pocket.migration.MsgUpdateParams", MsgUpdateParams], ["/pocket.migration.MsgImportMorseClaimableAccounts", MsgImportMorseClaimableAccounts], ["/pocket.migration.MsgClaimMorseAccount", MsgClaimMorseAccount], ["/pocket.migration.MsgClaimMorseApplication", MsgClaimMorseApplication], ["/pocket.migration.MsgClaimMorseSupplier", MsgClaimMorseSupplier], ["/pocket.migration.MsgRecoverMorseAccount", MsgRecoverMorseAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.migration.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    importMorseClaimableAccounts(value: MsgImportMorseClaimableAccounts) {
      return {
        typeUrl: "/pocket.migration.MsgImportMorseClaimableAccounts",
        value: MsgImportMorseClaimableAccounts.encode(value).finish()
      };
    },
    claimMorseAccount(value: MsgClaimMorseAccount) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseAccount",
        value: MsgClaimMorseAccount.encode(value).finish()
      };
    },
    claimMorseApplication(value: MsgClaimMorseApplication) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseApplication",
        value: MsgClaimMorseApplication.encode(value).finish()
      };
    },
    claimMorseSupplier(value: MsgClaimMorseSupplier) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseSupplier",
        value: MsgClaimMorseSupplier.encode(value).finish()
      };
    },
    recoverMorseAccount(value: MsgRecoverMorseAccount) {
      return {
        typeUrl: "/pocket.migration.MsgRecoverMorseAccount",
        value: MsgRecoverMorseAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.migration.MsgUpdateParams",
        value
      };
    },
    importMorseClaimableAccounts(value: MsgImportMorseClaimableAccounts) {
      return {
        typeUrl: "/pocket.migration.MsgImportMorseClaimableAccounts",
        value
      };
    },
    claimMorseAccount(value: MsgClaimMorseAccount) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseAccount",
        value
      };
    },
    claimMorseApplication(value: MsgClaimMorseApplication) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseApplication",
        value
      };
    },
    claimMorseSupplier(value: MsgClaimMorseSupplier) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseSupplier",
        value
      };
    },
    recoverMorseAccount(value: MsgRecoverMorseAccount) {
      return {
        typeUrl: "/pocket.migration.MsgRecoverMorseAccount",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pocket.migration.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    importMorseClaimableAccounts(value: MsgImportMorseClaimableAccounts) {
      return {
        typeUrl: "/pocket.migration.MsgImportMorseClaimableAccounts",
        value: MsgImportMorseClaimableAccounts.fromPartial(value)
      };
    },
    claimMorseAccount(value: MsgClaimMorseAccount) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseAccount",
        value: MsgClaimMorseAccount.fromPartial(value)
      };
    },
    claimMorseApplication(value: MsgClaimMorseApplication) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseApplication",
        value: MsgClaimMorseApplication.fromPartial(value)
      };
    },
    claimMorseSupplier(value: MsgClaimMorseSupplier) {
      return {
        typeUrl: "/pocket.migration.MsgClaimMorseSupplier",
        value: MsgClaimMorseSupplier.fromPartial(value)
      };
    },
    recoverMorseAccount(value: MsgRecoverMorseAccount) {
      return {
        typeUrl: "/pocket.migration.MsgRecoverMorseAccount",
        value: MsgRecoverMorseAccount.fromPartial(value)
      };
    }
  }
};