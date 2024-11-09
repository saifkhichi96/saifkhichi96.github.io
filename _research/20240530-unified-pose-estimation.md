---
layout: research
title: "Estimating Human Poses Across Datasets: A Unified Skeleton and Multi-Teacher Distillation Approach"
seo_title: "A Unified Skeleton and Multi-Teacher Distillation Approach for Estimating Human Poses Across Datasets"
short_title: "Estimating Human Poses Across Datasets"
abstract: "Human pose estimation is a key task in computer vision with various applications such as activity recognition and interactive systems. However, the lack of consistency in the annotated skeletons across different datasets poses challenges in developing universally applicable models. To address this challenge, we propose a novel approach integrating multi-teacher knowledge distillation with a unified skeleton representation. Our networks are jointly trained on the COCO and MPII datasets, containing 17 and 16 keypoints, respectively. We demonstrate enhanced adaptability by predicting an extended set of 21 keypoints, 4 (COCO) and 5 (MPII) more than original annotations, improving cross-dataset generalization. Our joint models achieved an average accuracy of 70.89 and 76.40, compared to 53.79 and 55.78 when trained on a single dataset and evaluated on both. Moreover, we also evaluate all 21 predicted points by our two models by reporting an AP of 66.84 and 72.75 on the Halpe dataset. This highlights the potential of our technique to address one of the most pressing challenges in pose estimation research and application - the inconsistency in skeletal annotations."
authors: Muhammad Saif Ullah Khan, Dhavalkumar Limbachiya, Didier Stricker, Muhammad Zeshan Afzal
category: [Article, Preprint, Human Pose Estimation, Multi-Teacher Distillation, Unified Skeleton]
arxiv: 2405.20084
bibtex: "@article{khan2024estimating,
\n  title={Estimating Human Poses Across Datasets: A Unified Skeleton and Multi-Teacher Distillation Approach},
\n  author={Khan, Muhammad Saif Ullah and Limbachiya, Dhavalkumar and Stricker, Didier and Afzal, Muhammad Zeshan},
\n  journal={arXiv preprint arXiv:2405.20084},
\n  year={2024}
}"
date: May 30, 2024
syntax: true
permalink: /research/unified-pose-estimation/
---

<!-- TL;DR -->
# TL;DR
{: .title}

1. We propose a unified skeleton representation for human pose estimation across datasets.
2. Our multi-teacher distillation approach improves cross-dataset generalization.
3. We achieve an average accuracy of 70.89 and 76.40 on COCO and MPII datasets, respectively.
