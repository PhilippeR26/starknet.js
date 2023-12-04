"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[87838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},c="Provider object \ud83d\udd0c connect to the network",i={unversionedId:"guides/connect_network",id:"version-5.14.1/guides/connect_network",title:"Provider object \ud83d\udd0c connect to the network",description:"First thing to do - define with which network you want to interact.",source:"@site/versioned_docs/version-5.14.1/guides/connect_network.md",sourceDirName:"guides",slug:"/guides/connect_network",permalink:"/starknet.js/docs/5.14.1/guides/connect_network",draft:!1,tags:[],version:"5.14.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"What is Starknet.js ?",permalink:"/starknet.js/docs/5.14.1/guides/what_s_starknet.js"},next:{title:"\ud83d\udd0c Connect an existing account",permalink:"/starknet.js/docs/5.14.1/guides/connect_account"}},s={},p=[{value:"Connect your DAPP to Starknet mainnet",id:"connect-your-dapp-to-starknet-mainnet",level:2},{value:"Connect your DAPP to Starknet testnet 1 &amp; 2",id:"connect-your-dapp-to-starknet-testnet-1--2",level:2},{value:"Connect your DAPP to Starknet-devnet",id:"connect-your-dapp-to-starknet-devnet",level:2},{value:"Connect your DAPP to a private Starknet network",id:"connect-your-dapp-to-a-private-starknet-network",level:2},{value:"Connect your DAPP to a Starknet node",id:"connect-your-dapp-to-a-starknet-node",level:2},{value:"Specific methods",id:"specific-methods",level:2},{value:"Specific sequencer methods",id:"specific-sequencer-methods",level:3},{value:"Specific RPC methods",id:"specific-rpc-methods",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"provider-object--connect-to-the-network"},"Provider object \ud83d\udd0c connect to the network"),(0,o.kt)("p",null,"First thing to do - define with which network you want to interact."),(0,o.kt)("p",null,"With the Provider object, you define which network to use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Provider} from 'starknet';\n")),(0,o.kt)("h2",{id:"connect-your-dapp-to-starknet-mainnet"},"Connect your DAPP to Starknet mainnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } })\n")),(0,o.kt)("h2",{id:"connect-your-dapp-to-starknet-testnet-1--2"},"Connect your DAPP to Starknet testnet 1 & 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } }) // for testnet 1\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI2 } })  // for testnet 2\n")),(0,o.kt)("h2",{id:"connect-your-dapp-to-starknet-devnet"},"Connect your DAPP to Starknet-devnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const provider = new Provider({ sequencer: { baseUrl:"http://127.0.0.1:5050"} });\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you have customized host and port during starknet-devnet initialization, adapt in accordance to your script.")),(0,o.kt)("h2",{id:"connect-your-dapp-to-a-private-starknet-network"},"Connect your DAPP to a private Starknet network"),(0,o.kt)("p",null,"If necessary you can have a full control on the network access (for example, for your company private test network):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const provider = new Provider({\n  sequencer: {\n    baseUrl: 'https://mynetwork.mycompany.io',\n    feederGatewayUrl: 'feeder_gateway',\n    gatewayUrl: 'gateway',\n  }\n})\n")),(0,o.kt)("h2",{id:"connect-your-dapp-to-a-starknet-node"},"Connect your DAPP to a Starknet node"),(0,o.kt)("p",null,"For a local ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eqlabs/pathfinder"},"Pathfinder")," node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const provider = new Provider({ rpc: { nodeUrl: '127.0.0.1:9545' } })\n")),(0,o.kt)("p",null,"Your node can be located in your local network (example: pathfinder node located in a computer of you network, launched with this additional option: ",(0,o.kt)("inlineCode",{parentName:"p"},"--http-rpc 0.0.0.0:9545"),"). You connect with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const provider = new Provider({ rpc: { nodeUrl: '192.168.1.99:9545' } })\n")),(0,o.kt)("h2",{id:"specific-methods"},"Specific methods"),(0,o.kt)("p",null,"Some methods are available only if connected to a sequencer, and some others are available only if connected to a node (using RPC)."),(0,o.kt)("h3",{id:"specific-sequencer-methods"},"Specific sequencer methods"),(0,o.kt)("p",null,"For example, if you want to estimate the fee of a L1 \u27a1\ufe0f L2 message, you need to use a method that is available only in the sequencer. The class ",(0,o.kt)("inlineCode",{parentName:"p"},"SequencerProvider")," is available for this case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SequencerProvider, constants } from "starknet";\nconst provider = new SequencerProvider({ baseUrl: constants.BaseUrl.SN_GOERLI2 }); // for testnet 2\nconst responseEstimateMessageFee = await provider.estimateMessageFee(.....)\n')),(0,o.kt)("h3",{id:"specific-rpc-methods"},"Specific RPC methods"),(0,o.kt)("p",null,"For example, if you want to read the events recorded in a range of blocks, you need to use a method available from a RPC node. The class ",(0,o.kt)("inlineCode",{parentName:"p"},"RpcProvider")," is available for this case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { RpcProvider } from "starknet";\nconst providerRPC = new RpcProvider({ nodeUrl: "http://192.168.1.99:9545" }); // for a pathfinder node located in a PC in the local network\nconst lastBlock = await providerRPC.getBlock(\'latest\');\nlet eventsList = await providerRPC.getEvents({\n    address: myContractAddress,\n    from_block: {block_number: lastBlock.block_number-2},\n    to_block: {block_number: lastBlock.block_number},\n    chunk_size: 400\n});\n')),(0,o.kt)("p",null,"RPC providers are for example Infura, Alchemy, Chainstack... Or you can spin up your own Pathfinder node!"),(0,o.kt)("p",null,"For example, to connect to Alchemy with your personal API key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const providerRPC = new RpcProvider({ nodeUrl: 'https://starknet-mainnet.g.alchemy.com/v2/' + alchemyKey});\n")))}u.isMDXComponent=!0}}]);