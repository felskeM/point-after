# Cloudflare launch and domain migration

Prepared September 28, 2026. Repository preparation does not connect accounts, deploy production, or change live DNS.

## Prepare a preview

1. In Cloudflare Workers & Pages, create a Pages project using Git integration and authorize GitHub repository `felskeM/point-after`.
2. Use production branch `master`, root directory `/`, build command `npm run build && npm run verify`, and output `dist`. Set `NODE_VERSION=24.15.0` for production and previews (also committed in `.nvmrc`). No adapter, server, or secrets are required.
3. Review the assigned `pages.dev` URL. Check mobile navigation, PDFs, phone links, hours, privacy pages, 404 behavior, and response headers. Disable Web Analytics, Zaraz, Rocket Loader, and other script injection to preserve the documented privacy model.
4. GitHub Actions validates changes separately. Enable branch protection requiring its `build` check if desired. Pages deployment is managed by Cloudflare, not that workflow.

## Move DNS without losing email

1. Export the current authoritative DNS zone and record existing nameservers, website targets, TTLs, and email provider. Confirm whether GoDaddy actually hosts authoritative DNS; registration and DNS can be separate.
2. Add `pointafterpubandgrille.com` as a zone in the same Cloudflare account as Pages. Compare imported records with the export, including MX, SPF, DKIM, DMARC, verification TXT, CAA, SRV, and subdomains. Automated scans may omit records. Keep mail-related host records DNS-only and preserve their targets.
3. If DNSSEC is active, follow Cloudflare's migration instructions to remove the old DS delegation at the registrar before changing nameservers; wait for removal to propagate. An old DS record with new nameservers can make the domain fail to resolve.
4. Initially preserve existing website targets in Cloudflare DNS. Change nameservers at GoDaddy to the exact pair assigned by Cloudflare; wait until the zone is Active. Test the existing website and incoming/outgoing email. Retain old hosting and DNS records for rollback.

## Switch website traffic

1. Once the preview is approved for launch, add both `pointafterpubandgrille.com` and `www.pointafterpubandgrille.com` under Pages **Custom domains**. Use this flow, not a bare CNAME alone. Resolve conflicting website A/AAAA/CNAME records only when ready to cut over; preserve mail and unrelated services.
2. Wait for both domains and TLS certificates to become active. Configure Cloudflare's documented www-to-apex redirect, preserving path and query string. Astro uses `https://pointafterpubandgrille.com` as canonical.
3. Enable Always Use HTTPS. Confirm HTTPS on both names before announcing launch. Shipped HSTS covers only the current host, not all subdomains.
4. Test old `.html` URLs listed in `_redirects`, custom 404 responses, PDFs, CSP/security headers, phone links, mobile/keyboard/zoom behavior, and absence of unexpected analytics requests/cookies in browser developer tools. Local Astro preview does not apply Cloudflare headers or redirects.
5. Recheck incoming/outgoing email, billing/renewal contacts, and sitemap access. Keep the former host until DNS propagation and restaurant acceptance are complete.

## Optional: transfer registration from GoDaddy

Cloudflare can host the website and DNS while GoDaddy remains registrar. To move registration too, first get the Cloudflare zone Active and confirm transfer eligibility (including applicable 60-day locks), contact email access, and expiration status. Unlock the domain at GoDaddy, obtain its EPP authorization code, and initiate transfer through Cloudflare Registrar. Review the charge and approve the transfer through the registrar. Never commit the code or credentials. Follow current DNSSEC guidance, then enable Cloudflare DNSSEC after migration/transfer and verify confirmed status.

## Updates and rollback

Run `npm ci`, `npm run build`, and `npm run verify`; commit and push a feature branch for a preview, then merge to `master` for production. Pages Git integration automatically deploys pushes. No Cloudflare API token is needed in this repository. Use Pages deployment rollback for a bad release and revert the source commit. For a DNS cutover failure, restore saved website targets in the active Cloudflare zone; nameserver rollback is slower and must account for DNSSEC. Do not overwrite working email settings.

## References

- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/pages/how-to/www-redirect/
- https://developers.cloudflare.com/dns/dnssec/
- https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/
