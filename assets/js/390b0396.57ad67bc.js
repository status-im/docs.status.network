"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[435],{6545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(4848),r=n(8453);const s={title:"Using Remix with Status Network",description:"Learn how to deploy smart contracts on Status Network using Remix IDE. Beginner-friendly guide with step-by-step instructions for contract deployment and interaction.",keywords:["Remix IDE","smart contract deployment","Status Network development","blockchain tutorial","web3 development","solidity"]},o="Using Remix to Deploy Smart Contracts",l={id:"tutorials/deploying-contracts/using-remix",title:"Using Remix with Status Network",description:"Learn how to deploy smart contracts on Status Network using Remix IDE. Beginner-friendly guide with step-by-step instructions for contract deployment and interaction.",source:"@site/docs/tutorials/deploying-contracts/using-remix.md",sourceDirName:"tutorials/deploying-contracts",slug:"/tutorials/deploying-contracts/using-remix",permalink:"/tutorials/deploying-contracts/using-remix",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/docs.status.network/docs/tutorials/deploying-contracts/using-remix.md",tags:[],version:"current",lastUpdatedAt:1739193403e3,frontMatter:{title:"Using Remix with Status Network",description:"Learn how to deploy smart contracts on Status Network using Remix IDE. Beginner-friendly guide with step-by-step instructions for contract deployment and interaction.",keywords:["Remix IDE","smart contract deployment","Status Network development","blockchain tutorial","web3 development","solidity"]},sidebar:"tutorialSidebar",previous:{title:"\u2692\ufe0f Using Foundry",permalink:"/tutorials/deploying-contracts/using-foundry"},next:{title:"\ud83d\udd17 Official Links",permalink:"/other/official-links"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Open Remix IDE",id:"1-open-remix-ide",level:3},{value:"2. Create a New File",id:"2-create-a-new-file",level:3},{value:"3. Write the Smart Contract",id:"3-write-the-smart-contract",level:3},{value:"4. Compile the Contract",id:"4-compile-the-contract",level:3},{value:"5. Deploy the Contract",id:"5-deploy-the-contract",level:3},{value:"6. Interact with Your Contract",id:"6-interact-with-your-contract",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Support",id:"support",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"using-remix-to-deploy-smart-contracts",children:"Using Remix to Deploy Smart Contracts"})}),"\n",(0,i.jsx)(t.p,{children:"This tutorial will guide you through deploying a smart contract on Status Network testnet using the Remix IDE. Remix is a browser-based IDE that's perfect for quick development and testing."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you begin, ensure you have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Web Browser"}),": A modern web browser like Chrome or Firefox"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"MetaMask"}),": Install the ",(0,i.jsx)(t.a,{href:"https://metamask.io",children:"MetaMask"})," browser extension"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Testnet ETH"}),": You'll need Status Network testnet ETH","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Get Status Network testnet ETH from our ",(0,i.jsx)(t.a,{href:"/tools/testnet-faucets",children:"Faucet"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network Configuration"}),": Add Status Network testnet to MetaMask following our ",(0,i.jsx)(t.a,{href:"/general-info/add-status-network",children:"Add Network guide"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(t.h3,{id:"1-open-remix-ide",children:"1. Open Remix IDE"}),"\n",(0,i.jsxs)(t.p,{children:["Visit ",(0,i.jsx)(t.a,{href:"https://remix.ethereum.org",children:"remix.ethereum.org"})," in your browser."]}),"\n",(0,i.jsx)(t.h3,{id:"2-create-a-new-file",children:"2. Create a New File"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Click the "File Explorer" icon (first icon on the left sidebar)'}),"\n",(0,i.jsx)(t.li,{children:'Click the "+" button to create a new file'}),"\n",(0,i.jsxs)(t.li,{children:["Name it ",(0,i.jsx)(t.code,{children:"HelloWorld.sol"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"3-write-the-smart-contract",children:"3. Write the Smart Contract"}),"\n",(0,i.jsxs)(t.p,{children:["Copy and paste the following code into ",(0,i.jsx)(t.code,{children:"HelloWorld.sol"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract HelloWorld {\n    string public greet = "Hello, Status Network!";\n\n    function setGreet(string memory _greet) public {\n        greet = _greet;\n    }\n\n    function getGreet() public view returns (string memory) {\n        return greet;\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"4-compile-the-contract",children:"4. Compile the Contract"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Click the "Solidity Compiler" icon (second icon on the left sidebar)'}),"\n",(0,i.jsx)(t.li,{children:'Select compiler version "0.8.24"'}),"\n",(0,i.jsx)(t.li,{children:'Click "Compile HelloWorld.sol"'}),"\n",(0,i.jsx)(t.li,{children:"Ensure compilation succeeds (you'll see a green checkmark)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"5-deploy-the-contract",children:"5. Deploy the Contract"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Click the "Deploy & Run Transactions" icon (fourth icon on the left sidebar)'}),"\n",(0,i.jsx)(t.li,{children:'In the "Environment" dropdown, select "Injected Provider - MetaMask"'}),"\n",(0,i.jsx)(t.li,{children:"MetaMask will prompt you to connect - ensure Status Network testnet is selected"}),"\n",(0,i.jsx)(t.li,{children:'Click "Deploy"'}),"\n",(0,i.jsx)(t.li,{children:"Confirm the transaction in MetaMask"}),"\n",(0,i.jsx)(t.li,{children:"Wait for the transaction to be confirmed"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"6-interact-with-your-contract",children:"6. Interact with Your Contract"}),"\n",(0,i.jsx)(t.p,{children:'Once deployed, you\'ll see your contract under "Deployed Contracts":'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Expand the contract interface"}),"\n",(0,i.jsxs)(t.li,{children:["You can:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Click "greet" to read the current greeting'}),"\n",(0,i.jsx)(t.li,{children:'Enter a new greeting in the "setGreet" field and click the button to update it'}),"\n",(0,i.jsx)(t.li,{children:'Click "getGreet" to read the greeting again'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(t.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Transaction Failed"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Check that you're connected to Status Network testnet"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Contract Not Found"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Wait a few minutes for the explorer to index your contract"}),"\n",(0,i.jsx)(t.li,{children:"Double-check the contract address"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Compilation Errors"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Verify the compiler version matches the pragma statement"}),"\n",(0,i.jsx)(t.li,{children:"Check for any syntax errors highlighted in Remix"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"support",children:"Support"}),"\n",(0,i.jsx)(t.p,{children:"If you encounter any issues:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Join our ",(0,i.jsx)(t.a,{href:"https://t.me",children:"Telegram Community"})]}),"\n",(0,i.jsxs)(t.li,{children:["Check ",(0,i.jsx)(t.a,{href:"https://health.status.network",children:"Network Status"})]}),"\n",(0,i.jsxs)(t.li,{children:["View our ",(0,i.jsx)(t.a,{href:"/general-info/network-details",children:"Network Details"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://remix-ide.readthedocs.io/",children:"Remix Documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://sepoliascan.status.network",children:"Status Network Explorer"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);