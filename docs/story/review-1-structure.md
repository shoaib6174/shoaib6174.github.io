# Review 1: structure and flow

Pass 1 on the first draft (commit 05ddbd7). Scope: criterion 1 (Structure), criterion 3 (Flow), and the hard-fail list. Language, wording, completeness, honesty, and reader test are left to the other reviewers, except where a hard fail forced a note.

Sources read in order: `evaluation-guide.md`, `portrayal.md`, `life-inventory.md`, then `home.md`, all fifteen `work/*.md`, all twenty-two `journey/*.md`, `skills.json`, and for the hard-fail checks also `articles.json`, `books.json`, `papers.json`, `shelf.json`, plus `docs/github-audit.md` where the inventory points to it for repositories. No pages exist yet under `src/pages/`, so the home section order in the brief (masthead, now, three roles, selected work, skills, writing, route, off the clock) is what was reviewed.

## Scores

| Criterion | Score | One line |
|---|---|---|
| 1. Structure | 3 | Who and what land in the first screen; why does not. The home route has eight entries, not six, and the wrong eight. Three sections say the task planner. |
| 3. Flow | 3 | Decisions are mostly stated as decisions and the eliminations read well. Six chronology slips and three month-level tenure dates break the "pull, not push" framing. |
| Hard fails | present | Two factual mismatches, one unconfirmed claim, a banned word in link labels, a block of unsourced repo-derived numbers, and seven unverified or placeholder links. All fixable without rewriting anything. |

The page does not pass this round. Nothing below needs a rewrite; every fix is a line or less.

## Hard fails

### HF1. Claim not in the inventory: book count contradicts itself
`/home/niro-1/Codes/shoaib6174.github.io/src/content/home.md`, roles, explain:

> "Two math books and a three-volume olympiad series for school students."

The inventory has one 2018 book and one three-volume 2022 series. `masthead2` on the same page says "four math books". Two plus three is five. Replace with:

> "A math book and a three-volume olympiad series for school students."

### HF2. Number not in the inventory: "five years"
`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/security-robot.md`, `why`:

> "I spent five years in a textile engineering school."

Inventory: Jan 2017 to Dec 2022. That is six years, and no version of this number helps the reader. Replace with:

> "I did my degree at a textile engineering school."

