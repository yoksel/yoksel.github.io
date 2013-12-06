---
layout: default
title: Односторонние отступы как средство от головной боли
categories:
- Css
- Полезное
tags: []
status: publish
type: post
published: true
---
Прекрасная статья от <strong>Harry Roberts</strong>
<a href="http://csswizardry.com/2012/06/single-direction-margin-declarations/">csswizardry.com/2012/06/single-direction-margin-declarations/</a>

Суть идеи состоит в использовании односторонних вертикальных марджинов.<!--more--> Это создает аккуратный вертикальный ритм и позволяет менять элементы местами не опасаясь, что вертикальные отступы разной величины где-то схлопнутся непредсказуемым образом.

В качестве подобпытного кролика возьмем такой макет:

<iframe class="jsbin" style="height: 530px" src="http://jsbin.com/ITeqiRo/2/embed?output"></iframe>

Всем элементам шапки задан одинаковый отступ в одном направлении. В данном случае, вниз.

Вот код, управляющий отступами:

<pre><code class="language-css">.header-item {
  margin-bottom: 1.2em;
  }
.header-item:last-child {
  margin-bottom: 0;
  }</code></pre>

Первый блок задает одинаковый отступ вниз для всех блоков в шапке, второй убирает его у последнего элемента.

<iframe class="jsbin" style="height: 530px" src="http://jsbin.com/ITeqiRo/3/embed?output"></iframe>

Теперь можно сколько угодно менять местами элементы шапки, и всё равно все варианты будут аккуратно смотреться:

<iframe class="jsbin" style="height: 1060px" src="http://jsbin.com/ITeqiRo/4/embed?output"></iframe>

По-моему, идея гениальна в своей простоте.
