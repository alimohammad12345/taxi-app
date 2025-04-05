// components/HomepageFAQ.js (New File)

import React from 'react';
import Link from 'next/link';

const HomepageFAQ = () => {

  // --- FAQ Data ---
  const faqs = [
    {
      question: "Hur bokar jag en taxi?",
      answer: 'Det snabbaste sättet är att ringa oss direkt på <a href="tel:024317900" class="text-amber-600 hover:underline font-medium">0243-179 00</a>. Du kan också <a href="/boka-online" class="text-amber-600 hover:underline font-medium">boka online</a> via vårt formulär här på hemsidan. Förbokning rekommenderas, särskilt för flyg-, tåg- och längre resor.'
    },
    {
      question: "Erbjuder ni fast pris?",
      answer: 'Ja, vi erbjuder fasta priser på flera populära sträckor, exempelvis mellan Borlänge och Falun (599 kr*), till Romme Alpin (499 kr*), samt till/från Dala Airport och Arlanda. Se vår <a href="/priser" class="text-amber-600 hover:underline font-medium">prissida</a> eller ring oss på <a href="tel:024317900" class="text-amber-600 hover:underline font-medium">0243-179 00</a> för prisuppgift.'
    },
    {
      question: "Kan jag betala med kort i bilen?",
      answer: 'Absolut! Vi accepterar de flesta vanliga kredit- och betalkort direkt i bilen. Vi tar även Swish. Företagskunder kan ansöka om fakturabetalning.'
    }
    // Add more FAQs if needed
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 px-4" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-3xl">
        <h2 id="faq-heading" className="text-3xl font-light text-center mb-10 md:mb-12 text-gray-700">
          Vanliga Frågor om Taxi i Borlänge
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            // Using <details> for simple, JS-free accordion
            <details key={index} className="bg-white p-4 rounded shadow group" open={index === 0}> {/* Optionally open the first one */}
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-800 hover:text-amber-600">
                <span>{faq.question}</span>
                <span className="text-amber-600 group-open:rotate-180 transform transition-transform duration-300 text-xl">
                  {/* Using simple +/- indicator */}
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">-</span>
                </span>
              </summary>
              {/* Use dangerouslySetInnerHTML because answer contains HTML links */}
              <div
                className="mt-3 text-gray-700 text-sm md:text-base prose prose-sm max-w-none prose-a:text-amber-600 hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </details>
          ))}
        </div>

        {/* --- Final CTA Section (Included here for flow) --- */}
        <div className="text-center mt-16">
           <h3 className="text-2xl font-light mb-4 text-gray-800">Redo att Boka Din Nästa Resa?</h3>
           <p className="mb-6 text-gray-600">
             Upplev skillnaden med Taxi Dalarna Borlänge. Tryggt, bekvämt och alltid i tid.
           </p>
           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
             <Link href="/boka-online">
               <a className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-3xl text-base px-8 py-3 text-center shadow transition duration-300 ease-in-out transform hover:-translate-y-1">
                 Boka Taxi Online Nu
               </a>
             </Link>
             <a href="tel:024317900" className="inline-block text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-base px-8 py-3 text-center shadow transition duration-300 ease-in-out transform hover:-translate-y-1">
               Ring Oss: 0243-179 00
             </a>
          </div>
           <p className="mt-8">
            <Link href="/kontakt">
              <a className="text-sm text-gray-600 hover:underline hover:text-amber-600">Har du fler frågor? Kontakta oss!</a>
            </Link>
          </p>
           <p className="text-xs text-gray-500 mt-4">
            <small>*Priser gäller vid publicering och kan ändras. Se <Link href="/priser"><a className="underline hover:text-amber-600">prissidan</a></Link> för detaljer.</small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;