---
title: CSS-паттерны

tags: [gradients, experiments, patterns, draw-on-css]

image: //img-fotki.yandex.ru/get/9833/5091629.9b/0_7ef0c_63d54a5d_L.png
description: Возможности управления фонами через CSS в cочетании с градиентами дают совершенно невероятные возможности. Градиентами можно нарисовать почти всё что угодно от простых клеточек, полосочек и кружочков до достаточно сложных узоров. Играться можно до бесконечности.
---

Возможности управления фонами через CSS в cочетании с градиентами дают совершенно невероятные возможности. Градиентами можно нарисовать почти всё что угодно от простых клеточек, полосочек и кружочков до достаточно сложных узоров. Играться можно до бесконечности.

<!--more-->

Общий принцип такой: создается градиент, который нужно повторить. По умолчанию он займет всю доступную площадь, но если задать размер фону — получится картинка желаемого размера, которая замостит собой весь фон элемента.
Если значения градиента задавать в процентах или <code>em</code>, потом можно будет легко управлять размером узора редактируя размер шрифта и/или <code>background-size</code>.

Например, можно сделать простые полоски:

```css
background: linear-gradient(
  white 50%,
  transparent 50%
);
background-size: 2em 2em;
background-color: black;
```

<p data-height="300" data-theme-id="0" data-slug-hash="lcbAa" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/lcbAa'>lcbAa</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Белые полоски чередуются с прозрачностью, и могут быть положены на любой фон. Управляя границей между цветом и прозрачностью можно регулировать ширину полос.

Если вместо белого цвета задать полупрозрачный белый или черный, можно получить универсальный паттерн, который будет хорошо выглядеть на любом фоне:

<p data-height="300" data-theme-id="0" data-slug-hash="IeDAp" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/IeDAp'>IeDAp</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Используя два градиента с цветными полупрозрачными линиями можно сделать клетчатую скатерть:

<p data-height="320" data-theme-id="0" data-slug-hash="qclad" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/qclad'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

С помощью разноцветных полосок можно делать небольшие декоративные элементы:

<p data-height="300" data-theme-id="0" data-slug-hash="zfcjm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zfcjm'>zfcjm</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Если нужен полосатый фон посложнее, имеет смысл обратить внимание на принцип цикады:

- <a href="http://www.sitepoint.com/the-cicada-principle-and-why-it-matters-to-web-designers/">The Cicada Principle and Why It Matters to Web Designers</a>
- <a href="http://habrahabr.ru/post/117160/">Принцип цикады и почему он важен для веб-дизайнеров</a> (перевод предыдущей статьи)
- <a href="http://habrahabr.ru/post/148639/">Принцип цикады на чистом CSS</a>

Принцип заключается в использовании нескольких фонов разного размера. Это означает, что стыковаться они тоже будут в разных местах, таким образом на фоне невозможно будет найти повторяющиеся участки или места стыковки. По-моему, гениально придумано.

Фоны накладываются друг на друга от самого крупного (сверху) до самого мелкого (в самой глубине). В итоге стыки самого мелкого и повторяющегося будут перекрыты вышележащими слоями.

Я сделала 4 полосатых фона разного цвета и задала им разный размер:

```css
background-size: 7em 7em, 5em 5em, 3em 3em, 1em 1em;
```

Это простые числа, то есть те, которые не делятся ни на что кроме себя.

Вот как выглядит результат (<a href="http://cdpn.io/khprw">ссылка на полный размер</a>):

<p data-height="350" data-theme-id="0" data-slug-hash="khprw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/khprw'>khprw</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Похоже на волшебство : )

Также из полосатых градиентов легко получить, например, тетрадный лист в линейку:

<p data-height="350" data-theme-id="0" data-slug-hash="jBobD" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/jBobD'>jBobD</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Или в клетку:

<p data-height="350" data-theme-id="0" data-slug-hash="zkImJ" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zkImJ'>zkImJ</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

С простыми линиями всё довольно понятно, но что если нужен паттерн из косых линий?

<code>repeating-linear-gradient</code> должен бы помочь, но на практике градиент ведет себя <a href="http://cdpn.io/IBCJD">как попало</a> (порастягивайте окно браузера).

<b>Upd. от 3.07.20:</b> в данный момент повторяющиеся градиенты корректно отрисоваются большинством браузеров.

Попробуем сделать простыми полосками, повернутыми на 45&deg;.

Примерный код:

```css
background: linear-gradient(-45deg,
  $transparent 50%,
  darkkhaki 50%, darkkhaki 60%,
  $transparent 60%
);
```

Результат:

