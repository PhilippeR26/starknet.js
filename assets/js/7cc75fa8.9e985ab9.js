"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||y[u]||p;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const p={id:"types.TypedData",title:"Interface: TypedData",sidebar_label:"TypedData",custom_edit_url:null},i=void 0,s={unversionedId:"API/interfaces/types.TypedData",id:"API/interfaces/types.TypedData",title:"Interface: TypedData",description:"types.TypedData",source:"@site/docs/API/interfaces/types.TypedData.md",sourceDirName:"API/interfaces",slug:"/API/interfaces/types.TypedData",permalink:"/starknet.js/docs/next/API/interfaces/types.TypedData",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"types.TypedData",title:"Interface: TypedData",sidebar_label:"TypedData",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"StateUpdateResponse",permalink:"/starknet.js/docs/next/API/interfaces/types.StateUpdateResponse"},next:{title:"Uint256",permalink:"/starknet.js/docs/next/API/interfaces/types.Uint256"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"types",id:"types",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"primaryType",id:"primarytype",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"domain",id:"domain",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:o},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types"},"types"),".TypedData"),(0,a.kt)("p",null,"The complete typed data, with all the structs, domain data, primary type of the message, and the message itself."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"types"},"types"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"types"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/namespaces/types#starknettype"},(0,a.kt)("inlineCode",{parentName:"a"},"StarkNetType")),"[]",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/typedData.ts#L33"},"src/types/typedData.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"primarytype"},"primaryType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"primaryType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/typedData.ts#L34"},"src/types/typedData.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"domain"},"domain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"domain"),": ",(0,a.kt)("a",{parentName:"p",href:"/starknet.js/docs/next/API/interfaces/types.StarkNetDomain"},(0,a.kt)("inlineCode",{parentName:"a"},"StarkNetDomain"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/typedData.ts#L35"},"src/types/typedData.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/develop/src/types/typedData.ts#L36"},"src/types/typedData.ts:36")))}y.isMDXComponent=!0}}]);