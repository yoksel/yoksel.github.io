---
title: Режимы наложения и их фоллбеки

tags: [blend-modes]

image: //img-fotki.yandex.ru/get/4805/5091629.a1/0_855c2_8fe321a9_M.jpg
desc: Не так давно в Firefox 32 включили поддержку mix-blend-mode, a в Chrome 37 — CSS shapes. Обе технологии выглядят очень интересно, так что я решила попробовать их в действии, заодно выяснив как будет выглядеть страница в браузерах, где они не поддерживаются.

links:
- href: http://dev.w3.org/fxtf/compositing-1
  text: Compositing and Blending Level 1
- href: http://caniuse.com/#feat=css-backgroundblendmode
  text: background-blend-mode
- href: http://caniuse.com/#feat=css-mixblendmode
  text: mix-blend-mode
- href: http://dev.w3.org/csswg/css-shapes/
  text: CSS Shapes Module Level 1
- href: http://caniuse.com/#feat=css-shapes
  text: CSS Shapes
- href: http://www.w3.org/TR/SVG/filters.html
  text: SVG Filter Effects
- href: http://caniuse.com/#feat=svg-filters
  text: SVG filters
- href: /background-blend-mode/
  text: Background-blend-mode
- href: /css-and-svg-masks
  text: CSS и SVG маски
- href: /svg-in-ie8
  text: Грабли на чистом SVG

---
Не так давно в <a href="https://developer.mozilla.org/en-US/Firefox/Releases/32">Firefox 32</a> включили поддержку <code>mix-blend-mode</code>, a в <a href="http://www.chromestatus.com/features/5163890719588352">Chrome 37</a> — <a href="http://dev.w3.org/csswg/css-shapes/">CSS shapes</a>, то есть возможность управлять формой, по которой текст будет обтекать элемент. Обе технологии выглядят очень интересно, так что я решила попробовать их в действии, заодно выяснив как будет выглядеть страница в браузерах, где они не поддерживаются.

<!--more-->
В процессе написания статьи Safari обновился до версии 7.1, и в нем тоже появилась поддержка режимов наложения. Таким образом, режим наложения слоев фона имеет уже <a href="http://caniuse.com/#feat=css-backgroundblendmode">довольно неплохую поддержку браузерами</a>, с наложением друг на друга элементов страницы дела пока обстоят <a href="http://caniuse.com/#feat=css-mixblendmode">похуже</a>, но я уверена, что у них всё впереди.
Также в Safari 7.1 стали доступны CSS shapes, хотя и с префиксом <code>-webkit-</code>.

По обеим темам уже были хорошие статьи на английском языке, например:

<ul>
  <li><a href="http://alistapart.com/article/css-shapes-101">CSS Shapes 101</a></li>
  <li><a href="http://alistapart.com/blog/post/moving-forward-with-css-shapes">Moving Forward with CSS Shapes</a></li>
  <li><a href="http://www.html5rocks.com/en/tutorials/shapes/getting-started/">Getting Started with CSS Shapes</a></li>
  <li><a href="https://dev.opera.com/articles/getting-to-know-css-blend-modes/">Getting to Know CSS Blend Modes</a></li>
</ul>

Для более глубокого изучения есть спецификации:
<ul>
  <li><a href="http://dev.w3.org/fxtf/compositing-1/">Compositing and Blending Level 1</a></li>
  <li><a href="http://dev.w3.org/csswg/css-shapes/">CSS Shapes Module Level 1</a></li>
</ul>

Сейчас я не буду подробно рассматривать обе технологии (потому что это отдельные большие темы), а расскажу только про небольшой эксперимент и про то, что можно сделать для изящной деградации в старых браузерах.

Для начала я открыла новый Хром и сделала такое:

<p data-height="500" data-theme-id="4974" data-slug-hash="KCibG" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/KCibG/'>KCibG</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<a href="https://codepen.io/yoksel/full/KCibG/">Посмотреть в полный рост</a>.

