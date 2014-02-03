---
layout: default
title: CSS-градиенты
type: post
image: 
desc: 

links:
- url: http://www.colorzilla.com/gradient-editor/
  name: Ultimate CSS Gradient Generator
---

CSS-градиенты позволяют сделать фон из двух и более цветов, плавно переходящих из одного в другой.
Они с нами уже достаточно давно, и имеют довольно <a href="http://caniuse.com/#feat=css-gradients">неплохую поддержку браузерами</a>. Большинство современных браузеров понимает их без префиксов, для IE9 и старше есть <a href="http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx">Gradient Filter</a>, также для IE9 можно использовать SVG.

Спецификация: <a href="http://www.w3.org/TR/css3-images/#gradients">w3.org/TR/css3-images/#gradients</a>.<!--more-->

Градиенты могут быть использованы везде, где используются картинки: в фонах, в качестве буллетов списков, они могут быть заданы в <code>content</code> или <code>border-image</code>.

<h4>Linear-gradient</h4>

Линейные градиенты достаточно просты в использовании. Для самого элементарного градиента достаточно задать начальный и конечный цвета:

<pre><code class="language-css">background: linear-gradient(orangered, gold);</code></pre>

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/EHuREfA/1/"></iframe>

Цветов может быть любое количество больше двух.
Также можно управлять направлением градиента и границами (точками остановки) цветов.

Направление можно задавать градусами или ключевыми словами.

<b>В градусах:</b> от 0 до 360, например <code>270deg</code>.

<b>Ключевыми словами:</b>
<code>to top</code> = <code>0deg</code>
<code>to right</code> = <code>90deg</code>
<code>to bottom</code> = <code>180deg</code>
<code>to left</code> = <code>270deg</code>

Ниже можно увидеть как работают разные направления в растяжке от сиреневого до желтого:

<iframe class="jsbin" style="height: 450px" src="http://jsbin.com/EHuREfA/2/"></iframe>

Вот код самого первого квадратика, для примера:

<pre><code class="language-css">.top-left {
   background: linear-gradient(to top left, purple, crimson, orangered, gold);
  }</code></pre>

Следует помнить, что <code>to top right</code> не то же самое, что <code>45deg</code>.
Цвета градиента располагаются перпендикулярно линии направления градиента.
При <code>to top right</code> она идет из нижнего левого в верхний правый угол, при <code>45deg</code> - располагается строго под этим углом независимо от размеров фигуры.

Разница в поведении хорошо видна на прямоугольных фигурах:

<iframe class="jsbin" style="height: 320px" src="http://jsbin.com/EHuREfA/3/"></iframe>

