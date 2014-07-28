---
layout: default
title: "SVG: группировка и переиспользование элементов"
type: post
image: http://img-fotki.yandex.ru/get/9761/5091629.9d/0_7fc0d_2a6180fb_M.png
desc: SVG-фигуры можно группировать, чтобы удобно структурировать файл. Для этих целей существует несколько тегов&#58; g, defs и symbol. Элементы, группы элементов и символы можно использовать повторно.

links:
- url: http://www.w3.org/TR/SVG/struct.html
  name: Document Structure
- url: http://sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/
  name: Structuring, Grouping, and Referencing in SVG – The &amp;lt;g>, &lt;use>, &lt;defs> and &lt;symbol> Elements
---

SVG-фигуры можно группировать, чтобы удобно структурировать файл. Для этих целей существует несколько тегов: <nobr><code>g</code></nobr>, <code>defs</code> и <code>symbol</code>. Элементы, группы элементов и символы можно использовать повторно. <!--more-->

<h4>g</h4>

Тег <code>g</code> служит для группировки фигур по смыслу, чтобы поддерживать прозрачную структуру документа. Группа элементов может быть использована повторно.

<svg width="275" height="100" class="svg"><g id="to-sun"><circle fill="purple" r="20" cx="25" cy="25"/><circle fill="crimson" r="20" cx="70" cy="25"/><circle fill="red" r="20" cx="115" cy="25"/><circle fill="orange" r="20" cx="160" cy="25"/><circle fill="gold" r="20" cx="205" cy="25"/><circle fill="yellow" r="20" cx="250" cy="25"/></g><g id="to-night"><circle fill="greenyellow" r="20" cx="25" cy="70"/><circle fill="yellowgreen" r="20" cx="70" cy="70"/><circle fill="green" r="20" cx="115" cy="70"/><circle fill="steelblue" r="20" cx="160" cy="70"/><circle fill="darkviolet" r="20" cx="205" cy="70"/><circle fill="purple" r="20" cx="250" cy="70"/></g></svg>

<pre><code class="language-markup">&lt;svg width="275" height="100">
  &lt;!-- Группа 1  -->
  &lt;g id="to-sun">
    &lt;circle fill="purple" r="20" cx="25" cy="25"/>
    &lt;circle fill="crimson" r="20" cx="70" cy="25"/>
    &lt;circle fill="red" r="20" cx="115" cy="25"/>
    &lt;circle fill="orange" r="20" cx="160" cy="25"/>
    &lt;circle fill="gold" r="20" cx="205" cy="25"/>
    &lt;circle fill="yellow" r="20" cx="250" cy="25"/>
  &lt;/g>
  &lt;!-- Группа 2 -->
  &lt;g id="to-night">
    &lt;circle fill="greenyellow" r="20" cx="25" cy="70"/>
    &lt;circle fill="yellowgreen" r="20" cx="70" cy="70"/>
    &lt;circle fill="green" r="20" cx="115" cy="70"/>
    &lt;circle fill="steelblue" r="20" cx="160" cy="70"/>
    &lt;circle fill="darkviolet" r="20" cx="205" cy="70"/>
    &lt;circle fill="purple" r="20" cx="250" cy="70"/>
  &lt;/g>
&lt;/svg>
</code></pre>

Группе, как и фигурам, можно задавать заливку и рамки. Стиль будет работать для фигур внутри группы, у которых нет своего стиля:

<svg class="svg" width="170" height="50">
  <g id="to-sun" fill="tomato">
    <ellipse rx="30" ry="10" cx="25" cy="25" transform="rotate(-45 25 25)"/>
    <ellipse rx="30" ry="10" cx="105" cy="25" transform="rotate(-45 105 25)"/>
  </g>
  <g id="to-sun" fill="skyblue">
    <ellipse rx="30" ry="10" cx="65" cy="25" transform="rotate(45 65 25)"/>
    <ellipse rx="30" ry="10" cx="145" cy="25" transform="rotate(45 145 25)"/>
  </g>
</svg>

