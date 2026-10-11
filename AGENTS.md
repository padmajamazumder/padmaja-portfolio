# Project guidance

## Purpose and audience

Build Padmaja Mazumder's personal portfolio for recruiters hiring for software engineering roles, with Salesforce development presented as relevant engineering experience. Keep a small creative-writing corner that feels personal and fits the professional site.

## Decisions agreed with the owner

- Use Astro, TypeScript, and CSS with static output.
- Host on Cloudflare Pages using its free `pages.dev` subdomain.
- Keep runtime services, databases, paid APIs, and required subscriptions out of the portfolio.
- Make local Git commits. Do not log in to GitHub, create a remote repository, or push without a new explicit instruction.
- The owner explicitly authorized creating and pushing this project to `padmajamazumder/padmaja-portfolio`. Verify the authenticated CLI account is `padmajamazumder` before remote writes. Do not use the machine's other GitHub account. At the owner's request, the initial eight commits were rewritten and force-pushed with Padmaja Mazumder as both author and committer. Use the repository-local Padmaja identity and unsigned commits for new work. Keep credentials out of Git.
- The owner explicitly authorized Cloudflare Pages deployment and connecting the GitHub repository for automatic builds. Verify Cloudflare authenticates as `ipadmaja.mazumder@gmail.com` or its Gmail-equivalent undotted form `ipadmajamazumder@gmail.com`. Chrome Profile 10 is the Cloudflare profile; Profile 7 is the GitHub profile. A Git-connected Pages project requires Cloudflare's GitHub App authorization; Wrangler login alone does not grant repository access.
- Cloudflare Pages project `padmaja` is connected to `padmajamazumder/padmaja-portfolio`: production branch `main`, build command `npm run build`, output `dist`, Node `22.23.3`, and `PUBLIC_SITE_URL=https://padmaja.pages.dev` in production and previews. Pushing `main` triggers deployment. Use this URL for canonical and sharing metadata. The owner requested the shorter address after the initial deployment; Cloudflare requires a new project to change the `pages.dev` subdomain.
- Keep the supplied résumé unchanged in `public/Padmaja-Resume.pdf` as an archive. Site résumé links use the owner's public Google Drive file configured in `profile.resume`.

## Content sources

- The supplied résumé is the source for identity, work history, education, links, and résumé metrics.
- The owner authorized importing poetry, its matching artwork, and additional personal context from `https://padmajam.vercel.app/`. Preserve the original poetry wording and titles. `docs/legacy-import.md` and `docs/legacy-diary-source.json` record the migration.
- Use the résumé for dates where the previous portfolio conflicts. Do not invent publication dates for imported poems.
- `src/data/portfolio.ts` contains the editable portfolio content.
- `docs/project-review.md` records why public repositories were selected and distinguishes résumé claims from code observations.
- Public repository source may be reviewed through anonymous HTTP requests. Do not require GitHub authentication.
- Do not invent credentials, project results, employment dates, personal writing, or live-demo status.
- Salesforce certificate names have not been supplied; do not display invented badges.
- The owner authorized importing the previous About page's ten certification and learning entries. Preserve their names and source URLs except for the missing Diploma link: use the working link from the résumé. `docs/legacy-certifications-source.json` and `docs/legacy-import.md` record the sources and link checks. Learning profiles are not individual certifications.
- When the owner supplies a Google Drive résumé URL, use it for `profile.resume` and retain the supplied local PDF as an archive. Updating the same Drive file through Manage versions preserves the URL; a new file does not.
- The owner supplied `https://drive.google.com/file/d/1USnawM9u4X9tNcmXKU1j0ebkBMVo74sg/view?usp=sharing` and updated the contact email to `ipadmaja.mazumder@gmail.com`. These override the original résumé's contact/link values.
- The owner identified time management and deadline discipline as strengths that helped them pursue degrees at NIT Silchar and IIT Madras together. This About copy is authorized personal context.
- Keep client work described at the résumé's level of detail. Do not add client names or proprietary source.

## Structure

- `src/pages/index.astro`: recruiter-facing home page.
- `src/pages/off-the-clock/`: creative corner and published story pages.
- `src/content/stories/`: Markdown stories; draft entries never appear publicly.
- `src/assets/diary/`: original paired diary images; Astro produces optimized images at build time.
- `src/lib/stories.ts`: shared published-entry ordering and reading metadata.
- `src/components/`: reusable icons, navigation, project artwork, and creative interaction.
- `src/layouts/BaseLayout.astro`: metadata and shared page structure.
- `src/styles/global.css`: shared visual system and responsive layouts.
- `public/`: local fonts, icons, social artwork, résumé, and Cloudflare headers.

## Design and accessibility

Use warm cream, deep green, restrained orange accents, generous spacing, and readable editorial typography. Keep mobile layouts polished. Use semantic HTML, visible keyboard focus, sufficient contrast, real links, reduced-motion support, and meaningful accessible labels. Essential content must work without JavaScript. Keep external links safe with `rel="noopener noreferrer"` when opening a new tab.

The toolkit heading is “Worked with”. Use `--text-small` (14px) for text previously at 12px or below; preserve larger text and headline sizes.

Keep the three-number highlights strip removed. Link to the LeetCode and Codeforces profiles below the toolkit without displaying counts or ratings. The former fantasy prompt jar is replaced by a cat corner: local SVG doodles and playful captions in `src/data/cats.ts`, selected on page load or with “Another cat”. Keep the interaction free of runtime APIs, automatic rotation, and personal-poetry attribution.

The header has a light/dark toggle. Respect device preference until the visitor makes a choice, then save that choice locally. Maintain readable contrast in both themes and preserve original artwork. Butterfly stickers are restricted to the Off the clock index and must remain decorative, static, and outside readable content. The cat captions are cute jokes, separate from personal poetry.

## Validation and maintenance

Use `npm run check` for Astro/TypeScript diagnostics and `npm run build` for the production static build. After layout or interaction changes, check desktop and mobile layouts and keyboard behavior when browser tools are available. Avoid adding tests that only mirror markup. Document deployment and content changes in `README.md`. Commit source and the lockfile; keep generated files and local credentials out of Git.
