"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return n?a.createElement(f,c(c({ref:t},l),{},{components:n})):a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},14474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:4},c="\ud83d\udd0c Connect to an existing account",i={unversionedId:"guides/connect_account",id:"version-5.19.5/guides/connect_account",title:"\ud83d\udd0c Connect to an existing account",description:"Once your provider is initialized, you can connect an existing account.",source:"@site/versioned_docs/version-5.19.5/guides/connect_account.md",sourceDirName:"guides",slug:"/guides/connect_account",permalink:"/starknet.js/docs/5.19.5/guides/connect_account",draft:!1,tags:[],version:"5.19.5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Provider object \ud83d\udd0c connect to the network",permalink:"/starknet.js/docs/5.19.5/guides/connect_network"},next:{title:"\ud83d\udd0c Connect a deployed contract",permalink:"/starknet.js/docs/5.19.5/guides/connect_contract"}},s={},u=[{value:"Connect to a pre-deployed account in Starknet-devnet",id:"connect-to-a-pre-deployed-account-in-starknet-devnet",level:2},{value:"\ud83d\udc5b Connect to an existing account (in any network)",id:"-connect-to-an-existing-account-in-any-network",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-connect-to-an-existing-account"},"\ud83d\udd0c Connect to an existing account"),(0,o.kt)("p",null,"Once your provider is initialized, you can connect an existing account."),(0,o.kt)("p",null,"You need 2 pieces of data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the address of the account"),(0,o.kt)("li",{parentName:"ul"},"the private key of this account")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account, Provider } from "starknet";\n')),(0,o.kt)("h2",{id:"connect-to-a-pre-deployed-account-in-starknet-devnet"},"Connect to a pre-deployed account in Starknet-devnet"),(0,o.kt)("p",null,"When you launch starknet-devnet, 10 accounts are pre-deployed with 100 dummy ETH in each."),(0,o.kt)("p",null,"Addresses and private keys are displayed on the console at initialization."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This data will change at each launch, so to freeze them, launch with: ",(0,o.kt)("inlineCode",{parentName:"p"},"starknet-devnet --seed 0"),".")),(0,o.kt)("p",null,"The result for ",(0,o.kt)("inlineCode",{parentName:"p"},"account #0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Address: 0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a\nPublic key: 0x7e52885445756b313ea16849145363ccb73fb4ab0440dbac333cf9d13de82b9\nPrivate key: 0xe3e70682c2094cac629f6fbed82c07cd\n")),(0,o.kt)("p",null,"Then you can use this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// initialize provider\nconst provider = new Provider({ sequencer: { baseUrl:"http://127.0.0.1:5050"  } });\n// initialize existing pre-deployed account 0 of Devnet\nconst privateKey = "0xe3e70682c2094cac629f6fbed82c07cd";\nconst accountAddress = "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a";\n\nconst account = new Account(provider, accountAddress, privateKey);\n')),(0,o.kt)("p",null,"Your account is now connected, and you can use it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:"),' If this account is based on a Cairo v2 contract (for example OpenZeppelin account 0.7.0 or later), do not forget to add the parameter "1" after the privateKey parameter:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const account = new Account(provider, accountAddress, privateKey, "1");\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Take care that this added parameter is a string, NOT a number.")),(0,o.kt)("h2",{id:"-connect-to-an-existing-account-in-any-network"},"\ud83d\udc5b Connect to an existing account (in any network)"),(0,o.kt)("p",null,"The code is the same, you just have to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"connect to the appropriate network."),(0,o.kt)("li",{parentName:"ul"},"use the address of this account (public data)."),(0,o.kt)("li",{parentName:"ul"},"use the private key of this account (very sensitive data: your code MUST not disclose it).")),(0,o.kt)("p",null,"For example, to connect an existing account on testnet, with a private key stored in a .env non-archived file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as dotenv from "dotenv";\ndotenv.config();\n\n// initialize provider\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI  } });\n// initialize existing account\nconst privateKey = process.env.OZ_NEW_ACCOUNT_PRIVKEY;\nconst accountAddress = "0x051158d244c7636dde39ec822873b29e6c9a758c6a9812d005b6287564908667";\n\nconst account = new Account(provider, accountAddress, privateKey);\n// add ,"1" after privateKey if this account is not a Cairo 0 contract\n\n')))}p.isMDXComponent=!0}}]);