"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Home: React.FC = () => {

  return (
    <div>
      <Navbar />
      <section className="text-center text-white flex flex-col items-center justify-center md:mt-28 mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 max-w-4xl">
          Secure Your <span className="text-[#2B9DDA]">Documents</span> with
          <span className="text-[#2B9DDA]"> Blockchain</span> Technology
        </h1>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Our platform offers decentralized, private, and immutable document storage, ensuring your data is safe and fully under your
          control. With blockchain technology, you can trust that your documents are secure and tamper-proof.
        </p>
        <div className="flex gap-4">
          <div className="col-span-6 md:col-span-4 flex justify-end">
            <div className="">
              <button
                className="bg-[#FFFFFF] border-1 px-5 py-3 rounded-2xl text-black font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
          <button className="border-1 px-5 py-3 border-[#2B9DDA] rounded-2xl text-[#2B9DDA] font-semibold hover:bg-[#2B9DDA] hover:text-white">
            Learn More
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