<p data-height="320" data-theme-id="0" data-slug-hash="uBdhC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/uBdhC'>uBdhC</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В примере хорошо видно, что паттерн состоит из повторяющихся квадратиков, градиент идет из нижнего левого угла в верхний правый, но в противоположных углах ничего нет, и линия получается прерывистой.

Чтобы закрыть пробелы, добавим ещё один градиент:


```css
background: linear-gradient(-45deg,
      $transparent 50%,
      darkkhaki 50%, darkkhaki 60%,
      $transparent 60%
      ),
    linear-gradient(-45deg,
      crimson 10%,
      $transparent 10%
      );
```

Я сделала уголок ярким, чтобы было видно куда он попал:

<p data-height="320" data-theme-id="0" data-slug-hash="jmeEd" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/jmeEd'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Красим уголок в нужный цвет и получаем аккуратные косые линии:

<p data-height="320" data-theme-id="0" data-slug-hash="ExBcC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ExBcC'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Правда, пришлось немного подрегулировать точки остановки цветов в первом градиенте (<code>50%</code> &rarr; <code>49.9%</code>), но зато теперь стыков вообще не видно.

Если вместо угла указать направление ключевыми словами, например <code>to left top</code>, это позволит изменять угол градиента через изменение его размера, потому что в этом случае градиент будет всегда направлен из одного угла в другой независимо от <code>background-size</code>.

Примерный код:


```css
background: linear-gradient(to left top,
      transparent 48.9%,
      skyblue 51%, skyblue 78%,
      transparent 80%
      ),
    linear-gradient(to left top,
      skyblue 28%,
      transparent 30%
      );
  background-size: 2em 6em;
```

В последней строчке задан градиент прямоугольной формы. Благодаря направлению и значениям остановок в процентах можно сколько угодно менять его размеры — изменится угол наклона линий, но сам паттерн от этого не пострадает:

<p data-height="350" data-theme-id="0" data-slug-hash="qlCjz" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/qlCjz'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В некоторых случаях края линий становятся зубчатыми, причем их отрисовка зависит от браузера: Chrome справляется лучше, в Firefox видны ступеньки.
Чтобы сделать край плавным, можно сделать стык между цветами не четкий, а размытый, шириной 1-2%.
Также следует помнить о проблеме с прозрачными цветами в Firefox — это решается использованием нужного оттенка с полной прозрачностью.

Экспериментируя с линиями можно получить другие интересные узоры:

<p data-height="320" data-theme-id="0" data-slug-hash="brosh" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/brosh'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="fFJpl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/fFJpl'>Diagonal stripes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="rqcHC" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rqcHC'>Diamonds</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="ajJes" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ajJes'>Tablecloth</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="EHbBw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/EHbBw'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="saJtl" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/saJtl'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="Etomx" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Etomx'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Впрочем, я увлеклась. С радиальными градиентами тоже можно делать интересное. Вот, например, обычный горох:

<p data-height="320" data-theme-id="0" data-slug-hash="eolqw" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/eolqw'>Corners</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Чтобы граница градиента была ровной, без зубчиков, границу прозрачности нужно делать чуть дальше, чем точка остановки цвета.
Вебкиты, как обычно, лучше справляются со сглаживанием.

Вот ещё пример:

<p data-height="320" data-theme-id="0" data-slug-hash="muxnF" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/muxnF'>Circles and dottes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Принцип создания узоров тот же, что и для линейных градиентов. Причем сочетая линейные и радиальные градиенты можно получить из простых геометрических форм более сложные:

<p data-height="320" data-theme-id="0" data-slug-hash="jufvg" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/jufvg'>Hearts</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="oeksa" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/oeksa'>Drops</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Можно делать довольно сложные узоры, для этого лучше всего использовать возможности препроцессоров:

<p data-height="320" data-theme-id="0" data-slug-hash="DiIBm" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/DiIBm'>Waves</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="320" data-theme-id="0" data-slug-hash="ijxKy" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/ijxKy'>Circles</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Минусы таких паттернов обычно в длине и сложности кода, а также в недостаточной поддержке старыми браузерами. Для них может потребоваться картинка.
Плюсы — градиенты ничего не весят, их не надо запрашивать с сервера, и можно легко менять цвета и размер узора.

Больше паттернов можно увидеть во вдохновляющей галерее от Lea Verou: <a href="http://lea.verou.me/css3patterns/">lea.verou.me/css3patterns/</a>.

Урок по паттернам от Lea Verou: <a href="http://24ways.org/2011/css3-patterns-explained/">CSS3 Patterns, Explained</a>
