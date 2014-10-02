---
layout: default
title: Грабли на чистом SVG
type: post
image:
desc:

links:
- url: http://link.com
  name: Name

---
В очередной раз встретившись с проблемой, я всё-таки решила описать саму проблему и пути её решения. Речь пойдет о том, как заставить старые браузеры понимать и отображать SVG-элементы.<!--more-->

Предположим, вам понадобились SVG-иконки. Вы планируете перекрашивать их по наведению или взаимодействовать с ними как-то ещё, поэтому в качестве способа вставки выбираете не CSS-background, а use.

Подразумевается, что вы подготовили библиотеку иконок, и вставили её на страницу. Теперь подключенные иконки надо расставить по местам. Первым делом пишем такое:

<pre><code class="language-markup">&lt;svg>
    &lt;use xlink:href="#s-heart"/>
  &lt;/svg></code></pre>

Конструкция работает во всех браузерах, которые поддерживают SVG.

Затем нужно позаботиться о старых браузерах и добавить иконке фоновый PNG. Пишем что-нибудь типа:

<pre><code class="language-css">SVG {
background: url(heart.png);
border: 2px solid yellowgreen;
}</code></pre>

(пример)

и идем проверять в 8-й IE. И ничего не работает, причем сразу по нескольким причинам:

1. SVG-элемент не существует с точки зрения IE8. Чтобы браузер начал догадываться о его существовании, нужно в тег <code>svg</code> добавить пространство имен, к которому он принадлежит: <code>xmlns="http://www.w3.org/2000/svg"</code>
2. IE8 не поймет обращение к элементу по тегу - только по классу.
3. SVG-элементу обязательно нужно добавить <code>display: block</code> или <code>display: inline-block</code>.

Исправляем код и получаем вот такое:

<pre><code class="language-markup">&lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-icon">
    &lt;use xlink:href="#s-heart"/>
&lt;/svg></code></pre>

<pre><code class="language-css">.svg-icon {
    display: inline: block;
    background: url(heart.png);
    border: 2px solid yellowgreen;
    }</code></pre>

(пример)

Но и на этом проблемы не заканчиваются. Если на странице есть HTML5-теги, верстка может разъехаться, если у элементов внутри SVG нет закрывающих парных тегов.

Например, есть символ:

<pre><code class="language-markup">&lt;symbol id="s-heart" viewBox="0 0 100 100">
    &lt;path d="M100 34.976c0 ... 28.726 28.726z" fill="crimson"/>
&lt;/symbol></code></pre>

У тега <code>path</code> нет парного закрывающего, и страница поломается.

Должно быть вот так:

<pre><code class="language-markup">&lt;symbol id="s-heart" viewBox="0 0 100 100">
    &lt;path d="M100 34.976c0 ... 28.726 28.726z" fill="crimson"></path>
&lt;/symbol></code></pre>

Аналогично надо сделать и для всех тегов <code>use</code>:

<pre><code class="language-markup">&lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-icon">
    &lt;use xlink:href="#s-heart">&lt;/use>
&lt;/svg></code></pre>

После этого SVG можно вставлять на страницу, не опасаясь, что все развалится.