### HF3. Unconfirmed claim stated as fact: the drone
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2026-now.md`, `result`:

> "a security robot waits for funding; a fixed-wing payload drone is planned."

The inventory marks the drone `[?] confirm`. Delete the drone clause until it is confirmed:

> "a security robot waits for funding."

### HF4. Banned word "journey" in link labels, and as the page name
The guide lists "journey" as pitch language. It appears as a label in two places and is the nav name of the page itself.

`/home/niro-1/Codes/shoaib6174.github.io/src/content/work/attendance-pi-2019.md`, `links[0].label`:
> "2019 on the Journey page"
Replace with: `"The 2019 entry"`.

Same file, body: "the Journey entry has the account." Replace with: "the 2019 entry has the account."

`/home/niro-1/Codes/shoaib6174.github.io/src/content/skills.json`, operations group, `proof[0].label`:
> "2020 on the Journey page"
Replace with: `"The 2020 entry"`.

The page name is the authors' choice and they may exempt it, but the home page already has a section called "route". Naming the page **Route** removes the banned word and makes the home section a preview of the page, which is the structural relationship anyway. Recommended, not required for this pass.

### HF5. Numbers and technical claims with no inventory source
These come from the repositories, not from `life-inventory.md`. The guide is literal: a number not in the inventory is a hard fail. The smallest fix is not to cut them, since they are exactly the evidence the portrayal wants (rule 3, "describe research by its evidence"). The smallest fix is an appendix to the inventory, one line per fact with the repo file it comes from, so each number has a source. Until that appendix exists, every item below is unsourced.

| File | Quoted | Source needed |
|---|---|---|
| `home.md` (now), `journey/2026-now.md`, `work/llm-robot-task-planner.md` | "four of five demo scenarios pass" | `llm_robot_task_planner/docs/demo_results.md` (the audit names the file but not the count) |
| `work/llm-robot-task-planner.md` | "fails on localisation drift after repeated rotation scans, which is a known AMCL limitation" | same |
| `work/safe-rl-pe.md` | "past ten million steps", "Three mechanisms", "capture rate falls to zero", "the evader side has an exploitability gap", "unicycle pursuer and evader" | `safe-rl-pe` README or decision log |
| `work/nitex-extraction-pipeline.md` | "I tested four OCR services", "Azure Document Intelligence", "Google Cloud Vision", "Amazon Textract", "Tesseract", "Playwright" | Shoaib's confirmation; the inventory names only "PDF to JSON, AWS ECS/Fargate/Lambda" |
| `work/nitex-trend-platform.md` | "Nvidia Triton", "Elasticsearch", "instaloader" | same |
| `work/turtlebot3-patrolling.md` | "patrols four waypoints" | repo README |
| `work/qiskit-treasure-hunt.md` | "in a hundred plays" | repo README |
| `work/guard-shield.md` | "degrades in three levels", all guard names | repo README (the audit confirms the repo exists and its three headline features only) |
| `work/botforge.md` | "knowledge-gap flag", "real-time transcription, sentiment, and escalation", "Tracing and evaluation sit underneath" | `fenlo-bot` README |
| `work/getaudio.md` | "JWT", "Gateway, authentication, and converter services" | audit line 14 confirms "JWT gateway"; the rest from the repo |
| `work/attendance-pi-2019.md` | stack "OpenCV" | not in inventory; inventory says only "facial-recognition attendance system on a Raspberry Pi" |
| `work/hsk-vocabs.md`, `work/guard-shield.md`, `work/qiskit-treasure-hunt.md` | the whole items | Present in `github-audit.md` (lines 15 to 17), absent from the inventory. Add one line each to the inventory. |

Also `home.md` masthead2 and skills.json: "twenty-one technical articles". The inventory says "19 articles" on Medium; `articles.json` reaches 21 by adding the LinkedIn essay and the No-Code ML GitHub series, both of which the inventory lists. Supported, but note that one of the 21 is an essay and one is a GitHub repo, so "technical articles" is slightly loose. Not a fail.

### HF6. Unverified, placeholder, or at-risk links
The inventory's link check covers fenloai.com, two GitHub repos, qubitbyqubit, womanium, the four Rokomari pages, the Medium feed URLs, the Kaggle page, and nirolab.github.io root. Everything else below is unverified.

| URL | Where | Problem | Smallest fix |
|---|---|---|---|
| `https://nirolab.github.io/projects` | `work/nsu-ai-sat.md`, `work/safe-rl-pe.md`, `work/security-robot.md` | Not in the link check. The site is an SPA; `/people` 404s to curl. | Verify in a browser, or point all three at `https://nirolab.github.io/` which is verified. |
| `https://www.linkedin.com/company/nitex` | `work/nitex-extraction-pipeline.md`, `work/nitex-trend-platform.md` | Unverified. The schema requires a link for `shipped`, so it cannot simply be dropped. | Verify once. |
| `https://www.linkedin.com/pulse/rise-arvr-consumer-tech-wave-innovation-mohammad-shoaib` | `articles.json`, xr-essay | Unverified. | Verify once. |
| `https://medium.com/@shoaib6174` (profile) | `articles.json`: algo-astar, algo-dijkstra, algo-kruskal, qiskit-grover, azure-ds | Placeholder. Five articles link to the profile, not the article. The inventory lists these five as needing URLs, and notes the Azure DS post was mis-linked on the old site. | Recover the five URLs before build. If any cannot be found, remove that entry rather than ship a profile link labelled as the article. |
| `https://github.com/shoaib6174/fenlo-bot` | `work/botforge.md` | Exists (audit). The audit's open action is "decide visibility" because it is client-facing product source. If it goes private the only link on this item breaks and the schema fails. | Decide visibility first. The portrayal's rule that BotForge is not linked until DNS is fixed is respected: the product URL is not used. |
| Nine other `github.com/shoaib6174/*` repos | `work/`, `journey/`, `skills.json` | Not in the inventory's link check but reviewed by the audit ("47 public repos reviewed by README, file tree..."). | Acceptable. Add them to the inventory link check so the next reviewer does not re-flag. |

