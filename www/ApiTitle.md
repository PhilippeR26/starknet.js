This API is based on the <ins>[Starknet.js V3](https://github.com/starknet-io/starknet.js/discussions/102)</ins> Interface write up by <ins>[Janek](https://twitter.com/0xjanek)</ins> of <ins>[Argent](https://www.argent.xyz/)</ins>

## Provider

The Provider [**API**]() allows you to interact with the Starknet network, without signing transactions or messages.

Typically, these are _read_ calls on the blockchain.

Guide is [**here**](./docs/guides/connect_network.md).

## Account

An Account extends <ins>[`Provider`](./docs/API/classes/Provider.md)</ins> and inherits all of its methods.

It also introduces new methods that allow Accounts to create and verify signatures with a custom <ins>[`Signer`](./docs/API/classes/Signer.md)</ins>, declare and deploy Contract and deploy new Account

This [**API**](./docs/API/classes/Account.md) is the primary way to interact with an account contract on Starknet.

Guide is [**here**](./docs/guides/create_account.md).

## Contract

Contracts [**API**](./docs/API/classes/Contract.md) can do data transformations in JavaScript based on an ABI. They can also call and invoke to Starknet through a provided Signer.

Contracts allow you to transform Cairo values, like `Uint256` to `BigNumber`. It could also allow users to pass their own transformers, similar to `JSON.parse`.

Guide is [**here**](./docs/guides/create_contract.md).

## Signer

The Signer [**API**](./docs/API/classes/Signer.md) allows you to sign transactions and messages, and also allows you to get the public key.

## Utils

Util functions are provided so you can use various low level functions in your application:

### [elliptic curve](./docs/API/namespaces/ec.md)

### [hash](./docs/API/namespaces/hash.md)

### [num](./docs/API/namespaces/num.md)

### [encode](./docs/API/namespaces/encode.md)

### [merkle](./docs/API/namespaces/merkle.md)

### [shortString](./docs/API/namespaces/shortString.md)

### [stark](./docs/API/namespaces/stark.md)

### [uint256](./docs/API/namespaces/uint256.md)
