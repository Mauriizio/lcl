export type TourDate = {
  id: string;
  city: string;
  country: string;
  venue: string;
  address?: string;
  date: string;       // ISO
  ticketUrl?: string;
  note?: string;
};

export type Release = {
  id: string;
  title: string;        // nombre de la canción
  youtubeUrl: string;   // enlace al video
  mp4Src: string;       // clip corto para bg
  webmSrc?: string;
  posterSrc?: string;
};

export type MemberContact = {
  spotify?: string;
  youtube?: string;
};

