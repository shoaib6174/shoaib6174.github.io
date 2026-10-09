# GitHub audit — shoaib6174 (2026-10-09)

47 public repos reviewed by README, file tree, size, stars, and last push. Verdicts below. Nothing has been changed on GitHub; this is a recommendation list.

## A. Feature on the site (9)

| Repo | Why it earns a place | To do before linking |
|---|---|---|
| `safe-rl-pe` | Multi-agent adversarial RL for partially observable pursuit-evasion. CoRL 2026 target, 40+ runs, 736+ tests, distributed training. This is the lab's "Multi-Agent Pursuit-Evasion Game" project (Shoaib is listed on it). Strongest repo on the account. | Nothing. README is excellent. |
| `llm_robot_task_planner` | The one-arm mobile robot: LLM agent (LangChain, qwen2.5 local) decomposes natural-language tasks into Nav2 / YOLO / arm pick-and-place calls in Gazebo. JetRover URDF. Session worklogs, decision log, 8 blog drafts in `docs/`. | **Has no README.** Write one from the PRD and `docs/demo_results.md`. Record a demo GIF. |
| `GSOC-22-Video-Swin-Transformers` | The GSoC 2022 work. 3 stars, the most-starred repo. | Nothing. |
| `fenlo-bot` | BotForge source. Good README. | Decide whether this stays public given it is client-facing FenloAI product. |
| `TurtleBot3-Patrolling` | The course project that led to the NIRO Lab offer. | Nothing. |
| `GetAudio` | Microservices on AKS: RabbitMQ, JWT gateway, k8s auto-scaling. 115 MB, probably a committed video. | Consider moving the large asset out. |
| `guard-shield` | LLM safety middleware: ordered guard pipeline, circuit breakers, graceful degradation. 2026, well documented. | Nothing. |
| `Qiskit-Treasure-Hunt` | A card game that teaches single-qubit gates. Ties the quantum and teaching facets together. | Nothing. |
| `hsk-vocabs` | HSK 1–2 vocabulary trainer in React/TS. Built for his own Chinese study. Personal and distinctive. | Deploy it and link the live app. |

## B. Keep public, mention as supporting evidence (10)

| Repo | Role on the site |
|---|---|
| `QMLHEP-tasks-2023` | Proof of the GSoC 2023 near-miss story. |
| `QOSF-Cohort-7` + `Comparing-performances-of-QSVM-...` | Same Iris QSVM study twice. Merge into one, keep the clearer name. |
| `MultiWOZ-Intent-Classification` (1★ 1 fork), `MultiWOZ-Clustering` | DeepPavlov era. Clustering repo has a junk README; fix it. |
| `No-Code-ML` (3 forks) | The blog series. |
| `Extract-Text-from-Image-using-Azure-s-Computer-Vision` | The Medium tutorial. Also holds the correct Medium URL the site currently mislinks. |
| `WebMart` | 2021 e-commerce app. |
| `legal-document-processor`, `Contact-Finder` | 2026 take-home assessments: OCR + hybrid RAG + grounding check; agentic CSV enrichment with provenance. Strong code, but they were built for employers. Link under "agentic systems" without featuring. Check nothing client-confidential is in them. |
| `pettingzoo_colab_visualizer` | Small utility, companion to `safe-rl-pe`. |

## C. Archive (read-only, stays visible) (11)

Learning logs and finished one-offs with no further activity. Archiving signals "done", not "abandoned".

- `Tracking-Pose-from-Videos` (1★, 142 MB; remove the video first)
- `Fair-Home-Price` (1★)
- `herbarium-2022-classification`
- `Learning-Parallel-Programming`
- `ML-Projects`
- `DSA`
- `Doctors-portal`, `red-onion` (2020 bootcamp projects; red-onion is 29 MB)
- `jderobot-ros2-laser-scan`, `jderobot-publisher-subscriber`, `jderobot-python-challange`

## D. Delete (12)

Empty, duplicate, or not yours.

