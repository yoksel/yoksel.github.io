---
title: Вариативные шрифты
image: '//css.yoksel.ru/assets/img/previews/variable-fonts.png'
desc: 'Вариативные шрифты — это новая страница в веб-типографике. Они уже достаточно хорошо поддерживаются браузерами, так что можно заняться изучением их возможностей и подготовиться к использованию в реальной жизни.'

tags: ['fonts']

links:
- url: https://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/
  name: Variable fonts, a new kind of font for flexible design (анонс от Adobe)
- url: https://opensource.googleblog.com/2016/09/introducing-opentype-font-variations.html
  name: Introducing OpenType Font Variations (анонс от Google)
- url: https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369
  name: Introducing OpenType Variable Fonts
- url: https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts/
  name: Introduction to variable fonts on the web
- url: https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604
  name: How to use variable fonts in the real world
- url: https://www.zeichenschatz.net/typografie/how-to-start-with-variable-fonts-on-the-web.html
  name: How to start with variable fonts on the web
- url: https://www.w3.org/TR/css-fonts-4/#font-variation-settings-def
  name: font-variation-settings
- url: https://docs.microsoft.com/ru-ru/typography/opentype/spec/otvaroverview
  name: OpenType Font Variations Overview
- url: https://docs.microsoft.com/ru-ru/typography/opentype/spec/dvaraxisreg#registered-axis-tags
  name: Registered axis tags
- url: https://www.w3.org/TR/css-fonts-3/#propdef-font-feature-settings
  name: font-feature-settings
- url: https://docs.microsoft.com/ru-ru/typography/opentype/spec/featuretags
  name: Feature tags
- url: https://docs.microsoft.com/ru-ru/typography/opentype/spec/featurelist
  name: Features listed alphabetically
- url: https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_ae
  name: Feature descriptions and implementations
- url: https://www.typotheque.com/articles/opentype_features_in_css
  name: OpenType features in CSS
- url: https://fontdrop.info/
  name: fontdrop.info
- url: https://wakamaifondue.com/
  name: wakamaifondue.com
---

Вариативные (или настраиваемые) шрифты — это, без преувеличения, новая страница в веб-типографике. Настраиваемые шрифты стали возможны благодаря совместным усилиям компаний Microsoft, Apple, Adobe и Google. Концепция была впервые представлена в сентябре 2016 года, вместе с релизом <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/">OpenType 1.8</a>.<!--more--> На самом деле, работы в этом направлении велись ещё в 90-х, но только широкое использование шрифтов в вебе дало этой идее вторую жизнь и бурное развитие.

На момент написания статьи вариативные шрифты уже достаточно хорошо поддерживаются приложениями (Photoshop, Illustrator) и <a href="https://caniuse.com/#feat=variable-fonts">браузерами</a> (Chrome, Edge, Safari, в Firefox пока за флагом и только на MacOS), а кроме того, выложено несколько свободно распространяемых демо-версий, следовательно, уже можно заняться изучением возможностей таких шрифтов и подготовиться к их использованию в реальной жизни.

Вариативные шрифты — это расширение формата OpenType, которое позволяет хранить все варианты начертаний в одном файле, а для переключения между ними использовать не только фиксированные шаги, но и промежуточные значения. Например, вместо привычных значений жирности вроде <code>100</code>, <code>400</code>, <code>700</code> можно будет задать <code>75</code> или <code>650</code>, и так же гибко можно настроить ширину символа от самого сжатого до самого широкого задав любое значение в предопределённом диапазоне, и всё это без загрузки дополнительных файлов:

<p data-height="550" data-theme-id="4974" data-slug-hash="pKwOWz" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Variable fonts variations" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/pKwOWz/">Variable fonts variations</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Шрифт: <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/KairosSans">KairosSans</a>

Возможности нового формата решают сразу две проблемы: во-первых, снимаются ограничения на количество доступных начертаний: они больше не требуют отдельных файлов, а количество сочетаний ограничивается только настройками шрифта и фантазией разработчика. Во-вторых, для получения любого количества разных начертаний на страницу достаточно будет подключить всего один файл, что позволит сэкономить трафик и быстрее показывать страницы пользователю.

Настройками шрифта можно управлять с помощью CSS.

<h2 id="properties-levels">Высокоуровневые и низкоуровневые CSS-свойства</h2>

Низкоуровневые — это <code>font-variation-settings</code> и <code>font-feature-settings</code>. Их значения состоят из списка пар имён и значений, перечисленных через запятую.

Пример кода:

