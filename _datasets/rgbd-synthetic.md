---
layout: research
title: RGB-D Data of Synthetic Textureless Surfaces
description: The dataset features several common 3D objects rendered as images in Blender with no textures and different lights. Depth and normal maps are provided.
abstract: The dataset features several common objects with uniform albedo rendered as images in Blender without any added textures and under varying lighting conditions and camera viewing angles. The intended use for the dataset is in 3D reconstruction from a single RGB image, and each sample is labelled with a ground truth (GT) depth map and normal map.
authors: Muhammad Saif Ullah Khan, Muhammad Zeshan Afzal
image: /assets/images/datasets/syntexless3d.png
category: [Dataset, 3D Reconstruction]
syntax: true
---


<p>
  <a class="mdc-button mdc-button--unelevated" href="/contact/">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label" style="text-transform: none;">Get Dataset</span>
  </a>
  <a class="mdc-button mdc-button--outlined" target="_blank" href="#">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label" style="text-transform: none;">Learn More</span>
  </a>
</p>

## Purpose

The intended use for the dataset is in 3D reconstruction from a single RGB image, and each sample is labelled with a ground truth (GT) depth map and normal map.

## Data Acquisition

The dataset was rendered in Blender 2.93.6 as RGB images and corresponding depth map arrays with a resolution of 512 x 512 px. Surface normals were calculated from the depth map using the following algorithm:

```
def dmap2norm(dmap):
    """Computes surface normals from a depth map.

    Args:
      dmap (np.ndarray): A grayscale depth map image of size (H,W).

    Returns:
      np.ndarray: The corresponding surface normals map of size (H,W,3).
    """
    # calculate surface normals
    zx = cv2.Sobel(dmap, cv2.CV_64F, 1, 0, ksize=5)
    zy = cv2.Sobel(dmap, cv2.CV_64F, 0, 1, ksize=5)
    normal = np.dstack((-zx, -zy, np.ones_like(dmap)))

    # convert to unit vectors
    length = np.linalg.norm(normal, axis=2)
    normal[:, :, :] /= length

    # offset and rescale values to be in 0-1
    normal = (normal + 1) / 2
    return normal[:, :, ::-1]
```

Each sequence renders a high-polygon 3D model of a common everyday object with realistic deformations which is gradually rotated through 360 rotations around itself. One sample is saved at each degree of rotation, ensuring sufficiently different samples while still completely capturing the object from all sides. This process is repeated in various configurations, as details in following subsections. We obtain 8,640 samples per object, and with 35 objects in total, a database of 302,400 labelled RGB-D samples is generated.

### Lighting

Four different lighting conditions are used, with each setup producing different shadows and making the dataset invariant to lighting. There are three lights in the scene, including a cool-blue colored, slightly tilted sunlight far above the object, two pale-yellow halogen lamps facing the object from front on the right and left respectively, and another halogen lamp facing towards the object from behind.

<figure>
<img src="{{ '/assets/images/datasets/syntexless3d_blender.png' | relative_url }}"
     alt="The Blender scene used to generate this dataset."
     class="project-portfolio-img" />
<figcaption>
<b>The Blender scene.</b> The lights and cameras used in the the scenes are shown.
</figcaption>
</figure>
<br>

Following combinations of lights are used:

1. 1) `L<sub>s</sub>`: Sunlight only.
2. 2) `L<sub>l</sub>`: Front-left lamp (plus sunlight).
3. 3) `L<sub>r</sub>`: Front-right lamp (plus sunlight).
4. 4) `L<sub>b</sub>`: Back lamp (plus sunlight).
5. 5) `L<sub>a</sub>`: All lamps (plus sunlight).

This way, each sequence has at least two light sources, and a wide variety of shadows are generated on same surfaces.

### Camera Angle

The camera is positioned directly in front of the object, and its height and viewing angle are adjusted in three different configurations:

1. 1) `front`: Same height as the object, and looking directly at it.
2. 2) `down`: Above the object and looking down at it.
3. 3) `up`: Below the object and looking up towards it.

The exact camera angles when looking down and up, as well as the distance of the camera from the object change per object, depending on the shape and size of the model.

### Color

All sequences are rendered once using a bare, colorless model with no texture added, and again with a diffuse material of a random but uniform color mapped onto the whole surface.


## Data Sources

The dataset includes 35 different 3D models of varying degrees of realisticity in terms of deformations and polygon. See the table below for a summary of the included objects.

|  Category  | Objects                                                                    | # of Objects |
|:----------:|:---------------------------------------------------------------------------|:------------:|
| `animals`  | `asian_dargon`, `bunny`, `cats`, `dragon`, `duck`, `pig`                   | 6            |
| `clothing` | `cape`, `dress`, `hoodie`, `jacket`, `shirt`, `suit`, `tracksuit`, `tshirt`| 8            |
| `furniture`| `bed`, `chair`, `desk`, `rocking_chair`, `sofa`, `table`                   | 6            |
| `statues`  | `armadillo`, `buddha`, `lucy`, `roman`, `thai_statue`                      | 5            |
| `misc`     | `diego`, `kettle`, `plants`, `teapot`, `skeleton`                          | 5            |
| `vehicles` | `bicycle`, `car`, `jeep`, `ship`, `spaceship`                              | 5            |

<br>
These models were obtained from several sources in the public domain, as listed in the following subsections.

### [The Stanford 3D Scanning Repository](http://graphics.stanford.edu/data/3Dscanrep/)

Models obtained from this repository include the following 5 Stanford models and 2 XYZ RGB models:

1. Stanford Bunny (`bunny`)
2. Stanford Dragon (`dragon`)
3. Happy Buddha (`buddha`)
4. Armadillo (`armadillo`)
5. Lucy (`lucy`)
6. Asian Dragon (`asian_dargon`)
7. Thai Statue (`thai_statue`)

### [Keenan's 3D Model Repository](https://www.cs.cmu.edu/~kmcrane/Projects/ModelRepository/)

This repository was published by Keenan Crane of Carnegie Mellon University under the [CC0 1.0 Universal (CC0 1.0) Public Domain License](https://creativecommons.org/publicdomain/zero/1.0/). The following 6 models were obtained from here:

8. Bob (`duck`)
9. Spot (`pig`)
10. Yeah Right (`skeleton`)
11. San Diego Convention Center (`diego`)

### Other Sources

The `teapot` is [Martin Newell's Utah Teapot](http://www.holmes3d.net/graphics/teapot/), and the remaining 24 models were all obtained for free from [CGTrader](https://www.cgtrader.com) with a [Royalty Free License](https://www.cgtrader.com/pages/terms-and-conditions#royalty-free-license). A complete list of sources for each individual model can be found [here](#).

## Acknowledgements

This dataset was collected while working with Dr. Muhammad Zeshan Afzal at Deutsche Forschungszentrum für Künstliche Intelligenz (DFKI).
