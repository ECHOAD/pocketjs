//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MorseAccountState, MorseAccountStateAmino, MorseAccountStateSDKType, MorseSupplierClaimSignerType } from "./morse_onchain";
import { ApplicationServiceConfig, ApplicationServiceConfigAmino, ApplicationServiceConfigSDKType, SupplierServiceConfig, SupplierServiceConfigAmino, SupplierServiceConfigSDKType } from "../shared/service";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Application, ApplicationAmino, ApplicationSDKType } from "../application/types";
import { Supplier, SupplierAmino, SupplierSDKType } from "../shared/supplier";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * - Used for updating the migration module parameters via governance
 * - All parameters must be supplied
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * Module parameters to update
   * NOTE: All parameters must be supplied
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pocket.migration.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * - Used for updating the migration module parameters via governance
 * - All parameters must be supplied
 * @name MsgUpdateParamsAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * Module parameters to update
   * NOTE: All parameters must be supplied
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pocket/x/migration/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * - Used for updating the migration module parameters via governance
 * - All parameters must be supplied
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message.
 * 
 * - Empty response on success
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pocket.migration.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message.
 * 
 * - Empty response on success
 * @name MsgUpdateParamsResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pocket.migration.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message.
 * 
 * - Empty response on success
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgImportMorseClaimableAccounts is used to:
 * 
 * - Create the on-chain MorseClaimableAccounts ONLY AND EXACTLY ONCE (per network / re-genesis)
 * - Import Morse account state derived from Morse state export
 */
export interface MsgImportMorseClaimableAccounts {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** Account state derived from Morse state export and `pocketd tx migration collect-morse-accounts` */
  morseAccountState: MorseAccountState;
  /**
   * Validates the morse_account_state sha256 hash:
   * - Transaction fails if hash doesn't match on-chain computation
   * - Off-chain social consensus should be reached before verification
   * 
   * Verification (high-level):
   *   $ pocketd tx migration collect-morse-accounts $<(pocket util export-genesis-for-reset)
   * 
   * Additional docs:
   *   - pocket util export-genesis-for-migration --help
   *   - pocketd tx migration collect-morse-accounts --help
   */
  morseAccountStateHash: Uint8Array;
}
export interface MsgImportMorseClaimableAccountsProtoMsg {
  typeUrl: "/pocket.migration.MsgImportMorseClaimableAccounts";
  value: Uint8Array;
}
/**
 * MsgImportMorseClaimableAccounts is used to:
 * 
 * - Create the on-chain MorseClaimableAccounts ONLY AND EXACTLY ONCE (per network / re-genesis)
 * - Import Morse account state derived from Morse state export
 * @name MsgImportMorseClaimableAccountsAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgImportMorseClaimableAccounts
 */
export interface MsgImportMorseClaimableAccountsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * Account state derived from Morse state export and `pocketd tx migration collect-morse-accounts`
   */
  morse_account_state: MorseAccountStateAmino;
  /**
   * Validates the morse_account_state sha256 hash:
   * - Transaction fails if hash doesn't match on-chain computation
   * - Off-chain social consensus should be reached before verification
   * 
   * Verification (high-level):
   *   $ pocketd tx migration collect-morse-accounts $<(pocket util export-genesis-for-reset)
   * 
   * Additional docs:
   *   - pocket util export-genesis-for-migration --help
   *   - pocketd tx migration collect-morse-accounts --help
   */
  morse_account_state_hash: string;
}
export interface MsgImportMorseClaimableAccountsAminoMsg {
  type: "/pocket.migration.MsgImportMorseClaimableAccounts";
  value: MsgImportMorseClaimableAccountsAmino;
}
/**
 * MsgImportMorseClaimableAccounts is used to:
 * 
 * - Create the on-chain MorseClaimableAccounts ONLY AND EXACTLY ONCE (per network / re-genesis)
 * - Import Morse account state derived from Morse state export
 */
export interface MsgImportMorseClaimableAccountsSDKType {
  authority: string;
  morse_account_state: MorseAccountStateSDKType;
  morse_account_state_hash: Uint8Array;
}
/**
 * MsgImportMorseClaimableAccountsResponse is returned from MsgImportMorseClaimableAccounts.
 * 
 * - Indicates the canonical hash of the imported MorseAccountState
 * - Reports the number of claimable accounts imported
 */
export interface MsgImportMorseClaimableAccountsResponse {
  /** On-chain computed sha256 hash of the morse_account_state provided in the corresponding MsgCreateMorseAccountState. */
  stateHash: Uint8Array;
  /** Number of claimable accounts (EOAs) collected from Morse state export. */
  numAccounts: bigint;
}
export interface MsgImportMorseClaimableAccountsResponseProtoMsg {
  typeUrl: "/pocket.migration.MsgImportMorseClaimableAccountsResponse";
  value: Uint8Array;
}
/**
 * MsgImportMorseClaimableAccountsResponse is returned from MsgImportMorseClaimableAccounts.
 * 
 * - Indicates the canonical hash of the imported MorseAccountState
 * - Reports the number of claimable accounts imported
 * @name MsgImportMorseClaimableAccountsResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgImportMorseClaimableAccountsResponse
 */
export interface MsgImportMorseClaimableAccountsResponseAmino {
  /**
   * On-chain computed sha256 hash of the morse_account_state provided in the corresponding MsgCreateMorseAccountState.
   */
  state_hash: string;
  /**
   * Number of claimable accounts (EOAs) collected from Morse state export.
   */
  num_accounts: string;
}
export interface MsgImportMorseClaimableAccountsResponseAminoMsg {
  type: "/pocket.migration.MsgImportMorseClaimableAccountsResponse";
  value: MsgImportMorseClaimableAccountsResponseAmino;
}
/**
 * MsgImportMorseClaimableAccountsResponse is returned from MsgImportMorseClaimableAccounts.
 * 
 * - Indicates the canonical hash of the imported MorseAccountState
 * - Reports the number of claimable accounts imported
 */
export interface MsgImportMorseClaimableAccountsResponseSDKType {
  state_hash: Uint8Array;
  num_accounts: bigint;
}
/**
 * MsgClaimMorseAccount is used to:
 * 
 * - Execute a claim (one-time minting of tokens on Shannon)
 * - Claim the balance of a given Morse account per on-chain MorseClaimableAccounts
 * - Mint claimed balance to the given Shannon account
 * 
 * NOTE:
 * - A transaction can contain ONE OR MORE Morse account/actor claim messages AND has EXACTLY ONE signer.
 * - The Shannon account specified must be the message signer
 * - Authz grants MAY be used to delegate claiming authority to other Shannon accounts
 */
export interface MsgClaimMorseAccount {
  /**
   * The bech32-encoded address of the Shannon account which is signing for this message.
   * This account is liable for any fees incurred by violating the constraints of Morse
   * account/actor claim message fee waiving.
   */
  shannonSigningAddress: string;
  /** The bech32-encoded address of the Shannon account to which the claimed balance will be minted. */
  shannonDestAddress: string;
  /** The ed25519 public key of the morse account with morse_src_address. */
  morsePublicKey: Uint8Array;
  /**
   * The hex-encoded signature, by the Morse account, of this message (where this field is nil).
   * I.e.: morse_signature = private_key.sign(marshal(MsgClaimMorseAccount{morse_signature: nil, ...}))
   */
  morseSignature: Uint8Array;
}
export interface MsgClaimMorseAccountProtoMsg {
  typeUrl: "/pocket.migration.MsgClaimMorseAccount";
  value: Uint8Array;
}
/**
 * MsgClaimMorseAccount is used to:
 * 
 * - Execute a claim (one-time minting of tokens on Shannon)
 * - Claim the balance of a given Morse account per on-chain MorseClaimableAccounts
 * - Mint claimed balance to the given Shannon account
 * 
 * NOTE:
 * - A transaction can contain ONE OR MORE Morse account/actor claim messages AND has EXACTLY ONE signer.
 * - The Shannon account specified must be the message signer
 * - Authz grants MAY be used to delegate claiming authority to other Shannon accounts
 * @name MsgClaimMorseAccountAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgClaimMorseAccount
 */
