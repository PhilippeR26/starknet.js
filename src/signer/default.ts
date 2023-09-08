import {
  Abi,
  AbstractionFunction,
  Call,
  DeclareSignerDetails,
  DeployAccountSignerDetails,
  InvocationsSignerDetails,
  Signature,
  TypedData,
} from '../types';
import { CallData } from '../utils/calldata';
import { starkCurve } from '../utils/ec';
import { buf2hex } from '../utils/encode';
import {
  calculateDeclareTransactionHash,
  calculateDeployAccountTransactionHash,
  calculateTransactionHash,
} from '../utils/hash';
import { toHex } from '../utils/num';
import { getExecuteCalldata } from '../utils/transaction';
import { getMessageHash } from '../utils/typedData';
import { SignerInterface } from './interface';

export class Signer implements SignerInterface {
  protected pk: Uint8Array | string;

  public abstractionFunctions: AbstractionFunction | undefined;

  /**
   * Creation of a Signer Object
   * @param pk Private key : string or Uint8Array
   */
  constructor(
    pk: Uint8Array | string = starkCurve.utils.randomPrivateKey(),
    abstractedFns?: AbstractionFunction
  ) {
    this.pk = pk instanceof Uint8Array ? buf2hex(pk) : toHex(pk);
    this.abstractionFunctions = abstractedFns;
  }

  public async getPubKey(): Promise<string> {
    return starkCurve.getStarkKey(this.pk);
  }

  public async signMessage(typedData: TypedData, accountAddress: string): Promise<Signature> {
    const msgHash = getMessageHash(typedData, accountAddress);
    return starkCurve.sign(msgHash, this.pk);
  }

  public async signTransaction(
    transactions: Call[],
    transactionsDetail: InvocationsSignerDetails,
    abis?: Abi[]
  ): Promise<Signature> {
    if (abis && abis.length !== transactions.length) {
      throw new Error('ABI must be provided for each transaction or no transaction');
    }
    // now use abi to display decoded data somewhere, but as this signer is headless, we can't do that

    const calldata = getExecuteCalldata(transactions, transactionsDetail.cairoVersion);

    const msgHash = calculateTransactionHash(
      transactionsDetail.walletAddress,
      transactionsDetail.version,
      calldata,
      transactionsDetail.maxFee,
      transactionsDetail.chainId,
      transactionsDetail.nonce
    );

    return starkCurve.sign(msgHash, this.pk);
  }

  public async signDeployAccountTransaction(
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
    ...addsAbstraction: string[]
  ): Promise<Signature> {
    let msgHash: string;
    if (!this.abstractionFunctions?.hash?.abstractedAccountDeployHash) {
      msgHash = calculateDeployAccountTransactionHash(
        contractAddress,
        classHash,
        CallData.compile(constructorCalldata),
        addressSalt,
        version,
        maxFee,
        chainId,
        nonce
      );
    } else {
      msgHash = this.abstractionFunctions.hash.abstractedAccountDeployHash();
    }
    if (!this.abstractionFunctions?.sign?.abstractedDeployAccountSign) {
      return starkCurve.sign(msgHash, this.pk);
    }
    return this.abstractionFunctions.sign.abstractedDeployAccountSign(
      msgHash,
      this.pk.toString(),
      ...addsAbstraction
    );
  }

  public async signDeclareTransaction(
    // contractClass: ContractClass,  // Should be used once class hash is present in ContractClass
    {
      classHash,
      senderAddress,
      chainId,
      maxFee,
      version,
      nonce,
      compiledClassHash,
    }: DeclareSignerDetails
  ): Promise<Signature> {
    const msgHash = calculateDeclareTransactionHash(
      classHash,
      senderAddress,
      version,
      maxFee,
      chainId,
      nonce,
      compiledClassHash
    );

    return starkCurve.sign(msgHash, this.pk);
  }
}
