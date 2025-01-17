import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    Abstraxion,
    useAbstraxionAccount,
    useAbstraxionSigningClient,
    useModal
  } from "@burnt-labs/abstraxion"
import {useRouter}  from 'next/navigation'
import { Button } from "@burnt-labs/ui"

interface WalletContextProps {
  bech32Address: string;
  isConnected: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: { bech32Address }, isConnected, isConnecting, connect, disconnect } = useAbstraxionAccount();
  const { client } = useAbstraxionSigningClient();
  const router = useRouter()

  const connectWallet = () => {
    if (!isConnected && !isConnecting) {
      connect();
    }
  };

  const disconnectWallet = () => {
    if (isConnected) {
      disconnect();
        router.push('/')
    }
  };

  return (
    <WalletContext.Provider value={{ bech32Address, isConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};