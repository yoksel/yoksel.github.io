---
layout: default
title: SVG
type: post
image: 
desc: 

links:
- url: http://caniuse.com/#search=svg
  name: Browsers support for SVG
- url: http://css-tricks.com/svg-fallbacks/
  name: SVG Fallbacks
- url: http://modernizr.com/
  name: Modernizr  
- url: http://lynn.ru/examples/svg/
  name: Трюки с SVG и тегом image
- url: caniuse.com/#search=svg
  name: Support SVG in browsers
---

SVG - это формат векторных изображений, основанный на XML. 

Спецификация: <a href="http://www.w3.org/TR/SVG/">w3.org/TR/SVG</a>


SVG имеет массу преимуществ:

- векторные изображения масштабируются без потери качества;
- SVG, как правило, весит меньше, чем PNG-версия того же изображения;
- содержимое рисунка описывается на XML, SVG-файл можно открыть в текстовом редакторе и увидеть человекопонятный код;
- поэтому SVG-изображение не только нарисовать в векторном редакторе, но и написать руками;
- SVG-файл - это всегда исходник. В отличие от растровой графики, для его редактирования не требуется исходный PSD-файл, содержимое файла не склеивается в один слой, поэтому его всегда можно просто открыть и отредактировать;
- внутри SVG-файла можно описывать тени и градиенты, причем использовать их можно не только внутри этого файла, но также можно применять и к внешним элементам. 
- внутри файла могут находиться CSS и JavaScript. 

<!--more-->

Пример SVG:

<p data-height="263" data-theme-id="4974" data-slug-hash="vzBxp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/vzBxp'>SVG Car</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

SVG хорошо поддерживается всеми современными браузерами и его уже вполне можно использовать, предусмотрев PNG-версии для старых браузеров. 


<h4>Способы вставки SVG в HTML:</h4>

<h5>Embed/object/iframe</h5>

<table class="marg--bottom">
    <thead>
        <tr>
            <td>Embed:</td>
            <td>Object:</td>
            <td>Iframe:</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><embed src="../assets/img/svg/sign.svg" width="199" height="200"></td>
            <td><object type="image/svg+xml" data="../assets/img/svg/sign.svg" width="199" height="200"></object></td>
            <td><iframe src="../assets/img/svg/sign.svg" width="199px" height="200px"></iframe></td>
        </tr>
    </tbody>
</table>

<h6>Embed:</h6>
<pre><code class="language-markup">&lt;embed src="your.svg" 
        width="199" height="200"></code></pre> 

<h6>Object:</h6>
<pre><code class="language-markup">&lt;object data="your.svg" 
        type="image/svg+xml" width="199" height="200">&lt;/object></code></pre>

<h6>Iframe:</h6>
<pre><code class="language-markup">&lt;iframe src="your.svg" 
        width="199px" height="200px">&lt;/iframe></code></pre> 

 <b>Плюсы:</b>

 - содержимое SVG доступно для JavaScript (ПРОВЕРИТЬ!!!);
 - хорошая поддержка браузерами (все, кроме IE8 и ниже)

<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
            
            <td class="op"> 9+ </td>
            <td class="opMin"> 5+ </td>
            <td class="opMob"> 10+ </td>

            <td class="chrome"> 4+ </td>
            <td class="ff"> 3+</td>
            <td class="saf"> 3.2+ </td>            
        </tr>
    </tbody>
</table>

<h5>IMG</h5>

<img src="../assets/img/svg/sign.svg">

<pre><code class="language-markup">&lt;img src="your.svg"></code></pre>     

<b>Плюсы:</b>
- удобно в использовании

<b>Минусы:</b>
- содержимое недоступно для JS/CSS

<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
            
            <td class="op"> 9+ </td>
            <td class="opMin"> 5+ </td>
            <td class="opMob"> 10+ </td>

            <td class="chrome"> 4+ </td>
            <td class="ff"> 4+</td>
            <td class="saf"> 4+ </td>
        </tr>
    </tbody>