export interface MsgClaimMorseAccountAmino {
  /**
   * The bech32-encoded address of the Shannon account which is signing for this message.
   * This account is liable for any fees incurred by violating the constraints of Morse
   * account/actor claim message fee waiving.
   */
  shannon_signing_address: string;
  /**
   * The bech32-encoded address of the Shannon account to which the claimed balance will be minted.
   */
  shannon_dest_address: string;
  /**
   * The ed25519 public key of the morse account with morse_src_address.
   */
  morse_public_key?: string;
  /**
   * The hex-encoded signature, by the Morse account, of this message (where this field is nil).
   * I.e.: morse_signature = private_key.sign(marshal(MsgClaimMorseAccount{morse_signature: nil, ...}))
   */
  morse_signature: string;
}
export interface MsgClaimMorseAccountAminoMsg {
  type: "/pocket.migration.MsgClaimMorseAccount";
  value: MsgClaimMorseAccountAmino;
}
/**
 * MsgClaimMorseAccount is used to:
 * 
 * - Execute a claim (one-time minting of tokens on Shannon)
 * - Claim the balance of a given Morse account per on-chain MorseClaimableAccounts
 * - Mint claimed balance to the given Shannon account
 * 
 * NOTE:
 * - A transaction can contain ONE OR MORE Morse account/actor claim messages AND has EXACTLY ONE signer.
 * - The Shannon account specified must be the message signer
 * - Authz grants MAY be used to delegate claiming authority to other Shannon accounts
 */
export interface MsgClaimMorseAccountSDKType {
  shannon_signing_address: string;
  shannon_dest_address: string;
  morse_public_key: Uint8Array;
  morse_signature: Uint8Array;
}
/**
 * MsgClaimMorseAccountResponse is returned from MsgClaimMorseAccount.
 * 
 * - Indicates the morse_src_address of the claimed account
 * - Reports the claimed balance and commit height
 */
export interface MsgClaimMorseAccountResponse {
  /**
   * The hex-encoded address of the Morse account whose balance will be claimed.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morseSrcAddress: string;
  /** The balance which was claimed. */
  claimedBalance: Coin;
  /** The session end height (on Shannon) in which the claim was committed (i.e. claimed). */
  sessionEndHeight: bigint;
}
export interface MsgClaimMorseAccountResponseProtoMsg {
  typeUrl: "/pocket.migration.MsgClaimMorseAccountResponse";
  value: Uint8Array;
}
/**
 * MsgClaimMorseAccountResponse is returned from MsgClaimMorseAccount.
 * 
 * - Indicates the morse_src_address of the claimed account
 * - Reports the claimed balance and commit height
 * @name MsgClaimMorseAccountResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgClaimMorseAccountResponse
 */
export interface MsgClaimMorseAccountResponseAmino {
  /**
   * The hex-encoded address of the Morse account whose balance will be claimed.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morse_src_address: string;
  /**
   * The balance which was claimed.
   */
  claimed_balance: CoinAmino;
  /**
   * The session end height (on Shannon) in which the claim was committed (i.e. claimed).
   */
  session_end_height: string;
}
export interface MsgClaimMorseAccountResponseAminoMsg {
  type: "/pocket.migration.MsgClaimMorseAccountResponse";
  value: MsgClaimMorseAccountResponseAmino;
}
/**
 * MsgClaimMorseAccountResponse is returned from MsgClaimMorseAccount.
 * 
 * - Indicates the morse_src_address of the claimed account
 * - Reports the claimed balance and commit height
 */
export interface MsgClaimMorseAccountResponseSDKType {
  morse_src_address: string;
  claimed_balance: CoinSDKType;
  session_end_height: bigint;
}
/**
 * MsgClaimMorseApplication is used to:
 * 
 * - Execute a claim (one-time minting of tokens on Shannon) of total tokens owned by a Morse account
 * - Mint claimed tokens to the given Shannon account
 * - Stake that Shannon account as an application for the given service_config and same stake amount
 */
export interface MsgClaimMorseApplication {
  /**
   * The bech32-encoded address of the Shannon account which is signing for this message.
   * This account is liable for any fees incurred by violating the constraints of Morse
   * account/actor claim message fee waiving; the tx contains ONE OR MORE Morse account/actor
   * claim messages AND has EXACTLY ONE signer.
   */
  shannonSigningAddress: string;
  /**
   * The bech32-encoded address of the Shannon account to which the claimed tokens
   * will be minted and from which the application will be staked.
   */
  shannonDestAddress: string;
  /** The ed25519 public key of the morse account with morse_src_address. */
  morsePublicKey: Uint8Array;
  /**
   * The hex-encoded signature, by the Morse account, of this message (where this field is nil).
   * I.e.: morse_signature = private_key.sign(marshal(MsgClaimMorseAccount{morse_signature: nil, ...}))
   */
  morseSignature: Uint8Array;
  /**
   * The services this application is staked to request service for.
   * NOTE: This is not a repeated field, as in MsgStakeApplication,
   * because an application can only be staked for one service.
   */
  serviceConfig?: ApplicationServiceConfig;
}
export interface MsgClaimMorseApplicationProtoMsg {
  typeUrl: "/pocket.migration.MsgClaimMorseApplication";
  value: Uint8Array;
}
/**
 * MsgClaimMorseApplication is used to:
 * 
 * - Execute a claim (one-time minting of tokens on Shannon) of total tokens owned by a Morse account
 * - Mint claimed tokens to the given Shannon account
 * - Stake that Shannon account as an application for the given service_config and same stake amount
 * @name MsgClaimMorseApplicationAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgClaimMorseApplication
 */
export interface MsgClaimMorseApplicationAmino {
  /**
   * The bech32-encoded address of the Shannon account which is signing for this message.
   * This account is liable for any fees incurred by violating the constraints of Morse
   * account/actor claim message fee waiving; the tx contains ONE OR MORE Morse account/actor
   * claim messages AND has EXACTLY ONE signer.
   */
  shannon_signing_address: string;
  /**
   * The bech32-encoded address of the Shannon account to which the claimed tokens
   * will be minted and from which the application will be staked.
   */
  shannon_dest_address: string;
  /**
   * The ed25519 public key of the morse account with morse_src_address.
   */
  morse_public_key?: string;
  /**
   * The hex-encoded signature, by the Morse account, of this message (where this field is nil).
   * I.e.: morse_signature = private_key.sign(marshal(MsgClaimMorseAccount{morse_signature: nil, ...}))
   */
  morse_signature: string;
  /**
   * The services this application is staked to request service for.
   * NOTE: This is not a repeated field, as in MsgStakeApplication,
   * because an application can only be staked for one service.
   */
  service_config: ApplicationServiceConfigAmino;
}
export interface MsgClaimMorseApplicationAminoMsg {
  type: "/pocket.migration.MsgClaimMorseApplication";
  value: MsgClaimMorseApplicationAmino;
}
/**
 * MsgClaimMorseApplication is used to:
 * 
 * - Execute a claim (one-time minting of tokens on Shannon) of total tokens owned by a Morse account
 * - Mint claimed tokens to the given Shannon account
 * - Stake that Shannon account as an application for the given service_config and same stake amount
 */
export interface MsgClaimMorseApplicationSDKType {
  shannon_signing_address: string;
  shannon_dest_address: string;
  morse_public_key: Uint8Array;
  morse_signature: Uint8Array;
  service_config?: ApplicationServiceConfigSDKType;
}
/**
 * MsgClaimMorseApplicationResponse is returned from MsgClaimMorseApplication.
 * 
 * - Indicates the morse_src_address of the claimed account
 * - Reports the unstaked balance claimed, application stake, and commit height
 * - Returns the staked application
 */
export interface MsgClaimMorseApplicationResponse {
  /** The hex-encoded address of the Morse account whose balance will be claimed. */
  morseSrcAddress: string;
  /** The unstaked balance which was claimed. */
  claimedBalance: Coin;
  /**
   * The stake of the application which was staked as a result of the claim.
   * If the application was already staked, this amount does not include the initial stake (i.e. only the portion which was "claimed").
   */
  claimedApplicationStake: Coin;
  /** The session end height (on Shannon) in which the claim was committed (i.e. claimed). */
  sessionEndHeight: bigint;
  /** The application which was staked as a result of the claim. */
  application?: Application;
}
export interface MsgClaimMorseApplicationResponseProtoMsg {
  typeUrl: "/pocket.migration.MsgClaimMorseApplicationResponse";
  value: Uint8Array;
}
/**
 * MsgClaimMorseApplicationResponse is returned from MsgClaimMorseApplication.
 * 
 * - Indicates the morse_src_address of the claimed account
 * - Reports the unstaked balance claimed, application stake, and commit height
 * - Returns the staked application
 * @name MsgClaimMorseApplicationResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgClaimMorseApplicationResponse
 */
export interface MsgClaimMorseApplicationResponseAmino {
  /**
   * The hex-encoded address of the Morse account whose balance will be claimed.
   */
  morse_src_address: string;
  /**
   * The unstaked balance which was claimed.
   */
  claimed_balance: CoinAmino;
  /**
   * The stake of the application which was staked as a result of the claim.
   * If the application was already staked, this amount does not include the initial stake (i.e. only the portion which was "claimed").
   */
  claimedApplicationStake: CoinAmino;
  /**
   * The session end height (on Shannon) in which the claim was committed (i.e. claimed).
   */
  session_end_height: string;
  /**
   * The application which was staked as a result of the claim.
   */
  application: ApplicationAmino;
}
export interface MsgClaimMorseApplicationResponseAminoMsg {
  type: "/pocket.migration.MsgClaimMorseApplicationResponse";
  value: MsgClaimMorseApplicationResponseAmino;
}
/**
 * MsgClaimMorseApplicationResponse is returned from MsgClaimMorseApplication.
 * 
 * - Indicates the morse_src_address of the claimed account
 * - Reports the unstaked balance claimed, application stake, and commit height
 * - Returns the staked application
 */
