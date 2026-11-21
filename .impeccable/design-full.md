---
name: Charlito Jr Mecarez
description: A Philippine night sky in December. Parol lanterns hang over the page, and the work sits in their warm light.
colors:
  night: "#170e38"
  indigo: "#2b1b5e"
  dusk: "#3d2a80"
  moon: "#f4efff"
  lavender: "#d9cff7"
  mist: "#b9addf"
  pink: "#ff7ac6"
  yellow: "#ffe066"
  parol-core: "#fff6c4"
  string: "#8d7cc7"
  capiz: "rgb(255 255 255 / 0.06)"
  capiz-edge: "rgb(255 224 102 / 0.3)"
  capiz-edge-lit: "rgb(255 224 102 / 0.75)"
  hairline: "rgb(255 255 255 / 0.12)"
typography:
  display:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  display-title:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 14vw, 8rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  display-close:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
  lede:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3.6vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  pitch:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)"
    fontWeight: 700
    lineHeight: 1.3
  card-title:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
  body-lg:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.45
  body:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Baloo 2', ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  focus: "4px"
  chip: "6px"
  mark: "8px"
  logo: "10px"
  inset: "16px"
  card: "22px"
spacing:
  gutter: "clamp(1rem, 5vw, 4rem)"
  container: "80rem"
  section-top: "clamp(4.5rem, 12vh, 8rem)"
  section-gap: "clamp(2rem, 5vh, 3rem)"
  card-gap: "1rem"
  list-gap: "2rem"
  card-pad: "1rem 1.25rem 1.15rem"
components:
  capiz-card:
    backgroundColor: "{colors.capiz}"
    textColor: "{colors.lavender}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  capiz-card-lit:
    backgroundColor: "{colors.capiz}"
    textColor: "{colors.lavender}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  card-title:
    textColor: "{colors.yellow}"
    typography: "{typography.card-title}"
  link:
    textColor: "{colors.moon}"
  link-hover:
    textColor: "{colors.pink}"
  nav-link:
    textColor: "{colors.moon}"
  contact-email:
    textColor: "{colors.yellow}"
  skip-link:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.night}"
    rounded: "{rounded.logo}"
    padding: "0.5rem 0.9rem"
  job-logo:
    backgroundColor: "{colors.moon}"
    rounded: "{rounded.logo}"
    padding: "3px"
---

# Design System: Charlito Jr Mecarez

## Overview

**Creative North Star: "Parol Night"**

The site is a Philippine night sky in December. The favicon's four-point sparkle becomes parol lanterns hung on thin strings from the top of the page, and the content sits in their warm light. The ground is deep indigo, lightest at the top where the lanterns hang. One rounded, heavy face, Baloo 2, speaks for everything, so the page reads friendly and confident instead of technical.

Colour has two jobs and they never swap. Pink is the name, the close and the links you act on. Yellow is light: the lanterns, their glow, card titles, case titles and the email at the close. Moon, lavender and mist are the text under that light, in falling order of emphasis. Surfaces that a lantern lights are capiz cards: soft rounded panels with a barely-there white fill, a faint yellow edge and a wash of yellow from above, like light coming through a thin shell. Sections that are not lit (Experience, About) set type straight onto the night.

Motion belongs to the lanterns. They swing as if just hung, then settle; after that they are damped pendulums pushed by scroll, a passing pointer and a tap. The page reads the same without the script and with reduced motion nothing moves. The world rejects the dark-neon developer template and the plain text column.

**Key Characteristics:**
- Deep indigo night with a radial lift at the top right, never a flat black.
- Parol lanterns (yellow four-point star, pale core, two pink tails, soft glow) hung from the page's top edge.
- One rounded heavy face, Baloo 2, from 400 to 800, for every role.
- Pink acts, yellow lights; text steps moon, lavender, mist.
- Capiz cards with 22px corners, a translucent fill and a faint yellow edge.
- Glow is the only depth: drop-shadow and text-shadow in yellow, no offset shadows.

## Colors

