import { secp256k1 } from '@noble/curves/secp256k1';

import {
  Abi,
  Call,
  DeclareSignerDetails,
  DeployAccountSignerDetails,
  InvocationsSignerDetails,
  Signature,
  TypedData,
} from '../types';
import { CallData } from '../utils/calldata';
import { addHexPrefix, buf2hex, removeHexPrefix } from '../utils/encode';
import { EthRandomAddress } from '../utils/eth';
import {
  calculateDeclareTransactionHash,
  calculateDeployAccountTransactionHash,
  calculateTransactionHash,
} from '../utils/hash';
import { toHex } from '../utils/num';
import { getExecuteCalldata } from '../utils/transaction';
import { getMessageHash } from '../utils/typedData';
import { SignerInterface } from './interface';

export class EthSigner implements SignerInterface {
  protected pk: string;

  constructor(pk: Uint8Array | string = EthRandomAddress()) {
    this.pk = pk instanceof Uint8Array ? removeHexPrefix(buf2hex(pk)) : removeHexPrefix(toHex(pk));
  }

  public async getPubKey(): Promise<string> {
    return addHexPrefix(buf2hex(secp256k1.getPublicKey(this.pk)));
  }

  public async signMessage(typedData: TypedData, accountAddress: string): Promise<Signature> {
    const msgHash = getMessageHash(typedData, accountAddress);
    return secp256k1.sign(msgHash, this.pk);
  }

  public async signHash(msgHash: string): Promise<Signature> {
    return secp256k1.sign(msgHash, this.pk);
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

    return secp256k1.sign(msgHash, this.pk);
  }

  public async signDeployAccountTransaction({
    classHash,
    contractAddress,
    constructorCalldata,
    addressSalt,
    maxFee,
    version,
    chainId,
    nonce,
  }: DeployAccountSignerDetails): Promise<Signature> {
    const msgHash = calculateDeployAccountTransactionHash(
      contractAddress,
      classHash,
      CallData.compile(constructorCalldata),
      addressSalt,
      version,
      maxFee,
      chainId,
      nonce
    );

    return secp256k1.sign(msgHash, this.pk);
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

    return secp256k1.sign(msgHash, this.pk);
  }
}
