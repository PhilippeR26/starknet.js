"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[42342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,u=c["".concat(o,".").concat(m)]||c[m]||k[m]||i;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"SignerInterface",title:"Class: SignerInterface",sidebar_label:"SignerInterface",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"API/classes/SignerInterface",id:"version-5.24.3/API/classes/SignerInterface",title:"Class: SignerInterface",description:"Implemented by",source:"@site/versioned_docs/version-5.24.3/API/classes/SignerInterface.md",sourceDirName:"API/classes",slug:"/API/classes/SignerInterface",permalink:"/starknet.js/docs/API/classes/SignerInterface",draft:!1,editUrl:null,tags:[],version:"5.24.3",sidebarPosition:0,frontMatter:{id:"SignerInterface",title:"Class: SignerInterface",sidebar_label:"SignerInterface",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Signer",permalink:"/starknet.js/docs/API/classes/Signer"},next:{title:"MerkleTree",permalink:"/starknet.js/docs/API/classes/merkle.MerkleTree"}},o={},p=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"getPubKey",id:"getpubkey",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"signMessage",id:"signmessage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"signTransaction",id:"signtransaction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"signDeployAccountTransaction",id:"signdeployaccounttransaction",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"signDeclareTransaction",id:"signdeclaretransaction",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:p},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/starknet.js/docs/API/classes/Signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new SignerInterface"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getpubkey"},"getPubKey"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"getPubKey"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Method to get the public key of the signer"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"public key of signer as hex string with 0x prefix"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L17"},"src/signer/interface.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signmessage"},"signMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"signMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"typedData"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"accountAddress"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"Sign an JSON object for off-chain usage with the starknet private key and return the signature\nThis adds a message prefix so it cant be interchanged with transactions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"if the JSON object is not a valid JSON"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"typedData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/interfaces/types.TypedData"},(0,r.kt)("inlineCode",{parentName:"a"},"TypedData"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON object to be signed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"account")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"the signature of the JSON object"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L28"},"src/signer/interface.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signtransaction"},"signTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"signTransaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transactions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionsDetail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"abis?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"Signs a transaction with the starknet private key and returns the signature"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactions")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#call"},(0,r.kt)("inlineCode",{parentName:"a"},"Call")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactionsDetail")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/interfaces/types.InvocationsSignerDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"InvocationsSignerDetails")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"abis?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#abi"},(0,r.kt)("inlineCode",{parentName:"a"},"Abi")),"[]")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"signature"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L41"},"src/signer/interface.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signdeployaccounttransaction"},"signDeployAccountTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"signDeployAccountTransaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"Signs a DEPLOY_ACCOUNT transaction with the starknet private key and returns the signature"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#deployaccountsignerdetails"},(0,r.kt)("inlineCode",{parentName:"a"},"DeployAccountSignerDetails"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"contractAddress - the computed address of the contract - constructorCalldata - calldata to be passed in deploy constructor - addressSalt - contract address salt - chainId - the chainId to declare contract on - maxFee - maxFee for the declare transaction - version - transaction version - nonce - Nonce of the declare transaction")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"signature"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L60"},"src/signer/interface.ts:60")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signdeclaretransaction"},"signDeclareTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"signDeclareTransaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transaction"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"Signs a DECLARE transaction with the starknet private key and returns the signature"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/interfaces/types.DeclareSignerDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"DeclareSignerDetails"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"classHash - computed class hash. Will be replaced by ContractClass in future once class hash is present in CompiledContract - senderAddress - the address of the sender - chainId - the chainId to declare contract on - maxFee - maxFee for the declare transaction - version - transaction version - nonce - Nonce of the declare transaction")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"signature"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L76"},"src/signer/interface.ts:76")))}k.isMDXComponent=!0}}]);