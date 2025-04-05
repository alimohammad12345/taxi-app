// pages/contact.js (Modified for Taxi Dalarna Borlänge)

import Head from 'next/head';
import Link from 'next/link';
import Meta from '../components/meta'; // Adjust path if needed
 // Assuming map component is correctly configured

// --- Location for the Map ---
// IMPORTANT: Verify these coordinates are accurate for Järvstigen 1, Borlänge
const location = {
  address: "Järvstigen 1, 784 50 Borlänge",
  lat: 60.4847, // Approximate Latitude for Borlänge center - UPDATE if needed
  lng: 15.4333, // Approximate Longitude for Borlänge center - UPDATE if needed
};

export default function Contact() {
  // --- Page Specific Metadata ---
  const pageTitle = "Kontakta Taxi Dalarna Borlänge | Ring 0243-179 00 | Borlänge Taxi";
  const pageDescription = "Kontakta Taxi Dalarna Borlänge för bokning eller frågor. Ring oss på 0243-179 00, maila taxi17900@gmail.com eller besök oss på Järvstigen 1, Borlänge.";
  const pageKeywords = "Kontakta Taxi Borlänge, Taxi Dalarna Borlänge telefon, Taxi Borlänge adress, Taxi Borlänge öppettider, Boka taxi";

  // --- Schema Data for Contact Page ---
  // Combining LocalBusiness and ContactPage information
  const schemaData = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ContactPage"], // Multiple types
      "name": "Taxi Dalarna Borlänge - Kontakt", // Page-specific name
      "url": "https://www.taxidalaborlange.se/kontakt", // <<<--- REPLACE WITH YOUR ACTUAL URL
      "description": "Kontaktuppgifter och formulär för att nå Taxi Dalarna Borlänge.",
      // LocalBusiness details (repeat from homepage schema for consistency on this page)
      "image": "https://www.taxidalaborlange.se/bilder/taxi-dalarna-logo.png", // <<<--- REPLACE LOGO URL
      "telephone": "+4624317900",
      "email": "taxi17900@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Järvstigen 1",
        "addressLocality": "Borlänge",
        "postalCode": "784 50",
        "addressRegion": "Dalarna",
        "addressCountry": "SE"
      },
      "openingHoursSpecification": { // Example for 24/7 phone
        "@type": "OpeningHoursSpecification",
        "opens": "00:00",
        "closes": "23:59",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
      },
       // Breadcrumb for Contact Page
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Kontakt" }
        ]
      }
  };

  // Optional: Form handling state (like in boka-online)
  // const [formData, setFormData] = useState({...});
  // const handleSubmit = async (e) => { ... };

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
        <div className="w-full h-[40vh] md:h-[50vh] bg-gray-200"> {/* Container for the iframe */}
        {/* PASTE THE IFRAME CODE FROM GOOGLE MAPS HERE */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9970814222424!2d15.385171429777523!3d60.494753011983484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46677efae518c063%3A0xcd410b30e5d02485!2sJ%C3%A4rvstigen%201%2C%20784%2050%20Borl%C3%A4nge%2C%20Sweden!5e0!3m2!1sen!2sus!4v1743797627190!5m2!1sen!2sus" // <<<--- THIS IS YOUR COPIED SRC
          width="100%" // Make width responsive
          height="100%" // Make height fill container
          style={{ border: 0 }}
          allowFullScreen={true} // Correct attribute is camelCase in React
          loading="lazy" // Defer loading until needed
          referrerPolicy="no-referrer-when-downgrade"
          title="Karta till Taxi Dalarna Borlänge" // Add a title for accessibility
        ></iframe>
         {/* NOTE: Also add the src URL to your Schema's "hasMap" property */}
      </div>
      {/* --- Map Section --- */}
      {/* Ensure MapSection component handles API key and consent */}
       {/* Adjusted zoom level */}

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8">Kontakta Taxi Dalarna Borlänge</h1>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
          Vi finns här för att hjälpa dig med dina transportbehov i Borlänge och Dalarna. Oavsett om du vill boka en taxi, har frågor om våra tjänster, vill diskutera ett <Link href="/vara-tjanster/foretagstaxi-borlange"><a className="text-amber-600 hover:underline">företagsavtal</a></Link> eller ge oss feedback, är du varmt välkommen att höra av dig.
        </p>

        {/* --- Contact Methods Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {/* Phone */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Ring Oss Direkt</h2>
            <p className="text-sm text-gray-500 mb-3">(Snabbast för bokning)</p>
            <a href="tel:024317900" className="text-2xl font-bold text-amber-600 hover:text-amber-800 transition duration-300">
              0243-179 00
            </a>
          </div>
          {/* Email */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">E-post</h2>
             <p className="text-sm text-gray-500 mb-3">(För frågor & avtal)</p>
            <a href="mailto:taxi17900@gmail.com" className="text-lg text-amber-600 hover:text-amber-800 break-words transition duration-300">
              taxi17900@gmail.com
            </a>
          </div>
          {/* Online Booking Link */}
          <div className="bg-white p-6 rounded shadow">
             <h2 className="text-xl font-semibold mb-2 text-gray-700">Boka Online</h2>
             <p className="text-sm text-gray-500 mb-3">(För förhandsbokning)</p>
            <Link href="/boka-online">
              <a className="inline-block text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Till Bokningsformulär
              </a>
            </Link>
          </div>
        </div>

        {/* --- Opening Hours & Address Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Opening Hours */}
          <div className="bg-gray-50 p-6 rounded">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Våra Öppettider (Telefonväxel)</h2>
            {/* IMPORTANT: Replace with your actual hours */}
             <ul className="list-disc list-inside text-gray-600 space-y-1">
                 <li><strong>Måndag - Söndag:</strong> Dygnet Runt</li> {/* Example */}
                 {/* Example if not 24/7:
                 <li><strong>Måndag - Torsdag:</strong> 06:00 - 23:00</li>
                 <li><strong>Fredag:</strong> 06:00 - 03:00</li>
                 <li><strong>Lördag:</strong> 08:00 - 03:00</li>
                 <li><strong>Söndag & Helgdag:</strong> 08:00 - 23:00</li>
                 */}
             </ul>
            <p className="text-xs text-gray-500 mt-3">
              <em>Våra bilar rullar dygnet runt baserat på förbokningar och tillgänglighet.</em>
            </p>
          </div>
          {/* Address */}
          <div className="bg-gray-50 p-6 rounded">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Adress</h2>
            <address className="not-italic text-gray-600">
              Taxi Dalarna Borlänge<br/>
              Järvstigen 1<br/>
              784 50 Borlänge
            </address>
             {/* Optional: Link to Google Maps */}
             <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-600 hover:underline mt-2 inline-block">
                 Visa på karta
             </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Eller Skicka ett Meddelande</h2>
          <form action="/api/skicka-kontakt" method="post">
             <div className="mb-4">
               <label htmlFor="contact-name" className="block text-gray-700 text-sm font-medium mb-1">Namn:</label>
               <input type="text" id="contact-name" name="name" required className="w-full ..."/>
             </div>
             <div className="mb-4">
               <label htmlFor="contact-email" className="block text-gray-700 text-sm font-medium mb-1">E-post:</label>
               <input type="email" id="contact-email" name="email" required className="w-full ..."/>
             </div>
             <div className="mb-6">
               <label htmlFor="contact-message" className="block text-gray-700 text-sm font-medium mb-1">Meddelande:</label>
               <textarea id="contact-message" name="message" rows="4" required className="w-full ..."></textarea>
             </div>
             <div className="mb-6">
              <input type="checkbox" id="contact-gdpr" name="gdpr" required className="mr-2 ..."/>
              <label htmlFor="contact-gdpr" className="text-gray-700 text-sm"> Jag godkänner <Link href="/integritetspolicy-cookies"><a target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">integritetspolicyn</a></Link>.</label>
             </div>
            
             <button type="submit" className="w-full ...">Skicka Meddelande</button>
           </form>
        </div> 

      </div>
    </div>
  );
}