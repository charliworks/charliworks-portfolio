---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/work"]
---

# Surface brief: Home and case study pages

Scope: `/` and `/work/<slug>`. Mode: Experience. The work and the writing lead; the interface recedes.

Audience: recruiters, collaborators and clients who skim first. Job: judge whether Charlito is good and trustworthy, then make contact.

Chosen direction: the category standard, by Charlito's choice after two rounds, executed at full craft. Reference: leerob.com, a text-first single column.

## Direction contract

THESIS: The writing is the design. One narrow column of plain text and links, with one hand-painted hero on Home (user exception, 2026-11-20). It refuses project cards, buttons and any other decoration.

OWN-WORLD: Light only. Near-white ground, near-black text, one mid grey for dates and secondary text, links in text colour with a thin underline. Pink and yellow from the Grape soda logo appear only as marks: the hover underline, the text selection and the highlighter behind the name. System sans stack, one weight for body, medium for the name and headings. No borders, cards, shadows, gradients or icons in the interface.

STORY: The visitor reads who Charlito is, sees Habi as the work, reads how it was built, and emails or opens GitHub.

FIRST VIEWPORT: Left-aligned column about 36rem wide, top padding about 6rem. The 3:1 hero painting with its pause control, then the name in medium weight at body size plus one step, with the yellow highlighter. The charliworks label line follows the intro. Two short bio paragraphs. A "Work" heading with one row: "Habi" and its one-line pitch. A "Contact" row of plain links. All of it fits in the first viewport on desktop.

FORM: The canon, executed straight. Position on the ordered list: not on it (user pin). seed:74e981de92457ae6

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

The hero painting: clouds, smoke, sun glow, motorbike and wind run all the time; hover or the first 120px of scroll raises the wind. A "Pause motion" control stops it (WCAG 2.2.2). Also: the link underline thickens and turns pink over 150 ms, the whole work row is the click target, view transitions move the cover and title between pages, and blocks fade in on scroll. Reduced motion stops all of it.

## Unresolved

- Bio and intro text: Charlito writes them.
- LinkedIn URL: to come.
