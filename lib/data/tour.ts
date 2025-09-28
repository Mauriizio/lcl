import type { TourDate } from "../types";

export async function getTourDates(): Promise<TourDate[]> {
  // Mock LATAM
  return [
    {
      id: "Bar-Esp-Sep-10-25",
      city: "Barcelona",
      country: "España",
      venue: "Razzmatazz 2",
      address: "C/ Pamplona, 88 - Barcelona",
      date: "2025-09-10T21:00:00-05:00",
      ticketUrl: "https://www.salarazzmatazz.com/10-09-2025/micro-tdh",
    },
    {
      id: "Mad-Esp-Sep-12-25",
      city: "Madrid",
      country: "España",
      venue: "Iberdrola Music",
      address: " C. Laguna Dalga, Villaverde, 28021 Madrid",
      date: "2025-09-12T14:30:00-05:00",
      ticketUrl: "https://www.coca-cola.com/es/es/offerings/musica/CCME/abonos-entradas",
    },
    {
      id: "España-Pamplona-13-09-25",
      city: "Pamplona",
      country: "España",
      venue: "Navarra Arena",
      address: "Pl. Aizagerria, nº 1, 31006 Pamplona, Navarra, España",
      date: "2025-09-13T17:00:00-00:00",
      ticketUrl: "https://entradasnavarrarena.nicdo.es/selection/event/date?productId=10229405431105",
    },
    {
      id: "Tenerife-Esp-14-09-25",
      city: "Tenerife",
      country: "España",
      venue: "Gekko Club Tenerife",
      address: "Avenida de la Constitución 5, 38003 Santa Cruz de Tenerife, España",
      date: "2025-09-14T19:00:00-00:00",
      ticketUrl: "https://www.fourvenues.com/es/gekko-club-tenerife/events/d14-micro-tdh-en-concierto-14-09-2025-RX88",
    },
    
  ];
}
