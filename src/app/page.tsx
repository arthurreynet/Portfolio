import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedWork />
    </main>
  );
}