<pre><code class="language-markup">&lt;svg width="170" height="50">
  &lt;!-- Красные фигуры -->
  &lt;g id="to-sun" fill="tomato">
    &lt;ellipse rx="30" ry="10" cx="25" cy="25"
             transform="rotate(-45 25 25)"/>
    &lt;ellipse rx="30" ry="10" cx="105" cy="25"
             transform="rotate(-45 105 25)"/>
  &lt;/g>
  &lt;!-- Голубые фигуры -->
  &lt;g id="to-sun" fill="skyblue">
    &lt;ellipse rx="30" ry="10" cx="65" cy="25"
             transform="rotate(45 65 25)"/>
    &lt;ellipse rx="30" ry="10" cx="145" cy="25"
             transform="rotate(45 145 25)"/>
  &lt;/g>
&lt;/svg></code></pre>

Группы работают не как вложенные элементы в HTML, а скорее как группировка элементов в графических редакторах.

Группы никак не проявляют себя визуально, но могут быть использованы для групповых операций над своим содержимым: можно применять трансформации сразу для группы элементов, без необходимости двигать их по одному, можно задать визуальное оформление всей группе сразу, и его унаследуют все элементы внутри группы.
При этом свойства группы добавляются внутренним элементам, не переопределяя существующие. Например, если у элемента заливка красная, а у группы зеленая, - заливка элемента останется красной.

Чтобы элемент мог унаследовать визуальное оформление группы, у него не должно быть своего оформления.

<h4>defs</h4>

Тег <code>defs</code> служит библиотекой элементов и эффектов, которые будут использоваться позже. Содержимое тега не отображается на странице.

<svg class="svg" width="200" height="200">
  <defs><g><linearGradient id="g1" x1="0%" y1="0%" x2="90%" y2="90%"><stop stop-color="crimson" offset="0%"/><stop stop-color="gold" offset="100%"/></linearGradient><linearGradient id="g2" x1="0%" y1="0%" x2="90%" y2="90%"><stop stop-color="yellowgreen" offset="0%"/><stop stop-color="green" offset="100%"/></linearGradient></g><g><circle fill="url(#g1)" r="50" id="sun"/><rect width="200" height="70" id="rect" fill="url(#g2)"/></g></defs>
  <use xlink:href="#sun" x="120" y="60"/><use xlink:href="#rect" x="0" y="110" transform="rotate(10 100 110)"/>
</svg>

<pre><code class="language-markup">&lt;svg width="200" height="200">
  &lt;!-- Скрытый контейнер для эффектов и фигур -->
  &lt;defs>
    &lt;!-- Группа градиентов -->
    &lt;g>
      &lt;linearGradient id="g1" x1="0%" y1="0%" x2="90%" y2="90%">
        &lt;stop stop-color="crimson" offset="0%"/>
        &lt;stop stop-color="gold" offset="100%"/>
      &lt;/linearGradient>
      &lt;linearGradient id="g2" x1="0%" y1="0%" x2="90%" y2="90%">
        &lt;stop stop-color="yellowgreen" offset="0%"/>
        &lt;stop stop-color="green" offset="100%"/>
      &lt;/linearGradient>
    &lt;/g>
    &lt;!-- Группа фигур. Она не отображается на странице -->
    &lt;g>
      &lt;circle fill="url(#g1)" r="50" id="sun"/>
      &lt;rect width="200" height="70" id="rect" fill="url(#g2)"/>
    &lt;/g>
  &lt;/defs>

  &lt;!-- Использование фигур -->
  &lt;use xlink:href="#sun" x="120" y="60"/>
  &lt;use xlink:href="#rect" x="0" y="110" transform="rotate(10 100 110)"/>
&lt;/svg></code></pre>

<h4>symbol</h4>

Символ - это группа фигур, представляющая собой единое целое. Так же, как и <code>defs</code>, не отображается на странице, и так же, как <code>g</code>, может быть использована ещё раз. Внутри символа действует своя система координат.

