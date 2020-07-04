---
layout: default
title: Мыльные пузыри на SVG
type: post
image: https://img-fotki.yandex.ru/get/59115/5091629.a4/0_90850_bd3003bc_orig
desc: 'Пузыри у меня получились почти случайно, когда я экспериментировала с SVG-градиентами.'

tags: [svg, gradients, masks]

include: ./static/assets/img/svg/bubble.svg
customCSS: bubble.css

---

Честно говоря, пузыри у меня получились почти случайно, когда мне потребовалось как следует изучить градиенты и я экспериментировала с их возможностями. И я сама до сих пор не очень понимаю, как так получилось, используя только SVG — векторный формат, — сделать такой невесомый мыльный пузырь. <!--more-->

<p data-height="500" data-theme-id="4974" data-slug-hash="EyZgLo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/EyZgLo/">SVG Bubbles</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

На самом деле, если разобраться, тут нет ничего сложного, а вся магия заключается в использовании масок в сочетании с градиентами.

<i>Подробно про устройство SVG-масок можно почитать <a href="/svg-masks/">здесь</a>, а про градиенты — <a href="/svg-gradients/">вот здесь</a>.</i>

Разберём пузырь на слои (от нижнего слоя к верхнему):

<div class="bubbles-group gray-stripes-bg items-5">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--bottom"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#light--bottom"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#light--top"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--top"/>
</svg>
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#colors"/>
</svg>
</div>

Пузырь состоит из пяти слоёв, каждый из которых является фигурой c градиентом, некоторые из них — ещё и с масками (внутри которых тоже градиенты).

Важно: всё содержимое пузыря находится внутри тега <code>svg</code>:

```markup
<svg viewBox="0 0 200 200" width="150" height="150">
  <!-- слои будут тут -->
</svg>
```

Также обратите внимание на обязательный атрибут <code>viewBox</code>: он нужен затем, чтобы при изменении размеров изображения внутренняя система координат ресайзилась вместе с ним, и элементы не расползались кто куда, а оставались на своих местах. Особенно это важно для координат, которые не могут быть заданы в процентах.

В примерах тег <code>svg</code> будет опущен, но не забудьте его добавить, если будете использовать примеры кода из статьи.

<h3>Разноцветный слой</h3>

Начнём с самого главного (и самого верхнего) слоя, он имитирует поверхность пузыря с радужными разводами:

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"
  mask="url(#mask--colors-transparency)"></circle>
</svg>

По сути, к фигуре применены два градиента, один из них внутри маски. Эта конструкция позволяет получить фигуру с линейным градиентом и с радиальной прозрачностью одновременно.

<h4>Как сделать:</h4>

<ol class="layer-steps-list">
<li>
<h5>Создаём фигуру с разноцветным градиентом</h5>

<p>
  Пишем градиент:
</p>

```markup
<linearGradient id="gradient--colors"
  x1="0" y1="100%"
  x2="100%" y2="0">
  <stop offset="0%"
    stop-color="dodgerblue"/>
  <stop offset="50%"
    stop-color="fuchsia"/>
  <stop offset="100%"
    stop-color="yellow"/>
</linearGradient>
```

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--colors)"
    ></rect>
</svg>

<p>Применяем его к фигуре:</p>

```markup
<circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"> <!-- градиентная заливка -->
</circle>
```

<svg class="svg gray-stripes-bg"
  viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
    cx="50%" cy="50%"
    fill="url(#gradient--colors)"
    ></circle>
</svg>

<p>Получается разноцветная основа, которой не хватает лёгкости и прозрачности.</p>
</li>

<li>
<h5>Добавляем прозрачность</h5>

<p>Для этого воспользуемся радиальным градиентом с черными и белыми оттенками разной степени прозрачности (значения подбирались опытным путём):</p>

```markup
<radialGradient id="gradient--colors-transparency">
  <stop offset="30%"
    stop-color="black"
    stop-opacity=".2"/>
  <stop offset="97%"
    stop-color="white"
    stop-opacity=".4"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>
```

<svg class="svg gray-stripes-bg"
viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--colors-transparency--no-fx)"
    ></rect>
</svg>

<p>Чтобы прозрачность выглядела более естественно, нужно немного сместить центр градиента, для этого воспользуемся атрибутами <code>fx</code> и <code>fy</code>:</p>

```markup
<radialGradient id="gradient--colors-transparency"
  fx="25%" fy="25%"> <!-- смещение центра градиента -->
  <stop offset="0%"
    stop-color="black"/>
  <stop offset="30%"
    stop-color="black"
    stop-opacity=".2"/>
  <stop offset="97%"
    stop-color="white"
    stop-opacity=".4"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>
```

<p>Вот что получилось:</p>

<svg class="svg gray-stripes-bg"
viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--colors-transparency)"
    ></rect>
