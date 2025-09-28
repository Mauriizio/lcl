"use client";
import Link from "next/link";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ticketsHref?: string;       // comprar entradas
  playHref?: string;          // ver video
  posterSrc?: string;
  posterSrcMobile?: string;
  navOffsetPx?: number;
};

export default function Hero({
  title = "",
  subtitle = "",
  ticketsHref = "/tour",
  playHref = "https://www.youtube.com/watch?v=UvouMwUcm6Ey",
  posterSrc = "/bg-hero.png",
  posterSrcMobile = "/chamitos.png",
  navOffsetPx = 0,
}: HeroProps) {
  const styleHeight =
    navOffsetPx > 0
      ? { minHeight: `calc(100svh - ${navOffsetPx}px)` }
      : { minHeight: "100svh" };

  return (
    <section className="relative isolate overflow-hidden min-h-screen h-screen" style={styleHeight}>
      {/* FONDOS (igual que tu estable) */}
      <div className="absolute inset-0 -z-10">
        {/* mobile */}
        <img
          src={posterSrcMobile}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 block sm:hidden h-full w-full object-cover object-center"
        />
        {/* desktop */}
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block h-full w-full object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/10" />
      </div>

      {/* CONTENIDO */}
      <div className="container flex h-full flex-col items-center justify-center pt-28 sm:pt-16 md:pt-20 text-center">
        <div className="mx-auto max-w-3xl mt-10 sm:mt-16 md:mt-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-crazy">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 text-neutral-200 text-lg sm:text-xl md:text-2xl font-crazy">
            {subtitle}
          </p>

          {/* CTA dual: Play + Comprar */}
<div className="mt-20 sm:mt-28 flex flex-col items-center gap-6">
  {/* Play (glass/pulse) */}
  <Link
    href={playHref}
    aria-label="Reproducir último video en YouTube"
    className="relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full 
               bg-white/10 backdrop-blur-md ring-1 ring-white/20
               hover:bg-white/20 hover:ring-white/30 transition
               focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40
               focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
    target="_blank"
  >
    <span className="absolute inset-0 rounded-full motion-safe:animate-ping motion-safe:bg-white/20" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="relative h-6 w-6 sm:h-8 sm:w-8 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <polygon points="6,4 16,10 6,16" />
    </svg>
  </Link>

  {/* Comprar entradas */}
  <Link
    href={ticketsHref}
    className="inline-flex items-center rounded-md bg-pink-600 px-6 py-3 text-sm font-semibold text-white
               hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-pink-400 focus-visible:ring-offset-2
               focus-visible:ring-offset-neutral-950"
  >
    Comprar entradas
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}