### Not found: private items, trait adjectives, "I am a X who Y"
Checked all content for IUT, CGPA, family, faith, only child: none. Checked for passion, spark, chapter, story, relentless, driven, dynamic, leverage, empower, seamless, cutting-edge, next-generation: none. Checked for curious, broad, entrepreneurial, analytical, persistent, dedicated applied to him: none ("entrepreneurship network" in 2018-ysi describes YSI, not him). Good.

One near miss, handled under Flow F7: `journey/2017-butex.md` "my grades in those courses showed it" points at the undergraduate CGPA without stating it.

## Criterion 1: Structure (3)

### S1. The first screen answers who and what, not why
`home.md`:

> masthead: "Research assistant at NSU Intelligent Robotics Lab, where I put language and vision-language models on robots. Co-founder of FenloAI, where three of us build AI systems for small businesses on contract."
> masthead2: "I have written four math books for school students and twenty-one technical articles."

Who: yes. What: yes, twice. Why: nowhere until the build card ("I prefer building to theory") three sections down. `masthead2` currently repeats what the explain card says, so it is free to carry the why. Replace `masthead2` with:

> "Robots are where an AI system has to work end to end in the physical world, and that is what I wanted to build before university. Four math books for school students and twenty-one technical articles along the way."

Both facts are in the inventory ("Back to the pre-university goal"; the 2025 lab entry already says "since before university").

### S2. The route is eight entries, not six, and the wrong eight
Portrayal rule 1: "gives the route in six lines or fewer." Entries with `onRoute: true`: 2014-c-book, 2017-butex, 2020-take-it-seriously, 2022-gsoc, 2023-gsoc-2023, 2023-nitex, 2025-niro-lab, 2026-now. Eight.

Two of them should not be on the route and one that should is missing:
- `journey/2023-gsoc-2023.md` is a setback. Portrayal rule 5: setbacks get the same format as everything else, never emphasis. Putting it on the home page is emphasis. Set `onRoute: false`.
- `journey/2026-now.md` duplicates the home "now" section word for word. Set `onRoute: false`; it stays as the last Journey entry.
- `journey/2023-nsu-msc.md` is the theory elimination, the one decision the portrayal says most needs to be visible as a decision (rule 4). It has `onRoute: false`. Set `onRoute: true`.
- `journey/2014-c-book.md` is a prologue, not a step after 2020 that "reduced the search space". Set `onRoute: false`. It stays on the Journey page and the 2022 GSoC entry still calls back to it.

Result, six lines: 2017 BUTEX and Life 3.0, 2020 the eliminations, 2022 GSoC, 2023 theory ruled out, 2023 NITEX, 2025 the lab. That is the convergence the portrayal describes.

### S3. The task planner is said three times on Home
"Now" item 1, the build card's first clause, and selected work (featured) all describe the LLM task planner and the Jetson perception work. Criterion 1: "Is every section earning its place?" The build card is the one that can give ground, because "now" is live and selected work is linked. Also removes "startup", which the portrayal's wording table says to avoid. Replace the build card `text` with:

> "Robot stacks, perception on the boards the robots carry, two data platforms for a fashion company, products for clients. I prefer building to theory, and found that out by trying theory for a year."

### S4. The organise card leads with history, not current evidence
Portrayal rule 8: "the home page says the habit once with the current evidence (FenloAI co-founder, Qiskit Advocate) and links to the history." `home.md` organise card:

> "A university business club from its first year to vice president, a national competition, campus teams across fifty universities, and now a company with two co-founders."

Reverse it and add the Advocate role, which is otherwise absent from Home:

> "A company with two co-founders, and a Qiskit Advocate role since 2023. Before that, a university business club from its first year to vice president, a national competition, and campus teams across fifty universities."

### S5. The route sits below skills and writing
Order given: masthead, now, three roles, selected work, skills, writing, route, off the clock. The build card ends on "found that out by trying theory for a year", which is a question the route answers, and then four sections intervene. Recommend: masthead, now, three roles, route, selected work, skills, writing, off the clock. This is a page-assembly change, not a copy change, so it is a recommendation for the builder rather than an edit to a content file.

### S6. Selected work has seven featured items; RL sits below business LLM work
`featured: true` on: llm-robot-task-planner (1), vlm-perception-edge (2), nitex-trend-platform (3), botforge (4), safe-rl-pe (5), video-swin-tf2 (6), getaudio (7).

