import { describe, expect, it } from 'vitest';
import { site } from '../site';
import { contactLinks } from './contact';

describe('contactLinks', () => {
  it('no LinkedIn link when linkedin is undefined', () => {
    const links = contactLinks({ ...site, linkedin: undefined });
    expect(links.map((l) => l.label)).toEqual(['Email', 'GitHub']);
  });

  it('no LinkedIn link when linkedin is empty', () => {
    const links = contactLinks({ ...site, linkedin: '' });
    expect(links.map((l) => l.label)).toEqual(['Email', 'GitHub']);
  });

  it('LinkedIn link when set', () => {
    const links = contactLinks({
      ...site,
      linkedin: 'https://www.linkedin.com/in/x',
    });
    expect(links.at(-1)?.label).toBe('LinkedIn');
  });

  it('email is a mailto link', () => {
    const email = contactLinks(site).find((l) => l.label === 'Email');
    expect(email?.href).toBe('mailto:charlitomecarezjr@gmail.com');
  });
});
