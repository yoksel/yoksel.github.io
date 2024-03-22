---
title: SVG-прелоадеры

tags: [svg, experiments]

image: //img-fotki.yandex.ru/get/6700/5091629.a0/0_84185_5f439231_orig
desc: В поисках что бы ещё такого сделать чтобы ездило, я захотела сделать прелоадеры на SVG. Такие прелоадеры могут быть использованы на любом фоне. Элементы в них могут менять не только прозрачность, но и цвет, обводку или положение в пространстве. Можно придумать огромное количество разных вариантов оформления и анимации.
---

В поисках что бы ещё такого сделать чтобы ездило, я захотела сделать прелоадеры на SVG.

Получилось здорово, хотя результат пока не сильно подходит для использования в реальной жизни.

<!--more-->

Вот такие прелоадеры у меня получились:

<p data-height="470" data-theme-id="4974" data-slug-hash="fjcvA" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/fjcvA/'>Thinking about SVG-preloaders</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Они могут быть использованы на любом фоне. Элементы в них могут менять не только прозрачность, но и цвет, обводку или положение в пространстве. Можно придумать огромное количество разных вариантов оформления и анимации.

Более того, использование символов позволяет как угодно менять элементы прелоадеров (сами прелоадеры, к слову, вовсе не обязательно должны быть круглыми):

<p data-height="470" data-theme-id="4974" data-slug-hash="GcgrD" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/GcgrD/'>Changing items of SVG-preloaders, .v2</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Вместо кружочков можно вставить любые фигуры: рыбок, цветочки, снежинки, котиков... Вид прелоадера можно менять по сезону, под настроение или вовсе случайным образом.

Как сделать простой прелоадер?

Как ни странно, его можно просто написать руками, не заходя в графический редактор.
Первым делом нам потребуется кружочек, напишем его:

```markup
<circle r="10" cx="10" cy="10"/>
```

Простая фигура без оформления, оно потом будет задано через CSS.

Чтобы явно обозначить переиспользуемый элемент, завернем его в <code>symbol</code>:

```markup
<symbol id="s-circle">
  <circle r="10" cx="10" cy="10"/>
</symbol>
```

Теперь на страницу нужно добавить нужное количество копий символа. Копии вставляются через <code>use</code>:

```markup
<use xlink:href="#s-circle" class="u-circle"/>
```

Чтобы иметь возможность манипулировать всеми копиями одновременно, завернем их в тег <nowrap><code>g</code>:</nowrap>

```markup
<g id="circle" class="g-circles">
  <use xlink:href="#s-circle" class="u-circle"/>
  <use xlink:href="#s-circle" class="u-circle"/>
  <use xlink:href="#s-circle" class="u-circle"/>
  ...
</g>
```

Это пригодится если всей группе сразу надо будет добавить общие стили оформления или прелоадер надо будет как-то трансформировать: уменьшить, подвинуть и так далее.

Мой код в итоге выглядит вот так:

```markup
<svg viewBox="0 0 120 120" class="svg-preloader">
  <symbol id="s-circle">
    <circle r="10" cx="10" cy="10"></circle>
  </symbol>

  <g id="circle" class="g-circles">
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
    <use xlink:href="#s-circle" class="u-circle"/>
  </g>
</svg>
```

Внутри тега SVG объявлен символ и ниже группа, содержащая его копии.
Обратите внимание на <code>viewBox</code>:

```markup
viewBox="0 0 120 120"
```

Этот атрибут показывает размеры отображаемой области SVG-содержимого.
Совершенно необходимая вещь, если вы ещё не решили какого размера должен быть ваш прелоадер: если элементу с <code>viewBox</code> задать ширину и высоту, содержимое изображения растянется или сожмется под заданные размеры.

Результат кода на странице выглядит вот так:

<p data-height="280" data-theme-id="4974" data-slug-hash="ozKmy" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ozKmy/'>ozKmy</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Всё верно, кружочки имеют заливку по умолчанию (черным цветом) и им не задано положение в пространстве, поэтому они скопились в левом верхнем углу области, размеры которой заданы <code>viewBox</code>.

Серые границы отображаемой области добавила для понятности, на самом деле границ <code>viewBox</code> не видно. Кстати, границы удобно делать с помощью такой фигуры:

```markup
<rect class="r-bounds" width="100%" height="100%"/>
```

В CSS:


```css
.r-bounds {
  fill: none;
  stroke: #AAA;
}
```

