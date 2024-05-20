---
title: First letter

tags: [text]

description: :first-letter — это псевдоэлемент, представляющий первый символ в тексте.
---

<code>:first-letter</code> — это псевдоэлемент, представляющий первый символ в тексте.

Работает только для блочных элементов.

К <code>:first-letter</code> применяется ограниченное количество свойств:<!--more-->

<ul><li><code>float</code></li>
<li><code>width</code> (только к элементу c float)</li>
<li><code>margin</code></li>
<li><code>padding</code></li>
<li><code>background</code></li>
<li><code>border</code></li>
<li><code>vertical-align</code> (только к элементу без float)</li>
<li><code>line-height</code></li>
<li><code>text-decoration</code></li>
<li><code>text-transform</code></li>
<li><code>letter-spacing</code></li>
<li><code>word-spacing</code></li>
<li><code>font</code> properties</li>
<li><code>color</code></li></ul>

Пример:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/first-letter/demo_1.html?output"></iframe>

Добавление <code>float</code> "утапливает" букву в текст

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/first-letter/demo_2.html?output"></iframe>

<code>:first-letter</code> не срабатывает, если до текста стоит картинка, но работает, если её скрыть c <code>display: none</code>:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/first-letter/demo_3.html?output"></iframe>

Мне понравился такой вариант оформления <code>:first-letter</code>:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/first-letter/demo_4.html?output"></iframe>

<code>float</code> позволяет установить для <code>:first-letter</code>  ширину и выравнивание текста по центру.

Можно по-разному оформить первый символ в тексте, но при этом нужно точно знать, что текст не будет начинаться с картинки.

Спецификация: <a href="http://www.w3.org/TR/css3-selectors/#first-letter">w3.org/TR/css3-selectors/#first-letter</a>
