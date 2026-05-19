import { About } from "@/components/About";
import { Competences } from "@/components/Competences";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HorsClavier } from "@/components/HorsClavier";
import { Parcours } from "@/components/Parcours";
import { SectionBreak } from "@/components/SectionBreak";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <SectionBreak />
        <SelectedWork />
        <SectionBreak />
        <Parcours />
        <SectionBreak />
        <Competences />
        <SectionBreak />
        <HorsClavier />
        <SectionBreak />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
