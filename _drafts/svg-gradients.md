---
layout: default
title: SVG-градиенты
type: post
image:
desc:

---

В SVG нельзя использовать привычные CSS фоны, для заливок существуют отдельные конструкции. Для градиентов это <code>linearGradient</code> и <code>radialGradient</code> — линейный и радиальный градиенты соответственно.<!--more-->

Привычные CSS-градиенты объявляются прямо в CSS-коде, и код самого градиента потом нельзя переиспользовать. SVG-градиенты устроены иначе: перед использованием градиент должен быть описан с помощью соответствующего тега, и после этого его можно переиспользовать сколько угодно раз. И даже больше: градиенты могут наследовать свойства друг друга.

Градиент, так же как и заливка цветом, задаётся с помощью <code>fill</code> — атрибутом элемента или через CSS.

Код самого простого градиента выглядит вот так:

<pre><code class="language-markup">&lt;linearGradient id="grad--linear-1">
    &lt;stop offset="0%" stop-color="gold" />
    &lt;stop offset="100%" stop-color="teal" />
&lt;/linearGradient></code></pre>

А вот так градиент выглядит в действии:

<svg style="border: 1px solid #DDD">
  <linearGradient id="grad--linear-1">
    <stop offset="0%" stop-color="gold" />
    <stop offset="100%" stop-color="teal" />
  </linearGradient>

  <rect fill="url(#grad--linear-1)"
        width="100%" height="100%"/>
</svg>

Обязательный атрибут любого градиента — <code>id</code>, чтобы градиент можно было применить к элементу.

Для управлениям цветами градиента служит элемент <code>stop</code>. Атрибуты:

<ul>
<li><code>offset</code> — положение цвета</li>
<li><code>stop-color</code> — цвет</li>
<li><code>stop-opacity</code> — прозрачность цвета</li>
</ul>

Цвет и положение цвета указывать обязательно.

Интересно, что в отличие от CSS-градиентов, цвета SVG-градиентов можно анимировать (в данном случае, с помощью CSS):

<p data-height="350" data-theme-id="4974" data-slug-hash="bpXVpz" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/bpXVpz/">Animated SVG-gradient</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Линейный и радиальный градиенты имеют несколько общих свойств, но различаются способами, которыми задаются размер и направление градиента. Рассмотрим поподробнее.

<h3>Линейный градиент</h3>

Задаётся с помощью тэга <code>linearGradient</code>.

Координаты вектора отрисовки градиента задаются с помощью атрибутов <code>x1</code>, <code>y1</code>, <code>x2</code> и <code>y2</code>.

<code>x1</code> и <code>y1</code> задают координаты начала линии, <code>x2</code> и <code>y2</code> — координаты конца, похоже на рисование линии с помощью тега <code>line</code>.

<p data-height="500" data-theme-id="4974" data-slug-hash="NAamgv" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/NAamgv/">Gradient Coords: x2 & y2</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Если координаты не заданы, рисуется горизонтальный градиент слева направо.

<h3>Радиальный градиент</h3>

Задаётся с помощью тега <code>radialGradient</code>.

Параметры градиента задаются с помощью тех же атрибутов, что определяют свойства круга (элемента <code>circle</code>): центр фигуры задаётся атрибутами <code>cx</code> и <code>cy</code>, а радиус — атрибутом <code>r</code>:

<p data-height="470" data-theme-id="4974" data-slug-hash="KryqQz" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/KryqQz/">Gradient Coords: r</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Если какой-то из этих атрибутов не задан, ему присвоится значение по умолчанию, равное <code>50%</code>.

Помимо этого, у радиального градиента есть пара специфических свойств: <code>fx</code> и <code>fy</code>. Они позволяют сдвинуть только центр градиента, не затрагивая расположение конечных цветов:

<p data-height="470" data-theme-id="4974" data-slug-hash="kXxwqo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/kXxwqo/">Gradient Coords: fx & fy</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Если эти атрибуты не заданы, их значения по умолчанию будут равны <code>cx</code> и <code>cy</code> соответственно.

<br>
<h3>Общие свойства градиентов</h3>

<h4>gradientUnits</h4>

Это очень важное свойство задаёт систему координат для атрибутов, отвечающих за направление градиента (<code>x1</code>, <code>y1</code>, <code>x2</code> и <code>y2</code> для линейных градиентов и <code>cx</code>, <code>cy</code>, <code>r</code>, <code>fx</code> и <code>fy</code> для радиальных).

Возможные значения:

<code>objectBoundingBox</code> — координаты рассчитываются относительно объекта, к которому применяется градиент. Значение по умолчанию.
<code>userSpaceOnUse</code> — координаты рассчитываются относительно системы координат всего SVG-элемента.