Portrayal, "The three roles, weighted": agentic AI on robots, then LLM systems for businesses, then earlier ML and infrastructure. And "Reinforcement learning work ... is present and credited but second", that is, second to agentic robots, not fifth behind a trend platform and a chatbot. A lab PI (reader test) should hit the 736-test repo before the chatbot. Edits:
- `work/safe-rl-pe.md`: `order: 3`
- `work/nitex-trend-platform.md`: `order: 4`
- `work/botforge.md`: `order: 5`
- `work/getaudio.md`: `featured: false` (the cluster is not running; it still appears on Work). Six featured items on Home.

### S7. Three roles: visible, not labelled
Titles are first-person sentences ("I build systems.", "I write down what I learn.", "I bring people together."), not nouns like Builder or Organiser. That passes. Two cautions for the builder, not the copy: equal-width cards would turn the three into the tagline the portrayal warns about, so the build card should be visibly larger; and the Journey `threads` tags (build/explain/organise/studied), if rendered as badges, would label the framework on that page.

### S8. Duplication between home "now" and `journey/2026-now.md`
`journey/2026-now.md` `result` restates the five "now" items in one sentence. Two places to update each quarter. Low priority; after S2 it is off the route, so the duplication is only visible to a reader who reaches the end of Journey, where a closing status line is fine. Leave it, but keep it in sync.

## Criterion 3: Flow (3)

### F1. 2022 quantum entry lists 2023 outcomes under 2022
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2022-quantum.md`, `result`:

> "IBM Certified Associate Developer in Quantum Computation, 2023. Qiskit Advocate, 2023 to now. The Womanium quantum program, 2023. Articles on QUBO, Grover's algorithm, and the certification. A card game for teaching gates."

Every item is 2023, and the next entry (`2023-gsoc-2023.md`) then says "Everything I did in quantum computing in early 2023, the certification, the Advocate role, the tasks, was aimed at this application", referring back to things the reader saw filed under 2022. Make the chronology explicit inside the entry:

> "A goal: a PhD in quantum machine learning. The next year was built around it: IBM Certified Associate Developer in Quantum Computation, Qiskit Advocate from 2023 to now, the Womanium program, articles on QUBO, Grover's algorithm, and the certification, and a card game for teaching gates."

And since this entry says "I read the Feynman memoir during Google Summer of Code", it must sort after `2022-gsoc.md`. Both have `date: "2022"`. Set this one to `date: "2022-08"` so the order is fixed by data, not by filename.

### F2. 2017 BUTEX: `startedBy` misattributes the decision
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2017-butex.md`:

> startedBy: "Life 3.0, Max Tegmark"
> chose: "The IPE track at Bangladesh University of Textiles..."

Read together, the book started the choice of BUTEX. It did not; it was read in first year and started the interest in AI, which the body says correctly. The curiosity device (portrayal traits table: "the Journey entries name the book or paper that started each one") wants the book attached to what it actually started. Delete `startedBy` from this entry. The body sentence "In first year I read *Life 3.0*. That is where the interest in AI started." carries it. (Shelf also carries it: "Where the interest in AI started, 2017.")

### F3. 2017 BUTEX: the failed attempts appear twice
Same file. `result`:
> "Tried JavaScript, Java, C++, and competitive programming along the way, then CS50 after reading Life 3.0. None of it held yet."

Body, second paragraph:
> "Between 2017 and 2019 I tried to learn JavaScript, Java, C++, competitive programming, and then CS50. Each attempt stopped after a few weeks."

Portrayal rule 5: one line, same format as everything else. The `result` line is the one that follows the rule ("None of it held yet" is good). Cut the body's two sentences, leaving the second paragraph as:

> "In first year I read *Life 3.0*. That is where the interest in AI started."

