---
layout: default
title: First letter
categories:
- Css
- Pseudoclasses
- Pseudoelements
tags: []
status: publish
type: post
published: true
---
<code>:first-letter</code> - это псевдоэлемент, представляющий первый символ в тексте.

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
<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/afawEqu/4/embed?output"></iframe>

Добавление <code>float</code> "утапливает" букву в текст
<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/afawEqu/2/embed?output"></iframe>

<code>:first-letter</code> не срабатывает, если до текста стоит картинка, но работает, если её скрыть c <code>display: none</code>:
<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/afawEqu/3/embed?output"></iframe>

Мне понравилось такое оформление <code>:first-letter</code>:
<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/afawEqu/5/embed?output"></iframe>

<code>float</code> позволяет установить для <code>:first-letter</code>  ширину и выравнивание текста по центру.

Можно по-разному оформить первый символ в тексте, но при этом нужно точно знать, что текст не будет начинаться с картинки.

Спецификация: <a href="http://www.w3.org/TR/css3-selectors/#first-letter">w3.org/TR/css3-selectors/#first-letter</a>
