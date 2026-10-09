---
title: "GetAudio"
years: "2023"
area: "infra"
role: "build"
status: "closed"
summary: "Audio extraction from video as a set of microservices on Azure Kubernetes Service."
why: "I wanted to understand Kubernetes by running something real on it."
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
featured: false
order: 7
---

Gateway, authentication, and converter services run as pods. RabbitMQ carries the task queue and notifications, persistent volumes hold the files, and the cluster handles replication, auto-healing, and scaling. The cluster is no longer running. The repository has the architecture and the setup.
