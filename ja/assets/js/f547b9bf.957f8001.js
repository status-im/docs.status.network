"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[748],{2652:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=s(4848),r=s(8453);const l={},i="RPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",c={id:"tools/rpc",title:"RPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",description:"Status Network\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u306e\u5bfe\u8a71\u3092\u53ef\u80fd\u306b\u3059\u308b\u516c\u958bRPC\uff08Remote Procedure Call\uff09\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/rpc.md",sourceDirName:"tools",slug:"/tools/rpc",permalink:"/ja/tools/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/status-network-docs/tree/main/docs/tools/rpc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddea Bridging Testnet",permalink:"/ja/general-info/bridge/bridging-testnet"},next:{title:"\ud83c\udf09 Bridge",permalink:"/ja/tools/bridge"}},d={},o=[{value:"\u516c\u958bRPC URL",id:"\u516c\u958brpc-url",level:2},{value:"RPC\u306e\u4f7f\u7528",id:"rpc\u306e\u4f7f\u7528",level:2},{value:"MetaMask\u3078\u306e\u8ffd\u52a0",id:"metamask\u3078\u306e\u8ffd\u52a0",level:3},{value:"Web3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8a2d\u5b9a",id:"web3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8a2d\u5b9a",level:3},{value:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9",id:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2},{value:"\u30b5\u30dd\u30fc\u30c8",id:"\u30b5\u30dd\u30fc\u30c8",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rpc\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",children:"RPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})}),"\n",(0,t.jsx)(n.p,{children:"Status Network\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u306e\u5bfe\u8a71\u3092\u53ef\u80fd\u306b\u3059\u308b\u516c\u958bRPC\uff08Remote Procedure Call\uff09\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u516c\u958brpc-url",children:"\u516c\u958bRPC URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://public.sepolia.rpc.status.network\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rpc\u306e\u4f7f\u7528",children:"RPC\u306e\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h3,{id:"metamask\u3078\u306e\u8ffd\u52a0",children:"MetaMask\u3078\u306e\u8ffd\u52a0"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306eRPC\u3092\u4f7f\u7528\u3057\u3066Status Network\u3092\u30a6\u30a9\u30ec\u30c3\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"/ja/general-info/add-status-network",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8ffd\u52a0\u30ac\u30a4\u30c9"}),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"web3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8a2d\u5b9a",children:"Web3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8a2d\u5b9a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Web3.js\nconst web3 = new Web3('https://public.sepolia.rpc.status.network');\n\n// Ethers.js v5\nconst provider = new ethers.providers.JsonRpcProvider('https://public.sepolia.rpc.status.network');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9",children:"\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,t.jsx)(n.p,{children:"RPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u4ee5\u4e0b\u3092\u542b\u3080\u6a19\u6e96\u7684\u306aEthereum JSON-RPC\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_blockNumber"}),": \u6700\u65b0\u306e\u30d6\u30ed\u30c3\u30af\u756a\u53f7\u3092\u53d6\u5f97"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getBalance"}),": \u30a2\u30ab\u30a6\u30f3\u30c8\u6b8b\u9ad8\u3092\u53d6\u5f97"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_sendRawTransaction"}),": \u7f72\u540d\u6e08\u307f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9001\u4fe1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_call"}),": \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u305b\u305a\u306b\u30b3\u30fc\u30eb\u3092\u5b9f\u884c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getLogs"}),": \u30a4\u30d9\u30f3\u30c8\u30ed\u30b0\u3092\u53d6\u5f97"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getTransactionByHash"}),": \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u8a73\u7d30\u3092\u53d6\u5f97"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getBlockByNumber"}),": \u30d6\u30ed\u30c3\u30af\u60c5\u5831\u3092\u53d6\u5f97"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bRPC\u30e1\u30bd\u30c3\u30c9\u306e\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u3068\u8a73\u7d30\u306a\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f\u3001Status Network\u304cLinea\u6280\u8853\u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u3044\u308b\u305f\u3081\u3001",(0,t.jsx)(n.a,{href:"https://docs.linea.build/api/reference",children:"Linea API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,t.jsx)(n.p,{children:"\u516c\u958bRPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u306f\u3001\u516c\u5e73\u306a\u4f7f\u7528\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306e\u30ec\u30fc\u30c8\u5236\u9650\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IP\u3042\u305f\u308a1\u79d2\u9593\u306b10\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,t.jsx)(n.li,{children:"IP\u3042\u305f\u308a1\u65e5100,000\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u3088\u308a\u9ad8\u3044\u5236\u9650\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001Telegram\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30b5\u30dd\u30fc\u30c8",children:"\u30b5\u30dd\u30fc\u30c8"}),"\n",(0,t.jsx)(n.p,{children:"RPC\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u5834\u5408\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u9032\u884c\u4e2d\u306e\u554f\u984c\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(n.a,{href:"https://health.status.network",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30c6\u30fc\u30bf\u30b9"}),"\u3092\u30c1\u30a7\u30c3\u30af"]}),"\n",(0,t.jsxs)(n.li,{children:["\u30b5\u30dd\u30fc\u30c8\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(n.a,{href:"https://t.me/+k04A_OZbhIs1Mzc9",children:"Telegram\u30b3\u30df\u30e5\u30cb\u30c6\u30a3"}),"\u306b\u53c2\u52a0"]}),"\n",(0,t.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30afRPC\u6226\u7565\u306e\u5b9f\u88c5\u3092\u691c\u8a0e"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);