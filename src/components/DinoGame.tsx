"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "idle" | "running" | "over";

const CANVAS_H = 150;
const GROUND_OFFSET = 26;
const GRAVITY = 0.62;
const JUMP_V = -10.6;
const DINO_W = 22;
const DINO_H = 26;
const DINO_X = 48;

type Obstacle = { x: number; w: number; h: number };
type Colors = { ink: string; accent: string; rule: string; faint: string };

function drawDino(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frame: number,
  running: boolean,
) {
  // Blocky T-rex silhouette (monochrome)
  ctx.fillRect(x - 5, y + 12, 6, 4); // tail
  ctx.fillRect(x, y + 8, 14, 12); // body
  ctx.fillRect(x + 11, y, 11, 11); // head
  // running leg animation (idle = static stance)
  const swap = running && Math.floor(frame / 6) % 2 === 0;
  ctx.fillRect(x + 3, y + 20, 3, swap ? 6 : 3);
  ctx.fillRect(x + 10, y + 20, 3, swap ? 3 : 6);
}

export function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const phaseRef = useRef<Phase>("idle");
  const game = useRef({
    vy: 0,
    dinoTop: 0,
    onGround: true,
    obstacles: [] as Obstacle[],
    speed: 5,
    frame: 0,
    nextSpawn: 50,
    colors: {
      ink: "#222",
      accent: "#b5502f",
      rule: "#ddd",
      faint: "#999",
    } as Colors,
  });

  const start = useCallback(() => {
    const g = game.current;
    g.vy = 0;
    g.onGround = true;
    g.obstacles = [];
    g.speed = 5;
    g.frame = 0;
    g.nextSpawn = 50;
    setScore(0);
    phaseRef.current = "running";
    setPhase("running");
  }, []);

  const jump = useCallback(() => {
    const g = game.current;
    if (phaseRef.current !== "running") {
      start();
      return;
    }
    if (g.onGround) {
      g.vy = JUMP_V;
      g.onGround = false;
    }
  }, [start]);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    // Non-null bindings that survive into rAF / resize closures
    const canvas: HTMLCanvasElement = el;
    const ctx: CanvasRenderingContext2D = context;

    const cs = getComputedStyle(document.documentElement);
    game.current.colors = {
      ink: cs.getPropertyValue("--ink").trim() || "#222",
      accent: cs.getPropertyValue("--accent").trim() || "#b5502f",
      rule: cs.getPropertyValue("--rule").trim() || "#ddd",
      faint: cs.getPropertyValue("--ink-faint").trim() || "#999",
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const groundY = CANVAS_H - GROUND_OFFSET;
    game.current.dinoTop = groundY - DINO_H;

    let width = canvas.clientWidth;
    function resize() {
      width = canvas.clientWidth;
      canvas.width = width * dpr;
      canvas.height = CANVAS_H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    function loop() {
      const g = game.current;
      ctx.clearRect(0, 0, width, CANVAS_H);

      // ground line
      ctx.strokeStyle = g.colors.rule;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, groundY + 0.5);
      ctx.lineTo(width, groundY + 0.5);
      ctx.stroke();

      if (phaseRef.current === "running") {
        g.frame++;
        g.vy += GRAVITY;
        g.dinoTop += g.vy;
        const floor = groundY - DINO_H;
        if (g.dinoTop >= floor) {
          g.dinoTop = floor;
          g.vy = 0;
          g.onGround = true;
        }

        g.nextSpawn--;
        if (g.nextSpawn <= 0) {
          const h = 16 + Math.random() * 18;
          g.obstacles.push({ x: width + 10, w: 7 + Math.random() * 8, h });
          g.nextSpawn = Math.max(38, 92 - g.speed * 3) + Math.random() * 45;
        }
        for (const o of g.obstacles) o.x -= g.speed;
        g.obstacles = g.obstacles.filter((o) => o.x + o.w > -12);
        g.speed += 0.0022;

        if (g.frame % 6 === 0) setScore(Math.floor(g.frame / 6));

        // collision (AABB with small forgiveness margin)
        const m = 3;
        const dl = DINO_X + m;
        const dr = DINO_X + DINO_W - m;
        const dt = g.dinoTop + m;
        const db = g.dinoTop + DINO_H;
        for (const o of g.obstacles) {
          if (
            dr > o.x &&
            dl < o.x + o.w &&
            db > groundY - o.h &&
            dt < groundY
          ) {
            phaseRef.current = "over";
            setPhase("over");
            const final = Math.floor(g.frame / 6);
            setBest((b) => Math.max(b, final));
            break;
          }
        }
      }

      // obstacles (cactus)
      ctx.fillStyle = g.colors.ink;
      for (const o of g.obstacles) {
        ctx.fillRect(o.x, groundY - o.h, o.w, o.h);
        // little arm
        ctx.fillRect(o.x - 2, groundY - o.h * 0.7, 2, o.h * 0.25);
      }

      // dino
      ctx.fillStyle = g.colors.ink;
      drawDino(ctx, DINO_X, g.dinoTop, g.frame, phaseRef.current === "running");

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.code === "Space" || e.code === "ArrowUp") {
      e.preventDefault();
      jump();
    }
  }

  return (
    <div className="px-6 md:px-12">
      <div className="mx-auto max-w-6xl py-6">
        <div
          role="button"
          tabIndex={0}
          aria-label="Mini-jeu : appuyez sur espace ou la flèche haut pour sauter par-dessus les obstacles"
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement).focus();
            jump();
          }}
          className="group relative block w-full cursor-pointer select-none rounded-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        >
          <canvas
            ref={canvasRef}
            className="block h-[150px] w-full touch-none"
          />

          {/* Idle / over overlays */}
          {phase !== "running" && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute md:text-xs">
                {phase === "idle" ? (
                  <>
                    <span className="text-accent">Hors ligne</span> — espace
                    ou tap pour jouer
                  </>
                ) : (
                  <>
                    <span className="text-accent">Game over</span> · {score} —
                    espace pour rejouer
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Caption row */}
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint md:text-[11px]">
          <span>Le dino de Chrome, version maison</span>
          <span>
            Score {String(score).padStart(3, "0")} · Best{" "}
            {String(best).padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
