//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetServiceRequest, QueryGetServiceResponse, QueryAllServicesRequest, QueryAllServicesResponse, QueryGetRelayMiningDifficultyRequest, QueryGetRelayMiningDifficultyResponse, QueryAllRelayMiningDifficultyRequest, QueryAllRelayMiningDifficultyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Service items. */
  service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse>;
  allServices(request?: QueryAllServicesRequest): Promise<QueryAllServicesResponse>;
  /** Queries a list of RelayMiningDifficulty items. */
  relayMiningDifficulty(request: QueryGetRelayMiningDifficultyRequest): Promise<QueryGetRelayMiningDifficultyResponse>;
  relayMiningDifficultyAll(request?: QueryAllRelayMiningDifficultyRequest): Promise<QueryAllRelayMiningDifficultyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.service = this.service.bind(this);
    this.allServices = this.allServices.bind(this);
    this.relayMiningDifficulty = this.relayMiningDifficulty.bind(this);
    this.relayMiningDifficultyAll = this.relayMiningDifficultyAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse> {
    const data = QueryGetServiceRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Query", "Service", data);
    return promise.then(data => QueryGetServiceResponse.decode(new BinaryReader(data)));
  }
  allServices(request: QueryAllServicesRequest = {
    pagination: undefined
  }): Promise<QueryAllServicesResponse> {
    const data = QueryAllServicesRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Query", "AllServices", data);
    return promise.then(data => QueryAllServicesResponse.decode(new BinaryReader(data)));
  }
  relayMiningDifficulty(request: QueryGetRelayMiningDifficultyRequest): Promise<QueryGetRelayMiningDifficultyResponse> {
    const data = QueryGetRelayMiningDifficultyRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Query", "RelayMiningDifficulty", data);
    return promise.then(data => QueryGetRelayMiningDifficultyResponse.decode(new BinaryReader(data)));
  }
  relayMiningDifficultyAll(request: QueryAllRelayMiningDifficultyRequest = {
    pagination: undefined
  }): Promise<QueryAllRelayMiningDifficultyResponse> {
    const data = QueryAllRelayMiningDifficultyRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.service.Query", "RelayMiningDifficultyAll", data);
    return promise.then(data => QueryAllRelayMiningDifficultyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse> {
      return queryService.service(request);
    },
    allServices(request?: QueryAllServicesRequest): Promise<QueryAllServicesResponse> {
      return queryService.allServices(request);
    },
    relayMiningDifficulty(request: QueryGetRelayMiningDifficultyRequest): Promise<QueryGetRelayMiningDifficultyResponse> {
      return queryService.relayMiningDifficulty(request);
    },
    relayMiningDifficultyAll(request?: QueryAllRelayMiningDifficultyRequest): Promise<QueryAllRelayMiningDifficultyResponse> {
      return queryService.relayMiningDifficultyAll(request);
    }
  };
};