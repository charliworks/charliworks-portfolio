import type { Site } from '../site';

export type ContactLink = { label: string; href: string };

export function contactLinks(s: Site): ContactLink[] {
  const links: ContactLink[] = [
    { label: 'Email', href: `mailto:${s.email}` },
    { label: 'GitHub', href: `https://github.com/${s.github}` },
  ];
  if (s.linkedin) links.push({ label: 'LinkedIn', href: s.linkedin });
  return links;
}
