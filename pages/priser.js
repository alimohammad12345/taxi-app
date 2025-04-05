// pages/priser.js (New File)

import Head from 'next/head';
import Link from 'next/link';
// No Image needed typically for a pricing page
import Meta from '../components/meta'; // Adjust path if needed

export default function Priser() {
  // --- Page Specific Metadata ---
  const pageTitle = "Taxipriser Borlänge | Fasta Priser & Taxameter | Taxi Dalarna Borlänge";
  const pageDescription = "Hitta taxipriser i Borlänge hos Taxi Dalarna Borlänge. Se våra fasta priser till Falun, Romme Alpin, flygplatser samt information om taxameter. Ring 0243-179 00!";
  const pageKeywords = "Taxi priser Borlänge, Fast pris taxi Borlänge, Taxameter Borlänge, Kostnad taxi Borlänge, Prislista taxi Borlänge, Billig taxi Borlänge";

  // --- Schema Data for Pricing Page ---
  // Using WebPage, potentially listing Offers separately
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage", // Or OfferCatalog if focusing solely on prices
      "name": "Prislista för Taxi Dalarna Borlänge",
      "url": "https://www.taxidalaborlange.se/priser", // <<<--- REPLACE URL
      "description": "Information om taxameterpriser och fasta priser för taxiresor med Taxi Dalarna Borlänge.",
      // You could embed Offer schema for fixed prices here, similar to individual pages,
      // but keeping it simple with WebPage might be easier to maintain.
      "mainEntity": { // Link page content to the main business
         "@type": "LocalBusiness",
         "name": "Taxi Dalarna Borlänge",
         "telephone": "+4624317900",
         "address": { "@type": "PostalAddress", "streetAddress": "Järvstigen 1", "addressLocality": "Borlänge", "postalCode": "784 50", "addressCountry": "SE" }
       },
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Priser" }
        ]
      }
  };

  // --- Define Prices (Makes updates easier) ---
  const priceFalun = 599;
  const priceRomme = 499;
  const priceDalaAirport = 350; // Replace with actual price
  const priceArlanda = 2900; // Replace with actual price

  // Taxameter examples
  const taxa = {
    start: "55",           // Example start fee
    km1: "14.50",        // Example km price, Tariff 1
    tim1: "550",         // Example time price/hour, Tariff 1
    jamfor1: "295",      // Example comparison price (10km, 15min)
    // Example Tariff 2 (Evening/Weekend) - Uncomment if used
     km2: "16.00",
     tim2: "600",
     jamfor2: "330",
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
            <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Taxipriser i Borlänge</h1>
            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
              Hos Taxi Dalarna Borlänge strävar vi efter att erbjuda konkurrenskraftiga och transparenta priser. Här hittar du information om våra vanliga taxor och populära fasta priser. För exakt pris på din specifika resa, ring oss gärna!
            </p>

           {/* --- Taxameter Section --- */}
           <section className="max-w-3xl mx-auto mb-12 bg-gray-50 p-6 rounded border">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Taxameterpriser (Rörligt Pris)</h2>
             <p className="text-gray-700 mb-4">
               För de flesta resor inom Borlänge och kortare sträckor tillämpas taxameterpris. Priset baseras då på en kombination av startavgift, körd sträcka (km) och tid (tim). Taxan kan variera beroende på tid på dygnet och veckodag (vardag/helg).
             </p>
             <p className="text-gray-700 mb-4"><strong>Exempelpriser (Kontakta oss för aktuella taxor):</strong></p>
             {/* IMPORTANT: Replace placeholder values below with your actual rates */}
             <ul className="list-none space-y-1 text-gray-700 mb-4">
               <li><strong>Startavgift:</strong> {taxa.start} kr</li>
               <li><strong>Grundtaxa (vardag dagtid):</strong> {taxa.km1} kr/km + {taxa.tim1} kr/tim</li>
               {/* Add lines for evening/weekend rates if applicable */}
               {/* <li><strong>Helgtaxa (fre kväll - sön kväll):</strong> [X.XX] kr/km + [XXX] kr/tim</li> */}
               <li><strong>Jämförpris (10 km, 15 min):</strong> ca {taxa.jamfor1} kr</li>
             </ul>
              <p className="text-gray-700 mb-4">
                Exakt pris för din resa med taxameter ser du i bilen vid resans slut. Du kan alltid be om ett ungefärligt pris innan resan påbörjas genom att ringa oss på <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a>.
             </p>
             <p className="text-gray-700">
               <strong>Seniortaxi (65+):</strong> Kom ihåg att du får 20% rabatt på ovanstående taxameterpriser! <Link href="/vara-tjanster/seniortaxi-borlange"><a className="text-amber-600 hover:underline">Läs mer här</a></Link>.
             </p>
           </section>

           {/* --- Fixed Price Section --- */}
           <section className="max-w-3xl mx-auto mb-12">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fasta Priser (Förutsägbart & Tryggt)</h2>
             <p className="text-gray-700 mb-6">
               För att göra det enklare och mer förutsägbart erbjuder vi fasta priser på flera populära sträckor och tjänster. Då vet du exakt vad resan kostar i förväg!
             </p>
             <div className="overflow-x-auto"> {/* Makes table scrollable on small screens */}
               <table className="min-w-full bg-white border rounded">
                 <thead className="bg-gray-100">
                   <tr>
                     <th className="text-left py-2 px-4 border-b">Sträcka / Tjänst</th>
                     <th className="text-right py-2 px-4 border-b">Fast Pris*</th>
                     <th className="text-center py-2 px-4 border-b">Mer Info</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="hover:bg-gray-50">
                     <td className="py-2 px-4 border-b">Borlänge Centrum – Falun Centrum</td>
                     <td className="text-right py-2 px-4 border-b">{priceFalun} kr</td>
                     <td className="text-center py-2 px-4 border-b"><Link href="/vara-tjanster/taxi-borlange-falun"><a className="text-amber-600 hover:underline text-xs">Läs mer</a></Link></td>
                   </tr>
                   <tr className="hover:bg-gray-50">
                     <td className="py-2 px-4 border-b">Borlänge – Romme Alpin</td>
                     <td className="text-right py-2 px-4 border-b">{priceRomme} kr</td>
                     <td className="text-center py-2 px-4 border-b"><Link href="/vara-tjanster/taxi-romme-alpin"><a className="text-amber-600 hover:underline text-xs">Läs mer</a></Link></td>
                   </tr>
                   <tr className="hover:bg-gray-50">
                     <td className="py-2 px-4 border-b">Borlänge – Dala Airport (BLE)</td>
                     <td className="text-right py-2 px-4 border-b">{priceDalaAirport} kr</td>
                     <td className="text-center py-2 px-4 border-b"><Link href="/vara-tjanster/flygtaxi-borlange"><a className="text-amber-600 hover:underline text-xs">Läs mer</a></Link></td>
                   </tr>
                    <tr className="hover:bg-gray-50">
                     <td className="py-2 px-4 border-b">Borlänge – Arlanda Airport (ARN)</td>
                     <td className="text-right py-2 px-4 border-b">{priceArlanda} kr</td>
                     <td className="text-center py-2 px-4 border-b"><Link href="/vara-tjanster/flygtaxi-borlange"><a className="text-amber-600 hover:underline text-xs">Läs mer</a></Link></td>
                   </tr>
                    {/* Add more fixed price rows as needed */}
                 </tbody>
               </table>
             </div>
             <p className="text-xs text-gray-500 mt-4">
               <em>* Villkor för fasta priser: Priserna gäller normalt för upp till 4 passagerare i vanlig personbil, enkel väg, och från/till specifika områden. Kontakta oss alltid för att bekräfta priset och villkoren för just din resa, särskilt om ni är fler än 4 personer eller har mycket bagage. Priserna gäller vid publicering och kan ändras.</em>
             </p>
           </section>

           {/* --- Payment Methods Section --- */}
            <section className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Betalningssätt</h2>
              <p className="text-gray-700 mb-3">Du kan betala din resa direkt i bilen med:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Vanliga kredit- och betalkort (Visa, Mastercard m.fl.)</li>
                <li>Swish</li>
                <li>Kontanter (meddela gärna i förväg om du endast har större sedlar för växelns skull)</li>
              </ul>
             <p className="text-gray-700 mt-4">Företagskunder kan ansöka om <Link href="/vara-tjanster/foretagstaxi-borlange"><a className="text-amber-600 hover:underline">fakturabetalning</a></Link>.</p>
            </section>

            {/* --- Final CTA --- */}
            <div className="text-center">
              <h2 className="text-2xl font-light mb-4">Frågor om Priser eller Boka Resa?</h2>
              <p className="text-gray-600 mb-6">
                Har du frågor om priser för en specifik sträcka som inte är listad, eller behöver du en offert för en längre resa? Tveka inte att kontakta oss!
              </p>
              <a href="tel:024317900" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 mr-4 mb-2 text-center shadow transition duration-300">
                Ring Oss: 0243-179 00
              </a>
              <Link href="/kontakt">
                <a className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-8 py-3 mb-2 text-center shadow transition duration-300">
                  Kontakta Oss
                </a>
              </Link>
           </div>

           {/* --- General Disclaimer --- */}
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-xs text-gray-500">
                <small>Alla priser är inklusive moms. Priserna och taxorna ovan är exempel och gäller vid publicering (Datum: {new Date().toLocaleDateString('sv-SE')}). De kan komma att ändras. Kontakta alltid Taxi Dalarna Borlänge för dagsaktuella och exakta priser för din resa. Vi reserverar oss för eventuella felskrivningar.</small>
              </p>
            </div>


         </article>
      </div>
    </div>
  );
}