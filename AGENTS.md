# Project guidance

## Purpose and audience

Build Padmaja Mazumder's personal portfolio for recruiters hiring for software engineering roles, with Salesforce development presented as relevant engineering experience. Keep a small creative-writing corner that feels personal and fits the professional site.

## Decisions agreed with the owner

- Use Astro, TypeScript, and CSS with static output.
- Host on Cloudflare Pages using its free `pages.dev` subdomain.
- Keep runtime services, databases, paid APIs, and required subscriptions out of the portfolio.
- Make local Git commits. Do not log in to GitHub, create a remote repository, or push without a new explicit instruction.
- Keep the supplied résumé in `public/Padmaja-Resume.pdf` and link to it from the site.

## Content sources

- The supplied résumé is the source for identity, work history, education, links, and résumé metrics.
- `src/data/portfolio.ts` contains the editable portfolio content.
- `docs/project-review.md` records why public repositories were selected and distinguishes résumé claims from code observations.
- Public repository source may be reviewed through anonymous HTTP requests. Do not require GitHub authentication.
- Do not invent credentials, project results, employment dates, personal writing, or live-demo status.
- Salesforce certificate names have not been supplied; do not display invented badges.
- Keep client work described at the résumé's level of detail. Do not add client names or proprietary source.

## Structure

- `src/pages/index.astro`: recruiter-facing home page.
- `src/pages/off-the-clock/`: creative corner and published story pages.
- `src/content/stories/`: Markdown stories; draft entries never appear publicly.
- `src/components/`: reusable icons, navigation, project artwork, and creative interaction.
- `src/layouts/BaseLayout.astro`: metadata and shared page structure.
- `src/styles/global.css`: shared visual system and responsive layouts.
- `public/`: local fonts, icons, social artwork, résumé, and Cloudflare headers.

## Design and accessibility

Use warm cream, deep green, restrained orange accents, generous spacing, and readable editorial typography. Keep mobile layouts polished. Use semantic HTML, visible keyboard focus, sufficient contrast, real links, reduced-motion support, and meaningful accessible labels. Essential content must work without JavaScript. Keep external links safe with `rel="noopener noreferrer"` when opening a new tab.

## Validation and maintenance

Use `npm run check` for Astro/TypeScript diagnostics and `npm run build` for the production static build. After layout or interaction changes, check desktop and mobile layouts and keyboard behavior when browser tools are available. Avoid adding tests that only mirror markup. Document deployment and content changes in `README.md`. Commit source and the lockfile; keep generated files and local credentials out of Git.
