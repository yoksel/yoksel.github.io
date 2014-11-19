---
layout: default
title: SVG + Angular - Firefox
type: post
image:
desc:

---

SVG удивительная технология, не в последнюю очередь из-за количества подводных камней.

Парочку свежих обнаружилось при взаимодействие SVG с Angular, причем проблемы возникали только в Firefox. Я решила зафиксировать их описание здесь: и другим на пользу, и себе на память.

<h5>Проблема № 1.</h5>

Дано: SVG-иконки с подключением в нужные места страницы через <code>use</code>. Конструкция работает как часы во всех современных браузерах, но тут приходит ангуляр и меняет <a href="http://www.w3.org/TR/html-markup/base.html"><code>base</code></a>. Во всех браузерах всё работает, кроме Firefox: в нем иконки исчезают, в случае, если ссылка в <code>base</code> не совпадает с адресом текущей страницы.

Демо (смотреть в Firefox):

<p data-height="600" data-theme-id="4974" data-slug-hash="bNbMPR" data-default-tab="result" data-user="yoksel" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/bNbMPR/'>bNbMPR</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


Про это даже есть схожий <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=652991">баг</a> от 2011 года, но до сих пор ничего не изменилось.

Решение: если добавить тегу SVG атрибут <code>xml:base</code>, соответствующий текущей странице, иконки начинают работать вне зависимости от ссылки в <code>base</code>.



