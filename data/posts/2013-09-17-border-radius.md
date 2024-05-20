---
title: Border-radius

tags: [borders, draw-on-css]

description: Border-radius — это свойство для скругления углов.

links:
- href: /css-figury/
  text: Css-фигуры
---

<strong>Border-radius</strong> — это свойство, добавляющее элементам скругление углов.

Скругление можно задать для всего элемента сразу:

```css
border-radius: 10px;
```

или разным углам поотдельности, например:

```css
border-top-left-radius: 25px;
border-top-right-radius: 50%;
```

Возможные значения: числа или проценты.<!--more-->

<iframe class="live-snippet" style="height: 275px" src="../assets/demo/border-radius/demo_1.html?output"></iframe>

Если задать два значения<!--more-->, первое будет отвечать за верхний левый и нижний правый углы, а второе — за верхний правый и нижний левый:

<iframe class="live-snippet" style="height: 230px" src="../assets/demo/border-radius/demo_2.html?output"></iframe>

Значения, заданные через <code>/</code>, определяют горизонтальные и вертикальные радиусы:

<iframe class="live-snippet" style="height: 230px" src="../assets/demo/border-radius/demo_3.html?output"></iframe>

Таким образом можно задать разные горизонтальные и вертикальные радиусы как для всей фигуры сразу, так и для отдельных углов:

<iframe class="live-snippet" style="height: 230px" src="../assets/demo/border-radius/demo_4.html?output"></iframe>

Экспериментируя с радиусами можно сделать, например, яйцо, каплю или лимон:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/border-radius/demo_5.html?output"></iframe>

Или вот такую штуку:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/border-radius/demo_6.html?output"></iframe>

А можно мячик : )

<iframe class="live-snippet" style="height: 475px" src="../assets/demo/border-radius/demo_7.html?output"></iframe>

Или облака:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/border-radius/demo_8.html?output"></iframe>

Или цветок, или ещё какую-нибудь чепуху:

<div class="columns"><div class="column column-left">
    <iframe class="live-snippet" style="height: 420px" src="../assets/demo/border-radius/demo_9.html?output"></iframe>
</div><div class="column column-right">
    <iframe class="live-snippet" style="height: 420px" src="../assets/demo/border-radius/demo_10.html?output"></iframe>
</div></div>

Не думаю, что имеет смысл вот так вот рисовать Css-ом, но примеры показывают, что с помощью фантазии и небольшого количества кода можно сделать много интересного.

Статья вдохновлена <a href="http://lanyrd.com/2013/cssday/scfzdr/#link-tdth">презентацией про border-radius</a> от <a href="http://lea.verou.me/">Lea Verou</a>

Спецификация: <a href="http://www.w3.org/TR/css3-background/#the-border-radius">w3.org/TR/css3-background/#the-border-radius</a>
