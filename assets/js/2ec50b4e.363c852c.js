"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[98358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,v=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(v,s(s({ref:t},d),{},{components:n})):a.createElement(v,s({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:12},s="Reading emitted events",c={unversionedId:"guides/events",id:"version-4.22.0/guides/events",title:"Reading emitted events",description:"Starknet events",source:"@site/versioned_docs/version-4.22.0/guides/events.md",sourceDirName:"guides",slug:"/guides/events",permalink:"/starknet.js/docs/4.22.0/guides/events",draft:!1,tags:[],version:"4.22.0",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Work with ERC20 tokens",permalink:"/starknet.js/docs/4.22.0/guides/use_ERC20"},next:{title:"Messages with L1 network",permalink:"/starknet.js/docs/4.22.0/guides/L1message"}},i={},l=[{value:"Starknet events",id:"starknet-events",level:2},{value:"Events in the Cairo code",id:"events-in-the-cairo-code",level:2},{value:"Recover the event data",id:"recover-the-event-data",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reading-emitted-events"},"Reading emitted events"),(0,r.kt)("h2",{id:"starknet-events"},"Starknet events"),(0,r.kt)("p",null,"A contract may emit events throughout its execution. Each event contains the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"from_address: address of the contract emitting the events\nkeys: a list of field elements\ndata: a list of field elements\n")),(0,r.kt)("p",null,"The events are stored in a block on the blockchain."),(0,r.kt)("h2",{id:"events-in-the-cairo-code"},"Events in the Cairo code"),(0,r.kt)("p",null,"You have to analyze the Cairo code of your smart contract, to recover the list of data emitted by the event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cairo"},"@event\nfunc log_data(d1: felt, d2: felt, d3: felt) {\n}\n\n@external\nfunc my_func{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() {\n    ...\n    log_data.emit(start_field, high_range, status_prog);\n    ...\n    return ();\n}\n")),(0,r.kt)("p",null,"Here, we can see that the event will store 3 felts."),(0,r.kt)("p",null,"Once compiled, this code will generate an abi file containing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "data": [\n        {"name": "d1", "type": "felt"},\n        {"name": "d2", "type": "felt"},\n        {"name": "d3", "type": "felt"},\n    ],\n    "keys": [],\n    "name": "log_data",\n    "type": "event",\n}\n')),(0,r.kt)("h2",{id:"recover-the-event-data"},"Recover the event data"),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_func")," is invoked, the event is stored in the blockchain and you get in return the transaction hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const resu = await myTestContract.invoke("my_func");\nconst txReceiptDeployTest = await provider.waitForTransaction(resu.transaction_hash);\n')),(0,r.kt)("p",null,"In TypeScript, you have to change a little the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { number, InvokeTransactionReceiptResponse } from "starknet";\n\nconst resu = await myTestContract.invoke("my_func");\nconst txReceiptDeployTest: InvokeTransactionReceiptResponse = await provider.waitForTransaction(resu.transaction_hash);\nconsole.log("events =", txReceiptDeployTest.events);\n')),(0,r.kt)("p",null,"Now, you have all the events of the block. Here, we have 2 events - the last one contains our data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  [Object: null prototype] {\n    data: [\n      '0x2345b8cdd1eb333ac0959f7d908394b6540234345590e83367ae2a6cfbd4107'\n    ],\n    from_address: '0x465e68294995849bd00ac9f6ad4ee12be3cec963d8fe27172a1eadda608c110',\n    keys: [\n      '0x28f911b08eb032a94e35f766f1310b2df2267eb9d25bb069a1e3a6754e4206d'\n    ]\n  },\n  [Object: null prototype] {\n    data: [\n      '0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a',\n      '0x3711666a3506c99c9d78c4d4013409a87a962b7a0880a1c24af9fe193dafc01',\n      '0x1d3d81545c000'\n    ],\n    from_address: '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',\n    keys: [\n      '0x99cd8bde557814842a3121e8ddfd433a539b8c9f14bf31ebf108d12e6196e9'\n    ]\n  }\n]\n\n")),(0,r.kt)("p",null,"Use the contract deployment address, to filter the events and read the data from your smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const event = txReceiptDeployTest.events.find(\n  (it) => number.cleanHex(it.from_address) === number.cleanHex(testContractAddress)\n) || {data: []};\n\nconst eventD1 = event.data[0];\nconst eventD2 = event.data[1];\nconst eventD3 = event.data[2];\n")))}u.isMDXComponent=!0}}]);