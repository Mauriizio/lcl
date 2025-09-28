"use client";
import Link from "next/link";
import { SpotifyIcon, YouTubeIcon } from "../components/BrandIcons";

const members = [
  {
    name: "Micro TDH",
    img: "/members/microtdh.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/1aWJsBQa67l72j1VT3D6Ow?si=YY5-c7smTCmQj6AGfpeoSg",
    youtube: "https://www.youtube.com/@MicroTDH",
  },
  {
    name: "Big Soto",
    img: "/members/bigsoto.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/2TQ4CGgxxCWHqa9yYIGDoU?si=L2OTPLWcRxKJKjt_xM3xoA",
    youtube: "https://www.youtube.com/channel/UCTLzy3j4ydW1diZXSy62Aqw",
  },
  {
    name: "Adso Alejandro",
    img: "/members/adso.jpg",
    spotify: "https://open.spotify.com/intl-es/artist/29b16XDtyMXDrfo2hZ69wf",
    youtube: "https://www.youtube.com/@AdsoAlejandro",
  },
  {
    name: "Trainer",
    img: "/members/trainer.jpg",
    spotify: "https://open.spotify.com/intl-es/artist/6MB0O7jOsJ1OrkPAIlK3l2",
    youtube: "https://www.youtube.com/channel/UCIlxhEyRaWXCuvBz4QoryMQ",
  },
  {
    name: "Jheip",
    img: "/members/jeeiph.jpg",
    spotify: "https://open.spotify.com/intl-es/artist/6ZtLRqHEkAXPWVw0eRbDac",
    youtube: "https://www.youtube.com/channel/UCvNFmNOTpjmGN-7pNr8lR7Q",
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center space-y-12">
      {/* Intro */}
      <section>
        <h1 className="text-4xl md:text-5xl font-crazy mb-6">Los Chamitos Locos</h1>
        <p className="max-w-3xl mx-auto text-lg text-neutral-200 leading-relaxed">
          Los Chamitos Locos es una agrupación urbana formada por{" "}
          <strong>Micro TDH</strong>, <strong>Big Soto</strong>,{" "}
          <strong>Adso Alejandro</strong>, <strong>Trainer</strong> y{" "}
          <strong>Jeeiph</strong>. Juntos fusionan rap, trap y reguetón para
          representar a Venezuela con un estilo fresco y vibrante en la música urbana.
        </p>
      </section>

      {/* Galería de fotos (con glow + shine) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["/lcl/group4.jpg", "/lcl/group5.jpg", "/lcl/group3.jpg"].map((src) => (
          <figure
            key={src}
            className="
              group relative overflow-hidden rounded-xl ring-1 ring-white/10
              transition-shadow motion-safe:duration-300
              hover:ring-pink-500/50 hover:shadow-[0_0_0_2px_rgba(236,72,153,0.35),0_20px_60px_rgba(236,72,153,0.25)]
              active:scale-[0.99]
            "
          >
            <img
              src={src}
              alt="Los Chamitos Locos"
              className="
                w-full h-64 md:h-72 object-cover
                transition-transform motion-safe:duration-500
                group-hover:scale-[1.05] group-hover:brightness-110 group-hover:saturate-125
              "
            />
            {/* Shine diagonal */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-y-0 -left-1/3 w-1/2
                translate-x-[-120%] rotate-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                opacity-0 transition-all motion-safe:duration-700
                group-hover:translate-x-[220%] group-hover:opacity-100
              "
            />
          </figure>
        ))}
      </section>

      {/* Enlaces globales */}
      <section className="flex justify-center gap-6">
        <Link
          href="https://open.spotify.com/intl-es/track/6FH5L2afYhFk7wduzDPGXn"
          target="_blank"
          aria-label="Escuchar en Spotify"
          className="
            inline-flex items-center justify-center rounded-md p-2
            ring-1 ring-white/10 hover:ring-white/30 transition
            text-green-500 hover:text-green-400
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
          "
        >
          <SpotifyIcon width={40} height={40} />
        </Link>

        <Link
          href="https://www.youtube.com/watch?v=UvouMwUcm6E"
          target="_blank"
          aria-label="Ver en YouTube"
          className="
            inline-flex items-center justify-center rounded-md p-2
            ring-1 ring-white/10 hover:ring-white/30 transition
            text-red-500 hover:text-red-400
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
          "
        >
          <YouTubeIcon width={40} height={40} />
        </Link>
      </section>

      {/* Integrantes (cards con glow + zoom + shine) */}
      <section>
        <h2 className="text-2xl font-crazy mb-6">Integrantes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {members.map((m) => (
            <article
              key={m.name}
              className="
                group relative rounded-xl bg-black/30 p-4
                ring-1 ring-white/10 transition
                hover:bg-black/45 hover:ring-pink-500/40
                hover:shadow-[0_0_0_2px_rgba(236,72,153,0.25),0_14px_40px_rgba(236,72,153,0.2)]
              "
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={m.img}
                  alt={m.name}
                  className="
                    w-full h-32 object-cover object-top
                    transition-transform motion-safe:duration-500
                    group-hover:scale-[1.05]
                  "
                />
                {/* Shine */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-y-0 -left-1/3 w-1/2
                    translate-x-[-120%] rotate-12 bg-gradient-to-r from-white/0 via-white/15 to-white/0
                    opacity-0 transition-all motion-safe:duration-700
                    group-hover:translate-x-[220%] group-hover:opacity-100
                  "
                />
              </div>

              <p className="mt-2 font-crazy">{m.name}</p>

              <div className="mt-2 flex justify-center gap-2">
                {m.spotify && (
                  <Link
                    href={m.spotify}
                    target="_blank"
                    aria-label={`${m.name} en Spotify`}
                    className="
                      inline-flex items-center justify-center rounded-md p-1.5
                      ring-1 ring-white/10 hover:ring-white/30 transition
                      text-green-500 hover:text-green-400
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
                    "
                  >
                    <SpotifyIcon width={22} height={22} />
                  </Link>
                )}
                {m.youtube && (
                  <Link
                    href={m.youtube}
                    target="_blank"
                    aria-label={`${m.name} en YouTube`}
                    className="
                      inline-flex items-center justify-center rounded-md p-1.5
                      ring-1 ring-white/10 hover:ring-white/30 transition
                      text-red-500 hover:text-red-400
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
                    "
                  >
                    <YouTubeIcon width={22} height={22} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
