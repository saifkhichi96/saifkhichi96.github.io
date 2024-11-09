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
category: [Report, RPTU, Project, 3D Reconstruction, Low-Texture Objects]
paper: "https://ags.cs.uni-kl.de/fileadmin/inf_ags/Project_Seminar/Proceedings_3DCV_SS2021.pdf#page=92"
supplement: "https://kaggle.com/saifkhichi96/textureless-real-data/"
code: "saifkhichi96/texless_recon_pytorch"
bibtex: "@inbook{khan2021drec,
\n place={Kaiserslautern, Germany},
\n volume={SS 2021},
\n title={Depth Reconstruction of Low-Texture Surfaces from a Single View},
\n url={https://ags.cs.uni-kl.de/fileadmin/inf_ags/Project_Seminar/Proceedings_3DCV_SS2021.pdf},
\n booktitle={Seminar and Project 3D Computer Vision and Augmented Reality - Summer Semester 2021},
\n publisher={Department Augmented Vision},
\n author={Khan, Muhammad Saif Ullah and Afzal, Muhammad Zeshan},
\n year={2021},
\n pages={92–100}
\n}"
date: September 2021
syntax: true
permalink: /research/project-textureless/
---
