export type ToolGroup = { label: string; items: readonly string[] };

export type Job = {
  role: string;
  company: string;
  url: string | undefined;
  /** Path under public/, shown at 20px before the role. */
  logo: string | undefined;
  /** 'YYYY' or 'YYYY-MM'. */
  start: string;
  end: string | undefined;
  summary: string;
};

export type Site = {
  name: string;
  brand: { name: string; url: string };
  role: string;
  openTo: string;
  intro: string | undefined;
  email: string;
  github: string;
  linkedin: string | undefined;
  experience: readonly Job[];
  tools: readonly ToolGroup[];
};

export const site: Site = {
  name: 'Charlito Jr Mecarez',
  brand: { name: 'charliworks', url: 'https://github.com/charliworks' },
  role: 'Full-stack developer in the Philippines, with 4 years of experience.',
  openTo: 'Open to full-time roles, collaborations and freelance work.',
  intro:
    'I enjoy turning ideas into clean, functional UIs, and I care a lot about the details that make an experience feel right.',
  email: 'charlitomecarezjr@gmail.com',
  github: 'charlitomecarez',
  linkedin: 'https://www.linkedin.com/in/charlito-mecarez-jr-5565431b4/',
  experience: [
    {
      role: 'Frontend Developer',
      company: 'QualityTrade Asia',
      url: 'https://qualitytrade.com/',
      logo: '/experience/qualitytrade-asia.webp',
      start: '2023',
      end: undefined,
      summary:
        'Builds web apps with Vite and Next.js, and uses Claude for agentic coding.',
    },
    {
      role: 'Frontend Developer',
      company: 'OptoGrow',
      url: 'https://www.optogrow.com/home',
      logo: '/experience/optogrow.webp',
      start: '2022-09',
      end: '2022-12',
      summary:
        'Built in GoHighLevel, and ran strategic cold email outreach to potential clients.',
    },
  ],
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
