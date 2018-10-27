# 🎃🔪 Spooky? 🔪🎃

Say you're designing a quiz ranking each movie in the HALLOWEEN franchise. You know that IV is better than III, because you have great taste. But, you need to choose imagery for each that accurately depicts the level of spookiness in each movie. Usually I'd say that's a very specific scenario and there's likely nothing that could help you make that decision, BUT NOW, there's a plugin for that<sup>TM</sup>

![halloween IV is the answer](https://github.com/eliasjulian/spooky-sketch/blob/master/assets/spooky.gif)

This plugin is based on a machine learning model made with Apple's open source Turi Create. I'm working on running a bunch more spo0o0o0o0oky images through it, but for now it works best with 🔪 & 🎃 & 🗡.

_Inspired by hotdog-not-hotdog by [Mathieu Dutour](https://blog.sketchapp.com/not-a-hotdog-how-to-build-an-ai-powered-plugin-for-sketch-463ea43c9464)._

## 🎃 Installation

_Requires Sketch 49+ and macOS 10.13+_

* [Download](https://github.com/eliasjulian/spooky-sketch/releases) the latest release of the plugin
* Un-zip
* Double-click on spooky.sketchplugin
* Test the ~ 👻 spookiness 👻 ~ of your images

## 🔪 Usage

* Select an image layer
* Click on `Plugins > 🎃🔪 Spooky?`


# Development Guide

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

### Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
