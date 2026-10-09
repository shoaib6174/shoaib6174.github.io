# Review 2: structure, flow, completeness, honesty, privacy, reader test

Pass 2 on the revised copy (commit 05143ac), 2026-10-09. Scope: criteria 1, 3, 5, 6, 7 and the hard-fail list. Language and wording (criteria 2 and 4) left to the language reviewer. Source of truth: `docs/life-inventory.md` including "Numbers sourced from repositories", "Link check additions", and the closing bullets. Where the inventory points at a file (the old site's Experiences page, a repo README), that file counts as the source.

Read: evaluation guide, portrayal, inventory, both pass-1 reports, all 43 files under `src/content/`, `src/pages/index.astro`, and the components that render the content (`JourneyEntry`, `Figure`, `StatusTag`, `WorkCard`, `route/[slug].astro`, `writing.astro`, `Nav.astro`).

Remaining problems only. Decisions already taken (drone stays, FenloAI headcount removed, pursuit-evasion findings removed, "link to follow" for unlinked articles) are not revisited.

## Hard fails still present

### HF-A. Five years with no source in shelf.json
`/home/niro-1/Codes/shoaib6174.github.io/src/content/shelf.json`, entries `f-tbbt`, `f-friends`, `f-poi`, `f-silicon-valley`, `f-aot`:

> `"year": 2007` / `"year": 1994` / `"year": 2011` / `"year": 2014` / `"year": 2013`

The inventory lists the four series and the anime with no year (facet 7, "Film and TV"). Flagged in pass 1 (HF-6), still in the file. Either delete the five `"year"` lines, or add to the inventory under Film and TV: "First-air years, checked 2026-10-09: The Big Bang Theory 2007, Friends 1994, Person of Interest 2011, Silicon Valley 2014, Attack on Titan 2013." The film years and the Sore entry are fine.

### HF-B. A read count more precise than its source
`/home/niro-1/Codes/shoaib6174.github.io/src/content/articles.json`, `qiskit-cert`:

> `"reads": 1920`

Inventory: 1.9K. Flagged in pass 1 (HF-7), unchanged. Replace with `"reads": 1900`. (The Writing page shows views only, so nothing renders wrong today; the data is still unsourced.)

### HF-C. Tools in skills.json that no inventory item uses
`/home/niro-1/Codes/shoaib6174.github.io/src/content/skills.json`, `robotics` tools:

> `"MoveIt", "ros2_control",`

Delete both lines. Nothing in the inventory or any work item uses either. The row keeps ROS 2, Nav2, Gazebo, Isaac, URDF, SLAM, behavior trees.

Same file, `quantum` tools:

> `"VQE and QAOA",`

Delete the line. The QUBO article uses QAOA-adjacent material, but the inventory names only QUBO, Grover, QSVM, and the certification. If Shoaib wants VQE and QAOA kept, the fix is one inventory line naming the notebook.

### HF-D. One external link and one title outside the inventory
`/home/niro-1/Codes/shoaib6174.github.io/src/content/articles.json`, `xr-essay`:

> `"title": "The Rise of AR/VR/MR (XR) in Consumer Tech: Will They Replace Smartphones?"`
> `"url": "https://www.linkedin.com/pulse/rise-arvr-consumer-tech-wave-innovation-mohammad-shoaib"`

The inventory has the title as "The Rise of AR/VR/MR in Consumer Tech (LinkedIn)" and the URL appears nowhere, including "Link check additions" (which lists only the NITEX company page). It returned 200 today. Fix is in the inventory, not the copy: add to Link check additions "https://www.linkedin.com/pulse/rise-arvr-consumer-tech-wave-innovation-mohammad-shoaib returns 200 (2026-10-09); full headline: ..." with the headline confirmed from the page. Until then the title should be the inventory's: `"title": "The Rise of AR/VR/MR in Consumer Tech"`.

### HF-E. Five article titles that are paraphrases, rendered as titles
`/home/niro-1/Codes/shoaib6174.github.io/src/content/articles.json`. These render as plain text with "link to follow", so a reader takes them as the headlines. The inventory gives only short descriptions. Replace each with the inventory's wording until the URLs arrive:

| id | current | replace with |
|---|---|---|
| `algo-astar` | "A* algorithm in short, for revision" | "Revision notes: A*" |
| `algo-dijkstra` | "Dijkstra's algorithm in short, for revision" | "Revision notes: Dijkstra" |
| `algo-kruskal` | "Kruskal's algorithm, for revision" | "Revision notes: Kruskal" |
| `qiskit-grover` | "How to Solve Graph Coloring Problems Using Qiskit's Grover Algorithm" | "How to solve Graph Coloring with Qiskit's Grover algorithm" |
| `azure-ds` | "How I Became Microsoft Certified: Azure Data Scientist Associate" | "How I became Azure Data Scientist Associate" |

### HF-F. Author's note that renders as page text
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2019-mobile-cover.md`:

> `imageSlots:`
> `  - "Link: the mobile cover publication"`

`route/[slug].astro` renders every `imageSlots` string inside a placeholder `<figure>`, so `/route/2019-mobile-cover/` shows a grey box reading "Link: the mobile cover publication". Pass 1 (facts, HF-11) accepted the slot "as long as slots never render as text"; they do. Delete the two lines. The entry then has no detail page, which is correct until the link exists. (The "Photo: ..." slots elsewhere are deliberate placeholders for photos Shoaib will provide and are not flagged.)

## Criterion 3, flow: chronology slips

### C1. 2024: the robotics course is attached to the wrong semester
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2024-back-to-nsu.md`, `result`:

> "Alongside it, a robotics course with Dr. Shahnewaz Siddique, whose project was the TurtleBot3 patrol."

"It" is the HPC work and TA term, August to December 2024. The inventory dates the TurtleBot3 project April 2024, while he was still at NITEX. Replace with:

> "Earlier that year, a robotics course with Dr. Shahnewaz Siddique, whose project was the TurtleBot3 patrol."

The inventory's own bridge row ("2024 – 2025 | Took a robotics course ... (TurtleBot3 Patrolling, Apr 2024)") is still muddled, as pass 1 noted. Change it to "Spring 2024".

### C2. 2024 Kunming: did the language come before or after the trip
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2024-kunming.md`, `result`:

> "Started learning Chinese. HSK 1 passed."

Under an October 2024 entry this says the trip started the language. The inventory's "Why Chinese" orders it papers, then reading about China, then the language, then HSK 1, then the trip, without dates. Raised in pass 1, not settled. Needs one dated line from Shoaib in the inventory (when he started, when HSK 1 was passed). If the language came first, replace `result` with:

> "HSK 1 passed. Two weeks in the country whose papers I had been reading."

### C3. 2025 FenloAI: sort position unresolved
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2025-fenloai.md`, `date: "2025"` sorts before the Annapurna (2025-05) and lab (2025-06) entries. The body's "Research alone does not keep me in contact with people who need something built by Friday" reads as a reaction to the lab, which the reader has not reached yet. The copy no longer says "alongside the lab", so there is no contradiction, only an order question. Needs the month from Shoaib. If FenloAI started after June 2025, set `date: "2025-07"` (or the true month).

## Criterion 1 and 3: duplication inside entries

### D1. 2022 quantum: the PhD goal is stated three times
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2022-quantum.md`. `JourneyEntry` renders the body first, then Chose, then Result. The reader meets:

> body: "By the end of it I had decided to aim for a PhD in quantum machine learning. The next year was built around that."
> chose: "A scholarship to Qubit by Qubit's online summer school, then a goal: a PhD in quantum machine learning."
> result: "A goal: a PhD in quantum machine learning. The next year was built around it. ..."

Pass 1's F1 rewrote `result` and left the other two. Keep `result` as is. Replace `chose` with:

> "A scholarship to Qubit by Qubit's online summer school."

And cut the body's last two sentences, leaving:

> "I read the Feynman memoir during Google Summer of Code and went looking for a course. The summer school ran with researchers from MIT and Berkeley."

### D2. 2025 Annapurna: "alone" four times in 300 bytes
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2025-annapurna.md`: title "alone", `chose` "To go alone, without a guide.", `result` "Trekked without a guide.", body "Solo, no guide". Keep title and `chose`. Replace `result` with:

> "Base camp and back, then bungee and the canyon swing."

Replace the body with:

> "Nepal, May 2025."

## Claims still without a source

Each is either a detail from a repo README or the old site that the inventory's sourced sections do not yet name, or a sentence only Shoaib can confirm. The hard-fail rule is literal, so each needs either an inventory line or the trim given. Where a trim is given it is the replacement.

### U1. "Next, the physical JetRover"
`/home/niro-1/Codes/shoaib6174.github.io/src/content/home.md`, `now[0]`:
> "LLM robot task planner: four of its five demo scenarios pass in simulation. Next, the physical JetRover."

`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/llm-robot-task-planner.md`, body:
> "Phase 2 is the physical JetRover."

The inventory says only "JetRover platform" and "Software and AI complete". A plan to move to hardware is not stated. Either add to "Numbers sourced from repositories": "Phase 2, physical JetRover deployment: `llm_robot_task_planner` PRD or README, section ..." or trim. Trim for home: `"LLM robot task planner: four of its five demo scenarios pass in simulation."` Trim for the work item: delete the sentence.

### U2. Task planner: the scenario story, and "fails" where the source says "partial"
Same work file:
> "Give it "bring the red cube from room A to room B". The agent navigates to room A with Nav2, finds the cube with YOLO, picks it up, drives to room B, and places it. If the cube is not where it expected, it searches the other room and replans."
> "Four of five demo scenarios pass. The one that does not, moving all cubes at once, fails on localisation drift after repeated rotation scans."

The inventory's sourced line says "scenario 3 (multi-step cleanup) is partial, AMCL drift after repeated rotation scans". The copy renames the scenario and hardens "partial" to "fails". The red-cube scenario and the replanning behaviour are not in the inventory. Pass 1 asked for them to be added from `docs/demo_results.md`; they were not. Smallest honest copy, using the inventory's own description:

> "Give it a task in plain language. The agent decomposes it into Nav2 navigation, YOLO detection, and arm pick-and-place, and replans when a step fails."
> "Four of five demo scenarios pass. The fifth, a multi-step cleanup, is partial: localisation drifts after repeated rotation scans, an AMCL limitation and the next thing to fix."

The `coverSlot` "Demo: the robot fetching the red cube from room A to room B" renders as placeholder text and should match whichever version is kept.

### U3. Pursuit-evasion: environment and method
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/safe-rl-pe.md`:
> summary: "one-on-one pursuit-evasion"
> body: "The environment is a unicycle pursuer and evader with obstacles and a limited field of view. ... whether the fixed point it reaches is an equilibrium, by training fresh best-response agents against frozen snapshots."

The findings are gone (decided). The environment and the exploitability method remain, and the inventory's addendum names README sections only for the two results. Preferred fix is one inventory line: "Environment (unicycle pursuer and evader, obstacles, limited field of view) and exploitability check (best-response agents against frozen snapshots): README of `safe-rl-pe`, sections ..." If that line is not added, replace the body's first paragraph with:

> "Lab research with Dr. Shahnewaz Siddique. Adversarial self-play under partial observability. We test which mechanisms keep training stable, with an ablation for each."

### U4. BotForge: many clients where the inventory has one
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/botforge.md`, `why`:
> "Small businesses kept asking FenloAI for the same things: answer questions from our documents, answer the phone, and do it on every channel we use. BotForge puts them on one backend."

Inventory: "Every product below was built for a client." Pass 1 gave a replacement; not applied. Replace with:

> "A FenloAI client needed three things: answers from their documents, a phone agent, and one inbox for every channel they used. BotForge is those three on one backend."

Stack entries "FastAPI" and "PostgreSQL" are not in the addendum's BotForge line; add them to it or drop them.

### U5. GuardShield: a claim about client products
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/guard-shield.md`, `why`:
> "Every LLM product I built for a client needed the same input checks."

The inventory names one client LLM product. Replace with:

> "Every LLM application needs the same input checks."

Stack entries "Hugging Face classifiers", "spaCy", "Token bucket" go beyond the addendum's "guard order and three degradation levels"; add them to that line or drop them.

### U6. Video Swin: training details not in any source
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/video-swin-tf2.md`, body:
> "The work covered the model implementations, a weight-conversion notebook from the PyTorch checkpoints, fine-tuning notebooks on UCF101, and a cosine-decay-with-warm-up learning rate schedule. TF Hub published the feature extractors."

The old site (a named source) says "notebooks demonstrating how to fine-tune the models" and nothing about UCF101, the schedule, or feature extractors. Replace with:

> "The work covered the model implementations, a weight-conversion notebook from the PyTorch checkpoints, and fine-tuning notebooks. TF Hub published the models."

### U7. DeepPavlov: LaBSE and BERT
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2021-deeppavlov.md`, body:
> "I also compared LaBSE and BERT on intent classification and tested both on Russian translations without retraining."

Flagged in pass 1, still unsourced. Delete the sentence, or add a line to the addendum from the `MultiWOZ-Intent-Classification` README.

### U8. CubeSat: a power claim
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/nsu-ai-sat.md`, `why`:
> "Inference has to happen on the satellite, on a power budget far below a Jetson's."

The inventory says "On-board software and AI payload". Replace with:

> "Detection and tracking have to run on the satellite itself, within its power budget."

### U9. Extraction pipeline: per-layout selection
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/nitex-extraction-pipeline.md`:
> why: "I tested four OCR services against the real documents, chose one per layout, and shipped it as a service the operations team could call."
> body: "runs the OCR backend that works best for that layout"

The old site, which the inventory names as the source, says "testing and integrating OCR APIs". The four services are sourced; choosing one per layout is not. Replace the `why` clause with "I tested four OCR services against the real documents, integrated them, and shipped it as a service the operations team could call." and the body clause with "runs OCR".

### U10. Small single-word items

| File | Quoted | Replace with | Reason |
|---|---|---|---|
| `work/security-robot.md`, stack | `"Gas and thermal sensors"` | `"Fire and gas hazard sensors"` | Inventory: "fire and gas hazard detection"; thermal is an inference |
| `work/attendance-pi-2019.md`, stack | `- "Python"` | delete the line | Inventory names only the Raspberry Pi |
| `journey/2018-ysi.md`, chose | "a youth entrepreneurship network" | "an entrepreneurship network" | "Youth" is the removed name expansion, still implied |

### U11. Sentences only Shoaib can confirm (inventory lines, no copy change yet)

| File | Quoted | What the inventory needs |
|---|---|---|
| `work/getaudio.md` | "The cluster is no longer running." | One line under GetAudio confirming it (pass 1 asked; not added) |
| `work/hsk-vocabs.md`, why | "the apps I tried did not let me drill exactly the lesson I was on" | One line under facet 6 |
| `work/qiskit-treasure-hunt.md` | `years: "2023"` | Repo created 2023-06-27 (GitHub API, checked today); add the date to the addendum |

## Criterion 6: honesty and proportion

### P1. A course listed as a venue under "Papers"
`/home/niro-1/Codes/shoaib6174.github.io/src/content/papers.json`, `mobile-cover-2019`:
> `"venue": "Product Design course, BUTEX"`, `"role": "Team project, later published."`

Renders on `/writing/#papers` as "Product Design course, BUTEX, 2019. Team project, later published." Under a heading that says Papers, a course is not a venue, and "later published" with no venue or link is the one place a PI will stop. The inventory supports the publication but has `[link]` to be provided. Needs the venue from Shoaib. Fallback if it does not arrive before launch: remove the entry, and change "two papers" to "a paper" in `src/pages/writing.astro` (title description and lead).

### P2. "Shipped" on a course project
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/turtlebot3-patrolling.md`:
> `status: "shipped"`

`StatusTag` renders this as "Shipped". It was a course project in simulation. Replace with `status: "closed"` (renders "Done"), which is what the other finished personal projects use.

## Criterion 7: reader test

Recruiter and book reader: no remaining edits. Lab PI: one gap, P1 above, plus the Textile Progress review still has no DOI (`papers.json`, `textile-progress-3dp`, no `url`). Not a fail, since no unverified link is shipped, but the DOI is one line from Shoaib and Taylor and Francis issues one for every article.

## Criterion 5: completeness

No edits. Every facet, the four kept items, the books, both papers, the Kaggle count, and per-article stats are present. The Berkeley MOOC, IBM Z Ambassador, and the QSVM proof link were added as pass 1 asked. The WebMart omission is still unrecorded in the inventory (see housekeeping).

## Privacy

No edits. Grep across `src/` for IUT, Islamic University, CGPA, the three GPA values, afford, fee, family, only child, believer, faith, religion, finance returns nothing. The only "scholarship" is Qubit by Qubit's.

## Hard-fail word list

No edits. No pitch words, no trait adjectives, no "I am a X who Y", no "startup", no "published at". "Journey" survives only as a collection name and CSS class, never as rendered text; nav says Route.

## Inventory housekeeping (not copy edits, but needed so pass 3 does not re-flag)

- Add the Kaggle Models URL to the Link check "Live" list; it is in the body but not in the results.
- Add the LinkedIn pulse URL (HF-D) with today's 200.
- Record the WebMart decision ("dropped from the site, supporting evidence only").
- Add the FenloAI start month (C3).
- Fix the bridge row for the robotics course (C1).
- `fenlo-bot` is still public with "Decide visibility" open in the audit. It is BotForge's only link; if it goes private the schema fails on that item.

## Checked and not re-flagged

So the next pass does not repeat them: the NITEX stacks (Triton, FastAPI, PostgreSQL, Elasticsearch, Playwright, Streamlit, Instaloader) and the trend analytics sentence are on the old site's Experiences page on `master`, which the inventory names as the source. "Before university" on Home and the lab entry is the inventory's "Back to the pre-university goal". The route has six entries in the right order, the home section order matches the brief, six featured work items, three roles unlabelled, who-what-why in the first screen. The GSoC 2023 entry sorts before the MSc entry (year-only dates sort as month 0).

## Verdict

FAIL (25 edits): HF-A to HF-F (6), C1 to C3 (3), D1 to D2 (2), U1 to U10 (12), P1 to P2 (2). Of these, C2, C3, P1, and U11 need Shoaib; the rest are mechanical.
