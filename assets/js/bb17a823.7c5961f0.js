"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[68911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"types.CommonTransactionResponse",title:"Interface: CommonTransactionResponse",sidebar_label:"CommonTransactionResponse",custom_edit_url:null},i=void 0,o={unversionedId:"API/interfaces/types.CommonTransactionResponse",id:"API/interfaces/types.CommonTransactionResponse",title:"Interface: CommonTransactionResponse",description:"types.CommonTransactionResponse",source:"@site/docs/API/interfaces/types.CommonTransactionResponse.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.CommonTransactionResponse",permalink:"/starknet.js/docs/next/API/interfaces/types.CommonTransactionResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types.CommonTransactionResponse",title:"Interface: CommonTransactionResponse",sidebar_label:"CommonTransactionResponse",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"CallStruct",permalink:"/starknet.js/docs/next/API/interfaces/types.CallStruct"},next:{title:"ContractEntryPoint",permalink:"/starknet.js/docs/next/API/interfaces/types.ContractEntryPoint"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"transaction_hash",id:"transaction_hash",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"version",id:"version",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"signature",id:"signature",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"max_fee",id:"max_fee",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types"},"types"),".CommonTransactionResponse"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CommonTransactionResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/interfaces/types.InvokeTransactionResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"InvokeTransactionResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/interfaces/types.DeclareTransactionResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"DeclareTransactionResponse"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"transaction_hash"},"transaction","_","hash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"transaction","_","hash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L58"},"src/types/provider/response.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"version"},"version"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L59"},"src/types/provider/response.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signature"},"signature"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"signature"),": ",(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types#signature"},(0,a.kt)("inlineCode",{parentName:"a"},"Signature"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L60"},"src/types/provider/response.ts:60")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"max_fee"},"max","_","fee"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"max","_","fee"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L61"},"src/types/provider/response.ts:61")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nonce"},"nonce"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L62"},"src/types/provider/response.ts:62")))}m.isMDXComponent=!0}}]);