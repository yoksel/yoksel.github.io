---
layout: default
title: CSS-трюки для SVG в старых Android'ах
type: post
image:
desc:

links:
- url: /svg-in-ie8
  name: Грабли на чистом SVG
- url: /grunt-plugin
  name: Зачем я написала плагин для Grunt

---
В один прекрасный день у меня возник интересный вопрос. Есть решение для замены инлайнового SVG на фоновые картинки в браузерах, где инлайновый SVG не поддерживается. Решение построено на допущении, что на странице есть нужный нам класс <code>ie8</code>, по которому SVG-элементам включаются фоновые изображения.

Очевидный недостаток способа состоит в том, что мы должны  отдельно позаботиться о том, чтобы нужный нам класс был - при генерации страницы на сервере или же определив браузер с помощью JS.

<!-- Как вариант - определять возможности браузера с помощью modernizr, и полагаться на добавляемые им классы. -->

Второй очевидный недостаток состоит в том, что способ не годится для других браузеров без поддержки инлайнового SVG.

Мне стало интересно: есть ли у этой задачи решение на чистом CSS?<!--more-->

И, кажется, я его нашла. Оно странное, но работает. Меня интересовала его работоспособность в следующих браузерах:

* IE8 и 9
* Android 2.x
* Opera 12, Opera Mini

Тестировалось вот на такой конструкции:

 SVG:

<pre><code class="language-markup">&lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-icon">
      &lt;circle r="55" cx="50%" cy="50%" fill="greenyellow"/>
      &lt;text x="50%" y="50%" dy=".4em" text-anchor="middle" style="font: 38px/1 Trebuchet MS; fill: #FFF">SVG&lt;/text>
&lt;/svg></code></pre>

CSS:

<pre><code class="language-css">.svg-icon {
  display: inline-block;
  margin: 3em 2em;
  width: 180px;
  height: 130px;
  background: url(https://img-fotki.yandex.ru/get/5807/5091629.a3/0_86371_b2660de0_orig) no-repeat center center;
  border: 1px solid #555;
  }</code></pre>

Если SVG не поддерживается браузером, мы увидим - только эту фоновую картинку:

<img src="https://img-fotki.yandex.ru/get/5807/5091629.a3/0_86371_b2660de0_orig"/>

Если поддерживается - и фон, и SVG. Если вы смотрите страницу в современном браузере, демо покажет вам именно этот вариант:

<p data-height="268" data-theme-id="4974" data-slug-hash="sbzEp" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/sbzEp/'>Test support of SVG fallback</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Задача состоит в том, чтобы в браузерах с поддержкой SVG убирать фон. То есть по умолчанию всегда показывается PNG-заглушка, и её нужно скрыть только в современных браузерах.

Первым делом в голову приходит вариант с множественными фонами, например:

<pre><code class="language-css">background: linear-gradient(none, none);</code></pre>

Хороший вариант, но браузеры Android 2.x понимают множественные фоны и не понимают SVG, поэтому для них при таком способе на странице не будет ни того, ни другого.

Следующая идея убирать фон с помощью <a href="http://pauginer.com/post/36614680636/invisible-gradient-technique">невидимого градиента</a>.

Примерный код:

<pre><code class="language-css">background: linear-gradient(transparent, transparent);</code></pre>

Способ работает везде, где нужно, кроме IE9 - он не понимает градиенты.

Нужно какое-то решение, которое уберет фон в IE9 и ничего не поломает в остальных. Мне не удалось найти ничего подходящего в CSS-свойствах для <a href="http://caniuse.com/#search=background">управления фоном</a>, но зато кое-что интересное неожиданно нашлось в <a href="http://caniuse.com/#search=viewport%20units">единицах измерения</a>.

Если для управления размерами или положением фона использовать единицы вьюпорта - <code>vw</code>  или <code>vh</code>, браузеры Android 2.x и Opera Mini полностью проигнорируют свойство, где они содержатся. То есть можно написать:

<pre><code class="language-css">background-position: -1000vh 0;</code></pre>

и этот код уберет фоновое изображение в IE9.

Не все браузеры понимают единицы вьюпорта, так что в финальной версии кода нужно комбинировать два последних способа:

<pre><code class="language-css">background: linear-gradient(transparent, transparent); /* современные браузеры кроме IE9 */
background-position: -1000vh 0; /* IE9 */</code></pre>

Демо:

<p data-height="268" data-theme-id="4974" data-slug-hash="tKzeB" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/tKzeB/'>Test support of SVG fallback</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Прямая ссылка для тестирования: <a href="http://codepen.io/yoksel/full/tKzeB">codepen.io/yoksel/full/tKzeB</a>

Возможно, я что-то упустила, но на данный момент мои тесты показывают, что этот способ работает.

Браузеры, где проверила (помимо современных):

* IE8 и 9
* Android 2.x
* Opera 12, Opera Mini

Для проверки в Android 2.x я использовала <a href="http://www.browserstack.com/screenshots">browserstack.com/screenshots</a>, выбрав там Samsung Galaxy S2. Буду признательна, если кто-то потестит на реальном девайсе и сообщит о результатах.

Вообще если у вас есть возможность потестить демо на устройствах, где может быть проблема с инлайновым SVG, проверьте, пожалуйста, и сообщите как оно там.









