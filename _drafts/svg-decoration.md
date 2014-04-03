---
layout: default
title: Оформление SVG c помощью CSS и фильтров.
type: post
image: 
desc: 

links:
- url: http://link.com
  name: Name

---

Внешний вид SVG-элементам можно задавать как с помощью CSS, так и через SVG-фильтры. 

Стили, и даже скрипты, можно задавать прямо внутри SVG-файла, но если мы хотим, чтобы один и тот же файл в разных окружениях выглядел по-разному - стили внутри того же файла не годятся - нужно, чтобы SVG был доступен для внешних стилей.<!--more-->

Из всех способов вставки SVG для этого подходят всего два: использование в виде шрифта и через <code>use</code>.

Что можно сделать со шрифтом? Можно задать цвет, добавить тени и анимацию:

<p data-height="312" data-theme-id="4974" data-slug-hash="LnJEK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/yoksel/pen/LnJEK/'>LnJEK</a> by yoksel (<a href='http://codepen.io/yoksel'>@yoksel</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


Но если вставлять SVG через <code>use</code>, возможности стилизации становятся значительно шире. Например, можно красить отдельные части изображения, а также использовать градиенты, размытие и 


---------

SVG-фильтры для шрифта???