| Repo | Reason |
|---|---|
| `fenlo-ai` | Empty. Duplicate of `fenlo-bot`. |
| `E-Commerce-using-React-and-Django` | Duplicate of `WebMart`, README is one line. |
| `Autonomous-Turtle` | Duplicate of `TurtleBot3-Patrolling` (same demo video). |
| `Backend-with-Python`, `TensorFlow-Courses`, `LeetCode-with-Tecognize` | Near-empty placeholders. |
| `Cramstack-Task` | 2021 job task with the employer's task files committed. No README. |
| `skills-getting-started-with-github-copilot` | GitHub tutorial exercise. |
| Forks: `tech-interview-handbook`, `coding-interview-university`, `computer-science`, `project-based-learning`, `Self-Learning` (3.3 GB) | Unmodified forks of reading lists. Star the originals instead. |

## E. Make private (2)

- `vernpi` — a FenloAI marketing site in progress, with internal design notes and `.agent/` files.
- `AgentCollect-Automated-UX-Debugger` — only a `plan.md`. Publish when there is code.

## Missing from GitHub

- `AutoStock Insight` and `Img2JSON` are on the resume but have no public repo. Add them or drop them from the site.
- No profile README (`shoaib6174/shoaib6174`). Worth creating once the site is live, pointing to it.

## Net effect

47 → 24 public repos, of which 9 lead. The account then reads as: robotics + RL research, LLM systems, one GSoC, one quantum chapter, one Chinese side project.

---

# How to do it

Everything below uses the GitHub CLI. Each step is also doable from the web UI (repo → Settings → bottom of the page) if you prefer clicking, but the CLI lets you batch 20 repos in one command.

## 0. One-time setup

```bash
sudo apt install gh            # Ubuntu/Debian
gh auth login                  # browser flow, pick HTTPS
gh auth refresh -h github.com -s delete_repo   # deleting needs this extra scope
gh auth status                 # confirm you are shoaib6174
```

## 1. Order of operations

Do it in this order so nothing is lost:

1. Pull anything you want to keep from repos marked for deletion (see 2).
2. Make private (reversible).
3. Archive (reversible).
4. Merge duplicates (see 5).
5. Delete (irreversible). Do this last, after a day's pause.

## 2. Save anything worth keeping first

Only `Cramstack-Task` holds files that exist nowhere else. If you want them:

```bash
mkdir -p ~/archive && cd ~/archive
gh repo clone shoaib6174/Cramstack-Task
```

Everything else on the delete list is either empty, a duplicate of a repo you are keeping, or someone else's fork.

## 3. Make private (2 repos)

```bash
for r in vernpi AgentCollect-Automated-UX-Debugger; do
  gh repo edit shoaib6174/$r --visibility private --accept-visibility-change-consequences
done
```

## 4. Archive (11 repos)

Archived repos stay visible and cloneable, show an "Archived" badge, and become read-only. Reversible with `gh repo unarchive`.

```bash
for r in Tracking-Pose-from-Videos Fair-Home-Price herbarium-2022-classification \
         Learning-Parallel-Programming ML-Projects DSA Doctors-portal red-onion \
         jderobot-ros2-laser-scan jderobot-publisher-subscriber jderobot-python-challange; do
  gh repo archive shoaib6174/$r --yes
done
```

Optional, before archiving `Tracking-Pose-from-Videos` (142 MB): the size is almost certainly a committed video. If you care, strip it with `git filter-repo` and force-push. If you do not care, archive as is.

## 5. Merge the two QSVM repos

`QOSF-Cohort-7` and `Comparing-performances-of-QSVM-for-different-feature-maps-using-the-Iris-Dataset` are the same study. Keep the shorter name, fold the other in:

```bash
gh repo clone shoaib6174/QOSF-Cohort-7 && cd QOSF-Cohort-7
gh repo clone shoaib6174/Comparing-performances-of-QSVM-for-different-feature-maps-using-the-Iris-Dataset ../qsvm-long
cp -r ../qsvm-long/* .          # resolve any name clashes by hand
git add -A && git commit -m "Merge QSVM feature-map comparison into one repo"
git push
gh repo rename QSVM-Feature-Map-Comparison --yes     # clearer public name
gh repo edit --description "QSVM on Iris: comparing ZFeatureMap, ZZFeatureMap, angle and amplitude encodings (QOSF Cohort 7 task)"
cd .. && gh repo delete shoaib6174/Comparing-performances-of-QSVM-for-different-feature-maps-using-the-Iris-Dataset --yes
```

