import React from 'react';

export default function AddToMetaMask(): JSX.Element {
  const addStatusNetwork = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      alert('MetaMask is not installed. Please install MetaMask first.');
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x6300B5EA',
          chainName: 'Status Network Testnet',
          nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
          },
          rpcUrls: ['https://public.sepolia.rpc.status.network'],
          blockExplorerUrls: ['https://sepoliascan.status.network']
        }]
      });
    } catch (error) {
      console.error(error);
      alert('Failed to add the network to MetaMask. Please try again.');
    }
  };

  return (
    <button 
      className="button button--primary" 
      onClick={addStatusNetwork}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
        alt="MetaMask Fox"
        style={{ 
          width: '20px', 
          height: '20px',
          marginRight: '8px',
          verticalAlign: 'middle'
        }} 
      />
      Add Status Network Testnet
    </button>
  );
} 