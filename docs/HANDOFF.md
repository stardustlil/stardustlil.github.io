# Project Handoff

This is Li Xiang's bilingual academic CV website. It is a static HugoBlox site built with Hugo Extended, Tailwind CSS v4, and Pagefind search. Production is published at <https://stardustlil.github.io/>.

## Current Architecture

- The English homepage is `/`; the Chinese homepage is `/zh/`.
- Both homepages render the same custom block: `academic-home`.
- Page-level content files only select the data source:
  - `content/_index.md` uses `data/pages/home-en.yaml`.
  - `content/zh/_index.md` uses `data/pages/home.yaml`.
- The shared markup is `layouts/_partials/hbx/blocks/academic-home/block.html`.
- Site-specific styling is centralized in `assets/css/custom.css`.
- `DESIGN.md` defines the Research Editorial design system. Preserve its semantic color tokens, flat surfaces, restrained borders, and responsive breakpoints when changing the UI.

Do not split the English and Chinese homepage markup unless there is a genuine language-specific layout requirement. Keep the two YAML files structurally aligned and change localized copy in each file.

## Maintenance Map

| Need | Primary location | Notes |
| --- | --- | --- |
| English homepage copy, links, metrics | `data/pages/home-en.yaml` | Includes hero, work, research, experience, awards, and contact sections. |
| Chinese homepage copy, links, metrics | `data/pages/home.yaml` | Keep field names and section ordering aligned with the English file. Edit as UTF-8. |
| Shared homepage structure | `layouts/_partials/hbx/blocks/academic-home/block.html` | Use Hugo resource helpers and `relURL`/`RelPermalink` as the existing template does. |
| Layout, colors, responsive styling | `assets/css/custom.css` | Reuse `--cv-*` tokens. Check desktop and narrow mobile after CSS changes. |
| Design rationale | `DESIGN.md` | The site is intentionally editorial, not a generic landing page. |
| Navigation | `config/_default/menus.yaml` | English uses `main`; Chinese uses `zh_main`. |
| Author photo | `assets/media/authors/me.png` | The current blue background is intentional: a grayscale/cutout treatment was evaluated and rejected. Do not alter it without a new approved source image or explicit approval. |
| CV download | `static/uploads/resume.pdf` | Linked from both YAML homepages. |
| Publications | `content/publications/` and `content/zh/publications/` | Keep localized pages paired when adding a publication. |
| Homepage project visuals | `assets/media/projects/` | `georoutenet-route.svg` and `poetrygpt-sample.svg` are referenced directly by the custom block. |
| Structural regression tests | `tests/site.test.mjs` | Tests rendered HTML for both locales. |

The contact email is maintained in `actions.email_url` in both homepage data files. Its current value is `mailto:lixiang.stu@yangtzeu.edu.cn`.

## Local Development

Prerequisites:

- Hugo Extended `0.163.3` (declared in `hugoblox.yaml`)
- Node.js `22` and npm (the repository declares npm `11.12.0`)

```powershell
npm ci
npm run dev
```

The local development server is normally available at `http://localhost:1313/`.

Run these checks before committing a functional or visual change:

```powershell
npm test
npm run build
npm audit --registry=https://registry.npmjs.org --audit-level=high
```

`npm test` builds the Hugo site and runs the eight structural tests. `npm run build` additionally creates the Pagefind index. The committed `lint` script is currently only a placeholder, so it is not a meaningful quality gate.

For UI work, also inspect the rendered `/` and `/zh/` pages at desktop, tablet, and narrow mobile widths. The automated tests verify document structure and links; they do not validate visual layout.

## Deployment

- The deployment target is configured as `github-pages` in `hugoblox.yaml`.
- `.github/workflows/deploy.yml` runs only on pushes to `main` (or manual dispatch).
- The workflow calls `.github/workflows/build.yml`, which installs Node 22 dependencies, builds Hugo, generates Pagefind, and publishes the resulting `public/` artifact to GitHub Pages.
- A successful push to a non-`main` branch does not publish production.

Normal release sequence:

```powershell
git switch main
git pull --ff-only origin main
npm test
npm run build
git push origin main
```

After pushing, confirm the `Deploy website to GitHub Pages` workflow succeeds in GitHub Actions, then verify <https://stardustlil.github.io/> returns HTTP 200. To roll back a bad static release, revert the relevant commit and push `main` again:

```powershell
git revert <commit>
git push origin main
```

`netlify.toml` is present as an alternate hosting configuration, but GitHub Pages is the active production path. Do not change the deployment host or rely on Netlify behavior unless a migration is explicitly requested.

## Working Conventions And Known Limits

- Read `CLAUDE.md` before making changes. A local, untracked `AGENTS.md` may also exist and must not be committed unless the owner explicitly requests it.
- Keep homepage content changes in the data files. Avoid duplicating the shared template solely to change text.
- Do not commit generated directories such as `public/`, `resources/`, `node_modules/`, or Pagefind output.
- The root `README.md` remains upstream template marketing material; this document is the project-specific maintenance reference.
- The Google Fonts import in `assets/css/custom.css` is external. Verify the site's readable fallback fonts if network access is unavailable.
- GitHub Actions is the final deployment gate. The local npm mirror may not implement `npm audit`; use the official registry override shown above when an audit is needed.

## First Checks For A New Maintainer Or Agent

```powershell
git status --short --branch
npm ci
npm test
npm run build
```

Then inspect the target locale in a browser before editing. For a homepage change, update both `data/pages/home-en.yaml` and `data/pages/home.yaml`, preserve the shared template contract, and repeat the checks above.
