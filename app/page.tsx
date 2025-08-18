import Hero from "./components/Hero";
import TourList from "./components/TourList";
import SingleSpotlight from "./components/SingleSpotlight";
import { getTourDates } from "../lib/data/tour";

export default async function HomePage() {
  const shows = await getTourDates();

  return (
    <>
      <Hero navOffsetPx={56} />
      <TourList shows={shows} />
      <SingleSpotlight 
        title="New Single"
        subtitle="Sin Ti No Cuadra"
        ctaHref="https://www.youtube.com/watch?v=Kqiz2dieTkQ"
        mp4Src="/hero2.mp4"
        webmSrc="/hero2.webm"
        posterSrc="/hero-poster.jpg"
      />
    </>
  );
}
