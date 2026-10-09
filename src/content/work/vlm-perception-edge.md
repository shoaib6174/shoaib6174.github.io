---
title: "Vision-language models on robot hardware"
years: "2025 to now"
area: "robots"
role: "build"
status: "running"
summary: "Perception and decision pipelines built on vision-language and vision-language-action models, deployed on edge devices."
why: "Most of the recent robotics results I read use vision-language models for perception and VLA models for control. The lab's robots run on Jetson boards, so the work is getting those models to run where the robot is, within its power budget."
stack:
  - "VLM and VLA models"
  - "Isaac Sim and Isaac Lab"
  - "Jetson Orin"
  - "Jetson Xavier NX"
  - "Raspberry Pi"
  - "OpenCR"
  - "ROS 2"
links:
  - label: "NIRO Lab"
    href: "https://nirolab.github.io/"
featured: true
order: 2
coverSlot: "Photo: a lab robot with a Jetson board"
---

At NSU Intelligent Robotics Lab I work on perception and decision-making pipelines that run on the robot. Vision-language models for scene understanding, vision-language-action models for control, and the ROS 2 plumbing between them and the hardware. Simulation in Isaac Sim and Isaac Lab, deployment on Jetson Orin, Xavier NX, Raspberry Pi, and OpenCR boards.

Before any of this I spent the first months in the lab on fundamentals I had skipped: control theory and optimal control, reinforcement learning, SLAM, and the hardware itself.
