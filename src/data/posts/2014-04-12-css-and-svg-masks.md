---
layout: default
title: CSS и SVG маски
type: post

tags: [svg, masks]

image: http://img-fotki.yandex.ru/get/9802/5091629.9d/0_80ea0_df30236f_L.png
desc: Есть несколько способов обрезать элемент по маске. Одни поддерживаются всеми современными браузерами, другие поддерживаются очень плохо, и пользоваться ими ещё нельзя. В некоторых способах маской может быть текст. Используемые технологии — CSS, SVG + CSS, чистый SVG.

excerpt: <p>Есть несколько способов обрезать элемент по маске. Одни поддерживаются всеми современными браузерами, другие поддерживаются очень плохо, и пользоваться ими ещё нельзя. В некоторых способах маской может быть текст.</p>

customCSS: css-and-svg-masks.css
include: ./static/assets/img/svg/css-and-svg-masks.svg

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

Всё началось вот с этого эксперимента:<!--more-->

<p data-height="450" data-theme-id="4974" data-slug-hash="xmshn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xmshn/'>SVG gradients for text</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Для надписи подключен гуглошрифт, заливка сделана паттерном с градиентами, при этом надпись не перестала быть текстом — её можно выделить и скопировать!

<i>Тут следует отметить, что гораздо проще было бы в качестве заливки использовать просто градиент, не заворачивая его в паттерн, но для этого нужно было задать градиенту свойство <code>spreadMethod="repeat"</code>, чтобы он повторялся, а в Firefox в этом случае градиент почему-то ломался.</i>

Я посмотрела на поддержку этого демо в разных браузерах, вспомнила про <code>-webkit-background-clip: text</code>, который поддерживается только в вебкитах, и решила посмотреть что ещё есть интересного в этом направлении.

Есть несколько способов обрезать элемент по маске. Одни поддерживаются всеми современными браузерами, другие поддерживаются очень плохо, и пользоваться ими ещё нельзя. В некоторых способах маской может быть текст.

Используемые технологии:

* <b>CSS</b> — маска создается в CSS и применяется к HTML-элементам;
* <b>SVG + CSS</b> — SVG-маска применяется к HTML-элементам с помощью CSS;
* <b>SVG</b> — SVG-маска применяется к SVG-элементам. С помощью CSS, но главное здесь то, что и маска, и маскируемый элемент являются SVG.

Лучшая поддержка браузерами — у масок, сделанных полностью на SVG.

Не то, чтобы я глубоко изучала вопрос — мне хотелось увидеть все способы в одном месте и с информацией о браузерной поддержке, так что я сделала <a href="http://codepen.io/yoksel/full/fsdbu/">это демо</a> — с примерами кода и ссылками на спецификации.

Все способы в нем представлены как есть — без фоллбеков, так что вы можете открыть страницу в интересующем браузере и посмотреть как в нем поддерживается нужный вам способ. Очень надеюсь, что однажды мы увидим все маски работающими во всех современных браузерах.

Маски бывают разных типов: одни позволяют обрезать элемент по векторной фигуре (пути) — <code>clip</code>, <code>clip-path</code>, другие ориентируются на яркость цветов или альфа-канал изображения — <code>mask</code> и <code>mask-image</code> — эти способы позволяют получить маску с размытыми краями.
Использовать текст в качестве маски можно в SVG <code>clip-path</code>, SVG <code>mask</code>, <code>-webkit-background-clip</code> и SVG <code>fill</code>. Последнее не является маской в прямом смысле слова, но результат выглядит как <code>-webkit-background-clip</code>, и при этом поддерживается всеми современными браузерами.

Все маски вы можете найти на <a href="http://codepen.io/yoksel/full/fsdbu/">демо-странице</a>, я же расскажу только про самые хорошо поддерживаемые — конечно же, все они на SVG.
Все примеры в посте — живые демо, не скриншоты.

<h4>SVG clip-path для SVG элементов</h4>

<a href="http://www.w3.org/TR/SVG11/masking.html#EstablishingANewClippingPath">Спецификация</a>

