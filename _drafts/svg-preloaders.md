---
layout: default
title: SVG-прелоадеры
type: post
image:
desc:

links:
- url: http://link.com
  name: Name

---

В поисках что бы ещё такого сделать чтобы ездило, я захотела сделать прелоадеры на SVG.

Получилось здорово, хотя результат пока не сильно подходит для использования в реальной жизни.

<!--more-->

Вот такие прелоадеры у меня получились:

<p data-height="415" data-theme-id="4974" data-slug-hash="fjcvA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/fjcvA/'>Thinking about SVG-preloaders</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Элементы в них могут менять не только прозрачность, но и цвет, обводку или положение в пространстве. Можно придумать огромное количество разных вариантов оформления и анимации.

Более того, использование символов позволяет как угодно менять элементы прелоадеров (сами прелоадеры к слову, вовсе не обязательно должны быть круглыми):

<p data-height="431" data-theme-id="4974" data-slug-hash="GcgrD" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/GcgrD/'>Changing items of SVG-preloaders, .v2</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Вместо кружочков можно вставить любые фигуры: рыбок, цветочки, снежинки, котиков... Вид прелоадера можно менять по сезону, под настроение или вовсе случайным образом.

Как сделать простой прелоадер?

Как ни странно, его можно просто написать руками, не заходя в графический редактор.
Первым делом нам потребуется кружочек, напишем его:

<pre><code class="language-markup">&lt;circle r="10" cx="10" cy="10"/></code></pre>

Простая фигура без оформления, оно потом будут задано через CSS.

Чтобы явно обозначить переиспользуемый элемент, завернем его в <code>symbol</code>:

<pre><code class="language-markup">&lt;symbol id="s-circle">
    &lt;circle r="10" cx="10" cy="10"/>
&lt;/symbol></code></pre>

Теперь на страницу нужно добавить нужное количество копий символа. Копии вставляются через <code>use</code>:

<pre><code class="language-markup">&lt;use xlink:href="#s-circle" class="u-circle"/></code></pre>

Чтобы иметь возможность манипулировать всеми копиями одновременно, завернем их в тег <code>g</code>:

<pre><code class="language-markup">&lt;g id="circle" class="g-circles">
    &lt;use xlink:href="#s-circle" class="u-circle"/>
    &lt;use xlink:href="#s-circle" class="u-circle"/>
    &lt;use xlink:href="#s-circle" class="u-circle"/>
    ...
&lt;/g></code></pre>

Это пригодится если всей группе сразу надо будет добавить общие стили оформления или прелоадер надо будет как-то трансформировать: уменьшить, подвинуть и так далее.

Мой итоговый код выглядит вот так:

<pre><code class="language-markup">&lt;svg viewBox="0 0 120 120">
      &lt;symbol id="s-circle">
        &lt;circle r="10" cx="10" cy="10">&lt;/circle>
      &lt;/symbol>
      &lt;g id="circle" class="g-circles">
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
        &lt;use xlink:href="#s-circle" class="u-circle"/>
      &lt;/g>
&lt;/svg></code></pre>

Внутри тега SVG объявлен символ и ниже группа, содержащая его копии.
Обратите внимание на <code>viewBox</code>:

<pre><code class="language-markup">viewBox="0 0 120 120"</code></pre>

Этот атрибут показывает размеры отображаемой области SVG-содержимого.
Совершенно необходимая вещь, если вы ещё не решили какого размера должен быть ваш прелоадер: если элементу с <code>viewBox</code> задать ширину и высоту, содержимое изображения растянется или сожмется под заданные размеры.

Результат кода выше на странице выглядит вот так:

<p data-height="268" data-theme-id="4974" data-slug-hash="ozKmy" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/ozKmy/'>ozKmy</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Всё верно, кружочки имеют заливку по умолчанию (черным цветом) и им не задано положение в пространстве, поэтому они скопились в верхнем левом углу области, размеры которой заданы <code>viewBox</code>.

Серые границы области добавила для понятности, на самом деле границ <code>viewBox</code> не видно. Кстати, это удобно делать с помощью такой фигуры:

<pre><code class="language-markup">&lt;rect class="r-bounds" width="100%" height="100%"/></code></pre>

Такой прямоугольник растянется на всю видимую область и покажет границы отображаемой области, которая может не совпадать с границами самого SVG-элемента.

Нужно добавить стили.

Я использую Sass, потому что это проще, быстрее, и в нем можно использовать циклы и переменные. Например, прелоадер может иметь свой конфиг:

<pre><code class="language-css">$max: 12; // количество кружков
$size: 120px; // размер прелоадера
$fill: orangered; // цвет кружков
$angle: 360/$max; // угол поворота каждого кружка относительно центра фигуры</code></pre>

Было бы волшебно, если бы вся эта красота просто везде работала, но всё не так просто.

ие - анимации, трансформы
ff - анимации в use


