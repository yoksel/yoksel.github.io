---
layout: default
title: Инлайновые стили в background-image
type: post
image: https://img-fotki.yandex.ru/get/41743/5091629.a4/0_90dda_849784af_orig
desc: 'Игралась с кодами, обнаружила удивительное: оказывается, внутри CSS-свойства background можно использовать другие CSS-свойства, например, box-shadow, outline, transform и даже ещё один background!'

tags: [svg, gradients, box-shadow, experiments, transform]

links:
 - name: 'Data URI + SVG'
   url: https://r.va.gg/2012/05/data-uri-svg.html
 - name: 'Optimizing SVGs in data URIs'
   url: https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
 - name: URL-encoder для SVG
   url: http://yoksel.github.io/url-encoder/ru
 - name: Background tricks with SVG, Box shadows and CSS Gradients
   url: http://codepen.io/collection/DyJRrY/2/

---

Игралась с кодами, обнаружила удивительное: оказывается, внутри CSS-свойства <code>background</code> можно использовать другие CSS-свойства, например, <code>box-shadow</code>, <code>outline</code>, <code>transform</code> и даже ещё один <code>background</code>.<!--more-->

Очевидно, что мы не можем просто взять и засунуть одно CSS-свойство в другое: тени и трансформации должны применяться к элементу. В качестве фона мы можем использовать цвета, градиенты и картинки, но не только: ещё в качестве фона можно использовать SVG, причём не только в виде ссылки на внешний файл, — также код SVG-элемента можно вставить непосредственно в CSS, это делается вот такой конструкцией: <code>background-image: url("data:image/svg+xml,...");</code>.

SVG можно вставить в CSS прямо как есть, но такой код не будет работать в IE. Однако если его <a href="http://yoksel.github.io/url-encoder/ru">заэскейпить</a>, код будет работать во всех браузерах включая IE9.

<p data-height="400" data-theme-id="4974" data-slug-hash="ammZbr" data-default-tab="css,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/ammZbr/">(encoded svg)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

И вот теперь если этому <code>svg</code> внутри <code>background</code> задать какие-нибудь стили в атрибуте <code>style</code>, они будут работать! Можно использовать обычные стили для HTML-элементов, то есть рамки (в том числе <code>border-image</code>), тени, фоны (включая CSS-градиенты) и даже трансформации!

Например, можно взять такой код:

```markup
<svg xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100' width='50' height='50'
    style='transform: rotate(45deg) scale(.8,.8);
        transform-origin: 50% 50%;
        border-radius: 1rem;
        background: linear-gradient(darkviolet, turquoise);
        box-shadow: 0 0 7px 3px white inset;'>
        <circle r='30%' cx='50%' cy='50%' fill='gold'/>
</svg>
```

заэскейпить его и использовать как фон, при это все инлайновые стили сохранятся:

<p data-height="400" data-theme-id="4974" data-slug-hash="BLQjoW" data-default-tab="css,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/BLQjoW/">(encoded svg with inline styles)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Жёлтый кружочек — это <code>circle</code> внутри <code>svg</code>, всё остальное — инлайновые стили: градиент, тень и трансформации.

На самом деле, чтобы воспользоваться инлайновыйми стилями, нужен только элемент <code>svg</code>, его содержимое не играет роли и может отсутствовать:

```markup
<svg xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100' width='50' height='50'
    style='transform: rotate(45deg) scale(.8,.8);
        transform-origin: 50% 50%;
        border-radius: 1rem;
        background: linear-gradient(darkviolet, turquoise);
        box-shadow: 0 0 7px 3px white inset;'
        ><!-- тут ничего нет --></svg>
```

И всё равно всё будет работать:

<p data-height="400" data-theme-id="4974" data-slug-hash="WGoKAv" data-default-tab="css,result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/WGoKAv/">(encoded svg with inline styles)</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Интересно, что такие стили работают во всех современных браузерах, но у каждого свои представления о том, как это должно выглядеть в итоге:

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/chrome.png" alt="Chrome">

<figcaption>
    <h3>Chrome</h3>
    <p>Тени, трансформации и градиенты работают, градиент поворачивается вместе с фигурой. Пустые места в углах плитки фона заполняются градиентом.</p>
    <p><code>transform-origin</code> по умолчанию находится в точке <code>0, 0</code>.</p>
</figcaption>
</figure>

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/ff.png" alt="Firefox">

