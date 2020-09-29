---
title: Цветовой круг на CSS

tags: [experiments]

desc: На css-tricks.com опубликовали интересный способ получить цветовой круг с помощью Css. В уроке код для SASS, я попробовала сделать это простым CSS и используя меньшее количество элементов.

links:
- url: http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
  name: docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
- url: http://dev.w3.org/fxtf/filters/
  name: http://dev.w3.org/fxtf/filters/
- url: http://css-tricks.com/svg-filters-on-text/
  name: css-tricks.com/svg-filters-on-text/
- url: http://www.html5rocks.com/en/tutorials/filters/understanding-css/
  name: html5rocks.com/en/tutorials/filters/understanding-css/
- url: https://codepen.io/indigane/pen/lbLjs
  name: codepen.io/indigane/pen/lbLjs
---

На  <a href="http://css-tricks.com/">css-tricks.com</a> опубликовали интересный способ получить цветовой круг с помощью Css: <a href="http://css-tricks.com/conical-gradients-css/">css-tricks.com/conical-gradients-css</a>.

В уроке код для SASS, я попробовала сделать это простым CSS и используя меньшее количество элементов:<!--more-->

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/tsvetovoj-krug-na-css/demo_1.html?output"></iframe>

Размытие в исходном примере сделано с помощью <code>-webkit-filter: blur(1.7em);</code>, следовательно, будет работать только в браузерах на основе Webkit.
Но можно воспользоваться svg-фильтрами и получить размытие и в других браузерах:

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/tsvetovoj-krug-na-css/demo_2.html?output"></iframe>
