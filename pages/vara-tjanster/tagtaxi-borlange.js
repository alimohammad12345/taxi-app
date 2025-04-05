// pages/vara-tjanster/tagtaxi-borlange.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function TagtaxiBorlange() {
  // --- Page Specific Metadata ---
  const pageTitle = "Tågtaxi Borlänge | Taxi till/från Borlänge Station | Boka Smidigt";
  const pageDescription = "Behöver du taxi till eller från tåget i Borlänge? Boka Taxi Dalarna Borlänge 0243-179 00 för punktlig och bekväm tågtaxi vid Borlänge station. Res stressfritt!";
  const pageKeywords = "Tågtaxi Borlänge, Taxi Borlänge station, Boka tågtaxi Borlänge, Taxi tågstation Borlänge, anslutning tåg taxi";

  // --- Schema Data for Tågtaxi Service Page ---
   const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Tågtaxi",
      "name": "Tågtaxi till/från Borlänge Järnvägsstation",
      "description": "Smidig och punktlig taxianslutning till och från tåget vid Borlänge Järnvägsstation.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Taxi Dalarna Borlänge",
        "telephone": "+4624317900",
        "url": "https://www.taxidalaborlange.se/" // <<<--- REPLACE URL
      },
       "areaServed": {
        "@type": "City",
        "name": "Borlänge"
      },
       // Optional: Specify the station served
       // "serviceLocation": { "@type": "TrainStation", "name": "Borlänge Järnvägsstation" },
       "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.taxidalaborlange.se/vara-tjanster" // <<<--- REPLACE URL
        },
        "potentialAction": {
           "@type": "ReserveAction",
           "target": "https://www.taxidalaborlange.se/boka-online" // <<<--- REPLACE URL
        },
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Våra Tjänster", "item": "https://www.taxidalaborlange.se/vara-tjanster" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 3, "name": "Tågtaxi Borlänge" }
        ]
      }
  };

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

      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 py-12 md:py-20">
         <article>
           <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Tågtaxi Borlänge – Smidig Anslutning till Tåget</h1>
           <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
            Reser du med tåg till eller från Borlänge? Gör anslutningen enkel och stressfri med Taxi Dalarna Borlänges pålitliga tågtaxi. Vi ser till att du hinner med ditt tåg eller kommer snabbt och bekvämt vidare från Borlänge Järnvägsstation till hemmet, hotellet eller ditt möte.
           </p>

           {/* Optional Image Placeholder */}
           <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md"> {/* Container */}
             <Image
               src="/image_04-4.jpg" // <<< YOUR IMAGE PATH
               alt="Tågtaxi från Taxi Dalarna Borlänge vid stationen" // <<< DESCRIPTIVE ALT TEXT
               layout="responsive"
               width={1200} // <<< ACTUAL ORIGINAL WIDTH of your image file
               height={800} // <<< ACTUAL ORIGINAL HEIGHT of your image file
             />
           </div>
           

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fördelar med Vår Tågtaxi i Borlänge:</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
               <li><strong>Garanterad Punktlighet:</strong> Vi vet hur viktigt det är att passa tågtider. Boka i förväg så planerar vi din resa för att du ska vara på stationen i god tid innan avgång.</li>
               <li><strong>Bekväm Hämtning/Lämning:</strong> Vi hämtar dig vid dörren och kör dig direkt till stationen, eller möter dig vid ankomst för smidig vidare transport. Slipp krångel med parkering och tunga väskor.</li>
               <li><strong>Lokalkännedom:</strong> Våra erfarna förare hittar alltid den bästa och snabbaste vägen till och från Borlänge Järnvägsstation.</li>
               <li><strong>Hjälp med Bagage:</strong> Självklart hjälper vi dig med ditt bagage in och ut ur bilen om du behöver.</li>
               <li><strong>Förbokning & Direktbeställning:</strong> Förboka gärna din tågtaxi för garanterad bil via <a href="tel:024317900" className="text-amber-600 hover:underline">0243-179 00</a> eller <Link href="/boka-online"><a className="text-amber-600 hover:underline">online</a></Link>, särskilt vid tidiga morgnar eller sena kvällar. Du kan även ringa när du behöver skjuts direkt (med reservation för tillgänglighet).</li>
             </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Till och Från Borlänge Järnvägsstation</h2>
              <p className="text-gray-700">
                Oavsett om du är på väg till ett viktigt möte i en annan stad, ska hälsa på familjen eller kommer hem från en semesterresa, är vår tågtaxi det perfekta komplementet till din tågresa. Vi kör dig till alla adresser inom Borlänge kommun och närliggande orter som Falun, Säter, Ludvika med mera.
              </p>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Boka Din Tågtaxi Enkelt:</h2>
             <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Ring oss:</strong> Det snabbaste sättet är att ringa <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a>.</li>
                <li><strong>Boka Online:</strong> Använd vårt smidiga <Link href="/boka-online"><a className="text-amber-600 hover:underline font-medium">bokningsformulär</a></Link> om du bokar i förväg.</li>
                <li><strong>Informera Oss:</strong> Ange datum, önskad upphämtningstid (eller tågets avgångs-/ankomsttid), tågnummer (om möjligt), antal passagerare och upphämtnings-/lämningsadress.</li>
                <li><strong>Res Säkert & Bekvämt:</strong> Vi bekräftar din bokning och ser till att en bil väntar på dig på avtalad tid och plats.</li>
             </ol>
           </section>

           <section className="max-w-3xl mx-auto mb-12">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ankomst till Borlänge Station?</h2>
              <p className="text-gray-700">
               Har du bokat din tågtaxi i förväg? Då möter vår chaufför upp dig vid stationen när ditt tåg anlänt. Håll utkik efter en bil från Taxi Dalarna Borlänge eller enligt den specifika instruktion du fått vid bokningen.
              </p>
           </section>

           {/* --- Final CTA --- */}
            <div className="text-center">
              <Link href="/boka-online">
                <a className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 mr-4 mb-2 text-center shadow transition duration-300">
                  Boka Tågtaxi Online
                </a>
              </Link>
              <a href="tel:024317900" className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-8 py-3 mb-2 text-center shadow transition duration-300">
                Ring Oss: 0243-179 00
              </a>
              <p className="mt-6"><Link href="/priser"><a className="text-sm text-gray-600 hover:underline hover:text-amber-600">Se priser för resor inom Borlänge</a></Link></p>
           </div>

         </article>
      </div>
    </div>
  );
}