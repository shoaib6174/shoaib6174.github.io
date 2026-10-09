---
title: "LLM robot task planner"
years: "2026"
area: "robots"
role: "build"
status: "running"
summary: "A language model plans and executes multi-step tasks for a mobile robot with an arm, in simulation."
why: "I wanted to see how far a local language model could go as the planner for a real robot stack. The answer so far: it can decompose a request, call navigation, perception, and manipulation as tools, and replan when a step fails."
stack:
  - "ROS 2"
  - "Nav2"
  - "YOLO"
  - "Gazebo"
  - "LangChain"
  - "Qwen2.5 via Ollama"
  - "JetRover"
links:
  - label: "Repository"
    href: "https://github.com/shoaib6174/llm_robot_task_planner"
featured: true
order: 1
coverSlot: "Demo: the robot fetching the red cube from room A to room B"
---

Give it "bring the red cube from room A to room B". The agent navigates to room A with Nav2, finds the cube with YOLO, picks it up, drives to room B, and places it. If the cube is not where it expected, it searches the other room and replans.

Four of five demo scenarios pass. The one that only partly passes, moving all cubes at once, loses localisation after after repeated rotation scans. That is a known AMCL limitation and the next thing to fix.

The same software and agent architecture is the base for the factory security robot concept. Next is the physical JetRover.
