# Personal Site Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Jekyll Academic Pages site with an Astro 7 static site that tells Mohammad Shoaib's story through six pages, detail pages, and typed content collections, deployed to GitHub Pages.

**Architecture:** Content lives once in `src/content/` (markdown for work and journey entries, JSON for articles, books, papers, skills, shelf) validated by Zod schemas. Pages in `src/pages/` read collections and render through one `Base.astro` layout and a handful of components. Interactions are small vanilla scripts in `src/scripts/`, each gated by `prefers-reduced-motion`. A build-time check script enforces the proof and link rules.

**Tech Stack:** Astro 7.3, `@astrojs/sitemap`, `sharp`, vanilla CSS and JS, Node 24 test runner (`node --test`), Playwright MCP for screenshots.

**Spec:** `docs/superpowers/specs/2026-10-09-site-design.md`. Story rules: `docs/story/portrayal.md`, `docs/story/evaluation-guide.md`.

## Global Constraints

- Astro `^7.3.8`, `site: 'https://shoaib6174.github.io'`, no `base`.
- No UI framework, no runtime dependency beyond Astro integrations. Total client script under 60 KB.
- Light theme only. Not pure white background. No dark mode.
- Every `skills.json` row has at least one proof link. Every `work` item with status other than `concept` or `planned` has at least one link.
- Copy obeys the hard-fail list in `docs/story/evaluation-guide.md`: no private items, no pitch words, no self-describing adjectives.
- All motion is opacity and transform, runs once, and is disabled under `prefers-reduced-motion: reduce`.
- Deploy from `master` via `.github/workflows/deploy.yml` (already present).

## Review Focus

1. A journey entry with only a year (`2017`) and one with year-month (`2023-12`) must both sort correctly and render "2017" / "Dec 2023". Pinned in Task 2's schema tests.
2. The Work filter must work when JavaScript is disabled: all items visible, chips are plain links to `?area=` that the page honours at build via static variants. Pinned in Task 6: chips are `<a href="?area=robots">` and the script enhances them; without script the full list shows.
3. A missing photo must not break the build: image fields are optional and the component renders a captioned placeholder. Pinned in Task 4 component test.
4. Old URLs (`/experiences/`, `/projects/`, `/publications/`, `/blogs/`, `/cv/`, `/education/`) must redirect to the new pages. Pinned in Task 8.
5. The role-hover dimming on Home must not leave the page dimmed after keyboard focus leaves the role. Pinned in Task 7 script test (blur restores opacity).

---

### Task 1: Content schemas

**Files:**
- Create: `src/content.config.ts`
- Create: `src/lib/dates.ts`
- Test: `tests/dates.test.mjs`

**Interfaces:**
- Produces: collections `work`, `journey`, `articles`, `books`, `papers`, `skills`, `shelf`; `formatDate(d: string): string`; `sortKey(d: string): number`.

- [ ] **Step 1: Write the failing date test**

```js
// tests/dates.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate, sortKey } from '../src/lib/dates.ts';

test('year only renders as year', () => assert.equal(formatDate('2017'), '2017'));
test('year-month renders as Mon YYYY', () => assert.equal(formatDate('2023-12'), 'Dec 2023'));
test('sortKey orders year-month after year', () => assert.ok(sortKey('2023-12') > sortKey('2023')));
test('sortKey orders years', () => assert.ok(sortKey('2025') > sortKey('2024-11')));
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --experimental-strip-types --test tests/dates.test.mjs`
Expected: FAIL, module not found.

- [ ] **Step 3: Implement**

```ts
// src/lib/dates.ts
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export function formatDate(d: string): string {
  const [y, m] = d.split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}
export function sortKey(d: string): number {
  const [y, m] = d.split('-');
  return Number(y) * 100 + (m ? Number(m) : 0);
}
```

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.string() });
const dateStr = z.string().regex(/^\d{4}(-\d{2})?$/);

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    years: z.string(),
    area: z.enum(['robots','llm','ml','infra','quantum','product']),
    role: z.enum(['build','explain','organise']),
    status: z.enum(['running','shipped','paper-in-preparation','waiting-for-funding','planned','concept','closed']),
    summary: z.string(),
    why: z.string(),
    stack: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    ledTo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    cover: image().optional(),
    coverAlt: z.string().optional(),
  }).refine(d => d.links.length > 0 || ['concept','planned'].includes(d.status),
    { message: 'work item needs a link unless concept/planned' }),
});

