---
title: "Video Swin Transformer in TensorFlow 2"
years: "2022"
area: "ml"
role: "build"
status: "shipped"
summary: "TensorFlow 2 implementations of the Video Swin Transformer models, weights converted from PyTorch, published on TF Hub and later moved to Kaggle Models."
why: "Google Summer of Code 2022 with TensorFlow, mentored by Luiz Gustavo Martins and Sayak Paul. A model that only existed in PyTorch now runs in TensorFlow with the original weights."
stack:
  - "TensorFlow 2"
  - "PyTorch"
  - "TF Hub"
  - "Kaggle Models"
links:
  - label: "Repository"
    href: "https://github.com/shoaib6174/GSOC-22-Video-Swin-Transformers"
  - label: "Kaggle Models"
    href: "https://www.kaggle.com/models/kaggle/video-swin-transformer"
featured: true
order: 6
---

The work covered the model implementations, a weight-conversion notebook from the PyTorch checkpoints, fine-tuning notebooks on UCF101, and a cosine-decay-with-warm-up learning rate schedule. TF Hub published the feature extractors; when TF Hub moved to Kaggle Models the collection moved with it, under the Kaggle account. 2,636 downloads as of October 2026.