export interface MsgClaimMorseApplicationResponseSDKType {
  morse_src_address: string;
  claimed_balance: CoinSDKType;
  claimedApplicationStake: CoinSDKType;
  session_end_height: bigint;
  application?: ApplicationSDKType;
}
/**
 * MsgClaimMorseSupplier is used to:
 * 
 * - Execute a one-time minting of tokens on Shannon based on tokens owned by the given Morse account
 * - Use the on-chain MorseClaimableAccounts for verification
 * - Credit the minted tokens to the balance of the given Shannon account
 * - Automatically stake that Shannon account as a supplier
 * 
 * NOTE: The supplier module's staking fee parameter (at the time of claiming) is deducted from the claimed balance
 */
export interface MsgClaimMorseSupplier {
  /**
   * The bech32-encoded address of the Shannon account which is signing for this message.
   * This account is liable for any fees incurred by violating the constraints of Morse
   * account/actor claim message fee waiving; the tx contains ONE OR MORE Morse account/actor
   * claim messages AND has EXACTLY ONE signer.
   */
  shannonSigningAddress: string;
  /**
   * The bech32-encoded address of the Shannon account to which the claimed tokens
   * will be minted and which become the supplier owner.
   * See: https://dev.poktroll.com/operate/configs/supplier_staking_config#staking-types.
   */
  shannonOwnerAddress: string;
  /**
   * The bech32-encoded address of the Shannon account to which will become the supplier operator.
   * If empty, the shannon_owner_address will be used.
   * See: https://dev.poktroll.com/operate/configs/supplier_staking_config#staking-types.
   */
  shannonOperatorAddress: string;
  /**
   * The hex-encoded address of the Morse non-custodial (i.e. operator) account.
   * - Unstaked balance will be migrated 1:1
   * - Stake will be migrated 1:1 from morse_node_address to shannon_operator_address
   * - Morse non-custodial (i.e. operator) address.
   * If morse_output_address is not set, this is the custodial address.
   * - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morseNodeAddress: string;
  /**
   * The ed25519 public key of EITHER the Morse node/supplier operator OR owner account.
   * - MUST correspond to the private key which was used to produce the morse_signature.
   * - MUST correspond to ONE OF THE FOLLOWING:
   *   - morse_node_address
   *   - morse_output_address
   */
  morsePublicKey: Uint8Array;
  /**
   * The hex-encoded signature, of this message (where this field is nil).
   * I.e.: morse_signature = private_key.sign(marshal(MsgClaimMorseSupplier{morse_signature: nil, ...}))
   * - MUST match morse_public_key.
   * - MUST be signed by ONE OF THE FOLLOWING:
   *   - Morse node account (i.e. operator); if signer_is_output_address is false
   *   - Morse output account (i.e. owner); if signer_is_output_address is true
   */
  morseSignature: Uint8Array;
  /**
   * Set to true if the private key corresponding to the morse_output_address is producing the morse_signature.
   * For non-custodial claiming:
   * - This MUST be true.
   * - The morse_public_key MUST correspond to morse_output_address.
   * - The morse_signature MUST correspond to morse_output_address.
   */
  signerIsOutputAddress: boolean;
  /** The services this supplier is staked to provide service for. */
  services: SupplierServiceConfig[];
}
export interface MsgClaimMorseSupplierProtoMsg {
  typeUrl: "/pocket.migration.MsgClaimMorseSupplier";
  value: Uint8Array;
}
/**
 * MsgClaimMorseSupplier is used to:
 * 
 * - Execute a one-time minting of tokens on Shannon based on tokens owned by the given Morse account
 * - Use the on-chain MorseClaimableAccounts for verification
 * - Credit the minted tokens to the balance of the given Shannon account
 * - Automatically stake that Shannon account as a supplier
 * 
 * NOTE: The supplier module's staking fee parameter (at the time of claiming) is deducted from the claimed balance
 * @name MsgClaimMorseSupplierAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgClaimMorseSupplier
 */
export interface MsgClaimMorseSupplierAmino {
  /**
   * The bech32-encoded address of the Shannon account which is signing for this message.
   * This account is liable for any fees incurred by violating the constraints of Morse
   * account/actor claim message fee waiving; the tx contains ONE OR MORE Morse account/actor
   * claim messages AND has EXACTLY ONE signer.
   */
  shannon_signing_address: string;
  /**
   * The bech32-encoded address of the Shannon account to which the claimed tokens
   * will be minted and which become the supplier owner.
   * See: https://dev.poktroll.com/operate/configs/supplier_staking_config#staking-types.
   */
  shannon_owner_address: string;
  /**
   * The bech32-encoded address of the Shannon account to which will become the supplier operator.
   * If empty, the shannon_owner_address will be used.
   * See: https://dev.poktroll.com/operate/configs/supplier_staking_config#staking-types.
   */
  shannon_operator_address: string;
  /**
   * The hex-encoded address of the Morse non-custodial (i.e. operator) account.
   * - Unstaked balance will be migrated 1:1
   * - Stake will be migrated 1:1 from morse_node_address to shannon_operator_address
   * - Morse non-custodial (i.e. operator) address.
   * If morse_output_address is not set, this is the custodial address.
   * - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morse_node_address: string;
  /**
   * The ed25519 public key of EITHER the Morse node/supplier operator OR owner account.
   * - MUST correspond to the private key which was used to produce the morse_signature.
   * - MUST correspond to ONE OF THE FOLLOWING:
   *   - morse_node_address
   *   - morse_output_address
   */
  morse_public_key: string;
  /**
   * The hex-encoded signature, of this message (where this field is nil).
   * I.e.: morse_signature = private_key.sign(marshal(MsgClaimMorseSupplier{morse_signature: nil, ...}))
   * - MUST match morse_public_key.
   * - MUST be signed by ONE OF THE FOLLOWING:
   *   - Morse node account (i.e. operator); if signer_is_output_address is false
   *   - Morse output account (i.e. owner); if signer_is_output_address is true
   */
  morse_signature: string;
  /**
   * Set to true if the private key corresponding to the morse_output_address is producing the morse_signature.
   * For non-custodial claiming:
   * - This MUST be true.
   * - The morse_public_key MUST correspond to morse_output_address.
   * - The morse_signature MUST correspond to morse_output_address.
   */
  signer_is_output_address: boolean;
  /**
   * The services this supplier is staked to provide service for.
   */
  services: SupplierServiceConfigAmino[];
}
export interface MsgClaimMorseSupplierAminoMsg {
  type: "/pocket.migration.MsgClaimMorseSupplier";
  value: MsgClaimMorseSupplierAmino;
}
/**
 * MsgClaimMorseSupplier is used to:
 * 
 * - Execute a one-time minting of tokens on Shannon based on tokens owned by the given Morse account
 * - Use the on-chain MorseClaimableAccounts for verification
 * - Credit the minted tokens to the balance of the given Shannon account
 * - Automatically stake that Shannon account as a supplier
 * 
 * NOTE: The supplier module's staking fee parameter (at the time of claiming) is deducted from the claimed balance
 */
export interface MsgClaimMorseSupplierSDKType {
  shannon_signing_address: string;
  shannon_owner_address: string;
  shannon_operator_address: string;
  morse_node_address: string;
  morse_public_key: Uint8Array;
  morse_signature: Uint8Array;
  signer_is_output_address: boolean;
  services: SupplierServiceConfigSDKType[];
}
/**
 * MsgClaimMorseSupplierResponse is returned from MsgClaimMorseSupplier.
 * 
 * - Indicates the morse_operator_address of the claimed account
 * - Reports the unstaked balance claimed, session end height, and staked supplier
 * - Includes claim signer type and signer address
 */
