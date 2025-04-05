// pages/index.js (Refined based on Next Steps)

import Head from 'next/head';
import Link from 'next/link'; // Import Link for use in placeholders
import Meta from '../components/meta';
import HomepageTestimonials from "../components/HomepageTestimonials";
import HomepageFAQ from "../components/HomepageFAQ";
// --- Components for the Homepage Sections ---
// IMPORTANT: Ensure these components are edited separately to contain the correct content:
// - header.js: Should contain the Hero section content.
// - sectiontwohomepage.js: Should contain the "Populäraste Tjänster" highlights.
// - sectionservice.js: Should contain the "Varför Välja Oss?" (USPs) content.
import Header from "../components/header";
import SectionTwoHomePage from "../components/sectiontwohomepage";
import SectionService from "../components/sectionservice";

// --- PLACEHOLDERS: These sections should ideally be moved to dedicated components ---
// Recommendation: Create components/HomepageTestimonials.js and components/HomepageFAQ.js
// Then import and use them here instead of the placeholder HTML below.
// import HomepageTestimonials from "../components/HomepageTestimonials"; // Example import
// import HomepageFAQ from "../components/HomepageFAQ"; // Example import

export default function Home() {
  // --- Page Specific Metadata ---
  const pageTitle = "Taxi Borlänge | Pålitlig & Bekväm Taxi i Dalarna | Boka Nu!";
  const pageDescription = "Behöver du taxi i Borlänge? Taxi Dalarna Borlänge erbjuder trygga och punktliga resor dygnet runt. Ring 0243-179 00 eller boka online! Fast pris tillgängligt.";
  const pageKeywords = "Taxi Borlänge, Taxi Dalarna Borlänge, Boka taxi Borlänge, Taxi Dalarna, transport, flygtaxi, tågtaxi";

  // --- Schema Data for Homepage (LocalBusiness & TaxiService) ---
  // REVIEW & COMPLETE: Fill in ALL details accurately. Replace placeholders.
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "TaxiService", // Main entity is the Taxi Service offered
      "name": "Taxi Dalarna Borlänge - Taxitjänster", // Name of the service
      "description": "Pålitliga och bekväma taxiresor i Borlänge, Falun och hela Dalarna för privatpersoner och företag.",
      "serviceType": "Taxitjänst", // Service type in local language
      "provider": { // Details about the business providing the service
        "@type": "LocalBusiness", // You can also use "Taxi" which inherits from LocalBusiness
        "name": "Taxi Dalarna Borlänge", // Official business name
        "telephone": "+4624317900", // Use international format +46
        "email": "taxi17900@gmail.com", // Add email if public
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Järvstigen 1",
          "addressLocality": "Borlänge",
          "postalCode": "784 50",
          "addressRegion": "Dalarna", // Optional but good for context
          "addressCountry": "SE"
        },
         "url": "https://www.taxidalaborlange.se", // <<<--- REPLACE WITH YOUR FINAL, LIVE URL
         "logo": "https://www.taxidalaborlange.se/logo.png", // <<<--- REPLACE WITH YOUR ACTUAL LOGO URL
         "image": "https://www.taxidalaborlange.se/logo.png", // <<<--- REPLACE WITH A REPRESENTATIVE IMAGE URL (e.g., hero image)
         // Define Opening Hours for the *Business Phone/Dispatch*
         "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "opens": "00:00", // Example for 24h
            "closes": "23:59", // Example for 24h
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
             ]
            // Adjust 'opens', 'closes', 'dayOfWeek' if not 24/7
         },
         // Optional: Add accepted payment types
         "paymentAccepted": "Cash, Credit Card, Swish",
         // Optional: Add price range indication ($, $$, $$$)
         // "priceRange": "$$"
      },
       "areaServed": { // Geographic area served - Can be multiple places
        "@type": "AdministrativeArea",
        "name": "Dalarna", // Broad area
        // Or more specific:
        // "@type": "City",
        // "name": "Borlänge"
        // Or an array:
         "@type": ["City", "City", "Region"],
         "name": ["Borlänge", "Falun", "Dalarna"]
      },
      // Optional: Link to your booking action
      // "potentialAction": {
         "@type": "ReserveAction",
         "target": "https://www.taxidalaborlange.se/boka-online" // <<<--- REPLACE URL
      // }
  };

  // --- Schema for FAQ Section ---
  // Add this schema if you keep the FAQ section on the homepage
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hur bokar jag en taxi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Det snabbaste sättet är att ringa oss direkt på 0243-179 00. Du kan också boka online via vårt formulär här på hemsidan. Förbokning rekommenderas, särskilt för flyg-, tåg- och längre resor."
        }
      },
      {
        "@type": "Question",
        "name": "Erbjuder ni fast pris?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi erbjuder fasta priser på flera populära sträckor, exempelvis mellan Borlänge och Falun (599 kr*), till Romme Alpin (499 kr*), samt till/från Dala Airport och Arlanda. Se vår prissida eller ring oss på 0243-179 00 för prisuppgift."
        }
      },
      {
        "@type": "Question",
        "name": "Kan jag betala med kort i bilen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolut! Vi accepterar de flesta vanliga kredit- och betalkort direkt i bilen. Vi tar även Swish. Företagskunder kan ansöka om fakturabetalning."
        }
      }
    ]
  };


  return (
    <div>
      {/* Add Page Specific Meta Tags & Defaults */}
      <Meta title={pageTitle} description={pageDescription} keywords={pageKeywords} />

      {/* Add Page Specific Schema */}
       <Head>
          {/* Main Business/Service Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
           {/* FAQ Schema (if applicable to this page) */}
           <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
           />
          {/* Add other Head elements specific to the homepage here if needed */}
        </Head>

      {/* --- Render Homepage Sections in Order --- */}

      {/* 1. Hero Section (Content managed in components/header.js) */}
      <Header />

      {/* 2. Service Highlights ("Populäraste Tjänster") */}
      {/* Content managed in components/sectiontwohomepage.js */}
      <SectionTwoHomePage />

      {/* 3. Why Choose Us? (USPs - "Varför Välja Oss?") */}
      {/* Content managed in components/sectionservice.js */}
      
      <section className="container mx-auto py-16 px-4 text-center" aria-labelledby="testimonials-heading">
         
         <div className="space-y-4 max-w-2xl mx-auto">
            {/* Add actual testimonials here */}
            <h2 id="testimonials-heading" className="text-3xl font-light mb-8">Varför Välja Taxi Dalarna Borlänge?</h2>
            {/* Add more testimonials */}
         </div>
         {/* Optional: Link to more reviews */}
         {/* <div className="mt-8">
            <a href="YOUR_GOOGLE_REVIEWS_LINK" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Läs fler omdömen på Google</a>
         </div> */}
      </section>
      <SectionService />
      <HomepageTestimonials />
      <HomepageFAQ />
      



      {/* --- END FAQ & CTA Placeholder --- */}

    </div>
  );
}