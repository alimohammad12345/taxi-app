// components/footer.js (Modified for Taxi Dalarna Borlänge)
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  // FaPhoneSquareAlt, // Maybe remove if only one main number shown here
  FaEnvelope, // Using Envelope instead of Voicemail icon
  FaCalendarWeek,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Import Link
// IMPORTANT: Replace with your actual logo path
import Logo from "../public/logo.png"; // Assumed logo path

const Footer = () => { // Changed component name to start with uppercase
  return (
    <div>
      {/* Top Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16">
        <div className="container mx-auto flex flex-col space-y-16 md:space-y-24 ">
          {/* Info Blocks */}
          <div className="grid lg:grid-cols-3 gap-10 md:gap-20">
             {/* Address Block */}
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-10 h-10 text-amber-600 p-1 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase">Adress</p>
                 {/* UPDATE with correct address */}
                <p className="text-gray-600 font-medium">
                  Järvstigen 1, 784 50 Borlänge
                </p>
              </div>
            </div>
             {/* Phone Block */}
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-10 h-10 text-amber-600 p-1 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase">Telefon (Bokning)</p>
            
                <p className="text-gray-600 font-medium">
                  <a href="tel:024317900" className="hover:text-amber-700">0243-179 00</a>
                </p>
              </div>
            </div>
             {/* Hours Block */}
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-10 h-10 text-amber-600 p-1 flex-shrink-0" />
              <div className="space-y-1">
  <p className="text-sm text-gray-500 uppercase">Öppettider (Växel)</p>
  {/* --- INSERT YOUR CHOSEN 24/7 OPTION HERE --- */}
  <p className="text-gray-600 font-medium">
    Bemannad Dygnet Runt
  </p>
  {/* --- END EXAMPLE --- */}
  {/* You might not need the line below if the dispatch is 24/7 */}
  {/* <p className="text-xs text-gray-500">Taxi körs dygnet runt vid förbokning.</p> */}
</div>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Column 1: Logo & About */}
            <div className="col-span-1 space-y-6">
              {/* UPDATE Logo path, width, height, and alt text */}
              <Link href="/">
                <a>
                  <Image src={Logo} alt="Taxi Dalarna Borlänge Logotyp" width={180} height={40} />
                </a>
              </Link>
               {/* Keep or adapt this description */}
              <p className="text-gray-500 text-sm">
                Taxi Dalarna Borlänge – ditt lokala taxibolag för trygga och pålitliga resor i Borlänge och hela Dalarna. Vi fokuserar på service och punktlighet.
              </p>
            </div>
            {/* Column 2: Services */}
            <div className="col-span-1 space-y-6">
              <div className="flex flex-col space-y-1">
                <p className="text-gray-600 font-medium uppercase">Våra Tjänster</p>
                <p className="border-solid border border-amber-500 w-12"></p>
              </div>
              <div className="flex flex-col space-y-2 text-sm">
                {/* --- NEW Service Links --- */}
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <Link href="/vara-tjanster/flygtaxi-borlange"><a className="text-gray-500 hover:text-amber-600">Flygtaxi</a></Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <Link href="/vara-tjanster/tagtaxi-borlange"><a className="text-gray-500 hover:text-amber-600">Tågtaxi</a></Link>
                </div>
                 <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <Link href="/vara-tjanster/foretagstaxi-borlange"><a className="text-gray-500 hover:text-amber-600">Företagstaxi</a></Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <Link href="/vara-tjanster/seniortaxi-borlange"><a className="text-gray-500 hover:text-amber-600">Seniortaxi</a></Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                   <Link href="/vara-tjanster/taxi-romme-alpin"><a className="text-gray-500 hover:text-amber-600">Taxi till Romme Alpin</a></Link>
                </div>
                 <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                   <Link href="/vara-tjanster/bud-paket-borlange"><a className="text-gray-500 hover:text-amber-600">Bud & Paket</a></Link>
                </div>
                {/* Add more links as needed */}
              </div>
            </div>
             {/* Column 3: Contact Details */}
            <div className="col-span-1 space-y-6">
               <div className="flex flex-col space-y-1">
                 <p className="text-gray-600 font-medium uppercase">Kontaktuppgifter</p>
                 <p className="border-solid border border-amber-500 w-12"></p>
               </div>
               

              <div className="flex flex-col space-y-3 text-sm">
                {/* --- NEW Contact Details --- */}
                <div className="flex flex-row items-start space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                   {/* UPDATE with correct address */}
                   <Link href="/kontakt">
     <a className="text-gray-500 hover:text-amber-600">
       Järvstigen 1<br/>784 50 Borlänge
     </a>
   </Link>
                  
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  {/* UPDATE with correct phone number */}
                  <p className="text-gray-500 hover:text-amber-600"><a href="tel:024317900">0243-179 00</a></p>
                </div>
                {/* Remove second phone if not applicable */}
                {/* <div className="flex flex-row items-center space-x-3">
                  <FaPhoneSquareAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <p className="text-gray-500 hover:text-amber-600"><a href="tel:0243XXXXXX">Ev. Kontorstelefon</a></p>
                </div> */}
                <div className="flex flex-row items-center space-x-3">
                   <FaEnvelope className="w-4 h-4 text-gray-500 flex-shrink-0" /> {/* Using Envelope icon */}
                    {/* UPDATE with correct email */}
                  <p className="text-gray-500 hover:text-amber-600"><a href="mailto:taxi17900@gmail.com"> taxi17900@gmail.com</a></p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <FaCalendarWeek className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  {/* UPDATE with actual phone hours */}
                  <p className="text-gray-500">
    Växel: Öppet Dygnet Runt
  </p>
                </div>
                
              </div>
            </div>
            {/* Column 4: Subscribe (Optional - Remove if not used) */}
            <div className="col-span-1 space-y-6">
              {/* Remove this whole div if you don't have a newsletter */}
              <div className="flex flex-col space-y-1">
                <p className="text-gray-600 font-medium uppercase">Nyhetsbrev</p>
                <p className="border-solid border border-amber-500 w-12"></p>
              </div>
              <form className="flex flex-col space-y-3"> {/* Added form tag */}
                <label htmlFor="footer-email" className="sr-only">E-post för nyhetsbrev</label> {/* Added label */}
                <input
                  type="email"
                  id="footer-email"
                  name="email" // Added name attribute
                  className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
                  placeholder="Din e-postadress"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Prenumerera
                </button>
                <p className="text-xs text-gray-400">Få nyheter och lokala erbjudanden (sällan).</p>
              </form>
            </div> {/* End Optional Subscribe Div */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-gray-800 text-gray-400 text-xs">
         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 space-y-2 md:space-y-0">
            {/* Copyright */}
            {/* UPDATE Copyright text */}
            <p>© {new Date().getFullYear()} Taxi Dalarna Borlänge. Alla rättigheter förbehållna.</p>
            {/* Social Icons (Optional) */}
      {/* --- Utility Links --- */}
      <div className="flex flex-row space-x-4">
         <Link href="/integritetspolicy-cookies">
           <a className="hover:text-white hover:underline">Integritetspolicy & Cookies</a>
         </Link>
         {/* Add other utility links here if needed, e.g., Terms */}
      </div>
            <div className="flex flex-row space-x-4">
              {<a href="https://www.facebook.com/profile.php?id=61556301210089" aria-label="Facebook"><FaFacebook className="w-4 h-4 hover:text-white" /></a>}
            </div> {/* End Optional Social Div */}
        </div>
      </div>
    </div>
  );
};

export default Footer; // Export with uppercase name