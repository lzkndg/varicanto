# Varicanto

Static site for www.varicanto.li, built with [Astro](https://astro.build).

## Development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Content

- `src/data/tracks.ts` – recordings shown on the Musik page (currently the Weihnachten 2022 songs, served from `public/audio/`).
- `src/data/events.ts` – upcoming/past performances shown on the Auftritte page. Empty by default; add entries as `{ date, title, place }`.
- `src/pages/ueber-uns.astro` – About page copy is a placeholder; replace with the real history/mission text.
