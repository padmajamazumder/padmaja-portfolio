# Padmaja's portfolio

A static Astro portfolio for software engineering opportunities, with Salesforce experience, selected projects, a shared résumé, and a creative-writing diary.

## Run locally

Use Node.js 22.12 or later. The project pins Node 22.23.3 in `.node-version` and `.nvmrc`.

```sh
npm ci
npm run dev
```

Open the URL printed by Astro (normally http://localhost:4321).

```sh
npm run check
npm run build
npm run preview
```

`dist/` is the complete static website. There is no server, database, runtime API, external font request, or paid service requirement. Fonts are bundled locally through Fontsource under the SIL Open Font License. Icons and project illustrations are SVG/CSS, not screenshots or live project interfaces.

## Deploy for free on Cloudflare Pages

Use **Pages Direct Upload** to publish without a GitHub login or push:

1. Run `npm ci` and `npm run build` locally.
2. Sign in to Cloudflare and open **Workers & Pages**. Create a **Pages** project using **Direct Upload / Upload assets**.
3. Choose a project name and upload the `dist` folder, or a ZIP containing the *contents* of `dist` with `index.html` at the ZIP's root.
4. Deploy. Cloudflare provides HTTPS and a free `your-project.pages.dev` address.
5. Once you know the final address, copy `.env.example` to `.env`, set `PUBLIC_SITE_URL=https://your-project.pages.dev`, build again, and upload the new output. This enables the correct canonical links and absolute social-sharing image URL.

For future updates, build again and create a new production upload in the same Pages project. This uses static hosting with no Functions or paid resources. A purchased custom domain is optional; use the included `pages.dev` address for a fully free setup. Free hosting is subject to Cloudflare's current plan terms.

If you later choose Git integration, use build command `npm run build`, output directory `dist`, and Node version `22.23.3`. Direct Upload projects cannot be converted to Git integration; that requires a new Pages project. No GitHub remote is configured for this project.

Official references: [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/) · [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

## Edit the portfolio

- **Personal details, links, projects, experience, skills, education:** `src/data/portfolio.ts`.
- **Main-page introduction and section copy:** `src/pages/index.astro`.
- **Résumé:** all site résumé links use the owner's [public Google Drive file](https://drive.google.com/file/d/1USnawM9u4X9tNcmXKU1j0ebkBMVo74sg/view?usp=sharing), configured in `profile.resume`. The supplied `public/Padmaja-Resume.pdf` remains unchanged as an archive.
- **Update the résumé:** use Drive's **Manage versions → Upload new version** on that same file and keep access at **Anyone with the link → Viewer**. Its file ID and portfolio link stay the same, so no portfolio rebuild is needed. Uploading a separate new file creates a different link.
- **Certifications and learning profiles:** edit `qualifications` in `src/data/portfolio.ts`. Use `kind: 'profile'` for a learning profile and `kind: 'certificate'` for a document. The ten entries come from the previous portfolio; the Diploma uses the working résumé link because the old portfolio's link is missing.
- **Creative-page copy:** `src/pages/off-the-clock/index.astro`.
- **Diary cards, search, and theme filters:** `src/components/DiaryCollection.astro`.
- **Diaries and poem text:** `src/content/stories/`.
- **Original diary artwork:** `src/assets/diary/`. Astro generates responsive WebP assets at build time; the public site makes no requests to the old portfolio.
- **Poem reading pages:** `src/pages/off-the-clock/[...id].astro`.
- **Diary and reading-page styles:** `src/styles/diary.css`.
- **Cat corner captions and poses:** `src/data/cats.ts`; interaction in `src/components/CatCorner.astro`, original SVG artwork in `src/components/CatDoodle.astro`, and styles in `src/styles/cats.css`.
- **Colors, typography, spacing, responsive layouts:** `src/styles/global.css`.
- **Small text:** `--text-small` in `src/styles/global.css` controls the enlarged 14px labels, tags, metadata, and other text previously sized at 12px or below, including mobile and diary styles. Existing larger text and headline sizes are unchanged.
- **Page metadata:** `src/layouts/BaseLayout.astro` and `PUBLIC_SITE_URL`.
- **Sharing artwork:** `public/social-card.png`, generated from `public/social-card.svg`.

The résumé supplied for this project is stored unchanged. Work history and coding metrics are based on it; periodically update time-sensitive information. Certification names and learning profiles, earlier education, community-role details, and arts training also use the owner's previous portfolio. Where dates conflict, the résumé takes precedence. Salesforce certificate names have not been supplied and have deliberately not been invented. Add the real credentials when available.

The owner supplied the updated contact address `ipadmaja.mazumder@gmail.com` and the time-management strength described in About. The previous three-number highlights strip has been removed; the LeetCode and Codeforces profiles are linked below “Worked with” without counts or ratings.

The cat corner replaces the fantasy prompt jar with six original SVG doodles and lighthearted UI captions. It chooses a random scene when the page opens. “Another cat” changes both drawing and caption without an immediate repeat. It does not auto-rotate while someone is reading. There are no API calls, image downloads, credentials, tracking, or subscriptions. With JavaScript disabled, the first doodle and caption remain visible. Cat captions are separate from the owner's published poetry.

## Publish creative writing

Add a Markdown file to `src/content/stories/`:

```md
---
title: "Your story title"
description: "A short introduction."
date: 2026-10-11
genre: "Fantasy"
draft: false
---

Your story goes here.
```

The filename becomes the URL: `the-lantern.md` → `/off-the-clock/the-lantern/`. Dated stories appear newest first; undated entries use their `order` value. `draft: true` keeps a story out of both the public list and generated routes. The included `untitled-draft.md` is an unpublished editing template. Dates are optional; when present, use `YYYY-MM-DD`. Do not invent dates for older writing.

The diary includes all eight original poems from https://padmajam.vercel.app/diary, with their original titles, wording, excerpts, tags, image pairings, and reading-time metadata. Each poem has a separate shareable page, next/previous navigation, and readable stanza spacing. Search matches titles, text, and tags. Theme filters use the original tags. All entries and reading links work with JavaScript disabled; search and filters enhance the static page when JavaScript is available.

Optional frontmatter supports `excerpt`, `cover`, `coverAlt`, `tags`, `order`, and `readTimeMinutes`. For example:

```yaml
genre: "Poetry"
excerpt: "The first line\nThe second line"
cover: "../../assets/diary/your-image.jpg"
coverAlt: "A brief description of the image."
tags: ["Poetry", "Reflection"]
order: 9
readTimeMinutes: 2
```

Store images in `src/assets/diary/` and keep the full artwork visible. In Markdown poems, finish each line with two spaces to retain its line break, and leave a blank line between stanzas. The imported poetry's spelling and punctuation are intentionally preserved.

## Project review and future work

`docs/project-review.md` documents the public source review and the selected projects. `docs/legacy-import.md` records the previous-portfolio migration and any conflicting information; `docs/legacy-diary-source.json` preserves the extracted diary source for text comparisons. `AGENTS.md` records the owner's decisions, content rules, structure, and maintenance guidance for later sessions.

Local Git commits use the repository's existing author configuration. Commit signing can be disabled per command if the configured signing key requires an unavailable interactive prompt. No remote publication is needed to run or deploy this site through Direct Upload.