const journey = defineCollection({
  loader: glob({ base: './src/content/journey', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    date: dateStr,
    title: z.string(),
    threads: z.array(z.enum(['build','explain','organise','studied'])).min(1),
    chose: z.string().optional(),
    ruledOut: z.string().optional(),
    result: z.string().optional(),
    proof: z.array(link).default([]),
    startedBy: z.string().optional(),
    onRoute: z.boolean().default(false),
    images: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
  }),
});

const articles = defineCollection({
  loader: file('./src/content/articles.json'),
  schema: z.object({ id: z.string(), title: z.string(), url: z.string().url(), date: dateStr,
    series: z.string(), views: z.number().optional(), reads: z.number().optional() }),
});
const books = defineCollection({
  loader: file('./src/content/books.json'),
  schema: ({ image }) => z.object({ id: z.string(), title: z.string(), gloss: z.string(), year: z.number(),
    publisher: z.string(), url: z.string().url(), audience: z.string(), note: z.string().optional(), cover: image().optional() }),
});
const papers = defineCollection({
  loader: file('./src/content/papers.json'),
  schema: z.object({ id: z.string(), title: z.string(), venue: z.string(), year: z.number(), role: z.string(), url: z.string().url().optional() }),
});
const skills = defineCollection({
  loader: file('./src/content/skills.json'),
  schema: z.object({ id: z.string(), group: z.string(), tools: z.array(z.string()).min(1),
    proof: z.array(link).min(1), order: z.number() }),
});
const shelf = defineCollection({
  loader: file('./src/content/shelf.json'),
  schema: z.object({ id: z.string(), kind: z.enum(['book','film','trip','line','learning']),
    title: z.string(), year: z.number().optional(), country: z.string().optional(), note: z.string().optional() }),
});

