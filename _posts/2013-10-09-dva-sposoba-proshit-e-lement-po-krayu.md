---
layout: default
title: Два способа "прошить" элемент по краю
categories:
- Border
- Css
- Outline
- Pseudoelements
type: post

desc: Есть два способа сделать эффект, как будто элемент прострочили на швейной машинке —  используя псевдоэлементы и с помощью outline.
---
Есть два способа сделать эффект, как будто элемент прострочили на швейной машинке: используя псевдоэлементы и с помощью <code>outline</code>.<!--more-->

<h4>Outline</h4>
<pre><code class="language-css">outline: 1px dashed salmon;
outline-offset: -15px;</code></pre>

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/IlecUP/3/embed?output"></iframe>

<strong>Плюс:</strong>
- не требует дополнительных элементов.

<strong>Минус:</strong>
- не воспринимает <code>border-radius</code>, следовательно, способ не походит для элементов со скругленными углами.

Кроме того, свойство своеобразно ведет себя в Firefox: <code>outline</code> реагирует на размеры и положение тени.

<img src="http://img-fotki.yandex.ru/get/9090/5091629.98/0_7ba5b_a045ee5f_orig.png">

<h4>Псевдо-элементы</h4>

Во-первых, нам потребуется обертка для текста, чтобы потом слой с текстом можно было поднять выше псевдоэлемента с рамкой.
Во-вторых, общей обертке и контейнеру с текстом надо будет задать <code>position: relative;</code>.

После этого создаем псевдоэлемент и рисуем рамку:

<pre><code class="language-css">.wrapper:before {
      content: "";
      display: block;
      position: absolute;
      top: 15px;
      right: 15px;
      bottom: 15px;
      left: 15px;
      border: 1px dashed salmon;
      border-radius: 5px;
      }</code></pre>

Результат:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/IlecUP/2/embed?output"></iframe>

<strong>Плюс:</strong>
- может иметь скругленные углы.

<strong>Минус:</strong>
- требует дополнительную разметку и больше кода

