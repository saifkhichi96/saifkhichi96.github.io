---
layout: project
title:  Scribe&#58; Generate PDFs in Android Apps
categories: api
keywords: pdf generation, android
code: aspirasoft/scribe
device: Library
description: Scribe is a Kotlin library for PDF generation in Android apps that makes it easy to programatically create PDF documents with complex layouts and custom fonts.
icon: /assets/images/projects/scribe-logo.png
license: MIT
syntax: true
---

## Key Features

1.  Add PDF creation feature to your Android app.

## Installation

Scribe can be used by adding it as a Gradle dependency in your project. It is available through JCenter.

1) In the project level `build.gradle`, add the following code:

```groovy
repositories {
    // other repositories
    jcenter()
}
```

2) Add the following dependency in your module `build.gradle`:

```groovy
implementation 'dev.aspirasoft.apis:scribe:$latest_version'
```

You can find the `$latest_version` [here](https://mvnrepository.com/artifact/dev.aspirasoft.apis/scribe).


## Supported Platforms

Android
{: .mdc-chip}

## Programming Languages

Kotlin
{: .mdc-chip}
