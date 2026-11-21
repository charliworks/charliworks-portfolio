---
name: Charlito Jr Mecarez
description: A courier tracking page for the work. Each project is a parcel with a tracking number, a delivery road and its real release log.
colors:
  ground: "#eeeaf6"
  card: "#ffffff"
  card-soft: "#faf8fd"
  hair: "#e3dcef"
  dash: "#d3c9e6"
  ink: "#1d1438"
  indigo: "#2b1b5e"
  muted: "#5d5379"
  action: "#b0236e"
  stamp: "#ffe066"
  on-indigo: "#ffffff"
  on-indigo-soft: "#d9cff7"
typography:
  display:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 122"
  display-title:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 12vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 120"
  headline:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 120"
  tagline:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  subhead:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.6vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  lede:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  pitch:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.4rem)"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.45
  status:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 900
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 112"
  step:
    fontFamily: "'Archivo', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    letterSpacing: "0.05em"
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  data:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    fontFeature: "'tnum'"
rounded:
  checkbox: "3px"
  focus: "4px"
  chip: "6px"
  logo: "8px"
  row: "10px"
  photo: "12px"
  label: "14px"
  card: "18px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 5vw, 3rem)"
  card-inset: "clamp(1rem, 3vw, 1.75rem)"
  card-body: "clamp(1.25rem, 3vw, 2rem)"
  stack: "1.25rem"
  parcel-gap: "2rem"
  section-gap: "clamp(1.75rem, 4vh, 2.5rem)"
  section-top: "clamp(4rem, 11vh, 7rem)"
  container: "76rem"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.indigo}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.1rem"
    height: "2.75rem"
  button-hover:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.on-indigo}"
  status-stamp:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.ink}"
    typography: "{typography.status}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 1rem"
  step-pill:
    backgroundColor: "transparent"
    textColor: "{colors.indigo}"
    typography: "{typography.step}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.7rem 0.3rem 0.45rem"
  step-pill-delivered:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.on-indigo}"
  chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.chip}"
    padding: "0.3rem 0.7rem"
  parcel-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
  parcel-header:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.on-indigo}"
    padding: "1rem clamp(1rem, 3vw, 1.75rem)"
  parcel-footer:
    backgroundColor: "{colors.card-soft}"
    textColor: "{colors.muted}"
    padding: "0.9rem clamp(1rem, 3vw, 1.75rem)"
  log-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.row}"
    padding: "0.55rem 0.5rem"
  log-row-hover:
    backgroundColor: "{colors.card-soft}"
  shipping-label:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
  contact-email:
    textColor: "{colors.action}"
  contact-email-hover:
    textColor: "{colors.indigo}"
---

# Design System: Charlito Jr Mecarez

## Overview

**Creative North Star: "The Courier Tracking Page"**

The site reads like the tracking page of a Philippine courier: a pale lavender-grey ground, white tracking cards with an indigo header bar, tracking numbers in mono, a yellow Delivered stamp, barcodes and dashed tear lines. Each project is a parcel. Its record is the real release history, laid out as a dated tracking log under a delivery line that fills from the first release to the latest, led by a glowing marker. The world proves shipping with receipts rather than claims.

The voice is loud and practical: names and headings are set heavy, wide and tight in Archivo, the way a depot sign or a waybill header is. Everything factual (versions, dates, counts, field keys) drops into JetBrains Mono, so the eye can tell a claim from a record at a glance. Density is generous between sections and tight inside cards, where rows, keys and values sit close like a printed label.

Motion exists only to tell the shipping story: the line fills, the steps light in order, the status stamps Delivered. Without JavaScript or with reduced motion, every parcel simply shows its delivered state. The site is light-only (`color-scheme: light`).

**Key Characteristics:**
- Lavender-grey ground, white cards, indigo header bars, one soft card shadow.
- Archivo at weight 900 and widened (112 to 122% width) for every name and heading.
- JetBrains Mono strictly for tracking numbers, versions, dates, field keys and counts.
- Yellow appears as the Delivered stamp, nowhere as a field.
- Magenta marks the trail: link underlines, focus rings, the road fill, the latest release, the current job, the email.
- Courier devices are native: barcodes, dashed tear lines, sender and send-to labels, a packing list, checkbox bullets.

## Colors

A cool lavender-grey paper world with one deep indigo, one magenta for movement and action, and a single warm yellow that only means delivered.

