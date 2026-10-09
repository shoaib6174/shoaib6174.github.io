---
title: "Fashion trend research platform"
years: "2024"
area: "llm"
role: "build"
status: "shipped"
summary: "Ingests Instagram photos, tags clothing categories and attributes with a locally deployed vision-language model, and turns tag frequencies into trend signals over time."
why: "NITEX wanted trend signals from what people were actually wearing in photos. The hard part was running a vision-language model locally at the volume the pipeline needed, and turning raw tags into something a merchandiser could read."
stack:
  - "DeepSeek-VL"
  - "NVIDIA Triton"
  - "FastAPI"
  - "PostgreSQL"
  - "Elasticsearch"
  - "Docker"
  - "Instaloader"
links:
  - label: "NITEX, 2023 to 2024"
    href: "/route/2023-nitex/"
featured: true
order: 4
---

One of two platforms I built at NITEX in seven months. The pipeline downloads images from selected Instagram accounts, tags each garment's category and attributes with DeepSeek-VL served through Triton, and stores the results in PostgreSQL and Elasticsearch. Downstream analytics aggregate tag frequencies, model how they shift over time, and surface rising and falling attributes.
