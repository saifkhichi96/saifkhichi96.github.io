---
layout: research
title: RGB-D Data of Synthetic Textureless Surfaces
description: The dataset features several common 3D objects rendered as images in Blender with no textures and different lights. Depth and normal maps are provided.
abstract: The dataset features several common objects with uniform albedo rendered as images in Blender without any added textures and under varying lighting conditions and camera viewing angles. The intended use for the dataset is in 3D reconstruction from a single RGB image, and each sample is labelled with a ground truth (GT) depth map and normal map. It includes 35 different 3D models of varying degrees of realisticity in terms of deformations and polygon. There are 8,640 samples per object, and with 35 objects in total, a database of 302,400 labeled RGB-D samples is provided.
authors: Muhammad Saif Ullah Khan, Muhammad Zeshan Afzal
cover: /assets/images/datasets/syntexless3d.png
category: [Dataset, 3D Reconstruction]
syntax: true
code: saifkhichi96/blender_texless_data
---

[Get Dataset](https://projects.dfki.uni-kl.de/textureless_object_data/#downloads)
{: .mdc-button .mdc-button--unelevated target="_blank"}

[Read Paper](#)
{: .mdc-button .mdc-button--outlined}

|  Category  | Objects                                                                    | # of Objects |
|:----------:|:---------------------------------------------------------------------------|:------------:|
| `animals`  | `asian_dargon`, `bunny`, `cats`, `dragon`, `duck`, `pig`                   | 6            |
| `clothing` | `cape`, `dress`, `hoodie`, `jacket`, `shirt`, `suit`, `tracksuit`, `tshirt`| 8            |
| `furniture`| `bed`, `chair`, `desk`, `rocking_chair`, `sofa`, `table`                   | 6            |
| `statues`  | `armadillo`, `buddha`, `lucy`, `roman`, `thai_statue`                      | 5            |
| `misc`     | `diego`, `kettle`, `plants`, `teapot`, `skeleton`                          | 5            |
| `vehicles` | `bicycle`, `car`, `jeep`, `ship`, `spaceship`                              | 5            |

<br>
For more details about composition, collection process and data sources, see the [dataset homepage](https://projects.dfki.uni-kl.de/textureless_object_data/).
