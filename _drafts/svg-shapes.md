---
layout: default
title: SVG-фигуры, трансформации, способы группировки
type: post
image: 
desc: 

links:
- url: http://www.w3.org/TR/SVG/
  name: w3.org/TR/SVG
- url: http://caniuse.com/#search=svg
  name: Browsers support for SVG
- url: http://www.adobe.com/ru/products/illustrator.html
  name: Adobe Illustrator
- url: http://www.bohemiancoding.com/sketch/
  name: Sketch
- url: http://www.inkscape.org/en/
  name: Inkscape  
---

<a href="/svg">Начало про SVG</a>

Писать SVG довольно просто. Для рисования используются простые фигуры: <code>rect</code>, <code>polygon</code>, <code>circle</code>, <code>ellipse</code>, а также <code>line</code>, <code>polyline</code> и <code>path</code>. <!--more-->
Задаем выбранную фигуру, определяем её размеры и координаты, затем добавляем фон и обводку.

Следует отметить, что писать код руками совершенно не обязательно: с этим гораздо лучше справятся векторные редакторы, например, мощный, но платный <a href="http://www.adobe.com/ru/products/illustrator.html">Adobe Illustrator</a>, бесплатный, но не такой удобный <a href="http://www.inkscape.org/en/">Inkscape</a>, немного платный, но довольно симпатичный <a href="http://www.bohemiancoding.com/sketch/">Sketch</a>. Но имеет смысл хотя бы попробовать, потому что это а) интересно, б) полезно: навыки могут пригодиться, если надо нарисовать что-то простое, подправить код в отсутствие под рукой векторного редактора или вы хотите взаимодействовать с SVG через JavaScript.

Размеры и координаты задаются для разных фигур по-разному, а вот фон и обводка - одинаковы для всех:

<code>fill</code> - заливка. Можно задать цвет любым способом. Прозрачность - <code>none</code> или <code>transparent</code>. Цвет по умолчанию - черный;
<code>stroke</code> - цвет обводки;
<code>stroke-width</code> - толщина обводки, по умолчанию - 1. Без <code>stroke</code> не работает.

Ниже можно увидеть примеры простых SVG-фигур и трансформации, которые к ним можно применить.

<h4>Rect</h4>  

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" fill="skyblue" stroke="steelblue" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;rect x="5" y="5" width="220" height="130" 
          fill="skyblue" stroke="steelblue" stroke-width="5" />
&lt;/svg></code></pre>       

<code>x</code>,<code>y</code> - координаты левого верхнего угла фигуры;
<code>width</code>, <code>height</code> - ширина и высота прямоугольника.

Закругленные уголки задаются параметрами <code>rx</code> и <code>ry</code>. Если задан только один из параметров, скругление по вертикали и по горизонтали будет одинаковым:

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" rx="20" fill="yellowgreen" stroke="green" stroke-width="5" /></svg>
  
<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;rect x="5" y="5" width="220" height="130" rx="20" 
          fill="yellowgreen" stroke="green" stroke-width="5" />
&lt;/svg></code></pre> 

Если заданы оба параметра (и они таки разные), радиус скругления будет разным:

<svg class="svg" width="230" height="140"><rect x="5" y="5" width="220" height="130" rx="10" ry="50" fill="khaki" stroke="darkkhaki" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;rect x="5" y="5" width="220" height="130" rx="10" ry="50" 
          fill="khaki" stroke="darkkhaki" stroke-width="5" />
&lt;/svg></code></pre> 

<h4>Polygon</h4>

<svg class="svg" width="230" height="140"><polygon points="5,135 115,5 225,135" fill="violet" stroke="purple" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
    &lt;polygon points="5,135 115,5 225,135" 
             fill="violet" stroke="purple" stroke-width="5" />
&lt;/svg></code></pre> 

<svg class="svg" width="140" height="130"><polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41" fill="turquoise" stroke="lightseagreen" stroke-width="5" /></svg>
  
