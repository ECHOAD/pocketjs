//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetClaimRequest, QueryGetClaimResponse, QueryAllClaimsRequest, QueryAllClaimsResponse, QueryGetProofRequest, QueryGetProofResponse, QueryAllProofsRequest, QueryAllProofsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Claim items. */
  claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse>;
  allClaims(request: QueryAllClaimsRequest): Promise<QueryAllClaimsResponse>;
  /** Queries a list of Proof items. */
  proof(request: QueryGetProofRequest): Promise<QueryGetProofResponse>;
  allProofs(request: QueryAllProofsRequest): Promise<QueryAllProofsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.claim = this.claim.bind(this);
    this.allClaims = this.allClaims.bind(this);
    this.proof = this.proof.bind(this);
    this.allProofs = this.allProofs.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse> {
    const data = QueryGetClaimRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Query", "Claim", data);
    return promise.then(data => QueryGetClaimResponse.decode(new BinaryReader(data)));
  }
  allClaims(request: QueryAllClaimsRequest): Promise<QueryAllClaimsResponse> {
    const data = QueryAllClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Query", "AllClaims", data);
    return promise.then(data => QueryAllClaimsResponse.decode(new BinaryReader(data)));
  }
  proof(request: QueryGetProofRequest): Promise<QueryGetProofResponse> {
    const data = QueryGetProofRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Query", "Proof", data);
    return promise.then(data => QueryGetProofResponse.decode(new BinaryReader(data)));
  }
  allProofs(request: QueryAllProofsRequest): Promise<QueryAllProofsResponse> {
    const data = QueryAllProofsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.proof.Query", "AllProofs", data);
    return promise.then(data => QueryAllProofsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    claim(request: QueryGetClaimRequest): Promise<QueryGetClaimResponse> {
      return queryService.claim(request);
    },
    allClaims(request: QueryAllClaimsRequest): Promise<QueryAllClaimsResponse> {
      return queryService.allClaims(request);
    },
    proof(request: QueryGetProofRequest): Promise<QueryGetProofResponse> {
      return queryService.proof(request);
    },
    allProofs(request: QueryAllProofsRequest): Promise<QueryAllProofsResponse> {
      return queryService.allProofs(request);
    }
  };
};