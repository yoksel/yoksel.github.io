---
layout: default
title: Функции Transform
type: page

links_title: К статьям
links:
- url: /transform
  name: Transform
- url: /3d-cube
  name: 3D cube
---
<h4>2D</h4>

<code>translateX(10px)</code> - сдвиг по оси X. Значения в пикселях или процентах.

<code>translateY(10px)</code> - сдвиг по оси Y.

<code>translate(25px, 30%)</code> - сдвиг по осям X и Y. Если задано одно значение, оно используется как сдвиг по X, второе значение при этом равно 0.

<code>scaleX(2)</code> - масштабирование по оси X. При этом 1 - это 100%.

<code>scaleY(2)</code> - масштабирование по оси Y.

<code>scale(.5, 2)</code> - масштабирование по осям X и Y. Если второе значение не задано, оно будет равно первому.

<code>rotate(10deg)</code> - поворот на заданный угол. Значения задаются в градусах (<i>deg</i>). Центр поворота определяется свойством <code>transform-origin</code>.

<code>skewX(20deg)</code> - наклон по оси X. Значения задаются в градусах (<i>deg</i>).

<code>skewY(20deg)</code> - наклон по оси Y.

<code>skew(5deg, -20deg)</code> - наклон по осям X и Y. Если задано одно значение, второе будет равно 0.

Примеры трансформаций:

<iframe class="jsbin" style="height: 470px" src="http://jsbin.com/EcebOKi/47/embed?output"></iframe>

<code>matrix(w, sky, skx, h, mx, my)</code>

Описывает трансформацию элемента в двухмерном пространстве. С помощью матрицы можно задать все предыдущие свойства сразу, кроме поворота.

<b>Значения:</b>

w - изменение ширины. 1 - исходная ширина.

<i>sky</i> - наклон по вертикали. 0 - без наклона.

<i>skx</i> - наклон по горизонтали. 0 - без наклона.

<i>h</i> - изменение высоты. 1 - исходная высота.

<i>mx</i> - сдвиг по горизонтали.

<i>my</i> - сдвиг по вертикали.

Исходный код для элемента без трансформации:

<pre><code class="language-css">transform: matrix(1, 0, 0, 1, 0, 0);</code></pre>

Примеры матричных трансформаций:

<iframe class="jsbin" style="height: 470px" src="http://jsbin.com/EcebOKi/46/embed?output"></iframe>

<code>transform: matrix(-.01,0,0,-.01,0,-125);</code>

<iframe class="jsbin" style="height: 400px" src="http://jsbin.com/EcebOKi/30/embed?output"></iframe>

<h4>3D</h4>

<code>translateX(20px)</code>, <code>translateY(15px)</code>, <code>translateZ(-10px)</code> - сдвиг элемента по одной из осей.

<code>translate3d(20px, 15px, -10px)</code> - сдвиг элемента по трем осям сразу. Последовательность значений: X, Y, Z.

<code>scaleX(2.5)</code>, <code>scaleY(.4)</code>, <code>scaleZ(1.7)</code> - изменение масштаба по одной из осей.

<code>scale3d(2.5, .4, 1.7)</code> - изменение масштаба по трем осям сразу.

<code>rotateX(30deg)</code> или <code>rotate3d(1, 0, 0, 30deg)</code> - поворот по оси X.

<code>rotateY(40deg)</code> или <code>rotate3d(0, 1, 0, 40deg)</code> - поворот по оси Y.

<code>rotateZ(50deg)</code> или <code>rotate3d(0, 0, 1, 50deg)</code> - поворот по оси Z.

<code>rotate3d(1, 1, 1, 90deg)</code> - поворот по всем осям.

<code>perspective(100px)</code> - определяет глубину сцены. Чем меньше значение, тем больше вытянута сцена по отношению к зрителю.

<iframe class="jsbin" style="height: 400px" src="http://jsbin.com/EcebOKi/34/embed?output"></iframe>

<pre><code class="language-css">matrix3d(num, num, num, num,
         num, num, num, num,
         num, num, num, num,
         num, num, num, num)</code></pre>

Значения матрицы мне не удалось выяснить до конца, кроме того, что первые три значения нижнего ряда отвечают за центр трансформации, а весь последний столбец - за перспективу. Причем первые три за перспективы по конкретным осям, а последняя - общая.

<dl class="post__links post__links--readmore">
	<dt>Ссылки по теме <code>matrix3d()</code>:</dt>
<dd><a href="http://www.w3.org/TR/css3-transforms/#mathematical-description">w3.org/TR/css3-transforms/#mathematical-description</a></dd>
<dd><a href="http://www.eleqtriq.com/2010/05/css-3d-matrix-transformations/">eleqtriq.com/2010/05/css-3d-matrix-transformations/</a></dd>
<dd><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function">developer.mozilla.org/en-US/docs/Web/CSS/transform-function</a></dd>
</dl>
