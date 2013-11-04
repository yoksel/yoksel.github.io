---
layout: default
title: Box-shadow
categories:
- Box-shadow
- Css
tags: []
status: publish
type: post
published: true

links: 
- url: /cells/
  name: Клеточки на CSS
---
Свойство <code>box-shadow</code> позволяет добавить элементам одну или несколько теней.<!--more-->

Спецификация: <a href="http://www.w3.org/TR/css3-background/#the-box-shadow">w3.org/TR/css3-background/#the-box-shadow</a>

Синтаксис совсем простой:

<pre><code class="language-css">box-shadow: 15px 15px 5px -5px rgba(0,0,0,.2);</code></pre>

Этот код даст вот такую тень:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/evaGaSE/1/embed?output"></iframe>

Первое значение отвечает за отступ слева, второе - сверху. Значения могут быть отрицательными.
Третье - радиус размытия. Если значение не задано или равно 0 - тень имеет четкие края.
Четвертое - уменьшение или увеличение тени. Значения могут быть отрицательными.

К сожалению, значения предыдущих свойств не могут быть заданы в процентах. 

Последнее значение - цвет. Очень удобно задавать его в  hsla или в rgba, чтобы тень была прозрачной и затемняла нижележащий фон независимо от его цвета.

Нет возможности переопределить только цвет тени, для этого придется продублировать все значения.

Есть ещё один параметр - <code>inset</code>. Если он задан, тень отбрасывается внутрь элемента.

При использовании нескольких теней они задаются одна за другой через запятую.

В отличие от градиентов, тени анимируются, поэтому в некоторых случаях их можно использовать вместо градиентов.

<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/IlOWabA/1/embed?output"></iframe>

При этом если теней несколько, изменение порядка заданных теней при анимации дает интересный эффект:

<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/IfAzAFO/2/embed?output"></iframe>

С тенями можно сделать много интересного, от, собственно, теней, до разнообразных декоративных элементов.

Каждый из примеров ниже сделан с помощью теней на основе одного дива, в некоторых используются псевдоэлементы:

<iframe class="jsbin" style="height: 650px" src="http://jsbin.com/evaGaSE/6/embed?output"></iframe>

Ещё можно сделать радугу:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/eCahIfa/20/embed?output"></iframe>


Или вот, например, пуговицы:

<iframe class="jsbin" style="height: 270px" src="http://jsbin.com/iJUyIXu/1/embed?output"></iframe>

Или пузырь с текстом:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/OTiNOGO/2/embed?output"></iframe>

Просто удивительное количество возможностей предоставляет такое простое свойство.

Также в последнее время становятся популярными длинные тени:

<iframe class="jsbin" style="height: 400px" src="http://jsbin.com/IGiXESO/1/embed?output"></iframe>

Суть способа состоит в использовании множества теней, при этом ближайшие к фигуре имеют цвет, собственно, тени, а дальние от неё плавно переходят к цвету фона.
Использовать <code>rgba</code> с прозрачностью здесь не получится, потому что тогда тени будут просвечивать друг под другом.

Руками такие штуки писать неудобно, поэтому проще будет воспользоваться генераторами:

<a href="http://sandbox.juan-i.com/longshadows/">sandbox.juan-i.com/longshadows/</a><br>
<a href="http://www.longshadowgenerator.com/">longshadowgenerator.com/</a><br>
<a href="http://www.longshadowgenerator.com/">codepen.io/awesomephant/pen/mAxHz</a>

Минус способа состоит в том, что тени можно наложить только поверх однородного фона, но при разумном использовании они выглядят очень эффектно.
