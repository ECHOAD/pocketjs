//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMorseClaimableAccountRequest, QueryMorseClaimableAccountResponseSDKType, QueryAllMorseClaimableAccountRequest, QueryAllMorseClaimableAccountResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.morseClaimableAccount = this.morseClaimableAccount.bind(this);
    this.morseClaimableAccountAll = this.morseClaimableAccountAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pokt-network/poktroll/migration/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of MorseClaimableAccount items. */
  async morseClaimableAccount(params: QueryMorseClaimableAccountRequest): Promise<QueryMorseClaimableAccountResponseSDKType> {
    const endpoint = `pokt-network/poktroll/migration/morse_claimable_account/${params.address}`;
    return await this.req.get<QueryMorseClaimableAccountResponseSDKType>(endpoint);
  }
  /* MorseClaimableAccountAll */
  async morseClaimableAccountAll(params: QueryAllMorseClaimableAccountRequest = {
    pagination: undefined
  }): Promise<QueryAllMorseClaimableAccountResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pokt-network/poktroll/migration/morse_claimable_account`;
    return await this.req.get<QueryAllMorseClaimableAccountResponseSDKType>(endpoint, options);
  }
}