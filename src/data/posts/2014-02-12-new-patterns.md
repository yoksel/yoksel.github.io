---
layout: default
title: Свежие CSS-паттерны
type: post

tags: [gradients, experiments, patterns]

image: http://img-fotki.yandex.ru/get/9322/5091629.9b/0_7efbf_83aa6b97_L.png
desc: Неожиданно увлеклась темой CSS-паттернов и сделала несколько новых. Меня интересовало&#58; можно ли сделать плавные волны и спирали, получится ли имитировать узор из цветной бумаги и как сделать почтовую марку не используя изображения.

---

Неожиданно увлеклась темой CSS-паттернов и сделала несколько новых.
Меня интересовало: можно ли сделать плавные волны и спирали, получится ли имитировать узор из цветной бумаги и как сделать почтовую марку не используя изображения.<!--more-->

Надо сказать, что без SCSS эти паттерны были бы практически невозможны, так что Codepen с препроцессорами открыл для меня новые горизонты.

При создании паттернов ни одной картинки не пострадало.

<b>Волны</b>. Рюшки тоже сделаны градиентом!

<p data-height="350" data-theme-id="0" data-slug-hash="mgakB" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/mgakB'>Thinking of Sea</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<b>Сложный паттерн</b> из кучи деталек. По-моему, не пригоден для реальной жизни:

<p data-height="350" data-theme-id="0" data-slug-hash="dezAt" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/dezAt'>Css Pattern</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Удивительно, но с помощью градиентов можно делать <b>завитки</b>. Я уже пробовала их делать <a href="/gipnoshtuki/">другими способами</a>, получалось так себе, а тут полноценные красивые спирали. Не верю своим глазам : )

<p data-height="350" data-theme-id="0" data-slug-hash="mEakp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/mEakp'>Frosty Spirals</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<b>Цветная бумага:</b>

<p data-height="350" data-theme-id="0" data-slug-hash="iAerl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/iAerl'>Colored paper</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<b>Почтовая марка</b>, края которой сделаны теми же градиентами. По сути — обратный вариант рюшек. Удивительно просто и изящно.
Пробовала делать с <code>border-image</code>, но с градиентами ничего полезного не вышло.
Картинки+<code>border-image</code> должны сработать, я не пробовала, потому что моей целью были градиенты.
Плюс градиентов в данном случае состоит в том, что можно без проблем менять цвет и размер фигурной рамки, хотя для этого потребуется исходник в Sass.
По-моему, здорово получилось:

<p data-height="350" data-theme-id="0" data-slug-hash="GLsfA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/GLsfA'>Postage stamp</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Градиенты невероятны, рекомендую познакомиться с ними поближе, если ещё не.
