export interface Event {
  date: string; // e.g. "16. Aug. 2026"
  time: string;
  title: string;
  place: string;
}

// TODO: replace with real upcoming/past performances.
export const upcomingEvents: Event[] = [
  {
    date: "Samstag, 14. November 2026", 
    time: "14:30 Uhr",
    title: "Auftritt im LAK", 
    place: "St. Florin, Vaduz"
  }, 
  {
    date: "Samstag, 24. April 2027",
    time: "19:30 Uhr",
    title: "Konzert",
    place: "Vaduzersaal, Vaduz"
  }
];

export const pastEvents: Event[] = [
   {
    date: "Sonntag, 29. März 2026",
    time: "14:30 Uhr",
    title: "Auftritt im LAK",
    place: "St. Florin, Vaduz"
  },
  {
    date: "Sonntag, 14. Dezember 2025",
    time: "17:00 Uhr",
    title: "Herbstkonzert Varicanto und Joyces",
    place: "Katholische Kirche, Widnau"
  },
  {
    date: "Sonntag, 16. November 2025",
    time: "17:00 Uhr",
    title: "Herbstkonzert Varicanto und Joyces",
    place: "Ballenlager, Vaduz"
  }
  
];
