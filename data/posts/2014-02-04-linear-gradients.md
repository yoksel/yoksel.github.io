---
title: "Линейные градиенты"

tags: [gradients, draw-on-css]

image: //img-fotki.yandex.ru/get/9760/5091629.9b/0_7ee9b_73c4e981_XL.png
description: 'CSS-градиенты позволяют сделать фон из двух и более цветов, плавно переходящих из одного в другой. Они могут быть использованы везде, где используются картинки: в фонах, в качестве буллетов списков, они могут быть заданы в content или border-image.'

links:
- href: http://www.colorzilla.com/gradient-editor/
  text: Ultimate CSS Gradient Generator
- href: http://www.webdirections.org/resources/lea-verou-mastering-css3-gradients/
  text: Презентация про градиенты от Lea Verou
- href: http://leaverou.github.io/css-colors/
  text: leaverou.github.io/css-colors
- href: /tsveta
  text: Цвета в Css
---

CSS-градиенты позволяют сделать фон из двух и более цветов, плавно переходящих из одного в другой.
Они с нами уже достаточно давно, и имеют довольно <a href="http://caniuse.com/#feat=css-gradients">неплохую поддержку браузерами</a>. Большинство современных браузеров понимает их без префиксов, для IE9 и старше есть <a href="http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx">Gradient Filter</a>, также для IE9 можно использовать SVG.

Спецификация: <a href="http://www.w3.org/TR/css3-images/#gradients">w3.org/TR/css3-images/#gradients</a>.<!--more-->

Градиенты могут быть использованы везде, где используются картинки: в фонах, в качестве буллетов списков, они могут быть заданы в <code>content</code> или <code>border-image</code>.

<h2 id="linear-gradient">linear-gradient</h2>

Линейные градиенты достаточно просты в использовании. Для самого элементарного градиента достаточно задать начальный и конечный цвета:

```css
background: linear-gradient(orangered, gold);
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/linear-gradients/demo_1.html?output"></iframe>

Цветов может быть любое количество больше двух.
Также можно управлять направлением градиента и границами (точками остановки) цветов.

<h2 id="angle">Угол или направление градиента</h2>

Направление можно задавать градусами или ключевыми словами.

<b>В градусах:</b> от 0 до 360, например <code>270deg</code>.

<b>Ключевыми словами:</b>

<code>to top</code> = <code>0deg</code>;

<code>to right</code> = <code>90deg</code>;

<code>to bottom</code> = <code>180deg</code> — значение по умолчанию;

<code>to left</code> = <code>270deg</code>.

Ключевые слова можно сочетать между собой, чтобы получить диагональный градиент, например <code>to top left</code>.

Ниже можно увидеть как работают разные направления в растяжке от сиреневого до желтого:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/linear-gradients/demo_2.html?output"></iframe>

Вот код самого первого квадрата, для примера:

```css
.top-left {
   background: linear-gradient(to top left, purple, crimson, orangered, gold);
}
```

Следует помнить, что <code>to top right</code> не то же самое, что <code>45deg</code>. Цвета градиента располагаются перпендикулярно линии направления градиента. При <code>to top right</code> линия идет из нижнего левого в верхний правый угол, при <code>45deg</code> — располагается строго под этим углом независимо от размеров фигуры.

Разница хорошо видна на прямоугольных фигурах:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/linear-gradients/demo_3.html?output"></iframe>

<h2 id="stop-color">Управление положением цветов</h2>

Значения точек остановки для цветов градиента задаются в единицах или в процентах и могут быть больше 100% и меньше 0%.

Примеры задания значений в <code>%</code>, в <code>em</code> и значения, выходящие за границы элемента:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/linear-gradients/demo_4.html?output"></iframe>

Чем ближе находятся точки остановки соседних цветов, тем четче будет граница между ними. Таким образом можно легко делать полосатые фоны:

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/linear-gradients/demo_5.html?output"></iframe>

Так можно сделать, например, фон под боковую колонку, растянутый на всю высоту родительского элемента:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/linear-gradients/demo_6.html?output"></iframe>

Полоски на фоне сайдбара — ещё один градиент, состоящий из чередования полной прозрачности и белого цвета с прозрачностью 30%.
Градиенты с полупрозрачными цветами удобны тем, что их можно наложить поверх фона любого цвета.

Градиент в примере задан сложным длинным кодом, потому что полоски должны располагаться только над фоном для сайдбара. Если не пытаться сделать всё фоном для одного блока, можно было бы решить задачу с помощью псевдоэлемента.

При отсутствии ограничений код может быть гораздо короче:

```css
.light {
  background: peachpuff linear-gradient(90deg,
    rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .4) 50%
  ) center center / 2em;
}

