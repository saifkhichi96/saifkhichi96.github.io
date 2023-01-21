---
layout: post
title:  How to Create a Splash Screen in Android
categories: Code
description: In this blog post, I will show you how to quickly create a custom splash screen for your Android apps.
permalink: /blog/:title
syntax: true
---

In this blog post, we will go over the steps to quickly create a custom splash screen for your Android apps. But before we do that, it's important to understand what a splash screen, or a launch screen, is and why it's important for your app.

According to Google's [Material Design guidelines](https://material.io/design/communication/launch-screen.html):

> The launch screen is a user’s first experience of your app.

It's the initial screen that appears when the user launches your app. It's important to make sure that your launch screen is visually appealing and provides a good first impression of your app.

Here's a step-by-step guide to creating a custom splash screen for your Android app:

## Step 1: Create a new drawable resource file
In the `res` folder of your Android Studio project, right-click and select `New` > `Drawable resource file`. Name the file `splash.xml`.

## Step 2: Add the background color and image
In the `splash.xml` file, add the following code:

```
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/colorPrimary"/>
    <item>
        <bitmap
            android:gravity="center"
            android:src="@drawable/splash_logo"/>
    </item>
</layer-list>
```

In this code, we're setting the background color to `colorPrimary` and adding an image to the center of the screen. Replace `@color/colorPrimary` and `@drawable/splash_logo` with the color and image you want to use for your splash screen.

## Step 3: Modify the theme
In the `styles.xml` file, add the following code:

```
<resources>
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- customize your theme here -->
    </style>
    <style name="AppTheme.Launcher" parent="AppTheme">
        <item name="android:windowBackground">@drawable/splash</item>
    </style>
</resources>
```

This code sets the `windowBackground` to the splash drawable we created in step 1.

## Step 4: Update the launcher activity
In your launcher activity's `onCreate` method, add the following code:

```
@Override
protected void onCreate(Bundle savedInstanceState) {
    setTheme(R.style.AppTheme_Launcher);
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}
```
This code sets the theme of the launcher activity to `AppTheme.Launcher`, which we created in step 3.

## Step 5: Test the splash screen
Run your app on an emulator or a device to see the splash screen in action.

And that's it! You have now successfully created a custom splash screen for your Android app. To further customize your splash screen, you can play around with the theme, background color, and image size. Additionally, you can also add a logo or other branding elements to your




