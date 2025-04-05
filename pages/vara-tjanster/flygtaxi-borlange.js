// pages/vara-tjanster/flygtaxi-borlange.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function FlygtaxiBorlange() {
  // --- Page Specific Metadata ---
  const pageTitle = "Flygtaxi Borlänge | Taxi till Dala Airport & Arlanda | Boka Nu";
  const pageDescription = "Boka pålitlig flygtaxi i Borlänge till Dala Airport (BLE) och Stockholm Arlanda (ARN). Fast pris, punktlig service. Ring Taxi Dalarna Borlänge 0243-179 00!";
  const pageKeywords = "Flygtaxi Borlänge, Taxi Dala Airport, Taxi Arlanda från Borlänge, Boka flygtaxi, transport flygplats Borlänge";

  // --- Schema Data for Flygtaxi Service Page ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service", // Define this specific page as a Service
      "serviceType": "Flygtaxi", // Specific service type
      "name": "Flygtaxi till/från Borlänge (Dala Airport & Arlanda)",
      "description": "Punktlig och bekväm flygtaxi mellan Borlänge och flygplatser som Dala Airport (BLE) och Arlanda (ARN).",
      "provider": { // Reference the main business
        "@type": "LocalBusiness",
        "name": "Taxi Dalarna Borlänge",
        "telephone": "+4624317900",
         "url": "https://www.taxidalaborlange.se/" // <<<--- REPLACE URL
         // Add address if desired
      },
       "areaServed": {
        "@type": "City",
        "name": "Borlänge"
      },
       // Optional: Specify airports served if possible within schema standard
       // "serviceLocation": [ { "@type": "Airport", "name": "Dala Airport" }, { "@type": "Airport", "name": "Stockholm Arlanda Airport" } ],
       // Optional: Link back to the main service listing page
       "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.taxidalaborlange.se/vara-tjanster" // <<<--- REPLACE URL
        },
        "potentialAction": { // Booking action
           "@type": "ReserveAction",
           "target": "https://www.taxidalaborlange.se/boka-online" // <<<--- REPLACE URL
        },
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Våra Tjänster", "item": "https://www.taxidalaborlange.se/vara-tjanster" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 3, "name": "Flygtaxi Borlänge" }
        ]
      }
      // Add offers (fixed price) if applicable and you want to detail them in schema
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
        <article> {/* Wrap content in article tag */}
          <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Flygtaxi Borlänge – Punktlig Transport till Dala Airport & Arlanda</h1>
          <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
            Starta din resa på bästa möjliga sätt med Taxi Dalarna Borlänge. Vi erbjuder pålitlig och bekväm flygtaxi från Borlänge till Dala Airport (Borlänge flygplats - BLE), Stockholm Arlanda Airport (ARN) och andra flygplatser enligt dina önskemål. Med oss slipper du stressen med parkering och tidspress – vi ser till att du är framme i god tid före avgång.
          </p>

          <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md"> {/* Container */}
            <Image
              src="/image_01-6.jpg" // <<< YOUR IMAGE PATH
              alt="Flygtaxi från Taxi Dalarna Borlänge vid flygplats" // <<< DESCRIPTIVE ALT TEXT
              layout="responsive" // Makes the image scale with the container width
              width={900} // <<< ACTUAL ORIGINAL WIDTH of your image file
              height={600} // <<< ACTUAL ORIGINAL HEIGHT of your image file
              // Optional: Add priority if it's above the fold
              priority={true}
            />
          </div>
          <section className="max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Varför Boka Flygtaxi med Oss?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Alltid i Tid:</strong> Vi förstår vikten av punktlighet vid flygresor och planerar rutten noggrant med hänsyn till trafik och incheckningstider.</li>
              <li><strong>Fast Pris:</strong> Få ett fast och konkurrenskraftigt pris i förväg för resor till Dala Airport och Arlanda när du bokar med oss. Inga dolda avgifter. Ring <a href="tel:024317900" className="text-amber-600 hover:underline">0243-179 00</a> för prisuppgift!</li>
              <li><strong>Bekväm och Avslappnad Resa:</strong> Koppla av i våra moderna och rena bilar medan våra erfarna förare tar hand om körningen tryggt och säkert.</li>
              <li><strong>Gott om Bagageutrymme:</strong> Vi har plats för normalt bagage. Meddela oss vid bokning om du har extra mycket eller skrymmande bagage (t.ex. skidor, golfbag) så ordnar vi en passande bil.</li>
              <li><strong>Service Dygnet Runt:</strong> Vi kör oavsett tid på dygnet, anpassat efter ditt flyg. Förbokning krävs för nattkörningar och tidiga morgnar.</li>
            </ul>
          </section>

          <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Flygplatser vi Trafikerar Från Borlänge:</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Dala Airport (BLE):</strong> Snabb och smidig transport till din lokala flygplats i Borlänge.</li>
              <li><strong>Stockholm Arlanda Airport (ARN):</strong> Bekväm och prisvärd resa direkt till Sveriges största flygplats. Fråga oss om fast pris!</li>
              <li><strong>Andra Flygplatser:</strong> Behöver du transport till exempelvis Bromma (BMA), Skavsta (NYO) eller Västerås (VST)? <Link href="/kontakt"><a className="text-amber-600 hover:underline">Kontakta oss</a></Link> på <a href="tel:024317900" className="text-amber-600 hover:underline">0243-179 00</a> för en offert.</li>
             </ul>
          </section>

          <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Så Bokar Du Din Flygtaxi</h2>
             <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Kontakta Oss:</strong> Ring oss på <a href="tel:024317900" className="text-amber-600 hover:underline font-medium">0243-179 00</a> eller använd vårt <Link href="/boka-online"><a className="text-amber-600 hover:underline font-medium">bokningsformulär online</a></Link>.</li>
              <li><strong>Ange Resedetaljer:</strong> Meddela oss datum, önskad upphämtningstid (eller flightnummer och avgångstid), antal passagerare och vilken flygplats du ska till. Glöm inte att nämna eventuellt specialbagage.</li>
              <li><strong>Få Bekräftelse & Pris:</strong> Vi bekräftar din bokning och ger dig ett fast pris (om tillämpligt).</li>
              <li><strong>Res Bekvämt:</strong> Vi hämtar dig på avtalad tid och plats och ser till att du kommer fram tryggt och i god tid till flygplatsen.</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Tips:</strong> Boka din flygtaxi i god tid, särskilt inför populära reseperioder och helger, för att garantera att vi har en bil tillgänglig för dig.
            </p>
          </section>

          <section className="max-w-3xl mx-auto mb-12">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ankomst till Flygplatsen? Boka Hämtning till Borlänge!</h2>
             <p className="text-gray-700">
               Vi hämtar dig självklart även vid ankomst till Dala Airport eller Arlanda för transport hem till Borlänge. Meddela oss ditt flightnummer när du bokar så håller vi koll på eventuella förseningar och möter upp dig när du har landat och hämtat ditt bagage.
             </p>
          </section>

          {/* --- Final CTA --- */}
          <div className="text-center">
            <Link href="/boka-online">
              <a className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 mr-4 mb-2 text-center shadow transition duration-300">
                Boka Flygtaxi Online
              </a>
            </Link>
            <a href="tel:024317900" className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-8 py-3 mb-2 text-center shadow transition duration-300">
              Ring Oss: 0243-179 00
            </a>
             <p className="mt-6"><Link href="/kontakt"><a className="text-sm text-gray-600 hover:underline hover:text-amber-600">Har du frågor? Kontakta oss!</a></Link></p>
          </div>

        </article>
      </div>
    </div>
  );
}