export interface MsgClaimMorseSupplierResponse {
  /**
   * The hex-encoded address of the Morse non-custodial (i.e. operator) account.
   * - Unstaked balance will be migrated 1:1
   * - Stake will be migrated 1:1 from morse_node_address to shannon_operator_address
   * - Morse non-custodial (i.e. operator) address.
   * If morse_output_address is not set, this is the custodial address.
   * - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morseNodeAddress: string;
  /**
   * Hex-encoded address of the Morse output account/wallet associated with the Morse node/supplier.
   * - E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - Morse custodial (i.e. owner) address, which owns the staked tokens of the operator.
   *   See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morseOutputAddress: string;
  /**
   * The type of supplier claim signer, indicating which actor executed the claim
   * and whether it was a custodial or non-custodial claim.
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_ADDR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OPERATOR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OWNER
   */
  claimSignerType: MorseSupplierClaimSignerType;
  /** The unstaked balance which was claimed. */
  claimedBalance: Coin;
  claimedSupplierStake: Coin;
  /** The session end height (on Shannon) in which the claim was committed (i.e. claimed). */
  sessionEndHeight: bigint;
  /** The supplier which was staked as a result of the claim. */
  supplier?: Supplier;
}
export interface MsgClaimMorseSupplierResponseProtoMsg {
  typeUrl: "/pocket.migration.MsgClaimMorseSupplierResponse";
  value: Uint8Array;
}
/**
 * MsgClaimMorseSupplierResponse is returned from MsgClaimMorseSupplier.
 * 
 * - Indicates the morse_operator_address of the claimed account
 * - Reports the unstaked balance claimed, session end height, and staked supplier
 * - Includes claim signer type and signer address
 * @name MsgClaimMorseSupplierResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgClaimMorseSupplierResponse
 */
export interface MsgClaimMorseSupplierResponseAmino {
  /**
   * The hex-encoded address of the Morse non-custodial (i.e. operator) account.
   * - Unstaked balance will be migrated 1:1
   * - Stake will be migrated 1:1 from morse_node_address to shannon_operator_address
   * - Morse non-custodial (i.e. operator) address.
   * If morse_output_address is not set, this is the custodial address.
   * - See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   * E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   */
  morse_node_address: string;
  /**
   * Hex-encoded address of the Morse output account/wallet associated with the Morse node/supplier.
   * - E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - Morse custodial (i.e. owner) address, which owns the staked tokens of the operator.
   *   See 'pocket nodes --help' for more information. Note that this refers to the Morse CLI.
   */
  morse_output_address: string;
  /**
   * The type of supplier claim signer, indicating which actor executed the claim
   * and whether it was a custodial or non-custodial claim.
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_NON_CUSTODIAL_SIGNED_BY_ADDR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OPERATOR
   * - MORSE_SUPPLIER_CLAIM_SIGNER_TYPE_CUSTODIAL_SIGNED_BY_OWNER
   */
  claim_signer_type: MorseSupplierClaimSignerType;
  /**
   * The unstaked balance which was claimed.
   */
  claimed_balance: CoinAmino;
  claimed_supplier_stake: CoinAmino;
  /**
   * The session end height (on Shannon) in which the claim was committed (i.e. claimed).
   */
  session_end_height: string;
  /**
   * The supplier which was staked as a result of the claim.
   */
  supplier: SupplierAmino;
}
export interface MsgClaimMorseSupplierResponseAminoMsg {
  type: "/pocket.migration.MsgClaimMorseSupplierResponse";
  value: MsgClaimMorseSupplierResponseAmino;
}
/**
 * MsgClaimMorseSupplierResponse is returned from MsgClaimMorseSupplier.
 * 
 * - Indicates the morse_operator_address of the claimed account
 * - Reports the unstaked balance claimed, session end height, and staked supplier
 * - Includes claim signer type and signer address
 */
export interface MsgClaimMorseSupplierResponseSDKType {
  morse_node_address: string;
  morse_output_address: string;
  claim_signer_type: MorseSupplierClaimSignerType;
  claimed_balance: CoinSDKType;
  claimed_supplier_stake: CoinSDKType;
  session_end_height: bigint;
  supplier?: SupplierSDKType;
}
/**
 * MsgRecoverMorseAccount is used to:
 * 
 * - Execute a one-time minting of tokens on Shannon based on tokens owned by the given Morse account
 * - Credit the minted tokens to the balance of the given Shannon account
 * - Migrate unclaimable staked and liquid Morse tokens as liquid Shannon tokens
 * 
 * - MAY ONLY be executed by the authority
 * - ONLY intended for use on accounts with invalid addresses and/or known lost private keys
 */
export interface MsgRecoverMorseAccount {
  /**
   * The bech32-encoded address of the migration module authority account ("gov" module address by default).
   * ONLY the authority, or its delegates, MAY recover Morse recoverable accounts.
   */
  authority: string;
  /**
   * The bech32-encoded address of the Shannon account to which the Morse account's stake(s) and/or
   * balance(s) will be minted (recovered) as liquid Shannon tokens.
   */
  shannonDestAddress: string;
  /**
   * EITHER:
   * - The hex-encoded address of the recoverable Morse account whose stake(s) and/or balance(s) will be recovered.
   *   This address MAY be invalid but NEVER empty.
   *   E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - The name of a Morse module account whose balance will be recovered.
   *   E.g. "dao" or "fee-collector"
   */
  morseSrcAddress: string;
}
export interface MsgRecoverMorseAccountProtoMsg {
  typeUrl: "/pocket.migration.MsgRecoverMorseAccount";
  value: Uint8Array;
}
/**
 * MsgRecoverMorseAccount is used to:
 * 
 * - Execute a one-time minting of tokens on Shannon based on tokens owned by the given Morse account
 * - Credit the minted tokens to the balance of the given Shannon account
 * - Migrate unclaimable staked and liquid Morse tokens as liquid Shannon tokens
 * 
 * - MAY ONLY be executed by the authority
 * - ONLY intended for use on accounts with invalid addresses and/or known lost private keys
 * @name MsgRecoverMorseAccountAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgRecoverMorseAccount
 */
export interface MsgRecoverMorseAccountAmino {
  /**
   * The bech32-encoded address of the migration module authority account ("gov" module address by default).
   * ONLY the authority, or its delegates, MAY recover Morse recoverable accounts.
   */
  authority: string;
  /**
   * The bech32-encoded address of the Shannon account to which the Morse account's stake(s) and/or
   * balance(s) will be minted (recovered) as liquid Shannon tokens.
   */
  shannon_dest_address: string;
  /**
   * EITHER:
   * - The hex-encoded address of the recoverable Morse account whose stake(s) and/or balance(s) will be recovered.
   *   This address MAY be invalid but NEVER empty.
   *   E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - The name of a Morse module account whose balance will be recovered.
   *   E.g. "dao" or "fee-collector"
   */
  morse_src_address: string;
}
export interface MsgRecoverMorseAccountAminoMsg {
  type: "/pocket.migration.MsgRecoverMorseAccount";
  value: MsgRecoverMorseAccountAmino;
}
/**
 * MsgRecoverMorseAccount is used to:
 * 
 * - Execute a one-time minting of tokens on Shannon based on tokens owned by the given Morse account
 * - Credit the minted tokens to the balance of the given Shannon account
 * - Migrate unclaimable staked and liquid Morse tokens as liquid Shannon tokens
 * 
 * - MAY ONLY be executed by the authority
 * - ONLY intended for use on accounts with invalid addresses and/or known lost private keys
 */
export interface MsgRecoverMorseAccountSDKType {
  authority: string;
  shannon_dest_address: string;
  morse_src_address: string;
}
/**
 * MsgRecoverMorseAccountResponse is returned from MsgRecoverMorseAccount.
 * 
 * - Indicates the morse_src_address of the recovered account
 * - Reports the sum of any actor stakes and unstaked balance recovered
 * - Reports the session end height in which the recovery was committed
 * - Returns the destination Shannon address
 */
export interface MsgRecoverMorseAccountResponse {
  /**
   * EITHER:
   * - The hex-encoded address of the Morse account whose stake(s) and/or balances were recovered.
   *   This address MAY be invalid but NEVER empty.
   *   E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - The name of a Morse module account whose balance was recovered.
   *   E.g. "dao" or "fee-collector"
   */
  morseSrcAddress: string;
  /** The sum of any unstaked and staked balances which were recovered. */
  recoveredBalance: Coin;
  /** The session end height (on Shannon) in which the recovery was committed (i.e. recovered). */
  sessionEndHeight: bigint;
  /**
   * The bech32-encoded address of the Shannon account to which the Morse account's stake(s) and/or
   * balance(s) were recovered.
   */
  shannonDestAddress: string;
}
export interface MsgRecoverMorseAccountResponseProtoMsg {
  typeUrl: "/pocket.migration.MsgRecoverMorseAccountResponse";
  value: Uint8Array;
}
/**
 * MsgRecoverMorseAccountResponse is returned from MsgRecoverMorseAccount.
 * 
 * - Indicates the morse_src_address of the recovered account
 * - Reports the sum of any actor stakes and unstaked balance recovered
 * - Reports the session end height in which the recovery was committed
 * - Returns the destination Shannon address
 * @name MsgRecoverMorseAccountResponseAmino
 * @package pocket.migration
 * @see proto type: pocket.migration.MsgRecoverMorseAccountResponse
 */
