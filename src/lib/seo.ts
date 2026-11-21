import type { Site } from '../site';
import { contactLinks } from './contact';

/** Search title for Home: the name plus the brand, so both searches match. */
export function homeTitle(s: Site): string {
  return `${s.name} · ${s.brand.name}`;
}

/** Search description for Home, built from the visible role line. */
export function homeDescription(s: Site): string {
  const role = s.role.charAt(0).toLowerCase() + s.role.slice(1);
  return `${s.name} (${s.brand.name}), ${role}`;
}

/** Search title for a case study. */
export function caseTitle(project: string, s: Site): string {
  return `${project} · ${s.name}`;
}

/** Person and WebSite JSON-LD for Home. Every value comes from site.ts. */
export function homeJsonLd(s: Site, origin: URL) {
  const url = new URL('/', origin).href;
  const sameAs = [
    ...contactLinks(s)
      .filter((l) => l.href.startsWith('https://'))
      .map((l) => l.href),
    s.brand.url,
  ];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${url}#person`,
        name: s.name,
        alternateName: [...s.alternateNames],
        url,
        image: new URL('/og.jpg', origin).href,
        jobTitle: s.jobTitle,
        email: `mailto:${s.email}`,
        sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        name: s.brand.name,
        alternateName: [s.name],
        url,
        publisher: { '@id': `${url}#person` },
      },
    ],
  };
}

/** JSON for a <script type="application/ld+json">, safe inside HTML. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** Every public page, as absolute URLs. The 404 page is left out. */
export function sitemapUrls(origin: URL, workSlugs: readonly string[]) {
  return ['/', ...workSlugs.map((slug) => `/work/${slug}/`)].map(
    (path) => new URL(path, origin).href,
  );
}

export function sitemapXml(urls: readonly string[]): string {
  const items = urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

export function robotsTxt(origin: URL): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', origin).href}\n`;
}
