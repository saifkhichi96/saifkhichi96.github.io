---
layout: project
title: BCSD&#58; Bank Checks Segmentation Database
description: This dataset consists of 158 images of bank checks labeled with segmentation masks for handwritten signatures on the checks.
abstract: The dataset provides 158 high-resolution images of real, filled out bank checks containing various complex backgrounds, and handwritten text and signatures in the respective fields, along with both pixel-level and patch-level segmentation masks for the signatures on the checks. The images of bank checks were obtained from different sources, including other publicly available check datasets, publicly available images on the internet, as well as scans and images of real checks. Using the GIMP graphics software, pixel-level segmentation masks for signatures on these checks were manually generated as binary images. An automated script was then used to generate patch-level masks. The dataset was created to train and test networks for extracting signatures from bank checks and other similar documents with very complex backgrounds.
authors: Muhammad Saif Ullah Khan
category: [Dataset, Banking, Segmentation]
date: December 16, 2020
---

<p>
  <a class="mdc-button mdc-button--unelevated" target="_blank" href="https://www.kaggle.com/saifkhichi96/bank-checks-signatures-segmentation-dataset">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label" style="text-transform: none;">Get Dataset</span>
  </a>
  <a class="mdc-button mdc-button--outlined" target="_blank" href="https://www.researchgate.net/publication/351093948_A_novel_segmentation_dataset_for_signatures_on_bank_checks/">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label" style="text-transform: none;">Read Paper</span>
  </a>
</p>

## Contents

Images of bank checks were obtained from different sources (as listed below), and resized such that the longer side of each image is 2240px with a resolution of 300px/in. All images were also converted to JPEG format. Segmentation masks for the signatures on these checks were manually created, and the dataset was divided into 129 training images (82%) and 29 test images (18%).

Most of the checks have one signature each, but there are a few with more than one signature per image. The 29 images in the test set were all taken from Google Image Search. These images were lower quality than the images in the test set, and were scaled up when resizing in the preprocessing step. Therefore, the test set is inherently more difficult to segment than the training set.

## Purpose

It was created to train a network for signature extraction from bank checks.

## Sources

- IDRBT Cheque Image Dataset (110)
- NRIInternet Scam Documents (10)
- Google (29)
- Self-generated images (9)

## Citation

If you decide to use this dataset in your work, please include the following citation:

Khan, Muhammad Saif Ullah. “A Novel Segmentation Dataset for Signatures on Bank Checks.” ArXiv:2104.12203 [Cs], Apr. 2021. arXiv.org, http://arxiv.org/abs/2104.12203.

## Acknowledgements

[1] P. Dansena, S. Bag, and R. Pal, “Differentiating Pen Inks in Hand-written Bank Cheques Using Multi-Layer Perceptron”, Proc. of 7th International Conference on Pattern recognition and Machine Intelligence, Kolkata, India, December 2017.
