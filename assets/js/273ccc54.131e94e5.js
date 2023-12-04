"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[53659],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(t),k=i,f=c["".concat(p,".").concat(k)]||c[k]||u[k]||a;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},19232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={id:"types.Sequencer.InvokeFunctionTransactionResponse",title:"Interface: InvokeFunctionTransactionResponse",sidebar_label:"InvokeFunctionTransactionResponse",custom_edit_url:null},s=void 0,o={unversionedId:"API/interfaces/types.Sequencer.InvokeFunctionTransactionResponse",id:"API/interfaces/types.Sequencer.InvokeFunctionTransactionResponse",title:"Interface: InvokeFunctionTransactionResponse",description:"types.Sequencer.InvokeFunctionTransactionResponse",source:"@site/docs/API/interfaces/types.Sequencer.InvokeFunctionTransactionResponse.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.Sequencer.InvokeFunctionTransactionResponse",permalink:"/starknet.js/docs/next/API/interfaces/types.Sequencer.InvokeFunctionTransactionResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types.Sequencer.InvokeFunctionTransactionResponse",title:"Interface: InvokeFunctionTransactionResponse",sidebar_label:"InvokeFunctionTransactionResponse",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"VALIDATION_FAILURE",permalink:"/starknet.js/docs/next/API/interfaces/types.RPC.Errors.VALIDATION_FAILURE"},next:{title:"StarkNetDomain",permalink:"/starknet.js/docs/next/API/interfaces/types.StarkNetDomain"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"transaction_hash",id:"transaction_hash",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"entry_point_selector",id:"entry_point_selector",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"sender_address",id:"sender_address",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"signature",id:"signature",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"entry_point_type",id:"entry_point_type",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"calldata",id:"calldata",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"nonce",id:"nonce",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"max_fee",id:"max_fee",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"version",id:"version",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-9",level:4}],d={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types"},"types"),".",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types.Sequencer"},"Sequencer"),".InvokeFunctionTransactionResponse"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types.Sequencer#invokefunctiontransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"InvokeFunctionTransaction"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"InvokeFunctionTransactionResponse"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"transaction_hash"},"transaction","_","hash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transaction","_","hash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L149"},"src/types/api/sequencer.ts:149")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entry_point_selector"},"entry","_","point","_","selector"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"entry","_","point","_","selector"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L150"},"src/types/api/sequencer.ts:150")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/enums/types.TransactionType#invoke"},(0,i.kt)("inlineCode",{parentName:"a"},"INVOKE"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.type"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L120"},"src/types/api/sequencer.ts:120")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sender_address"},"sender","_","address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"sender","_","address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.sender","_","address"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L121"},"src/types/api/sequencer.ts:121")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signature"},"signature"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"signature"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.signature"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L122"},"src/types/api/sequencer.ts:122")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entry_point_type"},"entry","_","point","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"entry","_","point","_","type"),": ",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/enums/types.EntryPointType#external"},(0,i.kt)("inlineCode",{parentName:"a"},"EXTERNAL"))),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.entry","_","point","_","type"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L123"},"src/types/api/sequencer.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"calldata"},"calldata"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"calldata"),": ",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types#rawcalldata"},(0,i.kt)("inlineCode",{parentName:"a"},"RawCalldata"))),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.calldata"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L124"},"src/types/api/sequencer.ts:124")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nonce"},"nonce"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nonce"),": ",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types#bignumberish"},(0,i.kt)("inlineCode",{parentName:"a"},"BigNumberish"))),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.nonce"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L125"},"src/types/api/sequencer.ts:125")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max_fee"},"max","_","fee"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"max","_","fee"),": ",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types#bignumberish"},(0,i.kt)("inlineCode",{parentName:"a"},"BigNumberish"))),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.max","_","fee"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L126"},"src/types/api/sequencer.ts:126")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"version"},"version"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"version"),": ",(0,i.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types#bignumberish"},(0,i.kt)("inlineCode",{parentName:"a"},"BigNumberish"))),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,"InvokeFunctionTransaction.version"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/sequencer.ts#L127"},"src/types/api/sequencer.ts:127")))}u.isMDXComponent=!0}}]);