# Review 1: language and wording

Pass 1 on the first draft of all site content under `src/content/`. Scope: criteria 2 (Language) and 4 (Wording) of `evaluation-guide.md`, the hard-fail list, the "Wording to avoid" table, and the traits table in `portrayal.md`. Structure, flow, completeness, honesty, and reader tests are left to other passes, except where a wording fix touches them.

Files read: `home.md`, 15 files in `work/`, 22 files in `journey/`, `articles.json`, `books.json`, `papers.json`, `skills.json`, `shelf.json`. Checked against `docs/life-inventory.md` and `docs/github-audit.md`.

## Scores

| Criterion | Score | Summary |
|---|---|---|
| 2. Language | 3 | First person and tense are right throughout. Voice is mostly a careful engineer. Eleven semicolons chain clauses, against a rule of none. About a dozen sentences run past 25 words with two ideas in them. Four "X, not Y" constructions and three dramatic one-line paragraphs. No em-dashes in prose. |
| 4. Wording | 3 | Nouns are specific almost everywhere. Four numbers appear that no document sources. One count on Home contradicts itself. Two tool names are not spelled as their owners spell them. One figure is wrong by a year. |

Hard fails: none of the trait words appear. Two items need resolving before the page can pass (see Hard fails).

## Hard fails and hard-fail candidates

### Trait words: clean
`curious`, `curiosity`, `broad`, `entrepreneurial`, `analytical`, `passionate`, `persistent`, `dedicated` do not describe him anywhere. The word "entrepreneurship" appears twice in `journey/2018-ysi.md`, both times describing YSI and its trainings, not him. Acceptable.

### Pitch words: clean, with one note
`passion`, `spark`, `chapter`, `story`, `relentless`, `driven`, `dynamic`, `leverage`, `empower`, `seamless`, `cutting-edge`, `next-generation`, "I am a X who Y": none. The word "journey" appears only as the name of the Journey page in three link labels and one body sentence. That is the page's name from the spec, not pitch language. Noting it because the spec's page name collides with the guide's banned list; a decision above this review.

### 1. Numbers without a documented source (hard-fail list, item 5)
These numbers are not in `life-inventory.md` or `github-audit.md`. Either add them to the inventory with a source (repo path, results tracker) or remove them.

| Where | Number | Smallest fix |
|---|---|---|
| `src/content/home.md` now[0]; `src/content/work/llm-robot-task-planner.md` body; `src/content/journey/2026-now.md` result | "four of five demo scenarios pass" | Add to inventory with the results tracker as source. If not, Home now[0] becomes `"LLM robot task planner: demo scenarios pass in simulation. Next, the physical JetRover."` |
| `src/content/work/safe-rl-pe.md` why | "past ten million steps" | Delete the phrase: `"...which ingredients keep both policies improving, and whether the result is an equilibrium or only looks like one."` |
| `src/content/work/safe-rl-pe.md` body | "capture rate falls to zero" | Add to inventory from the ablation table, or: `"Each was ablated. Without the visibility reward the pursuer stops capturing."` |
| `src/content/work/qiskit-treasure-hunt.md` body | "in a hundred plays" | Add to inventory from the repo, or delete: `"...to reach a target state as many times as possible."` |

### 2. Unverified links (hard-fail list, item 6)
`src/content/articles.json`: five entries point at the Medium profile, not the article. The inventory lists these as URLs still needed.
- `algo-astar`, `algo-dijkstra`, `algo-kruskal`, `qiskit-grover`, `azure-ds` all have `"url": "https://medium.com/@shoaib6174"`.

Fix: supply the article URLs before build, or omit `url` for these entries so the build renders them without a link.

