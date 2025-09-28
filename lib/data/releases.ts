import type { Release } from "../types";

export async function getReleases(): Promise<Release[]> {
  return [

    {
      id: "tema-4",
      title: "Prendo pá Fumar",
      youtubeUrl: "https://www.youtube.com/watch?v=UvouMwUcm6E",
      mp4Src: "/prendo.mp4",
      webmSrc: "/prendo.webm",
      posterSrc: "/prendo.png",
    },
    {
      id: "stnc",
      title: "Sin Ti No Cuadra",
      youtubeUrl: "https://www.youtube.com/watch?v=Kqiz2dieTkQ",
      mp4Src: "/hero2.mp4",
      webmSrc: "/hero2.webm",
      posterSrc: "/hero-poster.jpg",
    },
    {
      id: "tema-2",
      title: "Qué tu cré?",
      youtubeUrl: "https://www.youtube.com/watch?v=w7gNDyA5PxM",
      mp4Src: "/ktucre.mp4",
      webmSrc: "/ktucre.webm",
      posterSrc: "/quetucre.png",
    },
    {
      id: "tema-3",
      title: "Larga Vida",
      youtubeUrl: "https://www.youtube.com/watch?v=hZ32134_el8&list=RDhZ32134_el8&start_radio=1",
      mp4Src: "/largav.mp4",
      webmSrc: "/largav.webm",
      posterSrc: "/largav.png",
    },

     
  ];
}
