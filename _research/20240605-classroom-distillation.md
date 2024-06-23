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
        <li>We introduce ClassroomKD, a novel knowledge distillation framework inspired by classroom environments.</li>
        <li>Our framework comprises two main modules: the Knowledge Filtering (KF) Module and the Mentoring Module.</li>
        <li>Extensive experiments on CIFAR-100 demonstrate that our approach significantly improves student model performance.</li>
        <li>Our results suggest that students learn more effectively in a diverse classroom with strategically chosen feedback and adaptive teaching.</li>
    </ol>
</div>

## How to Cite

If you find this useful, please include the following citation in your work:

```bibtex
@article{sarode2024classroom,
  title={Classroom-Inspired Knowledge Distillation with Adaptive Peer Ranking},
  author={Sarode, Shalini and Khan, Muhammad Saif Ullah and Stricker, Didier and Afzal, Muhammad Zeshan},
  journal={OpenReview Preprint},
  year={2024}
}
```