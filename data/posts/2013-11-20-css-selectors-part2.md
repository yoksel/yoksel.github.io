---
title:  Css-селекторы, часть 2

desc: Продолжение справочника по селекторам.
tags: [selectors]

links:
- url: /specifity/
  name: Сколько весят селекторы?
- url: /pages/css-selectors
  name: CSS-селекторы одной таблицей
---

Начало тут: <a href="/css-selectors">Css-селекторы</a>.<!--more-->

<b>Селекторы из CSS3:</b>

<ul>
<li id="attr-begin" data-name="E[foo^='bar']"><p><code>E[foo^="bar"]</code> — элемент с заданным атрибутом, значение которого начинается с заданной строки.</p>

```css
P[data-content^="hello"] {
  border: 2px solid tomato;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_1.html?output"></iframe>
</li>


<li id="attr-end" data-name="E[foo$='bar']"><p><code>E[foo$="bar"]</code> — элемент с заданным атрибутом, значение которого заканчивается заданной строкой.</p>

```css
P[data-content$="hello"] {
  border: 2px solid chartreuse;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_2.html?output"></iframe>
</li>

<li id="attr-contains" data-name="E[foo*='bar']"><p><code>E[foo*="bar"]</code> — элемент с заданным атрибутом, значение которого содержит заданную строку.</p>


```css
P[data-content*="hello"] {
  border: 2px solid mediumseagreen;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_3.html?output"></iframe>
</li>

<li id="root" data-name=":root"><p><code>E:root</code> — псевдокласс, представляющий корневой элемент документа. Обычно это тег <code>html</code>.</p></li>

<li id="nth-child" data-name="E:nth-child(n)"><p><code>E:nth-child(n)</code> — <code>n</code> по счету дочерний элемент.</p>


```css
P:nth-child(2) {
  border-color: crimson;
}
P:nth-child(3) {
  border-color: orange;
}
P:nth-child(6) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_4.html?output"></iframe>

Подробнее про селектор: <a href="/nth-child/">
Nth-child и nth-of-type</a>
</li>

<li id="nth-last-child" data-name="E:nth-last-child(n)"><p><code>E:nth-last-child(n)</code> — <code>n</code> по счету дочерний элемент, начиная с конца.</p>


```css
P:nth-last-child(1) {
  border-color: crimson;
}
P:nth-last-child(4) {
  border-color: orange;
}
P:nth-last-child(5) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors-part2/demo_5.html?output"></iframe>
</li>

<li id="nth-of-type" data-name="E:nth-of-type(n)"><p><code>E:nth-of-type(n)</code> — <code>n</code> по счету дочерний элемент определенного типа.</p>


```css
P:nth-of-type(1) {
  border-color: crimson;
}
P:nth-of-type(3) {
  border-color: orange;
}
P:nth-of-type(6) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 380px" src="../assets/demo/css-selectors-part2/demo_6.html?output"></iframe>
</li>

<li id="nth-last-of-type" data-name="E:nth-last-of-type(n)"><p><code>E:nth-last-of-type(n)</code> — <code>n</code> по счету дочерний элемент определенного типа, начиная с конца.</p>


```css
P:nth-last-of-type(1) {
  border-color: crimson;
}
P:nth-last-of-type(4) {
  border-color: orange;
}
P:nth-last-of-type(6) {
  border-color: gold;
}
```

<iframe class="live-snippet" style="height: 380px" src="../assets/demo/css-selectors-part2/demo_7.html?output"></iframe>
</li>

<li id="last-child" data-name="E:last-child"><p><code>E:last-child</code> — последний дочерний элемент.</p>


```css
P:last-child {
  border-color: slateblue;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors-part2/demo_8.html?output"></iframe>
</li>

<li id="first-of-type" data-name="E:first-of-type"><p><code>E:first-of-type</code> — первый дочерний элемент определенного типа.</p>


```css
P:first-of-type {
  border-color: orchid;
}
```

<iframe class="live-snippet" style="height: 260px" src="../assets/demo/css-selectors-part2/demo_9.html?output"></iframe>
</li>

<li id="last-of-type" data-name="E:last-of-type"><p><code>E:last-of-type</code> — последний дочерний элемент определенного типа.</p>


```css
P:last-of-type {
  border-color: fuchsia;
}
```

<iframe class="live-snippet" style="height: 260px" src="../assets/demo/css-selectors-part2/demo_10.html?output"></iframe>
</li>

<li id="only-child" data-name="E:only-child"><p><code>E:only-child</code> — единственный дочерний элемент родителя.</p>


```css
P:only-child {
  border-color: lightsalmon;
}
```

<iframe class="live-snippet" style="height: 370px" src="../assets/demo/css-selectors-part2/demo_11.html?output"></iframe>
</li>

<li id="only-of-type" data-name="E:only-of-type"><p><code>E:only-of-type</code> — единственный дочерний элемент такого типа</p>


```css
P:only-of-type {
  border-color: crimson;
}
```

<iframe class="live-snippet" style="height: 420px" src="../assets/demo/css-selectors-part2/demo_12.html?output"></iframe>
</li>

<li id="empty" data-name="E:empty"><p><code>E:empty</code> — пустой элемент.</p></li>

<li id="target" data-name="E:target"><p><code>E:target</code> — элемент, на который ведет якорь с решеткой в адресе страницы, например <i>http://someurl.com<b>#test</b></i></p>


```css
P:target {
  border-color: orangered;
}
```

<iframe class="live-snippet" style="height: 210px" src="../assets/demo/css-selectors-part2/demo_13.html?output#test"></iframe>
</li>

<li id="enabled" data-name="E:enabled, E:disabled"><p><code>E:enabled</code>,
<code>E:disabled</code> — инпуты с разрешенным редактированием и заблокированные.</p>


```css
INPUT:enabled {
  border: 2px solid orange;
}
INPUT:disabled {
  border: 2px solid #EEE;
  color: #CCC;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors-part2/demo_14.html?output"></iframe>
</li>

<li id="checked" data-name="E:checked"><p><code>E:checked</code> — выбранная радиокнопка или чекбокс</p>


```css
INPUT {
  outline: 5px solid #DDD;
}
INPUT:checked {
  outline-color: yellowgreen;
}
```

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors-part2/demo_15.html?output"></iframe>
</li>

<li id="not" data-name="E:not(s)"><p><code>E:not(s)</code> — элементы, которые не отвечают условию, заданному в скобках</p>


```css
*:not(DIV) {
  border-color: gold;
}
P:not([class="one"]) {
  border-color: skyblue;
}
```

<iframe class="live-snippet" style="height: 270px" src="../assets/demo/css-selectors-part2/demo_16.html?output"></iframe>
</li>

<li id="next" data-name="E ~ F"><p><code>E ~ F</code> — второй элемент, который следует после первого, независимо от их удаленности друг от друга. Выбираются все следующие элементы, в отличие от <code>E + F</code>, который выбирает только те, которые находятся непосредственно друг за другом.</p>


```css
P ~ DIV {
  border-color: yellowgreen;
}
```

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/css-selectors-part2/demo_17.html?output"></iframe>
</li>
</ul>
