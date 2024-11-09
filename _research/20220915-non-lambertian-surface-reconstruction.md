---
layout: research
title: Learning to Reconstruct Textureless and Transparent Surfaces in 3D
seo_title: Learning to Reconstruct Textureless and Transparent Surfaces in 3D
short_title: Textureless and Transparent Surfaces in 3D
keywords: 3D Reconstruction, Textureless, Transparent, Deep Learning, Computer Vision
description: Report for the Master's thesis about 3D reconstruction of textureless and transparent surfaces, completed at TU Kaiserslautern, Germany.
slides: 2PACX-1vRsbXM7JuQooIM6YxdDK6ZbhbnDTJF5_DoqM7qfDmNWczkTLao6-vI2TQV5yv3xD5LHrP0AWPf4MapJ
abstract: "Performing 3D reconstruction from a single 2D input is a challenging problem that is trending in literature. Until recently, it was an ill-posed optimization problem, but with the advent of learning-based methods, the performance of 3D reconstruction has also significantly improved. However, the state-of-the-art approaches mainly focus on datasets with highly textured images. Most of these methods are trained on datasets like ShapeNet, which contain rendered images of well-textured objects. However, in natural scenes, many objects are textureless and challenging to reconstruct. Unlike textured surfaces, reconstruction of textureless surfaces has not received as much attention mainly because of a lack of large-scale annotated datasets. Some recent works have also focused on textureless surfaces, many of which are trained on a small real-world dataset containing 26k images of 5 different textureless clothing items. Transparent surfaces have received even less attention from the deep learning community, with most works using traditional computer vision methods to reconstruct these surfaces. Most techniques depend on inferring the shape of the objects by how light is reflected off the surfaces. However, this may not be possible in the case of transparent surfaces as they allow some light to pass through them, and the algorithms now have to deal with light refraction and absorption in addition to reflections. To facilitate further research in this direction, we present a synthetic dataset generation strategy for images of both textureless and transparent objects and corresponding depth maps and surface normals map groundtruth. We also make available three new datasets: a large synthetic textureless dataset containing 364k samples and 2635 3D models, a small real-world textureless dataset containing 4k samples and six objects, and a large transparent object dataset containing 126k samples and ten 3D models. We also propose an autoencoder-based network for learning to reconstruct the depth maps and surface normal maps from a single image for textureless objects. Furthermore, we propose a novel architecture that combines a Vision Transformer with a residual autoencoder and uses an auxiliary silhouette output to find transparent objects in realistic scenes and reconstruct their depth maps and surface normal maps."
authors: Muhammad Saif Ullah Khan, Muhammad Zeshan Afzal, Didier Stricker
category: [Thesis, RPTU, Master, 3D Reconstruction, Non-Lambertian Surfaces, Texureless, Transparent]
date: September 2022
paper: "https://www.researchgate.net/publication/364197082_Learning_to_Reconstruct_Textureless_and_Transparent_Surfaces_in_3D/"
bibtex: "@thesis{khan3d2022,
\n author = {Khan, Muhammad Saif Ullah},
\n year = {2022},
\n month = {09},
\n pages = {},
\n title = {Learning to Reconstruct Textureless and Transparent Surfaces in 3D}
\n }"
syntax: true
permalink: /research/non-lambertian-surface-reconstruction/
---
