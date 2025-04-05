// pages/integritetspolicy-cookies.js (Modified with info from English text)

import Head from 'next/head';
import Link from 'next/link';
import Meta from '../components/meta'; // Adjust path if needed

export default function IntegritetspolicyCookies() {
  // --- Page Specific Metadata ---
  const pageTitle = "Integritetspolicy & Cookies | Taxi Dalarna Borlänge";
  const pageDescription = "Läs om hur Taxi Dalarna Borlänge hanterar personuppgifter (GDPR) och använder cookies på https://taxidalaborlange.se/"; // Updated URL example
  const pageKeywords = "Integritetspolicy Taxi Dalarna Borlänge, Cookies Taxi Borlänge, GDPR Taxi Borlänge, Personuppgifter taxi";

  // --- Schema Data ---
  const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage", // Or PrivacyPolicyPage
      "name": "Integritetspolicy och Information om Cookies - Taxi Dalarna Borlänge",
      "url": "https://taxidalaborlange.se/integritetspolicy-cookies", // <<<--- REPLACE WITH YOUR ACTUAL URL
      "description": "Detaljerad information om hur Taxi Dalarna Borlänge behandlar personuppgifter och använder cookies.",
       "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://taxidalaborlange.se/" }, // <<<--- REPLACE URL
          { "@type": "ListItem", "position": 2, "name": "Integritetspolicy & Cookies" }
        ]
      }
  };

  // --- !!! IMPORTANT LEGAL DISCLAIMER !!! ---

  // --- Variables for easy update ---
  const companyName = "Taxi Dalarna Borlänge"; // Use consistent name
  const websiteUrl = "https://taxidalaborlange.se/"; // <<<--- REPLACE WITH YOUR ACTUAL URL

  const orgAddress = "Järvstigen 1, 784 50 Borlänge"; // <<< REPLACE/VERIFY
  const contactEmail = "taxi17900@gmail.com"; // <<< REPLACE/VERIFY
  const contactPhone = "0243-179 00"; // <<< REPLACE/VERIFY
  const lastUpdated = "5/4/2025"; // <<< REPLACE

  return (
    <div>
      <Meta title={pageTitle} description={pageDescription} keywords={pageKeywords} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="container mx-auto px-4 py-12 md:py-20">
         <article className="prose lg:prose-lg max-w-3xl mx-auto">
            <h1>Integritetspolicy och Information om Cookies för {companyName}</h1>

         

            <p>På {companyName}, tillgänglig från {websiteUrl}, är integriteten för våra besökare en av våra huvudprioriteringar. Detta dokument beskriver typer av information som samlas in och registreras av {companyName} och hur vi använder den.</p>
            <p>Om du har ytterligare frågor eller behöver mer information om vår integritetspolicy, tveka inte att <Link href="/kontakt"><a>kontakta oss</a></Link>.</p>
            <p>Denna integritetspolicy gäller endast för våra onlineaktiviteter och är giltig för besökare på vår webbplats med avseende på den information som de delar och/eller samlar in hos {companyName}. Denna policy gäller inte information som samlas in offline eller via andra kanaler än denna webbplats.</p>

            <h2>Samtycke</h2>
            <p>Genom att använda vår webbplats samtycker du härmed till vår integritetspolicy och godkänner dess villkor.</p>

            <h2>Personuppgiftsansvarig</h2>
            <p>{companyName} , {orgAddress}, är personuppgiftsansvarig för behandlingen av dina personuppgifter.</p>

            <h2>Vilka uppgifter samlar vi in?</h2>
            <p>De personuppgifter du ombeds lämna, och skälen till varför du ombeds lämna dem, kommer att klargöras för dig när vi ber dig att lämna dina personuppgifter (t.ex. vid bokning).</p>
            <p>Om du kontaktar oss direkt (via telefon, e-post eller formulär) kan vi få ytterligare information om dig såsom ditt namn, e-postadress, telefonnummer, innehållet i meddelandet och/eller bilagor du skickar till oss, samt annan information du väljer att ge.</p>
            <p>Vid bokning samlar vi in nödvändig information för att utföra resan, såsom upphämtnings- och destinationsadress, tidpunkt och antal passagerare.</p>
            {/* Removed Account Registration paragraph - assuming not applicable */}
            <p>Vi samlar även in information automatiskt via loggfiler och cookies (se nedan).</p>

            <h2>Hur och varför använder vi dina uppgifter (Ändamål och Laglig Grund)?</h2>
            <p>Vi använder informationen vi samlar in på olika sätt, inklusive för att:</p>
            <ul>
              <li>Tillhandahålla, driva och underhålla vår webbplats (Berättigat intresse).</li>
              <li>Hantera och utföra dina bokningar och taxiresor (Avtal).</li>
              <li>Förbättra, anpassa och utöka vår webbplats baserat på användningsmönster (Berättigat intresse, Samtycke för icke-nödvändiga cookies).</li>
              <li>Förstå och analysera hur du använder vår webbplats (Berättigat intresse, Samtycke för icke-nödvändiga cookies).</li>
              <li>Utveckla nya produkter, tjänster, funktioner (Berättigat intresse).</li>
              <li>Kommunicera med dig, direkt eller via partners, för kundservice, för att ge dig uppdateringar och annan information relaterad till webbplatsen/din resa (Avtal, Berättigat intresse).</li>
              <li>Skicka e-post relaterad till din bokning eller service (Avtal, Berättigat intresse).</li>
              {/* Marketing requires explicit consent - Add if applicable and how consent is obtained
              <li>Skicka marknadsföringsutskick via e-post (endast med ditt Samtycke).</li>
              */}
              <li>Hitta och förebygga bedrägerier (Berättigat intresse, Rättslig förpliktelse).</li>
              <li>Uppfylla lagkrav, t.ex. bokföring (Rättslig förpliktelse).</li>
            </ul>

            <h2>Loggfiler</h2>
            <p>{companyName} följer en standardprocedur för användning av loggfiler. Dessa filer loggar besökare när de besöker webbplatser. Alla webbhotell gör detta som en del av tjänstens analys. Informationen som samlas in av loggfiler inkluderar IP-adresser (Internet Protocol), webbläsartyp, internetleverantör (ISP), datum- och tidsstämpel, hänvisnings-/utgångssidor och eventuellt antal klick. Dessa är inte kopplade till någon personligt identifierbar information. Syftet med informationen är att analysera trender, administrera webbplatsen, spåra användares rörelser på webbplatsen och samla demografisk information.</p>

            <h2>Cookies och Web Beacons</h2>
            <p>Precis som alla andra webbplatser använder {companyName} "cookies". Dessa cookies används för att lagra information inklusive besökares preferenser och de sidor på webbplatsen som besökaren besökte. Informationen används för att optimera användarupplevelsen genom att anpassa innehållet på vår webbplats baserat på besökarens webbläsartyp och/eller annan information.</p>
            {/* REMOVED Google DART Cookie & Advertising Partner sections - Assuming NO 3rd party ads */}

            <h3>Hantera Cookies</h3>
            <p>Du kan välja att inaktivera cookies via dina individuella webbläsaralternativ. För mer detaljerad information om cookiehantering med specifika webbläsare, besök respektive webbläsares webbplats.</p>
            <p>Du kan också hantera ditt samtycke för icke-nödvändiga cookies via [Länk till er Cookie Consent Banner/Inställningar – MÅSTE IMPLEMENTERAS].</p>

            {/* REMOVED Third-Party Privacy Policy section - linked to ads */}
            {/* REMOVED CCPA section - California specific */}

            <h2>Dina rättigheter enligt GDPR (Dataskyddsförordningen)</h2>
            <p>Vi vill säkerställa att du är fullt medveten om alla dina dataskyddsrättigheter. Varje användare har rätt till följande:</p>
            <ul>
              <li><strong>Rätt till tillgång:</strong> Du har rätt att begära kopior av dina personuppgifter. Vi kan ta ut en liten administrativ avgift för detta.</li>
              <li><strong>Rätt till rättelse:</strong> Du har rätt att begära att vi korrigerar all information som du anser är felaktig. Du har också rätt att begära att vi kompletterar information som du anser är ofullständig.</li>
              <li><strong>Rätt till radering ("rätten att bli bortglömd"):</strong> Du har rätt att begära att vi raderar dina personuppgifter, under vissa förutsättningar.</li>
              <li><strong>Rätt till begränsning av behandling:</strong> Du har rätt att begära att vi begränsar behandlingen av dina personuppgifter, under vissa förutsättningar.</li>
              <li><strong>Rätt att invända mot behandling:</strong> Du har rätt att invända mot vår behandling av dina personuppgifter, under vissa förutsättningar (särskilt vid behandling baserad på berättigat intresse).</li>
              <li><strong>Rätt till dataportabilitet:</strong> Du har rätt att begära att vi överför de uppgifter vi har samlat in till en annan organisation, eller direkt till dig, under vissa förutsättningar.</li>
            </ul>
            <p>Om du gör en begäran har vi en månad på oss att svara dig. Om du vill utöva någon av dessa rättigheter, vänligen kontakta oss.</p>
            <p>Du har också rätt att lämna in klagomål till den svenska tillsynsmyndigheten, <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">Integritetsskyddsmyndigheten (IMY)</a>.</p>


             <h2>Barns information</h2>
            <p>En annan del av vår prioritet är att lägga till skydd för barn när de använder internet. Vi uppmuntrar föräldrar och vårdnadshavare att observera, delta i och/eller övervaka och vägleda deras onlineaktivitet.</p>
            <p>{companyName} samlar inte medvetet in någon personligt identifierbar information från barn under 13 år [eller ange 16 år om det är er policy/krav]. Om du tror att ditt barn har lämnat denna typ av information på vår webbplats, uppmanar vi dig starkt att kontakta oss omedelbart och vi kommer att göra vårt bästa för att snabbt ta bort sådan information från våra register.</p>

            <h2>Hur länge sparar vi dina uppgifter?</h2>
            <p>Vi sparar dina personuppgifter endast så länge det är nödvändigt för att uppfylla de ändamål för vilka de samlades in, samt för att uppfylla lagkrav (t.ex. sparas bokföringsmaterial i minst 7 år enligt bokföringslagen).</p>

            <h2>Vem delar vi dina uppgifter med?</h2>
            <p>Vi kan dela dina uppgifter med betrodda tredje parter för att kunna tillhandahålla våra tjänster, såsom:</p>
            <ul>
              <li>Leverantörer av IT-system (t.ex. bokningssystem, webbhotell).</li>
              <li>Betalningsleverantörer (för kort- och Swish-betalningar).</li>
              {/* Add others if applicable, e.g., accounting firms */}
            </ul>
            <p>Vi säkerställer att alla parter vi delar data med upprätthåller adekvat skyddsnivå, t.ex. genom personuppgiftsbiträdesavtal. Vi kan också behöva dela uppgifter med myndigheter om vi är skyldiga enligt lag. Vi säljer aldrig dina personuppgifter.</p>

            <h2>Ändringar i denna Integritetspolicy</h2>
            <p>Vi kan uppdatera vår integritetspolicy från tid till annan. Därför rekommenderar vi att du granskar denna sida regelbundet för eventuella ändringar. Vi kommer att meddela dig om eventuella ändringar genom att publicera den nya integritetspolicyn på denna sida. Dessa ändringar träder i kraft omedelbart efter att de har publicerats på denna sida.</p>
            <p>Senast uppdaterad: {lastUpdated}</p>

            <h2>Kontakta oss</h2>
            <p>Om du har några frågor eller förslag angående vår integritetspolicy, tveka inte att kontakta oss:</p>
             <address className="not-italic">
              {companyName}<br />
              {orgAddress}<br />
              E-post: <a href={`mailto:${contactEmail}`}>{contactEmail}</a><br />
              Telefon: <a href={`tel:${contactPhone.replace(/-/g, '')}`}>{contactPhone}</a>
            </address>

            {/* --- END OF POLICY CONTENT --- */}
         </article>
      </div>
    </div>
  );
}