В демо используются <code>mix-blend-mode</code> и <code>shape-outside</code>. Режим наложения <code>mix-blend-mode: multiply;</code> задан всему контейнеру с текстом и картинками, а <code>shape-outside</code> для каждой картинки свой.

Полноценно оно отображается только в Safari 7.1, он умеет и режимы смешивания, и CSS shapes, но формы пока работают с префиксом <code>-webkit-</code>.

Также оно будет работать в последних Хроме/Опере со включенными экспериментальными возможностями (они умеют CSS shapes, но <code>mix-blend-mode</code> пока что за флагом, и их надо включать отдельно).

Включить в Хроме:
<code>chrome://flags/#enable-experimental-web-platform-features</code>

В Опере:
<code>opera://flags/#enable-experimental-web-platform-features</code>

В Safari и Chrome/Opera с флагами демо выглядит вот так:

<img src="//img-fotki.yandex.ru/get/4805/5091629.a1/0_855c2_8fe321a9_M.jpg"/>

 Чтобы увидеть неработающие формы, достаточно открыть демо в Firefox:

<img src="//img-fotki.yandex.ru/get/6836/5091629.a1/0_855c4_79b5ff4_M.jpg"/>

 а неработающие режимы смешивания — Internet Explorer:

<img src="//img-fotki.yandex.ru/get/4803/5091629.a1/0_855c3_f9ded859_M.jpg"/>

Если нужно, чтобы формы работали везде, можно воспользоваться полифилом: <a href="https://github.com/adobe-webplatform/css-shapes-polyfill">css-shapes-polyfill</a>, но следует иметь в виду, что это может создать дополнительную нагрузку для браузера. При этом в браузерах без поддержки CSS-форм ничего особо не ломается — картинки просто обтекаются текстом не по кривой, а по прямоугольному контуру.

Firefox можно оставить как есть, но с IE надо что-то делать: белый фон у картинок и белый в тенях заголовка выглядят не очень. Самый простой вариант — добавить блоку с текстом белую подложку:


```css
.l-wrapper {
  ...
  padding: 40px 70px; /* добавляем отступы */
  background: #FFF;  /* добавляем фон */
  ...
}
```

Очень хотелось воспользоваться <code>@supports</code>, чтобы убрать отступы в браузерах с поддержкой режимов наложения, но <code>@supports</code> <a href="http://caniuse.com/#feat=css-featurequeries">не работает в Сафари</a>.

Тогда мне пришло в голову, что можно сделать белые поля не создавая отступы, например, так:


```css
.l-wrapper {
  ...
  background: #FFF;  /* добавляем фон */
  box-shadow: 0 0 0 60px #FFF /* добавляем поля */
  ...
}
```

Результат: <a href="https://codepen.io/yoksel/full/AJKEh/">codepen.io/yoksel/full/AJKEh/</a>

В браузерах с поддержкой режимов наложения ничего не изменилось, а в IE появился белый фон:

<img src="//img-fotki.yandex.ru/get/4800/5091629.a1/0_855cb_3998ac74_M.jpg"/>

В продвинутых браузерах фона под текстом не будет, потому что при режиме смешивания <code>multiply</code> белый цвет исчезает.

Мне нравится способ с фоном, но сейчас получается, что демо в разных браузерах может выглядеть по-разному, и можно попробовать сделать лучше, например, с помощью SVG.

В SVG-фильтрах есть режимы смешивания. Их меньше, чем в CSS, но среди них есть нужный нам <code>multiply</code>.

Создаем фильтр:

```html
<svg class="svg-defs">
  <filter id="multiply" x="0" y="0">
    <!-- задаем картинку фона для фильтра -->
    <feImage id="bgimage" result="bgimage" x="0" y="0" width="300" height="206" xlink:href="//img-fotki.yandex.ru/get/6846/5091629.a1/0_8558d_406830d_M"></feImage>
    <!-- задаем повторение фона -->
    <feTile in="bgimage"></feTile>
    <!-- накладываем картинку, к которой применен фильтр,
    на предыдущий фон с режимом multiply -->
    <feBlend mode="multiply" in2="SourceGraphic"/>
  </filter>
</svg>
```

