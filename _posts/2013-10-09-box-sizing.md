---
layout: default
title: Box-sizing
categories:
- Box-sizing
- Css
type: post

desc: Свойство box-sizing позволяет указать как ведут себя размеры блока при наличии рамок и полей.
---
Свойство <code>box-sizing</code> позволяет указать как ведут себя размеры блока при наличии рамок и полей.
Применяются к элементам, у которых заданы размеры.<!--more-->

Спецификация: <a href="http://www.w3.org/TR/css3-ui/#box-sizing0">w3.org/TR/css3-ui/#box-sizing0</a>

Возможные значения:

<code>content-box</code> - отступы и рамки рисуются снаружи блока блока и увеличивают его размеры (значение по умолчанию).

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/eTiGuB/6/embed?css,output"></iframe>

<code>padding-box</code> - рамки рисуются снаружи блока блока и увеличивают его размеры, <code>padding</code> отрисовывается внутри элемента и не влияет на размеры. Работает только в Firefox.

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/eTiGuB/7/embed?css,output"></iframe>

<code>border-box</code> - элемент сохраняет заданные размеры, отступы и рамки отрисовываются внутрь элемента.

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/eTiGuB/8/embed?css,output"></iframe>

Свойство довольно широко поддерживается браузерами, в некоторых случаях требуются префиксы. 
Подробнее можно посмотреть на <a href="http://caniuse.com/#feat=css3-boxsizing">caniuse.com/#feat=css3-boxsizing</a>

<strong>Статьи по теме:</strong>
<a href="http://www.paulirish.com/2012/box-sizing-border-box-ftw/">paulirish.com/2012/box-sizing-border-box-ftw/</a>
