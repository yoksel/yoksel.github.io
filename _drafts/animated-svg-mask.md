---
layout: default
title: Анимированные SVG-маски
type: post
image:
desc:

links:
- url: http://www.w3.org/TR/SVG/
  name: w3.org/TR/SVG
---

В <a href="/svg-stroke">прошлой статье</a> я рассматривала странности SVG-обводки, а также возможность сделать анимированные маски.

Так как трансформации в масках не анимируются в Firefox ( 31-я версия на момент написания статьи), я продолжила эксперименты с обводками. <!--more-->

Обводками можно имитировать трансформации в масках, и, таким образом, получить много разных интересных эффектов.

Пример простой маски:

<p data-height="320" data-theme-id="4974" data-slug-hash="hatEx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/hatEx/'>hatEx</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Как она устроена?

SVG:

<pre><code class="language-markup">&lt;mask id="m-line">
    &lt;line x1="0" y1="0" x2="100%" y2="100%" class="ln-mask"/>
    &lt;line x1="0" y1="100%" x2="100%" y2="0%" class="ln-mask"/>
&lt;/mask></code></pre>

Внутри две линии. Я не использовала <code>path</code>, потому что ему нельзя задавать координаты в процентах.

CSS для линий:

<pre><code class="language-css">.ln-mask {
  stroke: #FFF;
  stroke-width: 0;
  animation: stroke-width 8s infinite;
  }

@keyframes stroke-width {
  50% {
    stroke-width: 300;
  }
}</code></pre>

В исходном состоянии линии не видны, потому что <code>stroke-width: 0</code>. Для того, чтобы обводки в процессе анимации служили видимой областью маски, им задан белый цвет <code>stroke: #FFF</code>. Также задана анимация, которая увеличивает толщину рамки до 400.

Если вытащить маску наружу, она будет выглядеть вот так:

<p data-height="320" data-theme-id="4974" data-slug-hash="CbDFK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/CbDFK/'>CbDFK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Отображается только то, что попадает под белые области. Линии увеличиваются за счет обводки и показывают содержимое под собой.

Маска применяется к фигуре с помощью атрибута <code>mask="url(#m-line)"</code> или через CSS <code>mask: url(#m-line);</code>

Понимая принцип работы такой маски, можно сделать много других вариантов.

Простое разворачивание из центра:

<p data-height="320" data-theme-id="4974" data-slug-hash="sktnE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/sktnE/'>Simple animated mask in SVG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

И под углом:

<p data-height="320" data-theme-id="4974" data-slug-hash="IBxJt" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/IBxJt/'>Simple animated mask in SVG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Использование паттернов позволяет делать узорные маски.

Клеточки:

<p data-height="320" data-theme-id="4974" data-slug-hash="xAybm" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xAybm/'>Simple animated mask in SVG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Ромбики:

<p data-height="320" data-theme-id="4974" data-slug-hash="cHFJw" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/cHFJw/'>Simple animated mask in SVG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Паттерны позволяют добиться интересного результата минимумом фигур, но ещё интереснее можно сделать, если задать несколько фигур внутри маски и анимировать их по отдельности.

<p data-height="320" data-theme-id="4974" data-slug-hash="dCFrG" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/dCFrG/'>Simple animated mask in SVG (shutter)</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

При этом пути в маске вовсе не обязательно должны быть прямыми линиями:

<p data-height="320" data-theme-id="4974" data-slug-hash="cxkDi" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/cxkDi/'>Simple animated mask in SVG (wavy shutter)</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Да и вообще необязательно это должны быть линии:

<p data-height="320" data-theme-id="4974" data-slug-hash="HvLzE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/HvLzE/'>Simple animated mask in SVG (wavy shutter)</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
-----

, которые можно использовать, к примеру, для анимированных галерей
