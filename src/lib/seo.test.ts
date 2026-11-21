import { describe, expect, it } from 'vitest';
import { site } from '../site';
import {
  caseTitle,
  homeDescription,
  homeJsonLd,
  homeTitle,
  jsonLdScript,
  robotsTxt,
  sitemapUrls,
  sitemapXml,
} from './seo';

const origin = new URL('https://example.dev');

describe('search titles', () => {
  it('Home title has the name and the brand, under 60 characters', () => {
    const t = homeTitle(site);
    expect(t).toContain(site.name);
    expect(t.toLowerCase()).toContain('charliworks');
    expect(t.length).toBeLessThan(60);
  });

  it('Home description has the name, the brand and the role, under 155', () => {
    const d = homeDescription(site);
    expect(d).toContain(site.name);
    expect(d).toContain('charliworks');
    expect(d).toContain('4 years of experience');
    expect(d).not.toContain(site.openTo);
    expect(d.length).toBeLessThan(155);
  });

  it('case title is "<Project> · <name>"', () => {
    expect(caseTitle('Habi', site)).toBe('Habi · Charlito Jr Mecarez');
  });
});

describe('homeJsonLd', () => {
  const [person, website] = homeJsonLd(site, origin)['@graph'];

  it('Person carries the name, other names and profiles', () => {
    expect(person.name).toBe(site.name);
    expect(person.alternateName).toEqual([...site.alternateNames]);
    expect(person.url).toBe('https://example.dev/');
    expect(person.image).toBe('https://example.dev/og.jpg');
    expect(person.sameAs).toEqual([
      'https://github.com/charlitomecarez',
      site.linkedin,
      'https://github.com/charliworks',
    ]);
  });

  it('WebSite is named charliworks and points to the Person', () => {
    expect(website.name).toBe('charliworks');
    expect(website.publisher).toEqual({ '@id': person['@id'] });
  });

  it('script text cannot close the script tag', () => {
    expect(jsonLdScript({ a: '</script>' })).not.toContain('</script>');
  });
});

describe('sitemap and robots', () => {
  it('lists Home and each case study, absolute, with a trailing slash', () => {
    expect(sitemapUrls(origin, ['habi'])).toEqual([
      'https://example.dev/',
      'https://example.dev/work/habi/',
    ]);
  });

  it('writes valid sitemap XML', () => {
    const xml = sitemapXml(['https://example.dev/']);
    expect(xml).toMatch(/^<\?xml/);
    expect(xml).toContain('<loc>https://example.dev/</loc>');
  });

  it('robots.txt allows all and names the sitemap', () => {
    expect(robotsTxt(origin)).toBe(
      'User-agent: *\nAllow: /\n\nSitemap: https://example.dev/sitemap.xml\n',
    );
  });
});
