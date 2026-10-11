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

## Certifications and readability update

At the owner's request, the current deployed `/about` source was checked again on 11 October 2026. Its ten certification and learning entries are preserved in `docs/legacy-certifications-source.json` and displayed under “Certifications & learning”. Titles are retained; Google Cloud profiles are labeled as learning profiles rather than individual certifications. Internship and workshop documents do not add employment dates or imply Salesforce credentials.

- Seven original Google Drive document URLs opened anonymously with HTTP 200 and the expected certificate filenames.
- The original Diploma in Programming link (`1ku3uQMmibivFuemHvPpmV8Qg7bCny2lJ`) returned HTTP 404. The résumé's link (`1fWuwXlwdQeGwpeL2yGYkxhAB4bB9eLeK`) returned HTTP 200 with the title “diploma in prog certificate .pdf”. That working link is used instead.
- Both Google Cloud Skills Boost profiles returned HTTP 403 to automated HTTP requests. Their exact existing public URLs are retained; their availability was not independently confirmed in this check.
- The project screenshot supplied by the owner was considered as context. The existing SellSphere description continues to use the reviewed campaign, ad-request, negotiation, and role-specific workflow features. Its screenshot's payment, earnings, and fraud-prevention claims have not been established by the source review.
- Renamed “My working toolkit” to “Worked with”. Text previously at 12px or below now uses the shared 14px `--text-small` token across the home, diary, and reading pages. Larger text and headline sizes are unchanged.
- The owner plans to supply a Google Drive résumé link. Until it arrives, résumé links continue to use the supplied local PDF. README documents public-viewer sharing and same-file version replacement so future résumé updates preserve the URL.

This update passed `npm run check` with no diagnostics and `npm run build` with eleven static pages. Browser checks covered home, diary, and a reading page at 320, 390, 768, 1024, and 1440 pixels with no horizontal overflow. All ten rendered entries matched their source names and expected URLs, including the Diploma override. Desktop and both small-mobile home accessibility scans reported no violations. Keyboard menu controls, certificate focus, and no-JavaScript certificate/navigation access passed. Existing font-size declarations above 12px were confirmed unchanged.

## Subsequent owner revisions

- Changed the site's contact email to `ipadmaja.mazumder@gmail.com` using the owner's explicit correction.
- Connected both site résumé links to the owner's publicly accessible Google Drive file `1USnawM9u4X9tNcmXKU1j0ebkBMVo74sg`. Its viewer opened anonymously with the title “Padmaja_Mazumder_Cisco.pdf”. The originally supplied local PDF remains unchanged as an archive; same-file Drive version updates keep the site URL valid.
- Removed the entire “A habit of figuring things out” highlights strip. Added named LeetCode and Codeforces links below “Worked with”; no question counts or rating are displayed there. Existing résumé-backed work and project descriptions remain separate from that removed strip.
- Added the owner's stated time-management and deadline-discipline strength, tied to pursuing the NIT Silchar and IIT Madras degrees together. The institution name follows the résumé.
- Replaced the fantasy prompt jar with six original local SVG cat doodles and playful UI captions. A random scene appears when the page opens; “Another cat” selects a different scene. No external API, automatic rotation, or personal-poetry attribution is involved. A scene and caption remain available without JavaScript.

The production build still produces eleven static pages. Browser checks confirmed both résumé URLs, all email links, both coding profiles, the removed strip, all six cat scenes, and keyboard activation without immediate repeats. Home, diary, and a reading page fit five viewport widths from 320 to 1440 pixels. Desktop/mobile accessibility scans reported no violations on the checked pages. No-JavaScript content and navigation work; no external runtime requests or page errors were observed.

## Validation

- Astro/TypeScript check: no diagnostics. Production build: eleven static pages, including all eight poems.
- Compared each rendered poem against the extracted source: titles, words, punctuation, stanza counts, and explicit line breaks match. All original JPEG files match their downloads byte for byte.
- Checked home, diary, and every reading page at widths 320, 390, 768, 1024, and 1440 pixels: no horizontal overflow.
- Checked theme filtering, search inside poem text, empty results/reset, keyboard activation, mobile navigation, earlier-education disclosure, and reading with JavaScript disabled.
- Automated WCAG A/AA scans of the desktop/mobile diary, reading pages, and updated home found no violations in those scans.
- Production browsing produced no page errors, failed requests, or external runtime requests.
