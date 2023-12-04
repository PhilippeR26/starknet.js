"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[56009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||c;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const c={sidebar_position:3},o="Deploy an ERC20 Contract",l={unversionedId:"guides/erc20",id:"version-4.17.1/guides/erc20",title:"Deploy an ERC20 Contract",description:"Deploying a contract relies on having an account already set up with enough ETH to pay fees for both:",source:"@site/versioned_docs/version-4.17.1/guides/erc20.md",sourceDirName:"guides",slug:"/guides/erc20",permalink:"/starknet.js/docs/4.17.1/guides/erc20",draft:!1,tags:[],version:"4.17.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating an Account",permalink:"/starknet.js/docs/4.17.1/guides/account"},next:{title:"Usage with Create React App",permalink:"/starknet.js/docs/4.17.1/guides/cra"}},i={},s=[{value:"Setup",id:"setup",level:2},{value:"Declare contract",id:"declare-contract",level:2},{value:"Deploy contract",id:"deploy-contract",level:2},{value:"Interact with contracts",id:"interact-with-contracts",level:2},{value:"Option 1 - call the contract object",id:"option-1---call-the-contract-object",level:3},{value:"Option 2 - call contract from Account",id:"option-2---call-contract-from-account",level:3},{value:"Check the balance",id:"check-the-balance",level:2},{value:"Convenience Methods",id:"convenience-methods",level:2},{value:"deployContract convenience method",id:"deploycontract-convenience-method",level:3},{value:"declareDeploy convenience method",id:"declaredeploy-convenience-method",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-an-erc20-contract"},"Deploy an ERC20 Contract"),(0,r.kt)("p",null,"Deploying a contract relies on having an account already set up with enough ETH to pay fees for both:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The class declaration"),(0,r.kt)("li",{parentName:"ol"},"The transaction interacting with the UDC (universal deployer contract)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You must first declare your contract class and only then deploy a new instance of it!")),(0,r.kt)("p",null,"High level explanations from StarkWare can be found in this Notion ",(0,r.kt)("a",{parentName:"p",href:"https://starkware.notion.site/Deploy-a-contract-and-an-account-on-StarkNet-ed2fd13301d2414e8223bb72bb90e386"},"page"),"."),(0,r.kt)("p",null,"ERC20 implementations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Argent ERC20 contract can be found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/argentlabs/argent-contracts-starknet/blob/develop/contracts/lib/ERC20.cairo"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"OpenZeppelin ERC20 can be found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenZeppelin/cairo-contracts/tree/main/src/openzeppelin/token/erc20"},"here"),".")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const compiledErc20 = json.parse(\n  fs.readFileSync("./ERC20.json").toString("ascii")\n);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// devnet private key from Account #0 if generated with --seed 0\nconst starkKeyPair = ec.getKeyPair(\"0xe3e70682c2094cac629f6fbed82c07cd\");\nconst accountAddress = \"0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a\";\n\nconst recieverAddress = '0x69b49c2cc8b16e80e86bfc5b0614a59aa8c9b601569c7b80dde04d3f3151b79';\n\n// Starknet.js currently doesn't have the functionality to calculate the class hash\nconst erc20ClassHash = '0x03f794a28472089a1a99b7969fc51cd5fbe22dd09e3f38d2bd6fa109cb3f4ecf';\n\nconst account = new Account(\n    provider,\n    accountAddress,\n    starkKeyPair\n  );\n")),(0,r.kt)("h2",{id:"declare-contract"},"Declare contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const erc20DeclareResponse = await account.declare({\n  classHash: erc20ClassHash,\n  contract: compiledErc20,\n});\n\nawait provider.waitForTransaction(erc20DeclareResponse.transaction_hash);\n")),(0,r.kt)("h2",{id:"deploy-contract"},"Deploy contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const salt = '900080545022'; // use some random salt\n\nconst erc20Response = await account.deploy({\n  classHash: erc20ClassHash,\n  constructorCalldata: stark.compileCalldata({\n    name: shortString.encodeShortString('TestToken'),\n    symbol: shortString.encodeShortString('ERC20'),\n    decimals: 18,\n    initial_supply: ['1000'],\n    recipient: account.address,\n  }),\n  salt,\n});\n\nawait provider.waitForTransaction(erc20Response.transaction_hash);\n\nconst txReceipt = await provider.getTransactionReceipt(erc20Response.transaction_hash);\n")),(0,r.kt)("h2",{id:"interact-with-contracts"},"Interact with contracts"),(0,r.kt)("p",null,"We have 2 options to interact with contracts."),(0,r.kt)("h3",{id:"option-1---call-the-contract-object"},"Option 1 - call the contract object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const erc20 = new Contract(compiledErc20.abi, erc20Address, provider);\n\nerc20.connect(account);\n\nconst { transaction_hash: mintTxHash } = await erc20.transfer(\n  recieverAddress,\n  ['0', '10'], // send 10 tokens as Uint256\n);\n\nawait provider.waitForTransaction(mintTxHash);\n")),(0,r.kt)("h3",{id:"option-2---call-contract-from-account"},"Option 2 - call contract from Account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const executeHash = await account.execute(\n  {\n    contractAddress: erc20Address,\n    entrypoint: 'transfer',\n    calldata: stark.compileCalldata({\n      recipient: recieverAddress,\n      amount: ['10']\n    })\n  }\n);\n\nawait provider.waitForTransaction(executeHash.transaction_hash);\n")),(0,r.kt)("h2",{id:"check-the-balance"},"Check the balance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const balanceBeforeTransfer = await erc20.balanceOf(account.address);\n\nconsole.log(\n  `account Address ${account.address} has a balance of:`,\n  number.toBN(balanceBeforeTransfer[0].high).toString()\n);\n")),(0,r.kt)("h2",{id:"convenience-methods"},"Convenience Methods"),(0,r.kt)("h3",{id:"deploycontract-convenience-method"},"deployContract convenience method"),(0,r.kt)("p",null,"High level wrapper for deploy. Doesn't require ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForTransaction"),". Response similar to deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"provider.deployContract"),"."),(0,r.kt)("p",null,"Convenient also to get the address of the deployed contract in the same response - easier than using the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," already mentioned in the guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  const deployResponse = await account.deployContract({\n    classHash: erc20ClassHash,\n    constructorCalldata: [\n      encodeShortString('Token'),\n      encodeShortString('ERC20'),\n      account.address,\n    ],\n  });\n")),(0,r.kt)("h3",{id:"declaredeploy-convenience-method"},"declareDeploy convenience method"),(0,r.kt)("p",null,"High level wrapper for declare & deploy. Doesn't require ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForTransaction"),". Functionality similar to deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"provider.deployContract"),"."),(0,r.kt)("p",null,"Declare and Deploy contract using single function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  const declareDeploy = await account.declareDeploy({\n    contract: compiledErc20,\n    classHash: '0x54328a1075b8820eb43caf0caa233923148c983742402dcfc38541dd843d01a',\n    constructorCalldata: [\n      encodeShortString('Token'),\n      encodeShortString('ERC20'),\n      account.address,\n    ],\n  });\n  const declareTransactionHash = declareDeploy.declare.transaction_hash\n  const erc20Address = declareDeploy.deploy.contract_address;\n")))}u.isMDXComponent=!0}}]);