---
name: Charlito Jr Mecarez
description: A portfolio you ride. One motorbike trip through the Philippines, from golden hour into night, with each section a stop on the road.
colors:
  ink: "#24130b"
  cream: "#fff4e6"
  haze: "#e6cfe0"
  accent: "#ff7ac6"
  accent-day: "#b0236e"
  spark: "#ffe066"
  night: "#0a0f2a"
  sky-golden-top: "#e47a58"
  sky-golden-mid: "#f2a768"
  sky-golden-horizon: "#fde1a8"
  sky-sunset-top: "#6e2c52"
  sky-dusk-top: "#2c1d4c"
  sky-night-top: "#0e1540"
  frame-fill: "#2a1c3c"
typography:
  display:
    fontFamily: "Anybody, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 11.5vw, 9.5rem)"
    fontWeight: 850
    lineHeight: 0.86
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Anybody, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 11vw, 8rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 125"
  headline-quiet:
    fontFamily: "Anybody, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Anybody, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.6vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 120"
  statement:
    fontFamily: "Anybody, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 100"
  lead:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.35
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
  hud:
    fontFamily: "Anybody, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 85"
    fontFeature: "'tnum'"
rounded:
  focus: "3px"
  mark: "6px"
  logo: "8px"
  frame: "20px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  stop: "clamp(6rem, 16vh, 11rem)"
  title-gap: "clamp(2.5rem, 6vh, 4.5rem)"
  row: "2.25rem"
  rail: "12rem"
  container: "80rem"
  read: "42rem"
components:
  link:
    textColor: "inherit"
    typography: "{typography.body}"
  project-title:
    textColor: "{colors.cream}"
    typography: "{typography.headline}"
  project-title-hover:
    textColor: "{colors.accent}"
  project-cover:
    backgroundColor: "{colors.frame-fill}"
    rounded: "{rounded.frame}"
  contact-email:
    textColor: "{colors.spark}"
    typography: "{typography.title}"
  contact-email-hover:
    textColor: "{colors.cream}"
  odometer-km:
    textColor: "{colors.accent}"
    typography: "{typography.hud}"
  odometer-km-day:
    textColor: "{colors.accent-day}"
  pause-control:
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    height: "2.75rem"
  skip-link:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    padding: "8px 12px"
---

# Design System: Charlito Jr Mecarez

## Overview

**Creative North Star: "The Golden Hour Ride"**

The page is a road. A live three.js scene is fixed behind every page: terraced hills banded with paddies whose flooded levels take on the sky's colour at every time of day, Mayon's cone with smoke, palms, a nipa hut, kilometre posts on the shoulder and a rider on a motorbike. Scrolling drives the camera down the road and moves the time of day with it, from coral and amber golden hour, through rose and violet dusk, to navy night with stars, fireflies and a yellow headlight. Content does not sit in boxes on top of this world; it rides through it as large type set straight onto the sky.

Two voices carry everything. Anybody, a variable-width face pushed wide (112 to 150 percent), speaks for names, stops, titles and lists that should read as signage. The system sans carries reading text. Colour has strict jobs: pink marks what you can act on (links, selection, the odometer), and yellow is light (the sun, the headlight, the highlighter under the name, and the email address at the close). Text tone flips with the sky: dark ink while the sky is bright, cream once it darkens.

The world rejects the dark-neon developer template and the plain text column it replaced. There are no cards, no glass and no gradient text. Depth comes from the 3D scene and from soft veils of night, not from stacked surfaces.

**Key Characteristics:**
- A fixed 3D world behind every page, with a CSS sky gradient standing in until it is ready.
- Time of day as the page's colour system: five sky phases, keyed to sections through `data-sky`.
- Wide variable display type set directly on the scene, scaled per stop.
- Pink for action, yellow for light, and nothing else saturated in the type layer.
- A dashboard HUD: odometer bottom left, pause control bottom right.
- Static and fully readable without JavaScript; motion is layered on top and can be paused.

## Colors

A sunset that turns into night: warm brown ink and cream text over a sky that moves through five phases, with grape-soda pink and yellow as the only accents.

### Primary
- **Grape Soda Pink** (`accent`): links on hover and focus, the hovered project title, text selection, list markers in case studies, the scrollbar thumb and the odometer's kilometre reading. It always means "this responds to you".
- **Deep Grape** (`accent-day`): the odometer's kilometre reading while the tone is day. Light pink fails on the bright golden sky, so the reading darkens there. Day-tone pink text uses this value only.

### Secondary
- **Headlight Yellow** (`spark`): light in the world. The highlighter band under the second line of the name, the odometer progress bar, the "Read the case study" cue, bold text in case studies, the focus outline on night tone, and the contact email, which is the largest link on the page.

### Tertiary (the sky)
- **Golden Hour** (`sky-golden-top`, `sky-golden-mid`, `sky-golden-horizon`): the opening sky and the CSS fallback gradient.
- **Sunset Rose** (`sky-sunset-top`), **Dusk Violet** (`sky-dusk-top`), **Night Navy** (`sky-night-top`): the zeniths of phases 1, 3 and 4. Each phase also has a mid, horizon, sun and hemisphere colour; the full table lives in `src/scripts/phases.ts`, which is the single source shared by the scene, the CSS sky and the browser theme colour. Sections between phases interpolate (Tools sits at 3.5).

