"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[64516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(n),f=r,m=c["".concat(o,".").concat(f)]||c[f]||k[f]||s;return n?a.createElement(m,p(p({ref:t},d),{},{components:n})):a.createElement(m,p({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<s;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const s={id:"types.StateUpdateResponse",title:"Interface: StateUpdateResponse",sidebar_label:"StateUpdateResponse",custom_edit_url:null},p=void 0,l={unversionedId:"API/interfaces/types.StateUpdateResponse",id:"API/interfaces/types.StateUpdateResponse",title:"Interface: StateUpdateResponse",description:"types.StateUpdateResponse",source:"@site/docs/API/interfaces/types.StateUpdateResponse.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.StateUpdateResponse",permalink:"/starknet.js/docs/next/API/interfaces/types.StateUpdateResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types.StateUpdateResponse",title:"Interface: StateUpdateResponse",sidebar_label:"StateUpdateResponse",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"StarkNetDomain",permalink:"/starknet.js/docs/next/API/interfaces/types.StarkNetDomain"},next:{title:"TypedData",permalink:"/starknet.js/docs/next/API/interfaces/types.TypedData"}},o={},i=[{value:"Properties",id:"properties",level:2},{value:"block_hash",id:"block_hash",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"new_root",id:"new_root",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"old_root",id:"old_root",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"state_diff",id:"state_diff",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:i},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types"},"types"),".StateUpdateResponse"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"block_hash"},"block","_","hash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"block","_","hash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L227"},"src/types/provider/response.ts:227")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"new_root"},"new","_","root"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"new","_","root"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L228"},"src/types/provider/response.ts:228")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"old_root"},"old","_","root"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"old","_","root"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L229"},"src/types/provider/response.ts:229")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"state_diff"},"state","_","diff"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"state","_","diff"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"storage_diffs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.RPC#storagediffs"},(0,r.kt)("inlineCode",{parentName:"a"},"StorageDiffs")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deployed_contracts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.Sequencer#deployedcontracts"},(0,r.kt)("inlineCode",{parentName:"a"},"DeployedContracts")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonces")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.RPC#nonceupdates"},(0,r.kt)("inlineCode",{parentName:"a"},"NonceUpdates")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"old_declared_contracts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.Sequencer#olddeclaredcontracts"},(0,r.kt)("inlineCode",{parentName:"a"},"OldDeclaredContracts")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"declared_classes?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.Sequencer#declaredclasses"},(0,r.kt)("inlineCode",{parentName:"a"},"DeclaredClasses")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"replaced_classes?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.Sequencer#replacedclasses"},(0,r.kt)("inlineCode",{parentName:"a"},"ReplacedClasses"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.RPC#replacedclasses"},(0,r.kt)("inlineCode",{parentName:"a"},"ReplacedClasses")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"deprecated_declared_classes?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/starknet.js/docs/next/API/namespaces/types.RPC#deprecateddeclaredclasses"},(0,r.kt)("inlineCode",{parentName:"a"},"DeprecatedDeclaredClasses")))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/provider/response.ts#L230"},"src/types/provider/response.ts:230")))}k.isMDXComponent=!0}}]);