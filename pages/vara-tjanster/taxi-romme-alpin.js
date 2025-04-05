// pages/vara-tjanster/taxi-romme-alpin.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function TaxiRommeAlpin() {
  // --- Page Specific Metadata ---
  const pageTitle = "Taxi till Romme Alpin från Borlänge | Fast Pris 499 kr* | Boka Nu";
  const pageDescription = "Boka enkel och bekväm taxi från Borlänge till Romme Alpin skidanläggning med Taxi Dalarna Borlänge. Fast pris 499 kr*. Perfekt för en dag i backen! Ring 0243-179 00.";
  const pageKeywords = "Taxi Romme Alpin, Taxi Borlänge Romme Alpin, Pris taxi Romme Alpin, Skidtaxi Borlänge, Transport Romme Alpin, Fast pris taxi";

  // --- Schema Data for Romme Alpin Taxi Service Page ---
  const fixedPriceSEK = 499; // Define price for schema
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Taxi", // Generic taxi service
      "name": `Taxi till Romme Alpin från Borlänge (Fast Pris ${fixedPriceSEK} kr*)`,
      "description": `Smidig och prisvärd taxitransport direkt från Borlänge till Romme Alpin skidanläggning till ett fast pris på ${fixedPriceSEK} kr*.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Taxi Dalarna Borlänge",
        "telephone": "+4624317900",
         "url": "https://www.taxidalaborlange.se/" // <<<--- REPLACE URL
      },
       "areaServed": {
        "@type": "City",
        "name": "Borlänge" // Service originates here
      },
      // Specify the destination
      // "serviceLocation": { "@type": "TouristAttraction", "name": "Romme Alpin" }, // Or SkiResort if available/recognized
      // Define the fixed price offer
       "offers": {
         "@type": "Offer",
         "name": `Fast Pris till Romme Alpin`,
         "description": `Fast pris ${fixedPriceSEK} kr enkel väg Borlänge-Romme Alpin för upp till 4 passagerare.`,
         "price": fixedPriceSEK.toString(),
         "priceCurrency": "SEK",
          "eligibleQuantity": { // Specifies it's per trip for up to 4 people
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "resa (upp till 4 pers)"
         },
         "category": "FixedPrice" // Indicate it's a fixed price
       },
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
          { "@type": "ListItem", "position": 3, "name": "Taxi till Romme Alpin" }
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
           <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Taxi till Romme Alpin från Borlänge – Fast Pris 499 kr*</h1>
           <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
             Planerar du en härlig dag i backarna på Romme Alpin? Gör resan dit enkel, bekväm och prisvärd! Taxi Dalarna Borlänge erbjuder smidig transport direkt från din adress i Borlänge till Romme Alpin till ett <strong>fast pris på endast 499 kronor*</strong> per bil (upp till 4 passagerare).
           </p>

           {/* Optional Image Placeholder */}
           <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md">
              <Image
                  src="/image_04-5.jpg" // <<< YOUR IMAGE PATH
                  alt="Taxi Dalarna Borlänge på väg till Romme Alpin vintertid" // <<< DESCRIPTIVE ALT TEXT
                  layout="responsive"
                  width={1200} // <<< ACTUAL ORIGINAL WIDTH
                  height={800} // <<< ACTUAL ORIGINAL HEIGHT
              />
            </div>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fördelar med Taxi till Romme Alpin:</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
               <li><strong>Bekvämt & Stressfritt:</strong> Slipp leta parkering och skrapa rutor. Vi hämtar dig vid dörren och kör dig direkt till anläggningen.</li>
               <li><strong>Snabbaste Vägen:</strong> Resan tar endast ca 15-20 minuter från centrala Borlänge, så du får mer tid i backen.</li>
               <li><strong>Fast Pris:</strong> Du vet exakt vad resan kostar i förväg – 499 kr* för upp till 4 personer. Tryggt och förutsägbart!</li>
               <li><strong>Plats för Utrustning:</strong> Vi har plats för skidor och pjäxor. Meddela oss vid bokning hur mycket utrustning ni har med er så vi kan skicka en passande bil (ev. tillägg för kombi/storbil kan tillkomma vid behov).</li>
               <li><strong>Flexibel Upphämtning:</strong> Vi hämtar dig när det passar dig. Förboka gärna för att säkra din transport, särskilt under högsäsong och helger.</li>
             </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Perfekt för:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Familjer som vill slippa bilkrångel.</li>
                <li>Kompisgäng som reser tillsammans.</li>
                <li>Dig som vill maximera tiden i backen och slippa köra trött hem.</li>
                <li>Besökare till Borlänge utan egen bil.</li>
              </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Boka Din Resa till Romme Alpin</h2>
              <p className="text-gray-700 mb-4">Säkra din transport till skidåkningen redan idag!</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Ring oss:</strong> Kontakta oss på <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a>.</li>
                <li><strong>Informera:</strong> Ange att du vill boka taxi till Romme Alpin (fast pris), önskad upphämtningstid, adress i Borlänge och antal passagerare. Glöm inte att nämna om ni har skidor/utrustning.</li>
                <li><strong>Bekräftelse:</strong> Vi bekräftar din bokning och det fasta priset.</li>
                <li><strong>Njut av Resan:</strong> Luta dig tillbaka och låt oss köra dig tryggt till Romme Alpin!</li>
              </ol>
              <p className="text-gray-700 mt-4">
                Du kan även <Link href="/boka-online"><a className="text-amber-600 hover:underline font-medium">boka online</a></Link> – skriv "Taxi till Romme Alpin (Fast Pris)" och eventuell utrustning i kommentarsfältet.
              </p>
           </section>

           <section className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hemresa från Romme Alpin?</h2>
              <p className="text-gray-700">
                Självklart kör vi dig hem igen efter en lång dag i backen. Förboka gärna din hemresa samtidigt som du bokar ditresan för smidigast service, eller ring oss från backen när du börjar bli klar (med reservation för tillgänglighet).
              </p>
           </section>

           {/* --- Final CTA --- */}
           <div className="text-center">
              <a href="tel:024317900" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 mr-4 mb-2 text-center shadow transition duration-300">
                Ring och Boka till Romme: 0243-179 00
              </a>
              <Link href="/boka-online">
                <a className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-8 py-3 mb-2 text-center shadow transition duration-300">
                  Boka Online
                </a>
              </Link>
           </div>

           {/* --- Price Disclaimer --- */}
           <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-xs text-gray-500">
                <small>*Fast pris {fixedPriceSEK} kr gäller för resa enkel väg mellan en adress i Borlänge tätort och Romme Alpin för upp till 4 passagerare i vanlig personbil under ordinarie öppettider. Ev. tillägg för storbil/kombi vid behov av mer utrymme för utrustning kan tillkomma. Priset gäller vid publicering och kan ändras. Kontakta oss för dagsaktuellt pris och fullständiga villkor.</small>
            </p>
           </div>

         </article>
      </div>
    </div>
  );
}