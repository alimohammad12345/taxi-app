// pages/vara-tjanster/foretagstaxi-borlange.js (New File)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Import if using an image
import Meta from '../../components/meta'; // Adjust path: up one level

export default function ForetagstaxiBorlange() {
  // --- Page Specific Metadata ---
  const pageTitle = "Företagstaxi Borlänge | Pålitliga Affärsresor | Taxi Dalarna Borlänge";
  const pageDescription = "Professionell företagstaxi i Borlänge. Taxi Dalarna Borlänge erbjuder punktliga och representativa transporter för företag. Ring 0243-179 00 om företagsavtal & faktura!";
  const pageKeywords = "Företagstaxi Borlänge, Företagsavtal taxi Borlänge, Taxi för företag Borlänge, Affärsresor taxi Borlänge, Taxi faktura Borlänge";

  // --- Schema Data for Företagstaxi Service Page ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Företagstaxi",
      "name": "Företagstaxi för Affärsresor i Borlänge",
      "description": "Pålitliga och representativa taxitransporter anpassade för företagets behov i Borlänge, inklusive möjlighet till företagsavtal och fakturering.",
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
       // Consider adding specific offers related to invoicing/accounts if applicable
       // "offers": { "@type": "Offer", "name": "Företagsavtal med faktura" },
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Våra Tjänster", "item": "https://www.taxidalaborlange.se/vara-tjanster" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 3, "name": "Företagstaxi Borlänge" }
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
           <h1 className="text-3xl md:text-4xl font-light text-center mb-6">Företagstaxi i Borlänge – Effektiva och Representativa Resor</h1>
           <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
             För företag i Borlänge och Dalarna är tid pengar och ett professionellt intryck avgörande. Taxi Dalarna Borlänge erbjuder skräddarsydda taxilösningar för näringslivet, utformade för att möta era specifika behov av punktlighet, komfort, säkerhet och effektivitet. Låt oss ta hand om era affärsresor, kundtransporter och personaltransporter så kan ni fokusera på er kärnverksamhet.
           </p>

           {/* Optional Image Placeholder */}
           <div className="w-full max-w-3xl mx-auto my-8 rounded overflow-hidden shadow-md">
              <Image
                  src="/img05.jpg" // <<< YOUR IMAGE PATH
                  alt="Affärspersoner anländer bekvämt med Taxi Dalarna Borlänge" // <<< DESCRIPTIVE ALT TEXT
                  layout="responsive"
                  width={1200} // <<< ACTUAL ORIGINAL WIDTH
                  height={800} // <<< ACTUAL ORIGINAL HEIGHT
              />
            </div>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Varför Välja Oss för Era Företagsresor?</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
               <li><strong>Punktlighet i Fokus:</strong> Vi förstår vikten av att passa tider. Vi säkerställer att ni och era gäster alltid anländer i tid till möten, konferenser, flyg och tåg.</li>
               <li><strong>Professionella & Diskreta Förare:</strong> Våra förare är serviceinriktade, har god lokalkännedom, kör tryggt och respekterar behovet av diskretion under resan.</li>
               <li><strong>Representativa Fordon:</strong> Res bekvämt i våra rena, moderna och välunderhållna bilar som ger ett professionellt intryck. Vi har även bilar för större sällskap vid behov (förbokning krävs).</li>
               <li><strong>Prioriterad Service & Flexibel Bokning:</strong> Som avtalskund får ni prioriterad service. Boka enkelt via telefon på <a href="tel:024317900" className="text-amber-600 hover:underline">0243-179 00</a>, e-post eller via vårt online-system.</li>
               <li><strong>Förenklad Administration med Företagsavtal:</strong> Slipp krångel med kvitton och utlägg! Med ett företagsavtal får ni möjlighet till samlingsfaktura (månadsvis eller enligt överenskommelse) och specificerade resor för enkel uppföljning och kostnadskontroll.</li>
               <li><strong>Skräddarsydda Lösningar:</strong> Vi lyssnar på era behov och kan utforma ett företagsavtal anpassat efter er specifika resvolym och önskemål.</li>
             </ul>
           </section>

           <section className="max-w-3xl mx-auto mb-10">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Våra Tjänster för Företag i Borlänge:</h2>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
               <li><strong>Affärsresor:</strong> Effektiv transport till och från möten, kundbesök, kontor och hotell inom Borlänge och hela regionen.</li>
               <li><strong>Flygplatstransfer:</strong> Pålitlig transport till/från Dala Airport, Arlanda och andra flygplatser för era anställda och gäster. Se vår <Link href="/vara-tjanster/flygtaxi-borlange"><a className="text-amber-600 hover:underline">Flygtaxi-sida</a></Link>.</li>
               <li><strong>Tåganslutningar:</strong> Smidig och punktlig transport till/från Borlänge Järnvägsstation. Se vår <Link href="/vara-tjanster/tagtaxi-borlange"><a className="text-amber-600 hover:underline">Tågtaxi-sida</a></Link>.</li>
               <li><strong>Kund- & Gästtransporter:</strong> Ge era viktiga kunder och besökare en förstklassig transportupplevelse från start till slut.</li>
               <li><strong>Personaltransport:</strong> Trygg och säker transport för personal, även vid obekväma arbetstider eller då kollektivtrafiken inte är ett alternativ.</li>
               <li><strong>Brådskande Bud och Dokumenttransport:</strong> Snabba och säkra leveranser av viktiga dokument eller mindre paket inom närområdet. Se vår <Link href="/vara-tjanster/bud-paket-borlange"><a className="text-amber-600 hover:underline">Budtjänst</a></Link>.</li>
             </ul>
           </section>

            <section className="max-w-3xl mx-auto mb-12 bg-amber-50 p-6 rounded border border-amber-200">
             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bli Företagskund – Enklare Resande, Bättre Kontroll</h2>
             <p className="text-gray-700 mb-4">
                Med ett företagsavtal hos Taxi Dalarna Borlänge förenklar ni resandet och får full kontroll över era transportkostnader. Ni bestämmer själva vilka hos er som får resa mot faktura och kan enkelt följa upp resandet via specificerade fakturor.
              </p>
               <h3 className="text-lg font-medium mb-2 text-gray-700">Kontakta Oss för Företagslösningar</h3>
               <p className="text-gray-700 mb-4">
                 Vill du veta mer om hur Taxi Dalarna Borlänge kan effektivisera och förbättra era företagsresor? Kontakta oss idag för att diskutera ett skräddarsytt upplägg och få en offert anpassad för ert företag.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <a href="mailto:taxi17900@gmail.com?subject=F%C3%B6rfr%C3%A5gan%20om%20F%C3%B6retagsavtal" className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow">
                    Maila oss om Företagsavtal
                 </a>
                 <a href="tel:024317900" className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow">
                    Ring Oss: 0243-179 00
                 </a>
               </div>
               <p className="text-xs text-gray-500 mt-3">Eller använd vårt allmänna <Link href="/kontakt"><a className="underline hover:text-amber-600">kontaktformulär</a></Link>.</p>
           </section>


         </article>
      </div>
    </div>
  );
}