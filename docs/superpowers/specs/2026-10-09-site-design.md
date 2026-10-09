# Design spec: shoaib6174.github.io redesign

Date: 2026-10-09. Status: final for build. Inputs: `docs/life-inventory.md`, `docs/github-audit.md`, `docs/story/portrayal.md`, `docs/story/evaluation-guide.md`, `docs/superpowers/plans/plan-review.md`.

## Purpose

A personal site that tells a recruiter, a lab PI, or a collaborator who Mohammad Shoaib is, what he has built, and why, within a minute, and lets a patient reader go as deep as they want. Honest in every fact, diplomatic in emphasis. Agentic AI and vision-language models on robots lead.

## Stack

- Astro 7, static output, GitHub Pages via `withastro/action`, deployed from `master`.
- No UI framework. Vanilla CSS with custom properties, a few small scripts, View Transitions via `ClientRouter`.
- Content in `src/content/` as markdown and JSON collections with Zod schemas. Every fact lives once.
- Images via `astro:assets`. Photos in `src/assets/photos/`. PDFs stay in `public/files/`.
- Light theme only. No dark mode toggle. The design must not read as a template or a default AI aesthetic.

## Pages

| Route | Purpose | Signature interaction |
|---|---|---|
| `/` | Who, what, why in one scroll. | Hover or focus one of the three role phrases: items tagged with other roles dim to 40%. Opacity only. |
| `/work` | Every system, filterable by area, with status. | Area chips filter with a view transition and write `?area=` to the URL. |
| `/work/[slug]` | Detail page for one system. | None. |
| `/journey` | Dated decisions, 2014 to now, oldest first. | Sticky year rail advances with scroll. Thread toggles (build / explain / organise) dim non-matching entries. Entries fade in once. |
| `/journey/[slug]` | Detail page for one entry, when it has more (photos, longer account). | None. |
| `/writing` | Books, papers, articles by series with views. | A dated tick strip, one tick per article coloured by series. Hover shows title. |
| `/skills` | Full skills table with proof. | None. |
| `/shelf` | Books, films, trips, Chinese, the football line. | Sort toggle on films: by year or by country. |
| `/files/*.pdf` | Resume. | |

Navigation: Work · Journey · Writing · Skills · Shelf. Name links home. Footer on every page: email, GitHub, LinkedIn, Medium, lab profile, resume.

## Home page, section by section

1. **Masthead.** Photo, name, two sentences. First: what he does now (agentic AI on robots at NSU Intelligent Robotics Lab; co-founder of FenloAI, contract AI systems for small businesses). Second: four math books for school students, about twenty technical articles. Dhaka.
2. **Now.** Three to four dated items: the LLM robot task planner; VLM and VLA perception on edge hardware; the pursuit-evasion paper in preparation for CoRL 2026; the CubeSat AI payload. One status line each.
3. **Three roles.** Three short paragraphs, weighted: builds (longest), explains, brings people together (shortest, current evidence only). These paragraphs host the role-hover interaction.
4. **Selected work.** Six objects: task planner, NITEX trend platform (VLM), BotForge (unlinked until DNS fixed), pursuit-evasion, Video Swin Transformer (2,636 downloads), GetAudio. Each: title, two-sentence why-it-exists, status, link.
5. **Skills, with proof.** Compact rows, first row "Agentic AI on robots". Link to `/skills`.
6. **Writing.** Four book covers with one line, then three series lines (ROS 2 2026, CasADi 2025, Qiskit 2023). Link to `/writing`.
7. **The route.** Six dated lines, 2014 to 2025, each linking to a Journey entry. Link to `/journey`.
8. **Off the clock.** One paragraph. Link to `/shelf`.
9. **Footer.**

Target length: four laptop screens.

## Content model

```
src/content/
  work/*.md        title, slug, years, area (robots|llm|ml|infra|quantum|product), role (build|explain|organise),
                   status (running|shipped|paper-in-preparation|waiting-for-funding|planned|concept),
                   summary (1 line), why (≤2 sentences), stack[], links[{label,href}], ledTo?, featured?, order?, images[]
  journey/*.md     date (YYYY or YYYY-MM), title (noun phrase), threads[] (build|explain|organise|studied),
                   chose?, ruledOut?, result?, proof[{label,href}], images[], body = what happened (≤120 words)
  articles.json    title, url, date, series, views?, reads?
  books.json       title, transliteration, gloss, year, publisher, url, audience, cover
  papers.json      title, venue, year, role, url?
  skills.json      group, tools[], proof[{label,href}], order
  shelf.json       books[], films[{title,year,country}], trips[], lines[]
```

Build fails if: a skills row has no proof; a work item has no link and status is not concept/planned; a journey entry has no date. A link-check script runs over all `href`s in content at build and fails on 4xx/5xx for internal links and reports external ones.

## Voice and privacy

Governed by `docs/story/portrayal.md` and `docs/story/evaluation-guide.md`. In short: first person, plain, dated nouns for headings, setbacks one line each in the same format as wins, no self-description, no numbers that need comparison, private items excluded.

## Design constraints (creative direction decided after the story is final)

- Light background. Not pure white. Not a dark theme.
- Distinctive type pairing, not Inter-on-white-with-a-gradient. No glassmorphism cards grid, no neon accents, no "AI" purple.
- Motion only on scroll or hover, once per element, opacity and transform only, all gated by `prefers-reduced-motion`.
- One signature interaction per page as listed. Nothing else moves.
- Prose width for reading. Big type for section openers. Generous vertical rhythm.
- Photos as objects: rounded, captioned, lazy, optimised. Placeholders where photos are missing, with the slot described.
- Performance: no framework, under 60 KB of script total, Lighthouse performance 95+ on mobile.
- Accessibility: keyboard reachable interactions, visible focus, alt on every image, colour contrast AA.

## Out of scope for the first version

Dark mode, blog hosting (articles stay on Medium), comments, analytics, search, a Bengali version.

## Detail pages

Every `work` and `journey` entry renders a detail page at its slug. For the first version most are short: the summary, the why, the links, and an image slot. Shoaib will add longer text and photos to the markdown later without touching code.

## Launch checklist

- `npm run build` passes, link check passes.
- Screenshots at 390 px and 1440 px for every top-level page reviewed.
- Lighthouse on `/` and `/journey`.
- Old Jekyll files removed; `files/pdfs/` moved to `public/files/`; redirects for `/experiences/`, `/projects/`, `/publications/`, `/blogs/`, `/cv/`, `/education/` to the new pages.
- Deploy workflow present; Pages source set to GitHub Actions (manual step for Shoaib).
