---
layout: default
title: 'SVG: заливка и обводка'
type: post

tags: [svg]

image: http://img-fotki.yandex.ru/get/9825/5091629.9d/0_7fd41_3b1bf3e6_L.png
desc: В SVG заливка и обводка имеют много разных интересных опций, которые предоставляют возможности гораздо шире того, что есть в CSS. Например, можно нарисовать SVG-паттерн и использовать его не только в заливке, но и в обводке. Заливке и обводке можно указывать разную прозрачность, также можно управлять пунктирной обводкой, на чем можно построить интересные анимированные эффекты.

links:
- url: http://www.w3.org/TR/SVG/
  name: w3.org/TR/SVG
---

В SVG заливка и обводка имеют много разных интересных опций, которые предоставляют возможности гораздо шире того, что есть в CSS.
<!--more-->

Например, можно нарисовать SVG-паттерн и использовать его не только в заливке, но и в обводке. Заливке и обводке можно указывать разную прозрачность, также можно управлять пунктирной обводкой, на чем можно построить интересные анимированные эффекты.

В качестве заливки и обводки можно задавать <code>none</code>, <a href="/tsveta">цвета</a>, ключевые слова (<code>currentColor</code> и <code>transparent</code>), а также <a href="/svg-gradients/">градиенты</a> и паттерны.

<h3 id="fill">fill</h3>

Заливка элемента.

Возможные значения: <code>none</code>, ключевые слова, цвета, паттерны и <a href="/svg-gradients/">градиенты</a>.
Значение по умолчанию — <code>black</code>.

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect"><rect width="70" height="70"/></symbol><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%">  <stop offset="0%" stop-color="yellowgreen" />  <stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect" x="20" y="20" fill="hsla(348, 83%, 47%,.3)"/><use xlink:href="#s-rect" x="110" y="20" fill="rgb(255, 215, 0)"/> <use xlink:href="#s-rect" x="20" y="110" fill="url(#g-green)"/><use xlink:href="#s-rect" x="110" y="110" fill="skyblue"/>  </svg>

```markup
<svg width="200" height="200">
  <defs>
    <symbol id="s-rect">
      <rect width="70" height="70"/>
    </symbol>
    <linearGradient id="g-green"
      x1="0%" y1="0%"
      x2="0%" y2="90%"
    >
      <stop offset="0%" stop-color="yellowgreen" />
      <stop offset="90%" stop-color="green" />
    </linearGradient>
  </defs>

  <use xlink:href="#s-rect"
    x="20" y="20"
    fill="hsla(348, 83%, 47%,.3)"/> <!-- HSLA -->
  <use xlink:href="#s-rect"
    x="110" y="20"
    fill="rgb(255, 215, 0)"/> <!-- RGB -->
  <use xlink:href="#s-rect"
    x="20" y="110"
    fill="url(#g-green)"/> <!-- Градиент -->
  <use xlink:href="#s-rect"
    x="110" y="110"
    fill="skyblue"/> <!-- Цвет по названию -->
</svg>
```


<h3 id="fill-rule">fill-rule</h3>

Свойство определяет как будут заливаться сложные фигуры, имеющие пересечения внутри себя. Для простых фигур ни на что не влияет.

Возможные значения: <code>nonzero</code>, <code>evenodd</code>

<div class="columns">
<div class="column column-left">
  <code>fill-rule="nonzero"</code>

  <svg class="svg" width="200" height="200"><path stroke="orange" stroke-width="5" fill="gold" fill-rule="nonzero" d="M 100,20 L 50,180 180,80 20,80 150,180 z"/></svg>
</div>
<div class="column column-right">
  <code>fill-rule="evenodd"</code>

  <svg class="svg" width="200" height="200"><path stroke="orange" stroke-width="5" fill="gold" fill-rule="evenodd" d="M 100,20 L 50,180 180,80 20,80 150,180 z"/></svg>

</div>
</div>

<code>fill-rule="nonzero"</code> интересно ведет себя для фигур из двух путей. Например, если внешний круг нарисован по часовой стрелке, а внутренний в обратном направлении, центральный круг останется без заливки (слева). Если же оба круга нарисованы в одном направлении — фигура зальется полностью (справа):

