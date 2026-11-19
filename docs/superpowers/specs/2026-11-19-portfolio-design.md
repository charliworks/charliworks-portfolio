# Portfolio design

> Date: 2026-11-19 · Status: Approved

## Intent

This is Charlito's personal portfolio. It has three readers:

- people who hire for full-time roles
- people who want to build something together
- people who want to pay for client work

All three ask the same first question: "Is this person good, and can I trust them?" The site answers with real work and a real voice. It gives all three one clear way to make contact.

## Goals

- Show Habi as a deep case study that proves how Charlito thinks and ships.
- Say in one line what Charlito is open to: full-time roles, collaborations and freelance work.
- Let a reader reach Charlito in one click from any page.
- Stay simple and minimal. Each page has one job.

## Non-goals

- No employer or client work. Only personal projects appear.
- No blog, CMS, newsletter, analytics dashboard or contact form in v1.
- No separate pages per reader group.
- No skills grid, logo wall or percentage bars.

## Anti-goals

The site fails, even if it works, when:

- it looks like a common design system or a template (default shadcn, Tailwind UI, purple gradients, glass cards, centered hero with two buttons)
- the copy sounds like AI: hype words, empty claims, "passionate developer who loves clean code"
- it shows real personal data from Habi

## Constraints

- **Stack:** Astro, Tailwind CSS, TypeScript ([ADR 0001](../../adr/0001-stack-choice.md)). Pages are static.
- **Rules:** charliworks-guides, through [AGENTS.md](../../../AGENTS.md). This includes `design/styling.md` (tokens, a 4-px spacing scale, about six type sizes, body text at 16 px or more, `prefers-reduced-motion`), `design/accessibility.md` and `design/brand-voice.md`.
- **Performance:** the web budget in `engineering/performance-budgets.md`: LCP ≤ 2.5 s on throttled 4G, CLS ≤ 0.1, initial JS ≤ 200 KB, Lighthouse mobile ≥ 90.
- **Habi data:** Habi's `PRODUCT.md` allows example data only in images. Never show real money figures, names or statement rows.
- **Cost:** free tiers only. Host on Cloudflare Pages at a `*.pages.dev` address. Keep the site URL in one config value, so the move to `charli.works` is a one-line change.
- **Design tool:** Impeccable owns the visual direction. Run `/impeccable init` before any UI work, and run the Impeccable audit before each UI PR.

## Approaches

1. **Home page + one case study page (chosen).** `/` gives the intro and a Habi teaser. `/work/habi` holds the full story. Case studies are Markdown in an Astro content collection, so a new project is one new file. This costs two pages to design. It gives recruiters a page they can skim, gives clients a deep page, and gives one link to send.
2. **One long page.** This is the most minimal option. It gets crowded when a second project arrives, and there is no separate link for the case study.
3. **Habi as the home page.** This is the most memorable option. It ties Charlito's identity to one project, which ages badly.

Charlito chose approach 1.

## Site structure

```
/            Home
/work/habi   Habi case study
/404         Short, plain not-found page
```

### Home (`/`)

In order:

1. **Intro:** the name "Charlito Jr Mecarez" and one plain line about what Charlito builds.
2. **Open to:** one line: full-time roles, collaborations, freelance work.
3. **Work:** the Habi teaser: the name, a one-line pitch, a sample-data image and a link to `/work/habi`. The layout must still work when there are two or three projects.
4. **About:** two to four short paragraphs in Charlito's own voice. It ends with one plain line of the tools Charlito uses: Astro, Next.js, React, Tailwind CSS, Supabase, Appwrite. This is a sentence, not a skills grid.
5. **Contact:** plain links to `charlitomecarezjr@gmail.com`, GitHub (`charlitomecarez`) and LinkedIn (URL to come from Charlito).

### Habi case study (`/work/habi`)

The story follows Habi's own material. Facts come from the Habi repo: `README.md`, `PRODUCT.md`, `CHANGELOG.md`, `docs/releases/` and git history.

1. **The problem:** one real day in the Philippines (the motorbike's kilometres, GCash and MariBank, ulam under ₱99, Taglish voice notes) that no general app joins in one view.
2. **What Habi does:** Home says in one sentence what needs you. The modules feed it.
3. **The rules Habi follows:** "The app speaks first." "Numbers are the content." "A log takes seconds, with one hand, outside." "Private by default."
4. **How it was built:** Expo, NativeWind and Supabase on free tiers; Android first; native modules and widgets.
5. **How it shipped:** release records (plan → design → handoff → notes), CI, end-to-end tests, a bundle budget; v1 to v2.0.2.
6. **What Charlito learned or would change:** in Charlito's own words. If Charlito gives no notes for it, the page leaves this section out. The builder does not write it.
7. **Links:** the GitHub repo (`charlitomecarez/habi`, public).

Images: start with `docs/images/readme-banner.png` and `readme-icon.svg` from the Habi repo. Both use sample data. Any new screenshot must use sample data, and Charlito checks it before it ships.

## Copy and the human touch

- Charlito supplies the personal parts: the intro line, About, and "what I learned". The builder may shape Charlito's raw notes into short sentences but does not invent opinions, feelings or history.
- The builder drafts the factual case study sections from the Habi repo. Charlito edits them before merge.
- All copy follows `design/brand-voice.md`: clear before clever, warm not cute, no hype, short.

## Decided by Charlito

- Personal portfolio, aimed at jobs, collaborators and client work at the same time.
- Personal projects only. Habi is the main project for now.
- Approach 1: Home + case study pages.
- Impeccable owns the visual design. Avoid common UI design systems.
- Astro + Tailwind CSS, linked to charliworks-guides by URL.
- The site shows the name "Charlito Jr Mecarez".
- Contact: `charlitomecarezjr@gmail.com`, GitHub `charlitomecarez`, LinkedIn.
- Hosting: Cloudflare Pages on the free `*.pages.dev` address. The planned domain is `charli.works`, bought later when there is budget.

## Left to the builder

- The Astro project layout, inside framework conventions and `engineering/project-structure.md`.
- The content collection schema for case studies.
- Package manager: pnpm (no lockfile exists yet; pnpm is installed).
- Lint, format and test setup, and the CI workflow (lint, type check, build, Lighthouse).
- Font loading, image optimization and meta tags (title, description, Open Graph image).
- The visual direction, through Impeccable.