Такой прямоугольник растянется на всю отображаемую область и покажет её границы. Отображаемая область  может не совпадать с границами самого SVG-элемента.

Теперь к копиям символа нужно добавить стили.

Я использую SCSS, потому что это проще, быстрее, и в нем можно использовать циклы и переменные. Например, прелоадер может иметь свой конфиг:


```css
$max: 12; /* количество кружков */
$size: 120px; /* размер прелоадера */
$fill: orangered; /* цвет кружков */
$angle: 360/$max; /* угол поворота каждого кружка относительно центра фигуры */
```

Используем переменные, чтобы задать размеры прелоадера и цвет фигур:


```css
.svg-preloader {
  height: $size;
  width: $size;
}

.g-circles {
  fill: $fill;
}
```

Результат:

<p data-height="268" data-theme-id="4974" data-slug-hash="rAwgq" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rAwgq/'>rAwgq</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Будущий прелоадер получил заданные размеры, кружки стали оранжевыми, но всё ещё находятся в левом верхнем углу. Нужна трансформация.

Первым делом нужно задать центр трансформации, потому что в SVG он по умолчанию находится в левом верхнем углу родительского элемента. Если к родителю не применялись трансформации, центр вращения окажется в левом верхнем углу отображаемой области.

Координаты центра находим разделив на два ширину и высоту:


```css
transform-origin: $size/2 $size/2;
```

Теперь с помощью транформации надо расположить кружки по кругу. У каждого кружка свой угол поворота, поэтому трансформация задается с помощью цикла <code>@for</code> и селектора <code>:nth-child</code>.

Сама трансформация состоит из трех частей:

```css
transform: rotate(#{-$angle*$item}deg) /* угол поворота каждого отдельного кружочка */
translate(10px, 10px) /* сдвигаем каждый кружок к центру, иначе они выползут за пределы видимости */
scale(.85) /* немного уменьшаем*/

```

Весь код трансформаций:

```css
.u-circle {
  transform-origin: $size/2 $size/2;

  @for $item from 1 through $max {
    &:nth-child(#{$max}n + #{$item}){
      transform: rotate(#{-$angle*$item}deg) translate(10px, 10px) scale(.85);
    }
  }
}
```

<code>translate(10px, 10px)</code> можно было бы убрать из CSS и добавить символу, но удобнее хранить все трансформации в одном месте.
Также было бы удобно задавать <code>translate(10px, 10px) scale(.85)</code> не каждому отдельному кружку, а классу  <code>.u-circle</code>, но, к сожалению, трансформации нельзя склеивать. То есть нельзя трансформировать элемент, а потом трансформировать его ещё раз — так не получится, потому что вторая трансформация перезапишет первую (можно сделать только некое подобие склейки, мы рассмотрим этот способ ниже, для варианта, когда склейка становится острой необходимостью).

Результат трансформаций:

<p data-height="268" data-theme-id="4974" data-slug-hash="KBtme" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/KBtme/'>KBtme</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Все кружки послушно расположились по кругу.

Теперь анимируем. Создаем ключевые кадры:


```css
@keyframes opacity {
  0% {
    fill-opacity: 1;
  }
  75% {
    fill-opacity: 0;
  }
}
```

Добавляем анимацию в элемент:


```css
.u-circle {
  transform-origin: $size/2 $size/2;
  animation: opacity 1.2s linear infinite;
  ...
}
```

Эта анимация сделает так, чтобы все символы исчезали и появлялись одновременно. Чтобы сделать анимацию "бегущей", каждому кружку нужно задать свою задержку анимации. Для этого воспользуемся циклом с трансформациями, который у нас уже есть, и допишем в него <code>animation-delay</code>:


```css
@for $item from 1 through $max {
  &:nth-child(#{$max}n + #{$item}){
    transform: rotate(#{-$angle*$item}deg) translate(10px, 10px) scale(.85);
    animation-delay: -#{$item/10}s;
  }
}
```

Результат:

<p data-height="268" data-theme-id="4974" data-slug-hash="Jgixz" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Jgixz/'>Jgixz</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Но что если мы хотим анимировать не только прозрачность заливки, но и цвет символов?

Добавляем ключевые кадры с изменением цвета:


```css
@keyframes colors {
  0% {
    fill: orangered;
  }
  50% {
    fill: teal;
  }
}
```