<pre><code class="language-markup">&lt;svg width="140" height="130">
    &lt;polygon points="70,5 90,41 136,48 103,80 111,126 70,105 29,126 36,80 5,48 48,41"        
             fill="turquoise" stroke="lightseagreen" stroke-width="5" />
&lt;/svg>
  </code></pre> 

В <code>points</code> задаются <code>x,y</code>-координаты вершин фигуры, через пробел.

<code>polygon</code> замыкается сам по себе, последнюю точку можно не указывать.

<h4>Circle</h4>

<svg class="svg" width="140" height="140"><circle r="65" cx="70" cy="70" fill="orangered" stroke="crimson" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="140" height="140">
     &lt;circle r="65" cx="70" cy="70" 
             fill="orangered" stroke="crimson" stroke-width="5" />
&lt;/svg></code></pre> 

<code>r</code> - радиус круга;
<code>cx</code>, <code>cy</code> - координаты центра круга.

<svg class="svg" width="230" height="140"><ellipse rx="110" ry="60" cx="115" cy="70" fill="gold" stroke="orange" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg width="230" height="140">
     &lt;ellipse rx="110" ry="60" cx="115" cy="70" 
              fill="gold" stroke="orange" stroke-width="5" />
&lt;/svg></code></pre> 

<code>rx</code>, <code>ry</code> - горизонтальный и вертикальный радиусы эллипса;
<code>cx</code>, <code>cy</code> - координаты центра эллипса.

Более сложные фигуры можно сделать из сочетания простых:

<svg class="svg" width="250" height="210"><g fill="#333"><ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/><ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/><circle r="67" cx="122" cy="125"/></g></svg>

При этом стиль фигур можно задать один раз для всей группы, а не отдельно для каждой фигуры:

<pre><code class="language-markup">&lt;svg width="250" height="210" style="border: 1px solid">
    &lt;g fill="#333">
      &lt;ellipse rx="45" ry="37" cx="55" cy="60" transform="rotate(-45, 55, 55)"/>
      &lt;ellipse rx="45" ry="37" cx="190" cy="60" transform="rotate(45, 190, 55)"/>
      &lt;circle r="67" cx="122" cy="125"/>
     &lt;/g>
&lt;/svg></code></pre> 


<h4>Transform</h4>

SVG-фигуры можно видоизменять с помощью свойства <code>transform</code>. 

Возможные значения: <code>translate</code>, <code>scale</code>, <code>rotate</code>, <code>skewX</code>, <code>skewY</code>, <code>matrix</code>.

Можно задавать несколько трансформаций через запятую или через пробел.

<h5>translate(tx [ty])</h5>

Если второй параметр не задан, он равен 0.

<div class="clear">
    <div class="column column-left">
        <code>translate(100)</code>

        <svg class="svg" width="250" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="translate(100)"/></svg> 
    </div>
    <div class="column column-right">
        <code>translate(70, 70)</code>

        <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="translate(70, 70)"/></svg>        
    </div>
</div>       


<h5>scale(<i>sx [sy]</i>)</h5>

Если второй параметр не задан, он равен первому.

<div class="clear">
    <div class="column column-left">
        <code>scale(1.5)</code>

        <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="scale(1.5)"/></svg>
    </div>
    <div class="column column-right">
        <code>scale(1.5, .5)</code>

        <svg class="svg" width="200" height="200"><rect x="5" y="5" width="120" height="120" fill="hsla(120,100%,50%,.2)"/><rect x="5" y="5" width="120" height="120" fill="hsla(50,100%,50%,.6)" transform="scale(1.5, .5)"/></svg>
    </div>
</div>        

<h5>rotate(rotate-angle [cx cy])</h5>

Если координаты центра поворота не заданы, они равны <code>0 0</code> - это левый верхний угол SVG-изображения.

