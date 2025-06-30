//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetGatewayRequest, QueryGetGatewayResponseSDKType, QueryAllGatewaysRequest, QueryAllGatewaysResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.gateway = this.gateway.bind(this);
    this.allGateways = this.allGateways.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/gateway/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Gateway items. */
  async gateway(params: QueryGetGatewayRequest): Promise<QueryGetGatewayResponseSDKType> {
    const endpoint = `pokt-network/poktroll/gateway/gateway/${params.address}`;
    return await this.req.get<QueryGetGatewayResponseSDKType>(endpoint);
  }
  /* AllGateways */
  async allGateways(params: QueryAllGatewaysRequest = {
    pagination: undefined
  }): Promise<QueryAllGatewaysResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pokt-network/poktroll/gateway/gateway`;
    return await this.req.get<QueryAllGatewaysResponseSDKType>(endpoint, options);
  }
}