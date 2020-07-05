---
title: Css Animation

tags: [animation]

desc: Анимация позволяет оживлять элементы страницы. Можно управлять длительностью анимации, повторением, направлением, типом движения и шагами. Анимировать можно любые элементы, в том числе псевдо-элементы.

links:
- url: /pages/svojstva-animation
  name: Свойства Animation одной таблицей
- url: /3d-and-gradients/
  name: СSS-градиенты и 3D
---

<section>Свойство <code>animation</code> позволяет анимировать элементы страницы.

Можно управлять длительностью анимации, повторением, направлением, типом движения и шагами.
Анимировать можно любые элементы, в том числе псевдо-элементы.<!--more-->

Обязательное условие — наличие конкретных значений. Свойства со значением <code>auto</code> не анимируются.

Спецификация: <a href="http://www.w3.org/TR/css3-animations/">w3.org/TR/css3-animations</a>

<i>Сафари в настоящее время не поддерживает анимацию псевдоэлементов, для просмотра записи воспользуйтесь другими браузерами</i>

Пример Css-анимации:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/css-animation/demo_1.html?output"></iframe>

Пример кода анимации:

```css
@keyframes move {
  40% {
    left: 50%;
    bottom: 75%;
    animation-timing-function: ease-in;
    }
  80% {
    left: 90%;
    bottom: -10em;
    }
}
```

Подключение анимации:

```css
.sun {
  animation: move 15s infinite linear;
}
```

<code>move</code> — имя анимации
<code>15s</code> — длительность
<code>infinite</code> — бесконечное повторение
<code>linear</code> — тип движения

</section><section id="keyframes" data-name="@keyframes"><h2>@keyframes</h2>
Сама анимация задается внутри блока <code>@keyframes</code>.
После <code>@keyframes</code> задается имя анимации, а потом внутри фигурных скобок — её шаги.

Шаги можно задавать через проценты или с помощью ключевых слов <code>from</code> и <code>to</code>.
При этом в шагах можно менять тип анимации (<code>animation-timing-function</code>):

<iframe class="live-snippet" style="height: 240px" src="../assets/demo/css-animation/demo_2.html?output"></iframe>

</section><section id="animation-name" data-name="animation-name"><h2>Animation-name</h2>
Используется для задания имени анимации.

Возможные значения: одно или несколько имен анимации.
Значение по умолчанию: нет.

<code>animation-name: move;</code> — одна анимация.
<code>animation-name: move, sun-color;</code> — две анимации, имена задаются через запятую.

</section><section id="animation-duration" data-name="animation-duration"><h2>Animation-duration</h2>
Длительностью анимации управляет свойство <code>animation-duration</code>.

Возможные значения: время в секундах (s) или миллисекундах (ms).
В случае нескольких анимаций время для каждой из них можно задать через запятую.
Исходное значение — 0s.

</section><section id="animation-timing-function" data-name="animation-timing-function"><h2>Animation-timing-function</h2>
Свойство определяет тип анимации.

Возможные значения:

<strong>Плавная анимация</strong>
<code>ease</code> — скольжение (значение по умолчанию)
<code>linear</code> — ровное движение
<code>ease-in</code> — ускорение к концу
<code>ease-out</code> — ускорение в начале
<code>ease-in-out</code> — более плавное скольжение, чем <code>ease</code>


<iframe class="live-snippet" style="height: 500px" src="../assets/demo/css-animation/demo_3.html?output"></iframe>

<code>cubic-bezier(число,число,число,число)</code> позволяет задавать сложный тип анимации. Значения удобно подбирать на <a href="http://cubic-bezier.com/">cubic-bezier.com</a>.

<code>cubic-bezier(.24,1.49,.29,-0.48);</code>

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/css-animation/demo_4.html?output"></iframe>

<strong>Пошаговая анимация</strong>
<code>step-start</code> и <code>step-end</code> — позволяют задать пошаговую анимацию, обязательно задавать конкретные шаги. При этом с <code>step-start</code> изменения происходят в начале шага, а с <code>step-end</code> — в конце.

<code>step-end</code>. Если выставить <code>step-start</code>, счетчик будет начинаться с единиц.

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-animation/demo_5.html?output"></iframe>

<code>steps(число)</code> — позволяет задать количество шагов, за которые будет выполнена анимация, при этом можно задать только последний шаг без необходимости указывать промежуточные.

<code>steps(60)</code>

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-animation/demo_6.html?output"></iframe>

</section><section id="animation-iteration-count" data-name="animation-iteration-count"><h2>Animation-iteration-count</h2>
Управляет повторением анимации.
Значение по умолчанию: 1 (анимация проигрывается один раз).

Возможные значения:

число — сколько раз проиграть анимацию.
<code>infinite</code> — бесконечное повторение.

</section><section id="animation-direction" data-name="animation-direction"><h2>Animation-direction</h2>
Отвечает за направление анимации.

Возможные значения:

<code>normal</code> — анимация проигрывается в обычном направлении, с начала и до конца.
<code>reverse</code> — анимация проигрывается в обратном направлении, то есть с конца.
<code>alternate</code> — анимация проигрывается с начала и до конца, а затем в обратном направлении.
<code>alternate-reverse</code> — анимация проигрывается с конца до начала, а затем в обратном направлении.


<iframe class="live-snippet" style="height: 420px" src="../assets/demo/css-animation/demo_7.html?output"></iframe>

</section><section id="animation-play-state" data-name="animation-play-state"><h2>Animation-play-state</h2>
Управляет остановкой и проигрыванием анимации.

Возможные значения:
<code>running</code> — анимация проигрывается (значение по умолчанию).
<code>paused</code> — анимация застывает на первом шаге.

Управлять шагом, где будет остановка, не получается, но можно останавливать анимацию по <code>:hover</code>:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-animation/demo_8.html?output"></iframe>

</section><section id="animation-delay" data-name="animation-delay"><h2>Animation-delay</h2>
С помощью <code>animation-delay</code> можно задавать задержку анимации перед началом воспроизведения.

Возможные значения: время в секундах (s) или миллисекундах (ms).
Значения могут быть отрицательными.
В случае нескольких анимаций время для каждой из них можно задать через запятую.
Исходное значение — 0s.

<iframe class="live-snippet" style="height: 330px" src="../assets/demo/css-animation/demo_9.html?output"></iframe>

</section>
<section id="animation-fill-mode" data-name="animation-fill-mode"><h2>Animation-fill-mode</h2>
Свойство определяет будет ли анимация воздействовать на элемент вне времени воспроизведения анимации.

Возможные значения:

<code>none</code> — анимация воздействует на элемент только во время воспроизведения, по окончании элемент возвращается в исходное состояние.
<code>forwards</code> — анимация воздействует на элемент по окончании воспроизведения.
<code>backwards</code> — анимация воздействует на элемент до начала воспроизведения.
<code>both</code> — анимация воздействует на элемент и до начала, и после окончания воспроизведения.

Чтобы увидеть как <code>backwards</code> и <code>both</code> работают до начала воспроизведения анимации, задана задержка <code>animation-delay: 3s;</code>. Так же для этого имеет смысл открыть пример в новом окне.

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/css-animation/demo_10.html?output"></iframe>

Все эти свойства можно записать с помощью короткой записи, например:


```css
animation: timing 5s infinite alternate;
```

Обязательные значения — имя анимации и длительность.
Первое временное значение считается длительностью воспроизведения, второе — задержкой.

</section>
