//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSupplierRequest, QueryGetSupplierResponseSDKType, QueryAllSuppliersRequest, QueryAllSuppliersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.supplier = this.supplier.bind(this);
    this.allSuppliers = this.allSuppliers.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/supplier/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Supplier items. */
  async supplier(params: QueryGetSupplierRequest): Promise<QueryGetSupplierResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.dehydrated !== "undefined") {
      options.params.dehydrated = params.dehydrated;
    }
    const endpoint = `pokt-network/poktroll/supplier/supplier/${params.operatorAddress}`;
    return await this.req.get<QueryGetSupplierResponseSDKType>(endpoint, options);
  }
  /* AllSuppliers */
  async allSuppliers(params: QueryAllSuppliersRequest): Promise<QueryAllSuppliersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.serviceId !== "undefined") {
      options.params.service_id = params.serviceId;
    }
    if (typeof params?.dehydrated !== "undefined") {
      options.params.dehydrated = params.dehydrated;
    }
    const endpoint = `pokt-network/poktroll/supplier/supplier`;
    return await this.req.get<QueryAllSuppliersResponseSDKType>(endpoint, options);
  }
}