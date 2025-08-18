"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  posterSrc?: string;
  mp4Src?: string;
  webmSrc?: string;
  navOffsetPx?: number;
};

export default function Hero({
  title = "Los Chamitos Locos",
  subtitle = "Nuevo single: “Sin Ti No Cuadra”",
  ctaHref = "https://www.youtube.com/watch?v=Kqiz2dieTkQ&list=RDKqiz2dieTkQ&start_radio=1",
  posterSrc = "/hero-poster.jpg",
  mp4Src = "/hero2.mp4",
  webmSrc = "/hero2y.webm",
  navOffsetPx = 0,
}: HeroProps) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const styleHeight =
    navOffsetPx > 0
      ? { minHeight: `calc(100svh - ${navOffsetPx}px)` }
      : { minHeight: "100svh" };

  return (
    <section className="relative isolate overflow-hidden max-h-screen" style={styleHeight}>
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        {!reduced ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
            src={mp4Src}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Contenido más centrado y despegado del navbar */}
      <div className="container flex h-full flex-col items-center justify-center pt-16 md:pt-20 text-center">
        <div className="mx-auto max-w-3xl mt-16 md:mt-24">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight font-crazy">
            {title}
          </h1>
          <p className="mt-6 text-neutral-200 md:text-2xl font-crazy">{subtitle}</p>

          {/* Botón Play: glass + pulso */}
          <div className="mt-12 flex justify-center">
            <Link
              href={ctaHref}
              aria-label="Reproducir último video en YouTube"
              className="relative inline-flex h-16 w-16 items-center justify-center rounded-full 
                         bg-white/10 backdrop-blur-md ring-1 ring-white/20
                         hover:bg-white/20 hover:ring-white/30
                         transition focus-visible:outline-none 
                         focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              {/* Pulso (solo si no hay reduced motion) */}
              <span className="absolute inset-0 rounded-full motion-safe:animate-ping motion-safe:bg-white/20" />
              {/* Ícono play */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative h-8 w-8 text-white"
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
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </noscript>
    </section>
  );
}