export interface MsgRecoverMorseAccountResponseAmino {
  /**
   * EITHER:
   * - The hex-encoded address of the Morse account whose stake(s) and/or balances were recovered.
   *   This address MAY be invalid but NEVER empty.
   *   E.g.: 00f9900606fa3d5c9179fc0c8513078a53a2073e
   * - The name of a Morse module account whose balance was recovered.
   *   E.g. "dao" or "fee-collector"
   */
  morse_src_address: string;
  /**
   * The sum of any unstaked and staked balances which were recovered.
   */
  recovered_balance: CoinAmino;
  /**
   * The session end height (on Shannon) in which the recovery was committed (i.e. recovered).
   */
  session_end_height: string;
  /**
   * The bech32-encoded address of the Shannon account to which the Morse account's stake(s) and/or
   * balance(s) were recovered.
   */
  shannon_dest_address: string;
}
export interface MsgRecoverMorseAccountResponseAminoMsg {
  type: "/pocket.migration.MsgRecoverMorseAccountResponse";
  value: MsgRecoverMorseAccountResponseAmino;
}
/**
 * MsgRecoverMorseAccountResponse is returned from MsgRecoverMorseAccount.
 * 
 * - Indicates the morse_src_address of the recovered account
 * - Reports the sum of any actor stakes and unstaked balance recovered
 * - Reports the session end height in which the recovery was committed
 * - Returns the destination Shannon address
 */
