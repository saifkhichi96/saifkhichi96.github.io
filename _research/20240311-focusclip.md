---
layout: research
title: "FocusCLIP: Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks"
seo_title: "Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks"
short_title: "FocusCLIP"
abstract: "We propose FocusCLIP, integrating subject-level guidance--a specialized mechanism for target-specific supervision--into the CLIP framework for improved zero-shot transfer on human-centric tasks. Our novel contributions enhance CLIP on both the vision and text sides. On the vision side, we incorporate ROI heatmaps emulating human visual attention mechanisms to emphasize subject-relevant image regions. On the text side, we introduce human pose descriptions to provide rich contextual information. For human-centric tasks, FocusCLIP is trained with images from the MPII Human Pose dataset. The proposed approach surpassed CLIP by an average of 8.61% across five previously unseen datasets covering three human-centric tasks. FocusCLIP achieved an average accuracy of 33.65% compared to 25.04% by CLIP. We observed a 3.98% improvement in activity recognition, a 14.78% improvement in age classification, and a 7.06% improvement in emotion recognition. Moreover, using our proposed single-shot LLM prompting strategy, we release a high-quality MPII Pose Descriptions dataset to encourage further research in multimodal learning for human-centric tasks. Furthermore, we also demonstrate the effectiveness of our subject-level supervision on non-human-centric tasks. FocusCLIP shows a 2.47% improvement over CLIP in zero-shot bird classification using the CUB dataset. Our findings emphasize the potential of integrating subject-level guidance with general pretraining methods for enhanced downstream performance."
description: "We introduce FocusCLIP for zero-shot classification on human-centric tasks, and publish a novel MPII Human Pose Descriptions dataset."
authors: Muhammad Saif Ullah Khan, Muhammad Ferjad Naeem, Federico Tombari, Luc Van Gool, Didier Stricker, Muhammad Zeshan Afzal
cover: /assets/images/research/focusclip.png
category: [Article, Preprint, CLIP, Zero-Shot Learning, Human-Centric Tasks, Multimodal Learning, Pose Descriptions]
code: saifkhichi96/FocusCLIP
date: March 11, 2024
syntax: true
permalink: /research/focusclip/
---

[Read Full-Text](https://arxiv.org/pdf/2403.06904)
{: .mdc-button .mdc-button--unelevated target="_blank"}

<!-- TL;DR -->
<div class="mdc-card mdc-card--outlined" style="background-color: var(--mdc-theme-overlay); margin: 1em 0; color: black; padding: 16px; border-radius: 16px;">
    <h6 class="mdc-typography--headline6">TL;DR</h6>
    <ol>
        <li>We introduce FocusCLIP, a CLIP variant with a third heatmap modality.</li>
        <li>FocusCLIP is pretrained on images of people and their body pose descriptions.</li>
        <li>FocusCLIP outperforms CLIP on zero-shot classification of activities, emotions, and age in images.</li>
        <li>We release our MPII Human Pose Descriptions dataset.</li>
    </ol>
</div>

## How to Cite

If you find this useful, please include the following citation in your work:

```bibtex
@article{khan2024focusclip,
  title={FocusCLIP: Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks},
  author={Khan, Muhammad Saif Ullah and Naeem, Muhammad Ferjad and Tombari, Federico and Van Gool, Luc and Stricker, Didier and Afzal, Muhammad Zeshan},
  journal={arXiv preprint arXiv:2403.06904},
  year={2024}
}
```
