---
title: "GuardShield"
years: "2026"
area: "llm"
role: "build"
status: "running"
summary: "Safety middleware for language-model applications: an ordered pipeline of guards, circuit breakers per guard, and graceful degradation."
why: "Every LLM system needs the same input checks. I built the general version once, as a learning project, to understand the failure modes properly."
stack:
  - "Python"
  - "Hugging Face classifiers"
  - "spaCy"
  - "Token bucket"
  - "Circuit breaker"
links:
  - label: "Repository"
    href: "https://github.com/shoaib6174/guard-shield"
order: 10
---

Guards run cheapest first: rate limiting, regex patterns, toxicity and prompt-injection classifiers, PII detection, then zero-shot topic filtering. The pipeline short-circuits on the first block. Each guard has a circuit breaker and a fail-open or fail-closed setting, and the whole thing degrades in three levels when models are unhealthy. The core pipeline and ML guards are implemented. Production hardening is in progress.
