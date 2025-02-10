"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[444],{2714:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=i(4848),s=i(8453);const r={},t="\u4f7f\u7528 Remix \u90e8\u7f72\u667a\u80fd\u5408\u7ea6",d={id:"tutorials/deploying-contracts/using-remix",title:"\u4f7f\u7528 Remix \u90e8\u7f72\u667a\u80fd\u5408\u7ea6",description:"\u672c\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u4f7f\u7528 Remix IDE \u5728 Status Network \u6d4b\u8bd5\u7f51\u4e0a\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u3002Remix \u662f\u4e00\u4e2a\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684 IDE\uff0c\u975e\u5e38\u9002\u5408\u5feb\u901f\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/deploying-contracts/using-remix.md",sourceDirName:"tutorials/deploying-contracts",slug:"/tutorials/deploying-contracts/using-remix",permalink:"/zh/tutorials/deploying-contracts/using-remix",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/docs.status.network/docs/tutorials/deploying-contracts/using-remix.md",tags:[],version:"current",lastUpdatedAt:1739181219e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2692\ufe0f Using Foundry",permalink:"/zh/tutorials/deploying-contracts/using-foundry"},next:{title:"\ud83d\udd17 Official Links",permalink:"/zh/other/official-links"}},c={},o=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"1. \u6253\u5f00 Remix IDE",id:"1-\u6253\u5f00-remix-ide",level:3},{value:"2. \u521b\u5efa\u65b0\u6587\u4ef6",id:"2-\u521b\u5efa\u65b0\u6587\u4ef6",level:3},{value:"3. \u7f16\u5199\u667a\u80fd\u5408\u7ea6",id:"3-\u7f16\u5199\u667a\u80fd\u5408\u7ea6",level:3},{value:"4. \u7f16\u8bd1\u5408\u7ea6",id:"4-\u7f16\u8bd1\u5408\u7ea6",level:3},{value:"5. \u90e8\u7f72\u5408\u7ea6",id:"5-\u90e8\u7f72\u5408\u7ea6",level:3},{value:"6. \u4e0e\u5408\u7ea6\u4ea4\u4e92",id:"6-\u4e0e\u5408\u7ea6\u4ea4\u4e92",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3},{value:"\u652f\u6301",id:"\u652f\u6301",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u4f7f\u7528-remix-\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",children:"\u4f7f\u7528 Remix \u90e8\u7f72\u667a\u80fd\u5408\u7ea6"})}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u4f7f\u7528 Remix IDE \u5728 Status Network \u6d4b\u8bd5\u7f51\u4e0a\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u3002Remix \u662f\u4e00\u4e2a\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684 IDE\uff0c\u975e\u5e38\u9002\u5408\u5feb\u901f\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5177\u5907\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7f51\u7edc\u6d4f\u89c8\u5668"}),": Chrome \u6216 Firefox \u7b49\u73b0\u4ee3\u6d4f\u89c8\u5668"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"MetaMask"}),": \u5b89\u88c5 ",(0,l.jsx)(n.a,{href:"https://metamask.io",children:"MetaMask"})," \u6d4f\u89c8\u5668\u6269\u5c55"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6d4b\u8bd5\u7f51 ETH"}),": \u60a8\u9700\u8981 Status Network \u6d4b\u8bd5\u7f51 ETH","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4ece\u6211\u4eec\u7684",(0,l.jsx)(n.a,{href:"/tools/testnet-faucets",children:"\u6c34\u9f99\u5934"}),"\u83b7\u53d6 Status Network \u6d4b\u8bd5\u7f51 ETH"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7f51\u7edc\u914d\u7f6e"}),": \u6309\u7167\u6211\u4eec\u7684",(0,l.jsx)(n.a,{href:"/general-info/add-status-network",children:"\u6dfb\u52a0\u7f51\u7edc\u6307\u5357"}),"\u5c06 Status Network \u6d4b\u8bd5\u7f51\u6dfb\u52a0\u5230 MetaMask"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u6253\u5f00-remix-ide",children:"1. \u6253\u5f00 Remix IDE"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,l.jsx)(n.a,{href:"https://remix.ethereum.org",children:"remix.ethereum.org"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"2-\u521b\u5efa\u65b0\u6587\u4ef6",children:"2. \u521b\u5efa\u65b0\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"File Explorer"\u56fe\u6807\uff08\u5de6\u4fa7\u8fb9\u680f\u7684\u7b2c\u4e00\u4e2a\u56fe\u6807\uff09'}),"\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"+"\u6309\u94ae\u521b\u5efa\u65b0\u6587\u4ef6'}),"\n",(0,l.jsxs)(n.li,{children:["\u547d\u540d\u4e3a ",(0,l.jsx)(n.code,{children:"HelloWorld.sol"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-\u7f16\u5199\u667a\u80fd\u5408\u7ea6",children:"3. \u7f16\u5199\u667a\u80fd\u5408\u7ea6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u7c98\u8d34\u5230 ",(0,l.jsx)(n.code,{children:"HelloWorld.sol"})," \u4e2d\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract HelloWorld {\n    string public greet = "Hello, Status Network!";\n\n    function setGreet(string memory _greet) public {\n        greet = _greet;\n    }\n\n    function getGreet() public view returns (string memory) {\n        return greet;\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"4-\u7f16\u8bd1\u5408\u7ea6",children:"4. \u7f16\u8bd1\u5408\u7ea6"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"Solidity Compiler"\u56fe\u6807\uff08\u5de6\u4fa7\u8fb9\u680f\u7684\u7b2c\u4e8c\u4e2a\u56fe\u6807\uff09'}),"\n",(0,l.jsx)(n.li,{children:'\u9009\u62e9\u7f16\u8bd1\u5668\u7248\u672c"0.8.24"'}),"\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"Compile HelloWorld.sol"'}),"\n",(0,l.jsx)(n.li,{children:"\u786e\u4fdd\u7f16\u8bd1\u6210\u529f\uff08\u4f1a\u770b\u5230\u7eff\u8272\u5bf9\u52fe\uff09"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"5-\u90e8\u7f72\u5408\u7ea6",children:"5. \u90e8\u7f72\u5408\u7ea6"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"Deploy & Run Transactions"\u56fe\u6807\uff08\u5de6\u4fa7\u8fb9\u680f\u7684\u7b2c\u56db\u4e2a\u56fe\u6807\uff09'}),"\n",(0,l.jsx)(n.li,{children:'\u5728"Environment"\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9"Injected Provider - MetaMask"'}),"\n",(0,l.jsx)(n.li,{children:"MetaMask \u4f1a\u63d0\u793a\u8fde\u63a5 - \u786e\u4fdd\u9009\u62e9\u4e86 Status Network \u6d4b\u8bd5\u7f51"}),"\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"Deploy"'}),"\n",(0,l.jsx)(n.li,{children:"\u5728 MetaMask \u4e2d\u786e\u8ba4\u4ea4\u6613"}),"\n",(0,l.jsx)(n.li,{children:"\u7b49\u5f85\u4ea4\u6613\u786e\u8ba4"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"6-\u4e0e\u5408\u7ea6\u4ea4\u4e92",children:"6. \u4e0e\u5408\u7ea6\u4ea4\u4e92"}),"\n",(0,l.jsx)(n.p,{children:'\u90e8\u7f72\u540e\uff0c\u60a8\u5c06\u5728"Deployed Contracts"\u4e0b\u770b\u5230\u60a8\u7684\u5408\u7ea6\uff1a'}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5c55\u5f00\u5408\u7ea6\u754c\u9762"}),"\n",(0,l.jsxs)(n.li,{children:["\u60a8\u53ef\u4ee5\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"greet"\u8bfb\u53d6\u5f53\u524d\u95ee\u5019\u8bed'}),"\n",(0,l.jsx)(n.li,{children:'\u5728"setGreet"\u5b57\u6bb5\u4e2d\u8f93\u5165\u65b0\u95ee\u5019\u8bed\u5e76\u70b9\u51fb\u6309\u94ae\u66f4\u65b0'}),"\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"getGreet"\u518d\u6b21\u8bfb\u53d6\u95ee\u5019\u8bed'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,l.jsx)(n.h3,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u4ea4\u6613\u5931\u8d25"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u68c0\u67e5\u662f\u5426\u5df2\u8fde\u63a5\u5230 Status Network \u6d4b\u8bd5\u7f51"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u627e\u4e0d\u5230\u5408\u7ea6"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7b49\u5f85\u51e0\u5206\u949f\u8ba9\u6d4f\u89c8\u5668\u7d22\u5f15\u60a8\u7684\u5408\u7ea6"}),"\n",(0,l.jsx)(n.li,{children:"\u4ed4\u7ec6\u68c0\u67e5\u5408\u7ea6\u5730\u5740"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u7f16\u8bd1\u9519\u8bef"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9a8c\u8bc1\u7f16\u8bd1\u5668\u7248\u672c\u662f\u5426\u4e0e pragma \u8bed\u53e5\u5339\u914d"}),"\n",(0,l.jsx)(n.li,{children:"\u68c0\u67e5 Remix \u4e2d\u7a81\u51fa\u663e\u793a\u7684\u4efb\u4f55\u8bed\u6cd5\u9519\u8bef"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u652f\u6301",children:"\u652f\u6301"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u9047\u5230\u95ee\u9898\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u52a0\u5165\u6211\u4eec\u7684 ",(0,l.jsx)(n.a,{href:"https://t.me",children:"Telegram \u793e\u533a"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u67e5\u770b",(0,l.jsx)(n.a,{href:"https://health.status.network",children:"\u7f51\u7edc\u72b6\u6001"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u67e5\u770b",(0,l.jsx)(n.a,{href:"/general-info/network-details",children:"\u7f51\u7edc\u8be6\u60c5"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5176\u4ed6\u8d44\u6e90",children:"\u5176\u4ed6\u8d44\u6e90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://remix-ide.readthedocs.io/",children:"Remix \u6587\u6863"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://sepoliascan.status.network",children:"Status Network \u6d4f\u89c8\u5668"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var l=i(6540);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);