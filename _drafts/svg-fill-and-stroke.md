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

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect"><rect width="70" height="70"/></symbol><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%">  <stop offset="0%" stop-color="yellowgreen" />  <stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect" x="20" y="20" fill="hsla(348, 83%, 47%,.3)"/><use xlink:href="#s-rect" x="110" y="20" fill="rgb(255, 215, 0)"/> <use xlink:href="#s-rect" x="20" y="110" fill="url(#g-green)"/><use xlink:href="#s-rect" x="110" y="110" fill="skyblue"/>  </svg>

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
       fill="hsla(348, 83%, 47%,.3)"/> &lt;!-- HSLA -->
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


<h4>Fill-rule</h4>

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

<h4>Fill-opacity</h4>

Управление прозрачностью заливки. Можно задавать значения от 0.0 до 1.0 или в процентах. Правда, Firefox не любит значения в процентах для градиентов (<a href="http://cdpn.io/nstGK">пруфлинк</a>, смотреть в FF).

<svg class="svg" width="200" height="200"><defs><symbol id="s-rect2"><rect width="100" height="100"/></symbol><linearGradient id="g-red" x1="0%" y1="0%" x2="0%" y2="90%"><stop offset="0%" stop-color="orange" /><stop offset="90%" stop-color="crimson" /></linearGradient><linearGradient id="g-green" x1="0%" y1="0%" x2="0%" y2="90%"><stop offset="0%" stop-color="yellowgreen" /><stop offset="90%" stop-color="green" /></linearGradient></defs><use xlink:href="#s-rect2" x="20" y="20" fill="url(#g-red)" fill-opacity=".5"/>  <use xlink:href="#s-rect2" x="50" y="50" fill="hsl(50, 100%, 50%)" fill-opacity=".5"/> <use xlink:href="#s-rect2" x="80" y="80" fill="url(#g-green)" fill-opacity=".5"/></svg>

<pre><code class="language-markup">&lt;!-- ... -->
&lt;use xlink:href="#s-rect"
     x="20" y="20"
     fill="url(#g-red)" fill-opacity=".5"/>
&lt;use xlink:href="#s-rect"
     x="50" y="50"
     fill="hsl(50, 100%, 50%)" fill-opacity=".5"/>
&lt;use xlink:href="#s-rect"
     x="80" y="80"
     fill="url(#g-green)" fill-opacity=".5"/>
&lt;!-- ... --></code></pre>


<h4>Stroke</h4>

Цвет обводки. Значения по умолчанию нет.

<svg class="svg" width="200" height="200"><rect width="160" height="160" x="20" y="20" fill="none" stroke="yellowgreen"/></svg>

<pre><code class="language-markup">&lt;svg width="200" height="200">
  &lt;rect width="160" height="160" x="20" y="20"
        fill="none"
        stroke="yellowgreen"/>
&lt;/svg></code></pre>


<h4>Stroke-width</h4>

Толщина обводки, можно задавать в единицах длины или в процентах.
Значение по умолчанию: 1.

<svg class="svg" width="200" height="200"><rect width="160" height="160" x="20" y="20" fill="none" stroke="yellowgreen" stroke-width="10%"/><rect width="100" height="100" x="50" y="50" fill="none" stroke="gold" stroke-width="10"/></svg>

<pre><code class="language-markup">&lt;svg width="200" height="200">
  &lt;rect width="100" height="100" x="50" y="50"
        fill="none" stroke="gold" 
        stroke-width="10"/>
  &lt;rect width="160" height="160" x="20" y="20"
        fill="none" stroke="yellowgreen" 
        stroke-width="10%"/>      
&lt;/svg></code></pre>

<h4>Stroke-linecap</h4>

Свойство определяет как будут выглядеть концы линий. 
Возможные значения: <code>butt</code>, <code>round</code>, <code>square</code>.
Значение по умолчанию: <code>butt</code>.

<svg class="svg" width="200" height="205"><symbol id="s-path-guide"><circle r="3" cx="30" cy="15"/><circle r="3" cx="170" cy="15"/><path d="M 30 15 170 15" stroke-width="2"/></symbol><symbol id="s-path"><path d="M 30 15 170 15" stroke-width="30"/></symbol><use xlink:href="#s-path" stroke="orangered" y="20" stroke-linecap="butt"/><use xlink:href="#s-path" stroke="olivedrab" y="85" stroke-linecap="round"/><use xlink:href="#s-path" stroke="steelblue" y="150" stroke-linecap="square"/><g class="guides"><use xlink:href="#s-path-guide" y="20" stroke="orange" fill="orange"/><use xlink:href="#s-path-guide" y="85" stroke="yellowgreen" fill="yellowgreen"/><use xlink:href="#s-path-guide" y="150" stroke="skyblue" fill="skyblue"/></g></svg>

