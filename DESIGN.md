---
name: Charlito Jr Mecarez
description: A text-first portfolio in one narrow column. The writing is the design.
colors:
  paper: "#fbfbfa"
  ink: "#1c1c1a"
  graphite: "#63635e"
  focus: "#1c1c1a"
  accent: "#FF7AC6"
  spark: "#FFE066"
typography:
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.45
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.65
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: "1em"
rounded:
  focus: "2px"
  sm: "4px"
spacing:
  hairline: "4px"
  caption: "8px"
  heading-gap: "12px"
  paragraph: "16px"
  gutter: "20px"
  media: "32px"
  case-section: "48px"
  section: "56px"
  page: "64px"
  page-wide: "96px"
  measure: "36rem"
components:
  link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.ink}"
  work-row-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  work-row-pitch:
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
  section-heading:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  caption:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
  cover-image:
    rounded: "{rounded.sm}"
    width: "100%"
  work-row-image:
    rounded: "{rounded.sm}"
    width: "128px"
---

# Design System: Charlito Jr Mecarez

## Overview

**Creative North Star: "The Plain Page"**

The site is one narrow column of plain text and links, read top to bottom. The owner pinned the category standard (text-first, single column, like leerob.com) as a deliberate choice. The interface recedes so the work and the writing lead. The one picture on Home is a hand-painted scene at the top. There is no card, no button and no other decoration.

Rank comes from space and weight, not from size. The type hierarchy is flat on purpose: body and section headings share one size, and the page heading is one step larger. The site is light only. Motion is small and CSS-only: the link underline thickens on hover and focus, work rows fade in on scroll, the cover and title move between Home and a case study, and the Home painting drifts and sways.

**Key Characteristics:**
- One left-aligned column, 36rem wide, centred in the viewport.
- Monochrome text: one ground, one text colour, one grey. Two brand accents from the Grape soda logo: pink and yellow.
- System sans only, regular and medium weights.
- Links in text colour with a thin underline.
- No borders, cards, shadows, gradients or icons in the interface.

## Colors

A monochrome palette: warm near-white paper, warm near-black ink and one mid grey. Two accents come from the Grape soda logo: pink and yellow.

### Primary
- **Ink** (`ink`): All body text, headings and links. The link colour is the text colour; the underline marks the link. Ink is also the selected text colour.

### Neutral
- **Paper** (`paper`): The page ground. It is the only surface.
- **Graphite** (`graphite`): Secondary text only: the role line, work pitches, the tools line, image captions, and the resting link underline.
- **Accent** (`accent`): Pink. The link underline on hover and focus, and the text selection ground. Never a text colour: it has 2.2:1 contrast on paper.
- **Spark** (`spark`): Yellow. The highlighter stroke behind the name on Home. Never a text colour.
- **Focus** (`focus`): The focus outline. It equals ink.

### Named Rules
**The Accent Rule.** Text uses only ink and graphite on paper. Pink and yellow appear only as marks behind or under ink text, never as text. A new surface adds no tint or second grey.

**The Light Ground Rule.** The site is light only, whatever the reader's system setting. The site has no dark mode and no theme toggle.

## Typography

**Body Font:** the system sans stack (`ui-sans-serif`, `system-ui`, `-apple-system` and fallbacks)
**Code Font:** the system mono stack, used only for inline code in case study prose

**Character:** Neutral and native to the reader's device. The type carries no personality of its own, so the words carry it.

### Hierarchy
- **Headline** (500, 1.125rem / 18px, 1.45): The one page heading: the name on Home, the project title on a case study, the message on the 404 page.
- **Title** (500, 1rem / 16px, 1.65): Section headings (Work, About, Contact, case study sections) and the project name in the work list.
- **Body** (400, 1rem / 16px, 1.65): All prose. The 36rem column holds the line length.
- **Label** (400, 0.875rem / 14px, 1.5): Image captions only, in graphite.

### Named Rules
**The Flat Ramp Rule.** Body and section headings share 16px; the page heading is 18px. Weight (500) and the space above a heading carry rank. Do not add a larger display size.

**The Two Weights Rule.** Use regular (400) and medium (500) only. Bold text in prose renders at 500.

Headings use balanced wrapping; paragraphs and list items use pretty wrapping. Dates use tabular numerals.

## Layout

One column, `max-width: 36rem`, centred with 20px side padding. Top padding is 64px on narrow screens and 96px from 640px wide; bottom padding is 64px. There is no grid and no second column at any width.

Spacing rhythm, as built:
- 12px below every section heading.
- 16px between paragraphs.
- 56px above each Home section (Work, Experience, About).
- 48px above each section heading inside case study prose.
- 64px above the footer Contact section.
- 4px between a page heading and its pitch; 8px between an image and its caption; 32px above the case study cover.

The work list stacks rows 24px apart. Each row is a 128px cover image, then the project name and year, a one-line pitch and the stack. From 640px wide, the image sits to the left of the text, 16px apart. On phones, it sits above the text, 12px apart. Contact links sit in one wrapping row, 20px apart horizontally and 4px vertically.

### Named Rules
**The Space Carries Rank Rule.** Separate sections with space, never with rules, borders or background bands.

## Elevation & Depth

