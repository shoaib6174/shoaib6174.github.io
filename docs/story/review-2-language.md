# Review 2: language and wording

Pass 2 on the revised copy under `src/content/`, after the 48 edits of `review-1-language.md` and the facts-review commits. Scope as before: criteria 2 (Language) and 4 (Wording), the hard-fail list, and the binding tables in `portrayal.md`. Checked against `docs/life-inventory.md` including its "Numbers sourced from repositories" and "Link check additions" sections.

Files read: `home.md`, 15 files in `work/`, 22 files in `journey/`, `articles.json`, `books.json`, `papers.json`, `skills.json`, `shelf.json`.

## State of the first-pass edits

All 48 edits are applied as written. Mechanical sweep of the revised copy: no semicolons, no em-dashes or en-dashes in prose (the three date ranges now read "2025 to now"), parentheses only inside two published article titles, no pitch words, no trait words describing him, no "I am a X who Y". "Journey" no longer appears; the page is Route and the links are `/route/...`. Two first-pass replacements introduced a small awkwardness each (items 5 and 6 below).

## Remaining edits

### Criterion 2: Language

1. `src/content/home.md` masthead2 (26 words, two ideas joined by "and")
   "Robots are where an AI system has to work end to end in the physical world, and that is what I wanted to build before university."
   → `Robots are where an AI system has to work end to end in the physical world. That is what I wanted to build before university.`

2. `src/content/work/safe-rl-pe.md` body (33 words, two experiments in one sentence)
   "We test which mechanisms keep self-play stable under partial observability, with an ablation for each, and whether the fixed point it reaches is an equilibrium, by training fresh best-response agents against frozen snapshots."
   → `We test which mechanisms keep self-play stable under partial observability, with an ablation for each. We also test whether the fixed point it reaches is an equilibrium, by training fresh best-response agents against frozen snapshots.`

3. `src/content/journey/2019-attendance.md` body ("not X, but Y"; second sentence repeats `chose` word for word)
   "A friend's group had it as their Product Design project and could not get it working. I built it with them on a Raspberry Pi over the final days before the deadline. Not my assignment, but the first time code I wrote recognised something in the real world."
   → `A friend's group had it as their Product Design project and could not get it working. It was not my assignment. It was the first time code I wrote recognised something in the real world.`

4. `src/content/journey/2019-attendance.md` chose ("them" has no antecedent in the frontmatter, which renders before the body)
   "To build it with them over the final days before their deadline."
   → `To build it with a friend's group over the final days before their deadline.`

5. `src/content/journey/2020-take-it-seriously.md` body (introduced by first-pass edit 26; "it" is ambiguous)
   "One lecture in the fifth course pointed it at machine learning."
   → `One lecture in the fifth course pointed me at machine learning.`

6. `src/content/journey/2023-nsu-msc.md` body (introduced by first-pass edit 28; "I knew" with no object is still a dramatic opener)
   "After one semester I knew."
   → `The quantum track lasted one semester.`

7. `src/content/journey/2024-back-to-nsu.md` body (appositive by commas, the pattern first-pass edits 20 and 21 removed elsewhere; also repeats `result`)
   "The robotics course project, a TurtleBot3 patrolling waypoints with Nav2 and behavior trees, is what led to the lab."
   → `The course project was a TurtleBot3 patrolling waypoints with Nav2 and behavior trees. It led to the lab.`

### Criterion 4: Wording

8. `src/content/journey/2023-nsu-msc.md` title (degree named as the university names it; inventory: "MSc Computer Science & Engineering")
   "MSc in Computer Science, North South University"
   → `MSc in Computer Science and Engineering, North South University`

9. `src/content/journey/2022-quantum.md` result (the PhD goal is stated in `chose`, `result`, and the body; "The next year was built around it/that" appears in `result` and the body)
   "A goal: a PhD in quantum machine learning. The next year was built around it. IBM Certified Associate Developer in Quantum Computation, Qiskit Advocate from 2023 to now, the Womanium program, articles on QUBO, Grover's algorithm, and the certification, and a card game for teaching gates."
   → `IBM Certified Associate Developer in Quantum Computation. Qiskit Advocate from 2023 to now. The Womanium program. Articles on QUBO, Grover's algorithm, and the certification exam. A card game for teaching gates.`

10. `src/content/journey/2021-deeppavlov.md` body (first sentence repeats `chose`)
    "My first research role, in natural language processing. The task was to build dialogue graphs from the MultiWOZ corpus: cluster utterances, find intents, connect the states."
    → `The task was to build dialogue graphs from the MultiWOZ corpus: cluster utterances, find intents, connect the states.`

11. `src/content/journey/2025-annapurna.md` result ("without a guide" appears in title, `chose`, `result`, and body)
    "Trekked without a guide. Also bungee and the canyon swing."
    → `Base camp and back. Also bungee and the canyon swing.`

12. `src/content/journey/2018-ysi.md` result (same fact is "fifty universities" on Home and in the portrayal; one number for one fact)
    "Managed campus teams across fifty-plus universities in Bangladesh, 2018 to 2019."
    → `Managed campus teams across fifty universities in Bangladesh, 2018 to 2019.`

13. `src/content/work/llm-robot-task-planner.md` body ("Phase 2" is repository jargon; Home says "Next, the physical JetRover")
    "Phase 2 is the physical JetRover."
    → `Next is the physical JetRover.`

14. `src/content/journey/2025-fenloai.md` chose (states the idea the body's last sentence carries; said once it lands, said twice it is a theme)
    "To co-found a company for contract AI work, to stay in contact with businesses that need things built."
    → `To co-found a company for contract AI work, alongside the lab.`

## Carried over, owned by the facts pass, not counted above

These are on `review-1-facts.md` and are still present. They sit on the hard-fail list, so the page cannot pass until they are resolved, but they are facts and links, not wording.

- `src/content/journey/2021-deeppavlov.md` body: "I also compared LaBSE and BERT on intent classification and tested both on Russian translations without retraining." Not in the inventory or the GitHub audit. Add to the inventory from the repository README, or delete the sentence.
- `src/content/articles.json` xr-essay: the LinkedIn URL is not in the inventory's link check, and the title "The Rise of AR/VR/MR (XR) in Consumer Tech: Will They Replace Smartphones?" does not match the slug's "wave of innovation". Verify both in a browser once.
- `src/content/articles.json` algo-astar, algo-dijkstra, algo-kruskal, qiskit-grover, azure-ds: now rendered without links, as proposed. Their titles are still not confirmed against the published posts; the inventory has only "Algorithm revision notes" for the first three.
- `src/content/papers.json` mobile-cover-2019: `venue` reads "Product Design course, BUTEX", which is where the work was done, not where it was published. The inventory has the publication link as still to be provided. Leave the venue empty or label it as pending until the link arrives.

## Not changed, on purpose

- `journey/2023-nitex.md` body is one sentence: "The first job where the thing I built ran for a business every day." A plain fact he would say aloud. Left.
- Verbless list fragments after an opening sentence (`work/turtlebot3-patrolling.md`, `work/vlm-perception-edge.md`, `work/nitex-extraction-pipeline.md`) are stacks of nouns, not chained clauses. Left.
- Four `work/` sentences between 23 and 29 words are single ideas carrying a list of tools or steps. Left.

## Verdict

FAIL (14 edits). Plus four carried-over facts and link items for the facts pass. Next language pass starts from step 1 on the revised copy.
