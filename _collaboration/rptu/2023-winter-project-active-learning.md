---
layout: research
title: "Active Learning for Optimal Data Labeling (Project)"
seo_title: "Active Learning for Optimal Data Labeling"
short_title: "Active Labeling Project"
description: "This project aims to extend an existing dataset with new annotations using active learning."
abstract: "In this project, we developed active learning capabilities for the Computer Vision
Annotation Tool (CVAT) to speed up keypoint data annotation. Using the COCO dataset, we
designed a pipeline to add new spine keypoint annotations to the dataset. This was achieved
through our web-based Continuous Active Learning System (CALS), which works with CVAT
to enable efficient data annotation. This significantly reduces the manual labor involved in
data annotation by enabling efficient identification and annotation of the most informative instances. Although a comprehensive evaluation of CALS’ usability was beyond the scope of this
study due to time constraints, preliminary accomplishments indicate that CALS successfully
simplifies AL workflow interactions for non-technical users. The system facilitates data upload
and annotation through an accessible web interface, meeting its primary goal of enhancing
user engagement in HPE dataset development. Future work will extend CALS’ application
beyond HPE, improve query strategy selection, and refine the system’s file system abstraction for better scalability. This contribution is poised to streamline the process of enriching
HPE datasets with critical anatomical keypoints, thereby supporting advanced applications
in medical analysis, sports science, and interactive technology."
authors: Nikita Khutorni, Muhammad Saif Ullah Khan
category: [Project, DFKI, Augmented Vision, Deep Learning, Active Learning, Data Annotation]
date: October 2023
paper: "https://av.cs.rptu.de/fileadmin/inf_ags/Project_Seminar/Proceedings_CVDL_WS2324_compressed.pdf#page=70.00"
slides: 2PACX-1vRrjJynKOSlBlZBAWeMBq7vuSZ432xXWq534hLOwVks6DSd-wSB5xbtiuSoNEWgwfeYTEJBTDmcL1JB
syntax: true
---

## Topic
{: .title}

In this project, we will extend an existing dataset with new annotations using active learning. This involves training a neural network to predict the new annotations we want to add in the dataset, manually refining them in batches, and re-training the network. This network tells us which data samples to review in the next batch. This is an iterative process which is repeated until the whole dataset is done.

## Tasks
{: .title}

1. Create an initial dataset using pretrained models.
2. Implement an active learning pipeline to aid in annotation.
3. Manually review/refine predictions, finetune network, predict, repeat. _This step involves significant amount of manual data annotation._


## Related Literature
{: .title}

- [1] [Active Learning](https://neptune.ai/blog/active-learning-strategies-tools-use-cases)
- [2] [CVAT Annotation Tool](https://github.com/opencv/cvat)