The system is flat. There are no shadows, no layered surfaces and no tonal containers. Depth does not exist; order on the page is the only structure.

## Shapes

There are no interface shapes. The only radii are a gently softened corner on the case study cover image and the work-row image (`rounded.sm`) and a 2px corner on the focus outline. Bullet lists use plain discs with a 1.25rem indent.

## Components

### Links
Plain and quiet; the underline is the only affordance.
- **Rest:** text colour, 1px underline in graphite, offset 0.22em.
- **Hover / Focus:** the underline thickens to 2px and turns pink (`accent`), over 150ms ease-out. Reduced motion removes the transition.
- **Focus ring:** 2px solid outline in the focus colour, offset 3px.

### Experience List
A list of job rows on Home, between Work and About, built like the work rows but with no link and no image. The first line is the company logo at 20px, then "Role · Company" in medium weight, with the company linked to its site. The years sit right-aligned in 14px graphite ("2023–present", or "Sep–Dec 2022" for a short job). Below it, one graphite line says what the job involves. No bullets or skill bars.

### Brand Label
charliworks is the maker label for Charlito's projects, not the subject of the site. The site stays about Charlito and speaks as "I". Home shows one graphite line under the intro: the 20px Grape soda logo and "I ship my projects under charliworks.", with charliworks linked to the GitHub org. Each case study shows "A charliworks project." in a 14px graphite line under the pitch.

### Work List
A list of rows, not cards. Each row starts with a small cover image: 128px wide, with the small corner radius, and the same view-transition name as the case study cover. Next to it, the project name is a medium-weight link, with the year right-aligned in 14px graphite. Below it, a one-line pitch in graphite and the stack in 14px graphite. On phones, the image sits above the text. The whole row is the click target, and hover on the row thickens the title underline. The list must accept more rows with no change to its form.

### Contact Row
The footer on every page: a "Contact" section heading and a wrapping row of plain text links.

### Link Preview Image
`public/og.jpg` is a 1200 × 630 card. The top 400px is the hero painting, at rest, with a short fade into the page ground. Below it: the name with the yellow highlighter, a short role line in graphite, and the charliworks label with the logo. It uses the page colours and the system sans stack. Every page uses it as `og:image`, except a case study, which uses its cover. It was made by two Playwright screenshots: the `.hero` element under reduced motion, then an HTML card that holds it. Make it again when the name or the role changes.

### Case Study Cover
A full-column raster with a small corner radius, followed by a 14px graphite caption. The caption states that screens show sample data and names the stack.

### Hero Art
An inline SVG painting at the top of Home (`src/components/HeroArt.astro`): the Philippines at golden hour, with a volcano under a sunset sky, rice terraces, coconut palms and a person on a motorbike on the road. A noise filter gives the shapes brush-stroke edges, and a paper grain sits over the whole painting. It fills the column at 3:1 with the small corner radius.

- **Palette:** the painting has its own colours, outside the page tokens. Sky: coral `#e7835c` to amber `#f4b26f` to cream `#fbdca3`. Sun `#fff1c9` with a `#fff4d1` glow. Clouds `#f9c9a8`. Volcano: slate `#6c7b98` to dusk rose `#c49a92`, cap `#e9dcd6`. Hills `#6f9a6b`. Terraces `#7aa94e`, `#5f9142`, `#86b553` and `#4c7d36`, with `#46702f` edges and `#e2e28c` rice rows. Road `#e3b97f`. Palms `#3e6b30` with `#6e4f34` trunks. Motorbike `#c8553a`, rider `#2f5d8a`, helmet `#f2c14e`.
- **Motion:** the motion runs all the time and is meant to be seen: the clouds drift, the volcano smoke rises, the sun glow pulses, the motorbike bobs, and a light wind sways the palms and grass. Hover on desktop, or scrolling the first 120px on phones, raises the wind to a strong gust.
- **Pause control:** a 14px graphite "Pause motion" text control sits right-aligned under the painting. It is a native checkbox with a visible label, and it needs no JavaScript. When checked, it pauses every animation and reads "Play motion". Reduced motion stops all the motion and hides the control.
- **Performance:** keep the moving parts inside the shared brush-filter groups. A measured test showed that a separate filter group for the smoke tripled the main-thread work.

**The Pause Rule.** Any motion that starts on its own and runs longer than 5 seconds has a visible control that stops it (WCAG 2.2.2).

### Skip Link
Hidden until focused; it then appears at the top left of the page.

## Do's and Don'ts

### Do:
- **Do** keep every page in the one 36rem column.
- **Do** use ink for text and links, and graphite for secondary text only.
- **Do** mark rank with weight 500 and space above the heading (56px between Home sections).
- **Do** limit motion to the link underline, the scroll fade-in, the page view transition and the hero painting. Put all motion in CSS and remove it under reduced motion.
- **Do** label any raster that shows sample data in its caption.

### Don't:
- **Don't** add a second picture to the top of Home, project cards, buttons or decoration.
- **Don't** add borders, shadows, gradients or icons to the interface.
- **Don't** add a third accent colour, use an accent as a text colour, or add a third weight.
- **Don't** add a display size above 18px.
- **Don't** add a dark mode or a theme toggle.
