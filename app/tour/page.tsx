import type { Metadata } from "next";
import TourList from "../components/TourList";
import { getTourDates } from "../../lib/data/tour";

export const metadata: Metadata = {
  title: "Tour",
  description: "Fechas oficiales de la gira en Latinoamérica.",
};

export const revalidate = 60; // ISR (si luego conecto un CMS)

export default async function TourPage() {
  const shows = await getTourDates();
  return <TourList shows={shows} />;
}
