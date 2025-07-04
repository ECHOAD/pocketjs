//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryClientStateRequest, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesResponseSDKType, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponseSDKType, QueryClientStatusRequest, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsResponseSDKType, QueryClientCreatorRequest, QueryClientCreatorResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.consensusStateHeights = this.consensusStateHeights.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.clientCreator = this.clientCreator.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  /* ClientState queries an IBC light client. */
  async clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`;
    return await this.req.get<QueryClientStateResponseSDKType>(endpoint);
  }
  /* ClientStates queries all the IBC light clients of a chain. */
  async clientStates(params: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/client_states`;
    return await this.req.get<QueryClientStatesResponseSDKType>(endpoint, options);
  }
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */
  async consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.latestHeight !== "undefined") {
      options.params.latest_height = params.latestHeight;
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
    return await this.req.get<QueryConsensusStateResponseSDKType>(endpoint, options);
  }
  /* ConsensusStates queries all the consensus state associated with a given
   client. */
  async consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}`;
    return await this.req.get<QueryConsensusStatesResponseSDKType>(endpoint, options);
  }
  /* ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  async consensusStateHeights(params: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/heights`;
    return await this.req.get<QueryConsensusStateHeightsResponseSDKType>(endpoint, options);
  }
  /* Status queries the status of an IBC client. */
  async clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType> {
    const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`;
    return await this.req.get<QueryClientStatusResponseSDKType>(endpoint);
  }
  /* ClientParams queries all parameters of the ibc client submodule. */
  async clientParams(_params: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponseSDKType> {
    const endpoint = `ibc/core/client/v1/params`;
    return await this.req.get<QueryClientParamsResponseSDKType>(endpoint);
  }
  /* ClientCreator queries the creator of a given client. */
  async clientCreator(params: QueryClientCreatorRequest): Promise<QueryClientCreatorResponseSDKType> {
    const endpoint = `ibc/core/client/v1/client_creator/${params.clientId}`;
    return await this.req.get<QueryClientCreatorResponseSDKType>(endpoint);
  }
  /* UpgradedClientState queries an Upgraded IBC light client. */
  async upgradedClientState(_params: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return await this.req.get<QueryUpgradedClientStateResponseSDKType>(endpoint);
  }
  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  async upgradedConsensusState(_params: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return await this.req.get<QueryUpgradedConsensusStateResponseSDKType>(endpoint);
  }
}