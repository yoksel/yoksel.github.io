---
layout: default
title: Маски в CSS и SVG
type: post
image: 
desc: 

custom_css: css-and-svg-masks.css

links:
- url: http://www.html5rocks.com/en/tutorials/masking/adobe/
  name: CSS Masking
- url: http://thenittygritty.co/css-masking
  name: CSS Masks – How To Use Masking In CSS Now
- url: https://developer.apple.com/library/safari/documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html
  name: Using Masks  
- url: http://tympanus.net/codrops/2013/12/02/techniques-for-creating-textured-text/
  name: Techniques for Creating Textured Text 
- url: http://lea.verou.me/2012/05/text-masking-the-standards-way/
  name: Text masking — The standards way    

---

Разбираясь с возможностями оформления SVG, заинтересовалась темой масок. 
Есть несколько способов обрезать элемент по маске. Одни поддерживаются всеми современными браузерами, другие поддерживаются очень плохо, и пользоваться ими ещё нельзя. В некоторых способах маской может быть текст. Используемые технологии - CSS, SVG + CSS, чистый SVG.
Лучшая поддержка браузерами - у масок, сделанных полностью на SVG.<!--more-->

Не то, чтобы я глубоко изучала вопрос - просто мне хотелось увидеть все способы в одном месте и с информацией о браузерной поддержке, так что я сделала <a href="http://codepen.io/yoksel/full/fsdbu/">это демо</a> - с примерами кода и ссылками на спецификации.

Все способы в нем представлены как есть - без фоллбеков, так что вы можете открыть страницу в интересующем браузере и посмотреть как в нем поддерживается нужный вам способ. Очень надеюсь, что однажды мы увидим все маски работающими во всех современных браузерах.

Маски бывают разных типов: одни позволяют обрезать элемент по векторной фигуре (пути) - <code>clip</code>, <code>clip-path</code>, другие ориентируются на яркость цветов или альфа-канал изображения - <code>mask</code> и <code>mask-image</code>, что позволяет получить маску с размытыми краями. 
Использовать текст в качестве маски можно в SVG <code>clip-path</code>, SVG <code>mask</code>, <code>-webkit-background-clip</code> и SVG <code>fill</code>. Последнее не является маской в прямом смысле слова, но результат выглядит как <code>-webkit-background-clip</code>, и при этом поддерживается всеми современными браузерами.

Все маски вы можете найти на <a href="http://codepen.io/yoksel/full/fsdbu/">демо-странице</a>, я же расскажу только про самые удобные и хорошо поддерживаемые - конечно же, все они на SVG.

<svg class="svg-defs">
      <defs>
        <clipPath id="clipping-star">
          <polygon id="Star-1" points="98.4999978 153.75 38.2520165 185.424245 49.7583542 118.337123 1.01670635 70.8257603 68.3760155 61.037872 98.5000012 1.1379786e-14 128.624005 61.0378871 195.98331 70.8258091 147.241642 118.337136 158.747982 185.424247"/>
        </clipPath>
        <clipPath id="clipping-text">
          <text x="0" y=".88em">Text</text>
        </clipPath>
        <linearGradient id="gradient" x1="0" y1="0" x2 ="110%" y2="0%">
          <stop stop-color="#fff" offset="0"/><stop stop-color="#fff" offset="10%"/>
          <stop stop-color="#AAA" offset="10%"/><stop stop-color="#AAA" offset="20%"/>
          <stop stop-color="#777" offset="20%"/><stop stop-color="#777" offset="30%"/>
          <stop stop-color="#333" offset="30%"/><stop stop-color="#333" offset="40%"/>
          <stop stop-color="#000" offset="40%"/><stop stop-color="#000" offset="50%"/>
          <stop stop-color="#fff" offset="50%"/><stop stop-color="#fff" offset="60%"/>
          <stop stop-color="#AAA" offset="60%"/><stop stop-color="#AAA" offset="70%"/>
          <stop stop-color="#777" offset="70%"/><stop stop-color="#777" offset="80%"/>
          <stop stop-color="#333" offset="80%"/><stop stop-color="#333" offset="90%"/>
          <stop stop-color="#000" offset="90%"/><stop stop-color="#000" offset="100%"/>
        </linearGradient>
        <radialGradient id="gradient-soft"
                    cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" />
          <stop offset="100%" stop-color="#000" />
        </radialGradient>
        <mask id="masking" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
          <rect y="0" width="1" height="1" fill="url(#gradient)" />
          <circle cx=".5" cy=".5" r=".42" fill="black" />
          <circle cx="0" cy=".5" r=".32" fill="black" />
          <circle cx="1" cy=".5" r=".32" fill="black" />
          <circle cx="0" cy=".5" r=".3" fill="gray" />
          <circle cx=".5" cy=".5" r=".4" fill="gray" />
          <circle cx="1" cy=".5" r=".3" fill="gray" />
          <circle cx="0" cy=".5" r=".25" fill="white" />
          <circle cx=".5" cy=".5" r=".35" fill="white" />
          <circle cx="1" cy=".5" r=".25" fill="white" />
        </mask>
        <mask id="masking-soft" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
          <rect y="0"  width="100%" height="100%" fill="url(#gradient-soft)" />
        </mask>
        <pattern id="pattern" 
                 patternUnits="userSpaceOnUse"
                 width="199" height="300" 
                 viewbox="0 0 199 300">
          <image xlink:href="http://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="199" height="300" />
        </pattern>
        <pattern id="pattern-text" patternUnits="userSpaceOnUse" width="450" height="96">
          <text x="0" y="2em"> 
            <tspan x="0" y="1em">Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. 
            </tspan>
            <tspan x="0" y="2em">Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget
            </tspan>
            <tspan x="0" y="3em">Maecenas tempus elit quis sapien tempus, sit amet viverra neque mattis. Quisque a tincidunt mi.
            </tspan>
            <tspan x="0" y="4em">Proin at justo eu ipsum posuere dignissim vel quis eros. Etiam at libero commodo, varius justo quis, interdum erat.
            </tspan>
            <tspan x="0" y="5em">Fusce viverra mollis est, nec euismod ante mattis ut. Aenean eu mauris viverra enim vulputate bibendum. 
            </tspan>
            <tspan x="0" y="6em">Integer velit metus, cursus et commodo sit amet, gravida vitae purus. Sed scelerisque at odio non condimentum. 
            </tspan>
            <tspan x="0" y="7em">Sed neque lacus, rhoncus vitae sem ut, pharetra vestibulum elit. 
            </tspan>
            <tspan x="0" y="8em">Cras ultricies aliquam dolor quis ultrices. Cras eget mauris tincidunt, aliquam erat quis, faucibus augue.
            </tspan>
          </text>
        </pattern> 

   </defs>
