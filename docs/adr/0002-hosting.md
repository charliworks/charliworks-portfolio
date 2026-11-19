# ADR 0002: Hosting on Cloudflare Pages

> Date: 2026-11-19 · Status: Accepted

## Context

The portfolio is a static Astro site. Charlito has no budget for hosting or a domain yet. The planned domain is `charli.works`, bought later. Many readers in the Philippines use mid-range phones on mobile data.

## Options considered

1. **Cloudflare Pages**: pros: free tier with no bandwidth cap, a global edge with points of presence in Manila, preview URLs per pull request, custom domains later at no cost. Cons: build settings live in the Cloudflare dashboard.
2. **GitHub Pages**: pros: free, no new account. Cons: no preview URL per pull request, fewer cache and header controls.
3. **Vercel or Netlify**: pros: free tiers and previews. Cons: bandwidth and build limits on the free tier.

## Decision

Cloudflare Pages on the free `*.pages.dev` address. Build command `pnpm build`, output directory `dist`, Node version from `.nvmrc` (24).

## Consequences

- Every pull request gets a preview URL to check before merge.
- The site URL lives only in `astro.config.mjs` `site`. Moving to `charli.works` is that one line plus the custom domain setting in Cloudflare.
- Security headers (CSP, HSTS) go in a `public/_headers` file when needed.
