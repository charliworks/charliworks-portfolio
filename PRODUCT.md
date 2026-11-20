# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7, Tailwind CSS v4, TypeScript. Static output, no client JavaScript by default. Hosted on Cloudflare Pages (free tier). See `docs/adr/0001-stack-choice.md`.

## Users

Three readers come to the personal portfolio of Charlito Jr Mecarez, a full-stack developer based in the Philippines who works remotely for anyone:

- people who hire for full-time roles
- people who want to build something together
- people who want to pay for client work

All three ask the same first question: "Is this person good, and can I trust them?" Most of them skim first and read deeper only when the work earns it.

## Product Purpose

The site proves Charlito's craft through real personal work and a real voice. It gives all three readers one clear way to make contact. Success means a reader reaches out by email, GitHub or LinkedIn after reading.

## Positioning

The work is built for one real life in the Philippines, not for a demo. Habi joins a motorbike's kilometres, GCash and MariBank, ulam under ₱99 and Taglish voice notes in one private app. It shipped from v1.0.0 to v2.0.1 with written release records, CI, end-to-end tests and a bundle budget. A template portfolio cannot claim either fact.

## Operating Context

- Recruiters open the link from a job application or LinkedIn, often on a phone, and skim in under a minute.
- Collaborators and clients read the case study to judge how Charlito thinks and ships.
- Many readers in the Philippines use mid-range Android phones on mobile data.

## Capabilities and Constraints

- Two pages: Home (`/`) and one case study per project (`/work/<slug>`), plus a 404 page.
- Case studies cover personal projects only. Employer work appears only as a row in the Home Experience section: role, company, years and one line. No employer code, screens or client names.
- Habi is the only project for now. The layout must accept two or three more later.
- No contact form, blog, CMS, analytics, skills grid, logo wall or percentage bars.
- Free tiers only, except the domain. The domain is not chosen yet: `charliworks.com` or `charli.works`.
- Performance budget: LCP ≤ 2.5 s on throttled 4G, CLS ≤ 0.1, initial JS ≤ 200 KB, Lighthouse mobile ≥ 90.

## Brand Commitments

- Displayed name: Charlito Jr Mecarez. Role: full-stack developer. Based in the Philippines, open to remote work anywhere.
- Open to full-time roles, collaborations and freelance work.
- Voice follows charliworks `design/brand-voice.md`: clear before clever, warm not cute, confident not hype, short.
- Charlito writes the personal copy: the intro line, About and "What I learned". Nobody invents opinions, feelings or history for Charlito.
- Anti-goal: the site must not look like a common UI design system or template.
- Standing preference (chosen 2026-11-19): simple, text-first, one narrow column, like leerob.com. The writing carries the identity, not decoration.
- Exceptions (chosen 2026-11-20): one hand-painted, animated hero on Home, and pink and yellow accents from the Grape soda logo. The site is light only.
- charliworks is Charlito's maker label, not the subject of the site. The site stays personal and speaks as "I". The label appears once on Home and once on each case study.

## Evidence on Hand

- Habi repo (public): `github.com/charlitomecarez/habi`. `README.md`, `PRODUCT.md`, `CHANGELOG.md`, `docs/releases/`.
- Habi images with sample data: `docs/images/readme-banner.png`, `docs/images/readme-icon.svg` in the Habi repo.
- Tools Charlito uses: Astro, Next.js, React, Tailwind CSS, Supabase, Appwrite.
- Absent: testimonials, client logos, employer work, real Habi data. Do not fabricate any of these.

## Product Principles

1. The work speaks first. Real projects and real facts outrank claims about skill.
2. Every page has one job. Cut anything that does not help a reader judge or contact Charlito.
3. Charlito's own words, or nothing. Placeholders stay visible until Charlito writes them.
4. Fast and light on a mid-range phone on mobile data.

## Accessibility & Inclusion

WCAG 2.2 AA (charliworks `design/accessibility.md`). Text stays readable at 200% zoom on a 320 px wide screen. The site respects `prefers-reduced-motion`.
