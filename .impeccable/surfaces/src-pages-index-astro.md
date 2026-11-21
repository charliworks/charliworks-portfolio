---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/work"]
---

# Surface brief: Home and case study pages

Scope: `/` and `/work/<slug>`, plus 404. Mode: Experience. The ride leads; the content rides with it.

Audience: recruiters, collaborators and clients who skim first. Job: make them stay, want to know more about Charlito, then make contact (user, 2026-11-21).

Chosen direction: Golden Hour Ride (user pick, 2026-11-21), replacing the text-first column. User kept the Philippines scene idea and the pink and yellow accents; allowed three, lenis, gsap.

## Direction contract

THESIS: Scrolling the portfolio is one motorbike ride through the Philippines, from golden hour into night; each section is a stop on the road. It refuses the dark-neon dev template and the plain text column.

OWN-WORLD: A live three.js scene fixed behind the page: stepped rice terraces, Mayon's cone, palms, a road with the rider. Sky moves coral and amber, then rose and violet dusk, then navy night with stars and a yellow headlight. Display type is Anybody (variable width), stretched wide; body is the system sans. Pink marks links, selection and the odometer; yellow is light: the sun, the headlight, the name's highlighter, and what the headlight falls on at the close (the email address). No cards, glass or gradient text.

STORY: The visitor meets Charlito at sunset, rides to Habi, through experience, about and tools, and arrives at night at a large contact close centred in the headlight: the email address is the biggest link on the page. Heading scale varies by stop: where the content is the headline (Habi, About), the heading steps back.

FIRST VIEWPORT: Full-bleed scene. The name in huge wide display over the bright sky, top left, dark ink; role and intro under it; charliworks line; a fixed odometer bottom left reading km and stop (it reads first, like a dashboard), the pause control bottom right within thumb reach. Kilometre posts on the road shoulder echo the odometer in the world.

FORM: Golden Hour Ride, my top grounded candidate (pick card). seed:b95e071113c2183d

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

Scroll drives the camera along the road and the time of day together (lenis + GSAP ScrollTrigger). The display name widens with scroll speed like wind. Habi's cover tilts toward the pointer. About words light up as you read. Tools drift in rows with scroll velocity. Pause stops the scene (WCAG 2.2.2); reduced motion shows one still frame and plain reveals.
