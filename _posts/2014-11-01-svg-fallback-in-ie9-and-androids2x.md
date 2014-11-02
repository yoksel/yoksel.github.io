---
layout: default
title: Трюк на CSS для поддержки SVG в старых браузерах
type: post
image: https://img-fotki.yandex.ru/get/6734/5091629.a3/0_86377_63bd7b1e_orig
desc: "Есть решение для замены инлайнового SVG на фоновые картинки в браузерах, где инлайновый SVG не поддерживается. Оно построено на допущении, что на странице есть нужный нам класс .ie8, по которому SVG-элементам включаются фоновые изображения. Мне стало интересно: можно ли обеспечить поддержку способа во всех старых браузерах, используя только CSS?"

links:
- url: http://pauginer.com/post/36614680636/invisible-gradient-technique
  name: "The invisible gradient technique: Cross-browser support for SVG (with image fallback) using CSS"
- url: /svg-in-ie8
  name: Грабли на чистом SVG
- url: /grunt-plugin
  name: Зачем я написала плагин для Grunt

---
В один прекрасный день у меня возник интересный вопрос. Есть <a href="https://www.npmjs.org/package/svg_fallback">решение</a> для замены инлайнового SVG на фоновые картинки в браузерах, где инлайновый SVG не поддерживается. Оно построено на допущении, что на странице есть нужный нам класс <code>.ie8</code>, по которому SVG-элементам включаются фоновые изображения.

Очевидный недостаток способа состоит в том, что мы должны  отдельно позаботиться о том, чтобы нужный нам класс был — при генерации страницы на сервере или же определив браузер с помощью JS.

<!--more-->

Второй очевидный недостаток состоит в том, что способ не годится для других браузеров без поддержки инлайнового SVG, например, Оперы Мини и Андроидов 2.x.

Мне стало интересно: можно ли обеспечить поддержку во всех старых браузерах, используя только CSS?

И, кажется, я нашла решение. Оно странное, но работает. Меня интересовала его работоспособность в следующих браузерах:

* IE8 и 9
* Android 2.x
* Opera 12, Opera Mini

Тестировалось вот на такой конструкции:

 SVG:

<pre><code class="language-markup">&lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-icon">
    &lt;circle r="55" cx="50%" cy="50%" fill="yellowgreen"/>
    &lt;text x="50%" y="50%" dy=".4em" text-anchor="middle"
          style="font: 38px/1 Trebuchet MS; fill: #FFF">SVG&lt;/text>
&lt;/svg></code></pre>

CSS:

<pre><code class="language-css">.svg-icon {
    display: inline-block;
    margin: 3em 2em;
    width: 180px;
    height: 130px;
    background: url(https://img-fotki.yandex.ru/get/5807/5091629.a3/0_86371_b2660de0_orig)
                no-repeat center center;
    border: 1px solid #555;
    }</code></pre>

Если SVG не поддерживается браузером, мы увидим — только эту фоновую картинку:

<img src="https://img-fotki.yandex.ru/get/5807/5091629.a3/0_86371_b2660de0_orig"/>

Если поддерживается — и фон, и SVG. Если вы смотрите страницу в современном браузере, демо покажет вам именно этот вариант:

<p data-height="268" data-theme-id="4974" data-slug-hash="sbzEp" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/sbzEp/'>Test support of SVG fallback</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<i>На самом деле, в браузерах без поддержки SVG также будет виден текст "SVG", но в реальной жизни это вряд ли будет проблемой, если только вы не кладете текст в иконки.</i>

Задача состоит в том, чтобы в браузерах с поддержкой SVG убирать фон.

Картинки для понятности:

<img src="https://img-fotki.yandex.ru/get/6734/5091629.a3/0_86377_63bd7b1e_orig" class="vlm"/> — сейчас демо выглядит вот так

<img src="https://img-fotki.yandex.ru/get/6828/5091629.a3/0_86372_1655bbc0_orig.png" class="vlm"/> — так оно должно выглядеть в браузерах без поддержки SVG

<img src="https://img-fotki.yandex.ru/get/2914/5091629.a3/0_86378_6105ccc8_orig" class="vlm"/> — а вот так в браузерах, где SVG поддерживается

То есть по умолчанию всегда показывается PNG-заглушка, и её нужно скрыть только в современных браузерах. Нам нужна некая конструкция в CSS, поддержка которой в разных браузерах совпадает с поддержкой SVG.

Первым делом в голову приходит вариант с множественными фонами, например:

<pre><code class="language-css">background: none, none;</code></pre>

Хороший вариант, но браузеры Android 2.x понимают множественные фоны и не понимают SVG, поэтому в них при таком способе на странице не будет ни того, ни другого.

Ссылка для тестирования: <a href="http://codepen.io/yoksel/full/FirKg">http://codepen.io/yoksel/full/FirKg</a>.

Следующая идея убирать фон с помощью <a href="http://pauginer.com/post/36614680636/invisible-gradient-technique">невидимого градиента</a>.

Примерный код:

<pre><code class="language-css">background: linear-gradient(transparent, transparent);</code></pre>

Способ работает везде, где нужно, кроме IE9 — он не понимает градиенты, поэтому в нем будут отображаться и SVG, и фон.

Ссылка для тестирования: <a href="http://codepen.io/yoksel/full/fxCzH">http://codepen.io/yoksel/full/fxCzH</a>.

Нужно какое-то решение, которое уберет фон в IE9 и ничего не поломает в остальных.

Мне не удалось найти ничего подходящего в CSS-свойствах для <a href="http://caniuse.com/#search=background">управления фоном</a>, но зато кое-что интересное неожиданно обнаружилось в <a href="http://caniuse.com/#search=viewport%20units">единицах измерения</a>.

Если для управления размерами или положением фона использовать единицы вьюпорта — <code>vw</code>  или <code>vh</code>, браузеры Android 2.x и Opera Mini полностью проигнорируют свойство, где они содержатся. То есть можно написать:

<pre><code class="language-css">background-position: -1000vh 0;</code></pre>

и этот код уберет фоновое изображение в IE9.

Не все браузеры понимают единицы вьюпорта, так что в финальной версии кода нужно комбинировать оба последних способа:

<pre><code class="language-css">background: linear-gradient(transparent, transparent); /* современные браузеры кроме IE9 */
background-position: -1000vh 0; /* IE9 */</code></pre>

Демо:

<p data-height="268" data-theme-id="4974" data-slug-hash="tKzeB" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/tKzeB/'>Test support of SVG fallback</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Ссылка для тестирования: <a href="http://codepen.io/yoksel/full/tKzeB">codepen.io/yoksel/full/tKzeB</a>

Возможно, я что-то упустила, но на данный момент мои тесты показывают, что этот способ работает.

Браузеры, где проверяла:

* IE8 и 9
* Android 2.3
* Opera 12, Opera Mini

Для проверки в Android 2.3 я использовала <a href="http://www.browserstack.com/screenshots">browserstack.com/screenshots</a>, выбрав там Samsung Galaxy S2. Буду признательна, если кто-то потестит на реальном девайсе и сообщит о результатах.

Вообще если у вас есть возможность потестить <a href="http://codepen.io/yoksel/full/tKzeB">демо</a> на устройствах, где может быть проблема с инлайновым SVG, — проверьте, пожалуйста, и сообщите как оно там — этот способ на данный момент нуждается в основательном тестировании.

Хочется надеяться, что постепенно старые устройства канут в лету, и нам больше не надо будет изобретать такие странные решения на стыке магии и CSS.