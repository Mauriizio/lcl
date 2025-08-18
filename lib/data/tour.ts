import type { TourDate } from "../types";

export async function getTourDates(): Promise<TourDate[]> {
  // Mock LATAM
  return [
    {
      id: "pe-lim-25-03-28",
      city: "Lima",
      country: "Perú",
      venue: "Arena Perú",
      address: "Av. Javier Prado Este 4200, Surco",
      date: "2025-03-28T21:00:00-05:00",
      ticketUrl: "https://tickets.example.com/lima",
    },
    {
      id: "co-bog-25-04-02",
      city: "Bogotá",
      country: "Colombia",
      venue: "Movistar Arena",
      address: "Diagonal 61C #26-36",
      date: "2025-04-02T20:30:00-05:00",
      ticketUrl: "https://tickets.example.com/bogota",
    },
    {
      id: "co-med-25-04-05",
      city: "Medellín",
      country: "Colombia",
      venue: "La Macarena",
      address: "Cra. 63 #44-101",
      date: "2025-04-05T20:30:00-05:00",
      ticketUrl: "https://tickets.example.com/medellin",
    },
    {
      id: "cl-stg-25-04-12",
      city: "Santiago",
      country: "Chile",
      venue: "Movistar Arena",
      address: "Parque O'Higgins",
      date: "2025-04-12T21:00:00-04:00",
      ticketUrl: "https://tickets.example.com/santiago",
    },
    {
      id: "ar-bue-25-04-18",
      city: "Buenos Aires",
      country: "Argentina",
      venue: "Luna Park",
      address: "Av. Eduardo Madero 470",
      date: "2025-04-18T21:00:00-03:00",
      ticketUrl: "https://tickets.example.com/buenosaires",
    },
    {
      id: "mx-cdmx-25-05-03",
      city: "Ciudad de México",
      country: "México",
      venue: "Pepsi Center",
      address: "Dakota s/n, Nápoles",
      date: "2025-05-03T20:30:00-06:00",
      ticketUrl: "https://tickets.example.com/cdmx",
    },
  ];
}
