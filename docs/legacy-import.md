# Previous portfolio content

Imported on 11 October 2026 at the owner's request from https://padmajam.vercel.app/.

## Diary

The public `/diary` page contains eight entries. Its deployed source map exposed the original `data/diaryEntries.js`, which supplied the complete text, titles, previews, tags, and image paths. The rendered page was checked against this data. `docs/legacy-diary-source.json` preserves the extracted content for comparison and future editing.

| Original title | Local Markdown | Original image |
| --- | --- | --- |
| Women : purity of blood and culture | `women-purity-of-blood-and-culture.md` | `/women.jpg` |
| urges burried | `urges-burried.md` | `/roots.jpg` |
| Oh Gone? | `oh-gone.md` | `/gone.jpg` |
| ended? | `ended.md` | `/goodbye.jpg` |
| finding... | `finding.md` | `/remember.jpg` |
| shawty-z | `shawty-z.md` | `/fem.jpg` |
| faking with consent. | `faking-with-consent.md` | `/web.jpg` |
| Hate note. | `hate-note.md` | `/hate.jpg` |

The original JPEG files are stored unchanged in `src/assets/diary/`. Astro generates responsive WebP assets at build time. Keep every image paired with the same entry. Existing artwork credits and text visible within the images have not been removed or recreated.

Poetry text, spelling, capitalization, punctuation, and titles are preserved. HTML paragraphs are converted into Markdown stanzas, with explicit line breaks. Indentation in the old source is removed; meaningful line and stanza breaks remain. Markdown smart-punctuation conversion is disabled so quotes, apostrophes, and ellipses stay as written. No publication dates were present, so these entries have no invented dates and retain their original ordering. Existing reading-time metadata is preserved.

## About and projects

The working project route on the previous site is `/projects`, rather than `/project`. Its five project entries were reviewed alongside the previous `/about` page and the source review in `docs/project-review.md`.

- Added Rajdhani Public School (2020–2022, AISSCE, PCM+B) and Pranabananda Vidyamandir (2008–2020, AISSE with computer science) as earlier education.
- Added details of GDSC orientation, 58 junior interviews, Web Blitz (40+ attendees), Prototype Plenary (55+ attendees), and the Git/GitHub workshop (25+ attendees).
- Added Illuminits event details, campus cultural/marketing roles, social-service groups, and the existing White Hat Guild and Sundarbans House roles.
- Added the explicitly stated Ravindra/Nazrul nritya, Bhatkhande classical music, and Spanish guitar training to the creative corner.
- The résumé takes precedence for current employment and degree dates. The old site's IIT Madras dates (2022–2026) and IOCL date (summer 2023) conflict with the résumé (2023–2027 and Dec 2024–Jan 2025); the résumé dates are retained.
- The old site's project descriptions include claims about encryption, payment systems, earnings, and engagement improvements that were not supported by the reviewed source or résumé. Those claims were not copied.

This migration uses anonymous public HTTP requests. There was no GitHub login, remote change, or publication.

## Validation

- Astro/TypeScript check: no diagnostics. Production build: eleven static pages, including all eight poems.
- Compared each rendered poem against the extracted source: titles, words, punctuation, stanza counts, and explicit line breaks match. All original JPEG files match their downloads byte for byte.
- Checked home, diary, and every reading page at widths 320, 390, 768, 1024, and 1440 pixels: no horizontal overflow.
- Checked theme filtering, search inside poem text, empty results/reset, keyboard activation, mobile navigation, earlier-education disclosure, and reading with JavaScript disabled.
- Automated WCAG A/AA scans of the desktop/mobile diary, reading pages, and updated home found no violations in those scans.
- Production browsing produced no page errors, failed requests, or external runtime requests.
