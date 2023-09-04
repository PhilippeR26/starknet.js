import { StarknetChainId } from '../constants';
import {
  BigNumberish,
  CairoVersion,
  DeployAccountContractPayload,
  InvocationsDetails,
  Signature,
} from './lib';

export interface InvocationsSignerDetails extends Required<InvocationsDetails> {
  walletAddress: string;
  chainId: StarknetChainId;
  cairoVersion: CairoVersion;
}

export interface DeclareSignerDetails {
  classHash: string;
  senderAddress: string;
  chainId: StarknetChainId;
  maxFee: BigNumberish;
  version: BigNumberish;
  nonce: BigNumberish;
  compiledClassHash?: string;
}

export type AbstractionAccountDeployFunctionSign = (
  standardInputData: DeployAccountSignerDetails,
  privateKey: string,
  ...additionalParams: string[]
) => Signature;

export interface AbstractionSigns {
  abstractedTransactionSign?: Function;
  abstractedDeployAccountSign?: AbstractionAccountDeployFunctionSign;
  abstractedDeployContractSign?: Function;
  abstractedMessageSign?: Function;
  abstractedDeclareSign?: Function;
}

export type DeployAccountSignerDetails = Required<DeployAccountContractPayload> &
  Required<InvocationsDetails> & {
    contractAddress: BigNumberish;
    chainId: StarknetChainId;
  };
