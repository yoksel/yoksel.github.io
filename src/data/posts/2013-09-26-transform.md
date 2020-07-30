---
title: Transform

tags: [transform]

desc: CSS-свойство позволяет трансформировать элементы, в том числе в трехмерном пространстве.

links:
- url: https://tympanus.net/Development/CreativeLinkEffects/#cl-effect-2
  name: tympanus.net/Development/CreativeLinkEffects
  desc: интересный пример 3D-трансформации по наведению

---
<section>CSS-свойство <code>transform</code> позволяет трансформировать элементы, в том числе в трехмерном пространстве.<!--more-->

Спецификация: <a href="http://www.w3.org/TR/css3-transforms/">www.w3.org/TR/css3-transforms/</a>.

Используя свойство <code>transform</code> можно задавать элементу одну и более функций для трансформации.
Все функции можно найти тут: <a href="/pages/transform-functions">Transform Functions</a>

Возможные значения: <code>none</code> или функции трансформаций через пробел.

Примеры трансформаций:

<p data-height="560" data-theme-id="4974" data-slug-hash="zNazqX" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/zNazqX/">CSS Transforms</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Важно помнить, что функции применяются в той последовательности, в какой записаны, и предыдущие функции могут влиять на следующие.
То есть строчки

```css
transform: translateZ(5em) rotateY(90deg);
```

и

```css
transform: rotateY(90deg) translateZ(5em);
```

дадут совершенно разный результат, а строчка:

```css
transform: rotateY(45deg) rotateY(45deg);
```

повернет объект на 90 градусов, потому что обе функции будут выполнены последовательно.

</section><section id="transform-origin" data-name="transform-origin"><h2>Transform-origin</h2>
Свойство определяет центр трансформации.

Возможные значения: расстояния в пикселях или процентах или ключевые слова (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>).

Исходное значение: <code>50% 50%</code> — центр элемента.

Координаты отсчитываются от верхнего левого угла элемента.
Если задано только одно значение, второе принимает значение <code>center</code>.
Если задано два значения, третье принимает значение 0.

<p data-height="450" data-theme-id="4974" data-slug-hash="VPdWym" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: transform-origin" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/VPdWym/">CSS Transforms: transform-origin</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section><section id="transform-style" data-name="transform-style"><h2>Transform-style</h2>
Определяет поддержку 3D внутри трансформируемого элемента.

Возможные значения:

<code>flat</code> — трансформируемый элемент плоский

<code>preserve-3d</code> — трансформируемый элемент имеет внутренний объем

<p data-height="450" data-theme-id="4974" data-slug-hash="xgzreO" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: transform-style" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/xgzreO/">CSS Transforms: transform-style</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Следующие свойства могут перекрывать действие <code>transform-style: preserve-3d;</code> и делать отображение элемента плоским независимо от значения <code>transform-style</code>:

<code>overflow</code> с любым значением кроме <code>visible</code>

<code>opacity</code> с любым значением кроме <code>1</code> <s>(блокирует трехмерность, если задан обертке трансформируемого объекта, то есть уровнем выше, чем <code>transform-style: preserve-3d;</code>. На одном уровне они не мешают друг другу)</s> так было на момент написания статьи, сейчас прозрачность делает трёхмерный элемент плоским.

<code>filter</code> с любым значением кроме <code>none</code>

</section><section id="perspective" data-name="perspective"><h2>Perspective</h2>
Свойство определяет глубину сцены.
Чем меньше значение, тем больше вытянута сцена в сторону зрителя.
Задается родителю трансформируемых элементов.

Возможные значения: <code>none</code> или длина в пикселях.

<p data-height="400" data-theme-id="4974" data-slug-hash="YNvxyE" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: perspective" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/YNvxyE/">CSS Transforms: perspective</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section><section id="perspective-origin" data-name="perspective-origin"><h2>Perspective-origin</h2>
Отвечает за расположение точки, от которой отсчитывается перспектива.
По сути, задается положение зрителя относительно сцены.

Возможные значения: расстояния в пикселях или процентах или ключевые слова (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>).

<p data-height="450" data-theme-id="4974" data-slug-hash="jyKLGO" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: perspective-origin" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/jyKLGO/">CSS Transforms: perspective-origin</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section><section id="backface-visibility" data-name="backface-visibility"><h2>Backface-visibility</h2>
Определяет видимость задней стороны объекта.

Возможные значения:

<code>visible</code> — объект виден всегда, вне зависимости от того, какой стороной повернут (значение по умолчанию).

<code>hidden</code> — скрывать объект, если он повернут «спиной».

<p data-height="450" data-theme-id="4974" data-slug-hash="zNadaw" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="CSS Transforms: backface-visibility" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/zNadaw/">CSS Transforms: backface-visibility</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
</section>
