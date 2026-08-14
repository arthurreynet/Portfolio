"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MAX_DEG = 9;

/**
 * Capture du projet phare dans un chrome de navigateur, inclinée vers le
 * curseur. L'effet ne s'active que sur pointeur fin avec survol réel, et
 * jamais sous prefers-reduced-motion.
 */
export function TiltFrame() {
  const frameRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf: number | null = null;

    function apply() {
      if (!frame) return;
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      frame.style.transform = `perspective(1100px) rotateX(${currentY.toFixed(
        2,
      )}deg) rotateY(${currentX.toFixed(2)}deg)`;

      if (
        Math.abs(targetX - currentX) > 0.04 ||
        Math.abs(targetY - currentY) > 0.04
      ) {
        raf = requestAnimationFrame(apply);
      } else {
        raf = null;
      }
    }

    function kick() {
      if (raf === null) raf = requestAnimationFrame(apply);
    }

    function onMove(event: PointerEvent) {
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2 * MAX_DEG;
      targetY = -((event.clientY - rect.top) / rect.height - 0.5) * 2 * MAX_DEG;
      kick();
    }

    function onLeave() {
      targetX = 0;
      targetY = 0;
      kick();
    }

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);

    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative flex justify-center">
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-[4%] -inset-y-[6%] bg-[radial-gradient(ellipse_at_center,var(--halo)_0%,transparent_66%)]"
      />
      <figure
        ref={frameRef}
        className="relative w-full origin-center overflow-hidden rounded-card border border-white/8 bg-[#12161A] shadow-[0_32px_70px_-28px_rgba(0,0,0,0.65),0_6px_20px_-10px_rgba(0,0,0,0.55)] transition-shadow will-change-transform hover:shadow-[0_42px_90px_-28px_rgba(0,0,0,0.7)]"
      >
        <div className="flex items-center gap-[7px] border-b border-white/6 bg-[#171C21] px-3.5 py-[11px]">
          <span aria-hidden className="size-2.5 rounded-full bg-[#2C333A]" />
          <span aria-hidden className="size-2.5 rounded-full bg-[#2C333A]" />
          <span aria-hidden className="size-2.5 rounded-full bg-[#2C333A]" />
          <span className="ml-3 rounded-md bg-[#11151A] px-3 py-1 text-xs text-[#6B747D]">
            portail · commandes
          </span>
        </div>
        <Image
          src="/projets/portail-client.webp"
          alt="Interface du portail client migré — écran des commandes (données de test, marques masquées)"
          width={1400}
          height={669}
          sizes="(max-width: 1024px) 100vw, 640px"
          className="block h-auto w-full"
          priority={false}
        />
      </figure>
    </div>
  );
}
