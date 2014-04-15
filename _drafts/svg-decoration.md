---
layout: default
title: Оформление SVG c помощью CSS и фильтров.
type: post
image: 
desc: 

links:
- url: http://www.html5rocks.com/en/tutorials/masking/adobe/
  name: CSS Masking

---

Внешний вид SVG-элементам можно задавать как с помощью CSS, так и через SVG-фильтры.

Стили и скрипты, можно задавать прямо внутри SVG-файла, но если мы хотим, чтобы один и тот же файл в разных окружениях выглядел по-разному - стили внутри файла не годятся - нужно, чтобы SVG был доступен для внешних стилей.<!--more-->

Из всех способов вставки SVG для этого подходят всего два: использование в виде шрифта и через <code>use</code>.

В обоих способах можно использовать <code>сurrentColor</code>.
Для этого нужно задать его в качестве заливки (или обводки) фигуры:

<pre><code class="language-css">.icon {
  fill: currentColor;
  }</code></pre>

Если потом для родительского элемента задать цвет текста -

<pre><code class="language-css">A {
  color: crimson;
  }</code></pre>

 фигура зальется этим же цветом. Очень удобно для ссылок по наведению и для страниц с несколькими темами оформления.

Пример:  

<p data-height="450" data-theme-id="4974" data-slug-hash="xiLen" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xiLen/'>SVG and currentColor</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Если вставлять иконки через шрифт, как их можно оформить? 
Можно задать цвет, добавить тени и анимацию:

<p data-height="312" data-theme-id="4974" data-slug-hash="LnJEK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/LnJEK/'>LnJEK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Не так уж и много, по сравнению с возможностями, предоставляемыми SVG.

При вставке SVG через <code>use</code>, иконки не только становятся доступны для стилей страницы, но также получают возможность использовать градиенты и фильтры, находящиеся на странице, например, размытие или тени. Также можно использовать в качестве обводки и заливки паттерны и изображения, а ещё можно красить отдельные части картинок и получать разноцветные иконки.

Вот пример иконок с паттернами в качестве фона:

<p data-height="480" data-theme-id="4974" data-slug-hash="mfdIE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/mfdIE/'>SVG icons with patterns</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Пример, конечно, немного диковат, но ясно показывает, что фоном может быть все, что угодно.

Вот код деревянного паттерна:

<pre><code class="language-markup">&lt;!-- Нужно задать размеры и Id, по которому будет вызываться паттерн -->
&lt;pattern id="wood" width="400" height="400"
         patternUnits="userSpaceOnUse">
  &lt;!-- Внутрь вставляется картинка для фона -->       
  &lt;image xlink:href="http://img-fotki.yandex.ru/get/6447/5091629.86/0_74298_17a84446_L.jpg" 
  width="400" height="400">
&lt;/pattern></code></pre> 

В паттерн можно класть всё что угодно: комбинации фигур, объекты с градиентами, текст... Правда, есть подозрение, что сложные фоны могут плохо влиять на производительность страницы, но тестов не делала.

Подключаем паттерн (код в Sass):
<pre><code class="language-css">.icons--wood {
  fill: url(#wood); 
  }</code></pre>

Можно делать разные интересные эффекты с обводкой:

<p data-height="480" data-theme-id="4974" data-slug-hash="cmslA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/cmslA/'>SVG Icons with outlines</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>В этом демо был ещё пример с анимацией контура, но в некоторых случаях он мог положить браузер, поэтому был скрыт.
Во второй строке он запускается только по наведению, но и в этом случае может вызывать проблемы. 
Эффект красивый, но очень прожорливый.</i>

Обводки могут быть пунктирными, для них можно использовать градиент или паттерн.

<pre><code class="language-css">/* Обычная обводка, по наведению меняет цвет */
.icons--stroke .icon {
  stroke: rgba(0, 0, 0, .5);
  stroke-width: 2;
    &:hover {
      stroke: skyblue; 
    }
  }
/* Пунктирная обводка, по наведению линия становится непрерывной */
.icons--dasharray .icon {
  stroke: rgba(0, 0, 0, .5);
  stroke-width: 2;
  stroke-dasharray: 10 5;
  fill: rgba(0, 0, 0, .1);
  &:hover {
    stroke-dasharray: 0;
    }
  }
/* Обводка с градиентом */
.icons--gradient .icon {
  stroke-width: 3;
  stroke: url(#stripes);
  }</code></pre>

Иконкам в последней строке в качестве обводки задан градиент, уходящий в прозрачность.

Следующий пример демонстрирует иконки с SVG-фильтрами:

<p data-height="470" data-theme-id="4974" data-slug-hash="kszeJ" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/kszeJ/'>SVG Icons with filters</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Размытие, тень, повторяющийся контур и внутренняя тень.

При этом в SVG можно использовать далеко не все CSS-свойства, полный список <a href="http://www.w3.org/TR/SVG11/styling.html#SVGStylingProperties">можно найти вот тут</a>.



---------

SVG-фильтры для шрифта???
