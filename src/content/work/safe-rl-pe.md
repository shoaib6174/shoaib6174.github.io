---
title: "Multi-agent pursuit-evasion with reinforcement learning"
years: "2025 to now"
area: "robots"
role: "build"
status: "paper-in-preparation"
summary: "Adversarial self-play for one-on-one pursuit-evasion under partial observability, with the mechanisms that keep it from collapsing."
why: "Standard self-play collapses when the agents cannot see each other. We wanted to know which ingredients keep both policies improving, and whether the result is an equilibrium or only looks like one."
stack:
  - "Stable-Baselines3"
  - "Gymnasium"
  - "PettingZoo"
  - "PyTorch"
  - "CUDA"
  - "TensorBoard"
links:
  - label: "Repository"
    href: "https://github.com/shoaib6174/safe-rl-pe"
  - label: "Lab project page"
    href: "https://nirolab.github.io/projects"
featured: true
order: 3
---

Lab research with Dr. Shahnewaz Siddique. The environment is a unicycle pursuer and evader with obstacles and a limited field of view. We test which mechanisms keep self-play stable under partial observability, with an ablation for each. We also test whether the fixed point it reaches is an equilibrium, by training fresh best-response agents against frozen snapshots.

Forty-plus training runs across two lab GPU machines, 736 tests, a decision log, and a paper in preparation for CoRL 2026.
