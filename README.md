# Point After Pub & Grille

Static Astro website with Tailwind CSS, prepared for Cloudflare Pages Git deployments.

## Development

Use Node 24.15.0 or newer (build version in `.nvmrc`).

```sh
npm ci
npm run dev
npm run build
npm run verify
npm run preview
```

`verify` checks built links, privacy constraints, and deployment artifacts. GitHub Actions builds and verifies pull requests and pushes to `master`.

## Publish

Follow [the Cloudflare migration guide](docs/cloudflare-migration.md). Connect `felskeM/point-after` to a Cloudflare Pages Git-integrated project with production branch `master`, build command `npm run build && npm run verify`, output `dist`, and Node 24.15.0. Once connected, pushing to `master` triggers production deployment; other branches get previews. Native Git integration needs no Cloudflare API token committed to this repository.

## Content and privacy

Dedicated pages: `/touchback-program/`, `/gallery/`, and `/luxury-box/`. Touchback and Gallery appear in the shared header; Luxury Box is linked from the home page events section. Header section links return to the home page from every page.

The gallery automatically includes every JPG/PNG/WebP/AVIF in `public/images`. `npm run dev` and `npm run build` first generate cached WebP previews and larger views in ignored `public/gallery-images`; original photographs are unchanged. New photos appear after the next build.

Maintain restaurant hours in `src/data/site.ts`, page content in `src/pages/index.astro`, and menu PDFs in `public/menus`. See [content sources](docs/content-sources.md) and [privacy launch review](docs/privacy-review.md) for verified facts and outstanding owner checks.

The site ships no forms, client JavaScript, analytics, browser storage, embedded maps, or third-party fonts. Cloudflare `_headers` enforce this baseline on static assets. Keep Web Analytics, Zaraz, Rocket Loader, and other script injection disabled unless the implementation, CSP, and privacy notice are reviewed together. Local Astro preview does not apply Cloudflare headers or redirects.
