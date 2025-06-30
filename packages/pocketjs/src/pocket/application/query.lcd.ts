//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetApplicationRequest, QueryGetApplicationResponseSDKType, QueryAllApplicationsRequest, QueryAllApplicationsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.application = this.application.bind(this);
    this.allApplications = this.allApplications.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/application/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Application items. */
  async application(params: QueryGetApplicationRequest): Promise<QueryGetApplicationResponseSDKType> {
    const endpoint = `pokt-network/poktroll/application/application/${params.address}`;
    return await this.req.get<QueryGetApplicationResponseSDKType>(endpoint);
  }
  /* AllApplications */
  async allApplications(params: QueryAllApplicationsRequest): Promise<QueryAllApplicationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.delegateeGatewayAddress !== "undefined") {
      options.params.delegatee_gateway_address = params.delegateeGatewayAddress;
    }
    const endpoint = `pokt-network/poktroll/application/application`;
    return await this.req.get<QueryAllApplicationsResponseSDKType>(endpoint, options);
  }
}