</svg>

<p>Теперь делаем маску. В <code>mask</code> кладётся прямоугольник, в качестве заливки используется свежесозданный градиент:</p>

```markup
<mask id="mask--colors-transparency">
  <rect fill="url(#gradient--colors-transparency)"
    width="100%" height="100%"></rect>
</mask>
```

<p>Затем добавляем маску к фигуре с разноцветной заливкой:</p>

```markup
<circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"
  mask="url(#mask--colors-transparency)"> <!-- маска -->
</circle>
```

<p>Результат:</p>

<svg class="svg gray-stripes-bg"
  viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
    cx="50%" cy="50%"
    fill="url(#gradient--colors)"
    mask="url(#mask--colors-transparency)"
    ></circle>
</svg>
</li>
</ol>

<p>Весь код разноцветного слоя:</p>

```markup
<!-- Разноцветный градиент -->
<linearGradient id="gradient--colors"
  x1="0" y1="100%"
  x2="100%" y2="0">
  <stop offset="0%"
    stop-color="dodgerblue"/>
  <stop offset="50%"
    stop-color="fuchsia"/>
  <stop offset="100%"
    stop-color="yellow"/>
</linearGradient>

<!-- Градиент прозрачности разноцветного слоя -->
<radialGradient id="gradient--colors-transparency"
  fx="25%" fy="25%">
  <stop offset="0%"
    stop-color="black"/>
  <stop offset="30%"
    stop-color="black"
    stop-opacity=".2"/>
  <stop offset="97%"
    stop-color="white"
    stop-opacity=".4"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>

<!-- Маска прозрачности разноцветного слоя -->
<mask id="mask--colors-transparency">
  <rect fill="url(#gradient--colors-transparency)"
    width="100%" height="100%"></rect>
</mask>

<!-- Фигура с маской и разноцветным градиентом -->
<circle r="50%" cx="50%" cy="50%"
  fill="url(#gradient--colors)"
  mask="url(#mask--colors-transparency)">
</circle>
```

Получилась полупрозрачная радужная поверхность, пока ещё не очень похожая на мыльный пузырь.

Погуглив картинки по запросу <a href="https://www.google.ru/search?q=soap+bubbles+vector&newwindow=1&biw=1246&bih=617&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjG27zPq8HOAhXjB5oKHWNvA_MQsAQIGg#newwindow=1&tbm=isch&q=soap+bubble&imgrc=R2pNfXjZcboCdM%3A">soap bubble</a>, я подумала, что пузырю можно добавить внутренние отражения вверху и внизу.

<h3>Отражения</h3>

В качестве отражений я использовала две фигуры с однотонной заливкой и маской, добавляющей фигурам прозрачность.

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
<circle r="50%"
    cx="50%" cy="50%"
    fill="aqua"
    mask="url(#mask--light-bottom)"
    ></circle>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
  cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)"
  ></circle>
</svg>
</div>

Прозрачность сделана маской, хотя, теоретически, можно было бы обойтись одними градиентами. Но мне хотелось, чтобы отражения были одинаковыми, а кроме того, использование в маске только белого и чёрного цветов позволяет получить более управляемые градиенты.

<h4>Как сделать:</h4>

<ol class="layer-steps-list">
<li>
<h5>Создаём фигуры с однотонной заливкой</h5>

```markup
<circle r="50%" cx="50%" cy="50%"
  fill="aqua"> <!-- голубая заливка -->
</circle>

<circle r="50%" cx="50%" cy="50%"
  fill="yellow"> <!-- желтая заливка -->
</circle>
```

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
     cx="50%" cy="50%"
     fill="aqua"
     ></circle>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
  cx="50%" cy="50%"
  fill="yellow"
  ></circle>
</svg>
</div>
</li>

<li>
<h5>Добавляем прозрачность с помощью масок</h5>

<p>В этом градиенте так же используются белый и чёрный разной степени прозрачности, а центральный цвет сдвинут вверх с помощью атрибута <code>fy</code>:</p>

```markup
<radialGradient id="gradient--bw-light"
  fy="10%">
  <stop offset="60%"
    stop-color="black"
    stop-opacity="0"/>
  <stop offset="90%"
    stop-color="white"
    stop-opacity=".25"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>
```

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
  <rect width="100%" height="100%"
    fill="url(#gradient--bw-light)"
    ></rect>
</svg>

<p>Используя этот градиент, создадим две маски: для верхнего отражения и для нижнего. В маске для верхнего отражения используется тот же градиент, но прямоугольник с градиентом перевёрнут кверх ногами.</p>

```markup
<!-- Маска для нижнего отражения -->
<mask id="mask--light-bottom">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"></rect>
</mask>

<!-- Маска для верхнего отражения -->
<mask id="mask--light-top">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"
    transform="rotate(180, 100, 100)"></rect>
</mask>
```

