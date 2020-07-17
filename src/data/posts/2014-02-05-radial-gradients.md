---
title:  Радиальные градиенты

tags: [gradients, draw-on-css]

image: http://img-fotki.yandex.ru/get/9322/5091629.9b/0_7ee9c_26f15295_L.png
desc: Радиальные градиенты работают иначе, чем линейные. Если цвета линейных располагаются перпендикулярно линии, задающей направление, то в радиальных цвета расходятся от заданного центра, а градиент может принимать форму круга или эллипса.

links:
- url: http://www.colorzilla.com/gradient-editor/
  name: Ultimate CSS Gradient Generator
- url: http://leaverou.github.io/css-colors/
  name: leaverou.github.io/css-colors
- url: http://www.webdirections.org/resources/lea-verou-mastering-css3-gradients/
  name: Презентация про градиенты от Lea Verou
- url: /tsveta
  name: Цвета в Css
- url: /3d-and-gradients/
  name: СSS-градиенты и 3D
---

Радиальные градиенты отрисовываются иначе, чем линейные. Если цвета линейных располагаются перпендикулярно линии, задающей направление, то в радиальных цвета расходятся от заданного центра, а градиент может принимать форму круга или эллипса.

Спецификация: <a href="http://www.w3.org/TR/css3-images/#radial-gradients">w3.org/TR/css3-images/#radial-gradients</a>.<!--more-->

<h2 id="radial-gradient">radial-gradient</h2>

Для самого простого градиента достаточно задать только цвета:

```css
background: radial-gradient(gold, orangered);
```

По умолчанию центр градиента находится по центру, градиент имеет форму эллипса:

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/radial-gradients/demo_1.html?output"></iframe>

Помимо цветов градиенту можно задавать форму, положение и размер. Параметры сочетаются и ведут себя сложнее, чем в линейных градиентах.

<h2 id="shape">Форма градиента</h2>

Форма (конечная фигура градиента) может быть кругом и эллипсом. По умолчанию — эллипс, градиент стремится занять всё свободное пространство элемента, вытягиваясь, если это необходимо.

Чтобы градиент имел форму круга — это нужно задать явно с помощью ключевого слова <code>circle</code>.

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/radial-gradients/demo_2.html?output"></iframe>

Если форма не задана, но задан размер — одно значение задает радиус круга, если значений два — градиент получает форму эллипса.
При наличии размеров явное задание формы градиента игнорируется.

<h2 id="center">Центр градиента</h2>

Для задания центра градиента используются те же ключевые слова, что и для линейного градиента, но с приставкой <code>at</code>: <code>at top</code>, <code>at right</code>, <code>at bottom</code>, <code>at left</code> и <code>at center</code> — значение по умолчанию.

Их так же можно сочетать между собой, чтобы расположить градиент на заданной стороне, например: <code>at right top</code> — в верхнем правом углу.

Ниже можно увидеть как работают разные положения центра:

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/radial-gradients/demo_3.html?output"></iframe>

Код первого квадрата:

```css
background: radial-gradient(at top left, purple, crimson, orangered, gold);
```

Также можно задавать точное положение градиента, например <code>at 20% 50%</code> или <code>at 10px 150px</code>.

<h2 id="size">Размер градиента</h2>

Можно задать размеры конечной фигуры градиента. Для эллиптических градиентов значения можно указывать в процентах, для круглых — нет.

Если задано одно значение — оно считается радиусом круглого градиента.
Если задано два значения — первое считается горизонтальным радиусом эллипса, второе — вертикальным.

Ниже примеры круглых и эллиптических градиентов. Форма фигуры определяется заданными размерами:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/radial-gradients/demo_4.html?output"></iframe>

Также можно использовать ключевые слова:

<code>closest-side</code> — градиент заканчивается у границы элемента ближайшей к центру градиента. Если это эллипс, градиент касается всех границ элемента.

<code>farthest-side</code> — градиент заканчивается у дальней границы элемента. Если это эллипс, градиент касается всех границ элемента.

<code>closest-corner</code> — конечная фигура растягивается таким образом, чтобы она проходила через угол элемента, ближайший к центру градиента. Если конечная фигура — эллипс, градиент растягивается на всю фигуру.
При этом параметре градиент заполняет собой всю фигуру, частично выходя за её пределы.

<code>farthest-corner</code> — аналогично <code>closest-corner</code>, только конечная фигура проходит через угол, дальний от центра градиента. Значение по умолчанию.

Некоторым градиентам добавлено положение <code>at bottom</code>, чтобы было лучше видно действие кода:

<iframe class="live-snippet" style="height: 700px" src="../assets/demo/radial-gradients/demo_5.html?output"></iframe>

<h2 id="repeating-radial-gradient">repeating-radial-gradient</h2>

Радиальный градиент также может быть повторяющимся. Примерный код:

```css
background: repeating-radial-gradient(circle,
  darkkhaki, darkkhaki .5em,
  transparent .5em, transparent 1.5em);
```

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/radial-gradients/demo_6.html?output"></iframe>

Как и в случае с линейным градиентом, повторяющийся градиент не очень аккуратно отрисовывается.

<b>Upd. от 3.07.20:</b> в данный момент повторяющиеся градиенты корректно отрисоваются в большинстве браузеров.

Сочетая несколько фонов с разными параметрами можно получить удивительные вещи:

<p data-height="350" data-theme-id="0" data-slug-hash="lxrhg" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/lxrhg'>Rounds</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="0" data-slug-hash="ijxKy" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/ijxKy'>Circles</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Если при создании узоров использовать относительные единицы (<code>em</code>, <code>%</code>), а не абсоюлютные (<code>px</code>), размер получившихся паттернов потом можно будет легко регулировать изменяя только размер шрифта.

Если вы заинтересовались кодом паттернов, я бы советовала попробовать повторить узор не подглядывая в исходники, это полезно : )