### Primary
- **Courier Indigo** (`indigo`): The parcel header bar, the manifest header, outlined buttons and their hover fill, step pills, chips, the hero name, versions in the log, the skip link. The structural color of the world.
- **Trail Magenta** (`action`): Link underlines and hover color, the focus ring, the caret, the road fill and its release ticks, the latest log dot, the current job's route dot, the hero tagline, the "last delivery" note and the contact email. 6.3:1 on white, 5.4:1 on the ground.

### Secondary
- **Delivered Yellow** (`stamp`): The Delivered status stamp, and text selection. Ink on yellow reads at 13:1.

### Neutral
- **Courier Ground** (`ground`): The page background and the browser theme color.
- **Card White** (`card`): Parcel cards, sender and send-to labels, the manifest, chips, route dots, inline code.
- **Soft Slip** (`card-soft`): Card footers, label footers and the hover state of log rows and the sender's proof row.
- **Hairline** (`hair`): The road track, the log's top rule, photo and logo borders, inline code borders.
- **Tear Line** (`dash`): Dashed separators (card footers, packing-list rows), the dashed route line between jobs, idle log dots.
- **Label Ink** (`ink`): Body text, headings, label borders and the case-study section rules.
- **Faded Ink** (`muted`): Secondary copy, dates, field keys, captions, footers. 6:1 on the ground, 7:1 on white.
- **On Indigo** (`on-indigo`) and **Soft On Indigo** (`on-indigo-soft`): Text on the indigo bar; the soft one for "Tracking no." and manifest keys (10:1).

### Named Rules
**The Earned Stamp Rule.** Yellow means delivered. It is the status stamp and the selection highlight, never a background panel, a text color or decoration.

**The Magenta Trail Rule.** Magenta marks where to go and how far the work has come: links, focus, the road fill, the latest release, the current job. It is never a surface fill and never the button color; buttons are indigo.

## Typography

**Display Font:** Archivo, variable weight 100 to 900 and width 62 to 125%, self-hosted (with ui-sans-serif, system-ui)
**Body Font:** Archivo (same file)
**Label/Mono Font:** JetBrains Mono, self-hosted (with ui-monospace, SFMono-Regular, Menlo)

**Character:** A heavy, wide grotesque that reads like courier signage, paired with a clean mono that reads like the printout. Width carries the loudness more than size does.

### Hierarchy
- **Display** (900, widened 122%, `clamp(3rem, 9.5vw, 6rem)`, 0.86): The name in the first viewport, in indigo.
- **Display Title** (900, widened 120%, `clamp(3.5rem, 12vw, 6rem)`, 0.9): The project name on its full tracking page; also the 404 headline at a similar scale.
- **Headline** (900, widened 118%, `clamp(2.25rem, 6vw, 4.25rem)`, 0.9, uppercase): Section headings (Work, Experience, About, Tools, Contact). Case-study `h2`s use a smaller uppercase cut (`clamp(1.6rem, 3.6vw, 2.25rem)`) over a 2px ink rule.
- **Title** (900, widened 120%, `clamp(2.5rem, 7vw, 4.5rem)`, 0.9): The project name on a home parcel.
- **Tagline** (900, widened 112%, `clamp(1.75rem, 4.4vw, 3rem)`, 1): "Track what I ship." in magenta under the name.
- **Subhead** (900, widened 112%, `clamp(1.5rem, 3.6vw, 2.25rem)`): Company names in the experience route.
- **Lede** (700, `clamp(1.6rem, 3.6vw, 2.75rem)`, 1.15): The About statement, max 52rem.
- **Pitch** (600, `clamp(1.15rem, 2vw, 1.4rem)`, 1.35): A parcel's one-line pitch, max 36rem.
- **Body** (400, 1.0625rem, 1.6): Running copy; case-study prose at max 42rem. **Body Large** (700, 1.25rem) for the role line and job titles.
- **Status / Step** (900 at 0.95rem, 800 at 0.78rem, uppercase, tracked 0.04 to 0.05em): The Delivered stamp and the four step pills.
- **Label** (JetBrains Mono 700, 0.68 to 0.72rem, tracked 0.08em, uppercase): Field keys on labels and cards ("Tracking no.", "From", "Send to", "Packing list").
- **Data** (JetBrains Mono, 0.72 to 0.85rem, tabular figures): Tracking numbers (700, up to 1.2rem), versions (700, indigo), dates, counts, card footers.

