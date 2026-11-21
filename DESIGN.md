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
  selection-ink: "#1a0a12"
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

<!-- impeccable:design-map -->
Name: Charlito Jr Mecarez
Colors: primary: accent #ff7ac6; secondary: spark #ffe066; tertiary: sky-golden-top #e47a58; neutral: ink #24130b; primary: accent-day #b0236e; tertiary: sky-golden-mid #f2a768 (+9 more in the sidecar)
Fonts: Anybody (display, headline, headline-quiet, title, statement, hud); ui-sans-serif (lead, body, label)
Spacing: gutter clamp(1.25rem, 5vw, 4rem), stop clamp(6rem, 16vh, 11rem), title-gap clamp(2.5rem, 6vh, 4.5rem), row 2.25rem, rail 12rem, container 80rem, read 42rem
Radius: focus 3px, mark 6px, logo 8px, frame 20px
North Star: "The Golden Hour Ride"
Rules:
- The Pink Acts, Yellow Shines Rule. Pink is only for things you can act on or that report your position.
- The Sky Sets The Tone Rule. A section's text colour follows its sky phase, not its own choice: phase below 0.5 is day (ink), anything later is night (cream and haze).
- The One Phase Table Rule. Sky colours come from the phase table only.
- The Heading Steps Back Rule. Heading size varies by stop.
- The Width Is The Voice Rule. Hierarchy in the display face comes from width as much as size: 150 percent for project names, 125 to 140 for stop titles, 100 for anything read as a sentence.
- The Veil Not Panel Rule. When text needs help against the scene, add a feathered veil of sky or night behind it.
Elevation:
- Window drop: --frame-shadow
- Window drop, revealed: filter: drop-shadow(0 34px 34px rgb(10 6 30 / 0.5))
- HUD halo: text-shadow: 0 1px 14px rgb(8 10 30 / 0.55)
Don't:
- Don't put content in cards, glass panels or tinted boxes; image frames are the only rounded containers.
- Don't use gradient text or a third accent colour.
- Don't pick section backgrounds by hand; the sky comes from the phase table.
- Don't set body paragraphs in the display face or at a stretched width.
- Don't add tracked uppercase labels above headings; uppercase tracking belongs to the odometer and the scroll cue only.
- Don't use light pink (`accent`) text on the day sky; it fails contrast there.
Do:
- Do declare every new section with `data-sky` (a phase from 0 to 4) and `data-stop` (the odometer name), and let tone and sky follow from it.
- Do set names, stop titles and lists of things in Anybody at 112 to 150 percent width; set sentences in the system sans.
- (+5 more)
Map: src/scripts/phases.ts
Map: public/og.jpg
Full: .impeccable/design-full.md (read a section when you need its detail)
