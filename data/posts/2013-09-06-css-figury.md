---
title: CSS-фигуры

tags: [borders, box-shadow, pseudo-elements, draw-on-css]

desc: Фигуры с помощью CSS — тема богатая и интересная. Помимо базовых фигур, используя тени и псевдоэлементы можно сделать много всякого другого, причем некоторые фигуры можно сделать двумя и более способами.

links:
- href: http://css-tricks.com/examples/ShapesOfCSS/
  text: The Shapes of CSS
- href: http://nicolasgallagher.com/pure-css-gui-icons/demo/
  desc: целое семейство иконок, сделанных на чистом Css
- href: /box-shadow
  text: Box shadow
- href: /transform
  text: Transform
- href: /border-radius
  text: Border radius
---

Фигуры с помощью CSS — тема богатая и интересная. Помимо базовых фигур, используя тени и псевдоэлементы можно сделать много всякого другого, причем некоторые фигуры можно сделать двумя и более способами.

<!--more-->Все фигуры из этого примера можно сделать на основе одного элемента.

<iframe class="live-snippet" style="height: 640px" src="../assets/demo/css-figury/demo_1.html?output"></iframe>

Кольца можно сделать с помощью <code>border</code> или <code>box-shadow</code>, причем во втором случае рамка кольца не увеличивает размер фигуры, а колец может быть несколько и они могут быть смещены относительно друг друга:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/css-figury/demo_2.html?output"></iframe>

Сердечки, с трансформами и без:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/css-figury/demo_3.html?output"></iframe>

Инь-ян, удивительно просто, на самом деле <em>(добавлено 3.03.2013)</em>.
По-моему, на <a href="http://css-tricks.com/examples/ShapesOfCSS/">css-tricks.com/examples/ShapesOfCSS/</a> предлагается более изящное решение, которое, к тому же, решает проблему просвечивающего контура у фигуры с тенями.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/css-figury/demo_4.html?output"></iframe>

Стрелочки:

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/css-figury/demo_5.html?output"></iframe>

Про стрелки подробнее <a href="/strelki-s-pomoshh-yu-svojstva-border/">читать тут</a>

Цветок:

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/css-figury/demo_6.html?output"></iframe>

Про цветы из CSS можно <a href="/css-figury-lepestok/">почитать тут</a>.
