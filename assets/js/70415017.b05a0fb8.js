"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[91694],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(y,c(c({ref:t},d),{},{components:a})):n.createElement(y,c({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:8},c="Create account",s={unversionedId:"guides/create_account",id:"version-5.14.1/guides/create_account",title:"Create account",description:"Since there are no Externally Owned Accounts (EOA) in Starknet, all Accounts in Starknet are contracts.",source:"@site/versioned_docs/version-5.14.1/guides/create_account.md",sourceDirName:"guides",slug:"/guides/create_account",permalink:"/starknet.js/docs/5.14.1/guides/create_account",draft:!1,tags:[],version:"5.14.1",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Create new contract",permalink:"/starknet.js/docs/5.14.1/guides/create_contract"},next:{title:"Data transformation",permalink:"/starknet.js/docs/5.14.1/guides/define_call_message"}},l={},i=[{value:"Create OZ (Open Zeppelin) account:",id:"create-oz-open-zeppelin-account",level:2},{value:"compute address:",id:"compute-address",level:3},{value:"deployment of the new account",id:"deployment-of-the-new-account",level:3},{value:"Create Argent account",id:"create-argent-account",level:2},{value:"compute address",id:"compute-address-1",level:3},{value:"deployment of the new account",id:"deployment-of-the-new-account-1",level:3},{value:"Create Braavos account",id:"create-braavos-account",level:2},{value:"Compute address",id:"compute-address-2",level:3},{value:"Estimate fees",id:"estimate-fees",level:3},{value:"Deploy account",id:"deploy-account",level:3},{value:"Create your account abstraction",id:"create-your-account-abstraction",level:2},{value:"Account update",id:"account-update",level:2}],d={toc:i},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-account"},"Create account"),(0,r.kt)("p",null,"Since there are no Externally Owned Accounts (EOA) in Starknet, all Accounts in Starknet are contracts."),(0,r.kt)("p",null,"Unlike in Ethereum where a wallet is created with a public and private key pair, Starknet Accounts are the only way to sign transactions and messages, and verify signatures. Therefore a Account - Contract interface is needed."),(0,r.kt)("p",null,"Account contracts on Starknet cannot be deployed without paying a fee.\nCreate an account is a bit tricky ; you have several steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decide on your account type (OpenZeppelin, ArgentX, Braavos, ...)."),(0,r.kt)("li",{parentName:"ol"},"Compute the address of your future account."),(0,r.kt)("li",{parentName:"ol"},"Send funds to this pre-computed address. The funds will be used to pay for the account contract deployment, and remains will fund the new account."),(0,r.kt)("li",{parentName:"ol"},"Actual deployment of the Account")),(0,r.kt)("h2",{id:"create-oz-open-zeppelin-account"},"Create OZ (Open Zeppelin) account:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Level: easy.")),(0,r.kt)("p",null,"Here, we will create a wallet with the Open Zeppelin smart contract v0.5.1. The contract class is already implemented in both Testnet 1 & 2.",(0,r.kt)("br",{parentName:"p"}),"\n","This contract is coded in Cairo 0, so it will not survive to the upcoming regenesis of Starknet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account, constants, ec, json, stark, Provider, hash, CallData } from "starknet";\n')),(0,r.kt)("h3",{id:"compute-address"},"compute address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// connect provider\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });\n\n// new Open Zeppelin account v0.5.1:\n    // Generate public and private key pair.\nconst privateKey = stark.randomAddress();\nconsole.log('New OZ account:\\nprivateKey=', privateKey);\nconst starkKeyPub = ec.starkCurve.getStarkKey(privateKey);\nconsole.log('publicKey=', starkKeyPub);\n\nconst OZaccountClassHash = \"0x2794ce20e5f2ff0d40e632cb53845b9f4e526ebd8471983f7dbd355b721d5a\";\n// Calculate future address of the account\nconst OZaccountConstructorCallData = CallData.compile({ publicKey: starkKeyPub });\nconst OZcontractAddress = hash.calculateContractAddressFromHash(\n    starkKeyPub,\n    OZaccountClassHash,\n    OZaccountConstructorCallData,\n    0\n);\nconsole.log('Precalculated account address=', OZcontractAddress);\n")),(0,r.kt)("p",null,"If you want a specific private key, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"stark.randomAddress()")," by your choice."),(0,r.kt)("p",null,"Then you have to fund this address!"),(0,r.kt)("p",null,"How to proceed is out of the scope of this guide, but you can for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transfer ETH from another wallet."),(0,r.kt)("li",{parentName:"ul"},"Bridge ETH to this Starknet address."),(0,r.kt)("li",{parentName:"ul"},"Use a faucet. (",(0,r.kt)("a",{parentName:"li",href:"https://faucet.goerli.starknet.io/"},"https://faucet.goerli.starknet.io/"),")"),(0,r.kt)("li",{parentName:"ul"},"Mint ETH on starknet-devnet, like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://127.0.0.1:5050/mint -d \'{"address":"0x04a093c37ab61065d001550089b1089922212c60b34e662bb14f2f91faee2979","amount":50000000000000000000,"lite":true}\' -H "Content-Type:application/json"\n// {"new_balance":50000000000000000000,"tx_hash":null,"unit":"wei"}\n')),(0,r.kt)("h3",{id:"deployment-of-the-new-account"},"deployment of the new account"),(0,r.kt)("p",null,"If you have sent enough fund to this new address, you can go forward to the final step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const OZaccount = new Account(provider, OZcontractAddress, privateKey);\n\nconst { transaction_hash, contract_address } = await OZaccount.deployAccount({\n    classHash: OZaccountClassHash,\n    constructorCalldata: OZaccountConstructorCallData,\n    addressSalt: starkKeyPub\n});\n\nawait provider.waitForTransaction(transaction_hash);\nconsole.log('\u2705 New OpenZeppelin account created.\\n   address =', contract_address);\n")),(0,r.kt)("h2",{id:"create-argent-account"},"Create Argent account"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Level: medium.")),(0,r.kt)("p",null,"Here, we will create a wallet with the Argent smart contract v0.2.3. This case is more complicated, because we will have the account behind a proxy contract (this way, the wallet contract can be updated). The contract classes of both contracts are already implemented in both Testnet 1 & 2."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If necessary OZ contracts can also be created with a proxy.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account, ec, json, stark, Provider, hash, CallData } from "starknet";\n')),(0,r.kt)("h3",{id:"compute-address-1"},"compute address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// connect provider\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });\n\n//new Argent X account v0.2.3:\nconst argentXproxyClassHash = "0x25ec026985a3bf9d0cc1fe17326b245dfdc3ff89b8fde106542a3ea56c5a918";\nconst argentXaccountClassHash = "0x033434ad846cdd5f23eb73ff09fe6fddd568284a0fb7d1be20ee482f044dabe2";\n\n// Generate public and private key pair.\nconst privateKeyAX = stark.randomAddress();\nconsole.log(\'AX_ACCOUNT_PRIVATE_KEY=\', privateKeyAX);\nconst starkKeyPubAX = ec.starkCurve.getStarkKey(privateKey);\nconsole.log(\'AX_ACCOUNT_PUBLIC_KEY=\', starkKeyPubAX);\n\n// Calculate future address of the ArgentX account\nconst AXproxyConstructorCallData = CallData.compile({\n    implementation: argentXaccountClassHash,\n    selector: hash.getSelectorFromName("initialize"),\n    calldata: CallData.compile({ signer: starkKeyPubAX, guardian: "0" }),\n});\nconst AXcontractAddress = hash.calculateContractAddressFromHash(\n    starkKeyPubAX,\n    argentXproxyClassHash,\n    AXproxyConstructorCallData,\n    0\n);\nconsole.log(\'Precalculated account address=\', AXcontractAddress);\n')),(0,r.kt)("p",null,"If you want a specific private key, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"stark.randomAddress()")," by your choice."),(0,r.kt)("p",null,"Then you have to fund this address."),(0,r.kt)("h3",{id:"deployment-of-the-new-account-1"},"deployment of the new account"),(0,r.kt)("p",null,"If you have sent enough fund to this new address, you can go forward to the final step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountAX = new Account(provider, AXcontractAddress, privateKeyAX);\n\nconst deployAccountPayload = {\n    classHash: argentXproxyClassHash,\n    constructorCalldata: AXproxyConstructorCallData,\n    contractAddress: AXcontractAddress,\n    addressSalt: starkKeyPubAX };\n\nconst { transaction_hash: AXdAth, contract_address: AXcontractFinalAddress } = await accountAX.deployAccount(deployAccountPayload);\nconsole.log('\u2705 ArgentX wallet deployed at:', AXcontractFinalAddress);\n")),(0,r.kt)("h2",{id:"create-braavos-account"},"Create Braavos account"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Level: hard.")),(0,r.kt)("p",null,"Even more complicated, a Braavos account needs also a proxy, but needs in addition a specific signature. Starknet.js is handling only Starknet standard signatures ; so we needs extra code to handle this specific signature for account creation. These nearly 200 lines of code are not displayed here, but are available in a module ",(0,r.kt)("a",{target:"_blank",href:a(13677).Z},"here"),"."),(0,r.kt)("p",null,"We will deploy hereunder a Braavos account in devnet. So launch starknet-devnet with these parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"starknet-devnet --seed 0 --fork-network alpha-goerli\n")),(0,r.kt)("p",null,"Initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Provider, Account, num, stark } from "starknet";\nimport { calculateAddressBraavos,\n    deployBraavosAccount,\n    estimateBraavosAccountDeployFee\n} from "./deployBraavos";\nimport axios from "axios";\n')),(0,r.kt)("p",null,"If you want to create yourself the private key, for example with a random number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const privateKeyBraavos = stark.randomAddress();\n")),(0,r.kt)("p",null,"If you want to use a private key generated by your browser wallet, create a new account (without deploying it), then copy/paste the account private key (it's useless to copy the public key)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const privateKeyBraavos = "0x02e8....e12";\n')),(0,r.kt)("h3",{id:"compute-address-2"},"Compute address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// initialize Provider\nconst providerDevnet = new Provider({ sequencer: { baseUrl: \"http://127.0.0.1:5050\" } });\n// address\nconst BraavosProxyAddress = calculateAddressBraavos(privateKeyBraavos);\nconsole.log('Calculated account address=', BraavosProxyAddress);\n")),(0,r.kt)("h3",{id:"estimate-fees"},"Estimate fees"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// estimate fees\nconst estimatedFee = await estimateBraavosAccountDeployFee(privateKeyBraavos, providerDevnet);\nconsole.log("calculated fee =", estimatedFee);\n')),(0,r.kt)("h3",{id:"deploy-account"},"Deploy account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// fund account address before account creation (easy in devnet)\nconst { data: answer } = await axios.post(\'http://127.0.0.1:5050/mint\', {\n    "address": BraavosProxyAddress,\n    "amount": 10_000_000_000_000_000_000,\n    "lite": true\n    }, { headers: { "Content-Type": "application/json" } });\nconsole.log(\'Answer mint =\', answer); // 10 ETH\n\n// deploy Braavos account\nconst { transaction_hash, contract_address: BraavosAccountFinalAddress } =\n    await deployBraavosAccount(privateKeyBraavos, providerDevnet, estimatedFee);\n    // estimatedFee is optional\nconsole.log(\'Transaction hash =\', transaction_hash);\nawait providerDevnet.waitForTransaction(transaction_hash);\nconsole.log(\'\u2705 Braavos wallet deployed at\', BraavosAccountFinalAddress);\n')),(0,r.kt)("p",null,"The computed address has been funded automatically by minting new dummy ETH in Starknet devnet!"),(0,r.kt)("h2",{id:"create-your-account-abstraction"},"Create your account abstraction"),(0,r.kt)("p",null,"You are not limited to these 3 contracts contracts. You can create your own contract for wallet. It's the concept of Account Abstraction."),(0,r.kt)("p",null,"You can customize entirely the wallet - for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use a different concept of keys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add a guardian to save your account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"have the possibility to transfer the ownership of the wallet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add some administrators or a super-administrator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"whitelist of address for transfer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"multisig.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"delayed withdraw."))),(0,r.kt)("p",null,"The only limitation is your imagination..."),(0,r.kt)("p",null,"Here is an example of a customized wallet, including super administrator management, on a local starknet-devnet:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"launch ",(0,r.kt)("inlineCode",{parentName:"p"},"starknet-devnet --seed 0")," before using this script")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account, ec, json, stark, Provider, hash, CallData } from "starknet";\nimport fs from "fs";\nimport axios from "axios";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// connect provider\nconst provider = new Provider({ sequencer: { network: "http://127.0.0.1:5050" } });\n\n// initialize existing predeployed account 0 of Devnet\nconst privateKey0 = "0xe3e70682c2094cac629f6fbed82c07cd";\nconst accountAddress0 = "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a";\nconst account0 = new Account(provider, accountAddress0, privateKey0);\n\n// new account abstraction:\n// Generate public and private key pair.\nconst AAprivateKey = stark.randomAddress();\nconsole.log(\'New account:\\nprivateKey=\', AAprivateKey);\nconst AAstarkKeyPub = ec.starkCurve.getStarkKey(AAprivateKey);\nconsole.log(\'publicKey=\', AAstarkKeyPub);\n\n// declare the contract\nconst compiledAAaccount = json.parse(fs.readFileSync("./compiled_contracts/myAccountAbstraction.json").toString("ascii"));\nconst { transaction_hash: declTH, class_hash: decCH } =\n    await account0.declare({contract: compiledAAaccount});\nconsole.log(\'Customized account class hash =\', decCH);\nawait provider.waitForTransaction(declTH);\n\n// Calculate future address of the account\nconst AAaccountConstructorCallData = CallData.compile({\n    super_admin_address: account0.address,\n    publicKey: AAstarkKeyPub\n});\nconst AAcontractAddress = hash.calculateContractAddressFromHash(\n    AAstarkKeyPub,\n    AAaccountClassHash,\n    AAaccountConstructorCallData,\n    0\n);\nconsole.log(\'Precalculated account address=\', AAcontractAddress);\n\n// fund account address before account creation\nconst { data: answer } = await axios.post(\'http://127.0.0.1:5050/mint\', { "address": AAcontractAddress, "amount": 50_000_000_000_000_000_000, "lite": true }, { headers: { "Content-Type": "application/json" } });\nconsole.log(\'Answer mint =\', answer);\n\n// deploy account\nconst AAaccount = new Account(provider, AAcontractAddress, AAprivateKey);\nconst { transaction_hash, contract_address } = await AAaccount.deployAccount({\n    classHash: AAaccountClassHash,\n    constructorCalldata: AAaccountConstructorCallData,\n    addressSalt: AAstarkKeyPub\n});\nawait provider.waitForTransaction(transaction_hash);\nconsole.log(\'\u2705 New customized account created.\\n   address =\', contract_address);\n')),(0,r.kt)("h2",{id:"account-update"},"Account update"),(0,r.kt)("p",null,"For ArgentX and Braavos wallets, if you have created the privkey inside the browser wallet, necessary upgrades will be automatically managed in the wallet.",(0,r.kt)("br",{parentName:"p"}),"\n","However, if you have created yourself the private key, it becomes your responsibility to update the account implementation class when it's necessary. It can be done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade")," function of the implementation class."))}p.isMDXComponent=!0},13677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/deployBraavos-3927b73e158cc4cebc93acc55aa3f7c6.ts"}}]);