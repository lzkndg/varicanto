export interface Foto {
    alt: string;
    src: string;
}

export interface Galerie {
    titel: string;
    fotos: Foto[];
}


export const widnau2025: Foto[] = [
    { alt: 'Konzert Widnau', src: '/images/galerie/2025-12 Konzert Widnau.jpg'},
    { alt: 'Konzert Widnau Marianne', src: '/images/galerie/2025-12 Konzert Widnau Marianne.jpg'},
]

export const vaduz2025: Foto[] = [
    { alt: '', src: '/images/galerie/2025-1.jpg'},
    { alt: '', src: '/images/galerie/2025-2.jpg'},
    { alt: '', src: '/images/galerie/2025-3.jpg'},
    { alt: '', src: '/images/galerie/2025-4.jpg'},
    { alt: '', src: '/images/galerie/2025-5.jpg'},
    { alt: '', src: '/images/galerie/2025-6.jpg'},
]

export const ballenlager2024: Foto[] = [
    { alt: '', src: '/images/galerie/2024-1.jpg'},
    { alt: '', src: '/images/galerie/2024-2.jpg'},
    { alt: '', src: '/images/galerie/2024-3.jpg'},
    { alt: '', src: '/images/galerie/2024-4.jpg'},
    { alt: '', src: '/images/galerie/2024-5.jpg'},
    { alt: '', src: '/images/galerie/2024-6.jpg'},
]

export const alpgottesdienst2022: Foto[] = [
    { alt: '', src: '/images/galerie/pradamee-1.jpg'},
    { alt: '', src: '/images/galerie/pradamee-2.jpg'},
    { alt: '', src: '/images/galerie/pradamee-3.jpg'},
]


export const konzert2021: Foto[] = [
    { alt: '', src: '/images/galerie/2021-1.jpg'},
    { alt: '', src: '/images/galerie/2021-2.jpg'},
    { alt: '', src: '/images/galerie/2021-3.jpg'},
    { alt: '', src: '/images/galerie/2021-4.jpg'},
]


export const konzerte2018: Foto[] = [
    { alt: '', src: '/images/galerie/2018-1.jpg'},
    { alt: '', src: '/images/galerie/2018-2.jpg'},
]


export const galerie: Galerie[] = [
    { titel: 'Konzert Kirche Widnau 2025', fotos: widnau2025 },
    { titel: 'Konzert Ballenlager Vaduz 2025', fotos: vaduz2025 },
    { titel: 'Herbstonzert Ballenlager 2024', fotos: ballenlager2024 },
    { titel: 'Alpgottesdienst Pradamee 2022', fotos: alpgottesdienst2022 },
    { titel: 'Weihnachtskonzert 2021: Bach Meets Pop and Jazz', fotos: konzert2021 },
    { titel: 'Konzerte 2018', fotos: konzerte2018 },
]