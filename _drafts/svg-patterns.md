---
layout: default
title: SVG-паттерны
type: post
image:
desc:

links:
- url: http://www.w3.org/TR/SVG/pservers.html#Patterns
  name: Patterns
---

<code>pattern</code> — это элемент, внутри которого размещаются графические элементы и изображения, и затем его можно использовать в качеcтве заливки.
<!--more-->

Самый простой пример кода выглядит вот так:

<pre><code class="language-markup">&lt;pattern id="pattern"
  width="100%" height="100%">
  ...
&lt;/pattern></code></pre>

Помимо <code>id</code>, без которого не получится применить паттерн к элементу, обязательно нужно указывать ширину и высоту паттерна, потому что по умолчанию их значения равны нулю (и паттерн не будет работать).

Чтобы применить паттерн к элементу, его <code>id</code> нужно задать в атрибуте <code>fill</code>:

<pre><code class="language-markup">&lt;polygon fill="url(#pattern)" points="..."/></code></pre>

Либо то же самое через CSS:

<pre><code class="language-css">polygon {
  fill: url(#pattern);
}</code></pre>

Добавим в паттерн какое-нибудь содержимое, например, вот такой кружок:

<svg class="svg" width="300" height="200">
  <circle r="30%" cx="50%" cy="50%"
          fill="crimson"/>
</svg>

<pre><code class="language-markup">&lt;pattern id="pattern"
  width="100%" height="100%">
  &lt;circle r="30%" cx="50%" cy="50%"
    fill="crimson"/>
&lt;/pattern></code></pre>

Сами по себе паттерны не отображаются на странице. Чтобы увидеть паттерн в действии, его нужно применить к фигуре:

<pre><code class="language-markup">&lt;polygon fill="url(#pattern)"
  points="85,0 170,61 137,161 32,161 0,61"/> </code></pre>

Результат:

<p data-height="320" data-theme-id="4974" data-slug-hash="WoNQpZ" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" data-pen-title="WoNQpZ" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/WoNQpZ/">WoNQpZ</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Мы видим, что круг с координатами центра <code>50%/50%</code> находится посередине SVG-изображения, а не посередине фигуры, также очевидно, что радиус <code>30%</code> рассчитывается относительно всего изображения, а не относительно фигуры, которой задана заливка. Такое поведение не всегда будет желаемым, и его можно менять с помощью атрибутов, которые будут описаны ниже.

Интересно, что если фигуру сдвинуть в пространстве, паттерн подвинется вместе с ней:

<p data-height="320" data-theme-id="4974" data-slug-hash="xRxmWO" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" data-pen-title="xRxmWO" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/xRxmWO/">xRxmWO</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Это самый простой вариант паттерна, он подойдёт если нужно, например, сделать просто заливку картинкой:

<p data-height="320" data-theme-id="4974" data-slug-hash="ObJOLM" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" data-pen-title="ObJOLM" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/ObJOLM/">ObJOLM</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Для более сложных случаев нужно как следует разобраться с остальными атрибутами паттерна.

<h3 id="pattern-units">patternUnits</h3>

<code>patternUnits</code> задаёт систему координат для внешних размеров паттерна, то есть влияет на атрибуты <code>x</code>, <code>y</code>, <code>width</code> и <code>height</code>. Возможные значения:

<code>userSpaceOnUse</code> — используется система координат родительского SVG-элемента. Если выбрано это значение, размеры и координаты можно задавать как в процентах, так и в условных единицах;
<code>objectBoundingBox</code> — используется система координат элемента, к которому применяется паттерн. Если выбрано это значение, размеры и координаты можно задавать в процентах или в значениях от 0.0 до 1.0.

По умолчанию <code>patternUnits</code> использует значение <code>objectBoundingBox</code>.

<p data-height="500" data-theme-id="4974" data-slug-hash="ORKNMy" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern sizes" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/ORKNMy/">patternUnits and pattern sizes</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h3 id="pattern-content-units">patternContentUnits</h3>

<code>patternContentUnits</code> определяет систему координат для содержимого паттерна. <strong>Важно:</strong> если паттерну задан <code>viewBox</code>, этот атрибут работать не будет.

<code>userSpaceOnUse</code> — используется система координат родительского SVG-элемента. Если выбрано это значение, размеры и координаты можно задавать как в процентах, так и в условных единицах;
<code>objectBoundingBox</code> — используется система координат элемента, к которому применяется паттерн. Если выбрано это значение, размеры и координаты можно задавать только в числах от 0.0 до 1.0. Процентные значения здесь использовать не получится, потому что они очень странно себя ведут (<a href="http://codepen.io/yoksel/details/yVyJxj#comment-id-162085">подробнее можно почитать тут</a>).

По умолчанию <code>patternContentUnits</code> использует значение <code>userSpaceOnUse</code>.

<p data-height="500" data-theme-id="4974" data-slug-hash="zoxYjy" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternContentUnits and pattern content" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/zoxYjy/">patternContentUnits and pattern content</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


<h3 id="pattern-transform">patternTransform</h3>

Атрибут позволяет добавить трансформацию.

По умолчанию центр трансформации  (<code>transform-origin</code>) в SVG находится в левом верхнем углу SVG-элемента. Для вращения (<code>rotate</code>) можно вместе с углом поворота задать и центр трансформации, это выглядит примерно так:

<pre><code class="language-markup">patternTransform="rotate(45, 250, 150)"</code></pre>

Первое число — угол поворота, второе и третье — координаты центра вращения.

В этом коде координаты заданы относительно всего SVG-элемента, это будет работать с <code>patternUnits="userSpaceOnUse"</code>. При использовании <code>patternUnits="objectBoundingBox"</code> координаты нужно задавать в относительных значениях в диапазоне от 0.0 до 1.0, код трансформации в этом случае должен быть таким:

<pre><code class="language-markup">patternTransform="rotate(45, .5, .5)"</code></pre>

Это должно работать, но не работает, как можно увидеть в демо ниже:

<p data-height="500" data-theme-id="4974" data-slug-hash="bBdMJK" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternTransform (and bug with transform-origin)" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/bBdMJK/">patternTransform (and bug with transform-origin)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<a href="http://codepen.io/yoksel/full/mOJaOE">Эксперименты показали</a>, что координаты центра трансформации в этом случае, как и при <code>patternUnits="userSpaceOnUse"</code>, могут быть заданы относительно размеров всего SVG-элемента. Это будет работать, хотя и не должно.

Учитывая такое странное поведение, я бы не рекомендовала использовать <code>patternTransform</code> вместе с  <code>patternUnits="objectBoundingBox"</code>.

<h3 id="x-y">x, y</h3>

Атрибуты позволяют задать положение плитки паттерна относительно верхнего левого угла:

<p data-height="500" data-theme-id="4974" data-slug-hash="NbxxZX" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (x & y)" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/NbxxZX/">patternUnits and pattern coordinates (x & y)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h3 id="width-height">width, height</h3>

Атрибуты определяют размер плитки паттерна, причём без <code>viewBox</code> атрибуты не влияют на размеры содержимого, всё, что не поместилось, просто обрежется:

<p data-height="500" data-theme-id="4974" data-slug-hash="pNgEGV" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, no viewBox)" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/pNgEGV/">patternUnits and pattern coordinates (width & height, no viewBox)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Если <code>viewBox</code> задан, содержимое будет подгоняться под размер плитки паттерна, но с сохранением пропорций, заданных <code>viewBox</code>. Если пропорции плитки и содержимого не совпадут, вокруг содержимого останется пустое пространство:

<p data-height="500" data-theme-id="4974" data-slug-hash="ObMmRO" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, has viewBox)" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/ObMmRO/">patternUnits and pattern coordinates (width & height, has viewBox)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Если содержимое должно заполнять плитку целиком, пусть и с искажениями, нужно указать, что сохранять пропорции не требуется, для этого нужно добавить <code>preserveAspectRatio="none"</code>:

<p data-height="500" data-theme-id="4974" data-slug-hash="NbxopY" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, has viewBox + preserveAspectRatio='none')" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/NbxopY/">patternUnits and pattern coordinates (width & height, has viewBox + preserveAspectRatio="none")</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Напомню, что по умолчанию ширина и высота паттерна равны нулю, поэтому размеры обязательно нужно указывать явным образом, иначе паттерн не будет работать.

<h3>viewBox, preserveAspectRatio</h3>

Если вы с ними не знакомы, в этом разделе будет немного вводной информации.

Эти атрибуты не являются специфичными для паттернов, они также могут использоваться как для некоторых других элементов внутри родительского SVG, так и для него самого.

Содержимое SVG-изображения отрисовывается на бесконечном холсте, и по умолчанию видимая область совпадает с размерами самого SVG-элемента. Если задан <code>viewBox</code>, уже он будет задавать размеры и координаты прямоугольника, определяющего видимую область. Если размеры видимой области, заданные во <code>viewBox</code>, не совпадают с размерами SVG-элемента, видимая область растянется или сожмётся, чтобы вместиться целиком. Также этот атрибут определяет соотношение сторон, которое должно сохраняться при изменении размеров элемента.  Подробнее про <code>viewBox</code> можно почитать в <a href="https://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute">спецификации</a>.

<code>preserveAspectRatio</code> отвечает за поведение содержимого при изменении размеров родительского элемента, у него для этого есть большой набор разных значений. Значение по умолчанию — <code>xMidYMid meet</code>, то есть содержимое должно помещаться целиком с сохранением пропорций (<code>meet</code>) и выравниваться по центру (<code>xMidYMid</code>). Похожим образом можно управлять поведением фоновых изображений с помощью CSS-свойства <code>background-size</code> или поведением одного элемента внутри в другого с помощью свойства <code>object-fit</code>.
В <a href="https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute">спецификации</a> можно узнать больше о значениях <code>preserveAspectRatio</code>.