### Neutral
- **Ember Ink** (`ink`): text and focus outlines while the tone is day (the hero and the header over the bright sky).
- **Cream** (`cream`): text on night tone; every stop after the hero, the case study and the close. Also rules at 22 to 28 percent through `color-mix`.
- **Twilight Haze** (`haze`): secondary text on night tone. Dates, tool group labels, the year, stack lines, captions, the footer name.
- **Deep Night** (`night`): the page background under the world and the scrollbar track.
- **Frame Plum** (`frame-fill`): the fill behind an image frame while the image loads.

### Named Rules
**The Pink Acts, Yellow Shines Rule.** Pink is only for things you can act on or that report your position. Yellow is only for light: something lit, highlighted or glowing. Never swap them, and never add a third accent.

**The Sky Sets The Tone Rule.** A section's text colour follows its sky phase, not its own choice: phase below 0.5 is day (ink), anything later is night (cream and haze). New sections declare `data-sky` and `data-stop` and inherit the tone.

**The One Phase Table Rule.** Sky colours come from the phase table only. Do not hand-pick a background colour for a section.

## Typography

**Display Font:** Anybody, self-hosted variable woff2 with width 50 to 150 percent and weight 100 to 900 (falls back to the system sans)
**Body Font:** the system sans stack (ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial)

**Character:** Anybody stretched wide reads like painted road signage and roadside lettering; the system sans keeps long reading plain and fast. The pairing is loud where it names things and quiet where it explains them.

### Hierarchy
- **Display** (850, `clamp(3rem, 11.5vw, 9.5rem)`, 0.86): the name in the first viewport only. Its width runs from 118 percent and widens up to 32 points more with scroll speed (`--wind`).
- **Headline** (800, `clamp(2rem, 11vw, 8rem)`, 0.92, width 125 percent): stop titles where the list underneath is plain (Experience). Larger variants reuse the same voice: the project title (`clamp(3rem, 9vw, 6.5rem)`, width 150), the case study title (`clamp(4rem, 16vw, 12rem)`, width 150), and the Contact title (`clamp(2.25rem, 14vw, 12rem)`, width 140). Tools uses a mid step (`clamp(2rem, 7vw, 5rem)`).
- **Headline quiet** (800, `clamp(1.5rem, 2.6vw, 2.25rem)`, width 112): the stop title where the content itself is the headline (Work, About).
- **Title** (800, `clamp(1.75rem, 4.6vw, 3.25rem)`, width 120): company names in Experience, tool rows (700, `clamp(1.5rem, 4vw, 3rem)`), case study section headings (`clamp(1.9rem, 4vw, 2.75rem)`) and the contact email (700, `clamp(1.35rem, 4.8vw, 4rem)`, width 100).
- **Statement** (600, `clamp(1.75rem, 4.4vw, 3.5rem)`, 1.12, width 100): the About text, set in the display face at normal width, 62rem max.
- **Lead** (500, `clamp(1.25rem, 2.2vw, 1.6rem)`, 1.35): project pitches and the case study pitch. The hero role is 600 at 1.25rem.
- **Body** (400, 1.0625rem, 1.65): reading text; 1.125rem inside case studies with a 42rem measure.
- **Label** (600, 0.875rem): dates, tool group names, stack lines, captions.
- **HUD** (600, 0.8rem, width 85, tabular figures, uppercase, +0.04em): the odometer's stop name; the kilometre reading is 800 at 1.35rem.

### Named Rules
**The Heading Steps Back Rule.** Heading size varies by stop. Where the content is already the headline (the project, the About statement), the stop title drops to the quiet size; where the content is a plain list, the title leads big.

**The Width Is The Voice Rule.** Hierarchy in the display face comes from width as much as size: 150 percent for project names, 125 to 140 for stop titles, 100 for anything read as a sentence. Body text never uses the display face.

## Layout

Every page is a single vertical ride. Content sits in an 80rem container with a fluid side gutter (`clamp(1.25rem, 5vw, 4rem)`); each stop is a full-width section with generous vertical padding (`clamp(6rem, 16vh, 11rem)`) so the scene shows between stops. The first viewport and the contact close are each at least a full screen tall (`100svh`).

The hero is top left: name, then a 34rem column of role, intro and the charliworks line. The close is centred. Lists use a two-column rail from 760px up: a 12rem label column (dates, tool group) and a flexible content column, aligned on the baseline and separated by hairline rules. Project meta splits into two columns from 900px. Case studies read in a 42rem column centred under a full-width cover.

On narrow screens the rail collapses to one column, the header nav keeps only Contact (below 520px), and the odometer drops its stop name and track. Text stays readable at 200 percent zoom on a 320px screen; display words may break mid-word only in that case.

## Elevation & Depth

