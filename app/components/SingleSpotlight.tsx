"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type SingleSpotlightProps = {
  title?: string;          // Texto superior (ej: "New Single")
  subtitle?: string;       // Texto grande (ej: "Sin Ti No Cuadra")
  ctaHref?: string;        // Link al video
  mp4Src?: string;         // "/hero2.mp4"
  webmSrc?: string;        // "/hero2.webm"
  posterSrc?: string;      // "/hero-poster.jpg" (opcional)
};

export default function SingleSpotlight({
  title = "New Single",
  subtitle = "Sin Ti No Cuadra",
  ctaHref = "https://www.youtube.com/watch?v=Kqiz2dieTkQ",
  mp4Src = "/hero2.mp4",
  webmSrc = "/hero2.webm",
  posterSrc = "/hero-poster.jpg",
}: SingleSpotlightProps) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(!!mq?.matches);
    on();
    mq?.addEventListener?.("change", on);
    return () => mq?.removeEventListener?.("change", on);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Alto cómodo (no full-screen para diferenciar del Hero) */}
      <div className="h-[70svh] min-h-[420px] max-h-[920px] relative">
        {/* Fondo video o imagen */}
        <div className="absolute inset-0 -z-10">
          {!reduced ? (
            <video
              className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
              <source src={mp4Src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={posterSrc}
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
            {title}
          </p>
          <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-crazy">
            {subtitle}
          </h3>

          <div className="mt-8 flex justify-center">
            <Link
              href={ctaHref}
              aria-label="Reproducir el nuevo single en YouTube"
              className="relative inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full 
                         bg-white/10 backdrop-blur-md ring-1 ring-white/20
                         hover:bg-white/20 hover:ring-white/30
                         transition focus-visible:outline-none 
                         focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
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
        </div>
      </div>

      <noscript>
        <img
          src={posterSrc}
          alt=""
          className="block h-[70svh] w-full object-cover object-center"
        />
      </noscript>
    </section>
  );
}
