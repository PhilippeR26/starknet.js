"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[22043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),o=d(a),u=n,c=o["".concat(p,".").concat(u)]||o[u]||k[u]||i;return a?r.createElement(c,s(s({ref:t},m),{},{components:a})):r.createElement(c,s({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[o]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={id:"stark",title:"Namespace: stark",sidebar_label:"stark",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"API/namespaces/stark",id:"version-5.24.3/API/namespaces/stark",title:"Namespace: stark",description:"Functions",source:"@site/versioned_docs/version-5.24.3/API/namespaces/stark.md",sourceDirName:"API/namespaces",slug:"/API/namespaces/stark",permalink:"/starknet.js/docs/API/namespaces/stark",draft:!1,editUrl:null,tags:[],version:"5.24.3",sidebarPosition:0,frontMatter:{id:"stark",title:"Namespace: stark",sidebar_label:"stark",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"shortString",permalink:"/starknet.js/docs/API/namespaces/shortString"},next:{title:"starknetId",permalink:"/starknet.js/docs/API/namespaces/starknetId"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"compressProgram",id:"compressprogram",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"decompressProgram",id:"decompressprogram",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"randomAddress",id:"randomaddress",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"makeAddress",id:"makeaddress",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"formatSignature",id:"formatsignature",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"signatureToDecimalArray",id:"signaturetodecimalarray",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"signatureToHexArray",id:"signaturetohexarray",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"estimatedFeeToMaxFee",id:"estimatedfeetomaxfee",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}],m={toc:d},o="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(o,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"compressprogram"},"compressProgram"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"compressProgram"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"jsonProgram"),"): ",(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#compressedprogram"},(0,n.kt)("inlineCode",{parentName:"a"},"CompressedProgram"))),(0,n.kt)("p",null,"Compress compiled Cairo program"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/starknet/services/api/gateway/transaction.py#L54-L58"},"Reference")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"jsonProgram")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/interfaces/types.Program"},(0,n.kt)("inlineCode",{parentName:"a"},"Program"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Representing the compiled cairo program")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#compressedprogram"},(0,n.kt)("inlineCode",{parentName:"a"},"CompressedProgram"))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L20"},"src/utils/stark.ts:20")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"decompressprogram"},"decompressProgram"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"decompressProgram"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"base64"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("p",null,"Decompress compressed compiled Cairo program"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"base64")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Compressed program")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("p",null,"Parsed decompressed compiled Cairo program"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L31"},"src/utils/stark.ts:31")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"randomaddress"},"randomAddress"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"randomAddress"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Random Address based on random keyPair"),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L40"},"src/utils/stark.ts:40")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"makeaddress"},"makeAddress"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"makeAddress"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Lowercase and hex prefix string"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,n.kt)("p",null,"Not used internally, naming is confusing based on functionality"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"input")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L50"},"src/utils/stark.ts:50")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"formatsignature"},"formatSignature"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"formatSignature"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"sig?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#arraysignaturetype"},(0,n.kt)("inlineCode",{parentName:"a"},"ArraySignatureType"))),(0,n.kt)("p",null,"Format Signature to standard type (hex array)"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sig?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,n.kt)("inlineCode",{parentName:"a"},"Signature")))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#arraysignaturetype"},(0,n.kt)("inlineCode",{parentName:"a"},"ArraySignatureType"))),(0,n.kt)("p",null,"Custom hex array or weierstrass.SignatureType hex array"),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L58"},"src/utils/stark.ts:58")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"signaturetodecimalarray"},"signatureToDecimalArray"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"signatureToDecimalArray"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"sig?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#arraysignaturetype"},(0,n.kt)("inlineCode",{parentName:"a"},"ArraySignatureType"))),(0,n.kt)("p",null,"Format Signature to decimal string array"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sig?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,n.kt)("inlineCode",{parentName:"a"},"Signature")))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#arraysignaturetype"},(0,n.kt)("inlineCode",{parentName:"a"},"ArraySignatureType"))),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L74"},"src/utils/stark.ts:74")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"signaturetohexarray"},"signatureToHexArray"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"signatureToHexArray"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"sig?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#arraysignaturetype"},(0,n.kt)("inlineCode",{parentName:"a"},"ArraySignatureType"))),(0,n.kt)("p",null,"Format Signature to hex string array"),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sig?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#signature"},(0,n.kt)("inlineCode",{parentName:"a"},"Signature")))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/starknet.js/docs/API/namespaces/types#arraysignaturetype"},(0,n.kt)("inlineCode",{parentName:"a"},"ArraySignatureType"))),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L81"},"src/utils/stark.ts:81")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"estimatedfeetomaxfee"},"estimatedFeeToMaxFee"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"estimatedFeeToMaxFee"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"estimatedFee"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"overhead?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"bigint")),(0,n.kt)("p",null,"Convert estimated fee to max fee with overhead"),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"estimatedFee")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/starknet.js/docs/API/namespaces/types#bignumberish"},(0,n.kt)("inlineCode",{parentName:"a"},"BigNumberish"))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"overhead")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.5"))))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bigint")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/stark.ts#L88"},"src/utils/stark.ts:88")))}k.isMDXComponent=!0}}]);