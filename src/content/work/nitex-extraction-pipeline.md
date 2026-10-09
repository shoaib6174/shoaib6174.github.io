---
title: "Order-data extraction pipeline"
years: "2024"
area: "llm"
role: "build"
status: "shipped"
summary: "Extracts structured order data from PDFs for twenty-plus fashion brands, each with its own document format, and returns JSON."
why: "Every brand sent orders as a differently laid-out PDF. I tested four OCR services against the real documents, integrated them, and shipped it as a service the operations team could call."
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
  - label: "NITEX, 2023 to 2024"
    href: "/route/2023-nitex/"
order: 8
---

One of the two NITEX platforms. A containerised service that takes a brand's order PDF, runs it through the integrated OCR backends, and returns the fields the operations team needs as JSON. Deployed on AWS ECS and Fargate, with Lambda for the bursty parts. A Streamlit front end for the people who used it.
