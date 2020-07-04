---
layout: default
title: Background-blend-mode
type: post

tags: [blend-modes, patterns]

image: http://img-fotki.yandex.ru/get/6728/5091629.a0/0_83425_21180cd2_orig.png
desc: Режимы смешивания в Firefox 30 или новые приключения CSS-градиентов.

links:
- url: http://www.w3.org/TR/2014/CR-compositing-1-20140220/#background-blend-mode
  name: The background-blend-mode property
- url: http://blogs.adobe.com/webplatform/2014/06/12/background-blending-now-available-in-firefox-30/
  name: Background blending now available in Firefox 30
- url: http://bennettfeely.com/gradients/
  name: Gradients gallery
- url: http://dev.opera.com/articles/getting-to-know-css-blend-modes/
  name: Getting to know CSS Blend Modes
- url: /css-patterns/
  name: CSS-паттерны
- url: /new-patterns/
  name: Свежие CSS-паттерны
- url: /3d-and-gradients/
  name: СSS-градиенты и 3D
- url: http://prgssr.ru/development/sekrety-rezhimov-nalozheniya.html
  name: Секреты режимов наложения
- url: http://una.im/vintage-washout/
  name: CSS Image Effects #1: Vintage Washout
---

На этой неделе в <a href="https://developer.mozilla.org/en-US/Firefox/Releases/30">Firefox 30</a> было включено по умолчанию свойство <code>background-blend-mode</code>. Таким образом, Firefox стал третьим браузером, поддерживающим это свойство (два других — Opera и Chrome). Safari будет поддерживать это свойство в следующей версии, про планы IE мне ничего найти не удалось.
<!--more-->

<b>Внимание:</b> все демо в посте — действующие примеры без фолбеков. Для просмотра лучше всего воспользоваться последними версиями Chrome, Opera или Firefox.

Что делает это новое свойство и какие возможности оно нам дает?

<code>background-blend-mode</code> управляет режимами наложения слоев фона, заданного в  CSS.

Пример:

<p data-height="350" data-theme-id="4974" data-slug-hash="gftIl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/gftIl/'>gftIl</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<i>Наведите курсор на картинку, чтобы увидеть исходное изображение.</i>

<code>background-blend-mode</code> аналогичен режимам    наложения слоев в фотошопе, и список возможных значений свойства вам, скорее всего, покажется знакомым:

- normal
- multiply
- screen
- overlay
- darken
- lighten
- color-dodge
-  color-burn
- hard-light
- soft-light
- difference
- exclusion
- hue
-  saturation
- color
- luminosity

Как это работает?

Возьмем, к примеру, картинку с котиком и зададим её фоном:


```css
background: teal url(http://placekitten.com/250/200);
```

Для наложения слоев обязательное условие, чтобы слоев было больше одного. В нашем случае первым слоем является цвет (<code>teal</code>).

Теперь можно добавить режим наложения, например:


```css
background: teal url(http://placekitten.com/250/200);
background-blend-mode: hard-light;

```

Результат:

<p data-height="620" data-theme-id="4974" data-slug-hash="kGAsK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/kGAsK/'>kGAsK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Вы можете поиграться с режимами здесь или посмотреть их списком на одной странице <a href="http://codepen.io/yoksel/full/Kirkd/">вот тут</a>.

Слоев фона может быть больше двух, и для каждого слоя можно отдельно задавать режим наложения:


```css
background: teal url(http://placekitten.com/250/200);
background-blend-mode: hard-light, multiply, normal;

```

Фоны могут содержать не только изображения, но и градиенты, что позволяет делать разные интересные эффекты:

<p data-height="550" data-theme-id="4974" data-slug-hash="mJohl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/mJohl/'>mJohl</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Как можно использовать <code>background-blend-mode</code>?

Предположим, есть сайт в определенной цветовой гамме, и в дизайне нужно разместить несколько картинок:

<p data-height="650" data-theme-id="4974" data-slug-hash="AyLEs" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/AyLEs/'>background-blend-mode for usage in design</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Так картинки не очень вписываются в цветовую схему. Раньше чтобы тонировать изображения под цвет сайта, потребовалось бы открыть графический редактор и проделать эту операцию с каждой картинкой, но сейчас это можно сделать одной строчкой:


```css
background-blend-mode: luminosity;
```

Результат:

<p data-height="650" data-theme-id="4974" data-slug-hash="yCHuJ" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/yCHuJ/'>background-blend-mode for usage in design</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Способ имеет свои преимущества:

1. Экономит время — не нужно вручную красить картинки, используемые в дизайне. Особо пригодятся режимы наложения в прототипировании, когда картинки, скорее всего, ещё будут меняться.
2. Позволяет легко сделать эффект, когда при наведении картинка показывается в оригинальном цвете. При этом не нужно готовить два изображения и менять их по наведению курсора — достаточно одного.