<div class="columns">
<div class="column column-left">
    <svg class="svg" width="200" height="200"><g fill="yellowgreen" fill-rule="nonzero" stroke="green" stroke-width="5"><path d="M 20,100 A20,20 0 0,1 180,100 M 20,100 A20,20 0 0,0 180,100 M 150,100 A 50,50 0 0,1 50,100 M 150,100 A 50,50 0 0,0 50,100"/></g></svg>
</div>
<div class="column column-right">
    <svg class="svg" width="200" height="200"><g fill="yellowgreen" fill-rule="nonzero" stroke="green" stroke-width="5"><path d="M 20,100 A20,20 0 0,1 180,100 M 20,100 A20,20 0 0,0 180,100 M 50,100 A 50,50 0 0,1 150,100 M 50,100 A 50,50 0 0,0 150,100"/></g></svg>

</div>
</div>

<h3 id="fill-opacity">fill-opacity</h3>

Управление прозрачностью заливки. Можно задавать значения от 0.0 до 1.0 или в процентах. Правда, Firefox не любит значения в процентах для градиентов (<a href="http://cdpn.io/nstGK">пруфлинк</a>, смотреть в FF).

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect2"><rect width="100" height="100"/></symbol><linearGradient id="g-red" x1="0%" y1="0%" x2="0%" y2="90%"><stop offset="0%" stop-color="orange" /><stop offset="90%" stop-color="crimson" /></linearGradient><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%"><stop offset="0%" stop-color="yellowgreen" /><stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect2" x="20" y="20" fill="url(#g-red)" fill-opacity=".5"/>  <use xlink:href="#s-rect2" x="50" y="50" fill="hsl(50, 100%, 50%)" fill-opacity=".5"/> <use xlink:href="#s-rect2" x="80" y="80" fill="url(#g-green)" fill-opacity=".5"/></svg>

```markup
<!-- ... -->
<use xlink:href="#s-rect"
  x="20" y="20"
  fill="url(#g-red)" fill-opacity=".5"/>
<use xlink:href="#s-rect"
  x="50" y="50"
  fill="hsl(50, 100%, 50%)" fill-opacity=".5"/>
<use xlink:href="#s-rect"
  x="80" y="80"
  fill="url(#g-green)" fill-opacity=".5"/>
<!-- ... -->
```

<h3 id="stroke">stroke</h3>

Цвет обводки. Значения по умолчанию нет.

<svg class="svg" width="200" height="200"><rect width="160" height="160" x="20" y="20" fill="none" stroke="yellowgreen"/></svg>

```markup
<svg width="200" height="200">
  <rect width="160" height="160" x="20" y="20"
    fill="none"
    stroke="yellowgreen"/>
</svg>
```


<h3 id="stroke-width">stroke-width</h3>

Толщина обводки, можно задавать в единицах длины или в процентах.
Значение по умолчанию: 1.

<svg class="svg" width="200" height="200"><rect width="160" height="160" x="20" y="20" fill="none" stroke="yellowgreen" stroke-width="10%"/><rect width="100" height="100" x="50" y="50" fill="none" stroke="gold" stroke-width="10"/></svg>

```markup
<svg width="200" height="200">
  <rect width="100" height="100" x="50" y="50"
    fill="none" stroke="gold"
    stroke-width="10"/>
  <rect width="160" height="160" x="20" y="20"
    fill="none" stroke="yellowgreen"
    stroke-width="10%"/>
</svg>
```

<h3 id="stroke-linecap">stroke-linecap</h3>

Свойство определяет как будут выглядеть концы линий.
Возможные значения: <code>butt</code>, <code>round</code>, <code>square</code>.
Значение по умолчанию: <code>butt</code>.

<svg class="svg" width="200" height="205"><symbol id="s-path-guide"><circle r="3" cx="30" cy="15"/><circle r="3" cx="170" cy="15"/><path d="M 30 15 170 15" stroke-width="2"/></symbol><symbol id="s-path"><path d="M 30 15 170 15" stroke-width="30"/></symbol><use xlink:href="#s-path" stroke="orangered" y="20" stroke-linecap="butt"/><use xlink:href="#s-path" stroke="olivedrab" y="85" stroke-linecap="round"/><use xlink:href="#s-path" stroke="steelblue" y="150" stroke-linecap="square"/><g class="guides"><use xlink:href="#s-path-guide" y="20" stroke="orange" fill="orange"/><use xlink:href="#s-path-guide" y="85" stroke="yellowgreen" fill="yellowgreen"/><use xlink:href="#s-path-guide" y="150" stroke="skyblue" fill="skyblue"/></g></svg>

```markup
<!-- ... -->
  <use xlink:href="#s-path" stroke="orangered" y="20"
    stroke-linecap="butt"/>

  <use xlink:href="#s-path" stroke="olivedrab" y="85"
    stroke-linecap="round"/>

  <use xlink:href="#s-path" stroke="steelblue" y="150"
    stroke-linecap="square"/>
<!-- ... -->
```

<h3 id="stroke-linejoin">stroke-linejoin</h3>

Определяет как будут выглядеть соединения линий на углах.
Возможные значения: <code>miter</code>, <code>round</code>, <code>bevel</code>.
Значение по умолчанию: <code>miter</code>.

<svg class="svg" width="215" height="300"><symbol id="s-corner-guide"><circle r="3" cx="50" cy="100"/><circle r="3" cx="164" cy="100"/><path d="M 30 50 h 80 v 80" stroke-width="2" fill="none" transform="rotate(-45 100 50)"/></symbol><symbol id="s-corner"><path d="M 30 50 h 80 v 80" stroke-width="30" fill="none" transform="rotate(-45 100 50)"/></symbol><use xlink:href="#s-corner" stroke="orangered" y="0" stroke-linejoin="miter"/><use xlink:href="#s-corner" stroke="olivedrab" y="80" stroke-linejoin="round"/><use xlink:href="#s-corner" stroke="steelblue" y="160" stroke-linejoin="bevel"/><g class="guides"> <use xlink:href="#s-corner-guide" y="0" stroke="orange" fill="orange"/> <use xlink:href="#s-corner-guide" y="80" stroke="yellowgreen" fill="yellowgreen"/><use xlink:href="#s-corner-guide" y="160" stroke="skyblue" fill="skyblue"/></g></svg>

```markup
<!-- ... -->
  <use xlink:href="#s-corner" stroke="orangered" y="0"
    stroke-linejoin="miter"/>

  <use xlink:href="#s-corner" stroke="olivedrab" y="80"
    stroke-linejoin="round"/>

  <use xlink:href="#s-corner" stroke="steelblue" y="160"
    stroke-linejoin="bevel"/>
<!-- ... -->
```

<h3 id="stroke-dasharray">stroke-dasharray</h3>

Управляет видом пунктирной обводки. Можно задавать в единицах длины или в процентах.
Если задано одно значение, второе значение считается равным первому. Например, <code>stroke-dasharray="1"</code> нарисует линию из отрезков длиной одну единицу разделенных пробелами такой же ширины.

Примеры разных пунктирных линий:

<svg class="svg" width="300" height="160"><path d="M 20 20 h 260" stroke="purple" stroke-width="1" stroke-dasharray="1" /><path d="M 20 40 h 260" stroke="mediumspringgreen" stroke-width="15" stroke-dasharray="1 3" /><path d="M 20 60 h 260" stroke="orangered" stroke-width="1" stroke-dasharray="5%" /><path d="M 20 80 h 260" stroke="green" stroke-width="1" stroke-dasharray="1 5" /><path d="M 20 100 h 260" stroke="steelblue" stroke-width="1" stroke-dasharray="2 7 6" /> <path d="M 20 120 h 260" stroke="orange" stroke-width="5" stroke-dasharray="5" /> <path d="M 20 140 h 260" stroke="mediumseagreen" stroke-width="1" stroke-dasharray="12% 5%" /></svg>

```markup
<svg width="300" height="160">
  <path d="M 20 20 h 260"
    stroke="purple" stroke-width="1"
    stroke-dasharray="1" />
  <path d="M 20 40 h 260"
    stroke="mediumspringgreen" stroke-width="15"
    stroke-dasharray="1 3" />
  <path d="M 20 60 h 260"
    stroke="orangered" stroke-width="1"
    stroke-dasharray="5%" />
  <path d="M 20 80 h 260"
    stroke="green" stroke-width="1"
    stroke-dasharray="1 5" />
  <path d="M 20 100 h 260"
    stroke="steelblue" stroke-width="1"
    stroke-dasharray="2 7 6" />
  <path d="M 20 120 h 260"
    stroke="orange" stroke-width="5"
    stroke-dasharray="5" />
  <path d="M 20 140 h 260"
    stroke="mediumseagreen" stroke-width="1"
    stroke-dasharray="12% 5%" />
</svg>
```

Используя обводку и простые фигуры можно получить удивительные вещи:

<p data-height="400" data-theme-id="4974" data-slug-hash="bwDzx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/bwDzx/'>SVG-patterns</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
<br>

Также <code>stroke-dasharray</code> интересно сочетается с анимацией:

<p data-height="400" data-theme-id="4974" data-slug-hash="uGfBE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/uGfBE/'>Animated stroke</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<h3 id="stroke-dashoffset">stroke-dashoffset</h3>

Свойство позволяет задать смещение пунктирной обводки относительно первоначального положения. Значение задается в единицах длины или в процентах, значения могут быть отрицательными.
Значение по умолчанию: 0.

В этом примере оранжевые и желтые линии смещены относительно красной с помощью разных значений <code>stroke-dashoffset</code>:

<svg class="svg" width="270" height="270"><g class="g-circles"  fill="none" stroke-width="15" stroke-dasharray="25% 110%" transform="rotate(72 135 135)"><circle r="115" cx="135" cy="135" stroke="crimson"/><circle r="115" cx="135" cy="135" stroke="orangered" stroke-dashoffset="25%"/><circle r="115" cx="135" cy="135" stroke="gold" stroke-dashoffset="50%"/></g></svg>

```markup
<svg width="270" height="270">
  <g class="g-circles" fill="none"
    stroke-width="15"
    stroke-dasharray="25% 110%"
    transform="rotate(72 135 135)">
    <circle r="115" cx="135" cy="135"
      stroke="crimson"/> <!-- Красная обводка без смещения -->
    <circle r="115" cx="135" cy="135"
      stroke="orangered"
      stroke-dashoffset="25%"/> <!-- Оранжевая обводка смещена на 25% -->
    <circle r="115" cx="135" cy="135"
      stroke="gold"
      stroke-dashoffset="50%"/> <!-- Желтая обводка смещена на 50% -->
  </g>
</svg>
```

Сочетая <code>stroke-dashoffset</code> и <code>stroke-dasharray</code> можно получить интересные эффекты.

<i>Для полноценного просмотра воспользуйтесь браузерами на Webkit. <a href="http://codepen.io/yoksel/full/CgrFz/">Ссылка на полную версию</a>.</i>

<p data-height="500" data-theme-id="4974" data-slug-hash="CgrFz" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/CgrFz/'>dasharray + dashoffset = magic</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>Для перезапуска нажмите Rerun.</i>

Несколько вдохновляющих ссылок про анимацию на <code>stroke-dashoffset</code>:

- <a href="http://css-tricks.com/svg-line-animation-works/">How SVG Line Animation Works</a>
- <a href="http://jakearchibald.com/2013/animated-line-drawing-svg/">Animated line drawing in SVG</a>
- <a href="http://tympanus.net/Development/SVGDrawingAnimation/">SVG Drawing Animation</a>

<h3 id="stroke-opacity">stroke-opacity</h3>

Прозрачность обводки. Задаются значения от 0.0 до 1.0.

<svg class="svg" width="200" height="200"><g class="g-circles" fill="none" stroke-width="15"><circle r="40" cx="60" cy="60" stroke="crimson" stroke-opacity=".7"/><circle r="55" cx="100" cy="100" stroke="orangered" stroke-opacity=".5" /><circle r="40" cx="140" cy="140" stroke="gold" stroke-opacity=".25"/></g></svg>

```markup
<svg width="200" height="200">
  <g class="g-circles" fill="none"
    stroke-width="15">
    <circle r="40" cx="60" cy="60"
      stroke="crimson"
      stroke-opacity=".7"/>
    <circle r="55" cx="100" cy="100"
      stroke="orangered"
      stroke-opacity=".5" />
    <circle r="40" cx="140" cy="140"
      stroke="gold"
      stroke-opacity=".25"/>
  </g>
</svg>
```

Анимация обводки позволяет получить совершенно удивительные вещи. Правда, я в своих примерах использовала CSS (и это демо не играет в Firefox) и SVG-анимацию, которая работает таки везде, но задается странно, длинно и неудобно. Думаю, что оптимальнее всего для анимации SVG использовать JavaScript-библиотеки.
