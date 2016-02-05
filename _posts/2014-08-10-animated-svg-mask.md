---
layout: default
title: Анимированные SVG-маски
type: post
image: http://img-fotki.yandex.ru/get/6733/5091629.a1/0_84885_3d02703a_orig
desc: В прошлой статье я рассматривала странности SVG-обводки, а также возможность сделать анимированные маски. Так как трансформации в масках не анимируются в Firefox (31-я версия на момент написания статьи), я продолжила эксперименты с обводками.

links:
- url: /css-animation/
  name: Css Animation
- url: /css-and-svg-masks/
  name: CSS и SVG маски
- url: /svg-stroke/
  name: Странности обводки в SVG
- url: /pages/svg-links/
  name: 'SVG: полезные ссылки'
---

В <a href="/svg-stroke">прошлой статье</a> я рассматривала странности SVG-обводки, а также возможность сделать анимированные маски.

Так как трансформации в масках не анимируются в Firefox (31-я версия на момент написания статьи), я продолжила эксперименты с обводками. <!--more-->

<div class="warning--before-read">В посте много демо с анимацией, страница может подтормаживать на слабых устройствах.</div>

Обводками можно в какой-то степени имитировать трансформации в масках, и, таким образом, получить много разных интересных эффектов.

Пример простой маски:

<p data-height="320" data-theme-id="4974" data-slug-hash="hatEx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/hatEx/'>hatEx</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Как она устроена?

SVG:

<pre><code class="language-markup">&lt;mask id="m-lines">
    &lt;line x1="0" y1="0" x2="100%" y2="100%" class="elem-mask"/>
    &lt;line x1="0" y1="100%" x2="100%" y2="0%" class="elem-mask"/>
&lt;/mask></code></pre>

Внутри две линии. Я не использовала <code>path</code>, потому что ему нельзя задать координаты в процентах.

CSS для линий:

<pre><code class="language-css">$mask-time: 7s;

.elem-mask {
    stroke: #FFF;
    stroke-width: 0;
    animation: stroke-width $mask-time infinite;
    }

@keyframes stroke-width {
    50% {
        stroke-width: 300;
    }
}</code></pre>

В исходном состоянии линии не видны, потому что <code>stroke-width: 0</code>. Для того, чтобы обводки в процессе анимации служили видимой областью маски, им задан белый цвет <code>stroke: #FFF</code>. Также задана анимация, которая увеличивает толщину рамки до 300.

Если вытащить маску наружу, она будет выглядеть вот так:

<p data-height="320" data-theme-id="4974" data-slug-hash="CbDFK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/CbDFK/'>CbDFK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Отображается только то, что попадает под белые области. Линии увеличиваются за счет обводки и показывают содержимое под собой.

Маска применяется к фигуре с помощью атрибута <code>mask="url(#m-line)"</code> или через CSS: <code>mask: url(#m-line);</code>

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

Да и вообще, необязательно это должны быть линии:

<p data-height="320" data-theme-id="4974" data-slug-hash="HvLzE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/HvLzE/'>Simple animated mask in SVG (wavy shutter)</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Помимо преимуществ, анимированные SVG-маски имеют некоторые проблемы. Связаны они не столько с масками, сколько с анимацией. Во-первых, анимации SVG-элементов не поддерживаются в IE. Вторая проблема — производительность. Насколько мне известно, на данный момент анимации SVG-элементов не оптимизируются браузерами, поэтому имеет смысл анимированный SVG применять умеренно и аккуратно.

Мне не приходилось использовать подобные маски в практических целях, но предполагаю, что с их помощью можно будет делать эффектные слайдеры и фотогалереи.

Паттерны <a href="http://www.colourlovers.com/lover/yoksel">отсюда</a>.
