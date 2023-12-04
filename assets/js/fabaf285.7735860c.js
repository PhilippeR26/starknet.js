"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[74284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>O});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=s,O=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(O,o(o({ref:t},l),{},{components:r})):n.createElement(O,o({ref:t},l))}));function O(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const a={id:"types.RPC.Errors.PAGE_SIZE_TOO_BIG",title:"Interface: PAGE_SIZE_TOO_BIG",sidebar_label:"PAGE_SIZE_TOO_BIG",custom_edit_url:null},o=void 0,i={unversionedId:"API/interfaces/types.RPC.Errors.PAGE_SIZE_TOO_BIG",id:"API/interfaces/types.RPC.Errors.PAGE_SIZE_TOO_BIG",title:"Interface: PAGE_SIZE_TOO_BIG",description:"RPC.Errors.PAGESIZETOO_BIG",source:"@site/docs/API/interfaces/types.RPC.Errors.PAGE_SIZE_TOO_BIG.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.RPC.Errors.PAGE_SIZE_TOO_BIG",permalink:"/starknet.js/docs/next/API/interfaces/types.RPC.Errors.PAGE_SIZE_TOO_BIG",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types.RPC.Errors.PAGE_SIZE_TOO_BIG",title:"Interface: PAGE_SIZE_TOO_BIG",sidebar_label:"PAGE_SIZE_TOO_BIG",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"NO_TRACE_AVAILABLE",permalink:"/starknet.js/docs/next/API/interfaces/types.RPC.Errors.NO_TRACE_AVAILABLE"},next:{title:"TOO_MANY_KEYS_IN_FILTER",permalink:"/starknet.js/docs/next/API/interfaces/types.RPC.Errors.TOO_MANY_KEYS_IN_FILTER"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"code",id:"code",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types.RPC"},"RPC"),".",(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types.RPC.Errors"},"Errors"),".PAGE_SIZE_TOO_BIG"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"code"},"code"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"code"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"31")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/rpcspec/errors.ts#L60"},"src/types/api/rpcspec/errors.ts:60")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"message"},"message"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"message"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"Requested page size is too big"')),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/api/rpcspec/errors.ts#L61"},"src/types/api/rpcspec/errors.ts:61")))}d.isMDXComponent=!0}}]);