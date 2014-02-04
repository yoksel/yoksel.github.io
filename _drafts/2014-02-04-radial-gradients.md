---
layout: default
title:  Радиальные градиенты
type: post
image: 
desc: 

links:
- url: /tsveta
  name: Цвета в Css	
- url: http://css.coloratum.com/
  name: CSS.coloratum  
- url: http://www.colorzilla.com/gradient-editor/
  name: Ultimate CSS Gradient Generator
---

Радиальные градиенты работают иначе, чем линейные. Если цвета линейных располагаются перпендикулярно линии, задающей направление, то в радиальных цвета расходятся от заданного центра и могут располагаться в форме круга или эллипса.

Спецификация: <a href="http://www.w3.org/TR/css3-images/#radial-gradients">.w3.org/TR/css3-images/#radial-gradients</a><!--more-->

Для самого простого градиента достаточно задать только цвета:

<pre><code class="language-css">background: radial-gradient(gold, orangered);</code></pre>

По умолчанию центр градиента находится по центру, градиент имеет форму эллипса:

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/OvOwEma/3/"></iframe>

Помимо цветов градиенту можно задавать форму, положение и размер.

<b>Форма</b> (конечная фигура градиента) может быть кругом и эллипсом. По умолчанию - эллипс, градиент стремится занять всё свободное пространство элемента, вытягиваясь, если это необходимо. 

Чтобы градиент имел форму круга - это нужно задать явно с помощью ключевого слова <code>circle</code>.

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/EHuREfA/13/"></iframe>

<b>Положение</b> определяет где будет расположен центр градиента. Используются те же ключевые слова, что и для линейного градиента, но с приставкой <code>at</code>, а не <code>to</code>: <code>at top</code>, <code>at right</code>, <code>at bottom</code>, <code>at left</code> и <code>at center</code> - значение по умолчанию.

Их так же можно сочетать между собой, чтобы расположить градиент на заданной стороне, например: <code>at right top</code> - в верхнем правом углу.

Ниже можно увидеть как работают разные положения:

<iframe class="jsbin" style="height: 450px" src="http://jsbin.com/EHuREfA/12/"></iframe>

<b>Размер</b> определяет размеры конечной фигуры градиента. Для эллиптических градиентов значения можно задавать в процентах, для круглых - нет.

Также можно использовать ключевые слова:


<code>closest-side</code>
The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient's center. If the shape is an ellipse, it exactly meets the closest side in each dimension.
<code>farthest-side</code>
Same as ‘closest-side’, except the ending shape is sized based on the farthest side(s).
<code>closest-corner</code>
The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient's center. If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if ‘closest-side’ were specified.
<code>farthest-corner</code>
Same as ‘closest-corner’, except the ending shape is sized based on the farthest corner. If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if ‘farthest-side’ were specified.


<iframe class="jsbin" style="height: 700px" src="http://jsbin.com/EHuREfA/14/"></iframe>

<shape>
Can be either ‘circle’ or ‘ellipse’; determines whether the gradient's ending shape is a circle or an ellipse, respectively. If <shape> is omitted, the ending shape defaults to a circle if the <size> is a single <length>, and to an ellipse otherwise.


<size>
Determines the size of the gradient's ending shape. If omitted it defaults to ‘farthest-corner’. It can be given explicitly or by keyword. For the purpose of the keyword definitions, consider the gradient box edges as extending infinitely in both directions, rather than being finite line segments.

If the ending-shape is an ellipse, its axises are aligned with the horizontal and vertical axises.

Both ‘circle’ and ‘ellipse’ gradients accept the following keywords as their <size>:

‘closest-side’
The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient's center. If the shape is an ellipse, it exactly meets the closest side in each dimension.
‘farthest-side’
Same as ‘closest-side’, except the ending shape is sized based on the farthest side(s).
‘closest-corner’
The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient's center. If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if ‘closest-side’ were specified.
‘farthest-corner’
Same as ‘closest-corner’, except the ending shape is sized based on the farthest corner. If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if ‘farthest-side’ were specified.
If <shape> is specified as ‘circle’ or is omitted, the <size> may be given explicitly as:

<length>
Gives the radius of the circle explicitly. Negative values are invalid.





--------------
<pre><code class="language-css">background: radial-gradient(gold, orangered);</code></pre>

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/EHuREfA/1/"></iframe>