<div class="clear">
    <div class="column column-left">
        <code>rotate(45)</code>
  
      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="rotate(45)"/></svg>
    </div>
    <div class="column column-right">
        <code>rotate(45 100 100)</code>

        <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)"transform="rotate(45 100 100)"/></svg>
    </div>
</div>        

<h5>skewX(<i>skew-angle</i>), skewY(<i>skew-angle</i>)</h5>

<div class="clear">
    <div class="column column-left">
      <code>skewX(5)</code>

      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)"transform="skewX(5)"/></svg>
    </div>

    <div class="column column-right">
      <code>skewY(5)</code>
      
      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="skewY(5)"/></svg>
    </div>
</div>

<h5>matrix(a b c d e f)</h5>

<div class="clear">
    <div class="column column-left">
      <code>matrix(.3 0 0 .95 55 25)</code>
      
      <svg class="svg" width="200" height="200"><rect x="25" y="25" width="150" height="150" fill="hsla(120,100%,50%,.2)"/><rect x="25" y="25" width="150" height="150" fill="hsla(50,100%,50%,.6)" transform="matrix(.3 0 0 .95 55 25)"/></svg>
    </div>
</div>    
 

Также можно рисовать простыми линиями.

<h4>Line</h4>

<svg class="svg" width="230" height="140"><line x1="220" y1="10" x2="10" y2="130" stroke="violet" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg>
    &lt;line x1="220" y1="10" x2="20" y2="130" stroke="violet" stroke-width="5" />
&lt;/svg></code></pre>  

<code>x1</code>, <code>y1</code>, <code>x2</code>, <code>y2</code> - координаты начала и конца линии.

<h4>Polyline</h4>
 
<svg class="svg" width="260" height="140"><polyline points="5,135 30,5 55,135 80,5, 105,135 130,5, 155,135 180,5, 205,135 230,5, 255,135" stroke="orangered" fill="none" stroke-width="5" /></svg>

<pre><code class="language-markup">&lt;svg>
    &lt;polyline points="5,135 30,5 55,135 80,5, 105,135 130,5, 155,135 180,5, 205,135 230,5, 255,135" 
              fill="none" stroke="orangered" stroke-width="5" />
&lt;/svg></code></pre> 

В <code>points</code> задаются <code>x,y</code>-координаты точек, каждая точка через пробел.


SVG-фигуры можно группировать, чтобы удобно структурировать файл. Для этих целей существует несколько тегов разного назначения.

<h4>g</h4>

Тэг <code>g</code> служит для группировки фигур по смыслу, чтобы поддерживать прозрачную структуру документа. Группа элементов может быть использована повторно.

<svg width="275" height="100" class="svg"><g id="to-sun"><circle fill="purple" r="20" cx="25" cy="25"/><circle fill="crimson" r="20" cx="70" cy="25"/><circle fill="red" r="20" cx="115" cy="25"/><circle fill="orange" r="20" cx="160" cy="25"/><circle fill="gold" r="20" cx="205" cy="25"/><circle fill="yellow" r="20" cx="250" cy="25"/></g><g id="to-night"><circle fill="greenyellow" r="20" cx="25" cy="70"/><circle fill="yellowgreen" r="20" cx="70" cy="70"/><circle fill="green" r="20" cx="115" cy="70"/><circle fill="steelblue" r="20" cx="160" cy="70"/><circle fill="darkviolet" r="20" cx="205" cy="70"/><circle fill="purple" r="20" cx="250" cy="70"/></g></svg>

