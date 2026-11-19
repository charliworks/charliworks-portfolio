---
name: project-kickoff
description: Walk through the charliworks project kickoff checklist for a new product or repo. Use when starting a new project or turning an idea into a spec.
---

# project-kickoff

Guide the user through `charliworks-guides/00-start-here/project-kickoff.md`, one section at a time.

## Steps

1. **Define**: ask for the one-sentence pitch ("X helps Y do Z"), target users, the problem, MVP scope in/out, and the success metric. Draft a spec using `project-management/templates/spec.md`.
2. **Name**: propose a product and repo name following `engineering/naming.md`. Remind the user to check domain and store availability.
3. **Stack**: ask about the platform (web / mobile / game). Read the matching `platforms/*.md`. Draft ADR `0001-stack-choice.md` with the options considered.
4. **AI profile**: recommend the profile from `ai/setup/stack-profiles.md`.
5. **Repo setup**: list the files to create from `templates/` (README, AGENTS.md, .editorconfig, .gitignore, .env.example, GitHub templates).
6. **Data and compliance**: build the personal-data inventory using the questions in `market-ph/data-privacy.md`.
7. **Design**: ask for brand or palette direction, and set the performance budget from `engineering/performance-budgets.md`.
8. **Plan**: propose 2–4 milestones and the first 5–10 issues with T-shirt sizes.
9. Output a filled checklist, showing what's done and what's still open.

## Rules

- Ask one section at a time. Don't dump every question at once.
- Write drafts into files only after the user confirms.
- Mark assumptions clearly.
