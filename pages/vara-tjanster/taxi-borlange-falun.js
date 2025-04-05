// pages/vara-tjanster/taxi-borlange-falun.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function TaxiBorlangeFalun() {
  // --- Page Specific Metadata ---
  const pageTitle = "Taxi Borlänge - Falun | Fast Pris 599 kr* | Boka Din Resa";
  const pageDescription = "Res bekvämt mellan Borlänge och Falun centrum med Taxi Dalarna Borlänge för ett fast pris på 599 kr*. Boka din resa idag! Ring 0243-179 00.";
  const pageKeywords = "Taxi Borlänge Falun, Pris taxi Falun Borlänge, Fast pris taxi Borlänge Falun, Transport Borlänge Falun, Taxi Dalarna";

  // --- Schema Data for Borlänge-Falun Taxi Service Page ---
  const fixedPriceSEK = 599; // Define price for schema
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Taxi",
      "name": `Taxi Borlänge - Falun (Fast Pris ${fixedPriceSEK} kr*)`,
      "description": `Bekväm och prisvärd taxitransport mellan Borlänge centrum och Falun centrum till ett fast pris på ${fixedPriceSEK} kr*.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Taxi Dalarna Borlänge",
        "telephone": "+4624317900",
         "url": "https://www.taxidalaborlange.se/" // <<<--- REPLACE URL
      },
       "areaServed": { // Service connects these two areas
         "@type": ["City", "City"],
         "name": ["Borlänge", "Falun"]
       },
      // Define the fixed price offer
       "offers": {
         "@type": "Offer",
         "name": "Fast Pris Borlänge - Falun",
         "description": `Fast pris ${fixedPriceSEK} kr enkel väg mellan Borlänge centrum och Falun centrum för upp till 4 passagerare.`,
         "price": fixedPriceSEK.toString(),
         "priceCurrency": "SEK",
         "eligibleQuantity": {
           "@type": "QuantitativeValue",
           "value": 1,
           "unitText": "resa (upp till 4 pers)"
         },
         "category": "FixedPrice"
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
          { "@type": "ListItem", "position": 3, "name": "Taxi Borlänge-Falun" }
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
           <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Taxi Borlänge – Falun: Res Bekvämt till Fast Pris 599 kr*</h1>
           <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
             Behöver du resa mellan Borlänge och Falun? Taxi Dalarna Borlänge gör det enkelt, bekvämt och prisvärt! Vi erbjuder ett <strong>fast pris på endast 599 kronor*</strong> för resor mellan Borlänge centrum och Falun centrum.
           </p>

           {/* Optional Image Placeholder */}
            <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md">
              <Image
                  src="/img01.jpg" // <<< YOUR IMAGE PATH
                  alt="Taxi Dalarna Borlänge kör mellan städerna Borlänge och Falun" // <<< DESCRIPTIVE ALT TEXT
                  layout="responsive"
                  width={1200} // <<< ACTUAL ORIGINAL WIDTH
                  height={800} // <<< ACTUAL ORIGINAL HEIGHT
              />
            </div>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fördelar med Fast Pris Borlänge-Falun:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Förutsägbart Pris:</strong> Du vet exakt vad resan kostar – inga överraskningar med taxametern. 599 kr* gäller per bil, upp till 4 passagerare.</li>
                <li><strong>Bekväm Dörr-till-Dörr Service:</strong> Vi hämtar dig vid din adress i Borlänge centrum och kör dig direkt till din destination i Falun centrum (eller vice versa).</li>
                <li><strong>Spara Tid & Energi:</strong> Taxi är ofta det snabbaste och mest avkopplande sättet att resa direkt mellan städerna, jämfört med byten i kollektivtrafiken.</li>
                <li><strong>Komfort:</strong> Koppla av eller arbeta under resan i våra rena och moderna bilar.</li>
                <li><strong>Tillgängligt När Du Behöver:</strong> Vi kör sträckan vid behov. Förboka gärna, särskilt under rusningstid eller helger, för att garantera tillgänglighet.</li>
             </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">När Passar Vårt Fasta Pris?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>När du ska på möte, konferens eller utbildning i Falun.</li>
                <li>För shopping, restaurangbesök eller nöjen i grannstaden.</li>
                <li>När du ska besöka vänner eller familj.</li>
                <li>Om du behöver anslutning till tåg, buss eller annan transport i Falun.</li>
                <li>Vid resor till/från Falu lasarett (inom centrumområdet).</li>
              </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Boka Din Resa Borlänge-Falun</h2>
             <p className="text-gray-700 mb-4">Att boka din resa till fast pris är enkelt:</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Ring oss:</strong> Kontakta oss på <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a>.</li>
                <li><strong>Informera:</strong> Ange att du vill boka resan Borlänge-Falun (eller Falun-Borlänge) till fast pris. Meddela önskad tid, exakt upphämtningsadress och destinationsadress (inom respektive centrumområde).</li>
                <li><strong>Bekräftelse:</strong> Vi bekräftar din bokning och det fasta priset.</li>
                <li><strong>Njut av Resan:</strong> Vi hämtar dig och kör dig tryggt och bekvämt mellan städerna!</li>
              </ol>
             <p className="text-gray-700 mt-4">
               Du kan även <Link href="/boka-online"><a className="text-amber-600 hover:underline font-medium">boka online</a></Link> – skriv "Fast Pris Borlänge-Falun" i kommentarsfältet.
             </p>
           </section>

            {/* --- Final CTA --- */}
           <div className="text-center">
              <a href="tel:024317900" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 mr-4 mb-2 text-center shadow transition duration-300">
                Ring och Boka Borlänge-Falun: 0243-179 00
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
                <small>*Fast pris {fixedPriceSEK} kr gäller för resa enkel väg mellan adresser inom Borlänge centrum och Falun centrum för upp till 4 passagerare i vanlig personbil. Exakt definition av centrumområde samt eventuella tillägg för resor utanför dessa områden eller vid behov av större bil ges vid bokning. Priset gäller vid publicering och kan ändras. Kontakta oss för dagsaktuellt pris och fullständiga villkor.</small>
            </p>
           </div>

         </article>
      </div>
    </div>
  );
}