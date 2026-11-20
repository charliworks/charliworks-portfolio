# charliworks portfolio

> <One-sentence pitch: X helps Y do Z.>

**Codename:** charliworks-portfolio · **Status:** prototype · **Platform:** web

## Getting started

```bash
git clone <url>
cd charliworks-portfolio
cp .env.example .env   # fill in values; see comments in the file
pnpm install
pnpm dev       # http://localhost:4321
```

## Stack

- Framework: Astro, Tailwind CSS, TypeScript
- Database / auth: none
- Hosting: Cloudflare Pages (`*.pages.dev`), see `docs/adr/0002-hosting.md`. Build: `pnpm build`, output `dist`.
- Node: 24 (see `.nvmrc`)
- Key decisions: see `docs/adr/`

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build the static site into `dist/` |
| `pnpm preview` | Serve `dist/` locally |
| `pnpm check` | Type check with `astro check` |
| `pnpm lint` | ESLint and Prettier check |
| `pnpm format` | Format the code with Prettier |
| `pnpm test` | Unit tests (Vitest) |
| `pnpm test:e2e` | Browser tests (Playwright) against `pnpm preview` on port 4329 |
| `pnpm lhci` | Lighthouse CI against the performance budget |

## Project rules

This project follows [charliworks-guides](https://github.com/charliworks/charliworks-guides). AI assistants: see `AGENTS.md`.

## Privacy

Personal data inventory: `docs/privacy.md`

## License

<MIT | Proprietary>
