// components/sectiontwohomepage.js (Modified for Taxi Dalarna Borlänge - Service Highlights)
import Link from 'next/link'; // Import Link

// Renaming component for clarity (optional but good practice)
const ServiceHighlights = () => {
  return (
    <div className="bg-gray-50 w-full py-16 md:py-20"> {/* Adjusted padding */}
      <div className="container mx-auto px-4 flex flex-col space-y-10 md:space-y-12 items-center justify-center">
        {/* Heading */}
        <div className="text-center space-y-2">
          {/* Optional Sub-heading */}
          {/* <p className="text-base font-medium text-amber-600 uppercase tracking-wider">VÅRA TJÄNSTER</p> */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-700">
            Våra Populäraste Taxitjänster {/* Updated Heading */}
          </h2>
        </div>

        {/* Grid - Simplified to 4 columns for key services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl">

          {/* Service Block 1: Flygtaxi */}
          <Link href="/vara-tjanster/flygtaxi-borlange">  
            <a className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="relative bg-no-repeat bg-cover bg-center h-64"
                // IMPORTANT: Replace with actual image URL for Flygtaxi
                style={{ backgroundImage: `url(/img02.jpg)` }}
                aria-label="Flygtaxi"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end justify-start p-6">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    Flygtaxi
                  </h3>
                </div>
              </div>
            </a>
          </Link>

          {/* Service Block 2: Tågtaxi */}
          <Link href="/vara-tjanster/tagtaxi-borlange">
            <a className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="relative bg-no-repeat bg-cover bg-center h-64"
                 // IMPORTANT: Replace with actual image URL for Tågtaxi
                style={{ backgroundImage: `url(/img04.jpg)` }}
                aria-label="Tågtaxi"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end justify-start p-6">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    Tågtaxi
                  </h3>
                </div>
              </div>
            </a>
          </Link>

          {/* Service Block 3: Företagstaxi */}
          <Link href="/vara-tjanster/foretagstaxi-borlange">
            <a className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="relative bg-no-repeat bg-cover bg-center h-64"
                 // IMPORTANT: Replace with actual image URL for Företagstaxi
                style={{ backgroundImage: `url(/img06.jpg)` }}
                aria-label="Företagstaxi"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end justify-start p-6">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    Företagstaxi
                  </h3>
                </div>
              </div>
            </a>
          </Link>

          {/* Service Block 4: Taxi till Romme Alpin */}
          <Link href="/vara-tjanster/taxi-romme-alpin">
            <a className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="relative bg-no-repeat bg-cover bg-center h-64"
                 // IMPORTANT: Replace with actual image URL for Romme Alpin
                style={{ backgroundImage: `url(/img01.jpg)` }}
                aria-label="Taxi till Romme Alpin"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end justify-start p-6">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    Taxi till Romme Alpin
                  </h3>
                </div>
              </div>
            </a>
          </Link>

        </div>

        {/* CTA Button - Linking to main services page */}
        <Link href="/vara-tjanster">
          <a className="inline-block text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium rounded-3xl text-base px-8 py-3 text-center shadow transition duration-300 ease-in-out transform hover:-translate-y-1">
            Se Alla Våra Tjänster
          </a>
        </Link>
      </div>
    </div>
  );
};

// Exporting with the new name (or keep ContentTwo if preferred)
export default ServiceHighlights;