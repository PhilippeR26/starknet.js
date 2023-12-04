"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[52029],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),i=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=i(a),m=r,u=d["".concat(s,".").concat(m)]||d[m]||k[m]||c;return a?n.createElement(u,l(l({ref:e},p),{},{components:a})):n.createElement(u,l({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,l=new Array(c);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var i=2;i<c;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71608:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const c={id:"ContractFactory",title:"Class: ContractFactory",sidebar_label:"ContractFactory",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"API/classes/ContractFactory",id:"version-5.24.3/API/classes/ContractFactory",title:"Class: ContractFactory",description:"Constructors",source:"@site/versioned_docs/version-5.24.3/API/classes/ContractFactory.md",sourceDirName:"API/classes",slug:"/API/classes/ContractFactory",permalink:"/starknet.js/docs/API/classes/ContractFactory",draft:!1,editUrl:null,tags:[],version:"5.24.3",sidebarPosition:0,frontMatter:{id:"ContractFactory",title:"Class: ContractFactory",sidebar_label:"ContractFactory",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"Contract",permalink:"/starknet.js/docs/API/classes/Contract"},next:{title:"ContractInterface",permalink:"/starknet.js/docs/API/classes/ContractInterface"}},s={},i=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"compiledContract",id:"compiledcontract",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"account",id:"account",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"abi",id:"abi",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"classHash",id:"classhash",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"casm",id:"casm",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"compiledClassHash",id:"compiledclasshash",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"CallData",id:"calldata",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods",level:2},{value:"deploy",id:"deploy",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"attach",id:"attach",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:i},d="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ContractFactory"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/modules#contractfactoryparams"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractFactoryParams"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"CFParams - compiledContract: CompiledContract; - account: AccountInterface; - casm?: CairoAssembly; - classHash?: string; - compiledClassHash?: string; - abi?: Abi;")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L46"},"src/contract/contractFactory.ts:46")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"compiledcontract"},"compiledContract"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"compiledContract"),": ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#compiledcontract"},(0,r.kt)("inlineCode",{parentName:"a"},"CompiledContract"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L23"},"src/contract/contractFactory.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"account"},"account"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"account"),": ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/AccountInterface"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountInterface"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L25"},"src/contract/contractFactory.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"abi"},"abi"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"abi"),": ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#abi"},(0,r.kt)("inlineCode",{parentName:"a"},"Abi"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L27"},"src/contract/contractFactory.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"classhash"},"classHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"classHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L29"},"src/contract/contractFactory.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"casm"},"casm"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"casm"),": ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#cairoassembly"},(0,r.kt)("inlineCode",{parentName:"a"},"CairoAssembly"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L31"},"src/contract/contractFactory.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"compiledclasshash"},"compiledClassHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"compiledClassHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L33"},"src/contract/contractFactory.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"calldata"},"CallData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"CallData"),": ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/CallData"},(0,r.kt)("inlineCode",{parentName:"a"},"CallData"))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L35"},"src/contract/contractFactory.ts:35")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"deploy"},"deploy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deploy"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/Contract"},(0,r.kt)("inlineCode",{parentName:"a"},"Contract")),">"),(0,r.kt)("p",null,"Deploys contract and returns new instance of the Contract"),(0,r.kt)("p",null,"If contract is not declared it will first declare it, and then deploy"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#argsorcalldatawithoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ArgsOrCalldataWithOptions")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/Contract"},(0,r.kt)("inlineCode",{parentName:"a"},"Contract")),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L61"},"src/contract/contractFactory.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"connect"},"connect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"connect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"account"),"): ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/ContractFactory"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractFactory"))),(0,r.kt)("p",null,"Attaches to new Account"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/classes/AccountInterface"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountInterface"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"new Account to attach to")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/ContractFactory"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractFactory"))),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L101"},"src/contract/contractFactory.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"attach"},"attach"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"attach"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/Contract"},(0,r.kt)("inlineCode",{parentName:"a"},"Contract"))),(0,r.kt)("p",null,"Attaches current abi and account to the new address"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/classes/Contract"},(0,r.kt)("inlineCode",{parentName:"a"},"Contract"))),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/contract/contractFactory.ts#L109"},"src/contract/contractFactory.ts:109")))}k.isMDXComponent=!0}}]);