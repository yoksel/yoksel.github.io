---
layout: default
title: SVG-path
type: post
image: 
desc: 

links:
- url: http://www.w3.org/TR/SVG/paths.html
  name: Paths
---

<code>path</code> - Более сложный вариант линии. С его помощью можно рисовать <code>line</code>, <code>polyline</code>, <code>polygon</code>, <code>circle</code> и <code>rect</code>, <a href="http://codepen.io/yoksel/full/Jbofr">пруфлинк</a>.

В отличие от <code>polygon</code>, фигура не замыкается сама по себе, но это можно сделать с помощью дополнительного параметра.<!--more-->

Пример фигуры с <code>path</code>: <br>

<svg class="svg" width="150" height="130"><symbol id="s-crown"><path d="M 10 110 L 10 10 L 40 50 L 70 10 L 100 50 L 130 10 L 130 110 z" fill="gold" stroke="orange" stroke-width="5"/></symbol><use xlink:href="#s-crown" x="5" y="7"/></svg>

<pre><code class="language-markup">&lt;svg class="svg" width="150" height="130">
    &lt;symbol id="s-crown">
        &lt;path d="M 10 110 L 10 10 L 40 50 L 70 10 L 100 50 L 130 10 L 130 110 z" 
          fill="gold" stroke="orange" stroke-width="5"/>
    &lt;/symbol>  
  
  &lt;use xlink:href="#s-crown" x="5" y="7"/> 
&lt;/svg></code></pre> 

Точки фигуры задаются в аттрибуте <code>d</code>.




path

разная обводка

http://codepen.io/yoksel/pen/ivIgt


text, 'image' 