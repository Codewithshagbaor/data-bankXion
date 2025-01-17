"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import {AbstraxionProvider} from "@burnt-labs/abstraxion";
import { WalletProvider } from '@/utils/WalletContext';

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ['latin'] })


const treasuryConfig = {
  treasury: "xion1sqmayscw29my4m207z5jtqwsz0mp6hs5y4ljg2yd2xy2p0fgf25smpl6s7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AbstraxionProvider
          config={treasuryConfig}>
          <WalletProvider>
          {children}
          </WalletProvider>
        </AbstraxionProvider>
      </body>
    </html>
  )
}
