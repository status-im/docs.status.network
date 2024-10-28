# Interacting with Smart Contracts Using ethers.js

Learn how to interact with smart contracts deployed on **Status Network** from a frontend using **ethers.js**.

In this tutorial, we'll walk through setting up a basic web application, deploying a smart contract on the **Status Network Testnet**, and interacting with it using **ethers.js**.

---

## Prerequisites

Before you begin, ensure you have the following:

- **MetaMask** installed in your browser.
- **Node.js** and **npm** installed on your computer.
- Basic understanding of **React.js** and how **blockchains** work.

### Set Up Status Network Testnet

1. **Add Status Network Testnet to MetaMask**:

   - Follow the guide [Adding Status Network to MetaMask](/general-info/add-status-network) to add the testnet network to your wallet.

2. **Obtain Test ETH**:

   - Use the [Status Network Testnet Faucet](/tools/testnet-faucets) to get test ETH for deploying and interacting with contracts.

3. **Bridge Assets (Optional)**:

   - If needed, bridge assets to the Status Network Testnet using the [Testnet Bridge](/general-info/bridge/bridging-testnet).

---

## Smart Contract Deployment on Status Network

We'll use a simple smart contract called **BidBoard** for this tutorial. The contract allows advertisers to bid for space on an advertising board.

### BidBoard Smart Contract

Here's the `BidBoard.sol` contract code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BidBoard {
    string public currentAd;
    address public advertiser;
    uint256 public currentBid;

    event AdUpdated(string newAd, address newAdvertiser, uint256 newBid);

    constructor() {
        currentAd = "Welcome to Status Network!";
        advertiser = msg.sender;
        currentBid = 0;
    }

    function updateAd(string memory newAd) public payable {
        require(msg.value > currentBid, "Bid must be higher than current bid");
        currentAd = newAd;
        advertiser = msg.sender;
        currentBid = msg.value;
        emit AdUpdated(newAd, msg.sender, msg.value);
    }

    function getCurrentAd() public view returns (string memory, address, uint256) {
        return (currentAd, advertiser, currentBid);
    }
}
```

> **Note:** You can use your own smart contract if you prefer.

### Deploying the Contract

Follow the guide [Deploying a Smart Contract Using Remix](/tutorials/deploying-contracts/using-remix) to deploy the `BidBoard.sol` contract to the Status Network Testnet.

---

## Setting Up the Frontend Application

We'll create a React.js application to interact with the deployed smart contract.

### Step 1: Create a React App

Open your terminal and run:

```bash
npx create-react-app bidboard-ui
```

This command creates a new React application named `bidboard-ui`.

### Step 2: Install ethers.js

Navigate to the project directory and install **ethers.js**:

```bash
cd bidboard-ui
npm install ethers
```

---

## Building the Main Application Component

Open the project in your code editor and navigate to `src/App.js`.

### Import Required Libraries

Replace the content of `App.js` with the following code:

```jsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  // Contract details
  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const abi = [/* ABI JSON CODE */];

  // State variables
  const [currentAd, setCurrentAd] = useState("");
  const [currentBid, setCurrentBid] = useState(0);
  const [advertiser, setAdvertiser] = useState("");
  const [newAd, setNewAd] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [provider, setProvider] = useState(null);
  const [status, setStatus] = useState("");

  // Rest of the code...
};

export default App;
```

> **Important:** Replace `"YOUR_CONTRACT_ADDRESS"` with the address of your deployed `BidBoard` contract. Paste the ABI of your contract in the `abi` array.

### Setting Up the Provider

Add the following code inside the `App` component to set up the provider:

```jsx
useEffect(() => {
  if (typeof window.ethereum !== "undefined") {
    const newProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(newProvider);
  } else {
    console.error("Please install MetaMask!");
  }
}, []);
```

### Fetch Current Advertisement Data

Add a function to fetch the current advertisement data:

```jsx
const fetchCurrentAd = async () => {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const adData = await contract.getCurrentAd();
    setCurrentAd(adData[0]);
    setAdvertiser(adData[1]);
    setCurrentBid(ethers.utils.formatEther(adData[2]));
  } catch (error) {
    console.error("Error fetching current ad:", error);
  }
};

