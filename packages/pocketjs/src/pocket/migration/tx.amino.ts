//@ts-nocheck
import { MsgUpdateParams, MsgImportMorseClaimableAccounts, MsgClaimMorseAccount, MsgClaimMorseApplication, MsgClaimMorseSupplier, MsgRecoverMorseAccount } from "./tx";
export const AminoConverter = {
  "/pocket.migration.MsgUpdateParams": {
    aminoType: "pocket/x/migration/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/pocket.migration.MsgImportMorseClaimableAccounts": {
    aminoType: "/pocket.migration.MsgImportMorseClaimableAccounts",
    toAmino: MsgImportMorseClaimableAccounts.toAmino,
    fromAmino: MsgImportMorseClaimableAccounts.fromAmino
  },
  "/pocket.migration.MsgClaimMorseAccount": {
    aminoType: "/pocket.migration.MsgClaimMorseAccount",
    toAmino: MsgClaimMorseAccount.toAmino,
    fromAmino: MsgClaimMorseAccount.fromAmino
  },
  "/pocket.migration.MsgClaimMorseApplication": {
    aminoType: "/pocket.migration.MsgClaimMorseApplication",
    toAmino: MsgClaimMorseApplication.toAmino,
    fromAmino: MsgClaimMorseApplication.fromAmino
  },
  "/pocket.migration.MsgClaimMorseSupplier": {
    aminoType: "/pocket.migration.MsgClaimMorseSupplier",
    toAmino: MsgClaimMorseSupplier.toAmino,
    fromAmino: MsgClaimMorseSupplier.fromAmino
  },
  "/pocket.migration.MsgRecoverMorseAccount": {
    aminoType: "/pocket.migration.MsgRecoverMorseAccount",
    toAmino: MsgRecoverMorseAccount.toAmino,
    fromAmino: MsgRecoverMorseAccount.fromAmino
  }
};