<pre><code class="language-markup">&lt;svg width="275" height="100">
  /* Группа 1 */
  &lt;g id="to-sun">
    &lt;circle fill="purple" r="20" cx="25" cy="25"/>
    &lt;circle fill="crimson" r="20" cx="70" cy="25"/>
    &lt;circle fill="red" r="20" cx="115" cy="25"/>
    &lt;circle fill="orange" r="20" cx="160" cy="25"/>
    &lt;circle fill="gold" r="20" cx="205" cy="25"/>
    &lt;circle fill="yellow" r="20" cx="250" cy="25"/>
  &lt;/g>
  /* Группа 2 */
  &lt;g id="to-night">
    &lt;circle fill="greenyellow" r="20" cx="25" cy="70"/>
    &lt;circle fill="yellowgreen" r="20" cx="70" cy="70"/>
    &lt;circle fill="green" r="20" cx="115" cy="70"/>
    &lt;circle fill="steelblue" r="20" cx="160" cy="70"/>
    &lt;circle fill="darkviolet" r="20" cx="205" cy="70"/>
    &lt;circle fill="purple" r="20" cx="250" cy="70"/>
  &lt;/g>
&lt;/svg>
</code></pre> 

Группе, как и фигурам, можно задавать заливку и рамки. Стиль будет работать для фигур внутри группы, у которых они не заданы:

<svg class="svg" width="170" height="50"><g id="to-sun" fill="tomato"><ellipse rx="30" ry="10" cx="25" cy="25" transform="rotate(-45 25 25)"/><ellipse rx="30" ry="10" cx="105" cy="25" transform="rotate(-45 105 25)"/></g><g id="to-sun" fill="skyblue"><ellipse rx="30" ry="10" cx="65" cy="25" transform="rotate(45 65 25)"/><ellipse rx="30" ry="10" cx="145" cy="25" transform="rotate(45 145 25)"/></g</svg>

<pre><code class="language-markup">&lt;svg width="170" height="50">
  /* Красные фигуры */
  &lt;g id="to-sun" fill="tomato">
    &lt;ellipse rx="30" ry="10" cx="25" cy="25" transform="rotate(-45 25 25)"/>
    &lt;ellipse rx="30" ry="10" cx="105" cy="25" transform="rotate(-45 105 25)"/>
  &lt;/g>
  /* Голубые фигуры */
  &lt;g id="to-sun" fill="skyblue">
    &lt;ellipse rx="30" ry="10" cx="65" cy="25" transform="rotate(45 65 25)"/>
    &lt;ellipse rx="30" ry="10" cx="145" cy="25" transform="rotate(45 145 25)"/>
  &lt;/g>
&lt;/svg></code></pre> 

<h4>defs</h4>

Тег <code>defs</code> служит хранилищем элементов и эффектов, которые будут использоваться позже. Содержимое тега не отображается на странице.

<svg class="svg" width="200" height="200"><defs><g><linearGradient id="g1" x1="0%" y1="0%" x2="90%" y2="90%"><stop stop-color="crimson" offset="0%"/><stop stop-color="gold" offset="100%"/></linearGradient><linearGradient id="g2" x1="0%" y1="0%" x2="90%" y2="90%"><stop stop-color="yellowgreen" offset="0%"/><stop stop-color="green" offset="100%"/></linearGradient></g><g><circle fill="url(#g1)" r="50" id="sun"/><rect width="200" height="70" id="rect" fill="url(#g2)"/></g></defs>
<use xlink:href="#sun" x="120" y="60"/><use xlink:href="#rect" x="0" y="110" transform="rotate(10 100 110)"/></svg>

<pre><code class="language-markup">&lt;svg width="200" height="200">
  /* Скрытый контейнер для эффектов и фигур */
  &lt;defs>
    /* Группа градиентов */
    &lt;g>
      &lt;linearGradient id="g1" x1="0%" y1="0%" x2="90%" y2="90%">
        &lt;stop stop-color="crimson" offset="0%"/>
        &lt;stop stop-color="gold" offset="100%"/>
      &lt;/linearGradient>
      &lt;linearGradient id="g2" x1="0%" y1="0%" x2="90%" y2="90%">
        &lt;stop stop-color="yellowgreen" offset="0%"/>
        &lt;stop stop-color="green" offset="100%"/>
      &lt;/linearGradient>
    &lt;/g>
    /* Группа фигур. Она не отображается на странице */
    &lt;g>
      &lt;circle fill="url(#g1)" r="50" id="sun"/>
      &lt;rect width="200" height="70" id="rect" fill="url(#g2)"/>
    &lt;/g>
  &lt;/defs>
  
  /* Использование фигур */
  &lt;use xlink:href="#sun" x="120" y="60"/> 
  &lt;use xlink:href="#rect" x="0" y="110" transform="rotate(10 100 110)"/> 
