# Life inventory — Mohammad Shoaib

Working log of everything done so far. Sources: current site pages, `files/pdfs/Shoaib_s_Resume.pdf`, and Shoaib's own notes (2026-10-09).
Items marked `[?]` are gaps only Shoaib can fill. `[photo]` / `[link]` / `[file]` mark material Shoaib will provide. Nothing here is final site copy.

Three questions every facet should eventually answer:
- **WHO** — what this says about me
- **WHAT** — the concrete things I did
- **WHY** — what pulled me into it, and what I took from it

---

## 1. AI & Robotics (current chapter)

| When | What | Where |
|---|---|---|
| Jun 2025 – present | Research Assistant: Vision-Language-Action models, RL for robots, Isaac Sim/Lab, edge deployment (Jetson Orin, Xavier NX, Raspberry Pi, OpenCR), ROS 2 multi-robot systems | NSU Intelligent Robotics (NIRO) Lab |
| Jul 2023 – present | MSc Computer Science & Engineering, CGPA 3.92/4.00 | North South University |
| Aug – Dec 2024 | Research work on high-performance computing with Dr. Mohammad Abdul Qayum; Teaching Assistant for his Computer Architecture & Organization course (MIPS, assembly, Verilog, CPU design) | North South University |
| Dec 2023 – Jul 2024 | Jr. AI Engineer: built two platforms in 7 months. Order-data extraction pipeline for 20+ brands (PDF to JSON, AWS ECS/Fargate/Lambda); Trend Research Platform (Instagram scraping, locally deployed DeepSeek-VL attribute tagging, trend analytics) | NITEX, fashion-tech startup |
| May – Sep 2022 | Google Summer of Code contributor: Video Swin Transformer in TensorFlow 2, weights ported from PyTorch, published on TF Hub. Mentors: Luiz Gustavo Martins, Sayak Paul. TF Hub later migrated the models to Kaggle Models under the Kaggle account: https://www.kaggle.com/models/kaggle/video-swin-transformer, **2,636 downloads** as of Oct 2026. | TensorFlow |
| Dec 2021 – Apr 2022 | Research Intern: dialogue graphs from MultiWOZ (tf-idf, topic modeling, x-means, DBSCAN) | DeepPavlov.ai |
| 2024 | Large Language Model Agents MOOC | UC Berkeley |

**Projects**
- BotForge (2025, via FenloAI) — AI chatbot and voice-agent platform: RAGChat, VoiceBot Pro (Twilio/Vapi), OmniBot multi-channel. https://botforge.fenloai.com/ See FenloAI section below for the rest.
- AutoStock Insight (2025) — n8n pipeline: daily prices via Alpha Vantage, OpenAI sentiment, written to Google Sheets
- Img2JSON (2024) — query-driven image attribute extraction with deepseek-vl, FastAPI, Streamlit
- TurtleBot3 Patrolling (Apr 2024) — Nav2 waypoint patrol in Gazebo, Behavior Trees in C++. https://github.com/shoaib6174/TurtleBot3-Patrolling
- GetAudio (Jul 2023) — microservice audio extractor on AKS: RabbitMQ, PVCs, auto-scaling. https://github.com/shoaib6174/GetAudio
- WebMart (2021) — e-commerce app: React/Express front, Django back, Stripe payments

**Why AI, and how it started.**
| When | What |
|---|---|
| ~2014, age 16 | First contact with code. Grew up in a small town in Bangladesh; had seen only a handful of computers before getting his own. A few months after getting it, wanted to learn programming because programmers seemed cool. Downloaded a book on C over a thin connection and worked through the whole thing. Then HSC board exams took over and it stopped. |
| 2017 | Read Max Tegmark's *Life 3.0* in first year. That was the spark for AI. |
| 2017 – 2019 | Several attempts to learn coding and AI, all of which fizzled: JavaScript, Java, C++, and competitive programming before *Life 3.0*; CS50 after it. |
| 2019 | First thing that actually worked: a facial-recognition attendance system on a Raspberry Pi. Not even his own assignment. A friend's group had it as their Product Design project and was stuck, so he built it with them at the last minute. `[?]` photo or repo? |
| 2020 – 2022 | The rebuild. See below. |

### The rebuild (2020 – 2022)