### Wording-to-avoid table hit: "startup"
Not in the guide's hard-fail list, but in the portrayal's avoid table. The table's target is FenloAI, and FenloAI is never called a startup. NITEX is, twice, and the inventory itself calls NITEX a startup, so the fact is supported. The word costs nothing to drop.
- `src/content/home.md` roles[build].text: "data platforms for a startup" → `data platforms for a fashion-tech company`
- `src/content/journey/2023-nitex.md` chose: "A fashion-tech startup, after the first MSc semester." → `A fashion-tech company, after the first MSc semester.`

### Private items: clean
No IUT, finances, family circumstances, CGPA, faith, or only child. `journey/2017-butex.md` says "my grades in those courses showed it", which is not the CGPA and reads as honest. Left as is.

## Criterion 2: Language

### Semicolons chaining clauses (rule: none)

1. `src/content/work/nsu-ai-sat.md` body
   "Detailed design phase is complete; the engineering model is next."
   → `The detailed design phase is complete. The engineering model is next.`

2. `src/content/work/getaudio.md` body
   "The cluster is no longer running; the repository has the architecture and the setup."
   → `The cluster is no longer running. The repository has the architecture and the setup.`

3. `src/content/work/attendance-pi-2019.md` body
   "No repository survives; the Journey entry has the account."
   → `No repository survives. The Journey entry has the account.`

4. `src/content/work/guard-shield.md` body
   "Core pipeline and ML guards are implemented; production hardening is in progress."
   → `The core pipeline and ML guards are implemented. Production hardening is in progress.`

5. `src/content/work/safe-rl-pe.md` body
   "Each was ablated; without the visibility reward, capture rate falls to zero."
   → `Each was ablated. Without the visibility reward, capture rate falls to zero.` (see also the number note above)

6. `src/content/work/video-swin-tf2.md` body
   "TF Hub published the feature extractors; when TF Hub moved to Kaggle Models the collection moved with it, under the Kaggle account."
   → `TF Hub published the feature extractors. When TF Hub moved to Kaggle Models, the collection moved with it under the Kaggle account.`

7. `src/content/journey/2021-certifications-and-ml.md` body (also 28 words)
   "The ambassador program came with an exam voucher; I spent it on data analytics because it was the skill closest to the supply chain work I was studying."
   → `The ambassador program came with an exam voucher. I spent it on data analytics, the skill closest to the supply chain work I was studying.`

8. `src/content/journey/2020-take-it-seriously.md` body, two sentences
   "The bootcamp was run by an IPE graduate who had switched to software; I finished it and learned that I did not enjoy frontend work, and that I had gaps in computer science basics."
   → `The bootcamp was run by an IPE graduate who had switched to software. I finished it. I did not enjoy frontend work, and I had gaps in computer science basics.`
   "The cloud specialisation was there because DevOps was in demand; finishing it told me DevOps was not for me either."
   → `I took the cloud specialisation because DevOps was in demand. Finishing it told me DevOps was not for me either.`

9. `src/content/journey/2023-nsu-msc.md` body (also 27 words)
   "The learning phase of quantum computing and quantum machine learning had been the best part; the theoretical work was not what I wanted to spend years on."
   → `Learning quantum computing had been the best part. The theoretical work was not what I wanted to spend years on.`

10. `src/content/journey/2024-kunming.md` chose
    "classes on Chinese culture, traditions, the political system, and development; lab tours; museums."
    → `classes on Chinese culture, traditions, the political system, and development, plus lab tours and museums.`

11. `src/content/journey/2026-now.md` result (also 35 words)
    "Lab: the task planner's four of five demo scenarios pass; the pursuit-evasion paper is in preparation; the CubeSat goes to engineering model next; a security robot waits for funding; a fixed-wing payload drone is planned."
    → `Lab: the task planner's demo scenarios pass in simulation. The pursuit-evasion paper is in preparation. The CubeSat goes to engineering model next. A security robot waits for funding. A fixed-wing payload drone is planned.`

