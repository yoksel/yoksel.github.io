---
layout: default
title: Режимы наложения и их фолбеки
type: post
image:
desc:

links:
- url: http://link.com
  name: Name

---

В <a href="https://developer.mozilla.org/en-US/Firefox/Releases/32">Firefox 32</a> включили <code>mix-blend-mode</code> (это как <a href="/background-blend-mode/">background-blend-mode</a>, только для элементов). А в <a href="http://www.chromestatus.com/features/5163890719588352">Chrome 37</a> - поддержку <a href="http://dev.w3.org/csswg/css-shapes/">CSS shapes</a>, то есть возможность управлять формой, по которой текст будет обтекать элемент. Обе технологии выглядят очень интересно, так что я решила попробовать их в действии, заодно выяснив как будет выглядеть страница в браузерах, где они не поддерживаются.

<!--more-->

По обеим темам уже были хорошие статьи на английском языке, например:

<ul>
    <li><a href="http://alistapart.com/article/css-shapes-101">CSS Shapes 101</a></li>
    <li><a href="http://alistapart.com/blog/post/moving-forward-with-css-shapes">Moving Forward with CSS Shapes</a></li>
    <li><a href="http://www.html5rocks.com/en/tutorials/shapes/getting-started/">Getting Started with CSS Shapes</a></li>
    <li><a href="https://dev.opera.com/articles/getting-to-know-css-blend-modes/">Getting to Know CSS Blend Modes</a></li>
</ul>

Для более глубокого изучения подойдут ссылки на спецификации:
<ul>
    <li><a href="http://dev.w3.org/fxtf/compositing-1/">Compositing and Blending Level 1</a></li>
    <li><a href="http://dev.w3.org/csswg/css-shapes/">CSS Shapes Module Level 1</a></li>
</ul>

Сейчас я не буду подробно рассматривать обе технологии (потому что это отдельные большие темы), а расскажу только про небольшой эксперимент и про то, что можно сделать для изящной деградации в старых браузерах.

Для начала я открыла новый Хром и сделала такое:

<p data-height="500" data-theme-id="4974" data-slug-hash="KCibG" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/KCibG/'>KCibG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В демо используются <code>mix-blend-mode</code> и <code>shape-outside</code>. Режим наложения <code>mix-blend-mode: multiply;</code> задан всему контейнеру с текстом и картинками, а <code>shape-outside</code> для каждой картинки свой.

Полноценно оно отображается только в последних Хроме/Опере со включенными экспериментальными возможностями (они умеют CSS shapes, но <code>mix-blend-mode</code> пока что за флагом, и их надо включать отдельно).

Включить в Хроме:
<code>chrome://flags/#enable-experimental-web-platform-features</code>

В Опере:
<code>opera://flags/#enable-experimental-web-platform-features</code>

В них демо выглядит вот так:

<img src="http://img-fotki.yandex.ru/get/4805/5091629.a1/0_855c2_8fe321a9_M.jpg"/>

 Чтобы увидеть неработающие формы, достаточно открыть демо в Firefox:

<img src="http://img-fotki.yandex.ru/get/6836/5091629.a1/0_855c4_79b5ff4_M.jpg"/>

 а неработающие режимы смешивания -  IE и Safari:

<img src="http://img-fotki.yandex.ru/get/4803/5091629.a1/0_855c3_f9ded859_M.jpg"/>

Если нужно, чтобы формы работали везде, можно воспользоваться полифилом: <a href="https://github.com/adobe-webplatform/css-shapes-polyfill">css-shapes-polyfill</a>, хотя это может создать дополнительную нагрузку для браузера. При этом, если оставить всё как есть, в браузерах без поддержки CSS-форм ничего особо не ломается - картинки просто обтекаются текстом не по кривой, а по прямоугольному контуру.

В моем демо картинки с прямоугольными контурами занимают больше места, чем хотелось бы, так что для управления их размерами я воспользовалась директивой <code>@supports</code>.

Примерный код:

<pre><code class="language-css">.pic--dragon {
  ...
  max-width: 40%;
  margin: 0 1em 0 -3em;
  ...
  }
.pic--knight {
  ...
  max-width: 33%;
  margin: 0 -3em 1em 1em;
  ..
  }
  /* Если браузер поддерживает формы,
  возвращаем картинкам исходный размер и увеличиваем отступы */
@supports (shape-outside: polygon(0 0)){
  .pic--dragon,
  .pic--knight {
    max-width: none;
    }
  .pic--dragon {
    margin: 0 2em 2em -3em;
    }
  .pic--knight {
    margin: 0 -3em 2em 2em;
    }
}</code></pre>

  <a href="http://codepen.io/yoksel/full/gCKFi/">Результат</a> в Хроме не изменится, в остальных браузерах картинки уменьшатся:

Chrome:

<img src="http://img-fotki.yandex.ru/get/6822/5091629.a1/0_855c5_cbc28eee_M.jpg"/>

Firefox:

<img src="http://img-fotki.yandex.ru/get/6834/5091629.a1/0_855c6_f6f1b1a1_M.jpg"/>

  В Safari:

<img src="http://img-fotki.yandex.ru/get/5112/5091629.a1/0_855c7_76e07640_M.jpg"/>

В Firefox можно так и оставить, но с Safari надо что-то делать: белый фон у картинок и белый в тенях заголовка выглядят не очень. Самый простой вариант - добавить блоку с текстом белую подложку:

<pre><code class="language-css">.l-wrapper {
  ...
  padding: 40px 70px; /* добавляем отступы */
  background: #FFF;  /* добавляем фон */
  ...
  }</code></pre>

  А в <code>@supports</code> обнуляем отступы там, где они не нужны:

  <pre><code class="language-css">.l-wrapper {
    padding: 0;
    }</code></pre>

Результат: <a href="http://codepen.io/yoksel/full/AJKEh/">codepen.io/yoksel/full/AJKEh/</a>

В Хроме ничего не изменилось, потому что при режиме смешивания <code>multiply</code> белый цвет исчезает, а в Safari появились фон и поля:

<img src="http://img-fotki.yandex.ru/get/4800/5091629.a1/0_855cb_3998ac74_M.jpg"/>

При этом получается, что демо в разных браузерах может выглядеть сильно по-разному, и явно можно сделать лучше. Для этого нам потребуется SVG и его фильтры.

В SVG-фильтрах есть режимы смешивания. Их меньше, чем в CSS, но среди них есть нужный нам <code>multiply</code>.



http://www.w3.org/TR/SVG/filters.html#feBlendElement


