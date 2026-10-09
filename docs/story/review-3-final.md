# Review 3: final pass

Third and last pass on the revised copy, 2026-10-09, after the edits of `review-2-language.md` and `review-2-structure-facts.md`. Scope: the whole rubric in `evaluation-guide.md`, the binding tables in `portrayal.md`, and the hard-fail list. Source of truth: `docs/life-inventory.md` including its tables, "Numbers sourced from repositories", "Link check additions", and the closing bullets. Where the inventory names a repository file or README as a source, that file was fetched and read (demo_results.md and the PRD of `llm_robot_task_planner`, the READMEs of `safe-rl-pe`, `GSOC-22-Video-Swin-Transformers`, `MultiWOZ-Intent-Classification`, `fenlo-bot`, `guard-shield`, `No-Code-ML`).

Read: evaluation guide, portrayal, inventory to its last line, both pass-2 reports, all 43 files under `src/content/`, `src/pages/index.astro`, `src/pages/writing.astro`, `src/lib/dates.ts`, and the built `dist/index.html` and `dist/writing/index.html`.

Decisions already taken and not revisited: the drone stays, TV series years and resume-listed tools (MoveIt, ros2_control, VQE and QAOA) are treated as sourced, the mobile cover paper is out of `papers.json`.

## State of the pass-2 edits

Of the 14 language edits, 14 are applied. Of the 25 structure and facts edits, 17 are applied or resolved by the decisions above, 3 wait on Shoaib (C2, C3, U11), and 5 were neither applied nor listed as rejected; those five reappear below as items 4 to 8. Mechanical sweep of the revised copy: no semicolons, em-dashes, en-dashes, or parentheses in prose; no pitch words; no trait adjectives describing him; no "I am a X who Y"; no private item (grep for IUT, CGPA, the three GPA values, afford, fee, family, only child, believer, faith, religion, finance, IELTS returns nothing). The mobile cover placeholder figure no longer renders. Every internal link on Home resolves to a page in `dist/`. The resume PDF is in `dist/files/pdfs/`.

## Remaining edits

### 1. A doubled word
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/llm-robot-task-planner.md`, body:

> "The one that only partly passes, moving all cubes at once, loses localisation after after repeated rotation scans."

→ `The one that only partly passes, moving all cubes at once, loses localisation after repeated rotation scans.`

### 2. Annapurna: the same fact in body and result
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2025-annapurna.md`. The entry renders body, then Chose, then Result. The reader meets "To base camp and back." and then "Base camp and back." eight words apart.

body:
> "Nepal, May 2025. To base camp and back."

→ `Nepal, May 2025.`

### 3. Quantum: the year is stated twice
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2022-quantum.md`. Body ends "By the end of it I had a goal, and the next year was built around it." Chose then says "then a year aimed at a PhD in quantum machine learning." Same fact, forty words apart, and the body's "a goal" is unnamed until Chose names it.

body:
> "I read the Feynman memoir during Google Summer of Code and went looking for a course. The summer school ran with researchers from MIT and Berkeley. By the end of it I had a goal, and the next year was built around it."

→ `I read the Feynman memoir during Google Summer of Code and went looking for a course. The summer school ran with researchers from MIT and Berkeley.`

### 4. Kunming: the entry contradicts its own causal chain
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2024-kunming.md`. `startedBy` and the body say the papers led to the language. `result`, under an October 2024 trip, says the trip did.

result:
> "Started learning Chinese. HSK 1 passed."

→ `HSK 1 passed.`

The start month of the language and the HSK 1 date still need one line from Shoaib in the inventory. The replacement is true either way.

### 5. Security robot: a sensor the inventory does not name
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/security-robot.md`, stack. Inventory: "fire and gas hazard detection". Thermal is an inference, and the item's own summary says "fire and gas hazard detection".

> `  - "Gas and thermal sensors"`

→ `  - "Fire and gas hazard sensors"`

### 6. Attendance system: a tool the inventory does not name
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/attendance-pi-2019.md`, stack. The inventory names only the Raspberry Pi.

> `  - "Python"`

→ delete the line.

### 7. YSI: a word from the removed name expansion
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2018-ysi.md`, chose. The inventory has "YSI Bangladesh" under "Entrepreneurial ecosystem"; "youth" is not in it.

> "A coordinating role in a youth entrepreneurship network, alongside the degree."

→ `A coordinating role in an entrepreneurship network, alongside the degree.`

### 8. Extraction pipeline: a selection the source does not describe
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/nitex-extraction-pipeline.md`, why. The old site says "testing and integrating OCR APIs". "The ones that worked" implies some were dropped, while the stack lists all four.

> "I tested four OCR services against the real documents, integrated the ones that worked, and shipped it as a service the operations team could call."

→ `I tested four OCR services against the real documents, integrated them, and shipped it as a service the operations team could call.`

### 9. A read count more precise than its source
`/home/niro-1/Codes/shoaib6174.github.io/src/content/articles.json`, `qiskit-cert`. Inventory: 1.9K. Not rendered today (the Writing page shows views only), so this is data hygiene, but the number is in the file.