### Named Rules
**The Receipts Are Mono Rule.** JetBrains Mono is for records only: tracking numbers, versions, dates, field keys, quantities. Prose, headings and buttons are never mono.

**The Wide Heavy Rule.** Every name and heading is Archivo 900, widened 112 to 122%, with tight negative tracking. Hierarchy comes from width and size, not from switching faces.

## Layout

A single centered column, max 76rem, with a fluid side gutter (`clamp(1rem, 5vw, 3rem)`). Sections open with generous top space (`clamp(4rem, 11vh, 7rem)`) and a headline, then a 1.75 to 2.5rem gap to their content. Parcels stack in one column 2rem apart; they are wide cards, not a grid of tiles.

The first viewport splits at 960px into the name block and a 20rem sender label beside it; below that the label follows the text at max 24rem. Every dated list uses a fixed date column (7rem in the release log, 9rem in the experience route) beside a dot column and the text; under 560px (log) and 640px (route) the date moves above the text and the dot column stays. The four step pills become a 2 by 2 grid under 480px so Delivered never sits alone. The packing list adds a fixed 12rem group column from 760px. Text measures are capped: 36rem for pitch and intro, 40 to 42rem for summaries and case prose.

### Named Rules
**The Tracking Log Rule.** Anything dated is a log: a mono date column, a dot on a line, then the entry. Release history and job history share this form.

## Elevation & Depth