Early 2020, just before COVID: a low point. Grades were poor because the textile courses never clicked, and the technical edge from school felt gone. Decided to take it seriously this time, and to compensate for the academic record with a view to studying abroad.

| When | Step | What it gave / what it taught |
|---|---|---|
| 2020 | Online web development bootcamp (Programming Hero, Jhankar Mahbub, an IPE graduate who himself switched to CS) | Finished it, and learned he does **not** enjoy frontend design. Also exposed gaps in CS fundamentals. |
| 2020 – 2021 | MITx MicroMasters in Supply Chain Management, 5 courses over more than a year | The math, probability, and statistics foundation later needed for ML. The 5th course had a lecture on ML in supply chains that re-sparked the AI interest, and this time the prerequisites were in place. |
| 2020 | Google IT Support Professional Certificate (Coursera) | Filled the CS basics gap. |
| 2020 – 2021 | Architecting with Google Compute Engine (DevOps) | Chased it because demand was high. Learned he does not enjoy DevOps either. |
| Q1 2021 | Microsoft Certified: Data Analyst Associate | Exam voucher came through the Microsoft Learn Student Ambassador program. Picked data analytics because it fit supply chain work. |
| 2021 | Andrew Ng's ML course + YouTube, then Microsoft Certified: Azure Data Scientist Associate | First formal ML. |
| Dec 2021 – Apr 2022 | Research Intern, DeepPavlov.ai (NLP) | First real research role. |
| Early 2022 | Decided to go for Google Summer of Code. Took two TensorFlow specializations on Coursera to prepare. | Applied, selected. GSoC 2022 with TensorFlow. |

Pattern worth naming: two of the five things he tried in 2020 to 2021 were tried specifically to find out he did not like them. The eliminations were as useful as the hits.

### The bridge (2023 – 2025): from theory back to building

| When | Step | Notes |
|---|---|---|
| Jul 2023 | Enrolled in the NSU MSc to work with a quantum computing faculty member. | See facet 2 for how that resolved. |
| Dec 2023 | After one semester, joined NITEX, a fashion-tech startup, as Jr. AI Engineer. | The turn toward building. |
| Dec 2023 – Jul 2024 | Built two platforms in seven months: an order-data extraction pipeline serving 20+ brands, and a Trend Research Platform using a locally deployed DeepSeek-VL to tag fashion attributes from photos. | |
| 2024 | Several NSU faculty he had taken courses with asked him to work as a research assistant. Left NITEX to deepen technical expertise at NSU. | Deliberate choice, not a layoff. |
| Aug – Dec 2024 | Worked with Dr. Mohammad Abdul Qayum on high-performance computing; TA for his Computer Architecture course. | |
| 2024 – 2025 | Took a robotics course under Dr. Shahnewaz Siddique and built a ROS 2 simulation project for it (TurtleBot3 Patrolling, Apr 2024). | The project that led to the lab offer. |
| Jun 2025 | Dr. Siddique offered a place in the NSU Intelligent Robotics Lab to work on robotics software and AI. Accepted. | Back to the pre-university goal, by a very long route. |

### At NIRO Lab (Jun 2025 – present)

Spent a deliberate stretch getting the fundamentals right before building: online courses in control theory and optimal control, reinforcement learning, SLAM, VLM and VLA models, and robot hardware.

| Work | Status |
|---|---|
| Agentic software architecture for a mobile robot with one arm | **Software and AI complete.** LLM agent (LangChain, local qwen2.5) decomposes natural-language tasks into Nav2 navigation, YOLO detection, and arm pick-and-place in Gazebo. JetRover platform. Repo: `llm_robot_task_planner` (needs a README). This stack becomes the base for the security robot. |
| Multi-Agent Pursuit-Evasion Game (lab project, Oct 2025 – present) | Adversarial self-play RL under partial observability. Paper targeting CoRL 2026. Repo: `safe-rl-pe`, 736+ tests, 40+ runs across two lab GPU machines. Listed on the lab site with Shoaib on it. |
| Autonomous security robot for factories | Concept done, patrols with fire and gas hazard detection. **Waiting for funding.** Textile-factory floors are the obvious first customer, which closes a loop with facet 4. |
| NSU AI SAT, a 3U CubeSat for on-board detection and tracking of space-resident objects in LEO | On-board software and AI payload. Detailed design phase done. **Moving to engineering model soon.** `[?]` partner institutions (lab site mentions APSCO in news)? |
| Fixed-wing payload drone | **Planned**, per Shoaib (2026-10-09). Possibly the lab's Agriculture Monitoring UAV; the site says only that it is planned. |
| Edge deployment | AI models on Jetson Orin, Xavier NX, Raspberry Pi, OpenCR. |

