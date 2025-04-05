// pages/vara-tjanster/bud-paket-borlange.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function BudPaketBorlange() {
  // --- Page Specific Metadata ---
  const pageTitle = "Bud & Paket Borlänge | Snabb Lokal Leverans | Taxi Dalarna Borlänge";
  const pageDescription = "Behöver du skicka bud eller paket snabbt inom Borlänge? Taxi Dalarna Borlänge erbjuder pålitliga och snabba lokala budtransporter. Ring 0243-179 00 för pris!";
  const pageKeywords = "Bud Borlänge, Paket taxi Borlänge, Expressleverans Borlänge, Skicka paket lokalt Borlänge, Dokumenttransport Borlänge, Budfirma Borlänge";

  // --- Schema Data for Bud Service Page ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Budtjänst", // Or "CourierService"
      "name": "Bud & Pakettransport inom Borlänge",
      "description": "Snabb och pålitlig lokal budtransport för dokument och mindre paket inom Borlänge kommun.",
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
       "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.taxidalaborlange.se/vara-tjanster" // <<<--- REPLACE URL
        },
        // Potential action could be a ContactPoint for quotes
         "potentialAction": {
           "@type": "CommunicateAction",
           "target": "tel:+4624317900",
           "description": "Ring för prisuppgift på budkörning"
        },
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Våra Tjänster", "item": "https://www.taxidalaborlange.se/vara-tjanster" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 3, "name": "Bud & Paket Borlänge" }
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
           <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Bud & Paket – Snabba Lokala Leveranser i Borlänge</h1>
           <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
             Har du ett brådskande dokument som måste levereras snabbt? Eller ett mindre paket som behöver skickas inom Borlänge med omnejd? Taxi Dalarna Borlänge erbjuder snabba och pålitliga budtjänster när tiden är knapp.
           </p>

           {/* Optional Image Placeholder */}
           <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md">
              <Image
                  src="/img01.jpg" // <<< YOUR IMAGE PATH
                  alt="Snabb budleverans med Taxi Dalarna Borlänge" // <<< DESCRIPTIVE ALT TEXT
                  layout="responsive"
                  width={1200} // <<< ACTUAL ORIGINAL WIDTH
                  height={800} // <<< ACTUAL ORIGINAL HEIGHT
              />
            </div>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">När Du Behöver Snabb Leverans:</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
               <li><strong>Expressleverans:</strong> Vi hämtar och lämnar ditt bud så snabbt som möjligt inom Borlänge kommun och närliggande områden.</li>
               <li><strong>Pålitlighet:</strong> Du kan lita på att ditt paket eller dokument hanteras varsamt och kommer fram säkert till rätt mottagare.</li>
               <li><strong>Flexibilitet:</strong> Vi anpassar oss efter dina behov och kan ofta hämta med kort varsel (beroende på tillgänglighet och avstånd).</li>
               <li><strong>Direkttransport:</strong> Ditt bud åker direkt från avsändare till mottagare utan onödiga omvägar eller mellanlagring för snabbast möjliga leverans.</li>
             </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vad Kan Vi Leverera?</h2>
             <p className="text-gray-700 mb-3">Vår budtjänst är främst avsedd för snabba, lokala transporter av:</p>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Viktiga dokument och kontrakt</li>
                <li>Mindre paket och försändelser</li>
                <li>Varuprover eller reservdelar</li>
                <li>Glömda nycklar, glasögon eller andra personliga tillhörigheter</li>
                <li>Andra brådskande försändelser som ryms i en vanlig personbil</li>
              </ul>
             <p className="text-sm text-gray-500 mt-4">
               <em>Observera: Vi transporterar ej farligt gods, kylda/frysta varor, större möbler, vitvaror eller extremt ömtåligt gods som kräver specialhantering. Kontakta oss om du är osäker på om vi kan transportera ditt gods.</em>
             </p>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hur Bokar Jag Budtransport?</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Ring Oss:</strong> Kontakta oss på <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a>. Detta är det snabbaste sättet att boka ett bud.</li>
                <li><strong>Beskriv Budet:</strong> Berätta vad som ska skickas (typ av gods, ungefärlig storlek/vikt), exakt upphämtningsadress (inkl. ev. kontaktperson/portkod) och komplett leveransadress (inkl. mottagarens namn och telenummer).</li>
                <li><strong>Få Prisuppgift:</strong> Vi ger dig en prisuppgift baserad på avstånd, tidpunkt och eventuell väntetid.</li>
                <li><strong>Bekräfta & Skicka:</strong> När du godkänt priset skickar vi en bil för att hämta ditt bud så snart som möjligt.</li>
              </ol>
           </section>

           <section className="max-w-3xl mx-auto mb-12">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Pris för Budkörning</h2>
             <p className="text-gray-700">
               Priset för budkörning baseras vanligtvis på taxameter eller enligt överenskommelse vid bokning, beroende på uppdragets art och omfattning. Faktorer som påverkar priset är avstånd, tid på dygnet, och eventuell väntetid vid upphämtning/lämning. Kontakta oss för en exakt prisuppgift för just din leverans.
             </p>
             <p className="text-gray-700 mt-2">Företagskunder kan även få budtransporter inkluderade i sitt <Link href="/vara-tjanster/foretagstaxi-borlange"><a className="text-amber-600 hover:underline">företagsavtal</a></Link>.</p>
           </section>

           {/* --- Final CTA --- */}
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">Låt Taxi Dalarna Borlänge lösa dina brådskande lokala transporter!</p>
              <a href="tel:024317900" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 text-center shadow transition duration-300">
                Ring för Bud: 0243-179 00
              </a>
              <p className="mt-6"><Link href="/kontakt"><a className="text-sm text-gray-600 hover:underline hover:text-amber-600">Kontakta oss för övriga frågor</a></Link></p>
           </div>

         </article>
      </div>
    </div>
  );
}