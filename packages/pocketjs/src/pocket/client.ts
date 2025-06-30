//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as pocketApplicationTxRegistry from "./application/tx.registry";
import * as pocketGatewayTxRegistry from "./gateway/tx.registry";
import * as pocketMigrationTxRegistry from "./migration/tx.registry";
import * as pocketProofTxRegistry from "./proof/tx.registry";
import * as pocketServiceTxRegistry from "./service/tx.registry";
import * as pocketSessionTxRegistry from "./session/tx.registry";
import * as pocketSharedTxRegistry from "./shared/tx.registry";
import * as pocketSupplierTxRegistry from "./supplier/tx.registry";
import * as pocketTokenomicsTxRegistry from "./tokenomics/tx.registry";
import * as pocketApplicationTxAmino from "./application/tx.amino";
import * as pocketGatewayTxAmino from "./gateway/tx.amino";
import * as pocketMigrationTxAmino from "./migration/tx.amino";
import * as pocketProofTxAmino from "./proof/tx.amino";
import * as pocketServiceTxAmino from "./service/tx.amino";
import * as pocketSessionTxAmino from "./session/tx.amino";
import * as pocketSharedTxAmino from "./shared/tx.amino";
import * as pocketSupplierTxAmino from "./supplier/tx.amino";
import * as pocketTokenomicsTxAmino from "./tokenomics/tx.amino";
export const pocketAminoConverters = {
  ...pocketApplicationTxAmino.AminoConverter,
  ...pocketGatewayTxAmino.AminoConverter,
  ...pocketMigrationTxAmino.AminoConverter,
  ...pocketProofTxAmino.AminoConverter,
  ...pocketServiceTxAmino.AminoConverter,
  ...pocketSessionTxAmino.AminoConverter,
  ...pocketSharedTxAmino.AminoConverter,
  ...pocketSupplierTxAmino.AminoConverter,
  ...pocketTokenomicsTxAmino.AminoConverter
};
export const pocketProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...pocketApplicationTxRegistry.registry, ...pocketGatewayTxRegistry.registry, ...pocketMigrationTxRegistry.registry, ...pocketProofTxRegistry.registry, ...pocketServiceTxRegistry.registry, ...pocketSessionTxRegistry.registry, ...pocketSharedTxRegistry.registry, ...pocketSupplierTxRegistry.registry, ...pocketTokenomicsTxRegistry.registry];
export const getSigningPocketClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...pocketProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...pocketAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPocketClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningPocketClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};