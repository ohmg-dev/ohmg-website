---
sidebar_position: 1
---

# Preparing Sheets

Before a volume's sheet can be georeferenced, it must be visually evaluated to determine whether it contains more than one part of town in it. If it does, each of these parts must be split into separate documents.

Here's a quick example of using the splitting interface to cut a sheet into three separate documents. *It is kind of a sloppy example, please be a bit more exact that this if you can!*

![The splitting interface, ready to split this document into three new documents.](../../static/img/alex-split.gif)

## Background

Sometimes an old map document will cover discontiguous areas, especially when the mapmakers were trying to
fit a lot of content into a single page. In these cases, each separate area in the original document must be split into
its own new document, so that each area can be georeferenced on its own. Typically, you'll find
**strong black lines** delineating different parts of the map. The document must be split along those lines.

<div style={{display:'flex', flexDirection:'row'}}>
	<figure style={{width:'33%', padding:'10px', textAlign:'center'}}>
		<img width="100%" src="https://oldinsurancemaps.net/static/img/split-example-p1-anno.jpg" />
		<figcaption style={{fontStyle:'italic', fontSize:'.85em'}}>This map must be split into four new documents.</figcaption>
	</figure>
	<figure style={{width:'33%', padding:'10px', textAlign:'center'}}>
		<img width="100%" src="https://oldinsurancemaps.net/static/img/split-example-p2-anno.jpg" />
		<figcaption style={{fontStyle:'italic', fontSize:'.85em'}}>This map must be split into two new documents.</figcaption>
	</figure>
	<figure style={{width:'33%', padding:'10px', textAlign:'center'}}>
		<img width="100%" src="https://oldinsurancemaps.net/static/img/split-example-p3-anno.jpg" />
		<figcaption style={{fontStyle:'italic', fontSize:'.85em'}}>This map shows only one part of town, so it should not be split.</figcaption>
	</figure>
</div>

## Using the Interface

If this document **does not** to be split:

- Click <code>No Split Needed</code>.
- You will be redirected to the document detail page, from which you can continue the georeferencing process.
- If you chose this by mistake, you can undo the designation in the document detail page.

If this document **does** need to be split

- Use the interface to create as many cut-lines as are needed to fully split this document.
- Once you have one or more valid cut-lines, a preview will appear showing how the image will be split.
- Click <code>Split</code> when you are ready.
- You will be redirected to the document detail page, while the split process runs in the background.
- If you split the document incorrectly, you can undo the process in the document detail page.

Fixing an incorrect determination:

- In the document detail page, you can undo this operation as long as no georeferencing has been performed.
- Look for the undo <i class="fa fa-undo"></i> button under the <code>Preparation</code> heading.
- If the button is disabled but you believe the split process was performed incorrectly, please contact an admin.

Creating cut-lines:

- In <code>Draw</code> mode, click once to start or continue a line, and double-click to finish it.
- Press <code>Esc</code> to cancel an in-progress drawing.
- Switch to <code>Modify</code> mode to change a cut-line.
- Click <i class="fa fa-refresh"></i> to erase all lines and start over.

Understanding cut-lines:

- Once you have a valid cut-line, a preview will appear showing you how the document will be split.
- Only cut-lines that fully cross a segment of the document will be used&mdash;all others will safely be ignored.
- Cut-lines can intersect or extend from each other to handle complex shapes.