## 6. Delete (12 repos)

**Irreversible.** GitHub does not keep a recycle bin for repos you own. Run the archive step first, wait a day, then:

```bash
for r in fenlo-ai E-Commerce-using-React-and-Django Autonomous-Turtle \
         Backend-with-Python TensorFlow-Courses LeetCode-with-Tecognize \
         Cramstack-Task skills-getting-started-with-github-copilot \
         tech-interview-handbook coding-interview-university computer-science \
         project-based-learning Self-Learning; do
  gh repo delete shoaib6174/$r --yes
done
```

If you want the reading lists back later, star the upstream repos instead of forking them:

```bash
gh api -X PUT /user/starred/yangshun/tech-interview-handbook
gh api -X PUT /user/starred/jwasham/coding-interview-university
gh api -X PUT /user/starred/ossu/computer-science
gh api -X PUT /user/starred/practical-tutorials/project-based-learning
```

## 7. Fix the repos you are keeping

These are small edits that raise the quality of what remains.

| Repo | Fix | How |
|---|---|---|
| `llm_robot_task_planner` | Write a README | Start from `PRD_llm_robot_task_planner.md` (overview, architecture diagram) and `docs/demo_results.md` (the five scenarios and which pass). Add a GIF from a Gazebo run. 150 lines is plenty. |
| `MultiWOZ-Clustering` | README is three stray lines | Replace with a paragraph: what was clustered, which methods (tf-idf, topic modeling, x-means, DBSCAN), one result image. |
| `hsk-vocabs` | Deploy it | It is a Vite app. `npm run build`, then enable GitHub Pages on the `dist` output via a `gh-pages` branch or a Pages workflow. Add the live URL to the repo description. |
| `GetAudio` | 115 MB | Likely a demo video in git. Move it to a GitHub Release asset or a Drive link, then `git filter-repo` to drop it from history. Optional. |
| `fenlo-bot` | Decide visibility | It is a client-facing product's source. If FenloAI sells it, make it private and link the live product instead. |
| `legal-document-processor`, `Contact-Finder` | Check for confidential content | They were take-home tests. Grep for the employer name, sample data with real people, and API keys in history. Remove or make private if anything is sensitive. |
| All featured repos | Description + topics | `gh repo edit shoaib6174/<repo> --description "..." --add-topic ros2,reinforcement-learning` so the profile grid is scannable. |

## 8. Pin the right six

GitHub shows up to six pinned repos on the profile. After cleanup:

```bash
# pinning has no CLI command; do it at https://github.com/shoaib6174 → "Customize your pins"
```

Pin, in order: `safe-rl-pe`, `llm_robot_task_planner`, `GSOC-22-Video-Swin-Transformers`, `guard-shield`, `TurtleBot3-Patrolling`, `hsk-vocabs`.

## 9. Profile README (later, after the site ships)

Create a repo named exactly `shoaib6174` with a `README.md`. GitHub renders it at the top of your profile. Keep it to a paragraph and a link to the site. Do this last so the link points at the new site, not the old one.

## 10. Add the two missing projects

`AutoStock Insight` (n8n workflow export as JSON + README) and `Img2JSON` are on the resume with no repo. Either push them or drop them from the site. An n8n workflow exports from the editor as a `.json` file; that plus a README and a screenshot is a complete repo.

## Checklist

- [ ] gh installed and authenticated with `delete_repo` scope
- [ ] Cramstack-Task cloned locally, if wanted
- [ ] 2 repos private
- [ ] 11 repos archived
- [ ] QSVM repos merged and renamed
- [ ] 12 repos deleted
- [ ] 4 upstream reading lists starred
- [ ] README written for `llm_robot_task_planner`
- [ ] README fixed for `MultiWOZ-Clustering`
- [ ] `hsk-vocabs` deployed
- [ ] `fenlo-bot` visibility decided
- [ ] Take-home repos checked for confidential content
- [ ] Descriptions and topics set on featured repos
- [ ] Six repos pinned
- [ ] AutoStock Insight and Img2JSON pushed or dropped
- [ ] Profile README, after the site is live
