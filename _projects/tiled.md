---
layout: project
title:  Tiled&#58; Tilemaps on Android
short_title: Tiled
categories: [api, featured]
keywords: tilemaps, Android, API, 2D game development, graphics, UI, Maven, Gradle, Kotlin
code: aspirasoft/tiled
demo: KlIh_w0GX58
device: Library
description: Tiled is a powerful API that simplifies the process of creating tilemaps for Android applications and games.
icon: /assets/images/projects/tiled-logo.png
license: MIT
syntax: true
---

If you need to display tile-based graphics in your project, Tiled is the perfect solution. With Tiled, you can quickly create tilemaps using small, regular-shaped images called tiles.

## What is a Tilemap
A tilemap is a popular technique in 2D game development that involves building the game world or level map from tiles. These tiles are usually repeating squares of background that are arranged in a grid. Tilemaps are used in many popular games and applications, including role-playing games (RPGs), platformers, and puzzle games.

## Key Features

One of the key features of Tiled is the ability to create user interfaces from tilemaps as text. This feature allows developers to easily create and manage user interfaces for their applications and games. By using Tiled, you can build complex UI layouts quickly and easily, without having to write a lot of code.

Another great feature of Tiled is the ability to generate tile images from a single sheet. This feature is particularly useful for games and applications that use a large number of tiles. Instead of having to create each tile image manually, you can simply provide a single sheet with all the necessary tiles, and Tiled will generate the individual tile images automatically.

Tiled also offers automatic code generation for Android projects. This feature saves developers a lot of time and effort by generating the necessary code for their Android projects automatically. This makes it easier to get started with Tiled and start building great tile-based applications and games for Android.

## How to Use

### Installation
Tiled is available as a Maven or Gradle dependency through [MavenCentral](https://search.maven.org/artifact/dev.aspirasoft.apis/tiled). To install it in Android project, make sure the `mavenCentral()` repository is enabled, add the following dependency in the module `build.gradle` file:
```groovy
implementation "dev.aspirasoft.apis:tiled:${latestVersion}"
```
Replace `${latestVersion}` with the latest [release version](https://github.com/aspirasoft/tiled/releases/) number.

### The `TiledView` class
`TiledView` is a custom `View` which you can use in your layouts just how you would use any other view.

```xml
<dev.aspirasoft.apis.tiled.TiledView
    xmlns:custom="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    custom:orientation="horizontal"
    custom:allowManualScroll="true"/>
```

If you want the view to be scrollable by touch, set the `allowManualScroll` attribute to `true`. This is disabled by default, and you can only scroll the view programmatically.

You can also set the scroll direction with the `orientation` attribute, which takes three values: `horizontal` (default) , `vertical` and `none`. In case of `none`, a fixed tilemap is displayed, with the whole map scaled to fit the size of the view / device screen.

## Getting Started
You can Tiled it in your Java or Kotlin projects on Android. Whether you're building an application or a game, Tiled can help you create great tile-based graphics quickly and easily. See the [documentation](https://github.com/aspirasoft/tiled) or the [demo app](https://github.com/aspirasoft/tiled/blob/master/demo/src/main/java/dev/aspirasoft/apis/tiled/demo/MarioDemo.kt) for more information.

