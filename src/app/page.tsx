import { About } from "@/components/About";
import { Competences } from "@/components/Competences";
import { Hero } from "@/components/Hero";
import { HorsClavier } from "@/components/HorsClavier";
import { Parcours } from "@/components/Parcours";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
      <Parcours />
      <Competences />
      <HorsClavier />
    </main>
  );
}
