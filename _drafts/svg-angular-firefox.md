---
layout: default
title: SVG + Angular - Firefox
type: post
image:
desc:

---

SVG удивительная технология, не в последнюю очередь благодаря оригинальным подводным камням.

Парочка свежих обнаружилась при взаимодействие SVG с Angular, причем проблемы возникали только в Firefox. Я решила зафиксировать их описание здесь: и другим на пользу, и себе на память.

<h5>Проблема № 1.</h5>

Дано: SVG-иконки, подключаемые через <code>use</code> в нужные места страницы. Конструкция работает как часы во всех современных браузерах, но тут приходит ангуляр и меняет <a href="http://www.w3.org/TR/html-markup/base.html"><code>base</code></a>. Во всех браузерах всё работает, кроме Firefox: в нем иконки исчезают, в случае, если ссылка в <code>base</code> не совпадает с адресом текущей страницы.

Демо (смотреть в Firefox):

<iframe class="frame--border" src="/assets/demo/svg-in-firefox/svg-no-base.html" style="width: 100%; height: 370px">
</iframe>

Про это даже есть <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=652991">баг</a> от 2011 года, но проблема до сих пор существует.

Решение: если добавить тегу SVG атрибут <code>xml:base</code>, соответствующий текущей странице, иконки начинают работать вне зависимости от ссылки в <code>base</code>.

<iframe class="frame--border" src="/assets/demo/svg-in-firefox/svg-has-base.html" style="width: 100%; height: 370px">
</iframe>



