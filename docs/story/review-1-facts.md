# Review 1: facts, completeness, honesty, privacy, reader test

Pass 1 on the first draft of `src/content/` (commit 05ddbd7), 2026-10-09. Scope: criteria 5, 6, 7 and the hard-fail list of `docs/story/evaluation-guide.md`. Source of truth: `docs/life-inventory.md` including the addendum "Numbers sourced from repositories (verified 2026-10-09)" that landed during this pass, and `docs/github-audit.md`, which the inventory delegates to for repositories. Structure, language, flow and wording are left to the other two reviewers.

Method: every claim, number, date, name and link in home.md, work/*, journey/* and the five JSON files was traced to a line in the inventory or the audit. Internal hrefs were checked against the actual slugs. All 39 external URLs were fetched with curl; results are in the link table, with the caveat that Medium (403) and Rokomari (404) block curl while rendering in a browser, as the inventory's own check notes for nirolab.github.io.

## Scores

| Criterion | Score | One line |
|---|---|---|
| 5. Completeness | 4 | Every facet is present. The four kept items are present. Five small inventory items are missing (listed below). |
| 6. Honesty and proportion | 3 | Statuses are honest everywhere. But one sentence invents a fifth book, the FenloAI headcount contradicts the inventory, and three durations are wrong or against the portrayal's tenure rule. |
| 7. Reader test | 4 | Recruiter and book reader pass. PI passes on the RL work and fails on the two papers, which have no venue link. |
| Hard-fail list | fail | Eleven items, none hard to fix. Privacy is clean. |

## Hard fails

Each quotes the text, gives the file, and the smallest replacement.

### HF-1. A number not in the inventory: "Two math books"
`src/content/home.md`, roles.explain:
> "Two math books and a three-volume olympiad series for school students."

The inventory has one book (2018) and one three-volume series (2022). That is four volumes, as the masthead says ("four math books"). This sentence makes five.

Replace with:
> "A math book for classes 8 to 12 and a three-volume olympiad series for classes 2 to 7."

### HF-2. FenloAI headcount contradicts the inventory
`src/content/home.md`, masthead: "where three of us build AI systems"; roles.organise: "a company with two co-founders".
`src/content/journey/2025-fenloai.md`, chose: "Contract AI work with two co-founders"; body: "Three of us build automation".

The inventory says "Two co-founders" and then asks "Who is the other co-founder" (singular), which reads as two people in total: Shoaib and one other. The portrayal says "three of us". These cannot both be right. Shoaib must confirm the number before launch.

If two people in total, replace with: masthead "where two of us build AI systems for small businesses on contract"; roles.organise "and now a company with a co-founder"; journey chose "Contract AI work with a co-founder, alongside the lab"; journey body "Two of us build automation, custom software, and AI agents". If three, correct the inventory's FenloAI section to "Three co-founders" and the copy stands.

### HF-3. "five years" at BUTEX
`src/content/work/security-robot.md`, why:
> "I spent five years in a textile engineering school."

Inventory: Jan 2017 to Dec 2022. That is six years. Replace with:
> "I did my undergraduate degree at a textile engineering university."

### HF-4. "trying theory for a year"
`src/content/home.md`, roles.build:
> "I prefer building to theory, and found that out by trying theory for a year."

The inventory gives one semester of quantum research at NSU (Jul to Dec 2023). The portrayal's rule for point 4 is one sentence, no elaboration. Replace with:
> "I prefer building to theory, and found that out by doing a semester of quantum research."

### HF-5. "four waypoints"
`src/content/work/turtlebot3-patrolling.md`, summary:
> "A TurtleBot3 patrols four waypoints in Gazebo"

No source. Replace "four waypoints" with "a loop of waypoints", or add the count to the inventory's repository-sourced numbers after checking the repo.

### HF-6. Years without a source in shelf.json
`src/content/shelf.json`: `"year": 2025` on Sore, and `2007`, `1994`, `2011`, `2014`, `2013` on The Big Bang Theory, Friends, Person of Interest, Silicon Valley, Attack on Titan. The inventory gives no year for any of these. Either add a line "Series and anime first-air years, checked 2026-10-09" to the inventory with the six values, or delete the `year` key from those six entries. The seven film years match the inventory.

### HF-7. A read count more precise than its source
`src/content/articles.json`, qiskit-cert: `"reads": 1920`. Inventory: 1.9K. Replace with `1900`. All other view and read figures match the inventory's rounding.

### HF-8. Unverified links
The inventory's Link check verified fenloai.com, two GitHub repos (TurtleBot3-Patrolling, GetAudio), qubitbyqubit.org, womanium.org and the four Rokomari book pages. The content links to these others:

| URL | Where | Status today (curl) | Action |
|---|---|---|---|
| https://nirolab.github.io/projects | nsu-ai-sat.md, safe-rl-pe.md, security-robot.md | 404 | Same single-page-app behaviour as /people. Open in a browser and confirm the three projects appear, or link https://nirolab.github.io/ as vlm-perception-edge.md does. |
| https://www.linkedin.com/company/nitex | nitex-extraction-pipeline.md, nitex-trend-platform.md | 200 | LinkedIn serves a login wall to most visitors. Prefer linking the Journey entry: `{ label: "NITEX, 2023 to 2024", href: "/journey/2023-nitex/" }`. |
| https://www.linkedin.com/pulse/rise-arvr-consumer-tech-wave-innovation-mohammad-shoaib | articles.json xr-essay | 200 | Not in the inventory. Confirm in a browser that it is the right post and add it to the article URL list. |
| https://www.kaggle.com/models/kaggle/video-swin-transformer | video-swin-tf2.md, 2022-gsoc.md | 200 | In the inventory body, not in the Link check list. Add it. |
| 11 GitHub repos: fenlo-bot, guard-shield, hsk-vocabs, llm_robot_task_planner, Qiskit-Treasure-Hunt, safe-rl-pe, GSOC-22-Video-Swin-Transformers, QMLHEP-tasks-2023, MultiWOZ-Intent-Classification, MultiWOZ-Clustering, No-Code-ML | work/*, journey/*, skills.json, articles.json | all 200 | Existence confirmed by the audit and by curl. Add them to the Link check list so the rule is satisfied on paper. fenlo-bot has an open visibility decision in the audit; if it goes private, botforge.md loses its only link and fails the schema. |

Medium URLs (403 to curl) come from the RSS feed on 2026-10-09 and Rokomari (404 to curl) was verified in a browser the same day; both are bot protection, not dead links.

### HF-9. A name expansion not in the inventory
`src/content/journey/2018-ysi.md`, body:
> "Young Sustainable Impact Bangladesh ran campus teams"

The inventory only ever says "YSI Bangladesh". Replace with "YSI Bangladesh ran campus teams at universities across the country." or confirm the expansion with Shoaib and add it to the inventory.

### HF-10. An unconfirmed item stated as fact
`src/content/journey/2026-now.md`, result:
> "a fixed-wing payload drone is planned"

Inventory: "Planned. Likely the lab's Agriculture Monitoring UAV. `[?]` confirm". Delete the clause until confirmed. The sentence then reads "...a security robot waits for funding. FenloAI: client work continues."

### HF-11. Placeholder text that will render
`src/content/papers.json`, mobile-cover-2019: `"role": "Team project. Link to follow."` and `"venue": "Product Design course project, BUTEX, later published"`.

"Link to follow" is a note to the author, not copy. Replace role with `"Team project from the Product Design course."`. The venue field needs the actual journal or conference name from Shoaib; until then `"venue": "Published; venue to be added"` is at least honest about what is missing. The same applies to the `imageSlots` entry "Link: the mobile cover publication" in `journey/2019-mobile-cover.md`, which is fine as a slot label as long as slots never render as text.

## Unsupported claims

Not numbers, and not false as far as I can tell, but not traceable to the inventory or the audit. Most come from repository READMEs. The fix in every case is the same: either add a line to the inventory's "Numbers sourced from repositories" section naming the file that supports it, or trim the copy to what the inventory says. I give the trim where it is short.

| File | Claim | Nearest source | Fix |
|---|---|---|---|
| `work/botforge.md` | "answers with citations and a knowledge-gap flag", "real-time transcription, sentiment, and escalation", "Tracing and evaluation sit underneath", stack FastAPI and PostgreSQL | Inventory names only RAGChat, VoiceBot Pro (Twilio/Vapi), WhatsApp, Telegram, web widget, Zapier. Audit: "Good README." | Source from the README into the inventory, or cut the body to: "Built at FenloAI for a client. RAGChat answers questions from the client's documents. VoiceBot Pro takes phone calls over Twilio and Vapi. OmniBot puts WhatsApp, Telegram, a web widget, and Zapier into one inbox." |
| `work/botforge.md` | why: "Small businesses kept asking FenloAI for the same three things" | Inventory: "built for a client" | "A FenloAI client needed three things: answers from their documents, a phone agent, and one inbox for every channel they used. BotForge is those three on one backend." |
| `work/guard-shield.md` | Entire stack and body beyond "ordered guard pipeline, circuit breakers, graceful degradation": Hugging Face classifiers, spaCy, token bucket, guard order, "three levels", "production hardening is in progress"; why: "Every LLM product I built for a client needed the same input checks" | Audit, one line. Not in inventory at all. | Add GuardShield to inventory facet 1 with the README as source. The project itself is a legitimate 2026 repo per the audit. |
| `work/hsk-vocabs.md` | Vite, Tailwind, "toggleable pinyin", "English-first option", "multiple-choice quiz with scoring" | Audit: "HSK 1–2 vocabulary trainer in React/TS", "It is a Vite app." | Add the feature list to the inventory from the README, or cut the body to "Word list, flashcards, and quizzes for HSK 1 and 2. Built for my own study toward HSK 2." |
| `work/nitex-extraction-pipeline.md` | "I tested four OCR services"; stack Azure Document Intelligence, Google Cloud Vision, Amazon Textract, Tesseract, Playwright, Streamlit; "The second NITEX platform" | Inventory: "PDF to JSON, AWS ECS/Fargate/Lambda" | The OCR comparison is a good detail and worth keeping if Shoaib confirms it; add to inventory. Replace "The second NITEX platform." with "One of two platforms I built at NITEX." since the inventory does not order them. |
| `work/nitex-trend-platform.md` | Nvidia Triton, FastAPI, PostgreSQL, Elasticsearch, instaloader; "NITEX wanted to know what was trending before buyers did" | Inventory: "Instagram scraping, locally deployed DeepSeek-VL attribute tagging, trend analytics" | Confirm stack with Shoaib and add to inventory. Replace the why's first sentence with "NITEX wanted trend signals from what people were actually wearing in photos." |
| `work/safe-rl-pe.md` | "unicycle pursuer and evader with obstacles and a limited field of view", the three named mechanisms, "forced role switching", "masking curriculum that anneals full observability away", "fresh best-response agents against frozen snapshots", "the evader side has an exploitability gap" | Inventory addendum covers 10 million steps, capture rate 0% without the visibility reward, 736+ tests, 40+ runs, two GPU machines. The rest is presumably the same README. | Extend the addendum to name the README sections for these. Separately, see the proportion note below about publishing pre-submission findings. |
| `work/video-swin-tf2.md` | "fine-tuning notebooks on UCF101, and a cosine-decay-with-warm-up learning rate schedule" | Not in inventory or audit | Add from the repo README, or cut to "model implementations, a weight-conversion notebook from the PyTorch checkpoints, and fine-tuning notebooks." |
| `work/getaudio.md` | "The cluster is no longer running"; "Gateway, authentication, and converter services" | Audit: "RabbitMQ, JWT gateway, k8s auto-scaling" | Confirm with Shoaib; the sentence is useful honesty if true. |
| `work/attendance-pi-2019.md` | stack "OpenCV"; "No repository survives" | Inventory: "`[?]` photo or repo?" | Shoaib must answer the `[?]`. Until then delete "OpenCV" and replace the last sentence with "The Journey entry has the account." |
| `work/qiskit-treasure-hunt.md` | why: "Students could recite the gates and still not see what they did to a state"; `years: "2023"` | Audit: one line, undated. Inventory addendum: "a hundred plays". | Replace why with "A map you navigate with gate cards makes a quantum state visible in a way the matrices do not." Confirm the year from the repo's first commit. |
| `work/llm-robot-task-planner.md` | "bring the red cube from room A to room B", "searches the other room and replans", "Phase 2 is the physical JetRover", `years: "2026"` | Inventory addendum covers four of five, AMCL drift, qwen2.5 via Ollama. | Add the scenario description and the Phase 2 plan to the addendum from `docs/demo_results.md` and the PRD. The home.md "now" line "Next, the physical JetRover" depends on the same source. |
| `journey/2021-deeppavlov.md` | "I also compared LaBSE and BERT on intent classification and tested both on Russian translations without retraining." | Not in inventory or audit | Add from the MultiWOZ-Intent-Classification README, or delete the sentence. |
| `journey/2017-butex.md` | "Each attempt stopped after a few weeks." | Inventory: "fizzled" | Replace with "None of it held." The frontmatter already says this; the body need not add a duration. |
| `journey/2025-niro-lab.md` | "The work I had wanted to do since before university" | Inventory: "Candidate story spine ... Worth testing" and `[?]` on the robotics group | The claim rests on the IUT story, which is private. It is probably true and it hides nothing private. Shoaib should confirm it in one line in the inventory under "Why robots" so the sentence has a source. |
| `skills.json` | tools "MoveIt", "ros2_control", "VQE and QAOA", "CUDA", "QSVM" | No project in the inventory uses MoveIt, ros2_control or VQE. QSVM has the QOSF repos in the audit but no proof link in the row. CUDA is in the safe-rl-pe stack. | Delete MoveIt, ros2_control and VQE unless Shoaib names a repo. For QSVM, either add `{ "label": "QSVM feature-map study", "href": "https://github.com/shoaib6174/QOSF-Cohort-7" }` to the quantum proof (after the audit's merge and rename lands) or drop the tool. |
| `home.md` masthead2, `skills.json` writing row | "twenty-one technical articles" | Inventory: "19 articles" on Medium. articles.json has 21 entries: 19 Medium, one LinkedIn essay, one GitHub blog series. | Add to the inventory's Articles section: "21 pieces listed on the site: 19 on Medium, the LinkedIn XR essay, the No-Code ML series on GitHub." Or change both to "nineteen articles on Medium". The first is the smaller change. |

## Proportion and honesty notes (criterion 6)

Statuses. Every status is honest. "paper in preparation for CoRL 2026" appears four times and nowhere becomes "published". The CubeSat says "engineering model is next", the security robot "Waiting on funding", GuardShield "production hardening is in progress", BotForge "Built at FenloAI for a client" with no live URL. The two NITEX items are called client work by naming the company. The textile paper credits a section, not the paper.

Three things to adjust:

1. **Tenure rule.** `journey/2021-deeppavlov.md` result: "Four months, December 2021 to April 2022." The portrayal's answer to objection 2 is "dated by year, not month" and never a tenure length stated as a number. GSoC and NITEX are already handled the way the portrayal prescribes ("May to September 2022" is a fixed term by definition; "two platforms in seven months" leads with what shipped). Replace the DeepPavlov result with: "Dialogue graphs from the MultiWOZ dataset using tf-idf, topic modeling, x-means, and DBSCAN. A fixed-term research internship, 2021 to 2022."

2. **Pre-submission results in public.** `work/safe-rl-pe.md` publishes specific findings (capture rate zero without the visibility reward, an exploitability gap on the evader side, three named mechanisms) of a paper not yet submitted. CoRL reviews double-blind. A personal site that states the paper's results under the author's name, with the lab named, can be an anonymity problem for the submission and is in any case Dr. Siddique's call. Recommend: keep the evidence paragraph (runs, tests, decision log, target venue) and ask the PI before publishing the mechanism and result sentences. If he agrees, the current text is good and should stay as is.

3. **"A best seller"** in `journey/2022-olympiad-series.md` result and `books.json` cgo-1 note. Inventory: "One of the best sellers in the math olympiad category". The portrayal's own shorthand is "a category best seller", so this is a judgment call, but the inventory wording is the safer one. Replace both with "One of the best sellers in the math olympiad category on Rokomari."

Smaller wording-of-fact items:

- `journey/2025-fenloai.md` result: "a research tool for LinkedIn data". Inventory: "Intelligent LinkedIn scraper, data-collection tool". "Research tool" softens it. Replace with "a data-collection tool for LinkedIn".
- `journey/2020-take-it-seriously.md` ruledOut: "DevOps, after Google's IT Support certificate and the Compute Engine specialisation." The inventory credits the IT Support certificate with filling CS gaps and only the Compute Engine specialisation with ruling out DevOps; the body of the same entry gets this right. Replace with "DevOps, after the Architecting with Google Compute Engine specialisation."
- `journey/2024-back-to-nsu.md` result: "Then a robotics course with Dr. Shahnewaz Siddique and the TurtleBot3 project." The TurtleBot3 project is dated Apr 2024 in the inventory, before he left NITEX in Jul 2024, so "Then" is wrong. Replace with "Alongside it, a robotics course with Dr. Shahnewaz Siddique, whose project was the TurtleBot3 patrol." The inventory's own row ("2024 – 2025 | Took a robotics course ... (TurtleBot3 Patrolling, Apr 2024)") is muddled on this and should be fixed too.
- `journey/2024-kunming.md` result: "Started learning Chinese. HSK 1 passed." placed under the October 2024 trip implies the language came after the trip. The inventory's order is papers, then interest in China, then language, then HSK 1, then the trip. If the language came first, replace with "HSK 1 passed. Built a vocabulary trainer for HSK 2." and leave the start to the body, which already explains it.
- `journey/2021-certifications-and-ml.md` dates the Microsoft certifications to 2021. Inventory facet 1 says Q1 2021 and 2021; facet 4 says 2022 for both. The Medium write-ups are dated July 2021, so the copy is right and facet 4 of the inventory is wrong. Fix the inventory.
- The inventory's "Facts to verify" asks whether MLSA ran to 2024 or present. The copy says "Microsoft Learn Student Ambassador from 2021." with no end, which is safe. Leave it.

## Privacy (criterion in hard-fail list)

Clean. Grep for IUT, Islamic University, CGPA, 3.92, 3.12, 5.00, afford, fee, family, only child, believer, faith, religion, finance returns nothing in `src/content/`. The only "scholarship" is Qubit by Qubit's, which is a public fact and a positive one. `journey/2017-butex.md` ruledOut says "my grades in those courses showed it", which is the nearest approach to a private item; it states no number and matches the inventory's "Grades were poor because the textile courses never clicked". Acceptable. The 2017 entry gives BUTEX as a choice "for its mechanical, electrical, automation, and product design courses" and never mentions why not elsewhere, which is the right way to leave IUT out.

## The four kept items

| Item | Where | Format check |
|---|---|---|
| Failed coding attempts | `journey/2017-butex.md` result: "Tried JavaScript, Java, C++, and competitive programming along the way, then CS50 after reading Life 3.0. None of it held yet." | One line, dated entry, no explanation. Matches the portrayal's prescription. The body repeats it with "after a few weeks" (see unsupported claims). |
| GSoC 2023 unfunded | `journey/2023-gsoc-2023.md` result: "Not selected. A faculty member later wrote to say the organisation had chosen the proposal, but it fell outside that year's funded slots." | One line, no grievance, repo as proof. Exactly the portrayal's wording. |
| Textile courses not enjoyed | `journey/2017-butex.md` ruledOut: "The textile half of the degree. Yarn, fabric, wet processing, apparel. Not the engineering I had wanted, and my grades in those courses showed it." | Present, as a ruled-out field, which is the right slot. |
| Things tried and ruled out | `journey/2020-take-it-seriously.md` ruledOut (frontend, DevOps); `journey/2023-nsu-msc.md` ruledOut (theoretical research); home.md roles.build last sentence | Present in three places, written as outcomes. |

## Facets of the inventory (criterion 5)

Present: robots (six work items, three journey entries), building (NITEX, FenloAI, GetAudio, GSoC, DeepPavlov), quantum (one journey entry, one work item, skills row, three articles), writing (books.json, papers.json, articles.json, home.md role), university (BUTEX, debate and club, YSI, mobile cover, MSc, TA), off the clock (shelf.json: seven books, eight films, five series, three trips, three lines; home.md offclock), skills (twelve rows, every row with at least one proof link). The books, the two papers, the Kaggle downloads and the per-article Medium stats are all present where the guide asks. No site-wide view total appears, as the portrayal requires.

Missing from the content, present in the inventory:

| Item | Inventory line | Suggested home |
|---|---|---|
| UC Berkeley Large Language Model Agents MOOC, 2024 | Facet 1 table | Append to `journey/2024-back-to-nsu.md` result: "Also that year, Berkeley's Large Language Model Agents course online." It is the only formal LLM-agents study on the record and the task planner is its proof. |
| IBM Z Ambassador, Sep to Dec 2021 | Facets 2 and 5 | Low value; a one-clause addition to `journey/2021-certifications-and-ml.md` body or leave out deliberately. |
| QOSF Cohort 7 QSVM feature-map study | Audit section B | Proof link for the "QSVM" tool in skills.json, or drop the tool. |
| WebMart, 2021 | Facet 1 projects; audit B "Keep public, mention as supporting evidence" | Optional. Plans B and C both chose to drop it. Record the decision in the inventory so the omission is deliberate. |
| Ultrasound-to-baby-photo generator (FenloAI client product) | Facet 1 FenloAI table | Deliberately unnamed pending `[?]`. `journey/2025-fenloai.md` lists three of the four products; fine. |
| AutoStock Insight, Img2JSON | Facet 1 projects; audit: no repo | Deliberately dropped pending repos. Fine. |
| Childhood and HSC reading, the 2019 to 2023 reading gap | Facet 7 | Optional. Home offclock covers the current phase. |

## BotForge live URL (check e)

Absent. Grep for `botforge.fenloai`, `bot.fenloai` and the dead Rokomari package id `277163` across `src/content/` returns nothing. `work/botforge.md` links only the repository. Pass.

## Links (check g)

Internal. Every `/work/<slug>/` and `/journey/<slug>/` href resolves to an existing file: 14 distinct work slugs and 5 journey slugs are referenced, all present. `work/security-robot.md` is linked from nowhere internal, which is fine since the Work index lists it. The five Writing anchors used are `/writing/#ros-2`, `#casadi`, `#qiskit`, `#books`, `#articles`. The series values in articles.json are "ROS 2", "CasADi", "Qiskit", "Algorithms", "Essays", "Azure". The builder must emit section ids by lower-casing and hyphenating the series name (`ROS 2` to `ros-2`, `CasADi` to `casadi`) plus fixed ids `books` and `articles`, or the anchors break. Worth a note in the Writing page task.

External. See HF-8 for the table. In short: 20 of 39 URLs are on the inventory's verified list or come from the RSS feed; 11 GitHub repos are verified by the audit and by curl today but are not on the list; Kaggle, two LinkedIn URLs and nirolab.github.io/projects are not verified anywhere.

## Articles with the profile URL as a placeholder (check h)

Five entries in `src/content/articles.json` have `"url": "https://medium.com/@shoaib6174"` because the inventory marks their URLs `[link]`, older than the RSS window:

| id | title | date |
|---|---|---|
| `algo-astar` | A* algorithm in short, for revision | 2023-09 |
| `algo-dijkstra` | Dijkstra's algorithm in short, for revision | 2023-09 |
| `algo-kruskal` | Kruskal's algorithm, for revision | 2023-09 |
| `qiskit-grover` | How to Solve Graph Coloring Problems Using Qiskit's Grover Algorithm | 2023-07 |
| `azure-ds` | How I Became Microsoft Certified: Azure Data Scientist Associate | 2021-07 |

Until the real URLs arrive, the Writing page should label these "on Medium, profile link" or render them without a link, so a reader does not click a title and land on the profile. The `azure-ds` one is the article the inventory says the current site mislinks to the Data Analyst post; make sure the new URL is checked against the Data Analyst URL when it arrives. The three algorithm titles and the Azure DS title are paraphrases of the inventory's short titles, not verified headlines; replace them with the exact Medium headlines when the URLs are found.

## Reader tests (criterion 7)

**Recruiter, 60 seconds.** Pass. The masthead's first sentence says what he does now and where. The three role paragraphs say what he can do, and the "now" block gives four live items with plain status. The reason to remember him is there twice: 2,636 downloads of a model he ported, and the Barcelona line. Weak spot: the masthead's second sentence is the one with the unverified article count (HF, "twenty-one") and the roles.explain paragraph is the one with the fifth book (HF-1). Both are in the first screen.

**Lab PI.** Pass on robotics and RL, with a gap on publications. `work/safe-rl-pe.md` gives repo, 736 tests, 40 runs, two machines, a decision log, ablations and a target venue, which is exactly what the guide asks. `work/llm-robot-task-planner.md` gives a repo and a pass rate, but the audit says the repo has no README, so a PI who clicks sees code without a front page; the audit's README task is a launch gate for this page. `work/vlm-perception-edge.md` has no artefact at all, only the lab's home page; the PI will read it as a role description, which is what it is. The two papers are the gap: the Textile Progress review has no DOI or link and the mobile-cover paper has no venue. A PI will look for both. Ask Shoaib for the Textile Progress DOI (Taylor and Francis issues one for every article) and the mobile-cover venue.

**Reader of the books or articles.** Pass. Home nav has Writing; `/writing/#books` has four verified Rokomari links and `/writing/#articles` has the series. Two clicks. The five placeholder URLs are the only friction, and they are labelled above.

## Three things that work and must not be changed

1. `journey/2023-gsoc-2023.md`, result: "Not selected. A faculty member later wrote to say the organisation had chosen the proposal, but it fell outside that year's funded slots." Dated entry, same format as the wins, repo as proof, no grievance. It is the portrayal's answer to objection 5 word for word.

2. `journey/2023-nsu-msc.md`, ruledOut: "Theoretical research, after one semester. I had enjoyed learning quantum computing. Doing the research, I found I wanted to build systems instead." and result: "Stayed for the degree. Left the quantum track." The MSc appears once, without a duration, and the theory decision is stated as a decision. It answers objections 3 and 4 without a word of apology.

3. `work/safe-rl-pe.md`, status `paper-in-preparation` and the closing paragraph: "Forty-plus training runs across two lab GPU machines, 736 unit tests, a decision log, and a paper in preparation for CoRL 2026." Every number is now sourced, nothing implies a publication, and it is the sentence that passes the PI test. Keep the status vocabulary exactly as it is across all four places it appears.

## Summary of edits required before pass 2

Hard fails: HF-1 through HF-11 above. Of these, HF-2 (headcount), HF-9 (YSI name), HF-10 (drone) and HF-11 (paper venue) need Shoaib; the rest are mechanical.

Inventory work, not copy work: add the GitHub repo list, Kaggle, and the two LinkedIn URLs to the Link check; extend "Numbers sourced from repositories" to cover the README details listed under Unsupported claims; add the 21-article derivation; fix the 2021 versus 2022 certification year in facet 4; untangle the robotics course row in "The bridge"; record the WebMart decision.

Pending PI approval: the mechanism and results sentences in `work/safe-rl-pe.md`.
