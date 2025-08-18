"use client";
import Link from "next/link";
import type { TourDate } from "../../lib/types";

function DateBlock({ iso }: { iso: string }) {
  const d = new Date(iso);
  const month = d.toLocaleString("es-ES", { month: "short" }).toUpperCase();
  const day = d.toLocaleString("es-ES", { day: "2-digit" });
  const year = d.toLocaleString("es-ES", { year: "2-digit" });

  return (
    <div className="flex flex-col items-center leading-none font-crazy text-white">
      <span className="text-lg md:text-xl">{month}</span>
      <span className="text-4xl md:text-5xl font-extrabold -mt-1">{day}</span>
      <span className="text-xs opacity-70 -mt-1">{year}</span>
    </div>
  );
}

export default function TourList({ shows }: { shows: TourDate[] }) {
  return (
    <section className="relative">
      {/* Fondo: imagen + overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/chamitos2.png"      // <— pon el archivo en /public/chamitos.png
          alt=""
          aria-hidden="true" 
          className="h-full w-full  object-cover object-[50%_70%]"
        />
        {/* Overlay para contraste del texto */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Mantener patrón radial sutil que ya tenías */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mt-2 mb-8 text-center text-3xl md:text-5xl font-extrabold font-crazy">
          TOUR DATES
        </h2>

        <ul className="divide-y divide-white/10">
          {shows.map((s) => (
            <li key={s.id} className="grid grid-cols-12 items-center gap-4 py-6">
              {/* Fecha grande izquierda */}
              <div className="col-span-3 sm:col-span-2 md:col-span-2">
                <DateBlock iso={s.date} />
              </div>

              {/* Info central */}
              <div className="col-span-6 sm:col-span-7 md:col-span-8">
                <p className="font-crazy text-lg md:text-xl">
                  {s.city}, {s.country}
                </p>
                <p className="text-sm md:text-base text-neutral-300">
                  <span className="font-semibold">{s.venue}</span>
                  {s.address ? ` — ${s.address}` : ""}
                </p>
              </div>

              {/* CTA derecha */}
              <div className="col-span-3 sm:col-span-3 md:col-span-2 flex justify-end">
                {s.ticketUrl ? (
                  <Link
                    href={s.ticketUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md
                               bg-pink-600 px-4 py-2 text-sm font-semibold text-white
                               hover:bg-pink-500 focus-visible:outline-none
                               focus-visible:ring-2 focus-visible:ring-pink-400
                               focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  >
                    Tickets
                  </Link>
                ) : (
                  <span className="rounded-md border border-white/20 px-4 py-2 text-sm text-neutral-300">
                    Próximamente
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
