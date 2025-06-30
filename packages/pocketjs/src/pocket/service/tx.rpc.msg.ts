//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateParam, MsgUpdateParamResponse, MsgAddService, MsgAddServiceResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
  addService(request: MsgAddService): Promise<MsgAddServiceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.updateParam = this.updateParam.bind(this);
    this.addService = this.addService.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse> {
    const data = MsgUpdateParam.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Msg", "UpdateParam", data);
    return promise.then(data => MsgUpdateParamResponse.decode(new BinaryReader(data)));
  }
  addService(request: MsgAddService): Promise<MsgAddServiceResponse> {
    const data = MsgAddService.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Msg", "AddService", data);
    return promise.then(data => MsgAddServiceResponse.decode(new BinaryReader(data)));
  }
}