A night palette taken straight from the favicon: indigo ground, pink C, yellow sparkle.

### Primary
- **Parol Yellow** (`yellow`): light. Lantern bodies, the spark beside every section heading, card titles, project and case titles, the role line under the name, job roles, strong text in case studies, the email at the close, focus rings, the skip link and the scrollbar thumb.
- **Parol Core** (`parol-core`): the pale inner star of a lantern only.

### Secondary
- **Sampaguita Pink** (`pink`): action and voice. The hero name, the "Say hi" close, the 404 title, link underlines and link hover colour, lantern tails, selection and the caret.

### Neutral
- **Night** (`night`): the page ground and selection ink.
- **Indigo** (`indigo`): the middle of the sky gradient, image placeholders behind covers, and the browser theme colour.
- **Dusk** (`dusk`): the bright top of the sky, at the radial gradient's centre only.
- **Moon** (`moon`): primary text, section headings, company names, the about lede, and the plate behind job logos.
- **Lavender** (`lavender`): reading text: intro, card body, job summaries, case-study prose.
- **Mist** (`mist`): quiet labels: dates, stack lines, figcaptions, the brand line, the footer name.
- **String** (`string`): lantern strings only, faded in from transparent.
- **Capiz, Capiz Edge, Capiz Edge Lit** (`capiz`, `capiz-edge`, `capiz-edge-lit`): card fill, card edge at rest, card edge when lit or hovered.
- **Hairline** (`hairline`): the rules between Experience rows.

### Named Rules
**The Pink Acts, Yellow Lights Rule.** Pink marks the name, the close and what you can click. Yellow marks light and what the light falls on. A yellow link is allowed only where a lantern lights it (card titles, the email); pink is never used as a glow.

**The Three-Step Text Rule.** Text is moon, lavender or mist, chosen by emphasis. No grey, no white, no fourth step.

## Typography

**Display Font:** Baloo 2 (with ui-rounded, ui-sans-serif, system-ui)
**Body Font:** Baloo 2, the same file (variable 400 to 800, self-hosted, preloaded)
**Label/Mono Font:** none for the interface; inline code in case studies uses the system monospace stack.

**Character:** One rounded, heavy face carries every role, so hierarchy comes from weight and size alone. The heavy end (800) with tight negative tracking makes titles feel like lit signage; the body at 400 stays soft and easy.

### Hierarchy
- **Display** (800, clamp(3rem, 9vw, 6rem), 0.92): the hero name, in pink, max 11ch. The 404 title uses the same voice at clamp(2.5rem, 8vw, 5.5rem).
- **Display Title** (800, clamp(4rem, 14vw, 8rem), 0.88): the case-study title in yellow with a soft yellow text glow. The project title on Home uses the same voice at clamp(3rem, 8vw, 5.5rem).
- **Display Close** (800, clamp(2.75rem, 9vw, 6rem), 0.95): "Say hi" in pink under the biggest lantern.
- **Headline** (800, clamp(2rem, 5vw, 3.25rem), 1): section headings in moon, led by a glowing yellow spark at 0.6em.
- **Title** (800, clamp(1.6rem, 4vw, 2.5rem), 1.05): company names in Experience; case-study h2 at clamp(1.8rem, 4vw, 2.5rem).
- **Lede** (600, clamp(1.6rem, 3.6vw, 2.75rem), 1.2): the About text, set large on the night, max 52rem.
- **Pitch** (700, clamp(1.3rem, 2.2vw, 1.65rem), 1.3): one-line project pitches.
- **Card Title** (800, 1.5rem, 1.1): capiz card titles in yellow; tool cards at 1.35rem.
- **Body Large** (700, 1.3rem, 1.45): the role line under the name, job roles, secondary contact links.
- **Body** (400, 1.125rem, 1.6): reading text, max about 38 to 42rem.
- **Label** (600, 0.9rem, 1.5): dates, stack lines, captions, in mist. Never uppercase, never tracked out.

