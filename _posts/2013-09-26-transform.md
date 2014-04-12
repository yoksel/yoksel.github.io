---
layout: default
title: Transform
categories:
- 3D
- Css
- Transform
tags: []
status: publish
type: post
published: true

post_nav:
- url: '#transform-origin'
  name: 'transform-origin'
- url: '#transform-style'
  name: 'transform-style'
- url: '#perspective'
  name: 'perspective'
- url: '#perspective-origin'
  name: 'perspective-origin'
- url: '#backface-visibility'
  name: 'backface-visibility'
---
<section markdown="1">Css <code>transform</code> позволяет трансформировать элементы, в том числе в трехмерном пространстве.<!--more-->

Спецификация: <a href="http://www.w3.org/TR/css3-transforms/">www.w3.org/TR/css3-transforms/</a>.

Используя свойство <code>transform</code> можно задавать элементу одну и более функций для трансформации.
Все функции можно найти тут: <a href="/pages/transform-functions.html">Transform Functions</a>

Возможные значения: <code>none</code> или функции трансформаций через пробел.

Примеры трансформаций:

<iframe class="jsbin" style="height: 470px" src="http://jsbin.com/EcebOKi/48/embed?output"></iframe>

Важно помнить, что функции применяются в той последовательности, в какой записаны, и предыдущие функции могут влиять на следующие.
То есть строчки

<pre><code class="language-css">transform: translateZ(5em) rotateY(90deg);</code></pre>

и

<pre><code class="language-css">transform: rotateY(90deg) translateZ(5em);</code></pre>

дадут совершенно разный результат, а строчка:

<pre><code class="language-css">transform: rotateY(45deg) rotateY(45deg);</code></pre>

повернет объект на 90 градусов, потому что обе функции будут выполнены последовательно.

</section><section markdown="1" id="transform-origin" data-name="transform-origin"><h4>Transform-origin</h4>
Свойство определяет центр трансформации.

Возможные значения: расстояния в пикселях или процентах или ключевые слова (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>).

Исходное значение: <code>50% 50%</code> - центр элемента.

Координаты отсчитываются от верхнего левого угла элемента.
Если задано только одно значение, второе принимает значение <code>center</code>. 
Если задано два значения, третье принимает значение 0.

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/EcebOKi/36/embed?output"></iframe>

</section><section markdown="1" id="transform-style" data-name="transform-style"><h4>Transform-style</h4>
Определяет поддержку 3D внутри трансформируемого элемента.

Возможные значения:

<code>flat</code> - трансформируемый элемент плоский
<code>preserve-3d</code> - трансформируемый элемент имеет внутренний объем

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/EcebOKi/37/embed?output"></iframe>

Следующие свойства могут перекрывать действие <code>transform-style: preserve-3d;</code> и делать отображение элемента плоским не зависимо от значения <code>transform-style</code>:

<code>overflow</code> с любым значением кроме <code>visible</code>
<code>opacity</code> с любым значением кроме <code>1</code> (блокирует трехмерность, если задан обертке трансформируемого объекта, то есть уровнем выше, чем <code>transform-style: preserve-3d;</code>. На одном уровне они не мешают друг другу).
<code>filter</code> с любым значением кроме <code>none</code>

</section><section markdown="1" id="perspective" data-name="perspective"><h4>Perspective</h4>
Свойство определяет глубину сцены.
Чем меньше значение, тем больше вытянута сцена в сторону зрителя.
Задается родителю трансформируемых элементов.

Возможные значения: <code>none</code> или длина в пикселях.

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/EcebOKi/40/embed?output"></iframe>

</section><section markdown="1" id="perspective-origin" data-name="perspective-origin"><h4>Perspective-origin</h4>
Отвечает за расположение точки, от которой отсчитывается перспектива.
По сути, задается положение зрителя относительно сцены.

Возможные значения: расстояния в пикселях или процентах или ключевые слова (<code>left</code>, <code>center</code>, <code>right</code>, <code>top</code>, <code>bottom</code>).

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/EcebOKi/41/embed?output"></iframe>

</section><section markdown="1" id="backface-visibility" data-name="backface-visibility"><h4>Backface-visibility</h4>
Определяет видимость задней стороны объекта.

Возможные значения:
<code>visible</code> - объект виден всегда, вне зависимости от того, какой стороной повернут (значение по умолчанию).
<code>hidden</code> - скрывать объект, если он повернут "спиной".

Кубик справа показывает действие <code>backface-visibility: hidden</code>:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/ELipoZE/16/embed?output"></iframe>

</section>

Вдохновляющие эффекты с трансформами: <a href="http://tympanus.net/Development/CreativeLinkEffects/">tympanus.net/Development/CreativeLinkEffects/</a>
