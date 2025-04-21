---
layout: research
title: "Unified 2D Human Pose Estimation (Project)"
seo_title: "Unified 2D Human Pose Estimation"
short_title: "Pose Fusion Project"
description: "This project aims to create a unified 2D human pose estimation model that can adapt to multiple datasets using knowledge distillation."
abstract: "The key objective of human pose estimation is to detect the set of keypoints on the human body for understanding the orientation and position of humans. It has many downstream applications in fitness, autonomous driving, surveillance, etc. The research on human pose estimation has progressed and produced numerous state-of-the-art model architectures with the availability of multiple pose estimation datasets. However, each neural network architecture is trained on a particular dataset, which performs adversely when tried on different datasets. As a result, a network that performs well on the majority of datasets is uncommon. In this work, we use the concept of knowledge distillation to train a network architecture capable of efficiently estimating poses across datasets."
authors: Dhavalkumar Bharatkumar Limbachiya, Muhammad Saif Ullah Khan
category: [Project, DFKI, Augmented Vision, Deep Learning, Human Pose Estimation, Knowledge Distillation]
date: March 2023
code: mukh07/ws23_project_limbachiya
bibtex: "@inproceedings{limbachiya2024unified,
\n  title={Unified 2D Human Pose Estimation},
\n  author={Limbachiya, Dhavalkumar Bharatkumar and Khan, Muhammad Saif Ullah},
\n  booktitle={Proceedings of the Computer Vision and Deep Learning (CVDL) Course},
\n  month={March},
\n  year={2024},
\n  pages={62-69}
\n}"
supplement:
  title: "Project Report"
  url: "https://av.cs.rptu.de/fileadmin/inf_ags/Project_Seminar/Proceedings_CVDL_WS2324_compressed.pdf#page=62.00"
syntax: true
---

## Topic
{: .title}

There are many datasets for 2D human pose estimation, each with its unique set of annotated body joints. Typically, a network is trained for each dataset separately. This approach often results in networks that excel on their specific dataset but struggle when tested on others. In this project, we will use a group of pre-trained teachers to help create a single, adaptable student network capable of efficiently estimating poses across datasets.

## Tasks
{: .title}

1. Implementing a top-down pose estimation network.
2. Running inference on pre-trained models from MMPose.
3. Training the network using knowledge distillation with multiple teachers and ground-truth datasets.


## Expected Skills
{: .title}

1. Python and PyTorch
2. Deep learning basics
3. (Prefered) Familiarity with MMPose

## Related Literature
{: .title}

- [1] [AdaptPose](#)
- [2] [Confidence-Aware Multi-Teacher Knowledge Distillation](#)
- [3] [Adaptive multi-teacher multi-level knowledge distillation](#)
