---
layout: default
title: CSS-анимации для ротации изображений
type: post
image: http://img-fotki.yandex.ru/get/6737/5091629.a1/0_848b9_3d07c8ba_orig
desc: 'В процессе создания демо с анимированными SVG-масками, мне пришлось как следует разобраться с алгоритмами CSS-анимаций. В таких демо используется две анимации: одна для маски, другая для последовательного показа изображений. Меня интересовали варианты алгоритмов для второй анимации.'

links:
- url: /css-animation/
  name: Css Animation
- url: /animated-svg-mask/
  name: Анимированные SVG-маски
---

В процессе экспериментов с <a href="/animated-svg-mask/">анимированными SVG-масками</a>, мне пришлось как следует разобраться с алгоритмами CSS-анимаций. <!--more-->

Например, в <a href="http://codepen.io/yoksel/pen/eIxmr">этом демо</a> используется две анимации: одна для маски, вторая — для смены изображений. Сейчас речь пойдет о второй (и её вариантах).

Такая анимация нужна, чтобы последовательно показывать и скрывать картинки, в то время, когда эффект их появления обеспечивается другой анимацией.

При использовании HTML-элементов это можно было бы сделать одной анимацией, но при использовании SVG-масок для всех элементов ротации используется одна маска, и ей нельзя задать задержку воспроизведения в зависимости от позиции элемента, к которому она применилась. Есть два решения: создавать для каждого шага по маске с нужной задержкой воспроизведения или просто скрывать элементы, которые не нужны в данный момент. Я выбрала второй вариант.

Мне не хотелось использовать JS, потому что простую анимацию можно сделать средствами CSS. Кроме того, использование переменных в Sass позволяет легко синхронизировать между собой анимации масок и смены изображений.

Итак, <b>первый вариант анимации</b>.

<b>Задача:</b> сделать алгоритм последовательной смены произвольного количества изображений. Одно изображение должно сменять другое без плавных переходов. В один момент времени показывается одна картинка.

Вот как это должно работать:

<p data-height="320" data-theme-id="4974" data-slug-hash="kDpsG" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/kDpsG/'>kDpsG</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Делаем разметку галереи:

<pre><code class="language-markup">&lt;ul class="rotation">
    &lt;li class="rotation__item">&lt;/li>
    &lt;li class="rotation__item">&lt;/li>
    &lt;li class="rotation__item">&lt;/li>
    &lt;li class="rotation__item">&lt;/li>
&lt;/ul></code></pre>

В демо я добавила картинки фоном, но внутри элементов галереи может быть любое содержимое. Для демонстрации SVG-масок структура галереи переносится, соответственно, в SVG.

Добавляем Sass:

<pre><code class="language-css">$rotation-height: 270px;

.rotation {
    width: 100%;
    height: $rotation-height;
    &__item {
        position: absolute;
        width: 100%;
        height: $rotation-height;
        }
    }</code></pre>

Теперь самое интересное: анимация. Создаем конфиг:

<pre><code class="language-css">/* количество элементов в галерее */
$max: 4;
/* длительность анимации */
$duration: 8s;
/* длительность одного шага */
$step: $duration/$max;
/* длительность показа одной картинки в процентах от общей длительности анимации */
$step-perc: percentage(1/$max); </code></pre>

Нужно понимать как работает последний параметр. Для всех элементов задается одна и та же анимация: картинка показывается на короткий промежуток времени, и затем скрывается. Переменная <code>$step-perc</code> используется в коде анимации, и определяет как долго будет отображаться каждая картинка:

<pre><code class="language-css">@keyframes hide {
    0% {
        opacity: 1;
        }
    #{$step-perc} {
        opacity: 0;
        }
    }</code></pre>

Например, в галерее из четырех элементов каждая картинка будет показываться 25% времени, а в остальное время будет скрыта.

Задаем анимацию элементам галереи:

<pre><code class="language-css">.rotation__item {
    opacity: 0;
    animation: hide $duration step-end infinite;
    }</code></pre>

Элементы исчезают и появляются одновременно, нужно добавить каждому из них задержку воспроизведения:

<pre><code class="language-css">.rotation__item {
    opacity: 0;
    animation: hide $duration step-end infinite;

    /* задержки анимации */
    &:nth-child(#{$max}n + 1){
        /* ничего не делаем */
        }
    &:nth-child(#{$max}n + 2){
        animation-delay: $step;
        }
    &:nth-child(#{$max}n + 3){
        animation-delay: $step*2;
        }
    &:nth-child(#{$max}n + 4){
        animation-delay: $step*3;
        }
    }</code></pre>

Первому элементу задержка не нужна, для остальных рассчитываем задержку, умножая длительность одного шага на позицию элемента минус 1. То есть второй элемент начнет воспроизводиться на шаг позже, третий — на два шага позже, и так далее.