Можно было бы добавить управление цветами в предыдущую анимацию, но так мы можем более гибко менять обе анимации, при этом изменения в одной анимации не будут затрагивать другую. Кроме того, для разных анимаций можно задать разные параметры воспроизведения, чтоб иногда может быть полезно.

Добавляем вторую анимацию:


```css
.u-circle {
  transform-origin: $size/2 $size/2;
  animation: 1.2s linear infinite;
  animation-name: colors,opacity;
  ...
}
```

<p data-height="268" data-theme-id="4974" data-slug-hash="nFqzd" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/nFqzd/'>nFqzd</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

На этом можно было бы и остановиться, но что если символы будут помимо цвета и прозрачности менять свое положение в пространстве?

Пишем ключевые кадры с простой анимацией:

```css
@keyframes transform {
  50% {
    transform: scale(.5);
  }
}
```

Добавляем новую анимацию в список:

```css
animation-name: colors, opacity, transform;
```

И на выходе получаем нечто интересное:

<p data-height="268" data-theme-id="4974" data-slug-hash="JDHzK" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/JDHzK/'>JDHzK</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Таки да: трансформации не склеиваются, поэтому где-то на середине символ возвращается в первоначальное положение, уменьшается там вдвое (потому что <code>transform: scale(.5)</code>), а потом летит себе дальше. Так происходит потому, что трансформация, задающая положение каждого отдельного символа, перезаписывавется трансформацией, заданной в анимации.

Как сохранить положение символа на плоскости и при этом иметь возможность дополнительно его масштабировать?

Можно суммировать трансформации родительских и дочерних элементов. Это увеличит разметку, но даст больше возможностей в анимации. Заворачиваем каждый символ в группу:

```markup
<g class="g-circle">
  <use xlink:href="#s-circle" class="u-circle"/>
</g>
```

Переносим трансформацию элементов с <code>use</code> на группу и убираем анимацию <code>transform</code>:

```css
.g-circle {
  transform-origin: $size/2 $size/2;
  animation: 1.2s linear infinite;
  animation-name: colors, opacity;
  ...
}
```

Всё работает:

<p data-height="268" data-theme-id="4974" data-slug-hash="nbird" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/nbird/'>nbird</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

А теперь пробуем добавить анимацию с трансформацией. На этот раз не группе, а символам:

```css
.u-circle {
  animation: 1.2s linear infinite;
  animation-name: transform;
}
```

<p data-height="268" data-theme-id="4974" data-slug-hash="hDyqc" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/hDyqc/'>hDyqc</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Получилось, кружочки никуда не улетают, но теперь им не хватает задержки анимации. Для этого нам опять понадобятся цикл и <code>:nth-child</code>, но цикл будет идти по группам (а не по символам), потому что символы находятся каждый в своей группе:

```css
.g-circle {
  @for $item from 1 through $max {
    &:nth-child(#{$max}n + #{$item}) .u-circle {
       animation-delay: -#{$item/10}s;
    }
  }
}
```

Результат:

<p data-height="268" data-theme-id="4974" data-slug-hash="Fqwpm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Fqwpm/'>Fqwpm</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Таким образом усложнив разметку можно получить более сложные и интересные варианты анимированных трнасформаций. К символам можно добавлять две и больше трансформации без опасений что что-то поломается:

<p data-height="268" data-theme-id="4974" data-slug-hash="lGLni" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/lGLni/'>lGLni</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Заменить кружочки на что-то другое можно просто поменяв символ:

<p data-height="268" data-theme-id="4974" data-slug-hash="bEIuo" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/bEIuo/'>bEIuo</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Получился некий конструктор, в котором можно легко менять вид и анимации прелоадера, а сам прелоадер может быть сколь угодно разным, и вовсе не обязательно в форме кольца.

Было бы волшебно, если бы вся эта красота просто везде работала, но всё не так просто. IE9-11 вообще не поддерживают CSS-анимации и CSS-трансформации, задаваемые SVG-элементам, то есть в них кружочки так и останутся лежать стопкой в левом верхнем углу, как в <a href="https://codepen.io/yoksel/pen/rAwgq">этом примере</a>. Ещё предполагаю, что могут быть проблемы с производительностью на слабых устройствах.

Мне понравились результаты экспериментов, хотя если бы трансформы можно было складывать — код был бы изящней. Также хотелось бы более равномерной поддержки браузерами. Для широкого использования такие прелоадеры, по-моему, пока не готовы, но наверняка их можно использовать на промо-сайтах, как небольшое эффектное дополнение.
