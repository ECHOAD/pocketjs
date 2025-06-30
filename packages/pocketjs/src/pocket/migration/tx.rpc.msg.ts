//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgImportMorseClaimableAccounts, MsgImportMorseClaimableAccountsResponse, MsgClaimMorseAccount, MsgClaimMorseAccountResponse, MsgClaimMorseApplication, MsgClaimMorseApplicationResponse, MsgClaimMorseSupplier, MsgClaimMorseSupplierResponse, MsgRecoverMorseAccount, MsgRecoverMorseAccountResponse } from "./tx";
/** Msg defines the Msg service.

 - Provides RPCs for migration-related operations
 - Includes parameter updates, Morse account claims, supplier claims, and recovery */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  importMorseClaimableAccounts(request: MsgImportMorseClaimableAccounts): Promise<MsgImportMorseClaimableAccountsResponse>;
  claimMorseAccount(request: MsgClaimMorseAccount): Promise<MsgClaimMorseAccountResponse>;
  claimMorseApplication(request: MsgClaimMorseApplication): Promise<MsgClaimMorseApplicationResponse>;
  claimMorseSupplier(request: MsgClaimMorseSupplier): Promise<MsgClaimMorseSupplierResponse>;
  recoverMorseAccount(request: MsgRecoverMorseAccount): Promise<MsgRecoverMorseAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.importMorseClaimableAccounts = this.importMorseClaimableAccounts.bind(this);
    this.claimMorseAccount = this.claimMorseAccount.bind(this);
    this.claimMorseApplication = this.claimMorseApplication.bind(this);
    this.claimMorseSupplier = this.claimMorseSupplier.bind(this);
    this.recoverMorseAccount = this.recoverMorseAccount.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  importMorseClaimableAccounts(request: MsgImportMorseClaimableAccounts): Promise<MsgImportMorseClaimableAccountsResponse> {
    const data = MsgImportMorseClaimableAccounts.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Msg", "ImportMorseClaimableAccounts", data);
    return promise.then(data => MsgImportMorseClaimableAccountsResponse.decode(new BinaryReader(data)));
  }
  claimMorseAccount(request: MsgClaimMorseAccount): Promise<MsgClaimMorseAccountResponse> {
    const data = MsgClaimMorseAccount.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Msg", "ClaimMorseAccount", data);
    return promise.then(data => MsgClaimMorseAccountResponse.decode(new BinaryReader(data)));
  }
  claimMorseApplication(request: MsgClaimMorseApplication): Promise<MsgClaimMorseApplicationResponse> {
    const data = MsgClaimMorseApplication.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Msg", "ClaimMorseApplication", data);
    return promise.then(data => MsgClaimMorseApplicationResponse.decode(new BinaryReader(data)));
  }
  claimMorseSupplier(request: MsgClaimMorseSupplier): Promise<MsgClaimMorseSupplierResponse> {
    const data = MsgClaimMorseSupplier.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Msg", "ClaimMorseSupplier", data);
    return promise.then(data => MsgClaimMorseSupplierResponse.decode(new BinaryReader(data)));
  }
  recoverMorseAccount(request: MsgRecoverMorseAccount): Promise<MsgRecoverMorseAccountResponse> {
    const data = MsgRecoverMorseAccount.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Msg", "RecoverMorseAccount", data);
    return promise.then(data => MsgRecoverMorseAccountResponse.decode(new BinaryReader(data)));
  }
}