> `"reads": 1920`

→ `"reads": 1900`

## Waiting on Shoaib, no copy change proposed

- `journey/2025-fenloai.md`: `date: "2025"` sorts before the May and June 2025 entries, and `chose` now says "alongside the lab" before the reader reaches the lab. Needs the founding month. If it was after June 2025, set `date` to that month. Fallback if the month is unknown: `chose: "To co-found a company for contract AI work."`
- `work/getaudio.md`: "The cluster is no longer running." Only he can confirm; one inventory line.
- `work/hsk-vocabs.md`, why: "the apps I tried did not let me drill exactly the lesson I was on". One inventory line.

## Verified against repository sources, not flagged

These were open in pass 2. Each is now confirmed in a file the inventory names, or in the README of a repository the site links. They pass. The inventory should carry one line each so the next reader does not re-check:

- "Next, the physical JetRover" (Home now, task planner body): `PRD_llm_robot_task_planner.md`, "Phase 2 Notes": "Real hardware: Hiwonder JetRover, Jetson Orin NX". Sourced.
- The red cube scenario, the plan steps in the hero, and the replanning behaviour: `docs/demo_results.md`, Scenarios 1 and 2. The hero's five steps match the S11 run exactly. Scenario 3 is "Move all cubes to room B", partial, AMCL drift. Sourced.
- Pursuit-evasion environment (unicycle, obstacles, FOV) and the best-response test against frozen snapshots: README of `safe-rl-pe`, project tree and section 2. Sourced.
- LaBSE and BERT on Russian translations: README of `MultiWOZ-Intent-Classification`, first paragraph. Sourced.
- Video Swin: UCF101 fine-tuning, cosine decay with warm-up, feature-extractor collection on TF Hub: README of `GSOC-22-Video-Swin-Transformers`, "Outcomes". Sourced.
- BotForge stack FastAPI and PostgreSQL: README of `fenlo-bot`, architecture diagram and badges. Sourced.
- GuardShield: spaCy, token bucket, Hugging Face Transformers, "built as a learning project", "core pipeline and ML guards are implemented; production hardening is in progress": README of `guard-shield`. Sourced, including the status line and the "learning project" clause.
- Qiskit Treasure Hunt `years: "2023"`: repository created 2023-06-27 (GitHub API).
- LinkedIn essay URL: returns 200 today. Add to Link check additions.
- No-Code ML "Azure ML Designer and AutoML": README of `No-Code-ML`.

## Checked and passing

- Structure: who, what, why in the first screen; six route lines in the right order; three roles unlabelled and weighted as the portrayal asks; home section order matches the brief.
- Honesty: "paper in preparation for CoRL 2026" everywhere; CubeSat "engineering model next"; security robot "Concept stage. Waiting on funding."; TurtleBot3 now "Done", not "Shipped"; BotForge described as client work and linked to the repository, not the broken product URL; the mobile cover is on its route entry only, with no venue claimed.
- Completeness: every facet present; the four kept-in items present (failed attempts in 2017, GSoC 2023, textile half ruled out, eliminations in 2020); books, the review paper, 2,636 downloads, per-article views where they exist.
- Wording: Bengali titles are transliterated on Home and glossed once on Writing. Numbers are the ones that stand alone. "Fifty universities" is now one number for one fact.
- Language: longest sentence in `work/` is 29 words and carries a list; nothing chained.

## Reader tests, on the built `dist/index.html`

**A robotics lab PI.** Takes away: a research assistant putting local LLMs and VLMs on real robot stacks, with a task planner whose demo results are tracked, an RL paper in preparation for CoRL with a repository showing 736 tests and forty-plus runs, and a CubeSat payload, all under a named supervisor. What would give pause: the pursuit-evasion card promises an equilibrium question and the body answers it only with method, and the route shows a textile degree and a quantum detour before robotics; the "I prefer building to theory" line settles the second if they read it, but a PI skimming will register "left theoretical research after one semester" and want to see the paper before deciding.

**A recruiter for an AI engineering role.** Takes away in under a minute: current role, co-founder of a contract AI company, two shipped data platforms for a fashion company, a RAG and voice-agent product for a client, a GSoC model with 2,636 downloads, and a skills grid where every row links to the thing that proves it. What would put them off: nothing on honesty or tone, but the strongest commercial evidence (NITEX, BotForge) sits fourth and fifth in Selected work under three research items, so a recruiter who stops after two cards sees a researcher, not an engineer who ships.

**A parent who bought his math books.** Takes away: the author of the olympiad volumes is an engineer who works on robots now, still writes to explain things, and reached the books by liking math when others did not. The books are one scroll down with the audience ages beside them and a link to buy. What would put them off: the first screen is a robot plan in monospace and the Writing section comes seventh, so the parent has to trust the nav; nothing in the copy would read to them as boastful or alien.

## Verdict

FAIL (9 edits). Items 1 to 9 above, all mechanical. Three items wait on Shoaib and do not block. The pass after these nine should produce no edits.
