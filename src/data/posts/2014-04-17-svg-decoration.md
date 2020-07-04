---
layout: default
title: Возможности оформления SVG
type: post

tags: [svg]

image: "http://img-fotki.yandex.ru/get/9093/5091629.9d/0_814d9_aa20df1f_L.jpg"
desc: "Внешний вид SVG-элементам можно задавать как с помощью CSS, так и с помощью SVG-фильтров, градиентов и паттернов — их можно прописывать элементам прямо в коде либо задавать также через CSS. Стили и скрипты можно задавать внутри SVG-файла, но если мы хотим, чтобы одно и то же изображение в разных условиях выглядело по-разному — стили внутри файла не годятся — нужно, чтобы векторное содержимое было доступно для внешних стилей"
links:
- url: "http://tympanus.net/codrops/2013/11/27/svg-icons-ftw/"
  name: SVG icons FTW
- url: "http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters"
  name: SVG filters
- url: "http://www.w3.org/TR/SVG11/filters.html"
  name: Filter Effects
- url: "/svg-fill-and-stroke"
  name: "SVG&#58; заливка и обводка"
- url: "/svg-icons"
  name: "SVG-иконки"
published: true
---

Внешний вид SVG-элементам можно задавать как с помощью CSS, так и с помощью SVG-фильтров, градиентов и паттернов — их можно прописывать элементам прямо в коде либо задавать также через CSS.

Стили и скрипты можно задавать внутри SVG-файла, но если мы хотим, чтобы одно и то же изображение в разных условиях выглядело по-разному — стили внутри файла не годятся &mdash; нужно, чтобы векторное содержимое было доступно для внешних стилей.<!--more-->

Из всех способов вставки SVG для этого подходят всего два: иконочный шрифт или инлайновый SVG в HTML (удобнее всего делать это через <code>use</code>).

Какие стили оформления можно использовать для иконочных шрифтов?
Можно задать цвет, добавить тени и анимацию:

<p data-height="250" data-theme-id="4974" data-slug-hash="LnJEK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/LnJEK/'>LnJEK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Не так уж и много, по сравнению с возможностями обычного SVG.

Для SVG-изображений можно использовать SVG-градиенты и фильтры, например, размытие или тени. Также можно использовать в качестве обводки и заливки паттерны и изображения, а ещё можно красить отдельные части картинок и таким образом получать разноцветные иконки.

При вставке SVG через <code>use</code> иконки становятся доступны для стилей страницы, и всеми этими прекрасными возможностями можно управлять через внешний CSS.

Вот пример иконок с паттернами в качестве фона:

<p data-height="550" data-theme-id="4974" data-slug-hash="mfdIE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/mfdIE/'>SVG icons with patterns</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Пример немного диковат, но он хорошо показывает, что фоном может быть любая картинка. Паттерны заданы в коде страницы и подключены с помощью CSS.

Вот код деревянного паттерна:

```markup
<!-- Нужно задать размеры и Id, по которому будет вызываться паттерн -->
<pattern id="wood" width="400" height="400"
  patternUnits="userSpaceOnUse">
  <!-- Внутрь вставляется картинка для фона -->
  <image xlink:href="http://img-fotki.yandex.ru/get/6447/5091629.86/0_74298_17a84446_L.jpg"
  width="400" height="400">
</pattern>
```

В паттерн можно класть всё что угодно: комбинации фигур, объекты с градиентами, текст... Правда, есть подозрение, что сложные фоны могут плохо влиять на производительность страницы, но тестов не делала.

Подключаем паттерн:

```css
.icons--wood {
  fill: url(#wood);
}
```

Чтобы при наведении менять местами обводку и заливку, нужно добавить ещё пару строчек:

```css
.icons--wood {
  fill: url(#wood);
}
.icons--wood .icon:hover {
  fill: none;
  stroke: url(#wood);
}
```

Также можно делать интересные эффекты на основе обводки:

<p data-height="600" data-theme-id="4974" data-slug-hash="cmslA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/cmslA/'>SVG Icons with outlines</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Обводки могут быть пунктирными, для них можно использовать градиент или паттерн.


