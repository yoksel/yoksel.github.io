---
title: Умная прокрутка со Scroll Snap Points

tags: [firefox]

image: https://img-fotki.yandex.ru/get/3006/5091629.a4/0_8b19d_a6284f4f_orig
desc: "В Firefox начиная с 39-й версии появились интересные CSS-свойства, которые позволяют управлять поведением прокручиваемого контента."

links:
- url: http://www.w3.org/TR/css-snappoints-1/
  name: CSS Scroll Snap Points
- url: http://caniuse.com/#search=snap
  name: caniuse.com/#search=snap
- url: https://blog.gospodarets.com/css-scroll-snap
  name: Native CSS Scroll Snap Points
---

В Firefox начиная с 39-й версии появились интересные CSS-свойства, которые позволяют управлять поведением прокручиваемого контента.<!--more-->

Cпецификация: <a href="http://www.w3.org/TR/css-snappoints-1/">Scroll Snap Points</a>.

Возьмем для примера такую галерею:

<p data-height="550" data-theme-id="4974" data-slug-hash="zGWGzo" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/zGWGzo/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Попробуйте скроллить картинки, и вы увидите, что прокрутка никак не учитывает содержимое прокручиваемой области. Прокрутка может остановиться где угодно, откусив полкартинки и не заморачиваясь выравниванием.

Обычная прокрутка не позволяет пошагово пролистывать контент, использующий разделение на страницы или на смысловые секции, и здесь лучше подошла бы прокрутка с более разумным поведением.

Умная прокрутка также очень пригодилась бы для фотогалереи, чтобы в полноэкранном режиме большие изображения всегда проматывались ровно по шагам независимо от реального скролла - не обрезаясь и всегда точно заполняя собой область просмотра.

Обычно проблема решается с помощью Js, но теперь есть решение на CSS.

<div class="post__warning"><b>Внимание:</b> на момент написания статьи все следующие демо работают только в <b>Firefox 39+</b>.</div>

Посмотрите на это демо в последнем Firefox:

<p data-height="550" data-theme-id="4974" data-slug-hash="RPMPOv" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/RPMPOv/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Попробуйте скроллить и увидите, что в этом примере картинки всегда аккуратно заполняют собой область просмотра. Как это сделано?

Для начала создадим галерею, для неё нужен совсем простой код.

HTML:

```html
<div class="gallery">
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
  <img src="image.jpg" alt=""/>
</div>
```

CSS:

```css
.gallery {
  width: 500px;
  height: 333px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
```

Размер галереи в данном случае соответствует размеру картинок в ней. Код в демо немного длинее, здесь я оставила только важное.

Это был код галереи с обычной прокруткой, добавим немного магии:


```css
.gallery {
  ...
  /* Scroll Snap Properties */
  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat(100%);
}
```

Всего пара строчек кода, и галерея прокручивается по шагам, показывая только одну картинку в один момент времени. Красота!

Посмотрим на свойства, которые позволяют это сделать:


<section id="scroll-snap-type" data-name="scroll-snap-type"><h2>scroll-snap-type</h2>

Определяет насколько точно проматываемый контент должен выравниваться относительно родительского элемента.
Задаётся контейнеру с прокруткой.

<code>none</code> — "прилипание" отключено, прокрутка ведет себя как обычно. Значение по умолчанию.
<code>mandatory</code> — точное "прилипание": при прокрутке элементы выравниваются точно по родителю.
<code>proximity</code> — приблизительное "прилипание": в зависимости от скорости проматывания элементы могут показываться по частям или выравниваться по родителю.

<p data-height="550" data-theme-id="4974" data-slug-hash="RPMWeP" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/RPMWeP/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="550" data-theme-id="4974" data-slug-hash="qdoOQw" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/qdoOQw/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section id="scroll-snap-points-x" data-name="scroll-snap-points-x"><h2>scroll-snap-points-x, scroll-snap-points-y</h2>

Определяет шаг скролла, задаётся контейнеру с прокруткой.

<code>none</code> — шаг не задан, содержимое прокручивается рывками. Значение по умолчанию.
<code>repeat(&lt;length>)</code> — определяет размер шага при прокрутке, значение может быть задано в процентах. <code>scroll-snap-points-x: repeat(100%);</code> означает, что длина шага равна ширине контейнера.

<p data-height="550" data-theme-id="4974" data-slug-hash="XbEXro" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/XbEXro/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<code>scroll-snap-points-x: repeat(50%);</code> в сочетании с <code>scroll-snap-type: mandatory;</code> ведет себя похоже на <code>scroll-snap-type: proximity;</code>: прокрутка получается нестрогой и при этом с управляемым размером шага.

<p data-height="550" data-theme-id="4974" data-slug-hash="Qbmywa" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/Qbmywa/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section id="scroll-snap-destination" data-name="scroll-snap-destination"><h2>scroll-snap-destination</h2>

Определяет точку "прилипания" внутри контейнера с прокруткой. Первое значение задаёт координату по X, второе — по Y.
Можно задавать в процентах.
Задаётся контейнеру с прокруткой.

Значение по умолчанию: <code>0px 0px</code>.

Обычно контент "прилипает" к левому краю, но при <code>scroll-snap-destination: 100% 0;</code> он будет прилипать к правому. Я увеличила ширину контейнера, чтобы было лучше видно.

<p data-height="550" data-theme-id="4974" data-slug-hash="mJxVer" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/mJxVer/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section id="scroll-snap-coordinate" data-name="scroll-snap-coordinate"><h2>scroll-snap-coordinate</h2>

Определяет для прокручиваемых элементов координаты точки "прилипания".

<code>none</code> — у элемента нет точки "прилипания". Значение по умолчанию.
<code>&lt;position></code> — задаёт точку "прилипания" относительно прокручиваемого элемента. Первое значение задаёт координату по X, второе — по Y.
Можно задавать в процентах.

Удобная штука, если прокручиваемый контейнер больше содержащихся в нём элементов: благодаря сочетанию <code>scroll-snap-coordinate: 50% 0;</code> для дочерних элементов и <code>scroll-snap-destination: 50% 0;</code> для родителя прокручиваемые элементы всегда будут выравниваться точно по центру области прокрутки:

<p data-height="550" data-theme-id="4974" data-slug-hash="LVdGZE" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/LVdGZE/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

При этом "прилипание" прекрасно работает для элементов разной ширины:

<p data-height="550" data-theme-id="4974" data-slug-hash="oXqbWb" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='https://codepen.io/yoksel/pen/oXqbWb/'>Scroll Snap Points</a> by yoksel (<a href='https://codepen.io/yoksel'>@yoksel</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</section>

<section><h2>Поддержка браузерами</h2>

К сожалению, умная прокрутка в данный момент <a href="http://caniuse.com/#search=snap">поддерживается далеко не везде</a>: полная поддержка есть только в Firefox 39+, также она частично поддерживается с префиксом <code>-ms-</code> в IE10+, а в Safari поддержка появится начиная со следующей версии.

Кроме того, спецификация ещё находится в стадии черновика, и может быть изменена в будущем, а сама прокрутка в текущей реализации не всегда ведет себя предсказуемым образом.

В данный момент умную прокрутку нельзя полноценно использовать, но возможность контролировать прокрутку не используя Js выглядит многообещающе, так что хочется верить, что однажды она таки получит поддержку всеми современными браузерами.
</section>
