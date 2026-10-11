export const profile = {
  name: 'Padmaja Mazumder',
  firstName: 'Padmaja',
  email: 'padmajamazumder@gmail.com',
  phone: '+91 84862 36371',
  phoneHref: 'tel:+918486236371',
  location: 'Bengaluru, India',
  github: 'https://github.com/padmajamazumder',
  linkedin: 'https://www.linkedin.com/in/padmaja-mazumder/',
  leetcode: 'https://leetcode.com/u/scoopy_scoop/',
  codeforces: 'https://codeforces.com/profile/padmajamazumder',
  resume: '/Padmaja-Resume.pdf',
  description: 'Padmaja Mazumder is a developer at ZS Associates in Bengaluru, building backend workflows and exploring software engineering opportunities. Projects, experience, and a little creative writing.',
};

export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  detail: string;
  highlights: string[];
  stack: string[];
  source: string;
  secondary?: { label: string; url: string };
  note: string;
}

export const projects: Project[] = [
  {
    slug: 'nanolink', number: '01', name: 'Nanolink', category: 'BACKEND · TEAM PROJECT',
    summary: 'Small links. A complete backend.',
    detail: 'A URL-shortening service built with GDSC NIT Silchar, with authenticated link management and click analytics. Used by 500+ users.',
    highlights: ['Short-link generation and redirection', 'User-scoped link management and analytics', 'MongoDB data models with Prisma'],
    stack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Prisma'],
    source: 'https://github.com/gdsc-nits-org/nanolink', note: 'Built with GDSC NIT Silchar',
  },
  {
    slug: 'sellsphere', number: '02', name: 'SellSphere AdXchange', category: 'FULL STACK · IIT MADRAS',
    summary: 'Connecting campaigns with creators.',
    detail: 'A sponsor–influencer platform for campaign management, ad requests, and negotiations. Named AdSphere in the repository, built as my IIT Madras application-development project.',
    highlights: ['Separate sponsor, influencer, and admin workflows', 'Relational models for campaigns and ad requests', 'Flask blueprints and server-rendered dashboards'],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Jinja2'],
    source: 'https://github.com/padmajamazumder/IITMadrasProject1',
    secondary: { label: 'Project report', url: 'https://drive.google.com/file/d/1TZnXbO3FEgxLVzK4PcjZnk9TvgqRRTRi/view' },
    note: 'Application development · 2024',
  },
  {
    slug: 'aura', number: '03', name: 'Aura 3D Navigator', category: 'MOBILE · TEAM PROJECT',
    summary: 'Finding a way through the indoors.',
    detail: 'An indoor-navigation team project connecting a Flutter app, Unity environments, and Gemini-powered guidance. An exploration of how mobile interfaces and spatial experiences can work together.',
    highlights: ['Flutter-to-Unity messaging and navigation', 'Gemini-assisted guidance from spatial data', 'Speech input and spoken directions'],
    stack: ['Flutter', 'Dart', 'Unity', 'Gemini API', 'Firebase'],
    source: 'https://github.com/padmajamazumder/gadc',
    secondary: { label: 'Play Store listing', url: 'https://play.google.com/store/apps/details?id=com.aura3dinbetween.aura' },
    note: 'Built with the Aura team',
  },
];

export const otherBuilds = [
  { name: 'doXcollab', description: 'A collaborative document editor exploring live changes, shared document rooms, and persistence.', stack: 'React · Socket.IO · MongoDB', url: 'https://github.com/padmajamazumder/doXcollab', icon: 'document' },
  { name: 'Version control, from scratch', description: 'A C++ learning experiment with SHA-1 objects, trees, commits, staging, and branches.', stack: 'C++ · File systems · Data structures', url: 'https://github.com/padmajamazumder/version_control', icon: 'branch' },
];

export const experience = [
  {
    company: 'ZS Associates', role: 'Business Technology Solutions Associate',
    dates: 'Jul 2026 — Present', context: 'Intern: Jan — Jun 2026 · Bengaluru', current: true,
    summary: 'Building business logic and integrations on Salesforce for a global pharma patient-services product.',
    points: ['Develop Apex classes, triggers, and REST endpoints for enrollment, consent, and medication-request workflows.', 'Automated environment data seeding with 150+ uniquely keyed, authenticated REST payloads.', 'Build patient-journey reports and dashboards; generate case-status records for demos and UAT.'],
    tags: ['Apex', 'REST APIs', 'Salesforce', 'SOQL'],
  },
  {
    company: 'ERNET India', role: 'SDE Intern', dates: 'May — Jul 2025', context: 'Bengaluru', current: false,
    summary: 'Worked on backend integrations and structured data exchange between services.',
    points: ['Implemented REST-based API workflows aligned with ONDC protocol specifications.'],
    tags: ['REST APIs', 'Backend integration', 'ONDC'],
  },
  {
    company: 'Indian Oil Corporation', role: 'Trainee', dates: 'Dec 2024 — Jan 2025', context: 'Guwahati', current: false,
    summary: 'Studied PLC and DCS architectures in a live thermal power station and authored a technical study report.',
    points: [], tags: ['PLC', 'DCS', 'Systems analysis'],
  },
];

export const skills = [
  { category: 'Languages', items: ['C++', 'Python', 'JavaScript', 'SQL', 'Apex'] },
  { category: 'Backend & data', items: ['Node.js', 'Express', 'Flask', 'REST APIs', 'MongoDB', 'MySQL', 'SQLite'] },
  { category: 'Salesforce', items: ['SOQL', 'LWC', 'Experience Cloud', 'Reports & Dashboards'] },
  { category: 'Foundations & tools', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Git', 'AWS', 'Linux', 'Postman'] },
];

export const education = [
  { school: 'NIT Silchar', degree: 'B.Tech · Electronics & Instrumentation', dates: '2022 — 2026', note: 'CGPA 7.9' },
  { school: 'IIT Madras', degree: 'B.S · Data Science & Programming', dates: '2023 — 2027', note: 'Foundation level and Diploma in Programming completed' },
];

export const qualifications = [
  { title: 'Diploma in Programming', issuer: 'IIT Madras', url: 'https://drive.google.com/file/d/1fWuwXlwdQeGwpeL2yGYkxhAB4bB9eLeK/view' },
  { title: 'Foundation · Programming & Data Science', issuer: 'IIT Madras', url: 'https://drive.google.com/file/d/1gAoKPJhoM7PrgCpuGDhyUxQaXxYnDUpq/view' },
  { title: 'Google Cloud Skills Boost', issuer: 'Public learning profile', url: 'https://www.cloudskillsboost.google/public_profiles/658f7312-733c-4a2e-ad36-13bd1e554594' },
];
