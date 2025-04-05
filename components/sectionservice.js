// components/sectionservice.js (Modified for Taxi Dalarna Borlänge - USPs)

// Import necessary icons
import {
  FaClock,      // For Punktlighet (Punctuality)
  FaShieldAlt,  // For Säkerhet (Safety)
  FaChair,      // For Komfort (Comfort)
  FaMapSigns,   // For Lokal Expertis (Local Expertise)
  FaCalendarCheck, // For Enkel Bokning (Easy Booking) or FaMobileAlt
  FaTags,       // For Fasta Priser (Fixed Prices)
  FaPhoneVolume // For Tillgänglighet (Availability) or FaCheckCircle
} from "react-icons/fa";

// Renaming component for clarity (optional)
const WhyChooseUs = () => {
  // Array for USPs to make mapping easier (optional structure)
  const usps = [
    {
      icon: FaClock,
      title: "Punktlighet & Pålitlighet",
      description: "Vi är stolta över att vara i tid, varje gång du reser med oss."
    },
    {
      icon: FaShieldAlt,
      title: "Säkerhet Först",
      description: "Erfarna, lokalkunniga förare och välunderhållna, säkra bilar."
    },
    {
      icon: FaChair,
      title: "Komfort",
      description: "Rena, fräscha och moderna bilar för en behaglig resa."
    },
    {
      icon: FaMapSigns,
      title: "Lokal Expertis",
      description: "Vi kan Borlänge och Dalarna – vi hittar alltid bästa vägen."
    },
    {
      icon: FaCalendarCheck, // Or FaMobileAlt
      title: "Enkel Bokning",
      description: "Boka enkelt via telefon 0243-179 00 eller online när det passar dig."
    },
    {
      icon: FaTags,
      title: "Fasta Priser",
      description: "Trygghet med fasta priser till populära destinationer som Falun, Romme & flygplatser."
    },
    {
      icon: FaPhoneVolume, // Or FaCheckCircle
      title: "Tillgänglighet",
      description: "Vi kör när du behöver oss. Förboka gärna för garanterad service."
    }
  ];

  return (
    // Section container - assuming heading is added in pages/index.js
    <div className="container mx-auto py-16 md:py-20 px-4">
      {/* Heading could be here or in pages/index.js */}
      {/* <h2 className="text-3xl md:text-4xl font-light text-center text-gray-700 mb-12">Varför Välja Taxi Dalarna Borlänge?</h2> */}

      {/* Grid for USP items - using 3 columns on large screens, 2 on medium, 1 on small */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {usps.map((usp, index) => {
          const IconComponent = usp.icon; // Get the icon component
          return (
            <div key={index} className="flex flex-col items-center text-center space-y-3 p-4">
              {/* Icon */}
              <div className="p-3 bg-amber-100 rounded-full mb-2"> {/* Subtle background for icon */}
                <IconComponent className="w-10 h-10 text-amber-600" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-700">{usp.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{usp.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Exporting with the new name (or keep Service)
export default WhyChooseUs;