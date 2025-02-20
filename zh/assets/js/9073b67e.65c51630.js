"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[6],{7221:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=s(4848),r=s(8453);const l={},i="RPC \u7aef\u70b9",c={id:"tools/rpc",title:"RPC \u7aef\u70b9",description:"Status Network \u63d0\u4f9b\u516c\u5171 RPC\uff08\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff09\u7aef\u70b9\uff0c\u5141\u8bb8\u60a8\u4e0e\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tools/rpc.md",sourceDirName:"tools",slug:"/tools/rpc",permalink:"/zh/tools/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/docs.status.network/tree/develop/docs/tools/rpc.md",tags:[],version:"current",lastUpdatedAt:1739996952e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddea Bridging Testnet",permalink:"/zh/general-info/bridge/bridging-testnet"},next:{title:"\ud83c\udf09 Bridge",permalink:"/zh/tools/bridge"}},d={},o=[{value:"\u516c\u5171 RPC URL",id:"\u516c\u5171-rpc-url",level:2},{value:"\u4f7f\u7528 RPC",id:"\u4f7f\u7528-rpc",level:2},{value:"\u6dfb\u52a0\u5230 MetaMask",id:"\u6dfb\u52a0\u5230-metamask",level:3},{value:"Web3 \u5e93\u914d\u7f6e",id:"web3-\u5e93\u914d\u7f6e",level:3},{value:"\u53ef\u7528\u65b9\u6cd5",id:"\u53ef\u7528\u65b9\u6cd5",level:2},{value:"\u901f\u7387\u9650\u5236",id:"\u901f\u7387\u9650\u5236",level:2},{value:"\u652f\u6301",id:"\u652f\u6301",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rpc-\u7aef\u70b9",children:"RPC \u7aef\u70b9"})}),"\n",(0,t.jsx)(n.p,{children:"Status Network \u63d0\u4f9b\u516c\u5171 RPC\uff08\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff09\u7aef\u70b9\uff0c\u5141\u8bb8\u60a8\u4e0e\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u516c\u5171-rpc-url",children:"\u516c\u5171 RPC URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://public.sepolia.rpc.status.network\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-rpc",children:"\u4f7f\u7528 RPC"}),"\n",(0,t.jsx)(n.h3,{id:"\u6dfb\u52a0\u5230-metamask",children:"\u6dfb\u52a0\u5230 MetaMask"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173\u4f7f\u7528\u6b64 RPC \u5c06 Status Network \u6dfb\u52a0\u5230\u60a8\u94b1\u5305\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684",(0,t.jsx)(n.a,{href:"/zh/general-info/add-status-network",children:"\u6dfb\u52a0\u7f51\u7edc\u6307\u5357"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"web3-\u5e93\u914d\u7f6e",children:"Web3 \u5e93\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Web3.js\nconst web3 = new Web3('https://public.sepolia.rpc.status.network');\n\n// Ethers.js v5\nconst provider = new ethers.providers.JsonRpcProvider('https://public.sepolia.rpc.status.network');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53ef\u7528\u65b9\u6cd5",children:"\u53ef\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"RPC \u7aef\u70b9\u652f\u6301\u6807\u51c6\u7684\u4ee5\u592a\u574a JSON-RPC \u65b9\u6cd5\uff0c\u5305\u62ec\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_blockNumber"}),": \u83b7\u53d6\u6700\u65b0\u533a\u5757\u53f7"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getBalance"}),": \u83b7\u53d6\u8d26\u6237\u4f59\u989d"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_sendRawTransaction"}),": \u53d1\u9001\u5df2\u7b7e\u540d\u7684\u4ea4\u6613"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_call"}),": \u6267\u884c\u8c03\u7528\u800c\u4e0d\u521b\u5efa\u4ea4\u6613"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getLogs"}),": \u83b7\u53d6\u4e8b\u4ef6\u65e5\u5fd7"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getTransactionByHash"}),": \u83b7\u53d6\u4ea4\u6613\u8be6\u60c5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eth_getBlockByNumber"}),": \u83b7\u53d6\u533a\u5757\u4fe1\u606f"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173\u652f\u6301\u7684 RPC \u65b9\u6cd5\u7684\u5b8c\u6574\u5217\u8868\u548c\u8be6\u7ec6\u89c4\u8303\uff0c\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://docs.linea.build/api/reference",children:"Linea API \u53c2\u8003"}),"\uff0c\u56e0\u4e3a Status Network \u57fa\u4e8e Linea \u6280\u672f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u901f\u7387\u9650\u5236",children:"\u901f\u7387\u9650\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u516c\u5171 RPC \u7aef\u70b9\u6709\u901f\u7387\u9650\u5236\u4ee5\u786e\u4fdd\u516c\u5e73\u4f7f\u7528\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6bcf\u4e2a IP \u6bcf\u79d2 10 \u4e2a\u8bf7\u6c42"}),"\n",(0,t.jsx)(n.li,{children:"\u6bcf\u4e2a IP \u6bcf\u5929 100,000 \u4e2a\u8bf7\u6c42"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u9700\u66f4\u9ad8\u9650\u5236\uff0c\u8bf7\u901a\u8fc7 Telegram \u4e0e\u6211\u4eec\u8054\u7cfb\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u652f\u6301",children:"\u652f\u6301"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u5728\u4f7f\u7528 RPC \u7aef\u70b9\u65f6\u9047\u5230\u95ee\u9898\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u52a0\u5165\u6211\u4eec\u7684 ",(0,t.jsx)(n.a,{href:"https://t.me/statusl2",children:"Telegram \u793e\u533a"}),"\u83b7\u53d6\u652f\u6301"]}),"\n",(0,t.jsx)(n.li,{children:"\u8003\u8651\u5728\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5b9e\u73b0\u5907\u7528 RPC \u7b56\u7565"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);