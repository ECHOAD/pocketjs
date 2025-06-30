//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateClaim, MsgCreateClaimResponse, MsgSubmitProof, MsgSubmitProofResponse, MsgUpdateParam, MsgUpdateParamResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  createClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
  submitProof(request: MsgSubmitProof): Promise<MsgSubmitProofResponse>;
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createClaim = this.createClaim.bind(this);
    this.submitProof = this.submitProof.bind(this);
    this.updateParam = this.updateParam.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  createClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse> {
    const data = MsgCreateClaim.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Msg", "CreateClaim", data);
    return promise.then(data => MsgCreateClaimResponse.decode(new BinaryReader(data)));
  }
  submitProof(request: MsgSubmitProof): Promise<MsgSubmitProofResponse> {
    const data = MsgSubmitProof.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Msg", "SubmitProof", data);
    return promise.then(data => MsgSubmitProofResponse.decode(new BinaryReader(data)));
  }
  updateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse> {
    const data = MsgUpdateParam.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Msg", "UpdateParam", data);
    return promise.then(data => MsgUpdateParamResponse.decode(new BinaryReader(data)));
  }
}