### F4. 2020: the DevOps elimination is attributed to the wrong certificate
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2020-take-it-seriously.md`, `ruledOut`:

> "DevOps, after Google's IT Support certificate and the Compute Engine specialisation."

The body (and the inventory) say the IT Support certificate "filled some of the gaps" and the Compute Engine specialisation is what ruled out DevOps. Replace with:

> "DevOps, after Google's Compute Engine specialisation."

### F5. Month-level tenure dates on three entries
Portrayal rule 2: "dated by year, not month." The month spans are the "short tenures" objection written out.

`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2021-deeppavlov.md`, `result`:
> "...x-means, and DBSCAN. Four months, December 2021 to April 2022."
Replace with: `"Dialogue graphs from the MultiWOZ dataset using tf-idf, topic modeling, x-means, and DBSCAN."`
The `date: "2021-12"` field already places it.

`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2023-nitex.md`, body:
> "The first job where the thing I built ran for a business every day. December 2023 to July 2024."
Replace with: `"The first job where the thing I built ran for a business every day."`
"Two platforms in seven months" in `result` stays; the inventory treats it as the achievement, and the next entry states the pull that ended it.

`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2022-gsoc.md`, body:
> "May to September 2022, mentored by Luiz Gustavo Martins and Sayak Paul."
Replace with: `"Mentored by Luiz Gustavo Martins and Sayak Paul."`
Optional: GSoC is fixed-term by definition, so this one does less harm. Included for consistency.

### F6. 2021 DeepPavlov: a decision with no `chose`
Same file. The first research role is a decision he made, and it is the only career entry without a `chose`. Add:

> chose: "A research internship in natural language processing, my first research role."

### F7. 2017 BUTEX: the textile elimination reads as a failure
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2017-butex.md`, `ruledOut`:

> "The textile half of the degree. Yarn, fabric, wet processing, apparel. Not the engineering I had wanted, and my grades in those courses showed it."

Criterion 3: eliminations read as useful outcomes, not failures. The last clause is what happened to him, not what he chose, and it points at the one number the hard-fail list keeps private. The 2020 entry does not depend on it. Replace with:

> "The textile half of the degree. Yarn, fabric, wet processing, apparel. Not the engineering I had wanted."

### F8. 2024: "Then" puts the TurtleBot3 project after the TA semester
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2024-back-to-nsu.md`, `result`:

> "...MIPS, assembly, Verilog, CPU design. Then a robotics course with Dr. Shahnewaz Siddique and the TurtleBot3 project."

Inventory: TurtleBot3 Patrolling is April 2024; the TA semester is August to December 2024. "Then" reverses them. Replace "Then a robotics course" with:

> "And a robotics course with Dr. Shahnewaz Siddique and the TurtleBot3 project."

### F9. 2024 Kunming: a 2026 project in a 2024 result
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2024-kunming.md`, `result`:

> "Started learning Chinese. HSK 1 passed. Built a vocabulary trainer for HSK 2."

`work/hsk-vocabs.md` is dated 2026. Replace with:

> "Started learning Chinese. HSK 1 passed."

Keep the `proof` link but relabel it `"HSK vocabulary trainer, 2026"` so the date is visible.

