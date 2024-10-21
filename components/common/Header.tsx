"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-around items-center pt-5 md:pt-12 px-4 z-50">
        {/* Title */}
        <h1 className="border border-darkTeal p-2 md:p-1 md:pl-8 md:pr-8 tracking-wider font-bold rounded-3xl md:rounded-2xl text-3xl text-darkTeal">
          ANASTASIOS ARCHONTAKIS
        </h1>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 justify-center items-center focus:outline-none"
        >
          {/* Hamburger icon lines */}
          <div className="w-8 h-[3px] bg-darkTeal"></div>
          <div className="w-8 h-[3px] bg-darkTeal"></div>
          <div className="w-8 h-[3px] bg-darkTeal"></div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-5 text-lg rounded-2xl p-0 px-4 py-2 border tracking-wider bg-darkTeal items-center">
          <p className="m-0 font-bold text-white cursor-pointer">About</p>
          <p className="m-0 font-bold text-white cursor-pointer">Contact</p>
        </div>
      </div>

      {/* Drop-down menu for mobile (appears on click) */}
      {isMenuOpen && (
        <div className="  mt-5 absolute  w-full bg-darkTeal text-white rounded-md shadow-lg md:hidden">
          <ul className="flex flex-col space-y-2 p-4 text-center">
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