```css
/* Обычная обводка, по наведению меняет цвет */
.icons--stroke .icon {
  stroke: rgba(0, 0, 0, .5);
  stroke-width: 2;

  &:hover {
    stroke: skyblue;
  }
}

/* Пунктирная обводка, по наведению линия становится непрерывной */
.icons--dasharray .icon {
  stroke: rgba(0, 0, 0, .5);
  stroke-width: 2;
  stroke-dasharray: 10 5;
  fill: rgba(0, 0, 0, .1);

  &:hover {
    stroke-dasharray: 10 0;
  }
}

/* Обводка с градиентом */
.icons--gradient .icon {
  stroke-width: 3;
  stroke: url(#stripes);
}
```

Иконкам в последней строке в качестве обводки задан градиент, уходящий в прозрачность, почему-то не работает в последней опере.

С анимацией пуктирной обводки можно делать интересные штуки:

<p data-height="320" data-theme-id="4974" data-slug-hash="blKmc" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/blKmc/'>A little magic with stroke-dasharray</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>Нажмите Rerun если демо застыло.</i>

Не уверена, что эта анимация подходит для иконок (будет не очень хорошо, если иконки будут шевелиться или исчезать), но она может быть использована для эффектно появляющихся иллюстраций.

Примерный код:

```css
path {
  fill: none;
  /* В качестве обводки задан градиент */
  stroke: url(#stripes);
  stroke-width: 2;
  /* Исходное состояние обводки — длинные черточки с нулевыми пробелами */
  stroke-dasharray: 550 0;
  animation: dasharray 5s infinite alternate;
}

@keyframes dasharray {
  100% {
  	/* Черточки нулевой длины с длинными пробелами, линиия исчезнет */
    stroke-dasharray: 0 500;
  }
}
```

Следующий пример демонстрирует иконки с SVG-фильтрами:

<p data-height="550" data-theme-id="4974" data-slug-hash="kszeJ" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/kszeJ/'>SVG Icons with filters</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Размытие, тень, повторяющийся контур и внутренняя тень (её не очень хорошо видно).

Конечно, размытие врядли подойдет для иконок, но с ним можно придумать разные другие интересные штуки.

У фильтров есть недостаток: результатом наложения фильтров является растровое изображение, из-за чего картинки утрачивают способность тянуться без потерь в качестве и хуже выглядят на экранах с ретиной.

<b>UPD от 19 мая 2014:</b> фильтры хорошо выглядят на ретине, при условии, что они задаются SVG-элементам, а не HTML. Прошу прощения за неточность.

В примере ниже SVG-изображение разделено на несколько путей, что дает возможность обращаться к ним поотдельности. Здесь это используется чтобы задать элементам разные цвета и задержки анимации. При этом в дальнейшем фигура (в данном случае это группа путей) может быть использована целиком — таким образом можно получить не только монохромные иконки, но и разноцветные. Правда, при вставке такого объекта через <code>use</code> в нем перестанет работать анимация, но раскраска сохранится.

<p data-height="400" data-theme-id="4974" data-slug-hash="DixKv" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/DixKv/'>Path, nth-child and stroke-dasharray</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

В качестве заливки (или обводки) SVG-элементов удобно использовать <code>сurrentColor</code>. Это ключевое слово, обозначающее текущий цвет текста, и если задать его в качестве заливки (обводки) — элемент будет краситься вместе с окружающим текстом.

Задаем заливку:


```css
.icon {
  fill: currentColor;
}
```

Если потом для родительского элемента задать цвет текста


```css
A {
  color: crimson;
}
```

 фигура зальется этим же цветом. Очень удобно для ссылок по наведению и для страниц с несколькими темами оформления.

Пример:

<p data-height="500" data-theme-id="4974" data-slug-hash="xiLen" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xiLen/'>SVG and currentColor</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Интересно, что в SVG можно использовать далеко не все CSS-свойства, относительно полный список <a href="http://www.w3.org/TR/SVG11/styling.html#SVGStylingProperties">можно найти вот тут</a>.
Можно использовать <code>animation</code>, но <code>transition</code> работает странно и не во всех браузерах. CSS-градиенты использовать, к сожалению, нельзя. Трансформации работают.

Также перед использованием различных фильтров и эффектов нужно всегда проверять как они поддерживаются разными браузерами.

Из всего вышеизложенного можно сделать следующие выводы:

- самые широкие возможности для оформления дает инлайновый SVG;
- меньше возможностей, но более удобное подключение на страницу предоставляет иконочный шрифт. Существенный минус состоит в проблемах с поддержкой встраиваемых шрифтов в разных браузерах;
- если SVG-графика нужна только в одном стиле и нет необходимости управления через внешний CSS — лучше всего воспользоваться спрайтом.
