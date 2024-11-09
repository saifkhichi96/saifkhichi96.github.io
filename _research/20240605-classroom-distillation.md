---
layout: research
title: "Classroom-Inspired Multi-Mentor Distillation with Adaptive Learning Strategies"
seo_title: "Classroom-Inspired Multi-Mentor Distillation with Adaptive Learning Strategies"
short_title: "Classroom-Inspired Knowledge Distillation"
abstract: "We propose ClassroomKD, a novel multi-mentor knowledge distillation framework inspired by classroom environments to enhance knowledge transfer between student and multiple mentors. Unlike traditional methods that rely on fixed mentor-student relationships, our framework dynamically selects and adapts the teaching strategies of diverse mentors based on their effectiveness for each data sample. ClassroomKD comprises two main modules: the Knowledge Filtering (KF) Module and the Mentoring Module. The KF Module dynamically ranks mentors based on their performance for each input, activating only high-quality mentors to minimize error accumulation and prevent information loss. The Mentoring Module adjusts the distillation strategy by tuning each mentor's influence according to the performance gap between the student and mentors, effectively modulating the learning pace. Extensive experiments on image classification (CIFAR-100 and ImageNet) and 2D human pose estimation (COCO Keypoints and MPII Human Pose) demonstrate that ClassroomKD significantly outperforms existing knowledge distillation methods. Our results highlight that a dynamic and adaptive approach to mentor selection and guidance leads to more effective knowledge transfer, paving the way for enhanced model performance through distillation."
authors: Shalini Sarode, Muhammad Saif Ullah Khan, Tahira Shehzadi, Didier Stricker, Muhammad Zeshan Afzal
arxiv: 2409.20237
bibtex: "@article{sarode2024classroom,
\n  title={Classroom-Inspired Multi-Mentor Distillation with Adaptive Learning Strategies},
\n  author={Sarode, Shalini and Khan, Muhammad Saif Ullah and Shehzadi, Tahira and Stricker, Didier and Afzal, Muhammad Zeshan},
\n  journal={arXiv preprint arXiv:2409.20237},
\n  year={2024}
\n}"
category: [Article, Preprint, Knowledge Distillation, Peer Ranking, Adaptive Teaching, Image Classification]
date: June 05, 2024
syntax: true
permalink: /research/classroom-distillation/
---

<!-- TL;DR -->
## TL;DR
{: .title}

1. We introduce ClassroomKD, a novel knowledge distillation framework inspired by classroom environments.
2. Our framework comprises two main modules: the Knowledge Filtering (KF) Module and the Mentoring Module.
3. Extensive experiments on CIFAR-100, ImageNet, and COCO Keypoints demonstrate that our approach significantly improves student model performance.
4. Our results suggest that students learn more effectively in a diverse classroom with strategically chosen feedback and adaptive teaching.
