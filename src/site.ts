export type Site = {
  name: string;
  role: string;
  openTo: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string | undefined;
  tools: readonly string[];
};

export const site: Site = {
  name: 'Charlito Jr Mecarez',
  role: 'Full-stack developer in the Philippines.',
  openTo: 'Open to full-time roles, collaborations and freelance work.',
  intro: 'TODO(charlito): one plain line about what you build',
  email: 'charlitomecarezjr@gmail.com',
  github: 'charlitomecarez',
  linkedin: undefined,
  tools: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Appwrite'],
};