<figcaption>
    <h3>Firefox</h3>
    <p>Тени, трансформации и градиенты работают, но тень поворачивается вместе с фигурой, а градиент — нет.</p>
    <p><code>transform-origin</code> по умолчанию находится в точке <code>0, 0</code>.</p>
</figcaption>
</figure>

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/safari.png" alt="Safari">

<figcaption>
    <h3>Safari</h3>
    <p>Тени, трансформации и градиенты работают, градиент поворачивается вместе с фигурой. Пустые места в углах плитки фона ничем не заполняются.</p>
    <p><code>transform-origin</code> по умолчанию находится в точке <code>0, 0</code>.</p>
</figcaption>
</figure>

<figure class="figure figure--text-on-right">
<img src="../assets/img/articles/inline-styles-in-bg/ie.png" alt="IE11">
<figcaption>
<h3>IE11</h3>
<p>Трансформации и градиенты работают, тени — нет. Градиент поворачивается вместе с фигурой. Пустые места в углах плитки фона не заполняются.</p>

<p><code>transform-origin</code> по умолчанию находится в точке <code>50%, 50%</code>.</p>

<p>В отличие от остальных браузеров, здесь не работает <code>transform-origin</code>, заданный в процентах, — при этом ломается весь фон. Также, если фигуре задать <code>border</code>, отобразится только он, а градиенты и тени пропадут.</p>
</figcaption>
</figure>

С одной стороны, инлайновые стили в фоне везде отображаются по-разному, с другой — это настолько странная конструкция, что непонятно почему она вообще работает.

Стили в фонах открывают широчайшие возможности для экспериментов и заодно позволяют помечтать о разных возможностях, которых сейчас в фонах нет, но очень хочется, чтобы были.

Например, если делать паттерны с помощью градиентов, иногда хочется просто взять и повернуть плитку фона, например, на 45 градусов, чтобы получилась чешуя:

<figure>
<p data-height="350" data-theme-id="4974" data-slug-hash="gwrKzJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/gwrKzJ/">[Chrome, Opera] SVG  + CSS gradient + Box Shadow</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Нормально отображается только в Chrome и Opera)</figcaption>
</figure>

Ещё один вариант чешуи:

<figure>
<p data-height="350" data-theme-id="4974" data-slug-hash="amkjXg" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/amkjXg/">SVG  + CSS gradient</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera)</figcaption>
</figure>

Или вот хочется сделать сложный фон из нескольких градиентов и повернуть всю группу сразу (в данном случае такой группой является полупрозрачный трёхцветный градиент):

<figure>
<p data-height="420" data-theme-id="4974" data-slug-hash="RGRRvo" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/RGRRvo/">Animated pattern: SVG  + CSS gradient</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera)</figcaption>
</figure>

Или, например, хочется изменить размер фона, но так, чтобы какие-то линии сохранили свой размер. <code>box-shadow</code> при ресайзе <code>background-size</code> именно так и работает:

<figure>
<p data-height="400" data-theme-id="0" data-slug-hash="ORNqdx" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/ORNqdx/">Animated pattern for HTML element without gradients</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera, Firefox, Safari)</figcaption>
</figure>

Ресайзится только плитка фона, размер теней не меняется. Из этого можно сделать, например, калейдоскопический паттерн:

<figure>
<p data-height="430" data-theme-id="4974" data-slug-hash="QKNPjJ" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/QKNPjJ/">Animated pattern without gradients: + transform!</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera, Firefox, Safari)</figcaption>
</figure>

Используя <code>border-image</code> c градиентами можно делать совсем уж замысловатые штуки:

<figure>
<p data-height="350" data-theme-id="0" data-slug-hash="amkLvw" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/amkLvw/">Border-image inside background-image</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>(Chrome, Opera, Firefox, Safari)</figcaption>
</figure>

Играться можно до бесконечности.

Я не знаю как это знание можно пристроить к делу, но меня так поразила эта находка, что я решила о ней рассказать. И я до сих пор под впечатлением от того, что в <code>background-image</code> можно использовать трансформации и <code>border-image</code>, хотя практической пользы в этом, наверное, никакой.

Если у вас есть идеи куда это можно применить, поделитесь.

Все мои эксперименты с инлайновыми стилями можно увидеть <a href="http://codepen.io/collection/DyJRrY/">в этой коллекции</a> (смотреть лучше в Хроме и Опере).
