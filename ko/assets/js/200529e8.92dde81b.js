"use strict";(self.webpackChunkstatus_network_docs=self.webpackChunkstatus_network_docs||[]).push([[520],{7006:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(4848),s=t(8453);const i={},o="Hardhat\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ud558\uae30",a={id:"tutorials/deploying-contracts/using-hardhat",title:"Hardhat\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ud558\uae30",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 Hardhat, Hardhat Ignition \ubc0f TypeScript\ub97c \uc0ac\uc6a9\ud558\uc5ec Status Network \ud14c\uc2a4\ud2b8\ub137\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 \uacfc\uc815\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/deploying-contracts/using-hardhat.md",sourceDirName:"tutorials/deploying-contracts",slug:"/tutorials/deploying-contracts/using-hardhat",permalink:"/ko/tutorials/deploying-contracts/using-hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/status-im/status-network-docs/tree/main/docs/tutorials/deploying-contracts/using-hardhat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Block Explorers",permalink:"/ko/tools/block-explorers"},next:{title:"\u2692\ufe0f Using Foundry",permalink:"/ko/tutorials/deploying-contracts/using-foundry"}},l={},c=[{value:"\uc0ac\uc804 \uc694\uad6c\uc0ac\ud56d",id:"\uc0ac\uc804-\uc694\uad6c\uc0ac\ud56d",level:2},{value:"\ub2ec\uc131 \ubaa9\ud45c",id:"\ub2ec\uc131-\ubaa9\ud45c",level:2},{value:"\ub2e8\uacc4",id:"\ub2e8\uacc4",level:2},{value:"1. Hardhat TypeScript \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\ud654",id:"1-hardhat-typescript-\ud504\ub85c\uc81d\ud2b8-\ucd08\uae30\ud654",level:3},{value:"2. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131",id:"2-\uc2a4\ub9c8\ud2b8-\ucee8\ud2b8\ub799\ud2b8-\uc791\uc131",level:3},{value:"3. Status Network\ub97c \uc704\ud55c Hardhat \uad6c\uc131",id:"3-status-network\ub97c-\uc704\ud55c-hardhat-\uad6c\uc131",level:3},{value:"4. Ignition \ubc30\ud3ec \ubaa8\ub4c8 \uc0dd\uc131",id:"4-ignition-\ubc30\ud3ec-\ubaa8\ub4c8-\uc0dd\uc131",level:3},{value:"5. \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"5-\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",level:3},{value:"7. \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638\uc791\uc6a9",id:"7-\ucee8\ud2b8\ub799\ud2b8\uc640-\uc0c1\ud638\uc791\uc6a9",level:3},{value:"\uc9c0\uc6d0",id:"\uc9c0\uc6d0",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"hardhat\uc744-\uc0ac\uc6a9\ud558\uc5ec-\uc2a4\ub9c8\ud2b8-\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec\ud558\uae30",children:"Hardhat\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ud558\uae30"})}),"\n",(0,r.jsx)(e.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 Hardhat, Hardhat Ignition \ubc0f TypeScript\ub97c \uc0ac\uc6a9\ud558\uc5ec Status Network \ud14c\uc2a4\ud2b8\ub137\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 \uacfc\uc815\uc744 \uc548\ub0b4\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h2,{id:"\uc0ac\uc804-\uc694\uad6c\uc0ac\ud56d",children:"\uc0ac\uc804 \uc694\uad6c\uc0ac\ud56d"}),"\n",(0,r.jsx)(e.p,{children:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \ub2e4\uc74c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Node.js\uc640 npm"}),": ",(0,r.jsx)(e.a,{href:"https://nodejs.org/",children:"\uacf5\uc2dd Node.js \uc6f9\uc0ac\uc774\ud2b8"}),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc124\uce58"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc774\ub354\ub9ac\uc6c0 \uc9c0\uac11"}),": Status Network \ud14c\uc2a4\ud2b8\ub137\uc6a9 \uac1c\uc778\ud0a4\uac00 \uc788\ub294 MetaMask \ub610\ub294 \ub2e4\ub978 \uc9c0\uac11"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ud14c\uc2a4\ud2b8\ub137 ETH"}),": Status Network \ud14c\uc2a4\ud2b8\ub137 ETH\uac00 \ud544\uc694\ud569\ub2c8\ub2e4","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Status Network \ud14c\uc2a4\ud2b8\ub137 ETH\ub294 ",(0,r.jsx)(e.a,{href:"/tools/testnet-faucets",children:"\uc218\ub3c4\uaf2d\uc9c0"}),"\uc5d0\uc11c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uae30\ubcf8 \uc9c0\uc2dd"}),": Solidity, Hardhat, \uba85\ub839\uc904 \uc0ac\uc6a9 \uacbd\ud5d8"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\ub2ec\uc131-\ubaa9\ud45c",children:"\ub2ec\uc131 \ubaa9\ud45c"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"TypeScript \uae30\ubc18 Hardhat \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\ud654"}),"\n",(0,r.jsx)(e.li,{children:"\uae30\ubcf8 \uc774\ub354\ub9ac\uc6c0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131"}),"\n",(0,r.jsx)(e.li,{children:"Status Network \ud14c\uc2a4\ud2b8\ub137 \ubc30\ud3ec\ub97c \uc704\ud55c Hardhat \uad6c\uc131"}),"\n",(0,r.jsx)(e.li,{children:"Hardhat Ignition\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\ub2e8\uacc4",children:"\ub2e8\uacc4"}),"\n",(0,r.jsx)(e.h3,{id:"1-hardhat-typescript-\ud504\ub85c\uc81d\ud2b8-\ucd08\uae30\ud654",children:"1. Hardhat TypeScript \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\ud654"}),"\n",(0,r.jsx)(e.p,{children:"\uba3c\uc800 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\uace0 \uc124\uc815\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mkdir my-hardhat-project && cd my-hardhat-project\nnpm init -y\nnpm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv\nnpx hardhat init\n"})}),"\n",(0,r.jsx)(e.p,{children:'\ud504\ub86c\ud504\ud2b8\uac00 \ud45c\uc2dc\ub418\uba74 "Create a TypeScript project"\ub97c \uc120\ud0dd\ud558\uc5ec TypeScript \uae30\ubc18 Hardhat \ud504\ub85c\uc81d\ud2b8\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(e.p,{children:"\ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'# .env \ud30c\uc77c \uc0dd\uc131\ntouch .env\n\n# \uac1c\uc778\ud0a4 \ucd94\uac00 (\uc774 \ud30c\uc77c\uc740 \uc808\ub300 \ucee4\ubc0b\ud558\uc9c0 \ub9c8\uc138\uc694!)\necho "PRIVATE_KEY=your_private_key_here" >> .env\n'})}),"\n",(0,r.jsx)(e.h3,{id:"2-\uc2a4\ub9c8\ud2b8-\ucee8\ud2b8\ub799\ud2b8-\uc791\uc131",children:"2. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"contracts/HelloWorld.sol"}),"\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract HelloWorld {\n    string public greet = "Hello, Status Network!";\n\n    function setGreet(string memory _greet) public {\n        greet = _greet;\n    }\n\n    function getGreet() public view returns (string memory) {\n        return greet;\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"3-status-network\ub97c-\uc704\ud55c-hardhat-\uad6c\uc131",children:"3. Status Network\ub97c \uc704\ud55c Hardhat \uad6c\uc131"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"hardhat.config.ts"}),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\nimport * as dotenv from "dotenv";\n\ndotenv.config();\n\nconst PRIVATE_KEY = process.env.PRIVATE_KEY || "";\n\nconst config: HardhatUserConfig = {\n  solidity: "0.8.24",\n  networks: {\n    statusTestnet: {\n      url: "https://public.sepolia.rpc.status.network",\n      chainId: 1660990954,\n      accounts: [PRIVATE_KEY],\n    },\n  },\n};\n\nexport default config;\n'})}),"\n",(0,r.jsx)(e.h3,{id:"4-ignition-\ubc30\ud3ec-\ubaa8\ub4c8-\uc0dd\uc131",children:"4. Ignition \ubc30\ud3ec \ubaa8\ub4c8 \uc0dd\uc131"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ignition/modules/HelloWorld.ts"}),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";\n\nexport default buildModule("HelloWorld", (m) => {\n  const helloWorld = m.contract("HelloWorld");\n  \n  return { helloWorld };\n});\n'})}),"\n",(0,r.jsx)(e.h3,{id:"5-\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",children:"5. \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npx hardhat compile\nnpx hardhat ignition deploy ignition/modules/HelloWorld.ts --network statusTestnet\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\ubc30\ud3ec\ub294 ",(0,r.jsx)(e.code,{children:"ignition/deployments"})," \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubc30\ud3ec \uacb0\uacfc\ubb3c\uacfc \uc774\ub825\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.h3,{id:"7-\ucee8\ud2b8\ub799\ud2b8\uc640-\uc0c1\ud638\uc791\uc6a9",children:"7. \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638\uc791\uc6a9"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"scripts/interact.ts"}),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:'import { ethers } from "hardhat";\nimport { HelloWorld } from "../typechain-types";\n\nasync function main() {\n  const contractAddress = "0x0d8a93870494Fa21ec39602f31Aa67C9Fed5604f";\n  const HelloWorld = await ethers.getContractFactory("HelloWorld");\n  const contract = HelloWorld.attach(contractAddress) as HelloWorld;\n\n  // \ud604\uc7ac \uc778\uc0ac\ub9d0 \uc77d\uae30\n  const greeting = await contract.getGreet();\n  console.log("Current greeting:", greeting);\n\n  // \uc778\uc0ac\ub9d0 \uc5c5\ub370\uc774\ud2b8\n  const tx = await contract.setGreet("Hello from Status Network!");\n  await tx.wait();\n  console.log("Greeting updated!");\n\n  // \uc5c5\ub370\uc774\ud2b8\ub41c \uc778\uc0ac\ub9d0 \uc77d\uae30\n  const newGreeting = await contract.getGreet();\n  console.log("New greeting:", newGreeting);\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n'})}),"\n",(0,r.jsx)(e.p,{children:"\uc0c1\ud638\uc791\uc6a9 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"npx hardhat run scripts/interact.ts --network statusTestnet\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\uc9c0\uc6d0",children:"\uc9c0\uc6d0"}),"\n",(0,r.jsx)(e.p,{children:"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://t.me/+k04A_OZbhIs1Mzc9",children:"\ud154\ub808\uadf8\ub7a8 \ucee4\ubba4\ub2c8\ud2f0"}),"\uc5d0 \ucc38\uc5ec"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://health.status.network",children:"\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc"})," \ud655\uc778"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/general-info/network-details",children:"\ub124\ud2b8\uc6cc\ud06c \uc138\ubd80\uc815\ubcf4"})," \ucc38\uc870"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);