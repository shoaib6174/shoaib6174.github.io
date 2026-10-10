# Design direction

Decided after the story, before styling. Three directions were considered; one is built.

## The subject, and where the look comes from

Shoaib's working world is robot software: a language model deciding, a vision model looking, ROS 2 nodes talking, a Jetson board running it, worklogs and decision logs recording it. Before that, five years of engineering drawing, SolidWorks and CATIA, product design. Beside it, four brightly covered Bengali math books for children. The site should look like it belongs to that person and no one else.

## Three directions considered

**A. Drafting paper.** Cool off-white sheet, fine grid only behind the hero, dimension lines (the arrowed measurement lines from engineering drawings) as the year rail on the Journey. Grounded in the IPE years. Risk: becomes a costume if the dimension lines go everywhere.

**B. Node graph.** A ROS-style node graph of his work drawn once on load as the hero, edges following the Led-to chain. Grounded in the robot software. Risk: a graph of a life is a cliché of personal sites; hard to make legible on a phone.

**C. The instruction.** The hero is the thing he actually built: a line of natural language typed in, and a robot's plan assembling under it, step by step, once. Everything else is quiet type on paper. Grounded in the task planner, which is also the emphasis Shoaib asked for. Risk: none of the rest of the page can compete with it, which is the point.

**Chosen on 2026-10-09: C, with A's paper and rail. Replaced on 2026-10-10.** Shoaib rejected the instruction hero: a project is proof, not identity, and the first screen should carry curiosity over competence, with one action, "Read the route". The mosaic that replaced it was rejected on 2026-10-10 as a template with empty tiles, and a text column after it as too much text. **The home page now opens with a layered map** (`src/components/Map.astro`, data in `src/content/map.json`): seven horizontal bands from the floor to the people, fourteen fields placed in their band, and a curve for every project that joined two fields. Pointing at a field or a band lights its curves and lists the projects. A hollow point is a studied field with no work yet. Two sentences above it, three compact blocks below. The paper surface, the margin column, and the Route rail stay.

## Tokens

### Colour
| Token | Value | Use |
|---|---|---|
| paper | `#F6F7F4` | page background, cool off-white, not cream |
| ink | `#1C2733` | text, a blue-black like fountain-pen ink |
| graphite | `#5B6672` | secondary text |
| rule | `#D5DBE0` | hairlines, grid |
| signal | `#FF5A1F` | the one accent: hazard-tape orange from robot hardware. Links on hover, the active year, the plan steps as they complete |
| moss | `#2E7D5B` | status "shipped" and "running" only |

No gradients. No shadows except a 1 px rule. No tinted near-black.

### Type
- **Bricolage Grotesque** (variable, optical size) for the name, headings, and the hero instruction. Wide and slightly odd at display sizes; tightens at small sizes. Sentence case everywhere.
- **Literata** for all reading text, including journey entries and card summaries. A serif built for long reading on screens, with a real italic for book titles.
- No monospace labels. The hero's typed instruction is Bricolage at 40 px, not a terminal font.

Scale (desktop): 56 / 40 / 28 / 21 / 17 body / 15 small. Line height 1.6 on Literata body, 1.1 on display. Measure 66 characters.

### Layout
Left-aligned throughout. Two-column skeleton on desktop: a 140 px margin column on the left for dates, years, and labels (the notebook margin), a reading column to its right. The margin column is where structure lives, so the reading column stays clean.

```
| margin |  reading column (66ch)                         |
| 2017   |  Industrial and Production Engineering at BUTEX |
|        |  Every term mixed two kinds of courses...        |
| Chose  |  The IPE track...                                |
```

Home hero, original (replaced by the mosaic, see above):
```
|        |  > bring the red cube from room A to room B      |  (types in)
|        |    navigate room_a        done                   |  (steps appear, one per 400 ms)
|        |    detect red cube        found at (6.0, 2.5)    |
|        |    pick_up                done                   |
|        |    navigate room_b        done                   |
|        |    place                  done                   |
|        |                                                  |
|        |  Mohammad Shoaib                                 |
|        |  Research assistant at NSU Intelligent...        |
```
The plan is the real output of the task planner, not invented. Under reduced motion the finished plan is shown static.

Work page: not a card grid. A list where each item is a row: title in Bricolage, status as a plain word in moss or graphite, summary in Literata, links. Featured items get a 4:3 image slot at the right on desktop. Rows separated by a single rule.

Journey: dimension lines. The year rail is a vertical line with ticks; the active year's tick extends into a short horizontal arrowed line pointing at the entry, in signal orange. Entries have no boxes.

### Motion
- Home hero: one sequence on load, 2.4 s total, never repeats on the page. Reduced motion: final state.
- Journey: the rail's active tick moves with scroll (transform only). Entries do not fade in. Removed from the earlier plan after reading the design guidance: per-section fade-ups are the generic default.
- Work: filtering uses a view transition, 200 ms.
- Hover: links underline in signal. Nothing scales.

### Principles
1. One memorable thing per page. On Home it is the instruction. On Journey it is the dimension rail. Everywhere else, type and paper.
2. Structure lives in the margin column; the reading column is only words and pictures.
3. Status is a word, never a pill.
4. No chrome that appears regardless of subject: no uppercase eyebrows, no middle dots, no arrows after links, no identical cards.
5. Photos are the only colour besides signal. When they arrive they will carry the page.

## Review against the brief

Checked against the generic-default list: cream and terracotta avoided (paper is cool, signal is hazard orange); not dark; no broadsheet hairline columns (one rule per row, generous spacing); no card kit; no eyebrow labels or dot-joined metadata; no mono data labels. The hero is specific to this person's work and could not be reused on another site. What was changed from the first skeleton: section labels converted from uppercase mono to sentence-case Bricolage headings; metadata separators changed to plain sentences; cards removed from Work and Home in favour of rows; per-entry fade-ins removed.

## Mobile
A separate pass after the desktop build. Margin column collapses above the reading column as a small line. Hero sequence keeps its timing but the plan steps wrap to two lines. Navigation becomes a single row that scrolls horizontally under the name.
