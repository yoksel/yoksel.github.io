---
layout: default
title: 'Css-фигуры: лепесток'
categories:
- Boder-radius
- Box-shadow
- Css
- Shapes

tags: [experiments, box-shadow]

status: publish
type: post
published: true
---
Из одного <code>div</code> с помощью <code>border-radius</code> легко можно сделать лепесток:<!--more-->

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-figury-lepestok/demo_1.html?output"></iframe>

С помощью <code>box-shadow</code> — ещё один:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-figury-lepestok/demo_2.html?output"></iframe>

С помощью <code>:before</code> — ещё парочку, и получается 4 лепестка:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-figury-lepestok/demo_3.html?output"></iframe>

А добавив <code>:after</code> и <code>transform</code> можно сделать 6 лепестков:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_4.html?output"></iframe>

Для понятности покрасим лепестки в разные цвета. Красный — исходный <code>div</code>, зеленый — <code>:before</code>, оранжевый — <code>:after</code>,  желтые — <code>box-shadow</code> этих трех элементов.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_5.html?output"></iframe>

Цветок с 4 или 6-ю лепестками на основе одного элемента! : )
Причем с помощью <code>border-radius</code> можно управлять формой лепестков.

Теперь сделаем лепестки овальной формы с помощью псевдо-элементов и <code>transform</code>. В основе два <code>div</code>'а:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_6.html?output"></iframe>

Тем же способом можно сделать лепестки в форме капелек, а также добавить к ним рамки или тени:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury-lepestok/demo_7.html?output"></iframe>

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/css-figury-lepestok/demo_8.html?output"></iframe>

В этом случае нельзя обойтись одним элементом, потому что тень объекта нельзя повернуть.
