import React, { createContext, useContext } from 'react';
import {
    useAbstraxionAccount,
  } from "@burnt-labs/abstraxion"

interface WalletContextProps {
  bech32Address: string;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: { bech32Address }, isConnected,} = useAbstraxionAccount();


  return (
    <WalletContext.Provider value={{ bech32Address, isConnected }}>
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