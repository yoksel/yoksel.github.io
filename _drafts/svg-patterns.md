---
layout: default
title: SVG-паттерны
type: post
image:
desc:

links:
- url: http://www.w3.org/TR/SVG/pservers.html#Patterns
  name: Patterns
---

<code>pattern</code> - это элемент, который можно использовать как картинку для заливки.
<!--more-->

Примеры паттернов:

<p data-height="300" data-theme-id="4974" data-slug-hash="minEq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/minEq/'>SVG-pattern</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="300" data-theme-id="4974" data-slug-hash="nkqdJ" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/nkqdJ/'>SVG pattern</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Паттерн с растровой картинкой:

<p data-height="300" data-theme-id="4974" data-slug-hash="eGAxK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/eGAxK/'>eGAxK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Внутри <code>pattern</code> размещаются графические элементы и изображения, а затем полученный результат можно использовать как заливку других элементов.

Интересно, что элементы внутри паттерна могут быть анимированы, а элемент с паттерном может быть использован внутри маски.

Пример кода:

<pre><code class="language-markup">&lt;pattern id="pattern" width="200" height="200"
           patternUnits="userSpaceOnUse">
    &lt;image xlink:href="http://colourlovers.com.s3.amazonaws.com/images/patterns/2974/2974892.png" width="200" height="200"/>
  &lt;/pattern></code></pre>

Чтобы применить паттерн к элементу, его ID задается в аттрибуте <code>fill</code> в коде SVG:

<pre><code class="language-markup">&lt;rect fill="url(#pattern)" width="100%" height="100%"/></code></pre>

Либо через CSS:

<pre><code class="language-markup">rect {
    fill: url(#pattern);
    }</code></pre>

У элемента <code>pattern</code> есть много аттрибутов, некоторые из них обязательные: это <code>id</code>, <code>width</code> и <code>height</code>.

<code>patternUnits</code> не является обязательным, но он очень пригодится, если вы хотите задавать размеры в условных единицах области отрисовки, а не фигуры, к которой применен паттерн. Об этом будет подробнее.




patternUnits = "userSpaceOnUse | objectBoundingBox"
Defines the coordinate system for attributes ‘x’, ‘y’, ‘width’ and ‘height’.
If patternUnits="userSpaceOnUse", ‘x’, ‘y’, ‘width’ and ‘height’ represent values in the coordinate system that results from taking the current user coordinate system in place at the time when the ‘pattern’ element is referenced (i.e., the user coordinate system for the element referencing the ‘pattern’ element via a ‘fill’ or ‘stroke’ property) and then applying the transform specified by attribute ‘patternTransform’.
If patternUnits="objectBoundingBox", the user coordinate system for attributes ‘x’, ‘y’, ‘width’ and ‘height’ is established using the bounding box of the element to which the pattern is applied (see Object bounding box units) and then applying the transform specified by attribute ‘patternTransform’.
If attribute ‘patternUnits’ is not specified, then the effect is as if a value of 'objectBoundingBox' were specified.
Animatable: yes.
patternContentUnits = "userSpaceOnUse | objectBoundingBox"
Defines the coordinate system for the contents of the ‘pattern’. Note that this attribute has no effect if attribute ‘viewBox’ is specified.
If patternContentUnits="userSpaceOnUse", the user coordinate system for the contents of the ‘pattern’ element is the coordinate system that results from taking the current user coordinate system in place at the time when the ‘pattern’ element is referenced (i.e., the user coordinate system for the element referencing the ‘pattern’ element via a ‘fill’ or ‘stroke’ property) and then applying the transform specified by attribute ‘patternTransform’.
If patternContentUnits="objectBoundingBox", the user coordinate system for the contents of the ‘pattern’ element is established using the bounding box of the element to which the pattern is applied (see Object bounding box units) and then applying the transform specified by attribute ‘patternTransform’.
If attribute ‘patternContentUnits’ is not specified, then the effect is as if a value of 'userSpaceOnUse' were specified.
Animatable: yes.
patternTransform = "<transform-list>"
Contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system (i.e., 'userSpaceOnUse' or 'objectBoundingBox'). This allows for things such as skewing the pattern tiles. This additional transformation matrix is post-multiplied to (i.e., inserted to the right of) any previously defined transformations, including the implicit transformation necessary to convert from object bounding box units to user space.
If attribute ‘patternTransform’ is not specified, then the effect is as if an identity transform were specified.
Animatable: yes.
x = "<coordinate>"
‘x’, ‘y’, ‘width’ and ‘height’ indicate how the pattern tiles are placed and spaced. These attributes represent coordinates and values in the coordinate space specified by the combination of attributes ‘patternUnits’ and ‘patternTransform’.
If the attribute is not specified, the effect is as if a value of zero were specified.
Animatable: yes.
y = "<coordinate>"
See ‘x’.
If the attribute is not specified, the effect is as if a value of zero were specified.
Animatable: yes.
width = "<length>"
See ‘x’.
A negative value is an error (see Error processing). A value of zero disables rendering of the element (i.e., no paint is applied).
If the attribute is not specified, the effect is as if a value of zero were specified.
Animatable: yes.
height = "<length>"
See ‘x’.
A negative value is an error (see Error processing). A value of zero disables rendering of the element (i.e., no paint is applied).
If the attribute is not specified, the effect is as if a value of zero were specified.
Animatable: yes.
xlink:href = "<iri>"
An IRI reference to a different ‘pattern’ element within the current SVG document fragment. Any attributes which are defined on the referenced element which are not defined on this element are inherited by this element. If this element has no children, and the referenced element does (possibly due to its own ‘xlink:href’ attribute), then this element inherits the children from the referenced element. Inheritance can be indirect to an arbitrary level; thus, if the referenced element inherits attributes or children due to its own ‘xlink:href’ attribute, then the current element can inherit those attributes or children.
Animatable: yes.
preserveAspectRatio = "[defer] <align> [<meetOrSlice>]"
See ‘preserveAspectRatio’.

If the attribute is not specified, then the effect is as if a value of xMidYMid meet were specified.

Animatable: yes.

