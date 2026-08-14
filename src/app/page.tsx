import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { SiteHeader } from "@/components/SiteHeader";
import { Travaux } from "@/components/Travaux";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <Services />
        <Travaux />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
