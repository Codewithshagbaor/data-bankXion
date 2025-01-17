"user client";
import React from 'react'
import { User2 } from 'lucide-react';
import { useWallet } from '@/utils/WalletContext';

export default function DashboardNav() {
    const { bech32Address } = useWallet();




  function shortenAddress(bech32Address: string ) {
    return `${bech32Address.slice(0, 6)}...${bech32Address.slice(-4)}`;
  }


  return (
    <div className="flex items-center justify-between mb-3">
      <h1 className="text-2xl font-semibold">
        Welcome <span className="text-[#2B9DDA]">!!</span>
      </h1>
      <button
        className="flex items-center justify-center gap-2 bg-white text-black p-2 md:px-4 md:py-2 rounded-lg text-sm font-mono"
        title='click me to logout'>
        <User2 size={16} />
          {bech32Address && shortenAddress(bech32Address)}
      </button>
    </div>
  )
}
