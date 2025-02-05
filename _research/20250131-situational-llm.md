---
layout: research
title: "SituationalLLM: Proactive language models with scene awareness for dynamic, contextual task guidance"
short_title: SituationalLLM
seo_title: "SituationalLLM: Proactive language models with scene awareness for dynamic, contextual task guidance"
authors: Muhammad Saif Ullah Khan, Muhammad Zeshan Afzal, Didier Stricker
abstract: "Large Language Models (LLMs) have demonstrated remarkable success in text-based reasoning tasks but struggle to provide actionable guidance in real-world physical environments. This limitation arises from their lack of situational awareness—an inability to recognize gaps in their understanding of a user’s physical context, leading to unreliable and overly generic instructions. To address this, we propose SituationalLLM, a novel approach that integrates structured scene representations into LLMs to improve context-aware assistance. SituationalLLM leverages scene graphs—structured representations of objects, attributes, and spatial relationships—to encode real-world environments in a text-based Scene Graph Language. We introduce the Situational Awareness Database for Instruct-Tuning (SAD-Instruct), which pairs diverse scene graphs with multi-agent dialogue, enabling LLMs to iteratively refine their guidance through clarifying questions. A LoRA-adapted LLaMA-3-8B model is fine-tuned on SAD-Instruct to bridge structured knowledge with natural language reasoning, enhancing its ability to recognize missing information and dynamically adjust responses. Qualitative evaluations show that SituationalLLM outperforms state-of-the-art LLMs (GPT-4, LLaMA-3) in providing precise, task-specific, and contextually relevant instructions. The model reduces hallucinations by proactively identifying missing environmental details and requesting clarifications before generating guidance. Through comparative analyses on everyday tasks (e.g., cooking, office assistance), SituationalLLM demonstrates superior adaptability, delivering grounded, user-centered recommendations. By integrating structured scene representations and iterative dialogue-based refinements, SituationalLLM enables more reliable, context-aware AI assistants. This research highlights the significance of bridging structured knowledge with natural language for enhanced real-world task guidance. Future work should focus on expanding scenario diversity and improving real-time scene perception to further enhance situational adaptability."
category: [Article, Open Research Europe, Large Language Models, Scene Graphs, Context-Aware Assistance, Situational Awareness]
arxiv: 2406.13302
bibtex: "@article{khan2024situational,
\n  title={SituationalLLM: Proactive language models with scene awareness for dynamic, contextual task guidance},
\n  author={Khan, Muhammad Saif Ullah and Afzal, Muhammad Zeshan and Stricker, Didier},
\n  journal={arXiv preprint arXiv:2406.13302},
\n  year={2024}
\n}"
code: saifkhichi96/situational-llm
supplement: "https://github.com/saifkhichi96/sad-instruct"
date: January 31, 2025
syntax: true
permalink: /research/situational-llm/
---

## Grant information
{: .title}

This project has received funding from the European Union’s Horizon Europe research and innovation programme under grant agreement No. 101135724 (Language Augmentation for Humanverse [[LUMINOUS](http://luminous-horizon.eu)]), addressing Topic HORIZON-CL4-2023-HUMAN-01-21.

## Acknowledgements
{: .title}

We would like to acknowledge the contributions of Sankalp Sinhah's invaluable input and deeply appreciate his insights and early discussions, which laid the groundwork for the research presented in this paper.
