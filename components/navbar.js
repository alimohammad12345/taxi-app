// components/navbar.js (Modified for Taxi Dalarna Borlänge)
import React, { useState } from 'react';
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegClock,
  FaFacebook, // Keep if used, otherwise remove import
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/logo.png"; // Assumed logo path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Changed component name to start with uppercase (standard practice)
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-100 ">
        <div className="container mx-auto lg:flex lg:flex-row  lg:justify-between justify-center items-center space-y-2  text-gray-500 py-3 w-full px-4 lg:px-0"> {/* Added padding for small screens */}
          <div className="lg:flex lg:flex-row flex flex-col justify-center items-center lg:space-x-8 xl:space-x-12 lg:space-y-0 space-y-2 text-sm"> {/* Adjusted spacing & text size */}
            {/* Address */}
            <div className="flex flex-row items-center space-x-2">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-500" /> 
          
              <p>Järvstigen 1, 784 50 Borlänge</p>
            </div>
            {/* Phone */}
            <div className="flex flex-row items-center space-x-2">
              <FaMobileAlt className="w-4 h-4 text-gray-500" />
    
              <p><a href="tel:024317900" className="hover:text-amber-600">0243-179 00</a> (Boka Taxi)</p>
            </div>
            {/* Hours */}
            <div className="flex flex-row items-center space-x-2">
              <FaRegClock className="w-4 h-4 text-gray-500" />
              <p>Växel Öppen: Se <Link href="/kontakt"><a className="hover:text-amber-600 underline">Kontakt</a></Link></p>
            </div>
          </div>
        
          <div className="flex flex-row space-x-4 justify-center items-center pt-2 lg:pt-0">

             {<a href="https://www.facebook.com/profile.php?id=61556301210089" target="_blank" rel="noopener noreferrer"><FaFacebook className="w-5 h-5 text-gray-500 hover:text-blue-600" /></a> }
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white px-2 sm:px-4 py-3 shadow-sm sticky top-0 z-50"> {/* Added styles */}
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center"> {/* Removed redundant href="#" */}
               {/* UPDATE Logo path, width, height, and alt text */}
              <Image src={Logo} alt="Taxi Dalarna Borlänge Logotyp" width={180} height={40} />
            </a>
          </Link>
          {/* CTA & Mobile Menu Button */}
          <div className="flex md:order-2">
            {/* CTA Button - Changed to Phone Link */}
            <a
              href="tel:024317900" // Direct phone link
              className="text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 shadow"
            >
              Ring & Boka: 0243-179 00
            </a>
            {/* Mobile Menu Toggle */}
            <button
          
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-4"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Öppna huvudmeny</span>
              {/* Hamburger Icon */}
              <svg className={`${!isMobileMenuOpen ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              {/* Close Icon */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          {/* Menu Links */}
          <div
            className={`${isMobileMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-sm font-medium">
              <li>
                <Link href="/">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0">
                    HEM
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/vara-tjanster">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0">
                    VÅRA TJÄNSTER
                  </a>
                </Link>
              </li>
               <li>
                <Link href="/priser">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0">
                    PRISER
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/om-oss">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0">
                    OM OSS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-amber-600 md:p-0">
                    KONTAKT
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; // Export with uppercase name
