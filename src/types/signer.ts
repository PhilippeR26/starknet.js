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
  hash: string,
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

export type AbstractionAccountDeployFunctionHash = (
  {
    classHash,
    contractAddress,
    constructorCalldata,
    addressSalt,
    maxFee,
    version,
    chainId,
    nonce,
  }: DeployAccountSignerDetails,
  ...additionalParams: BigNumberish[]
) => Signature;
export interface AbstractionHashs {
  abstractedTransactionHash?: Function;
  abstractedAccountDeployHash?: Function;
  abstractedContractDeployHash?: Function;
  abstractedMessageHash?: Function;
  abstractedDeclareHash?: Function;
}

export interface AbstractionFunction {
  sign?: AbstractionSigns;
  hash?: AbstractionHashs;
}

export type DeployAccountSignerDetails = Required<DeployAccountContractPayload> &
  Required<InvocationsDetails> & {
    contractAddress: BigNumberish;
    chainId: StarknetChainId;
  };
