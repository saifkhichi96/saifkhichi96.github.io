---
layout: research
title: "Gait Recognition using OpenGait (Project)"
seo_title: "Gait Recognition using OpenGait"
short_title: "Gait Recognition Project"
description: "This seminar will cover recent advances in gait recognition, a task of identifying a person by their walking style."
abstract: "Gait recognition, the process of identifying individuals based on their unique walking patterns, has significant potential in security, surveillance, and human-computer interaction. While OpenGait supports various models and datasets, this project focused on SkeletonGait++ and the Gait3D dataset. Originally designed to work with skeleton maps and silhouette data, SkeletonGait++ was enhanced by adding a third modality—parsing data, which provides detailed body part segmentation. Different fusion methods were used to combine these data types, resulting in improved recognition accuracy. Experiments on the Gait3D dataset showed substantial performance gains, with the enhanced model achieving a Rank-1 accuracy of 85.4% and a mean Average Precision (mAP) of 80.32%. The use of multimodal data and fusion strategies highlights the effectiveness of this approach in advancing gait recognition."
authors: Aakarsh Goel, Muhammad Saif Ullah Khan
category: [Project, DFKI, Augmented Vision, Deep Learning, Gait Recognition]
date: March 2024
code: mukh07/ss24_project_goel
bibtex: "@inproceedings{goel2024gait,
\n  title={Gait Recognition using OpenGait},
\n  author={Goel, Aakarsh and Khan, Muhammad Saif Ullah},
\n  booktitle={Proceedings of the Computer Vision and Deep Learning (CVDL) Course},
\n  month={October},
\n  year={2024},
\n  pages={58-70}
\n}"
supplement:
  title: "Project Report"
  url: "https://av.cs.rptu.de/fileadmin/inf_ags/Project_Seminar/Proceedings_CVDL_SS2024.pdf#page=58.00"
syntax: true
---

## Topic
{: .title}

Gait Recognition is the task of identifying a person in a video by their gait/walking style. This has applications in forensic identification and crime prevention. OpenGait is a flexible and extensible gait recognition codebase for PyTorch. In this project, you will use OpenGait to perform gait recognition on several benchmark datasets using recent gait recognition methods.​

## Tasks
{: .title}

1. Familiarize with the OpenGait codebase​
2. Set up the CASIA-B, GREW and Gait3D datasets​
3. Set up a pipeline for running SOTA models available in OpenGait​
4. Reproduce results for one recent SOTA method​


## Expected Skills
{: .title}

1. Python language, PyTorch​
2. Basic knowledge of pose estimation and gait recognition​

## Related Literature
{: .title}

- [1] [OpenGait​](https://github.com/ShiqiYu/OpenGait)
- [3] [An Introduction to Gait Analysis​​](https://auptimo.com/an-introduction-to-gait-analysis/)
