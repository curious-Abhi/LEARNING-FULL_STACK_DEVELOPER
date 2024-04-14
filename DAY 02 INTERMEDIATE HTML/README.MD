# HTML Lists

## Introduction

Lists are a great way to organize information. There are three types of lists in HTML:

- Ordered lists
- Unordered lists
- Definition lists

## Ordered Lists

An ordered list is a list of items where the order is important. In an ordered list, each item is numbered. We use the `<ol>` tag to create an ordered list. Each item in the list is placed between an opening `<li>` tag and a closing `</li>` tag. The following is an example of an ordered list:

```html
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>
```

## Unordered Lists

An unordered list is a list of items where the order is not important. In an unordered list, each item is marked with a bullet point. We use the `<ul>` tag to create an unordered list. Each item in the list is placed between an opening `<li>` tag and a closing `</li>` tag. The following is an example of an unordered list:

```html
<ul>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ul>
```

## Definition Lists

A definition list is a list of terms, with the definition for each of those terms. We use the `<dl>` tag to create a definition list. Each term is placed between an opening `<dt>` tag and a closing `</dt>` tag. The definition is placed between an opening `<dd>` tag and a closing `</dd>` tag. The following is an example of a definition list:

```html
<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  <dt>JS</dt>
  <dd>JavaScript</dd>
</dl>
```

# HTML Image Elements

HTML images are defined with the `<img>` tag.

## Introduction to HTML Images

An image is a graphic representation of an object. Images are used to make a web page more visually appealing. They can also be used to convey information.

The `<img>` tag is used to define an image. The `<img>` tag has two required attributes:

      * `src` - Specifies the path to the image
      * `alt` - Specifies an alternate text for the image

The following example shows how to use the `<img>` tag to display an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
```

The `src` attribute specifies the path to the image. The `alt` attribute specifies an alternate text for the image, if the image for some reason cannot be displayed.

## HTML Image Size

The `width` and `height` attributes can be used to specify the width and height of an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" width="104" height="142">
```

## HTML Image Alignment

The `align` attribute can be used to specify the alignment of an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" align="left">
```

## HTML Image Borders

The `border` attribute can be used to specify the width of the border around an image:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" border="5">
```

## HTML Image as a Link

An image can also be used as a link. To do this, simply nest the `<img>` tag inside the `<a>` tag:

```html
<a href="https://www.w3schools.com">
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
</a>
```

## HTML Image Map

An image map is an image with clickable areas.

An image map is defined with the `<map>` tag. The `<map>` tag is always nested inside the `<img>` tag. Each area inside an image map is defined with the `<area>` tag. The `<area>` tag always has a `shape`, `coords`, and `href` attribute:

      * `shape` - Specifies the shape of the area (circle, rect, poly, default)
      * `coords` - Specifies the coordinates of the area
      * `href` - Specifies the URL of the page the link goes to
      * `alt` - Specifies an alternate text for the area

The following example shows how to use the `<map>` tag to define an image map:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
    <area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">
</map>

```

## HTML Image Map - Circle

The following example shows how to use the `<area>` tag to define a circle:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
</map>

```

## HTML Image Map - Rectangle

The following example shows how to use the `<area>` tag to define a rectangle:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
</map>

```

## HTML Image Map - Polygon

The following example shows how to use the `<area>` tag to define a polygon:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="poly" coords="50,0,100,0,100,100,50,100,0,100,0,0" alt="Moon" href="moon.htm">
</map>

```

## HTML Image Map - Default

The following example shows how to use the `<area>` tag to define a default area:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="default" alt="W3Schools" href="https://www.w3schools.com/">
</map>

```

## HTML Image Map - Alternate Text

The following example shows how to use the `alt` attribute to specify alternate text for an image map:

```html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" usemap="#planetmap">

<map name="planetmap">
  <area shape="default" alt="W3Schools" href="https://www.w3schools.com/">
</map>

```

# HTML Links and Anchor Tags

## Introduction

Links are a fundamental part of the web. They allow us to navigate from one web page to another. They also allow us to link to other resources, such as images, videos, and PDFs.

## HTML Links

HTML links are defined with the `<a>` tag. The `<a>` tag defines a hyperlink, which is used to link from one page to another.

The `<a>` tag has the following syntax:

```html
<a href="url">link text</a>
```

The `href` attribute specifies the URL of the page the link goes to. The link text is the part that will be visible to the user.

The following example shows how to use the `<a>` tag to create a link to the W3Schools home page:

```html
<a href="https://www.w3schools.com">Visit W3Schools.com!</a>
```

## HTML Link Target

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

- `_blank` - Opens the linked document in a new window or tab
- `_self` - Opens the linked document in the same window/tab as it was clicked (this is default)
- `_parent` - Opens the linked document in the parent frame
- `_top` - Opens the linked document in the full body of the window
- `framename` - Opens the linked document in a named frame

The following example shows how to use the target attribute to open the linked page in a new window or tab:

```html
<a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a>
```

## HTML Links with Images

An image can also be used as a link. To do this, simply nest the `<img>` tag inside the `<a>` tag:

```html
<a href="https://www.w3schools.com">
  <img
    src="https://www.w3schools.com/images/w3schools_green.jpg"
    alt="W3Schools.com"
  />
</a>
```

## HTML Anchor

HTML anchors are defined with the `<a>` tag.

The `<a>` tag is used to create a link to another page. The link created with the `<a>` element is not limited to text. It can also be an image or any other HTML element.

The `<a>` tag has the following syntax:

```html
<a name="value">link text</a>
```

The `name` attribute specifies a name for the anchor. The link text is the part that will be visible to the user.

The following example shows how to use the `<a>` tag to create an anchor:

```html
<a name="top"></a>
<p>Some text.</p>
<p>Some more text.</p>
<a href="#top">Go to top</a>
```

## HTML Anchor Target

HTML anchor targets are defined with the `target` attribute.

The `target` attribute specifies where to open the linked document.

The `target` attribute can have one of the following values:

- `_blank` - Opens the linked document in a new window or tab
- `_self` - Opens the linked document in the same window/tab as it was clicked (this is default)
- `_parent` - Opens the linked document in the parent frame