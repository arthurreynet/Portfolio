import { About } from "@/components/About";
import { Competences } from "@/components/Competences";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Parcours } from "@/components/Parcours";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <main id="contenu">
        <Hero />
        <About />
        <SelectedWork />
        <Parcours />
        <Competences />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
