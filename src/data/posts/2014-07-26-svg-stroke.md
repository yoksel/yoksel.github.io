---
title: Странности обводки в SVG
type: post

tags: [svg]

image: http://img-fotki.yandex.ru/get/6741/5091629.a1/0_84606_4e6f483e_orig
desc: Веселые приключения SVG-свойства stroke-width, а также несколько странный способ сделать кроссбраузерную анимацию масок.

links:
- url: http://www.w3.org/TR/SVG/masking.html
  name: Clipping, Masking and Compositing
- url: http://www.w3.org/TR/SVG/painting.html#StrokeProperties
  name: Stroke Properties
- url: /css-and-svg-masks/
  name: CSS и SVG маски
- url: /svg-shapes/
  name: SVG-фигуры и трансформации
---

Экспериментируя с SVG можно обнаружить много странных моментов. Получить странное при манипуляциях с масштабированием ещё как-то ожидаемо, но внезапно сюрпризы преподнесло свойство <code>stroke-width</code>.

<!--more-->

<code>stroke-width</code> задает тощину обводки для фигуры. Если в HTML рамка отрисовывается от внешнего края внутрь фигуры и увеличивает её размеры (что можно исправить с помощью <code>box-sizing</code>), то в SVG обводка ведет себя иначе: во-первых, она не растягивает фигуру, во-вторых она отрисовывается и внутрь, и наружу относительно внешнего края фигуры.

Чтобы увидеть как это работает, возьмем пару простых фигур:

<p data-height="400" data-theme-id="4974" data-slug-hash="rKpFk" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/rKpFk/'>rKpFk</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Круг с диаметром 60px, квадрат — 60х60px.

С помощью CSS добавим фигурам рамку:

```css
stroke: yellowgreen;
stroke-width: 30;
stroke-opacity: .5;
```

Рамка зеленого цвета, толщиной 30 пикселей. Чтобы видеть как она накладывается на фигуру, рамке задана полупрозрачность (<code>stroke-opacity: .5</code>).

Результат:

<p data-height="400" data-theme-id="4974" data-slug-hash="omKIc" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/omKIc/'>omKIc</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Очевидно, что рамка отрисовывается от внешнего края фигуры в обоих направлениях: и внутрь, и наружу.
<!-- Ширина фигуры с рамкой теперь равна 90px: 60px изначальной ширины + толщина рамки разделенная на 2 (потому что половина рамки рисуется внутрь) * 2 (рамка добавляется с двух сторон). То есть 60 + 30 / 2 * 2. -->

Обычная рамка ведет себя довольно понятно и предсказуемо, но самое интересное начинается, если задать рамку, превышающую ширину фигуры больше чем в два раза. Чем больше разница — тем интересней результат.
Чтобы было хорошо видно, я задала рамку равную трехкратному значению ширины (60 * 3 = 180):

<p data-height="400" data-theme-id="4974" data-slug-hash="AkaKc" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/AkaKc/'>AkaKc</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

У квадрата с рамкой всё в порядке, а вот с кружком происходит нечто странное: если толщина обводки больше чем в два-три раза превышает ширину фигуры, между кружком и рамкой образуются белые поля, а толщина рамки уменьшается.

Чем больше разница между значениями, тем больше белые поля и тем тоньше рамка (радиус 10, толщина обводки — 200):

<p data-height="400" data-theme-id="4974" data-slug-hash="FLrqa" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/FLrqa/'>SVG: r=10 + stroke-width=150</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Совсем не то, что хотелось бы получить.

Ещё более интересный результат получается, если добавить свойство <code>stroke-dasharray</code>.

Код рамки:

```css
stroke-width: 180;
stroke: yellowgreen;
stroke-opacity: .5;
stroke-dasharray: 5;
```

Результат:

<p data-height="400" data-theme-id="4974" data-slug-hash="vDpqg" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/vDpqg/'>vDpqg</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Выглядит так, как будто рамка доходит до середины фигуры и продолжает отрисовываться оттуда.

Всё это как бы намекает нам, что толщина рамки не должна быть больше двухкратного значения ширины или диаметра фигуры, хотя можно поступить и наоборот: задавать очень большие значения и получать интересные варианты лучей.

Думаю, редко кому придет в голову задавать обводке запредельные значения ширины, но я обнаружила эту странность в поведении, когда хотела сделать именно это: взять маленький кружок и задать ему большую рамку, чтобы увеличить таким образом его размер.

Зачем это может быть нужно?

Предположим, есть круглая маска и картинка под ней:

```markup
<svg>
  <mask id="mask">
    <circle r="100" cx="100" cy="100"
      class="c-mask-circle"/>
  </mask>

  <g mask="url(#mask)">
    <image
      xlink:href="http://colourlovers.com.s3.amazonaws.com/images/patterns/2693/2693008.png"
      width="100%" height="100%"/>
  </g>
</svg>
```

