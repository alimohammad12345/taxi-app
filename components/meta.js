// components/meta.js (Modified for Taxi Dalarna Borlänge)
import Head from "next/head";

/**
 * Meta component for setting default head tags.
 * Specific pages should override these props for better SEO.
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} keywords - Meta keywords (Less important for Google nowadays)
 */
const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      {/* Standard Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Favicon - Make sure favicon.ico exists in the /public folder */}
      <link rel="icon" href="/favicon.ico" />
      {/* Add other favicon sizes/formats if available */}
      {/* e.g., <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"> */}
      {/* e.g., <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"> */}

      {/* Page Title */}
      <title>{title}</title>

      {/* Open Graph / Facebook Meta Tags (Optional but Recommended) */}
      {/* These should ideally be dynamic based on the page */}
      {<meta property="og:title" content={title} />}
      {<meta property="og:description" content={description} />}
      {<meta property="og:type" content="website" /> }
      {<meta property="og:url" content="https://www.taxidalaborlange.se/" />}
      {<meta property="og:image" content="https://www.taxidalaborlange.se/logo.png" /> }

      {/* Twitter Card Meta Tags (Optional but Recommended) */}
      {/* These should also ideally be dynamic */}
      {<meta name="twitter:card" content="summary_large_image" />}
      {<meta name="twitter:title" content={title} />}
      {<meta name="twitter:description" content={description} />}
      {<meta name="twitter:image" content="https://www.taxidalaborlange.se/logo.png" /> }

      
    </Head>
  );
};

// --- Default Values ---
// These are fallback values. Each page component (e.g., pages/index.js)
// should pass its own specific title, description, and keywords to the <Meta /> component.
Meta.defaultProps = {
  // Default Title: Brand Name | Main Location | Core Service
  title: "Taxi Borlänge | Taxi Dalarna Borlänge AB | Boka Taxi i Dalarna",

  // Default Description: Concise summary of the business and main call to action.
  description: "Taxi Dalarna Borlänge erbjuder pålitliga och bekväma taxiresor i Borlänge med omnejd. Boka dygnet runt via telefon 0243-179 00 eller online.",

  // Default Keywords: Core terms related to the business and location.
  keywords: "taxi, borlänge, taxi dalarna, taxibolag, transport, boka taxi, dalarna, flygtaxi, tågtaxi, företagstaxi",
};

export default Meta;