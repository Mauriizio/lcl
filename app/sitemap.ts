// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

/**
 * Ajusta esta lista cuando agregues nuevas rutas públicas.
 * Si luego montas /music, /news, /press, /merch, súmalas aquí.
 */
const routes: Array<{
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: MetadataRoute.Sitemap[number]["priority"];
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/tour", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  // { path: "/music", changeFrequency: "weekly", priority: 0.8 },
  // { path: "/news", changeFrequency: "daily", priority: 0.6 },
  // { path: "/press", changeFrequency: "monthly", priority: 0.5 },
  // { path: "/merch", changeFrequency: "weekly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency ?? "weekly",
    priority: r.priority ?? 0.7,
  }));
}