### Dashes and parentheses
- `years: "2025 – now"` in `work/nsu-ai-sat.md`, `work/safe-rl-pe.md`, `work/vlm-perception-edge.md` renders as an en-dash in a date range. Not a sentence dash. Acceptable, but the prose elsewhere writes ranges as "2018 to 2019". For one convention: `years: "2025 to now"`. Author's call.
- Parentheses appear only inside two published article titles in `articles.json`. Titles stay as the author published them. Acceptable.
- No em-dashes anywhere. Good.

### Long sentences carrying two ideas (rule: about 20 words, one idea)
Lists of tools and nouns that run long are left alone. These carry two ideas or stall the reader.

12. `src/content/home.md` roles[organise].text (26 words)
    "A university business club from its first year to vice president, a national competition, campus teams across fifty universities, and now a company with two co-founders."
    → `A university business club from its first year to vice president, a national competition, campus teams across fifty universities. Now a company with two co-founders.`

13. `src/content/journey/2022-quantum.md` body (28 words)
    "The summer school ran with researchers from MIT and Berkeley, and by the end of it I had decided to aim for a PhD in quantum machine learning."
    → `The summer school ran with researchers from MIT and Berkeley. By the end of it I had decided to aim for a PhD in quantum machine learning.`

14. `src/content/journey/2025-niro-lab.md` result (31 words)
    "Then an LLM agent for a mobile robot with an arm, vision-language models on Jetson boards, a pursuit-evasion paper in preparation for CoRL 2026, and the AI payload for a CubeSat."
    → `Then an LLM agent for a mobile robot with an arm, and vision-language models on Jetson boards. A pursuit-evasion paper in preparation for CoRL 2026. The AI payload for a CubeSat.`

15. `src/content/work/llm-robot-task-planner.md` body (36 and 30 words)
    "Give it "bring the red cube from room A to room B" and the agent navigates to room A with Nav2, finds the cube with YOLO, picks it up, drives to room B, and places it."
    → `Give it "bring the red cube from room A to room B". The agent navigates to room A with Nav2, finds the cube with YOLO, picks it up, drives to room B, and places it.`
    "The one that does not, moving all cubes at once, fails on localisation drift after repeated rotation scans, which is a known AMCL limitation and the next thing to fix."
    → `The one that does not, moving all cubes at once, fails on localisation drift after repeated rotation scans. That is a known AMCL limitation and the next thing to fix.`

16. `src/content/work/vlm-perception-edge.md` body (36 words)
    "At NSU Intelligent Robotics Lab I work on perception and decision-making pipelines that run on the robot: vision-language models for scene understanding, vision-language-action models for control, and the ROS 2 plumbing between them and the hardware."
    → `At NSU Intelligent Robotics Lab I work on perception and decision-making pipelines that run on the robot. Vision-language models for scene understanding, vision-language-action models for control, and the ROS 2 plumbing between them and the hardware.`

17. `src/content/work/getaudio.md` body (27 words, no main verb)
    "Gateway, authentication, and converter services as pods, RabbitMQ for the task queue and notifications, persistent volumes for the files, and the cluster handling replication, auto-healing, and scaling."
    → `Gateway, authentication, and converter services run as pods. RabbitMQ carries the task queue and notifications, persistent volumes hold the files, and the cluster handles replication, auto-healing, and scaling.`

18. `src/content/work/qiskit-treasure-hunt.md` body (33 words)
    "The player starts at the zero state and uses a hand of cards, each a gate or a measurement, to reach a target state as many times as possible in a hundred plays."
    → `The player starts at the zero state and holds a hand of cards, each a gate or a measurement. The aim is to reach a target state as many times as possible.`

19. `src/content/work/nitex-extraction-pipeline.md` body ("with ... with")
    "Deployed on AWS ECS and Fargate with Lambda for the bursty parts, with a Streamlit front end for the people who used it."
    → `Deployed on AWS ECS and Fargate, with Lambda for the bursty parts. A Streamlit front end for the people who used it.`

