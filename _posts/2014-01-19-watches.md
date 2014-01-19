---
layout: default
title: Электронные часы. Css + Js.
type: post
---
С познавательно-развлекательной целью сделала электронные часы.

Показывают текущее время, меняют цвет, умеют подгоняться под размер окна браузера.
<!--more-->

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/urEYedUq/2"></iframe>


Цифры сделаны из cписков, каждая цифра - <code>ul</code>. Линии - <code>li</code>.
Острые концы линий - это треугольники с помощью <code>border</code> для <code>:before</code> и <code>:after</code> (<a href="/strelki-s-pomoshh-yu-svojstva-border">описание уголков есть тут</a>).

На гитхабе: <a href="https://github.com/yoksel/time">github.com/yoksel/time</a>.