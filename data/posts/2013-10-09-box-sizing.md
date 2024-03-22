---
title: Box-sizing

tags: [layout]

desc: Свойство box-sizing позволяет указать как ведут себя размеры блока при наличии рамок и полей.

links:
- url: http://www.paulirish.com/2012/box-sizing-border-box-ftw/
  name: '* { Box-sizing: Border-box } FTW'
---

Свойство <code>box-sizing</code> позволяет указать как ведут себя размеры блока при наличии рамок и полей.
Применяются к элементам, у которых заданы размеры.<!--more-->

Спецификация: <a href="http://www.w3.org/TR/css3-ui/#box-sizing">w3.org/TR/css3-ui/#box-sizing</a>

Возможные значения:

<code>content-box</code> — отступы и рамки рисуются снаружи блока блока и увеличивают его размеры (значение по умолчанию).

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/box-sizing/demo_1.html?css"></iframe>


<code>padding-box</code> — рамки рисуются снаружи блока блока и увеличивают его размеры, <code>padding</code> отрисовывается внутри элемента и не влияет на размеры. Работал только в Firefox, на ноябрь 2018 уже не поддерживается.

<code>border-box</code> — элемент сохраняет заданные размеры, отступы и рамки отрисовываются внутрь элемента.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/box-sizing/demo_3.html?css"></iframe>

Свойство довольно широко поддерживается браузерами, в некоторых случаях требуются префиксы.
Подробнее можно посмотреть на <a href="http://caniuse.com/#feat=css3-boxsizing">caniuse.com/#feat=css3-boxsizing</a>
