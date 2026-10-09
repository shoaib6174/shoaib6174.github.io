# Plan C: the three roles

## Thesis

Since 2014 the same three activities recur in every period regardless of sector: Shoaib builds systems, explains what he has learned, and organises people. The site is structured by those roles, so the constant is visible at a glance and robots, quantum, textiles and books become tags on the evidence rather than chapters.

## Site map

Six pages over one Astro content collection (`entries`: `role`, `date`, `tags`, `proof[]`, `status`, `why?`), so each fact lives once.

- **/** Home: roles stated, latest proof each, what is in progress, skills with proof, eliminations.
- **/builds** Every system 2019 to now: the nine featured repos from the GitHub audit plus WebMart, the two NITEX platforms and the 2019 Raspberry Pi attendance system. Each: date, one sentence, stack, status (shipped / running / waiting for funding / planned), link. Tags: robotics, ML, LLM systems, quantum, product, infrastructure.
- **/explains** Books (2018; 2022 series), 19 Medium articles grouped by series (Azure, Qiskit, algorithms, CasADi, ROS 2), the Textile Progress review, the TA post, No-Code ML, Qiskit Treasure Hunt. Views shown only for the 14 articles that have them.
- **/organises** Class Representative and debate (2017), Business Club founding, TEXBIZ, VP (2017–22), YSI coordinator for 50+ universities (2018–19), IBM Z Ambassador, MLSA, Qiskit Advocate, FenloAI co-founder (2025–).
- **/years** One row per year 2014–2026, three role columns plus a muted fourth, "Studied": the C book, bootcamp, MicroMasters, certificates, the 2017–19 attempts that did not stick. This page proves the thesis.
- **/about** Now and next, Chinese and Kunming, Annapurna solo trek, the two recommendation lists, the FIFA line, contact, CV.

## Home page section order

1. Name, Dhaka, one sentence: "I build systems, explain what I learn, and organise people." Current positions beneath.
2. Three columns: latest proof per role (safe-rl-pe; ROS 2 series; FenloAI) and a true count.
3. Now, October 2026: CoRL 2026 paper, CubeSat engineering model, security robot waiting for funding.
4. Years strip: 2014–2026, one dot per role per year, linking to /years.
5. Skills with proof.
6. Tried and ruled out: frontend (2020), DevOps (2021), theoretical research (2023), one line each.
7. Elsewhere: GitHub, Medium, lab page, email.

## How the story is told

No biography paragraph; the story is the dated list. Each role page opens with two first-person sentences: when the role started, what it is for. An entry carries a `why` line only where the inventory has one (Life 3.0, the friend's stuck project, Feynman). Failures use the same format as successes: "2017–2019: JavaScript, Java, C++, competitive programming, CS50. None stuck." "2023: GSoC proposal to QMLHEP. Selected by the org, outside Google's funded quota." Cross-sector reading happens on /years: the 2023 row shows GetAudio, six posts and the Advocate role side by side.

## How skills are shown

A table on Home, in full on /builds. Each row: tools, year first used, at least one proof link. No proof, no row.

- Robotics and edge: ROS 2, Nav2, Gazebo, Isaac Sim, Jetson → task planner, TurtleBot3, ROS 2 series
- RL and control: self-play RL, CasADi, NMPC → safe-rl-pe, CasADi series
- Vision and VLM: Video Swin, DeepSeek-VL, YOLO → GSoC 2022, Trend Platform
- LLM systems: LangChain, RAG, guard pipelines, Twilio/Vapi → BotForge, guard-shield
- Infrastructure: AWS ECS/Lambda, AKS, RabbitMQ → NITEX pipeline, GetAudio
- Quantum: Qiskit → QUBO and Grover posts, IBM certificate, Treasure Hunt
- Hardware: MIPS, Verilog → Computer Architecture TA

## Signature interactions

- **Home:** hovering or focusing a role word in the headline dims the other two roles' entries to 40% page-wide. Opacity only, so reduced-motion is unaffected.
- **/builds:** the tag row filters the list and writes `?tag=robotics` to the URL, so the robotics view is shareable.
- **/explains:** each article row has a thin bar proportional to views, drawn once on scroll-in; rows without stats say so.
- **/organises:** roles as bars on one time axis, so concurrent roles (2021: VP, MLSA, IBM Z) visibly overlap. Bars extend on scroll.
- **/years:** focusing a row raises it and shows a one-line note ("2020: bootcamp finished, frontend ruled out"). Arrow keys move rows.
- **/about:** Life 3.0 and Feynman link to the entries they started; hover shows the target date.

## What to cut from the inventory and why

- IUT admission and finances, family circumstances, undergraduate CGPA, faith, only child: privacy, fixed.
- MSc CGPA and HSC GPA: showing one grade after cutting another invites the question; grades stay in the CV.
- IELTS, Hindi, certificates as a list: CV facts, not roles. Certificates appear only in "Studied" on /years. Chinese stays because hsk-vocabs and Kunming are proof.
- AutoStock Insight, Img2JSON: no repo, no proof. Restore when pushed.
- BotForge link until DNS is fixed; unnamed FenloAI client products until links are confirmed.
- India 2018, music, trainings with no wins, the AR/VR essay, the dead Rokomari package link: nothing to show.

## Risks of this approach

- **Organises thins after 2022.** Only Qiskit Advocate and FenloAI are current. Keep it short rather than pad it.
- **Sector-first readers.** A robotics PI wants robotics in one place; the tag filter must sit above the fold on /builds.
- **Classification disputes.** Books are Explains but also built; TA is Explains and Organises. Rule: one `role` per entry, decided once, cross-referenced by tag.
- **Slogan drift.** The three verbs sit in the nav. If copy repeats them, the site reads as a tagline. Say them in full once, on Home.
- **Proof debt.** Task planner has no README, BotForge is down. The plan assumes the GitHub audit lands first.
- **/years on phones.** Four columns do not fit; collapse to one block per year with role markers.
