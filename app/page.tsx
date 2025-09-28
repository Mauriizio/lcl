import Hero from "./components/Hero";
import TourList from "./components/TourList";
import SingleCarousel from "./components/SingleCarousel";
import { getTourDates } from "../lib/data/tour";
import { getReleases } from "../lib/data/releases";

export default async function HomePage() {
  const [shows, releases] = await Promise.all([getTourDates(), getReleases()]);

  return (
    <>
      <Hero navOffsetPx={56} />
      <TourList shows={shows} />
      <SingleCarousel releases={releases} />
    </>
  );
}
