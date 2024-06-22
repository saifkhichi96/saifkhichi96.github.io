---
layout: research
title: Depth Reconstruction of Low-Texture Surfaces from a Single View
seo_title: Single-View Textureless Surface Reconstruction
short_title: Single-View Textureless Surface Reconstruction
description: "In this degree project for the Master's program in Computer Science at TU Kaiserslautern, we implement Bednarik et al.'s method in PyTorch and test it on additional real data we collected."
abstract: "We propose a deep learning-based method for recovering depth maps and normal
vectors of low-texture surfaces from a single RGB image. Our approach relies on an autoencoding network with multiple decoders which are trained jointly. It is based on a semantic segmentation network, called SegNet, with design modifications intended to speed up training. We demonstrate that despite reducing the network parameters and training time significantly, our performance is still comparable to the original network. We also present a new dataset of
depth maps and surface normals for texture-less surfaces."
authors: Muhammad Saif Ullah Khan, Muhammad Zeshan Afzal
category: [Project Report, TUK, 3D Reconstruction, Low-Texture Objects]
date: September 2021
syntax: true
permalink: /research/project-textureless/
---

## Dataset

Around 12 thousand synchronised RGB images, along with depth maps and surface normal maps for various textureless surfaces, obtained using a Microsoft Kinect v2 camera in real world. The dataset is available for download [here](https://kaggle.com/saifkhichi96/textureless-real-data/).

[Read Full-Text](https://ags.cs.uni-kl.de/fileadmin/inf_ags/Project_Seminar/Proceedings_3DCV_SS2021.pdf#page=92)
{: .mdc-button .mdc-button--unelevated}

[Source Code](https://github.com/saifkhichi96/texless_recon_pytorch)
{: .mdc-button .mdc-button--outlined}

## How to Cite

If you find this useful, please include the following citation in your work:

```bibtex
 @inbook{khandrec2021,
    place={Kaiserslautern, Germany},
    volume={SS 2021},
    title={Depth Reconstruction of Low-Texture Surfaces from a Single View},
    url={https://ags.cs.uni-kl.de/fileadmin/inf_ags/Project_Seminar/Proceedings_3DCV_SS2021.pdf},
    booktitle={Seminar and Project 3D Computer Vision and Augmented Reality - Summer Semester 2021},
    publisher={Department Augmented Vision},
    author={Khan, Muhammad Saif Ullah and Afzal, Muhammad Zeshan},
    year={2021},
    pages={92–100}
} 
```
