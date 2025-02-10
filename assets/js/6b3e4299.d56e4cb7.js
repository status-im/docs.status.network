"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[683],{2908:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(4848),r=n(8453),i=n(9227);const o={id:"network-details",title:"Status Network Details & Configuration",description:"Official network details for Status Network testnet including RPC endpoints, Chain ID, and configuration information for wallets and development environments.",keywords:["Status Network","network details","RPC endpoint","Chain ID","testnet configuration","blockchain network","MetaMask setup"]},a="Network Details",d={id:"general-info/network-details",title:"Status Network Details & Configuration",description:"Official network details for Status Network testnet including RPC endpoints, Chain ID, and configuration information for wallets and development environments.",source:"@site/docs/general-info/network-details.md",sourceDirName:"general-info",slug:"/general-info/network-details",permalink:"/general-info/network-details",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/docs.status.network/docs/general-info/network-details.md",tags:[],version:"current",lastUpdatedAt:1739201895e3,frontMatter:{id:"network-details",title:"Status Network Details & Configuration",description:"Official network details for Status Network testnet including RPC endpoints, Chain ID, and configuration information for wallets and development environments.",keywords:["Status Network","network details","RPC endpoint","Chain ID","testnet configuration","blockchain network","MetaMask setup"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca0 Karma Token",permalink:"/tokenomics/karma-token"},next:{title:"\u2795 Add Status Network",permalink:"/general-info/add-status-network"}},l={},c=[{value:"Status Testnet",id:"status-testnet",level:2}];function h(t){const e={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"network-details",children:"Network Details"})}),"\n",(0,s.jsx)(e.h2,{id:"status-testnet",children:"Status Testnet"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Network Name"})}),(0,s.jsx)(e.td,{children:"Status Network Testnet"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"RPC Endpoint"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://public.sepolia.rpc.status.network",children:"https://public.sepolia.rpc.status.network"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Chain ID"})}),(0,s.jsx)(e.td,{children:"1660990954"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Currency Symbol"})}),(0,s.jsx)(e.td,{children:"ETH"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Block Explorer"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://sepoliascan.status.network",children:"https://sepoliascan.status.network"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Bridge"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"https://bridge.status.network",children:"https://bridge.status.network"})})]})]})]}),"\n",(0,s.jsx)(i.A,{}),"\n",(0,s.jsx)("div",{style:{height:"2rem"}}),"\n",(0,s.jsx)(e.p,{children:"These are the official network details for the Status Network testnet. You can use these details to:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Add the network to your wallet"}),"\n",(0,s.jsx)(e.li,{children:"Configure development environments"}),"\n",(0,s.jsx)(e.li,{children:"Connect dApps to the network"}),"\n",(0,s.jsx)(e.li,{children:"Verify smart contracts"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["For instructions on adding the network to your wallet, see our ",(0,s.jsx)(e.a,{href:"/general-info/add-status-network",children:"Add Status Network guide"}),"."]})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},9227:(t,e,n)=>{n.d(e,{A:()=>r});n(6540);var s=n(4848);function r(){return(0,s.jsxs)("button",{className:"button button--primary",onClick:async()=>{if("undefined"!=typeof window&&window.ethereum)try{await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x6300B5EA",chainName:"Status Network Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://public.sepolia.rpc.status.network"],blockExplorerUrls:["https://sepoliascan.status.network"]}]})}catch(t){console.error(t),alert("Failed to add the network to MetaMask. Please try again.")}else alert("MetaMask is not installed. Please install MetaMask first.")},children:[(0,s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",alt:"MetaMask Fox",style:{width:"20px",height:"20px",marginRight:"8px",verticalAlign:"middle"}}),"Add Status Network Testnet"]})}},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);