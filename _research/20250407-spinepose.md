---
layout: research
title: "Towards Unconstrained 2D Pose Estimation of the Human Spine"
short_title: 2D Spine Pose Estimation
seo_title: "Towards Unconstrained 2D Pose Estimation of the Human Spine"
authors: Muhammad Saif Ullah Khan, Stephan Krauß, Didier Stricker
abstract: "We introduce SpineTrack, the first comprehensive dataset dedicated to 2D spine pose estimation in unconstrained environments, addressing a critical gap in human pose analysis for sports and biomechanical applications. Existing pose datasets typically represent the spine with a single rigid segment, neglecting the detailed articulation required for precise analysis. To overcome this limitation, SpineTrack comprises two complementary components: SpineTrack-Real, a real-world dataset with high-fidelity spine annotations refined via an active learning pipeline, and SpineTrack-Unreal, a synthetic dataset generated using an Unreal Engine-based framework with accurate ground-truth labels. Additionally, we propose a novel biomechanical validation framework based on OpenSim to enforce anatomical consistency in the annotated keypoints. Complementing the dataset, our SpinePose model extends state-of-the-art body pose estimation networks through a teacher–student distillation approach and an anatomical regularization strategy, effectively incorporating detailed spine keypoints without sacrificing overall performance. Extensive experiments on standard benchmarks and sports-specific scenarios demonstrate that our approach significantly improves spine tracking accuracy while maintaining robust generalization."
category: [Workshop Paper, CVPRW, Pose Estimation, Spine Tracking, Biomechanics]
bibtex: "@inproceedings{khan2025cvprw,
\n  title={Towards Unconstrained 2D Pose Estimation of the Human Spine},
\n  author={Khan, Muhammad Saif Ullah and Krauß, Stephan and Stricker, Didier},
\n  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops},
\n  month={},
\n  year={2025},
\n  pages={}
\n}"
code: saifkhichi96/spinepose
date: April 7, 2025
syntax: true
permalink: /research/spinepose/
---

[![Conference](https://img.shields.io/badge/CVPRW-2025-6b8bc7.svg?style=for-the-badge)](https://cvpr2025.thecvf.com/)
[![PyPI version](https://img.shields.io/pypi/v/spinepose.svg?style=for-the-badge)](https://pypi.org/project/spinepose/)
[![License](https://img.shields.io/badge/License-CC--BY--NC--4.0-lightgrey.svg?style=for-the-badge)](LICENSE)

---
<div align="center">

<div style="display: flex; flex-wrap: nowrap; gap: 10px;">
  <div style="flex: 0 0 59%; display: flex; flex-direction: column; gap: 10px;">
    <div style="
      width: 100%;
      aspect-ratio: 16/9; 
      background: url({{ 'assets/images/research/spinepose/video1.gif' | relative_url }}) no-repeat center center;
      background-size: cover;
    ">
    </div>
    <div style="
      width: 100%;
      aspect-ratio: 16/9; 
      background: url({{ 'assets/images/research/spinepose/video2.gif' | relative_url }}) no-repeat center center;
      background-size: cover;
    ">
    </div>
  </div>
  <div style="
    flex: 0 0 38%;
    background: url({{ 'assets/images/research/spinepose/video3.gif' | relative_url }}) no-repeat center center; 
    background-size: cover;
    aspect-ratio: 4/5; /* Adjust ratio to your preference */
  ">
  </div>
</div>
<small align="center"><em>Demo videos are sourced from <a href="https://www.pexels.com/">Pexels.com</a>.</em></small>
</div>

- [Installation](#installation)
- [Inference](#inference)
- [SpineTrack Dataset](#spinetrack-dataset)
- [Training and Evaluation](#training-and-evaluation)
- [License](#license)

---

## Installation

SpinePose is now available on PyPI for seamless inference using ONNX Runtime, supporting both CPU and GPU. Tested with Python 3.9–3.12 on Ubuntu 24.04 and macOS 15.3.2. For faster inference, we check for CUDA (Windows/Linux) or MPS (macOS); or default to CPU if no accelerator is found.

```bash
pip install spinepose
```

Model weights are downloaded automatically on the first run. The package includes a command-line interface (CLI) and a Python API for easy usage.

For model training or reproducing the full pipeline, please refer to the [Training and Evaluation](#training-and-evaluation) section.

## Inference

### Using the CLI

```bash
spinepose \
  -i /path/to/image_or_video \
  -o /path/to/output  # Optional: specify output path
  -mode large         # Optional: model size (default: large). Options: small, medium, large, xlarge
```

This command performs inference on the input image or video, saving the output with visualized keypoints. By default, 33 keypoints are tracked, including 18 body, 6 feet, and 9 spine keypoints. To only estimate the spine (e.g. for cleaner visualization), use the `--spine-only` flag.

> **Experimental Feature**: Add 4 extra keypoints (left/right clavicle and latissimus dorsi) with the `--include-experimental` flag, increasing the total to 37. Note: These keypoints are experimental and may be removed in future updates.

### Using the Python API

We provide two main classes for inference: `SpinePoseEstimator` for single image inference and `PoseTracker` for video processing with bounding box tracking and optional temporal smoothing.

```python
import cv2
from spinepose import SpinePoseEstimator

# Initialize estimator (downloads ONNX model if not found locally)
estimator = SpinePoseEstimator(device='cuda')

# Perform inference on a single image
image = cv2.imread('path/to/image.jpg')
keypoints, scores = estimator.predict(image)
visualized = estimator.visualize(image, keypoints, scores)
cv2.imwrite('output.jpg', visualized)
```

Or use the `infer_image` and `infer_video` functions for simpler usage:

```python
from spinepose.inference import infer_image, infer_video

# Single image inference
results = infer_image('path/to/image.jpg', 'output.jpg')

# Video inference with optional temporal smoothing
results = infer_video('path/to/video.mp4', 'output_video.mp4', use_smoothing=True)
```

## SpineTrack Dataset

TBA

## Training and Evaluation

TBA

## License

This project is released under the [CC-BY-NC-4.0 License](LICENSE). Commercial use is prohibited, and appropriate attribution is required for research or educational applications.