"use client";
import Link from "next/link";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ticketsHref?: string;     // 👈 nuevo prop
  posterSrc?: string;
  posterSrcMobile?: string;
  navOffsetPx?: number;
};

export default function Hero({
  title = "",
  subtitle = "Nuevo single: “Sin Ti No Cuadra”",
  ticketsHref = "/tour",                // 👈 a dónde comprar entradas (ajústalo si tienes página externa)
  posterSrc = "/bg-hero.png",
  posterSrcMobile = "/bgHeroM.png",
  navOffsetPx = 0,
}: HeroProps) {
  const styleHeight =
    navOffsetPx > 0
      ? { minHeight: `calc(100svh - ${navOffsetPx}px)` }
      : { minHeight: "100svh" };

  return (
    <section className="relative isolate overflow-hidden min-h-screen max-h-screen" style={styleHeight}>
      {/* Fondos: igual a tu versión estable */}
      <div className="absolute inset-0 -z-10">
        {/* mobile */}
        <img
          src={posterSrcMobile}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 block sm:hidden h-full w-full object-contain object-top"
        />
        {/* desktop */}
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block h-full w-full object-container object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/10" />
      </div>

      {/* Contenido */}
      <div className="container flex h-full flex-col items-center justify-center pt-28 sm:pt-16 md:pt-20 text-center">
        <div className="mx-auto max-w-3xl mt-10 sm:mt-16 md:mt-24">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-crazy">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 text-neutral-200 text-lg sm:text-xl md:text-2xl font-crazy">
            {subtitle}
          </p>

          {/* CTA: Comprar entradas */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              href={ticketsHref}
              className="inline-flex items-center rounded-md bg-pink-600 px-6 py-3 text-sm font-semibold text-white
                         hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400
                         focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              Comprar entradas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
