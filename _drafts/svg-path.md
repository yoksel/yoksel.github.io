---
layout: default
title: SVG-path
type: post
image: 
desc: 

links:
- url: http://www.w3.org/TR/SVG/
  name: w3.org/TR/SVG
- url: http://caniuse.com/#search=svg
  name: Browsers support for SVG  
---

<h4>Path</h4>

Более сложный вариант линии. С помощью <code>path</code> можно рисовать <code>line</code>, <code>polyline</code>, <code>polygon</code>, <code>circle</code> и <code>rect</code>.

В отличие от <code>polygon</code>, фигура не замыкается сама по себе, но это можно сделать с помощью дополнительного параметра.<!--more-->

<svg class="svg" width="142" height="122"><path d="M 10 110 L 10 10 L 40 50 L 70 10 L 100 50 L 130 10 L 130 110 L 10 110" fill="yellow" stroke="gold" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg class="svg" width="142" height="122">
    &lt;path d="M 10 110 L 10 10 L 40 50 L 70 10 L 100 50 L 130 10 L 130 110 L 10 110" 
          fill="yellow" stroke="gold" stroke-width="5"/>
&lt;/svg></code></pre> 


path

разная обводка

reusable, группировка

text 'image' and 'use'."6