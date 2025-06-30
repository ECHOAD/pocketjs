//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSupplierRequest, QueryGetSupplierResponse, QueryAllSuppliersRequest, QueryAllSuppliersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Supplier items. */
  supplier(request: QueryGetSupplierRequest): Promise<QueryGetSupplierResponse>;
  allSuppliers(request: QueryAllSuppliersRequest): Promise<QueryAllSuppliersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.supplier = this.supplier.bind(this);
    this.allSuppliers = this.allSuppliers.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  supplier(request: QueryGetSupplierRequest): Promise<QueryGetSupplierResponse> {
    const data = QueryGetSupplierRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Query", "Supplier", data);
    return promise.then(data => QueryGetSupplierResponse.decode(new BinaryReader(data)));
  }
  allSuppliers(request: QueryAllSuppliersRequest): Promise<QueryAllSuppliersResponse> {
    const data = QueryAllSuppliersRequest.encode(request).finish();
    const promise = this.rpc.request("pocket.supplier.Query", "AllSuppliers", data);
    return promise.then(data => QueryAllSuppliersResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    supplier(request: QueryGetSupplierRequest): Promise<QueryGetSupplierResponse> {
      return queryService.supplier(request);
    },
    allSuppliers(request: QueryAllSuppliersRequest): Promise<QueryAllSuppliersResponse> {
      return queryService.allSuppliers(request);
    }
  };
};