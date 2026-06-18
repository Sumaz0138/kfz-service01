---
name: KFZ-Service01
description: Vertrauensvolle Autowerkstatt-Website für Hockenheim — Werkstatt-Rot auf warmem Papier, ein Gear-Motiv, ruhige Reveal-Animationen.
colors:
  primary: "#e8222e"
  primary-deep: "#b81820"
  primary-tint: "#e8222e17"
  neutral-paper: "#f9f7f4"
  neutral-white: "#ffffff"
  neutral-surface: "#f0ede8"
  neutral-surface-deep: "#e8e4de"
  neutral-border: "#00000014"
  neutral-border-soft: "#0000000d"
  ink: "#111111"
  ink-dim: "#666666"
  ink-muted: "#aaaaaa"
  ink-faint: "#888888"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.8rem, 5.5vw, 4.6rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 2.8rem)"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "normal"
  mono:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    letterSpacing: "normal"
rounded:
  sm: "10px"
  md: "16px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.75rem"
  lg: "2.5rem"
  xl: "4rem"
  "2xl": "7rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 2rem"
  button-white:
    backgroundColor: "{colors.neutral-white}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 2.25rem"
  badge:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.9rem"
  card-service:
    backgroundColor: "{colors.neutral-paper}"
    rounded: "{rounded.md}"
    padding: "1.75rem 2rem"
  card-stat:
    backgroundColor: "{colors.neutral-white}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
---

# Design System: KFZ-Service01

## 1. Overview

**Creative North Star: "Die Vertrauenswerkstatt"**

The page reads like a neighborhood garage that's been run by the same hands for 40 years: warm paper-toned walls, one confident red toolbox, and machinery that's still quietly turning in the background. Everything about the system is built to make a transparent promise feel calm rather than salesy — "kostenloser Kostenvoranschlag," "alle Fahrzeugmarken," "heute Termin möglich" sit in the same warm, unhurried register as the rest of the copy, not shouted from a banner.

