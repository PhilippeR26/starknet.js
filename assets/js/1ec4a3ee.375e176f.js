"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[59917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=s,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function v(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const i={id:"types.Event",title:"Interface: Event",sidebar_label:"Event",custom_edit_url:null},a=void 0,o={unversionedId:"API/interfaces/types.Event",id:"version-5.19.5/API/interfaces/types.Event",title:"Interface: Event",description:"types.Event",source:"@site/versioned_docs/version-5.19.5/API/interfaces/types.Event.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.Event",permalink:"/starknet.js/docs/5.19.5/API/interfaces/types.Event",draft:!1,editUrl:null,tags:[],version:"5.19.5",frontMatter:{id:"types.Event",title:"Interface: Event",sidebar_label:"Event",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"EstimateFeeResponse",permalink:"/starknet.js/docs/5.19.5/API/interfaces/types.EstimateFeeResponse"},next:{title:"GetBlockResponse",permalink:"/starknet.js/docs/5.19.5/API/interfaces/types.GetBlockResponse"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"from_address",id:"from_address",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"keys",id:"keys",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/starknet.js/docs/5.19.5/API/namespaces/types"},"types"),".Event"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"from_address"},"from_address"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"from_address"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.19.5/src/types/provider/response.ts#L83"},"src/types/provider/response.ts:83")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"keys"},"keys"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"keys"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.19.5/src/types/provider/response.ts#L84"},"src/types/provider/response.ts:84")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"data"},"data"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"data"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.19.5/src/types/provider/response.ts#L85"},"src/types/provider/response.ts:85")))}u.isMDXComponent=!0}}]);