А если потом изменится цветовая схема сайта — не нужно будет заново перекрашивать картинки под новую схему — всё произойдет само собой:

<p data-height="650" data-theme-id="4974" data-slug-hash="BuHLE" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/BuHLE/'>background-blend-mode for usage in design</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Правда, мне не удалось сделать плавную смену режимов наложения. Насколько я понимаю, они не анимируются. Но это можно обойти используя псевдоэлементы: через <code>:before</code> создается дублирующий слой с той же картинкой, и ему по наведению меняется прозрачность — это можно сделать плавно (пример справа):

<p data-height="400" data-theme-id="4974" data-slug-hash="FCLHx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/FCLHx/'>FCLHx</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Ещё один способ покрасить картинку в дизайне — подложить полосатый градиент:

<p data-height="650" data-theme-id="4974" data-slug-hash="ngjFd" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/ngjFd/'>background-blend-mode for usage in design</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Приятный бонус <code>background-blend-mode</code> — плавная деградация: если браузер не поддерживает режимы наложения, посетитель увидит обычную картинку. Может быть, она будет не очень вписана в цветовую схему, но это лучше чем ничего.

Интересно, что в некоторых режимах результат различается в зависимости от того, наложена ли картинка на цвет или цвет поверх картинки (слева картинка поверх цвета, справа наоборот):

<p data-height="550" data-theme-id="4974" data-slug-hash="rLygi" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/rLygi/'>Is it matter color on top or image on top?</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Наложение цвета на картинку позволяет получить более интересные результаты, похожие на цветовые фильтры, но этот вариант хуже с точки зрения деградации, потому что если режимы не сработают, на странице отобразится верхний слой — то есть заливка цветом.

С изображениями всё более-менее понятно, но вот для CSS-градиентов режимы наложения поистине открывают новые горизонты. Теперь слои градиентов могут не просто просвечивать друг под другом в областях полной или частичной прозрачности, но также они могут взаимодействовать с нижележащими слоями, образовуя новые сочетания. Делать такие градиенты безусловно сложнее, но и интереснее тоже.

Уже есть первая галерея с примерами: <a href="http://bennettfeely.com/gradients/">bennettfeely.com/gradients/</a>. Ниже на странице можно найти JS-фолбек и взвешивание одних и тех же градиентов, сделанных на CSS или в виде изображений различных форматов. CSS, конечно, выигрывает.

И даже если пока что не все браузеры позволяют использовать <code>background-blend-mode</code>, имеет смысл поинтересоваться какие из используемых вами изображений уже можно заменить CSS-паттернами, чтобы получить выигрыш в весе и производительности.

Вдохновившись примерами из галереи, я решила посмотреть что ещё можно сделать. Одно из забавных открытий — шахматная доска:

<p data-height="350" data-theme-id="4974" data-slug-hash="aKbjw" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/aKbjw/'>Easy way to make chess-board : )</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Без режимов наложения такое клеточки делать немного головоломно (хотя на основе такого градиента можно получить множество других). С режимами клеточки делаются всего из двух градиентов, третий понадобится в случае если клеточки должны быть не черно-белыми, а цветными.

Правда, паттерн не всегда хорошо поддаётся перекрашиванию, это некоторый недостаток способа. С другой стороны, в этом случае заливкой клеток может быть не только цвет, но и градиент, что в предыдущем способе было бы не очень удобно делать.

Ещё несколько градиентов:

<p data-height="350" data-theme-id="4974" data-slug-hash="HkJtq" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/HkJtq/'>Playing with background-blend-mode</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="IECap" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/IECap/'>Grassy waves</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="DGKvA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/DGKvA/'>Playing with background-blend-mode</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="eglhn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/eglhn/'>Sunny</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="aoikj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/aoikj/'>Rainbow eyes</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="sejrl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/sejrl/'>Lightblue</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="LvIrj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/LvIrj/'>Rainbow cells</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="cflrn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/cflrn/'>Water</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="vbwKF" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/vbwKF/'>vbwKF</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="xitbD" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/xitbD/'>Red</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="fDpwL" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/fDpwL/'>Radial gradients + background-blend-mode</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<p data-height="350" data-theme-id="4974" data-slug-hash="wCeDt" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/wCeDt/'>The Cicada background + background-blend-modes</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Можете отредактировать любой из них отключив режимы наложения и посмотреть что меняется (а также увидеть как выглядят паттерны в бразуерах без поддержки свойства), можете попробовать менять режимы местами, вписывать свои значения или менять цвет фона. Иногда в процессе таких экспериментов из одного паттерна получается ещё несколько.

<code>background-blend-mode</code> выглядит очень привлекательно, позволяя добавить немного магии фотошопа в привычный CSS.