<p data-height="470" data-theme-id="4974" data-slug-hash="BzBzYG" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/BzBzYG/">gradientUnits</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Попереключайте значения в демо и посмотрите как меняется отрисовка градиента: с <code>objectBoundingBox</code> он будет точно вписан в фигуру, а при <code>userSpaceOnUse</code> он будет растянут на весь SVG-элемент, и в фигуре будет видна только его часть.

<h4>gradientTransform</h4>

Атрибут позволяет задать трансформациии градиента. Трансформации <a href="/svg-shapes/">те же</a>, что и для обычных фигур, например, градиент можно повернуть или растянуть.

<p data-height="470" data-theme-id="4974" data-slug-hash="bZAvxg" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/bZAvxg/">gradientTransform</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h4>spreadMethod</h4>

Этот атритбут управляет повторением градиента, если градиент меньше, чем область отрисовки.

Возможные значения:

<code>pad</code> — свободное пространство заполняется крайними цветами. Значение по умолчанию.
<code>reflect</code> — градиент отражается.
<code>repeat</code> — градиент повторяется.

<p data-height="570" data-theme-id="4974" data-slug-hash="YWANyJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/YWANyJ/">SpreadMethods for SVG Gradients</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<code>spreadMethod</code> не работает в Safari. Если надо чтобы везде работало, линейные повторяющиеся и отраженные градиенты можно имитировать с помощью паттернов, а радиальные всё-таки придётся прописывать руками.

<h4>xlink:href</h4>

Этот атрибут позволяет градиентам заимствовать друг у друга цвета и свойства. Если в градиенте, содержащем <code>xlink:href</code>, не заданы цвета, они унаследуются из градиента по ссылке. Также из заданного градиента унаследуются все свойства, которые не переопределены в текущем градиенте. При этом радиальные градиенты могут наследовать цвета и свойства линейного, и наоборот.

Вот пример использования:

<pre><code class="language-markup">&lt;!-- Исходный линейный градиент -->
&lt;linearGradient id="linear-grad">
    &lt;stop offset="0%" stop-color="crimson"
          class="stop-1"/>
    &lt;stop offset="49%" stop-color="gold"
          class="stop-2"/>
    &lt;stop offset="50%" stop-color="lemonchiffon"
          class="stop-2"/>
    &lt;stop offset="51%" stop-color="gold"
          class="stop-2"/>
    &lt;stop offset="100%" stop-color="teal"
          class="stop-3"/>
&lt;/linearGradient>

&lt;!-- Радиальный градиент, наследующий цвета и свойства линейного -->
&lt;radialGradient id="radial-grad"
    xlink:href="#linear-grad">
&lt;/radialGradient></code></pre>

Код в действии, градиент справа унаследовал цвета градиента слева:

<p data-height="470" data-theme-id="4974" data-slug-hash="jAaazW" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/jAaazW/">Gradient properties inheritance</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

В этом демо к градиенту слева применяется трансформация, и она также наследуется градиентом справа.

Кстати, о трансформациях: для градиентов, как и для всех прочих элементов, по умолчанию трансформации производятся относительно верхнего левого угла документа. Если требуется переопределить центр трансформации, нужно задать <code>transform-origin</code>.

Явно в атрибуте его можно задать только для <code>rotate</code> (например, <code>rotate(180, 100, 100)</code>), для других трансформаций <code>transform-origin</code> будет работать только если он вместе с трансформацией задан в CSS. Но <code>gradientTransform</code> нельзя задать через CSS, следовательно <code>transform-origin</code> так тоже задать не получится. В этом случае можно использовать центрирование через <code>translate</code> (за подсказку спасибо <a href="https://twitter.com/AmeliasBrain/status/753284973210271744">@AmeliasBrain</a>):

<pre><code class="language-markup">translate(x,y) scale(s) translate(-x,-y).</code></pre>

В случае с радиальным градиентом вместо <code>scale</code> будет удобнее управлять радиусом градиента.

<p data-height="300" data-theme-id="4974" data-slug-hash="VjZGGg" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/VjZGGg/">Animated pattern with SVG gradient</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

SVG-градиенты сами по себе дают интересные возможности оформления, но ещё интереснее то, как они работают в сочетании с масками. Например, используя маски и градиенты можно сделать вот такие мыльные пузыри:

<p data-height="500" data-theme-id="4974" data-slug-hash="EyZgLo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/EyZgLo/">SVG Bubbles</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<a href="http://codepen.io/yoksel/full/BzkyBJ">Подробная схема отдельного пузыря</a>.

