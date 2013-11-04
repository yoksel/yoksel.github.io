---
layout: default
title: 'Css-фигуры: лепесток'
categories:
- Boder-radius
- Box-shadow
- Css
- Shapes
tags: []
status: publish
type: post
published: true
---
Из одного <code>div</code> с помощью <code>border-radius</code> легко можно сделать лепесток<!--more-->:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/iheGIL/1/embed?output,css"></iframe>

С помощью <code>box-shadow</code> - ещё один:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/iheGIL/2/embed?output,css"></iframe>

С помощью <code>:before</code> - ещё парочку, и получается 4 лепестка:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/iheGIL/3/embed?output,css"></iframe>

А добавив <code>:after</code> и <code>transform</code> можно сделать 6 лепестков:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/iheGIL/7/embed?output,css"></iframe>

Для понятности покрасим лепестки в разные цвета. Красный - исходный <code>div</code>, зеленый - <code>:before</code>, оранжевый - <code>:after</code>,  желтые - <code>box-shadow</code> этих трех элементов.

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/iheGIL/8/embed?output,css"></iframe>

Цветок с 4 или 6-ю лепестками на основе одного элемента! : ) 
Причем с помощью <code>border-radius</code> можно управлять формой лепестков.

Теперь сделаем лепестки овальной формы с помощью псевдо-элементов и <code>transform</code>. В основе два <code>div</code>'а:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/iheGIL/11/embed?output,css"></iframe>

Тем же способом можно сделать лепестки в форме капелек, а также добавить к ним рамки или тени:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/iheGIL/10/embed?output,css"></iframe>

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/iKubuKi/3/embed?output,css"></iframe>

В этом случае нельзя обойтись одним элементом, потому что тень объекта нельзя повернуть.
