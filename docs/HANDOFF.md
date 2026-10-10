# Handoff: the rebuilt site

Written 2026-10-09, late evening, for Shoaib to read in the morning. Everything is on the `redesign` branch. Nothing has been pushed.

## See it

```bash
cd ~/Codes/shoaib6174.github.io
npm run dev          # then open http://localhost:4321
```

A preview server may still be running from last night on the same address. The companion tab at the link from last night shows screenshots of each page and asks for a verdict on the direction.

## What was built

- An Astro 7 static site, six pages plus a detail page for every work item and route entry: Home, Work, Route, Writing, Skills, Shelf.
- All copy drafted from `docs/life-inventory.md` under `docs/story/portrayal.md`, then put through two review passes against `docs/story/evaluation-guide.md` (reports in `docs/story/review-*.md`). Every number on the site has a line in the inventory naming its source.
- Design per `docs/superpowers/specs/2026-10-09-design-direction.md`: drafting-paper surface, Bricolage Grotesque and Literata, a margin column, one signal colour used only for lines and underlines, rows instead of cards, a dimension-line rail on Route, a separate phone layout. The home page, chosen on 2026-10-10, is one sentence with the credentials hung on it: "I design and build production systems, from AI on robots to the platforms a business runs on, and I know operations, supply chains, and the people who have to use them." Each of its five annotated phrases has a leader line to a group of credentials in the margin; hover a phrase or a group and the rest recede. Edit `src/content/pitch.json` to change a group's items, labels, or links. The sentence itself is in `src/components/Pitch.astro`.
- The Route page (2026-10-10) opens with a map to scale in time: five rows for what kind of thing it was, a bar for anything that ran for a while, a dot for anything that happened once, overlapping things stacked within a row, the empty school years cut out of the axis, and a line that sweeps the years on a loop and says how many things ran at once. Give an entry `until: "2024-07"` or `until: "now"` to make it a bar. Entries are short first-person prose. Frontmatter per entry: `date`, `title`, `threads`, optional `until`, `short` (the label on the map), `summary` (one line, used for the page description), `proof` links, `imageSlots`. The old chose / ruled out / result fields are gone.
- The Skills page (2026-10-10) is arranged under the five claims of the home sentence, each skill group carrying a `phrase` of ai, platforms, operations, supply, people, or other, in `src/content/skills.json`. The seven-layer column and `layers.json` are gone.
- Lighthouse on the home page, mobile: accessibility 100, best practices 100, SEO 100, no layout shift. Shipped script under 20 KB.
- Old URLs redirect to the new pages. The Jekyll theme and its sample content are gone; git history keeps them.
- `npm run build` fails on a broken internal link, a skills row without proof, or a malformed content file. `npm run check` type-checks the pages, `npm test` runs the unit tests. The deploy workflow runs all three before publishing.
- A code review pass fixed the Work filter's Back-button behaviour, scoped every scroll and pointer listener, gave each detail page an h1, and made the hero play once per browser session.

## How to publish

1. Read the site once. Fix anything in `src/content/` you disagree with; it is all plain text.
2. On GitHub, Settings, Pages: set Source to GitHub Actions (one time).
3. Merge `redesign` into `master` and push. The workflow builds and deploys in about two minutes.

```bash
git checkout master && git merge --no-ff redesign && git push
```

## Decisions I made that you should check

- **FenloAI headcount.** You wrote "two co-founders". I could not tell whether that means two people in total or three, so the site never states a number. Say which and I will add it.
- **The pursuit-evasion item** no longer states specific findings, because the paper is unsubmitted and CoRL reviews double-blind. The mechanisms and results are still in the public repository README. Ask Dr. Siddique whether the site should go further than it does.
- **The fixed-wing drone** is listed as planned, on your word. The security robot says waiting for funding. The CubeSat says engineering model next.
- **The timeline page is called Route**, not Journey. "Journey" was on the banned-word list in the evaluation guide. Rename it if you prefer; it is one label in `src/components/Nav.astro` and the folder `src/pages/route/`.
- **Faith is not on the site**, as you asked. Neither is anything about the IUT admission, family circumstances, or grades.
- **The mobile cover paper** is not listed under Papers until you send the link. It is still mentioned in the 2019 route entry.
- **Five articles render without links** and say "link to follow": the Grover graph-colouring post, the A*, Dijkstra, and Kruskal notes, and the Azure Data Scientist post. Paste the URLs into `src/content/articles.json`.

## What only you can add

| Item | Where it goes |
|---|---|
| Ultrasound-to-baby-photo generator, a FenloAI client product, 2026 | Not on the site yet. Send the product name, whether the client can be named, shipped or prototype, input, output, how the generation works, your role, stack, and any link. It becomes `src/content/work/<slug>.md` and a line in the Platforms group in `src/content/pitch.json`. |
| Photos: debate award, TEXBIZ, Business Club, Annapurna, Kunming, a lab robot | Drop files in `src/assets/photos/`, then reference them in the matching entry's `images:` list. The detail pages already show a labelled slot for each. The home page has no photo at the moment; the headshot is in `src/assets/photos/headshot.jpeg` if you want one back. |
| A demo GIF or video of the task planner | `cover:` on `src/content/work/llm-robot-task-planner.md` |
| The five article URLs | `src/content/articles.json` |
| The mobile cover publication link and venue | `src/content/papers.json`, and the 2019 route entry's `proof` |
| Year TEXBIZ was first held | `src/content/journey/2017-debate-and-club.md` |
| BotForge's live URL | Fix the DNS first (see the Link check section of the inventory: the hostname points at a Kubernetes API server). Then add the link to `src/content/work/botforge.md`. |
| Longer accounts for any route entry or work item | Create `src/content/details/<slug>.md`. It renders under the entry on its detail page only, so the Route and Work lists stay short. `2017-butex.md` is the example, with the credit bar. |

## Open items outside the site

- GitHub cleanup: `docs/github-audit.md` has the keep / archive / delete list and the commands. The task planner repository still has no README; the site links to it.
- The resume PDF is the old one, at `public/files/pdfs/Shoaib_s_Resume.pdf`. Replace the file when you update it.

## Where things are

| | |
|---|---|
| Content | `src/content/` (see README for the file-by-file guide) |
| Pages and components | `src/pages/`, `src/components/`, `src/layouts/Base.astro` |
| Styles and tokens | `src/styles/global.css` |
| Scripts | `src/scripts/` (hero, roles, filter, rail, shelf) |
| Build checks | `scripts/check-content.mjs`, `tests/` |
| Plans, spec, reviews | `docs/superpowers/`, `docs/story/` |
| The inventory everything was written from | `docs/life-inventory.md` |
