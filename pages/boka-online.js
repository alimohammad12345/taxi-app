// pages/boka-online.js (New File for Taxi Dalarna Borlänge)

import Head from 'next/head';
import Link from 'next/link';
import Meta from '../components/meta'; // Adjust path if needed

// Optional: Import useState if you plan client-side validation/handling later
// import { useState } from 'react';

export default function BokaOnline() {
  // --- Page Specific Metadata ---
  const pageTitle = "Boka Taxi Online Borlänge | Taxi Dalarna Borlänge | Förboka Din Resa";
  const pageDescription = "Förhandsboka din taxi i Borlänge online hos Taxi Dalarna Borlänge. Fyll i formuläret så bekräftar vi. För akut taxi, ring 0243-179 00.";
  const pageKeywords = "Boka taxi online Borlänge, Förboka taxi Borlänge, Taxi bokning Borlänge, Taxi Dalarna Borlänge";

  // --- Schema Data for Booking Page ---
  // Simple WebPage schema is usually sufficient here.
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Boka Taxi Online - Taxi Dalarna Borlänge",
      "url": "https://www.taxidalaborlange.se/boka-online", // <<<--- REPLACE WITH YOUR ACTUAL URL
      "description": "Förhandsboka din taxiresa i Borlänge via vårt onlineformulär.",
      "breadcrumb": { // Optional: Helps structure navigation
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Boka Online" }
        ]
      }
  };

  // // Optional: State for form handling (Example)
  // const [formData, setFormData] = useState({
  //   name: '', phone: '', email: '', /* ... other fields */ gdpr: false
  // });
  // const handleInputChange = (e) => { /* ... */ };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // --- Add form submission logic here (e.g., send to API route) ---
  //   console.log("Form submitted:", formData);
  //   alert("Tack för din bokningsförfrågan! Vi återkommer med bekräftelse.");
  //   // Reset form potentially
  // };

  return (
    <div>
      {/* Add Page Specific Meta Tags & Defaults */}
      <Meta title={pageTitle} description={pageDescription} keywords={pageKeywords} />

      {/* Add Page Specific Schema */}
       <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Boka Taxi Online i Borlänge</h1>
        <p className="text-center max-w-3xl mx-auto mb-8">
          Här kan du enkelt förhandsboka din taxiresa med Taxi Dalarna Borlänge. Fyll i formuläret nedan med dina resedetaljer så återkommer vi till dig med en bekräftelse så snart som möjligt (vanligtvis inom några timmar under kontorstid).
        </p>

        <p className="text-center max-w-3xl mx-auto mb-10 p-4 bg-yellow-100 border border-yellow-300 rounded">
          <strong>OBSERVERA:</strong> Detta formulär är för <strong>förhandsbokningar</strong> (minst 6-12 timmar i förväg rekommenderas, gärna tidigare för flyg/tåg).<br/>
          <strong>Behöver du taxi omgående? Ring oss direkt på <a href="tel:024317900" className="font-bold text-amber-700 hover:underline">0243-179 00</a>!</strong>
        </p>

        {/* --- Booking Form --- */}
        {/* IMPORTANT: This form needs a backend handler (API route, serverless function, etc.) */}
        {/* Update the 'action' attribute or handle submission with JavaScript (e.g., using handleSubmit) */}
        <form
          // action="/api/skicka-bokning" // Example action - needs implementation
          // method="post"
          // onSubmit={handleSubmit} // Use if handling with client-side JS
          className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Bokningsformulär</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Namn:</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Telefonnummer (för bekräftelse):</label>
            <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">E-postadress (för bekräftelse):</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="pickup-date" className="block text-gray-700 text-sm font-medium mb-1">Datum för resan:</label>
              <input type="date" id="pickup-date" name="pickup-date" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="pickup-time" className="block text-gray-700 text-sm font-medium mb-1">Önskad upphämtningstid:</label>
              <input type="time" id="pickup-time" name="pickup-time" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="pickup-address" className="block text-gray-700 text-sm font-medium mb-1">Upphämtningsadress:</label>
            <textarea id="pickup-address" name="pickup-address" rows="3" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="destination-address" className="block text-gray-700 text-sm font-medium mb-1">Destinationsadress:</label>
            <textarea id="destination-address" name="destination-address" rows="3" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="passengers" className="block text-gray-700 text-sm font-medium mb-1">Antal passagerare (1-4 standard):</label>
            {/* Adjust max based on your standard cars, add note about larger groups */}
            <input type="number" id="passengers" name="passengers" min="1" max="4" defaultValue="1" required className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500" />
            <small className="text-gray-500 block mt-1">För fler än 4 passagerare, vänligen ring.</small>
          </div>

          <div className="mb-6">
            <label htmlFor="luggage" className="block text-gray-700 text-sm font-medium mb-1">Bagage/Övriga önskemål:</label>
            <textarea id="luggage" name="luggage" rows="3" placeholder="t.ex. storbil, barnstol, extra bagage, Romme-pris, Falun-pris..." className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>

          <div className="mb-6">
            <input type="checkbox" id="gdpr" name="gdpr" required className="mr-2 focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300 rounded" />
            <label htmlFor="gdpr" className="text-gray-700 text-sm">Jag godkänner att Taxi Dalarna Borlänge behandlar mina personuppgifter för att hantera min bokning i enlighet med <Link href="/integritetspolicy-cookies"><a target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">integritetspoliycn</a></Link>.</label>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-lg px-5 py-3 text-center shadow"
          >
            Skicka Bokningsförfrågan
          </button>
        </form>

        {/* --- What Happens Next Section --- */}
        <div className="max-w-2xl mx-auto mt-10 text-center text-gray-600">
          <h2 className="text-xl font-semibold mb-3">Vad händer sen?</h2>
          <p className="text-sm mb-4">
            När vi tagit emot din bokningsförfrågan kontrollerar vi tillgängligheten och återkommer till dig via telefon eller e-post för att bekräfta din bokning och eventuellt stämma av detaljer. <strong>Din bokning är inte giltig förrän du har fått en bekräftelse från oss.</strong>
          </p>
          <p className="text-sm">
            Har du inte hört något inom rimlig tid, eller om din resa är nära förestående, vänligen ring oss på <a href="tel:024317900" className="font-medium text-amber-700 hover:underline">0243-179 00</a> för att säkerställa din bokning.
          </p>
        </div>

      </div>
    </div>
  );
}