При наличии <code>viewBox</code> при ресайзе элемент стремится поместиться в заданную область целиком с сохранением пропорций. Если сохранять пропорции не нужно, задаётся атрибут <code>preserveAspectRatio</code> со значением <code>none</code>.

<h3 id="xlink-href">xlink:href</h3>

Как и некоторые другие SVG-элементы, паттерны могут наследовать свойства друг друга. Ссылка на паттерн, содержимое и свойства которого нужно унаследовать, задаётся в атрибуте <code>xlink:href</code>.

Из паттерна по ссылке унаследуются все свойства и содержимое, которые не переопределены в текущем паттерне. В примере ниже правый паттерн наследует из левого содержимое и трансформацию:

<p data-height="500" data-theme-id="4974" data-slug-hash="BQKBgP" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternTransform and xlink:href" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/BQKBgP/">patternTransform and xlink:href</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h3 id="snippets">Примеры кода</h3>

Весь этот набор атрибутов не только позволяет гибко управлять паттерном, но и немного взрывает мозг при попытке их использовать.

По моему опыту, самый удобный код получается при одновременном использовании <code>viewBox</code>, <code>width</code> и <code>height</code>. <code>viewBox</code> определяет размер видимой области до применения какого-либо масштабирования, то есть какую часть содержимого паттерна нужно использовать как плитку — это немного похоже на применение инструмента «Crop» в фотошопе. Затем, указав ширину и высоту, можно управлять размером полученной плитки. То есть изначально плитка может быть любого размера, а нужный размер можно настроить потом.

Важный момент: чтобы между плитками не было пустых мест, нужно в <code>width</code> и <code>height</code> сохранять пропорции, указанные во <code>viewBox</code>. Значения размеров при этом не должны зависеть от размеров фигуры или SVG-элемента, следовательно, нужно добавить ещё один необходимый атрибут — <code>patternUnits</code> со значением <code>userSpaceOnUse</code> (то есть, использовать систему координат всего SVG-элемента).

Пример кода:

<pre><code class="language-markup">&lt;pattern id="pattern"
   patternUnits="userSpaceOnUse"
   viewBox="0 0 275 175"
   width="150" height="95">
   ...
&lt;/pattern></code></pre>

Результат:

<p data-height="500" data-theme-id="4974" data-slug-hash="yVVWoM" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="patternUnits and pattern coordinates (width & height, has viewBox)" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/yVVWoM/">patternUnits and pattern coordinates (width & height, has viewBox)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Изменяем размеры паттерна, он послушно масштабируется. При этом размеры фигуры на паттерн не влияют:

<p data-height="500" data-theme-id="4974" data-slug-hash="YpNvjB" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="width, height & viewBox + resize shape" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/YpNvjB/">width, height & viewBox + resize shape</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Для своих экспериментов я обычно выбираю этот вариант, с ним удобнее работать.

А если хочется, чтобы паттерн реагировал на изменение размеров элемента? Тогда нужно задать атрибуту <code>patternContentUnits</code> значение <code>objectBoundingBox</code>. То есть, внутри паттерна система координат должна строиться относительно элемента, к которому применён паттерн.

Пример кода:

<pre><code class="language-markup">&lt;pattern id="pattern"
   patternContentUnits="objectBoundingBox"
   width="50%" height="50%">
   ...
&lt;/pattern></code></pre>

Напомню, что при <code>patternContentUnits="objectBoundingBox"</code> размеры и координаты <i>внутри</i> паттерна можно задавать только в числах от 0.0 до 1.0, проценты работать не будут. Так как все размеры содержимого задаются относительно размеров фигуры, тянуться они так же будут вместе с ней, без сохранения пропорций. Это видно на демо:

<p data-height="500" data-theme-id="4974" data-slug-hash="wogXQK" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="width, height & viewBox + resize shape" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/wogXQK/">width, height & viewBox + resize shape</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<h3 id="examples">Примеры паттернов</h3>


<h3 id="animation">Анимация</h3>
<br>
<br/>
---------------
<br>
---------------
<br>
---------------
баг: https://github.com/w3c/svgwg/issues/293


Интересно, что элементы внутри паттерна могут быть анимированы, а элемент с паттерном может быть использован внутри маски.

Примеры паттернов:

<p data-height="300" data-theme-id="4974" data-slug-hash="minEq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/minEq/'>SVG-pattern</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="300" data-theme-id="4974" data-slug-hash="nkqdJ" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/nkqdJ/'>SVG pattern</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Паттерн с растровой картинкой:

<p data-height="300" data-theme-id="4974" data-slug-hash="eGAxK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/eGAxK/'>eGAxK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