</table>

<h5>Css backgrounds</h5>

<div style="width: 199px; height: 200px; margin-bottom: 1em; background-image: url(../assets/img/svg/sign.svg)"></div>

<pre><code class="language-css">background-image: url(your.svg);</code></pre>


<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
            
            <td class="op"> 12+ </td>
            <td class="opMin"> - </td>
            <td class="opMob"> 16+ </td>

            <td class="chrome"> 5+ </td>
            <td class="ff"> 24+</td>
            <td class="saf"> 5+ </td>
            
        </tr>
    </tbody>
</table>

В 12-й Опере SVG-фон может исчезнуть, если задать элементу рамку. Странно, да : )

<h5>Inline SVG</h5>

<svg width="199" height="200"><g fill="#7ED321"><path d="M110 10h-20v76.567l-.605-.605-62.933 62.933 14.142 14.142 49.395-49.395v76.358h20v-76.358l49.395 49.395 14.142-14.142-62.933-62.933-.605.605v-76.567z" /><path d="M99.5 0c-54.965 0-99.5 44.784-99.5 100s44.535 100 99.5 100 99.5-44.784 99.5-100-44.535-100-99.5-100zm0 20c43.894 0 79.5 35.805 79.5 80s-35.606 80-79.5 80-79.5-35.805-79.5-80 35.606-80 79.5-80z" /></g></svg>

<b>Поддержка браузерами:</b>

<table class="table--with-border table--w-auto marg--bottom">
    <thead>
        <tr>
            <td>IE</td>
            
            <td>Opera</td>
            <td>Opera Mini</td>
            <td>Opera Mobile</td>
            
            <td>Chrome</td>
            <td>Firefox</td>
            <td>Safari</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td class="ie"> 9+ </td>
        
            <td class="op"> 11.6+ </td>
            <td class="opMin"> - </td>
            <td class="opMob"> 12+ </td>

            <td class="chrome"> 7+ </td>
            <td class="ff"> 4+</td>
            <td class="saf"> 5.1+ </td>
            
        </tr>
    </tbody>
</table>


<i>Примеры в посте вставлены как есть, без фолбеков. Можно открыть страницу в интересующем браузере и посмотреть как ведут себя разные способы вставки.</i>


<h4>Отображение в старых браузерах</h4>

- <h5>Хак для элемента с фоном:</h5>

<pre><code class="language-css">div {
    background-image: url(your.png); /* PNG для IE6-8 */
    background-image: url(your.svg), none;
    }</code></pre>

Вторая строка сработает в браузерах с поддержкой CSS3, старые её проигнорируют и покажут PNG.

- <h5>способ с <code>image</code></h5>

В этом способе браузеры сами определяют что им показывать. Современные выберут аттрибут <code>xlink:href</code> и покажут SVG, старые выберут <code>src</code> и покажут растровую версию:

<pre><code class="language-markup">&lt;svg width="200px" height="200px">
    &lt;image xlink:href="your.svg"
           src="your.png"
           width="200px" height="200px"/>
&lt;/svg></code></pre>

Способ найден здесь: <a href="http://lynn.ru/examples/svg/">lynn.ru/examples/svg/</a>.
Также есть статья от Криса Коера <a href="http://css-tricks.com/svg-fallbacks/">Svg fallbacks</a>, в которой он анализирует этот вариант вставки и предлагает другие варианты. 

Способ хорошо работает в IE8 и Opera Mini.
Минус способа - загрузка обоих файлов в IE9-11, хотя отобразится только SVG. Также есть проблемы с отображением в 12-й Опере: вместо картинки иногда загружается вот такое:

<img src="http://img-fotki.yandex.ru/get/9831/5091629.9d/0_7f9f6_9033810_M.png" alt="SVG in Opera 12">

