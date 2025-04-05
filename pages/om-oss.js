// pages/om-oss.js (Reusing old aboutus.js structure)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Meta from '../components/meta'; // Adjust path if needed
import { FaCheck } from 'react-icons/fa'; // Keeping FaCheck for potential use

// Define placeholders for images used in the old template structure
// IMPORTANT: You MUST replace these paths/images with relevant ones for Taxi Dalarna
const placeholderImage1 = "/img01.jpg"; // Replace with a main 'about' image
const placeholderImage2 = "/img04.jpg"; // Replace with image representing vision/service
const placeholderImage3 = "/image_01-6.jpg"; // Replace with image representing drivers/cars
const companyAddress = {
  street: "Järvstigen 1",
  postalCode: "784 50",
  city: "Borlänge",
  region: "Dalarna",
  country: "SE"
};
export default function OmOss() {
  // --- Page Specific Metadata ---
  const pageTitle = "Om Taxi Dalarna Borlänge | Din Lokala Taxi i Borlänge";
  const pageDescription = "Lär dig mer om Taxi Dalarna Borlänge, ditt lokala och pålitliga taxibolag i Borlänge. Vårt fokus är säkerhet, punktlighet och förstklassig service. Ring 0243-179 00.";
  const pageKeywords = "Om Taxi Dalarna Borlänge, Taxi företag Borlänge, Lokal taxi Borlänge, Taxibolag Borlänge";

  // --- Schema Data ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Taxi Dalarna Borlänge",
      "url": "https://www.taxidalaborlange.se/", // <<<--- REPLACE URL
      "logo": "https://www.taxidalaborlange.se/logo.png", // <<<--- REPLACE LOGO URL
      "description": "Lokalt taxiföretag i Borlänge som fokuserar på säkerhet, punktlighet och god service.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyAddress.street,
        "addressLocality": companyAddress.city,
        "postalCode": companyAddress.postalCode,
        "addressRegion": companyAddress.region,
        "addressCountry": companyAddress.country
      },
      "telephone": "+4624317900",
      "email": "taxi17900@gmail.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+4624317900",
        "contactType": "Customer Service",
        "areaServed": companyAddress.country,
        "availableLanguage": ["Swedish"]}
        ,
      "sameAs": ["https://www.facebook.com/profile.php?id=61556301210089" ],
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://www.taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Om Oss" }
        ]
      }
  };

  return (
    <div>
      <Meta title={pageTitle} description={pageDescription} keywords={pageKeywords} />
       <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
       </Head>

       {/* --- Top Banner --- */}
       <div
          className="bg-no-repeat bg-cover bg-center h-60 md:h-72"
          style={{ backgroundImage: `url(/img01.jpg` }} // Use relative path for style
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-light text-center p-8">
              Om Oss
            </h1>
          </div>
        </div>

      {/* --- Main Content Section 1 --- */}
      <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-16 md:py-24 px-4 md:px-16">
        {/* Column 1: Intro & Vision/USPs */}
        <div className="col-span-1 space-y-6 text-gray-700">
          <p className="text-lg">
             Välkommen till Taxi Dalarna Borlänge! Vi är stolta över att vara ett lokalt taxiföretag som sätter Borlängeborna och besökare i centrum.
          </p>
          <h2 className="text-2xl font-semibold pt-4 text-gray-800">
            Vår Vision: Service och Tillgänglighet
          </h2>
          <p className="text-gray-600">
             Vårt mål är enkelt: att erbjuda trygga, pålitliga och bekväma taxiresor till konkurrenskraftiga priser, varje gång du reser med oss. Det uppnår vi genom att fokusera på:
          </p>
          {/* --- USPs with Full Text --- */}
          <div className="space-y-3 text-gray-600">
            <div className="flex flex-row space-x-4 items-start">
              <FaCheck className="w-5 h-5 mt-1 text-green-600 flex-shrink-0 border rounded-full p-1" />
              <p><strong>Säkerhet:</strong> Din trygghet är vår högsta prioritet. Våra fordon är moderna, välunderhållna och utrustade för att klara alla väglag. Vi följer alla säkerhetsföreskrifter noggrant.</p>
            </div>
            <div className="flex flex-row space-x-4 items-start">
              <FaCheck className="w-5 h-5 mt-1 text-green-600 flex-shrink-0 border rounded-full p-1" />
              <p><strong>Punktlighet:</strong> Vi vet att din tid är värdefull. Vi gör allt vi kan för att vara på plats i tid, oavsett om du ska till tåget, flyget, ett viktigt möte eller bara hem.</p>
            </div>
            <div className="flex flex-row space-x-4 items-start">
              <FaCheck className="w-5 h-5 mt-1 text-green-600 flex-shrink-0 border rounded-full p-1" />
              <p><strong>Service:</strong> Vi vill att du ska få en positiv upplevelse när du åker med oss. Våra förare är serviceinriktade, trevliga och hjälper gärna till med bagage eller andra behov du kan ha under resan.</p>
            </div>
            <div className="flex flex-row space-x-4 items-start">
              <FaCheck className="w-5 h-5 mt-1 text-green-600 flex-shrink-0 border rounded-full p-1" />
              <p><strong>Tillgänglighet:</strong> Vi finns här för dig när du behöver oss. Med generösa öppettider på växeln och möjlighet till förbokning dygnet runt strävar vi efter att alltid kunna möta dina transportbehov.</p>
            </div>
             <div className="flex flex-row space-x-4 items-start">
              <FaCheck className="w-5 h-5 mt-1 text-green-600 flex-shrink-0 border rounded-full p-1" />
              <p><strong>Lokal Förankring:</strong> Som ett lokalt företag med bas på {companyAddress.street} i {companyAddress.city} bryr vi oss om Borlänge och våra kunder här. Vi känner till gatorna, områdena och de bästa vägarna.</p>
            </div>
          </div>
        </div>
        {/* Column 2: Main Image */}
        <div className="col-span-1 mt-8 lg:mt-0 flex items-center justify-center">
            <div className="w-full rounded overflow-hidden shadow-md">
                <Image
                    src={placeholderImage2} // Use relative path
                    alt={`Taxi Dalarna Borlänge kontor eller bil på ${companyAddress.city}`}
                    layout="responsive"
                    width={1200} // Adjust
                    height={900} // Adjust
                    priority // Prioritize loading for LCP potentially
                />
            </div>
        </div>
      </div>

      {/* --- Gray Background Section --- */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-16 md:py-24 px-4 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Card 1: Våra Förare */}
            <div className="col-span-1 bg-white rounded shadow-lg overflow-hidden flex flex-col">
              <div className="w-full h-56 relative">
                 <Image
                     src={placeholderImage3} // Use relative path
                     alt={`Erfaren förare från $Taxi Dalarna Borlänge`}
                     layout="fill"
                     objectFit="cover"
                 />
              </div>
              <div className="space-y-4 p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-semibold text-amber-600">
                  Våra Förare – Ryggraden i Verksamheten
                </h3>
                <p className="text-gray-600 text-sm">
                  Vårt team av förare är noggrant utvalda för sin yrkesskicklighet, sitt servicetänkande och sin lokalkännedom. De innehar giltiga taxiförarlegitimationer, genomgår regelbundna kontroller och fortbildningar för att säkerställa högsta kvalitet och säkerhet för våra resenärer.
                </p>
              </div>
            </div>
            {/* Card 2: Miljömedvetenhet */}
            <div className="col-span-1 bg-white rounded shadow-lg overflow-hidden flex flex-col">
              <div className="w-full h-56 relative">
                <Image
                     src={placeholderImage2} // Use relative path
                     alt={`Miljövänligare taxi i ${companyAddress.city}`}
                     layout="fill"
                     objectFit="cover"
                 />
              </div>
              <div className="space-y-4 p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-semibold text-amber-600">
                  Miljömedvetenhet
                </h3>
                <p className="text-gray-600 text-sm">
                  Vi är medvetna om vår miljöpåverkan och arbetar aktivt för att göra vår verksamhet mer hållbar. Detta inkluderar att vi strävar efter att använda moderna fordon med lägre utsläpp och att uppmuntra till en bränsleeffektiv körstil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CTA Section --- */}
      <div className="container mx-auto py-16 md:py-20 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kontakta Oss</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Vi ser fram emot att köra dig! Har du frågor om oss på Taxi Dalarna Borlänge eller våra <Link href="/vara-tjanster"><a className="text-amber-600 hover:underline">tjänster</a></Link> är du alltid välkommen att kontakta oss.
        </p>
        <Link href="/kontakt">
            <a className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-base px-8 py-3 text-center shadow transition duration-300">
                Gå till Kontaktsidan
            </a>
        </Link>
      </div>

    </div>
  );
}