Depth is the world, not the interface. The 3D scene supplies perspective, fog and light; the type layer is flat on top of it. Readability over the scene comes from soft veils rather than panels: a radial and bottom vignette of night (`rgb(8 10 30 / 0.25)`) fades in once the tone turns to night, the hero has a warm haze of horizon colour behind its copy, and the long read in a case study sits on a band of night (`rgb(8 10 32 / 0.62)`) feathered to transparent at both sides.

### Shadow Vocabulary
- **Window drop** (`box-shadow: 0 40px 80px -30px rgb(10 6 30 / 0.65)`): under image frames only (project covers and the case study cover), so a screenshot reads as a window held up in the evening air.

### Named Rules
**The Veil Not Panel Rule.** When text needs help against the scene, add a feathered veil of sky or night behind it. Never put text in a box, card or blurred glass panel.

## Shapes

Type and images carry all the shape. Image frames are the only rounded containers (20px), and they open from an inset rounded clip (28px) to their full frame as they scroll in. Small brand images get gentle corners (favicon mark 5 to 6px, company logos 8px on a cream tile). Separators are 1px hairlines in cream at 22 to 28 percent. Icons are hand-drawn inline SVG strokes (arrows, the pause bars) at 1.8 to 2px with round caps. Nothing else has a border or a fill.

## Components

### Links
Inline, inherit their colour, and carry a quiet underline.
- **Rest:** 1px underline at 45 percent of the text colour, offset 0.24em.
- **Hover / Focus:** underline thickens to 2px and turns pink, over 200ms.
- **Header nav:** no underline at rest; pink underline on hover and focus.
- **Focus ring:** 2px yellow outline, 4px offset, 3px radius; ink on day tone.

### Project (Work)
The signature content block: a full-width cover image, then a huge wide title, year, pitch, stack and a yellow "Read the case study" cue with an arrow. The whole row is the click target. On hover or focus the title turns pink, the arrow moves 6px right, and on hover-capable devices the cover tilts toward the pointer (up to 8 by 6 degrees). The cover and title share view-transition names with the case study page, so opening a project morphs them into place.

### Experience row and Tool row
Two-column rows on a hairline rule: label on the left rail (haze, 600), content on the right. Experience rows slide in from the left as their rule draws itself. Tool rows set their items in the display face joined by middle dots, and drift apart sideways with scroll speed (alternating direction, 32px max on desktop, 6px on mobile), settling flush at rest.

### Contact close
A centred close at night: the Contact title in the widest display, the email in yellow as the biggest link on the page (hover turns it cream with a 3px pink underline), then the other links in a centred row at 1.25rem, 600.

### Odometer and pause (HUD)
Fixed to the bottom corners, above the content. The odometer reads kilometres (pink, tabular), the current stop in uppercase HUD type, and a 7rem progress track that fills in yellow. The pause control is a text button with drawn pause bars, at least 2.75rem tall, underlined like a link; pausing stops the scene and every CSS animation. Both follow the day and night tone.

### Header
Fixed, transparent, no background. The CJM mark (favicon plus wide display initials) on the left, section links on the right. It slides away while you ride down past 240px and returns when you scroll up or tab into it.

### Motion
Scroll is smoothed (lenis, lerp 0.09) and drives the camera, sky phase (tweened 1.4s) and odometer through GSAP ScrollTrigger. Entrances use one curve, `cubic-bezier(0.16, 1, 0.3, 1)` in CSS and `expo.out` in GSAP: big headings rise out of a clipped line, copy fades up 16px, rows and contact links arrive in staggers of 80 to 120ms. The About statement lights from 40 percent to full opacity word by word as you read. Under reduced motion the scene holds one still frame, smooth scroll is off and reveals are instant.

## Do's and Don'ts

### Do:
- **Do** declare every new section with `data-sky` (a phase from 0 to 4) and `data-stop` (the odometer name), and let tone and sky follow from it.
- **Do** set names, stop titles and lists of things in Anybody at 112 to 150 percent width; set sentences in the system sans.
- **Do** step the stop title down to the quiet size when the content below it is already the headline.
- **Do** keep pink for links, selection and the odometer, and yellow for light, highlights and the contact email.
- **Do** use the darker pink (`accent-day`) for any pink text on the day sky.
- **Do** help text over the scene with a feathered veil of night or horizon haze.
- **Do** keep every page readable with JavaScript off, honour reduced motion with a still frame, and keep the pause control visible whenever anything moves.

### Don't:
- **Don't** put content in cards, glass panels or tinted boxes; image frames are the only rounded containers.
- **Don't** use gradient text or a third accent colour.
- **Don't** pick section backgrounds by hand; the sky comes from the phase table.
- **Don't** set body paragraphs in the display face or at a stretched width.
- **Don't** add tracked uppercase labels above headings; uppercase tracking belongs to the odometer and the scroll cue only.
- **Don't** use light pink (`accent`) text on the day sky; it fails contrast there.

### Link Preview Image
`public/og.jpg` is a 1200 × 630 Playwright capture of the built Home first viewport, with the HUD, pause control, scroll cue, nav, intro and brand lines hidden. Every page uses it as `og:image`, except a case study, which uses its cover. Capture it again when the name, the role or the hero changes; its origin is embedded in the file.
