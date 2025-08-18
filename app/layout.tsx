import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: { default: "Los Chamitos Locos", template: "%s | LCL" },
  description: "Sitio oficial: tour, música y noticias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
