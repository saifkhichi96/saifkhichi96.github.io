---
layout: research
title: "Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification"
seo_title: "Multimodal Subject-Level Guidance for Zero-Shot Transfer in Human-Centric Tasks"
short_title: "Enhanced Bank Check Security"
abstract: "Automated signature verification on bank checks is critical for fraud prevention and ensuring transaction authenticity. This task is challenging due to the coexistence of signatures with other textual and graphical elements on real-world documents. Verification systems must first detect the signature and then validate its authenticity, a dual challenge often overlooked by current datasets and methodologies focusing only on verification. To address this gap, we introduce a novel dataset specifically designed for signature verification on bank checks. This dataset includes a variety of signature styles embedded within typical check elements, providing a realistic testing ground for advanced detection methods. Moreover, we propose a novel approach for writer-independent signature verification using an object detection network. Our detection-based verification method treats genuine and forged signatures as distinct classes within an object detection framework, effectively handling both detection and verification. We employ a DINO-based network augmented with a dilation module to detect and verify signatures on check images simultaneously. Our approach achieves an AP of 99.2 for genuine and 99.4 for forged signatures, a significant improvement over the DINO baseline, which scored 93.1 and 89.3 for genuine and forged signatures, respectively. This improvement highlights our dilation module's effectiveness in reducing both false positives and negatives. Our results demonstrate substantial advancements in detection-based signature verification technology, offering enhanced security and efficiency in financial document processing."
authors: Muhammad Saif Ullah Khan, Tahira Shehzadi, Rabeya Noor, Didier Stricker, Muhammad Zeshan Afzal
category: [Article, ICDAR Workshops, Bank Checks, Object Detection, Signature Verification, Security, Dataset]
code: saifkhichi96/ssbi-dataset
paper: "https://doi.org/10.1007/978-3-031-70442-0_3"
bibtex: "@inproceedings{khan2024enhanced,
\n  author={Khan, Muhammad Saif Ullah and Shehzadi, Tahira and Noor, Rabeya and Stricker, Didier and Afzal, Muhammad Zeshan},
\n  editor={Sfikas, Giorgos and Retsinas, George},
\n  title={Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification},
\n  booktitle={Document Analysis Systems},
\n  year={2024},
\n  publisher={Springer Nature Switzerland},
\n  address={Cham},
\n  pages={37--54},
\n  isbn={978-3-031-70442-0},
\n  doi={10.1007/978-3-031-70442-0_3}
\n}"
date: September 11, 2024
syntax: true
permalink: /research/enhanced-bank-check-security/
---

<!-- TL;DR -->
## TL;DR
{: .title}

1. We introduce the SSBI Dataset for bank check detection and signature verification.
2. We propose novel enhancements to the DINO network for simultaneously detecting check elements and verifying signature authenticity.
