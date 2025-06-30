//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetServiceRequest, QueryGetServiceResponseSDKType, QueryAllServicesRequest, QueryAllServicesResponseSDKType, QueryGetRelayMiningDifficultyRequest, QueryGetRelayMiningDifficultyResponseSDKType, QueryAllRelayMiningDifficultyRequest, QueryAllRelayMiningDifficultyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.service = this.service.bind(this);
    this.allServices = this.allServices.bind(this);
    this.relayMiningDifficulty = this.relayMiningDifficulty.bind(this);
    this.relayMiningDifficultyAll = this.relayMiningDifficultyAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/service/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Service items. */
  async service(params: QueryGetServiceRequest): Promise<QueryGetServiceResponseSDKType> {
    const endpoint = `pokt-network/poktroll/service/service/${params.id}`;
    return await this.req.get<QueryGetServiceResponseSDKType>(endpoint);
  }
  /* AllServices */
  async allServices(params: QueryAllServicesRequest = {
    pagination: undefined
  }): Promise<QueryAllServicesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pokt-network/poktroll/service/service`;
    return await this.req.get<QueryAllServicesResponseSDKType>(endpoint, options);
  }
  /* Queries a list of RelayMiningDifficulty items. */
  async relayMiningDifficulty(params: QueryGetRelayMiningDifficultyRequest): Promise<QueryGetRelayMiningDifficultyResponseSDKType> {
    const endpoint = `pokt-network/poktroll/service/relay_mining_difficulty/${params.serviceId}`;
    return await this.req.get<QueryGetRelayMiningDifficultyResponseSDKType>(endpoint);
  }
  /* RelayMiningDifficultyAll */
  async relayMiningDifficultyAll(params: QueryAllRelayMiningDifficultyRequest = {
    pagination: undefined
  }): Promise<QueryAllRelayMiningDifficultyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pokt-network/poktroll/service/relay_mining_difficulty`;
    return await this.req.get<QueryAllRelayMiningDifficultyResponseSDKType>(endpoint, options);
  }
}