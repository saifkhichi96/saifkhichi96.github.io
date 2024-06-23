---
layout: research
title: "Continual Human Pose Estimation for Incremental Integration of Keypoints and Pose Variations"
seo_title: "Continual Human Pose Estimation for Incremental Integration of Keypoints and Pose Variations"
short_title: "Continual Human Pose Estimation"
abstract: "This paper reformulates cross-dataset human pose estimation as a continual learning task, aiming to integrate new keypoints and pose variations into existing models without losing accuracy on previously learned datasets. We benchmark this formulation against established regularization-based methods for mitigating catastrophic forgetting, including EWC, LFL, and LwF. Moreover, we propose a novel regularization method called Importance-Weighted Distillation (IWD), which enhances conventional LwF by introducing a layer-wise distillation penalty and dynamic temperature adjustment based on layer importance for previously learned knowledge. This allows for a controlled adaptation to new tasks that respects the stability-plasticity balance critical in continual learning. Through extensive experiments across three datasets, we demonstrate that our approach outperforms existing regularization-based continual learning strategies. IWD shows an average improvement of 0.71% over the state-of-the-art LwF method. The results highlight the potential of our method to serve as a robust framework for real-world applications where models must evolve with new data without forgetting past knowledge."
authors: Muhammad Saif Ullah Khan, Muhammad Ahmed Ullah Khan, Didier Stricker, Muhammad Zeshan Afzal
category: [Article, Preprint, Human Pose Estimation, Continual Learning, Regularization, Distillation]
date: June 05, 2024
syntax: true
permalink: /research/continual-pose/
---

[Read Full-Text](#)
{: .mdc-button .mdc-button--unelevated target="_blank"}

<!-- TL;DR -->
<div class="mdc-card mdc-card--outlined highlighted" style="margin: 1em 0;">
    <h6 class="mdc-typography--headline6">TL;DR</h6>
    <ol>
        <li>We reformulate cross-dataset human pose estimation as a continual learning task.</li>
        <li>We propose a novel Importance-Weighted Distillation method for incremental integration of keypoints and pose variations.</li>
        <li>Our approach outperforms existing regularization-based continual learning strategies by 0.71% on average.</li>
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