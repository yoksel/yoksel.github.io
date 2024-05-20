---
title: Цветовой круг на CSS

tags: [experiments]

description: На css-tricks.com опубликовали интересный способ получить цветовой круг с помощью Css. В уроке код для SASS, я попробовала сделать это простым CSS и используя меньшее количество элементов.

links:
- href: http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
  text: docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters
- href: http://dev.w3.org/fxtf/filters/
  text: http://dev.w3.org/fxtf/filters/
- href: http://css-tricks.com/svg-filters-on-text/
  text: css-tricks.com/svg-filters-on-text/
- href: http://www.html5rocks.com/en/tutorials/filters/understanding-css/
  text: html5rocks.com/en/tutorials/filters/understanding-css/
- href: https://codepen.io/indigane/pen/lbLjs
  text: codepen.io/indigane/pen/lbLjs
---

На  <a href="http://css-tricks.com/">css-tricks.com</a> опубликовали интересный способ получить цветовой круг с помощью Css: <a href="http://css-tricks.com/conical-gradients-css/">css-tricks.com/conical-gradients-css</a>.

В уроке код для SASS, я попробовала сделать это простым CSS и используя меньшее количество элементов:<!--more-->

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/tsvetovoj-krug-na-css/demo_1.html?output"></iframe>

Размытие в исходном примере сделано с помощью <code>-webkit-filter: blur(1.7em);</code>, следовательно, будет работать только в браузерах на основе Webkit.
Но можно воспользоваться svg-фильтрами и получить размытие и в других браузерах:

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/tsvetovoj-krug-na-css/demo_2.html?output"></iframe>
