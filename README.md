# ClawWorks Static Website

Created: 2026-05-21

ClawWorks is a static website for an admin automation service serving small businesses, solo founders, agencies, and local operators.

## Files

- `index.html` - main business website
- `styles.css` - responsive site styling
- `script.js` - mobile menu, current year, and contact form mailto behavior
- `CLAWWORKS_TIERS.md` - source-of-truth package definitions for future client onboarding
- `resources/first-admin-workflow.html` - original resource article
- `resources/inbox-triage-rules.html` - original resource article
- `resources/lean-admin-stack.html` - original resource article

## Before Publishing

1. Contact email is currently set to `Ethanbrooks0333@gmail.com` in `index.html` and `script.js`.
2. Review package wording if the service scope changes.
3. Choose and register a real domain, then point it at the static host.
4. Add more resources over time. Strong, original articles improve credibility.
5. Keep the public site focused on ClawWorks services.

## Domain Setup Checklist

1. Choose a domain and verify availability at a registrar such as Cloudflare Registrar, Namecheap, Porkbun, Squarespace Domains, or GoDaddy.
2. Buy the domain using an account you control.
3. Publish the site to a static host such as Cloudflare Pages, Netlify, GitHub Pages, or Vercel.
4. Add the custom domain inside the hosting dashboard.
5. Update DNS records at the registrar or DNS provider. Most static hosts use a `CNAME` for `www` and either an apex record, ALIAS/ANAME, or provider-managed DNS for the root domain.
6. Wait for DNS and HTTPS/SSL to finish provisioning.
7. Test both versions: `https://example.com` and `https://www.example.com`.

Recommended domain direction: keep it simple, ownable, and close to the brand. Shortlist options to verify at a registrar:

- `clawworkshq.com`
- `getclawworks.com`
- `tryclawworks.com`
- `clawworksops.com`
- `clawworksstudio.com`
- `clawworksflow.com`

DNS lookup note from 2026-05-21: `clawworks.co`, `clawworks.io`, and `clawworks.dev` already had DNS records. The shortlist above did not return DNS records from this machine, but that does not guarantee registration availability. Confirm at a registrar before using one publicly.

## Publishing

This site is plain HTML/CSS/JS. It can be hosted on Netlify, Cloudflare Pages, GitHub Pages, Vercel, or any basic static host.

## Notes

This version is focused on ClawWorks automation services.
