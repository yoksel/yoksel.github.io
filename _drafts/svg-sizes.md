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
Управление размерами в SVG - тема сложная и важная, и нужно хорошо понимать как всё работает.

Правильно заданные размеры становятся особенно актуальны, когда вы начинаете использовать маски, градиенты или паттерны, потому что их размеры зависят от системы координат документа.

Ниже вы найдете вольный пересказ <a href="http://www.w3.org/TR/SVG/coords.html">спецификации</a>. Не уверена в точности своего перевода, так что буду признательна за правки и дополнения.

<!--more-->

В SVG-документе есть две системы координат:

1. Система координат области отрисовки - <b>viewport space</b>.
2.  Система координат SVG-документа - <b>user space</b>.

По умолчанию система координат SVG-элемента соответствует системе координат области отрисовки (viewport), а единицы SVG-элемента - пикселям области отрисовки.

Отсчет системы координат начинается от левого верхнего угла.

<h4>Единицы измерения</h4>

В качестве единиц измерения могут использоваться em, ex, px, pt, pc, cm, mm, in, проценты, а также единицы системы координат.

Например, можно





Когда мы говорим о размерах, первым делом в голову приходят ширина и высота, но у SVG-элемента есть ещё два параметра, определяющие размеры: <code>viewBox</code> и <code>preserveAspectRatio</code>.

SVG без размеров ведёт себя интересно. Я сделала такой пример, чтобы было сравнить поведение SVG в разных браузерах:

<p data-height="350" data-theme-id="4974" data-slug-hash="wsoEl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/wsoEl/'>wsoEl</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Кружочки - простые фигуры, фиолетовая рамка показывает границы области отрисовки SVG, зелёная - границы изображения (<span class="svg-viewport">viewport</span>). Сейчас зелёная и фиолетовая граница совпадают, но так бывает не всегда.

Можете открыть <a href="http://codepen.io/yoksel/pen/wsoEl">пример</a> в разных браузерах и сравнить результат.

В Хроме, Сафари и Опере 15+ SVG растянется на всю видимую часть окна.
В Firefox изображение получит размеры 310x160.
В IE9 и Опере 12 изображение будет высотой 150px и шириной 100% относительно ширины окна.

Очевидно, что SVG нужно указать размеры, чтобы все браузеры четко понимали как нужно отрисовывать изображение.

Зададим ему ширину и высоту:

<p data-height="350" data-theme-id="4974" data-slug-hash="xkpKB" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xkpKB/'>xkpKB</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Теперь SVG во всех браузерах получило фиксированные размеры. Точнее, размеры получила область отрисовки (<span class="svg-viewport">viewport</span>), никак не затрагивая содержимое. Ширина и высота отвечают только за внешние размеры изображения.

Как сделать, чтобы содержимое тянулось и заполняло собой отведенную область? Для этого нужно указать размеры интересующей нас области, как бы сделать Crop.

Внутренними размерами управляет свойство <code>viewBox</code>, оно определяет какая часть изображения должна быть показана. Размеры отображаемой области задаются с помощью 4-х значений:

<pre><code class="language-markup">viewBox="0 0 210 210"</code></pre>

Первые два - координаты X и Y верхнего левого угла отображаемой области, последние - ширина и высота.

<code>viewBox</code> определяет какая именно часть SVG-изображения заполнит собой область отрисовки.

У предыдущего примера уберем размеры и зададим <code>viewBox</code>:

<p data-height="350" data-theme-id="4974" data-slug-hash="EDnhr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/EDnhr/'>EDnhr</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Здесь мы видим, что <span class="svg-viewport">viewport</span> остался без изменений, а вот отображаемое содержимое теперь следует размерам, заданным во <code>viewBox</code>.

SVG без размеров, но с <code>viewBox</code> стремится заполнить собой всё доступное пространство, сохранив пропорции. Это поведение одинаково во всех браузерах.

И если теперь задавать размеры внешнему контейнеру либо самому SVG, мы можем сколько угодно менять размеры изображения, получая бесконечное количество вариаций нужного размера. SVG сам позаботится о сохранении пропорций своего содержимого.

В этом примере слева SVG с заданными размерами, а справа - DIV, которому заданы те же размеры, внутри которого SVG без размеров:

<p data-height="280" data-theme-id="4974" data-slug-hash="nuGhv" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/nuGhv/'>nuGhv</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Как видите, задавать размеры SVG или его внешнему контейнеру - никакой разницы.

Интересно, что картинка с <code>viewBox</code> подгонится под размеры родительского контейнера даже если она задана как фон:

<p data-height="350" data-theme-id="4974" data-slug-hash="dcqmr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/dcqmr/'>dcqmr</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Это очень удобно для одиночных картинок (если SVG в data URI, например).

А теперь представим ситуацию, что мы хотим сделать иконки не спрайтом, а собираемся вставлять SVG прямо в код страницы.
Такой способ имеет массу преимуществ: иконки становятся доступны для стилей и скриптов страницы, они могут иметь заголовок и описание, а также могут использовать текущий цвет текста (с помощью свойства <code>currentColor</code>).

Логичнее всего завернуть иконки в символы (<code>symbol</code>), чтобы затем вызвать их в нужном месте с помощью <code>use</code>.
Ипользование <code>symbol</code> позволяет четко обозначить переиспользуемый компонент, а вставка через <code>use</code> позволяет сделать сколько угодно копий одного символа, без необходимости копировать каждый раз его код.

Для начала сделаем символ:

<pre><code class="language-markup">&lt;symbol id="s-circle">
    &lt;circle r="50" cx="50" cy="50">&lt;/circle>
&lt;/symbol>
</code></pre>

Библиотеку символов удобно размещать в SVG-элементе, расположенном в начале страницы. Символы из этой библиотеки будут доступны для использования внутри всего HTML-документа (а не только внутри SVG, где они объявлены).

Вставляем символ в нужное место страницы:
<pre><code class="language-markup">&lt;svg viewBox="0 0 100 100">
    &lt;use xlink:href="#s-circle" class="s-circle">&lt;/use>
&lt;/svg>
</code></pre>

Таким образом мы создаем место, куда скопируется заданный символ. И теперь если надо будет изменить содержимое символа - все его копии обновятся автоматически.

Но что если символ станет, например, не квадратным, а прямоугольным, у него изменится соотношение сторон и, соответственно, <code>viewBox</code>?

Нам придется найти все копии элемента и отредактировать <code>viewBox</code> столько раз, сколько скопирован символ.

-----

SYMBOL

единицы измерения в SVG



