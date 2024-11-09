---
layout: research
title: "CICA: Content-Injected Contrastive Alignment for Zero-Shot Document Image Classification"
seo_title: "Content-Injected Contrastive Alignment for Zero-Shot Document Image Classification"
short_title: "CICA: Zero-Shot Document Classification"
abstract: "Zero-shot learning has been extensively investigated in the broader field of visual recognition, attracting significant interest recently. However, the current work on zero-shot learning in document image classification remains scarce. The existing studies either focus exclusively on zero-shot inference, or their evaluation does not align with the established criteria of zero-shot evaluation in the visual recognition domain. We provide a comprehensive document image classification analysis in Zero-Shot Learning (ZSL) and Generalized Zero-Shot Learning (GZSL) settings to address this gap. Our methodology and evaluation align with the established practices of this domain. Additionally, we propose zero-shot splits for the RVL-CDIP dataset. Furthermore, we introduce CICA (pronounced 'ki-ka'), a framework that enhances the zero-shot learning capabilities of CLIP. CICA consists of a novel 'content module' designed to leverage any generic document-related textual information. The discriminative features extracted by this module are aligned with CLIP's text and image features using a novel 'coupled-contrastive' loss. Our module improves CLIP's ZSL top-1 accuracy by 6.7% and GZSL harmonic mean by 24% on the RVL-CDIP dataset. Our module is lightweight and adds only 3.3% more parameters to CLIP. Our work sets the direction for future research in zero-shot document classification."
authors: Sankalp Sinha, Muhammad Saif Ullah Khan, Talha Uddin Sheikh, Didier Stricker, Muhammad Zeshan Afzal
category: [Article, ICDAR, Image Classification, Zero-Shot Learning, Document Analysis]
paper: "https://link.springer.com/chapter/10.1007/978-3-031-70546-5_8"
code: mindgarage/cica
bibtex: "@inproceedings{sinha2024cica,
\n  author={Sinha, Sankalp and Khan, Muhammad Saif Ullah and Sheikh, Talha Uddin and Stricker, Didier and Afzal, Muhammad Zeshan},
\n  editor={Barney Smith, Elisa H. and Liwicki, Marcus and Peng, Liangrui},
\n  title={CICA: Content-Injected Contrastive Alignment for Zero-Shot Document Image Classification},
\n  booktitle={Document Analysis and Recognition - ICDAR 2024},
\n  year={2024},
\n  publisher={Springer Nature Switzerland},
\n  address={Cham},
\n  pages={124--141},
\n  isbn={978-3-031-70546-5},
\n  doi={10.1007/978-3-031-70546-5_8}
\n}"
date: September 11, 2024
syntax: true
permalink: /research/cica-document-image-classification/
---

<!-- TL;DR -->
## TL;DR
{: .title}

1. We propose CICA, a novel framework for zero-shot document image classification.
2. CICA enhances CLIP's zero-shot learning capabilities by leveraging a novel content module.
3. We set a new benchmark for zero-shot document classification on the RVL-CDIP dataset.
