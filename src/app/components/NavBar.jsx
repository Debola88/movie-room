"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline, IoNotificationsOutline, IoCloseOutline } from "react-icons/io5";
import logo from "@/app/assets/Logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movies & Shows", path: "/movies" },
    { name: "Support", path: "/support" },
    { name: "Subscriptions", path: "/subscriptions" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center transition-transform duration-500 ease-in-out">
        {/* Logo */}
        <div className="hover:scale-105 transition-transform duration-300">
          <Link href="/">
            <Image src={logo} alt="Logo" className="object-contain max-md:h-[50px] w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-3">
          {navItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <button
                className={`text-sm px-4 py-2 rounded-lg transition-colors duration-300 hover:scale-105 active:scale-95 ${
                  pathname === item.path
                    ? "bg-[#333333] text-white"
                    : "hover:bg-[#333333]/50"
                }`}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex text-lg gap-5 max-lg:hidden">
          <IoSearchOutline className="hover:text-gray-500/70 transition-colors duration-300" />
          <IoNotificationsOutline className="hover:text-gray-500/70 transition-colors duration-300" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="backdrop-blur-md bg-black/80 p-3 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            {isOpen ? (
              <IoCloseOutline className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-3 bg-black/80 backdrop-blur-md rounded-lg px-6 pb-5 pt-3 shadow-lg transition-transform duration-500 ease-in-out">
          {navItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`block py-3 text-sm text-gray-300 transition-colors duration-300 ease-in-out transform hover:translate-x-2 ${
                  pathname === item.path ? "text-[#333333]" : "hover:text-[#333333]"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
          <div className="relative mt-4 flex items-center">
            <input
              type="text"
              className="bg-transparent text-white rounded-full px-4 py-2 w-full focus:outline-none border border-gray-500 placeholder-gray-400 transition-transform duration-300 hover:border-indigo-500"
              placeholder="Search..."
            />
            <IoSearchOutline className="absolute right-4 text-gray-400 text-lg" />
          </div>
        </div>
      )}
    </nav>
  );
}