<p>Добавляем маски к фигурам с заливкой:</p>

```markup
<!-- Нижнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="aqua"
  mask="url(#mask--light-bottom)"> <!-- маска -->
</circle>

<!-- Верхнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)"> <!-- маска -->
</circle>
```

<p>Результат:</p>

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
     cx="50%" cy="50%"
     fill="aqua"
     mask="url(#mask--light-bottom)"
     ></circle>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <circle r="50%"
  cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)"
  ></circle>
</svg>
</div>
</li>

</ol>

Весь код слоя с отражениями:

```markup
<!-- Градиент для прозрачности -->
<radialGradient id="gradient--bw-light" fy="10%">
  <stop offset="60%"
    stop-color="black"
    stop-opacity="0"/>
  <stop offset="90%"
    stop-color="white"
    stop-opacity=".25"/>
  <stop offset="100%"
    stop-color="black"/>
</radialGradient>

<!-- Маска для нижнего отражения -->
<mask id="mask--light-bottom">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"></rect>
</mask>

<!-- Маска для верхнего отражения -->
<mask id="mask--light-top">
  <rect fill="url(#gradient--bw-light)"
    width="100%" height="100%"
    transform="rotate(180, 100, 100)"></rect>
</mask>

<!-- Нижнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="aqua"
  mask="url(#mask--light-bottom)">
</circle>

<!-- Верхнее отражение -->
<circle r="50%" cx="50%" cy="50%"
  fill="yellow"
  mask="url(#mask--light-top)">
</circle>
```

Объединим слои. Отражения внутренние, поэтому слои с ними располагаются под разноцветным слоем:

<svg class="svg gray-stripes-bg"
  viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#light--bottom"/>
  <use xlink:href="#light--top"/>
  <use xlink:href="#colors"/>
</svg>

Пузырь стал более многоцветным, но сейчас его поверхность выглядит матовой. Чтобы сделать её блестящей, нужно добавить блики.

<h3>Блики</h3>

Они сделаны двумя эллипсами с градиентной заливкой:

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--top"/>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <use xlink:href="#spot--bottom"/>
</svg>
</div>

<i>Контурная обводка показывает границы пузыря.</i>

<h4>Как сделать:</h4>

<ol class="layer-steps-list">
<li>
<h5>Создаём градиент</h5>

<p>Он состоит из оттенков белого разной степени прозрачности, центральный цвет сдвинут к верхнему краю:</p>

```markup
<radialGradient id="gradient--spot"
  fy="20%">
  <stop offset="10%"
    stop-color="white"
    stop-opacity=".7"/>
  <stop offset="70%"
    stop-color="white"
    stop-opacity="0"/>
</radialGradient>
```

<svg class="svg gray-stripes-bg" viewBox="0 0 200 200" width="150" height="150">
<rect width="100%" height="100%"
  fill="url(#gradient--spot)"
  ></rect>
</svg>
</li>

<li>
<h5>Рисуем эллипсы</h5>

<p>Один располагаем вверху слева, другой — внизу справа, добавляем градиентную заливку:</p>

```markup
<!-- Верхний блик -->
<ellipse rx="65" ry="25" cx="55" cy="55"
   fill="url(#gradient--spot)">
</ellipse>

<!-- Нижний блик -->
<ellipse rx="40" ry="20" cx="150" cy="150"
   fill="url(#gradient--spot)">
</ellipse>
```

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="55" ry="25"
  cx="55" cy="55"
  fill="url(#gradient--spot)">
  </ellipse>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="40" ry="20"
  cx="150" cy="150"
  fill="url(#gradient--spot)">
  </ellipse>
</svg>
</div>

<p>Так как радиальный градиент применили к эллипсам, он сплющился, чтобы уместиться в фигуре целиком.</p>
</li>

<li>
<h5>Добавляем трансформации</h5>

<p>Чтобы блики визуально находились на поверхности пузыря, их надо немного повернуть:</p>

```markup
<!-- Верхний блик -->
<ellipse rx="55" ry="25" cx="55" cy="55"
   fill="url(#gradient--spot)"
   transform="rotate(-45, 55, 55)"> <!-- трансформация -->
</ellipse>

<!-- Нижний блик -->
<ellipse rx="40" ry="20" cx="150" cy="150"
   fill="url(#gradient--spot)"
   transform="rotate(-225, 150, 150)"> <!-- трансформация -->
</ellipse>
```

<p>Результат:</p>

<div class="bubbles-group gray-stripes-bg items-2">
<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="55" ry="25"
  cx="55" cy="55"
  fill="url(#gradient--spot)"
  transform="rotate(-45, 55, 55)">
  </ellipse>
</svg>

