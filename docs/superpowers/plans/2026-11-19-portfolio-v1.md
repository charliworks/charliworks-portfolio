# Portfolio v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship Charlito's static portfolio: a home page and a Habi case study, on Cloudflare Pages.

**Architecture:** Astro builds static HTML with no client JavaScript. Personal facts live in one typed config file (`src/site.ts`). Case studies are Markdown files in an Astro content collection, so a new project is one new file. The design is text-first, like leerob.com: one narrow column, monochrome tokens in one CSS file.

**Tech Stack:** Astro (latest stable), TypeScript (strict), Tailwind CSS v4 through `@tailwindcss/vite`, pnpm, Vitest, Playwright, `@axe-core/playwright`, `@lhci/cli`, Cloudflare Pages.

**Spec:** `docs/superpowers/specs/2026-11-19-portfolio-design.md`

## Global Constraints

- Follow `AGENTS.md` and charliworks-guides. Conventional Commits, `type(scope): summary`, 72 characters or fewer. Never commit to `main`.
- Work on the branch `feat/portfolio-v1`, created from `chore/adopt-charliworks-guides`.
- Package manager: pnpm. Do not add a dependency that this plan does not list without asking Charlito.
- Free tiers only. Host: Cloudflare Pages on a `*.pages.dev` address. The site URL lives only in `astro.config.mjs` `site`, so the move to `charli.works` is a one-line change.
- Displayed name: "Charlito Jr Mecarez". Email: `charlitomecarezjr@gmail.com`. GitHub: `charlitomecarez`. LinkedIn: not yet given.
- Personal projects only. Never mention employer or client work.
- Habi images use sample data only. Never show real money figures, names or statement rows. Charlito checks each image before merge.
- Performance budget: LCP ≤ 2.5 s on throttled 4G, CLS ≤ 0.1, initial JS ≤ 200 KB, Lighthouse mobile performance ≥ 90.
- Styling: tokens as CSS custom properties named `--{category}-{role}-{variant}`, a 4-px spacing scale, about six type sizes, body text ≥ 16 px, mobile-first, `prefers-reduced-motion` respected, visible `:focus-visible` on every link.
- Copy follows `design/brand-voice.md`: clear before clever, warm not cute, no hype words, short. The builder never writes the intro line, About or "What I learned". Use Charlito's words or the marker `TODO(charlito): …`, which must be gone before deploy.
- No skills grid, logo wall, percentage bars, contact form, blog or analytics.
- Look up current Astro, Tailwind and Cloudflare Pages APIs with Context7 before you write config. Do not trust remembered versions.

## Review Focus

1. **No LinkedIn URL yet.** Expected: the contact list shows email and GitHub only, with no empty `href` and no dead link. (Task 3 test.)
2. **Narrow phone with large text.** At 320 px width and 200% text zoom, nothing overflows sideways or overlaps. (Task 4 test.)
3. **JavaScript turned off.** Every page reads and every link works, because the site ships no client JS. (Task 4 test.)
4. **Unknown work URL** such as `/work/nope`. Expected: the 404 page with a link home, not a blank page. (Task 5 test.)
5. **Reduced motion.** With `prefers-reduced-motion: reduce`, no transition or animation runs longer than 0.01 s. (Task 6 test.)

---

### Task 1: Scaffold the Astro project and the checks

**Files:**
- Create: `package.json`, `pnpm-lock.yaml`, `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro` (placeholder), `src/styles/global.css`, `vitest.config.ts`, `playwright.config.ts`, `.prettierrc`, `eslint.config.js`, `.github/workflows/ci.yml`, `.nvmrc`
- Modify: `AGENTS.md` (run, test and lint commands), `README.md` (getting started and scripts), `.gitignore` (add `.astro/`, `playwright-report/`, `test-results/`, `.lighthouseci/`)

**Interfaces:**
- Produces: these pnpm scripts, which later tasks run:
  - `dev`, `build`, `preview`
  - `check` (`astro check`)
  - `lint` (ESLint with `eslint-plugin-astro`, then `prettier --check .`)
  - `test` (`vitest run`)
  - `test:e2e` (Playwright against `pnpm preview` on port 4321)
  - `lhci` (Lighthouse CI)
- Produces: `astro.config.mjs` with `site: 'https://charliworks-portfolio.pages.dev'` and `output: 'static'`.

