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

<p data-height="500" data-theme-id="4974" data-slug-hash="DhotK" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/DhotK/'>DhotK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В демо используются <code>mix-blend-mode</code> и <code>shape-outside</code>, причем <code>mix-blend-mode: multiply;</code>, .

Полноценно оно отображается только в последних Хроме/Опере со включенными экспериментальными возможностями (они умеют CSS shapes, но <code>mix-blend-mode</code> пока что за флагом).

Включить в Хроме:
<code>chrome://flags/#enable-experimental-web-platform-features</code>

В Опере:
<code>opera://flags/#enable-experimental-web-platform-features</code>

В них демо выглядит вот так:

<img src="http://img-fotki.yandex.ru/get/6808/5091629.a1/0_8558f_dd93eaf_M.jpg"/>

 Чтобы увидеть неработающие формы, достаточно открыть демо в Firefox:

<img src="http://img-fotki.yandex.ru/get/4802/5091629.a1/0_85590_76455e1c_M.jpg"/>

 а неработающие режимы смешивания -  IE и Safari:

<img src="http://img-fotki.yandex.ru/get/5103/5091629.a1/0_85591_389669c1_M.jpg"/>

Очевидно, что без огибания текстом по кривой картинка занимает слишком много места, и для управления её размерами я воспользовалась директивой <code>@supports</code>:

<pre><code class="language-css">.pic {
  float: left;
  /* по умолчанию картинка маленькая */
  width: 25%;
  height: auto;
  margin: 0 2em 2em 0;
  }
@supports (shape-outside: polygon(0 0) ) {
    .pic {
      /* если браузер поддерживает shape-outside,
      возвращаем картинке исходный размер */
      width: auto;
      shape-outside: polygon(0 0, 53% 0, 36% 18%, 42% 28%, 75% 30%, 90% 43%, 97% 58%, 88% 80%, 94% 97%, 0 97%);
      }
  }</code></pre>

  Результат в Хроме не изменился:

  <p data-height="500" data-theme-id="4974" data-slug-hash="BmaDi" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/BmaDi/'>BmaDi</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

  В Firefox:

  <img src="http://img-fotki.yandex.ru/get/6825/5091629.a1/0_85594_f6472252_L"/>

  В Safari:

  <img src="http://img-fotki.yandex.ru/get/6746/5091629.a1/0_85595_61c9b09e_L"/>

В Firefox можно так и оставить, но с Safari надо что-то делать. Первый и самый простой вариант - добавить блоку с текстом белую подложку.



