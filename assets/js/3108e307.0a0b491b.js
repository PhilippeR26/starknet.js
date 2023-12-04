"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[18066],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:e},u),{},{components:n})):r.createElement(m,c({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52041:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:15},c="Interact with more than one contract within one transaction",i={unversionedId:"guides/multiCall",id:"version-4.22.0/guides/multiCall",title:"Interact with more than one contract within one transaction",description:"Interacting with more than one contract with one transaction is one of Starknet's features. To use this feature, two contracts are required.",source:"@site/versioned_docs/version-4.22.0/guides/multiCall.md",sourceDirName:"guides",slug:"/guides/multiCall",permalink:"/starknet.js/docs/4.22.0/guides/multiCall",draft:!1,tags:[],version:"4.22.0",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Signature",permalink:"/starknet.js/docs/4.22.0/guides/signature"},next:{title:"Usage with Create React App",permalink:"/starknet.js/docs/4.22.0/guides/cra"}},s={},l=[{value:"Setup",id:"setup",level:2},{value:"Interact with contracts",id:"interact-with-contracts",level:2}],u={toc:l},d="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interact-with-more-than-one-contract-within-one-transaction"},"Interact with more than one contract within one transaction"),(0,a.kt)("p",null,"Interacting with more than one contract with one transaction is one of Starknet's features. To use this feature, two contracts are required."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Set up basic stuff before multicall."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// devnet private key from Account #0 if generated with --seed 0\nconst starkKeyPair = ec.getKeyPair(\"0xe3e70682c2094cac629f6fbed82c07cd\");\nconst accountAddress = \"0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a\";\n\n// Ether token contract address\nconst contractAddress_1 = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';\n\n// contract address which require ether\nconst contractAddress_2 = '0x078f36c1d59dd29e00a0bb60aa2a9409856f4f9841c47f165aba5bab4225aa6b';\n\nconst account = new Account(\n    provider,\n    accountAddress,\n    starkKeyPair\n  );\n")),(0,a.kt)("h2",{id:"interact-with-contracts"},"Interact with contracts"),(0,a.kt)("p",null,"Interact with more than one contract by using ",(0,a.kt)("inlineCode",{parentName:"p"},"account.execute([calls])"),". Example is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const multiCall = await account.execute(\n    [\n    // Calling the first contract\n    {\n    contractAddress: contractAddress_1,\n    entrypoint: \"approve\",\n    // approve 1 wei for bridge\n    calldata: stark.compileCalldata({\n        spender: contractAddress_2,\n        amount: {type: 'struct', low: '1', high: '0'},\n      })\n    },\n    // Calling the second contract\n    {\n      contractAddress: contractAddress_2,\n      entrypoint: \"transfer_ether\",\n      // transfer 1 wei to the contract address\n      calldata: stark.compileCalldata({\n          amount: {type: 'struct', low: '1', high: '0'},\n      })\n    }\n  ]\n)\nawait provider.waitForTransaction(multiCall.transaction_hash);\n")))}p.isMDXComponent=!0}}]);