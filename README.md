# stardustlil.github.io

Personal homepage of Xiang Li, built with [Astro](https://astro.build) and deployed to GitHub Pages.

- English: `/`, Chinese: `/zh/`
- All copy lives in `src/content.ts` (one entry per language); both pages render `src/components/Home.astro`.
- The CV is `public/uploads/resume.pdf`, exported from `resume/resume.html` with `npm run resume` (needs Google Chrome).

```bash
npm install
npm run dev     # http://localhost:4321
npm test        # build + checks in tests/site.test.mjs
```

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