<pre><code class="language-markup">&lt;!-- ... -->
  &lt;use xlink:href="#s-path" stroke="orangered" y="20"
       stroke-linecap="butt"/>
  
  &lt;use xlink:href="#s-path" stroke="olivedrab" y="85"
       stroke-linecap="round"/>
  
  &lt;use xlink:href="#s-path" stroke="steelblue" y="150"
       stroke-linecap="square"/>
  &lt;!-- ... --></code></pre>

<h4>Stroke-linejoin</h4>

Свойство определяет как будут выглядеть соединения линий на углах.
Возможные значения: <code>miter</code>, <code>round</code>, <code>bevel</code>.
Значение по умолчанию: <code>miter</code>.

<svg class="svg" width="215" height="300"><symbol id="s-corner-guide"><circle r="3" cx="50" cy="100"/><circle r="3" cx="164" cy="100"/><path d="M 30 50 h 80 v 80" stroke-width="2" fill="none" transform="rotate(-45 100 50)"/></symbol><symbol id="s-corner"><path d="M 30 50 h 80 v 80" stroke-width="30" fill="none" transform="rotate(-45 100 50)"/></symbol><use xlink:href="#s-corner" stroke="orangered" y="0" stroke-linejoin="miter"/><use xlink:href="#s-corner" stroke="olivedrab" y="80" stroke-linejoin="round"/><use xlink:href="#s-corner" stroke="steelblue" y="160" stroke-linejoin="bevel"/><g class="guides"> <use xlink:href="#s-corner-guide" y="0" stroke="orange" fill="orange"/> <use xlink:href="#s-corner-guide" y="80" stroke="yellowgreen" fill="yellowgreen"/><use xlink:href="#s-corner-guide" y="160" stroke="skyblue" fill="skyblue"/></g></svg>

<pre><code class="language-markup">&lt;!-- ... -->
  &lt;use xlink:href="#s-corner" stroke="orangered" y="0"
       stroke-linejoin="miter"/>
  
  &lt;use xlink:href="#s-corner" stroke="olivedrab" y="80"
       stroke-linejoin="round"/>
  
  &lt;use xlink:href="#s-corner" stroke="steelblue" y="160"
       stroke-linejoin="bevel"/>
  &lt;!-- ... --></code></pre>

<h4>Stroke-dasharray</h4>

Свойство, управляющее видом пунктирной обводки. Можно задавать в единицах длины или в процентах.
Если задано одно значение, второе значение считается равным первому. Например, <code>stroke-dasharray="1"</code> нарисует линию из отрезков длиной одну единицу разделенных пробелами такой же ширины.

Примеры разных пунктирных линий:

<svg class="svg" width="300" height="160"><path d="M 20 20 h 260" stroke="purple" stroke-width="1" stroke-dasharray="1" /><path d="M 20 40 h 260" stroke="mediumspringgreen" stroke-width="15" stroke-dasharray="1 3" /><path d="M 20 60 h 260" stroke="orangered" stroke-width="1" stroke-dasharray="5%" /><path d="M 20 80 h 260" stroke="green" stroke-width="1" stroke-dasharray="1 5" /><path d="M 20 100 h 260" stroke="steelblue" stroke-width="1" stroke-dasharray="2 7 6" /> <path d="M 20 120 h 260" stroke="orange" stroke-width="5" stroke-dasharray="5" /> <path d="M 20 140 h 260" stroke="mediumseagreen" stroke-width="1" stroke-dasharray="12% 5%" /></svg>

<pre><code class="language-markup">&lt;svg width="300" height="160">
  &lt;path d="M 20 20 h 260"
        stroke="purple" stroke-width="1"
        stroke-dasharray="1" />
  &lt;path d="M 20 40 h 260"
        stroke="mediumspringgreen" stroke-width="15"
        stroke-dasharray="1 3" />
  &lt;path d="M 20 60 h 260"
        stroke="orangered" stroke-width="1"
        stroke-dasharray="5%" />
  &lt;path d="M 20 80 h 260"
        stroke="green" stroke-width="1"
        stroke-dasharray="1 5" />
  &lt;path d="M 20 100 h 260"
        stroke="steelblue" stroke-width="1"
        stroke-dasharray="2 7 6" />  
  &lt;path d="M 20 120 h 260"
        stroke="orange" stroke-width="5"
        stroke-dasharray="5" />
  &lt;path d="M 20 140 h 260"
        stroke="mediumseagreen" stroke-width="1"
        stroke-dasharray="12% 5%" />
&lt;/svg></code></pre>  

Используя обводку и простые фигуры можно получить удивительные вещи:

<p data-height="304" data-theme-id="4974" data-slug-hash="bwDzx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/bwDzx/'>SVG-patterns</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

