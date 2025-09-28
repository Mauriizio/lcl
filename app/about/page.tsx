"use client";
import Link from "next/link";
import { SpotifyIcon, YouTubeIcon } from "../components/BrandIcons";

const members = [
  {
    name: "Micro TDH",
    img: "/members/microtdh.jpg",
    spotify: "https://open.spotify.com/intl-es/artist/1aWJsBQa67l72j1VT3D6Ow?si=YY5-c7smTCmQj6AGfpeoSg",
    youtube: "https://www.youtube.com/@MicroTDH",
  },
  {
    name: "Big Soto",
    img: "/members/bigsoto.jpg",
    spotify: "https://open.spotify.com/intl-es/artist/2TQ4CGgxxCWHqa9yYIGDoU?si=L2OTPLWcRxKJKjt_xM3xoA",
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
      <section>
        <h1 className="text-4xl md:text-5xl font-crazy mb-6">Los Chamitos Locos</h1>
        <p className="max-w-3xl mx-auto text-lg text-neutral-200 leading-relaxed">
          Los Chamitos Locos es una agrupación urbana formada por{" "}
          <strong>Micro TDH</strong>, <strong>Big Soto</strong>, <strong>Adso Alejandro</strong>,{" "}
          <strong>Trainer</strong> y <strong>Jeeiph</strong>. Juntos fusionan rap,
          trap y reguetón para representar a Venezuela con un estilo fresco y
          vibrante en la música urbana.
        </p>
      </section>

      {/* Galería de fotos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src="/lcl/group4.jpg" alt="Los Chamitos Locos" className="rounded-lg shadow-lg" />
        <img src="/lcl/group5.jpg" alt="Los Chamitos Locos" className="rounded-lg shadow-lg" />
        <img src="/lcl/group3.jpg" alt="Los Chamitos Locos" className="rounded-lg shadow-lg" />
      </section>

      {/* Enlaces globales */}
      <section className="flex justify-center gap-6">
        <Link href="https://open.spotify.com/intl-es/track/6FH5L2afYhFk7wduzDPGXn" target="_blank" className="btn-secondary inline-flex items-center justify-center rounded-md p-1.5
                 ring-1 ring-white/10 hover:ring-white/30 transition text-green-500">
          <SpotifyIcon width={40} height={40} />
        </Link>
        <Link href="https://www.youtube.com/watch?v=UvouMwUcm6E" target="_blank" className="btn-secondary inline-flex items-center justify-center rounded-md p-1.5
                 ring-1 ring-white/10 hover:ring-white/30 transition text-red-500">
          <YouTubeIcon width={40} height={40} />
        </Link>
      </section>

      {/* Modal simplificado: perfiles individuales */}
      <section>
        <h2 className="text-2xl font-crazy mb-6">Integrantes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {members.map((m) => (
            <div key={m.name} className="bg-black/30 p-4 rounded-lg hover:bg-black/50 transition">
              <img src={m.img} alt={m.name} className="w-full h-32 object-cover object-top rounded-md mb-2" />
              <p className="font-crazy">{m.name}</p>
              <div className="flex justify-center gap-2 mt-2">
                {m.spotify && (
                  <Link href={m.spotify} target="_blank" aria-label={`${m.name} en Spotify`}
      className="inline-flex items-center justify-center rounded-md p-1.5
                 ring-1 ring-white/10 hover:ring-white/30 transition text-green-500">
  <SpotifyIcon width={22} height={22} />
</Link>
                )}
                {m.youtube && (
                  <Link href={m.youtube} target="_blank" aria-label={`${m.name} en YouTube`}
      className="inline-flex items-center justify-center rounded-md p-1.5
                 ring-1 ring-white/10 hover:ring-white/30 transition text-red-500">
  <YouTubeIcon width={22} height={22} />
</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