export const collections = { work, journey, articles, books, papers, skills, shelf };
```

- [ ] **Step 4: Run tests, expect PASS. Run `npx astro sync` and expect no schema errors (collections empty is fine).**

- [ ] **Step 5: Commit** `git add src tests && git commit -m "Add content schemas and date helpers"`

---

### Task 2: Story content (first draft)

**Files:**
- Create: `src/content/work/*.md` (14 items), `src/content/journey/*.md` (about 20 entries), `src/content/articles.json`, `books.json`, `papers.json`, `skills.json`, `shelf.json`, `src/content/home.md` (masthead, roles, now, off-the-clock paragraphs as frontmatter+body)

**Interfaces:**
- Produces: the entire site copy. Every later task reads from here only.

- [ ] **Step 1: Write all content files from `docs/life-inventory.md` under the rules in `docs/story/portrayal.md`.** Work items: llm-robot-task-planner, vlm-perception-edge (NIRO), nitex-trend-platform, nitex-extraction-pipeline, botforge, safe-rl-pe, nsu-ai-sat, security-robot (concept), video-swin-tf2, getaudio, guard-shield, turtlebot3-patrolling, qiskit-treasure-hunt, hsk-vocabs, attendance-pi-2019. Journey entries: 2014 c-book, 2017 butex, 2017 debate-club, 2018 first-book, 2018 ysi, 2019 attendance, 2019 mobile-cover, 2020 take-it-seriously, 2021 certifications-and-ml, 2021 deeppavlov, 2022 gsoc, 2022 olympiad-series, 2022 quantum, 2023 gsoc-2023, 2023 nsu-msc, 2023 nitex, 2024 back-to-nsu, 2024 kunming, 2025 niro-lab, 2025 fenloai, 2025 annapurna, 2026 now.
- [ ] **Step 2: Run `npx astro sync`; fix every schema error.**
- [ ] **Step 3: Commit** `git commit -m "Add first draft of site content"`

---

### Task 3: Story review loop

**Files:** modify content from Task 2.

- [ ] **Step 1: Dispatch three reviewers (structure+flow, language+wording, completeness+honesty) with `docs/story/evaluation-guide.md`, `portrayal.md`, and `life-inventory.md`. Each returns scored findings with quotes and smallest edits.**
- [ ] **Step 2: Apply edits. Re-run reviewers on changed files. Repeat until a pass produces no edits (minimum three passes).**
- [ ] **Step 3: Grep hard-fail words across `src/content`; expect zero hits:**

Run: `grep -rniE "passion|journey|spark|chapter|relentless|driven|seamless|cutting-edge|empower|leverage|curious|analytical|entrepreneurial|IUT|CGPA" src/content | grep -v "journey/" ; true`
- [ ] **Step 4: Commit** `git commit -m "Revise content after review passes"`

---

### Task 4: Layout, components, styles

**Files:**
- Create: `src/layouts/Base.astro`, `src/components/Nav.astro`, `Footer.astro`, `Figure.astro`, `WorkCard.astro`, `JourneyEntry.astro`, `SkillRow.astro`, `Section.astro`, `src/styles/global.css`, `src/styles/tokens.css`
- Test: `tests/figure.test.mjs` (renders placeholder when no image, via Astro container API)

**Interfaces:**
- `Base.astro` props: `title: string; description: string; wide?: boolean`.
- `Figure.astro` props: `src?: ImageMetadata; alt: string; caption?: string; slot?: string` (slot text shown when `src` missing).
- `WorkCard.astro` props: `item: CollectionEntry<'work'>`.
- `JourneyEntry.astro` props: `entry: CollectionEntry<'journey'>`.

- [ ] **Step 1: Write the Figure test using `experimental_AstroContainer`:**

```js
// tests/figure.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { experimental_AstroContainer as Container } from 'astro/container';
import Figure from '../src/components/Figure.astro';

test('Figure renders a placeholder with the slot text when no src', async () => {
  const c = await Container.create();
  const html = await c.renderToString(Figure, { props: { alt: 'x', slot: 'Photo: TEXBIZ 2018' } });
  assert.match(html, /Photo: TEXBIZ 2018/);
  assert.match(html, /class="figure placeholder"/);
});
```
- [ ] **Step 2: Run, expect FAIL.**
- [ ] **Step 3: Implement tokens, global styles, Base, Nav, Footer, Figure, cards. Design direction comes from Task 5's chosen mockup; implement the tokens from it.**
- [ ] **Step 4: Run test, expect PASS. `npm run build` passes with empty pages.**
- [ ] **Step 5: Commit.**

---

### Task 5: Design direction

**Files:** `.superpowers/brainstorm/<session>/content/design-*.html` (three directions), `docs/superpowers/specs/2026-10-09-design-direction.md` (the choice and tokens).

- [ ] **Step 1: Load `frontend-design` skill. Produce three full-page HTML mockups of Home with real copy from Task 2, each a distinct direction (type pairing, palette, layout rhythm, signature motion). All light, none templated.**
- [ ] **Step 2: Score each against the spec's design constraints and a short design rubric (distinctiveness, readability, restraint, photo handling, mobile). Pick one or combine. Record tokens: fonts, colour values, spacing scale, radii, motion durations.**
- [ ] **Step 3: Push the chosen direction to the companion with the other two as alternatives for Shoaib to see in the morning.**
- [ ] **Step 4: Commit the direction doc.**
- [ ] **Step 5: Mobile view, after the desktop direction is final (Shoaib, 2026-10-09).** Design the phone layout as its own pass, not a squeeze of the desktop: it may differ in section order, navigation (bottom bar or compact top), and which interactions survive (the year rail becomes a sticky label; the Writing tick strip becomes a list; role dimming becomes tap-to-toggle). Mock it at 390 px in the companion, then implement in Task 6 with media queries at 760 px.

---

### Task 6: Pages

**Files:**
- Create: `src/pages/index.astro`, `work/index.astro`, `work/[slug].astro`, `journey/index.astro`, `journey/[slug].astro`, `writing.astro`, `skills.astro`, `shelf.astro`, `404.astro`
- Create: `public/files/pdfs/Shoaib_s_Resume.pdf` (moved from `files/pdfs/`)

**Interfaces:**
- Consumes collections and components from Tasks 1 and 4.
- Work filter chips are anchors: `<a href="/work/?area=robots" data-area="robots">`. Without JS the full list shows; the script in Task 7 filters client-side.

- [ ] **Step 1: Build each page, run `npm run build` after each, check output HTML contains expected headings.**
- [ ] **Step 2: Build-time checks script `scripts/check-content.mjs`: loads built `dist/` HTML, collects all internal `href`s, asserts each resolves to a file in `dist/`; lists external hrefs. Add `"postbuild": "node scripts/check-content.mjs"` to package.json.**

```js
// scripts/check-content.mjs
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const dist = 'dist';
const html = [];
(function walk(d){ for (const f of readdirSync(d)) { const p = join(d,f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p); } })(dist);
const bad = [];
for (const f of html) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/href="([^"#?]+)[^"]*"/g)) {
    const h = m[1];
    if (/^(https?:|mailto:)/.test(h)) continue;
    const target = h.endsWith('/') ? join(dist, h, 'index.html') : join(dist, h);
    if (!existsSync(target) && !existsSync(target + '/index.html') && !existsSync(target + '.html')) bad.push(`${f} -> ${h}`);
  }
}
if (bad.length) { console.error('Broken internal links:\n' + bad.join('\n')); process.exit(1); }
console.log(`checked ${html.length} pages, no broken internal links`);
```
- [ ] **Step 3: `npm run build` passes including postbuild. Commit.**

---

### Task 7: Interactions

**Files:**
- Create: `src/scripts/roles.ts` (Home dimming), `src/scripts/filter.ts` (Work chips), `src/scripts/rail.ts` (Journey year rail + reveal), `src/scripts/ticks.ts` (Writing strip hover), `src/scripts/shelf.ts` (sort)
- Test: `tests/roles.test.mjs` with jsdom-free DOM stub? No: test the pure functions. Extract `computeDim(activeRole, itemRoles): number` and `nextSort(current): 'year'|'country'` into `src/lib/ui.ts` and test those.

- [ ] **Step 1: Write tests for `computeDim` and `nextSort`; run, expect FAIL; implement; expect PASS.**
- [ ] **Step 2: Wire scripts in pages with `<script>` tags; every script starts with `if (matchMedia('(prefers-reduced-motion: reduce)').matches) { /* skip motion, keep function */ }`.**
- [ ] **Step 3: Manual check in Playwright: hover role, screenshot; blur, screenshot; chips filter; rail advances. Commit.**

---

### Task 8: Migration and redirects

**Files:**
- Delete: Jekyll directories and files (`_config.yml`, `_pages`, `_layouts`, `_includes`, `_sass`, `_data`, `_posts`, `_drafts`, `_publications`, `_talks`, `_teaching`, `_portfolio`, `_experiences`, `assets`, `images` (after moving the headshot), `talkmap*`, `markdown_generator`, `Gemfile`, `Dockerfile`, `CONTRIBUTING.md`, old `README.md`)
- Modify: `astro.config.mjs` add `redirects`
- Create: new `README.md` (how to add content, how to deploy)

```js
redirects: {
  '/experiences/': '/journey/', '/projects/': '/work/', '/publications/': '/writing/',
  '/blogs/': '/writing/', '/cv/': '/files/pdfs/Shoaib_s_Resume.pdf', '/education/': '/journey/',
  '/resume': '/files/pdfs/Shoaib_s_Resume.pdf',
}
```
- [ ] **Step 1: Move headshot to `src/assets/photos/headshot.jpeg`, PDFs to `public/files/pdfs/`, book photo to `src/assets/photos/`.**
- [ ] **Step 2: Delete Jekyll files. `npm run build` passes. `ls dist/experiences/index.html` exists (redirect page).**
- [ ] **Step 3: Commit** `git commit -m "Remove Jekyll site, add redirects and README"`

---

### Task 9: Verification

- [ ] **Step 1: Screenshots at 390 and 1440 px of every top-level page via Playwright; review each for overflow, contrast, orphaned placeholders.**
- [ ] **Step 2: Lighthouse on `/` and `/journey` via chrome-devtools MCP; performance ≥ 95 mobile, accessibility ≥ 95. Fix regressions.**
- [ ] **Step 3: Full story review pass on the rendered pages (not the source), one reviewer, against the evaluation guide.**
- [ ] **Step 4: Commit fixes.**

---

### Task 10: Handoff

**Files:** `docs/HANDOFF.md`

- [ ] **Step 1: Write: what was built, how to preview (`npm run dev`), how to deploy (merge `redesign` into `master`, set Pages source to GitHub Actions), where to add photos and detail text, the open items list (missing photos, five Medium URLs, BotForge DNS, TEXBIZ year, mobile cover link), and the GitHub cleanup pointer.**
- [ ] **Step 2: Commit. Leave the dev server running and the companion showing the design directions.**
