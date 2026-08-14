"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Remonter en haut de la page"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-bg-elev text-base text-text transition-all duration-300 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent md:bottom-6 md:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp size={18} strokeWidth={2} />
    </button>
  );
}
