---
title: "Order-data extraction pipeline"
years: "2024"
area: "llm"
role: "build"
status: "shipped"
summary: "Extracts structured order data from PDFs for twenty-plus fashion brands, each with its own document format, and returns JSON."
why: "Every brand sent orders as a differently laid-out PDF. I tested four OCR services against the real documents, picked per-case, and shipped it as a service the operations team could call."
stack:
  - "Azure Document Intelligence"
  - "Google Cloud Vision"
  - "Amazon Textract"
  - "Tesseract"
  - "Playwright"
  - "Streamlit"
  - "AWS ECS"
  - "Fargate"
  - "Lambda"
  - "Docker"
links:
  - label: "NITEX"
    href: "https://www.linkedin.com/company/nitex"
order: 8
---

The second NITEX platform. A containerised service that takes a brand's order PDF, runs the OCR backend that works best for that layout, and returns the fields the operations team needs as JSON. Deployed on AWS ECS and Fargate with Lambda for the bursty parts, with a Streamlit front end for the people who used it.
