//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetApplicationRequest, QueryGetApplicationResponse, QueryAllApplicationsRequest, QueryAllApplicationsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Application items. */
  application(request: QueryGetApplicationRequest): Promise<QueryGetApplicationResponse>;
  allApplications(request: QueryAllApplicationsRequest): Promise<QueryAllApplicationsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.application = this.application.bind(this);
    this.allApplications = this.allApplications.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  application(request: QueryGetApplicationRequest): Promise<QueryGetApplicationResponse> {
    const data = QueryGetApplicationRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Query", "Application", data);
    return promise.then(data => QueryGetApplicationResponse.decode(new BinaryReader(data)));
  }
  allApplications(request: QueryAllApplicationsRequest): Promise<QueryAllApplicationsResponse> {
    const data = QueryAllApplicationsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.application.Query", "AllApplications", data);
    return promise.then(data => QueryAllApplicationsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    application(request: QueryGetApplicationRequest): Promise<QueryGetApplicationResponse> {
      return queryService.application(request);
    },
    allApplications(request: QueryAllApplicationsRequest): Promise<QueryAllApplicationsResponse> {
      return queryService.allApplications(request);
    }
  };
};