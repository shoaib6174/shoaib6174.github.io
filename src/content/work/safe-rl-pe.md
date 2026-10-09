---
title: "Multi-agent pursuit-evasion with reinforcement learning"
years: "2025 to now"
area: "robots"
role: "build"
status: "paper-in-preparation"
summary: "Adversarial self-play for one-on-one pursuit-evasion under partial observability, with the mechanisms that keep it from collapsing."
why: "Standard self-play collapses when the agents cannot see each other. We wanted to know which ingredients keep both policies improving past ten million steps, and whether the result is actually an equilibrium or just looks like one."
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

Lab research with Dr. Shahnewaz Siddique. The environment is a unicycle pursuer and evader with obstacles and a limited field of view. Three mechanisms keep self-play stable: a visibility reward for the pursuer, forced role switching, and a masking curriculum that anneals full observability away. Each was ablated. Without the visibility reward, capture rate falls to zero.

We also test whether the fixed point is an equilibrium by training fresh best-response agents against frozen snapshots. It is not. The evader side has an exploitability gap.

Forty-plus training runs across two lab GPU machines, 736 tests, a decision log, and a paper in preparation for CoRL 2026.