**Why robots.** Not a single decision. The realisation at NSU that he prefers building systems to theory, plus a robotics course that turned into a project, plus a faculty member who noticed. Robotics is where AI becomes a system you can watch move, which is the "build things" preference and the 2017 mechanical engineering wish landing in the same place.

### FenloAI (2025 – present), co-founder

Two co-founders. Site: https://fenloai.com, tagline "AI That Actually Works for Your Business": automation (n8n/Make), custom software, and AI agents for small businesses, fixed pricing. Contract product work run alongside the lab, deliberately, to keep contact with the business world while doing research. Every product below was built for a client.

| Product | What it is |
|---|---|
| BotForge | Omni-channel AI chatbot and voice-agent platform: RAGChat, VoiceBot Pro (Twilio/Vapi), WhatsApp, Telegram, web widget, Zapier. https://botforge.fenloai.com/ |
| Jonvexa | Workforce management platform, client project. `[?]` link if public |
| Ultrasound-to-baby-photo generator | Generative imaging product, client project. `[?]` name, link if public |
| Intelligent LinkedIn scraper | Data-collection tool, client project. |

**Why.** Same reason NITEX happened after the first semester: he likes building systems that people use, and the lab alone does not provide that. FenloAI is the standing outlet for it. It also continues the entrepreneurship thread from the BUTEX Business Club and YSI years (facet 5).

**Still open** `[?]` Who is the other co-founder, and should they be named on the site? Company website?


---

## 2. Quantum computing (2022 – 2023)

