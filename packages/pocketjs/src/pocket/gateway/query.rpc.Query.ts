//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetGatewayRequest, QueryGetGatewayResponse, QueryAllGatewaysRequest, QueryAllGatewaysResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Gateway items. */
  gateway(request: QueryGetGatewayRequest): Promise<QueryGetGatewayResponse>;
  allGateways(request?: QueryAllGatewaysRequest): Promise<QueryAllGatewaysResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.gateway = this.gateway.bind(this);
    this.allGateways = this.allGateways.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  gateway(request: QueryGetGatewayRequest): Promise<QueryGetGatewayResponse> {
    const data = QueryGetGatewayRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Query", "Gateway", data);
    return promise.then(data => QueryGetGatewayResponse.decode(new BinaryReader(data)));
  }
  allGateways(request: QueryAllGatewaysRequest = {
    pagination: undefined
  }): Promise<QueryAllGatewaysResponse> {
    const data = QueryAllGatewaysRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.gateway.Query", "AllGateways", data);
    return promise.then(data => QueryAllGatewaysResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    gateway(request: QueryGetGatewayRequest): Promise<QueryGetGatewayResponse> {
      return queryService.gateway(request);
    },
    allGateways(request?: QueryAllGatewaysRequest): Promise<QueryAllGatewaysResponse> {
      return queryService.allGateways(request);
    }
  };
};