### F10. 2025 Annapurna: the 2018 India trip is told in 2025
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2025-annapurna.md`, body:

> "Nepal, May 2025. Solo, no guide, to base camp and back. The India trip in 2018, Shimla, Manali, Agra, Delhi, Kolkata, was the first time abroad."

Shelf already lists the India trip with its year. Delete the last sentence. And the entry has no `chose` although going alone was the decision; add:

> chose: "To go alone, without a guide."

### F11. 2025 FenloAI: "alongside the lab" before the lab entry
`/home/niro-1/Codes/shoaib6174.github.io/src/content/journey/2025-fenloai.md` has `date: "2025"` and sorts before `2025-niro-lab.md` (`2025-06`), yet its `chose` says "alongside the lab". Either FenloAI began after June 2025, in which case set `date` to the actual month (for example `"2025-07"`) so it follows the lab entry, or it began earlier, in which case replace "alongside the lab" with "alongside the MSc and then the lab". Shoaib knows which; the inventory does not say.

### F12. What flows well
The GSoC 2023 entry follows portrayal rule 5 almost exactly and the `onRoute` fix (S2) is the only change it needs. The 2023 NSU MSc entry states the theory decision in one sentence and stops. 2020 reads as three experiments with outcomes. The 2022 GSoC body ties back to 2014. The lab entry ties back to before university. These are the spine; see "Keep" below.

## Keep: three things that work and must not be changed

1. `journey/2020-take-it-seriously.md`, the whole entry, especially:
   > "The cloud specialisation was there because DevOps was in demand; finishing it told me DevOps was not for me either."
   > "The MicroMasters was the one that mattered. Five courses over more than a year, a mathematics foundation I had never had, and one lecture that pointed the whole thing at machine learning."
   This is the eliminations-as-experiments device from the traits table, done right. (The semicolon is the language reviewer's call, not mine.)

2. `journey/2023-nsu-msc.md`, `ruledOut` and `result`:
   > "Theoretical research, after one semester. I had enjoyed learning quantum computing. Doing the research, I found I wanted to build systems instead."
   > "Stayed for the degree. Left the quantum track."
   One decision, no apology, exactly as portrayal rule 4 asks.

3. The three callback sentences that make the Journey a single line rather than a list:
   > `journey/2022-gsoc.md`: "Eight years after the C book, this was the first time something I built was used by people I had never met."
   > `journey/2025-fenloai.md`: "Research alone does not keep me in contact with people who need something built by Friday."
   > `journey/2025-niro-lab.md`: "The work I had wanted to do since before university, by a long route."

Also keep as is: the masthead's first sentence and its FenloAI sentence, which match the portrayal's own wording; the home "now" block with "Learning: Chinese toward HSK 2, optimal control, SLAM" as the live curiosity signal; and the skills order on Home, which already follows the portrayal's weighting.

## Noticed, outside this review's scope
- "startup" appears in `home.md` (build card, fixed by S3) and `journey/2023-nitex.md` `chose` ("A fashion-tech startup"). The portrayal's wording table says avoid "startup" and the inventory itself uses it for NITEX. The language reviewer should decide; "A fashion-tech company" is the obvious swap.
- `journey/2019-mobile-cover.md` says "Later published." and `papers.json` says "Link to follow." The honesty reviewer should hold this until the link arrives.
- `journey/2019-attendance.md` has no `chose`. Building a friend's project at the last minute was a choice; one line would match the format.

## Edit checklist for the author

Content files, in file order:
- `home.md`: HF1 (explain card), S1 (masthead2), S3 (build card), S4 (organise card).
- `journey/2014-c-book.md`: S2, `onRoute: false`.
- `journey/2017-butex.md`: F2 (delete `startedBy`), F3 (cut two body sentences), F7 (`ruledOut`).
- `journey/2020-take-it-seriously.md`: F4 (`ruledOut`).
- `journey/2021-deeppavlov.md`: F5 (`result`), F6 (add `chose`).
- `journey/2022-gsoc.md`: F5 (body, optional).
- `journey/2022-quantum.md`: F1 (`result`, `date: "2022-08"`).
- `journey/2023-gsoc-2023.md`: S2, `onRoute: false`.
- `journey/2023-nsu-msc.md`: S2, `onRoute: true`.
- `journey/2023-nitex.md`: F5 (body).
- `journey/2024-back-to-nsu.md`: F8 (`result`).
- `journey/2024-kunming.md`: F9 (`result`, proof label).
- `journey/2025-annapurna.md`: F10 (body, add `chose`).
- `journey/2025-fenloai.md`: F11 (date or `chose`, needs Shoaib).
- `journey/2026-now.md`: HF3 (drone), S2 `onRoute: false`.
- `work/attendance-pi-2019.md`: HF4 (label and body).
- `work/botforge.md`: S6 (`order: 5`), HF6 (repo visibility).
- `work/getaudio.md`: S6 (`featured: false`).
- `work/nitex-trend-platform.md`: S6 (`order: 4`).
- `work/nsu-ai-sat.md`, `work/safe-rl-pe.md`, `work/security-robot.md`: HF6 (nirolab link); `safe-rl-pe.md` also S6 (`order: 3`); `security-robot.md` also HF2.
- `skills.json`: HF4 (operations proof label).
- `articles.json`: HF6 (five placeholder URLs, LinkedIn URL).

Outside content:
- `docs/life-inventory.md`: HF5, add a "Repo-derived facts" appendix with one line and a source per item; add the nine audit-reviewed repos and the two LinkedIn URLs to the link check.
- Page assembly: S5 (route after roles), S7 (build card larger; threads not rendered as badges on Journey).
- Nav: HF4, consider renaming Journey to Route.
