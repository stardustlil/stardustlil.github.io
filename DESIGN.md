# DESIGN.md

> Present Li Xiang's research as a precise, readable academic record with the calm authority of a well-edited journal.

## 1. Visual Theme & Atmosphere

**Style**: Research Editorial (Minimal Pure + Swiss Grid)
**Keywords**: rigorous, editorial, calm, evidence-led, bilingual, tactile, precise
**Tone**: confident and approachable, not promotional, glossy, playful, or futuristic
**Feel**: a research dossier laid out by an independent academic press

**Interaction Tier**: L1 refined static
**Dependencies**: CSS only; no GSAP, WebGL, smooth-scroll library, or custom cursor

The page prioritizes identity, selected research, and measurable results. Decorative effects must never compete with publication titles, numerical results, or contact actions.

## 2. Color Palette & Roles

```css
:root {
  --cv-bg: #f5f7f3;
  --cv-surface: #ffffff;
  --cv-surface-alt: #edf1ec;
  --cv-surface-hover: #e5ebe6;
  --cv-border: #ccd4ce;
  --cv-border-strong: #93a198;
  --cv-text: #17221e;
  --cv-text-secondary: #4b5a54;
  --cv-text-tertiary: #73807b;
  --cv-accent: #176b5b;
  --cv-accent-hover: #105346;
  --cv-accent-soft: #dcece6;
  --cv-rust: #a24c32;
  --cv-success: #2f6b4f;
  --cv-warning: #91601c;
  --cv-error: #a33a31;
  --cv-bg-rgb: 245, 247, 243;
  --cv-surface-rgb: 255, 255, 255;
  --cv-text-rgb: 23, 34, 30;
  --cv-accent-rgb: 23, 107, 91;
}

.dark {
  --cv-bg: #101613;
  --cv-surface: #151d19;
  --cv-surface-alt: #1b2520;
  --cv-surface-hover: #223029;
  --cv-border: #34423a;
  --cv-border-strong: #58685f;
  --cv-text: #f2f5f1;
  --cv-text-secondary: #b5c0ba;
  --cv-text-tertiary: #89968f;
  --cv-accent: #72c5b0;
  --cv-accent-hover: #91d4c2;
  --cv-accent-soft: #19372f;
  --cv-rust: #d98b70;
  --cv-bg-rgb: 16, 22, 19;
  --cv-surface-rgb: 21, 29, 25;
  --cv-text-rgb: 242, 245, 241;
  --cv-accent-rgb: 114, 197, 176;
}
```

**Color Rules:**

- Application CSS references variables only; raw color literals stay in this specification.
- Green is reserved for links, active navigation, and primary actions.
- Rust is a restrained editorial marker for publication status or one emphasized statistic.
- Full-width sections alternate between `--cv-bg`, `--cv-surface`, and `--cv-surface-alt`; cards do not create additional nested surfaces.
- Dark mode keeps the same semantic roles rather than inverting colors mechanically.

