---
layout: default
title: Box-shadow
categories:
- Box-shadow
- Css

tags: [box-shadow, pseudo-elements]

status: publish
type: post
published: true

links:
- url: /cells/
  name: Клеточки на CSS
- url: /shadowpainter/
  name: Рисовалка анимированных теней
---
Свойство <code>box-shadow</code> позволяет добавить элементам одну или несколько теней.<!--more-->

Спецификация: <a href="http://www.w3.org/TR/css3-background/#the-box-shadow">w3.org/TR/css3-background/#the-box-shadow</a>

Синтаксис совсем простой:

<pre><code class="language-css">box-shadow: 15px 15px 5px -5px rgba(0,0,0,.2);</code></pre>

Этот код даст вот такую тень:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/box-shadow/demo_1.html?output"></iframe>

Первое значение отвечает за отступ слева, второе — сверху. Значения могут быть отрицательными.
Третье — радиус размытия. Если значение не задано или равно 0 — тень имеет четкие края.
Четвертое — уменьшение или увеличение тени. Значения могут быть отрицательными.

К сожалению, значения предыдущих свойств не могут быть заданы в процентах.

Последнее значение — цвет. Очень удобно задавать его в  hsla или в rgba, чтобы тень была прозрачной и затемняла нижележащий фон независимо от его цвета.

Нет возможности переопределить только цвет тени, для этого придется продублировать все значения.

Есть ещё один параметр — <code>inset</code>. Если он задан, тень отбрасывается внутрь элемента.

При использовании нескольких теней они задаются одна за другой через запятую.

В отличие от градиентов, тени анимируются, поэтому в некоторых случаях их можно использовать вместо градиентов.

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/box-shadow/demo_2.html?output"></iframe>

При этом если теней несколько, изменение порядка заданных теней при анимации дает интересный эффект:

<iframe class="live-snippet" style="height: 150px" src="../assets/demo/box-shadow/demo_3.html?output"></iframe>

С тенями можно сделать много интересного, от, собственно, теней, до разнообразных декоративных элементов.

Каждый из примеров ниже сделан с помощью теней на основе одного дива, в некоторых используются псевдоэлементы:

<iframe class="live-snippet" style="height: 650px" src="../assets/demo/box-shadow/demo_4.html?output"></iframe>

Ещё можно сделать радугу:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/box-shadow/demo_5.html?output"></iframe>


Или вот, например, пуговицы:

<iframe class="live-snippet" style="height: 270px" src="../assets/demo/box-shadow/demo_6.html?output"></iframe>

Или пузырь с текстом:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/box-shadow/demo_7.html?output"></iframe>

Просто удивительное количество возможностей предоставляет такое простое свойство.

Также в последнее время становятся популярными длинные тени (в данном случае это <code>box-shadow</code> + <code>text-shadow</code>):

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/box-shadow/demo_8.html?output"></iframe>

Суть способа состоит в использовании множества теней, при этом ближайшие к фигуре имеют цвет, собственно, тени, а дальние от неё плавно переходят к цвету фона.
Использовать <code>rgba</code> с прозрачностью здесь не получится, потому что тогда тени будут просвечивать друг под другом.

Руками такие штуки писать неудобно, поэтому проще будет воспользоваться генераторами:

<a href="http://sandbox.juan-i.com/longshadows/">sandbox.juan-i.com/longshadows/</a><br>
<a href="http://www.longshadowgenerator.com/">longshadowgenerator.com/</a><br>
<a href="http://codepen.io/awesomephant/pen/mAxHz/">codepen.io/awesomephant/pen/mAxHz</a>

Минус способа состоит в том, что тени можно наложить только поверх однородного фона, но при разумном использовании они выглядят очень эффектно.
