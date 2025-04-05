// components/HomepageTestimonials.js (New File)

import React from 'react';
// Optional: Import an icon if desired, e.g., FaQuoteLeft
// import { FaQuoteLeft } from 'react-icons/fa';

const HomepageTestimonials = () => {

  // --- Testimonial Data (Replace with real testimonials) ---
  const testimonials = [
    {
      quote: "Alltid trevliga chaufförer och kommer i tid. Bästa taxin i Borlänge!",
      author: "Anna S.", // Or just name/initials
      // Optional: Add location or date if relevant
      // location: "Borlänge"
    },
    {
      quote: "Smidig bokning och skön resa till Arlanda. Tack Taxi Dalarna Borlänge!",
      author: "Lars P.",
      // location: "Affärsresenär"
    },
    {
      // Add a third testimonial if available
      quote: "Pålitlig service till Romme Alpin, och till fast pris! Rekommenderas varmt.",
      author: "Familjen K.",
      // location: "Skidåkare"
    }
  ];

  // If no testimonials, optionally return null or a placeholder
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 text-center">
         <h2 id="testimonials-heading" className="text-3xl font-light mb-10 md:mb-12 text-gray-700">
           Vad Våra Kunder Säger
         </h2>

         {/* Grid for testimonials */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex flex-col">
                {/* Optional Quote Icon */}
                {/* <FaQuoteLeft className="text-amber-500 text-2xl mb-3 opacity-50" /> */}
                <blockquote className="italic text-gray-600 text-base md:text-lg mb-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="mt-auto text-sm text-gray-500 not-italic font-medium">
                   - {testimonial.author} {testimonial.location ? `, ${testimonial.location}` : ''}
                </footer>
              </div>
            ))}
         </div>

         {/* Optional: Link to more reviews */}
         {/* <div className="mt-12">
            <a href="YOUR_GOOGLE_REVIEWS_LINK" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-medium">
              Läs fler omdömen på Google →
            </a>
         </div> */}
      </div>
    </section>
  );
};

export default HomepageTestimonials;