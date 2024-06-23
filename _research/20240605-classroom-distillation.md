---
layout: research
title: "Classroom-Inspired Knowledge Distillation with Adaptive Peer Ranking"
seo_title: "Classroom-Inspired Knowledge Distillation with Adaptive Peer Ranking"
short_title: "Classroom-Inspired Knowledge Distillation"
abstract: "We introduce ClassroomKD, a novel knowledge distillation framework inspired by classroom environments to enhance the knowledge transfer between the student, the teacher, and multiple diverse peers. The framework comprises two main modules: the Knowledge Filtering (KF) Module and the Mentoring Module. In the KF Module, the student evaluates its performance and selectively seeks feedback from higher-ranked peers and teachers based on their prediction accuracy, filtering effective feedback and minimizing confusion. The Mentoring Module adjusts teaching strategies according to the student's understanding level by dynamically modulating the curriculum temperature, bridging the dynamic capacity gap between the student and the mentors. Extensive experiments on CIFAR-100 demonstrate that our approach significantly improves student model performance. We show improvement over both logit-based and feature-based methods using several networks of the same and different architectural styles. Our results suggest that students learn more effectively in a diverse classroom with strategically chosen feedback and adaptive teaching. This offers a promising future direction in effective knowledge transfer between models."
authors: Shalini Sarode, Muhammad Saif Ullah Khan, Tahira Shehzadi, Didier Stricker, Muhammad Zeshan Afzal
category: [Article, Preprint, Knowledge Distillation, Peer Ranking, Adaptive Teaching, Image Classification]
date: June 05, 2024
syntax: true
permalink: /research/classroom-distillation/
---

[Read Full-Text](#)
{: .mdc-button .mdc-button--unelevated target="_blank"}

<!-- TL;DR -->
<div class="mdc-card mdc-card--outlined highlighted" style="margin: 1em 0;">
    <h6 class="mdc-typography--headline6">TL;DR</h6>
    <ol>
        <li>We reformulate cross-dataset human pose estimation as a continual learning task.</li>
        <li>We propose a novel Importance-Weighted Distillation method for incremental integration of keypoints and pose variations.</li>
        <li>Our approach outperforms existing regularization-based continual learning strategies by 0.71% on average.
    </ol>
</div>

## How to Cite

If you find this useful, please include the following citation in your work:

```bibtex
@article{khan2024continual,
  title={Continual Human Pose Estimation for Incremental Integration of Keypoints and Pose Variations},
  author={Khan, Muhammad Saif Ullah and Khan, Muhammad Ahmed Ullah and Stricker, Didier and Afzal, Muhammad Zeshan},
  journal={OpenReview Preprint},
  year={2024}
}
```