<code>clipPath</code> позволяет использовать векторную маску любой формы.
Применение SVG <code>clipPath</code> для HTML-элементов поддерживается только в Firefox, но если перенести разметку в SVG — маска заработает во всех современных браузерах.

Фигуры внутри <code>clipPath</code> можно комбинировать, чтобы получить более сложные, также в <code>clipPath</code> может использоваться текст. Текст, использующийся в <code>clipPath</code>, нельзя выделить и скопировать, при этом текст обрезаемого элемента — можно, правда, копируется он как-то странно.

<svg width="200" height="190">
  <g class="g--clip-path-img">
  <image xlink:href="http://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg" width="200" height="300" />
  </g>
</svg>

<svg width="450" height="190">
<g class="g--clip-path-text">
  <foreignObject data-id="fo-text" x="0" y="4" width="450" height="200">
  Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget adipiscing magna. Nunc massa justo, placerat at porta at, mollis nec eros. Nullam eu justo erat. Curabitur eget rhoncus purus, interdum posuere ligula. Ut ultricies fermentum dignissim. Aliquam et arcu tempus, euismod nisi eu, lobortis est. Integer ultrices aliquet enim eu ultrices. Nam tristique vestibulum nulla nec accumsan. Nullam commodo eget dolor et ultricies. Nulla ligula elit, placerat a sapien vel, eleifend tincidunt nibh. Suspendisse porta fermentum dictum. Cras eget adipiscing magna. Nunc massa justo, placerat at porta at, mollis nec eros. Nullam eu justo erat. Curabitur eget rhoncus purus, interdum posuere ligula. Ut ultricies fermentum dignissim. Aliquam et arcu tempus, euismod nisi eu, lobortis est. Integer ultrices aliquet enim eu ultrices.
</foreignObject>
</g>
</svg>

<b>SVG:</b>

```markup
<!-- Путь обрезки с полигоном -->
<clipPath id="clipping">
  <polygon points="98.4999978 153.75..."/>
</clipPath>

<!-- Путь обрезки с текстом -->
<clipPath id="clipping-text">
  <text x="0" y=".88em">Text</text>
</clipPath>
```

<b>CSS:</b>

```css
/* Для текстовой маски можно задать параметры шрифта */
#clipping-text {
  font: bold italic 15em/1 Georgia;
}

/* Применение маски */
.item {
  clip-path: url(#clipping);
}
```

<h4>SVG mask для SVG элементов</h4>

<a href="http://www.w3.org/TR/SVG11/masking.html#Masking">Спецификация</a>

SVG <code>mask</code> позволяет задать элемент или сочетание элементов, которые будут работать маской по альфа-каналу или по яркости. SVG <code>mask</code> для HTML-элементов также поддерживается только в Firefox, но при переносе разметки в SVG работает везде.

Маской могут служить фигуры, при этом степень прозрачности зависит от яркости цвета заливки (светлые цвета — прозрачность, темные — непрозрачность). Фигуры, объявленные ниже в коде, обрезают слои, расположенные выше.
Также в качестве маски можно использовать изображения.

SVG <code>mask</code> (в отличие от <code>clipPath</code>) позволяет сделать маску с размытыми краями.

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

<svg width="200" height="300" >
<g class="g--svg-mask-svg-lum">
  <rect y="0"  width="200" height="300" fill="url(#ymc-gradient)"/>
</g>
</svg>

<b>SVG:</b>

```markup
<!-- Маска с сочетанием градиентов и фигур -->
<mask id="masking" maskUnits="objectBoundingBox">
  <!-- Фигура с полосатым градиентом -->
  <rect y="0" width="1" height="1" fill="url(#gradient)" />
  <!-- Круги -->
  <circle cx=".5" cy=".5" r=".4" fill="gray" />
  <circle cx=".5" cy=".5" r=".3" fill="white" />
  ...
</mask>

<!-- Маска из картинки -->
<mask id="masking-lum" maskUnits="objectBoundingBox"
  x="0" y="0">
  <image xlink:href="АДРЕС КАРТИНКИ" width="200" height="300" />
</mask>
```

