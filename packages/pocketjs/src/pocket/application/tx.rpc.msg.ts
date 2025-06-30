//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgStakeApplication, MsgStakeApplicationResponse, MsgUnstakeApplication, MsgUnstakeApplicationResponse, MsgDelegateToGateway, MsgDelegateToGatewayResponse, MsgUndelegateFromGateway, MsgUndelegateFromGatewayResponse, MsgTransferApplication, MsgTransferApplicationResponse, MsgUpdateParam, MsgUpdateParamResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  stakeApplication(request: MsgStakeApplication): Promise<MsgStakeApplicationResponse>;
  unstakeApplication(request: MsgUnstakeApplication): Promise<MsgUnstakeApplicationResponse>;
  delegateToGateway(request: MsgDelegateToGateway): Promise<MsgDelegateToGatewayResponse>;
  undelegateFromGateway(request: MsgUndelegateFromGateway): Promise<MsgUndelegateFromGatewayResponse>;
  transferApplication(request: MsgTransferApplication): Promise<MsgTransferApplicationResponse>;
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.stakeApplication = this.stakeApplication.bind(this);
    this.unstakeApplication = this.unstakeApplication.bind(this);
    this.delegateToGateway = this.delegateToGateway.bind(this);
    this.undelegateFromGateway = this.undelegateFromGateway.bind(this);
    this.transferApplication = this.transferApplication.bind(this);
    this.updateParam = this.updateParam.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  stakeApplication(request: MsgStakeApplication): Promise<MsgStakeApplicationResponse> {
    const data = MsgStakeApplication.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "StakeApplication", data);
    return promise.then(data => MsgStakeApplicationResponse.decode(new BinaryReader(data)));
  }
  unstakeApplication(request: MsgUnstakeApplication): Promise<MsgUnstakeApplicationResponse> {
    const data = MsgUnstakeApplication.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "UnstakeApplication", data);
    return promise.then(data => MsgUnstakeApplicationResponse.decode(new BinaryReader(data)));
  }
  delegateToGateway(request: MsgDelegateToGateway): Promise<MsgDelegateToGatewayResponse> {
    const data = MsgDelegateToGateway.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "DelegateToGateway", data);
    return promise.then(data => MsgDelegateToGatewayResponse.decode(new BinaryReader(data)));
  }
  undelegateFromGateway(request: MsgUndelegateFromGateway): Promise<MsgUndelegateFromGatewayResponse> {
    const data = MsgUndelegateFromGateway.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "UndelegateFromGateway", data);
    return promise.then(data => MsgUndelegateFromGatewayResponse.decode(new BinaryReader(data)));
  }
  transferApplication(request: MsgTransferApplication): Promise<MsgTransferApplicationResponse> {
    const data = MsgTransferApplication.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "TransferApplication", data);
    return promise.then(data => MsgTransferApplicationResponse.decode(new BinaryReader(data)));
  }
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse> {
    const data = MsgUpdateParam.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Msg", "UpdateParam", data);
    return promise.then(data => MsgUpdateParamResponse.decode(new BinaryReader(data)));
  }
}