- [ ] **Step 1:** Create the branch: `git switch -c feat/portfolio-v1`.
- [ ] **Step 2:** Scaffold with `pnpm create astro@latest . --template minimal --typescript strict --no-git`. Add Tailwind v4 through `pnpm astro add tailwind`.
- [ ] **Step 3:** Add the dev dependencies: `vitest`, `@playwright/test`, `@axe-core/playwright`, `@lhci/cli`, `eslint`, `eslint-plugin-astro`, `typescript-eslint`, `prettier`, `prettier-plugin-astro`. Set Node 22 in `.nvmrc`.
- [ ] **Step 4:** Write `tests/e2e/smoke.spec.ts` with the test `home page responds`. It does `page.goto('/')` and asserts the response status is 200.
- [ ] **Step 5:** Run `pnpm build && pnpm test:e2e`. Expected: PASS, 1 test.
- [ ] **Step 6:** Write `.github/workflows/ci.yml`. It runs on every PR: `pnpm install --frozen-lockfile`, `check`, `lint`, `test`, `build`, `test:e2e`.
- [ ] **Step 7:** Run `pnpm check && pnpm lint && pnpm test`. Expected: all exit 0. Vitest reports no tests; pass `--passWithNoTests` until Task 3.
- [ ] **Step 8:** Fill in the commands in `AGENTS.md` and `README.md`. Add `CHANGELOG.md` lines under `Unreleased`.
- [ ] **Step 9:** Commit: `chore(setup): scaffold Astro with Tailwind and checks`.

### Task 2: Set the visual direction with Impeccable

Done in conversation on 2026-11-19: Charlito chose a simple, text-first direction like leerob.com. The direction contract lives in `.impeccable/surfaces/src-pages-index-astro.md`.

**Files:**
- Create: `PRODUCT.md`, `.impeccable/surfaces/src-pages-index-astro.md`
- Modify: `src/styles/global.css` (tokens only)

**Interfaces:**
- Produces: CSS custom properties in `src/styles/global.css`, exposed to Tailwind v4 through `@theme`. Later tasks use only these tokens, never raw values:
  - colors: `--color-surface`, `--color-text`, `--color-text-muted`, `--color-focus`, each with a dark value under `prefers-color-scheme: dark`
  - type: `--font-body` (system sans stack, no web font files), sizes `--text-sm`, `--text-base` (1rem), `--text-lg`
  - layout: `--measure` (36rem column width)

- [ ] **Step 1:** Write the tokens into `src/styles/global.css`, plus base element styles: body, links (text colour, thin underline that thickens on hover and focus), `:focus-visible` outline, and the reduced-motion rule.
- [ ] **Step 2:** Run `pnpm build`. Expected: exit 0.
- [ ] **Step 3:** Commit: `feat(design): add product context and design tokens`.

### Task 3: Site config and the work collection

**Files:**
- Create: `src/site.ts`, `src/content.config.ts`, `src/lib/work.ts`, `src/lib/contact.ts`, `src/content/work/habi.md` (front matter only, body `TODO` for now)
- Test: `src/lib/work.test.ts`, `src/lib/contact.test.ts`

**Interfaces:**
- Produces in `src/site.ts`:
  ```ts
  export const site = {
    name: 'Charlito Jr Mecarez',
    openTo: 'Open to full-time roles, collaborations and freelance work.',
    intro: 'TODO(charlito): one plain line about what you build',
    email: 'charlitomecarezjr@gmail.com',
    github: 'charlitomecarez',
    linkedin: undefined as string | undefined,
    tools: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Appwrite'],
  } as const;
  ```
- Produces in `src/content.config.ts`: the collection `work`, loaded with `glob({ pattern: '**/*.md', base: './src/content/work' })`. Schema: `title: string`, `pitch: string` (≤ 120 chars), `order: number`, `cover: image()`, `coverAlt: string` (non-empty), `repo: string().url()`, `stack: string[]`, `draft: boolean` (default `false`).
- Produces in `src/lib/work.ts`: `sortWork<T extends { data: { order: number; draft: boolean } }>(entries: T[]): T[]`. It drops drafts and sorts by `order`, lowest first.
- Produces in `src/lib/contact.ts`: `contactLinks(s: typeof site): { label: string; href: string }[]`. Order: Email (`mailto:`), GitHub (`https://github.com/<github>`), then LinkedIn only when `linkedin` is a non-empty string.

- [ ] **Step 1:** Write `work.test.ts`:
  - `sortWork drops drafts`: input orders `[2, 1(draft)]`, output has 1 entry with order 2.
  - `sortWork sorts by order`: input orders `[3, 1, 2]`, output `[1, 2, 3]`.
