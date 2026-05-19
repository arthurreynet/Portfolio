import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Parcours } from "@/components/Parcours";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
      <Parcours />
    </main>
  );
}