Depth is a single soft lift. Every card-like surface (parcels, the sender label, the send-to label, the packing list) carries the same two-layer shadow, a tight 1px contact shadow plus a long, soft, indigo-tinted drop below. Labels add a 2px ink border on top of that shadow to read as printed stickers. There is no layering beyond that: no stacked cards, no hover lifts.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 1px 2px rgb(29 20 56 / 0.06), 0 18px 40px -24px rgb(29 20 56 / 0.45)`): All cards and labels, at rest.
- **Active halo** (`box-shadow: 0 0 0 4px rgb(176 35 110 / 0.16)`, 5px on the route): The current point on a log: the latest or hovered release dot, the current job's dot.

### Named Rules
**The One Lift Rule.** Cards have one shadow and it never changes with state. Interaction changes color and fill, never elevation.

## Shapes

Rounded but not soft. Cards round at 18px and labels at 14px; the cover photo inside a card at 12px; log rows highlight at 10px. Anything that states a status or invites a click is a full pill (999px): the Delivered stamp, the step pills, buttons. Tags in the packing list are near-square (6px), so a tag never reads as a status. Borders are 1.5 to 2px and come in three kinds: solid indigo on pills and chips, solid ink on labels, and dashed tear lines (`dash`) between a card body and its footer and between packing-list rows. The sender label sits slightly rotated (1.2deg, -0.8deg when stacked) like a sticker slapped on.

## Components

### Buttons
Outlined, confident, and only indigo.
- **Shape:** Full pill (999px), 1.5px indigo border, min height 2.75rem.
- **Primary:** Transparent with indigo text, Archivo 700, padding 0.55rem 1.1rem; an optional 1rem arrow icon after the label.
- **Hover / Focus:** Fills indigo with white text over 200ms on the shared ease-out; the arrow nudges 3px forward over 300ms. Focus also gets the global 2px magenta ring, 3px offset.
- **Text links** (Source on GitHub, nav, inline): Inherit color with a 1.5px magenta underline at 0.2em offset; hover turns magenta and thickens to 2.5px. Nav links hide the underline until hover.

### Chips
- **Style:** White fill, 1.5px indigo border, 6px corners, indigo Archivo 700 at 0.9rem. Used for tools in the packing list, each group followed by a mono quantity.

### Cards / Containers
- **Parcel card:** White, 18px corners, card lift, clipped. Indigo header bar with "Tracking no." key and the mono tracking number (`TITLE-version`) on the left, the status stamp on the right. Body padding `clamp(1.25rem, 3vw, 2rem)` by the card inset, 1.25rem stack gap. Footer on Soft Slip behind a dashed tear line, with the mono shipping summary and a barcode.
- **Shipping label** (sender label in the hero, send-to label in the footer, packing list): White, 14px corners, 2px ink border and ink row dividers (the packing list instead uses the indigo bar and dashed rows), mono field keys over heavy values, a barcode in the foot.

### Navigation
- **Style:** The favicon mark at left, section links at right in Archivo 700 at 0.95rem (0.875rem under 560px), wrapping as needed. Underline hidden at rest, magenta on hover and focus. A skip link in an indigo pill appears on focus.

### Parcel Drive (signature)
The road is a 4px hairline track with a magenta fill and white ticks ringed in magenta at each release's position by date. A magenta marker with a white ring and a soft magenta halo leads the fill; mono start and end dates sit under its ends. Below, the four step pills (Built, Tested, Released, Delivered, the last filled indigo) and the release log, newest first, with the latest row's dot in magenta and its halo.
- **Armed state:** With JavaScript and motion allowed, a parcel starts at the first release: road at 0, step pills dashed and muted, status an empty dashed outline tilted -4deg at 92% scale.
- **Drive:** When 30% of the parcel is in view, the marker and fill travel over 2.4s (`cubic-bezier(0.45, 0, 0.2, 1)`), the steps light 700ms apart from 200ms, and the stamp lands at 2.5s.
- **Scrub:** Hovering or focusing a log row moves the marker to that release over 600ms; leaving returns it to the latest.
- **Fallback:** No script or reduced motion means the delivered state, fully drawn.

### Release Log
- **Style:** Rows on a 7rem mono date column, a 10px dot and the text; mono indigo version, then the note. Hover and focus tint the row Soft Slip and turn its dot magenta. On home, the newest four and the first release show, with a "+ N more releases in between" line.

### Proof of Delivery
- **Style:** A frame clipped to 12px with a hairline border on indigo, captioned "Proof of delivery. Screens show sample data." When a project has a `video` (Habi does), the frame holds a muted, looping HyperFrames clip at 8:5: three real Habi clips from habi-site (Home in a phone, Todos and Vault as cards) on Habi's indigo, 30 s so every clip loops without a seam. Source lives in `video/compositions/proof.html` (wide, 8:5) and `video/compositions/proof-phone.html` (portrait 4:5, the Home phone alone, served under 600px so its text stays readable); `video/render.sh` writes both to `public/media/` with `.webp` posters. It plays only while on screen, never with reduced motion (the poster stays), and always has a Pause button, which sits under the frame beside the caption so it never covers the screens; one button controls both cuts. Without a video the cover image shows instead, cropped to the phones on home and zoomed to the middle three under 600px. The frame morphs into the case page through a 450ms single-element view transition.

### Unused clip source
- `video/compositions/tracking.html` is a live-tracking strip made for the hero's sender label, then removed: it repeated the parcel's line-fill right above it, and its text was too small at the label's 320px width. It is kept as source only, is not rendered by default (`video/render.sh tracking` renders it), and nothing on the site uses it.

### Contact Email
- **Style:** The largest link on the send-to label: Archivo 900, widened 105%, `clamp(1.3rem, 4.2vw, 2.6rem)`, magenta with a 2px underline; hover turns it indigo. Other contacts follow as outlined buttons.

## Do's and Don'ts

### Do:
- **Do** put every project in a parcel card: indigo header with the mono tracking number, the status stamp, the road and steps, the release log, proof of delivery, a dashed-off footer with a barcode.
- **Do** set names and headings in Archivo 900 widened 112 to 122% with negative tracking, and section headings uppercase.
- **Do** use JetBrains Mono with tabular figures for versions, dates, counts, tracking numbers and field keys.
- **Do** use the one card lift (`0 1px 2px rgb(29 20 56 / 0.06), 0 18px 40px -24px rgb(29 20 56 / 0.45)`) for every card and label.
- **Do** draw anything dated as a log: mono date column, dot on a line, entry.
- **Do** use courier devices where they carry meaning: barcodes, dashed tear lines, sender and send-to labels, packing-list checkboxes.
- **Do** let motion only tell the shipping record, on the shared ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), and show the finished, delivered state without script or with reduced motion.

### Don't:
- **Don't** use the yellow stamp color for text, panels or decoration; it means delivered.
- **Don't** fill buttons or surfaces with magenta; buttons are indigo outlines that fill indigo on hover.
- **Don't** set prose, headings or buttons in mono.
- **Don't** add a second shadow, a hover lift or stacked depth.
- **Don't** make a status look like a tag or a tag look like a status: pills for status and actions, 6px corners for tags.
- **Don't** animate anything that is not part of a parcel's delivery or a page transition.
- **Don't** show a parcel as delivered without real release data; with none, it reads "In transit".
