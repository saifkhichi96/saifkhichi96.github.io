---
layout: research
title: "Sparse Neural Networks"
seo_title: "Sparse Neural Networks"
short_title: "Sparse Neural Networks"
description: "In this project, you will train and evaluate several human pose estimation networks with sparsity constraints and compare their runtime performance on different hardware."
abstract: ""
authors: 
category: [Project, DFKI, Augmented Vision]
date: March 2025
paper: ""
syntax: true
---

## Topic
{: .title}

In this project, you will train and evaluate several human pose estimation networks with sparsity constraints and compare their runtime performance on different hardware.

## Tasks
{: .title}

1. Learn about and implement network sparsification methods​.
2. Train multiple human pose estimation networks​.
3. Deploy them to ONNX and evaluate runtime performance in different environments (desktop, web, and mobile)​.


## Expected Skills
{: .title}

1. PyTorch + good programming skills (required)​
2. OpenMMLab libraries, e.g., `mmengine`, `mmpose`, `mmrazor`, `mmdeploy`, etc. (highly preferred)​
3. Sparsity in neural networks (preferred)​
4. Familiar with ONNX and mobile deployment (optional)

## Related Literature
{: .title}

- [1] [Sparsification Basics](https://www.inovex.de/de/blog/neural-networks-pruning-sparsification/)
- [2] ProbMask ([paper](https://openaccess.thecvf.com/content/CVPR2021/papers/Zhou_Effective_Sparsification_of_Neural_Networks_With_Global_Sparsity_Constraint_CVPR_2021_paper.pdf), [code](https://github.com/x-zho14/ProbMask-official))
- [3] Powerpropagation ([paper](https://openreview.net/pdf?id=ags1UxpXAl), [code](https://github.com/mysistinechapel/powerprop))
- [4] BinMask ([paper](https://arxiv.org/pdf/2304.11237))