---
title: Css-селекторы

desc: Справочник по селекторам.
tags: [selectors]

links:
- href: /specifity/
  text: Сколько весят селекторы?
- href: /pages/css-selectors
  text: CSS-селекторы одной таблицей
---

В CSS есть достаточно способов обратиться к нужным элементам. <br/>
В каждой новой спецификацией CSS добавлялось что-то новое, и теперь у нас есть много самых разных селекторов. <!--more-->Кроме того, различие в спецификациях можно использовать, например, чтобы спрятать стили от старых браузеров.

Спецификацию можно найти тут: <a href="http://www.w3.org/TR/css3-selectors/#selectors">w3.org/TR/css3-selectors</a>.

Селекторы делятся на несколько видов:

<ul>
  <li>по типу (<code>H1</code>, <code>TD</code>, <code>HR</code>...);</li>
  <li>универсальный селектор — <code>*</code> — обозначает элемент любого типа;</li>
  <li>селекторы атрибутов (<code>[data-name]</code>, <code>[data-name$="hidden"]</code>);</li>
  <li>селекторы по классу (<code>.main</code>, <code>.header__nav</code>);</li>
  <li>селекторы по ID (<code>#form</code>, <code>#submit</code>);</li>
  <li>псевдо-классы:

  <ul>
    <li>динамические (<code>:hover</code> и т.д.);</li>
    <li>селектор цели (<code>:target</code>);</li>
    <li>селектор по языку (<code>:lang(en)</code>);</li>
    <li>состояния элементов интерфейса (<code>:enabled</code>, <code>:checked</code>...);</li>
    <li>структурные псевдоклассы (<code>:root</code>, <code>:nth-child</code>);</li>
    <li>псевдокласс отрицания (<code>:not(P)</code>).</li>
  </ul>

  </li>
  <li>псевдоэлементы (<code>:before</code>, <code>:first-line</code>);</li>
  <li>комбинаторы (<code>DIV SPAN</code>, <code>P + H1</code>);</li>
</ul>

Селекторы ниже сгруппированы по спецификациям. Это поможет нам понять какие из них работают везде (из CSS1), какие работают почти везде (из CSS2), а какие кое-где могут и не работать.

<h2>Селекторы из CSS1</h2>

Самые простые и хорошо всем знакомые:

<ul>
	<li>обращение к элементу по тегу (<code>BODY</code>, <code>A</code>, <code>TABLE</code> и т.д.);</li>
	<li> по ID (<code>#main</code>);</li>
	<li> по классу (<code>.header-image</code>);</li>
	<li> обращение к потомку через родителя (<code>UL A</code>, <code>.sidebar .widget</code>);</li>
	<li> состояния ссылок <code>A:link</code>, <code>A:visited</code>, <code>A:hover</code>;</li>
	<li> псевдоэлемент для первой строки текста — <code>P::first-line</code>;</li>
	<li> псевдоэлемент для первого символа в тексте — <code>P::first-letter</code>.</li>
</ul>
Не густо : )

<h2>Селекторы из CSS2</h2>

В этой спецификации добавилось много интересного:

<ul>
<li id="asteriks" data-name="*"><p><code>*</code> — универсальный селектор. Например, <code>* {margin: 0; }</code> уберет отступы у всех элементов на странице.</p></li>
<li id="has-attr" data-name="E[foo]"><p><code>E[foo]</code> — элементы с заданым атрибутом. </p>

<p>Например, код:</p>


```css
P[data-content] {
  border: 2px solid crimson;
}
```

<p>выберет только абзацы, у которых есть атрибут <b>data-content</b>:</p>

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_1.html?output"></iframe>
</li>

<li id="has-attr-val" data-name="E[foo='bar']"><p><code>E[foo="bar"]</code> — элементы, у которых атрибут имеет заданное значение.</p>


```css
P[data-content="hello"] {
  border: 2px solid orange;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_2.html?output"></iframe>
</li>

<li id="has-attr-val-wtsp" data-name="E[foo~='bar']"><p><code>E[foo~="bar"]</code> — элемент, который имеет атрибут со списком значений, разделенных пробелом, одно из которых равно заданному.</p>


```css
P[data-content~="hello"] {
  border: 2px solid yellowgreen;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_3.html?output"></iframe>
</li>

<li id="has-attr-val-hpsp" data-name="E[foo|='bar']"><p><code>E[foo|="bar"]</code> — элемент, который имеет атрибут со списком значений, разделенных дефисом, который начинается с заданного.</p>


```css
P[data-content|="hello"] {
  border: 2px solid steelblue;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_4.html?output"></iframe>
</li>

<li id="first-child" data-name="E:first-child"><p><code>E:first-child</code> — псевдокласс, обращающийся к первому элементу из нескольких внутри родителя.</p>


```css
P:first-child {
  background: gold;
}
```

<iframe class="live-snippet" style="height: 480px" src="../assets/demo/css-selectors/demo_5.html?output"></iframe>

<p>Селектор выбирает первый элемент только если он соответствует заданному тегу или классу и только если он является самым первым потомком родителя.</p>

<p>Для выбора первого элемента из списка дочерних элементов определенного типа существует другой селектор — <code>:first-of-type</code>, добавленный в CSS3.</p>
</li>

<li id="lang" data-name="E:lang(fr)"><p><code>E:lang(fr)</code> — выбирает элементы на заданном языке. Язык элемента может быть получен из HTTP-заголовков, отдаваемых сервером, из <code>meta</code>-тега, заданного в <code>head</code>, либо если у элемента задан атрибут <code>lang</code></p>

<p>Например, этот код добавит малиновый фон всем элементам, для которых язык определен как русский:</p>


```css
P:lang(ru) {
  background: crimson;
}
```

<iframe class="live-snippet" style="height: 280px" src="../assets/demo/css-selectors/demo_6.html?output"></iframe></li>

<li id="before" data-name="E::before"><p><code>E::before</code> — генерируемый контент перед заданным элементом.</p></li>
<li id="after" data-name="E::after"><p><code>E::after</code> — генерируемый контент после элемента.</p>

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/css-selectors/demo_7.html?output"></iframe>
</li>

<li id="child" data-name="E > F"><p><code>E > F</code> — выбирает элемент, только если он является прямым потомком родителя (ни во что больше не вложен).</p>


```css
DIV > A {
  background: darkviolet;
  color: #FFF;
}
```

<iframe class="live-snippet" style="height: 320px" src="../assets/demo/css-selectors/demo_8.html?output"></iframe>
</li>

<li id="next" data-name="E + F"><p><code>E + F</code> — выбирает второй заданный элемент, который следует непосредственно после первого.</p>


```css
P + H3 {
  background: darkturquoise;
  color: lightseagreen;
}
```


<iframe class="live-snippet" style="height: 300px" src="../assets/demo/css-selectors/demo_9.html?output"></iframe>
</li>
</ul>
<b>Продолжение:</b> <a href="/css-selectors-part2/">Css-селекторы, часть 2</a>.

