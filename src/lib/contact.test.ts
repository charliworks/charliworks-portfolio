import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { site } from '../site';
import { contactLinks } from './contact';

describe('contactLinks', () => {
  it('no LinkedIn link when linkedin is undefined', () => {
    const links = contactLinks({
      ...site,
      linkedin: undefined,
      resume: undefined,
    });
    expect(links.map((l) => l.label)).toEqual(['Email', 'GitHub']);
  });

  it('no LinkedIn link when linkedin is empty', () => {
    const links = contactLinks({ ...site, linkedin: '', resume: undefined });
    expect(links.map((l) => l.label)).toEqual(['Email', 'GitHub']);
  });

  it('LinkedIn link when set', () => {
    const links = contactLinks({
      ...site,
      linkedin: 'https://www.linkedin.com/in/x',
      resume: undefined,
    });
    expect(links.at(-1)?.label).toBe('LinkedIn');
  });

  it('email is a mailto link', () => {
    const email = contactLinks(site).find((l) => l.label === 'Email');
    expect(email?.href).toBe('mailto:charlitomecarezjr@gmail.com');
  });

  it('no résumé link when resume is undefined', () => {
    const links = contactLinks({ ...site, resume: undefined });
    expect(links.some((l) => l.label === 'Résumé')).toBe(false);
  });

  it('résumé link comes last when set', () => {
    const links = contactLinks({ ...site, resume: '/resume.pdf' });
    expect(links.at(-1)).toEqual({ label: 'Résumé', href: '/resume.pdf' });
  });

  it('the résumé file exists in public/ when set', () => {
    if (site.resume) expect(existsSync(`public${site.resume}`)).toBe(true);
  });
});