```css
font-variation-settings: "wght" 1, "wdth" 200, "ital" 1, "opsz" 100;
font-feature-settings: "liga" on, "zero" on;
```

Высокоуровневые — это, например, <code>font-optical-sizing</code>, <code>font-variant-ligatures</code> и <code>font-variant-numeric</code>.

Пример кода:

```css
font-optical-sizing: 100; /* = font-variation-settings: "opsz" 100; */
font-variant-ligatures: common-ligatures; /* = font-feature-settings: "liga" on; */
font-variant-numeric: slashed-zero; /* = font-feature-settings: "zero" on; */
```

Высокоуровневые свойства удобнее, но поддержка браузерами оставляет желать лучшего, в то время как низкоуровневыми уже вполне можно пользоваться.

Для каждого низкоуровневого свойства есть наборы предопределённых настроек, но при создании шрифта есть возможность добавить свои, что позволяет автору добавить в шрифт любое количество кастомных вариаций и фич.

Доступные настройки шрифта можно воспринимать как API: можно управлять только теми, которые предопределил разработчик. Если какие-то настройки не предусмотрены, ими управлять нельзя. Следовательно, чтобы полноценно пользоваться шрифтом, нужно точно знать какие возможности в нём есть. Для определения свойств шрифта удобно использовать вот эти сервисы:

* <a href="https://fontdrop.info/">fontdrop.info</a> — покажет все возможности шрифта и позволит поиграться с ними вживую. Не поддерживает WOFF2.
* <a href="https://wakamaifondue.com/">wakamaifondue.com</a> — покажет возможности, живые примеры и предложит CSS. Так как он пытается показать примеры для всех настроек шрифта, на шрифтах с кучей символов и настроек страница может ощутимо тормозить. Поддерживает WOFF2.

Для экспериментов можно воспользоваться шрифтами, выложенными в открытый доступ:

* <a href="https://github.com/adobe-fonts/adobe-variable-font-prototype/releases">Adobe Variable Font Prototype</a>
* <a href="https://github.com/google/fonts/tree/master/ofl/amstelvaralpha">AmstelvarAlpha</a>
* <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/AvenirNext">AvenirNext</a>
* <a href="https://github.com/TypeNetwork/Decovar">Decovar</a>
* <a href="http://home.dootype.com/dt-jakob-variable-concept">dT Jakob Variable Concept</a>
* <a href="https://www.monotype.com/fonts/variable-fonts/">FF Meta Variable</a>
* <a href="http://koe.berlin/variablefont/">Gingham</a>
* <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/KairosSans">KairosSans</a>
* <a href="https://www.fontfabric.com/slovic/">Slovic</a>
* <a href="https://github.com/twardoch/varfonts-ofl/tree/master/VotoSerifGX-OFL">VotoSerif</a>

<h2 id="variation-settings">font-variation-settings</h2>

<a href="https://www.w3.org/TR/css-fonts-4/#font-variation-settings-def">Спецификация</a>

Свойство позволяет управлять вариациями шрифта, задавать как отрисовывается глиф (наклон, толщина линий, ширина символа). Исключение составляет <code>ital</code>, при котором могут заменяться глифы.

В значении свойства через запятую перечисляются названия вариаций и значения для них. Названия вариаций в кавычках, названия кастомных вариаций пишутся капсом.

Авторы шрифтов сами определяют диапазон доступных значений. Если задать непредусмотренное значение, оно округлится до ближайшего подходящего.

Значение по умолчанию: <code>normal</code> (шрифт выглядит как обычно, настройки не применяются).

Предопределённые вариации:

<code>ital</code> — курсив.

Пример кода:


```css
font-variation-settings: "ital" 1;
```

Демо:

<p data-height="350" data-theme-id="4974" data-slug-hash="aKLXWW" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="aKLXWW" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/aKLXWW/">aKLXWW</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Шрифт: <a href="https://www.monotype.com/fonts/variable-fonts/">FF Meta Variable</a>

Так как в курсиве глифы выглядят иначе, плавный переход от одного к другому затруднителен, поэтому здесь можно только включить или выключить свойство, задав <code>1</code> или <code>0</code>.

Также в этом демо можно увидеть как огругляются неподдерживаемые значения. Можно задать, например, <code>"ital" 0.5</code>, и оно приведётся к единице, а все меньшие значения — к нулю.

<code>slnt</code> — наклон.

Пример кода:


```css
font-variation-settings: "slnt" 1;
```

Демо:

<p data-height="350" data-theme-id="4974" data-slug-hash="OExqpy" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Slant" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/OExqpy/">Font Variation: Slant</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Шрифт: <a href="https://github.com/Monotype/Monotype_prototype_variable_fonts/tree/master/KairosSans">KairosSans</a>