Werkstatt-Rot (#e8222e) is the single saturated color in the system, and it is reserved for trust-and-action moments: the phone CTA, the "kostenlos" badges, service icons, hover glows, and the one section (Kontakt) that flips the entire surface to red at the point of conversion. Everywhere else is Warmes Papier, white, or a neutral ink tone. Motion is ambient and slow — a two-gear illustration rotates calmly behind the hero, floating chips drift on independent timers, sections reveal on scroll with a soft 0.7s rise — signalling "the workshop is alive and working," never "look here now."

This system explicitly rejects three things named in PRODUCT.md: the sterile corporate-blue look of chain workshops (**Generische Ketten-Werkstätten**), the glossy chrome-and-gradient aspiration of luxury car-dealer sites (**Glossy Autohaus-Sites**), and the cluttered clipart feel of dated small-business pages (**Veraltete Kleinbetrieb-Sites**). Die Vertrauenswerkstatt is none of those: it's warm, specific, and a little technical, like a workshop that keeps its tools clean.

**Key Characteristics:**
- One saturated color (Werkstatt-Rot), used only for trust/action, never decoration
- Warm paper neutrals (#f9f7f4 family) as the entire base palette
- 900-weight, tightly-tracked Outfit headlines against loose 1.6–1.77 line-height body copy
- 1.5px hairline borders give structure at rest; soft colored glows appear only on hover
- Calm, asynchronous ambient motion (gear rotation, chip float, scroll reveal) — never choreographed or urgent
- Full `prefers-reduced-motion` support throughout

## 2. Colors: Werkstatt-Rot auf Warmem Papier

A warm, paper-toned neutral field punctuated by exactly one confident red — the workshop's signal color appears everywhere trust and action meet, and nowhere else.

### Primary
- **Werkstatt-Rot** (#e8222e / oklch(59.7% 0.227 25.5)): the phone CTA, nav button, accent word in the hero headline ("Unsere"), service icons, section badges, hover glows on cards. The only saturated color on the page.
- **Werkstatt-Rot Vertieft** (#b81820 / oklch(50.2% 0.191 26.0)): hover/active state for every red element — buttons deepen into this on press.
- **Werkstatt-Rot Schimmer** (#e8222e17, ~9% opacity): the tinted background behind badges and the highlighted "Ölwechsel" service card — a whisper of red before the full color appears.

### Neutral
- **Warmes Papier** (#f9f7f4 / oklch(97.7% 0.005 78.3)): the page background. The "paper" the whole workshop sits on.
- **Reinweiß** (#ffffff): nav-button text, the Kontakt section's button surface, stat cards, image cards' resting background.
- **Werkbank-Beige** (#f0ede8 / oklch(94.7% 0.007 80.7)): the surface for default service cards — one shade off the page background, just enough to read as a distinct tray.
- **Werkbank-Schatten** (#e8e4de / oklch(92.0% 0.009 78.3)): the deepest neutral, used sparingly for secondary surfaces.
- **Haarlinie** (#00000014, 8% black): the 1.5px border on every card, button-outline, and table.
- **Haarlinie Sanft** (#0000000d, 5% black): section dividers (top/bottom borders on Leistungen and Öffnungszeiten).
- **Werkstatt-Tinte** (#111111 / oklch(17.8% 0 0)): primary text color, and — inverted — the footer background. The same value does double duty as "the darkest thing on the page," whether that's text on paper or paper on dark.
- **Tinte Gedämpft** (#666666 / oklch(51.0% 0 0)): secondary text — section subheads, card descriptions, FAQ answers.
- **Tinte Matt** (#aaaaaa / oklch(73.8% 0 0)): tertiary text — "Geschlossen" in the opening-hours table, the least important label on the page.
- **Tinte Hell** (#888888 / oklch(62.7% 0 0)): footer logo and link color against the dark footer.

### Named Rules
**The One Red Rule.** Werkstatt-Rot appears only where trust and action meet: the phone CTA, "kostenlos" badges, service icons, hover glows, and the Kontakt section. It is never decorative on its own — every red element is either a call to action or a promise (free estimate, all brands serviced, fast appointments).

**The Kontakt Flip Rule.** Every section sits on Warmes Papier, White, or Werkbank-Beige. Exactly one section — Kontakt — inverts the entire surface to Werkstatt-Rot. This flip is the single color event on the page, and it lands precisely at the conversion moment.

## 3. Typography

**Display & Body Font:** Outfit (weights 300–900, with system sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (weights 400–500, with monospace fallback)

**Character:** One typeface family, leaned hard in both directions rather than paired with a second face. 900-weight headlines with negative tracking (-0.045em to -0.05em) read as confident and final; body copy runs loose (1.6–1.77 line-height) and conversational. JetBrains Mono appears only in two small, deliberate spots — floating hero chips and opening-hours times — giving the workshop a quiet "logbook" texture against the otherwise rounded Outfit voice.

### Hierarchy
- **Display** (900, `clamp(2.8rem, 5.5vw, 4.6rem)`, line-height 1.05, letter-spacing -0.05em): the hero H1 only — a three-line stack ("Ihr Fahrzeug. / Unsere / Leidenschaft.") with the middle word in Werkstatt-Rot.
- **Headline** (900, `clamp(2rem, 3.5vw, 2.8rem)`, line-height 1.12, letter-spacing -0.045em): every section headline (Leistungen, Vorteile, Öffnungszeiten, Kontakt, FAQ).
- **Title** (800, 1.15rem, letter-spacing -0.03em): service card titles.
- **Body** (400, 1rem–1.08rem, line-height 1.7–1.77, max-width ~44–52ch): hero subhead, section subheads, card descriptions, FAQ answers. Color is always Tinte Gedämpft, never pure Werkstatt-Tinte — body copy is deliberately one step quieter than headings.
- **Label** (500–800, 0.85rem–0.95rem): nav links, button text, stat labels. Section badges use Label at 700 weight, uppercase, with 0.12em letter-spacing.
- **Mono** (400–500, 0.67rem–0.85rem, JetBrains Mono): floating hero chip text and opening-hours times.

### Named Rules
**The Tight-Loose Rule.** Headings are always weight 900 with negative letter-spacing; body text is always weight 400 with generous line-height. Never soften a heading toward body weight, and never tighten body copy toward heading tracking — the contrast between the two is the entire typographic system.

## 4. Elevation

Components sit flat against Warmes Papier at rest, separated by 1.5px Haarlinie borders rather than shadows — the border gives each card and button a tangible, machined edge. Shadows exist only as a *response* to interaction: hovering a card or button adds a soft, color-matched glow (red-tinted for red elements, neutral for white/chip elements) plus a 1–4px lift. Nothing on the page casts a shadow while at rest, with one deliberate exception — the floating hero chips, which are *meant* to read as hovering above the canvas.

### Shadow Vocabulary
- **Ambient Chip Glow** (`box-shadow: 0 4px 18px rgba(0,0,0,0.07)`): the floating hero chips, at rest. The one shadow on the page that isn't hover-triggered — it's what makes the chips feel like they're floating above the gear illustration.
- **CTA Glow** (`box-shadow: 0 4px 20px rgba(232,34,46,0.28)`, hover `0 8px 30px rgba(232,34,46,0.38)`): the primary red button (hero, footer CTAs).
- **Nav CTA Glow** (`box-shadow: 0 2px 12px rgba(232,34,46,0.25)`, hover `0 4px 18px rgba(232,34,46,0.35)`): the compact nav button — same family, smaller scale.
- **Card Hover Glow** (`box-shadow: 0 12px 40px rgba(232,34,46,0.08)`): service cards on hover, paired with a border shift to Werkstatt-Rot at 35% opacity and a 4px lift.
- **Inverted Button Glow** (`box-shadow: 0 4px 20px rgba(0,0,0,0.12)`, hover `0 8px 30px rgba(0,0,0,0.18)`): the white button inside the red Kontakt section — the only place a *neutral* shadow sits on a *colored* surface.

### Named Rules
**The Machined-Edge Rule.** Every card, outline button, and table uses a 1.5px Haarlinie border — never 1px, never a resting shadow. The border is the structure; the shadow is the reaction to touch.

## 5. Components

### Buttons
- **Shape:** full pill (`border-radius: 999px` / `rounded.pill`)
- **Primary:** Werkstatt-Rot fill, white text, weight 700, `padding: 0.85rem 2rem`, CTA Glow at rest; on hover, fill deepens to Werkstatt-Rot Vertieft, glow intensifies, and the button lifts 2px.
- **Outline:** transparent fill, 1.5px Haarlinie border, Werkstatt-Tinte text; on hover the border and text both shift to Werkstatt-Rot and the button lifts 2px. No glow on this variant — the color shift carries the feedback.
- **Ghost (on red Kontakt section):** transparent fill, 2px white border at 50% opacity, white text; on hover the border solidifies to full white and the fill gains a faint white wash.
- **White (on red Kontakt section):** white fill, Werkstatt-Rot text, weight 800, Inverted Button Glow.
- **Nav CTA:** same family as Primary at compact scale (`padding: 0.55rem 1.3rem`), permanently visible in the fixed nav on desktop.

### Badges / Section Labels
- **Style:** small pill, Werkstatt-Rot text on Werkstatt-Rot Schimmer background, 1px border at 18–20% red opacity, uppercase, Label weight 700, letter-spacing 0.12em, `padding: 0.3rem 0.9rem`.
- **Use:** one per section, as the section's category marker (Leistungen, Warum wir, Öffnungszeiten und Standort, Kontakt, FAQ). On the red Kontakt section, the badge inverts to a white-on-white-wash variant.

### Chips (floating hero badges)
- **Style:** white background, 1.5px Haarlinie border, Ambient Chip Glow, `border-radius: 10px`, Mono 0.67rem text. Two of the four chips carry a small Werkstatt-Rot dot that pulses (`dot-blink`, 2.5s).
- **State:** each chip floats independently (`chip-float`, 6–9s ease-in-out, staggered delays, alternating directions) — calm, asynchronous motion that reads as "always-on, never urgent."

### Cards / Containers
- **Corner Style:** 16px (`rounded.md`) for service cards, stat cards, the opening-hours table, and the map frame; 10px (`rounded.sm`) for chips and service icon tiles.
- **Background:** Werkbank-Beige for default service cards; Reinweiß for stat cards and the tall Ölwechsel image card; the "red-tint" variant (`linear-gradient(145deg, Werkstatt-Rot Schimmer 0%, Warmes Papier 55%)`) for the one highlighted service card.
- **Shadow Strategy:** flat at rest (Machined-Edge Rule); Card Hover Glow + border shift to Werkstatt-Rot (35% opacity) + 4px lift on hover. Images inside cards desaturate (`saturate(0.5–0.6)`) at rest and resaturate toward `0.85–0.9` on hover.
- **Border:** 1.5px Haarlinie.
- **Internal Padding:** `1.75rem 2rem` (card body).

### Inputs / Fields
None present. The page has no forms — every conversion path is a `tel:` or `mailto:` link styled as a button.

### Navigation
- **Style:** fixed top bar, 68px tall, `background: rgba(249,247,244,0.92)` with `backdrop-filter: blur(20px) saturate(1.4)` — a frosted version of Warmes Papier rather than a hard white bar.
- **Typography:** logo at Title-equivalent weight (900, -0.04em) with the "01" in Werkstatt-Rot and a small uppercase "Hockenheim" pill (white on Werkstatt-Rot). Links use Label weight, Tinte Gedämpft, hover to Werkstatt-Tinte (color shift only, no underline).
- **Default/Hover/Active:** the Nav CTA is the only button-styled element; everything else is plain text links with a 0.2s color transition.
- **Mobile:** `.nav-links` (including the phone CTA) is hidden entirely below 900px, leaving only the logo and city badge. *Flagged in Do's and Don'ts below — this removes the primary conversion path on mobile.*

### Hero Gear Canvas (signature component)
A slow two-gear illustration rendered on `<canvas>`: a large Werkstatt-Rot-outlined gear (18 teeth, 6% fill) meshed with a smaller Werkstatt-Tinte-outlined gear (11 teeth, 5% fill), rotating continuously at 0.004 rad/frame. It pauses under `prefers-reduced-motion` and via an `IntersectionObserver` when scrolled out of view. This is where "Die Präzisionsgarage" lives inside "Die Vertrauenswerkstatt": precision machinery rendered so faintly it reads as atmosphere, not decoration.

## 6. Do's and Don'ts

### Do:
- **Do** keep Werkstatt-Rot (#e8222e) as the only saturated color on the page; every other surface is Warmes Papier, White, Werkbank-Beige, or a neutral ink tone (One Red Rule).
- **Do** use full pills (`rounded.pill`, 999px) for every actionable element — buttons, badges, chips, nav CTA — and 16px/10px rounding for structural containers. Never mix the two.
- **Do** keep 1.5px Haarlinie borders on cards/buttons at rest; reserve shadows for hover/interaction (Machined-Edge Rule).
- **Do** preserve `prefers-reduced-motion` handling for the gear canvas, chip float, scroll-reveal, and morph blob — non-negotiable per PRODUCT.md accessibility requirements.
- **Do** keep body and label text at or above current contrast (Tinte Gedämpft #666 on Warmes Papier ≈ 5.7:1). PRODUCT.md calls for *higher* contrast and slightly larger type for an older driver demographic — never lower.
- **Do** keep the phone CTA (a `tel:` link styled as a Primary pill button) visually dominant and reachable from the top of every viewport, including mobile.

### Don't:
- **Don't** introduce a second saturated hue (a blue, green, or gold accent) — sterile corporate-blue chain workshops ("Generische Ketten-Werkstätten") are an explicit PRODUCT.md anti-reference.
- **Don't** add chrome, glossy gradients, dramatic studio photography, or glassmorphism cards — this is the "Glossy Autohaus-Site" luxury-dealer anti-reference PRODUCT.md rules out.
- **Don't** add clipart, stock "handshake" icons, drop-shadowed text, or dense unstyled blocks — "Veraltete Kleinbetrieb-Site" territory.
- **Don't** use `border-left`/`border-right` colored stripes as a UI pattern. The `.vorteil-item` red vertical bar is the one existing instance and should not be replicated elsewhere.
- **Don't** use gradient text (`background-clip: text`) for emphasis. Emphasis is carried by the `.accent` color swap (Werkstatt-Tinte → Werkstatt-Rot) on a single word, nothing more.
- **Don't** hide the phone CTA on mobile. The current `.nav-links { display: none }` below 900px removes the nav's tap-to-call affordance — any mobile-nav redesign must keep a call action visible.
