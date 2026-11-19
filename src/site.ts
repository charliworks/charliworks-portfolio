export type ToolGroup = { label: string; items: readonly string[] };

export type Site = {
  name: string;
  role: string;
  openTo: string;
  intro: string | undefined;
  email: string;
  github: string;
  linkedin: string | undefined;
  tools: readonly ToolGroup[];
};

export const site: Site = {
  name: 'Charlito Jr Mecarez',
  role: 'Full-stack developer in the Philippines, with 4 years of experience.',
  openTo: 'Open to full-time roles, collaborations and freelance work.',
  intro:
    'I enjoy turning ideas into clean, functional UIs, and I care a lot about the details that make an experience feel right.',
  email: 'charlitomecarezjr@gmail.com',
  github: 'charlitomecarez',
  linkedin: undefined,
  tools: [
    {
      label: 'Frontend',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vite',
        'Tailwind CSS',
      ],
    },
    { label: 'Backend', items: ['Supabase', 'Firebase', 'PostgreSQL'] },
    { label: 'DevOps and cloud', items: ['GitHub Actions'] },
    { label: 'AI development', items: ['Claude', 'GitHub Copilot', 'Gemini'] },
  ],
};
