---
layout: default
title: 'Фон под строчками: добавляем поля'
categories:
- Box-shadow
- Css

tags: [text, box-shadow]

status: publish
type: post
published: true

links:
- url: /box-shadow
  name: Box shadow
---
Проблема: если задать фон строчным элементам, получается вот так<!--more-->:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_1.html?output"></iframe>

Пробуем <code>padding</code>, отступы добавились только в начале и в конце строки

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_2.html?output"></iframe>

Аналогичная ситуация с <code>border</code>:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_3.html?output"></iframe>

Прекрасное решение было найдено здесь: <strong><a href="http://codepen.io/davatron5000/pen/HGjuv">codepen.io/davatron5000/pen/HGjuv</a></strong>.

Суть состоит в добавлении тени. Тень добавляется к любому краю строки, даже если это не конец строки, а перенос.

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_4.html?output"></iframe>

<pre><code class="language-css">box-shadow: -20px 0 yellowgreen,
             20px 0 yellowgreen;</code></pre>

Тень не влияет на размер и положение элемента, поэтому дополнительно надо добавить <code>padding</code> родителю.

Результат:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/fon-pod-strochkami-dobavlyaem-polya/demo_5.html?output"></iframe>

Отличное решение и симпатичный эффект.
