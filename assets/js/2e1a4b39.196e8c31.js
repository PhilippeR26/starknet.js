"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8998],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>P});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=s,P=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(P,o(o({ref:r},l),{},{components:t})):n.createElement(P,o({ref:r},l))}));function P(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87930:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const a={id:"types.RPC.Errors.UNSUPPORTED_TX_VERSION",title:"Interface: UNSUPPORTED_TX_VERSION",sidebar_label:"UNSUPPORTED_TX_VERSION",custom_edit_url:null},o=void 0,i={unversionedId:"API/interfaces/types.RPC.Errors.UNSUPPORTED_TX_VERSION",id:"version-5.24.3/API/interfaces/types.RPC.Errors.UNSUPPORTED_TX_VERSION",title:"Interface: UNSUPPORTED_TX_VERSION",description:"RPC.Errors.UNSUPPORTEDTXVERSION",source:"@site/versioned_docs/version-5.24.3/API/interfaces/types.RPC.Errors.UNSUPPORTED_TX_VERSION.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.RPC.Errors.UNSUPPORTED_TX_VERSION",permalink:"/starknet.js/docs/API/interfaces/types.RPC.Errors.UNSUPPORTED_TX_VERSION",draft:!1,editUrl:null,tags:[],version:"5.24.3",frontMatter:{id:"types.RPC.Errors.UNSUPPORTED_TX_VERSION",title:"Interface: UNSUPPORTED_TX_VERSION",sidebar_label:"UNSUPPORTED_TX_VERSION",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"UNSUPPORTED_CONTRACT_CLASS_VERSION",permalink:"/starknet.js/docs/API/interfaces/types.RPC.Errors.UNSUPPORTED_CONTRACT_CLASS_VERSION"},next:{title:"VALIDATION_FAILURE",permalink:"/starknet.js/docs/API/interfaces/types.RPC.Errors.VALIDATION_FAILURE"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"code",id:"code",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,s.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types.RPC"},"RPC"),".",(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types.RPC.Errors"},"Errors"),".UNSUPPORTED_TX_VERSION"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"code"},"code"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"code"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"61")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/errors.ts#L138"},"src/types/api/rpcspec/errors.ts:138")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"message"},"message"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"message"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"the transaction version is not supported"')),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/errors.ts#L139"},"src/types/api/rpcspec/errors.ts:139")))}d.isMDXComponent=!0}}]);