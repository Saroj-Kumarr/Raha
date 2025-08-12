"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/"; // For color logic

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center font-medium text-[15px]">
      <li className="hover:text-[#2EC697] transition-all duration-300">
        <Link href="/product" className="flex items-center gap-1">
          Product <ChevronDown size={14} className="relative top-[2px]" />
        </Link>
      </li>
      <li className="hover:text-[#2EC697] transition-all duration-300">
        <Link href="/how-it-works" className="flex items-center gap-1">
          How it Works <ChevronDown size={14} className="relative top-[2px]" />
        </Link>
      </li>
      <li className="hover:text-[#2EC697] transition-all duration-300">
        <Link href="/services">Services</Link>
      </li>
      <li className="hover:text-[#2EC697] transition-all duration-300">
        <Link href="/about">About Us</Link>
      </li>
      <li className="hover:text-[#2EC697] transition-all duration-300">
        <Link href="/career">Career</Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Main Header */}
      <div
        className={`flex  justify-between items-center ${
          isHome
            ? "absolute z-50 w-full border-b md:border-none"
            : "border-b bg-white"
        } py-4 px-4 sm:px-8 md:px-20 transition-colors duration-300`}
      >
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={80} height={35} />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden ${
              isHome ? "text-black" : "text-black"
            } transition-colors duration-300`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center gap-10 ${
            isHome ? "text-white" : "text-black"
          }`}
        >
          <NavLinks />
          <Button className="w-36 h-10">
            Login <ChevronDown size={14} className="relative top-[2px]" />
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden ${
            isHome
              ? "bg-white shadow-md text-black"
              : "bg-white shadow-md text-black"
          } absolute top-[64px] left-0 w-full z-40 px-6 py-6`}
        >
          <div className="flex flex-col gap-6">
            <NavLinks />
            <Button className="w-full h-10">
              Login <ChevronDown size={14} className="relative top-[2px]" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
