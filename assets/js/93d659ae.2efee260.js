"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[49985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,k=d["".concat(s,".").concat(y)]||d[y]||p[y]||c;return n?r.createElement(k,o(o({ref:t},l),{},{components:n})):r.createElement(k,o({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const c={sidebar_position:4},o="\ud83d\udd0c Connect an existing account",i={unversionedId:"guides/connect_account",id:"version-4.22.0/guides/connect_account",title:"\ud83d\udd0c Connect an existing account",description:"Once your provider is initialized, you can connect an existing account.",source:"@site/versioned_docs/version-4.22.0/guides/connect_account.md",sourceDirName:"guides",slug:"/guides/connect_account",permalink:"/starknet.js/docs/4.22.0/guides/connect_account",draft:!1,tags:[],version:"4.22.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Provider object \ud83d\udd0c connect to the network",permalink:"/starknet.js/docs/4.22.0/guides/connect_network"},next:{title:"\ud83d\udd0c Connect a deployed contract",permalink:"/starknet.js/docs/4.22.0/guides/connect_contract"}},s={},u=[{value:"Connect a predeployed account in Starknet-devnet",id:"connect-a-predeployed-account-in-starknet-devnet",level:2},{value:"\ud83d\udc5b Connect an existing account (in any network)",id:"-connect-an-existing-account-in-any-network",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-connect-an-existing-account"},"\ud83d\udd0c Connect an existing account"),(0,a.kt)("p",null,"Once your provider is initialized, you can connect an existing account."),(0,a.kt)("p",null,"You need 2 data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the address of the account"),(0,a.kt)("li",{parentName:"ul"},"the private key of this account")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account, ec, Provider } from "starknet";\n')),(0,a.kt)("h2",{id:"connect-a-predeployed-account-in-starknet-devnet"},"Connect a predeployed account in Starknet-devnet"),(0,a.kt)("p",null,"When you launch starknet-devnet, 10 accounts are predeployed with 100 dummy ETH in each."),(0,a.kt)("p",null,"Addresses and private keys are displayed on the console at initialization."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This data will change at each launch, so to freeze them, launch with: ",(0,a.kt)("inlineCode",{parentName:"p"},"starknet-devnet --seed 0"),".")),(0,a.kt)("p",null,"The result for ",(0,a.kt)("inlineCode",{parentName:"p"},"account #0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Address: 0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a\nPublic key: 0x7e52885445756b313ea16849145363ccb73fb4ab0440dbac333cf9d13de82b9\nPrivate key: 0xe3e70682c2094cac629f6fbed82c07cd\n")),(0,a.kt)("p",null,"Then you can use this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// initialize provider\nconst provider = new Provider({ sequencer: { baseUrl:"http://127.0.0.1:5050"  } });\n// initialize existing pre-deployed account 0 of Devnet\nconst privateKey = "0xe3e70682c2094cac629f6fbed82c07cd";\nconst starkKeyPair = ec.getKeyPair(privateKey);\nconst accountAddress = "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a";\n\nconst account = new Account(provider, accountAddress, starkKeyPair);\n')),(0,a.kt)("p",null,"Your account is now connected, and you can use it."),(0,a.kt)("h2",{id:"-connect-an-existing-account-in-any-network"},"\ud83d\udc5b Connect an existing account (in any network)"),(0,a.kt)("p",null,"The code is exactly the same, you just have to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"connect to the appropriate network."),(0,a.kt)("li",{parentName:"ul"},"use the address of this account (public data)."),(0,a.kt)("li",{parentName:"ul"},"use the private key of this account (very sensitive data: your code MUST not disclose it).")),(0,a.kt)("p",null,"For example, to connect an existing account to testnet, with a private key stored in .env non archived file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as dotenv from "dotenv";\ndotenv.config();\n\n// initialize provider\nconst provider = new Provider({ sequencer: { baseUrl:"goerli-alpha"  } });\n// initialize existing account\nconst privateKey = process.env.OZ_NEW_ACCOUNT_PRIVKEY;\nconst starkKeyPair = ec.getKeyPair(privateKey);\nconst accountAddress = "0x051158d244c7636dde39ec822873b29e6c9a758c6a9812d005b6287564908667";\n\nconst account = new Account(provider, accountAddress, starkKeyPair);\n')))}p.isMDXComponent=!0}}]);