<i>Было бы куда удобнее задавать режим наложения исходной картинки на нижележащие слои страницы, а не на картинку, заданную в фильтре (здесь это <code>feImage</code>). Для этого в SVG предусмотрена возможность в качестве одного из источников фильтра задавать <code>BackgroundImage</code> — по смыслу это снимок экрана под областью действия фильтра. <code>BackgroundImage</code> позволил бы сделать фильтр гораздо короче:</i>

```html
<svg class="svg-defs">
  <filter id="multiply" x="0" y="0">
    <feBlend mode="multiply" in2="BackgroundImage" in="SourceGraphic"/>
  </filter>
</svg>
```

<i>К сожалению, на момент написания статьи <code>BackgroundImage</code> в фильтрах не работает.</i>

Чтобы фильтры работали везде, картинки, к которым они применяются, тоже надо завернуть в SVG. Примерный код:

```html
<svg class="pic pic--dragon" viewBox="0 0 300 161">
  <image xlink:href="//img-fotki.yandex.ru/get/6840/5091629.a1/0_855a9_b872dbe5_M" width="100%" height="100%"
    filter="url(#multiply)"/>
</svg>
```

Для SVG-элементов обязательно надо задавать размеры, можно с помощью CSS.

В тенях заголовка остался белый цвет. В случае с относительно однородным фоном (как в этом примере) можно заменить белый на более подходящий оттенок, с пестрым это не сработает, и придется придумывать что-то ещё.

Результат:

<p data-height="500" data-theme-id="4974" data-slug-hash="wavqm" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/wavqm/'>Blend and shapes</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

SVG-фильтры для SVG элементов работают во всех современных браузерах, в IE начиная  с <nobr>10-й</nobr> версии. Фильтры были бы отличным решением, если бы не некоторые нюансы:

1. Некоторые браузеры вообще не понимают SVG (IE8 и старше, например). Для них SVG-элементам нужно будет задать  фоном растровые изображения.
2. SVG-фильтры <a href="http://caniuse.com/#feat=svg-filters">не работают в IE9</a>. Его нужно будет как-то определить, чтобы задавать белую подложку для него и для более старых версий IE.
3. При использовании фильтров фон под картинкой ресайзится вместе с картинкой. То есть картинка приклеивается к фону с применением заданного режима наложения, и дальнейшие манипуляции делаются уже с этой новой склейкой.
4. При значительном изменении размеров картинки с фильтром между "плитками" фона могут появляться однопиксельные полосы.

Пример для проблем №3 и №4 (порастягивайте окно браузера):

<p data-height="500" data-theme-id="4974" data-slug-hash="gocDK" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/gocDK/'>Resizing image with SVG-filter</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

На фонах с четким рисунком несовпадение и "размыливание" фона будет очень заметно.

Если исходное изображение имеет белые поля, можно попробовать использовать SVG-маску. Для этого делается копия картинки, где белые поля сделаны прозрачными или залиты черным, а часть картинки, которая должна быть показана — полностью белая. Картинка для рыцаря выглядит вот так:

<img src="//img-fotki.yandex.ru/get/4509/5091629.a2/0_85a64_94d6d625_M">

Код маски:

```html
<mask id="mask">
  <image xlink:href="//img-fotki.yandex.ru/get/4509/5091629.a2/0_85a64_94d6d625_M" width="203" height="300"/>
</mask>
```

Результат применения:

<p data-height="500" data-theme-id="4974" data-slug-hash="AblID" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/AblID/'>Resizing image with SVG-filter</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Приклееный фон остался только под рыцарем, пространство вокруг фигуры полностью прозрачное, и под ним виден фон страницы. Допускаю, что для некоторых фонов способ с маской вполне подойдет.

Способ с маской и фильтрами позволяет получить режимы смешивания в IE10+ и может сработать, если нужный режим наложения есть в SVG. Правда, этот способ отличают довольно громоздкие конструкции. Я бы предпочла вариант на чистом CSS, но не исключено, что способ с SVG окажется в каких-то ситуациях более подходящим.