## 3. Typography Rules

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+SC:wght@500;600;700&display=swap');
```

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---:|---:|---:|---:|
| Hero H1 | Newsreader / Noto Serif SC | 64px | 600 | 1.0 | 0 |
| Section H2 | Newsreader / Noto Serif SC | 40px | 600 | 1.12 | 0 |
| H3 | Inter / Noto Sans SC | 21px | 600 | 1.35 | 0 |
| Body | Inter / Noto Sans SC | 17px | 400 | 1.75 | 0 |
| Label | Inter / Noto Sans SC | 12px | 700 | 1.4 | 0.08em |
| Metadata | Inter / Noto Sans SC | 14px | 500 | 1.5 | 0 |
| Mono/Data | JetBrains Mono | 14px | 500 | 1.5 | 0 |

**Typography Rules:**

- English and Chinese share the same hierarchy; Chinese uses explicit CJK fonts and at least `1.7` body line height.
- Hero and section headings are the only serif text; navigation, body copy, tags, and data remain sans serif.
- Use one `h1`, then sequential `h2` and `h3` levels.
- Keep paragraph measures between 58 and 72 characters where practical.
- Never use decorative script, condensed display fonts, emoji headings, gradient text, or text shadows.

**Text Decoration:** Hero and section headings use no gradient or shadow. Links receive a color change and offset underline on hover.

## 4. Component Stylings

### Buttons

```css
.cv-button {
  min-height: 44px;
  border: 1px solid var(--cv-accent);
  border-radius: 4px;
  background: var(--cv-accent);
  color: var(--cv-surface);
  transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
}
.cv-button:hover { background: var(--cv-accent-hover); border-color: var(--cv-accent-hover); transform: translateY(-1px); }
.cv-button:active { transform: translateY(0); }
.cv-button:focus-visible { outline: 2px solid var(--cv-accent); outline-offset: 3px; }
.cv-button[aria-disabled='true'], .cv-button:disabled { cursor: not-allowed; opacity: 0.5; transform: none; }
.cv-button--secondary { background: transparent; color: var(--cv-text); border-color: var(--cv-border-strong); }
.cv-button--secondary:hover { background: var(--cv-surface-hover); color: var(--cv-text); border-color: var(--cv-text-secondary); }
```

### Project Cards

```css
.cv-project {
  border-top: 1px solid var(--cv-border);
  background: transparent;
  transition: border-color 180ms ease;
}
.cv-project:hover { border-color: var(--cv-accent); }
.cv-project:focus-within { outline: 2px solid var(--cv-accent); outline-offset: 4px; }
.cv-project__media { border: 1px solid var(--cv-border); border-radius: 4px; background: var(--cv-surface); overflow: hidden; }
.cv-project:hover .cv-project__media { border-color: var(--cv-border-strong); }
```

### Navigation

```css
.page-header { background: rgba(var(--cv-bg-rgb), 0.94); border-bottom: 1px solid var(--cv-border); }
.nav-link { color: var(--cv-text-secondary); text-decoration: none; }
.nav-link:hover, .nav-link.active { color: var(--cv-accent); }
.nav-link:focus-visible { outline: 2px solid var(--cv-accent); outline-offset: 4px; }
```

### Links

```css
.cv-link { color: var(--cv-accent); text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 0.25em; }
.cv-link:hover { color: var(--cv-accent-hover); text-decoration-color: currentColor; }
.cv-link:active { color: var(--cv-text); }
.cv-link:focus-visible { outline: 2px solid var(--cv-accent); outline-offset: 3px; }
.cv-link[aria-disabled='true'] { color: var(--cv-text-tertiary); pointer-events: none; }
```

### Tags and Badges

```css
.cv-tag { border: 1px solid var(--cv-border); border-radius: 999px; background: transparent; color: var(--cv-text-secondary); }
.cv-tag:hover { border-color: var(--cv-border-strong); color: var(--cv-text); }
.cv-tag:focus-visible { outline: 2px solid var(--cv-accent); outline-offset: 2px; }
.cv-status { border-left: 2px solid var(--cv-rust); color: var(--cv-rust); }
```

### Icon Buttons

```css
.cv-icon-button { width: 44px; height: 44px; border: 1px solid transparent; border-radius: 4px; color: var(--cv-text-secondary); }
.cv-icon-button:hover { color: var(--cv-accent); background: var(--cv-surface-hover); }
.cv-icon-button:active { background: var(--cv-accent-soft); }
.cv-icon-button:focus-visible { outline: 2px solid var(--cv-accent); outline-offset: 2px; }
.cv-icon-button:disabled { opacity: 0.5; cursor: not-allowed; }
```

## 5. Layout Principles

**Container:**

- Main maximum width: `1180px`
- Editorial text width: `720px`
- Desktop side padding: `32px`
- Mobile side padding: `20px`

**Spacing Scale:** `4, 8, 12, 16, 24, 32, 48, 64, 88px`

- Hero block: `72px` top and `64px` bottom on desktop.
- Standard section: `88px` vertical padding; compact section: `64px`.
- Project grid gap: `32px`; internal content gap: `16px`.
- No floating section containers. Each section is a full-width band with a constrained inner grid.

```css
.cv-container { width: min(100% - 64px, 1180px); margin-inline: auto; }
.cv-section-grid { display: grid; grid-template-columns: minmax(180px, 0.7fr) minmax(0, 2.3fr); gap: 48px; }
.cv-project-grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 32px; }
```

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow | page bands, navigation, lists |
| Rule | `1px` semantic border | cards, media frames, section separators |
| Subtle | `0 8px 24px rgba(var(--cv-text-rgb), 0.06)` | portrait and project visuals only |
| Focus | `2px` accent outline | keyboard focus |

Large floating shadows, colored glows, glass panels, and backdrop blur over scrolling content are prohibited.

## 7. Animation & Interaction

**Motion Philosophy**: motion confirms hierarchy; it never delays access to information.
**Tier**: L1 refined static

### Entrance Animation

```css
@keyframes cv-fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.cv-home > section { animation: cv-fade-in 500ms cubic-bezier(0.16, 1, 0.3, 1) both; }
.cv-home > section:nth-child(2) { animation-delay: 70ms; }
```

### Hover and Focus

Interactive elements transition color, border, or at most `1px` vertical movement. Images may scale to `1.015`; no tilt, magnetic motion, pointer-following light, or continuous animation.

### Scroll Behavior

```css
html { scroll-behavior: smooth; }
[id] { scroll-margin-top: 76px; }
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 8. Do's and Don'ts

### Do

- Put the person's name and research field in the first viewport.
- Put selected work immediately after the hero.
- Use actual project data, route geometry, and generated poetry as visual evidence.
- Keep English and Chinese markup identical through one shared Hugo block.
- Use semantic headings, native links, and minimum `44px` touch targets.
- Keep all colors and layout values in the design token system.
- Preserve dark mode without sacrificing text contrast.
- Prefer lists and rules for dense academic information.

### Don't

- Do not use emoji as section icons or headings.
- Do not use purple-blue gradients, glass cards, bokeh, or decorative blobs.
- Do not use hero text gradients or text shadows.
- Do not put page sections inside floating cards.
- Do not nest cards inside cards.
- Do not show the theme pack selector in the production navigation.
- Do not use stock photography unrelated to the research.
- Do not hide primary research behind biography, education, or awards.
- Do not introduce GSAP, WebGL, custom cursors, or scroll-jacking.
- Do not hardcode colors outside the token declarations.

## 9. Responsive Behavior

| Name | Width | Key Changes |
|---|---:|---|
| Desktop | `>= 1024px` | two-column hero, asymmetric project grid, label/content section grid |
| Tablet | `768-1023px` | compact hero, equal project columns, reduced section gap |
| Mobile | `< 768px` | single column, portrait beside identity metadata where space permits, stacked actions and projects |
| Small Mobile | `< 420px` | `20px` page padding, 44px controls, 40px hero name, no horizontal metadata rows |

**Touch Targets:** minimum `44 x 44px`
**Collapsing Strategy:** the existing HugoBlox menu collapses at mobile width; project media stays above project text; metric rows wrap without changing card height.

```css
@media (max-width: 767px) {
  .cv-container { width: min(100% - 40px, 1180px); }
  .cv-section-grid, .cv-project-grid { grid-template-columns: 1fr; gap: 24px; }
  .cv-hero__name { font-size: 40px; }
  .cv-section-title { font-size: 32px; }
}
```
