# DESIGN.md

> Present Li Xiang's research as a precise, readable academic record with the calm authority of a well-edited journal.

## 1. Visual Theme & Atmosphere

**Style**: Research Editorial (warm paper, ink text, rust accent, serif display)
**Keywords**: rigorous, editorial, calm, evidence-led, bilingual, precise
**Tone**: confident and approachable, not promotional, glossy, playful, or futuristic
**Feel**: a research dossier laid out by an independent academic press

**Interaction Tier**: L1 refined static
**Dependencies**: CSS + ~60 lines of vanilla JS in the navbar (mobile menu, scrollspy); no GSAP, WebGL, smooth-scroll libraries, or custom cursors

The page prioritizes identity, selected research, and measurable results. Decorative effects must never compete with publication titles, numerical results, or contact actions.

## 2. Color Palette & Roles

```css
:root {
  --cv-bg: #faf9f5;            /* warm paper */
  --cv-surface: #ffffff;
  --cv-surface-alt: #f2f0e8;
  --cv-surface-hover: #e9e6da;
  --cv-border: #e1ded1;
  --cv-border-strong: #c3beab;
  --cv-text: #201f19;          /* ink */
  --cv-text-secondary: #55524a;
  --cv-text-tertiary: #8a8574;
  --cv-accent: #8c3a26;        /* rust */
  --cv-accent-hover: #6f2d1c;
  --cv-accent-soft: #f3e4dc;
  --cv-on-accent: #ffffff;
  --cv-success: #3d6b4f;
  --cv-bg-rgb: 250, 249, 245;
  --cv-text-rgb: 32, 31, 25;
  --cv-shadow: 0 1px 2px rgba(var(--cv-text-rgb), .05), 0 10px 30px rgba(var(--cv-text-rgb), .06);
}

.dark {
  --cv-bg: #16140f;
  --cv-surface: #1d1a14;
  --cv-surface-alt: #242019;
  --cv-surface-hover: #2d2820;
  --cv-border: #39332a;
  --cv-border-strong: #554d3e;
  --cv-text: #edeae0;
  --cv-text-secondary: #b8b2a3;
  --cv-text-tertiary: #867f6e;
  --cv-accent: #d98f6f;
  --cv-accent-hover: #e8a888;
  --cv-accent-soft: #33231b;
  --cv-on-accent: #1c1410;
  --cv-success: #85b495;
}
```

**Color Rules:**

- Application CSS references variables only; raw color literals stay in the token declarations of `assets/css/custom.css`.
- Rust is reserved for links, active navigation, badges, and primary actions.
- Full-width sections alternate between `--cv-bg` and `--cv-surface-alt` (`.cv-band`); cards use `--cv-surface`.
- Dark mode keeps the same semantic roles rather than inverting colors mechanically.
- The module's own theme variables (`--hb-color-*`, `--hb-font-*`) are mapped to the cv tokens so stray template chrome inherits the same palette.

## 3. Typography Rules

Loaded once via Google Fonts import in `custom.css`: Inter, Newsreader, Noto Sans SC, Noto Serif SC, JetBrains Mono.

| Role | Font | Size | Weight | Line Height |
|---|---|---|---:|---:|---:|
| Hero H1 | Newsreader / Noto Serif SC | 56px | 600 | 1.02 |
| Section H2 | Newsreader / Noto Serif SC | 32px | 600 | 1.15 |
| H3 | Inter / Noto Sans SC | 19px | 600 | 1.4 |
| Body | Inter / Noto Sans SC | 16.5px | 400 | 1.75–1.85 |
| Label/eyebrow | Inter / Noto Sans SC | 12px | 700 | 1.4 (+0.14em tracking) |
| Metadata | Inter / Noto Sans SC | 13–14px | 500 | 1.6 |
| Data/results | JetBrains Mono | 12.5–19px | 500–600 | — |

**Typography Rules:**

- English and Chinese share the same hierarchy; Chinese uses explicit CJK fonts.
- Hero and section headings are the only serif text; navigation, body copy, tags, and data remain sans serif.
- Use one `h1`, then sequential `h2` and `h3` levels.
- Never use decorative script, condensed display fonts, emoji headings, gradient text, or text shadows.

## 4. Component Stylings

Canonical implementations live in `assets/css/custom.css`:

- `.cv-button` / `.cv-button--secondary` / `.cv-icon-button` — 44px minimum height, 6px radius, 160ms transitions, hover lifts at most 1px.
- `.cv-link` / `.cv-title-link` — accent color, underline fades in on hover (`text-underline-offset: .25em`).
- `.cv-tag` — pill outline, quiet until hovered.
- `.cv-badge` / `.cv-badge--muted` — uppercase 11.5px, rust-soft fill or neutral outline.
- `.cv-pub` / `.cv-project` — bordered surface cards (10px radius), media + body grid, subtle shadow on hover only.
- `.cv-results` — 1px-gap stat grid for numerical results (mono values in accent color).
- `.cv-timeline-item` / `.cv-award-list` — rule-separated rows; meta column left, content right.
- `.cv-news-list` — mono date column + text rows.
- Focus-visible: 2px accent outline with 3px offset everywhere.

## 5. Layout Principles

**Container:** `width: min(100% - 48px, 1080px)` centered.

**Section rhythm:** `.cv-section` 76px vertical padding (56px mobile). Alternating plain / `.cv-band` backgrounds.

**Grids:**

```css
.cv-hero__grid   { grid-template-columns: minmax(0, 1fr) 280px; gap: 72px; }
.cv-section-grid { grid-template-columns: minmax(180px, 1fr) minmax(0, 3fr); gap: 56px; }
.cv-pub          { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); }
.cv-project      { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); } /* media on the right */
```

All fluid tracks use `minmax(0, …)` so media can never force horizontal overflow.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow | page bands, navigation, lists |
| Rule | 1px semantic border | cards, media frames, separators |
| Subtle | `--cv-shadow` | portrait, card hover |
| Focus | 2px accent outline | keyboard focus |

Large floating shadows, colored glows, glass panels, and backdrop blur over scrolling content are prohibited.

## 7. Animation & Interaction

- Entrance: `cv-fade-in` (opacity + 8px rise, 480ms) on homepage sections, slight stagger for the first three.
- Hover/focus: color, border, or at most 1px vertical movement; card images may scale to 1.02.
- `html { scroll-behavior: smooth }` with `scroll-margin-top: 84px` on anchored sections.
- Navbar: sticky, 94%-opacity background; scrollspy highlights the section in view (IntersectionObserver, `-30%/-60%` root margin); at page bottom the last item is forced active.
- Mobile menu: real `<button aria-expanded>` toggling `data-open` on `.page-header`; closes on link click, Escape, and desktop resize.
- Full `prefers-reduced-motion` reset.

## 8. Do's and Don'ts

### Do

- Put the person's name and research field in the first viewport.
- Order homepage sections: about → news → research → publications → projects → experience → awards → contact.
- Distinguish Selected Publications (homepage card) from the full list (`/publications/`).
- Use actual project data and generated visuals as evidence.
- Keep English and Chinese markup identical through the shared `academic-home` block fed by `data/pages/home-en.yaml` / `home.yaml`.
- Use semantic headings, native links, and minimum 44px touch targets.
- Keep all colors and layout values in the design token system.
- Preserve dark mode without sacrificing text contrast.

### Don't

- No emoji as section icons or headings; no purple-blue gradients, glass cards, bokeh, or decorative blobs.
- No hero text gradients or text shadows.
- No cards nested in cards; no floating section containers.
- Do not hide primary research behind biography, education, or awards.
- No GSAP, WebGL, custom cursors, or scroll-jacking.
- Do not hardcode colors outside the token declarations.

## 9. Responsive Behavior

| Name | Width | Key Changes |
|---|---:|---|
| Desktop | ≥ 1024px | two-column hero, side-label section grids, media+body cards |
| Tablet | 768–1023px | tighter gaps, same structure |
| Mobile | < 768px | single column (`minmax(0,1fr)` everywhere), portrait above identity, stacked cards, hamburger menu |
| Small | ≤ 419px | results grid collapses to rows, buttons stretch |

**Touch targets:** minimum 44 × 44px.

## 10. Page Inventory

- `/` & `/zh/` — `academic-home` block (this document's sections).
- `/publications/` — module citation view, restyled via `.pub-list-item` rules.
- `/publications/georoutenet/` — local `layouts/publications/single.html` paper page (badges, authors, actions, abstract). The zh twin sets `type: publications` in front matter to work around the Hugo 0.163 secondary-language template lookup bug.
- `/experience/` & `/zh/experience/` — local clean overrides of `resume-experience` / `resume-skills` / `resume-awards` / `resume-languages` blocks.
- Footer: copyright + CC license; the "Made with Hugo Blox" attribution is enforced by the module for non-Premium builds and intentionally kept.
- Favicon: `assets/media/icon.svg` (LX monogram, dark-mode aware).
