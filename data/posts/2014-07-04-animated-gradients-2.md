---
title: Анимируем градиенты ещё раз

tags: [animation, gradients, experiments, draw-on-css]

image: //img-fotki.yandex.ru/get/6846/5091629.a0/0_83fcf_1a481db2_orig
description: Предыдущее решение мне всё-таки кажется несколько избыточным, а тут пришел в голову ещё один способ, на этот раз — с псевдоэлементами и opacity.
---

Предыдущее <a href="/animation-for-gradients/">решение</a> мне всё-таки кажется несколько избыточным, а тут пришел в голову ещё один способ, на этот раз — с псевдоэлементами и <code>opacity</code>.<!--more-->

Демо:

<p data-height="450" data-theme-id="4974" data-slug-hash="rEzbe" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/rEzbe/'>Animated gradient with pseudo elements</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Принцип работы:

<ol>
<li>Создаем элемент с градиентом.</li>
<li>Добавляем псевдоэлемент того же размера с градиентом, который должен стать вторым шагом анимации. Задаем ему <code>opacity: 0</code>.</li>
<li>По <code>:hover</code> родителя или через <code>animation</code> меняем <code>opacity</code> псевдоэлемента на 1.</li>
</ol>

Если в элементе есть текст, ему потребуется своя обертка, чтобы поднять его над псевдоэлементами.

Для примера я сделала кнопки:

<p data-height="268" data-theme-id="4974" data-slug-hash="JoraL" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/JoraL/'>Blurry buttons with softly animated gradients</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Конечно, лучше бы градиенты просто анимировались, но отстутствие такой возможности стимулирует поиски новых способов обойти ограничения.