<svg class="svg" viewBox="0 0 200 200" width="150" height="150">
  <use xlink:href="#dashed-contur"/>
  <ellipse rx="40" ry="20"
  cx="150" cy="150"
  fill="url(#gradient--spot)"
  transform="rotate(-225, 150, 150)">
  </ellipse>
</svg>
</div>
</li>
</ol>

<p>Весь код слоя с бликами:</p>

```markup
<!-- Градиент блика -->
<radialGradient id="gradient--spot" fy="20%">
  <stop offset="10%"
    stop-color="white"
    stop-opacity=".7"/>
  <stop offset="70%"
    stop-color="white"
    stop-opacity="0"/>
</radialGradient>

<!-- Верхний блик -->
<ellipse rx="55" ry="25" cx="55" cy="55"
   fill="url(#gradient--spot)"
   transform="rotate(-45, 55, 55)">
</ellipse>

<!-- Нижний блик -->
<ellipse rx="40" ry="20" cx="150" cy="150"
   fill="url(#gradient--spot)"
   transform="rotate(-225, 150, 150)">
</ellipse>
```

<h3>Финальная сборка</h3>

Теперь можно собрать весь код в финальную версию. В примерах я объединяла в группы разные компоненты одного слоя, но если теперь просто свалить весь код в одну кучу, во-первых, получится неверная последовательность слоёв, а во-вторых, таким кодом будет просто неудобно пользоваться.

При этом код содержит два типа элементов, и можно удобно сгруппировать элементы по типу. Первый тип — это простые фигуры (в нашем случае — круги и эллипсы), именно они являются видимыми слоями, из которых в итоге получается пузырь. Второй тип — это элементы, которые не отображаются на странице, но влияют на внешний вид отображаемых фигур: это маски и градиенты.

Неотображаемые элементы будет удобно положить в <code>defs</code> — это такой элемент, специально предназначенный для хранения переиспользуемых штук. Ни сам элемент, ни его содержимое не отображаются на странице.

Отображаемые элементы следует расположить после <code>defs</code>. При этом нужно обратить внимание на порядок слоёв и помнить, что чем ниже слой в коде, тем ближе он к зрителю, то есть самым первым к коде должен быть нижний блик, а самым верхним — слой с разноцветным градиентом.

Примерный код (маски и градиенты опущены, полный код есть ниже):

```markup
<svg viewBox="0 0 200 200" width="150" height="150">
  <defs>
    <!-- здесь должны быть маски и градиенты -->
  </defs>

  <!-- Нижний блик -->
  <ellipse rx="40" ry="20" cx="150" cy="150"
    fill="url(#gradient--spot)"
    transform="rotate(-225, 150, 150)">
  </ellipse>

  <!-- Нижнее отражение -->
  <circle r="50%" cx="50%" cy="50%"
    fill="aqua"
    mask="url(#mask--light-bottom)">
  </circle>

  <!-- Верхнее отражение -->
  <circle r="50%" cx="50%" cy="50%"
    fill="yellow"
    mask="url(#mask--light-top)">
  </circle>

  <!-- Верхний блик -->
  <ellipse rx="55" ry="25" cx="55" cy="55"
    fill="url(#gradient--spot)"
    transform="rotate(-45, 55, 55)">
  </ellipse>

  <!-- Фигура с маской и разноцветным градиентом -->
  <circle r="50%" cx="50%" cy="50%"
    fill="url(#gradient--colors)"
    mask="url(#mask--colors-transparency)">
  </circle>

</svg>
```

И весь пузырь целиком:

<p data-height="400" data-theme-id="4974" data-slug-hash="grEWZw" data-default-tab="html,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/grEWZw/">grEWZw</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Обратите внимание, что белые блики выглядят цветными. Так как нижний блик как бы отражается от внутренней поверхности пузыря, и относительно зрителя расположен на самой дальней его стенке, в слоях он находится глубже всех, в самом низу (и первым в коде).

Верхний же блик предполагается на внешней стенке пузыря, ближайшей к зрителю, но чтобы и его тоже немного привести в соответствие по цветам, он был размещён не самым верхним слоем, а под слоем с радужными разводами.

<h3>Заключение</h3>

Используя сочетание масок и градиентов можно сделать векторный мыльный пузырь. Преимущество вектора перед растром состоит в том, что его можно сколько угодно растягивать и сжимать без потери качества, а кроме того, цвета такого пузыря можно анимировать.

Я думаю, что это не самое точное изображение мыльного пузыря, но фотореализм и не был моей целью — мне хотелось узнать насколько сложными могут быть градиенты и какую пользу можно извлечь из сочетания градиентов и масок. Результаты впечатляют, и я уверена, что используя вышеописанные способы, разработчики с богатой фантазией могут сделать много интересного.

Также, если у вас на примете есть интересные демо с использованием SVG-градиентов, поделитесь ссылками в комментариях.
