export type Site = {
  name: string;
  openTo: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string | undefined;
  tools: readonly string[];
};

export const site: Site = {
  name: 'Charlito Jr Mecarez',
  openTo: 'Open to full-time roles, collaborations and freelance work.',
  intro: 'TODO(charlito): one plain line about what you build',
  email: 'charlitomecarezjr@gmail.com',
  github: 'charlitomecarez',
  linkedin: undefined,
  tools: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Appwrite'],
};
