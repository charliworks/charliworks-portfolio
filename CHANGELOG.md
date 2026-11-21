# Changelog

All notable changes to this project are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Unreleased

### Added

- Project rules from charliworks-guides: `AGENTS.md`, `CLAUDE.md`, repo templates, and shared Claude Code skills.
- ADR 0001: stack choice (Astro + Tailwind CSS).
- Astro 7 project with Tailwind CSS v4, type check, ESLint, Prettier, Vitest, Playwright and CI.
- Home page and Habi case study in a simple, text-first design, with a 404 page.
- Reduced-motion and Lighthouse budget checks in CI.
- ADR 0002: hosting on Cloudflare Pages.

### Changed

- Redesigned Home, the case study and the 404 page as one motorbike ride through the Philippines: a three.js scene behind the page moves from golden hour to night as you scroll, with smooth scroll (lenis) and scroll-linked motion (GSAP). Content is unchanged.
- New display face: Anybody (variable width), self-hosted.
- New link preview image from the redesigned first screen.
- Polish: every section link now shows on phones; the pause control comes early in the tab order and its icon shows play or pause; the name's wind stretch no longer reflows or clips; headings rise inside a still mask; the Habi cover keeps its shadow during the scroll reveal and morphs as one image into the case study; the 3D scene idles when paused, adapts its resolution on slow devices and falls back to the CSS sky if WebGL is lost.

### Removed

- Less text: the Habi case study drops "The rules it follows" and keeps the first sentence of each build note and the one-line release fact; the "Read the case study" and "Scroll" labels are gone.

- The hand-painted SVG hero (`HeroArt.astro`).
