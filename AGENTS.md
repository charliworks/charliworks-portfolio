# AGENTS.md

This project follows the charliworks guides: <https://github.com/charliworks/charliworks-guides>

Read and follow the rules in its `AGENTS.md`. The most important ones:

- Conventional Commits (`type(scope): summary`, ≤ 72 chars); never commit to `main` directly
- Branches: `feat/…`, `fix/…`, `chore/…`, `docs/…`
- Never write secrets into code or commits; update `.env.example` when adding variables
- Ask before adding dependencies, changing the database schema, or deleting files
- Meet the Definition of Done before calling work finished

## About this project

- **What it is:** <one sentence: X helps Y do Z>
- **Stack:** Astro, Tailwind CSS, TypeScript (see `docs/adr/0001-stack-choice.md`); hosting to decide
- **Node:** the version in `.nvmrc` (24). Package manager: pnpm.
- **Run locally:** `pnpm dev`
- **Type check:** `pnpm check`
- **Test:** `pnpm test` (unit) and `pnpm build && pnpm test:e2e` (browser)
- **Lint:** `pnpm lint`

## Project-specific rules

- Public pages are statically generated ([platforms/web.md](https://github.com/charliworks/charliworks-guides/blob/main/platforms/web.md)).
- UI work follows [design/styling.md](https://github.com/charliworks/charliworks-guides/blob/main/design/styling.md) and [design/accessibility.md](https://github.com/charliworks/charliworks-guides/blob/main/design/accessibility.md). Run the Impeccable audit before a UI PR, if Impeccable is installed.
- Shared skills live in `.claude/skills/`. They are copies from `charliworks-guides/ai/skills/`. Update them from the source, not here.