useEffect(() => {
  if (provider) {
    fetchCurrentAd();
  }
}, [provider]);
```

### Submit a New Bid

Add a function to submit a new bid:

```jsx
const submitBid = async () => {
  if (!newAd || !bidAmount) {
    setStatus("Please enter an ad message and bid amount.");
    return;
  }

  try {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.updateAd(newAd, {
      value: ethers.utils.parseEther(bidAmount),
    });
    setStatus("Transaction sent, waiting for confirmation...");
    await tx.wait();
    setStatus("Transaction confirmed!");
    setNewAd("");
    setBidAmount("");
    fetchCurrentAd();
  } catch (err) {
    console.error(err);
    setStatus("Error: " + err.message);
  }
};
```

### Listen to Contract Events

Add code to listen to the `AdUpdated` event:

```jsx
useEffect(() => {
  let contract;

  const setupEventListener = async () => {
    if (provider) {
      contract = new ethers.Contract(contractAddress, abi, provider);
      contract.on("AdUpdated", (newAd, newAdvertiser, newBid) => {
        setCurrentAd(newAd);
        setAdvertiser(newAdvertiser);
        setCurrentBid(ethers.utils.formatEther(newBid));
      });
    }
  };

  setupEventListener();

  return () => {
    if (contract) {
      contract.removeAllListeners("AdUpdated");
    }
  };
}, [provider]);
```

---

## Creating the User Interface

Update the `return` statement in the `App` component:

```jsx
return (
  <div className="app">
    {/* Header */}
    <header>
      <h1>BidBoard</h1>
      <p>Status: {status}</p>
    </header>

    {/* Current Advertisement */}
    <section className="current-ad-section">
      <h2>Current Advertisement</h2>
      <p className="ad-message">"{currentAd}"</p>
      <p className="ad-details">
        <strong>Advertiser:</strong> {advertiser}
      </p>
      <p className="ad-details">
        <strong>Current Bid:</strong> {currentBid} ETH
      </p>
    </section>

    {/* Submit a New Bid */}
    <section className="new-bid-section">
      <h2>Submit a New Bid</h2>
      <input
        type="text"
        value={newAd}
        onChange={(e) => setNewAd(e.target.value)}
        placeholder="Your Ad Message"
      />
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Bid Amount in ETH"
      />
      <button onClick={submitBid}>Submit Bid</button>
    </section>

    {/* Footer */}
    <footer>
      <p>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>
    </footer>
  </div>
);
```

---

## Styling the Application

Create a `App.css` file in the `src` directory and add your preferred styles. Here's a basic example:

```css
.app {
  text-align: center;
  font-family: Arial, sans-serif;
}

header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

section {
  margin: 20px;
}

input {
  margin: 5px;
  padding: 10px;
  width: 200px;
}

button {
  padding: 10px 20px;
}

footer {
  margin-top: 40px;
}
```

---

## Running the Application

In your terminal, navigate to your project directory and run:

```bash
npm start
```

This command starts the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Testing the Application

1. **View Current Advertisement**:

   - The application should display the current ad message, advertiser address, and current bid.

2. **Submit a New Bid**:

   - Enter a new ad message and a bid amount higher than the current bid.
   - Click **"Submit Bid"**.
   - MetaMask will prompt you to confirm the transaction.
   - Wait for the transaction to be confirmed.

3. **Observe Real-Time Updates**:

   - Upon confirmation, the application should automatically update with the new ad, advertiser, and bid amount.

---

## Conclusion

You've successfully created a web application that interacts with a smart contract deployed on the Status Network Testnet using **ethers.js**. This tutorial covered:

- Setting up a React application.
- Deploying a smart contract to the Status Network.
- Connecting the frontend to the smart contract using ethers.js.
- Handling user interactions and real-time updates via events.

---

## Next Steps

- **Explore More Tutorials**:

  - Check out other tutorials in the [Status Network Documentation](/tutorials/ethers-tutorial).

- **Enhance the Application**:

  - Add error handling for edge cases.
  - Improve the UI/UX design.
  - Implement additional features like user authentication.

- **Deploy to Production**:

  - Learn how to deploy your application for production use.

---

## Resources

- [Status Network Official Website](https://status.network/)
- [Status Network Documentation](https://docs.status.network/)
- [ethers.js Documentation](https://docs.ethers.io/)
- [React.js Documentation](https://reactjs.org/)

---

**Happy Coding!**