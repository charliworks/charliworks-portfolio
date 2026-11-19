---
name: Charlito Jr Mecarez
description: A text-first portfolio in one narrow column. The writing is the design.
colors:
  paper: "#fbfbfa"
  ink: "#1c1c1a"
  graphite: "#63635e"
  focus: "#1c1c1a"
  paper-dark: "#141413"
  ink-dark: "#e9e9e6"
  graphite-dark: "#a0a09a"
  focus-dark: "#e9e9e6"
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
---

# Design System: Charlito Jr Mecarez

## Overview

**Creative North Star: "The Plain Page"**

The site is one narrow column of plain text and links, read top to bottom. The owner pinned the category standard (text-first, single column, like leerob.com) as a deliberate choice. The interface recedes so the work and the writing lead. There is no hero, no card, no button and no decoration.

Rank comes from space and weight, not from size. The type hierarchy is flat on purpose: body and section headings share one size, and the page heading is one step larger. The light and dark grounds follow the reader's system setting. The only motion is the link underline, which thickens on hover and focus.

**Key Characteristics:**
- One left-aligned column, 36rem wide, centred in the viewport.
- Monochrome: one ground, one text colour, one grey.
- System sans only, regular and medium weights.
- Links in text colour with a thin underline.
- No borders, cards, shadows, gradients or icons in the interface.

## Colors

A monochrome palette: warm near-white paper, warm near-black ink and one mid grey. Each token has a light and a dark value; `prefers-color-scheme` selects the set.

### Primary
- **Ink** (light `ink`, dark `ink-dark`): All body text, headings and links. The link colour is the text colour; the underline marks the link. Ink also fills the text selection, with paper as the selected text colour.

### Neutral
- **Paper** (light `paper`, dark `paper-dark`): The page ground. It is the only surface.
- **Graphite** (light `graphite`, dark `graphite-dark`): Secondary text only: the role line, work pitches, the tools line, image captions, and the resting link underline.
- **Focus** (light `focus`, dark `focus-dark`): The focus outline. It equals ink.

### Named Rules
**The Three Values Rule.** Each scheme uses exactly three colours: paper, ink and graphite. A new surface adds no accent, tint or second grey.

**The System Ground Rule.** The reader's system setting picks light or dark. The site has no theme toggle.

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
- 56px above each Home section (Work, About).
- 48px above each section heading inside case study prose.
- 64px above the footer Contact section.
- 4px between a page heading and its pitch; 8px between an image and its caption; 32px above the case study cover.

The work list stacks rows 12px apart; each row is the project name and a one-line pitch. Contact links sit in one wrapping row, 20px apart horizontally and 4px vertically.

### Named Rules
**The Space Carries Rank Rule.** Separate sections with space, never with rules, borders or background bands.

## Elevation & Depth

The system is flat. There are no shadows, no layered surfaces and no tonal containers. Depth does not exist; order on the page is the only structure.

## Shapes

There are no interface shapes. The only radii are a gently softened corner on the case study cover image (`rounded.sm`) and a 2px corner on the focus outline. Bullet lists use plain discs with a 1.25rem indent.

## Components

### Links
Plain and quiet; the underline is the only affordance.
- **Rest:** text colour, 1px underline in graphite, offset 0.22em.
- **Hover / Focus:** the underline thickens to 2px and turns ink, over 150ms ease-out. Reduced motion removes the transition.
- **Focus ring:** 2px solid outline in the focus colour, offset 3px.

### Work List
A list of rows, not cards. Each row is the project name as a medium-weight link and a one-line pitch in graphite below it. The list must accept more rows with no change to its form.

### Contact Row
The footer on every page: a "Contact" section heading and a wrapping row of plain text links.

### Case Study Cover
A full-column raster with a small corner radius, followed by a 14px graphite caption. The caption states that screens show sample data and names the stack.

### Skip Link
Hidden until focused; it then appears at the top left of the page.

## Do's and Don'ts

### Do:
- **Do** keep every page in the one 36rem column.
- **Do** use ink for text and links, and graphite for secondary text only.
- **Do** mark rank with weight 500 and space above the heading (56px between Home sections).
- **Do** keep the link underline as the only motion, and remove it under reduced motion.
- **Do** label any raster that shows sample data in its caption.

### Don't:
- **Don't** add a hero banner, project cards, buttons or decoration.
- **Don't** add borders, shadows, gradients or icons to the interface.
- **Don't** add a colour accent or a third weight.
- **Don't** add a display size above 18px.
- **Don't** add a theme toggle; the system setting decides.
