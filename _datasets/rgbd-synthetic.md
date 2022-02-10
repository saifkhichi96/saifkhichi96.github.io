---
layout: project
title: RGB-D Data of Synthetic Textureless Surfaces
description: The dataset features several common 3D objects rendered as images in Blender with no textures and different lights. Depth and normal maps are provided.
abstract: The dataset features several common objects with uniform albedo rendered as images in Blender without any added textures and under varying lighting conditions and camera viewing angles. The intended use for the dataset is in 3D reconstruction from a single RGB image, and each sample is labelled with a ground truth (GT) depth map and normal map.
authors: Muhammad Saif Ullah Khan, Muhammad Zeshan Afzal
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
    :param dmap: A grayscale depth map image as a numpy array of size (H,W).
    :return: The corresponding surface normals map as numpy array of size (H,W,3).
    """
    # calculate surface normals
    zx = cv2.Sobel(dmap, cv2.CV_64F, 1, 0, ksize=5)
    zy = cv2.Sobel(dmap, cv2.CV_64F, 0, 1, ksize=5)

    # convert to unit vectors
    normal = np.dstack((-zx, -zy, np.ones_like(dmap)))
    n = np.linalg.norm(normal, axis=2)
    normal[:, :, 0] /= n
    normal[:, :, 1] /= n
    normal[:, :, 2] /= n

    # offset and rescale values to be in 0-1
    normal += 1
    normal /= 2
    return normal[:, :, ::-1]
```

Each sequence renders a high-polygon 3D model of a common everyday object with realistic deformations which is gradually rotated through 360 rotations around itself. One sample is saved at each degree of rotation, ensuring sufficiently different samples while still completely capturing the object from all sides. This process is repeated in various configurations, as details in following subsections. We obtain 10,800 samples per object, and with 38 objects in total, a database of 410,400 labelled RGB-D samples is generated.

### Lighting

Four different lighting conditions are used, with each setup producing different shadows and making the dataset invariant to lighting. There are three lights in the scene, including a cool-blue colored, slightly tilted sunlight far above the object, two pale-yellow halogen lamps facing the object from front on the right and left respectively, and another halogen lamp facing towards the object from behind. Following combinations of lights are used:

1. 1) `Ls`: Sunlight only.
2. 2) `Ll`: Front-left lamp (plus sunlight).
3. 3) `Lr`: Front-right lamp (plus sunlight).
4. 4) `Lb`: Back lamp (plus sunlight).
5. 5) `La`: All lamps (plus sunlight).

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

The dataset includes 38 different 3D models of varying degrees of realisticity in terms of deformations and polygon. See the table below for a summary of the included objects.

|  Category  | Objects                                                               | # of Objects |
|:----------:|:----------------------------------------------------------------------|:------------:|
| `clothing` | `hoodie`, `jacket`, `shirt`, `sweater`, `trouser`, `tshirt`           | 6            |
| `animals`  | `asian_dargon`, `bunny`, `cat`, `dog`, `dragon`, `duck`, `fish`, `pig`| 8            |
| `furniture`| `bed`, `chair`, `desk`, `rocking_chair`, `sofa`, `stool`, `table`     | 7            |
| `vehicles` | `car`, `boat`, `bicycle`, `jeep`, `helicopter`, `motorcycle`, `plane` | 7            |
| `statues`  | `armadillo`, `buddha`, `lucy`, `thai_statue`                          | 4            |
| `misc`     | `electric_kettle`, `teapot`, `plant`, `skeleton`                      | 4            |
| `buildings`| `chiba`, `diego`                                                      | 2            |

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
9. Blub (`fish`)
10. Spot (`pig`)
11. Yeah Right (`skeleton`)
12. Chiba City Blues (`chiba`)
13. San Diego Convention Center (`diego`)

### Other Sources

The `teapot` is [Martin Newell's Utah Teapot](http://www.holmes3d.net/graphics/teapot/), and the remaining 24 models were all obtained for free from [CGTrader](https://www.cgtrader.com) with a [Royalty Free License](https://www.cgtrader.com/pages/terms-and-conditions#royalty-free-license). A complete list of sources for each individual model can be found [here](#).

## Acknowledgements

This dataset was collected while working with Dr. Muhammad Zeshan Afzal at Deutsche Forschungszentrum für Künstliche Intelligenz (DFKI).
