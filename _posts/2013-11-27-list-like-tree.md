---
layout: default
title:  Древовидный список на CSS.
type: post
---

Как-то мне потребовалось сделать иерархическое представление структуры проекта, для реализации был выбран Css.

<!--more-->

Вот что получилось:

<iframe src="http://jsbin.com/aqizUXAZ/5/" style="height: 640px" class="jsbin"></iframe>

Это можно сделать за несколько простых шагов.

Для начала создаем желаемую структуру:

<iframe src="http://jsbin.com/aqizUXAZ/7/edit?html,output" style="height: 600px" class="jsbin"></iframe>

Узлы уровней создаются с помощью заголовков H1 - H6. Чтобы они все вели себя одинаково, добавляем им общий класс <code>.header</code>.

Добавляем отступы и рамки, чтобы видеть структуру.

<iframe src="http://jsbin.com/aqizUXAZ/9/edit?css,output" style="height: 600px" class="jsbin"></iframe>

И вот теперь самое интересное: добавляем полоски, начнем с горизонтальных.

<pre><code class="language-css">LI:before,
.header:before{
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: .5em;
  width: 15px;
  height: 0;
  border-bottom: 1px solid #333;
  }</code></pre>

  Они сделаны абсолютно позиционированными псевдоэлементами. Здесь  можно было обойтись и <code>inline-block</code> с вертикальным выравниванием, но <code>position: absolute;</code> нам очень пригодится чуть позже.

Чтобы полоски не выпадали из контекста, пунктам списка и заголовкам нужно задать относительное позиционирование, а чтобы они не заезжали на текст - паддинг слева тем же элементам.
<pre><code class="language-css">LI,
.header {
  position: relative;
  padding-left: 1.2em;
  }</code></pre> 

<iframe src="http://jsbin.com/aqizUXAZ/11/edit?css,output" style="height: 600px" class="jsbin"></iframe>

Пока выглядит странно. Большинство полосок встало на места, но некоторые болтаются где попало. Это происходит потому, что все горизонтальные линии спозиционированны относительно нижнего края элементов, чтобы вертикальные линии потом начинались не впритык, а примерно от середины высоты текста.

Теперь добавим вертикальные полоски вот таким кодом:

<pre><code class="language-css">.header:last-of-type:before,
LI:last-child:before {
    height: 1000px;
    border: 1px solid #333;
    border-width: 0 0 1px 1px
    }</code></pre>

Таким образом мы добавляем вертикальные линии, направленные вверх.

Получится лес вертикальных линий, от которого легко избавиться, задав всем спискам <code>overflow: hidden;</code>, вот результат:

<iframe src="http://jsbin.com/aqizUXAZ/13/edit?output" style="height: 600px" class="jsbin"></iframe>

И теперь в структуре хорошо видно дублирование некоторых линий.

Оно происходит из-за того, что заголовки (<code>.header</code>) находятся внутри элементов списка (<code>LI</code>), таким образом они получают две направляющих.

Добавим спискам с заголовками класс <code>.p-has-headers</code> и покрасим разные направляющие разными цветами, чтобы увидеть что происходит.

<pre><code class="language-css">.p-has-headers > LI:before {
  border-color: red;
}
.header:before,
.header:last-of-type:before{
  border-color: green;
}</code></pre>

Направляющие обычных пунктов списка остались черными, направляющие списков с заголовками стали красными, направляющие заголовков - зелеными.

<iframe src="http://jsbin.com/aqizUXAZ/14/edit?output" style="height: 600px" class="jsbin"></iframe>

По красным хорошо видно, что некоторые из них находятся не там. Например, на крайней слева вертикали горизонтальные линии совсем мимо, потому, что линии спозиционированы от нижнего края <code>LI</code>.

Это отлично работает в простом списке, но совсем не подходит для списка с заголовком, потому что в этом случае ветка должна начинаться на уровне заголовка, как это делают зеленые. 

Именно поэтому стили прописывались и для <code>LI</code>, и для <code>.header</code>. Если есть заголовок - ветка вверх должна вести от него, а не от конца списка. Таким образом, в списках, пункты которого содержат заголовки и которые мы пометили классом <code>.p-has-headers</code>, можно выключить направляющие для непосредственных наследников кодом вроде <code>UL > LI</code>.

Код:

<pre><code class="language-css">.p-has-headers > LI:before {
  content: none;
}</code></pre>

Результат:

<iframe src="http://jsbin.com/aqizUXAZ/15/" style="height: 640px" class="jsbin"></iframe>

Получилась довольно простая конструкция, главное - не запутаться в тегах списков и каждую новую ветку начинать с заголовка.
