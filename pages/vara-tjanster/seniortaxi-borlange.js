// pages/vara-tjanster/seniortaxi-borlange.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function SeniortaxiBorlange() {
  // --- Page Specific Metadata ---
  const pageTitle = "Seniortaxi Borlänge | Trygg Transport & 20% Rabatt | Taxi Dalarna Borlänge";
  const pageDescription = "Trygg och bekväm seniortaxi i Borlänge med 20% rabatt för 65+. Taxi Dalarna Borlänge erbjuder pålitlig transport. Ring 0243-179 00 för att boka!";
  const pageKeywords = "Seniortaxi Borlänge, Taxi rabatt pensionär Borlänge, Trygg taxi äldre Borlänge, Taxi hjälpmedel Borlänge, Pensionärsrabatt taxi";

  // --- Schema Data for Seniortaxi Service Page ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Seniortaxi",
      "name": "Seniortaxi i Borlänge med Rabatt (65+)",
      "description": "Anpassad och trygg taxitjänst för seniorer (65+) i Borlänge med 20% rabatt på taxameterpris.",
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
       // Define the offer (discount)
       "offers": {
         "@type": "Offer",
         "name": "Seniorrabatt 20%",
         "description": "20% rabatt på ordinarie taxameterpris för kunder 65 år och äldre.",
         "eligibleCustomerType": "https://schema.org/Patient", // Or just describe in text
         "priceSpecification": { // Indicate it's a discount
            "@type": "PriceSpecification",
            "valueAddedTaxIncluded": true, // Assuming TAX is included
            "price": "Varierar (Taxameter)", // Base price varies
            "priceCurrency": "SEK",
            "value": 0.8 // Represents 20% discount (1.0 - 0.2) - Check if this is standard usage
            // Or simply use the description field of the Offer
         }
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
          { "@type": "ListItem", "position": 3, "name": "Seniortaxi Borlänge" }
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
           <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Seniortaxi i Borlänge – Trygghet, Komfort och Rabatt</h1>
           <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
             För dig som är 65 år eller äldre erbjuder Taxi Dalarna Borlänge en anpassad och trygg taxitjänst till ett förmånligare pris. Vi vill göra det enklare och bekvämare för dig att resa inom Borlänge, oavsett om det är till affären, läkarbesöket, frisören eller för att hälsa på vänner och familj.
           </p>

            {/* Optional Image Placeholder */}
           <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md">
              <Image
                  src="/image_03-4.jpg" // <<< YOUR IMAGE PATH
                  alt="Senior reser tryggt och bekvämt med Taxi Dalarna Borlänge" // <<< DESCRIPTIVE ALT TEXT
                  layout="responsive"
                  width={1200} // <<< ACTUAL ORIGINAL WIDTH
                  height={800} // <<< ACTUAL ORIGINAL HEIGHT
              />
            </div>

            {/* Discount Info Section */}
            <section className="max-w-3xl mx-auto mb-10 text-center bg-green-50 p-6 rounded border border-green-200">
              <h2 className="text-2xl font-semibold mb-3 text-green-800">20% Rabatt för Dig som är 65+</h2>
              <p className="text-green-700 mb-2">
                Som ett tack för att du väljer oss, erbjuder vi <strong>20% rabatt på ordinarie taxameterpris</strong> på alla dina resor med oss inom Borlänge kommun. Rabatten gäller alla dagar i veckan, dygnet runt.
              </p>
              <p className="text-xs text-gray-500">
                <em>(Observera: Rabatten gäller på taxameterpriset och kan ej kombineras med fasta priser eller andra erbjudanden.)</em>
              </p>
            </section>


           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fördelar med Vår Seniortaxi:</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
               <li><strong>Trygga & Erfarna Förare:</strong> Våra förare är vana vid att ge extra service och hjälp vid behov, och kör alltid lugnt och säkert.</li>
               <li><strong>Bekväma Bilar:</strong> Lätt att kliva i och ur våra rena och välskötta bilar.</li>
               <li><strong>Hjälp med Kassar & Rullator:</strong> Vi hjälper gärna till att lasta i och ur dina kassar eller din rullator/gånghjälpmedel. Meddela gärna vid bokning om du har hjälpmedel med dig.</li>
               <li><strong>Dörr till Dörr Service:</strong> Vi hämtar dig vid din dörr och kör dig ända fram till destinationens entré.</li>
               <li><strong>Punktlighet:</strong> Vi strävar alltid efter att vara i tid så att du slipper vänta i onödan, särskilt viktigt vid t.ex. läkarbesök.</li>
             </ul>
           </section>

            <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hur Får Jag Rabatten?</h2>
              <p className="text-gray-700">
               Det är enkelt! Informera bara vår chaufför om att du är berättigad till seniorrabatt (65+) <strong>innan resan påbörjas</strong>. Ha gärna legitimation redo om chauffören skulle behöva verifiera din ålder.
              </p>
           </section>


           <section className="max-w-3xl mx-auto mb-12">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Boka Din Seniortaxi Idag</h2>
             <p className="text-gray-700 mb-4">
               Behöver du skjuts? Ring oss på <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a> för att boka din resa. Kom ihåg att nämna om du har några särskilda behov eller hjälpmedel.
             </p>
             <p className="text-gray-700">
               Du kan även <Link href="/boka-online"><a className="text-amber-600 hover:underline font-medium">boka online</a></Link> och skriva "Seniortaxi" i kommentarsfältet.
             </p>
             <p className="text-gray-700 mt-6">
               Res tryggt, bekvämt och prisvärt med Taxi Dalarna Borlänge!
             </p>
           </section>

            {/* --- Final CTA --- */}
            <div className="text-center">
              <a href="tel:024317900" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 mr-4 mb-2 text-center shadow transition duration-300">
                Ring och Boka Nu: 0243-179 00
              </a>
              <Link href="/boka-online">
                <a className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-8 py-3 mb-2 text-center shadow transition duration-300">
                  Boka Online
                </a>
              </Link>
           </div>

         </article>
      </div>
    </div>
  );
}