'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-30 w-full">
      <div className="fixed top-0 left-0 w-full z-30 px-8 py-3 flex items-center justify-between bg-black/20 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <div>
          <p className="text-3xl font-semibold text-white">AgriSense</p>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links for large screens */}
        <div className="lg:flex lg:gap-5 hidden">
          <ul className="list-none flex gap-5 font-normal text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/agrisense">AgriSense</Link></li>
            <li><Link href="/stats">Stats</Link></li>
            <li><Link href="/health">Health</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-4/5 h-full bg-black/60 backdrop-blur-md transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center text-white font-normal  backdrop-blur-md">
          <li className="py-4 hover:bg-white/20 rounded-lg transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="py-4 hover:bg-white/20 rounded-lg transition-colors duration-300">
            <Link href="/agrisense">AgriSense</Link>
          </li>
          <li className="py-4 hover:bg-white/20 rounded-lg transition-colors duration-300">
            <Link href="/stats">Stats</Link>
          </li>
          <li className="py-4 hover:bg-white/20 rounded-lg transition-colors duration-300">
            <Link href="/health">Health</Link>
          </li>
          <li className="py-4 hover:bg-white/20 rounded-lg transition-colors duration-300">
            <Link href="/working">Working</Link>
          </li>
          <li className="py-4 hover:bg-white/20 rounded-lg transition-colors duration-300">
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;