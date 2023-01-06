---
sidebar_position: 3
---

# Trimming the Layers

Overlapping edges of layers cause messy mosaics, so a mask must be added to each layer to remove its margins. These masks should all be contiguous (sharing adjacent borders and vertices) so it is best to handle them at the volume-level, not by masking each layer individually.

:::caution Work in Progress
This tool is still very much in a protoype phase: it is functional, but also finicky and obtuse. See for yourself: [Baton Rouge, 1908](https://oldinsurancemaps.net/loc/trim/sanborn03275_005/).
:::

![The multitrim interface.](../../static/img/multitrim.gif)