//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      circuit: {
        v1: (await import("../cosmos/circuit/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      counter: {
        v1: (await import("../cosmos/counter/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      epochs: {
        v1beta1: (await import("../cosmos/epochs/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      orm: {
        query: {
          v1alpha1: (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      protocolpool: {
        v1: (await import("../cosmos/protocolpool/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    pocket: {
      application: (await import("./application/query.rpc.Query")).createRpcQueryExtension(client),
      gateway: (await import("./gateway/query.rpc.Query")).createRpcQueryExtension(client),
      migration: (await import("./migration/query.rpc.Query")).createRpcQueryExtension(client),
      proof: (await import("./proof/query.rpc.Query")).createRpcQueryExtension(client),
      service: (await import("./service/query.rpc.Query")).createRpcQueryExtension(client),
      session: (await import("./session/query.rpc.Query")).createRpcQueryExtension(client),
      shared: (await import("./shared/query.rpc.Query")).createRpcQueryExtension(client),
      supplier: (await import("./supplier/query.rpc.Query")).createRpcQueryExtension(client),
      tokenomics: (await import("./tokenomics/query.rpc.Query")).createRpcQueryExtension(client)
    }
  };
};