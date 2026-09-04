export interface Event {
  date: string; // e.g. "16. Aug. 2026"
  title: string;
  place: string;
}

// TODO: replace with real upcoming/past performances.
export const upcomingEvents: Event[] = [];

export const pastEvents: Event[] = [];