Очевидно, что <code>animation-delay</code> будет удобнее рассчитывать в цикле:

<pre><code class="language-css">.rotation__item {
    opacity: 0;
    animation: hide $duration step-end infinite;

    /* Задержки анимации */
    @for $item from 2 through $max {
        &:nth-child(#{$max}n + #{$item}){
            animation-delay: $step*($item — 1);
            }
        }
    }</code></pre>

Кроме того, так не придется каждый раз дописывать или убирать задержку шагов, если их число изменится.

Вот что получается в итоге:

<p data-height="320" data-theme-id="4974" data-slug-hash="hzlnj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/hzlnj/'>hzlnj</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Можно отредактировать заготовку, сделав простую ротацию:

<p data-height="320" data-theme-id="4974" data-slug-hash="kpoiq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/kpoiq/'>kpoiq</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

А можно добавить спецэффектов с помощью анимированных SVG-масок, например:

<p data-height="320" data-theme-id="4974" data-slug-hash="kJwCb" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/kJwCb/'>kJwCb</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Для этого демо структура галереи была перенесена в SVG.

<b>Второй вариант анимации.</b>

<b>Задача:</b> картинки появляются по очереди от нижних слоев к верхним, при этом одновременно видны две картинки: текущая и предыдущая под ней, это позволит используя маски сделать "перетекание" из одной картинки в другую.

Как это должно работать:

<p data-height="320" data-theme-id="4974" data-slug-hash="KrqHC" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/KrqHC/'>KrqHC</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Анимация делается по тем же принципам, что и предыдущая, но имеет свои особенности.

Во-первых, под самым первым слоем тоже должно что-то быть, для этого немного меняем разметку и добавляем "дно":

<pre><code class="language-markup">&lt;dl class="rotation">
    &lt;dt class="rotation__item--static item--1">&lt;/dt> &lt;!-- это дно -->
    &lt;dd class="rotation__item item--2">&lt;/dd>
    &lt;dd class="rotation__item item--3">&lt;/dd>
    &lt;dd class="rotation__item item--4">&lt;/dd>
    &lt;dd class="rotation__item item--5">&lt;/dd>
&lt;/dl></code></pre>

Оно не участвует в ротации, а просто всегда там лежит. Изображение в этом слое должно быть таким же как в последнем слое, это позволит зациклить анимацию.

Во-вторых, чтобы каждый слой успевал послужить подложкой для следующего, удлиняем время показа каждого слоя, теперь оно равно двум шагам:

<pre><code class="language-css">/* было */
$step-perc: percentage(1/$max);
/* стало */
$step-perc: percentage(1/$max*2);</code></pre>

В течение первого шага слой появляется сам, а в течение второго служит фоном для следующего слоя.

Во-третьих, самому верхнему слою потребуется своя отдельная анимация.

Почему?
Как уже говорилось выше, в этом варианте анимации каждый слой показывается по времени два шага.

Последний слой изначально тоже показывается два шага, но он самый верхний, и не может служить подложкой другим слоям (над ним ничего нет). Следовательно, его нужно показывать по времени один шаг, а затем скрыть. При этом самый нижний слой является копией верхнего, так что если по прошествии одного шага скрыть самый верхний слой, под ним покажется точно такой же нижний, и анимация аккуратно зациклится.

Делаем переменную с половинной длительностью анимации:

<pre><code class="language-css">$half-step-perc: percentage(1/$max);</code></pre>

Дублируем анимацию с новой длительностью:

<pre><code class="language-css">@keyframes hide-half-step {
  0% {
    opacity: 1;
  }
  #{$half-step-perc} {
    opacity: 0;
    }
}</code></pre>

Переопределяем анимацию для последнего шага:

<pre><code class="language-css">.rotation__item {
    opacity: 0;
    animation: hide $duration step-end infinite;

    /* имя анимации для последнего шага */
    &:nth-of-type(#{$max}n) {
        animation-name: hide-half-step;
        }

    /* задержки анимации */
    @for $item from 2 through $max {
        &:nth-of-type(#{$max}n + #{$item}) {
            animation-delay: $step*($item — 1);
            }
        }
    }</code></pre>

Визуально результат практически не отличается от предыдущего варианта:

<p data-height="320" data-theme-id="4974" data-slug-hash="rJogH" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/rJogH/'>rJogH</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Но если к элементам галереи применить SVG-маски, получается интересное:

<p data-height="320" data-theme-id="4974" data-slug-hash="zcmki" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/zcmki/'>Simple animated mask in SVG (rhomb)</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Синхронизация слоёных анимаций не самая простая задача, но результат того стоит.

Уверена, что на основе таких анимаций можно придумать много интересных эффектов, а понимание принципа их работы может сэкономить вам кучу времени.