По идее, <code>slnt</code> — это наклон, а не курсив, то есть глифы не меняются, но в некоторых шрифтах такое поведение демонстрирует <code>ital</code>. Для демо был выбран <b>KairosSans</b>, в котором <code>ital</code> ведёт себя как <code>slnt</code>.

В отличие от <code>ital</code>, наклон может изменяться плавно.

<code>opsz</code> — оптический размер.

Пример кода:


```css
font-variation-settings: "optz" 10;
```

Демо:

<p data-height="350" data-theme-id="4974" data-slug-hash="bKoJbr" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Optical size" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/bKoJbr/">Font Variation: Optical size</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Шрифт: <a href="https://github.com/google/fonts/tree/master/ofl/amstelvaralpha">AmstelvarAlpha</a>

Параметр управляет толщиной тонких линий, их отображение может быть критически важным для читабельности при малых размерах шрифта:

<p data-height="400" data-theme-id="4974" data-slug-hash="oyGOWb" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Optical size for small font-size" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/oyGOWb/">Font Variation: Optical size for small font-size</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Здесь хорошо видно, что для обычного текста лучше задавать значение <code>opsz</code> поменьше, а для заголовков можно задать и побольше, потому что на крупных размерах шрифта тонкие линии будут видны в любом случае.

<code>wdth</code> — ширина

Пример кода:


```css
font-variation-settings: "wdth" 150;
```

Демо:

<p data-height="350" data-theme-id="4974" data-slug-hash="gKGJjE" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Width" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/gKGJjE/">Font Variation: Width</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Шрифт: <a href="http://koe.berlin/variablefont/">Gingham</a>

В отличие от простой трансформации, при изменении ширины вертикальные линии сохраняют свою толщину, соотношения линий остаются прежними, и шрифт не выглядит искажённым:

<p data-height="450" data-theme-id="4974" data-slug-hash="qKPGgo" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation Width vs Transform Scale" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/qKPGgo/">Font Variation Width vs Transform Scale</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Управление шириной глифа доступно во многих шрифтах.

<code>wght</code> — вес

Пример кода:


```css
font-variation-settings: "wght" 900;
```

Демо:

<p data-height="378" data-theme-id="4974" data-slug-hash="KeXjZv" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Variation: Weight" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KeXjZv/">Font Variation: Weight</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Шрифт: <a href="https://www.monotype.com/fonts/variable-fonts/">FF Meta Variable</a>

Ещё одна настройка, которая встречается во многих шрифтах. Она позволяет не только обойтись одним файлом для любых вариантов жирности, но также гибко управлять её значением.

Полный список предопределённых вариаций можно найти в <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/dvaraxisreg#registered-axis-tags">спецификации OpenType</a>, там же есть подробное описание каждой из них.

Как уже упоминалось выше, при разработке шрифта авторам не обязательно ограничиваться только вариациями из спецификации, они могут добавлять свои, что позволяет делать много интересного.

Например, у шрифта <a href="https://github.com/TypeNetwork/Decovar">Decovar</a> есть целых 15 настроек, из которых только одна стандартная — управление весом линий, в итоге из одного шрифта можно извлечь огромное количество вариантов:

<p data-height="379" data-theme-id="4974" data-slug-hash="WyZVQd" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Decovar is beautiful ❤️" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/WyZVQd/">Decovar is beautiful ❤️</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

В этом случае каждый отдельный стиль текста может задаваться набором значений:


```css
font-variation-settings: "BLDA" 913.8, "BLDB" 162.8, "SKLB" 1000;
```

Обратите внимание, что названия кастомных меток пишутся капсом.

А у <a href="https://www.fontfabric.com/slovic/">Slovic</a> — всего одна настройка, но она позволяет плавно переключаться между предустановленными стилями:

<p data-height="350" data-theme-id="4974" data-slug-hash="KeXjbZ" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Custom Variation: Style" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/KeXjbZ/">Font Custom Variation: Style</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Значения вариаций можно <a href="https://codepen.io/yoksel/full/jKaaPq/">анимировать</a>.

<h2 id="feature-settings">font-feature-settings</h2>

<a href="https://www.w3.org/TR/css-fonts-3/#propdef-font-feature-settings">Спецификация</a>

Эта настройка позволяет включить или выключить некоторые возможности шрифта, например, лигатуры или отображение цифр в старом стиле:

<p data-height="500" data-theme-id="4974" data-slug-hash="wXPBqp" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Font Feature Settings" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/wXPBqp/">Font Feature Settings</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Фичи из демо:

* <code>liga</code> — лигатуры (когда для удобочитаемости два символа отображаются как один)
* <code>smcp</code> — отображение строчных как маленьких заглавных
* <code>frac</code> — отображение дробей
* <code>onum</code> — цифры в старом стиле
* <code>zero</code> — перечеркнутый ноль

Если фичу нужно включить, достаточно её имени, например:


```css
font-feature-settings: "smcp", "onum";
```

Хотя запись типа <code>"smcp" on</code> помогает лучше понять что происходит в коде.

Если же нужно выключить, обязательно добавлять <code>off</code>:


```css
font-feature-settings: "smcp" off, "onum" off;
```

Некоторые фичи включены по умолчанию, например, разные виды лигатур: <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_ae#a-nameclig-idcligatag-clig" title="Contextual Ligatures">clig</a>, <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_ko#a-nameliga-idligaatag-liga" title="Standard Ligatures">liga</a> и <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/features_pt#tag-rlig" title="Required Ligatures">rlig</a>. Подробнее можно почитать в <a href="https://www.w3.org/TR/css-fonts-3/#default-features">спецификации</a>.

Здесь приведено лишь небольшое количество возможностей, полный список с подробными описаниями есть в <a href="https://docs.microsoft.com/ru-ru/typography/opentype/spec/featurelist">спецификации OpenType</a>.

Много примеров с кодом можно найти здесь: <a href="https://www.typotheque.com/articles/opentype_features_in_css">OpenType features in CSS</a>.

Как уже говорилось выше, <code>font-feature-settings</code> — это низкоуровневая настройка. Спецификация рекомендует, по возможности, использовать высокоуровневые варианты, например:

* <code>font-variant-ligatures</code> для управления лигатурами (<a href="https://www.w3.org/TR/css-fonts-3/#font-variant-ligatures-prop">спецификация</a>)
* <code>font-variant-caps</code> для приведения строчных к заглавным (<a href="https://www.w3.org/TR/css-fonts-3/#font-variant-caps-prop">спецификация</a>)
* <code>font-variant-numeric</code> для управления отображением цифр (<a href="https://www.w3.org/TR/css-fonts-3/#font-variant-numeric-prop">спецификация</a>)

Больше вариантов можно найти в разделе спецификации <a href="https://www.w3.org/TR/css-fonts-3/#font-rend-props">Font Feature Properties</a>.

<code>font-feature-settings</code> может использоваться для получения более или менее радикального варианта шрифта:

<p data-height="350" data-theme-id="4974" data-slug-hash="oyoEzw" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="Slovic with variations & features" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/oyoEzw/">Slovic with variations & features</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Ещё интереснее распорядился фичами автор шрифта <a href="http://home.dootype.com/dt-jakob-variable-concept">dT Jakob Variable Concept</a>: он сделал не только вариативный шрифт, но и слоёный, и стиль для каждого из слоёв включается с помощью лигатур:

<p data-height="350" data-theme-id="4974" data-slug-hash="dKZdRV" data-default-tab="result" data-user="yoksel" data-embed-version="2" data-pen-title="dKZdRV" class="codepen">See the Pen <a href="https://codepen.io/yoksel/pen/dKZdRV/">dKZdRV</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Не уверена, что это правильное использование лигатур, но вариант, безусловно, интересный.

<h2 id="usage">Использование в реальной жизни</h2>

В данный момент не все браузеры поддерживают управление вариативными шрифтами, поэтому помимо настраиваемого шрифта на страницу придётся подключать обычные. Это <a href="https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604">предлагается</a> делать следующим образом:


```css
@font-face {
  font-family: 'MyFontVariable';
  src: url('source-sans-variable.woff2') format('woff2');
  font-weight: 1 999;
}

@font-face {
  font-family: 'MyFont';
  src: url('source-sans-regular.woff2') format('woff2'),
         url('source-sans-regular.woff') format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'MyFont';
  src: url('source-sans-black.woff2') format('woff2'),
         url('source-sans-black.woff') format('woff');
  font-weight: 900;
}
```

Затем с помощью <code>@supports</code> определяется поддержка настроек браузерами и задаётся нужный шрифт:


```css
html {
  font-family: 'MyFont', sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'MyFontVariable', sans-serif;
}
}
```

Настраиваемые шрифты — тема богатая, и заниматься ею можно до бесконечности. По моим ощущениям, описанные в статье вопросы — только верхушка айсберга.

Я совсем недавно начала погружаться в тему, так что могла допустить ошибки и неточности. Сообщите мне о них, пожалуйста, если найдутся.

