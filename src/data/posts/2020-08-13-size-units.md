---
title: Единицы размеров в CSS

tags: [fonts, units, text]

desc: 'Абсолютные и относительные единицы измерения в CSS: от пикселей до единиц вьюпорта'

links:
- url: https://www.w3.org/TR/css-values-4/#lengths
  name: 'Distance Units: the <length> type'
- url: https://developer.mozilla.org/en-US/docs/Web/CSS/length
  name: 'CSS <length>'
- url: https://en.wikipedia.org/wiki/Point_(typography)
  name: 'Point (typography)'
- url: https://lists.w3.org/Archives/Public/www-style/1998Dec/0030.html
  name: 'platform-specific font size issues'
- url: https://lists.w3.org/Archives/Public/www-style/2010Jan/0058.html
  name: Making pt a non-physical unit
- url: https://lists.w3.org/Archives/Public/www-style/2010Jun/0461.html
  name: '[CSS21] Issue 149 - px vs. pt'
- url: https://www.w3.org/Style/Examples/007/units.ru.html
  name: 'em, px, pt, cm, in…'
- url: https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/
  name: 'What is the CSS ‘ch’ Unit?'
- url: https://css-tricks.com/the-lengths-of-css/
  name: The Lengths of CSS
- url: https://hacks.mozilla.org/2013/09/css-length-explained/
  name: CSS Length Explained
- url: https://www.webdesignerdepot.com/2010/02/the-myth-of-dpi/
  name: The Myth of DPI
- url: https://webkit.org/blog/57/css-units/
  name: CSS Units
- url: https://snook.ca/archives/html_and_css/font-size-with-rem
  name: Font sizing with rem
- url: https://css-live.ru/articles/novye-i-starye-edinicy-izmereniya-kratkij-obzor.html
  name: 'Новые и старые единицы измерения (краткий обзор)'
- url: https://www.sitepoint.com/css-viewport-units-quick-start/
  name: 'CSS Viewport Units: A Quick Start'
- url: https://css-tricks.com/snippets/css/fluid-typography/
  name: 'Fluid Typography'
- url: https://css-tricks.com/fun-viewport-units/
  name: 'Fun with Viewport Units'
- url: https://css-tricks.com/simple-little-use-case-vmin/
  name: 'Simple Little Use Case for `vmin`'
---

В CSS существует множество единиц измерения. Обычно мы используем единицы длины, но также есть единицы для углов — например, `deg` и `turn`, единицы времени — `s` и `ms`, единицы плотности экрана — например, `dpi` и `dppx` и другие.

