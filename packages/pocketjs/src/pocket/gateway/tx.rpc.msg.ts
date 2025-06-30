//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgStakeGateway, MsgStakeGatewayResponse, MsgUnstakeGateway, MsgUnstakeGatewayResponse, MsgUpdateParam, MsgUpdateParamResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  stakeGateway(request: MsgStakeGateway): Promise<MsgStakeGatewayResponse>;
  unstakeGateway(request: MsgUnstakeGateway): Promise<MsgUnstakeGatewayResponse>;
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.stakeGateway = this.stakeGateway.bind(this);
    this.unstakeGateway = this.unstakeGateway.bind(this);
    this.updateParam = this.updateParam.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  stakeGateway(request: MsgStakeGateway): Promise<MsgStakeGatewayResponse> {
    const data = MsgStakeGateway.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Msg", "StakeGateway", data);
    return promise.then(data => MsgStakeGatewayResponse.decode(new BinaryReader(data)));
  }
  unstakeGateway(request: MsgUnstakeGateway): Promise<MsgUnstakeGatewayResponse> {
    const data = MsgUnstakeGateway.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Msg", "UnstakeGateway", data);
    return promise.then(data => MsgUnstakeGatewayResponse.decode(new BinaryReader(data)));
  }
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse> {
    const data = MsgUpdateParam.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Msg", "UpdateParam", data);
    return promise.then(data => MsgUpdateParamResponse.decode(new BinaryReader(data)));
  }
}