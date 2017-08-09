---
layout: default
title: Размеры в SVG
type: post
image:
desc:

links:
- url: http://www.w3.org/TR/SVG/coords.html
  name: Coordinate Systems, Transformations and Units
---
<a href="http://www.w3.org/TR/SVG/coords.html#Units">Спецификация</a>.
https://www.w3.org/TR/CSS2/visudet.html#inline-replaced-width

Управление размерами в SVG - тема сложная и важная, и чтобы максимально использовать возможности SVG, нужно хорошо понимать как всё работает.

Содержимое SVG-элемента отрисовывается на бесконечном холсте и может быть сколь угодно большого размера, но видимая часть холста соответствует размерам SVG-элемента.

SVG позволяет управлять как размерами видимой области, так и поведением содержимого относительно неё: оно может обрезаться или показываться полностью, может растягиваться с потерей пропорций или стараться уместиться целиком, даже если при этом появляются пустые поля. Этим поведением можно управлять с помощью аттрибутов.

<!--more-->

Если просто вставить SVG на страницу и не задавать ему никакие размеры, он отобразится размером 300px на 150px, что не поместилось — обрежется:

<p data-height="300" data-theme-id="4974" data-slug-hash="LjxPmm" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="LjxPmm" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/LjxPmm/">SVG without any attributes</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Шириной и высотой элемента можно управлять стандартными атрибутами `width` и `height`:

<pre><code class="language-markup">&lt;svg width="350" height="200">
    ...
&lt;/svg></code></pre>

<p data-height="450" data-theme-id="4974" data-slug-hash="qXRBBJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="SVG with width & height" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/qXRBBJ/">SVG with width & height</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Потаскайте ползунки, и вы увидите, что изменение ширины и высоты влияет только на область видимости и не влияет на содержимое, потому что элемент не знает какого размера область, которую нужно ресайзить.

Похожим образом не изменяя размеры содержимого ресайзится `iframe`, но в случае с SVG это поведение можно изменить, если определить размеры области с помощью свойства `viewBox`:

<pre><code class="language-markup">&lt;svg width="350" height="200"
      viewBox="0 0 180 180">
    ...
&lt;/svg></code></pre>

Первые два значения — координаты X и Y верхнего левого угла отображаемой области, последние два — ширина и высота.

Попробуйте теперь изменить размеры, и вы увидите, что каковы бы ни были внешние размеры, содержимое отресайзится, чтобы поместиться целиком.

<p data-height="450" data-theme-id="4974" data-slug-hash="yoMdQX" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="SVG with width, height & viewBox" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/yoMdQX/">SVG with width, height & viewBox</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

`viewBox` можно использовать, например, для кадрирования изображения, чтобы показывать не всю картинку, а только какуою-то её часть:

<p data-height="500" data-theme-id="4974" data-slug-hash="yobqYY" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="SVG with width, height & viewBox (change viewBox)" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/yobqYY/">SVG with width, height & viewBox (change viewBox)</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Интересно, что если у SVG нет размеров, но задан `viewBox`, он займёт собой всё доступное пространство:

<pre><code class="language-markup">&lt;svg viewBox="0 0 180 180">
    ...
&lt;/svg></code></pre>

<p data-height="350" data-theme-id="4974" data-slug-hash="KvmPXL" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="SVG with viewBox" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KvmPXL/">SVG with viewBox</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Это поведение может стать проблемой: если размеры у иконок задаются в стилях, а они не загрузились — страница может превратиться в парад гигантских SVG-картинок. Чтобы этого не произошло, всегда явно задавайте в атрибутах SVG ширину и высоту, размеры потом можно будет легко переопределить в CSS.

Как мы видели в примере выше, если у SVG заданы размеры и `viewBox`, векторное содержимое  будет сжиматься и растягиваться, чтобы поместиться целиком, но этим поведением тоже можно управлять — с помощью атрибута `preserveAspectRatio`.

Например, с помощью значения `none` можно указать, что сохранять пропорции не нужно:

<pre><code class="language-markup">&lt;svg width="350" height="200"
      viewBox="0 0 180 180"
      preserveAspectRatio="none"
      >
    ...
&lt;/svg></code></pre>

<p data-height="400" data-theme-id="4974" data-slug-hash="xLdQqX" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="SVG preserveAspectRatio='none'" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/xLdQqX/">SVG preserveAspectRatio='none'</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Важно помнить, что `preserveAspectRatio` не работает без `viewBox`. `viewBox` задает область, которая должна масштабироваться, `preserveAspectRatio` определяет как именно она должна это делать.

Значение `preserveAspectRatio` состоит из двух частей: первая задаёт выравнивание, вторая — поведение элемента в пространстве: будет ли он сжиматься так, чтобы поместиться целиком (как `background-size: contain`) или он будет заполнять собой всю область видимости (как `background-size: cover`: то, что не поместилось, обрежется).

<p data-height="500" data-theme-id="4974" data-slug-hash="RZVqJv" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="SVG preserveAspectRatio values" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/RZVqJv/">SVG preserveAspectRatio values</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

------------------



В SVG-документе есть две системы координат:

1. Система координат области отрисовки - <b>viewport space</b>.
2.  Система координат SVG-элемента - <b>user space</b>.

По умолчанию система координат SVG-элемента соответствует системе координат области отрисовки (viewport), а единицы SVG-элемента - пикселям области отрисовки.

Отсчет системы координат начинается от левого верхнего угла.

<h4>Единицы измерения</h4>


В качестве единиц измерения могут использоваться em, ex, px, pt, pc, cm, mm, in, проценты, а также единицы системы координат (user space units).

При этом изначально все единицы соответствуют единицам системы координат области отрисовки, но при использовании трансформаций или <code>viewBox</code> масштабируется вся система координат SVG-элемента, и единицы измерения тоже. Пиксели из <i>user space</i> больше не равны пикселям из <i>viewport space</i>.


-----------------