- <h5>Modernizr</h5>
Элементы, содержащие SVG-графику, заворачиваются в <code>div.svg</code> (например).
Затем определяем поддержку SVG с помощью <a href="http://modernizr.com/">Modernizr</a>, браузеры без SVG определяем по классу <code>.no-svg</code>, дальше немного CSS:

<pre><code class="language-css">/* Задаем обертке размеры и фон в PNG: */
.no-svg .svg {
  width: 200px;
  height: 200px;
  background: url(your.png); /* PNG-заглушка */
  }
/* Скрываем содержимое обертки (иначе будут отображаться
иконки незагрузившихся картинок) */    
.no-svg .svg IFRAME,
.no-svg .svg OBJECT,
.no-svg .svg EMBED,
.no-svg .svg IMG {
  display: none;
} </code></pre>

Стили сработают только в браузерах, не поддерживающих SVG.
 
Хорошее решение для IE8 и старше. 
Проблема может возникнуть с Opera Mini. (с Opera 12 (????) и старше и ???!!!)
Она имеет частичную поддержку SVG, поэтому не будет селектора <code>.no-svg</code>, и при этом она не поддерживает SVG в CSS-фонах и Inline Svg, так что они не отобразятся.

Для IE также можно использовать <a href="http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/">вот такое определение версии браузера</a>.

- <h5>:root</h5>
Селектор <code>:root</code> сработает только в браузерах с поддержкой CSS3, следовательно с его помощью можно отфильтровать стили для старых и для новых браузеров.

<pre><code class="language-css">/* По умолчанию показываем PNG: */
.svg {
  width: 200px; 
  height: 200px;
  background: url(your.png);
}

/* Контейнеры с SVG скрыты. */
.svg IFRAME,
.svg OBJECT,
.svg EMBED,
.svg IMG {
  display: none;  
}

/* Включаем содержимое для браузеров с поддержкой CSS3 */
:root IFRAME,
:root OBJECT,
:root EMBED,
:root IMG {
  display: inline-block;
}
</code></pre>

Как и предыдущее решение, подойдет для IE8 и старше, но не поможет в Opera Mini, потому что она поддерживаeт CSS3, поэтому не будет заглушек для элементов с SVG-фоном и инлайновым SVG. 

- <h5>решение для Opera на Presto (например, 12 и Mini)</h5>

В Opera 12 SVG-фоны могут вести себя странно, местами до сильного. Совершенно невинный CSS может привести к проблемам отрисовки векторых фонов при прокрутке страницы. Мне удавалось получить такое:

<img src="http://img-fotki.yandex.ru/get/9746/5091629.9d/0_7f9f8_dff062ac_L.png" alt="">
Действующий пример можно увидеть тут: <a href="http://jsbin.com/winag/2/edit">http://jsbin.com/winag/1/edit</a>.
<i>Откройте ссылку в Opera 12 и прокрутите страницу вверх-вниз.</i>

В Opera Mini большие проблемы c фоновым SVG, а инлайновый не поддерживается совсем.

Opera Mini и фоновый SVG:
<img src="http://img-fotki.yandex.ru/get/9819/5091629.9d/0_7f9f7_19c1f3e9_L.png" alt="">

На этот случай можно использовать хак, который сработает только в Опере:

<pre><code class="language-css">doesnotexist:-o-prefocus, .selector {
  background-image: url(your.png);
}</code></pre>

<a href="http://www.opera.com/docs/specs/presto2.12/css/o-vendor/">opera.com/docs/specs/presto2.12/css/o-vendor</a>

- <h5>решение только для Opera Mini</h5>

<pre><code class="language-css">@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0) { 
  .selector {
    background-image: url(your.png);
  }
}</code></pre>

Это позволит задать фоновый PNG для блоков, которые содержат SVG-фон или инлайновый SVG.

<!-- http://jsbin.com/velix/1/edit -->

---------


<div style="border: 2px solid tomato">ДОБАВИТЬ:

- доступность для JS <br>
- доступность для CSS</div>

http://stackoverflow.com/questions/4476526/do-i-use-img-object-or-embed-for-svg-files








