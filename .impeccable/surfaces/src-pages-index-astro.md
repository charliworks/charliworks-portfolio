---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/work"]
---

# Surface brief: Home and case study pages

Scope: `/` and `/work/<slug>`, plus 404. Mode: Experience. The stickers lead; the content is printed on them or etched beside them.

Audience: recruiters, collaborators and clients who skim first. Job: make them stay, want to know more about Charlito, then make contact (user, 2026-11-21).

Chosen direction: Shipping Tracker (user pick "Direction 2" on the ship-directions page, 2026-11-21), replacing Parol Night (PR #35, unmerged). Whole site. Statement the user wants visitors to leave with: "this guy builds real things that actually ship". Headline "Track what I ship." is a placeholder the user kept for now.

## Direction contract

THESIS: Each project is a parcel with a courier tracking page, like J&T or LBC: Built, Tested, Released, Delivered, with the real release history as the tracking log. It proves shipping with receipts instead of claiming it, and refuses both the plain minimal column and decorative animation.

OWN-WORLD: Lavender-grey courier ground, white tracking cards with an indigo header bar, the favicon's yellow as the Delivered stamp, magenta for actions. Archivo, heavy and wide for names and headings; JetBrains Mono only for tracking numbers, versions and dates. Barcodes, dashed tear lines, a sender label. A glowing marker leads each parcel's delivery line along the road. (The motorbike rider was removed at the user's request: "remove the driving bike its ugly".)

STORY: The visitor reads the name and "Track what I ship.", sees Habi's parcel drive from Built to Delivered with 12 real releases, opens the full tracking page (the case study), then experience, about, tools, and ends at a "Send to" label with the email as the biggest link.

FIRST VIEWPORT: Header with the favicon and section links. Name huge in indigo, the headline in magenta under it, role and intro, the charliworks line. Beside it on desktop, a sender label: from Charlito, Philippines, ships anywhere.

FORM: Shipping Tracker, chosen whole by the user from the ship-directions mock. seed: none (pinned) "I personally like Direction 2" + "Whole site".

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

When a parcel scrolls into view, the delivery line fills from the first release to the latest, the steps light in turn and the status stamps Delivered. Hovering or focusing a release in the log moves the marker to that release's day. Without JavaScript or with reduced motion, every parcel shows its delivered state. Proof of delivery is a muted looping HyperFrames clip of the real Habi screens (Home, Todos, Vault), playing only while on screen, with a Pause button; reduced motion shows its poster. The Habi proof morphs into the case page with a view transition.