20. `src/content/journey/2023-gsoc-2023.md` body (appositive by commas, hard to parse)
    "Everything I did in quantum computing in early 2023, the certification, the Advocate role, the tasks, was aimed at this application."
    → `The certification, the Advocate role, and the tasks in early 2023 were all aimed at this application.`

21. `src/content/journey/2025-annapurna.md` body (appositive by commas)
    "The India trip in 2018, Shimla, Manali, Agra, Delhi, Kolkata, was the first time abroad."
    → `India in 2018 was the first time abroad: Shimla, Manali, Agra, Delhi, Kolkata.`

### "Not X but Y" and "X, not Y" constructions

22. `src/content/work/nitex-trend-platform.md` why
    "The hard part was not the model but running a vision-language model locally at the volume the pipeline needed, and turning raw tags into something a merchandiser could read."
    → `The hard part was running a vision-language model locally at the volume the pipeline needed, and turning raw tags into something a merchandiser could read.`

23. `src/content/work/getaudio.md` why
    "I wanted to understand Kubernetes by running something real on it, not by reading about it."
    → `I wanted to understand Kubernetes by running something real on it.`

24. `src/content/work/llm-robot-task-planner.md` why
    "I wanted to see how far a local language model could go as the planner for a real robot stack, not a toy."
    → `I wanted to see how far a local language model could go as the planner for a real robot stack.`

25. `src/content/journey/2020-take-it-seriously.md` chose
    "To treat learning to code as the main thing, not a side attempt."
    → `To treat learning to code as the main thing.`

### Dramatic one-liners, punchlines, brochure voice

26. `src/content/journey/2020-take-it-seriously.md` body, second paragraph
    "The MicroMasters was the one that mattered. Five courses over more than a year, a mathematics foundation I had never had, and one lecture that pointed the whole thing at machine learning."
    A short dramatic line followed by a tidy triplet. It also repeats the frontmatter `result`.
    → `The MicroMasters mattered most. Five courses over more than a year gave me the mathematics I had never had. One lecture in the fifth course pointed it at machine learning.`

27. `src/content/journey/2025-niro-lab.md` body, the whole body
    "The work I had wanted to do since before university, by a long route."
    A one-line paragraph written as a closing beat. The fact is in the inventory.
    → `I had wanted to work on robots since before university. The lab is the first place the work matched that.`

28. `src/content/journey/2023-nsu-msc.md` body opener
    "One semester was enough to know."
    → `After one semester I knew.` Then the two sentences from fix 9.

29. `src/content/work/turtlebot3-patrolling.md` body
    "A practical introduction to autonomous navigation in ROS 2: launch files for the simulation, Nav2 for path planning, a behavior tree for the patrol logic, and both Python and C++ packages in one workspace."
    "A practical introduction to" is README voice.
    → `Launch files for the simulation, Nav2 for path planning, a behavior tree for the patrol logic, and Python and C++ packages in one workspace.`

30. `src/content/work/safe-rl-pe.md` body
    "It is not: the evader side has an exploitability gap, which is itself a finding."
    "which is itself a finding" tells the reader how to read it.
    → `It is not. The evader side has an exploitability gap.`

