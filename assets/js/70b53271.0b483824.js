"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[98622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:13},o="Messages with L1 network",i={unversionedId:"guides/L1message",id:"guides/L1message",title:"Messages with L1 network",description:"You can exchange messages between L1 & L2 networks:",source:"@site/docs/guides/L1message.md",sourceDirName:"guides",slug:"/guides/L1message",permalink:"/starknet.js/docs/next/guides/L1message",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/starknet.js/docs/next/guides/events"},next:{title:"Signature",permalink:"/starknet.js/docs/next/guides/signature"}},l={},c=[{value:"L1 \u27a1\ufe0f L2 messages",id:"l1-\ufe0f-l2-messages",level:2},{value:"L2 \u27a1\ufe0f L1 messages",id:"l2-\ufe0f-l1-messages",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messages-with-l1-network"},"Messages with L1 network"),(0,r.kt)("p",null,"You can exchange messages between L1 & L2 networks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L2 Starknet mainnet \u2194\ufe0f L1 Ethereum."),(0,r.kt)("li",{parentName:"ul"},"L2 Starknet testnet \u2194\ufe0f L1 Goerli ETH testnet."),(0,r.kt)("li",{parentName:"ul"},"L2 local Starknet devnet \u2194\ufe0f L1 local ETH testnet (Ganache, ...).")),(0,r.kt)("p",null,"You can find an explanation of the global mechanism ",(0,r.kt)("a",{parentName:"p",href:"https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/"},"here"),"."),(0,r.kt)("p",null,"Most of the code for this messaging process will be written in Cairo, but Starknet.js provides some functionalities for this subject."),(0,r.kt)("h2",{id:"l1-\ufe0f-l2-messages"},"L1 \u27a1\ufe0f L2 messages"),(0,r.kt)("p",null,"To send a message from L1 to L2, you need a solidity smart contract in the L1 network, calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"SendMessageToL2")," function of the Starknet core contract.\nThe interface of this function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"/**\n    Sends a message to an L2 contract.\n    This function is payable, the paid amount is the message fee.\n    Returns the hash of the message and the nonce of the message.\n*/\nfunction sendMessageToL2(\n    uint256 toAddress,\n    uint256 selector,\n    uint256[] calldata payload\n) external payable returns (bytes32, uint256);\n")),(0,r.kt)("p",null,"You have to pay in the L1 an extra fee when invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"sendMessageToL2")," (of course paid with the L1 fee TOKEN), to pay the L2 part of the messaging mechanism. You can estimate this fee with this function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SequencerProvider } from "starknet";\nconst provider = new SequencerProvider({ baseUrl: constants.BaseUrl.SN_GOERLI }); // for testnet\n\nconst responseEstimateMessageFee = await provider.estimateMessageFee({\n    from_address: L1address,\n    to_address: L2address,\n    entry_point_selector: "handle_l1_mess",\n    payload: ["1234567890123456789", "200"]\n})\n')),(0,r.kt)("p",null,"If the fee is paid in L1, the Cairo contract at ",(0,r.kt)("inlineCode",{parentName:"p"},"to_Address")," is automatically executed, function ",(0,r.kt)("inlineCode",{parentName:"p"},"entry_point_selector")," (the function shall have a decorator ",(0,r.kt)("inlineCode",{parentName:"p"},"@l1_handler")," in the Cairo code), with parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,r.kt)("h2",{id:"l2-\ufe0f-l1-messages"},"L2 \u27a1\ufe0f L1 messages"),(0,r.kt)("p",null,"To send a message to L1, you will just invoke a Cairo contract function, paying a fee that will pay all the processes (in L1 & L2)."),(0,r.kt)("p",null,"If necessary you can estimate this fee with the generic ",(0,r.kt)("inlineCode",{parentName:"p"},"estimateInvokeFee")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const { suggestedMaxFee: estimatedFee1 } = await account0.estimateInvokeFee({\n    contractAddress: testAddress,\n    entrypoint: "withdraw_to_L1",\n    calldata: ["123456789", "30"]\n});\n')),(0,r.kt)("p",null,"The result is in ",(0,r.kt)("inlineCode",{parentName:"p"},"estimatedFee1"),", of type BN."))}d.isMDXComponent=!0}}]);