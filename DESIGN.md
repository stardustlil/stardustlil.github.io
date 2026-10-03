# DESIGN.md

A one-page bilingual homepage that can be read in under a minute: who, what research, which paper, what else, how to reach.

## Tokens (`src/styles/global.css`)

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#fafbfc` | `#12151b` | background |
| `--ink` | `#1a1f2b` | `#e4e7ee` | text |
| `--graphite` | `#5d6472` | `#9aa1ae` | labels, dates, secondary text |
| `--rule` | `#e2e5ea` | `#272c35` | section dividers |
| `--cobalt` | `#2340c8` | `#8fa3ff` | links and the tour line only |

Dark mode follows `prefers-color-scheme`; there is no toggle.

## Type

Instrument Sans (self-hosted variable font, width + weight axes) for everything. Chinese falls back to the system CJK sans (PingFang SC / Microsoft YaHei / Noto Sans CJK SC), so no CJK web font is downloaded. The name uses `font-stretch: 82%`; dates use tabular figures.

## Layout

- Hero: name, affiliation, contact links; on the right a TSP tour figure (`src/components/Tour.astro`) solved at build time with nearest-neighbour + 2-opt. It draws itself once on load and is hidden below 640px.
- Sections: label column (11rem) + content column, separated by 1px rules; single column below 640px.
- Projects: first two visible, the rest in a native `<details>` toggle.
- Awards: year shown once per group.

## Rules

- No photo, no self-description sentences, no availability notices.
- One line per item; no item repeats information shown elsewhere on the page.
- The only motion is the tour drawing; it is disabled under `prefers-reduced-motion`.
