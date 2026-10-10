# shoaib6174.github.io

Personal site of Mohammad Shoaib. Built with [Astro](https://astro.build), deployed to GitHub Pages from `master` by `.github/workflows/deploy.yml`.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/ and checks every internal link
npm test           # unit tests for the date and UI helpers, plus a built-output check
```

## Where the content lives

Everything on the site comes from `src/content/`. Edit a file, rebuild, done.

| What | File | Notes |
|---|---|---|
| Home page copy | `src/content/home.md` | Masthead, the three roles, the Now list, the off-the-clock paragraph. |
| A system you built | `src/content/work/<slug>.md` | One file per item. Frontmatter: title, years, area, role, status, summary, why, stack, links, featured, order. The body is the detail page. Add `cover: ./../../assets/photos/x.jpg` and `coverAlt` for a photo. |
| A dated entry on the Route page | `src/content/journey/<slug>.md` | Frontmatter: date (`2024` or `2024-10`), title, threads, short, summary, proof, imageSlots. Was: chose, ruledOut, result, startedBy, proof, onRoute, images, imageSlots. The body is what happened. |
| Articles | `src/content/articles.json` | Leave `url` out for a piece whose link you do not have yet; it renders as text with "link to follow". |
| Books, papers | `books.json`, `papers.json` | |
| Skills | `skills.json` | Every row must have at least one proof link or the build fails. |
| Shelf | `shelf.json` | Books, films, trips, lines, and the Currently learning list. |
| Home map | `map.json` | Bands, fields with their band and x position, and the project lines between fields. |
| Longer text for a detail page | `src/content/details/<slug>.md` | Optional. Rendered under the entry on `/route/<slug>/` or `/work/<slug>/`, with an optional `title`. Markdown, and inline HTML is allowed, which is how the BUTEX credit bar is made. |

Photos go in `src/assets/photos/` and are referenced from frontmatter; Astro resizes and converts them. PDFs go in `public/files/`.

Schemas are in `src/content.config.ts`. A wrong field name or a missing required field fails the build with a message naming the file.

## Design

Tokens and the reasoning behind them: `docs/superpowers/specs/2026-10-09-design-direction.md`. Styles: `src/styles/global.css`. The one piece of page-load motion is the hero on the home page (`src/scripts/hero.ts`); everything else moves only on scroll or on a click, and nothing moves under `prefers-reduced-motion`.

## Deploy

Push to `master`. In the repository settings, Pages must have its source set to GitHub Actions (one-time). The workflow builds with Node 24 and publishes `dist/`.
