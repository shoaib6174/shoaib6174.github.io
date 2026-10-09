# Plan B: the workshop

## Thesis

The site opens on the things themselves: two robots, two math books, three article series, a GSoC model with 2,636 downloads, each with a two-sentence note on why it exists. The three roles (builds systems, explains what he learns, organises people) are read off the shelf, not announced.

## Site map

- `/` Home: nine curated objects, the Bench (skills), Ruled out.
- `/work`: every system. Card = what, why it exists, proof link, status.
- `/writing`: books, the Textile Progress review, then 19 articles grouped by series with Medium stats.
- `/record`: the biography as a dated ledger, 2014 to now, one line per entry, each a thing made, led, or stopped. Replaces About.
- `/shelf`: seven books, eleven films and shows, the hsk-vocabs app, two trips. Other people's work and what it led to.
- Footer: email, GitHub, Medium, LinkedIn, lab profile, resume PDF. No contact page.

## Home page section order

1. **Masthead.** Name, "AI and robotics engineer, Dhaka. I build systems, explain what I learn, and organise people."
2. **Now.** `safe-rl-pe` (self-play RL, paper in progress) and `llm_robot_task_planner` (LLM agent driving Nav2, YOLO, arm). One status line each.
3. **Systems.** The two above, Video Swin Transformer in TF2 (GSoC 2022, 2,636 downloads), NITEX order pipeline (20+ brands).
4. **Books.** The 2018 book and the 2022 three-volume series, covers, Rokomari links, "sole author, for class 2 to 12".
5. **Articles.** ROS 2 (2026, 5 posts in 3 days), CasADi (2025, 3.2K views), Qiskit (2023, 6.4K views). Under each: written within days of learning.
6. **People.** TEXBIZ 2017, YSI teams across 50+ universities, Business Club VP, TA 2024, FenloAI co-founder. A dated list.
7. **Bench.** Skills table, below.
8. **Ruled out.** Coding attempts 2014 to 2019 that stopped, frontend (2020 bootcamp), DevOps (GCE), theoretical research (2023), and what each left behind.
9. **Footer.**

## How the story is told

Every object has three fields: *What*, *Why it exists* (two first-person sentences, maximum), *Led to* (a link to another object). The links form one chain: C book 2014, Raspberry Pi attendance system 2019, bootcamp, MicroMasters, DeepPavlov, GSoC 2022, Feynman, GSoC 2023 (selected by QMLHEP, unfunded), NSU MSc, NITEX, TurtleBot3 Patrolling, NIRO Lab. No biography paragraphs anywhere. `/record` lays the same chain out by year, stopped attempts included and marked. Textiles appears once, as the 2017 to 2022 degree: "liked the IPE half, not the textile half".

## How skills are shown

A table built from one Astro content collection, `skills.json`: group, tools, proof, last used.

- Robotics: ROS 2, Nav2, Gazebo, Isaac Sim/Lab, URDF. Proof: `llm_robot_task_planner`, `TurtleBot3-Patrolling`, ROS 2 series.
- RL and control: PettingZoo, self-play, CasADi, NMPC. Proof: `safe-rl-pe`, CasADi series.
- Vision and VLMs: Video Swin, YOLO, DeepSeek-VL. Proof: GSoC repo, NITEX trend platform.
- LLM systems: LangChain, RAG, guard pipelines, Twilio/Vapi. Proof: `guard-shield`, BotForge.
- Edge and infrastructure: Jetson Orin, Xavier NX, AWS ECS/Lambda, AKS. Proof: `GetAudio`, NITEX pipeline.
- Quantum: Qiskit, QUBO, Grover. Proof: `Qiskit-Treasure-Hunt`, `QMLHEP-tasks-2023`, two articles.
- Hardware fundamentals: MIPS, Verilog. Proof: TA 2024.
- Writing and teaching: two books, 19 articles.
- Organising: TEXBIZ, YSI, FenloAI.

A row with no proof link fails the build; proof URLs are link-checked in CI.

## Signature interactions

- **Home:** hovering or tapping an object highlights its neighbours in the chain and draws a thin connector between the cards; the rest dims. Reduced motion: highlight only.
- **Work:** filter chips for role (builds / explains / organises) and period. The grid reflows with View Transitions, instant under reduced motion.
- **Writing:** a dated strip, one tick per article coloured by theme; the bursts after each learning phase show without a sentence saying so. Hover shows title, click scrolls to the post.
- **Record:** a sticky year rail that doubles as a scrubber; dragging it scrolls the ledger.
- **Shelf:** sort toggle, "when I read it" or "country of origin"; the films span seven countries and 1946 to 2023.

## What to cut from the inventory and why

- IUT, finances, family and PhD, undergrad CGPA, faith, only child: excluded by brief.
- MSc CGPA, IELTS, Lean Six Sigma, Google IT Support, PM specialisation, MLSA, IBM Z Ambassador: certificates that produced no object. Resume PDF only.
- Debate runner-up, class representative: one line each in `/record`.
- BotForge link until DNS is fixed; Rokomari package link (404); Img2JSON and AutoStock Insight unless repos are pushed; WebMart.
- Jonvexa, ultrasound generator, LinkedIn scraper: one line, "three client products, not public".
- AR/VR essay, India 2018 trip, sports, music: neither made nor recommended things. One exception: the Barcelona line, as the Shelf's single aside.
- Security robot and CubeSat: one line each under Now, "awaiting funding" and "design phase". No implied outcomes.

## Risks of this approach

- The "why it exists" notes carry all the voice; written flat, the site is a repo list. Write every note before any layout.
- The organiser role has five entries and no photos yet; it looks thin beside Systems until the TEXBIZ photos arrive.
- Three featured objects are not ready: `llm_robot_task_planner` has no README, BotForge is down, `hsk-vocabs` is undeployed. A dead proof link breaks the premise; gate launch on the audit.
- The chain device can become narrative by stealth; hold the two-sentence cap.
- Nine home sections is long; past four laptop screens, move Bench and Ruled out to `/record`.
- Medium view counts go stale; show rounded figures with the date.
