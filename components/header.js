// components/header.js (Modified for Taxi Dalarna Borlänge Hero)

// Removed Swiper imports as they are no longer needed
// import React from "react"; // React is implicitly available in Next.js
import Link from 'next/link';

// Renamed component for clarity (optional)
const HomepageHero = () => {
  return (
    // --- Hero Section Container ---
    // Adjust height as needed: h-screen, h-[80vh], h-[70vh], etc.
    <div
      className="relative h-[75vh] md:h-[70vh] w-full bg-no-repeat bg-cover bg-center"
      // IMPORTANT: Replace with your high-quality hero image path
      style={{ backgroundImage: `url(/img01.jpg)` }}
      role="banner" // Added role for semantics
    >
      {/* --- Overlay for text contrast --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-center items-center text-center text-white px-4">

        <div className="max-w-4xl space-y-5 md:space-y-6"> {/* Container for text content */}
          {/* --- Main Heading (H1) --- */}
          {/* NOTE: Ensure this is the ONLY H1 on the homepage. */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-shadow-md"> {/* Added text shadow */}
            Pålitlig Taxi i Borlänge – Res Tryggt med Taxi Dalarna Borlänge
          </h1>

          {/* --- Introductory Text --- */}
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-shadow-sm"> {/* Added text shadow */}
            Välkommen till Taxi Dalarna Borlänge – ditt självklara val för bekväma och säkra taxiresor i Borlänge, Falun och hela Dalarna.
          </p>

          {/* --- Call-to-Action Buttons --- */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link href="/boka-online">
              <a className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-3xl text-base px-8 py-3 text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Boka Taxi Online Nu
              </a>
            </Link>
            <a
              href="tel:024317900"
              className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-base px-8 py-3 text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Ring Oss Direkt: 0243-179 00
            </a>
          </div>

          {/* --- Link to Prices --- */}
          <div className="pt-2">
            <Link href="/priser">
              <a className="text-white hover:underline text-sm md:text-base">
                Se våra priser
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting with the new name (or keep 'header' if preferred)
export default HomepageHero;

// Optional: Add simple text shadow utility class in your globals.css if needed
/*
@layer utilities {
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
}
*/