//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSessionRequest, QueryGetSessionResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getSession = this.getSession.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/session/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries the session given app_address, service and block_height. */
  async getSession(params: QueryGetSessionRequest): Promise<QueryGetSessionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.applicationAddress !== "undefined") {
      options.params.application_address = params.applicationAddress;
    }
    if (typeof params?.serviceId !== "undefined") {
      options.params.service_id = params.serviceId;
    }
    if (typeof params?.blockHeight !== "undefined") {
      options.params.block_height = params.blockHeight;
    }
    const endpoint = `pokt-network/poktroll/session/get_session`;
    return await this.req.get<QueryGetSessionResponseSDKType>(endpoint, options);
  }
}