<b>CSS:</b>

```css
.item {
  mask: url(#masking);
}
```

<h4>SVG fill</h4>

<a href="http://www.w3.org/TR/SVG/painting.html#FillProperties">Спецификация</a>

<code>fill</code> — заливка, а не маска, но позволяет довольно неплохо имитировать маски. Заливкой может цвет, градиент или паттерн.

Паттерн (<code>pattern</code>) — это элемент SVG. В него можно положить всё что угодно, чтобы потом использовать содержимое контейнера как повторяющийся фон. В нем можно создать узор <a href="http://codepen.io/yoksel/full/bwDzx">из других элементов SVG</a>, а также завернуть в него картинку или текст.

Правда, с текстом есть некоторые трудности: в SVG текст не умеет переноситься сам по себе. Чтобы сделать текст с переносами, как в обычном HTML, его нужно завернуть в <code>foreignObject</code>, но заливка с таким паттерном <a href="http://codepen.io/yoksel/full/BidHq">не работает</a>, хотя в <a href="http://www.w3.org/TR/SVG11/pservers.html#Patterns">спеке для паттерна</a> написано, что <code>foreignObject</code> в паттерн вставлять можно.

Так что, чтобы сделать заливку текстом, надо вставить его через тег <code>text</code>, а каждую строку завернуть в <code>tspan</code> и задать ей нужное положение. Способ громоздкий, но работает.

Используя в качестве паттерна картинки, можно получить надписи с любой текстурой, которую подскажет ваша фантазия. При этом способ сработает во всех современных браузерах, в отличе от <code>-webkit-background-clip: text</code>, так что фоллбеков потребуется сильно меньше.

Собственно, текст без заливки, но с текстурной обводкой тоже можно сделать: в этом случае паттерн следует задать свойству <code>stroke</code>.

Примеры сделаны для текста, но <code>fill</code> и <code>stroke</code> точно также работают для фигур.

При использовании заливки для текста, текст всё ещё остается текстом: его можно выделить и скопировать (попробуйте на примерах ниже), ему можно задать размер и шрифт.

<svg width="380" height="140">
<g class="g--svg-fill">
  <text x="0" y=".78em">Text</text>
</g>
</svg>

<svg width="380" height="130">
<g class="g--svg-fill-text">
  <text x="0" y=".75em">Text</text>
</g>
</svg>

<svg width="380" height="130">
<g class="g--svg-stroke">
  <text x="0" y=".75em">Text</text>
</g>
</svg>

<b>SVG:</b>

```markup
<!-- Паттерн с картинкой -->
<pattern id="pattern" patternUnits="userSpaceOnUse"
  width="200" height="300" viewbox="0 0 200 300">
  <image xlink:href="YOUR IMAGE" width="200" height="300" />
</pattern>

<!-- Паттерн с текстом -->
<pattern id="pattern-text" patternUnits="userSpaceOnUse"
  width="450" height="95">
  <text x="0" y="0">
    <tspan x="0" y="1em">Nam tristique vestibulum
        nulla nec accumsan...
    </tspan>
    ...
  </text>
</pattern>
```

<b>CSS:</b>

```css
/* Заливка с паттерном */
text {
  fill: url(#pattern);
}

/* Обводка с паттерном */
text {
  stroke: url(#pattern);
  fill: none;
}
```

<b>Важное уточнение:</b> в Firefox и старой Опере ссылки вида <code>mask: url(#masking);</code> не работают, если страница с SVG градиентами, паттернами и масками находится в одной директории, а CSS — в другой. Это лечится полным указанием пути от корня сайта, например <code>mask: url(/page-url/#masking);</code>, чтобы браузеры знали где именно искать элемент с таким ID.
За указание на проблему спасибо <a href="https://twitter.com/legomushroom">legomushroom</a>.

Возможности SVG позволяют делать самые разные маски и использовать их самыми разными способами, при этом они имеют очень неплохую поддержу браузерами. Если учесть, что многие свойства SVG можно анимировать с помощью JS, перспективы открываются очень интересные.