<p data-height="400" data-theme-id="4974" data-slug-hash="mpvhb" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/mpvhb/'>mpvhb</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Я хочу анимировать маску, чтобы она пропорционально растягивалась и сужалась относительно центра картинки. Первым делом в голову, конечно, приходит <code>transform</code>. Код анимации:

```css
@keyframes scale {
  50% {
    transform: scale(10);
  }
}
```

Подключаем анимацию:

```css
.c-mask-circle {
  fill: white;
  animation: scale 5s infinite;
}
```

<p data-height="400" data-theme-id="4974" data-slug-hash="dKrft" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/dKrft/'>dKrft</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Так как центр трансформаций в SVG находится в левом верхнем углу области отрисовки, фигура движется совсем не так, как хотелось бы. Задаем центр трансформаций, который нужен нам:

```css
transform-origin: 100px 100px;
```

И всё вместе:

```css
.c-mask-circle {
  fill: white;
  transform-origin: 100px 100px;
  animation: scale 5s infinite;
}

@keyframes scale {
  50% {
    transform: scale(10);
  }
}
```

Результат:

<p data-height="400" data-theme-id="4974" data-slug-hash="fKqAI" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/fKqAI/'>fKqAI</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В Chrome анимация будет работать как задумано: маска увеличивается от центра и затем уменьшается в обратном направлении. В Firefox она не будет работать вообще: Firefox не анимирует трансформации внутри масок.

Способ с трансформацией не работает. Какие ещё варианты есть? Вот как раз в этом случае можно попробовать анимировать толщину обводки.

Почему это сработает?

Небольшое лирическое отступление: в отличие от <code>clipPath</code>, который обрезает фигуру по векторному контуру, игнорируя заливки и обводки контура, в работе маски принимает участие всё её графическое содержимое.

Для примера возьмем кружок c обводкой и используем его в <code>mask</code> и <code>clipPath</code>:

<p data-height="400" data-theme-id="4974" data-slug-hash="ouLIh" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/ouLIh/'>ouLIh</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Для фигур внутри <code>clipPath</code> можно было бы попробовать анимировать <code>transform</code>, но они тоже не анимируются в Firefox. Таким образом, в нашем распоряжении остаются только маски и манипуляции с обводками. Конец лирического отступления.

Используя обводки, пробую повторить поведение маски, пропорционально увеличивающейся относительно центра. Для этих целей я беру маску с маленьким кружком внутри:

```markup
<mask id="mask">
  <circle r="10" cx="100" cy="100"
    class="c-mask-circle"/>
</mask>
```

Задаю ей белую заливку и добавляю обводку:

```css
.c-mask-circle {
  fill: white;
  stroke: white;
  stroke-width: 1;
}
```

Добавляю анимацию толщины обводки:

```css
@keyframes stroke-width {
  50% {
    stroke-width: 170;
  }
}
```

Весь итоговый код:

```css
.c-mask-circle {
  fill: white;
  stroke: white;
  stroke-width: 1;
  animation: stroke-width 5s infinite;
}

@keyframes stroke-width {
  50% {
    stroke-width: 170;
  }
}
```

Результат:

<p data-height="400" data-theme-id="4974" data-slug-hash="oebyE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/oebyE/'>oebyE</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В отличие от способа с <code>transform</code>, обводка замечательно анимируется в Firefox, и это можно было бы использовать, если бы не ограничение на толщину обводки, описанное выше.

Таким образом, с одной стороны, задавать толстую рамку для маленького элемента кажется странной идеей, с другой — это можно было бы использовать в практических целях, так что жаль, что <code>stroke-width</code> отрисовывается не так как хотелось бы.

Некоторой пикантности добавляет тот факт, что как раз в Firefox анимация обводки в маске дает именно желаемый результат: маска увеличивается от центра к краям без каких-либо зазоров между фигурой и обводкой — фигура получается цельная.

Ещё интереснее ведет себя Safari: в нем фигура маски цельная, а результат применения маски к картинке — с зазорами.

Таким образом, при желании получить анимированую маску, можно сочетать анимацию <code>transform</code> для Хрома (и других webkittens) с анимацией <code>stroke-width</code> для Firefox, например: так:

<p data-height="420" data-theme-id="4974" data-slug-hash="LBIfx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/LBIfx/'>Animated mask for Firefox and webkittens</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Способ странный, но это работает.

Правда, обе анимации не будут работать в IE, потому что он вообще не поддерживает анимации в SVG.

Анимируя <code>stroke-width</code> в маске можно делать разные другие интересные штуки, но это уже тема для отдельного поста.

Версии браузеров на момент написания поста: Chrome 36, Firefox 31, Safari 7, Opera 23, IE 11.

Картинка с пионами <a href="http://www.colourlovers.com/pattern/2693008/Amethyst_peonies">отсюда</a>.
