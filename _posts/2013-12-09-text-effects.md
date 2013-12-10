---
layout: default
title: Текстовые эффекты

status: publish
type: post
published: true
---

В посте представлены некоторые эффекты на основе <code>text-shadow</code>. Проведите курсором над текстом, чтобы увидеть эффекты при наведении.<!--more-->

<h4>Выдавленный текст</h4>

<pre><code class="language-css">H1 {
  text-shadow: 1px 1px 1px silver,
               -1px 1px 1px silver;
  color: white;
  transition: all .5s;
  }
  h1:hover {
    text-shadow: -1px -1px 1px silver,
                 1px -1px 1px silver;
    color: white;
    }</code></pre>

<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/4/"></iframe>

<h4>Вдавленный текст</h4>

<pre><code class="language-css">H1 {
  text-shadow: -1px -1px #000,
               0 1px 0 #444;
  color: #222;
  transition: all 1s;
  }
  H1:hover {
    text-shadow: -1px -1px #000,
               0 1px 0 #444;
    color: #1A1A1A;
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/17/"></iframe>

<h4>Размытие</h4>

<pre><code class="language-css">H1 {
  font-size: 50px;
  font-weight: normal;
  cursor: pointer;
  text-shadow: 0 0 15px #999;
  color: transparent;
  transition: all 1s;
  }
  H1:hover {
    text-shadow: 0 0 0 #333;
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/9/"></iframe>

<h4>Контуры</h4>

<pre><code class="language-css">H1 {
  text-shadow: 1px 1px 0 orange,
               1px -1px 0 orange,
               -1px 1px 0 orange,
              -1px -1px 0 orange;
  color: white;
  transition: all 1s;
  }
  H1:hover {
    text-shadow: 1px 1px 0 yellowgreen,
                 1px -1px 0 yellowgreen,
                 -1px 1px 0 yellowgreen,
                -1px -1px 0 yellowgreen;
    color: white;
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/6/"></iframe>

<pre><code class="language-css">H1 {
  text-shadow: -1px -1px #FFF,
               -2px -2px #FFF,
               -1px 1px #FFF,
               -2px 2px #FFF,
               1px 1px #FFF,
               2px 2px #FFF,
               1px -1px #FFF,
               2px -2px #FFF,
               -3px -3px 2px #BBB,
               -3px 3px 2px #BBB,
               3px 3px 2px #BBB,
               3px -3px 2px #BBB;
  color: steelblue;
  transition: all 1s;
  }
  H1:hover {
    color: yellowgreen;
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/18/"></iframe>

<h4>Длинные тени</h4>

<pre><code class="language-css">H1 {
  text-shadow: 1px 1px 0 hsl(20,100%,50%),
               2px 2px 0 hsl(20,100%,50%),
               3px 3px 0 hsl(35,100%,50%),
               4px 4px 0 hsl(35,100%,50%),
               5px 5px 0 hsl(45,100%,50%),
               6px 6px 0 hsl(45,100%,55%),
               7px 7px 0 hsl(55,100%,60%),
               8px 8px 0 hsl(55,100%,65%);
  color: hsl(0,100%,40%);
  transition: all 1s;
  }
  H1:hover {
    text-shadow: 1px -1px 0 hsl(290,100%,40%),
               2px -2px 0 hsl(290,100%,40%),
               3px -3px 0 hsl(280,100%,60%),
               4px -4px 0 hsl(280,100%,60%),
               5px -5px 0 hsl(270,100%,75%),
               6px -6px 0 hsl(270,100%,80%),
               7px -7px 0 hsl(260,100%,85%),
               8px -8px 0 hsl(260,100%,90%);
      color: hsl(300,100%,30%);
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/7/"></iframe>

<h4>Живое подчеркивание</h4>

<pre><code class="language-css">H1 {
  display: inline-block;
  text-shadow: 1px 1px 1px white,
               1px -1px 1px white,
               -1px 1px 1px white,
               -1px -1px 1px white;
  color: steelblue;
  transition: all 1s;
  }
  H1:after {
    content: "";
    display: block;
    position: relative;
    z-index: -1;
    width: 100%;
    margin: auto;
    border-bottom: 3px solid steelblue;
    bottom: .15em;
    transition: all 1s;
    }
    H1:hover:after {
      width: 0%;
      border-bottom-width: 1px;  
      }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/8/"></iframe>

<h4>Подводка</h4>

<pre><code class="language-css">H1 {
  text-shadow: 1px 1px white,
               2px 2px #777;
  color: #333;
  transition: all 1s;
  }
  H1:hover {
    text-shadow: 1px 1px white,
                 2px 2px tomato;
    color: crimson;
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/10/"></iframe>

<h4>Разъезжающийся текст</h4>

<pre><code class="language-css">H1 {
  overflow: hidden;
  text-shadow: 0 0 tomato,
               0 0 yellowgreen,
               0 0 skyblue;
  color: transparent;
  transition: all 1s;
  }
  H1:hover {
    text-shadow: -400px 0 tomato,
                 400px 0 yellowgreen,
                 0 0 skyblue;
    }</code></pre>
<iframe class="jsbin" style="height: 150px" src="http://jsbin.com/EVAViNA/16/"></iframe>

Используя тени, градиенты и псевдо-элементы можно придумать много разных вариантов оформления текста.

