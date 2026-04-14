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
          chainId: '0x176',
          chainName: 'Status Network Hoodi Testnet',
          nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
          },
          rpcUrls: ['https://public.hoodi.rpc.status.network'],
          blockExplorerUrls: ['https://hoodiscan.status.network']
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
        src="https://docs.status.network/img/metamask.svg"
        alt="MetaMask Fox"
        style={{
          width: '20px',
          height: '20px',
          marginRight: '8px',
          verticalAlign: 'middle'
        }}
      />
      Add Status Network Hoodi Testnet
    </button>
  );
}
