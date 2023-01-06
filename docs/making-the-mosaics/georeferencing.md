---
sidebar_position: 2
---

# Georeferencing the Maps

=== "Basic concept"
    "Georeferencing" is the process that is needed to overlay a scanned historical map onto a modern web map, and it must be performed for each Document individually.

=== "Tell me more..."
    Georeferencing works by using "ground control points" to embed geospatial information into an image file and turn it into a geosptial dataset. A ground control point consists of two coordinate pairs: one pair that represents the XY pixel location on the document, and a corresponding latitude/longitude coordinate that represents a point on earth.

![The georeferencing interface, with 3 control points added and the preview visible.](../../static/img/georeference-interface.png)

## Background

Use this interface to create the **ground control points** that will be used to georeference this document. Cßreating a ground control point requires two clicks&mdash;once in the left panel and once in the right. This records a linkage between a spot on the original map document and the real-world latitude/longitude coordinates for that location.

![Once 3 control points are present, a semi-transparent preview will appear.](../../static/img/alex-3-georeference.jpg)

In the example image above, 3 control points have been made using street intersections. You can make as many control points as you want (the more the better!) but often 3-6 are enough. If 3 or more are present, a semi-transparent live preview will be added to the right panel. Use the <code>w</code> key to toggle preview transparency.

## Using the Interface

_Before starting, it can be helpful to pan and zoom around to become familiar with the document and the area._

Creating a control point:

- Start a control point by clicking on the map document (left).
- Finish it by clicking on a corresponding location in the web map (right).
- You can pan and zoom in both panels during this process.
- You can add a note to a control point. This is helpful if you are not 100% confident in your placement, or just want to point something out to future users.
- You can modify a control point at any time by clicking and dragging it.

Deleting a control point:

- Select an existing control point via the list in the bottom left, or by clicking on it in the panels.
- Click <i class="fa fa-trash"></i> or type <code>d</code> to delete.

Saving Control Points:

- You can only save the control points once you have 3 or more.
- Click <code>Save Control Points</code> when you are satisfied. This will start the warping process, which may take a few minutes to complete. You will be redirected back to the Document detail page in the meantime.
- Click <i class="fa fa-refresh"></i> to reset the interface. This will remove all changes you have made.

Editing existing control points:

- If someone else has already georeferenced this document, feel free to modify their control points (or add more), to improve the georeferencing&mdash;this is meant to be an iterative process.
- Click <i class="fa fa-refresh"></i> to discard your changes and restore the original control points.

Managing layers:

- You can change the opacity of the preview layer by typing <code>w</code>.
- You can switch to an aerial imagery basemap with the <code>Basemap</code> dropdown menu.

Managing the panels:

- You can increase the size of the left or right panel with the menu in the top left.
- Checking the <code>autosize</code> box will cause the panels sizes to dynamically update based on whether your next click should be in the left or right panel.

Transformations:

- It is recommended that you use the default transformation, <code>Polynomial</code>.
- Switching to <code>Thin Plate Spline</code> will allow the image to distort and warp to fit all control points exactly, which _could_ be necessary in rare circumstances.
- You can read more about GDAL transformation algorithms in the <a href="https://docs.qgis.org/3.16/en/docs/user_manual/working_with_raster/georeferencer.html#available-transformation-algorithms" target="_blank">QGIS documentation <i class="fa fa-external-link"></i></a> (note: we are only using the Polynomial 1 transformation here).

Tips:

- Prioritize finding control points that are widely spread across the map.
- Look for locations that have changed the least over time. For example, the center of street intersections, railroad crossings, or, in some cases, the corners or centers of old buildings.
- Locations to avoid using are the edges of city blocks, sidewalks, or street intersections of which you can only see a portion.
- Historical maps may have mistakes, or street names may have changed over time.
