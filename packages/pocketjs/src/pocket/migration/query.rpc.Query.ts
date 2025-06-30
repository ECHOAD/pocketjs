//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMorseClaimableAccountRequest, QueryMorseClaimableAccountResponse, QueryAllMorseClaimableAccountRequest, QueryAllMorseClaimableAccountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of MorseClaimableAccount items. */
  morseClaimableAccount(request: QueryMorseClaimableAccountRequest): Promise<QueryMorseClaimableAccountResponse>;
  morseClaimableAccountAll(request?: QueryAllMorseClaimableAccountRequest): Promise<QueryAllMorseClaimableAccountResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.morseClaimableAccount = this.morseClaimableAccount.bind(this);
    this.morseClaimableAccountAll = this.morseClaimableAccountAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  morseClaimableAccount(request: QueryMorseClaimableAccountRequest): Promise<QueryMorseClaimableAccountResponse> {
    const data = QueryMorseClaimableAccountRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Query", "MorseClaimableAccount", data);
    return promise.then(data => QueryMorseClaimableAccountResponse.decode(new BinaryReader(data)));
  }
  morseClaimableAccountAll(request: QueryAllMorseClaimableAccountRequest = {
    pagination: undefined
  }): Promise<QueryAllMorseClaimableAccountResponse> {
    const data = QueryAllMorseClaimableAccountRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.migration.Query", "MorseClaimableAccountAll", data);
    return promise.then(data => QueryAllMorseClaimableAccountResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    morseClaimableAccount(request: QueryMorseClaimableAccountRequest): Promise<QueryMorseClaimableAccountResponse> {
      return queryService.morseClaimableAccount(request);
    },
    morseClaimableAccountAll(request?: QueryAllMorseClaimableAccountRequest): Promise<QueryAllMorseClaimableAccountResponse> {
      return queryService.morseClaimableAccountAll(request);
    }
  };
};