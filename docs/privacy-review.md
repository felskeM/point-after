# Privacy and accessibility launch review

This is an engineering review, not a legal opinion or certification. US obligations depend on activities, customer locations, statutory thresholds, vendor settings, and actual data handling. A static website cannot establish compliance for restaurant POS, employment, email, reservations, loyalty, delivery, or marketing systems.

## Implemented

- Static pages without forms, accounts, payments, trackers, browser storage, or third-party embeds; outbound directions link instead of embedded maps.
- Public website privacy notice covering technical processing, contact, external services, children, privacy signals, and phone/postal request channels.
- Cloudflare headers: restrictive CSP, MIME sniffing/framing protection, referrer policy, restricted permissions, and host-only HSTS.
- Local assets, keyboard skip link, visible focus, mobile navigation, reduced-motion support, and accessibility assistance. No claim of full WCAG/ADA conformance; PDFs still require review.

## Owner / legal review before launch

1. Confirm the notice matches actual hosting and restaurant practices. Inventory provider logs, retention, security cookies, access roles, and any analytics added through Cloudflare. Keep optional analytics, Zaraz and Rocket Loader disabled under this implementation.
2. Assign responsibility for privacy requests at the published phone/address. Establish identity verification, request records, applicable response deadlines, deletion exceptions, and vendor assistance. Document retention/deletion schedules for inquiries and operational logs; code cannot enforce these.
3. Determine state privacy law applicability with counsel based on revenue, volumes, jurisdictions, sales/sharing, and exemptions. Wisconsin location alone does not exclude other states' rules. Review California online privacy disclosure duties separately from CCPA applicability.
4. Review FTC truthful-notice/data-security requirements, Wisconsin breach notification duties, and incident response. Review COPPA if child-directed collection is introduced, and CAN-SPAM/TCPA before email or SMS marketing.
5. Before adding ordering, reservations, applications, loyalty, ads, or forms: review vendors/contracts, collection notices, minimization, retention, security, opt-out/GPC duties, and consent. Use hosted payments; do not collect card data here. Update CSP and the notice together.
6. Manually review keyboard operation, 200% zoom, contrast, screen readers, and PDF reading order/text alternatives. Publish accessible HTML menus or remediated PDFs for the full menu; telephone assistance does not replace accessible content.

## References

- FTC: https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business
- California AG: https://www.oag.ca.gov/privacy/ccpa
- Wisconsin breach statute: https://docs.legis.wisconsin.gov/statutes/statutes/134/98
- DOJ accessibility: https://www.ada.gov/resources/web-guidance/

Account configuration and operational data handling remain outside verified code changes.