- [ ] **Step 2:** Write `contact.test.ts`:
  - `no LinkedIn link when linkedin is undefined`: labels equal `['Email', 'GitHub']`.
  - `no LinkedIn link when linkedin is empty`: same result for `linkedin: ''`.
  - `LinkedIn link when set`: `linkedin: 'https://www.linkedin.com/in/x'`, labels end with `'LinkedIn'`.
  - `email is a mailto link`: `href === 'mailto:charlitomecarezjr@gmail.com'`.
- [ ] **Step 3:** Run `pnpm test`. Expected: FAIL, modules not found.
- [ ] **Step 4:** Implement `site.ts`, `work.ts`, `contact.ts` and `content.config.ts`. Copy `docs/images/readme-banner.png` from the Habi repo to `src/assets/work/habi-banner.png` and point `cover` at it. Write `coverAlt` from the Habi README's alt text.
- [ ] **Step 5:** Run `pnpm test && pnpm check`. Expected: PASS, 6 tests; check exits 0.
- [ ] **Step 6:** Commit: `feat(content): add site config and work collection`.

### Task 4: Base layout and the home page

**Files:**
- Create: `src/layouts/Base.astro`, `src/components/ContactLinks.astro`, `src/components/WorkList.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/e2e/home.spec.ts`

**Interfaces:**
- Consumes: `site`, `contactLinks()`, `sortWork()`, the `work` collection, tokens from Task 2.
- Produces: `Base.astro` with props `{ title: string; description: string; image?: ImageMetadata }`. It renders `<html lang="en">`, the title as `<title>`, the meta description, `<link rel="canonical">` built from `Astro.site`, Open Graph tags, a skip link to `#main`, and a footer with `ContactLinks`.
- Produces: `WorkList.astro` with prop `{ entries: CollectionEntry<'work'>[] }`. Each row is the title as a link to `/work/<entry.id>` and the `pitch` as plain text. No image.

The home page renders the spec's sections in order: Intro, Open to, Work, About, Contact. Each section has an `<h2>`, except the intro, which holds the only `<h1>`. About renders Charlito's paragraphs from `src/content/about.md`. Until Charlito writes it, that file holds the single line `TODO(charlito): About`. It ends with one sentence: "Tools I use: " + `site.tools` joined with commas.

- [ ] **Step 1:** Write `home.spec.ts`:
  - `has one h1 with the name`: the `h1` text contains `Charlito Jr Mecarez`, and the `h1` count is 1.
  - `shows open-to line`: the page contains `site.openTo`.
  - `links to the Habi case study`: a link with `href="/work/habi"` exists.
  - `no empty or dead contact links`: every `a` in the footer has a non-empty `href`, and no link text is `LinkedIn` while `site.linkedin` is undefined.
  - `canonical uses the site URL`: `link[rel=canonical]` href starts with `https://charliworks-portfolio.pages.dev`.
  - `works without JavaScript`: in a context with `javaScriptEnabled: false`, the `h1` is visible and the Habi link navigates to `/work/habi`.
  - `no sideways overflow at 320px with 200% text`: set the viewport to 320×640, set `document.documentElement.style.fontSize = '200%'`, and assert `scrollWidth <= clientWidth`.
  - `no axe violations`: `new AxeBuilder({ page }).analyze()` returns 0 violations.
- [ ] **Step 2:** Run `pnpm build && pnpm test:e2e tests/e2e/home.spec.ts`. Expected: FAIL.
- [ ] **Step 3:** Build `Base.astro`, `ContactLinks.astro`, `WorkList.astro` and `index.astro` to match the FIRST VIEWPORT block of the direction contract. Use tokens only. Ship no client `<script>`.
- [ ] **Step 4:** Run the same command. Expected: PASS, 8 tests.
- [ ] **Step 5:** Commit: `feat(home): add base layout and home page`.

### Task 5: Habi case study page and the 404 page

**Files:**
- Create: `src/pages/work/[slug].astro`, `src/pages/404.astro`
- Modify: `src/content/work/habi.md` (the body)
- Test: `tests/e2e/work.spec.ts`

**Interfaces:**
- Consumes: the `work` collection, `sortWork()`, `Base.astro`.
- Produces: `getStaticPaths()` returns one path per entry from `sortWork()`, so drafts get no page.

