"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { href: "/", label: "Inicio" },
  { href: "/tour", label: "Tour Dates" },
  { href: "/about", label: "Acerca de" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerCls =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 " +
    (scrolled ? "bg-neutral-900/90 backdrop-blur border-b border-neutral-800" : "bg-transparent");

  // Fondo detrás del texto: una línea horizontal centrada (tipo “signo +” con el texto)
  // - Colocamos after en el centro vertical con translate-y
  // - Grosor menor que el alto del texto (0.45em aprox usando rem)
  const base =
    "relative inline-block px-3 py-1 text-sm font-crazy text-neutral-100 transition";
  const lineBehind =
    "after:pointer-events-none after:absolute after:left-0 after:right-0 after:top-1/2 after:-translate-y-1/2 " +
    "after:h-[0.45em] after:rounded after:bg-orange-500/75 after:-z-10 " +
    "after:opacity-0 after:scale-x-75 after:origin-center " +
    "after:transition-all after:duration-200 hover:after:opacity-100 hover:after:scale-x-100";
  const active =
    "after:opacity-100 after:scale-x-100";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={headerCls}>
      <div className="container mx-auto max-w-7xl px-4 flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-black tracking-tight font-crazy text-xl">
          LCL
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-4" aria-label="Principal">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`${base} ${lineBehind} ${isActive(i.href) ? active : ""}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden rounded px-3 py-2 text-neutral-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <nav id="primary-navigation" aria-label="Principal" className="md:hidden bg-neutral-900/95">
          <div className="container mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className={`${base} ${lineBehind} ${isActive(i.href) ? active : ""}`}
              >
                {i.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