&lt;/svg></code></pre> 

<h4>symbol</h4>

Символ - это группа фигур, представляющая собой единое целое. Так же, как и <code>defs</code>, не отображается на странице, и так же, как <code>g</code>, может быть использована ещё раз.

<svg class="svg" width="235" height="170"><defs><g><circle fill="gold" r="30" id="yellowball"/></g><symbol id="mouth"><polyline points="15 15 5 10 15 5" stroke="crimson" fill="none" stroke-width="3"/></symbol><symbol id="bird"><g stroke="brown"><polyline points="0 0 0 25" stroke-width="3" transform="translate(25 100)"/><polyline points="0 0 0 25" stroke-width="3" transform="translate(45 100)"/><polyline points="0 0 12 0" stroke-width="3" transform="translate(19 125)"/><polyline points="0 0 12 0" stroke-width="3" transform="translate(40 125)"/></g><use xlink:href="#mouth" x="83" y="35"/><use xlink:href="#yellowball" x="90" y="55" transform="scale(.75)"/><use xlink:href="#yellowball" x="35" y="75" width="100"/><polyline points="55 70 45 90 20 80" stroke="orange" stroke-width="3" fill="none"/><circle fill="black" r="5" cx="75" cy="35"/><circle fill="gray" r="1" cx="77" cy="35"/></symbol></defs><use xlink:href="#bird" x="0" y="15"/><use xlink:href="#bird" x="100" y="35" transform="translate(330 -20) scale(-1,1)"/></svg>

<pre><code class="language-markup">&lt;svg width="235" height="170">
  &lt;defs>
    &lt;g>
      &lt;circle fill="gold" r="30" id="yellowball"/>
    &lt;/g>
    /* Описание символа */
    &lt;symbol id="mouth">
      &lt;polyline points="15 15 5 10 15 5" stroke="crimson" fill="none" stroke-width="3"/>  
    &lt;/symbol>
    /* Описание символа */
    &lt;symbol id="bird">
      &lt;g stroke="brown">
        &lt;polyline points="0 0 0 25" stroke-width="3" transform="translate(25 100)"/>
        &lt;polyline points="0 0 0 25" stroke-width="3" transform="translate(45 100)"/>
        &lt;polyline points="0 0 12 0" stroke-width="3" transform="translate(19 125)"/>
        &lt;polyline points="0 0 12 0" stroke-width="3" transform="translate(40 125)"/>
      &lt;/g> 
      &lt;use xlink:href="#mouth" x="83" y="35"/>
      &lt;use xlink:href="#yellowball" x="90" y="55" transform="scale(.75)"/>
      &lt;use xlink:href="#yellowball" x="35" y="75" width="100"/>
      &lt;polyline points="55 70 45 90 20 80" stroke="orange" stroke-width="3" fill="none"/>
      &lt;circle fill="black" r="5" cx="75" cy="35"/>
      &lt;circle fill="gray" r="1" cx="77" cy="35"/>
    &lt;/symbol>  
  &lt;/defs>

  /* Использование символа */
  &lt;use xlink:href="#bird" x="0" y="15"/>
  /* Ещё раз испольуем символ, повернув его по горизонтали */
  &lt;use xlink:href="#bird" x="100" y="35" transform="translate(330 -20) scale(-1,1)"/>
&lt;/svg></code></pre> 
