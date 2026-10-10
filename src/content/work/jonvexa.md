---
title: "Jonvexa"
years: "2026"
area: "product"
role: "build"
status: "shipped"
summary: "A multi-tenant workforce-management platform for a Canadian care and staffing group: onboarding with e-signed documents, scheduling and geofenced clock-in, care-recipient record books, announcements and chat, delivered as a client-owned deployment with full documentation."
why: "The client, one parent company with three operating companies in adult foster care, staffing, and cleaning, was paying for a subscription product that did not fit how they worked. They wanted one system their office staff, field staff on phones, and care recipients could all use, on their own servers."
stack:
  - "Next.js 16"
  - "React 19"
  - "TypeScript"
  - "Prisma"
  - "PostgreSQL"
  - "Tailwind"
  - "Playwright"
  - "Vitest"
  - "nginx"
  - "DigitalOcean"
  - "Web Push"
links:
  - label: "FenloAI"
    href: "https://fenloai.com"
featured: true
order: 4
---

Built at FenloAI as sole developer and delivery lead: requirements from the client's own checklists and process material, design specs, implementation, tests, deployment, documentation, and handover. A fixed-price engagement in three phases over about six weeks, live on 10 October 2026 after 54 production deploys.

**What it does.** Onboarding with per-group requirement lists, upload-and-verify documents, fill-then-sign forms that produce sealed PDFs with hash evidence, training courses with quizzes and graded written answers, a review queue, and expiry reminders. Scheduling with repeating shifts, open-shift offers and swaps, time off, geofenced clock-in and clock-out on a hash-chained event record, per-shift daily logs, and hours reports. Care records: residences and placements, record books including a medication administration record, office-side files and notes, and a client-facing page showing who is on shift today. Announcements with acknowledgements, chat with channels, groups, photos, voice notes, mentions, moderation and retention, and an audited oversight console. Roles and permissions, a multi-company console, a super-admin layer with logged corrections and reversals, and a per-person activity trail.

**Scale and checks.** About 650 inventoried controls across four portals and 190 documented user journeys. Roughly 2,900 unit tests and 370 end-to-end browser tests run as a gate before every deploy, with an emulated-phone pass and a screenshot harness that regenerates every manual picture from a seeded demo company.

**Engineering.** Tenant isolation enforced in every query. Sealed documents and clock events are append-only with hash chains. Sensitive fields encrypted at rest and masked everywhere. A security pass before delivery covered SSRF, cross-tenant upload, content security policy, and cookie hardening. Ontario's PHIPA frames the care records; PIPEDA and the Electronic Commerce Act frame the e-signatures.

**Documentation.** A fifteen-part feature reference with numbered rules, three task-by-task manuals with screenshots, a walkthrough script, a pre-delivery review script, a deploy runbook, and handover notes on infrastructure, backups, and accounts. The platform is being transferred to the client's own accounts, with maintenance to follow.