.dark {
  background: steelblue linear-gradient(
    rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .2) 50%
  ) center center / 100% 1em;
}
```

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/linear-gradients/demo_7.html?output"></iframe>

В первой строчке задаем фоновый цвет элемента, тип и направление (цвет и направление можно опустить), во второй — определяем цвета градиента и границу между ними, в третьей — задаем положение и размер получившегося изображения. Самая важная часть — размер. По умолчанию фон повторяется, поэтому получившийся паттерн заполнит собой фон элемента.
Очень легко и понятно : )

Вся запись может быть сделана в одну строчку, но для читабельности удобнее писать в несколько, особенно для сложных градиентов.

Также важно знать, что ключевое слово <code>transparent</code> означает прозрачный черный, а не прозрачный белый, поэтому при его использовании в Firefox можно получить вот такую неприятность:

<a href="http://jsbin.com/OvOwEma/2/edit"><img src="//img-fotki.yandex.ru/get/9749/5091629.9b/0_7ee9a_ced3963c_XL.png" alt="Gradient dirt"></a>
Действующий пример (смотреть в Firefox): <a href="http://jsbin.com/OvOwEma/2/edit">jsbin.com/OvOwEma/2/edit</a>.

Чтобы этого избежать, используйте полностью прозрачные цвета нужного оттенка, например, белый: <code>rgba(255, 255, 255, 0)</code> или черный <code>rgba(0, 0, 0, 0)</code>. Про разные способы задавать цвета можно почитать <a href="/tsveta">здесь</a>.

Чтобы узнать rgb-нотацию конкретного цвета, можно воспользоваться <b><a href="http://leaverou.github.io/css-colors/">leaverou.github.io/css-colors</a></b>, инструментом от <a href="http://lea.verou.me/">Lea Verou</a>.

<h2 id="repeating-linear-gradient">repeating-linear-gradient</h2>

Помимо обычного <code>linear-gradient</code> можно сделать <code>repeating-linear-gradient</code> — повторяющийся градиент

Примерный код:

```css
background: repeating-linear-gradient(
  green, green .5em,
  transparent .5em, transparent 1em
);
```

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/linear-gradients/demo_8.html?output"></iframe>

К сожалению, повторяющиеся градиенты ведут себя как попало и подойдут только для узоров, которым не важна точность. Если нужна аккуратность, используйте <code>linear-gradient</code> в сочетании с <code>background-size</code> и <code>background-repeat</code>.

<b>Upd. от 3.07.20:</b> в данный момент повторяющиеся градиенты корректно отрисоваются в большинстве браузеров, и ими можно свободно пользоваться.

<h2 id="pitfalls">Ограничения</h2>

Градиенты имеют такое же ограничение, что и <code>box-shadow</code>: им нельзя задавать отдельно цвета или направление. Это приводит к дублированию кода и острой потребности воспользоваться препроцессорами в случае создания сложных градиентов.

Другое ограничение состоит в том, что градиенты не анимируются, что, впрочем, <a href="/animation-for-gradients">можно до какой-то степени обойти</a>.

Для быстрого создания кроссбраузерных градиентов есть очень удобный инструмент: <b><a href="http://colorzilla.com/gradient-editor/">colorzilla.com/gradient-editor/</a></b>. Помимо кода для современных браузеров, он предложит код для старых IE и SVG для 9-го.

В сочетании с базовыми возможностями управления фоновыми картинками градиенты дают широчайшие возможности для создания фонов разной степени сложности совершенно без использования изображений. Градиентами можно делать сложные и интересные паттерны, но это уже совсем другая тема.
