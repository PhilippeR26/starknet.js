"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:18},i="Automatic TypeScript parsing of Cairo ABI-s",c={unversionedId:"guides/automatic_cairo_ABI_parsing",id:"guides/automatic_cairo_ABI_parsing",title:"Automatic TypeScript parsing of Cairo ABI-s",description:"Starknet.js has integrated Abi-Wan-Kanabi, the standalone TypeScript parser for Cairo smart contracts.",source:"@site/docs/guides/automatic_cairo_ABI_parsing.md",sourceDirName:"guides",slug:"/guides/automatic_cairo_ABI_parsing",permalink:"/starknet.js/docs/next/guides/automatic_cairo_ABI_parsing",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"defaultSidebar",previous:{title:"Usage with Create React App",permalink:"/starknet.js/docs/next/guides/cra"},next:{title:"Migrate from v4 to v5",permalink:"/starknet.js/docs/next/guides/migrate"}},p={},s=[{value:"Supported Cairo ABI-s",id:"supported-cairo-abi-s",level:2},{value:"Usage",id:"usage",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automatic-typescript-parsing-of-cairo-abi-s"},"Automatic TypeScript parsing of Cairo ABI-s"),(0,a.kt)("p",null,"Starknet.js has integrated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/keep-starknet-strange/abi-wan-kanabi"},"Abi-Wan-Kanabi"),", the standalone TypeScript parser for Cairo smart contracts."),(0,a.kt)("p",null,"It enables on-the-fly typechecking and autocompletion for contract calls directly in TypeScript. Developers can now catch typing mistakes early, prior to executing a call on-chain, thus enhancing the overall DAPP development experience."),(0,a.kt)("h2",{id:"supported-cairo-abi-s"},"Supported Cairo ABI-s"),(0,a.kt)("p",null,"Please take a look on the Abi-Wan ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/keep-starknet-strange/abi-wan-kanabi#cairo-versions"},"documentation")," for a list of supported Cairo ABI-s."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First, you need to wrap your ABI in a array and export it as a ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const tAbi = [\n  {\n    type: 'function',\n    name: 'increase_balance',\n    inputs: [\n      {\n        name: 'amount',\n        type: 'core::felt252',\n      },\n    ],\n    outputs: [],\n    state_mutability: 'external',\n  },\n] as const;\n")),(0,a.kt)("p",null,"Later on, to use it in our code, we have 2 options."),(0,a.kt)("h3",{id:"option-1"},"Option 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { tAbi } from '../__mocks__/hello';\nimport { TypedContract } from '../src';\n\nlet cairo1Contract: TypedContract<typeof tAbi>; // tAbi is your Cairo contract ABI\n")),(0,a.kt)("p",null,"After that, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"cairo1Contract")," in your code as you would before, but with autocomplete and type checking!"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const tx = await cairo1Contract.increase_balance(100);\n")),(0,a.kt)("h3",{id:"option-2"},"Option 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { tAbi } from '../__mocks__/hello';\n\n// ...\n\nlet cairo1Contract = new Contract(compiledHelloSierra.abi, dd.deploy.contract_address, account);\n\nlet cairo1ContractTyped = cairo1Contract.typed(tAbi);\n\ncairo1ContractTyped.test_bool();\n")))}d.isMDXComponent=!0}}]);