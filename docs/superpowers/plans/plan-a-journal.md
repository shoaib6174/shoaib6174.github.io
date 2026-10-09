# Plan A: the journal

## Thesis

The site is a dated record of decisions: each entry says what I chose, what I ruled out, and what it produced. The three roles (build systems, explain what I learn, organise people) are never argued for; they show up because the same three verbs recur in every entry from 2014 to 2026.

## Site map

- `/` Home. A brief under 300 words that funnels into Journey.
- `/journey` The heart. About 22 dated entries, 2014 to now, each with a decision note and proof links, ending with a dated "Now" entry.
- `/work` Skill groups as headings; projects under the group they prove, each with a status (done, running, waiting for funding, planned).
- `/writing` Articles by theme with dates and view counts, the two math books, the two publications.
- `/outside` Chinese and Kunming, Annapurna, recommended books and films, the football line.
- `/cv.pdf` for CV-only numbers.

## Home page section order

1. Name, location, one paragraph: what I build at NIRO Lab, that I write things up, that I organise people.
2. Now (dated Oct 2026): pursuit-evasion RL paper, LLM robot task planner, FenloAI, ROS 2 series.
3. The record: a year strip 2014 to 2026 with six ticks (C book, BUTEX, GSoC 2022, GSoC 2023 unfunded, NITEX, NIRO Lab), each linking to a Journey anchor.
4. Skills with proof: five rows, one proof link each.
5. Three projects: safe-rl-pe, llm_robot_task_planner, Video Swin Transformer (2,636 downloads).
6. Latest writing: three newest articles and the book series.
7. Contact links and CV.

## How the story is told

Every Journey entry uses one template: heading as date and noun ("2020. Bootcamp"), one paragraph of what happened, three fixed labels (**Chose**, **Ruled out**, **Result**), a proof link where one exists, and one to three thread tags: Build, Explain, Organise.

Eliminations get the same weight as wins: 2017 to 2019 (JavaScript, Java, C++, competitive programming, CS50, all dropped), 2020 bootcamp (ruled out frontend), 2021 Compute Engine specialisation (ruled out DevOps), the textile half of BUTEX, 2023 MSc first semester (ruled out theoretical research). GSoC 2023 is one factual entry: tasks completed, proposal accepted by QMLHEP, Google cut the slot allocation.

Order is oldest to newest, because the decisions compound. Entries are an Astro content collection (`src/content/journey/*.md`), so adding one is adding a file. No commentary inside entries; the only interpretive sentence is the Journey intro: "Three things repeat: I build, I write it up, I organise."

## How skills are shown

Five groups, each a row on Home and a heading on Work: group, tools, one proof link, and the Journey year it was acquired, linked back into the timeline.

| Group | Tools | Proof | Year |
|---|---|---|---|
| Robotics software | ROS 2, Nav2, Gazebo, Isaac Sim, Jetson | llm_robot_task_planner, TurtleBot3 Patrolling, ROS 2 series | 2024 |
| ML and RL | PyTorch, TensorFlow, self-play RL, VLM/VLA | safe-rl-pe (736 tests), Video Swin Transformer | 2021 |
| LLM systems | LangChain, RAG, FastAPI, n8n | BotForge, guard-shield, NITEX pipeline (20+ brands) | 2023 |
| Control and optimisation | CasADi, NMPC | CasADi series (3.2K views) | 2025 |
| Cloud and infrastructure | AWS ECS/Fargate/Lambda, AKS, Docker | GetAudio, NITEX platforms | 2023 |

Quantum (Qiskit, IBM certification, Advocate) is a closed sixth group on Work, proved by the Grover and QUBO articles and Qiskit Treasure Hunt. Explain and Organise are not skill rows; Writing and the Journey tags prove them. No bars, no percentages.

## Signature interactions

- **Home:** hovering or focusing one of the three verbs in the opening paragraph lights the matching ticks on the year strip.
- **Journey:** a sticky year rail advances with scroll; three thread toggles dim non-matching entries instead of hiding them, so the spine stays continuous. Entries fade in once.
- **Work:** selecting a skill-group chip dims the other groups and updates a count ("4 of 11 projects").
- **Writing:** an SVG grid, years across, themes down, one dot per article. Hover shows title and views; click scrolls to it. The learn-then-write rhythm shows unstated.
- **Outside:** a books/films toggle; each item expands one line on tap.

All motion is opacity and transform, gated on `prefers-reduced-motion`.

## What to cut from the inventory and why

- IUT admission, finances, family circumstances, undergraduate CGPA, faith, only child: excluded as instructed.
- MSc CGPA, HSC GPA, IELTS subscores: CV only. A GPA on a page reads as a résumé line.
- Lean Six Sigma, Google PM, IT Support, IBM Z Ambassador, MLSA as standalone items: certificate clutter. IT Support and the MLSA voucher fold into the 2020 and 2021 entries.
- Jonvexa, ultrasound generator, LinkedIn scraper: unlinkable client work; one sentence under FenloAI.
- BotForge link until DNS points at the app; the dead Rokomari package link; AutoStock Insight and Img2JSON until repos exist. No proof, no listing.
- Childhood reading phases, music, India 2018, the AR/VR essay, TV beyond four titles: no decision attached.
- The inventory's "pattern" sentences: printing them is self-description.
- TEXBIZ year, BUTEX robotics group, MLSA dates: held until verified.

## Risks of this approach

- A recruiter with ten seconds wants current capability; a chronology front-loads 2014. Now and the skills rows sit above the strip; the rail must keep Journey scannable.
- Decision notes slide into self-narration ("I realised"). The Chose / Ruled out / Result template is the guard.
- Twenty-two entries is roughly 2,500 words; without dimming filters, a wall.
- A journal that stops looks abandoned; the Now entry must be refreshed each quarter.
- Search terms ("robotics engineer, Dhaka") live on Home and Work; Journey needs descriptive titles and metadata.
- Missing photos and unverified dates turn proof into placeholders. Ship without them.