</svg>

<div class="wrapper">
  
 <h4>SVG clip-path для SVG элементов</h4>
 <div class="demo-item">
    <div class="demo">
      <svg width="700" height="190">
        <g class="g--clip-path-img"> 
          <image xlink:href="http://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300" />
        </g>  
      
        <g class="g--clip-path-text" transform="translate(220)">
           <foreignObject id="fo-text" x="0" y="4" width="450" height="200">
            Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget adipiscing magna. Nunc massa justo, placerat at porta at, mollis nec eros. Nullam eu justo erat. Curabitur eget rhoncus purus, interdum posuere ligula. Ut ultricies fermentum dignissim. Aliquam et arcu tempus, euismod nisi eu, lobortis est. Integer ultrices aliquet enim eu ultrices. Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget adipiscing magna. Nunc massa justo, placerat at porta at, mollis nec eros. Nullam eu justo erat. Curabitur eget rhoncus purus, interdum posuere ligula. Ut ultricies fermentum dignissim. Aliquam et arcu tempus, euismod nisi eu, lobortis est. Integer ultrices aliquet enim eu ultrices.
          </foreignObject> 
        </g>
      </svg>   
    </div>  
    <div class="text">
      <a href="http://www.w3.org/TR/SVG11/masking.html#EstablishingANewClippingPath">Спецификация</a>
      <br /><br />
      <code>clipPath</code> позволяет использовать векторную маску любой формы. 
      Применение SVG <code>clipPath</code> для HTML-элементов поддерживается только в Firefox, но если перенести разметку в SVG - маска заработает во всех современных браузерах.
      <br><br>
      Фигуры внутри с <code>clipPath</code> можно комбинировать, чтобы получить более сложные, также в <code>clipPath</code> может использоваться текст. Текст маски при этом нельзя выделить и скопировать, а вот текст под маской - можно.
    </div>  
  </div>

  <pre><code class="language-markup">&lt;clipPath id="clipping">
  &lt;polygon points="98.4999978 153.75..."/>
&lt;/clipPath></code></pre>
      <pre><code class="language-css">.item {
  clip-path: url(#clipping);
  }</code></pre>
 
  <h4>SVG mask для SVG элементов</h4>  
  <div class="demo-item item--svg-mask-svg">
    <div class="demo">
      <svg width="200" height="300">
         <g class="g--svg-mask-svg">  
            <image xlink:href="http://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300"/>
         </g>  
      </svg>
      <svg width="200" height="300">
         <g class="g--svg-mask-svg-soft">  
            <image xlink:href="http://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300"/>
         </g>  
      </svg>
    </div>  
    <div class="text">
       
      <a href="http://www.w3.org/TR/SVG11/masking.html#Masking">Specification</a>
      <br /><br />
      <pre><code class="language-markup">&lt;mask id="masking" maskUnits="objectBoundingBox" 
  maskContentUnits="objectBoundingBox">
  &lt;rect y="0" width="1" height="1" fill="url(#gradient)" />
  &lt;circle cx=".5" cy=".5" r=".4" fill="gray" />
  &lt;circle cx=".5" cy=".5" r=".3" fill="white" />
  ...
&lt;/mask></code></pre>
      <pre><code class="language-css">.item {
  mask: url(#masking);
  }</code></pre>
    </div> 
  </div> 

  
  <h4>SVG fill</h4>
  <div class="demo-item">
    <div class="demo">
       <svg width="450" height="170">
        <g class="g--svg-fill"> 
          <text x="0" y=".78em">Text</text>
        </g>   
      </svg>  
      <svg width="450" height="170">
        <g class="g--svg-fill-text"> 
          <text x="0" y=".78em">Text</text>
        </g>   
      </svg>  
    </div>  
    <div class="text">
      
        <a href="http://www.w3.org/TR/SVG/painting.html#FillProperties">Спецификация</a>
       
      <br /><br />
      <pre><code class="language-markup">&lt;pattern id="pattern" patternUnits="userSpaceOnUse"
             width="200" height="300" viewbox="0 0 200 300">
  &lt;image xlink:href="YOUR IMAGE" width="200" height="300" />
&lt;/pattern></code></pre>
      <pre><code class="language-css">text {
  fill: url(#pattern);
  }</code></pre>
    </div> 
  </div> 
</div>







