import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
