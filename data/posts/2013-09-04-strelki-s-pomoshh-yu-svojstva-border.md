---
title: Стрелки с помощью свойства border

tags: [borders, draw-on-css]

description: С помощью border можно легко делать стрелочки разного размера и в разных направлениях.
---

С помощью <code>border</code> можно легко делать стрелочки разного размера и в разных направлениях.

Чтобы понять общий принцип, возьмем див нулевого размера, сделаем ему толстую рамку и раскрасим её в разные цвета: <!--more-->

<iframe class="live-snippet" style="height: 250px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_1.html?css"></iframe>

Теперь достаточно задать <code>transparent</code> вместо цветов, которые не нужны, и обнулить <code>border</code> напротив нужного уголка, чтобы он не влиял на ширину фигуры:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_2.html?css"></iframe>

Обнулив <code>border</code> не с одной стороны, а с двух, можно получить вот такие уголки:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_3.html?css"></iframe>

Аналогичный эффект можно получить, задав цвет двум сторонам, находящимся рядом:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_4.html?css"></iframe>

При этом в середине длинной стороны может быть небольшая неровность, в отличие от первого способа.

А если задать цвет с трёх сторон, получатся флажки : )

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_5.html?output"></iframe>

Но вернемся к стрелкам. Сочетая <code>border</code> и псевдоэлементы можно получить вот такие варианты:

<iframe class="live-snippet" style="height: 450px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_6.html?output"></iframe>

Большим преимуществом способа является отсутствие изображений, что позволяет в любой момент изменить цвет и размер стрелки.

А ещё таким способом легко делать ленточки:

<iframe class="live-snippet" style="height: 200px" src="../assets/demo/strelki-s-pomoshh-yu-svojstva-border/demo_7.html?output"></iframe>
