import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/content/lang";
import { Nav } from "@/components/site/Nav";
import {
  About,
  Contact,
  Faq,
  Footer,
  Hero,
  HowItWorks,
  MobileBar,
  ServiceArea,
  Services,
  Testimonials,
  Transparency,
} from "@/components/site/Sections";

const title = "WelcomeDenia — Cuidado de propiedades en Dénia y la Marina Alta";
const description =
  "Cuidado de casas y asistencia local en Dénia, Marina Alta, Calpe, Altea y Benidorm. Revisiones, llaves, mantenimiento y ayuda práctica, con comunicación clara en español, inglés y alemán.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "WelcomeDenia — Property Care & Local Assistance",
          description,
          areaServed: ["Dénia", "Marina Alta", "Calpe", "Altea", "Benidorm"],
          knowsLanguage: ["es", "en", "de"],
          address: { "@type": "PostalAddress", addressLocality: "Dénia", addressCountry: "ES" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Transparency />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </LangProvider>
  );
}
