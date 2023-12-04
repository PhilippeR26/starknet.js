"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[88953],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>O});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,O=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(O,a(a({ref:r},l),{},{components:t})):n.createElement(O,a({ref:r},l))}));function O(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71294:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const o={id:"types.RPC.Errors.BLOCK_NOT_FOUND",title:"Interface: BLOCK_NOT_FOUND",sidebar_label:"BLOCK_NOT_FOUND",custom_edit_url:null},a=void 0,i={unversionedId:"API/interfaces/types.RPC.Errors.BLOCK_NOT_FOUND",id:"version-5.24.3/API/interfaces/types.RPC.Errors.BLOCK_NOT_FOUND",title:"Interface: BLOCK_NOT_FOUND",description:"RPC.Errors.BLOCKNOTFOUND",source:"@site/versioned_docs/version-5.24.3/API/interfaces/types.RPC.Errors.BLOCK_NOT_FOUND.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.RPC.Errors.BLOCK_NOT_FOUND",permalink:"/starknet.js/docs/API/interfaces/types.RPC.Errors.BLOCK_NOT_FOUND",draft:!1,editUrl:null,tags:[],version:"5.24.3",frontMatter:{id:"types.RPC.Errors.BLOCK_NOT_FOUND",title:"Interface: BLOCK_NOT_FOUND",sidebar_label:"BLOCK_NOT_FOUND",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ProviderOptions",permalink:"/starknet.js/docs/API/interfaces/types.ProviderOptions"},next:{title:"CLASS_ALREADY_DECLARED",permalink:"/starknet.js/docs/API/interfaces/types.RPC.Errors.CLASS_ALREADY_DECLARED"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"code",id:"code",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,s.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types.RPC"},"RPC"),".",(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types.RPC.Errors"},"Errors"),".BLOCK_NOT_FOUND"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"code"},"code"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"code"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"24")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/errors.ts#L30"},"src/types/api/rpcspec/errors.ts:30")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"message"},"message"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"message"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"Block not found"')),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/errors.ts#L31"},"src/types/api/rpcspec/errors.ts:31")))}u.isMDXComponent=!0}}]);