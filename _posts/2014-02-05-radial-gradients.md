---
layout: default
title:  Радиальные градиенты
type: post
image: http://img-fotki.yandex.ru/get/9322/5091629.9b/0_7ee9c_26f15295_L.png
desc: Радиальные градиенты работают иначе, чем линейные. Если цвета линейных располагаются перпендикулярно линии, задающей направление, то в радиальных цвета расходятся от заданного центра, а градиент может принимать форму круга или эллипса.

links:
- url: http://www.colorzilla.com/gradient-editor/
  name: Ultimate CSS Gradient Generator
- url: http://css.coloratum.com/
  name: CSS.coloratum  
- url: http://www.webdirections.org/resources/lea-verou-mastering-css3-gradients/
  name: Презентация про градиенты от Lea Verou
- url: /tsveta
  name: Цвета в Css
- url: /3d-and-gradients/  
  name: СSS-градиенты и 3D  
---

Радиальные градиенты отрисовываются иначе, чем линейные. Если цвета линейных располагаются перпендикулярно линии, задающей направление, то в радиальных цвета расходятся от заданного центра, а градиент может принимать форму круга или эллипса.

Спецификация: <a href="http://www.w3.org/TR/css3-images/#radial-gradients">w3.org/TR/css3-images/#radial-gradients</a>.<!--more-->

Для самого простого градиента достаточно задать только цвета:

<pre><code class="language-css">background: radial-gradient(gold, orangered);</code></pre>

По умолчанию центр градиента находится по центру, градиент имеет форму эллипса:

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/OvOwEma/3/"></iframe>

Помимо цветов градиенту можно задавать форму, положение и размер. Параметры сочетаются и ведут себя сложнее, чем в линейных градиентах.

<b>Форма</b> (конечная фигура градиента) может быть кругом и эллипсом. По умолчанию - эллипс, градиент стремится занять всё свободное пространство элемента, вытягиваясь, если это необходимо. 

Чтобы градиент имел форму круга - это нужно задать явно с помощью ключевого слова <code>circle</code>.

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/EHuREfA/13/"></iframe>

Если форма не задана, но задан размер - одно значение задает радиус круга, если значений два - градиент получает форму эллипса.
При наличии размеров явное задание формы градиента игнорируется.

<b>Положение</b> определяет где будет расположен <em>центр</em> градиента. Используются те же ключевые слова, что и для линейного градиента, но с приставкой <code>at</code>: <code>at top</code>, <code>at right</code>, <code>at bottom</code>, <code>at left</code> и <code>at center</code> - значение по умолчанию.

Их так же можно сочетать между собой, чтобы расположить градиент на заданной стороне, например: <code>at right top</code> - в верхнем правом углу.

Ниже можно увидеть как работают разные положения:

<iframe class="jsbin" style="height: 450px" src="http://jsbin.com/EHuREfA/18/"></iframe>

Код первого квадрата:

<pre><code class="language-css">background: radial-gradient(at top left, purple, crimson, orangered, gold);</code></pre>

Также можно задавать точное положение градиента, например <code>at 20% 50%</code> или <code>at 10px 150px</code>.

<b>Размер</b> определяет размеры конечной фигуры градиента. Для эллиптических градиентов значения можно задавать в процентах, для круглых - нет.

Если задано одно значение - оно считается радиусом круглого градиента.
Если задано два значения - первое считается горизонтальным радиусом эллипса, второе - вертикальным.

Ниже примеры круглых и эллиптических градиентов. Форма фигуры определяется заданными размерами:

<iframe class="jsbin" style="height: 320px" src="http://jsbin.com/EHuREfA/23/"></iframe>

Также можно использовать ключевые слова:

<code>closest-side</code> - градиент заканчивается у границы элемента ближайшей к центру градиента. Если это эллипс, градиент касается всех границ элемента.
<code>farthest-side</code> - градиент заканчивается у дальней границы элемента. Если это эллипс, градиент касается всех границ элемента.
<code>closest-corner</code> - конечная фигура растягивается таким образом, чтобы она проходила через угол элемента, ближайший к центру градиента. Если конечная фигура - эллипс, градиент растягивается на всю фигуру. 
При этом параметре градиент заполняет собой всю фигуру, частично выходя за её пределы.
<code>farthest-corner</code> - аналогично <code>closest-corner</code>, только конечная фигура проходит через угол, дальний от центра градиента. Значение по умолчанию.

Некоторым градиентам добавлено положение <code>at bottom</code>, чтобы было лучше видно действие кода:
<iframe class="jsbin" style="height: 700px" src="http://jsbin.com/EHuREfA/22/"></iframe>

<code>radial-gradient</code> также можно сделать повторяющимся: <code>repeating-radial-gradient</code>.

Примерный код:

<pre><code class="language-css">background: repeating-radial-gradient(circle,
    darkkhaki, darkkhaki .5em, 
    transparent .5em, transparent 1.5em);</code></pre>

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/OvOwEma/10/"></iframe>

Как и в случае с линейным градиентом, повторяющийся градиент не очень аккуратно отрисовывается.

Сочетая несколько фонов с разными параметрами можно получить удивительные вещи:

<p data-height="268" data-theme-id="0" data-slug-hash="lxrhg" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/lxrhg'>Rounds</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="268" data-theme-id="0" data-slug-hash="ijxKy" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/ijxKy'>Circles</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Если при создании узоров использовать относительные единицы (<code>em</code>, <code>%</code>), а не абсоюлютные (<code>px</code>), размер получившихся паттернов потом можно будет легко регулировать изменяя только размер шрифта.

Если вы заинтересовались кодом паттернов, я бы советовала попробовать повторить узор не подглядывая в исходники, это полезно : )