export interface MsgRecoverMorseAccountResponseSDKType {
  morse_src_address: string;
  recovered_balance: CoinSDKType;
  session_end_height: bigint;
  shannon_dest_address: string;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pocket.migration.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "pocket/x/migration/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pocket.migration.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgImportMorseClaimableAccounts(): MsgImportMorseClaimableAccounts {
  return {
    authority: "",
    morseAccountState: MorseAccountState.fromPartial({}),
    morseAccountStateHash: new Uint8Array()
  };
}
export const MsgImportMorseClaimableAccounts = {
  typeUrl: "/pocket.migration.MsgImportMorseClaimableAccounts",
  encode(message: MsgImportMorseClaimableAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.morseAccountState !== undefined) {
      MorseAccountState.encode(message.morseAccountState, writer.uint32(18).fork()).ldelim();
    }
    if (message.morseAccountStateHash.length !== 0) {
      writer.uint32(26).bytes(message.morseAccountStateHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgImportMorseClaimableAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgImportMorseClaimableAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.morseAccountState = MorseAccountState.decode(reader, reader.uint32());
          break;
        case 3:
          message.morseAccountStateHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgImportMorseClaimableAccounts>): MsgImportMorseClaimableAccounts {
    const message = createBaseMsgImportMorseClaimableAccounts();
    message.authority = object.authority ?? "";
    message.morseAccountState = object.morseAccountState !== undefined && object.morseAccountState !== null ? MorseAccountState.fromPartial(object.morseAccountState) : undefined;
    message.morseAccountStateHash = object.morseAccountStateHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgImportMorseClaimableAccountsAmino): MsgImportMorseClaimableAccounts {
    const message = createBaseMsgImportMorseClaimableAccounts();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.morse_account_state !== undefined && object.morse_account_state !== null) {
      message.morseAccountState = MorseAccountState.fromAmino(object.morse_account_state);
    }
    if (object.morse_account_state_hash !== undefined && object.morse_account_state_hash !== null) {
      message.morseAccountStateHash = bytesFromBase64(object.morse_account_state_hash);
    }
    return message;
  },
  toAmino(message: MsgImportMorseClaimableAccounts): MsgImportMorseClaimableAccountsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.morse_account_state = message.morseAccountState ? MorseAccountState.toAmino(message.morseAccountState) : MorseAccountState.toAmino(MorseAccountState.fromPartial({}));
    obj.morse_account_state_hash = message.morseAccountStateHash ? base64FromBytes(message.morseAccountStateHash) : "";
    return obj;
  },
  fromAminoMsg(object: MsgImportMorseClaimableAccountsAminoMsg): MsgImportMorseClaimableAccounts {
    return MsgImportMorseClaimableAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgImportMorseClaimableAccountsProtoMsg): MsgImportMorseClaimableAccounts {
    return MsgImportMorseClaimableAccounts.decode(message.value);
  },
  toProto(message: MsgImportMorseClaimableAccounts): Uint8Array {
    return MsgImportMorseClaimableAccounts.encode(message).finish();
  },
  toProtoMsg(message: MsgImportMorseClaimableAccounts): MsgImportMorseClaimableAccountsProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgImportMorseClaimableAccounts",
      value: MsgImportMorseClaimableAccounts.encode(message).finish()
    };
  }
};
function createBaseMsgImportMorseClaimableAccountsResponse(): MsgImportMorseClaimableAccountsResponse {
  return {
    stateHash: new Uint8Array(),
    numAccounts: BigInt(0)
  };
}
export const MsgImportMorseClaimableAccountsResponse = {
  typeUrl: "/pocket.migration.MsgImportMorseClaimableAccountsResponse",
  encode(message: MsgImportMorseClaimableAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stateHash.length !== 0) {
      writer.uint32(10).bytes(message.stateHash);
    }
    if (message.numAccounts !== BigInt(0)) {
      writer.uint32(16).uint64(message.numAccounts);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgImportMorseClaimableAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgImportMorseClaimableAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stateHash = reader.bytes();
          break;
        case 2:
          message.numAccounts = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgImportMorseClaimableAccountsResponse>): MsgImportMorseClaimableAccountsResponse {
    const message = createBaseMsgImportMorseClaimableAccountsResponse();
    message.stateHash = object.stateHash ?? new Uint8Array();
    message.numAccounts = object.numAccounts !== undefined && object.numAccounts !== null ? BigInt(object.numAccounts.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgImportMorseClaimableAccountsResponseAmino): MsgImportMorseClaimableAccountsResponse {
    const message = createBaseMsgImportMorseClaimableAccountsResponse();
    if (object.state_hash !== undefined && object.state_hash !== null) {
      message.stateHash = bytesFromBase64(object.state_hash);
    }
    if (object.num_accounts !== undefined && object.num_accounts !== null) {
      message.numAccounts = BigInt(object.num_accounts);
    }
    return message;
  },
  toAmino(message: MsgImportMorseClaimableAccountsResponse): MsgImportMorseClaimableAccountsResponseAmino {
    const obj: any = {};
    obj.state_hash = message.stateHash ? base64FromBytes(message.stateHash) : "";
    obj.num_accounts = message.numAccounts ? message.numAccounts?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgImportMorseClaimableAccountsResponseAminoMsg): MsgImportMorseClaimableAccountsResponse {
    return MsgImportMorseClaimableAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgImportMorseClaimableAccountsResponseProtoMsg): MsgImportMorseClaimableAccountsResponse {
    return MsgImportMorseClaimableAccountsResponse.decode(message.value);
  },
  toProto(message: MsgImportMorseClaimableAccountsResponse): Uint8Array {
    return MsgImportMorseClaimableAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgImportMorseClaimableAccountsResponse): MsgImportMorseClaimableAccountsResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgImportMorseClaimableAccountsResponse",
      value: MsgImportMorseClaimableAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimMorseAccount(): MsgClaimMorseAccount {
  return {
    shannonSigningAddress: "",
    shannonDestAddress: "",
    morsePublicKey: new Uint8Array(),
    morseSignature: new Uint8Array()
  };
}
export const MsgClaimMorseAccount = {
  typeUrl: "/pocket.migration.MsgClaimMorseAccount",
  encode(message: MsgClaimMorseAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shannonSigningAddress !== "") {
      writer.uint32(34).string(message.shannonSigningAddress);
    }
    if (message.shannonDestAddress !== "") {
      writer.uint32(10).string(message.shannonDestAddress);
    }
    if (message.morsePublicKey.length !== 0) {
      writer.uint32(42).bytes(message.morsePublicKey);
    }
    if (message.morseSignature.length !== 0) {
      writer.uint32(26).bytes(message.morseSignature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimMorseAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMorseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.shannonSigningAddress = reader.string();
          break;
        case 1:
          message.shannonDestAddress = reader.string();
          break;
        case 5:
          message.morsePublicKey = reader.bytes();
          break;
        case 3:
          message.morseSignature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimMorseAccount>): MsgClaimMorseAccount {
    const message = createBaseMsgClaimMorseAccount();
    message.shannonSigningAddress = object.shannonSigningAddress ?? "";
    message.shannonDestAddress = object.shannonDestAddress ?? "";
    message.morsePublicKey = object.morsePublicKey ?? new Uint8Array();
    message.morseSignature = object.morseSignature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgClaimMorseAccountAmino): MsgClaimMorseAccount {
    const message = createBaseMsgClaimMorseAccount();
    if (object.shannon_signing_address !== undefined && object.shannon_signing_address !== null) {
      message.shannonSigningAddress = object.shannon_signing_address;
    }
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    if (object.morse_public_key !== undefined && object.morse_public_key !== null) {
      message.morsePublicKey = bytesFromBase64(object.morse_public_key);
    }
    if (object.morse_signature !== undefined && object.morse_signature !== null) {
      message.morseSignature = bytesFromBase64(object.morse_signature);
    }
    return message;
  },
  toAmino(message: MsgClaimMorseAccount): MsgClaimMorseAccountAmino {
    const obj: any = {};
    obj.shannon_signing_address = message.shannonSigningAddress ?? "";
    obj.shannon_dest_address = message.shannonDestAddress ?? "";
    obj.morse_public_key = message.morsePublicKey ? base64FromBytes(message.morsePublicKey) : undefined;
    obj.morse_signature = message.morseSignature ? base64FromBytes(message.morseSignature) : "";
    return obj;
  },
  fromAminoMsg(object: MsgClaimMorseAccountAminoMsg): MsgClaimMorseAccount {
    return MsgClaimMorseAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimMorseAccountProtoMsg): MsgClaimMorseAccount {
    return MsgClaimMorseAccount.decode(message.value);
  },
  toProto(message: MsgClaimMorseAccount): Uint8Array {
    return MsgClaimMorseAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimMorseAccount): MsgClaimMorseAccountProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgClaimMorseAccount",
      value: MsgClaimMorseAccount.encode(message).finish()
    };
  }
};
function createBaseMsgClaimMorseAccountResponse(): MsgClaimMorseAccountResponse {
  return {
    morseSrcAddress: "",
    claimedBalance: Coin.fromPartial({}),
    sessionEndHeight: BigInt(0)
  };
}
export const MsgClaimMorseAccountResponse = {
  typeUrl: "/pocket.migration.MsgClaimMorseAccountResponse",
  encode(message: MsgClaimMorseAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.morseSrcAddress !== "") {
      writer.uint32(10).string(message.morseSrcAddress);
    }
    if (message.claimedBalance !== undefined) {
      Coin.encode(message.claimedBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimMorseAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMorseAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.morseSrcAddress = reader.string();
          break;
        case 2:
          message.claimedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.sessionEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimMorseAccountResponse>): MsgClaimMorseAccountResponse {
    const message = createBaseMsgClaimMorseAccountResponse();
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    message.claimedBalance = object.claimedBalance !== undefined && object.claimedBalance !== null ? Coin.fromPartial(object.claimedBalance) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimMorseAccountResponseAmino): MsgClaimMorseAccountResponse {
    const message = createBaseMsgClaimMorseAccountResponse();
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    if (object.claimed_balance !== undefined && object.claimed_balance !== null) {
      message.claimedBalance = Coin.fromAmino(object.claimed_balance);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    return message;
  },
  toAmino(message: MsgClaimMorseAccountResponse): MsgClaimMorseAccountResponseAmino {
    const obj: any = {};
    obj.morse_src_address = message.morseSrcAddress ?? "";
    obj.claimed_balance = message.claimedBalance ? Coin.toAmino(message.claimedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: MsgClaimMorseAccountResponseAminoMsg): MsgClaimMorseAccountResponse {
    return MsgClaimMorseAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimMorseAccountResponseProtoMsg): MsgClaimMorseAccountResponse {
    return MsgClaimMorseAccountResponse.decode(message.value);
  },
  toProto(message: MsgClaimMorseAccountResponse): Uint8Array {
    return MsgClaimMorseAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimMorseAccountResponse): MsgClaimMorseAccountResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgClaimMorseAccountResponse",
      value: MsgClaimMorseAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimMorseApplication(): MsgClaimMorseApplication {
  return {
    shannonSigningAddress: "",
    shannonDestAddress: "",
    morsePublicKey: new Uint8Array(),
    morseSignature: new Uint8Array(),
    serviceConfig: undefined
  };
}
export const MsgClaimMorseApplication = {
  typeUrl: "/pocket.migration.MsgClaimMorseApplication",
  encode(message: MsgClaimMorseApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shannonSigningAddress !== "") {
      writer.uint32(42).string(message.shannonSigningAddress);
    }
    if (message.shannonDestAddress !== "") {
      writer.uint32(10).string(message.shannonDestAddress);
    }
    if (message.morsePublicKey.length !== 0) {
      writer.uint32(50).bytes(message.morsePublicKey);
    }
    if (message.morseSignature.length !== 0) {
      writer.uint32(26).bytes(message.morseSignature);
    }
    if (message.serviceConfig !== undefined) {
      ApplicationServiceConfig.encode(message.serviceConfig, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimMorseApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMorseApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.shannonSigningAddress = reader.string();
          break;
        case 1:
          message.shannonDestAddress = reader.string();
          break;
        case 6:
          message.morsePublicKey = reader.bytes();
          break;
        case 3:
          message.morseSignature = reader.bytes();
          break;
        case 4:
          message.serviceConfig = ApplicationServiceConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimMorseApplication>): MsgClaimMorseApplication {
    const message = createBaseMsgClaimMorseApplication();
    message.shannonSigningAddress = object.shannonSigningAddress ?? "";
    message.shannonDestAddress = object.shannonDestAddress ?? "";
    message.morsePublicKey = object.morsePublicKey ?? new Uint8Array();
    message.morseSignature = object.morseSignature ?? new Uint8Array();
    message.serviceConfig = object.serviceConfig !== undefined && object.serviceConfig !== null ? ApplicationServiceConfig.fromPartial(object.serviceConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimMorseApplicationAmino): MsgClaimMorseApplication {
    const message = createBaseMsgClaimMorseApplication();
    if (object.shannon_signing_address !== undefined && object.shannon_signing_address !== null) {
      message.shannonSigningAddress = object.shannon_signing_address;
    }
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    if (object.morse_public_key !== undefined && object.morse_public_key !== null) {
      message.morsePublicKey = bytesFromBase64(object.morse_public_key);
    }
    if (object.morse_signature !== undefined && object.morse_signature !== null) {
      message.morseSignature = bytesFromBase64(object.morse_signature);
    }
    if (object.service_config !== undefined && object.service_config !== null) {
      message.serviceConfig = ApplicationServiceConfig.fromAmino(object.service_config);
    }
    return message;
  },
  toAmino(message: MsgClaimMorseApplication): MsgClaimMorseApplicationAmino {
    const obj: any = {};
    obj.shannon_signing_address = message.shannonSigningAddress ?? "";
    obj.shannon_dest_address = message.shannonDestAddress ?? "";
    obj.morse_public_key = message.morsePublicKey ? base64FromBytes(message.morsePublicKey) : undefined;
    obj.morse_signature = message.morseSignature ? base64FromBytes(message.morseSignature) : "";
    obj.service_config = message.serviceConfig ? ApplicationServiceConfig.toAmino(message.serviceConfig) : ApplicationServiceConfig.toAmino(ApplicationServiceConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgClaimMorseApplicationAminoMsg): MsgClaimMorseApplication {
    return MsgClaimMorseApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimMorseApplicationProtoMsg): MsgClaimMorseApplication {
    return MsgClaimMorseApplication.decode(message.value);
  },
  toProto(message: MsgClaimMorseApplication): Uint8Array {
    return MsgClaimMorseApplication.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimMorseApplication): MsgClaimMorseApplicationProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgClaimMorseApplication",
      value: MsgClaimMorseApplication.encode(message).finish()
    };
  }
};
function createBaseMsgClaimMorseApplicationResponse(): MsgClaimMorseApplicationResponse {
  return {
    morseSrcAddress: "",
    claimedBalance: Coin.fromPartial({}),
    claimedApplicationStake: Coin.fromPartial({}),
    sessionEndHeight: BigInt(0),
    application: undefined
  };
}
export const MsgClaimMorseApplicationResponse = {
  typeUrl: "/pocket.migration.MsgClaimMorseApplicationResponse",
  encode(message: MsgClaimMorseApplicationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.morseSrcAddress !== "") {
      writer.uint32(10).string(message.morseSrcAddress);
    }
    if (message.claimedBalance !== undefined) {
      Coin.encode(message.claimedBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.claimedApplicationStake !== undefined) {
      Coin.encode(message.claimedApplicationStake, writer.uint32(26).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.sessionEndHeight);
    }
    if (message.application !== undefined) {
      Application.encode(message.application, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimMorseApplicationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMorseApplicationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.morseSrcAddress = reader.string();
          break;
        case 2:
          message.claimedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.claimedApplicationStake = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sessionEndHeight = reader.int64();
          break;
        case 5:
          message.application = Application.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimMorseApplicationResponse>): MsgClaimMorseApplicationResponse {
    const message = createBaseMsgClaimMorseApplicationResponse();
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    message.claimedBalance = object.claimedBalance !== undefined && object.claimedBalance !== null ? Coin.fromPartial(object.claimedBalance) : undefined;
    message.claimedApplicationStake = object.claimedApplicationStake !== undefined && object.claimedApplicationStake !== null ? Coin.fromPartial(object.claimedApplicationStake) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.application = object.application !== undefined && object.application !== null ? Application.fromPartial(object.application) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimMorseApplicationResponseAmino): MsgClaimMorseApplicationResponse {
    const message = createBaseMsgClaimMorseApplicationResponse();
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    if (object.claimed_balance !== undefined && object.claimed_balance !== null) {
      message.claimedBalance = Coin.fromAmino(object.claimed_balance);
    }
    if (object.claimedApplicationStake !== undefined && object.claimedApplicationStake !== null) {
      message.claimedApplicationStake = Coin.fromAmino(object.claimedApplicationStake);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = Application.fromAmino(object.application);
    }
    return message;
  },
  toAmino(message: MsgClaimMorseApplicationResponse): MsgClaimMorseApplicationResponseAmino {
    const obj: any = {};
    obj.morse_src_address = message.morseSrcAddress ?? "";
    obj.claimed_balance = message.claimedBalance ? Coin.toAmino(message.claimedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.claimedApplicationStake = message.claimedApplicationStake ? Coin.toAmino(message.claimedApplicationStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.application = message.application ? Application.toAmino(message.application) : Application.toAmino(Application.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgClaimMorseApplicationResponseAminoMsg): MsgClaimMorseApplicationResponse {
    return MsgClaimMorseApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimMorseApplicationResponseProtoMsg): MsgClaimMorseApplicationResponse {
    return MsgClaimMorseApplicationResponse.decode(message.value);
  },
  toProto(message: MsgClaimMorseApplicationResponse): Uint8Array {
    return MsgClaimMorseApplicationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimMorseApplicationResponse): MsgClaimMorseApplicationResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgClaimMorseApplicationResponse",
      value: MsgClaimMorseApplicationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimMorseSupplier(): MsgClaimMorseSupplier {
  return {
    shannonSigningAddress: "",
    shannonOwnerAddress: "",
    shannonOperatorAddress: "",
    morseNodeAddress: "",
    morsePublicKey: new Uint8Array(),
    morseSignature: new Uint8Array(),
    signerIsOutputAddress: false,
    services: []
  };
}
export const MsgClaimMorseSupplier = {
  typeUrl: "/pocket.migration.MsgClaimMorseSupplier",
  encode(message: MsgClaimMorseSupplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shannonSigningAddress !== "") {
      writer.uint32(50).string(message.shannonSigningAddress);
    }
    if (message.shannonOwnerAddress !== "") {
      writer.uint32(10).string(message.shannonOwnerAddress);
    }
    if (message.shannonOperatorAddress !== "") {
      writer.uint32(18).string(message.shannonOperatorAddress);
    }
    if (message.morseNodeAddress !== "") {
      writer.uint32(26).string(message.morseNodeAddress);
    }
    if (message.morsePublicKey.length !== 0) {
      writer.uint32(58).bytes(message.morsePublicKey);
    }
    if (message.morseSignature.length !== 0) {
      writer.uint32(34).bytes(message.morseSignature);
    }
    if (message.signerIsOutputAddress === true) {
      writer.uint32(64).bool(message.signerIsOutputAddress);
    }
    for (const v of message.services) {
      SupplierServiceConfig.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimMorseSupplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMorseSupplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.shannonSigningAddress = reader.string();
          break;
        case 1:
          message.shannonOwnerAddress = reader.string();
          break;
        case 2:
          message.shannonOperatorAddress = reader.string();
          break;
        case 3:
          message.morseNodeAddress = reader.string();
          break;
        case 7:
          message.morsePublicKey = reader.bytes();
          break;
        case 4:
          message.morseSignature = reader.bytes();
          break;
        case 8:
          message.signerIsOutputAddress = reader.bool();
          break;
        case 5:
          message.services.push(SupplierServiceConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimMorseSupplier>): MsgClaimMorseSupplier {
    const message = createBaseMsgClaimMorseSupplier();
    message.shannonSigningAddress = object.shannonSigningAddress ?? "";
    message.shannonOwnerAddress = object.shannonOwnerAddress ?? "";
    message.shannonOperatorAddress = object.shannonOperatorAddress ?? "";
    message.morseNodeAddress = object.morseNodeAddress ?? "";
    message.morsePublicKey = object.morsePublicKey ?? new Uint8Array();
    message.morseSignature = object.morseSignature ?? new Uint8Array();
    message.signerIsOutputAddress = object.signerIsOutputAddress ?? false;
    message.services = object.services?.map(e => SupplierServiceConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimMorseSupplierAmino): MsgClaimMorseSupplier {
    const message = createBaseMsgClaimMorseSupplier();
    if (object.shannon_signing_address !== undefined && object.shannon_signing_address !== null) {
      message.shannonSigningAddress = object.shannon_signing_address;
    }
    if (object.shannon_owner_address !== undefined && object.shannon_owner_address !== null) {
      message.shannonOwnerAddress = object.shannon_owner_address;
    }
    if (object.shannon_operator_address !== undefined && object.shannon_operator_address !== null) {
      message.shannonOperatorAddress = object.shannon_operator_address;
    }
    if (object.morse_node_address !== undefined && object.morse_node_address !== null) {
      message.morseNodeAddress = object.morse_node_address;
    }
    if (object.morse_public_key !== undefined && object.morse_public_key !== null) {
      message.morsePublicKey = bytesFromBase64(object.morse_public_key);
    }
    if (object.morse_signature !== undefined && object.morse_signature !== null) {
      message.morseSignature = bytesFromBase64(object.morse_signature);
    }
    if (object.signer_is_output_address !== undefined && object.signer_is_output_address !== null) {
      message.signerIsOutputAddress = object.signer_is_output_address;
    }
    message.services = object.services?.map(e => SupplierServiceConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimMorseSupplier): MsgClaimMorseSupplierAmino {
    const obj: any = {};
    obj.shannon_signing_address = message.shannonSigningAddress ?? "";
    obj.shannon_owner_address = message.shannonOwnerAddress ?? "";
    obj.shannon_operator_address = message.shannonOperatorAddress ?? "";
    obj.morse_node_address = message.morseNodeAddress ?? "";
    obj.morse_public_key = message.morsePublicKey ? base64FromBytes(message.morsePublicKey) : "";
    obj.morse_signature = message.morseSignature ? base64FromBytes(message.morseSignature) : "";
    obj.signer_is_output_address = message.signerIsOutputAddress ?? false;
    if (message.services) {
      obj.services = message.services.map(e => e ? SupplierServiceConfig.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimMorseSupplierAminoMsg): MsgClaimMorseSupplier {
    return MsgClaimMorseSupplier.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimMorseSupplierProtoMsg): MsgClaimMorseSupplier {
    return MsgClaimMorseSupplier.decode(message.value);
  },
  toProto(message: MsgClaimMorseSupplier): Uint8Array {
    return MsgClaimMorseSupplier.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimMorseSupplier): MsgClaimMorseSupplierProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgClaimMorseSupplier",
      value: MsgClaimMorseSupplier.encode(message).finish()
    };
  }
};
function createBaseMsgClaimMorseSupplierResponse(): MsgClaimMorseSupplierResponse {
  return {
    morseNodeAddress: "",
    morseOutputAddress: "",
    claimSignerType: 0,
    claimedBalance: Coin.fromPartial({}),
    claimedSupplierStake: Coin.fromPartial({}),
    sessionEndHeight: BigInt(0),
    supplier: undefined
  };
}
export const MsgClaimMorseSupplierResponse = {
  typeUrl: "/pocket.migration.MsgClaimMorseSupplierResponse",
  encode(message: MsgClaimMorseSupplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.morseNodeAddress !== "") {
      writer.uint32(74).string(message.morseNodeAddress);
    }
    if (message.morseOutputAddress !== "") {
      writer.uint32(66).string(message.morseOutputAddress);
    }
    if (message.claimSignerType !== 0) {
      writer.uint32(56).int32(message.claimSignerType);
    }
    if (message.claimedBalance !== undefined) {
      Coin.encode(message.claimedBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.claimedSupplierStake !== undefined) {
      Coin.encode(message.claimedSupplierStake, writer.uint32(26).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.sessionEndHeight);
    }
    if (message.supplier !== undefined) {
      Supplier.encode(message.supplier, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimMorseSupplierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimMorseSupplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.morseNodeAddress = reader.string();
          break;
        case 8:
          message.morseOutputAddress = reader.string();
          break;
        case 7:
          message.claimSignerType = reader.int32() as any;
          break;
        case 2:
          message.claimedBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.claimedSupplierStake = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sessionEndHeight = reader.int64();
          break;
        case 5:
          message.supplier = Supplier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimMorseSupplierResponse>): MsgClaimMorseSupplierResponse {
    const message = createBaseMsgClaimMorseSupplierResponse();
    message.morseNodeAddress = object.morseNodeAddress ?? "";
    message.morseOutputAddress = object.morseOutputAddress ?? "";
    message.claimSignerType = object.claimSignerType ?? 0;
    message.claimedBalance = object.claimedBalance !== undefined && object.claimedBalance !== null ? Coin.fromPartial(object.claimedBalance) : undefined;
    message.claimedSupplierStake = object.claimedSupplierStake !== undefined && object.claimedSupplierStake !== null ? Coin.fromPartial(object.claimedSupplierStake) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.supplier = object.supplier !== undefined && object.supplier !== null ? Supplier.fromPartial(object.supplier) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimMorseSupplierResponseAmino): MsgClaimMorseSupplierResponse {
    const message = createBaseMsgClaimMorseSupplierResponse();
    if (object.morse_node_address !== undefined && object.morse_node_address !== null) {
      message.morseNodeAddress = object.morse_node_address;
    }
    if (object.morse_output_address !== undefined && object.morse_output_address !== null) {
      message.morseOutputAddress = object.morse_output_address;
    }
    if (object.claim_signer_type !== undefined && object.claim_signer_type !== null) {
      message.claimSignerType = object.claim_signer_type;
    }
    if (object.claimed_balance !== undefined && object.claimed_balance !== null) {
      message.claimedBalance = Coin.fromAmino(object.claimed_balance);
    }
    if (object.claimed_supplier_stake !== undefined && object.claimed_supplier_stake !== null) {
      message.claimedSupplierStake = Coin.fromAmino(object.claimed_supplier_stake);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.supplier !== undefined && object.supplier !== null) {
      message.supplier = Supplier.fromAmino(object.supplier);
    }
    return message;
  },
  toAmino(message: MsgClaimMorseSupplierResponse): MsgClaimMorseSupplierResponseAmino {
    const obj: any = {};
    obj.morse_node_address = message.morseNodeAddress ?? "";
    obj.morse_output_address = message.morseOutputAddress ?? "";
    obj.claim_signer_type = message.claimSignerType ?? 0;
    obj.claimed_balance = message.claimedBalance ? Coin.toAmino(message.claimedBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.claimed_supplier_stake = message.claimedSupplierStake ? Coin.toAmino(message.claimedSupplierStake) : Coin.toAmino(Coin.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.supplier = message.supplier ? Supplier.toAmino(message.supplier) : Supplier.toAmino(Supplier.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgClaimMorseSupplierResponseAminoMsg): MsgClaimMorseSupplierResponse {
    return MsgClaimMorseSupplierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimMorseSupplierResponseProtoMsg): MsgClaimMorseSupplierResponse {
    return MsgClaimMorseSupplierResponse.decode(message.value);
  },
  toProto(message: MsgClaimMorseSupplierResponse): Uint8Array {
    return MsgClaimMorseSupplierResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimMorseSupplierResponse): MsgClaimMorseSupplierResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgClaimMorseSupplierResponse",
      value: MsgClaimMorseSupplierResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverMorseAccount(): MsgRecoverMorseAccount {
  return {
    authority: "",
    shannonDestAddress: "",
    morseSrcAddress: ""
  };
}
export const MsgRecoverMorseAccount = {
  typeUrl: "/pocket.migration.MsgRecoverMorseAccount",
  encode(message: MsgRecoverMorseAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.shannonDestAddress !== "") {
      writer.uint32(18).string(message.shannonDestAddress);
    }
    if (message.morseSrcAddress !== "") {
      writer.uint32(26).string(message.morseSrcAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverMorseAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverMorseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.shannonDestAddress = reader.string();
          break;
        case 3:
          message.morseSrcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecoverMorseAccount>): MsgRecoverMorseAccount {
    const message = createBaseMsgRecoverMorseAccount();
    message.authority = object.authority ?? "";
    message.shannonDestAddress = object.shannonDestAddress ?? "";
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRecoverMorseAccountAmino): MsgRecoverMorseAccount {
    const message = createBaseMsgRecoverMorseAccount();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    return message;
  },
  toAmino(message: MsgRecoverMorseAccount): MsgRecoverMorseAccountAmino {
    const obj: any = {};
    obj.authority = message.authority ?? "";
    obj.shannon_dest_address = message.shannonDestAddress ?? "";
    obj.morse_src_address = message.morseSrcAddress ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgRecoverMorseAccountAminoMsg): MsgRecoverMorseAccount {
    return MsgRecoverMorseAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecoverMorseAccountProtoMsg): MsgRecoverMorseAccount {
    return MsgRecoverMorseAccount.decode(message.value);
  },
  toProto(message: MsgRecoverMorseAccount): Uint8Array {
    return MsgRecoverMorseAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverMorseAccount): MsgRecoverMorseAccountProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgRecoverMorseAccount",
      value: MsgRecoverMorseAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverMorseAccountResponse(): MsgRecoverMorseAccountResponse {
  return {
    morseSrcAddress: "",
    recoveredBalance: Coin.fromPartial({}),
    sessionEndHeight: BigInt(0),
    shannonDestAddress: ""
  };
}
export const MsgRecoverMorseAccountResponse = {
  typeUrl: "/pocket.migration.MsgRecoverMorseAccountResponse",
  encode(message: MsgRecoverMorseAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.morseSrcAddress !== "") {
      writer.uint32(10).string(message.morseSrcAddress);
    }
    if (message.recoveredBalance !== undefined) {
      Coin.encode(message.recoveredBalance, writer.uint32(18).fork()).ldelim();
    }
    if (message.sessionEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.sessionEndHeight);
    }
    if (message.shannonDestAddress !== "") {
      writer.uint32(34).string(message.shannonDestAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverMorseAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverMorseAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.morseSrcAddress = reader.string();
          break;
        case 2:
          message.recoveredBalance = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.sessionEndHeight = reader.int64();
          break;
        case 4:
          message.shannonDestAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRecoverMorseAccountResponse>): MsgRecoverMorseAccountResponse {
    const message = createBaseMsgRecoverMorseAccountResponse();
    message.morseSrcAddress = object.morseSrcAddress ?? "";
    message.recoveredBalance = object.recoveredBalance !== undefined && object.recoveredBalance !== null ? Coin.fromPartial(object.recoveredBalance) : undefined;
    message.sessionEndHeight = object.sessionEndHeight !== undefined && object.sessionEndHeight !== null ? BigInt(object.sessionEndHeight.toString()) : BigInt(0);
    message.shannonDestAddress = object.shannonDestAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRecoverMorseAccountResponseAmino): MsgRecoverMorseAccountResponse {
    const message = createBaseMsgRecoverMorseAccountResponse();
    if (object.morse_src_address !== undefined && object.morse_src_address !== null) {
      message.morseSrcAddress = object.morse_src_address;
    }
    if (object.recovered_balance !== undefined && object.recovered_balance !== null) {
      message.recoveredBalance = Coin.fromAmino(object.recovered_balance);
    }
    if (object.session_end_height !== undefined && object.session_end_height !== null) {
      message.sessionEndHeight = BigInt(object.session_end_height);
    }
    if (object.shannon_dest_address !== undefined && object.shannon_dest_address !== null) {
      message.shannonDestAddress = object.shannon_dest_address;
    }
    return message;
  },
  toAmino(message: MsgRecoverMorseAccountResponse): MsgRecoverMorseAccountResponseAmino {
    const obj: any = {};
    obj.morse_src_address = message.morseSrcAddress ?? "";
    obj.recovered_balance = message.recoveredBalance ? Coin.toAmino(message.recoveredBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.session_end_height = message.sessionEndHeight ? message.sessionEndHeight?.toString() : "0";
    obj.shannon_dest_address = message.shannonDestAddress ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgRecoverMorseAccountResponseAminoMsg): MsgRecoverMorseAccountResponse {
    return MsgRecoverMorseAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecoverMorseAccountResponseProtoMsg): MsgRecoverMorseAccountResponse {
    return MsgRecoverMorseAccountResponse.decode(message.value);
  },
  toProto(message: MsgRecoverMorseAccountResponse): Uint8Array {
    return MsgRecoverMorseAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverMorseAccountResponse): MsgRecoverMorseAccountResponseProtoMsg {
    return {
      typeUrl: "/pocket.migration.MsgRecoverMorseAccountResponse",
      value: MsgRecoverMorseAccountResponse.encode(message).finish()
    };
  }
};