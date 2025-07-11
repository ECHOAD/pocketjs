//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryEpochInfosRequest, QueryEpochInfosResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  /* EpochInfos provide running epochInfos */
  async epochInfos(_params: QueryEpochInfosRequest = {}): Promise<QueryEpochInfosResponseSDKType> {
    const endpoint = `cosmos/epochs/v1beta1/epochs`;
    return await this.req.get<QueryEpochInfosResponseSDKType>(endpoint);
  }
  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }
    const endpoint = `cosmos/epochs/v1beta1/current_epoch`;
    return await this.req.get<QueryCurrentEpochResponseSDKType>(endpoint, options);
  }
}