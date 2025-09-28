// app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Los Chamitos Locos",
  description:
    "Contacto oficial de Los Chamitos Locos para contrataciones, prensa y consultas generales.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto | Los Chamitos Locos",
    description:
      "Escríbenos para bookings, prensa o consultas. Respuesta rápida.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Los Chamitos Locos",
    description:
      "Escríbenos para bookings, prensa o consultas. Respuesta rápida.",
  },
};

const EMAIL = "contacto@loschamitoslocos.com"; // TODO: reemplazar por el correo real

function mailtoUrl(subject: string, body = "") {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${EMAIL}?subject=${s}${body ? `&body=${b}` : ""}`;
}

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-14">
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Los Chamitos Locos",
            email: EMAIL,
            url: "https://tudominio.com", // TODO: reemplazar
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "Bookings",
                email: EMAIL,
                areaServed: "Worldwide",
                availableLanguage: ["es", "en"],
              },
            ],
          }),
        }}
      />

      {/* Encabezado */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-crazy tracking-tight">
          Contacto
        </h1>
        <p className="mt-3 text-neutral-200">
          Para contrataciones, prensa y consultas generales, contáctanos
          únicamente por correo electrónico.
        </p>
      </header>

      {/* Tarjeta principal con el correo */}
      <section className="mt-10 rounded-2xl bg-black/30 ring-1 ring-white/10 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold">Correo oficial</h2>
            <p className="mt-1 text-sm text-neutral-300">
              Tiempo estimado de respuesta: 24–72 horas hábiles.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {/* Botón: Bookings */}
              <a
                href={mailtoUrl("Booking / Contrataciones — LCL")}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-pink-600 px-4 py-3 text-sm font-semibold text-white hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                aria-label="Enviar correo para bookings"
              >
                <Mail className="h-4 w-4" />
                Bookings
              </a>

              {/* Botón: Prensa */}
              <a
                href={mailtoUrl("Prensa / Media — LCL", "Cuéntanos tu medio y fechas")}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Enviar correo para prensa"
              >
                <Mail className="h-4 w-4" />
                Prensa / Media
              </a>

              {/* Botón: General */}
              <a
                href={mailtoUrl("Consulta general — LCL")}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Enviar correo de consulta general"
              >
                <Mail className="h-4 w-4" />
                Consulta general
              </a>
            </div>

            {/* Enlace de correo grande */}
            <div className="mt-6">
              <a
                href={mailtoUrl("Contacto — LCL")}
                className="break-all text-base font-medium underline decoration-pink-500/60 underline-offset-4 hover:decoration-pink-400"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Extras útiles sin añadir más vías de contacto */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {/* EPK / Rider (placeholders) */}
        <div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6">
          <h3 className="font-semibold">Material para prensa y promotores</h3>
          <p className="mt-2 text-sm text-neutral-300">
            Descarga el Press Kit (EPK) y el Tech Rider oficial. Si necesitas
            otros formatos, pídelo por correo.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/press/epk-lcl.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
              EPK (PDF)
            </a>
            <a
              href="/press/tech-rider-lcl.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
              Tech Rider (PDF)
            </a>
          </div>
          <p className="mt-2 text-xs text-neutral-400">
            * Coloca los archivos en <code>/public/press/</code> o actualiza
            las rutas.
          </p>
        </div>

        {/* Notas de uso / políticas cortas */}
        <div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6">
          <h3 className="font-semibold">Notas</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>Indica ciudad, fecha tentativa y aforo para propuestas de booking.</li>
            <li>Para prensa, añade link de tu medio y deadline de publicación.</li>
            <li>Todos los acuerdos quedan sujetos a disponibilidad y contrato.</li>
          </ul>
          <a
            href="/legal/brand-usage"
            className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-300 underline decoration-white/20 underline-offset-4 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Guía rápida de uso de marca (opcional)
          </a>
        </div>
      </section>
    </main>
  );
}
