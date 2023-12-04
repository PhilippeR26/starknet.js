"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[39667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:14},o="Signature",i={unversionedId:"guides/signature",id:"version-5.24.3/guides/signature",title:"Signature",description:"You can use Starknet.js to sign a message outside of the network, using the standard methods of hash and sign of Starknet. In this way, in some cases, you can avoid paying fees to store data in-chain; you transfer the signed message off-chain, and the recipient can verify (without fee) on-chain the validity of the message.",source:"@site/versioned_docs/version-5.24.3/guides/signature.md",sourceDirName:"guides",slug:"/guides/signature",permalink:"/starknet.js/docs/guides/signature",draft:!1,tags:[],version:"5.24.3",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"defaultSidebar",previous:{title:"Messages with L1 network",permalink:"/starknet.js/docs/guides/L1message"},next:{title:"Interact with more than one contract within one transaction",permalink:"/starknet.js/docs/guides/multiCall"}},c={},l=[{value:"Sign and send a message",id:"sign-and-send-a-message",level:2},{value:"Receive and verify a message",id:"receive-and-verify-a-message",level:2},{value:"Verify outside of Starknet:",id:"verify-outside-of-starknet",level:3},{value:"Verify in the Starknet network, with the account:",id:"verify-in-the-starknet-network-with-the-account",level:3},{value:"Sign and verify the following EIP712",id:"sign-and-verify-the-following-eip712",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signature"},"Signature"),(0,r.kt)("p",null,"You can use Starknet.js to sign a message outside of the network, using the standard methods of hash and sign of Starknet. In this way, in some cases, you can avoid paying fees to store data in-chain; you transfer the signed message off-chain, and the recipient can verify (without fee) on-chain the validity of the message."),(0,r.kt)("h2",{id:"sign-and-send-a-message"},"Sign and send a message"),(0,r.kt)("p",null,"Your message has to be an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumberish"),". First, calculate the hash of this message, then calculate the signature."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the message does not respect some safety rules of composition, this method could be a way of attack of your smart contract. If you have any doubt, prefer the ",(0,r.kt)("a",{parentName:"p",href:"#sign-and-verify-following-eip712"},"EIP712 like method"),", which is safe, but is also more complicated.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {ec, hash, num, json, Contract, WeierstrassSignatureType } from "starknet";\n\nconst privateKey = "0x1234567890987654321";\nconst starknetPublicKey = ec.starkCurve.getStarkKey(privateKey);\nconst fullPublicKey = encode.addHexPrefix( encode.buf2hex( ec.starkCurve.getPublicKey( privateKey, false)));\n\nconst message: BigNumberish[] = [1, 128, 18, 14];\n\nconst msgHash = hash.computeHashOnElements(message);\nconst signature: WeierstrassSignatureType = ec.starkCurve.sign(msgHash, privateKey);\n')),(0,r.kt)("p",null,"Then you can send, by any means, to the recipient of the message:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the message."),(0,r.kt)("li",{parentName:"ul"},"the signature."),(0,r.kt)("li",{parentName:"ul"},"the full public key (or an account address using this private key).")),(0,r.kt)("h2",{id:"receive-and-verify-a-message"},"Receive and verify a message"),(0,r.kt)("p",null,"On the receiver side, you can verify that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the message has not been modified,"),(0,r.kt)("li",{parentName:"ul"},"the sender of this message owns the private key corresponding to the public key.")),(0,r.kt)("p",null,"2 ways to perform this verification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"off-chain, using the full public key (very fast, but only for standard Starknet hash & sign)."),(0,r.kt)("li",{parentName:"ul"},"on-chain, using the account address (slow, add workload to the node/sequencer, but can manage exotic account abstraction about hash or sign).")),(0,r.kt)("h3",{id:"verify-outside-of-starknet"},"Verify outside of Starknet:"),(0,r.kt)("p",null,"The sender provides the message, the signature, and the full public key. Verification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const msgHash1 = hash.computeHashOnElements(message);\nconst result1 = ec.starkCurve.verify(signature, msgHash1, fullPublicKey);\nconsole.log("Result (boolean) =", result1);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The sender can also provide their account address. Then you can check that this full public key is linked to this account. The public Key that you can read in the account contract is part (part X) of the full public Key (parts X & Y):")),(0,r.kt)("p",null,"Read the Public Key of the account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const provider = new Provider({ sequencer: { baseUrl: "http://127.0.0.1:5050" } }); //devnet\nconst compiledAccount = json.parse(fs.readFileSync("./compiled_contracts/Account_0_5_1.json").toString("ascii"));\nconst accountAddress ="0x...."; // account of sender\nconst contractAccount = new Contract(compiledAccount.abi, accountAddress, provider);\nconst pubKey3 = await contractAccount.call("getPublicKey");\n')),(0,r.kt)("p",null,"Check that the Public Key of the account is part of the full public Key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const isFullPubKeyRelatedToAccount: boolean =\n    publicKey.publicKey == BigInt(encode.addHexPrefix( fullPublicKey.slice( 4, 68)));\nconsole.log("Result (boolean)=", isFullPubKeyRelatedToAccount);\n')),(0,r.kt)("h3",{id:"verify-in-the-starknet-network-with-the-account"},"Verify in the Starknet network, with the account:"),(0,r.kt)("p",null,"The sender can provide an account address, despite a full public key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const provider = new Provider({ sequencer: { baseUrl: "http://127.0.0.1:5050" } }); //devnet\nconst compiledAccount = json.parse(fs.readFileSync("./compiled_contracts/Account_0_5_1.json").toString("ascii"));\n\nconst accountAddress ="0x..."; // account of sender\nconst contractAccount = new Contract(compiledAccount.abi, accountAddress, provider);\nconst msgHash2 = hash.computeHashOnElements(message);\n// The call of isValidSignature will generate an error if not valid\n    let result2: boolean;\n    try {\n        await contractAccount.isValidSignature(msgHash2, [signature.r, signature.s]);\n        result2 = true;\n    } catch {\n        result2 = false;\n    }\nconsole.log("Result (boolean) =", result2);\n')),(0,r.kt)("h2",{id:"sign-and-verify-the-following-eip712"},"Sign and verify the following EIP712"),(0,r.kt)("p",null,"Previous examples are valid for an array of numbers. In the case of a more complex structure of an object, you have to work in the spirit of ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP 712"),". This JSON structure has 4 mandatory items: ",(0,r.kt)("inlineCode",{parentName:"p"},"types"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"primaryType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),".",(0,r.kt)("br",{parentName:"p"}),"\n","These items are designed to be able to be an interface with a wallet. At sign request, the wallet will display:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"message")," will be displayed at the bottom of the wallet display, showing clearly (not in hex) the message to sign. Its structure has to be in accordance with the type listed in ",(0,r.kt)("inlineCode",{parentName:"li"},"primaryType"),", defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"types"),"."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"domain")," will be shown above the message. Its structure has to be in accordance with ",(0,r.kt)("inlineCode",{parentName:"li"},"StarkNetDomain"),".")),(0,r.kt)("p",null,"The predefined types that you can use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"felt: for an integer on 251 bits."),(0,r.kt)("li",{parentName:"ul"},"felt","*",": for an array of felt."),(0,r.kt)("li",{parentName:"ul"},"string: for a shortString of 31 ASCII characters max."),(0,r.kt)("li",{parentName:"ul"},"selector: for a name of a smart contract function."),(0,r.kt)("li",{parentName:"ul"},"merkletree: for a Root of a Merkle tree. the root is calculated with the provided data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const typedDataValidate: TypedData = {\n        types: {\n            StarkNetDomain: [\n                { name: "name", type: "string" },\n                { name: "version", type: "felt" },\n                { name: "chainId", type: "felt" },\n            ],\n            Airdrop: [\n                { name: "address", type: "felt" },\n                { name: "amount", type: "felt" }\n            ],\n            Validate: [\n                { name: "id", type: "felt" },\n                { name: "from", type: "felt" },\n                { name: "amount", type: "felt" },\n                { name: "nameGamer", type: "string" },\n                { name: "endDate", type: "felt" },\n                { name: "itemsAuthorized", type: "felt*" }, // array of felt\n                { name: "chkFunction", type: "selector" }, // name of function\n                { name: "rootList", type: "merkletree", contains: "Airdrop" } // root of a merkle tree\n            ]\n        },\n        primaryType: "Validate",\n        domain: {\n            name: "myDapp", // put the name of your dapp to ensure that the signatures will not be used by other DAPP\n            version: "1",\n            chainId: shortString.encodeShortString("SN_GOERLI"), // shortString of \'SN_GOERLI\' (or \'SN_MAIN\'), to be sure that signature can\'t be used by other network.\n        },\n        message: {\n            id: "0x0000004f000f",\n            from: "0x2c94f628d125cd0e86eaefea735ba24c262b9a441728f63e5776661829a4066",\n            amount: "400",\n            nameGamer: "Hector26",\n            endDate: "0x27d32a3033df4277caa9e9396100b7ca8c66a4ef8ea5f6765b91a7c17f0109c",\n            itemsAuthorized: ["0x01", "0x03", "0x0a", "0x0e"],\n            chkFunction: "check_authorization",\n            rootList: [\n                {\n                    address: "0x69b49c2cc8b16e80e86bfc5b0614a59aa8c9b601569c7b80dde04d3f3151b79",\n                    amount: "1554785",\n                }, {\n                    address: "0x7447084f620ba316a42c72ca5b8eefb3fe9a05ca5fe6430c65a69ecc4349b3b",\n                    amount: "2578248",\n                }, {\n                    address: "0x3cad9a072d3cf29729ab2fad2e08972b8cfde01d4979083fb6d15e8e66f8ab1",\n                    amount: "4732581",\n                }, {\n                    address: "0x7f14339f5d364946ae5e27eccbf60757a5c496bf45baf35ddf2ad30b583541a",\n                    amount: "913548",\n                },\n            ]\n        },\n    };\n\n// connect your account, then\nconst signature2 = await account.signMessage(typedDataValidate) as WeierstrassSignatureType;\n\n')),(0,r.kt)("p",null,"On the receiver side, you receive the JSON, the signature, and the account address. To verify the message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const compiledAccount = json.parse(fs.readFileSync("./compiledContracts/Account_0_5_1.json").toString("ascii"));\nconst contractAccount = new Contract(compiledAccount.abi, accountAddress, provider);\n\nconst msgHash5 = typedData.getMessageHash(typedDataValidate, accountAddress);\n// The call of isValidSignature will generate an error if not valid\nlet result5: boolean;\ntry {\n    await contractAccount.isValidSignature(msgHash5, [signature2.r, signature2.s]);\n    result5 = true;\n} catch {\n    result5 = false;\n}\nconsole.log("Result5 (boolean) =", result5);\n')))}p.isMDXComponent=!0}}]);