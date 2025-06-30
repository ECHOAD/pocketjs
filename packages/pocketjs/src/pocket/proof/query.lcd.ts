//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetClaimRequest, QueryGetClaimResponseSDKType, QueryAllClaimsRequest, QueryAllClaimsResponseSDKType, QueryGetProofRequest, QueryGetProofResponseSDKType, QueryAllProofsRequest, QueryAllProofsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.claim = this.claim.bind(this);
    this.allClaims = this.allClaims.bind(this);
    this.proof = this.proof.bind(this);
    this.allProofs = this.allProofs.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/proof/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Claim items. */
  async claim(params: QueryGetClaimRequest): Promise<QueryGetClaimResponseSDKType> {
    const endpoint = `pokt-network/poktroll/proof/claim/${params.sessionId}/${params.supplierOperatorAddress}`;
    return await this.req.get<QueryGetClaimResponseSDKType>(endpoint);
  }
  /* AllClaims */
  async allClaims(params: QueryAllClaimsRequest): Promise<QueryAllClaimsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.supplierOperatorAddress !== "undefined") {
      options.params.supplier_operator_address = params.supplierOperatorAddress;
    }
    if (typeof params?.sessionId !== "undefined") {
      options.params.session_id = params.sessionId;
    }
    if (typeof params?.sessionEndHeight !== "undefined") {
      options.params.session_end_height = params.sessionEndHeight;
    }
    const endpoint = `pokt-network/poktroll/proof/claim`;
    return await this.req.get<QueryAllClaimsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Proof items. */
  async proof(params: QueryGetProofRequest): Promise<QueryGetProofResponseSDKType> {
    const endpoint = `pokt-network/poktroll/proof/proof/${params.sessionId}/${params.supplierOperatorAddress}`;
    return await this.req.get<QueryGetProofResponseSDKType>(endpoint);
  }
  /* AllProofs */
  async allProofs(params: QueryAllProofsRequest): Promise<QueryAllProofsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.supplierOperatorAddress !== "undefined") {
      options.params.supplier_operator_address = params.supplierOperatorAddress;
    }
    if (typeof params?.sessionId !== "undefined") {
      options.params.session_id = params.sessionId;
    }
    if (typeof params?.sessionEndHeight !== "undefined") {
      options.params.session_end_height = params.sessionEndHeight;
    }
    const endpoint = `pokt-network/poktroll/proof/proof`;
    return await this.req.get<QueryAllProofsResponseSDKType>(endpoint, options);
  }
}