# Shelby's Systems Engineering Portfolio

A React portfolio for shelbys, a Systems Engineering student at the American University of Kuwait (AUK).

## Local development

```bash
pnpm install
pnpm dev
```

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. In GitHub, open **Settings → Pages**, set **Source** to **GitHub Actions**, and push to `main`. The workflow builds the Vite site and deploys `dist/public` automatically.

The project build uses the `/my-portfolio/` base path for GitHub Actions and hash routing for reliable navigation on GitHub Pages.

## Contact

Email: info@shelbys.dev
