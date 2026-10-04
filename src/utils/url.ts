/**
 * Prefixes an internal path with the site's configured base path
 * (astro.config.mjs -> base). Use this for every internal href/src
 * instead of hardcoding a leading slash, so the whole site can move
 * to a subpath by changing one config value.
 *
 * withBase('/kontakt/')       -> '/kontakt/'            (base: '/')
 * withBase('/kontakt/')       -> '/vorschau/kontakt/'   (base: '/vorschau/')
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
