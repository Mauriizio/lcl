"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import type { Release } from "../../lib/types";

type Props = {
  releases: Release[];
  heightClass?: string; // por si quieres variar la altura
};

export default function SingleCarousel({ releases, heightClass = "h-[70svh] min-h-[420px] max-h-[920px]" }: Props) {
  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Accesibilidad: respeta reduce motion
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(!!mq?.matches);
    on();
    mq?.addEventListener?.("change", on);
    return () => mq?.removeEventListener?.("change", on);
  }, []);

  const next = useCallback(() => setI((p) => (p + 1) % releases.length), [releases.length]);
  const prev = useCallback(() => setI((p) => (p - 1 + releases.length) % releases.length), [releases.length]);

  // Teclado: ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const r = releases[i];

  return (
    <section
      className="relative isolate overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Singles"
    >
      <div className={`${heightClass} relative`}>
        {/* Fondo: video/imagen del slide actual */}
        <div className="absolute inset-0 -z-10">
          {!reduced ? (
            <video
              key={r.id} // fuerza reinicio al cambiar de slide
              className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
              poster={r.posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              {r.webmSrc ? <source src={r.webmSrc} type="video/webm" /> : null}
              <source src={r.mp4Src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={r.posterSrc || "/hero-poster.jpg"}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        </div>

        {/* Contenido */}
        <div className="container relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
          <p className="text-sm tracking-widest text-neutral-200/90 uppercase font-crazy">
            New Single
          </p>
          <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-crazy">
            {r.title}
          </h3>

          {/* Botón Play */}
          <div className="mt-8 flex justify-center">
            <Link
              href={r.youtubeUrl}
              aria-label={`Reproducir ${r.title} en YouTube`}
              className="relative inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full 
                         bg-white/10 backdrop-blur-md ring-1 ring-white/20
                         hover:bg-white/20 hover:ring-white/30
                         transition focus-visible:outline-none 
                         focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              target="_blank"
            >
              <span className="absolute inset-0 rounded-full motion-safe:animate-ping motion-safe:bg-white/20" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative h-6 w-6 md:h-8 md:w-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <polygon points="6,4 16,10 6,16" />
              </svg>
            </Link>
          </div>

          {/* Controles (izq/der) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
            <button
              type="button"
              onClick={prev}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full
                         bg-black/40 ring-1 ring-white/20 hover:bg-black/60 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Anterior"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
                <path d="M12.7 15.3a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.4 1.4L9.42 10l3.3 3.3a1 1 0 0 1 0 1.4z"/>
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full
                         bg-black/40 ring-1 ring-white/20 hover:bg-black/60 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Siguiente"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
                <path d="M7.3 4.7a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4L10.58 10 7.3 6.7a1 1 0 0 1 0-1.4z"/>
              </svg>
            </button>
          </div>

          {/* Indicadores (opcional) */}
          <div className="mt-6 flex gap-2">
            {releases.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 w-6 cursor-pointer rounded-full transition ${
                  i === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
                role="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
