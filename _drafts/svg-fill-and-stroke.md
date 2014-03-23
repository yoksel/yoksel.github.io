---
layout: default
title: SVG&#58; заливка и обводка
type: post
image: 
desc: 

links:
- url: http://www.w3.org/TR/SVG/
  name: w3.org/TR/SVG
---

В SVG заливка и обводка имеют много разных интересных опций, которые предоставляют возможности гораздо шире того, что есть в CSS.
<!--more-->

Например, можно нарисовать SVG-паттерн и использовать его не только в заливке, но и в обводке. Также для них можно указывать разную прозрачность (в CSS это делается полупрозрачными цветами или <code>opacity</code> для всего элемента), также можно управлять пунктирной обводкой, на чем можно построить интересные эффекты с использованием анимации.

В качестве заливки и обводки можно задавать <code>none</code>, <a href="/tsveta">цвета</a>, ключевые слова (<code>currentColor</code> и <code>transparent</code>), а также градиенты и паттерны.

<h4>Fill</h4>

<code>fill</code> - заливка элемента. 

Возможные значения: <code>none</code>, ключевые слова, цвета, паттерны и градиенты.
Значение по умолчанию - <code>black</code>.

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect"><rect width="70" height="70"/></symbol><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%">  <stop offset="0%" stop-color="yellowgreen" />  <stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect" x="20" y="20" fill="hsl(348, 83%, 47%)"/><use xlink:href="#s-rect" x="110" y="20" fill="rgb(255, 215, 0)"/> <use xlink:href="#s-rect" x="20" y="110" fill="url(#g-green)"/><use xlink:href="#s-rect" x="110" y="110" fill="skyblue"/>  </svg>

<pre><code class="language-markup">&lt;svg width="200" height="200">
  &lt;defs>
    &lt;symbol id="s-rect">
      &lt;rect width="70" height="70"/>
    &lt;/symbol>
    &lt;linearGradient id="g-green" 
                   x1="0%" y1="0%" 
                   x2="0%" y2="90%">
        &lt;stop offset="0%" stop-color="yellowgreen" />
        &lt;stop offset="90%" stop-color="green" />
      &lt;/linearGradient>
  &lt;/defs>
  
  &lt;use xlink:href="#s-rect"
       x="20" y="20"
       fill="hsl(348, 83%, 47%)"/> &lt;!-- HSL -->
  &lt;use xlink:href="#s-rect"
       x="110" y="20"
       fill="rgb(255, 215, 0)"/> &lt;!-- RGB -->  
  &lt;use xlink:href="#s-rect"
       x="20" y="110"
       fill="url(#g-green)"/> &lt;!-- Градиент -->
  &lt;use xlink:href="#s-rect"
       x="110" y="110"
       fill="skyblue"/> &lt;!-- Цвет по названию -->  
&lt;/svg></code></pre> 


<h4>fill-rule</h4>

Свойство определяет как будут заливаться сложные фигуры, имеющие пересечения внутри себя. Для простых фигур ни на что не влияет.

Возможные значения: <code>nonzero</code>, <code>evenodd</code>

<div class="clear">
    <div class="column column-left">
        <code>fill-rule="nonzero"</code>

        <svg class="svg" width="200" height="200"><path stroke="orange" stroke-width="5" fill="gold" fill-rule="nonzero" d="M 100,20 L 50,180 180,80 20,80 150,180 z"/></svg>
    </div>
    <div class="column column-right">
        <code>fill-rule="evenodd"</code>
        
        <svg class="svg" width="200" height="200"><path stroke="orange" stroke-width="5" fill="gold" fill-rule="evenodd" d="M 100,20 L 50,180 180,80 20,80 150,180 z"/></svg>
        
    </div>
</div> 

<code>fill-rule="nonzero"</code> интересно ведет себя для фигур из двух путей. Например, если внешний круг нарисован по часовой стрелке, а внутренний в обратном направлении, центральный круг останется без заливки (слева). Если же оба круга нарисованы в одном направлении - фигура зальется полностью (справа):

<div class="clear">
    <div class="column column-left">
        <svg class="svg" width="200" height="200"><g fill="yellowgreen" fill-rule="nonzero" stroke="green" stroke-width="5"><path d="M 20,100 A20,20 0 0,1 180,100 M 20,100 A20,20 0 0,0 180,100 M 150,100 A 50,50 0 0,1 50,100 M 150,100 A 50,50 0 0,0 50,100"/></g></svg>
    </div>
    <div class="column column-right">
        <svg class="svg" width="200" height="200"><g fill="yellowgreen" fill-rule="nonzero" stroke="green" stroke-width="5"><path d="M 20,100 A20,20 0 0,1 180,100 M 20,100 A20,20 0 0,0 180,100 M 50,100 A 50,50 0 0,1 150,100 M 50,100 A 50,50 0 0,0 150,100"/></g></svg>

    </div>
</div> 

<h4>fill-opacity</h4>

