import React, { useState } from "react";
import { Home, Upload, LogOut } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import Image from 'next/image';
interface MenuItemProps {
  icon: LucideIcon;
  text: string;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text, to }) => {

    return (
        <Link href={to} className="flex items-center gap-3 py-2 text-gray-300 hover:bg-white/5 hover:text-white">
          <Icon className="h-6 w-6" />
          {text}
        </Link>
      );
    };

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` absolute flex flex-col bg-[#171618] text-white py-3 ${
        isOpen ? "pl-3 w-64 h-screen" : "w-full h-auto"
      } transition-all duration-300 ease-in-out border-r-white`}
    >
      <div className="md:hidden ml-4" onClick={toggleMobileMenu}>
        {isOpen ? (
          <XMarkIcon className="h-8 w-8 text-[#2B9DDA] ml-20" />
        ) : (
          <div className="flex justify-between items-center px-4">
            <Image src="/img/logo.png" alt="Logo" className="h-10" />
            <Bars3Icon className="h-8 w-8 text-[#2B9DDA]" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col  h-full">
          <div className="px-6 mb-6">
            <Image src="/img/logo.png" alt="Logo" className="h-10" />
          </div>

          <nav className="flex-1 mt-1">
            <MenuItem icon={Home} text="Home" to="/dashboard" />
            <MenuItem icon={Upload} text="Upload Document" to="/upload" />
          </nav>

          <div className="pl-11">
            <button
              className="flex items-center gap-3 py-2 text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors w-full"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

