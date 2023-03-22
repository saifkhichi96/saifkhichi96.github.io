---
layout: research
title: BCSD&#58; Bank Checks Segmentation Database
short_title: BCSD
description: This dataset consists of 158 images of bank checks labeled with segmentation masks for handwritten signatures on the checks.
abstract: The dataset provides 158 high-resolution images of real, filled out bank checks containing various complex backgrounds, and handwritten text and signatures in the respective fields, along with both pixel-level and patch-level segmentation masks for the signatures on the checks. The images of bank checks were obtained from different sources, including other publicly available check datasets, publicly available images on the internet, as well as scans and images of real checks. Using the GIMP graphics software, pixel-level segmentation masks for signatures on these checks were manually generated as binary images. An automated script was then used to generate patch-level masks. The dataset was created to train and test networks for extracting signatures from bank checks and other similar documents with very complex backgrounds.
authors: Muhammad Saif Ullah Khan
category: [Dataset Paper, Banking, Segmentation]
date: December 16, 2020
code: saifkhichi96/bcsd
syntax: true
---

[Get Dataset](https://www.kaggle.com/saifkhichi96/bank-checks-signatures-segmentation-dataset)
{: .mdc-button .mdc-button--unelevated}

[Read Paper](https://www.researchgate.net/publication/351093948_A_novel_segmentation_dataset_for_signatures_on_bank_checks/)
{: .mdc-button .mdc-button--outlined}

## Contents

Images of bank checks were obtained from different sources (as listed below), and resized such that the longer side of each image is 2240px with a resolution of 300px/in. All images were also converted to JPEG format. Segmentation masks for the signatures on these checks were manually labelling the pixels that contain the signature using an image editing software. The dataset was divided into 129 training images (82%) and 29 test images (18%).

Most of the checks have one signature each, but there are a few with more than one signature per image. The 29 images in the test set were all taken from Google Image Search. These images were lower quality than the images in the test set, and were scaled up when resizing in the preprocessing step. Therefore, the test set is inherently more difficult to segment than the training set.

## Purpose

It was created to train a neural network for signature extraction from bank checks, at either patch or pixel level.

## Data Sources

The bank check images were obtained from the following sources:

[IDRBT Cheque Image Dataset](//www.idrbt.ac.in/idrbt-cheque-image-dataset/) (110)
{: .mdc-chip}

[NRIInternet Scam Documents](//nriinternet.com/NRI_Alerts/Nigeria/30%20phony%20documents%20used%20in%20Nigerian%204-1-9%20frauds%20and%20car%20buying%20scams_files/30%20phony%20documents%20used%20in%20Nigerian%204-1-9%20frauds%20and%20car%20buying%20scams.htm) (10)
{: .mdc-chip}

Google (29)
{: .mdc-chip}

Self-generated images (9)
{: .mdc-chip}


## Citation

If you decide to use this dataset in your work, please include the following citation:

```bibtex
@article{khan2021novel,
  title={A novel segmentation dataset for signatures on bank checks},
  author={Khan, Muhammad Saif Ullah},
  journal={arXiv preprint arXiv:2104.12203},
  year={2021}
}
```

Khan, Muhammad Saif Ullah. “A Novel Segmentation Dataset for Signatures on Bank Checks.” ArXiv:2104.12203 [Cs], Apr. 2021. arXiv.org, http://arxiv.org/abs/2104.12203.

## Acknowledgements

[1] P. Dansena, S. Bag, and R. Pal, “Differentiating Pen Inks in Hand-written Bank Cheques Using Multi-Layer Perceptron”, Proc. of 7th International Conference on Pattern recognition and Machine Intelligence, Kolkata, India, December 2017.