Здесь будут рассматриваться только единицы длины, которыми мы пользуемся чаще всего. Подробное описание можно найти в спецификации W3C [Distance Units: the &lt;length> type](https://www.w3.org/TR/css-values-4/#lengths).

Общим для всех единиц длины будет то, что для значения `0`, единицы можно не указывать: `height: 0px` и `height: 0` будут работать одинаково, так что единицы измерения можно отбросить. Это позволяет немного быстрее писать код и считывать значения свойств.

<h2 id="absolute-units">Абсолютные единицы измерения</h2>

[Спецификация](https://www.w3.org/TR/css-values-4/#absolute-lengths)

<table>
<tr>
  <td><code>cm</code></td>
  <td>сантиметр</td>
  <td>1cm = 96px/2.54 ≈ 37,795px</td>
</tr>
<tr>
  <td><code>mm</code></td>
  <td>миллиметр</td>
  <td>1mm = 1/10 от 1cm</td>
</tr>
<tr>
  <td><code>q<code/></td>
  <td>четверь миллиметра</td>
  <td>1q = 1/40 от 1cm = 0.25mm ≈ 0,945px</td>
</tr>
<tr>
  <td><code>in</code></td>
  <td>дюйм</td>
  <td>1in = 2.54cm = 96px</td>
</tr>
<tr>
  <td><code>pc</code></td>
  <td>пика</td>
  <td>1pc = 1/6 от 1in</td>
</tr>
<tr>
  <td><code>pt</code></td>
  <td>пункт, точка</td>
  <td>1pt = 1/72 от 1in</td>
</tr>
<tr>
  <td><code>px</code></td>
  <td>пиксель</td>
  <td>1px = 1/96 от 1in, 0.75 от pt</td>
</tr>
</table>

Абсолютные единицы относительны друг для друга (соотношения в последней колонке), но все они привязаны к конкретным величинам.

Для печатных устройств сантиметры, миллиметры и дюймы должны быть равны своим обычным значениям, но для экранов это будет не так:

<p class="codepen" data-height="400" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="VwaLPRL" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Some absolute CSS units">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/VwaLPRL">
  Some absolute CSS units</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Я попыталась разными способами получить полоску длиной 10 сантиметров. Все полоски равны друг другу, но ни одна не равна 10 сантиметрам, если приложить линейку к экрану. Проверила на двух мониторах: на одном они короче, на другом — длиннее.

На веб-страницах физические единицы измерения вроде `cm`, `mm` и `in` не будут работать как ожидается, потому что главная экранная единица измерения — пиксель.

Что такое пиксель и какого он размера? Чем отличаются пиксели `px` от точек `pt`? Почему у них такие странные размеры в 1/72 дюйма и 1/96 дюйма соответственно? Как были выбраны эти значения и почему этих единиц измерения две? Попытка разобраться с мелкой точкой на экране вызывает множество вопросов и требует погружения в историю. Я попыталась разобраться как всё было, и вот что узнала.

<img
  src="/assets/img/articles/size-units/mac.jpg"
  alt="Один из первых макинтошей"
  loading="lazy"
  width="250"
  class="float float--right"
/>

Когда появились первые программы для предпечатной подготовки, нужно было как-то соотнести размер элементов на экране с тем, чтоб будет напечатано на бумаге. Тогда оказалось, что один дюйм (inch) на экране соответствует 72 точкам. Это соотношение зафиксировано в `pt`, `pt` — это 1/72 дюйма. Изначально это была типографская единица измерения, и её значения [менялись со временем](https://en.wikipedia.org/wiki/Point_(typography)), но с появлением компьютерных программ для полиграфии значение `pt` пришлось стандартизировать.

С развитием технологий стало возможно делать экраны с большим разрешением, и Microsoft предложила отображать 96 точек на дюйм, что было зафиксировано в `px`, то есть пиксель — это 1/96 дюйма. Это позволило увеличить чёткость мелкого текста, потому что для отображения символа теперь можно было использовать больше точек.

Размер `px` составляет 0.75 от `pt`. По сути, `pt` — это более крупный пиксель.

Позже появились ретиновые дисплеи с повышенной плотностью пикселей, и тогда CSS-пиксели, которые мы используем, перестали соответствовать физическим пикселям экрана, теперь это виртуальная единица, размер которой определяется устройством вывода. Для нас это не играет особой роли кроме как при работе с изображениями, когда для ретины нужно подготовить дополнительный набор картинок. Все размеры, заданные в пикселях, будут корректно отображены на экране вне зависимости от того, сколько физических пикселей для этого потребуется.

На сегодняшний момент соотношение физических единиц к точкам экрана утратило прежний смысл, но осталось зафиксированым в спецификации для сохранения обратной совместимости и упрощения конвертации одних единиц в другие.

При этом важно помнить, что раз CSS-пиксели уже не соответствуют физическим точкам экрана устройства, сантиметры и дюймы при выводе на экран тоже не будут не соответствовать своим реальным размерам, об этом есть и в спецификации:

> If the anchor unit is the pixel unit, the physical units might not match their physical measurements. Alternatively if the anchor unit is a physical unit, the pixel unit might not map to a whole number of device pixels.

То есть, если использовать дюймы для вёрстки веб-страниц, один дюйм всегда будет равен 96 пикселям, но никогда — реальной физической единице:

<p class="codepen" data-height="300" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="OJNVxrK" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="OJNVxrK">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/OJNVxrK">
  OJNVxrK</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Таким образом, главное в абсолютных единицах — контекст использования:

* для вывода **на печать** экранные пиксели должны быть приведены к физическими единицами измерения, следовательно, для подготовки документов к печати лучше использовать их;
* для вывода **на экран** дюймы и сантиметры должны быть приведены к пикселям, следовательно, для веб-разработки лучше сразу использовать пиксели.

Пока копалась в истории единиц измерения, выяснилось, что во внутреннем коде Gecko когда-то была [поддержка километров](https://github.com/w3c/csswg-drafts/issues/315#issuecomment-233099861),
[удалили](https://bugzilla.mozilla.org/show_bug.cgi?id=482146) в 2009-м:

<img
  src="/assets/img/articles/size-units/km.png"
  alt="Bugzilla: remove internal code for unsupported non-CSS units (feet, miles, meters, kilometers, didots, ciceros)"
  loading="lazy"
  width="600"
/>

Из физических единиц ещё может представлять интерес `q`: это относительно новая единица, и она поддерживается [не всеми браузерами](https://caniuse.com/#feat=mdn-css_types_length_q). `q` — это 2.5mm. Как и другие физические единицы, больше имеет смысл для печати, но также можно попытаться использовать её для уменьшения размера кода: `q` — это примерно 0,945 `px`, то есть в некоторых случаях вполне можно использовать её вместо пикселей, получается один символ (`q`) вместо двух (`px`).

Пример такого использования я подсмотрела в [этом демо](https://lab.iamvdo.me/the-creation-of-adam/). Открывайте осторожно, может повиснуть браузер. Попытка посмотреть стили в веб-инспекторе вешает его почти гарантированно, поэтому лучше посмотрите исходный код страницы. Скриншот:

<a href="https://lab.iamvdo.me/the-creation-of-adam/"><img
  src="/assets/img/articles/size-units/adam.jpeg"
  alt="The Creation of Adam (#singlediv) | @iamvdo"
  loading="lazy"
  width="700"
/></a>

Чистое безумие, конечно. Картина воспроизведена с помощью `box-shadow`, и мне кажется, тему рисования на CSS на этом можно закрывать.

Вес стилей демо — 4.5Mb, а если бы там вместо `q` были пиксели, стили весили бы на 300Kb больше.

<h2 id="relative-units">Относительные единицы измерения</h2>

[Спецификация](https://www.w3.org/TR/css-values-4/#relative-lengths)

Относительные единицы измерения вычисляются на основе каких-то других величин: размера шрифта или размера экрана, и могут динамически меняться вместе за ними.

<h3>Единицы измерения, привязанные к шрифту</h3>

<table>
<tr>
  <td><code>em</code></td>
  <td>размер шрифта элемента</td>
</tr>
<tr>
  <td><code>ex</code></td>
  <td>высота <code>x</code> в нижнем регистре</td>
</tr>
<tr>
  <td><code>ch</code></td>
  <td>ширина <code>0</code> (ZERO, U+0030)</td>
</tr>
<tr>
  <td><code>rem</code></td>
  <td>размер шрифта корневого элемента</td>
</tr>
</table>

<h4>em</h4>

Для `font-size` это унаследованный размер шрифта, для остальных свойств — текущий размер шрифта, уже вычисленный для `font-size`.

Чтобы увидеть это вживую, возьмем такой код:

```css
BODY {
  /* Базовый размер шрифта */
  font-size: 42px;
}

DIV {
  /* Наследуем шрифт родителя и уменьшаем в два раза */
  font-size: .5em;
}

/* Какой толщины будет border в каждом случае? */
.box-1 {
  border-width: .5em;
}
.box-2 {
  border-width: 1em;
}
```

Получилось вот что:

<p class="codepen" data-height="380" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="wvGKpEy" style="height: 380px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Em for font-size vs em for other props">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/wvGKpEy">
  Em for font-size vs em for other props</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Розовая полоса — градиент высотой `1em`, чтобы было с чем сравнивать.

Оба блока имеют одинаковый размер шрифта, уменьшенный относительно родительского элемента в два раза (`font-size: .5em;`). И как теперь указать толщину рамки равной размеру шрифта?

`border-width: .5em` делает рамку в два раза тоньше, чем нужно. Это происходит потому, что родительский размер шрифта использует только `font-size`, а `border` получает вычисленное  значение из `font-size`.

Таким образом, если где-то не в `font-size` нужно использовать текущий размер шрифта, не нужно копировать значение размера, достаточно указать `1em`. У правого блока рамка правильной толщины.

Ещё одно демо, для понимания как соотносятся `em` и символы шрифта. Цветные полосы имеют высоту `1em`, поэтому видно, что `1em` примерно соответствует высоте символов с учётом заглавных букв и выносных элементов:

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="vYGNJrg" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="vYGNJrg">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/vYGNJrg">
  vYGNJrg</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Размер `em` нигде не зафиксирован, и вычисляется в момент использования на основе размера шрифта родителя. Например, если задать размер шрифта вот таким образом:

```css
DIV {
  font-size: .75em;
}
```

а потом вложить несколько дивов один в другой, размер шрифта каждого следующего дива будет меньше предыдущего:

<p class="codepen" data-height="460" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="ExKVbBO" style="height: 460px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nested em">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/ExKVbBO">
  Nested em</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Потому что `1em` — это текущий унаследованный размер шрифта, а `.75em` — унаследованный шрифт, уменьшенный на четверть. Для каждого нового вложенного дива сначала наследуется уменьшенный шрифт родителя, а потом тоже уменьшается заданным образом.

Об этом нужно помнить, если вы захотите задавать в `em` размеры переиспользуемых компонентов: при вкладывании элементов друг в друга вычисленное значение `em` может оказаться не тем, что хотелось бы получить.

<h4>ex</h4>

`ex` — это высота буквы `x` в нижнем регистре. Если в шрифте нет подходящей метрики, и в нём нет такого символа, браузер попробует вычислить `ex` самостоятельно. Если это по каким-то причинам невозможно, `ex` считается равным `.5em`.

В демо цветные полосы имеют высоту `1ex`, и для выбранных шрифтов `1ex` будет равен высоте маленькой `x`:

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="poyjVgL" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Gradients stripes with 1ex height">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/poyjVgL">
  Gradients stripes with 1ex height</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Посмотрим, как на `ex` влияет шрифт, и как `ex` соотносится с `em`.

В этом демо квадратикам в левой группе заданы размеры в `1em`, в правой — в `2ex`, так можно проверить равен ли `ex` половине `em`. Также каждому квадратику задан свой шрифт:

<p class="codepen" data-height="380" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="wvGKNJY" style="height: 380px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wvGKNJY">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/wvGKNJY">
  wvGKNJY</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

В отличие от `em`, размер `ex` будет меняться вместе со шрифтом, и во всех случаях `2ex` не равно `1em`, то есть на соотношение в `.5` полагаться нельзя.

`ex` точно также как и `em` наследует размер шрифта родителя:

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="WNwQmXw" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nested ex">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/WNwQmXw">
  Nested ex</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h4>ch</h4>

`ch` — ширина символа `0`. Для моноширинных шрифтов это точная ширина любого символа, для остальных — примерная ширина одного узкого символа. Если по каким-то причинам ширину невозможно вычислить, запасным значением будет `.5em`.

Эрик Мейер [предостерегает](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/) от попыток использовать `ch` для задания ширины контейнера в символах, потому что это не работает как ожидается. В демо ниже ширина каждого блока с текстом задана вот таким образом:

```css
DIV {
  width: 10ch;
}
```

Ширина блока будет верной только для моноширинных шрифтов (см. `Courier`), в некоторых шрифтах будет работать и для цифр (`Arial`, `Comic Sans`), в остальных случаях нельзя рассчитывать, что `1ch` будет равен ширине символа:

<p class="codepen" data-height="450" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="RwaWdzw" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Unit ch">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/RwaWdzw">
  Unit ch</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Сопоставим `1em`, `2ex` и `2ch`:

<p class="codepen" data-height="420" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="vYGNMGO" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="1em vs 2ex vs 2ch">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/vYGNMGO">
  1em vs 2ex vs 2ch</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Очевидно, что:

* `1ch` больше `1ex` (ширина `0` больше высоты `x`);
* `1ch` не равен половине `em`;
* значение `ch` может меняться вместе со шрифтом.

<h4>rem</h4>

`rem` — это `root em`, размер шрифта корневого элемента, для веб страницы это элемент `html`. Размер шрифта по умолчанию — `16px`. Это значение не зафиксировано в спецификации, но используется всеми браузерами. Про историю вопроса можно почитать в [рассылке W3C](https://lists.w3.org/Archives/Public/www-style/1998Dec/0030.html).

Если пользователь в настройках браузера задаст другое значение, оно переопределит размер шрифта корневого элемента. То есть если нужно сделать интерфейс, который будет масштабироваться под размер шрифта, выбранный пользователем, в качестве единицы измерения удобно использовать именно `rem`.

Важно понимать, что размер `rem` можно переопределить только для элемента `html`. Например, возьмем такие стили:

```css
BODY {
  font-size: 24px;
}

DIV {
  font-size: 1rem;
}
```

Если `rem` можно было бы переопределять в любом месте, текст бы увеличился, но этого не произошло:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="KKzVKvg" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="KKzVKvg">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/KKzVKvg">
  KKzVKvg</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Высота цветной полосы `24px`, чтобы было с чем сравнивать.

Если переопределить размер шрифта для элемента `html`, всё сработает:

```css
HTML {
  font-size: 24px;
}

DIV {
  font-size: 1rem;
}
```

<p class="codepen" data-height="280" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="Yzqwzeg" style="height: 280px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Yzqwzeg">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/Yzqwzeg">
  Yzqwzeg</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

В отличие от `em`, `rem` всегда содержит размер шрифта только корневого элемента, поэтому вложенность ни на что не влияет:

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="wvGMBMg" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Nested rem">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/wvGMBMg">
  Nested rem</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Это позволяет делать компоненты, размеры которых привязаны к базовому размеру шрифта, но не зависят от вложенности элементов друг в друга.

<h3>Единицы измерения, привязанные к размерам экрана</h3>

<table>
<tr>
  <td><code>vw</code></td>
  <td>1% ширины вьюпорта</td>
</tr>
<tr>
  <td><code>vh</code></td>
  <td>1% высоты вьюпорта</td>
</tr>
<tr>
  <td><code>vmin</code></td>
  <td>1% от меньшего из <code>vw</code> и <code>vh</code></td>
</tr>
<tr>
  <td><code>vmax</code></td>
  <td>1% от большего из <code>vw</code> и <code>vh</code></td>
</tr>
</table>

Эти единицы предназначены для создания элементов, размер которых должен зависеть от размера окна.

`100vh` — это высота вьюпорта, очень удобно для элементов, которые должны растягиваться на всю страницу. Вот пример простой галереи, где каждая картинка будет полностью занимать один экран независимо от размеров окна браузера:

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="KKzVwmQ" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Simple gallery with vh">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/KKzVwmQ">
  Simple gallery with vh</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Размеры картинок задаются вот таким образом:

```css
IMG {
  height: 100vh;
  width: 100%;
  object-fit: cover;
}
```

Ширина вьюпорта — `100vw`. Это значение позволяет растянуть на ширину экрана любой элемент при любой вложенность.

Если задать элементу ширину `100%`, получится ширина родителя, который, скорее всего, занимает только часть экрана, а `100vw` позволяет растянуть именно на ширину окна браузера не обращая внимания на размеры родительских элементов.

Правда, тут есть проблема: `100vw` — это ширина всего окна вместе с полосой прокрутки, а доступная для контента ширина окна полосу прокрутки не включает, из-за чего при попытке задать элементам ширину вьюпорта появится горизонтальный скролл:

<p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="ZEWQQBR" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ZEWQQBR">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/ZEWQQBR">
  ZEWQQBR</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Если нет возможности изменить вёрстку, чтобы избежать использования `100vw`, можно задать `overflow-x: hidden` ближайшему родителю, растянутому на ширину страницы:

<p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="XWdXXow" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="XWdXXow">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/XWdXXow">
  XWdXXow</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_**Примечание:** если вы верстаете на MacOS, и полосы прокрутки исчезают сами по себе, выберите в **System Perefences/General** опцию «Показывать всегда», это позволит верстать страницы сразу с учетом сколлбаров:_

<img
  src="/assets/img/articles/size-units/always-scroll.png"
  alt="Включить отображение полосы прокрутки на MacOS"
  loading="lazy"
  width="550"
/>

Используя `vw` и `vh` можно делать полностью резиновые элементы, которые будут сами подстраиваться под размер окна, например, так:

```css
.text {
  padding: 5vh 5vw;
  background: paleturquoise;
  background-image: repeating-linear-gradient(-45deg,
    rgba(255,255,255, .25), rgba(255,255,255, .25) 2vw,
    transparent 0, transparent 4vw
  );
  font-size: 12vw;
}
```

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="WNwrrVK" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flexible block with viewport units">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/WNwrrVK">
  Flexible block with viewport units</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Лучше всего открыть это [демо](https://codepen.io/yoksel/full/WNwrrVK) в отдельной вкладке и порастягивать окно браузера.

С помощью `vmin` можно сделать элемент, который всегда будет целиком помещаться в экран, сохраняя пропорции:

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="ZEWQKpd" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Always visible element with vmin">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/ZEWQKpd">
  Always visible element with vmin</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Это [демо](https://codepen.io/yoksel/full/ZEWQKpd) тоже лучше смотреть в отдельной вкладке, попробуйте порастягивать окно по вертикали и по горизонтали.

Ещё с использованием единиц вьюпорта, можно сделать [адаптивную шапку](https://css-tricks.com/simple-little-use-case-vmin/) и управлять [размером шрифта](https://css-tricks.com/snippets/css/fluid-typography/) в зависимости от размера экрана.

У единиц, привязанных к размерам вьюпорта, могут быть проблемы с поддержкой в IE включая 11-й, поэтому обязательно проверяйте код в действующем браузере.

В спецификации описано немного больше единиц измерения, например:

* `cap` — высота заглавной буквы
* `lh` — высота строки
* `rlh` — высота строки корневого элемента

Но в данный момент они нигде не поддерживаются, поэтому в статье не рассматриваются.