<svg class="svg" width="240" height="170"><defs><g><circle fill="gold" r="30" id="yellowball"/></g><symbol id="mouth"><polyline points="15 15 5 10 15 5" stroke="crimson" fill="none" stroke-width="3"/></symbol><symbol id="bird"><g stroke="brown"><polyline points="0 0 0 25" stroke-width="3" transform="translate(25 100)"/><polyline points="0 0 0 25" stroke-width="3" transform="translate(45 100)"/><polyline points="0 0 12 0" stroke-width="3" transform="translate(19 125)"/><polyline points="0 0 12 0" stroke-width="3" transform="translate(40 125)"/></g><use xlink:href="#mouth" x="83" y="35"/><use xlink:href="#yellowball" x="90" y="55" transform="scale(.75)"/><use xlink:href="#yellowball" x="35" y="75" width="100"/><polyline points="55 70 45 90 20 80" stroke="orange" stroke-width="3" fill="none"/><circle fill="black" r="5" cx="75" cy="35"/><circle fill="gray" r="1" cx="77" cy="35"/></symbol></defs><use xlink:href="#bird" x="15" y="15"/><use xlink:href="#bird" x="0" y="35" transform="translate(225 -20) scale(-1,1)"/></svg>

<pre><code class="language-markup">&lt;svg width="240" height="170">
  &lt;defs>
    &lt;g>
      &lt;circle fill="gold" r="30" id="yellowball"/>
    &lt;/g>
    &lt;!-- Описание символа -->
    &lt;symbol id="mouth">
      &lt;polyline points="15 15 5 10 15 5" stroke="crimson" fill="none" stroke-width="3"/>
    &lt;/symbol>
    &lt;!-- Описание символа -->
    &lt;symbol id="bird">
      &lt;g stroke="brown">
        &lt;polyline points="0 0 0 25" stroke-width="3" transform="translate(25 100)"/>
        &lt;polyline points="0 0 0 25" stroke-width="3" transform="translate(45 100)"/>
        &lt;polyline points="0 0 12 0" stroke-width="3" transform="translate(19 125)"/>
        &lt;polyline points="0 0 12 0" stroke-width="3" transform="translate(40 125)"/>
      &lt;/g>
      &lt;use xlink:href="#mouth" x="83" y="35"/>
      &lt;use xlink:href="#yellowball" x="90" y="55" transform="scale(.75)"/>
      &lt;use xlink:href="#yellowball" x="35" y="75" width="100"/>
      &lt;polyline points="55 70 45 90 20 80" stroke="orange" stroke-width="3" fill="none"/>
      &lt;circle fill="black" r="5" cx="75" cy="35"/>
      &lt;circle fill="gray" r="1" cx="77" cy="35"/>
    &lt;/symbol>
  &lt;/defs>

  &lt;!-- Использование символа -->
  &lt;use xlink:href="#bird" x="15" y="15"/>
  &lt;!-- Ещё раз используем символ, повернув его по горизонтали -->
  &lt;use xlink:href="#bird" x="0" y="35" transform="translate(225 -20) scale(-1,1)"/>
&lt;/svg></code></pre>

<h4>use</h4>

Тег, позволяющий переиспользовать SVG-элементы. Можно копировать любые элементы внутри одной HTML-страницы. Также можно подключить библиотеку элементов в начале страницы, а затем использовать их в нужных местах.

Копии можно задать положение, ширину и высоту:

<svg class="svg" width="260" height="140"><defs><symbol id="color-wheel"><circle r="50" fill="gold" cx="50" cy="50"/><circle r="35" fill="orangered" cx="50" cy="50"/><circle r="20" fill="crimson" cx="50" cy="50"/><circle r="5" fill="maroon" cx="50" cy="50"/></symbol></defs><use xlink:href="#color-wheel" x="20" y="20"/><use xlink:href="#color-wheel" x="140" y="20" height="50"/></svg>

<pre><code class="language-markup">&lt;svg width="260" height="140">
  &lt;defs>
    &lt;!-- Создаем символ -->
    &lt;symbol id="color-wheel">
      &lt;circle r="50" fill="gold" cx="50" cy="50"/>
      &lt;circle r="35" fill="orangered" cx="50" cy="50"/>
      &lt;circle r="20" fill="crimson" cx="50" cy="50"/>
      &lt;circle r="5" fill="maroon" cx="50" cy="50"/>
     &lt;/symbol>
  &lt;/defs>

  &lt;!-- Копия символа с координатами -->
  &lt;use xlink:href="#color-wheel" x="20" y="20"/>
  &lt;!-- Копия символаы с координатами и высотой -->
  &lt;use xlink:href="#color-wheel" x="140" y="20" height="50"/>
&lt;/svg></code></pre>

Положение копии определяется относительно верхнего левого угла фигуры в существующей системе координат. При этом внутри символа своя система координат.

