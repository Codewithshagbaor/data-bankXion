"use client";

import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation';  // For App Router

import {
    Abstraxion,
    useAbstraxionAccount,
    useAbstraxionSigningClient,
    useModal
  } from "@burnt-labs/abstraxion"
import { Button } from "@burnt-labs/ui"
import { CONTRACTS, TREASURY } from "@/utils/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { 
    data: { bech32Address }, 
    isConnected, 
    isConnecting 
  } = useAbstraxionAccount()
  const { client } = useAbstraxionSigningClient()
  const [show, setShow] = useModal()

  if (isConnected) {
    router.push('/dashboard')
  }

  function shortenAddress(bech32Address: string | any[]) {
    return `${bech32Address.slice(0, 6)}...${bech32Address.slice(-4)}`;
  }
  return (
    <>
      <div className="grid grid-cols-12 max-w-7xl mx-auto items-center bg-[#5e5e5e] bg-opacity-50 rounded-2xl py-4 px-6 mt-3 text-white z-10">
        <div className="col-span-6 md:col-span-4 flex justify-start">
          <img src="/img/logo.png" alt="Logo" className="h-8" />
        </div>

        <div className="hidden md:col-span-4 md:flex justify-center md:space-x-2 lg:space-x-6 font-semibold text-lg">
          <a href="/" className="hover:text-[#2B9DDA]">
            Home
          </a>
          <a href="#how-it-works" className="hover:text-[#2B9DDA]">
            How Does It Work
          </a>
          <a href="#about-us" className="hover:text-[#2B9DDA]">
            About Us
          </a>
        </div>

        <div className="col-span-6 md:col-span-4 flex justify-end">
          <div className="relative">
            <Button
                fullWidth
                onClick={() => setShow(true)}
                structure="base"
                className="hidden md:block p-2 md:px-5 md:py-4 text-sm bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition duration-200"
            >
            {bech32Address ? 'VIEW ACCOUNT' : 'CONNECT'}
            </Button>
          </div>

          <div className="md:hidden ml-4" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <XMarkIcon className="h-8 w-8 text-[#2B9DDA]" /> : <Bars3Icon className="h-8 w-8 text-[#2B9DDA]" />}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute right-0 top-16 h-2/3 w-2/3 flex flex-col space-y-2 mt-3 md:hidden bg-[#5e5e5e] bg-opacity-50 backdrop-blur-sm rounded-bl-lg py-3 px-5 text-white gap-3 ">
          <a href="/" className="flex gap-3  items-center hover:text-[#2B9DDA] font-semibold text-lg">
            Home
          </a>
          <a href="/how-it-works" className="flex gap-3  items-center hover:text-[#2B9DDA] font-semibold text-lg">
            How Does It Work
          </a>
          <a href="/about-us" className="flex gap-3  items-center hover:text-[#2B9DDA] font-semibold text-lg">
            About Us
          </a>
          <button
            onClick={() => {
              toggleMobileMenu();
            }}
            className="p-2 md:px-5 md:py-4 text-sm bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition duration-200"
          >
            {bech32Address ? shortenAddress(bech32Address) : "Connect Wallet"}
          </button>
        </div>
      )}
      <Abstraxion onClose={() => setShow(false)} />
    </>
  );
}
