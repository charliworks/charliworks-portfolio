# ADR 0001: Stack choice

> Date: 2026-11-19 · Status: Accepted

## Context

The charliworks portfolio is a public website. It must rank in search and load fast. [platforms/web.md](https://github.com/charliworks/charliworks-guides/blob/main/platforms/web.md) says to use TypeScript and to statically generate public pages. The guides do not name a default web stack yet. This ADR sets the stack for this project.

## Options considered

1. **Astro + Tailwind CSS**: pros: static output by default, little client JavaScript, easy to meet the performance budget, content collections for case studies. Cons: less suited to an app with much client state.
2. **Next.js + Tailwind CSS**: pros: React, SSG and SSR, room for dynamic features. Cons: more client JavaScript by default, more setup for a mostly static site.

## Decision

Astro with Tailwind CSS and TypeScript.

## Consequences

- Pages ship as static HTML. The site meets the web performance budget with less effort.
- Interactive parts need Astro islands with a UI framework. Pick that framework in a new ADR when the first island is needed.
- Hosting is still open. Record it in a new ADR.
- This is the first charliworks web stack decision. Consider a PR to charliworks-guides that records it as the default in `platforms/web.md`.