| When | What |
|---|---|
| Summer 2022 | During GSoC, read *Surely You're Joking, Mr. Feynman!*. Got interested in quantum computing. |
| 2022 | Scholarship to Qubit by Qubit's online quantum summer school (https://www.qubitbyqubit.org/), run with MIT and Berkeley researchers. Got hooked. Decided to pursue a PhD in quantum machine learning. |
| 2023 | Completed the Womanium Quantum + Professional Development program (https://womanium.org/Quantum/PDE). |
| 2022 – 2023 | Target: GSoC 2023 with ML4SCI / QMLHEP (Quantum Machine Learning for High Energy Physics), a GSoC org collaborating with CERN and several universities. |
| 2023 | To make the application stand out: IBM Certified Associate Developer, Quantum Computation using Qiskit. |
| May 2023 – present | Qiskit Advocate, IBM, earned through contributions to the Qiskit community. |
| Jun – Jul 2023 | Blogs: How to solve QUBO problems using Qiskit; How to become an IBM Certified Associate Developer (Medium). |
| 2023 | Completed the QMLHEP evaluation tasks, submitted a research proposal to GSoC 2023. **Not selected.** Later, a QMLHEP faculty member emailed personally: the proposal **had been selected by the org**, but Google had cut the funded-slot allocation that year and the proposal fell outside the quota. |
| Sep – Dec 2021 | IBM Z Ambassador (earlier, unrelated to the quantum push). |

**Why.** Feynman, then a summer school, then a concrete goal (a QML PhD) and a concrete first step (QMLHEP via GSoC). Everything in 2023 was built to serve that application.

**What it says.** Second time a major application went a full year of preparation and ended on a near-miss that was out of his hands. The GSoC 2022 success and the GSoC 2023 rejection are the same person doing the same thing; only the funding differed.

**How it ended.** After the rejection, enrolled in the NSU MSc (Jul 2023) specifically to work with a faculty member doing quantum computing research. Then two things became clear at once: he enjoys building things and systems more than pure theoretical research, however much he liked the learning phase of QC and QML; and family circumstances made a PhD abroad uncertain. The quantum chapter closed on its own terms, not by failure. The Qiskit Advocate role continues.

---|---|
| May 2023 – present | Qiskit Developer Advocate, IBM |
| 2023 | IBM Certified Associate Developer, Quantum Computation using Qiskit |
| Jul 2023 | Blog: How to become an IBM Certified Associate Developer (Medium) |
| Jun 2023 | Blog: How to solve QUBO problems using Qiskit (Medium) |
| Sep – Dec 2021 | IBM Z Ambassador |

**Why** `[?]` The Qiskit cert blog mentions Feynman and a course with MIT/Berkeley researchers. What was the hook? Is quantum still active for you or a closed chapter?

---

## 3. Books, writing, and teaching

### Books
| When | What | Publisher | Notes |
|---|---|---|---|
| 2018 | *Goniter Mojar Prosno O Uttor* (Interesting Math Questions and Answers) | Oddhoyon Prokashoni | For adolescents, class 8–12. Written in 2nd year of undergrad. https://www.rokomari.com/book/156334/goniter-mojar-proshno-o-uttor |
| 2022 | *Chotoder Gonit Olympiad* (Children's Math Olympiad), **3-book series** | Tamralipi Prokashoni | For class 2–7. One of the best sellers in the math olympiad category on Bangladesh's top online bookshop (Rokomari). Volumes: 1 https://www.rokomari.com/book/275698/chotoder-gonit-olympiad-1, 2 https://www.rokomari.com/book/275706/chotoder-gonit-olympiad-2, 3 https://www.rokomari.com/book/275708/chotoder-gonit-olympiad-3. All three verified live 2026-10-09. The complete-package link (book/277163) used on the current site returns 404; drop it. |

### Research publications
| When | What | Venue | Role |
|---|---|---|---|
| 2021 | Review: 3D printing technology for textiles and fashion | Textile Progress, Taylor & Francis | Authored the 3D-printed dress section; compiled every known 3D-printed dress and wrote the comparative analysis. |
| 2019 | Radiation-protective mobile phone cover, developed methodically in the Product Design course | `[link]` to be provided | Team project turned publication. |

### Articles and tutorials

Medium profile: https://medium.com/@shoaib6174. 19 articles. The 14 with stats total roughly **14.8K views and 7.6K reads** (Medium stats, 2026-10-09). The two quantum how-tos alone account for 6.4K views.

| When | Title | Views / reads | Theme |
|---|---|---|---|
| Jun 2026 | ROS 2 series, 5 posts in 3 days: *What I Got Wrong About ROS2*, *ROS2 from Zero*, *What I Wish I Knew Before Installing ROS2*, *The Anatomy of a ROS2 Project*, *Where a Robot Lives in Space: the URDF Mental Model* | new, no stats yet | Robotics |
| Mar 2026 | How to Match ROS 2, Gazebo, and PyTorch CUDA Versions | 73 / 30 | Robotics |
| Apr 2025 | CasADi series, 4 posts: *An Introduction to CasADi with Python* (1.3K / 663), *Solving Quadratic NLP with CasADi* (380 / 198), *Modeling Dynamics with CasADi: Simple Pendulum* (320 / 141), *Implementing NMPC with CasADi: Cart-Pole* (1.2K / 711) | 3.2K / 1.7K | Control theory |
| Sep 2023 | Algorithm revision notes: A* (469 / 205), Dijkstra (178 / 56), Kruskal (131 / 34) | 778 / 295 | CS fundamentals |
| Sep 2023 | The Rise of AR/VR/MR in Consumer Tech (LinkedIn) | — | Essay |
| Jul 2023 | How to solve Graph Coloring with Qiskit's Grover algorithm | 902 / 514 | Quantum |
| Jul 2023 | How to Become an IBM Certified Associate Developer, Qiskit | **3.6K / 1.9K** | Quantum |
| Jun 2023 | How to solve QUBO problems using Qiskit | **2.8K / 1.5K** | Quantum |
| Mar 2022 | No-Code Machine Learning series (GitHub) | — | Teaching |
| Aug 2021 | Extract Text From Image with Flask and Azure Computer Vision | 1.2K / 533 | Tutorial |
| Jul 2021 | How I became Azure Data Scientist Associate | 218 / 128 | Certification |
| Jul 2021 | How to become Azure Data Analyst Associate | 2K / 1K | Certification |

Pattern: every time he learns something, a write-up follows within days (quantum in 2023, CasADi in 2025, ROS 2 in 2026). The writing is a learning method, not a content strategy. Pairs with the two math books.

Article URLs (from the RSS feed, 2026-10-09):
- https://medium.com/@shoaib6174/where-a-robot-lives-in-space-the-urdf-mental-model-i-wish-i-had-on-day-one-537aac323d1e
- https://medium.com/@shoaib6174/the-anatomy-of-a-ros2-project-how-everything-connects-62bb07c59b72
- https://medium.com/@shoaib6174/what-i-wish-i-knew-before-installing-ros2-a-survival-guide-to-build-tools-shells-and-executables-75e50f08ba33
- https://medium.com/@shoaib6174/ros2-from-zero-a-no-code-reference-for-beginners-d14c0368d53c
- https://medium.com/@shoaib6174/what-i-got-wrong-about-ros2-and-the-mental-model-that-finally-clicked-eea090e69d62
- https://medium.com/@shoaib6174/how-to-match-ros-2-gazebo-and-pytorch-cuda-versions-for-any-ubuntu-and-gpu-fbfc7bb8ba23
- https://medium.com/@shoaib6174/implementing-nmpc-with-casadi-cart-pole-system-62f1d72f2efa
- https://medium.com/@shoaib6174/modeling-dynamics-with-casadi-simulation-of-a-simple-pendulum-9c10f72ffae8
- https://medium.com/@shoaib6174/solving-quadratic-nlp-with-casadi-7a49948d8c64
- https://medium.com/@shoaib6174/an-introduction-to-casadi-with-python-12055f8e652f
- https://medium.com/@shoaib6174/how-to-become-an-ibm-certified-associate-developer-quantum-computation-using-qiskit-v0-2x-43936bee9d62
- https://medium.com/@shoaib6174/how-to-solve-qubo-problems-using-qiskit-f4eab6cc3061
- https://medium.com/@shoaib6174/build-a-web-app-to-extract-text-from-image-using-flask-and-azures-computer-vision-api-1ee470b66050
- https://medium.com/@shoaib6174/how-to-become-a-microsoft-certified-data-analyst-associate-f109a2bdf65
- `[link]` Grover graph coloring, A*, Dijkstra, Kruskal, Azure Data Scientist: older than the feed window, need URLs.

### Teaching
- Aug – Dec 2024: Teaching Assistant, NSU (see facet 1)

**Origin.** Not an olympiad competitor. Simply enjoyed math when most people around him didn't, and wanted to pass that on. Sole author of both books.

**Gaps** `[?]`
- Any other tutoring, workshops, or talks given?

---

## 4. Engineering & operations roots (BUTEX, 2017 – 2022)

| When | What | Where |
|---|---|---|
| Jan 2017 – Dec 2022 | BSc Textile Engineering, major Industrial & Production Engineering (IPE), CGPA 3.12/4.00. Condensed curriculum: every term mixed textile courses (yarn, fabric, wet processing, apparel) with IPE courses (programming, electrical, mechanical, automation and control, instrumentation, product design, CAD/CAM, operations research, simulation, supply chain). Full list: `docs/butex-courses.md`. He liked the IPE half; the textile half was not the kind of engineering he had wanted | Bangladesh University of Textiles (BUTEX) |
| 2019 | Product Design course: radiation-protective mobile cover, methodical design process, later published (see facet 3) | BUTEX |
| 2020 – 2021 | MicroMasters in Supply Chain Management | MITx |
| 2020 | Lean Six Sigma Yellow Belt | Technical University of Munich |
| 2021 | Google Project Management Specialization | Google |
| 2021 | Architecting with Google Compute Engine Specialization | Google |
| 2020 | Google IT Support Professional Certificate | Google |
| 2020 | Complete Web Development Course with Jhankar Mahbub | Programming Hero |
| 2022 | Microsoft Certified: Azure Data Scientist Associate + Data Analyst Associate | Microsoft |
| Jul 2014 – Jun 2016 | HSC, GPA 5.00/5.00 | Rajuk Uttara Model College |

**Why textiles.** The first choice was mechanical engineering at IUT (Islamic University of Technology). Got admitted, but without a scholarship, and the family could not afford the fees. BUTEX is public, and its Industrial & Production Engineering department was the closest affordable route to the same material: it had a robotics group `[?]` (club? lab?), and courses in mechanical and electrical engineering, product design, SolidWorks, and CATIA. The textile half of the curriculum never clicked; the engineering half did.

**Candidate story spine.** Robotics was the goal before university, not a late pivot. Textiles was the detour the finances forced, and the IPE side of BUTEX kept the original interest alive until the MSc and NIRO Lab brought it back on track. Worth testing as the thread that connects facets 1 and 4.

**Still open** `[?]` When did the decision to leave the textile sector become firm, and what did the IPE side leave you with that you still use (systems thinking, production, supply chains)?

---

## 5. Leadership, debate, and the entrepreneurial ecosystem

### At BUTEX
| When | What |
|---|---|
| 2017 (1st year) | Class Representative |
| 2017 | Founding-era member of the newly formed BUTEX Business Club |
| 2017 – 2018 `[?]` year | Played a crucial role in organising **TEXBIZ**, BUTEX's first national-level competition, through the Business Club. Highly appreciated for it. `[photo]` |
| 2021 – 2022 | Vice President, BUTEX Business Club `[photo]` |
| 2017 (1st year) | **Runner-up, Intra-University Debate Championship**, 3-member team. **Best speaker in 2 debates.** `[photo]` |

### Entrepreneurial ecosystem
| When | What |
|---|---|
| 2018 – 2019 | Campus Teams Coordinator, YSI Bangladesh: managed campus teams across **50+ universities** in Bangladesh |
| 2017 – 2022 | Participated in many entrepreneurship trainings and idea competitions. No specific wins to name; the exposure is the point. |

### Tech community
| When | What |
|---|---|
| 2021 – 2024 | Microsoft Learn Student Ambassador (Beta) |
| May 2023 – present | Qiskit Developer Advocate, IBM (see facet 2) |
| Sep – Dec 2021 | IBM Z Ambassador |

**Why** `[?]` What did the debate and the business club give you that the engineering courses did not? Did the entrepreneurial exposure shape the BotForge-style product work later?

---

## 6. Languages

- Bengali: native
- English: IELTS 7.5 (R 8.5, L 8.5, S 7, W 6.5)
- Chinese: HSK 1
- Hindi: proficient understanding

**Why Chinese.** Started with robotics papers: a large share of the newest work he was reading came from Chinese universities. That led to reading about China itself, the longest continuously running civilisation, with Hanzi characters traceable back 3,000+ years and a long record of innovation. Learning the language became a way to understand the people behind the papers, not a career box to tick. Passed HSK 1. Travelled to China in October 2024 on a two-week China-South Asia Bridge program hosted by Yunnan University, Kunming: classes on Chinese culture, traditions, the political system, and development; lab tours; museum visits; sightseeing. `[photo]`

Pattern: this is the same move as reading *Life 3.0* in 2017 or Feynman in 2022. Curiosity about a thing turns into going and learning it properly.

---

## 7. Outside study and work

### Travel
| When | Where | Notes |
|---|---|---|
| 2018 | India: Shimla, Manali, Agra, Delhi, Kolkata | First trip abroad `[?]` |
| Oct 2024 | China: Kunming, Yunnan University, two-week China-South Asia Bridge program | See facet 6. |
| May 2025 | Nepal: trekked **solo, without a guide, to Annapurna Base Camp**. Also bungee jumping and the canyon swing. `[photo]` | |

### Reading
A lifelong habit with a clear arc, and the one place every other facet started (*Life 3.0*, Feynman, the C book, the robotics papers).

| Phase | What |
|---|---|
| Childhood | Horror, then Bengali thrillers: *Tin Goyenda*, *Masud Rana*. Then Jules Verne and Sherlock Holmes. Some of the great Bengali literature at school. |
| College (HSC years) | First access to English books. Crime thrillers, fantasy, sci-fi. |
| University | Self-help and business books, most of the well-known ones. Biographies became a lasting favourite. |
| 2019 – 2023 | A gap. (Lines up with the rebuild years.) |
| 2023 – present | World literature and philosophy: Dostoevsky, Tolstoy, Murakami, Camus, Nietzsche, Hemingway, *The Fountainhead*. Non-fiction: Nassim Taleb, *The Hard Thing About Hard Things*, Naval Ravikant. Plus books on whatever he is currently learning. |

**Would recommend to anyone** (his list, more to come):
- *Shoe Dog*, Phil Knight
- *Notes from Underground*, Dostoevsky
- *Sapiens*, Yuval Noah Harari
- *Fooled by Randomness*, Nassim Taleb
- *Life 3.0*, Max Tegmark (the 2017 AI spark, facet 1)
- *Surely You're Joking, Mr. Feynman!* (the 2022 quantum spark, facet 2)
- *No Longer Human*, Osamu Dazai

Two of the seven are the books that started whole chapters of the log. `[?]` One line each on why, optional, for the site.

### Film and TV
Watches a lot: films, TV shows, sitcoms, anime. Deliberately wide: every industry, most genres, any language as long as subtitles exist, and any era from the 1940s to the latest release.

**Would recommend to anyone** (his list, more to come, spanning Japan, the US, India, Ireland, Argentina, Indonesia, and 1946 to the 2020s):
- *Perfect Days* (2023, Japan/Germany)
- *It's a Wonderful Life* (1946, US)
- *A Beautiful Mind* (2001, US)
- *Yeh Jawaani Hai Deewani* (2013, India)
- *The Banshees of Inisherin* (2022, Ireland)
- *Wild Tales* (2014, Argentina)
- *Sore: Istri dari Masa Depan* / *Sore: A Wife from the Future* (Indonesia)
- *Rashomon* (1950, Japan)
- *The Big Bang Theory*, *Friends*, *Person of Interest*, *Silicon Valley* (TV)
- *Attack on Titan* (anime)

Same curiosity-without-borders pattern as the reading and the Chinese.

### Personal
- Only child.
- A believer. **Not for the site**, by his choice. Kept here for context only.
- Sports: cricket growing up, football now. Watches in the stadium, plays in FIFA. Supports Barcelona and Argentina, but mostly picks Real Madrid in FIFA. His line: "I am not artistic enough to play as Barcelona." That line can go on the site as is.
- Music: ghazals, classical blues, Bengali Baul and folk songs, old Bangladeshi band songs. Listens for the lyrics first.

### Still to add `[?]`

Things a resume never captures, but a branding site should. Add anything that applies:
- Childhood / school chapters: C at 16 is logged in facet 1. Anything else, such as competitions, hobbies, what kind of student you were?
- Photography or any other hobby not yet listed.
- Failures, pivots, or detours that shaped you
- Side businesses or freelance work
- Volunteering outside the listed roles
- What you want next (the forward-looking part of a brand)

---

## Material Shoaib will provide

- `[photo]` BUTEX Business Club: first national competition, VP period
- `[photo]` Debate championship / best speaker
- `[file]` BUTEX course list
- `[link]` Radiation-protective mobile cover publication
- Correct Medium URLs for the two mis-linked blog posts
- `[photo]` China trip, Annapurna trek, if any

## Facts to verify before publishing

- Site says MLSA "2021 – Present"; resume says 2021 – 2024. Which is right?
- Year TEXBIZ was first held.
- Was the BUTEX IPE "robotics" a club, a lab, or a course track?

## Link check (2026-10-09)

All URLs in this file were fetched. Results:

- **Live:** fenloai.com, both GitHub repos, qubitbyqubit.org, womanium.org, the 2018 book, and all three 2022 volumes.
- **Dead:** the Rokomari complete-package link (book/277163) used on the current site's Publications page returns 404. Use the three volume links instead.
- **Broken deployment:** https://botforge.fenloai.com/ and bot.fenloai.com resolve to 100.29.225.166, which presents an AWS EKS **kube-apiserver** certificate (CN=kube-apiserver, issued 2026-10-04) and answers 401. The DNS record points at the Kubernetes control plane, not at the app's ingress or load balancer. Browsers show a certificate error. Repoint the DNS, and consider restricting public access to the EKS API endpoint. Do not link BotForge from the site until fixed.
- **Still wrong on the current site:** the Azure Data Scientist blog post links to the Data Analyst article's URL. Correct link needed. The Flask OCR post's correct URL was recovered from its repo README.
- nirolab.github.io/people returns 404 to curl because it is a single-page app; it renders fine in a browser.

---

## GitHub

Full audit with keep / archive / delete verdicts: `docs/github-audit.md`. Lab profile at https://nirolab.github.io/people lists him as Research Assistant with tags Multi-modal Models, Computer Vision, Reinforcement Learning, Robotic Manipulation.

## Numbers sourced from repositories (verified 2026-10-09)

- **Four of five demo scenarios pass** for the LLM robot task planner: `docs/demo_results.md` in `shoaib6174/llm_robot_task_planner`. Scenarios 1, 2, 4, 5 pass; scenario 3 (multi-step cleanup) is partial, AMCL drift after repeated rotation scans.
- **Self-play stable past 10 million steps** and **capture rate collapses to 0% without the visibility reward**: README of `shoaib6174/safe-rl-pe`, sections "Stabilization Mechanisms" and "Results Snapshot" (ABL-1).
- **736+ unit tests, 40+ training runs, two lab GPU machines, 36 papers reviewed, paper targeting CoRL 2026**: same README.
- **A hundred plays of cards** in Qiskit Treasure Hunt: README of `shoaib6174/Qiskit-Treasure-Hunt`.
- **Local model qwen2.5:7b via Ollama** for the task planner: `docs/demo_results.md`, config column.

- **Twenty-one articles** is the site's count: 19 on Medium plus the LinkedIn essay and the No-Code ML series on GitHub.
- **TurtleBot3 patrols four waypoints**: README of `shoaib6174/TurtleBot3-Patrolling`.
- **GuardShield guard order and three degradation levels**: README of `shoaib6174/guard-shield`.
- **BotForge features** (citations and knowledge-gap flag, transcription, sentiment, escalation, tracing and evaluation): README of `shoaib6174/fenlo-bot`.
- **GetAudio services** (gateway, auth, converter, JWT, RabbitMQ, PVC): README of `shoaib6174/GetAudio`.
- **HSK vocabulary trainer** (HSK 1 and 2, filters, flashcards, quiz, React/TypeScript/Vite/Tailwind): README of `shoaib6174/hsk-vocabs`.
- **Qiskit Treasure Hunt** gameplay: README of `shoaib6174/Qiskit-Treasure-Hunt`.
- **NITEX extraction pipeline OCR services** (Azure Document Intelligence, Google Cloud Vision, Amazon Textract, Tesseract) and trend platform tools (NVIDIA Triton, Elasticsearch, Instaloader): the old site's Experiences page, written by Shoaib.

## Link check additions (2026-10-09)

- https://nirolab.github.io/projects and /people render in a browser (single-page app); verified by rendering.
- https://www.linkedin.com/company/nitex returns 200.
- GitHub repositories under shoaib6174 referenced by the site were each opened during the GitHub audit.
- **Exact article titles** are taken from Shoaib's pasted Medium stats (2026-10-09) and the old site's Blogs page; `articles.json` uses them verbatim, including Medium's own punctuation.
- **TurtleBot3 patrolling** is a finished course project, status "closed" on the site.

## Verified in pass 3 (2026-10-09), so later readers need not re-check

- "Next, the physical JetRover": `PRD_llm_robot_task_planner.md`, Phase 2 notes (Hiwonder JetRover, Jetson Orin NX).
- The red-cube scenario, the five plan steps used in the home hero, and replanning: `docs/demo_results.md`, scenarios 1 and 2 (S11 run).
- Pursuit-evasion environment (unicycle, obstacles, field of view) and best-response tests against frozen snapshots: `safe-rl-pe` README.
- LaBSE vs BERT on Russian translations: `MultiWOZ-Intent-Classification` README.
- Video Swin: UCF101 fine-tuning, cosine decay with warm-up, TF Hub feature extractors: `GSOC-22-Video-Swin-Transformers` README.
- BotForge stack FastAPI and PostgreSQL: `fenlo-bot` README.
- GuardShield: spaCy, token bucket, Hugging Face classifiers, "built as a learning project", status line: `guard-shield` README.
- Qiskit Treasure Hunt created 2023-06-27 (GitHub API).
- No-Code ML covers Azure ML Designer and AutoML: `No-Code-ML` README.
- LinkedIn XR essay URL returns 200.
- Still open, from Shoaib: FenloAI founding month; whether the GetAudio cluster is still down; the HSK app motive line; when Chinese study started relative to the Kunming trip.