### Named Rules
**The One Face Rule.** Baloo 2 is the only typeface. Hierarchy is weight (400, 600, 700, 800) and size; there is no second display or label face.

**The Tight Heavy Rule.** Anything at 800 and above 2rem tracks negative (-0.015em to -0.035em) and sets its line height at or under 1.

## Layout

A single centred column, max 80rem, with a fluid gutter of clamp(1rem, 5vw, 4rem). The hero opens at clamp(3rem, 10vh, 6rem) from the top; each section opens with clamp(4.5rem, 12vh, 8rem) of night above it and stacks its parts with a clamp(2rem, 5vh, 3rem) gap. Rhythm is generous and vertical; sections do not get backgrounds or dividers.

Card groups use auto-fit grids (minmax(min(100%, 15rem), 1fr) for hero cards, 16rem for tools) with a 1rem gap. Project cards stack with a 2rem gap; inside, meta splits into two columns from 900px. Experience rows become a 12rem date column plus content from 760px. Case-study prose sits at 42rem, centred.

Lanterns are positioned absolutely and never take space: the hero group hangs from 4.5rem above the hero (behind the header) at the top right; section lanterns sit at the section's top at a set right offset and pool a 36 by 26rem radial of yellow light on the content below. Below 640px the hero group drops under the header at 0.55 scale and the name gains 5.5rem of top padding to clear it; section lanterns scale to 0.7. Header, main and footer clip horizontal overflow so a swinging lantern never scrolls the page sideways.

## Elevation & Depth

The system is flat at rest and uses light instead of shadow. Depth comes from the sky gradient, from glows around lanterns and lit titles, and from translucent capiz fills lit from above. There are no offset or dark drop shadows anywhere.

### Shadow Vocabulary
- **Lantern glow** (`filter: drop-shadow(0 0 14px rgb(255 224 102 / 0.55))`): lanterns and heading sparks at rest.
- **Lantern flash** (`filter: drop-shadow(0 0 26px rgb(255 224 102 / 0.95))`): a tapped lantern for 700ms.
- **Lit card halo** (`box-shadow: 0 0 40px -12px rgb(255 224 102 / 0.45)`): the one lit hero card (the lead project).
- **Title glow** (`text-shadow: 0 0 28px rgb(255 224 102 / 0.3)`): yellow project and case titles; 0.35 alpha on the email.
- **Lantern pool** (`radial-gradient(closest-side, rgb(255 224 102 / 0.17), transparent)`): the light a section lantern casts on what sits below it.

### Named Rules
**The Light Not Shadow Rule.** Every depth cue is yellow light with zero offset. If something needs to lift, it glows.

## Shapes

Soft and rounded throughout, matching the rounded face. Capiz cards use 22px corners; images inset inside a card use 16px (15px on the case cover) so the inner radius sits concentric with the card. Small parts step down: 10px for job-logo plates and the skip link, 8px for the header favicon, 6px for inline code and the brand-line favicon, 4px for focus rings. The recurring silhouette is the favicon's four-point sparkle with curved concave sides: as lanterns, as heading sparks, as list bullets in case studies and as falling sparks. Borders are 1px and only on capiz cards (yellow) and Experience rows (hairline).

## Components

### Links
- **Style:** inherit the text colour, underlined in pink at 1.5px with a 0.2em offset.
- **Hover / Focus:** text turns pink and the underline thickens to 2.5px over 200ms on the house ease (cubic-bezier(0.16, 1, 0.3, 1)).
- **Focus ring:** 2px solid yellow, 4px offset, 4px radius, on every focusable element.

### Capiz Cards
- **Corner Style:** 22px.
- **Background:** the capiz fill under a radial yellow wash from above (120% by 90% at 50% -30%, 0.16 alpha to transparent at 65%).
- **Border:** 1px capiz edge; capiz edge lit on hover or focus-within, with the fill dropping to 0.04 white, over 300ms.
- **Pointer light:** with the script running, a 16rem yellow spot (0.14 alpha) follows the pointer inside the card and fades in over 400ms.
- **Lit variant:** the lead card carries the lit edge at rest plus the lit card halo.
- **Content:** a yellow Card Title over lavender body; tool cards use a description list in the same pattern.
- **Internal Padding:** 1rem 1.25rem 1.15rem for hero cards, 1.1rem 1.3rem 1.25rem for tools, clamp(0.6rem, 1.5vw, 1rem) around a project cover.

