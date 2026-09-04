export interface Track {
  title: string;
  file: string;
}

// Recordings from Weihnachten 2022 (see README.md).
export const tracks: Track[] = [
  { title: 'Es ist ein Ros entsprungen', file: 'es-ist-ein-ros-entsprungen.mp3' },
  { title: 'Maria durch ein Dornwald ging', file: 'maria-durch-ein-dornwald-ging.mp3' },
  { title: 'O Heiland, reiss die Himmel auf', file: 'o-heiland-reiss-die-himmel-auf.mp3' },
  { title: 'Weihnachts-Wiegenlied', file: 'weihnachts-wiegenlied.mp3' },
  { title: 'Wie schön leuchtet der Morgenstern', file: 'wie-schoen-leuchtet-der-morgenstern.mp3' },
];
