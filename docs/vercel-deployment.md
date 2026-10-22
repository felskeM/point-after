# Publish on Vercel

This repository is ready for a public Vercel deployment. No custom domain, server adapter, or environment secrets are required. Repository preparation does not itself publish a site.

## First deployment

1. Commit and push these changes to `felskeM/point-after` on GitHub.
2. Open https://vercel.com/new, sign in with GitHub, and import `felskeM/point-after`.
3. Use the repository root, Astro framework, and Node.js 24.x. The committed `vercel.json` supplies install command `npm ci`, build command `npm run build && npm run verify`, and output directory `dist`.
4. Set the production branch to `master` in the project's Git settings. Deploy and open the assigned `https://<project>.vercel.app` address.
5. In Deployment Protection, ensure the production deployment is publicly accessible. Test the address in a signed-out/private browser before sharing.

After connecting GitHub, pushes to the production branch deploy automatically; other branches receive preview deployments. Keep Vercel Analytics and Speed Insights disabled unless you intentionally add and review those features.

The Vercel configuration includes security headers and the existing legacy URL redirects. Custom 404s are served from the generated `404.html`. No catch-all rewrite is needed.

## Check before sharing

Check the home page, gallery photos, menu PDFs, jobs email link, mobile navigation, `/gallery.html` redirect, and a nonexistent URL. The unfinished jobs submission form has been replaced with email instructions; there is no `/api/jobs` service or email API credential to configure.

Canonical links, robots.txt, and sitemap.xml currently name `https://pointafterpubandgrille.com`. The Vercel address works for public viewing. When choosing a different permanent domain, update `astro.config.mjs`, `public/robots.txt`, and `public/sitemap.xml` together.

## Optional custom domain

Add your domain in Vercel project Settings > Domains and follow its displayed DNS instructions. Until then, share the Vercel address. Preserve existing email DNS records. The existing Cloudflare migration guide is an alternative hosting route; do not follow both providers' DNS cutover instructions.

## Local checks

```sh
npm ci
npm run build
npm run verify
npm run preview
```

Local Astro preview does not apply Vercel response headers or redirects. Review those on the deployed URL. Use Vercel's deployment history to roll back a release, then revert the source change as appropriate.

References: [Astro on Vercel](https://vercel.com/docs/frameworks/frontend/astro), [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json).
