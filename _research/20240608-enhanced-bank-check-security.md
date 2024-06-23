---
layout: research
title: "Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification"
seo_title: "Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks"
short_title: "Enhanced Bank Check Security"
abstract: "Automated signature verification on bank checks is critical for fraud prevention and ensuring transaction authenticity. This task is challenging due to the coexistence of signatures with other textual and graphical elements on real-world documents. Verification systems must first detect the signature and then validate its authenticity, a dual challenge often overlooked by current datasets and methodologies focusing only on verification. To address this gap, we introduce a novel dataset specifically designed for signature verification on bank checks. This dataset includes a variety of signature styles embedded within typical check elements, providing a realistic testing ground for advanced detection methods. Moreover, we propose a novel approach for writer-independent signature verification using an object detection network. Our detection-based verification method treats genuine and forged signatures as distinct classes within an object detection framework, effectively handling both detection and verification. We employ a DINO-based network augmented with a dilation module to detect and verify signatures on check images simultaneously. Our approach achieves an AP of 99.2 for genuine and 99.4 for forged signatures, a significant improvement over the DINO baseline, which scored 93.1 and 89.3 for genuine and forged signatures, respectively. This improvement highlights our dilation module's effectiveness in reducing both false positives and negatives. Our results demonstrate substantial advancements in detection-based signature verification technology, offering enhanced security and efficiency in financial document processing."
authors: Muhammad Saif Ullah Khan, Tahira Shehzadi, Rabeya Noor, Didier Stricker, Muhammad Zeshan Afzal
category: [Article, ICDAR Workshops, Bank Checks, Object Detection, Signature Verification, Security, Dataset]
code: saifkhichi96/ssbi-dataset
date: June 08, 2024
syntax: true
permalink: /research/enhanced-bank-check-security/
---

[Read Full-Text](https://arxiv.org/pdf/2406.14370)
{: .mdc-button .mdc-button--unelevated target="_blank"}

<!-- TL;DR -->
<div class="mdc-card mdc-card--outlined" style="background-color: var(--mdc-theme-overlay); margin: 1em 0;">
    <h6 class="mdc-typography--headline6">TL;DR</h6>
    <ol>
        <li>We introduce the SSBI Dataset for bank check detection and signature verification.</li>
        <li>We propose novel enhancements to the DINO network for simultaneously detecting check elements and verifying signature authenticity.</li>
    </ol>
</div>

## How to Cite

If you find this useful, please include the following citation in your work:

```bibtex
@article{khan2024ssbi,
  title={Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification},
  author={Khan, Muhammad Saif Ullah and Shehzadi, Tahira and Noor, Rabeya and Stricker, Didier and Afzal, Muhammad Zeshan},
  journal={arXiv preprint arXiv:2406.14370},
  year={2024}
}
```