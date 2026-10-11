# Portfolio project selection

Reviewed on 11 October 2026 using public source archives. This is a static source review, not a claim that the applications were run or tested. No remote project was modified.

## Featured projects

### Nanolink

- Source: https://github.com/gdsc-nits-org/nanolink
- Reviewed the Prisma schema, URL-shortening and redirect controllers, user-scoped analytics, authentication middleware, routes, and package manifest.
- The code supports describing a Node.js/Express/TypeScript backend with MongoDB and Prisma, short-link generation, redirection, and click tracking.
- The résumé states that Padmaja designed and developed the service as part of GDSC and that it served 500+ users. User count, AWS deployment, and database performance improvements are résumé claims, not independently measured in this review.
- Treat this as a team project. Link to the canonical GDSC repository.
- Do not describe the public source as hardened or fully tested: URL validation and read-then-write click counting could be improved.

### SellSphere AdXchange (named AdSphere in the repository)

- Source: https://github.com/padmajamazumder/IITMadrasProject1
- Reviewed the relational models, login/password hashing, Flask blueprints, sponsor workflows, campaign queries, and administration routes.
- The implementation includes sponsors, influencers, campaigns, ad requests, negotiation flows, and an admin interface, using Flask, SQLAlchemy, SQLite, and Jinja2.
- Use the résumé's name, with the repository alias included in the detailed description.
- Describe role-specific workflows rather than claiming complete authorization coverage: some admin routes lack login/role enforcement in the public version.
- The repository advertises a Vercel URL, but deployment health was not established. Link to source and the résumé's report rather than promising a live demo.

### Aura 3D Navigator

- Source: https://github.com/padmajamazumder/gadc (Flutter), with Unity source at https://github.com/padmajamazumder/Aura-U
- Reviewed the Flutter navigation/player pages, Unity-widget messaging, speech input/output, Gemini navigation helper, repository README, and team attribution.
- The Flutter code supports describing a team project integrating Flutter, Unity, and Gemini for indoor navigation. Padmaja is listed in the repository's team section.
- The résumé's 10×10 grid differs from a 30×30 grid in the reviewed helper. Omit the grid size from public copy until reconciled.
- The Play Store URL comes from the résumé. Link label is “Play Store listing,” not a promise of current availability.
- Exact individual responsibility is unspecified; public copy says “team project.”

## Other builds

### doXcollab

- Source: https://github.com/padmajamazumder/doXcollab
- Reviewed Socket.IO document rooms, change broadcasts, MongoDB document persistence, and the React/Quill editor.
- Include as a learning project about shared editing, live updates, and document persistence. Do not claim conflict-free collaboration or production readiness.

### C++ version-control experiment

- Source: https://github.com/padmajamazumder/version_control
- Reviewed the command dispatcher, SHA-1 object storage, tree serialization, commit metadata, staging, and branch code.
- Include as a systems-learning experiment. Do not claim full Git compatibility, verified merge behavior, or a complete replacement for Git.

## Projects not featured

- `fyp_faceRec`: the README describes a Python backend, but the downloaded public source does not contain that backend. Feature later when the implementation and project status are clarified.
- `parkit`: useful Vue/Flask structure, but the release handler references an undefined `user_id`. Keep it out of featured work until the core flow is corrected.
- `okk-talk` and `magical-arena`: reviewed the available structure/source; they add less variety than the selected backend, mobile, collaboration, and systems work.
- Empty repositories, profile configuration, older portfolio code, and forks with unspecified contribution were excluded.

## Personal content

Work history and degree dates are transcribed from the supplied résumé. The owner requested removing the homepage's coding-count/rating highlights in favor of links to the public profiles. Salesforce certificate titles were not supplied. The owner subsequently authorized importing the previous portfolio's diary, earlier education, community details, arts training, and certification entries. See `docs/legacy-import.md`: the creative page contains all eight original poems with their paired images. Its former writing-prompt interaction has since been replaced with a local cat-doodle corner at the owner's request; those playful UI captions are separate from the poetry. The owner also supplied the updated contact email, public Google Drive résumé link, and time-management context used in About.
