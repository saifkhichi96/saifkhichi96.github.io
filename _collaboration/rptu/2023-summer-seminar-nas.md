---
layout: research
title: "Automating Design of Efficient Models with Neural Architecture Search (Seminar)"
seo_title: "Automating Design of Efficient Models with Neural Architecture Search"
short_title: "NAS Seminar"
description: "This seminar will cover the evolution of Neural Architecture Search (NAS) techniques and their integration with hardware-aware strategies to design efficient deep learning models."
abstract: "Neural Architecture Search (NAS) has emerged as a promising field in deep learning, offering automated methods to find more accurate neural network architectures for various tasks. As deep learning models grow in complexity, the demand for not only accurate, but efficient models in terms of hardware resource utilization rises. This paper provides an overview of various NAS techniques with focus on hardware-aware strategies. The evolution of NAS ranging from traditional reinforcement-learning to more recent gradient optimization techniques is explored, while also delving into hardware specific objectives such as latency, model size and their integration into the NAS process. Further the impact of NAS is examined on different applications featuring a recent training-free image classification approach utilizing knowledge distillation (DisWOT) and a differentiable hardware-aware NAS for Image Super-Resolution (EHANAS). This survey highlights the promising advancement as well as open research challenges, while investigating how this relatively new research field manages to automatically find accurate and efficient neural network architectures."
authors: Sebastian Igel, Muhammad Saif Ullah Khan
category: [Seminar, DFKI, Augmented Vision, Deep Learning, Neural Architecture Search]
date: March 2023
bibtex: "@inproceedings{igel2023automating,
\n  title={Automating Design of Efficient Models with Neural Architecture Search},
\n  author={Igel, Sebastian and Khan, Muhammad Saif Ullah},
\n  booktitle={Proceedings of the Computer Vision and Deep Learning (CVDL) Course},
\n  month={October},
\n  year={2023},
\n  pages={11-18}
\n}"
supplement:
  title: "Seminar Report"
  url: "https://av.cs.rptu.de/fileadmin/inf_ags/Project_Seminar/Proceedings_CVDL_SS2023.pdf#page=17.00"
syntax: true
---

## Topic
{: .title}

Explore the latest advances in neural architecture search (NAS) for automating the design of deep neural networks. In particular, learn about NAS techniques used to search for efficient neural networks that work on resource constrained devices like mobile phones.

## Tasks
{: .title}

1. Learn about NAS, including vanilla and federated NAS, and NAS with reinforcement learning.
2. Explore how it is used for creating architectures optimized for small devices.


## Related Literature
{: .title}

- [1] [Enable Deep Learning on Mobile Devices: Methods, Systems, and Applications](https://dl.acm.org/doi/full/10.1145/3486618)
- [2] [Efficient Hardware-aware Neural Architecture Search for Image Super-resolution on Mobile Devices](https://openaccess.thecvf.com/content/ACCV2022/papers/Zhang_Efficient_Hardware-aware_Neural_Architecture_Search_for_Image_Super-resolution_on_Mobile_ACCV_2022_paper.pdf)
- [3] [Resource-Aware Federated Neural Architecture Search over Heterogeneous Mobile Devices](https://ieeexplore.ieee.org/document/9973344/)
