//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgStakeSupplier, MsgStakeSupplierResponse, MsgUnstakeSupplier, MsgUnstakeSupplierResponse, MsgUpdateParam, MsgUpdateParamResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  stakeSupplier(request: MsgStakeSupplier): Promise<MsgStakeSupplierResponse>;
  unstakeSupplier(request: MsgUnstakeSupplier): Promise<MsgUnstakeSupplierResponse>;
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.stakeSupplier = this.stakeSupplier.bind(this);
    this.unstakeSupplier = this.unstakeSupplier.bind(this);
    this.updateParam = this.updateParam.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  stakeSupplier(request: MsgStakeSupplier): Promise<MsgStakeSupplierResponse> {
    const data = MsgStakeSupplier.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Msg", "StakeSupplier", data);
    return promise.then(data => MsgStakeSupplierResponse.decode(new BinaryReader(data)));
  }
  unstakeSupplier(request: MsgUnstakeSupplier): Promise<MsgUnstakeSupplierResponse> {
    const data = MsgUnstakeSupplier.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Msg", "UnstakeSupplier", data);
    return promise.then(data => MsgUnstakeSupplierResponse.decode(new BinaryReader(data)));
  }
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse> {
    const data = MsgUpdateParam.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Msg", "UpdateParam", data);
    return promise.then(data => MsgUpdateParamResponse.decode(new BinaryReader(data)));
  }
}