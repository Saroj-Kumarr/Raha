"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  const isHome = pathname === "/"; // For color logic

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Product dropdown items
  const productItems = [
    {
      id: 1,
      title: "Group Insurance",
      description:
        "Comprehensive health coverage for teams, with affordable plans and maximum employee benefits.",
      icon: "/prod_1.svg",
      href: "/group-insurance",
    },
    {
      id: 2,
      title: "Employee Wellness",
      description:
        "Enhance productivity through health checkups, fitness programs, and mental wellness.",
      icon: "/prod_2.svg",
      href: "/employee-wellness",
    },
    {
      id: 3,
      title: "OPD Insurance",
      description:
        "Covers doctor visits, diagnostic tests, and pharmacy expenses for everyday healthcare needs.",
      icon: "/prod_3.svg",
      href: "/opd-insurance",
    },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // NavLinks now get closeMenu callback
  const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center font-medium text-[15px]">
      <li className="relative" ref={dropdownRef}>
        <button
          className="hover:text-[#2EC697] transition-all duration-300 flex items-center gap-1"
          onClick={() => setProductDropdownOpen(!productDropdownOpen)}
        >
          Product
          {productDropdownOpen ? (
            <ChevronUp size={14} className="relative top-[2px]" />
          ) : (
            <ChevronDown size={14} className="relative top-[2px]" />
          )}
        </button>

        {/* Product Dropdown */}
        {productDropdownOpen && (
          <div className="absolute md:-left-60 top-8 md:top-16 mt-2 p-3 w-80 md:w-[850px] bg-white rounded-2xl shadow-lg border border-gray-200 z-[100]">
            <div className="grid grid-col-1 md:grid-cols-3 gap-4 md:gap-6">
              {productItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`flex flex-col bg-white items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group ${
                    isMobile ? "cs" : ""
                  }`}
                  onClick={() => {
                    setProductDropdownOpen(false);
                    setMenuOpen?.(false); // if closing mobile
                    router.push(
                      `/?product=${item.title.toLowerCase().replace(/ /g, "-")}`
                    );
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#2EC697] transition-colors duration-200 flex items-center gap-2">
                      {item.title}
                      <ChevronDown
                        size={16}
                        className="transform rotate-[-90deg]"
                      />
                    </h3>
                  </div>
                  <p className="text-sm text-[#747C90] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </li>
      <li
        className="hover:text-[#2EC697] transition-all duration-300"
        onClick={closeMenu}
      >
        <Link href="/feature" className="flex items-center gap-1">
          {/* How it Works <ChevronDown size={14} className="relative top-[2px]" /> */}
          Features
        </Link>
      </li>
      <li
        className="hover:text-[#2EC697] transition-all duration-300"
        onClick={closeMenu}
      >
        <Link href="/services">Services</Link>
      </li>
      <li
        className="hover:text-[#2EC697] transition-all duration-300"
        onClick={closeMenu}
      >
        <Link href="/about">About Us</Link>
      </li>
      <li
        className="hover:text-[#2EC697] transition-all duration-300"
        onClick={closeMenu}
      >
        <Link href="/about?career=career">Career</Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Main Header */}
      <div
        className={`flex justify-between items-center ${
          isHome ? "absolute z-50 w-full" : " bg-white"
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
              isHome ? "text-white" : "text-white"
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
          <Link href="/login">
            <Button className="w-36 h-10">
              Login <ChevronDown size={14} className="relative top-[2px]" />
            </Button>
          </Link>
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
            {/* Pass closeMenu handler to NavLinks */}
            <NavLinks closeMenu={() => setMenuOpen(false)} />
            <Link href="/quote" onClick={() => setMenuOpen(false)}>
              <Button className="w-full h-10">
                Login <ChevronDown size={14} className="relative top-[2px]" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
