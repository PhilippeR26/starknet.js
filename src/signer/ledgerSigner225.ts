import type { Call, Calldata, LedgerPathCalculation } from '../types';
import { CallData } from '../utils/calldata';
import type { SignerInterface } from './interface';
import { getSelector } from '../utils/hash';
import { concatenateArrayBuffer } from '../utils/encode';
import { hexToBytes } from '../utils/num';
import { addAddressPadding } from '../utils/address';
import { getLedgerPathBuffer221, LedgerSigner221 } from './ledgerSigner221';

/**
 * Signer for accounts using a Ledger Nano S+/X signature (Starknet Ledger APP version 2.2.5).
 *
 * The Ledger has to be connected, unlocked and the Starknet APP has to be selected prior of use of this class.
 */
export class LedgerSigner225<Transport extends Record<any, any> = any>
  extends LedgerSigner221
  implements SignerInterface
{
  /**
   * constructor of the LedgerSigner class.
   * @param {Transport} transport 5 transports are available to handle USB, bluetooth, Node, Web, Mobile.
   * See Guides for more details.
   * @param {number} accountID ID of Ledger Nano account (can handle 2**31 accounts).
   * @param {string} [eip2645application='LedgerW'] A wallet is defined by an ERC2645 derivation path (6 items).
   * One item is called `application` and can be customized.
   * Default value is `LedgerW`.
   * @param {LedgerPathCalculation} [pathFunction=getLedgerPathBuffer221]
   * defines the function that will calculate the path. By default `getLedgerPathBuffer221` is selected.
   *
   * If you are using APP v2.2.5 with an account created with the v1.1.1, you need to use :
   * ```typescript
   * const myLedgerSigner = new LedgerSigner225(myNodeTransport, 0, undefined, getLedgerPathBuffer111);
   * ```
   * @example
   * ```typescript
   * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
   * const myNodeTransport = await TransportNodeHid.create();
   * const myLedgerSigner = new LedgerSigner225(myNodeTransport, 0);
   * ```
   */
  constructor(
    transport: Transport,
    accountID: number,
    eip2645application: string = 'LedgerW',
    pathFunction: LedgerPathCalculation = getLedgerPathBuffer221
  ) {
    super(transport, accountID, eip2645application, pathFunction);
  }

  /** Internal function to convert a Call to an array of Uint8Array.
   * @param {Call} call A Call to convert.
   * @return {Uint8Array[]} Call encoded in an array of Uint8Array (each containing 7 u256).
   */
  protected encodeCall(call: Call): Uint8Array[] {
    const toBuf: Uint8Array = this.convertBnToLedger(call.contractAddress);
    const selectorBuf: Uint8Array = hexToBytes(addAddressPadding(getSelector(call.entrypoint)));
    let calldataBuf: Uint8Array = new Uint8Array([]);
    if (call.calldata) {
      const compiledCalldata: Calldata = CallData.compile(call.calldata);
      const calldataSizeBuf: Uint8Array = this.convertBnToLedger(compiledCalldata.length);

      calldataBuf = concatenateArrayBuffer([
        calldataSizeBuf,
        ...compiledCalldata.map((parameter: string): Uint8Array => {
          const a = this.convertBnToLedger(parameter);
          return a;
        }),
      ]);
    } else {
      calldataBuf = this.convertBnToLedger('0x00');
    }
    const callBuf: Uint8Array = concatenateArrayBuffer([toBuf, selectorBuf, calldataBuf]);
    // slice data into chunks of 7 * 32 bytes
    const calldatas: Uint8Array[] = [];
    const chunkSize = 7 * 32; // 224 bytes
    for (let i = 0; i < callBuf.length; i += chunkSize)
      calldatas.push(callBuf.subarray(i, i + chunkSize));
    return calldatas;
  }
}