При вставке символа ширина и высота (<code>width</code> и <code>height</code>) определяют не размеры фигуры, а видимую область копии (как у правой фигуры), однако при копировании группы (<code>g</code>) ширина и высота ни на что не влияют. Для изменения размеров копии используйте трансформации.

Также можно задавать обводку, заливку и трансформации:

<svg class="svg" width="260" height="140"><defs><symbol id="s-rect"><rect width="100" height="25" x="2" y="2"/></symbol></defs><use xlink:href="#s-rect" x="20" y="20"/><use xlink:href="#s-rect" x="140" y="20" width="50" fill="yellowgreen"/><use xlink:href="#s-rect" x="20" y="80" fill="gold" stroke="orange" stroke-width="4"/><use xlink:href="#s-rect" x="140" y="80" fill="skyblue" stroke="steelblue" stroke-width="2" transform="rotate(-25 190 92)"/></svg>

<pre><code class="language-markup">&lt;svg width="260" height="140">
  &lt;defs>
    &lt;!-- Исходный символ, не отображается -->
    &lt;symbol id="s-rect">
      &lt;rect width="100" height="25" x="2" y="2"/>
     &lt;/symbol>
  &lt;/defs>

  &lt;!-- Просто копия, цвет фона по умолчанию - черный -->
  &lt;use xlink:href="#s-rect" x="20" y="20"/>
  &lt;!-- Добавили ширину и фон -->
  &lt;use xlink:href="#s-rect" x="140" y="20"
       width="50" fill="yellowgreen"/>
  &lt;!-- Добавили фон и обводку -->
  &lt;use xlink:href="#s-rect" x="20" y="80"
       fill="gold" stroke="orange" stroke-width="4"/>
  &lt;!-- Добавили фон, обводку и трансформацию -->
  &lt;use xlink:href="#s-rect" x="140" y="80"
       fill="skyblue" stroke="steelblue" stroke-width="2"
       transform="rotate(-25 190 92)"/>
&lt;/svg></code></pre>

Копиям можно задавать разные классы:

<svg class="svg" width="260" height="50"><style>.col-1 {fill: #F35C78;}.col-2 {fill: #E77D6D;}   .col-3 {fill: #D99B64;}  .col-4 {fill: #C8B357;} .col-5 {fill: #B2CC49;}</style><defs><path id="house" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"/></defs><use xlink:href="#house" class="col-1" x="20" y="10" transform="rotate(35 36 26)"/><use xlink:href="#house" class="col-2" x="67" y="10" transform="rotate(100 83 26)"/><use xlink:href="#house" class="col-3" x="114" y="10" transform="rotate(140 130 26)"/><use xlink:href="#house" class="col-4" x="161" y="10" transform="rotate(30 177 26)"/><use xlink:href="#house" class="col-5" x="208" y="10" transform="rotate(100 224 26)"/></svg>

<i class="font--small">Домик с <a href="http://icomoon.io/">icomoon.io</a></i>

<pre><code class="language-markup">&lt;svg width="260" height="50">
  &lt;style>
 .col-1 {
    fill: #F35C78;
    }
  .col-2 {
    fill: #E77D6D;
    }
  .col-3 {
    fill: #D99B64;
    }
  .col-4 {
    fill: #C8B357;
    }
  .col-5 {
    fill: #B2CC49;
    }
  &lt;/style>

  &lt;defs>
    &lt;!-- Домик -->
    &lt;path id="house" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"/>
  &lt;/defs>

  &lt;!-- Копии домика -->
  &lt;use xlink:href="#house"
       class="col-1" x="20" y="10"
       transform="rotate(35 36 26)"/>
  &lt;use xlink:href="#house"
       class="col-2" x="67" y="10"
       transform="rotate(100 83 26)"/>
  &lt;use xlink:href="#house"
       class="col-3" x="114" y="10"
       transform="rotate(140 130 26)"/>
  &lt;use xlink:href="#house"
       class="col-4" x="161" y="10"
       transform="rotate(30 177 26)"/>
  &lt;use xlink:href="#house"
       class="col-5" x="208" y="10"
       transform="rotate(100 224 26)"/>
&lt;/svg></code></pre>

Хорошо структурированный файл сделает разработку быстрее и комфортнее, а копирование символов может сделать код значительно короче.

