---
layout: default
title: Стрелки с помощью свойства border
categories:
- Border
- Css
tags: []
status: publish
type: post
published: true
---
С помощью <code>border</code> можно легко делать стрелочки разного размера и в разных направлениях.

Чтобы понять общий принцип, возьмем див нулевого размера, сделаем ему толстую рамку и раскрасим её в разные цвета<!--more-->:

<iframe class="jsbin" style="height: 250px" src="http://jsbin.com/aKUZaB/1/embed?css,output"></iframe>

Теперь достаточно задать <code>transparent</code> вместо цветов, которые не нужны, и обнулить <code>border</code> напротив нужного уголка, чтобы он не влиял на ширину фигуры:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/aKUZaB/2/embed?css,output"></iframe>

Обнулив <code>border</code> не с одной стороны, а с двух, можно получить вот такие уголки:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/aKUZaB/3/embed?css,output"></iframe>

Аналогичный эффект можно получить, задав цвет двум сторонам, находящимся рядом:

<iframe class="jsbin" style="height: 300px" src="http://jsbin.com/aKUZaB/8/embed?css,output"></iframe>

При этом в середине длинной стороны может быть небольшая неровность, в отличие от первого способа.

А если задать цвет с трёх сторон, получатся флажки : )

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/aKUZaB/13/embed?output"></iframe>

Но вернемся к стрелкам. Сочетая <code>border</code> и псевдоэлементы можно получить вот такие варианты:

<iframe class="jsbin" style="height: 400px" src="http://jsbin.com/aKUZaB/5/embed?css,output"></iframe>

Большим преимуществом способа является отсутствие изображений, что позволяет в любой момент изменить цвет и размер стрелки.

А ещё таким способом легко делать ленточки:

<iframe class="jsbin" style="height: 200px" src="http://jsbin.com/oVagUqa/2/embed?output"></iframe>
