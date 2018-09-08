---
layout: default
title: Border-radius
categories:
- Boder-radius
- Css

tags: [borders]

status: publish
type: post
published: true

links:
- url: /css-figury/
  name: Css-фигуры
---
<strong>Border-radius</strong> — это свойство, добавляющее элементам скругление углов.

Скругление можно задать для всего элемента сразу:
<code>border-radius: 10px;</code>

или разным углам поотдельности, например:
<code>border-top-left-radius: 25px;</code>
<code>border-top-right-radius: 50%;</code>

Возможные значения: числа или проценты.<!--more-->

<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/eCahIfa/2/embed?output"></iframe>

Если задать два значения<!--more-->, первое будет отвечать за верхний левый и нижний правый углы, а второе — за верхний правый и нижний левый:

<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/eCahIfa/4/embed?output"></iframe>

Значения, заданные через "/", определяют горизонтальные и вертикальные радиусы:

<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/eCahIfa/5/embed?output"></iframe>

Таким образом можно задать разные горизонтальные и вертикальные радиусы как для всей фигуры сразу, так и для отдельных углов:

<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/eCahIfa/6/embed?output"></iframe>

Экспериментируя с радиусами можно сделать, например, яйцо, каплю или лимон:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/eCahIfa/14/embed?output"></iframe>

Или вот такую штуку:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/ivifaji/2/embed?output"></iframe>

А можно мячик : )

<iframe class="jsbin" style="height: 550px" src="http://jsbin.com/eCahIfa/9/embed?output"></iframe>

Или облака:

<iframe class="jsbin" style="height: 400px" src="http://jsbin.com/eCahIfa/21/embed?output"></iframe>

Или цветок, или ещё какую-нибудь чепуху:

<div class="clear"><div class="column column-left"><iframe class="jsbin" style="height: 420px" src="http://jsbin.com/eCahIfa/19/embed?output"></iframe></div><div class="column column-right"><iframe class="jsbin" style="height: 420px" src="http://jsbin.com/eCahIfa/18/embed?output"></iframe></div></div>

Не думаю, что имеет смысл вот так вот рисовать Css-ом, но примеры показывают, что с помощью фантазии и небольшого количества кода можно сделать много интересного.

Статья вдохновлена <a href="http://lanyrd.com/2013/cssday/scfzdr/#link-tdth">презентацией про border-radius</a> от <a href="http://lea.verou.me/">Lea Verou</a>

Спецификация: <a href="http://www.w3.org/TR/css3-background/#the-border-radius">w3.org/TR/css3-background/#the-border-radius</a>
