---
layout: default
title: 'Фон под строчками: добавляем поля'
categories:
- Box-shadow
- Css
tags: []
status: publish
type: post
published: true

links: 
- url: /box-shadow
  name: Box shadow
---
Проблема: если задать фон строчным элементам, получается вот так<!--more-->:

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/IRiheKO/2/embed?output"></iframe>

Пробуем <code>padding</code>, отступы добавились только в начале и в конце строки
<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/IRiheKO/3/embed?output"></iframe>

Аналогичная ситуация с <code>border</code>:
<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/IRiheKO/4/embed?output"></iframe>

Прекрасное решение было найдено здесь: <strong><a href="http://codepen.io/davatron5000/pen/HGjuv">codepen.io/davatron5000/pen/HGjuv</a></strong>.

Суть состоит в добавлении тени. Тень добавляется к любому краю строки, даже если это не конец строки, а перенос.

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/IRiheKO/7/embed?output"></iframe>

<pre><code class="language-css">  box-shadow: -20px 0 yellowgreen,
               20px 0 yellowgreen;</code></pre>

Тень не влияет на размер и положение элемента, поэтому дополнительно надо добавить <code>padding</code> родителю.

Результат:

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/IRiheKO/6/embed?output"></iframe>

Отличное решение и симпатичный эффект.
