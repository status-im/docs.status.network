"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[895],{3852:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(4848),s=t(8453);const i={},o="Hardhat\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",a={id:"tutorials/deploying-contracts/using-hardhat",title:"Hardhat\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Hardhat\u3001Hardhat Ignition\u3001\u304a\u3088\u3073TypeScript\u3092\u4f7f\u7528\u3057\u3066Status Network\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u306b\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u624b\u9806\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/deploying-contracts/using-hardhat.md",sourceDirName:"tutorials/deploying-contracts",slug:"/tutorials/deploying-contracts/using-hardhat",permalink:"/ja/tutorials/deploying-contracts/using-hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/docs.status.network/docs/tutorials/deploying-contracts/using-hardhat.md",tags:[],version:"current",lastUpdatedAt:1739181219e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Block Explorers",permalink:"/ja/tools/block-explorers"},next:{title:"\u2692\ufe0f Using Foundry",permalink:"/ja/tutorials/deploying-contracts/using-foundry"}},l={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u9054\u6210\u76ee\u6a19",id:"\u9054\u6210\u76ee\u6a19",level:2},{value:"\u624b\u9806",id:"\u624b\u9806",level:2},{value:"1. Hardhat\u306eTypeScript\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u521d\u671f\u5316",id:"1-hardhat\u306etypescript\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u521d\u671f\u5316",level:3},{value:"2. \u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u4f5c\u6210",id:"2-\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u4f5c\u6210",level:3},{value:"3. Status Network\u7528\u306eHardhat\u306e\u8a2d\u5b9a",id:"3-status-network\u7528\u306ehardhat\u306e\u8a2d\u5b9a",level:3},{value:"4. Ignition\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4f5c\u6210",id:"4-ignition\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4f5c\u6210",level:3},{value:"5. \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",id:"5-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",level:3},{value:"7. \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u306e\u5bfe\u8a71",id:"7-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u306e\u5bfe\u8a71",level:3},{value:"\u30b5\u30dd\u30fc\u30c8",id:"\u30b5\u30dd\u30fc\u30c8",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"hardhat\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",children:"Hardhat\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Hardhat\u3001Hardhat Ignition\u3001\u304a\u3088\u3073TypeScript\u3092\u4f7f\u7528\u3057\u3066Status Network\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u306b\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u624b\u9806\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u958b\u59cb\u3059\u308b\u524d\u306b\u3001\u4ee5\u4e0b\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Node.js\u3068npm"}),": ",(0,r.jsx)(e.a,{href:"https://nodejs.org/",children:"\u516c\u5f0fNode.js\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8"}),"\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Ethereum\u30a6\u30a9\u30ec\u30c3\u30c8"}),": Status Network\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u7528\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u3092\u6301\u3064MetaMask\u307e\u305f\u306f\u4ed6\u306e\u30a6\u30a9\u30ec\u30c3\u30c8"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8ETH"}),": Status Network\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u306eETH\u304c\u5fc5\u8981\u3067\u3059","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Status Network\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u306eETH\u306f",(0,r.jsx)(e.a,{href:"/tools/testnet-faucets",children:"\u30d5\u30a9\u30fc\u30bb\u30c3\u30c8"}),"\u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u57fa\u672c\u77e5\u8b58"}),": Solidity\u3001Hardhat\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u306e\u57fa\u790e\u77e5\u8b58"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9054\u6210\u76ee\u6a19",children:"\u9054\u6210\u76ee\u6a19"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"TypeScript\u30d9\u30fc\u30b9\u306eHardhat\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u521d\u671f\u5316"}),"\n",(0,r.jsx)(e.li,{children:"\u57fa\u672c\u7684\u306aEthereum\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u4f5c\u6210"}),"\n",(0,r.jsx)(e.li,{children:"Status Network\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u30c7\u30d7\u30ed\u30a4\u7528\u306eHardhat\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsx)(e.li,{children:"Hardhat Ignition\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u624b\u9806",children:"\u624b\u9806"}),"\n",(0,r.jsx)(e.h3,{id:"1-hardhat\u306etypescript\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u521d\u671f\u5316",children:"1. Hardhat\u306eTypeScript\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u521d\u671f\u5316"}),"\n",(0,r.jsx)(e.p,{children:"\u307e\u305a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u8a2d\u5b9a\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mkdir my-hardhat-project && cd my-hardhat-project\nnpm init -y\nnpm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv\nnpx hardhat init\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u30d7\u30ed\u30f3\u30d7\u30c8\u304c\u8868\u793a\u3055\u308c\u305f\u3089\u3001\u300cCreate a TypeScript project\u300d\u3092\u9078\u629e\u3057\u3066TypeScript\u30d9\u30fc\u30b9\u306eHardhat\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'# .env\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\ntouch .env\n\n# \u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u3092\u8ffd\u52a0\uff08\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u7d76\u5bfe\u306b\u30b3\u30df\u30c3\u30c8\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01\uff09\necho "PRIVATE_KEY=your_private_key_here" >> .env\n'})}),"\n",(0,r.jsx)(e.h3,{id:"2-\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u4f5c\u6210",children:"2. \u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u4f5c\u6210"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"contracts/HelloWorld.sol"}),"\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract HelloWorld {\n    string public greet = "Hello, Status Network!";\n\n    function setGreet(string memory _greet) public {\n        greet = _greet;\n    }\n\n    function getGreet() public view returns (string memory) {\n        return greet;\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"3-status-network\u7528\u306ehardhat\u306e\u8a2d\u5b9a",children:"3. Status Network\u7528\u306eHardhat\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"hardhat.config.ts"}),"\u3092\u66f4\u65b0\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\nimport * as dotenv from "dotenv";\n\ndotenv.config();\n\nconst PRIVATE_KEY = process.env.PRIVATE_KEY || "";\n\nconst config: HardhatUserConfig = {\n  solidity: "0.8.24",\n  networks: {\n    statusTestnet: {\n      url: "https://public.sepolia.rpc.status.network",\n      chainId: 1660990954,\n      accounts: [PRIVATE_KEY],\n    },\n  },\n};\n\nexport default config;\n'})}),"\n",(0,r.jsx)(e.h3,{id:"4-ignition\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4f5c\u6210",children:"4. Ignition\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u4f5c\u6210"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ignition/modules/HelloWorld.ts"}),"\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";\n\nexport default buildModule("HelloWorld", (m) => {\n  const helloWorld = m.contract("HelloWorld");\n  \n  return { helloWorld };\n});\n'})}),"\n",(0,r.jsx)(e.h3,{id:"5-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",children:"5. \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npx hardhat compile\nnpx hardhat ignition deploy ignition/modules/HelloWorld.ts --network statusTestnet\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306b\u3088\u308a\u3001\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306e\u6210\u679c\u7269\u3068\u5c65\u6b74\u3092\u542b\u3080\u65b0\u3057\u3044\u30c7\u30a3\u30ec\u30af\u30c8\u30ea",(0,r.jsx)(e.code,{children:"ignition/deployments"}),"\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"7-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u306e\u5bfe\u8a71",children:"7. \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u306e\u5bfe\u8a71"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"scripts/interact.ts"}),"\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { ethers } from "hardhat";\nimport { HelloWorld } from "../typechain-types";\n\nasync function main() {\n  const contractAddress = "0x0d8a93870494Fa21ec39602f31Aa67C9Fed5604f";\n  const HelloWorld = await ethers.getContractFactory("HelloWorld");\n  const contract = HelloWorld.attach(contractAddress) as HelloWorld;\n\n  // \u73fe\u5728\u306e\u6328\u62f6\u3092\u8aad\u307f\u53d6\u308a\n  const greeting = await contract.getGreet();\n  console.log("Current greeting:", greeting);\n\n  // \u6328\u62f6\u3092\u66f4\u65b0\n  const tx = await contract.setGreet("Hello from Status Network!");\n  await tx.wait();\n  console.log("Greeting updated!");\n\n  // \u66f4\u65b0\u3055\u308c\u305f\u6328\u62f6\u3092\u8aad\u307f\u53d6\u308a\n  const newGreeting = await contract.getGreet();\n  console.log("New greeting:", newGreeting);\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5bfe\u8a71\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npx hardhat run scripts/interact.ts --network statusTestnet\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u30b5\u30dd\u30fc\u30c8",children:"\u30b5\u30dd\u30fc\u30c8"}),"\n",(0,r.jsx)(e.p,{children:"\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u5834\u5408\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://t.me",children:"Telegram\u30b3\u30df\u30e5\u30cb\u30c6\u30a3"}),"\u306b\u53c2\u52a0"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://health.status.network",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30c6\u30fc\u30bf\u30b9"}),"\u3092\u78ba\u8a8d"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/general-info/network-details",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a73\u7d30"}),"\u3092\u53c2\u7167"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);