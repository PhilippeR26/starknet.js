"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[86886],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var c=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=c.createContext({}),u=function(e){var n=c.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return c.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},y=c.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),y=r,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return t?c.createElement(f,o(o({ref:n},l),{},{components:t})):c.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return c.createElement.apply(null,o)}return c.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var c=t(87462),r=(t(67294),t(3905));const a={sidebar_position:4},o="\ud83d\udd0c Connect an existing account",i={unversionedId:"guides/connect_account",id:"version-5.14.1/guides/connect_account",title:"\ud83d\udd0c Connect an existing account",description:"Once your provider is initialized, you can connect an existing account.",source:"@site/versioned_docs/version-5.14.1/guides/connect_account.md",sourceDirName:"guides",slug:"/guides/connect_account",permalink:"/starknet.js/docs/5.14.1/guides/connect_account",draft:!1,tags:[],version:"5.14.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Provider object \ud83d\udd0c connect to the network",permalink:"/starknet.js/docs/5.14.1/guides/connect_network"},next:{title:"\ud83d\udd0c Connect a deployed contract",permalink:"/starknet.js/docs/5.14.1/guides/connect_contract"}},s={},u=[{value:"Connect a predeployed account in Starknet-devnet",id:"connect-a-predeployed-account-in-starknet-devnet",level:2},{value:"\ud83d\udc5b Connect an existing account (in any network)",id:"-connect-an-existing-account-in-any-network",level:2}],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,c.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-connect-an-existing-account"},"\ud83d\udd0c Connect an existing account"),(0,r.kt)("p",null,"Once your provider is initialized, you can connect an existing account."),(0,r.kt)("p",null,"You need 2 data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the address of the account"),(0,r.kt)("li",{parentName:"ul"},"the private key of this account")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Account, Provider } from "starknet";\n')),(0,r.kt)("h2",{id:"connect-a-predeployed-account-in-starknet-devnet"},"Connect a predeployed account in Starknet-devnet"),(0,r.kt)("p",null,"When you launch starknet-devnet, 10 accounts are predeployed with 100 dummy ETH in each."),(0,r.kt)("p",null,"Addresses and private keys are displayed on the console at initialization."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This data will change at each launch, so to freeze them, launch with: ",(0,r.kt)("inlineCode",{parentName:"p"},"starknet-devnet --seed 0"),".")),(0,r.kt)("p",null,"The result for ",(0,r.kt)("inlineCode",{parentName:"p"},"account #0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Address: 0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a\nPublic key: 0x7e52885445756b313ea16849145363ccb73fb4ab0440dbac333cf9d13de82b9\nPrivate key: 0xe3e70682c2094cac629f6fbed82c07cd\n")),(0,r.kt)("p",null,"Then you can use this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// initialize provider\nconst provider = new Provider({ sequencer: { baseUrl:"http://127.0.0.1:5050"  } });\n// initialize existing pre-deployed account 0 of Devnet\nconst privateKey = "0xe3e70682c2094cac629f6fbed82c07cd";\nconst accountAddress = "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a";\n\nconst account = new Account(provider, accountAddress, privateKey);\n')),(0,r.kt)("p",null,"Your account is now connected, and you can use it."),(0,r.kt)("h2",{id:"-connect-an-existing-account-in-any-network"},"\ud83d\udc5b Connect an existing account (in any network)"),(0,r.kt)("p",null,"The code is exactly the same, you just have to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connect to the appropriate network."),(0,r.kt)("li",{parentName:"ul"},"use the address of this account (public data)."),(0,r.kt)("li",{parentName:"ul"},"use the private key of this account (very sensitive data: your code MUST not disclose it).")),(0,r.kt)("p",null,"For example, to connect an existing account to testnet, with a private key stored in .env non archived file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as dotenv from "dotenv";\ndotenv.config();\n\n// initialize provider\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI2  } });\n// initialize existing account\nconst privateKey = process.env.OZ_NEW_ACCOUNT_PRIVKEY;\nconst accountAddress = "0x051158d244c7636dde39ec822873b29e6c9a758c6a9812d005b6287564908667";\n\nconst account = new Account(provider, accountAddress, privateKey);\n')))}p.isMDXComponent=!0}}]);