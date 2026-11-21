---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/work"]
---

# Surface brief: Home and case study pages

Scope: `/` and `/work/<slug>`, plus 404. Mode: Experience. The stickers lead; the content is printed on them or etched beside them.

Audience: recruiters, collaborators and clients who skim first. Job: make them stay, want to know more about Charlito, then make contact (user, 2026-11-21).

Chosen direction: Parol Night (user pick "Direction A" on the favicon-directions page, 2026-11-21), replacing the Golden Hour Ride. Built from the favicon: indigo ground, pink C, yellow sparkle. A Laptop Lid build was made by mistake first and discarded. User approved removing three, gsap and lenis.

## Direction contract

THESIS: The site is a Philippine night sky in December: the favicon's sparkle becomes parol lanterns hung over the page, and the content sits in their warm light. It refuses the dark-neon dev template and the plain text column.

OWN-WORLD: Deep indigo night, lighter at the top where the lanterns hang. Parol lanterns are the favicon's four-point sparkle in yellow, with two short pink tails like a parol's, on thin strings that start at the page's top edge, with a soft yellow glow. Smaller lanterns hang over Work and Tools and pool warm light on the cards below them. One rounded heavy face, Baloo 2, for everything. Pink is the name and links you act on; yellow is light: lantern, card titles, the email. Soft rounded cards with a translucent fill and a faint yellow edge, like light through capiz.

STORY: The visitor meets Charlito under the lanterns, reads Habi as the first lit card, then experience, about and tools, and ends under the biggest lantern, where the email is the brightest, largest link.

FIRST VIEWPORT: Header with the favicon and section links. Three lanterns hang from the top right on strings of different lengths. The name in large pink Baloo 2 top left, the role and intro under it, the charliworks line, then three cards: Habi, Experience, Say hi.

FORM: Parol Night, chosen whole by the user from the favicon-directions mock. seed: none (pinned) "it's this one right here … Direction A".

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

On first paint the lanterns swing as if just hung and settle within four seconds. After that they are damped pendulums: scrolling makes them lag and sway, a passing mouse is a breeze, and a tap swings one hard, flashes it and shakes loose a few falling sparks; each settles back to still. A warm spot follows the pointer inside capiz cards. One small script (src/scripts/lanterns.ts); the page reads the same without it. Reduced motion: nothing moves. The Habi cover morphs into the case page with a view transition.
