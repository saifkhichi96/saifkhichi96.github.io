---
layout: research
title: "FocusCLIP: Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks"
seo_title: "Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks"
short_title: "FocusCLIP"
abstract: "We propose FocusCLIP, integrating subject-level guidance--a specialized mechanism for target-specific supervision--into the CLIP framework for improved zero-shot transfer on human-centric tasks. Our novel contributions enhance CLIP on both the vision and text sides. On the vision side, we incorporate ROI heatmaps emulating human visual attention mechanisms to emphasize subject-relevant image regions. On the text side, we introduce human pose descriptions to provide rich contextual information. For human-centric tasks, FocusCLIP is trained with images from the MPII Human Pose dataset. The proposed approach surpassed CLIP by an average of 8.61% across five previously unseen datasets covering three human-centric tasks. FocusCLIP achieved an average accuracy of 33.65% compared to 25.04% by CLIP. We observed a 3.98% improvement in activity recognition, a 14.78% improvement in age classification, and a 7.06% improvement in emotion recognition. Moreover, using our proposed single-shot LLM prompting strategy, we release a high-quality MPII Pose Descriptions dataset to encourage further research in multimodal learning for human-centric tasks. Furthermore, we also demonstrate the effectiveness of our subject-level supervision on non-human-centric tasks. FocusCLIP shows a 2.47% improvement over CLIP in zero-shot bird classification using the CUB dataset. Our findings emphasize the potential of integrating subject-level guidance with general pretraining methods for enhanced downstream performance."
description: "We introduce FocusCLIP for zero-shot classification on human-centric tasks, and publish a novel MPII Human Pose Descriptions dataset."
authors: Muhammad Saif Ullah Khan, Muhammad Ferjad Naeem, Federico Tombari, Luc Van Gool, Didier Stricker, Muhammad Zeshan Afzal
category: [Preprint, arXiv, CLIP, Zero-Shot Learning, Human-Centric Tasks, Multimodal Learning, Pose Descriptions]
arxiv: 2403.06904
bibtex: "@article{khan2024focusclip,
\n  title={FocusCLIP: Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks},
\n  author={Khan, Muhammad Saif Ullah and Naeem, Muhammad Ferjad and Tombari, Federico and Van Gool, Luc and Stricker, Didier and Afzal, Muhammad Zeshan},
\n  journal={arXiv preprint arXiv:2403.06904},
\n  year={2024}
\n}"
supplement: "https://huggingface.co/datasets/saifkhichi96/mpii-human-pose-captions"
code: saifkhichi96/FocusCLIP
date: March 11, 2024
syntax: true
permalink: /research/focusclip/
---

## TL;DR
{: .title}

1. We introduce FocusCLIP, a CLIP variant with a third heatmap modality.
2. FocusCLIP is pretrained on images of people and their body pose descriptions.
3. FocusCLIP outperforms CLIP on zero-shot classification of activities, emotions, and age in images.
4. We release our MPII Human Pose Descriptions dataset.
