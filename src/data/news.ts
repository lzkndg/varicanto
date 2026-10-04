export interface NewsItem {
  date: string; // ISO yyyy-mm-dd, used for sorting and display
  title: string;
  text: string;
  image: string; // path under /images/news/
  imageAlt: string;
}

// TODO: replace with real news items (and swap the placeholder images
// in public/images/news/ for real photos).
export const news: NewsItem[] = [
  {
    date: '2026-09-01',
    title: 'Projektsingen Frühling 2027',
    text: 'Für den Frühling 2027 bereiten wir ein Projektsingen mit zahlreichen Sängern vor. Wir werden locker und sicher geführt und bekommen so unser tolles Programm kompetent vermittelt. Dank der schwungvollen Leitung von Marianne wird unsere Freude am Singen gefestigt. Bist du interessiert? Wir vier wollen dich motivieren, melde dich und sag es weiter.\nWir sind sicher, es wird ein richtig gelungenes Konzert.  Singen setzt die gesunden Glückshormone frei und regt den Geist an. Lass dich mitreissen.\nVom 18. Januar 2027 bis April proben wir wöchentlich konzentriert. Am 24. April 2027 findet das Konzert im Vaduzersaal statt. Also, was lässt dich zögern mal reinzuschauen und mitzumachen? Wir freuen uns auf dich.',
    image: '/images/news/vorstand.jpg',
    imageAlt: 'Vereinsvorstand',
  },
  {
    date: '2026-08-01',
    title: 'Gönner Projektsingen',
    text: 'Für dieses Projektsingen im Frühling 2027 sind wir auch auf finanzielle Unterstützung angewiesen. Deshalb suchen wir Gönner. \n\nGerne nehmen wir Euren Beitrag entgegen: LI61 0880 5502 6389 8024 0 oder via QR Code\n\n\n\n\n',
    image: '/images/news/qrcode-goenner.jpg',
    imageAlt: 'QR Code',
  },
  {
    date: '2026-03-13',
    title: 'Neue Zusammensetzung im Vorstand',
    text: 'An der  Mitgliederversammlung vom 13. März 2026 wurden Beatrice Beck (zweite von rechts), Präsidentin und Erika Oertle (mitte), Aktuarin als Vorstandsmitglieder verabschiedet. Ihr langjähriger grosser Einsatz wurde verdankt. \nKäthi Kündig, die Kassierin bleibt in ihrem Amt und hat neue Vorstandsmitglieder zu ihrer Seite: Susanne Oertle als Präsidentin und Sylvia Menegon als Aktuarin.',
    image: '/images/news/neuer-vorstand.jpg',
    imageAlt: 'Gruppenbild der alten und neuen Vorstandsmitglieder',
  },
  {
    date: '2026-03-13',
    title: "Ehrung Felix Kind",
    text: 'Ebenfalls durften wir unserem Mitglied Felix Kind für 40 Jahre Trachtenchor / Varicanto ein Präsent überreichen. Für seine langjährige Vereinstreue und Funktion als Fähnrich danken wir ihm herzlich.\n\n\n\n\n\n\n\n\n',
    image: '/images/news/ehrung-felix-kind.jpg',
    imageAlt: 'Vereinsmitglied Felix mit einem Holzteller als Präsent'
  }
];

export function sortedNews(): NewsItem[] {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatNewsDate(iso: string): string {
  return new Date(iso).toLocaleDateString('de-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
