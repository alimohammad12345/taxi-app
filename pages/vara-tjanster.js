// pages/vara-tjanster.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using images on this page
import Meta from '../components/meta'; // Adjust path if needed

export default function VaraTjanster() {
  // --- Page Specific Metadata ---
  const pageTitle = "Våra Taxitjänster i Borlänge | Flyg, Tåg, Företag | Taxi Dalarna Borlänge";
  const pageDescription = "Upptäck alla taxitjänster från Taxi Dalarna Borlänge. Vi erbjuder flygtaxi, tågtaxi, företagstaxi, seniortaxi, bud och mer. Hitta rätt transport för dig!";
  const pageKeywords = "Taxitjänster Borlänge, Taxi Dalarna Borlänge tjänster, Transport Borlänge, flygtaxi, tågtaxi, företagstaxi, seniortaxi, budtaxi, taxi romme alpin, taxi falun";

  // --- Schema Data for Service List Page ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList", // Use ItemList for a list of services/items
      "name": "Taxitjänster erbjudna av Taxi Dalarna Borlänge",
      "description": "En översikt av de olika taxitjänsterna som erbjuds i Borlänge med omnejd.",
      "itemListOrder": "https://schema.org/ItemListOrderAscending", // Or Unordered
      "numberOfItems": 7, // Adjust based on the final number of services listed
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Flygtaxi", "url": "https://www.taxidalaborlange.se/vara-tjanster/flygtaxi-borlange" }, // <<<--- REPLACE URL
        { "@type": "ListItem", "position": 2, "name": "Tågtaxi", "url": "https://www.taxidalaborlange.se/vara-tjanster/tagtaxi-borlange" }, // <<<--- REPLACE URL
        { "@type": "ListItem", "position": 3, "name": "Taxi till Romme Alpin", "url": "https://www.taxidalaborlange.se/vara-tjanster/taxi-romme-alpin" }, // <<<--- REPLACE URL
        { "@type": "ListItem", "position": 4, "name": "Taxi Borlänge – Falun", "url": "https://www.taxidalaborlange.se/vara-tjanster/taxi-borlange-falun" }, // <<<--- REPLACE URL
        { "@type": "ListItem", "position": 5, "name": "Seniortaxi", "url": "https://www.taxidalaborlange.se/vara-tjanster/seniortaxi-borlange" }, // <<<--- REPLACE URL
        { "@type": "ListItem", "position": 6, "name": "Företagstaxi", "url": "https://www.taxidalaborlange.se/vara-tjanster/foretagstaxi-borlange" }, // <<<--- REPLACE URL
        { "@type": "ListItem", "position": 7, "name": "Bud & Paket", "url": "https://www.taxidalaborlange.se/vara-tjanster/bud-paket-borlange" } // <<<--- REPLACE URL
        // Add more if needed
      ],
      // Optional: Add breadcrumbs if desired for this page structure
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Våra Tjänster" }
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
        <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Våra Taxitjänster i Borlänge & Dalarna</h1>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
          Hos Taxi Dalarna Borlänge erbjuder vi ett brett utbud av pålitliga och anpassade transporttjänster för både privatpersoner och företag i Borlänge med omnejd. Vårt mål är att alltid leverera en säker, bekväm och punktlig resa, oavsett dina behov. Utforska våra tjänster nedan och hitta den som passar dig bäst.
        </p>

        {/* --- Service Grid --- */}
        {/* Using a grid to display service snippets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service: Flygtaxi */}
          <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
             {/* <div className="w-full h-40 bg-gray-200 mb-4 rounded"> <Image src="/bilder/..." alt="Flygtaxi" layout="fill" objectFit="cover" className="rounded"/></div> */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/flygtaxi-borlange"><a className="hover:text-amber-600">Flygtaxi – Till/Från Flygplatser</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Starta eller avsluta din resa på bästa sätt. Vi ser till att du kommer till flygplatsen i god tid, utan stress. Vi trafikerar Dala Airport (BLE), Arlanda (ARN) m.fl. Fast pris erbjuds.
            </p>
            <Link href="/vara-tjanster/flygtaxi-borlange">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Flygtaxi →</a>
            </Link>
          </article>

          {/* Service: Tågtaxi */}
           <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/tagtaxi-borlange"><a className="hover:text-amber-600">Tågtaxi – Borlänge Station</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Missa inte tåget! Boka vår pålitliga tågtaxi för smidig transport till och från Borlänge Järnvägsstation. Vi anpassar oss efter tågtiderna för en stressfri anslutning.
            </p>
            <Link href="/vara-tjanster/tagtaxi-borlange">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Tågtaxi →</a>
            </Link>
          </article>

           {/* Service: Taxi till Romme Alpin */}
           <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/taxi-romme-alpin"><a className="hover:text-amber-600">Taxi till Romme Alpin (Fast Pris*)</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Ta dig enkelt och bekvämt till skidåkningen! Vi kör dig direkt från Borlänge till Romme Alpin till ett fast och förmånligt pris på 499 kr*. Perfekt för en dag i backen.
            </p>
            <Link href="/vara-tjanster/taxi-romme-alpin">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Taxi till Romme →</a>
            </Link>
          </article>

           {/* Service: Taxi Borlänge-Falun */}
           <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/taxi-borlange-falun"><a className="hover:text-amber-600">Taxi Borlänge – Falun (Fast Pris*)</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Res prisvärt och bekvämt mellan Borlänge Centrum och Falun Centrum. Vi erbjuder ett fast pris på endast 599 kr* för denna populära sträcka.
            </p>
            <Link href="/vara-tjanster/taxi-borlange-falun">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Taxi till Falun →</a>
            </Link>
          </article>

          {/* Service: Seniortaxi */}
          <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/seniortaxi-borlange"><a className="hover:text-amber-600">Seniortaxi – Trygghet & Rabatt (20%)</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              För dig som är 65+ erbjuder vi en trygg och anpassad taxitjänst med 20% rabatt på ordinarie taxa (taxameterpris), alla dagar. Res bekvämt och prisvärt i Borlänge.
            </p>
            <Link href="/vara-tjanster/seniortaxi-borlange">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Seniortaxi →</a>
            </Link>
          </article>

          {/* Service: Företagstaxi */}
          <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/foretagstaxi-borlange"><a className="hover:text-amber-600">Företagstaxi – Effektiva Affärsresor</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Pålitliga och representativa transporter för ditt företag. Vi erbjuder skräddarsydda lösningar med möjlighet till samlingsfaktura och resekonto för enkel administration.
            </p>
            <Link href="/vara-tjanster/foretagstaxi-borlange">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Företagstaxi →</a>
            </Link>
          </article>

          {/* Service: Bud & Paket */}
          <article className="flex flex-col bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
             {/* Optional Image Placeholder */}
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href="/vara-tjanster/bud-paket-borlange"><a className="hover:text-amber-600">Bud & Paket – Lokala Leveranser</a></Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Behöver du skicka något snabbt inom Borlänge med omnejd? Vi erbjuder pålitliga budtransporter för dokument och mindre paket. Kontakta oss för pris.
            </p>
            <Link href="/vara-tjanster/bud-paket-borlange">
              <a className="text-amber-700 hover:text-amber-800 font-medium text-sm self-start">Läs mer om Bud & Paket →</a>
            </Link>
          </article>

        </div> {/* End Service Grid */}

        {/* --- Concluding Section --- */}
        <div className="text-center mt-16">
           <h2 className="text-2xl font-light mb-4">Hittar du inte det du söker?</h2>
           <p className="mb-6 text-gray-600">Om du har specifika önskemål eller behöver transport till andra destinationer, tveka inte att kontakta oss. Vi är flexibla och gör vårt bästa för att skräddarsy en lösning som passar just dig.</p>
           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
             <Link href="/kontakt">
               <a className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-8 py-3 text-center shadow transition duration-300 ease-in-out">
                 Kontakta Oss
               </a>
             </Link>
             <a href="tel:024317900" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 text-center shadow transition duration-300 ease-in-out">
               Ring Oss: 0243-179 00
             </a>
          </div>
        </div>

        {/* --- Price Disclaimer --- */}
        <p className="text-center text-xs text-gray-500 mt-12"><small>*Fasta priser gäller enligt villkor specificerade på respektive tjänstesida och kan komma att ändras. Kontakta oss för dagsaktuella priser.</small></p>

      </div> {/* End Container */}
    </div>
  );
}