---
title: "GetAudio"
years: "2023"
area: "infra"
role: "build"
status: "closed"
summary: "Audio extraction from video as a set of microservices on Azure Kubernetes Service."
why: "I wanted to understand Kubernetes by running something real on it, not by reading about it."
stack:
  - "Kubernetes"
  - "AKS"
  - "Docker"
  - "RabbitMQ"
  - "PersistentVolumeClaim"
  - "JWT"
  - "Python"
links:
  - label: "Repository"
    href: "https://github.com/shoaib6174/GetAudio"
featured: true
order: 7
---

Gateway, authentication, and converter services as pods, RabbitMQ for the task queue and notifications, persistent volumes for the files, and the cluster handling replication, auto-healing, and scaling. The cluster is no longer running; the repository has the architecture and the setup.