31. `src/content/work/nsu-ai-sat.md` why (borderline, author's call)
    "The interesting constraint is that inference has to happen on the satellite, with a power budget that makes a Jetson look generous."
    The closing quip is a punchline, and "interesting" is filler. It is also good voice. If changed:
    → `Inference has to happen on the satellite, on a power budget far below a Jetson's.`

32. `src/content/work/botforge.md` why (borderline, author's call)
    "Small businesses kept asking FenloAI for the same three things: answer questions from our documents, answer the phone, and do it on every channel we use. BotForge is those three things on one backend."
    Framed triplet with a punchline. The three things are real. If changed:
    → `Small businesses kept asking FenloAI for the same things: answer questions from our documents, answer the phone, and do it on every channel we use. BotForge puts them on one backend.`

### Headings
Journey and Work titles are nouns and dates throughout. The three Home role titles ("I build systems." "I write down what I learn." "I bring people together.") are sentences by design, per the portrayal's three roles. The portrayal warns that three verbs become a tagline. The structure reviewer should confirm this is intended; no change proposed here.

## Criterion 4: Wording

### Counts that contradict each other or the inventory

33. `src/content/home.md` roles[explain].text
    "Two math books and a three-volume olympiad series for school students."
    Two books plus three volumes is five. The masthead says four. He wrote one book in 2018 and a three-volume series in 2022.
    → `One math book and a three-volume olympiad series for school students.`

34. `src/content/home.md` roles[build].text
    "I prefer building to theory, and found that out by trying theory for a year."
    The inventory and `journey/2023-nsu-msc.md` say one semester of quantum research. The year was spent learning quantum computing, not doing theory.
    → `I prefer building to theory, and found that out by trying theory for a semester.`

35. `src/content/work/security-robot.md` why
    "I spent five years in a textile engineering school."
    January 2017 to December 2022 is six years.
    → `I spent six years in a textile engineering school.`

36. `src/content/home.md` masthead2 and roles[explain].text; `src/content/skills.json` writing proof label
    "twenty-one technical articles" / "Twenty-one articles"
    The inventory says 19 articles on Medium. `articles.json` has 21 entries because it adds the LinkedIn essay and the GitHub No-Code ML series. The number is derivable from the site's own list, so it has a source, but the inventory should record 21 and what it counts. If the Medium count is preferred: `nineteen articles`.

### Names spelled as their owners spell them

37. `src/content/work/nitex-trend-platform.md` stack; `src/content/skills.json` vlm.tools
    "Nvidia Triton" → `NVIDIA Triton`

38. `src/content/work/llm-robot-task-planner.md` stack
    "qwen2.5 via Ollama" → `Qwen2.5 via Ollama`

39. `src/content/work/nitex-trend-platform.md` stack
    "instaloader" → `Instaloader` (the project styles its name with a capital in its docs; the package name stays lowercase)

40. `src/content/journey/2018-ysi.md` body
    "Young Sustainable Impact Bangladesh" is an expansion not in the inventory, which only says "YSI Bangladesh". Verify the expansion with Shoaib before build. If unverified: `YSI Bangladesh ran campus teams at universities across the country.`

41. `src/content/journey/2017-butex.md` title
    "Industrial and Production Engineering at BUTEX"
    The inventory names the degree as BSc Textile Engineering with an IPE major. The title reads as an IPE degree.
    → `Textile Engineering, IPE major, at BUTEX`

42. `src/content/work/attendance-pi-2019.md` title vs `src/content/journey/2019-attendance.md` title
    "Facial-recognition attendance" vs "A face-recognition attendance system". Pick one. The inventory says "facial-recognition". Change the Journey title to `A facial-recognition attendance system, on a Raspberry Pi` and the body's "A friend's group had it as their Product Design project" stays.

43. `src/content/work/attendance-pi-2019.md` summary
    "built at the last minute for a friend's stuck product design project"
    "stuck" modifying "project" is awkward, and the course is capitalised "Product Design" everywhere else.
    → `built in the final days for a friend's Product Design project that was not working.`

### Specific nouns

44. `src/content/journey/2025-fenloai.md` result
    "a research tool for LinkedIn data"
    The inventory calls it a data-collection tool, a LinkedIn scraper. "Research tool" softens it.
    → `a data-collection tool for LinkedIn`

45. `src/content/work/nitex-extraction-pipeline.md` why
    "picked per-case"
    → `chose one per layout`

46. `src/content/papers.json` textile-progress-3dp.role
    "Wrote the 3D-printed dress section: compiled every known 3D-printed dress and the comparative analysis."
    "compiled ... the comparative analysis" mismatches the verb.
    → `Wrote the 3D-printed dress section: compiled every known 3D-printed dress and wrote the comparative analysis.`

47. `src/content/skills.json` languages.tools
    "Hindi, understanding" → `Hindi, understood, not spoken` or, closer to the inventory, `Hindi, proficient understanding`

48. `src/content/articles.json` ros2-versions.title
    "How to Match ROS 2, Gazebo, and PyTorch CUDA Versions, for Any Ubuntu and GPU"
    The slug has no comma before "for". Confirm against the published title; likely `How to Match ROS 2, Gazebo, and PyTorch CUDA Versions for Any Ubuntu and GPU`.
    Also the three Algorithms titles ("A* algorithm in short, for revision" and so on) are not in the inventory, which only says "Algorithm revision notes". Confirm against the published titles when the URLs are recovered.

### Bengali titles
Both books give the title in transliteration and the English gloss once. The gloss is set as an italic first sentence of the body rather than in parentheses, which satisfies the no-parentheses rule and the gloss rule at once. `books.json` carries the gloss in its own field. No change.

### Repetition (wording, low)
- `src/content/journey/2014-c-book.md`: the body's last sentence repeats the frontmatter `result` almost word for word ("Then the HSC board exams took over and it stopped." / "Then the board exams took over and it stopped."). Drop one, probably the body's.
- The attendance system's "not my assignment" beat appears in the Work summary, the Work why, and the Journey body. Keep it in one place, the Journey body, where it carries the most.

## Notes outside this review's brief
Recorded for the structure and honesty reviewers, not scored here.
- `journey/2017-butex.md` has `startedBy: "Life 3.0, Max Tegmark"`. The book started the AI interest, not the BUTEX enrolment. The field reads oddly on this entry.
- `work/nitex-extraction-pipeline.md` says "The second NITEX platform" and `work/nitex-trend-platform.md` says "One of two platforms". The inventory does not say which came first.
- `work/nsu-ai-sat.md` lists "Detailed design" as a stack item.
- `journey/2025-annapurna.md` is tagged `studied`.
- `skills.json` languages lists "English" with no level; the inventory has IELTS 7.5.
- `shelf.json` gives "Sore: A Wife from the Future" the year 2025; the inventory gives no year.
- `work/safe-rl-pe.md` says "736 unit tests"; the inventory says "736+ tests". "unit" is an added qualifier; confirm or drop.

## Three things that work and must not be changed

1. `src/content/home.md` offclock, in full. Five first-person sentences, each a fact, no adjectives about himself, and the Barcelona line kept exactly as he said it. This is the voice the rest of the site should match.

2. `src/content/journey/2023-gsoc-2023.md` result: "Not selected. A faculty member later wrote to say the organisation had chosen the proposal, but it fell outside that year's funded slots." Same dated-entry format as the successes, no grievance, and it uses the exact replacement wording from the portrayal's avoid table.

3. `src/content/work/safe-rl-pe.md` closing paragraph: "Forty-plus training runs across two lab GPU machines, 736 unit tests, a decision log, and a paper in preparation for CoRL 2026." Research described by its evidence, status labelled plainly, no publication implied. The "in preparation for CoRL 2026" phrasing appears identically in `home.md`, `journey/2025-niro-lab.md`, and `journey/2026-now.md`; keep that consistency.

Also worth keeping as is, though the guide would flag them on form: `journey/2025-fenloai.md` "Research alone does not keep me in contact with people who need something built by Friday." and `journey/2022-gsoc.md` "Eight years after the C book, this was the first time something I built was used by people I had never met." Both close a paragraph on a line, but both are things he would say aloud to a colleague, which is the test.

## Count
48 numbered edits. 2 hard-fail items to resolve (unsourced numbers, five placeholder article links). 3 borderline items left to the author (31, 32, en-dash ranges). Next pass starts from step 1 on the revised copy.