### Project Card
A capiz card holding a cover image (16px radius, indigo placeholder, 3600:1500 crop anchored to the bottom), then a giant yellow title with a year in mist, a moon pitch and a mist stack line. The whole card is the click target through the title link's stretched pseudo-element; its focus ring draws around the full card at 22px. The cover carries a view-transition name and morphs into the case page cover.

### Navigation
- **Style:** a top bar inside the 80rem column: the favicon (32px, 8px radius) at left as the home link, section links at right at 1.05rem, weight 600, in moon.
- **States:** underline transparent at rest, pink on hover and focus.
- **Mobile:** below 560px the links tighten to 0.95rem with a 0.9rem gap and wrap.
- **Skip link:** a yellow pill (10px radius) with night text that drops in from above on focus.

### Section Heading
Headline type in moon, led by the favicon spark in yellow at 0.6em with the lantern glow. Case-study h2s repeat the pattern at Title size.

### Experience Row
Not a card: rows on the night ruled by hairlines above each and below the last. Dates in mist Label, company in moon Title with an optional logo on a moon plate, role in yellow Body Large, summary in lavender.

### Contact Close
Centred under the largest lantern (6.5rem, 4rem string): "Say hi" in pink Display Close, then the email as the brightest, largest link (800, clamp(1.4rem, 4.6vw, 3.4rem), yellow with a yellow glow and a 45% yellow underline that turns pink and 3px on hover), then the other links in Body Large, then the name in mist.

### Parol Lantern (signature)
A 1px string fading in from transparent to the string colour, then the sparkle star: yellow body, pale core, two pink stroked tails, wrapped in the lantern glow. Sized and dropped per placement (2.4 to 6.5rem wide, 1.5 to 8rem strings) and always decorative (aria-hidden).
- **Arrival:** a 3.6s damped swing from 9deg to rest about the top of the string, staggered by up to 520ms.
- **Live:** with the script, each lantern is a damped pendulum (stiffness 38, damping 2.2, max 28deg, heavier when larger). Scroll kicks visible lanterns, a pointer within 160px pushes like a breeze, a tap swings it hard, flashes it for 700ms and drops a few falling sparks (9px stars with a 4px glow, 1.1s fall).
- **Reduced motion:** nothing moves; the lanterns hang still and the page is complete.

### Page Transition
Same-origin navigations use view transitions at 450ms on the house ease. The project cover morphs as one image (no cross-fade) from the Home card into the case page.

## Do's and Don'ts

### Do:
- **Do** keep the ground the indigo sky: night base with the dusk-to-indigo radial lift at the top right.
- **Do** hang lanterns from the top edge on visible strings, and let a section lantern pool its light on the cards below it.
- **Do** use capiz cards (22px, translucent fill, faint yellow edge) for things a lantern lights; set unlit sections straight onto the night.
- **Do** keep pink for the name, the close and actionable links, and yellow for light and what it falls on.
- **Do** set every role in Baloo 2 and build hierarchy with weight 400 to 800 and size.
- **Do** express depth as zero-offset yellow glow.
- **Do** make every lantern movement damped and settling, and render the page complete with reduced motion or without the script.
- **Do** use the favicon's curved four-point sparkle wherever a mark or bullet is needed.

### Don't:
- **Don't** add a second typeface for display or labels.
- **Don't** use offset or dark drop shadows; glows only.
- **Don't** use pure white, pure black or grey text; step moon, lavender, mist.
- **Don't** wrap every section in a card; Experience and About stay on the night.
- **Don't** add looping or idle animation; lanterns move only on arrival or when pushed, then come to rest.
- **Don't** let lanterns or long words cause horizontal scroll.