`habi.md` has these `##` sections, in this order, matching spec items 1–7: "The problem", "What Habi does", "The rules it follows", "How I built it", "How it shipped", "What I learned" (only when Charlito gives notes; otherwise leave the section out), "Links". Draft sections 1–5 and 7 from these files in the Habi repo: `README.md`, `PRODUCT.md`, `CHANGELOG.md`, `docs/releases/index.md`. Quote the four rules from `PRODUCT.md` word for word. Use only facts that the repo proves, such as v1.0.0 to v2.0.2, 262 commits from 3 Nov to 13 Nov 2026, Expo, NativeWind, Supabase, free tiers, Android first, CI, end-to-end tests and a bundle budget. Count again at build time, because these numbers change.

- [ ] **Step 1:** Write `work.spec.ts`:
  - `habi page has the title as h1`: `/work/habi` `h1` contains `Habi`.
  - `habi page has the sections in order`: the `h2` texts equal the list above, minus "What I learned" when it is absent.
  - `habi page links to the repo`: a link with `href="https://github.com/charlitomecarez/habi"` exists.
  - `cover image has alt text and dimensions`: the first `img` has a non-empty `alt`, a `width` and a `height`.
  - `unknown work URL shows 404`: `/work/nope` returns status 404, and the page has a link to `/`.
  - `no axe violations` on `/work/habi` and on the 404 page.
- [ ] **Step 2:** Run `pnpm build && pnpm test:e2e tests/e2e/work.spec.ts`. Expected: FAIL.
- [ ] **Step 3:** Build `[slug].astro` and `404.astro` in the same column and tokens as the home page. Write the `habi.md` body.
- [ ] **Step 4:** Run the same command. Expected: PASS, 7 tests.
- [ ] **Step 5:** Ask Charlito to read the Habi copy and check every image for real data. Apply the edits.
- [ ] **Step 6:** Commit: `feat(work): add Habi case study and 404 page`.

### Task 6: Design audit, motion and the performance budget

**Files:**
- Create: `lighthouserc.json`, `tests/e2e/motion.spec.ts`
- Modify: `.github/workflows/ci.yml` (add the `lhci` step), the files that the audit findings touch

- [ ] **Step 1:** Write `motion.spec.ts`. The test `reduced motion stops animation` uses `page.emulateMedia({ reducedMotion: 'reduce' })` on `/` and `/work/habi`. For every element, it asserts that the computed `transitionDuration` and `animationDuration` are each `0s` or ≤ `0.01s`.
- [ ] **Step 2:** Run it. Fix `global.css` until it passes.
- [ ] **Step 3:** Write `lighthouserc.json`. It runs on `/` and `/work/habi` with the mobile preset. It asserts `categories:performance >= 0.9`, `largest-contentful-paint <= 2500`, `cumulative-layout-shift <= 0.1`, and `resource-summary:script:size <= 204800`.
- [ ] **Step 4:** Run `pnpm build && pnpm lhci`. Expected: all assertions pass.
- [ ] **Step 5:** Run the Impeccable audit on both pages. Fix each finding as a token change where possible. List any finding you accept, with the reason, in the PR.
- [ ] **Step 6:** Run `npx impeccable detect dist/`. Expected: no anti-pattern findings, or only the accepted ones.
- [ ] **Step 7:** Run the full set: `pnpm check && pnpm lint && pnpm test && pnpm build && pnpm test:e2e && pnpm lhci`. Expected: all exit 0.
- [ ] **Step 8:** Commit: `fix(ui): apply Impeccable audit and meet performance budget`.

### Task 7: Deploy to Cloudflare Pages

A deploy is an outward-facing action. Ask Charlito before each step that touches Cloudflare.

**Files:**
- Modify: `README.md` (hosting and deploy lines), `docs/adr/0002-hosting.md` (create), `CHANGELOG.md`

- [ ] **Step 1:** Write ADR 0002, "Hosting on Cloudflare Pages": the free tier, a `*.pages.dev` address now, and `charli.works` later.
- [ ] **Step 2:** Charlito connects the GitHub repo in the Cloudflare dashboard with build command `pnpm build`, output `dist`, and Node 22. Confirm the project name gives `charliworks-portfolio.pages.dev`. If the name differs, change `site` in `astro.config.mjs` to match.
- [ ] **Step 3:** Open a PR from `feat/portfolio-v1` to `main` with the charliworks PR template. Expected: CI passes and Cloudflare posts a preview URL.
- [ ] **Step 4:** Run `pnpm lhci` against the preview URL. Expected: assertions pass on the real host.
- [ ] **Step 5:** Run `pnpm build && grep -r "TODO(charlito)" dist`. Expected: no output, so every placeholder holds Charlito's own words.
- [ ] **Step 6:** Charlito merges. Confirm the live URL loads `/`, `/work/habi`, and a 404 page for `/work/nope`.
