---
layout: research
title: "Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification"
seo_title: "Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification"
short_title: "Enhanced Bank Check Security"
abstract: "Automated signature verification on bank checks is critical for fraud prevention and ensuring transaction authenticity. This task is challenging due to the coexistence of signatures with other textual and graphical elements on real-world documents. Verification systems must first detect the signature and then validate its authenticity, a dual challenge often overlooked by current datasets and methodologies focusing only on verification. To address this gap, we introduce a novel dataset specifically designed for signature verification on bank checks. This dataset includes a variety of signature styles embedded within typical check elements, providing a realistic testing ground for advanced detection methods. Moreover, we propose a novel approach for writer-independent signature verification using an object detection network. Our detection-based verification method treats genuine and forged signatures as distinct classes within an object detection framework, effectively handling both detection and verification. We employ a DINO-based network augmented with a dilation module to detect and verify signatures on check images simultaneously. Our approach achieves an AP of 99.2 for genuine and 99.4 for forged signatures, a significant improvement over the DINO baseline, which scored 93.1 and 89.3 for genuine and forged signatures, respectively. This improvement highlights our dilation module’s effectiveness in reducing both false positives and negatives. Our results demonstrate substantial advancements in detection-based signature verification technology, offering enhanced security and efficiency in financial document processing."
authors: Muhammad Saif Ullah Khan*, Tahira Shehzadi*, Rabeya Noor, Didier Stricker, Muhammad Zeshan Afzal, (* Equal contribution)
category: [Article, ICDAR Workshops, Bank Checks, Object Detection, Signature Verification, Security, Dataset]
code: saifkhichi96/ssbi-dataset
arxiv: 2406.14370
paper: "https://doi.org/10.1007/978-3-031-70442-0_3"
bibtex: "@inproceedings{khan2024enhanced,
\n  title={Enhanced Bank Check Security: Introducing a Novel Dataset and Transformer-Based Approach for Detection and Verification},
\n  author={Khan, Muhammad Saif Ullah and Shehzadi, Tahira and Noor, Rabeya and Stricker, Didier and Afzal, Muhammad Zeshan},
\n  booktitle={International Workshop on Document Analysis Systems},
\n  pages={37--54},
\n  year={2024},
\n  organization={Springer}
\n}"
date: September 11, 2024
supplement: https://github.com/saifkhichi96/ssbi-dataset/releases/tag/v1.0.0
syntax: true
permalink: /research/bank-check-security/
---

<!-- TL;DR -->
## TL;DR
{: .title}

- ✅ **Synthetic Signature Bankcheck Images (SSBI) Dataset** – A **realistic** dataset with genuine & forged signatures on bank checks.
- ✅ **Detection-Based Signature Verification Approach** – Treats genuine & forged signatures as separate object detection classes.
- ✅ **DINO-Based Transformer Model with a Dilation Module** – Achieves **99.2% AP** for genuine and **99.4% AP** for forged signatures.

---

## 📊 SSBI Dataset  

The **SSBI Dataset** contains **4,360** annotated check images with **genuine and forged signatures** from **19 different signers**. Each check also includes bounding boxes for:  
✅ **Signatures** (both genuine & forged)  
✅ **Date field**  
✅ **Amount fields** (legal & courtesy)  
✅ **Payee field**  

📥 **Download Dataset:** [SSBI v1.0.0](https://github.com/saifkhichi96/ssbi-dataset/releases/tag/v1.0.0)  
📌 **Extract to:** `data/ssbi`  

### 🗂 Dataset Statistics  

#### **Table 1: Data Split for Genuine & Forged Signatures**  

| Signature Type | Train | Validation | Total |
|---------------|-------|------------|-------|
| ✅ **Genuine** | 2,352 | 1,008 | 3,360 |
| ❌ **Forged**  | 700   | 300  | 1,000 |
| **Total**      | 3,052 | 1,308 | 4,360 |

#### **Table 2: Object Size Distribution**  

| Category          | Train (Small/Medium/Large) | Val (Small/Medium/Large) |
|-------------------|----------------------------|--------------------------|
| 💰 **Amount (Legal)**    | 440 / 1,881 / 731  | 169 / 813 / 326  |
| 💵 **Amount (Courtesy)** | 0 / 1,142 / 1,910  | 0 / 481 / 827  |
| 📅 **Date**              | 163 / 1,837 / 754  | 57 / 777 / 334  |
| 🏦 **Payee**             | 0 / 994 / 717  | 0 / 387 / 300  |
| ✍️ **Signature (Forged)** | 2 / 304 / 394  | 0 / 122 / 178  |
| ✍️ **Signature (Genuine)** | 4 / 915 / 1,433  | 1 / 358 / 649  |
